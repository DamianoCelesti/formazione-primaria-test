import comprensioneDelTesto from "../content/study/linguistica-logica/comprensione-del-testo.md?raw";

import lessicoESignificato from "../content/study/linguistica-logica/lessico-e-significato-delle-parole.md?raw";

import grammaticaItaliana from "../content/study/linguistica-logica/grammatica-italiana.md?raw";

import grammaticaItalianaParte2 from "../content/study/linguistica-logica/grammatica-italiana-parte-2.md?raw";

import analisiLogica from "../content/study/linguistica-logica/analisi-logica.md?raw";

import analisiLogicaParte2 from "../content/study/linguistica-logica/analisi-logica-parte-2.md?raw";

import analisiDelPeriodo from "../content/study/linguistica-logica/analisi-del-periodo.md?raw";

import analisiDelPeriodoParte2 from "../content/study/linguistica-logica/analisi-del-periodo-parte-2.md?raw";

import logicaDeduzioniEInferenze from "../content/study/linguistica-logica/logica-deduzioni-e-inferenze.md?raw";

import logicaDeduzioniEInferenzeParte2 from "../content/study/linguistica-logica/logica-deduzioni-e-inferenze-parte-2.md?raw";

import logicaSillogismi from "../content/study/linguistica-logica/logica-sillogismi.md?raw";

import logicaRelazioniOrdinamenti from "../content/study/linguistica-logica/logica-relazioni-logiche-e-ordinamenti.md?raw";

import logicaProblemiVincoli from "../content/study/linguistica-logica/logica-problemi-con-vincoli-e-piu-condizioni.md?raw";

import logicaProblemiVincoliParte2 from "../content/study/linguistica-logica/logica-problemi-con-vincoli-e-piu-condizioni-parte-2.md?raw";

import logicaSerieNumeriche from "../content/study/linguistica-logica/logica-serie-numeriche.md?raw";

import logicaSerieAlfabetiche from "../content/study/linguistica-logica/logica-serie-alfabetiche.md?raw";

import logicaSerieMiste from "../content/study/linguistica-logica/logica-serie-miste.md?raw";

