const passages16 = {
    passage01: `L’uomo è un animale eminentemente sociale la cui vita dipende dalla capacità di capire cosa fanno gli altri, comprendendone le intenzioni e interpretandone i sentimenti. Senza questa capacità gli esseri umani non riuscirebbero a interagire gli uni con gli altri, né tanto meno a creare forme di convivenza sociale.

Secondo il punto di vista tradizionale, le azioni degli altri, come pure le loro intenzioni e le loro emozioni, sono comprese mediante un processo inferenziale sostanzialmente simile a quello che usiamo per individuare le cause di fenomeni puramente fisici. In base a questo punto di vista, quando osserviamo una persona agire, il nostro sistema nervoso capta, mediante la vista e le altre modalità sensoriali, una serie di informazioni che un complesso apparato cognitivo elabora e paragona con precedenti esperienze simili. Alla fine di questo processo l’osservatore ha capito cosa fanno gli altri e quali sono le loro intenzioni.

Diversa è invece la teoria secondo la quale il meccanismo che ci permette di capire le azioni degli altri è radicalmente diverso da quelli impiegati per spiegare i processi fisici. Secondo questa impostazione, noi capiamo gli altri perché ci mettiamo ‘nei loro panni’, ci immaginiamo nella loro situazione e ‘simuliamo’ quello che faremmo se davvero fossimo in quel frangente. Volendo fare un paragone tra i due sistemi di comprensione sopra richiamati, potremmo dire che il primo ricalca l’atteggiamento tipico del detective (pensiamo, per es., alle sottili analisi di uno Sherlock Holmes), mentre il secondo rimanda alla comprensione in prima persona cara a molti fenomenologi e, in particolare, a Maurice Merleau-Ponty.

È possibile che, in certe condizioni, l’osservatore adotti effettivamente un atteggiamento alla Sherlock Holmes. Così come è possibile che in altre condizioni adotti un atteggiamento simulativo. Tuttavia, la mancanza di sforzo e la facilità con le quali normalmente viene compreso il comportamento degli altri suggeriscono che possa esistere un diverso meccanismo, indubbiamente più diretto e immediato di quelli citati, che ci permetterebbe di capire gli altri senza la mediazione di processi inferenziali o la simulazione attiva del comportamento altrui.`,

    passage02: `Nazione, Costituzione e partiti

Per valutare appieno il significato dell’art. 5 della Costituzione, nel quale si riconoscono tra i principi fondamentali quelli dell’autonomia e del decentramento, bisognerà ricordare che tale riconoscimento proviene da una Repubblica definita «una e indivisibile». Di fatto, l’intero testo costituzionale si ispira alla volontà dei costituenti di rifondare l’unità della nazione ‒ ancora immersa dopo il fascismo e la guerra in laceranti contrasti politici e ideologici (e in memorie divise) ‒ sopra un patto comune circa le finalità democratiche e antifasciste (riassunte nei Principi fondamentali), nonché sulla riasserita necessità di «riservare all’autorità dello Stato centralizzato la funzione unificatrice che essa aveva sempre avuto» (Romanelli 1995, p. 164).

Cruciale in questo patto è il ruolo che la Costituzione assegna al partito politico, un disegno che accomuna le culture politiche protagoniste del dopoguerra (in particolare quelle cattolica, socialista e comunista). Quando i costituenti dibattono e si impegnano nel definire il posto che ai partiti spetta nella democrazia repubblicana, essi hanno in mente non solo il ristabilimento del loro primario compito di rappresentanza, ma anche una sorta di indiretta loro missione pedagogica per aiutare il paese a superare i guasti morali provocati dal passato fascista. Ai partiti si attribuisce, cioè, non solo la funzione di raccogliere le domande espresse dalla società e di raccordarle, prima di presentarle alla soglia dell’esecutivo, ma anche quella di aiutare la società a formulare tali domande in termini ‘politici’ e ‘universali’ (come previsto dall’art. 1, 2° comma: «La sovranità appartiene al popolo, che la esercita nelle forme e nei limiti della Costituzione»).`,
};

