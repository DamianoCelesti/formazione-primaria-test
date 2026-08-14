import { Link } from "react-router";
import "../styles/study.css";

function StudyPage({
    topics,
    onOpenTopic,
    onBackHome,
}) {
    const groupedTopics = topics.reduce(
        (groups, topic) => {
            const area = topic.area;

            if (!groups[area]) {
                groups[area] = {
                    title: topic.areaTitle,
                    topics: [],
                };
            }

            groups[area].topics.push(topic);

            return groups;
        },
        {},
    );

    return (
        <main className="study-page">
            <div className="study-container">
                <header className="study-header">
                    <Link
                        to="/"
                        className="study-back-button"
                        onClick={onBackHome}
                    >
                        ← Torna alla home
                    </Link>

                    <p className="study-eyebrow">
                        Preparazione al test
                    </p>

                    <h1>Area studio</h1>

                    <p>
                        Studia gli argomenti del programma
                        prima di affrontare le simulazioni.
                    </p>
                </header>

                <div className="study-areas">
                    {Object.entries(groupedTopics).map(
                        ([areaId, area]) => (
                            <section
                                key={areaId}
                                className="study-area"
                            >
                                <div className="study-area__header">
                                    <h2>{area.title}</h2>

                                    <span>
                                        {area.topics.length}{" "}
                                        {area.topics.length === 1
                                            ? "argomento"
                                            : "argomenti"}
                                    </span>
                                </div>

                                <div className="study-topic-grid">
                                    {area.topics.map((topic) => (
                                        <article
                                            key={topic.id}
                                            className="study-topic-card"
                                        >
                                            <div className="study-topic-card__number">
                                                {topic.number}
                                            </div>

                                            <div className="study-topic-card__content">
                                                <h3>
                                                    {topic.title}
                                                </h3>

                                                <p>
                                                    {
                                                        topic.description
                                                    }
                                                </p>
                                            </div>

                                            <Link
                                                to={`/studio/${topic.id}`}
                                                onClick={() =>
                                                    onOpenTopic(
                                                        topic.id,
                                                    )
                                                }
                                            >
                                                Studia
                                            </Link>
                                        </article>
                                    ))}
                                </div>
                            </section>
                        ),
                    )}
                </div>
            </div>
        </main>
    );
}

export default StudyPage;