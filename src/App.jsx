import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import Question from "./components/Question";
import QuestionNavigator from "./components/QuestionNavigator";
import ResultsSummary from "./components/ResultsSummary";
import AnswerReview from "./components/AnswerReview";

import StudyPage from "./pages/StudyPage";
import StudyTopicPage from "./pages/StudyTopicPage";
import HomePage from "./pages/HomePage";

import studyTopics from "./data/studyTopics";
import simulations from "./data/simulations";

import calculateScore from "./utils/calculateScore";

import "./styles/study.css";
import "./styles/quiz.css";
import "./styles/review.css";

const COMPLETED_STORAGE_KEY =
  "formazione-primaria-completed-simulations";

const PROGRESS_STORAGE_KEY =
  "formazione-primaria-simulation-progress";

const SITE_URL =
  "https://damianocelesti.github.io/formazione-primaria-test";

function loadStorage(key) {
  const savedData = localStorage.getItem(key);

  if (!savedData) {
    return {};
  }

  try {
    return JSON.parse(savedData);
  } catch {
    return {};
  }
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentPage, setCurrentPage] =
    useState("home");

  const [
    currentSimulationId,
    setCurrentSimulationId,
  ] = useState(simulations[0]?.id ?? "");

  const [
    currentQuestionIndex,
    setCurrentQuestionIndex,
  ] = useState(0);

  const [
    currentStudyTopicId,
    setCurrentStudyTopicId,
  ] = useState(null);

  const [answers, setAnswers] =
    useState({});

  const [isSubmitted, setIsSubmitted] =
    useState(false);

  const [isReviewing, setIsReviewing] =
    useState(false);

  const [
    isConfirmingSubmit,
    setIsConfirmingSubmit,
  ] = useState(false);

  const [
    completedSimulations,
    setCompletedSimulations,
  ] = useState(() =>
    loadStorage(COMPLETED_STORAGE_KEY),
  );

  const [
    simulationProgress,
    setSimulationProgress,
  ] = useState(() =>
    loadStorage(PROGRESS_STORAGE_KEY),
  );

  const currentSimulation =
    simulations.find(
      (simulation) =>
        simulation.id === currentSimulationId,
    ) ?? simulations[0];

  const currentQuestions =
    currentSimulation?.questions ?? [];

  const currentQuestion =
    currentQuestions[currentQuestionIndex];

  const currentStudyTopic =
    studyTopics.find(
      (topic) =>
        topic.id === currentStudyTopicId,
    ) ?? null;

  const score = calculateScore(
    currentQuestions,
    answers,
  );

  const answeredQuestions =
    Object.keys(answers).length;

  const unansweredQuestions =
    currentQuestions.length -
    answeredQuestions;

  const unansweredQuestionIds =
    currentQuestions
      .filter(
        (question) =>
          !answers[question.id],
      )
      .map((question) => question.id);

  useEffect(() => {
    const searchParams = new URLSearchParams(
      location.search,
    );

    const shouldReview =
      searchParams.get("revisione") === "1";

    const pathParts = location.pathname
      .split("/")
      .filter(Boolean);

    if (pathParts.length === 0) {
      setCurrentPage("home");
      setCurrentStudyTopicId(null);
      setIsConfirmingSubmit(false);
      return;
    }

    if (pathParts[0] === "studio") {
      if (pathParts.length === 1) {
        setCurrentStudyTopicId(null);
        setCurrentPage("study");
        setIsConfirmingSubmit(false);
        return;
      }

      const topicId =
        decodeURIComponent(pathParts[1]);

      const topicExists = studyTopics.some(
        (topic) => topic.id === topicId,
      );

      if (topicExists) {
        setCurrentStudyTopicId(topicId);
        setCurrentPage("study-topic");
        setIsConfirmingSubmit(false);
        return;
      }

      navigate("/studio", { replace: true });
      return;
    }

    if (
      pathParts[0] === "simulazioni" &&
      pathParts[1]
    ) {
      const simulationId =
        decodeURIComponent(pathParts[1]);

      const selectedSimulation =
        simulations.find(
          (simulation) =>
            simulation.id === simulationId,
        );

      if (!selectedSimulation) {
        navigate("/", { replace: true });
        return;
      }

      const savedCompleted =
        loadStorage(COMPLETED_STORAGE_KEY)[
        simulationId
        ];

      const savedProgress =
        loadStorage(PROGRESS_STORAGE_KEY)[
        simulationId
        ];

      setCurrentSimulationId(simulationId);
      setCurrentStudyTopicId(null);
      setIsConfirmingSubmit(false);

      if (savedCompleted) {
        setAnswers(
          savedCompleted.answers ?? {},
        );
        setCurrentQuestionIndex(0);
        setIsSubmitted(true);
        setIsReviewing(shouldReview);
      } else {
        setAnswers(
          savedProgress?.answers ?? {},
        );
        setCurrentQuestionIndex(
          savedProgress?.currentQuestionIndex ??
          0,
        );
        setIsSubmitted(false);
        setIsReviewing(false);
      }

      setCurrentPage("simulation");
      return;
    }

    navigate("/", { replace: true });
  }, [
    location.pathname,
    location.search,
    navigate,
  ]);

  useEffect(() => {
    let title =
      "Simulazioni Test Scienze della Formazione Primaria 2026 | Quiz Gratis";

    let description =
      "Simulazioni gratuite per il test di ammissione a Scienze della Formazione Primaria 2026: quiz di italiano, logica, storia, geografia, matematica e scienze.";

    let canonicalPath = "/";

    if (currentPage === "study") {
      title =
        "Preparazione Test Scienze della Formazione Primaria 2026 | Teoria";

      description =
        "Studia la teoria per il test di Scienze della Formazione Primaria 2026: italiano, logica, storia, geografia, matematica e scienze.";

      canonicalPath = "/studio";
    }

    if (
      currentPage === "study-topic" &&
      currentStudyTopic
    ) {
      const topicTitle =
        currentStudyTopic.title ??
        currentStudyTopic.name ??
        currentStudyTopic.id;

      title = `${topicTitle} | Test Scienze della Formazione Primaria 2026`;

      description = `Studia ${topicTitle} per prepararti al test di ammissione a Scienze della Formazione Primaria 2026.`;

      canonicalPath = `/studio/${encodeURIComponent(
        currentStudyTopic.id,
      )}`;
    }

    if (
      currentPage === "simulation" &&
      currentSimulation
    ) {
      const simulationTitle =
        currentSimulation.title ??
        `Simulazione ${currentSimulation.number ?? ""
        }`;

      title = `${simulationTitle} | Test Scienze della Formazione Primaria 2026`;

      description =
        "Esercitati gratuitamente con una simulazione del test di ammissione a Scienze della Formazione Primaria 2026.";

      canonicalPath = `/simulazioni/${encodeURIComponent(
        currentSimulation.id,
      )}`;
    }

    document.title = title;

    const descriptionMeta =
      document.querySelector(
        'meta[name="description"]',
      );

    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        description,
      );
    }

    const canonicalLink =
      document.querySelector(
        'link[rel="canonical"]',
      );

    if (canonicalLink) {
      canonicalLink.setAttribute(
        "href",
        `${SITE_URL}${canonicalPath}`,
      );
    }
  }, [
    currentPage,
    currentSimulation,
    currentStudyTopic,
  ]);

  useEffect(() => {
    if (
      currentPage !== "simulation" ||
      isSubmitted ||
      Object.keys(answers).length === 0
    ) {
      return;
    }

    const progress = {
      answers,
      currentQuestionIndex,
      total: currentQuestions.length,
      updatedAt: new Date().toISOString(),
    };

    setSimulationProgress(
      (currentProgress) => {
        const updatedProgress = {
          ...currentProgress,
          [currentSimulationId]: progress,
        };

        localStorage.setItem(
          PROGRESS_STORAGE_KEY,
          JSON.stringify(
            updatedProgress,
          ),
        );

        return updatedProgress;
      },
    );
  }, [
    answers,
    currentQuestionIndex,
    currentPage,
    currentSimulationId,
    currentQuestions.length,
    isSubmitted,
  ]);

  function handleStartSimulation(
    simulationId,
  ) {
    const selectedSimulation =
      simulations.find(
        (simulation) =>
          simulation.id === simulationId,
      );

    if (!selectedSimulation) {
      return;
    }

    const completed =
      completedSimulations[simulationId];

    if (completed) {
      handleReviewCompletedSimulation(
        simulationId,
      );

      return;
    }

    const savedProgress =
      simulationProgress[simulationId];

    setCurrentSimulationId(
      simulationId,
    );

    if (savedProgress) {
      setAnswers(
        savedProgress.answers ?? {},
      );

      setCurrentQuestionIndex(
        savedProgress.currentQuestionIndex ??
        0,
      );
    } else {
      setAnswers({});
      setCurrentQuestionIndex(0);
    }

    setIsSubmitted(false);
    setIsReviewing(false);
    setIsConfirmingSubmit(false);

    setCurrentPage("simulation");

    navigate(
      `/simulazioni/${encodeURIComponent(
        simulationId,
      )}`,
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleReviewCompletedSimulation(
    simulationId,
  ) {
    const selectedSimulation =
      simulations.find(
        (simulation) =>
          simulation.id === simulationId,
      );

    const completed =
      completedSimulations[simulationId];

    if (
      !selectedSimulation ||
      !completed
    ) {
      return;
    }

    setCurrentSimulationId(
      simulationId,
    );

    setAnswers(
      completed.answers ?? {},
    );

    setCurrentQuestionIndex(0);

    setIsSubmitted(true);
    setIsReviewing(true);
    setIsConfirmingSubmit(false);

    setCurrentPage("simulation");

    navigate(
      `/simulazioni/${encodeURIComponent(
        simulationId,
      )}?revisione=1`,
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleSelectAnswer(answerId) {
    if (!currentQuestion) {
      return;
    }

    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      [currentQuestion.id]: answerId,
    }));
  }

  function handleNextQuestion() {
    if (
      currentQuestionIndex <
      currentQuestions.length - 1
    ) {
      setCurrentQuestionIndex(
        (currentIndex) =>
          currentIndex + 1,
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  function handlePreviousQuestion() {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(
        (currentIndex) =>
          currentIndex - 1,
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  function handleGoToQuestionByIndex(
    questionIndex,
  ) {
    if (
      questionIndex >= 0 &&
      questionIndex <
      currentQuestions.length
    ) {
      setCurrentQuestionIndex(
        questionIndex,
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  function handleOpenSubmitConfirmation() {
    setIsConfirmingSubmit(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleCancelSubmit() {
    setIsConfirmingSubmit(false);
  }

  function handleConfirmSubmit() {
    const result = {
      completed: true,
      score,
      total: currentQuestions.length,
      answers,
      completedAt:
        new Date().toISOString(),
    };

    setCompletedSimulations(
      (currentCompleted) => {
        const updatedCompleted = {
          ...currentCompleted,
          [currentSimulationId]:
            result,
        };

        localStorage.setItem(
          COMPLETED_STORAGE_KEY,
          JSON.stringify(
            updatedCompleted,
          ),
        );

        return updatedCompleted;
      },
    );

    setSimulationProgress(
      (currentProgress) => {
        const updatedProgress = {
          ...currentProgress,
        };

        delete updatedProgress[
          currentSimulationId
        ];

        localStorage.setItem(
          PROGRESS_STORAGE_KEY,
          JSON.stringify(
            updatedProgress,
          ),
        );

        return updatedProgress;
      },
    );

    setIsConfirmingSubmit(false);
    setIsSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleGoToUnansweredQuestion(
    questionId,
  ) {
    const questionIndex =
      currentQuestions.findIndex(
        (question) =>
          question.id === questionId,
      );

    if (questionIndex !== -1) {
      setCurrentQuestionIndex(
        questionIndex,
      );

      setIsConfirmingSubmit(false);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  function handleReview() {
    setIsReviewing(true);

    navigate(
      `/simulazioni/${encodeURIComponent(
        currentSimulationId,
      )}?revisione=1`,
      { replace: true },
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleBackToResults() {
    setIsReviewing(false);

    navigate(
      `/simulazioni/${encodeURIComponent(
        currentSimulationId,
      )}`,
      { replace: true },
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  /* AREA STUDIO */

  function handleOpenStudy() {
    setCurrentStudyTopicId(null);
    setCurrentPage("study");

    navigate("/studio");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleOpenStudyTopic(topicId) {
    setCurrentStudyTopicId(topicId);
    setCurrentPage("study-topic");

    navigate(
      `/studio/${encodeURIComponent(
        topicId,
      )}`,
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleBackToStudy() {
    setCurrentStudyTopicId(null);
    setCurrentPage("study");

    navigate("/studio");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleBackHome() {
    setCurrentPage("home");

    setCurrentStudyTopicId(null);

    setIsSubmitted(false);
    setIsReviewing(false);
    setIsConfirmingSubmit(false);

    navigate("/");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  /* HOME */

  if (currentPage === "home") {
    return (
      <HomePage
        simulations={simulations}
        completedSimulations={
          completedSimulations
        }
        simulationProgress={
          simulationProgress
        }
        onStartSimulation={
          handleStartSimulation
        }
        onReviewSimulation={
          handleReviewCompletedSimulation
        }
        onOpenStudy={handleOpenStudy}
      />
    );
  }

  /* AREA STUDIO */

  if (currentPage === "study") {
    return (
      <StudyPage
        topics={studyTopics}
        onOpenTopic={
          handleOpenStudyTopic
        }
        onBackHome={handleBackHome}
      />
    );
  }

  /* SINGOLO ARGOMENTO DI STUDIO */

  if (currentPage === "study-topic") {
    return (
      <StudyTopicPage
        topic={currentStudyTopic}
        onBackToStudy={
          handleBackToStudy
        }
        onBackHome={handleBackHome}
      />
    );
  }

  /* CONFERMA CONSEGNA */

  if (isConfirmingSubmit) {
    return (
      <main className="quiz-page">
        <div className="quiz-container">
          <h1 className="quiz-title">
            {currentSimulation.title}
          </h1>

          <section className="submit-confirmation">
            <div className="submit-confirmation__header">
              <p className="submit-confirmation__eyebrow">
                Consegna
              </p>

              <h2>
                Conferma consegna
              </h2>

              <p>
                Controlla le domande
                mancanti prima di
                consegnare definitivamente
                la simulazione.
              </p>
            </div>

            <div className="submit-confirmation__summary">
              <div className="submit-stat">
                <span className="submit-stat__value">
                  {answeredQuestions}
                </span>

                <span className="submit-stat__label">
                  Risposte date
                </span>
              </div>

              <div className="submit-stat">
                <span className="submit-stat__value">
                  {unansweredQuestions}
                </span>

                <span className="submit-stat__label">
                  Senza risposta
                </span>
              </div>

              <div className="submit-stat">
                <span className="submit-stat__value">
                  {
                    currentQuestions.length
                  }
                </span>

                <span className="submit-stat__label">
                  Domande totali
                </span>
              </div>
            </div>

            {unansweredQuestions > 0 ? (
              <div className="submit-missing">
                <div className="submit-missing__header">
                  <div>
                    <h3>
                      Domande da
                      completare
                    </h3>

                    <p>
                      Hai ancora{" "}
                      <strong>
                        {
                          unansweredQuestions
                        }
                      </strong>{" "}
                      {unansweredQuestions ===
                        1
                        ? "domanda senza risposta."
                        : "domande senza risposta."}
                    </p>
                  </div>

                  <span className="submit-missing__badge">
                    {
                      unansweredQuestions
                    }{" "}
                    mancanti
                  </span>
                </div>

                <div className="submit-missing__grid">
                  {unansweredQuestionIds.map(
                    (questionId) => (
                      <button
                        key={
                          questionId
                        }
                        type="button"
                        className="submit-missing__button"
                        onClick={() =>
                          handleGoToUnansweredQuestion(
                            questionId,
                          )
                        }
                        aria-label={`Vai alla domanda ${questionId}`}
                      >
                        {questionId}
                      </button>
                    ),
                  )}
                </div>

                <p className="submit-missing__hint">
                  Clicca su un numero per
                  tornare direttamente alla
                  domanda.
                </p>
              </div>
            ) : (
              <div className="submit-complete">
                <span className="submit-complete__icon">
                  ✓
                </span>

                <div>
                  <strong>
                    Hai risposto a tutte
                    le domande
                  </strong>

                  <p>
                    La simulazione è
                    pronta per essere
                    consegnata.
                  </p>
                </div>
              </div>
            )}

            <div className="submit-warning">
              <span className="submit-warning__icon">
                !
              </span>

              <p>
                <strong>
                  La consegna è
                  definitiva.
                </strong>{" "}
                Dopo aver confermato non
                potrai più modificare le
                risposte, ma potrai
                rivedere domande,
                soluzioni e spiegazioni.
              </p>
            </div>

            <div className="submit-confirmation__actions">
              <button
                type="button"
                className="submit-confirmation__back"
                onClick={
                  handleCancelSubmit
                }
              >
                ← Torna alla simulazione
              </button>

              <button
                type="button"
                className="submit-confirmation__confirm"
                onClick={
                  handleConfirmSubmit
                }
              >
                Conferma consegna
              </button>
            </div>
          </section>
        </div>
      </main>
    );
  }

  /* REVISIONE RISPOSTE */

  if (
    isSubmitted &&
    isReviewing
  ) {
    return (
      <main className="quiz-page">
        <div className="quiz-container">
          <h1 className="quiz-title">
            {currentSimulation.title}
          </h1>

          <AnswerReview
            questions={
              currentQuestions
            }
            userAnswers={answers}
            onBackToResults={
              handleBackToResults
            }
          />

          <div className="quiz-actions">
            <button
              type="button"
              onClick={handleBackHome}
            >
              ← Torna alla home
            </button>
          </div>
        </div>
      </main>
    );
  }
  /* RISULTATI */

  if (isSubmitted) {
    return (
      <main className="quiz-page">
        <div className="quiz-container">
          <h1 className="quiz-title">
            {currentSimulation.title}
          </h1>

          <ResultsSummary
            score={score}
            totalQuestions={
              currentQuestions.length
            }
            answeredQuestions={
              answeredQuestions
            }
            onReview={handleReview}
            onBackHome={
              handleBackHome
            }
          />
        </div>
      </main>
    );
  }

  /* NESSUNA DOMANDA */

  if (!currentQuestion) {
    return (
      <main className="quiz-page">
        <div className="quiz-container">
          <p>
            Questa simulazione non
            contiene ancora domande.
          </p>

          <button
            type="button"
            onClick={
              handleBackHome
            }
          >
            Torna alla home
          </button>
        </div>
      </main>
    );
  }

  /* SIMULAZIONE */

  return (
    <main className="quiz-page">
      <div className="quiz-container">
        <h1 className="quiz-title">
          {currentSimulation.title}
        </h1>

        <p className="quiz-progress">
          Risposte date:{" "}
          <strong>
            {answeredQuestions} /{" "}
            {currentQuestions.length}
          </strong>
        </p>

        <QuestionNavigator
          questions={currentQuestions}
          currentQuestionIndex={
            currentQuestionIndex
          }
          answers={answers}
          onGoToQuestion={
            handleGoToQuestionByIndex
          }
        />

        <Question
          question={currentQuestion}
          selectedAnswer={
            answers[
            currentQuestion.id
            ] ?? null
          }
          onSelectAnswer={
            handleSelectAnswer
          }
        />

        <div className="quiz-actions">
          <button
            type="button"
            onClick={
              handlePreviousQuestion
            }
            disabled={
              currentQuestionIndex === 0
            }
          >
            ← Precedente
          </button>

          <button
            type="button"
            className="quiz-submit-button"
            onClick={
              handleOpenSubmitConfirmation
            }
          >
            Consegna simulazione
          </button>

          <button
            type="button"
            onClick={
              handleNextQuestion
            }
            disabled={
              currentQuestionIndex ===
              currentQuestions.length - 1
            }
          >
            Successiva →
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;