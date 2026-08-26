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
    {
        id: "simulation-04",
        number: 4,
        title: "Simulazione 4",
        loadQuestions: () =>
            import("./simulation04.js").then(
                (module) => module.default,
            ),
    },
    {
        id: "simulation-05",
        number: 5,
        title: "Simulazione 5",
        loadQuestions: () =>
            import("./simulation05.js").then(
                (module) => module.default,
            ),
    }
];

export default simulations;