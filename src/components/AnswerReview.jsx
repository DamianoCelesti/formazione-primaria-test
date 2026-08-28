function ResourceBlock({ resources }) {
    if (!resources?.length) {
        return null;
    }

    return (
        <div className="review-resources">
            <div className="review-resources__header">
                <span className="review-resources__eyebrow">
                    Per capire meglio
                </span>

                <h4>Approfondimenti utili</h4>
            </div>

            <div className="review-resources__list">
                {resources.map((resource, index) => {
                    const key =
                        resource.id ??
                        `${resource.type}-${index}`;

                    if (resource.type === "link") {
                        return (
                            <a
                                key={key}
                                className="review-resource review-resource--link"
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="review-resource__icon">
                                    ↗
                                </span>

                                <span className="review-resource__content">
                                    <strong>
                                        {resource.label}
                                    </strong>

                                    {resource.source && (
                                        <span>
                                            Fonte: {resource.source}
                                        </span>
                                    )}
                                </span>
                            </a>
                        );
                    }

                    if (
                        resource.type === "image" ||
                        resource.type === "map" ||
                        resource.type === "diagram"
                    ) {
                        const typeLabel =
                            resource.type === "map"
                                ? "Mappa"
                                : resource.type === "diagram"
                                    ? "Schema"
                                    : "Immagine";

                        return (
                            <figure
                                key={key}
                                className="review-resource review-resource--visual"
                            >
                                <div className="review-resource__visual-label">
                                    {typeLabel}
                                </div>

                                {resource.label && (
                                    <h5>{resource.label}</h5>
                                )}

                                <img
                                    src={resource.src}
                                    alt={resource.alt ?? ""}
                                    loading="lazy"
                                />

                                {resource.caption && (
                                    <figcaption>
                                        {resource.caption}
                                    </figcaption>
                                )}

                                {resource.sourceUrl &&
                                    resource.sourceLabel && (
                                        <a
                                            className="review-resource__source"
                                            href={resource.sourceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Fonte:{" "}
                                            {resource.sourceLabel}
                                        </a>
                                    )}
                            </figure>
                        );
                    }

                    if (resource.type === "timeline") {
                        return (
                            <div
                                key={key}
                                className="review-resource review-resource--timeline"
                            >
                                <div className="review-resource__visual-label">
                                    Cronologia
                                </div>

                                {resource.title && (
                                    <h5>{resource.title}</h5>
                                )}

                                <ol className="review-timeline">
                                    {resource.events.map(
                                        (event, eventIndex) => (
                                            <li
                                                key={`${event.year}-${eventIndex}`}
                                                className="review-timeline__item"
                                            >
                                                <span className="review-timeline__year">
                                                    {event.year}
                                                </span>

                                                <span className="review-timeline__label">
                                                    {event.label}
                                                </span>
                                            </li>
                                        ),
                                    )}
                                </ol>
                            </div>
                        );
                    }

                    return null;
                })}
            </div>
        </div>
    );
}

function AnswerReview({
    questions,
    userAnswers,
    onBackToResults,
}) {
    return (
        <section className="review-page">
            <div className="review-header">
                <p className="review-eyebrow">
                    Correzione
                </p>

                <h2>Revisione delle risposte</h2>

                <p>
                    Controlla le risposte date e leggi
                    la spiegazione di ogni alternativa.
                </p>
            </div>

            <div className="review-list">
                {questions.map((question) => {
                    const userAnswerId =
                        userAnswers[question.id];

                    const userAnswer =
                        question.answers.find(
                            (answer) =>
                                answer.id === userAnswerId,
                        );

                    const correctAnswer =
                        question.answers.find(
                            (answer) => answer.correct,
                        );

                    const isAnswered =
                        Boolean(userAnswerId);

                    const isCorrect =
                        userAnswerId ===
                        correctAnswer.id;

                    const reviewStatus = isCorrect
                        ? "correct"
                        : isAnswered
                            ? "wrong"
                            : "unanswered";

                    return (
                        <article
                            key={question.id}
                            className={`review-card review-card--${reviewStatus}`}
                        >
                            <header className="review-card__header">
                                <span className="review-card__number">
                                    Domanda {question.id}
                                </span>

                                <span
                                    className={`review-card__status review-card__status--${reviewStatus}`}
                                >
                                    {isCorrect
                                        ? "✓ Corretta"
                                        : isAnswered
                                            ? "✕ Errata"
                                            : "— Non risposta"}
                                </span>
                            </header>

                            {question.passage && (
                                <div className="review-passage">
                                    <span>Brano</span>

                                    <p>
                                        {question.passage}
                                    </p>
                                </div>
                            )}

                            <h3 className="review-question">
                                {question.question}
                            </h3>

                            {question.questionImage && (
                                <figure className="review-question-image">
                                    <img
                                        src={question.questionImage.src}
                                        alt={
                                            question.questionImage.alt ||
                                            "Immagine relativa alla domanda"
                                        }
                                        loading="lazy"
                                    />

                                    {question.questionImage.caption && (
                                        <figcaption>
                                            {question.questionImage.caption}
                                        </figcaption>
                                    )}
                                </figure>
                            )}

                            <div className="review-comparison">
                                <div
                                    className={`review-answer-box review-answer-box--${reviewStatus}`}
                                >
                                    <span className="review-answer-box__label">
                                        La tua risposta
                                    </span>

                                    {userAnswer ? (
                                        <p>
                                            <strong>
                                                {isCorrect
                                                    ? "✓"
                                                    : "✕"}{" "}
                                                {userAnswer.id}
                                            </strong>

                                            <span>
                                                {userAnswer.text}
                                            </span>
                                        </p>
                                    ) : (
                                        <p className="review-not-answered">
                                            Nessuna risposta
                                        </p>
                                    )}
                                </div>

                                {!isCorrect && (
                                    <div className="review-answer-box review-answer-box--correct">
                                        <span className="review-answer-box__label">
                                            Risposta corretta
                                        </span>

                                        <p>
                                            <strong>
                                                ✓ {correctAnswer.id}
                                            </strong>

                                            <span>
                                                {correctAnswer.text}
                                            </span>
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="review-explanations">
                                <h4>
                                    Spiegazione delle alternative
                                </h4>

                                <div className="review-options">
                                    {question.answers.map(
                                        (answer) => {
                                            const wasSelected =
                                                userAnswerId ===
                                                answer.id;

                                            return (
                                                <div
                                                    key={answer.id}
                                                    className={`review-option ${answer.correct
                                                        ? "review-option--correct"
                                                        : ""
                                                        } ${wasSelected &&
                                                            !answer.correct
                                                            ? "review-option--selected-wrong"
                                                            : ""
                                                        }`}
                                                >
                                                    <div className="review-option__top">
                                                        <div>
                                                            <span
                                                                className={`review-option__letter ${answer.correct
                                                                    ? "review-option__letter--correct"
                                                                    : ""
                                                                    }`}
                                                            >
                                                                {answer.correct
                                                                    ? "✓"
                                                                    : "✕"}{" "}
                                                                {answer.id}
                                                            </span>

                                                            <strong>
                                                                {answer.text}
                                                            </strong>
                                                        </div>

                                                        <div className="review-option__badges">
                                                            {wasSelected && (
                                                                <span className="review-badge review-badge--selected">
                                                                    La tua risposta
                                                                </span>
                                                            )}

                                                            {answer.correct && (
                                                                <span className="review-badge review-badge--correct">
                                                                    Corretta
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <p>
                                                        {answer.explanation}
                                                    </p>
                                                </div>
                                            );
                                        },
                                    )}
                                </div>

                                <ResourceBlock
                                    resources={question.resources}
                                />
                            </div>
                        </article>
                    );
                })}
            </div>

            <div className="review-footer">
                <button
                    type="button"
                    onClick={onBackToResults}
                >
                    ← Torna ai risultati
                </button>
            </div>
        </section>
    );
}

export default AnswerReview;
