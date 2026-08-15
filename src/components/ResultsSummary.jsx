function ResultsSummary({
    score,
    totalQuestions,
    answeredQuestions,
    onReview,
    onBackHome,
}) {
    const percentage = Math.round(
        (score / totalQuestions) * 100,
    );

    const unansweredQuestions =
        totalQuestions - answeredQuestions;

    const incorrectQuestions =
        answeredQuestions - score;

    return (
        <section className="results-summary">
            <div className="results-summary__header">
                <div className="results-summary__icon">
                    ✓
                </div>

                <p className="results-summary__eyebrow">
                    Simulazione consegnata
                </p>

                <h2>Simulazione completata</h2>

                <p>
                    La prova è stata consegnata.
                    Adesso puoi controllare tutte le
                    risposte e leggere le spiegazioni.
                </p>
            </div>

            <div className="results-score">
                <span className="results-score__label">
                    Punteggio ottenuto
                </span>

                <div className="results-score__value">
                    <strong>{score}</strong>

                    <span>/ {totalQuestions}</span>
                </div>

                <div className="results-score__percentage">
                    {percentage}%
                </div>
            </div>

            <div className="results-stats">
                <div className="results-stat">
                    <span className="results-stat__value">
                        {score}
                    </span>

                    <span className="results-stat__label">
                        Risposte corrette
                    </span>
                </div>

                <div className="results-stat">
                    <span className="results-stat__value">
                        {incorrectQuestions}
                    </span>

                    <span className="results-stat__label">
                        Risposte errate
                    </span>
                </div>

                <div className="results-stat">
                    <span className="results-stat__value">
                        {unansweredQuestions}
                    </span>

                    <span className="results-stat__label">
                        Non risposte
                    </span>
                </div>

                <div className="results-stat">
                    <span className="results-stat__value">
                        {totalQuestions}
                    </span>

                    <span className="results-stat__label">
                        Domande totali
                    </span>
                </div>
            </div>

            <div className="results-summary__notice">
                <span>i</span>

                <p>
                    Nella revisione potrai vedere la tua
                    risposta, quella corretta e la
                    spiegazione di ogni alternativa.
                </p>
            </div>

            <div className="results-summary__actions">
                <button
                    type="button"
                    className="results-summary__review"
                    onClick={onReview}
                >
                    Rivedi le risposte
                </button>

                <button
                    type="button"
                    className="results-summary__home"
                    onClick={onBackHome}
                >
                    Torna alla home
                </button>
            </div>
        </section>
    );
}

export default ResultsSummary;
