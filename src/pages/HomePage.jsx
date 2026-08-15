import { Link } from "react-router";

import "../styles/home.css";

function HomePage({
    simulations,
    completedSimulations,
    simulationProgress,
    onStartSimulation,
    onReviewSimulation,
    onOpenStudy,
}) {
    return (
        <main className="home-page">
            <header className="home-header">
                <p className="home-header__eyebrow">
                    Preparazione 2026 · Accesso gratuito
                </p>

                <h1>
                    Test Scienze della Formazione Primaria 2026
                </h1>

                <p>
                    Preparati gratuitamente al test di ammissione
                    a Scienze della Formazione Primaria con
                    simulazioni, quiz e materiale teorico.
                </p>
            </header>

            <section
                className="home-study-section"
                aria-labelledby="study-title"
            >
                <Link
                    to="/studio"
                    className="home-study-card"
                    onClick={onOpenStudy}
                >
                    <div className="home-study-card__icon">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            strokeWidth="1.8"
                            aria-hidden="true"
                        >
                            <path d="M4.75 5.5A2.5 2.5 0 0 1 7.25 3H11v15H7.25a2.5 2.5 0 0 0-2.5 2.5V5.5Z" />
                            <path d="M19.25 5.5A2.5 2.5 0 0 0 16.75 3H13v15h3.75a2.5 2.5 0 0 1 2.5 2.5V5.5Z" />
                        </svg>
                    </div>

                    <div className="home-study-card__content">
                        <span>
                            Preparazione teorica
                        </span>

                        <h2 id="study-title">
                            Studia per il test di Scienze della Formazione Primaria
                        </h2>

                        <p>
                            Ripassa gli argomenti del programma
                            di ammissione: italiano, logica,
                            storia, geografia, matematica e
                            scienze.
                        </p>
                    </div>

                    <span
                        className="home-study-card__arrow"
                        aria-hidden="true"
                    >
                        →
                    </span>
                </Link>
            </section>

            <section
                className="simulations-section"
                aria-labelledby="simulations-title"
            >
                <h2 id="simulations-title">
                    Simulazioni gratuite del test
                </h2>

                <p>
                    Scegli una simulazione e allenati con i quiz
                    per il test di ammissione a Scienze della
                    Formazione Primaria.
                </p>

                <div className="simulation-grid">
                    {simulations.map((simulation) => {
                        const completed =
                            completedSimulations[
                            simulation.id
                            ];

                        const progress =
                            simulationProgress[
                            simulation.id
                            ];

                        const isCompleted =
                            Boolean(completed);

                        const isInProgress =
                            !isCompleted &&
                            Boolean(progress);

                        const answeredCount =
                            progress
                                ? Object.keys(
                                    progress.answers ?? {},
                                ).length
                                : 0;

                        let statusSymbol = "○";
                        let statusText = "Non iniziata";

                        if (isInProgress) {
                            statusSymbol = "◐";
                            statusText = "In corso";
                        }

                        if (isCompleted) {
                            statusSymbol = "✓";
                            statusText = "Completata";
                        }

                        const statusClass = isCompleted
                            ? "completed"
                            : isInProgress
                                ? "in-progress"
                                : "not-started";

                        return (
                            <article
                                key={simulation.id}
                                className={`simulation-card simulation-card--${statusClass}`}
                            >
                                <div className="simulation-card__top">
                                    <span className="simulation-card__number">
                                        Simulazione {simulation.number}
                                    </span>

                                    <div className="simulation-card__status">
                                        <span>
                                            {statusSymbol}
                                        </span>

                                        <span>
                                            {statusText}
                                        </span>
                                    </div>
                                </div>

                                <h3>
                                    Simulazione{" "}
                                    {simulation.number}
                                </h3>

                                {isCompleted && (
                                    <p>
                                        Punteggio:{" "}
                                        <strong>
                                            {completed.score}
                                            /
                                            {completed.total}
                                        </strong>
                                    </p>
                                )}

                                {isInProgress && (
                                    <p>
                                        Risposte date:{" "}
                                        <strong>
                                            {answeredCount}
                                            /
                                            {progress.total}
                                        </strong>
                                    </p>
                                )}

                                {!isCompleted &&
                                    !isInProgress && (
                                        <p>
                                            Non ancora iniziata
                                        </p>
                                    )}

                                {isCompleted ? (
                                    <Link
                                        to={`/simulazioni/${simulation.id}`}
                                        onClick={() =>
                                            onReviewSimulation(
                                                simulation.id,
                                            )
                                        }
                                    >
                                        Rivedi domande
                                    </Link>
                                ) : (
                                    <Link
                                        to={`/simulazioni/${simulation.id}`}
                                        onClick={() =>
                                            onStartSimulation(
                                                simulation.id,
                                            )
                                        }
                                    >
                                        {isInProgress
                                            ? "Continua"
                                            : "Inizia"}
                                    </Link>
                                )}
                            </article>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}

export default HomePage;
