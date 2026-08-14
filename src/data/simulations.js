const simulations = [
    {
        id: "simulation-01",
        number: 1,
        title: "Simulazione 1",
        loadQuestions: () =>
            import("./simulation01.js").then(
                (module) => module.default,
            ),
    },
    {
        id: "simulation-02",
        number: 2,
        title: "Simulazione 2",
        loadQuestions: () =>
            import("./simulation02.js").then(
                (module) => module.default,
            ),
    },
    {
        id: "simulation-03",
        number: 3,
        title: "Simulazione 3",
        loadQuestions: () =>
            import("./simulation03.js").then(
                (module) => module.default,
            ),
    },
];

export default simulations;