import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function StudyTopicPage({
    topic,
    onBackToStudy,
    onBackHome,
}) {
    if (!topic) {
        return null;
    }

    return (
        <main className="study-page">
            <div className="study-container study-container--article">
                <nav className="study-topic-navigation">
                    <button
                        type="button"
                        onClick={onBackToStudy}
                    >
                        ← Area studio
                    </button>

                    <button
                        type="button"
                        onClick={onBackHome}
                    >
                        Home
                    </button>
                </nav>

                <article className="study-article">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {topic.content}
                    </ReactMarkdown>
                </article>

                <div className="study-article-footer">
                    <button
                        type="button"
                        onClick={onBackToStudy}
                    >
                        ← Torna agli argomenti
                    </button>
                </div>
            </div>
        </main>
    );
}

export default StudyTopicPage;