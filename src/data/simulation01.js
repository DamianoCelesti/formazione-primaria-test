const simulation01 = [
    {
        id: 1,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,

        question:
            "Quale delle seguenti affermazioni descrive correttamente il rapporto tra informazione e conoscenza?",

        answers: [
            {
                id: "A",
                text: "Ogni informazione acquisita diventa automaticamente conoscenza.",
                correct: false,
                explanation:
                    "È errata perché possedere un'informazione non implica necessariamente averla compresa o collegata alle conoscenze precedenti.",
            },
            {
                id: "B",
                text: "La conoscenza richiede anche interpretazione e collegamento delle informazioni.",
                correct: true,
                explanation:
                    "È corretta perché la conoscenza non consiste soltanto nel reperire informazioni, ma anche nel comprenderle, interpretarle e metterle in relazione.",
            },
            {
                id: "C",
                text: "Informazione e conoscenza sono sinonimi.",
                correct: false,
                explanation:
                    "È errata perché i due concetti non coincidono: l'informazione costituisce un dato, mentre la conoscenza implica elaborazione e comprensione.",
            },
            {
                id: "D",
                text: "La conoscenza dipende esclusivamente dalla quantità di informazioni disponibili.",
                correct: false,
                explanation:
                    "È errata perché una maggiore quantità di informazioni non garantisce una maggiore comprensione.",
            },
        ],
    },

    {
        id: 2,
        area: "cultura",
        category: "letteratura",
        difficulty: 3,

        question:
            "Quale concetto è particolarmente legato alla poetica di Giacomo Leopardi?",

        answers: [
            {
                id: "A",
                text: "Il superuomo",
                correct: false,
                explanation:
                    "Il concetto di superuomo è associato soprattutto a Gabriele D'Annunzio e all'influenza della filosofia di Nietzsche.",
            },
            {
                id: "B",
                text: "L'umorismo",
                correct: false,
                explanation:
                    "L'umorismo è un concetto centrale della poetica di Luigi Pirandello.",
            },
            {
                id: "C",
                text: "La teoria del piacere",
                correct: true,
                explanation:
                    "È corretta. Nella riflessione leopardiana l'essere umano tende verso un piacere infinito che nessun piacere concreto e limitato riesce a soddisfare completamente.",
            },
            {
                id: "D",
                text: "Il Futurismo",
                correct: false,
                explanation:
                    "Il Futurismo nasce all'inizio del Novecento, molti decenni dopo Leopardi.",
            },
        ],
    },

    {
        id: 3,
        area: "matematico-scientifica",
        category: "biologia",
        difficulty: 2,

        question:
            "Quale organulo cellulare è maggiormente coinvolto nella produzione di ATP attraverso la respirazione cellulare?",

        answers: [
            {
                id: "A",
                text: "Ribosoma",
                correct: false,
                explanation:
                    "I ribosomi sono principalmente responsabili della sintesi delle proteine.",
            },
            {
                id: "B",
                text: "Mitocondrio",
                correct: true,
                explanation:
                    "È corretto. Nelle cellule eucariotiche i mitocondri sono la sede principale della respirazione cellulare e della produzione di ATP.",
            },
            {
                id: "C",
                text: "Lisosoma",
                correct: false,
                explanation:
                    "I lisosomi partecipano principalmente alla degradazione e al riciclo di materiali cellulari.",
            },
            {
                id: "D",
                text: "Apparato di Golgi",
                correct: false,
                explanation:
                    "L'apparato di Golgi modifica, organizza e distribuisce proteine e lipidi, ma non è la sede principale della produzione di ATP.",
            },
        ],
    },
];

export default simulation01;