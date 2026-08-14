import fs from "node:fs";
import path from "node:path";
import {
  fileURLToPath,
  pathToFileURL,
} from "node:url";

import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..");

const distPath = path.join(
  projectRoot,
  "dist",
);

const templatePath = path.join(
  distPath,
  "index.html",
);

const studyTopicsPath = path.join(
  projectRoot,
  "src",
  "data",
  "studyTopics.js",
);

const simulationsPath = path.join(
  projectRoot,
  "src",
  "data",
  "simulations.js",
);

const SITE_URL =
  "https://damianocelesti.github.io/formazione-primaria-test";

const BASE_PATH =
  "/formazione-primaria-test";

function readFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(
      `File non trovato: ${filePath}`,
    );
  }

  return fs.readFileSync(
    filePath,
    "utf8",
  );
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function encodePathSegment(value) {
  return encodeURIComponent(value);
}

function getStudyCssHref() {
  const assetsPath = path.join(
    distPath,
    "assets",
  );

  if (!fs.existsSync(assetsPath)) {
    return null;
  }

  const studyCss = fs
    .readdirSync(assetsPath)
    .find(
      (fileName) =>
        /^study-[^/]+\.css$/.test(
          fileName,
        ),
    );

  if (!studyCss) {
    return null;
  }

  return `${BASE_PATH}/assets/${studyCss}`;
}

function addStylesheet(
  html,
  href,
) {
  if (
    !href ||
    html.includes(`href="${href}"`)
  ) {
    return html;
  }

  return html.replace(
    "</head>",
    `  <link rel="stylesheet" href="${href}" />\n</head>`,
  );
}

function applySeo(
  html,
  {
    title,
    description,
    canonical,
  },
) {
  let output = html;

  output = output.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(title)}</title>`,
  );

  output = output.replace(
    /<meta\s+name=["']description["'][^>]*>/i,
    `<meta name="description" content="${escapeHtml(
      description,
    )}" />`,
  );

  output = output.replace(
    /<link\s+rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${escapeHtml(
      canonical,
    )}" />`,
  );

  return output;
}

