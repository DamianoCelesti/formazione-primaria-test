function QuestionNavigator({
    questions,
    currentQuestionIndex,
    answers,
    onGoToQuestion,
}) {
    return (
        <nav
            className="question-navigation"
            aria-label="Navigazione domande"
        >
            <div className="question-navigation__header">
                <h2>Vai a una domanda</h2>

                <div
                    className="question-navigator__legend"
                    aria-label="Legenda degli stati"
                >
                    <span className="is-current">
                        Corrente
                    </span>

                    <span className="is-answered">
                        Risposta data
                    </span>

                    <span>
                        Da completare
                    </span>
                </div>
            </div>

            <div className="question-navigator">
                {questions.map((question, index) => {
                    const isCurrent =
                        index === currentQuestionIndex;

                    const isAnswered =
                        Boolean(answers[question.id]);

                    let status = "unanswered";

                    if (isAnswered) {
                        status = "answered";
                    }

                    if (isCurrent) {
                        status = "current";
                    }

                    return (
                        <button
                            key={question.id}
                            type="button"
                            className={`question-navigator__button question-navigator__button--${status}`}
                            onClick={() =>
                                onGoToQuestion(index)
                            }
                            aria-current={
                                isCurrent
                                    ? "true"
                                    : undefined
                            }
                            aria-label={`Vai alla domanda ${index + 1
                                }${isAnswered
                                    ? ", risposta inserita"
                                    : ", senza risposta"
                                }`}
                        >
                            {index + 1}
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}

export default QuestionNavigator;