const simulation16 = [
    {
        id: 1,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages16.passage01,
        question:
            "Con quale definizione è ripresa alla fine del testo la teoria complessivamente esposta nel secondo capoverso?",
        answers: [
            {
                id: "A",
                text: "Simulazione attiva del comportamento altrui",
                correct: false,
                explanation:
                    "La simulazione attiva riguarda la seconda teoria descritta nel brano, secondo la quale comprendiamo gli altri mettendoci «nei loro panni». Il secondo capoverso espone invece il punto di vista tradizionale basato su un processo inferenziale.",
            },
            {
                id: "B",
                text: "Comprensione in prima persona",
                correct: false,
                explanation:
                    "La «comprensione in prima persona» è associata alla teoria simulativa e all'approccio fenomenologico. Non è la definizione con cui viene ripresa la teoria del secondo capoverso.",
            },
            {
                id: "C",
                text: "Mediazione di processi inferenziali",
                correct: true,
                explanation:
                    "Nel secondo capoverso la comprensione delle azioni e delle intenzioni degli altri viene descritta come un processo inferenziale. Alla fine del testo questa spiegazione viene richiamata con l'espressione «mediazione di processi inferenziali».",
            },
            {
                id: "D",
                text: "Atteggiamento alla Sherlock Holmes",
                correct: false,
                explanation:
                    "Sherlock Holmes viene utilizzato come paragone per spiegare il funzionamento della teoria inferenziale, ma non è la definizione con cui essa viene ripresa esplicitamente alla fine del testo.",
            },
        ],
    },

    {
        id: 2,
        area: "linguistica-logica",
        category: "lessico-comprensione",
        difficulty: 2,
        passage: passages16.passage01,
        question:
            "Fra le definizioni proposte sotto per termini contenuti nel brano, individuate l’unica corretta.",
        answers: [
            {
                id: "A",
                text: "Frangente: ‘situazione’",
                correct: true,
                explanation:
                    "Nel contesto «se davvero fossimo in quel frangente», «frangente» indica una particolare situazione o circostanza. È quindi la definizione corretta.",
            },
            {
                id: "B",
                text: "Fenomenologo: ‘scienziato’",
                correct: false,
                explanation:
                    "Un fenomenologo è uno studioso o filosofo che segue o studia la fenomenologia. Non è semplicemente sinonimo di «scienziato».",
            },
            {
                id: "C",
                text: "Eminentemente: ‘esclusivamente’",
                correct: false,
                explanation:
                    "«Eminentemente» significa principalmente, soprattutto, in modo particolare. «Esclusivamente» significherebbe invece soltanto e senza eccezioni.",
            },
            {
                id: "D",
                text: "Inferenziale: ‘simile’",
                correct: false,
                explanation:
                    "«Inferenziale» indica qualcosa basato sull'inferenza, cioè sul ricavare una conclusione a partire da determinate informazioni. Non significa «simile».",
            },
        ],
    },

    {
        id: 3,
        area: "linguistica-logica",
        category: "grammatica-sintassi",
        difficulty: 2,
        passage: passages16.passage01,
        question:
            "I verbi elabora e paragona (r. 10) hanno come soggetto:",
        answers: [
            {
                id: "A",
                text: "Serie",
                correct: false,
                explanation:
                    "«Serie» appartiene all'espressione «una serie di informazioni» ed è parte di ciò che viene captato dal sistema nervoso. Non è il soggetto di «elabora» e «paragona».",
            },
            {
                id: "B",
                text: "Informazioni",
                correct: false,
                explanation:
                    "Le informazioni sono ciò che viene elaborato e paragonato. Hanno quindi funzione di oggetto rispetto alle azioni espresse dai verbi.",
            },
            {
                id: "C",
                text: "Complesso",
                correct: false,
                explanation:
                    "«Complesso» è un aggettivo che qualifica il sostantivo «apparato». Non rappresenta da solo il nucleo del soggetto.",
            },
            {
                id: "D",
                text: "Apparato",
                correct: true,
                explanation:
                    "La frase dice che «un complesso apparato cognitivo elabora e paragona» le informazioni. Il nucleo del soggetto è quindi «apparato».",
            },
        ],
    },

    {
        id: 4,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages16.passage01,
        question:
            "Arrivati alla fine della lettura del testo, quante sarebbero le ipotesi in campo (già descritte nel testo o solo preannunciate) che cercano di spiegare la capacità umana di comprendere gli altri?",
        answers: [
            {
                id: "A",
                text: "Due",
                correct: false,
                explanation:
                    "Due teorie vengono descritte dettagliatamente, ma nel finale viene preannunciata anche una terza possibilità, basata su un meccanismo più diretto e immediato.",
            },
            {
                id: "B",
                text: "Tre",
                correct: true,
                explanation:
                    "Le ipotesi sono tre: il processo inferenziale, la simulazione e un terzo meccanismo più diretto che permetterebbe di comprendere gli altri senza inferenza né simulazione attiva.",
            },
            {
                id: "C",
                text: "Quattro",
                correct: false,
                explanation:
                    "Il testo non presenta quattro meccanismi distinti. Il riferimento a Sherlock Holmes e alla comprensione in prima persona serve a spiegare le prime due teorie.",
            },
            {
                id: "D",
                text: "Una",
                correct: false,
                explanation:
                    "Il brano mette esplicitamente a confronto più spiegazioni della comprensione del comportamento altrui.",
            },
        ],
    },

    {
        id: 5,
        area: "linguistica-logica",
        category: "lessico-connettivi",
        difficulty: 3,
        passage: passages16.passage02,
        question:
            "Quali fra le espressioni seguenti sono equivalenti per funzione e significato alla locuzione congiuntiva di fatto (r. 4)?",
        answers: [
            {
                id: "A",
                text: "Pertanto, per questa ragione",
                correct: false,
                explanation:
                    "Queste espressioni introducono principalmente una conseguenza. Nel brano «di fatto» introduce invece una precisazione sulla realtà della situazione.",
            },
            {
                id: "B",
                text: "Difatti, infatti",
                correct: false,
                explanation:
                    "«Infatti» e «difatti» hanno soprattutto valore esplicativo o confermativo. Nel contesto specifico del testo il senso è più vicino a «in realtà».",
            },
            {
                id: "C",
                text: "A ben vedere, in realtà",
                correct: true,
                explanation:
                    "«Di fatto» viene utilizzato con il significato di «in realtà», introducendo ciò che concretamente emerge dal testo costituzionale. Anche «a ben vedere» mantiene un valore simile.",
            },
            {
                id: "D",
                text: "Di qui, in conseguenza di questo",
                correct: false,
                explanation:
                    "Le due espressioni indicano una conseguenza derivante da ciò che precede e non hanno lo stesso valore di «di fatto».",
            },
        ],
    },

    {
        id: 6,
        area: "linguistica-logica",
        category: "lessico-sinonimi",
        difficulty: 2,
        passage: passages16.passage02,
        question:
            "Cosa significa riasserita (r. 8)?",
        answers: [
            {
                id: "A",
                text: "Ferma, indiscutibile",
                correct: false,
                explanation:
                    "Queste parole descrivono qualcosa di deciso o non contestabile, ma non esprimono l'idea del riaffermare qualcosa.",
            },
            {
                id: "B",
                text: "Riorganizzata, ristabilita",
                correct: false,
                explanation:
                    "«Ristabilita» indica qualcosa che viene ripristinato. «Riasserita» significa invece affermata nuovamente.",
            },
            {
                id: "C",
                text: "Seria, misurata",
                correct: false,
                explanation:
                    "Questi aggettivi non hanno relazione diretta con il significato del verbo «riasserire».",
            },
            {
                id: "D",
                text: "Ribadita, riconfermata",
                correct: true,
                explanation:
                    "«Riasserire» significa affermare nuovamente qualcosa, confermandolo. «Ribadita» e «riconfermata» sono quindi sinonimi appropriati.",
            },
        ],
    },

    {
        id: 7,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages16.passage02,
        question:
            "Il compito di aiutare la società a formulare le sue istanze in termini ‘politici’ e ‘universali’ (r. 19) rappresenta, secondo il testo:",
        answers: [
            {
                id: "A",
                text: "La “missione pedagogica” dei partiti",
                correct: true,
                explanation:
                    "Il testo attribuisce ai partiti anche una missione pedagogica: aiutare la società a formulare le proprie richieste in termini politici e universali.",
            },
            {
                id: "B",
                text: "La funzione di “raccogliere le domande” espresse dalla società",
                correct: false,
                explanation:
                    "La raccolta delle domande sociali è una funzione distinta. Qui si parla dell'aiuto offerto alla società affinché impari a formulare politicamente quelle richieste.",
            },
            {
                id: "C",
                text: "Il disegno che accomuna le maggiori forze politiche del tempo",
                correct: false,
                explanation:
                    "Il disegno comune riguarda più in generale il ruolo assegnato ai partiti. La funzione specifica descritta dalla domanda è definita «missione pedagogica».",
            },
            {
                id: "D",
                text: "Il “compito di rappresentanza” dei partiti",
                correct: false,
                explanation:
                    "Il testo distingue esplicitamente il tradizionale compito di rappresentanza dalla missione pedagogica dei partiti.",
            },
        ],
    },

    {
        id: 8,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages16.passage02,
        question:
            "Cosa si intende con il termine costituenti?",
        answers: [
            {
                id: "A",
                text: "I partiti politici dell’epoca",
                correct: false,
                explanation:
                    "I partiti parteciparono al processo politico dell'epoca, ma il termine «costituenti» indica specificamente i membri dell'organo incaricato di elaborare la Costituzione.",
            },
            {
                id: "B",
                text: "I membri dell’Assemblea Costituente",
                correct: true,
                explanation:
                    "I costituenti erano i membri dell'Assemblea Costituente eletta nel 1946 e incaricata di elaborare la Costituzione repubblicana.",
            },
            {
                id: "C",
                text: "I principi fondamentali su cui si basa la Costituzione",
                correct: false,
                explanation:
                    "I principi fondamentali sono una parte della Costituzione, ma non sono indicati con il termine «costituenti».",
            },
            {
                id: "D",
                text: "I rappresentanti del governo dell’epoca",
                correct: false,
                explanation:
                    "L'Assemblea Costituente era un organo distinto dal Governo e aveva il compito specifico di redigere il nuovo testo costituzionale.",
            },
        ],
    },

    {
        id: 9,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages16.passage02,
        question:
            "Come può essere riformulata l’espressione presentarle alla soglia dell’esecutivo (r. 17-18)?",
        answers: [
            {
                id: "A",
                text: "Renderle accettabili al governo",
                correct: false,
                explanation:
                    "Il testo non parla di modificare le richieste affinché il Governo le consideri accettabili. Parla invece del loro passaggio verso l'esecutivo.",
            },
            {
                id: "B",
                text: "Renderne fattibile l’esecuzione",
                correct: false,
                explanation:
                    "L'espressione non riguarda la concreta realizzazione delle richieste, ma il fatto di sottoporle all'autorità esecutiva.",
            },
            {
                id: "C",
                text: "Renderle accettabili al parlamento",
                correct: false,
                explanation:
                    "Il termine «esecutivo» indica il Governo, non il Parlamento.",
            },
            {
                id: "D",
                text: "Presentarle al governo perché le esamini",
                correct: true,
                explanation:
                    "L'esecutivo corrisponde al Governo. Portare le domande «alla soglia dell'esecutivo» significa quindi presentarle al Governo perché vengano considerate.",
            },
        ],
    },

    {
        id: 10,
        area: "linguistica-logica",
        category: "lessico-uso-delle-parole",
        difficulty: 3,
        question:
            "Quale è l’elemento linguistico inappropriato in questa frase: «Cosa ci fai qui?» Jake non esitò e gli porse il quesito che gli era balzato nella mente non appena lo aveva scorto fare la sua inaspettata comparsa. (Rossana Lozzio, Talent love, PubMe, 2018)",
        answers: [
            {
                id: "A",
                text: "Non inaspettata ma inattesa",
                correct: false,
                explanation:
                    "«Inaspettata comparsa» è un'espressione corretta. «Inattesa» sarebbe possibile, ma la sostituzione non è necessaria.",
            },
            {
                id: "B",
                text: "Non scorto ma scorso",
                correct: false,
                explanation:
                    "«Scorto» è il participio passato di «scorgere» e significa visto. È quindi corretto; «scorso» avrebbe un altro significato.",
            },
            {
                id: "C",
                text: "Non porse ma pose",
                correct: true,
                explanation:
                    "Si dice «porre un quesito», non «porgere un quesito». «Porgere» viene usato soprattutto per offrire o consegnare qualcosa.",
            },
            {
                id: "D",
                text: "Non ci fai ma fai",
                correct: false,
                explanation:
                    "«Cosa ci fai qui?» è una costruzione corretta e comune. Il pronome «ci» ha valore locativo.",
            },
        ],
    },

    {
        id: 11,
        area: "linguistica-logica",
        category: "lessico-nomi-collettivi",
        difficulty: 2,
        question:
            "Quale fra i seguenti termini collettivi per animali si usa nel caso dei ‘cani da caccia’ o ‘da tiro’?",
        answers: [
            {
                id: "A",
                text: "muta",
                correct: true,
                explanation:
                    "«Muta» è il nome collettivo utilizzato specificamente per un gruppo di cani impiegati insieme nella caccia o nel traino.",
            },
            {
                id: "B",
                text: "gregge",
                correct: false,
                explanation:
                    "«Gregge» indica principalmente un insieme di pecore o capre.",
            },
            {
                id: "C",
                text: "stormo",
                correct: false,
                explanation:
                    "«Stormo» indica soprattutto un gruppo di uccelli, specialmente quando volano insieme.",
            },
            {
                id: "D",
                text: "branco",
                correct: false,
                explanation:
                    "«Branco» può indicare genericamente un gruppo di animali, ma per i cani da caccia o da tiro il termine specifico è «muta».",
            },
        ],
    },

    {
        id: 12,
        area: "linguistica-logica",
        category: "ortografia",
        difficulty: 1,
        question:
            "Trovate la forma errata in questa serie: là, cioè, stò, sì, dì:",
        answers: [
            {
                id: "A",
                text: "dì",
                correct: false,
                explanation:
                    "«Dì» con accento è corretto quando significa «giorno» o quando rappresenta l'imperativo del verbo dire.",
            },
            {
                id: "B",
                text: "stò",
                correct: true,
                explanation:
                    "La forma corretta della prima persona singolare del presente di «stare» è «sto», senza accento. «Stò» è quindi errato.",
            },
            {
                id: "C",
                text: "sì",
                correct: false,
                explanation:
                    "«Sì» con accento è corretto quando viene utilizzato come avverbio affermativo.",
            },
            {
                id: "D",
                text: "Non ci sono forme errate",
                correct: false,
                explanation:
                    "Una forma errata è presente: «stò».",
            },
        ],
    },

    {
        id: 13,
        area: "linguistica-logica",
        category: "lessico-modi-di-dire",
        difficulty: 1,
        question:
            "Quale fra le seguenti alternative è quella corretta?",
        answers: [
            {
                id: "A",
                text: "È stata una vittoria sul filo di lama",
                correct: false,
                explanation:
                    "«Sul filo di lama» non è la locuzione idiomatica utilizzata per indicare una vittoria ottenuta per pochissimo.",
            },
            {
                id: "B",
                text: "È stata una vittoria sul filo di lima",
                correct: false,
                explanation:
                    "«Sul filo di lima» non è un'espressione italiana cristallizzata.",
            },
            {
                id: "C",
                text: "È stata una vittoria sul filo di limo",
                correct: false,
                explanation:
                    "«Sul filo di limo» è una deformazione dell'espressione corretta.",
            },
            {
                id: "D",
                text: "È stata una vittoria sul filo di lana",
                correct: true,
                explanation:
                    "«Vincere sul filo di lana» significa ottenere una vittoria per pochissimo, proprio in prossimità del traguardo.",
            },
        ],
    },

    {
        id: 14,
        area: "linguistica-logica",
        category: "lessico-antonimi",
        difficulty: 2,
        question:
            "Quale fra le seguenti è una coppia di antonimi?",
        answers: [
            {
                id: "A",
                text: "stantio - raffermo",
                correct: false,
                explanation:
                    "«Stantio» e «raffermo» hanno significati molto simili e indicano qualcosa che non è più fresco.",
            },
            {
                id: "B",
                text: "limpido - pulito",
                correct: false,
                explanation:
                    "«Limpido» e «pulito» appartengono a un campo semantico simile e non sono contrari.",
            },
            {
                id: "C",
                text: "vetusto - moderno",
                correct: true,
                explanation:
                    "«Vetusto» significa molto antico, mentre «moderno» indica qualcosa di recente o contemporaneo. Sono quindi antonimi.",
            },
            {
                id: "D",
                text: "viscido - mollusco",
                correct: false,
                explanation:
                    "«Viscido» è un aggettivo, mentre «mollusco» indica un animale. Non sono termini di significato opposto.",
            },
        ],
    },

    {
        id: 15,
        area: "linguistica-logica",
        category: "lessico-locuzioni",
        difficulty: 2,
        question:
            "Quale fra le seguenti alternative è quella corretta?",
        answers: [
            {
                id: "A",
                text: "Il pompiere ha dimostrato coraggio e sprezzo del pericolo",
                correct: true,
                explanation:
                    "La locuzione italiana corretta è «sprezzo del pericolo», che indica un atteggiamento di coraggio e noncuranza davanti al rischio.",
            },
            {
                id: "B",
                text: "Il pompiere ha dimostrato coraggio e sprazzo del pericolo",
                correct: false,
                explanation:
                    "«Sprazzo» indica un breve lampo o una manifestazione improvvisa e non appartiene alla locuzione.",
            },
            {
                id: "C",
                text: "Il pompiere ha dimostrato coraggio e sfregio del pericolo",
                correct: false,
                explanation:
                    "«Sfregio» indica un'offesa, una ferita o un danno deturpante e non è il termine corretto.",
            },
            {
                id: "D",
                text: "Il pompiere ha dimostrato coraggio e spregio del pericolo",
                correct: false,
                explanation:
                    "La forma cristallizzata dell'espressione è «sprezzo del pericolo», non «spregio del pericolo».",
            },
        ],
    },

    {
        id: 16,
        area: "linguistica-logica",
        category: "logica-classificazione",
        difficulty: 2,
        question:
            "Quale fra i termini che seguono continua adeguatamente questa serie di termini: vegetale > albero > conifera > …",
        answers: [
            {
                id: "A",
                text: "latifoglia",
                correct: false,
                explanation:
                    "Le latifoglie costituiscono una categoria differente rispetto alle conifere e non sono una sottocategoria di queste ultime.",
            },
            {
                id: "B",
                text: "abete",
                correct: true,
                explanation:
                    "La serie procede dal generale al particolare: vegetale → albero → conifera → abete. L'abete è infatti un tipo di conifera.",
            },
            {
                id: "C",
                text: "cespuglio",
                correct: false,
                explanation:
                    "Il cespuglio è una forma vegetale diversa e non rappresenta un tipo specifico di conifera.",
            },
            {
                id: "D",
                text: "foglia",
                correct: false,
                explanation:
                    "La foglia è una parte della pianta e non una categoria più specifica all'interno delle conifere.",
            },
        ],
    },

    {
        id: 17,
        area: "linguistica-logica",
        category: "grammatica-preposizioni",
        difficulty: 2,
        question:
            "Quale fra i seguenti elementi linguistici NON può, dal punto di vista sintattico, essere usato come preposizione (di qualsiasi tipo)?",
        answers: [
            {
                id: "A",
                text: "dietro",
                correct: false,
                explanation:
                    "«Dietro» può essere utilizzato con funzione preposizionale, come in «dietro la porta».",
            },
            {
                id: "B",
                text: "a causa di",
                correct: false,
                explanation:
                    "«A causa di» è una locuzione preposizionale utilizzata per introdurre una causa.",
            },
            {
                id: "C",
                text: "finché",
                correct: true,
                explanation:
                    "«Finché» è una congiunzione subordinante, normalmente con valore temporale. Non può svolgere funzione di preposizione.",
            },
            {
                id: "D",
                text: "davanti a",
                correct: false,
                explanation:
                    "«Davanti a» è una locuzione preposizionale, come in «davanti alla scuola».",
            },
        ],
    },

    {
        id: 18,
        area: "linguistica-logica",
        category: "grammatica-verbi",
        difficulty: 2,
        question:
            "Quale fra queste coppie di voci verbali è in opposizione secondo la categoria grammaticale della persona?",
        answers: [
            {
                id: "A",
                text: "mangiai ≠ mangerei",
                correct: false,
                explanation:
                    "Entrambe sono forme di prima persona singolare. Cambiano modo e tempo, ma non la persona.",
            },
            {
                id: "B",
                text: "mangiai ≠ mangio",
                correct: false,
                explanation:
                    "Sono entrambe alla prima persona singolare e differiscono principalmente per il tempo verbale.",
            },
            {
                id: "C",
                text: "mangiai ≠ mangiavo",
                correct: false,
                explanation:
                    "Anche queste sono entrambe forme della prima persona singolare e si oppongono per il tempo.",
            },
            {
                id: "D",
                text: "mangiai ≠ mangiasti",
                correct: true,
                explanation:
                    "«Mangiai» è prima persona singolare, mentre «mangiasti» è seconda persona singolare. La differenza riguarda quindi la categoria grammaticale della persona.",
            },
        ],
    },

    {
        id: 19,
        area: "linguistica-logica",
        category: "grammatica-pronomi-aggettivi",
        difficulty: 2,
        question:
            "Questo e quello (fra gli altri) sono:",
        answers: [
            {
                id: "A",
                text: "Pronomi possessivi",
                correct: false,
                explanation:
                    "I possessivi sono forme come «mio», «tuo» e «suo». «Questo» e «quello» non indicano possesso.",
            },
            {
                id: "B",
                text: "Pronomi e aggettivi dimostrativi",
                correct: true,
                explanation:
                    "«Questo» e «quello» sono dimostrativi. Possono essere aggettivi quando accompagnano un nome, come «questo libro», oppure pronomi quando lo sostituiscono, come «voglio questo».",
            },
            {
                id: "C",
                text: "Pronomi dimostrativi",
                correct: false,
                explanation:
                    "La definizione è incompleta perché «questo» e «quello» possono funzionare non solo come pronomi ma anche come aggettivi dimostrativi.",
            },
            {
                id: "D",
                text: "Pronomi e aggettivi indefiniti",
                correct: false,
                explanation:
                    "Gli indefiniti sono forme come «qualche», «alcuno», «nessuno». «Questo» e «quello» appartengono invece ai dimostrativi.",
            },
        ],
    },

    {
        id: 20,
        area: "linguistica-logica",
        category: "grammatica-periodo-ipotetico",
        difficulty: 4,
        question:
            "Per il completamento della frase che segue, una sola delle coppie di forme verbali NON è ammissibile a nessun livello (formale o informale, scritto o parlato) dello standard contemporaneo italiano. Quale? Stai sicuro che se X, Y subito",
        answers: [
            {
                id: "A",
                text: "X = avrei potuto, Y = sarei venuto",
                correct: true,
                explanation:
                    "La costruzione «se avrei potuto, sarei venuto» non appartiene allo standard italiano. Nel periodo ipotetico dell'irrealtà passato la forma corretta è «se avessi potuto, sarei venuto».",
            },
            {
                id: "B",
                text: "X = potevo, Y = venivo",
                correct: false,
                explanation:
                    "La costruzione con doppio imperfetto, «se potevo, venivo», è diffusa nell'italiano parlato e informale. Per questo non può essere considerata inammissibile a ogni livello.",
            },
            {
                id: "C",
                text: "X = potrò, Y = verrò",
                correct: false,
                explanation:
                    "«Se potrò, verrò subito» è possibile quando la condizione viene proiettata nel futuro e considerata realizzabile.",
            },
            {
                id: "D",
                text: "X = potessi, Y = verrei",
                correct: false,
                explanation:
                    "«Se potessi, verrei subito» è una normale costruzione del periodo ipotetico della possibilità: congiuntivo imperfetto nella protasi e condizionale presente nell'apodosi.",
            },
        ],
    },
    {
        id: 21,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 3,
        question:
            "Quale, tra i seguenti scrittori, fu senatore del Regno d’Italia",
        answers: [
            {
                id: "A",
                text: "Primo Levi",
                correct: false,
                explanation:
                    "Primo Levi fu uno dei più importanti scrittori italiani del Novecento, noto soprattutto per «Se questo è un uomo». Non fu senatore del Regno d'Italia.",
            },
            {
                id: "B",
                text: "Giovanni Verga",
                correct: true,
                explanation:
                    "Giovanni Verga, uno dei maggiori esponenti del Verismo italiano, fu nominato senatore del Regno d'Italia nel 1920. È quindi la risposta corretta.",
            },
            {
                id: "C",
                text: "Mario Rigoni Stern",
                correct: false,
                explanation:
                    "Mario Rigoni Stern fu uno scrittore italiano del Novecento, autore tra l'altro de «Il sergente nella neve». Non fu senatore del Regno d'Italia.",
            },
            {
                id: "D",
                text: "Pier Paolo Pasolini",
                correct: false,
                explanation:
                    "Pier Paolo Pasolini nacque nel 1922, quando il Regno d'Italia esisteva ancora, ma non ricoprì la carica di senatore del Regno.",
            },
        ],
    },

    {
        id: 22,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-unione-europea",
        difficulty: 2,
        question:
            "La Svizzera ha aderito alla Comunità Europea nel?",
        answers: [
            {
                id: "A",
                text: "1972",
                correct: false,
                explanation:
                    "Nel 1972 la Svizzera non entrò nella Comunità Europea. Ha mantenuto una propria posizione esterna rispetto al processo di integrazione comunitaria.",
            },
            {
                id: "B",
                text: "2006",
                correct: false,
                explanation:
                    "Neppure nel 2006 la Svizzera aderì alla Comunità Europea o all'Unione Europea.",
            },
            {
                id: "C",
                text: "1956",
                correct: false,
                explanation:
                    "La Svizzera non aderì alla Comunità Europea nel 1956. Inoltre la Comunità Economica Europea nacque formalmente con i Trattati di Roma del 1957.",
            },
            {
                id: "D",
                text: "Non ha mai aderito",
                correct: true,
                explanation:
                    "La Svizzera non è mai entrata nella Comunità Europea e non è oggi membro dell'Unione Europea. Intrattiene però numerosi accordi bilaterali con l'UE.",
            },
        ],
    },

    {
        id: 23,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-contemporanea",
        difficulty: 3,
        question:
            "Quale, delle seguenti serie di eventi, è disposta nella corretta sequenza cronologica",
        answers: [
            {
                id: "A",
                text: "Istituzione della Società delle Nazioni, Conferenza di Jalta, Istituzione delle Nazioni Unite, Unificazione del Vietnam",
                correct: true,
                explanation:
                    "La Società delle Nazioni nacque dopo la Prima Guerra Mondiale, nel 1920. La Conferenza di Jalta si svolse nel febbraio 1945, l'ONU nacque nello stesso anno e il Vietnam fu riunificato nel 1976.",
            },
            {
                id: "B",
                text: "Conferenza di Jalta, Unificazione del Vietnam, Istituzione della Società delle Nazioni, Istituzione delle Nazioni Unite",
                correct: false,
                explanation:
                    "La Società delle Nazioni è precedente alla Conferenza di Jalta e all'unificazione del Vietnam. L'ordine cronologico è quindi errato.",
            },
            {
                id: "C",
                text: "Istituzione della Società delle Nazioni, Unificazione del Vietnam, Conferenza di Jalta, Istituzione delle Nazioni Unite",
                correct: false,
                explanation:
                    "L'unificazione del Vietnam avvenne nel 1976 e deve quindi essere collocata dopo Jalta e dopo la fondazione dell'ONU.",
            },
            {
                id: "D",
                text: "Istituzione della Società delle Nazioni, Istituzione delle Nazioni Unite, Conferenza di Jalta, Unificazione del Vietnam",
                correct: false,
                explanation:
                    "La Conferenza di Jalta precedette la nascita ufficiale delle Nazioni Unite. Le due tappe centrali sono quindi invertite.",
            },
        ],
    },

    {
        id: 24,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-decolonizzazione",
        difficulty: 3,
        question:
            "Le seguenti associazioni abbinano un Paese con un personaggio carismatico nella loro lotta per l’indipendenza o contro le varie forme di colonialismo e di apartheid. Quale di queste associazioni è sbagliata?",
        answers: [
            {
                id: "A",
                text: "Sudafrica – Nelson Mandela",
                correct: false,
                explanation:
                    "Nelson Mandela fu uno dei principali protagonisti della lotta contro l'apartheid in Sudafrica. L'associazione è quindi corretta.",
            },
            {
                id: "B",
                text: "Algeria – Ahmed Ben Bella",
                correct: false,
                explanation:
                    "Ahmed Ben Bella fu una figura centrale della lotta per l'indipendenza algerina dalla Francia e divenne poi presidente dell'Algeria.",
            },
            {
                id: "C",
                text: "India – Ho Chi Minh",
                correct: true,
                explanation:
                    "Ho Chi Minh fu il principale leader del movimento indipendentista vietnamita, non indiano. Per l'India la figura simbolo della lotta anticoloniale è invece soprattutto Mahatma Gandhi.",
            },
            {
                id: "D",
                text: "Irlanda – Michael Collins",
                correct: false,
                explanation:
                    "Michael Collins fu uno dei protagonisti della lotta per l'indipendenza irlandese dal Regno Unito. L'associazione è corretta.",
            },
        ],
    },

    {
        id: 25,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-italiana",
        difficulty: 1,
        question:
            "La piana del Sele si trova?",
        answers: [
            {
                id: "A",
                text: "nella Meseta",
                correct: false,
                explanation:
                    "La Meseta è un vasto altopiano della penisola iberica, soprattutto in territorio spagnolo. Non ha relazione con la piana del Sele.",
            },
            {
                id: "B",
                text: "in Campania",
                correct: true,
                explanation:
                    "La piana del Sele si trova in Campania, nella provincia di Salerno, ed è attraversata dal fiume Sele.",
            },
            {
                id: "C",
                text: "nelle Marche",
                correct: false,
                explanation:
                    "La piana del Sele non si trova nelle Marche, ma nell'Italia meridionale, in Campania.",
            },
            {
                id: "D",
                text: "in provincia di Arezzo",
                correct: false,
                explanation:
                    "Arezzo si trova in Toscana. La piana del Sele appartiene invece alla Campania.",
            },
        ],
    },

    {
        id: 26,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-pirandello",
        difficulty: 2,
        question:
            "Nella immagine Totò interpreta Rosario Chiàrchiaro, protagonista della novella “La patente” di Luigi Pirandello. Nella trama Rosario Chiàrchiaro si rivolge a un giudice per",
        questionImage: {
            src: `${import.meta.env.BASE_URL}resources/questions/simulation16/domanda-26.png`,
            alt: "Fotogramma con Totò nel ruolo di Rosario Chiàrchiaro nella trasposizione de La patente di Luigi Pirandello",
        },
        answers: [
            {
                id: "A",
                text: "denunciare due giovani che lo hanno sbeffeggiato",
                correct: false,
                explanation:
                    "Nella vicenda esiste una controversia giudiziaria legata alla fama di iettatore di Chiàrchiaro, ma il suo vero obiettivo è trasformare quella reputazione in un vantaggio concreto.",
            },
            {
                id: "B",
                text: "ottenere una pensione di invalidità",
                correct: false,
                explanation:
                    "Chiàrchiaro non si rivolge al giudice per ottenere una pensione. Il tema centrale della novella è la fama di iettatore attribuitagli dalla società.",
            },
            {
                id: "C",
                text: "ottenere la patente di guida nonostante la cecità",
                correct: false,
                explanation:
                    "La «patente» del titolo non è una patente di guida. Il termine è utilizzato ironicamente e simbolicamente all'interno della vicenda.",
            },
            {
                id: "D",
                text: "ottenere la patente di iettatore",
                correct: true,
                explanation:
                    "Chiàrchiaro vuole che la sua fama di iettatore venga riconosciuta quasi ufficialmente, così da poterla sfruttare economicamente. La «patente» diventa quindi il simbolo paradossale del ruolo che la società gli ha imposto.",
            },
        ],
    },

    {
        id: 27,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-rivoluzione-russa",
        difficulty: 2,
        question:
            "Nel 1919 l’attivista americano John Reed scrive il libro I dieci giorni che sconvolsero il mondo (Ten Days that Shook the World). L’opera descrive gli eventi",
        answers: [
            {
                id: "A",
                text: "della Rivoluzione di Ottobre",
                correct: true,
                explanation:
                    "John Reed assistette direttamente agli eventi rivoluzionari russi del 1917. «I dieci giorni che sconvolsero il mondo» racconta soprattutto la Rivoluzione d'Ottobre e la presa del potere da parte dei bolscevichi.",
            },
            {
                id: "B",
                text: "della ribellione dei Boxer in Cina",
                correct: false,
                explanation:
                    "La rivolta dei Boxer avvenne in Cina tra la fine dell'Ottocento e l'inizio del Novecento. Non è il tema del libro di Reed.",
            },
            {
                id: "C",
                text: "della cattura di Berlino da parte dell’Armata Rossa",
                correct: false,
                explanation:
                    "La conquista di Berlino da parte dell'Armata Rossa avvenne nel 1945, molti anni dopo la pubblicazione del libro.",
            },
            {
                id: "D",
                text: "della Notte dei Cristalli",
                correct: false,
                explanation:
                    "La Notte dei Cristalli avvenne nella Germania nazista nel novembre 1938. Non riguarda la Rivoluzione russa descritta da Reed.",
            },
        ],
    },

    {
        id: 28,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-shoah",
        difficulty: 2,
        question:
            "Quale tragico evento prese avvio il 19 aprile 1943?",
        answers: [
            {
                id: "A",
                text: "La Guerra di Corea",
                correct: false,
                explanation:
                    "La Guerra di Corea iniziò nel 1950, diversi anni dopo la Seconda Guerra Mondiale.",
            },
            {
                id: "B",
                text: "Esplosione della bomba atomica su Hiroshima",
                correct: false,
                explanation:
                    "La bomba atomica su Hiroshima fu sganciata il 6 agosto 1945, non nell'aprile del 1943.",
            },
            {
                id: "C",
                text: "Rivolta del ghetto di Varsavia",
                correct: true,
                explanation:
                    "La rivolta del ghetto di Varsavia iniziò il 19 aprile 1943, quando gruppi della resistenza ebraica si opposero alle operazioni naziste di deportazione e liquidazione del ghetto.",
            },
            {
                id: "D",
                text: "La Grande Depressione",
                correct: false,
                explanation:
                    "La Grande Depressione ebbe inizio con la crisi economica del 1929 e non è legata alla data indicata.",
            },
        ],
    },

    {
        id: 29,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-montale",
        difficulty: 3,
        question:
            `Chi è l’autore della poesia “Nel fumo” di cui segue il testo.

Quante volte t’ho atteso alla stazione
nel freddo, nella nebbia. Passeggiavo
rosicchiando, comprando giornali innominabili,
fumando Giuba poi soppresse dal ministro
dei tabacchi, il balordo!
Forse un treno sbagliato, un doppione oppure una
sottrazione. Scrutavo le carriole
dei facchini, se mai ci fosse dentro
il tuo bagaglio, e tu dietro, in ritardo.
Poi apparivi, ultima. È un ricordo
tra tanti altri. Nel sogno mi perseguita.`,
        answers: [
            {
                id: "A",
                text: "Giosuè Carducci",
                correct: false,
                explanation:
                    "Giosuè Carducci appartiene soprattutto alla seconda metà dell'Ottocento. Lo stile e il contesto della poesia proposta appartengono invece alla produzione novecentesca di Montale.",
            },
            {
                id: "B",
                text: "Eugenio Montale",
                correct: true,
                explanation:
                    "«Nel fumo» è una poesia di Eugenio Montale. Il testo presenta elementi autobiografici, memoria, assenza e il tono tipico della fase più tarda della produzione montaliana.",
            },
            {
                id: "C",
                text: "Italo Svevo",
                correct: false,
                explanation:
                    "Italo Svevo è noto soprattutto come romanziere, autore de «La coscienza di Zeno». Non è l'autore della poesia proposta.",
            },
            {
                id: "D",
                text: "Vincenzo Monti",
                correct: false,
                explanation:
                    "Vincenzo Monti fu un poeta vissuto tra Settecento e Ottocento. La poesia riportata è invece di Eugenio Montale.",
            },
        ],
    },

    {
        id: 30,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana-novecento",
        difficulty: 3,
        question:
            "L’immagine è tratta dal film “Rocco e i suoi fratelli” di Luchino Visconti (1960). Il capolavoro del regista milanese è ispirato alla raccolta di racconti “Il ponte della Ghisolfa” a sua volta facente parte del ciclo “I segreti di Milano”, opera scritta da",
        questionImage: {
            src: `${import.meta.env.BASE_URL}resources/questions/simulation16/domanda-30.png`,
            alt: "Fotogramma del film Rocco e i suoi fratelli di Luchino Visconti",
        },
        answers: [
            {
                id: "A",
                text: "Andrea Camilleri",
                correct: false,
                explanation:
                    "Andrea Camilleri è noto soprattutto per i romanzi del commissario Montalbano. Non è l'autore de «Il ponte della Ghisolfa».",
            },
            {
                id: "B",
                text: "Antonio Fogazzaro",
                correct: false,
                explanation:
                    "Antonio Fogazzaro è uno scrittore dell'Ottocento e dei primi anni del Novecento, autore tra l'altro di «Piccolo mondo antico».",
            },
            {
                id: "C",
                text: "Alessandro Manzoni",
                correct: false,
                explanation:
                    "Manzoni è l'autore de «I promessi sposi» e appartiene a un periodo storico molto precedente rispetto alla Milano raccontata nel ciclo citato.",
            },
            {
                id: "D",
                text: "Giovanni Testori",
                correct: true,
                explanation:
                    "Giovanni Testori è l'autore de «Il ponte della Ghisolfa», raccolta appartenente al ciclo «I segreti di Milano». Alcuni suoi temi e ambienti influenzarono «Rocco e i suoi fratelli» di Visconti.",
            },
        ],
    },

    {
        id: 31,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-isole",
        difficulty: 2,
        question:
            "Quale affermazione è sbagliata?",
        answers: [
            {
                id: "A",
                text: "Maiorca è un’isola dell’arcipelago delle Baleari",
                correct: false,
                explanation:
                    "Maiorca è effettivamente la più grande delle Isole Baleari, arcipelago spagnolo nel Mediterraneo.",
            },
            {
                id: "B",
                text: "Zante è un’isola dell’arcipelago delle Isole Ionie",
                correct: false,
                explanation:
                    "Zante, o Zakynthos, appartiene alle Isole Ionie della Grecia. L'affermazione è corretta.",
            },
            {
                id: "C",
                text: "Formentera è un’isola dell’arcipelago delle Isole Canarie",
                correct: true,
                explanation:
                    "Formentera non appartiene alle Canarie, ma alle Isole Baleari. Si trova nel Mediterraneo ed è vicina a Ibiza.",
            },
            {
                id: "D",
                text: "Vulcano è un’isola dell’arcipelago delle Isole Eolie",
                correct: false,
                explanation:
                    "Vulcano appartiene alle Isole Eolie, arcipelago siciliano situato nel Mar Tirreno.",
            },
        ],
    },

    {
        id: 32,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-dante",
        difficulty: 3,
        question:
            "Quale, tra le seguenti figure femminili, non appare nella Divina Commedia:",
        answers: [
            {
                id: "A",
                text: "Antonietta Fagnani Arese",
                correct: true,
                explanation:
                    "Antonietta Fagnani Arese visse tra Settecento e Ottocento ed è nota anche per il rapporto con Ugo Foscolo. È quindi molto posteriore a Dante e non compare nella «Divina Commedia».",
            },
            {
                id: "B",
                text: "Francesca da Polenta",
                correct: false,
                explanation:
                    "Francesca da Rimini, nata Francesca da Polenta, compare nel V canto dell'Inferno insieme a Paolo Malatesta.",
            },
            {
                id: "C",
                text: "Costanza d’Altavilla",
                correct: false,
                explanation:
                    "Costanza d'Altavilla compare nel III canto del Paradiso, dove Dante la incontra tra le anime del cielo della Luna.",
            },
            {
                id: "D",
                text: "Pia de’ Tolomei",
                correct: false,
                explanation:
                    "Pia de' Tolomei compare nel V canto del Purgatorio e pronuncia i celebri versi in cui chiede a Dante di ricordarsi di lei.",
            },
        ],
    },

    {
        id: 33,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-italiana-contemporanea",
        difficulty: 2,
        question:
            "In quale periodo della storia italiana si colloca il cosiddetto “miracolo economico”?",
        answers: [
            {
                id: "A",
                text: "Nei primi decenni postunitari",
                correct: false,
                explanation:
                    "I primi decenni successivi all'Unità d'Italia appartengono alla seconda metà dell'Ottocento. Il «miracolo economico» è un fenomeno del Novecento.",
            },
            {
                id: "B",
                text: "Tra gli anni Cinquanta e gli anni Sessanta del Novecento",
                correct: true,
                explanation:
                    "Il cosiddetto miracolo economico italiano si sviluppò soprattutto tra la seconda metà degli anni Cinquanta e i primi anni Sessanta, con forte crescita industriale, urbanizzazione e aumento dei consumi.",
            },
            {
                id: "C",
                text: "Tra il 1923 e il 1943",
                correct: false,
                explanation:
                    "Questo periodo coincide in gran parte con il regime fascista. Non è quello indicato con l'espressione «miracolo economico».",
            },
            {
                id: "D",
                text: "Tra il 1973 e il 1975 con il superamento della crisi energetica",
                correct: false,
                explanation:
                    "La crisi petrolifera del 1973 segnò invece una fase di difficoltà economica. Il boom economico italiano era già terminato.",
            },
        ],
    },

    {
        id: 34,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-stati-uniti",
        difficulty: 2,
        question:
            "Quale, tra le seguenti personalità, non è stato un presidente degli Stati Uniti d’America?",
        answers: [
            {
                id: "A",
                text: "Franklin Delano Roosevelt",
                correct: false,
                explanation:
                    "Franklin D. Roosevelt fu Presidente degli Stati Uniti dal 1933 al 1945 e guidò il Paese durante gran parte della Seconda Guerra Mondiale.",
            },
            {
                id: "B",
                text: "Richard Nixon",
                correct: false,
                explanation:
                    "Richard Nixon fu Presidente degli Stati Uniti dal 1969 al 1974, quando si dimise in seguito allo scandalo Watergate.",
            },
            {
                id: "C",
                text: "Harry S. Truman",
                correct: false,
                explanation:
                    "Harry Truman divenne presidente nel 1945 dopo la morte di Franklin Roosevelt e rimase in carica fino al 1953.",
            },
            {
                id: "D",
                text: "Robert Kennedy",
                correct: true,
                explanation:
                    "Robert F. Kennedy fu procuratore generale, senatore e candidato alla presidenza, ma non divenne mai Presidente degli Stati Uniti. Fu assassinato nel 1968.",
            },
        ],
    },

    {
        id: 35,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-italiana",
        difficulty: 1,
        question:
            "La regione Liguria non confina con?",
        answers: [
            {
                id: "A",
                text: "Francia",
                correct: false,
                explanation:
                    "La Liguria confina a ovest con la Francia, nella zona delle Alpi Marittime.",
            },
            {
                id: "B",
                text: "Piemonte",
                correct: false,
                explanation:
                    "Il Piemonte confina con la Liguria lungo gran parte del confine settentrionale della regione.",
            },
            {
                id: "C",
                text: "Lazio",
                correct: true,
                explanation:
                    "La Liguria non confina con il Lazio. Tra le due regioni si trova infatti la Toscana.",
            },
            {
                id: "D",
                text: "Toscana",
                correct: false,
                explanation:
                    "La Liguria confina a sud-est con la Toscana.",
            },
        ],
    },

    {
        id: 36,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-seconda-guerra-mondiale",
        difficulty: 1,
        question:
            "In quale anno la Germania invade l’Unione Sovietica con l’Operazione Barbarossa?",
        answers: [
            {
                id: "A",
                text: "1941",
                correct: true,
                explanation:
                    "L'Operazione Barbarossa iniziò il 22 giugno 1941 con l'invasione dell'Unione Sovietica da parte della Germania nazista e dei suoi alleati.",
            },
            {
                id: "B",
                text: "1917",
                correct: false,
                explanation:
                    "Il 1917 è l'anno delle rivoluzioni russe, molti anni prima della Seconda Guerra Mondiale.",
            },
            {
                id: "C",
                text: "1939",
                correct: false,
                explanation:
                    "Nel 1939 la Germania invase la Polonia, evento che diede inizio alla Seconda Guerra Mondiale in Europa. L'invasione dell'URSS avvenne due anni dopo.",
            },
            {
                id: "D",
                text: "1914",
                correct: false,
                explanation:
                    "Il 1914 è l'anno dello scoppio della Prima Guerra Mondiale e non riguarda l'Operazione Barbarossa.",
            },
        ],
    },

    {
        id: 37,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-organizzazioni-internazionali",
        difficulty: 2,
        question:
            "La denominazione FAO indica?",
        answers: [
            {
                id: "A",
                text: "una città sudamericana",
                correct: false,
                explanation:
                    "FAO non è il nome di una città. È una sigla che identifica un'organizzazione internazionale.",
            },
            {
                id: "B",
                text: "un'alleanza strategica finalizzata alla non proliferazione nucleare",
                correct: false,
                explanation:
                    "La FAO non si occupa principalmente di sicurezza nucleare. Le sue attività riguardano alimentazione, agricoltura e lotta alla fame.",
            },
            {
                id: "C",
                text: "un fiume",
                correct: false,
                explanation:
                    "FAO non è la denominazione di un fiume nel contesto del quesito.",
            },
            {
                id: "D",
                text: "un’organizzazione delle Nazioni Unite",
                correct: true,
                explanation:
                    "La FAO, Food and Agriculture Organization, è un'agenzia specializzata delle Nazioni Unite che si occupa di alimentazione, agricoltura e sicurezza alimentare.",
            },
        ],
    },

    {
        id: 38,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-fiumi",
        difficulty: 1,
        question:
            "Qual è il fiume più lungo?",
        answers: [
            {
                id: "A",
                text: "Mella",
                correct: false,
                explanation:
                    "Il Mella è un fiume lombardo molto più corto del Tevere.",
            },
            {
                id: "B",
                text: "Tevere",
                correct: true,
                explanation:
                    "Tra le alternative proposte, il Tevere è il fiume più lungo, con un corso di circa 400 km. Attraversa anche la città di Roma.",
            },
            {
                id: "C",
                text: "Polcevera",
                correct: false,
                explanation:
                    "Il Polcevera è un corso d'acqua ligure di lunghezza molto inferiore rispetto al Tevere.",
            },
            {
                id: "D",
                text: "Arno",
                correct: false,
                explanation:
                    "L'Arno è uno dei principali fiumi italiani e attraversa Firenze e Pisa, ma è più corto del Tevere.",
            },
        ],
    },

    {
        id: 39,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-premio-nobel",
        difficulty: 2,
        question:
            "Il primo italiano a ottenere il premio Nobel per la letteratura è stato",
        answers: [
            {
                id: "A",
                text: "Luigi Pirandello",
                correct: false,
                explanation:
                    "Luigi Pirandello ricevette il Nobel per la Letteratura nel 1934. Non fu il primo italiano a ottenerlo.",
            },
            {
                id: "B",
                text: "Grazia Deledda",
                correct: false,
                explanation:
                    "Grazia Deledda ricevette il Nobel per la Letteratura nel 1926. Il primo italiano lo aveva già ricevuto vent'anni prima.",
            },
            {
                id: "C",
                text: "Giosuè Carducci",
                correct: true,
                explanation:
                    "Giosuè Carducci ricevette il Premio Nobel per la Letteratura nel 1906, diventando il primo italiano a ottenere questo riconoscimento.",
            },
            {
                id: "D",
                text: "Dario Fo",
                correct: false,
                explanation:
                    "Dario Fo ricevette il Premio Nobel per la Letteratura nel 1997, molto dopo Carducci.",
            },
        ],
    },

    {
        id: 40,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-autori-opere",
        difficulty: 2,
        question:
            "Quale abbinamento tra autore e opera è sbagliato:",
        answers: [
            {
                id: "A",
                text: "Gianni Rodari – Il visconte dimezzato",
                correct: true,
                explanation:
                    "«Il visconte dimezzato» è un romanzo di Italo Calvino, pubblicato nel 1952. L'abbinamento con Gianni Rodari è quindi errato.",
            },
            {
                id: "B",
                text: "Cesare Pavese – La casa in collina",
                correct: false,
                explanation:
                    "«La casa in collina» è effettivamente un romanzo di Cesare Pavese. L'abbinamento è corretto.",
            },
            {
                id: "C",
                text: "Dino Buzzati – Il deserto dei Tartari",
                correct: false,
                explanation:
                    "«Il deserto dei Tartari» è il celebre romanzo di Dino Buzzati pubblicato nel 1940.",
            },
            {
                id: "D",
                text: "Gabriele d’Annunzio – L’innocente",
                correct: false,
                explanation:
                    "«L'innocente» è un romanzo di Gabriele d'Annunzio. L'abbinamento è quindi corretto.",
            },
        ],
    },
    {
        id: 41,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria-angoli",
        difficulty: 3,
        question:
            "Sono le 12. Guardando un orologio analogico, Livio dice: “Le lancette dell’orologio alle 12:15 formeranno un angolo retto”. Quale delle seguenti affermazioni è vera e ben giustificata?",
        answers: [
            {
                id: "A",
                text: "Livio ha ragione, perché in un quarto d’ora la lancetta dei minuti ha ruotato di 90°.",
                correct: false,
                explanation:
                    "In quindici minuti la lancetta dei minuti ruota effettivamente di 90°, ma nello stesso intervallo anche quella delle ore si sposta. Alle 12:15 la lancetta delle ore non è più esattamente sul 12.",
            },
            {
                id: "B",
                text: "Livio non ha ragione, perché a quell’ora l’angolo è ottuso.",
                correct: false,
                explanation:
                    "Alle 12:15 la lancetta dei minuti è sul 3, mentre quella delle ore si è spostata di 7,5° oltre il 12. L'angolo minore misura quindi 90° − 7,5° = 82,5°, che è acuto e non ottuso.",
            },
            {
                id: "C",
                text: "Livio non ha ragione, alle 12:15 l’angolo è acuto perché anche la lancetta delle ore si è spostata in senso orario.",
                correct: true,
                explanation:
                    "La lancetta dei minuti ha ruotato di 90°, ma quella delle ore in 15 minuti avanza di 7,5°. L'angolo tra le due lancette è quindi 82,5°, inferiore a 90° e dunque acuto.",
            },
            {
                id: "D",
                text: "Non è possibile calcolare quando l’angolo le due lancette sarà retto, perché ogni qual volta si sposta la lancetta dei minuti, anche quella delle ore si sposta un poco.",
                correct: false,
                explanation:
                    "Il movimento di entrambe le lancette è regolare e perfettamente calcolabile. Il fatto che entrambe si muovano non impedisce di determinare l'angolo formato in ogni istante.",
            },
        ],
    },

    {
        id: 42,
        area: "cultura-matematico-scientifica",
        category: "scienze-della-terra-stagioni",
        difficulty: 2,
        question:
            "Quale affermazione NON è corretta: Al solstizio d’estate (21 giugno)…",
        answers: [
            {
                id: "A",
                text: "… la Terra è nel punto più vicino al Sole perché inizia l’estate.",
                correct: true,
                explanation:
                    "L'alternarsi delle stagioni dipende principalmente dall'inclinazione dell'asse terrestre e non dalla distanza dal Sole. La Terra raggiunge il perielio, cioè la minima distanza dal Sole, all'inizio di gennaio.",
            },
            {
                id: "B",
                text: "… inizia l’inverno nell’emisfero sud.",
                correct: false,
                explanation:
                    "Quando nell'emisfero settentrionale si verifica il solstizio d'estate, nell'emisfero meridionale si verifica contemporaneamente il solstizio d'inverno.",
            },
            {
                id: "C",
                text: "… nell’emisfero nord, le notti hanno la minima durata rispetto a tutti gli altri giorni dell’anno.",
                correct: false,
                explanation:
                    "Al solstizio d'estate l'emisfero nord ha la giornata con il maggior numero di ore di luce e, di conseguenza, la notte più breve dell'anno.",
            },
            {
                id: "D",
                text: "… i raggi del sole arrivano perpendicolari al tropico dell’emisfero nord (Tropico del Cancro).",
                correct: false,
                explanation:
                    "Al solstizio di giugno i raggi solari cadono perpendicolarmente sul Tropico del Cancro. Questa affermazione è quindi corretta.",
            },
        ],
    },

    {
        id: 43,
        area: "cultura-matematico-scientifica",
        category: "matematica-proporzionalita",
        difficulty: 4,
        question:
            "Il peso lordo è la somma del peso netto e della tara. Alex dice: “Peso netto e tara sono inversamente proporzionali, perché (se il peso lordo è costante) al crescere dell’uno l’altro diminuisce.” Bert dice: “Se la tara è costante, peso lordo e peso netto sono direttamente proporzionali perché, quando il peso netto aumenta di una certa quantità, il peso lordo aumenta della stessa quantità” Scegli l’alternativa corretta",
        answers: [
            {
                id: "A",
                text: "Bert e Alex hanno entrambi ragione, perché la tara è la differenza tra peso lordo e peso netto.",
                correct: false,
                explanation:
                    "La relazione peso lordo = peso netto + tara è corretta, ma non rende vere le due affermazioni. Né la relazione di Alex né quella di Bert è una proporzionalità nel senso matematico preciso.",
            },
            {
                id: "B",
                text: "Solo Bert ha ragione, perché, se la tara costante, il grafico del peso lordo al variare del peso netto è una retta.",
                correct: false,
                explanation:
                    "Con tara costante vale lordo = netto + tara. Il grafico è una retta, ma non passa per l'origine se la tara è diversa da zero; quindi le due grandezze non sono direttamente proporzionali.",
            },
            {
                id: "C",
                text: "Solo Alex ha ragione, perché il grafico di due grandezze direttamente proporzionali è una retta per l’origine.",
                correct: false,
                explanation:
                    "Se il lordo è costante, netto e tara soddisfano netto + tara = costante. Non sono inversamente proporzionali, perché in una proporzionalità inversa dovrebbe essere costante il loro prodotto.",
            },
            {
                id: "D",
                text: "Bert e Alex hanno entrambi torto, perché la tara non è il rapporto tra peso lordo e peso netto.",
                correct: true,
                explanation:
                    "La conclusione corretta è che entrambi hanno torto. Alex confonde una relazione a somma costante con la proporzionalità inversa; Bert confonde una relazione lineare con intercetta con una proporzionalità diretta.",
            },
        ],
    },

    {
        id: 44,
        area: "cultura-matematico-scientifica",
        category: "matematica-frazioni",
        difficulty: 3,
        question:
            "L’insegnante chiede: “Gregorio dice che il triplo di 5/6 è 15/18. Siete d’accordo con lui e perché?” Quale risposta è corretta e ben giustificata?",
        answers: [
            {
                id: "A",
                text: "Gregorio ha ragione, perché il triplo di 5 è 15 e il triplo di 6 è 18.",
                correct: false,
                explanation:
                    "Moltiplicare per 3 sia numeratore sia denominatore non triplica una frazione: produce una frazione equivalente. Infatti 15/18 si semplifica nuovamente a 5/6.",
            },
            {
                id: "B",
                text: "Gregorio non ha ragione, perché 15/18 è equivalente a 5/6.",
                correct: true,
                explanation:
                    "15/18 si semplifica dividendo numeratore e denominatore per 3 e diventa 5/6. Il vero triplo di 5/6 è 3 × 5/6 = 15/6 = 5/2.",
            },
            {
                id: "C",
                text: "Gregorio non ha ragione perché, se aggiungo 3 al numeratore e al denominatore, si trova 8/9 e non 15/18.",
                correct: false,
                explanation:
                    "Il fatto che sommando 3 si ottenga 8/9 non spiega come calcolare il triplo di una frazione. Per triplicare 5/6 bisogna moltiplicare la frazione per 3.",
            },
            {
                id: "D",
                text: "Gregorio ha ragione perché, se si fa il calcolo viene 5/6 + 5/6 = 10/12+ 5/6= 15/18.",
                correct: false,
                explanation:
                    "La somma è eseguita in modo errato: 5/6 + 5/6 = 10/6, non 10/12. Sommando tre volte 5/6 si ottiene 15/6.",
            },
        ],
    },

    {
        id: 45,
        area: "cultura-matematico-scientifica",
        category: "matematica-percentuali",
        difficulty: 3,
        question:
            "Un’ indagine sugli animali domestici rivela che la percentuale di chi ha un cane è del 25% e la percentuale di chi ha un gatto è del 35%. Indicare quale delle seguenti affermazioni NON è corretta",
        answers: [
            {
                id: "A",
                text: "Sicuramente il numero di persone che ha un cane è più della metà di quello delle persone che hanno un gatto.",
                correct: false,
                explanation:
                    "Il 25% è maggiore della metà del 35%, che è 17,5%. Questa affermazione è quindi compatibile con i dati.",
            },
            {
                id: "B",
                text: "Se all’indagine hanno risposto più di 100 persone, allora il numero di partecipanti che possiedono un gatto supera di 10 il numero di quelli che hanno un cane.",
                correct: false,
                explanation:
                    "Questa frase del PDF è problematica: la differenza è il 10% del numero totale dei partecipanti. Se i partecipanti fossero più di 100, la differenza sarebbe superiore a 10 persone, non esattamente 10. Il quesito originale presenta quindi più di un'alternativa non corretta.",
            },
            {
                id: "C",
                text: "Non ci possono essere persone che hanno entrambi gli animali perché la somma delle due percentuali è minore del 100%.",
                correct: true,
                explanation:
                    "La somma 25% + 35% = 60% non permette di concludere che i due gruppi siano disgiunti. Alcune persone potrebbero possedere sia un cane sia un gatto. Questa è verosimilmente l'alternativa che il quesito intendeva indicare come non corretta.",
            },
            {
                id: "D",
                text: "In assoluto ci sono meno persone che hanno un cane di quelle che hanno un gatto.",
                correct: false,
                explanation:
                    "Nello stesso campione il 25% è inferiore al 35%, quindi il numero di possessori di cani è inferiore al numero di possessori di gatti.",
            },
        ],
    },

    {
        id: 46,
        area: "cultura-matematico-scientifica",
        category: "biologia-sistema-nervoso",
        difficulty: 2,
        question:
            "La corteccia encefalica:",
        answers: [
            {
                id: "A",
                text: "è lo strato superiore degli emisferi cerebrali",
                correct: true,
                explanation:
                    "La corteccia cerebrale è lo strato esterno degli emisferi cerebrali ed è costituita prevalentemente da sostanza grigia. È coinvolta in numerose funzioni cognitive e motorie superiori.",
            },
            {
                id: "B",
                text: "è massimamente sviluppata nei rettili",
                correct: false,
                explanation:
                    "La corteccia cerebrale raggiunge il massimo sviluppo nei mammiferi e in particolare nell'essere umano, non nei rettili.",
            },
            {
                id: "C",
                text: "è una parte del sistema limbico",
                correct: false,
                explanation:
                    "Il sistema limbico comprende diverse strutture cerebrali specifiche. La corteccia encefalica nel suo complesso non coincide con una parte del sistema limbico.",
            },
            {
                id: "D",
                text: "presiede il coordinamento dei movimenti involontari del corpo (vita vegetativa)",
                correct: false,
                explanation:
                    "Le funzioni vegetative involontarie sono controllate soprattutto da strutture come tronco encefalico, ipotalamo e sistema nervoso autonomo, non dalla corteccia nel suo complesso.",
            },
        ],
    },

    {
        id: 47,
        area: "cultura-matematico-scientifica",
        category: "matematica-frazioni",
        difficulty: 3,
        question:
            "Completa inserendo le parole corrette con riferimento alla figura al posto dei puntini: “Si considerano i due rettangoli (rosso a sinistra e verde a destra) in figura; il rettangolo rosso (1) …….. i 4/7 di quello verde, (2) ……. quello verde (3) …………. i 7/4 di quello rosso, perché 7/4 è la frazione (4) …………. di 4/7.”",
        questionImage: {
            src: `${import.meta.env.BASE_URL}resources/questions/simulation16/domanda-47.png`,
            alt: "Due rettangoli divisi in parti uguali: il rettangolo rosso è formato da 4 parti e quello verde da 7 parti",
        },
        answers: [
            {
                id: "A",
                text: "(1) non rappresenta; (2) dunque; (3) non rappresenta; (4) reciproca.",
                correct: false,
                explanation:
                    "Il rettangolo rosso contiene 4 unità rispetto alle 7 del verde e rappresenta quindi effettivamente i 4/7 del rettangolo verde.",
            },
            {
                id: "B",
                text: "(1) non rappresenta; (2) ma; (3) rappresenta; (4) opposta.",
                correct: false,
                explanation:
                    "La prima parte è falsa perché il rettangolo rosso rappresenta i 4/7 del verde. Inoltre 7/4 non è la frazione opposta di 4/7, ma la sua reciproca.",
            },
            {
                id: "C",
                text: "(1) rappresenta; (2) ma; (3) non rappresenta; (4) opposta.",
                correct: false,
                explanation:
                    "Se il rosso rappresenta i 4/7 del verde, allora inversamente il verde rappresenta i 7/4 del rosso. Inoltre le due frazioni sono reciproche, non opposte.",
            },
            {
                id: "D",
                text: "(1) rappresenta; (2) dunque; (3) rappresenta; (4) reciproca.",
                correct: true,
                explanation:
                    "Il rosso misura 4 unità mentre il verde ne misura 7: quindi rosso = 4/7 del verde. Di conseguenza verde = 7/4 del rosso, e 7/4 è la frazione reciproca di 4/7.",
            },
        ],
    },

    {
        id: 48,
        area: "cultura-matematico-scientifica",
        category: "fisica-cinematica",
        difficulty: 3,
        question:
            "Consideriamo il moto di un oggetto che viene lanciato verso l’alto e che ricade a terra. Quale tra le seguenti affermazioni è corretta?",
        answers: [
            {
                id: "A",
                text: "L’accelerazione a(t) cambia segno perché il corpo prima decelera, mentre sale, poi accelera, quando ricade.",
                correct: false,
                explanation:
                    "Trascurando la resistenza dell'aria, l'accelerazione di gravità resta diretta verso il basso durante tutto il moto. Se verso l'alto è positivo, l'accelerazione rimane negativa sia in salita sia in discesa.",
            },
            {
                id: "B",
                text: "La velocità v(t) cambia di segno nel corso del moto, perché il moto cambia verso.",
                correct: true,
                explanation:
                    "Durante la salita la velocità è diretta verso l'alto, al punto più alto vale zero e durante la discesa è diretta verso il basso. Con una convenzione di segno coerente, la velocità cambia quindi segno.",
            },
            {
                id: "C",
                text: "La posizione verticale nello spazio s(t) cambia segno quando il corpo inizia a scendere e inverte il moto",
                correct: false,
                explanation:
                    "L'inversione del moto non implica che la posizione cambi segno. Il segno della posizione dipende dall'origine scelta per il sistema di riferimento.",
            },
            {
                id: "D",
                text: "Nessuna delle grandezze (spazio, velocità, accelerazione) cambia segno perché il tempo t cresce sempre ed è positivo.",
                correct: false,
                explanation:
                    "Il fatto che il tempo sia positivo non determina il segno di posizione, velocità o accelerazione. In particolare la velocità cambia segno quando il moto inverte verso.",
            },
        ],
    },

    {
        id: 49,
        area: "cultura-matematico-scientifica",
        category: "matematica-proporzioni",
        difficulty: 3,
        question:
            "Ada e Bob misurano quanti battiti fa il loro cuore in 20 secondi. Ada conta 25 battiti e Bob 30. Quale relazione c’è tra le frequenze cardiache (numero di battiti al minuto) dei due?",
        answers: [
            {
                id: "A",
                text: "La frequenza cardiaca di Bob la trovo aggiungendo 5 (cioè, 30 - 25) a quella di Ada.",
                correct: false,
                explanation:
                    "In un minuto Ada ha 25 × 3 = 75 battiti e Bob 30 × 3 = 90. La differenza è quindi 15 battiti al minuto, non 5.",
            },
            {
                id: "B",
                text: "La frequenza cardiaca di Bob la trovo moltiplicando per 3,6 quella di Ada.",
                correct: false,
                explanation:
                    "90/75 = 1,2, quindi Bob ha una frequenza pari a 1,2 volte quella di Ada, non 3,6 volte.",
            },
            {
                id: "C",
                text: "La frequenza cardiaca di Ada la trovo moltiplicando per 5 e poi dividendo per 6 la frequenza di Bob.",
                correct: true,
                explanation:
                    "Ada ha 75 battiti al minuto e Bob 90. Infatti 90 × 5/6 = 75, quindi la frequenza di Ada è pari a 5/6 di quella di Bob.",
            },
            {
                id: "D",
                text: "Le frequenze cardiaca di Ada è 125 = 25 • 100 / 20 e quella di Bob è 150 = 30 • 100 / 20.",
                correct: false,
                explanation:
                    "Per passare da 20 secondi a 60 secondi bisogna moltiplicare per 3, non per 5. Le frequenze corrette sono 75 e 90 battiti al minuto.",
            },
        ],
    },

    {
        id: 50,
        area: "cultura-matematico-scientifica",
        category: "geometria-solida",
        difficulty: 4,
        question:
            "Siano R e S due rette nello spazio con un punto O in comune e sia A il piano che le contiene. Se si ruota il piano A nello spazio attorno alla retta S, la retta R descrive",
        answers: [
            {
                id: "A",
                text: "Un cono circolare retto a due falde.",
                correct: true,
                explanation:
                    "Ruotando una retta R incidente all'asse S attorno a S, i suoi punti descrivono circonferenze e l'insieme delle posizioni della retta genera le due falde di un cono circolare retto. È l'interpretazione prevista dal quesito.",
            },
            {
                id: "B",
                text: "Un cilindro a base circolare.",
                correct: false,
                explanation:
                    "Un cilindro si ottiene ruotando una retta parallela all'asse di rotazione. Qui R e S hanno invece un punto O in comune.",
            },
            {
                id: "C",
                text: "Un iperboloide a una falda.",
                correct: false,
                explanation:
                    "Un iperboloide di rotazione non è generato dalla semplice rotazione attorno a S di una retta che interseca direttamente l'asse nel punto O.",
            },
            {
                id: "D",
                text: "Un piano.",
                correct: false,
                explanation:
                    "Nell'interpretazione generale del quesito la rotazione genera una superficie conica. Un piano si avrebbe nel caso particolare in cui R fosse perpendicolare a S, condizione non indicata come caso specifico.",
            },
        ],
    },

    {
        id: 51,
        area: "cultura-matematico-scientifica",
        category: "educazione-ambientale",
        difficulty: 1,
        question:
            "La sostenibilità riguarda aspetti:",
        answers: [
            {
                id: "A",
                text: "Sociali",
                correct: false,
                explanation:
                    "La dimensione sociale è una componente della sostenibilità, ma non è l'unica.",
            },
            {
                id: "B",
                text: "Economici",
                correct: false,
                explanation:
                    "Anche la dimensione economica appartiene al concetto di sostenibilità, ma da sola non ne esaurisce il significato.",
            },
            {
                id: "C",
                text: "Ambientali",
                correct: false,
                explanation:
                    "Gli aspetti ambientali sono fondamentali, ma il concetto moderno di sostenibilità comprende anche dimensioni sociali ed economiche.",
            },
            {
                id: "D",
                text: "Ambientali, Sociali, Economici",
                correct: true,
                explanation:
                    "La sostenibilità viene comunemente descritta attraverso tre dimensioni interconnesse: ambientale, sociale ed economica.",
            },
        ],
    },

    {
        id: 52,
        area: "cultura-matematico-scientifica",
        category: "biologia-zoologia",
        difficulty: 1,
        question:
            "Quale degli organismi sottoelencati non è un mammifero:",
        answers: [
            {
                id: "A",
                text: "Balena",
                correct: false,
                explanation:
                    "La balena è un mammifero marino: respira con i polmoni, è endotermica e allatta i piccoli.",
            },
            {
                id: "B",
                text: "Camaleonte",
                correct: true,
                explanation:
                    "Il camaleonte è un rettile e non un mammifero. Appartiene all'ordine degli Squamati.",
            },
            {
                id: "C",
                text: "Scimpanzé",
                correct: false,
                explanation:
                    "Lo scimpanzé è un primate e quindi un mammifero.",
            },
            {
                id: "D",
                text: "Topo",
                correct: false,
                explanation:
                    "Il topo è un roditore e appartiene alla classe dei mammiferi.",
            },
        ],
    },

    {
        id: 53,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria",
        difficulty: 4,
        question:
            "Tracciando un segmento il parallelogramma in figura NON può essere diviso",
        questionImage: {
            src: `${import.meta.env.BASE_URL}resources/questions/simulation16/domanda-53.png`,
            alt: "Parallelogramma obliquo disegnato su una griglia quadrettata, con basi orizzontali e lati inclinati",
        },
        answers: [
            {
                id: "A",
                text: "In due trapezi rettangoli con la stessa area.",
                correct: false,
                explanation:
                    "Tracciando opportunamente un segmento verticale nella zona centrale è possibile ottenere due trapezi rettangoli di uguale area.",
            },
            {
                id: "B",
                text: "In due triangoli ottusangoli che hanno uguale perimetro e uguale area.",
                correct: false,
                explanation:
                    "Una diagonale divide un parallelogramma in due triangoli congruenti, quindi con uguale area e uguale perimetro. Nella figura la diagonale opportuna produce due triangoli ottusangoli.",
            },
            {
                id: "C",
                text: "In due rettangoli di uguale perimetro.",
                correct: true,
                explanation:
                    "Con un solo segmento non è possibile eliminare contemporaneamente i due lati obliqui esterni del parallelogramma. Almeno una delle due parti conserverebbe quindi un lato inclinato e non potrebbe essere un rettangolo.",
            },
            {
                id: "D",
                text: "In un trapezio isoscele e un triangolo isoscele con la stessa altezza.",
                correct: false,
                explanation:
                    "Utilizzando la griglia è possibile tracciare un segmento che isola un triangolo isoscele e lascia come parte restante un trapezio isoscele, entrambi con la stessa altezza verticale.",
            },
        ],
    },

    {
        id: 54,
        area: "cultura-matematico-scientifica",
        category: "biologia-fotosintesi",
        difficulty: 1,
        question:
            "Quali coppie di sostanze sono essenziali per la fotosintesi clorofilliana:",
        answers: [
            {
                id: "A",
                text: "H2O e CO2",
                correct: true,
                explanation:
                    "Acqua e anidride carbonica sono reagenti fondamentali della fotosintesi. Utilizzando l'energia luminosa, la pianta produce sostanze organiche come il glucosio e libera ossigeno.",
            },
            {
                id: "B",
                text: "CO2 e C6H12O6",
                correct: false,
                explanation:
                    "Il glucosio C6H12O6 è principalmente uno dei prodotti della fotosintesi, non una delle due sostanze di partenza richieste.",
            },
            {
                id: "C",
                text: "H2O e C6H12O6",
                correct: false,
                explanation:
                    "L'acqua è un reagente, mentre il glucosio è un prodotto della fotosintesi. La coppia non contiene entrambi i principali reagenti.",
            },
            {
                id: "D",
                text: "O2 e CO2",
                correct: false,
                explanation:
                    "La CO2 è utilizzata nella fotosintesi, mentre l'ossigeno viene generalmente liberato come prodotto del processo.",
            },
        ],
    },

    {
        id: 55,
        area: "cultura-matematico-scientifica",
        category: "biologia-etologia",
        difficulty: 1,
        question:
            "L’etologia è:",
        answers: [
            {
                id: "A",
                text: "lo studio dei cambiamenti climatici",
                correct: false,
                explanation:
                    "I cambiamenti climatici vengono studiati soprattutto dalla climatologia e da altre scienze ambientali, non dall'etologia.",
            },
            {
                id: "B",
                text: "lo studio del rapporto tra organismi e ambiente",
                correct: false,
                explanation:
                    "Lo studio delle relazioni tra organismi e ambiente appartiene principalmente all'ecologia.",
            },
            {
                id: "C",
                text: "lo studio degli organismi pluricellulari",
                correct: false,
                explanation:
                    "L'etologia non è definita dal numero di cellule degli organismi studiati, ma dal suo oggetto specifico: il comportamento.",
            },
            {
                id: "D",
                text: "lo studio del comportamento animale",
                correct: true,
                explanation:
                    "L'etologia è la disciplina biologica che studia scientificamente il comportamento degli animali, anche in rapporto all'ambiente e all'evoluzione.",
            },
        ],
    },

    {
        id: 56,
        area: "cultura-matematico-scientifica",
        category: "astronomia-sistema-solare",
        difficulty: 1,
        question:
            "Individua l’affermazione corretta:",
        answers: [
            {
                id: "A",
                text: "i pianeti, esclusa la Terra, si muovono attorno al Sole in orbite circolari",
                correct: false,
                explanation:
                    "Anche la Terra è un pianeta e tutti i pianeti descrivono orbite ellittiche, non perfettamente circolari.",
            },
            {
                id: "B",
                text: "i pianeti, compresa la Terra, si muovono attorno al Sole in orbite ellittiche",
                correct: true,
                explanation:
                    "Secondo la prima legge di Keplero i pianeti si muovono attorno al Sole lungo orbite ellittiche, con il Sole posto in uno dei fuochi.",
            },
            {
                id: "C",
                text: "il sole e la luna ruotano attorno alla terra in orbite circolari",
                correct: false,
                explanation:
                    "La Terra orbita attorno al Sole. La Luna orbita attorno alla Terra, ma la descrizione proposta per Sole e Luna è quindi errata.",
            },
            {
                id: "D",
                text: "il sole e la luna ruotano attorno alla terra in orbite ellittiche",
                correct: false,
                explanation:
                    "La Luna orbita attorno alla Terra, ma il Sole non compie un'orbita attorno alla Terra nel modello eliocentrico.",
            },
        ],
    },

    {
        id: 57,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria",
        difficulty: 4,
        question:
            "Elena dice: “Anche per calcolare l'area di un parallelogramma, posso usare la formula somma delle basi per altezza diviso 2 che si studia per i trapezi”. Aiace: “Non è vero, perché non tutti i trapezi sono dei parallelogrammi.” Agamennone: “Non è vero, perché nessun parallelogramma è un trapezio.” Achille: “È vero, perché per un parallelogramma di base 5 cm e altezza 3 cm, con la formula di Elena si trova 15 cm quadrati.”",
        answers: [
            {
                id: "A",
                text: "Hanno ragione sia Aiace sia Agamennone.",
                correct: false,
                explanation:
                    "Il fatto che non tutti i trapezi siano parallelogrammi non impedisce alla formula di funzionare per un parallelogramma. Inoltre, con la definizione inclusiva di trapezio, un parallelogramma è un caso particolare di trapezio.",
            },
            {
                id: "B",
                text: "Elena ha ragione e la giustificazione di Achille è adeguata da un punto di vista matematico.",
                correct: false,
                explanation:
                    "L'esempio di un solo parallelogramma mostra che la formula funziona in quel caso particolare, ma non costituisce una dimostrazione valida per tutti i parallelogrammi.",
            },
            {
                id: "C",
                text: "Elena ha ragione, ma la giustificazione di Achille non basta a dimostrarlo.",
                correct: true,
                explanation:
                    "Per un parallelogramma le due basi del trapezio coincidono: (b + b) × h / 2 = 2b × h / 2 = b × h. Elena ha quindi ragione in generale, mentre verificare un solo esempio numerico non è una dimostrazione generale.",
            },
            {
                id: "D",
                text: "Solo Agamennone ha ragione.",
                correct: false,
                explanation:
                    "L'affermazione secondo cui nessun parallelogramma sarebbe un trapezio dipende da una definizione esclusiva non adottata nell'impostazione matematica del quesito. La formula proposta da Elena è comunque algebricamente valida.",
            },
        ],
    },

    {
        id: 58,
        area: "cultura-matematico-scientifica",
        category: "matematica-proporzioni",
        difficulty: 3,
        question:
            "Abbinare alle due seguenti affermazioni le corrette relazioni algebriche che le rappresentano: Al ballo ci sono 3 dame per ogni cavaliere, e si balleranno 2 valzer ogni 5 minuetti (d, c, v, m indicano rispettivamente il numero di dame, cavalieri, valzer e minuetti)",
        answers: [
            {
                id: "A",
                text: "d = 3 c ; m / 5 = v/2.",
                correct: true,
                explanation:
                    "Tre dame per ogni cavaliere significa d = 3c. Due valzer ogni cinque minuetti significa v/m = 2/5, che è equivalente a m/5 = v/2.",
            },
            {
                id: "B",
                text: "c = d / 3; 5 m = 2 v.",
                correct: false,
                explanation:
                    "La prima relazione c = d/3 è corretta, ma 5m = 2v implica v/m = 5/2, cioè il rapporto inverso rispetto ai 2 valzer ogni 5 minuetti.",
            },
            {
                id: "C",
                text: "d = c / 3; m / v = 5 / 2.",
                correct: false,
                explanation:
                    "m/v = 5/2 rappresenta correttamente il rapporto minuetti-valzer, ma d = c/3 afferma una dama ogni tre cavalieri, mentre il testo dice tre dame per cavaliere.",
            },
            {
                id: "D",
                text: "c = 3 d ; 2 v = 5 m.",
                correct: false,
                explanation:
                    "c = 3d inverte il primo rapporto. Anche 2v = 5m equivale a v/m = 5/2, mentre il rapporto richiesto è 2/5.",
            },
        ],
    },

    {
        id: 59,
        area: "cultura-matematico-scientifica",
        category: "biologia-genetica",
        difficulty: 1,
        question:
            "Uno spermatozoo umano contiene:",
        answers: [
            {
                id: "A",
                text: "46 cromosomi",
                correct: false,
                explanation:
                    "46 è il numero diploide delle normali cellule somatiche umane. I gameti contengono invece metà del corredo cromosomico.",
            },
            {
                id: "B",
                text: "1 cromosoma",
                correct: false,
                explanation:
                    "Uno spermatozoo contiene un intero corredo aploide, non un solo cromosoma.",
            },
            {
                id: "C",
                text: "non si possono contare",
                correct: false,
                explanation:
                    "Il numero di cromosomi dei gameti umani è noto e determinato: il corredo aploide comprende 23 cromosomi.",
            },
            {
                id: "D",
                text: "23 cromosomi",
                correct: true,
                explanation:
                    "Lo spermatozoo umano è una cellula aploide e contiene 23 cromosomi, cioè metà dei 46 presenti nelle cellule somatiche.",
            },
        ],
    },

    {
        id: 60,
        area: "cultura-matematico-scientifica",
        category: "matematica-numeri-pari-dispari",
        difficulty: 3,
        question:
            "L’insegnante chiede: “Il numero intero 2n² − 1 (dove n² è n al quadrato) è un numero dispari per qualsiasi numero intero n?” Quale risposta è corretta e matematicamente ben giustificata?",
        answers: [
            {
                id: "A",
                text: "Antonio: “Se n = 1, fa 1 che è dispari.”",
                correct: false,
                explanation:
                    "Verificare soltanto n = 1 dimostra la proprietà per un singolo caso, non per qualsiasi numero intero n.",
            },
            {
                id: "B",
                text: "Clara: “Sì, perché il doppio di un numero è sempre un numero pari e quindi il numero che lo precede è dispari.”",
                correct: true,
                explanation:
                    "Per qualsiasi intero n, anche n² è intero. Di conseguenza 2n² è sempre pari e sottraendo 1 si ottiene sempre un numero dispari.",
            },
            {
                id: "C",
                text: "Dario: “No, perché è vero solo per i numeri dispari, che sono i soli che hanno come quadrato un numero dispari.”",
                correct: false,
                explanation:
                    "Anche quando n è pari, n² è pari, 2n² resta pari e 2n² − 1 è dispari. La proprietà vale quindi per numeri pari e dispari.",
            },
            {
                id: "D",
                text: "Bice: “No, perché per n = 0 il numero è negativo; quindi, non è vero che è dispari per tutti i numeri.”",
                correct: false,
                explanation:
                    "Per n = 0 si ottiene 2·0² − 1 = −1. Anche −1 è un numero intero dispari, quindi questo caso non costituisce un controesempio.",
            },
        ],
    }
];

export default simulation16;