function injectRoot(
  html,
  markup,
) {
  const rootPattern =
    /<div\s+id=["']root["']\s*><\/div>/i;

  if (!rootPattern.test(html)) {
    throw new Error(
      "Elemento #root non trovato nel dist/index.html.",
    );
  }

  return html.replace(
    rootPattern,
    `<div id="root" data-prerendered="true">${markup}</div>`,
  );
}

function writeRoutePage(
  route,
  html,
) {
  const cleanRoute = route
    .replace(/^\/+|\/+$/g, "");

  const directory = cleanRoute
    ? path.join(
        distPath,
        ...cleanRoute.split("/"),
      )
    : distPath;

  fs.mkdirSync(
    directory,
    { recursive: true },
  );

  fs.writeFileSync(
    path.join(
      directory,
      "index.html",
    ),
    html,
    "utf8",
  );
}

async function loadStudyTopics() {
  const source =
    readFile(studyTopicsPath);

  const transformed =
    source.replace(
      /import\s+([A-Za-z_$][\w$]*)\s+from\s+["']([^"']+\.md)(?:\?[^"']*)?["'];?/g,
      (
        _match,
        variableName,
        importPath,
      ) => {
        const absoluteMarkdownPath =
          path.resolve(
            path.dirname(
              studyTopicsPath,
            ),
            importPath,
          );

        return `const ${variableName} = ${JSON.stringify(
          absoluteMarkdownPath,
        )};`;
      },
    );

  if (
    /^\s*import\s/m.test(
      transformed,
    )
  ) {
    throw new Error(
      "studyTopics.js contiene import non gestiti dal prerender.",
    );
  }

  const dataUrl =
    `data:text/javascript;base64,${Buffer.from(
      transformed,
      "utf8",
    ).toString("base64")}`;

  const module =
    await import(dataUrl);

  if (
    !Array.isArray(
      module.default,
    )
  ) {
    throw new Error(
      "studyTopics.js non esporta un array.",
    );
  }

  return module.default;
}

async function loadSimulations() {
  const module =
    await import(
      `${pathToFileURL(
        simulationsPath,
      ).href}?prerender=${Date.now()}`
    );

  if (
    !Array.isArray(
      module.default,
    )
  ) {
    throw new Error(
      "simulations.js non esporta un array.",
    );
  }

  return module.default;
}

function renderMarkdown(markdown) {
  return renderToStaticMarkup(
    React.createElement(
      ReactMarkdown,
      {
        remarkPlugins: [
          remarkGfm,
        ],
      },
      markdown,
    ),
  );
}

function renderStudyIndex(
  topics,
) {
  const groups = new Map();

  for (const topic of topics) {
    const groupName =
      topic.areaTitle ??
      "Argomenti";

    if (!groups.has(groupName)) {
      groups.set(
        groupName,
        [],
      );
    }

    groups
      .get(groupName)
      .push(topic);
  }

  const sections = [
    ...groups.entries(),
  ]
    .map(
      ([areaTitle, areaTopics]) => {
        const cards = areaTopics
          .map(
            (topic) => `
              <article class="study-topic-card">
                <div class="study-topic-card__content">
                  <h3>${escapeHtml(
                    topic.title,
                  )}</h3>
                  <p>${escapeHtml(
                    topic.description ??
                    "",
                  )}</p>
                </div>
                <a href="${BASE_PATH}/studio/${encodePathSegment(
                  topic.id,
                )}">
                  Studia
                </a>
              </article>`,
          )
          .join("");

        return `
          <section class="study-area-section">
            <h2>${escapeHtml(
              areaTitle,
            )}</h2>
            <div class="study-topic-list">
              ${cards}
            </div>
          </section>`;
      },
    )
    .join("");

  return `
    <main class="study-page">
      <div class="study-container">
        <nav
          class="study-topic-navigation"
          aria-label="Navigazione area studio"
        >
          <a href="${BASE_PATH}/">
            ← Torna alla home
          </a>
        </nav>

        <header class="study-header">
          <h1>
            Preparazione Test Scienze della Formazione Primaria 2026
          </h1>

          <p>
            Studia la teoria per il test di Scienze della Formazione Primaria 2026:
            italiano, logica, storia, geografia, matematica e scienze.
          </p>
        </header>

        ${sections}
      </div>
    </main>`;
}

function renderStudyTopic(
  topic,
  topics,
) {
  const markdown =
    readFile(topic.content);

  const article =
    renderMarkdown(markdown);

  const index =
    topics.findIndex(
      (currentTopic) =>
        currentTopic.id ===
        topic.id,
    );

  const previousTopic =
    index > 0
      ? topics[index - 1]
      : null;

  const nextTopic =
    index >= 0 &&
    index < topics.length - 1
      ? topics[index + 1]
      : null;

  const previousLink =
    previousTopic
      ? `<a href="${BASE_PATH}/studio/${encodePathSegment(
          previousTopic.id,
        )}">← ${escapeHtml(
          previousTopic.title,
        )}</a>`
      : "";

  const nextLink =
    nextTopic
      ? `<a href="${BASE_PATH}/studio/${encodePathSegment(
          nextTopic.id,
        )}">${escapeHtml(
          nextTopic.title,
        )} →</a>`
      : "";

  return `
    <main class="study-page">
      <div class="study-container study-container--article">
        <nav
          class="study-topic-navigation"
          aria-label="Navigazione area studio"
        >
          <a href="${BASE_PATH}/studio">
            ← Area studio
          </a>
          <a href="${BASE_PATH}/">
            Home
          </a>
        </nav>

        <article class="study-article">
          ${article}
        </article>

        ${
          previousTopic ||
          nextTopic
            ? `<nav
                class="study-topic-navigation"
                aria-label="Navigazione tra gli argomenti"
              >
                ${previousLink}
                ${nextLink}
              </nav>`
            : ""
        }

        <div class="study-article-footer">
          <a href="${BASE_PATH}/studio">
            ← Torna agli argomenti
          </a>
        </div>
      </div>
    </main>`;
}

function renderSimulation(
  simulation,
) {
  return `
    <main class="quiz-page">
      <div class="quiz-container">
        <h1 class="quiz-title">
          ${escapeHtml(
            simulation.title ??
            `Simulazione ${simulation.number ?? ""}`,
          )}
        </h1>

        <p>
          Esercitati gratuitamente con una simulazione del test di ammissione
          a Scienze della Formazione Primaria 2026.
        </p>

        <p>
          La simulazione interattiva viene caricata automaticamente.
        </p>

        <div class="quiz-actions">
          <a href="${BASE_PATH}/">
            ← Torna alla home
          </a>
        </div>
      </div>
    </main>`;
}

function buildPage(
  template,
  {
    title,
    description,
    canonicalPath,
    markup,
    stylesheet = null,
  },
) {
  let html = applySeo(
    template,
    {
      title,
      description,
      canonical:
        `${SITE_URL}${canonicalPath}`,
    },
  );

  html = addStylesheet(
    html,
    stylesheet,
  );

  html = injectRoot(
    html,
    markup,
  );

  return html;
}

async function main() {
  const template =
    readFile(templatePath);

  const studyTopics =
    await loadStudyTopics();

  const simulations =
    await loadSimulations();

  const studyCssHref =
    getStudyCssHref();

  const studyTitle =
    "Preparazione Test Scienze della Formazione Primaria 2026 | Teoria";

  const studyDescription =
    "Studia la teoria per il test di Scienze della Formazione Primaria 2026: italiano, logica, storia, geografia, matematica e scienze.";

  writeRoutePage(
    "/studio",
    buildPage(
      template,
      {
        title:
          studyTitle,
        description:
          studyDescription,
        canonicalPath:
          "/studio",
        markup:
          renderStudyIndex(
            studyTopics,
          ),
        stylesheet:
          studyCssHref,
      },
    ),
  );

  for (
    const topic of studyTopics
  ) {
    if (
      !topic.id ||
      !topic.title ||
      !topic.content
    ) {
      throw new Error(
        "Argomento di studio incompleto in studyTopics.js.",
      );
    }

    const description =
      topic.description ??
      `Studia ${topic.title} per prepararti al test di ammissione a Scienze della Formazione Primaria 2026.`;

    const route =
      `/studio/${encodePathSegment(
        topic.id,
      )}`;

    writeRoutePage(
      route,
      buildPage(
        template,
        {
          title:
            `${topic.title} | Test Scienze della Formazione Primaria 2026`,
          description,
          canonicalPath:
            route,
          markup:
            renderStudyTopic(
              topic,
              studyTopics,
            ),
          stylesheet:
            studyCssHref,
        },
      ),
    );
  }

  for (
    const simulation of simulations
  ) {
    if (!simulation.id) {
      throw new Error(
        "Simulazione senza id in simulations.js.",
      );
    }

    const simulationTitle =
      simulation.title ??
      `Simulazione ${simulation.number ?? ""}`;

    const route =
      `/simulazioni/${encodePathSegment(
        simulation.id,
      )}`;

    writeRoutePage(
      route,
      buildPage(
        template,
        {
          title:
            `${simulationTitle} | Test Scienze della Formazione Primaria 2026`,
          description:
            "Esercitati gratuitamente con una simulazione del test di ammissione a Scienze della Formazione Primaria 2026.",
          canonicalPath:
            route,
          markup:
            renderSimulation(
              simulation,
            ),
        },
      ),
    );
  }

  console.log("");
  console.log(
    "Prerender SEO completato.",
  );
  console.log(
    `- Area studio: 1 pagina`,
  );
  console.log(
    `- Argomenti: ${studyTopics.length} pagine`,
  );
  console.log(
    `- Simulazioni: ${simulations.length} pagine`,
  );
  console.log(
    `- Totale HTML disponibili con la home: ${
      2 +
      studyTopics.length +
      simulations.length
    }`,
  );
}

main().catch(
  (error) => {
    console.error("");
    console.error(
      "Errore durante il prerender SEO:",
    );
    console.error(error);
    process.exitCode = 1;
  },
);
