function calculateScore(questions, userAnswers) {
    let correctAnswers = 0;

    questions.forEach((question) => {
        const correctAnswer = question.answers.find(
            (answer) => answer.correct,
        );

        const userAnswer = userAnswers[question.id];

        if (userAnswer === correctAnswer.id) {
            correctAnswers += 1;
        }
    });

    return correctAnswers;
}

export default calculateScore;