const studyTopics = [
    {
        id: "comprensione-del-testo",
        area: "linguistica-logica",
        areaTitle: "Competenza linguistica e logica",
        number: 1,
        title: "Comprensione del testo",
        description:
            "Significato globale, tema, idea principale, tesi, informazioni esplicite e implicite, inferenze, coerenza e coesione.",
        content: comprensioneDelTesto,
    },

    {
        id: "lessico-e-significato-delle-parole",
        area: "linguistica-logica",
        areaTitle: "Competenza linguistica e logica",
        number: 2,
        title: "Lessico e significato delle parole",
        description:
            "Significato delle parole nel contesto, sinonimi e contrari, polisemia, significato letterale e figurato.",
        content: lessicoESignificato,
    },

    {
        id: "grammatica-italiana",
        area: "linguistica-logica",
        areaTitle: "Competenza linguistica e logica",
        number: 3,
        title: "Grammatica italiana",
        description:
            "Parti del discorso, verbi, pronomi, preposizioni, congiunzioni, concordanza, ortografia e punteggiatura.",
        content: grammaticaItaliana,
    },
    {
        id: "grammatica-italiana-parte-2",
        area: "linguistica-logica",
        areaTitle: "Competenza linguistica e logica",
        number: 4,
        title: "Grammatica italiana — Parte 2 di 2",
        description:
            "Seconda parte dello studio della grammatica italiana, con completamento delle regole e degli argomenti grammaticali previsti.",
        content: grammaticaItalianaParte2,
    },
    {
        id: "analisi-logica",
        area: "linguistica-logica",
        areaTitle: "Competenza linguistica e logica",
        number: 5,
        title: "Analisi logica",
        description:
            "Soggetto, predicato verbale e nominale, complemento oggetto e principali complementi indiretti.",
        content: analisiLogica,
    },
    {
        id: "analisi-logica-parte-2",
        area: "linguistica-logica",
        areaTitle: "Competenza linguistica e logica",
        number: 6,
        title: "Analisi logica — Parte 2 di 2",
        description:
            "Principali complementi indiretti: specificazione, termine, causa, fine, mezzo, modo, compagnia, luogo, tempo e altri complementi fondamentali.",
        content: analisiLogicaParte2,
    },
    {
        id: "analisi-del-periodo",
        area: "linguistica-logica",
        areaTitle: "Competenza linguistica e logica",
        number: 7,
        title: "Analisi del periodo",
        description:
            "Proposizione principale, coordinate, subordinate e riconoscimento dei principali tipi di proposizione subordinata.",
        content: analisiDelPeriodo,
    },
    {
        id: "analisi-del-periodo-parte-2",
        area: "linguistica-logica",
        areaTitle: "Competenza linguistica e logica",
        number: 8,
        title: "Analisi del periodo — Parte 2 di 2",
        description:
            "Principali tipi di proposizione subordinata: soggettive, oggettive, dichiarative, relative, causali, finali, temporali, consecutive, concessive, condizionali e altre subordinate fondamentali.",
        content: analisiDelPeriodoParte2,
    },
    {
        id: "logica-deduzioni-e-inferenze",
        area: "linguistica-logica",
        areaTitle: "Competenza linguistica e logica",
        number: 9,
        title: "Logica — Deduzioni e inferenze",
        description:
            "Deduzioni, inferenze, conseguenze logiche, condizioni necessarie e sufficienti e riconoscimento delle conclusioni corrette.",
        content: logicaDeduzioniEInferenze,
    },
    {
        id: "logica-deduzioni-e-inferenze-parte-2",
        area: "linguistica-logica",
        areaTitle: "Competenza linguistica e logica",
        number: 10,
        title: "Logica — Deduzioni e inferenze — Parte 2 di 2",
        description:
            "Implicazioni logiche, condizioni necessarie e sufficienti, negazioni, quantificatori e trasformazioni delle proposizioni.",
        content: logicaDeduzioniEInferenzeParte2,
    },
    {
        id: "logica-sillogismi",
        area: "linguistica-logica",
        areaTitle: "Competenza linguistica e logica",
        number: 11,
        title: "Logica — Sillogismi",
        description:
            "Sillogismi, premesse, conclusioni, validità del ragionamento e riconoscimento delle deduzioni corrette.",
        content: logicaSillogismi,
    },
    {
        id: "logica-relazioni-logiche-e-ordinamenti",
        area: "linguistica-logica",
        areaTitle: "Competenza linguistica e logica",
        number: 12,
        title: "Logica — Relazioni logiche e ordinamenti",
        description:
            "Relazioni tra elementi, ordinamenti, confronti, sequenze e ricostruzione di posizioni sulla base di vincoli logici.",
        content: logicaRelazioniOrdinamenti,
    },
    {
        id: "logica-problemi-con-vincoli-e-piu-condizioni",
        area: "linguistica-logica",
        areaTitle: "Competenza linguistica e logica",
        number: 13,
        title: "Logica — Problemi logici con vincoli e più condizioni",
        description:
            "Problemi con più condizioni simultanee, esclusioni, assegnazioni, ordinamenti, compatibilità tra vincoli e individuazione dell'unica soluzione possibile.",
        content: logicaProblemiVincoli,
    },
    {
        id: "logica-problemi-con-vincoli-e-piu-condizioni-parte-2",
        area: "linguistica-logica",
        areaTitle: "Competenza linguistica e logica",
        number: 14,
        title: "Logica — Problemi logici con vincoli e più condizioni — Parte 2 di 2",
        description:
            "Seconda parte sui problemi logici complessi: combinazione di più vincoli, esclusioni, casi possibili e verifica sistematica delle soluzioni.",
        content: logicaProblemiVincoliParte2,
    },
    {
        id: "logica-serie-numeriche",
        area: "linguistica-logica",
        areaTitle: "Competenza linguistica e logica",
        number: 15,
        title: "Logica — Serie numeriche",
        description:
            "Riconoscimento delle regole nelle successioni numeriche, differenze, rapporti, alternanze, progressioni e completamento delle serie.",
        content: logicaSerieNumeriche,
    },
    {
        id: "logica-serie-alfabetiche",
        area: "linguistica-logica",
        areaTitle: "Competenza linguistica e logica",
        number: 16,
        title: "Logica — Serie alfabetiche",
        description:
            "Riconoscimento di regole nelle successioni di lettere, salti alfabetici, alternanze, schemi ripetitivi e completamento delle serie.",
        content: logicaSerieAlfabetiche,
    },
    {
        id: "logica-serie-miste",
        area: "linguistica-logica",
        areaTitle: "Competenza linguistica e logica",
        number: 17,
        title: "Logica — Serie miste",
        description:
            "Serie che combinano numeri, lettere, simboli o più regole contemporaneamente, con individuazione dello schema e completamento della successione.",
        content: logicaSerieMiste,
    },
];

export default studyTopics;