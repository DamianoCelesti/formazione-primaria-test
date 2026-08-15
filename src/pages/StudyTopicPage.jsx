import { useEffect, useState } from "react";
import { Link } from "react-router";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../styles/study.css";

function StudyTopicPage({
    topic,
    topics,
    onBackToStudy,
    onBackHome,
}) {
    const [content, setContent] =
        useState("");

    const [isLoading, setIsLoading] =
        useState(true);

    const [loadError, setLoadError] =
        useState(false);

    useEffect(() => {
        if (!topic?.content) {
            setContent("");
            setIsLoading(false);
            setLoadError(true);

            return;
        }

        const controller =
            new AbortController();

        async function loadContent() {
            setIsLoading(true);
            setLoadError(false);
            setContent("");

            try {
                const response = await fetch(
                    topic.content,
                    {
                        signal:
                            controller.signal,
                    },
                );

                if (!response.ok) {
                    throw new Error(
                        `Errore HTTP ${response.status}`,
                    );
                }

                const markdown =
                    await response.text();

                setContent(markdown);
            } catch (error) {
                if (
                    error.name !==
                    "AbortError"
                ) {
                    console.error(
                        "Errore durante il caricamento dell'argomento:",
                        error,
                    );

                    setLoadError(true);
                }
            } finally {
                if (
                    !controller.signal.aborted
                ) {
                    setIsLoading(false);
                }
            }
        }

        loadContent();

        return () => {
            controller.abort();
        };
    }, [topic?.content]);

    if (!topic) {
        return null;
    }

    const currentTopicIndex =
        topics.findIndex(
            (currentTopic) =>
                currentTopic.id === topic.id,
        );

    const previousTopic =
        currentTopicIndex > 0
            ? topics[currentTopicIndex - 1]
            : null;

    const nextTopic =
        currentTopicIndex >= 0 &&
            currentTopicIndex <
            topics.length - 1
            ? topics[currentTopicIndex + 1]
            : null;

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    function getImageSrc(src) {
        if (!src) {
            return "";
        }

        if (
            src.startsWith("http://") ||
            src.startsWith("https://") ||
            src.startsWith("data:") ||
            src.startsWith("blob:")
        ) {
            return src;
        }

        const cleanSrc = src
            .replace(/^\/+/, "")
            .replace(/^\.\//, "");

        return `${import.meta.env.BASE_URL}${cleanSrc}`;
    }

    return (
        <main className="study-page">
            <div className="study-container study-container--article">
                <nav
                    className="study-topic-navigation"
                    aria-label="Navigazione area studio"
                >
                    <Link
                        to="/studio"
                        onClick={onBackToStudy}
                    >
                        ← Area studio
                    </Link>

                    <Link
                        to="/"
                        onClick={onBackHome}
                    >
                        Home
                    </Link>
                </nav>

                <article className="study-article">
                    {isLoading && (
                        <p>
                            Caricamento
                            dell'argomento...
                        </p>
                    )}

                    {loadError && (
                        <p>
                            Non è stato possibile
                            caricare questo
                            argomento.
                        </p>
                    )}

                    {!isLoading &&
                        !loadError && (
                            <ReactMarkdown
                                remarkPlugins={[
                                    remarkGfm,
                                ]}
                                components={{
                                    img: ({
                                        src,
                                        alt,
                                        ...props
                                    }) => (
                                        <img
                                            src={getImageSrc(
                                                src,
                                            )}
                                            alt={
                                                alt ||
                                                ""
                                            }
                                            loading="lazy"
                                            {...props}
                                        />
                                    ),
                                    table: ({
                                        children,
                                        ...props
                                    }) => (
                                        <div
                                            className="study-table-wrap"
                                            tabIndex="0"
                                            role="region"
                                            aria-label="Tabella dell'argomento"
                                        >
                                            <table {...props}>
                                                {children}
                                            </table>
                                        </div>
                                    ),
                                }}
                            >
                                {content}
                            </ReactMarkdown>
                        )}
                </article>

                {(previousTopic ||
                    nextTopic) && (
                        <nav
                            className="study-topic-navigation"
                            aria-label="Navigazione tra gli argomenti"
                        >
                            {previousTopic && (
                                <Link
                                    to={`/studio/${encodeURIComponent(
                                        previousTopic.id,
                                    )}`}
                                    onClick={
                                        scrollToTop
                                    }
                                >
                                    ←{" "}
                                    {
                                        previousTopic.title
                                    }
                                </Link>
                            )}

                            {nextTopic && (
                                <Link
                                    to={`/studio/${encodeURIComponent(
                                        nextTopic.id,
                                    )}`}
                                    onClick={
                                        scrollToTop
                                    }
                                >
                                    {
                                        nextTopic.title
                                    }{" "}
                                    →
                                </Link>
                            )}
                        </nav>
                    )}

                <div className="study-article-footer">
                    <Link
                        to="/studio"
                        onClick={onBackToStudy}
                    >
                        ← Torna agli argomenti
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default StudyTopicPage;
