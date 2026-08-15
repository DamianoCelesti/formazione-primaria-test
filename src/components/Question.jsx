function Question({
    question,
    selectedAnswer,
    onSelectAnswer,
}) {
    return (
        <section className="question-card">
            <div className="question-card__header">
                <p className="question-number">
                    Domanda {question.id}
                </p>

                <span className="question-card__kind">
                    Seleziona un'opzione
                </span>
            </div>

            {question.passage && (
                <div className="question-passage">
                    <p className="question-passage__label">
                        Leggi il seguente brano
                    </p>

                    <p>{question.passage}</p>
                </div>
            )}

            <h2 className="question-text">
                {question.question}
            </h2>

            <div className="question-answers">
                {question.answers.map((answer) => (
                    <label
                        key={answer.id}
                        className="answer-option"
                    >
                        <input
                            type="radio"
                            name={`question-${question.id}`}
                            value={answer.id}
                            checked={
                                selectedAnswer === answer.id
                            }
                            onChange={() =>
                                onSelectAnswer(answer.id)
                            }
                        />

                        <span className="answer-option__letter">
                            {answer.id}.
                        </span>

                        <span>{answer.text}</span>
                    </label>
                ))}
            </div>
        </section>
    );
}

export default Question;
