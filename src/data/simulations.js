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
    },
    {
        id: "simulation-06",
        number: 6,
        title: "Simulazione 6",
        loadQuestions: () =>
            import("./simulation06.js").then(
                (module) => module.default,
            ),
    },
    {
        id: "simulation-07",
        number: 7,
        title: "Simulazione 7",
        loadQuestions: () =>
            import("./simulation07.js").then(
                (module) => module.default,
            ),
    },
    {
        id: "simulation-08",
        number: 8,
        title: "Simulazione 8",
        loadQuestions: () =>
            import("./simulation08.js").then(
                (module) => module.default,
            ),
    },
    {
        id: "simulation-09",
        number: 9,
        title: "Simulazione 9",
        loadQuestions: () =>
            import("./simulation09.js").then(
                (module) => module.default,
            ),
    },
    {
        id: "simulation-10",
        number: 10,
        title: "Simulazione 10",
        loadQuestions: () =>
            import("./simulation10.js").then(
                (module) => module.default,
            ),
    },
    {
        id: "simulation-11",
        number: 11,
        title: "Simulazione 11",
        loadQuestions: () =>
            import("./simulation11.js").then(
                (module) => module.default,
            ),
    },
    {
        id: "simulation-12",
        number: 12,
        title: "Simulazione 12",
        loadQuestions: () =>
            import("./simulation12.js").then(
                (module) => module.default,
            ),
    },
    {
        id: "simulation-13",
        number: 13,
        title: "Simulazione 13",
        loadQuestions: () =>
            import("./simulation13.js").then(
                (module) => module.default,
            ),
    },
    {
        id: "simulation-14",
        number: 14,
        title: "Simulazione 14",
        loadQuestions: () =>
            import("./simulation14.js").then(
                (module) => module.default,
            ),
    }
];

export default simulations;