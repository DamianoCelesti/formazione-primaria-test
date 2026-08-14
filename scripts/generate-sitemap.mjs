import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..");

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

const outputPath = path.join(
    projectRoot,
    "public",
    "sitemap.xml",
);

const baseUrl =
    "https://damianocelesti.github.io/formazione-primaria-test";

function readFile(filePath) {
    if (!fs.existsSync(filePath)) {
        throw new Error(`File non trovato: ${filePath}`);
    }

    return fs.readFileSync(filePath, "utf8");
}

function extractIds(sourceCode) {
    return [
        ...sourceCode.matchAll(
            /\bid\s*:\s*["']([^"']+)["']/g,
        ),
    ].map((match) => match[1]);
}

function escapeXml(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&apos;");
}

function createSitemap(urls) {
    const entries = urls
        .map(
            (url) => `  <url>
    <loc>${escapeXml(url)}</loc>
  </url>`,
        )
        .join("\n");

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}

const studySource = readFile(studyTopicsPath);
const simulationsSource = readFile(
    simulationsPath,
);

const studyTopicIds =
    extractIds(studySource);

const simulationIds =
    extractIds(simulationsSource);

const urls = [
    `${baseUrl}/`,
    `${baseUrl}/studio`,
    ...studyTopicIds.map(
        (id) => `${baseUrl}/studio/${id}`,
    ),
    ...simulationIds.map(
        (id) => `${baseUrl}/simulazioni/${id}`,
    ),
];

const uniqueUrls = [...new Set(urls)];

fs.mkdirSync(path.dirname(outputPath), {
    recursive: true,
});

fs.writeFileSync(
    outputPath,
    createSitemap(uniqueUrls),
    "utf8",
);

console.log(
    `Sitemap generata: ${uniqueUrls.length} URL`,
);

console.log(
    `- Argomenti di studio: ${studyTopicIds.length}`,
);

console.log(
    `- Simulazioni: ${simulationIds.length}`,
);

console.log(`- File: ${outputPath}`);