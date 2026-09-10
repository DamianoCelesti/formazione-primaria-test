const passages19 = {
    passage01: `Se potessimo includere tutti i mali del mondo in una sola parola, quale sceglieremmo? Di sicuro il termine “estrattivismo” sarebbe un buon candidato, almeno secondo attivisti e studiosi. Ormai onnipresente, la denuncia dell’estrattivismo è intersezionale. La troviamo nei dibattiti sull’ecologismo, sul decolonialismo e sull’anticapitalismo. L’estrattivismo indica il furto, la depredazione e lo sfruttamento del sud del mondo, ma anche l’inquinamento e la deregolamentazione che colpisce l’ambiente. All’inizio l’espressione si riferiva soprattutto allo sfruttamento delle foreste, delle miniere e dei giacimenti di petrolio da parte delle multinazionali in Sudamerica, ma oggi si ritrova nei contesti più diversi: la pesca intensiva, lo sfruttamento del corpo delle donne, l’appropriazione delle culture indigene, l’uso dei dati personali da parte dei giganti della tecnologia. L’idea di estrattivismo propone una griglia di analisi complessiva del sistema economico, nel solco del concetto di sfruttamento delle persone sulle persone. L’assonanza tra i due termini non è casuale. Prima di essere resa popolare da Karl Marx (1818-1883), la parola “ausbeutung” (sfruttamento) era infatti usata per indicare l’estrazione del carbone e dei minerali.

(P. Riché, “Una sintesi di tutti i mali del capitalismo”, “Internazionale”, online)`,

    passage02: `Una delle sere precedenti il Natale, a T., mi trovavo nella mia stanza di cui non avevo ancora pagato la pigione, veramente una delle più fredde e piccole stanze che siano sulla terra. Erano le sei della sera, e fuori la pioggia cadeva ininterrottamente, con solo uno scroscio segreto, greve, variato soltanto dal sibilo del vento, il quale, infilandosi in non so che modo sotto la porta, posava mani gelate sui miei piedi. […] Ancora meno allegra, anzi lugubre del tutto, la vista di quella stanza dove la luce andava morendo, essendo, d’inverno, le sei della sera. Rigido e squallido come una tavola il letto, con la sua coperta di un verdenero scrupolosamente stirata e rimboccata insieme al risvolto delle lenzuola, ch’erano di grossa tela macchiata di ruggine. […] E la finestra era forse più allegra? Alle sei della sera, specie se è una sera d’inverno, una finestra così, incassata come una fenditura, stretta come una crepa in un muro putrido, non è possibile, davvero, che consoli nessuno. Era così, e per questo, che quella sera […] io avvertivo un così profondo e crescente e angoscioso malessere […]. Ero in uno stato di lieve incoscienza, di torpore che m’impediva di prendere una qualsiasi decisione in merito alla crudeltà di quel pavimento, del letto, della finestra e degli stessi muri della stanza.

(Adattato da A.M. Ortese, "Le sei della sera", in Ead., "L’infanta sepolta", a cura di M. Farnetti, Milano, Adelphi, 2000)`,

    passage03: `Quando le nuvole coprono il sole e annunciano pioggia, il lago Kivu assume un colore opalescente e sembra avvolto da una calma quasi irreale. La tranquillità è solo apparente. Il lago, di origine vulcanica, racchiude nel suo ventre enormi quantità di anidride carbonica che potrebbero improvvisamente causare un’eruzione capace di liberare gas tossici e innescare uno tsunami. Le acque sono ostili alla fauna e solo poche specie di pesci ostinati sopravvivono. Ma la minaccia, più che dalla natura, in questo angolo d’Africa viene dall’uomo. Il lago Kivu è il confine naturale che separa la Repubblica Democratica del Congo dal Ruanda, due paesi impegnati in un conflitto non dichiarato combattuto per procura e scandito da dichiarazioni sempre più bellicose. A guardare una carta geografica si rimane sbigottiti: è come se il Molise fosse ai ferri corti con la Germania. Le proporzioni dei territori sono quelle. Ma nell’Africa equatoriale i nostri metri di giudizio non valgono. Sulla riva Nord del lago una frontiera divide due città: a ovest la congolese Goma a est la ruandese Gisenyi. Sono due sorelle da fiaba dei fratelli Grimm. Goma ha 700mila abitanti e migliaia di profughi e nel 2002 ha rischiato di essere cancellata dall’eruzione del vulcano Nyiragongo; Gisenyi di abitanti ne ha circa 80mila, è una città placida e quasi elegante, dalla vocazione turistica un po’ appassita e sede del principale birrificio del Ruanda.

(Adattato da G. Mariani, "Sulle ostili acque di colonia del lago Kivu", in "Il Manifesto", 10 giugno 2024).`,
};

const simulation19 = [
    {
        id: 1,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages19.passage01,
        question:
            "Da quanto si deduce complessivamente dal brano, qual è il significato attuale del termine “estrattivismo”?",
        answers: [
            {
                id: "A",
                text: "Una forma di regolamentazione internazionale tesa a bilanciare lo sfruttamento delle risorse naturali.",
                correct: false,
                explanation:
                    "Il brano non presenta l'estrattivismo come una regolamentazione volta a limitare lo sfruttamento. Al contrario, il termine viene utilizzato proprio per criticare pratiche di sfruttamento, appropriazione e depredazione.",
            },
            {
                id: "B",
                text: "Un modello di sviluppo basato sulla conservazione ambientale nei paesi a basso reddito.",
                correct: false,
                explanation:
                    "La conservazione dell'ambiente è sostanzialmente opposta alle pratiche denunciate come estrattiviste. Il testo associa infatti l'estrattivismo anche all'inquinamento e allo sfruttamento intensivo delle risorse.",
            },
            {
                id: "C",
                text: "Un sistema economico fondato sullo sfruttamento sistematico di risorse e popolazioni, spesso localizzato nel Sud globale.",
                correct: true,
                explanation:
                    "Il brano descrive l'estrattivismo come un concetto ampio che comprende sfruttamento di risorse naturali, persone, culture e perfino dati personali. Non è quindi limitato alla sola estrazione materiale.",
            },
            {
                id: "D",
                text: "L’insieme delle tecniche utilizzate per estrarre risorse dai giacimenti, a scopi esclusivamente industriali.",
                correct: false,
                explanation:
                    "Questa definizione è troppo limitata. Storicamente il termine era legato alle attività estrattive, ma nel suo significato attuale comprende numerose forme di sfruttamento economico, sociale e culturale.",
            },
        ],
    },

    {
        id: 2,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages19.passage01,
        question:
            "In che senso, secondo il brano, la critica all’estrattivismo è “intersezionale”?",
        answers: [
            {
                id: "A",
                text: "Perché riguarda esclusivamente le intersezioni geografiche tra Nord e Sud del mondo.",
                correct: false,
                explanation:
                    "Il termine «intersezionale» non viene utilizzato in senso geografico. Indica invece l'intreccio tra diversi problemi e diverse forme di sfruttamento.",
            },
            {
                id: "B",
                text: "Perché coinvolge e connette varie lotte sociali, come quelle ecologiste e anticoloniali.",
                correct: true,
                explanation:
                    "Il testo cita esplicitamente ecologismo, decolonialismo e anticapitalismo. La critica è quindi definita intersezionale perché collega diversi ambiti di lotta e differenti forme di sfruttamento.",
            },
            {
                id: "C",
                text: "Perché è una critica nata in ambito accademico e priva di impatto sulle mobilitazioni reali.",
                correct: false,
                explanation:
                    "Il brano parla sia di studiosi sia di attivisti e descrive il concetto come ormai onnipresente nel dibattito. Non lo presenta quindi come puramente accademico.",
            },
            {
                id: "D",
                text: "Perché viene affrontata da diversi settori industriali e tecnologici in maniera disgiunta.",
                correct: false,
                explanation:
                    "«Intersezionale» indica proprio il collegamento tra diversi fenomeni, non una loro trattazione separata o disgiunta.",
            },
        ],
    },

    {
        id: 3,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages19.passage01,
        question:
            "Cosa si intende nel brano con “assonanza” tra i termini “estrattivismo” e “sfruttamento”?",
        answers: [
            {
                id: "A",
                text: "Che “estrattivismo” riguarda l’ambiente, mentre “sfruttamento” riguarda solo l’economia.",
                correct: false,
                explanation:
                    "Il brano non separa rigidamente i due concetti. L'estrattivismo viene infatti applicato anche allo sfruttamento delle persone, delle culture e dei dati.",
            },
            {
                id: "B",
                text: "Che i due termini suonano simili ma di fatto non hanno alcun legame concettuale tra loro.",
                correct: false,
                explanation:
                    "Il testo afferma espressamente che il legame «non è casuale» e ricorda che il termine tedesco per sfruttamento veniva usato originariamente anche nel contesto dell'estrazione mineraria.",
            },
            {
                id: "C",
                text: "Che va distinto nettamente il significato delle due parole, essendo l’una il contrario dell’altra.",
                correct: false,
                explanation:
                    "Estrattivismo e sfruttamento non vengono presentati come contrari. Il primo viene anzi interpretato nel solco del secondo.",
            },
            {
                id: "D",
                text: "Che i due termini esprimono concetti analoghi.",
                correct: true,
                explanation:
                    "Nel brano l'estrattivismo è collegato alla più generale idea di sfruttamento. Il riferimento storico alla parola tedesca «ausbeutung» rafforza proprio questa vicinanza concettuale.",
            },
        ],
    },

    {
        id: 4,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages19.passage01,
        question:
            "Quale delle seguenti pratiche è considerata una forma moderna di “estrattivismo”, secondo quanto si deduce dal brano?",
        answers: [
            {
                id: "A",
                text: "L’utilizzo dei dati personali da parte delle grandi piattaforme digitali.",
                correct: true,
                explanation:
                    "Il brano cita esplicitamente «l'uso dei dati personali da parte dei giganti della tecnologia» tra le forme contemporanee di estrattivismo. Il concetto è quindi esteso anche alle risorse digitali.",
            },
            {
                id: "B",
                text: "L’implementazione di politiche green-oriented da parte delle multinazionali.",
                correct: false,
                explanation:
                    "Le politiche orientate alla sostenibilità non vengono indicate come esempi di estrattivismo. Il termine ha invece una connotazione critica legata allo sfruttamento.",
            },
            {
                id: "C",
                text: "La valorizzazione delle tradizioni indigene attraverso il turismo responsabile.",
                correct: false,
                explanation:
                    "Il testo cita l'appropriazione delle culture indigene, non la loro valorizzazione responsabile. Sono due fenomeni molto diversi.",
            },
            {
                id: "D",
                text: "L’analisi scientifica delle risorse forestali per la tutela della biodiversità.",
                correct: false,
                explanation:
                    "Studiare le risorse per proteggerle non costituisce di per sé una pratica estrattivista. Il concetto riguarda forme di sfruttamento e appropriazione.",
            },
        ],
    },

    {
        id: 5,
        area: "linguistica-logica",
        category: "lessico-comprensione",
        difficulty: 2,
        passage: passages19.passage01,
        question:
            "Nel contesto del brano, quale tra le seguenti espressioni potrebbe sostituire correttamente “nel solco del concetto di sfruttamento delle persone sulle persone”?",
        answers: [
            {
                id: "A",
                text: "A prescindere dal concetto di sfruttamento delle persone sulle persone.",
                correct: false,
                explanation:
                    "«A prescindere da» significa senza tenere conto di qualcosa. Nel brano viene invece stabilita una continuità tra estrattivismo e sfruttamento.",
            },
            {
                id: "B",
                text: "In opposizione al concetto di sfruttamento delle persone sulle persone.",
                correct: false,
                explanation:
                    "«Nel solco di» non indica opposizione, ma continuità o sviluppo all'interno della stessa linea concettuale.",
            },
            {
                id: "C",
                text: "In continuità con il concetto di sfruttamento delle persone sulle persone.",
                correct: true,
                explanation:
                    "L'espressione «nel solco di» significa seguendo una linea già tracciata, quindi «in continuità con». È la parafrasi più precisa nel contesto.",
            },
            {
                id: "D",
                text: "Nonostante il concetto di sfruttamento delle persone sulle persone.",
                correct: false,
                explanation:
                    "«Nonostante» introduce un rapporto concessivo. Nel testo non c'è contrasto tra i due concetti, ma vicinanza.",
            },
        ],
    },

    {
        id: 6,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages19.passage02,
        question:
            "Quale delle seguenti affermazioni esprime meglio la funzione della descrizione ambientale nel brano?",
        answers: [
            {
                id: "A",
                text: "Descrivere in modo neutro lo spazio fisico, separandolo dal flusso di pensiero dell’autrice.",
                correct: false,
                explanation:
                    "La descrizione non è affatto neutrale: l'ambiente è presentato attraverso immagini fortemente negative che riflettono lo stato emotivo della protagonista.",
            },
            {
                id: "B",
                text: "Riflettere il disagio psicologico della protagonista attraverso l’ambiente.",
                correct: true,
                explanation:
                    "Freddo, oscurità, squallore, vento e immagini come «muro putrido» trasformano lo spazio in una proiezione del malessere interiore della protagonista.",
            },
            {
                id: "C",
                text: "Introdurre un contrasto tra l'esterno tetro e l'interno confortevole della stanza.",
                correct: false,
                explanation:
                    "Non esiste questo contrasto: anche l'interno è descritto come freddo, squallido e lugubre.",
            },
            {
                id: "D",
                text: "Fornire una cornice realistica alla narrazione, senza riflettere l'umore del personaggio.",
                correct: false,
                explanation:
                    "L'ambiente ha certamente una funzione narrativa, ma è strettamente collegato all'umore della protagonista, che manifesta un crescente e angoscioso malessere.",
            },
        ],
    },

    {
        id: 7,
        area: "linguistica-logica",
        category: "lessico",
        difficulty: 2,
        passage: passages19.passage02,
        question:
            "Nell'espressione “la pioggia cadeva ininterrottamente, con solo uno scroscio segreto, greve”, quale tra i seguenti significati è più vicino a “greve”?",
        answers: [
            {
                id: "A",
                text: "Fulmineo, violento.",
                correct: false,
                explanation:
                    "«Greve» non significa improvviso o fulmineo. Richiama piuttosto qualcosa di pesante e oppressivo.",
            },
            {
                id: "B",
                text: "Leggero, non percepibile.",
                correct: false,
                explanation:
                    "Il significato è sostanzialmente opposto: «greve» comunica un'impressione di pesantezza.",
            },
            {
                id: "C",
                text: "Ritmico, regolare, brioso.",
                correct: false,
                explanation:
                    "Il contesto è cupo e malinconico, non allegro o brioso. Questi termini non rendono il significato dell'aggettivo.",
            },
            {
                id: "D",
                text: "Pesante, carico di malinconia.",
                correct: true,
                explanation:
                    "«Greve» può significare pesante, opprimente, cupo. Nel contesto contribuisce a rafforzare l'atmosfera malinconica e soffocante della scena.",
            },
        ],
    },

    {
        id: 8,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages19.passage02,
        question:
            "Che valore ha, nel contesto del brano, la ripetizione della formula “alle sei della sera”?",
        answers: [
            {
                id: "A",
                text: "Associa a quel momento della giornata una condizione interiore di oppressione e immobilità.",
                correct: true,
                explanation:
                    "La ripetizione delle «sei della sera» non ha soltanto funzione cronologica. Rafforza il legame tra il buio invernale, la stanza opprimente e lo stato di torpore e angoscia della protagonista.",
            },
            {
                id: "B",
                text: "Serve solo a indicare il tempo preciso dell’azione, per collocare i fatti.",
                correct: false,
                explanation:
                    "La ripetizione assume un evidente valore espressivo e psicologico. Non serve semplicemente come indicazione dell'orario.",
            },
            {
                id: "C",
                text: "Indica che un evento particolarmente traumatico è accaduto in quel preciso orario.",
                correct: false,
                explanation:
                    "Il testo non racconta un trauma avvenuto alle sei. L'orario contribuisce piuttosto a costruire l'atmosfera di oscurità e oppressione.",
            },
            {
                id: "D",
                text: "Indica il cessato funzionamento dell’orologio della protagonista.",
                correct: false,
                explanation:
                    "Non viene mai detto che l'orologio sia fermo o guasto. La ripetizione ha una funzione narrativa e simbolica.",
            },
        ],
    },

    {
        id: 9,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages19.passage02,
        question:
            "Che cosa suggerisce l’espressione “E la finestra era forse più allegra?” nel contesto del brano?",
        answers: [
            {
                id: "A",
                text: "Che la finestra rappresenta un rifugio accogliente per la protagonista.",
                correct: false,
                explanation:
                    "La finestra viene descritta come stretta, simile a una crepa in un muro putrido. Non rappresenta quindi alcun rifugio rassicurante.",
            },
            {
                id: "B",
                text: "Che la finestra è descritta in modo neutro e non influisce sull’umore generale.",
                correct: false,
                explanation:
                    "La descrizione è fortemente connotata e contribuisce direttamente all'atmosfera negativa della stanza.",
            },
            {
                id: "C",
                text: "Che la finestra, come tutto l’ambiente, contribuisce a un’atmosfera cupa e triste.",
                correct: true,
                explanation:
                    "La domanda retorica anticipa una risposta negativa: anche la finestra è lugubre e opprimente. È quindi parte integrante della rappresentazione del disagio della protagonista.",
            },
            {
                id: "D",
                text: "Che la finestra è l’unico elemento positivo nel racconto.",
                correct: false,
                explanation:
                    "È vero il contrario. La finestra viene descritta come un altro elemento sgradevole della stanza.",
            },
        ],
    },

    {
        id: 10,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages19.passage02,
        question:
            "Una possibile interpretazione dell’espressione “Ero in uno stato di lieve incoscienza, di torpore che m’impediva di prendere una qualsiasi decisione in merito alla crudeltà di quel pavimento, del letto, della finestra e degli stessi muri della stanza” è la seguente:",
        answers: [
            {
                id: "A",
                text: "L’autrice esercita la propria crudeltà su chi la costringe a vivere in quel luogo.",
                correct: false,
                explanation:
                    "La «crudeltà» viene attribuita metaforicamente agli elementi della stanza, non alla protagonista.",
            },
            {
                id: "B",
                text: "La protagonista non riesce a reagire con piena lucidità alla spiacevolezza di quell’ambiente.",
                correct: true,
                explanation:
                    "Le parole «lieve incoscienza» e «torpore» indicano una condizione psicologica che ostacola la capacità di reagire e prendere decisioni.",
            },
            {
                id: "C",
                text: "La protagonista accetta serenamente l’ambiente in cui si trova, senza voler esprimere critiche.",
                correct: false,
                explanation:
                    "La protagonista prova un «profondo e crescente e angoscioso malessere». Non vi è quindi alcuna accettazione serena.",
            },
            {
                id: "D",
                text: "L’autrice esamina la bruttezza dell’ambiente con analiticità, consapevolezza e distacco emotivo.",
                correct: false,
                explanation:
                    "La descrizione è fortemente emotiva e soggettiva. Il torpore impedisce inoltre proprio una piena lucidità.",
            },
        ],
    },

    {
        id: 11,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages19.passage03,
        question:
            "Da quanto si deduce dal brano, quale fenomeno naturale rende potenzialmente pericoloso il lago Kivu?",
        answers: [
            {
                id: "A",
                text: "La presenza di pesci particolarmente pericolosi per l’uomo.",
                correct: false,
                explanation:
                    "Il brano afferma addirittura che poche specie di pesci riescono a sopravvivere nelle acque. Non sono quindi loro a costituire il principale pericolo naturale.",
            },
            {
                id: "B",
                text: "L’innalzamento della temperatura delle acque durante la stagione secca.",
                correct: false,
                explanation:
                    "Il testo non indica l'aumento della temperatura delle acque come principale rischio naturale.",
            },
            {
                id: "C",
                text: "L’erosione delle rive dovuta all’attività agricola intensiva.",
                correct: false,
                explanation:
                    "L'erosione agricola non viene indicata nel brano come minaccia legata al lago.",
            },
            {
                id: "D",
                text: "La presenza di grandi quantità di anidride carbonica nel fondo del lago.",
                correct: true,
                explanation:
                    "Il lago racchiude enormi quantità di anidride carbonica che, se liberate improvvisamente, potrebbero produrre gas tossici e contribuire a fenomeni estremamente pericolosi.",
            },
        ],
    },

    {
        id: 12,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages19.passage03,
        question:
            "Quale paradosso geopolitico viene evidenziato dall’autore del brano?",
        answers: [
            {
                id: "A",
                text: "La sproporzione tra la dimensione dei due Paesi in conflitto.",
                correct: true,
                explanation:
                    "L'autore paragona la situazione a un ipotetico conflitto tra Molise e Germania per rendere evidente l'enorme differenza di dimensioni tra Ruanda e Repubblica Democratica del Congo.",
            },
            {
                id: "B",
                text: "L’inesistenza di barriere naturali tra i due Paesi in guerra.",
                correct: false,
                explanation:
                    "Il lago Kivu costituisce proprio un confine naturale tra i due Paesi. Questa alternativa contraddice il testo.",
            },
            {
                id: "C",
                text: "Il fatto che un piccolo lago possa contenere gas tossici.",
                correct: false,
                explanation:
                    "Questa è una caratteristica naturale del lago, ma non rappresenta il paradosso geopolitico evidenziato dal confronto con Molise e Germania.",
            },
            {
                id: "D",
                text: "La presenza di fauna ostile in un ambiente apparentemente calmo.",
                correct: false,
                explanation:
                    "Il testo parla di acque ostili alla fauna, non di fauna particolarmente ostile. Inoltre il quesito riguarda un paradosso geopolitico.",
            },
        ],
    },

    {
        id: 13,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages19.passage03,
        question:
            "Dal brano si evince che la principale causa di minaccia per la stabilità della zona è rappresentata da:",
        answers: [
            {
                id: "A",
                text: "La scarsa presenza di turismo nella regione.",
                correct: false,
                explanation:
                    "Il calo del turismo viene ricordato in relazione a Gisenyi, ma non è considerato la principale minaccia alla stabilità regionale.",
            },
            {
                id: "B",
                text: "Il rischio di inondazioni causate dal cambiamento climatico.",
                correct: false,
                explanation:
                    "Il cambiamento climatico non viene indicato nel testo come causa principale della minaccia.",
            },
            {
                id: "C",
                text: "Le tensioni politiche tra la Repubblica Democratica del Congo e il Ruanda.",
                correct: true,
                explanation:
                    "Il brano afferma esplicitamente che «la minaccia, più che dalla natura, viene dall'uomo» e descrive il conflitto non dichiarato tra Congo e Ruanda.",
            },
            {
                id: "D",
                text: "Le difficoltà economiche delle popolazioni locali.",
                correct: false,
                explanation:
                    "Pur essendo possibile che la regione presenti problemi economici, il testo identifica principalmente nelle tensioni geopolitiche la minaccia alla stabilità.",
            },
        ],
    },

    {
        id: 14,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages19.passage03,
        question:
            "Che cosa afferma l’autore del brano riguardo all’uso dei “nostri metri di giudizio” in Africa?",
        answers: [
            {
                id: "A",
                text: "Che sono validi per l’analisi geopolitica, ma non per quella culturale.",
                correct: false,
                explanation:
                    "Il testo non opera questa distinzione tra analisi geopolitica e culturale. L'affermazione ha un significato più generale.",
            },
            {
                id: "B",
                text: "Che non sono adeguati a comprendere le dinamiche africane.",
                correct: true,
                explanation:
                    "La frase «nell'Africa equatoriale i nostri metri di giudizio non valgono» invita a non applicare automaticamente categorie europee a realtà geopolitiche africane molto differenti.",
            },
            {
                id: "C",
                text: "Che sono stati usati soltanto dai fratelli Grimm.",
                correct: false,
                explanation:
                    "Il riferimento ai fratelli Grimm riguarda la metafora delle due città «sorelle da fiaba» e non i criteri di giudizio.",
            },
            {
                id: "D",
                text: "Che sono utili solo per fare sondaggi di tipo etnico e culturale.",
                correct: false,
                explanation:
                    "Nel testo non viene fatto alcun riferimento a sondaggi. «Metri di giudizio» è un'espressione figurata per indicare i nostri criteri di valutazione.",
            },
        ],
    },

    {
        id: 15,
        area: "linguistica-logica",
        category: "comprensione-stile",
        difficulty: 2,
        passage: passages19.passage03,
        question:
            "Qual è lo stile narrativo adottato dall’autore del brano?",
        answers: [
            {
                id: "A",
                text: "Tecnico-scientifico, esclusivamente focalizzato su dati ambientali.",
                correct: false,
                explanation:
                    "Il testo contiene elementi scientifici, ma anche descrizioni evocative, geopolitica, paragoni e immagini narrative.",
            },
            {
                id: "B",
                text: "Ironico-satirico, con intento polemico verso le istituzioni.",
                correct: false,
                explanation:
                    "Sono presenti paragoni efficaci, ma il testo non è costruito principalmente come satira delle istituzioni.",
            },
            {
                id: "C",
                text: "Narrativo-autobiografico, incentrato su esperienze personali.",
                correct: false,
                explanation:
                    "L'autore non racconta principalmente una propria esperienza personale. Il brano ha carattere giornalistico e descrittivo.",
            },
            {
                id: "D",
                text: "Giornalistico-descrittivo, con elementi evocativi e comparativi.",
                correct: true,
                explanation:
                    "Il testo combina informazioni geografiche e geopolitiche con descrizioni suggestive e paragoni, come quello tra Molise e Germania o quello delle città «sorelle» dei fratelli Grimm.",
            },
        ],
    },

    {
        id: 16,
        area: "linguistica-logica",
        category: "grammatica-nomi-alterati",
        difficulty: 1,
        question:
            "Quale tra i seguenti nomi è alterato al vezzeggiativo?",
        answers: [
            {
                id: "A",
                text: "Bambinuccia",
                correct: true,
                explanation:
                    "«Bambinuccia» è un nome alterato con suffisso vezzeggiativo, che aggiunge una sfumatura affettiva o tenera al sostantivo «bambina».",
            },
            {
                id: "B",
                text: "Boccone",
                correct: false,
                explanation:
                    "«Boccone» non è normalmente interpretato come vezzeggiativo di «bocca». È un sostantivo autonomo che indica una quantità di cibo che si può mettere in bocca.",
            },
            {
                id: "C",
                text: "Fratellastro",
                correct: false,
                explanation:
                    "Il suffisso «-astro» ha normalmente valore peggiorativo o indica, in questo caso, una particolare relazione di parentela. Non è vezzeggiativo.",
            },
            {
                id: "D",
                text: "Tavolino",
                correct: false,
                explanation:
                    "«Tavolino» è soprattutto un diminutivo di «tavolo». Il suffisso «-ino» indica qui piccole dimensioni più che una sfumatura affettiva.",
            },
        ],
    },

    {
        id: 17,
        area: "linguistica-logica",
        category: "grammatica-comparativi",
        difficulty: 1,
        question:
            "Quale delle seguenti espressioni contiene un comparativo di maggioranza?",
        answers: [
            {
                id: "A",
                text: "Questo caffè è ottimo",
                correct: false,
                explanation:
                    "«Ottimo» è un superlativo assoluto organico di «buono». Non esprime un confronto diretto tra due termini.",
            },
            {
                id: "B",
                text: "Maria è la più brava del mondo",
                correct: false,
                explanation:
                    "«La più brava» è un superlativo relativo di maggioranza, perché Maria viene confrontata con un intero gruppo.",
            },
            {
                id: "C",
                text: "Luca è più bravo di me",
                correct: true,
                explanation:
                    "La struttura «più bravo di» mette a confronto Luca e chi parla, attribuendo a Luca la qualità in grado maggiore. È quindi un comparativo di maggioranza.",
            },
            {
                id: "D",
                text: "Marco è il più alto della classe",
                correct: false,
                explanation:
                    "«Il più alto della classe» è un superlativo relativo: Marco possiede la qualità al massimo grado all'interno del gruppo.",
            },
        ],
    },

    {
        id: 18,
        area: "linguistica-logica",
        category: "lessico",
        difficulty: 2,
        question:
            "Individua l'espressione in cui il verbo “schernire” è usato correttamente:",
        answers: [
            {
                id: "A",
                text: "Ho schernito la lista della spesa sul foglio",
                correct: false,
                explanation:
                    "«Schernire» significa deridere o prendere in giro una persona. Non significa scrivere, copiare o annotare una lista.",
            },
            {
                id: "B",
                text: "Non è giusto schernire i compagni per i loro errori",
                correct: true,
                explanation:
                    "«Schernire» significa deridere, beffare o prendere in giro qualcuno. In questa frase il verbo è utilizzato correttamente.",
            },
            {
                id: "C",
                text: "Schernendo con attenzione la dieta, dimagrirai più in fretta",
                correct: false,
                explanation:
                    "Il verbo non significa seguire o rispettare una dieta. La frase utilizza quindi «schernire» in modo improprio.",
            },
            {
                id: "D",
                text: "Con questo caldo, è meglio schernire bene tutte le finestre",
                correct: false,
                explanation:
                    "Probabilmente qui sarebbe richiesto un verbo come «schermare». «Schernire» significa invece deridere.",
            },
        ],
    },

    {
        id: 19,
        area: "linguistica-logica",
        category: "ortografia",
        difficulty: 1,
        question:
            "Individua la frase scritta correttamente:",
        answers: [
            {
                id: "A",
                text: "C'è ne sarebbero di cose da raccontare!",
                correct: false,
                explanation:
                    "La forma corretta è «ce ne sarebbero», senza apostrofo. «C'è» significa invece «ci è» e non può essere utilizzato in questa costruzione.",
            },
            {
                id: "B",
                text: "Quì abita la mia migliore amica.",
                correct: false,
                explanation:
                    "L'avverbio «qui» si scrive senza accento. La grafia «quì» è errata.",
            },
            {
                id: "C",
                text: "Come si chiama il bar affianco al nostro hotel?",
                correct: false,
                explanation:
                    "Con valore locativo la forma corretta è «a fianco», in due parole: «il bar a fianco al nostro hotel».",
            },
            {
                id: "D",
                text: "Qual è il tuo animale preferito?",
                correct: true,
                explanation:
                    "La forma corretta è «qual è», senza apostrofo. «Qual» deriva da troncamento e non da elisione, quindi non si scrive «qual'è».",
            },
        ],
    },

    {
        id: 20,
        area: "linguistica-logica",
        category: "grammatica-connettivi",
        difficulty: 2,
        question:
            "Individua il completamento corretto dell'espressione \"_______, puoi prenderti una pausa\":",
        answers: [
            {
                id: "A",
                text: "Dal momento che hai completato il lavoro",
                correct: true,
                explanation:
                    "«Dal momento che» introduce correttamente una proposizione causale: poiché il lavoro è stato completato, la persona può concedersi una pausa.",
            },
            {
                id: "B",
                text: "Ovviamente che hai concluso i compiti",
                correct: false,
                explanation:
                    "«Ovviamente che» non può introdurre in questo modo una proposizione causale nello standard italiano.",
            },
            {
                id: "C",
                text: "Finché terminassi",
                correct: false,
                explanation:
                    "«Finché» introduce normalmente una relazione temporale e la forma «terminassi» non si combina correttamente con la principale proposta.",
            },
            {
                id: "D",
                text: "Sebbene avrai concluso tutto",
                correct: false,
                explanation:
                    "«Sebbene» introduce una concessiva e richiede normalmente il congiuntivo, non il futuro indicativo «avrai concluso». Inoltre il significato non è coerente con la relazione causale richiesta.",
            },
        ],
    },
    {
        id: 21,
        area: "linguistica-logica",
        category: "figure-retoriche",
        difficulty: 2,
        question:
            "Quale espressione contiene una metonimia?",
        answers: [
            {
                id: "A",
                text: "Prendiamo la moto!",
                correct: false,
                explanation:
                    "La frase usa il termine «moto» nel suo significato comune e non presenta una sostituzione tra due concetti legati da una relazione logica. Non si tratta quindi di metonimia.",
            },
            {
                id: "B",
                text: "Lucia è incantevole.",
                correct: false,
                explanation:
                    "La frase attribuisce semplicemente una qualità a Lucia mediante l'aggettivo «incantevole». Non è presente una figura di sostituzione come la metonimia.",
            },
            {
                id: "C",
                text: "Oggi leggiamo Dante.",
                correct: true,
                explanation:
                    "È una metonimia perché viene nominato l'autore, Dante, al posto delle sue opere. La relazione autore-opera è uno degli esempi classici di metonimia.",
            },
            {
                id: "D",
                text: "Io mangerò una pizza.",
                correct: false,
                explanation:
                    "La parola «pizza» è utilizzata nel suo significato letterale come oggetto dell'azione di mangiare. Non è presente una metonimia.",
            },
        ],
    },

    {
        id: 22,
        area: "linguistica-logica",
        category: "lessico-sinonimi",
        difficulty: 2,
        question:
            "NON è un sinonimo di “eclettico”:",
        answers: [
            {
                id: "A",
                text: "ellittico",
                correct: true,
                explanation:
                    "«Ellittico» significa caratterizzato da ellissi oppure, in geometria, relativo all'ellisse. Non è sinonimo di «eclettico», che indica una persona o un atteggiamento capace di combinare interessi e orientamenti diversi.",
            },
            {
                id: "B",
                text: "poliedrico",
                correct: false,
                explanation:
                    "«Poliedrico», in senso figurato, indica una persona dalle molte capacità, attività o sfaccettature. È quindi vicino al significato di «eclettico».",
            },
            {
                id: "C",
                text: "versatile",
                correct: false,
                explanation:
                    "«Versatile» indica qualcuno capace di adattarsi a molti ambiti o svolgere attività differenti. È un possibile sinonimo di «eclettico».",
            },
            {
                id: "D",
                text: "multiforme",
                correct: false,
                explanation:
                    "«Multiforme» significa caratterizzato da molte forme o aspetti diversi. Nel significato figurato può avvicinarsi a «eclettico».",
            },
        ],
    },

    {
        id: 23,
        area: "linguistica-logica",
        category: "lessico-antonimi",
        difficulty: 2,
        question:
            "È un contrario di “mellifluo”:",
        answers: [
            {
                id: "A",
                text: "suadente",
                correct: false,
                explanation:
                    "«Suadente» indica un modo di parlare persuasivo, dolce e piacevole. È semanticamente vicino a «mellifluo», non il suo contrario.",
            },
            {
                id: "B",
                text: "mieloso",
                correct: false,
                explanation:
                    "«Mieloso» indica qualcosa di eccessivamente dolce o affettato ed è molto vicino al significato figurato di «mellifluo».",
            },
            {
                id: "C",
                text: "sdolcinato",
                correct: false,
                explanation:
                    "Anche «sdolcinato» esprime un'eccessiva dolcezza nei modi o nelle parole. Non rappresenta quindi un contrario.",
            },
            {
                id: "D",
                text: "schietto",
                correct: true,
                explanation:
                    "«Schietto» significa franco, diretto e sincero. Si oppone bene a «mellifluo», che può indicare un modo di parlare eccessivamente dolce, insinuante o artificiosamente suadente.",
            },
        ],
    },

    {
        id: 24,
        area: "linguistica-logica",
        category: "morfologia-prefissoidi",
        difficulty: 1,
        question:
            "Il prefissoide “tele-” indica:",
        answers: [
            {
                id: "A",
                text: "impossibile",
                correct: false,
                explanation:
                    "Il significato di «tele-» non riguarda l'impossibilità. Questo valore può essere espresso da altri prefissi con funzione negativa o privativa.",
            },
            {
                id: "B",
                text: "da lontano",
                correct: true,
                explanation:
                    "Il prefissoide «tele-» deriva dal greco e significa «lontano» o «a distanza». Lo ritroviamo, per esempio, in «telefono», «televisione» e «telecomunicazione».",
            },
            {
                id: "C",
                text: "schermo",
                correct: false,
                explanation:
                    "Sebbene molte parole con «tele-» siano associate a dispositivi dotati di schermo, il prefisso non significa «schermo».",
            },
            {
                id: "D",
                text: "a colori",
                correct: false,
                explanation:
                    "Il prefisso «tele-» non contiene alcun riferimento al colore. Il suo significato fondamentale è «a distanza».",
            },
        ],
    },

    {
        id: 25,
        area: "linguistica-logica",
        category: "analisi-logica",
        difficulty: 2,
        question:
            "Quale frase contiene un complemento di moto a luogo?",
        answers: [
            {
                id: "A",
                text: "Sono uscito felice",
                correct: false,
                explanation:
                    "«Felice» è un complemento predicativo del soggetto o comunque un elemento che descrive lo stato del soggetto. Non indica la destinazione del movimento.",
            },
            {
                id: "B",
                text: "Resto in biblioteca fino alle sei",
                correct: false,
                explanation:
                    "«In biblioteca» indica stato in luogo, perché il soggetto rimane fermo in un determinato posto.",
            },
            {
                id: "C",
                text: "Vado al supermercato",
                correct: true,
                explanation:
                    "«Al supermercato» indica il luogo verso il quale è diretto il movimento espresso dal verbo «vado». È quindi un complemento di moto a luogo.",
            },
            {
                id: "D",
                text: "Cammino distrattamente",
                correct: false,
                explanation:
                    "«Distrattamente» è un avverbio di modo e descrive come viene compiuta l'azione. Non indica una destinazione.",
            },
        ],
    },

    {
        id: 26,
        area: "linguistica-logica",
        category: "grammatica-verbi",
        difficulty: 1,
        question:
            "Individua la forma verbale coniugata al condizionale presente:",
        answers: [
            {
                id: "A",
                text: "venga",
                correct: false,
                explanation:
                    "«Venga» è una forma del congiuntivo presente del verbo «venire», prima o terza persona singolare a seconda del contesto.",
            },
            {
                id: "B",
                text: "verrò",
                correct: false,
                explanation:
                    "«Verrò» è la prima persona singolare del futuro semplice indicativo.",
            },
            {
                id: "C",
                text: "venissi",
                correct: false,
                explanation:
                    "«Venissi» è la prima o seconda persona singolare del congiuntivo imperfetto.",
            },
            {
                id: "D",
                text: "verrei",
                correct: true,
                explanation:
                    "«Verrei» è la prima persona singolare del condizionale presente del verbo «venire». Può indicare, per esempio, un'azione possibile subordinata a una condizione: «verrei se potessi».",
            },
        ],
    },

    {
        id: 27,
        area: "linguistica-logica",
        category: "grammatica-verbi",
        difficulty: 2,
        question:
            "Individua la voce verbale coniugata al congiuntivo trapassato:",
        answers: [
            {
                id: "A",
                text: "avessi rischiato",
                correct: true,
                explanation:
                    "«Avessi rischiato» è un congiuntivo trapassato, formato dal congiuntivo imperfetto dell'ausiliare «avere» e dal participio passato «rischiato».",
            },
            {
                id: "B",
                text: "rischiò",
                correct: false,
                explanation:
                    "«Rischiò» è la terza persona singolare del passato remoto indicativo.",
            },
            {
                id: "C",
                text: "abbia rischiato",
                correct: false,
                explanation:
                    "«Abbia rischiato» è un congiuntivo passato, formato dal congiuntivo presente di «avere» e dal participio passato.",
            },
            {
                id: "D",
                text: "rischiassi",
                correct: false,
                explanation:
                    "«Rischiassi» è un congiuntivo imperfetto. Non è una forma composta e quindi non può essere un trapassato.",
            },
        ],
    },

    {
        id: 28,
        area: "linguistica-logica",
        category: "figure-retoriche-sintassi",
        difficulty: 3,
        question:
            "Indica l'espressione in cui è presente un anacoluto:",
        answers: [
            {
                id: "A",
                text: "Il mattino ha l'oro in bocca",
                correct: false,
                explanation:
                    "È un proverbio costruito secondo una struttura sintattica regolare. Non presenta un'interruzione o un cambiamento della costruzione grammaticale.",
            },
            {
                id: "B",
                text: "Il coraggio, chi non ce l’ha non se lo può dare",
                correct: true,
                explanation:
                    "L'anacoluto si verifica quando una frase inizia con una costruzione sintattica e prosegue con un'altra. «Il coraggio» rimane sintatticamente sospeso e viene poi ripreso dai pronomi «ce» e «lo».",
            },
            {
                id: "C",
                text: "Ride bene chi ride ultimo",
                correct: false,
                explanation:
                    "La frase presenta una normale struttura sintattica e costituisce un proverbio. Non contiene un anacoluto.",
            },
            {
                id: "D",
                text: "Barcollo ma non mollo",
                correct: false,
                explanation:
                    "La frase contiene due proposizioni coordinate dalla congiunzione avversativa «ma». La struttura è grammaticalmente regolare.",
            },
        ],
    },

    {
        id: 29,
        area: "linguistica-logica",
        category: "morfologia-prefissi",
        difficulty: 2,
        question:
            "Quale parola contiene un prefisso privativo?",
        answers: [
            {
                id: "A",
                text: "rilancio",
                correct: false,
                explanation:
                    "In «rilancio» il prefisso «ri-» indica generalmente ripetizione o rinnovamento dell'azione, non privazione.",
            },
            {
                id: "B",
                text: "disegno",
                correct: false,
                explanation:
                    "Nella parola «disegno» la sequenza iniziale «dis-» non svolge nel significato moderno della parola una funzione privativa analizzabile come nel caso richiesto.",
            },
            {
                id: "C",
                text: "riflesso",
                correct: false,
                explanation:
                    "«Riflesso» non contiene un prefisso privativo. Il termine deriva da una formazione legata al verbo «riflettere».",
            },
            {
                id: "D",
                text: "invalido",
                correct: true,
                explanation:
                    "In «invalido» il prefisso «in-» ha valore negativo o privativo e indica la mancanza della condizione espressa dalla base «valido».",
            },
        ],
    },

    {
        id: 30,
        area: "linguistica-logica",
        category: "analisi-logica",
        difficulty: 2,
        question:
            "In quale frase è presente un complemento di causa?",
        answers: [
            {
                id: "A",
                text: "È arrivata con l’autobus",
                correct: false,
                explanation:
                    "«Con l'autobus» indica il mezzo attraverso il quale la persona è arrivata. È quindi un complemento di mezzo.",
            },
            {
                id: "B",
                text: "Ha salutato con la mano",
                correct: false,
                explanation:
                    "«Con la mano» indica il mezzo o lo strumento utilizzato per salutare, non la causa dell'azione.",
            },
            {
                id: "C",
                text: "È arrossita per la vergogna",
                correct: true,
                explanation:
                    "«Per la vergogna» indica il motivo per cui la persona è arrossita. Risponde alla domanda «per quale causa?» ed è quindi un complemento di causa.",
            },
            {
                id: "D",
                text: "Ha causato un incidente",
                correct: false,
                explanation:
                    "La parola «causato» appartiene al verbo «causare», ma «un incidente» è il complemento oggetto. La presenza del verbo non implica un complemento di causa.",
            },
        ],
    },

    {
        id: 31,
        area: "linguistica-logica",
        category: "grammatica-aggettivi",
        difficulty: 1,
        question:
            "Quale parola è un aggettivo indefinito?",
        answers: [
            {
                id: "A",
                text: "qualche",
                correct: true,
                explanation:
                    "«Qualche» è un aggettivo indefinito quando accompagna un sostantivo, come in «qualche persona». Indica una quantità non precisamente determinata.",
            },
            {
                id: "B",
                text: "forse",
                correct: false,
                explanation:
                    "«Forse» è un avverbio di dubbio. Non accompagna un nome e quindi non è un aggettivo.",
            },
            {
                id: "C",
                text: "belloccio",
                correct: false,
                explanation:
                    "«Belloccio» è un aggettivo qualificativo alterato, con una sfumatura attenuativa rispetto a «bello».",
            },
            {
                id: "D",
                text: "primo",
                correct: false,
                explanation:
                    "«Primo» è un aggettivo numerale ordinale. Indica la posizione occupata in una successione.",
            },
        ],
    },

    {
        id: 32,
        area: "linguistica-logica",
        category: "grammatica-verbi-servili",
        difficulty: 1,
        question:
            "Quale frase contiene un verbo servile?",
        answers: [
            {
                id: "A",
                text: "Non mi serve niente",
                correct: false,
                explanation:
                    "Qui «serve» è il verbo «servire» utilizzato con significato autonomo. Non svolge funzione di verbo servile.",
            },
            {
                id: "B",
                text: "Devo studiare per l’esame",
                correct: true,
                explanation:
                    "«Dovere» è uno dei principali verbi servili insieme a potere e volere. Qui accompagna l'infinito «studiare» e ne precisa il valore di necessità.",
            },
            {
                id: "C",
                text: "Dormo tutto il pomeriggio",
                correct: false,
                explanation:
                    "«Dormo» è un normale verbo intransitivo utilizzato autonomamente. Non accompagna un altro verbo all'infinito.",
            },
            {
                id: "D",
                text: "Luca approfitta sempre della mia disponibilità",
                correct: false,
                explanation:
                    "«Approfitta» è un verbo autonomo e non appartiene alla categoria dei verbi servili.",
            },
        ],
    },

    {
        id: 33,
        area: "linguistica-logica",
        category: "analisi-del-periodo",
        difficulty: 2,
        question:
            "La frase “Lucia sta studiando per superare l’esame” contiene:",
        answers: [
            {
                id: "A",
                text: "Due coordinate, di cui una causale",
                correct: false,
                explanation:
                    "«Per superare l'esame» non è coordinata alla principale e non esprime una causa. Dipende invece dalla principale ed esprime uno scopo.",
            },
            {
                id: "B",
                text: "Due principali, di cui una dichiarativa e una volitiva",
                correct: false,
                explanation:
                    "Il periodo non contiene due proposizioni principali. «Per superare l'esame» dipende da «Lucia sta studiando».",
            },
            {
                id: "C",
                text: "Due subordinate principali",
                correct: false,
                explanation:
                    "L'espressione è contraddittoria: una proposizione non può essere contemporaneamente subordinata e principale nello stesso rapporto sintattico.",
            },
            {
                id: "D",
                text: "Una principale e una subordinata finale",
                correct: true,
                explanation:
                    "«Lucia sta studiando» è la proposizione principale. «Per superare l'esame» esprime lo scopo dello studio ed è una subordinata finale implicita, costruita con «per + infinito».",
            },
        ],
    },

    {
        id: 34,
        area: "linguistica-logica",
        category: "ortografia",
        difficulty: 2,
        question:
            "Tra le seguenti, è scritta correttamente la parola:",
        answers: [
            {
                id: "A",
                text: "coscente",
                correct: false,
                explanation:
                    "La forma corretta è «cosciente», con il gruppo «sci». «Coscente» è una grafia errata.",
            },
            {
                id: "B",
                text: "concupisciente",
                correct: false,
                explanation:
                    "La grafia proposta non è quella corretta. Il termine corretto è «concupiscente», senza la «i» dopo «sc».",
            },
            {
                id: "C",
                text: "conoscente",
                correct: true,
                explanation:
                    "«Conoscente» è scritto correttamente. Indica una persona che si conosce senza che vi sia necessariamente un rapporto di amicizia stretto.",
            },
            {
                id: "D",
                text: "coscenzioso",
                correct: false,
                explanation:
                    "La forma corretta è «coscienzioso», con «cie» nella parte centrale. «Coscenzioso» è quindi errato.",
            },
        ],
    },

    {
        id: 35,
        area: "linguistica-logica",
        category: "grammatica-avverbi",
        difficulty: 1,
        question:
            "Quale tra i seguenti è un avverbio di tempo?",
        answers: [
            {
                id: "A",
                text: "ieri",
                correct: true,
                explanation:
                    "«Ieri» indica quando si svolge un'azione, precisamente il giorno precedente a oggi. È quindi un avverbio di tempo.",
            },
            {
                id: "B",
                text: "anche",
                correct: false,
                explanation:
                    "«Anche» è principalmente un avverbio con valore aggiuntivo o inclusivo. Non indica il momento in cui avviene un'azione.",
            },
            {
                id: "C",
                text: "là",
                correct: false,
                explanation:
                    "«Là» è un avverbio di luogo e indica una posizione lontana rispetto a chi parla.",
            },
            {
                id: "D",
                text: "velocemente",
                correct: false,
                explanation:
                    "«Velocemente» è un avverbio di modo e indica come viene compiuta un'azione.",
            },
        ],
    },

    {
        id: 36,
        area: "linguistica-logica",
        category: "logica-combinatoria",
        difficulty: 3,
        question:
            "Una scatola contiene 5 penne blu e 3 penne rosse. Quante penne bisogna estrarre (senza guardare) per essere sicuri di avere almeno 1 penna blu ed almeno 1 penna rossa?",
        answers: [
            {
                id: "A",
                text: "4",
                correct: false,
                explanation:
                    "Estraendo quattro penne potremmo ancora aver pescato quattro delle cinque penne blu. Non avremmo quindi la certezza di possedere anche una penna rossa.",
            },
            {
                id: "B",
                text: "6",
                correct: true,
                explanation:
                    "Nel caso peggiore le prime cinque penne estratte potrebbero essere tutte blu. La sesta deve necessariamente essere rossa. Inoltre, poiché esistono soltanto tre penne rosse, tra sei estrazioni ci sarà sicuramente anche almeno una blu.",
            },
            {
                id: "C",
                text: "2",
                correct: false,
                explanation:
                    "Con due estrazioni potremmo ottenere due penne dello stesso colore. Non vi è quindi alcuna garanzia di averne una blu e una rossa.",
            },
            {
                id: "D",
                text: "8",
                correct: false,
                explanation:
                    "Estraendo tutte e otto le penne avremmo certamente entrambi i colori, ma non è necessario arrivare a otto. La certezza si ottiene già con sei estrazioni.",
            },
        ],
    },

    {
        id: 37,
        area: "linguistica-logica",
        category: "logica-ordinamenti",
        difficulty: 2,
        question:
            "In una stanza ci sono 3 fratelli: Marco è più alto di Luca, Luca è più basso di Gianni. Di conseguenza:",
        answers: [
            {
                id: "A",
                text: "Gianni è più basso di Marco",
                correct: false,
                explanation:
                    "Non conosciamo il confronto diretto tra Marco e Gianni. Sappiamo soltanto che entrambi sono più alti di Luca.",
            },
            {
                id: "B",
                text: "Marco è il più alto, Luca è il più basso",
                correct: false,
                explanation:
                    "Luca è certamente il più basso, ma non possiamo stabilire se il più alto sia Marco oppure Gianni.",
            },
            {
                id: "C",
                text: "Luca è il più basso, non si può stabilire chi è il più alto",
                correct: true,
                explanation:
                    "Marco è più alto di Luca e Gianni è anch'egli più alto di Luca. Luca è quindi certamente il più basso, ma non esiste alcuna informazione che permetta di confrontare Marco e Gianni.",
            },
            {
                id: "D",
                text: "Non si può stabilire chi sia il più basso, né chi sia il più alto",
                correct: false,
                explanation:
                    "Il più alto non è determinabile, ma il più basso sì: è Luca, perché è più basso sia di Marco sia di Gianni.",
            },
        ],
    },

    {
        id: 38,
        area: "linguistica-logica",
        category: "logica-algebrica",
        difficulty: 2,
        question:
            "Se Marco e Luca salgono assieme sulla bilancia, questa segna 140 kg. Se, invece, Marco e Gianni salgono assieme sulla bilancia, questa segna 140 kg. Di conseguenza:",
        answers: [
            {
                id: "A",
                text: "Marco pesa di più di Luca e Gianni",
                correct: false,
                explanation:
                    "Le due informazioni non permettono di confrontare il peso di Marco con quello degli altri. Permettono però di confrontare direttamente Luca e Gianni.",
            },
            {
                id: "B",
                text: "Marco, Luca e Gianni pesano 70 kg",
                correct: false,
                explanation:
                    "Non sappiamo che Marco pesi 70 kg. Per esempio, potrebbe pesare 80 kg e sia Luca sia Gianni 60 kg, rispettando entrambe le informazioni.",
            },
            {
                id: "C",
                text: "Marco, Luca e Gianni sono dello stesso peso",
                correct: false,
                explanation:
                    "Dalle due somme uguali non segue che tutti e tre abbiano lo stesso peso. Sappiamo soltanto che Luca e Gianni devono avere lo stesso peso.",
            },
            {
                id: "D",
                text: "Luca e Gianni sono dello stesso peso",
                correct: true,
                explanation:
                    "Indichiamo i pesi con M, L e G. Abbiamo M + L = 140 e M + G = 140. Sottraendo M da entrambe le uguaglianze otteniamo L = G.",
            },
        ],
    },

    {
        id: 39,
        area: "linguistica-logica",
        category: "logica-proposizionale",
        difficulty: 3,
        question:
            "Se è vero che chi esagera rischia, allora è vero anche che:",
        answers: [
            {
                id: "A",
                text: "Chi non esagera non rischia",
                correct: false,
                explanation:
                    "Questa è l'inversa dell'implicazione iniziale e non è logicamente garantita. Una persona potrebbe rischiare per ragioni diverse dall'esagerare.",
            },
            {
                id: "B",
                text: "Chi non rischia non esagera",
                correct: true,
                explanation:
                    "Se «esagera → rischia», la sua contrapposta logicamente equivalente è «non rischia → non esagera». È quindi l'unica conclusione necessariamente valida.",
            },
            {
                id: "C",
                text: "Nessuna risposta è corretta",
                correct: false,
                explanation:
                    "Una conclusione corretta esiste: la contrapposta dell'implicazione originale, cioè «chi non rischia non esagera».",
            },
            {
                id: "D",
                text: "Rischia solo chi esagera",
                correct: false,
                explanation:
                    "Dire «rischia solo chi esagera» equivale a sostenere che se una persona rischia allora esagera. È il verso opposto dell'implicazione iniziale e non è deducibile.",
            },
        ],
    },

    {
        id: 40,
        area: "linguistica-logica",
        category: "logica-sillogistica",
        difficulty: 4,
        question:
            "Se è vero che tutti i lionfi sono animali, ed è vero che alcuni animali sono neri, allora è vero anche che:",
        answers: [
            {
                id: "A",
                text: "Nessuna risposta è corretta",
                correct: true,
                explanation:
                    "Dalle premesse sappiamo soltanto che l'insieme dei lionfi è contenuto in quello degli animali e che esistono alcuni animali neri. Non sappiamo se gli animali neri siano lionfi e nemmeno se esistano effettivamente lionfi. Nessuna delle altre conclusioni è quindi necessaria.",
            },
            {
                id: "B",
                text: "Alcuni animali sono lionfi",
                correct: false,
                explanation:
                    "«Tutti i lionfi sono animali» non garantisce l'esistenza di lionfi. Anche se esistessero, dalla premessa non possiamo ricavare automaticamente questa proposizione particolare.",
            },
            {
                id: "C",
                text: "Nessun lionfo è nero",
                correct: false,
                explanation:
                    "Non viene fornita alcuna informazione sul colore dei lionfi. Potrebbero essere neri, non neri oppure potrebbe non esserci alcun lionfo.",
            },
            {
                id: "D",
                text: "Tutti i lionfi sono neri",
                correct: false,
                explanation:
                    "Il fatto che alcuni animali siano neri non implica che lo siano tutti gli appartenenti a una particolare categoria di animali. Le due informazioni non possono essere collegate in questo modo.",
            },
        ],
    },
    {
        id: 41,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "metrica",
        difficulty: 2,
        question:
            "L’endecasillabo è:",
        answers: [
            {
                id: "A",
                text: "Un componimento di 11 versi usato dagli Stilnovisti",
                correct: false,
                explanation:
                    "L'endecasillabo non è un componimento formato da undici versi. È invece un singolo verso della metrica italiana.",
            },
            {
                id: "B",
                text: "Il genere metrico tipico della prosa futurista",
                correct: false,
                explanation:
                    "L'endecasillabo appartiene alla poesia e non costituisce un genere metrico tipico della prosa futurista. È presente nella tradizione poetica italiana molti secoli prima del Futurismo.",
            },
            {
                id: "C",
                text: "Il verso usato nella “Divina Commedia”",
                correct: true,
                explanation:
                    "La «Divina Commedia» è composta da endecasillabi organizzati in terzine incatenate. Più precisamente, l'endecasillabo è un verso che presenta l'ultimo accento tonico obbligatorio sulla decima sillaba ed è normalmente descritto, nella forma piana, come un verso di undici sillabe.",
            },
            {
                id: "D",
                text: "Una strofa di 11 sillabe, tipica del Barocco",
                correct: false,
                explanation:
                    "L'endecasillabo è un verso, non una strofa. Inoltre non è tipico esclusivamente del Barocco, ma attraversa gran parte della tradizione poetica italiana.",
            },
        ],
    },

    {
        id: 42,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 1,
        question:
            "È autore della “Gerusalemme Liberata”, poema epico ambientato nella Prima Crociata:",
        answers: [
            {
                id: "A",
                text: "Torquato Tasso",
                correct: true,
                explanation:
                    "Torquato Tasso è l'autore della «Gerusalemme Liberata», poema epico-cavalleresco incentrato sulla Prima Crociata e sulla conquista cristiana di Gerusalemme.",
            },
            {
                id: "B",
                text: "Giacomo Leopardi",
                correct: false,
                explanation:
                    "Leopardi è un grande poeta e pensatore dell'Ottocento, autore dei «Canti» e delle «Operette morali». Non scrisse la «Gerusalemme Liberata».",
            },
            {
                id: "C",
                text: "Giovanni Boccaccio",
                correct: false,
                explanation:
                    "Boccaccio è soprattutto autore del «Decameron» e appartiene al Trecento. La «Gerusalemme Liberata» è invece un'opera di Torquato Tasso.",
            },
            {
                id: "D",
                text: "Ludovico Ariosto",
                correct: false,
                explanation:
                    "Ariosto è autore dell'«Orlando furioso». Pur appartenendo anch'egli alla tradizione del poema cavalleresco, non scrisse la «Gerusalemme Liberata».",
            },
        ],
    },

    {
        id: 43,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 2,
        question:
            "La data di morte del commediografo Carlo Goldoni è:",
        answers: [
            {
                id: "A",
                text: "1623",
                correct: false,
                explanation:
                    "Carlo Goldoni nacque nel 1707, quindi non poteva essere morto nel 1623. Questa data è anteriore di quasi un secolo alla sua nascita.",
            },
            {
                id: "B",
                text: "1876",
                correct: false,
                explanation:
                    "Goldoni appartiene al Settecento e morì molto prima del 1876. Trascorse gli ultimi anni della sua vita a Parigi.",
            },
            {
                id: "C",
                text: "1599",
                correct: false,
                explanation:
                    "Il 1599 è una data ancora più lontana dalla vita di Goldoni, nato nel 1707. Non può quindi essere corretta.",
            },
            {
                id: "D",
                text: "1793",
                correct: true,
                explanation:
                    "Carlo Goldoni visse dal 1707 al 1793 e morì a Parigi. È uno dei principali protagonisti della riforma del teatro comico italiano del Settecento.",
            },
        ],
    },

    {
        id: 44,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 2,
        question:
            "Ha scritto la raccolta “Il porto sepolto”:",
        answers: [
            {
                id: "A",
                text: "Gabriele D'Annunzio",
                correct: false,
                explanation:
                    "D'Annunzio è autore di raccolte come «Alcyone», appartenente alle «Laudi». «Il porto sepolto» non fa parte della sua produzione.",
            },
            {
                id: "B",
                text: "Giuseppe Ungaretti",
                correct: true,
                explanation:
                    "Giuseppe Ungaretti pubblicò «Il porto sepolto» nel 1916 durante la Prima Guerra Mondiale. Le poesie confluirono poi nella raccolta «L'Allegria».",
            },
            {
                id: "C",
                text: "Italo Svevo",
                correct: false,
                explanation:
                    "Svevo è principalmente un romanziere, autore de «La coscienza di Zeno». Non è l'autore della raccolta poetica indicata.",
            },
            {
                id: "D",
                text: "Giovanni Pascoli",
                correct: false,
                explanation:
                    "Pascoli è autore di raccolte come «Myricae» e «Canti di Castelvecchio». «Il porto sepolto» appartiene invece a Ungaretti.",
            },
        ],
    },

    {
        id: 45,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 2,
        question:
            "NON è un’opera di Giovanni Verga:",
        answers: [
            {
                id: "A",
                text: "Eva",
                correct: false,
                explanation:
                    "«Eva» è un romanzo di Giovanni Verga, pubblicato nel 1873 e appartenente alla fase precedente alla piena maturazione verista dell'autore.",
            },
            {
                id: "B",
                text: "Tigre reale",
                correct: false,
                explanation:
                    "«Tigre reale» è un romanzo di Giovanni Verga, pubblicato negli anni Settanta dell'Ottocento.",
            },
            {
                id: "C",
                text: "Il trionfo della morte",
                correct: true,
                explanation:
                    "«Il trionfo della morte» è un romanzo di Gabriele D'Annunzio, non di Giovanni Verga. Fu pubblicato nel 1894.",
            },
            {
                id: "D",
                text: "Storia di una capinera",
                correct: false,
                explanation:
                    "«Storia di una capinera» è un romanzo epistolare di Giovanni Verga. L'opera racconta la vicenda della giovane Maria, costretta alla vita monastica.",
            },
        ],
    },

    {
        id: 46,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-ermetismo",
        difficulty: 2,
        question:
            "Ha fatto parte della corrente letteraria dell’Ermetismo:",
        answers: [
            {
                id: "A",
                text: "Alberto Moravia",
                correct: false,
                explanation:
                    "Moravia fu uno dei maggiori narratori italiani del Novecento, autore de «Gli indifferenti» e «La noia». Non viene classificato tra i poeti ermetici.",
            },
            {
                id: "B",
                text: "Elsa Morante",
                correct: false,
                explanation:
                    "Elsa Morante è soprattutto una romanziera, autrice di opere come «L'isola di Arturo» e «La Storia». Non appartenne all'Ermetismo.",
            },
            {
                id: "C",
                text: "Pier Paolo Pasolini",
                correct: false,
                explanation:
                    "Pasolini fu poeta, scrittore, intellettuale e regista, ma la sua produzione non appartiene alla corrente ermetica.",
            },
            {
                id: "D",
                text: "Salvatore Quasimodo",
                correct: true,
                explanation:
                    "Salvatore Quasimodo è considerato uno dei principali rappresentanti dell'Ermetismo italiano, insieme ad autori come Ungaretti e Montale nel quadro scolastico tradizionale. Ricevette il Premio Nobel per la Letteratura nel 1959.",
            },
        ],
    },

    {
        id: 47,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-antica",
        difficulty: 1,
        question:
            "Chi fu il fondatore della dinastia Giulio-Claudia e primo imperatore romano?",
        answers: [
            {
                id: "A",
                text: "Augusto",
                correct: true,
                explanation:
                    "Ottaviano Augusto è considerato il primo imperatore romano e inaugurò la dinastia Giulio-Claudia. Nel 27 a.C. il Senato gli conferì il titolo di Augusto, evento tradizionalmente considerato l'inizio del Principato.",
            },
            {
                id: "B",
                text: "Nerone",
                correct: false,
                explanation:
                    "Nerone appartenne alla dinastia Giulio-Claudia, ma fu uno degli ultimi imperatori della dinastia. Regnò dal 54 al 68 d.C.",
            },
            {
                id: "C",
                text: "Caligola",
                correct: false,
                explanation:
                    "Caligola fu un imperatore della dinastia Giulio-Claudia e regnò dal 37 al 41 d.C. Non ne fu il fondatore.",
            },
            {
                id: "D",
                text: "Vespasiano",
                correct: false,
                explanation:
                    "Vespasiano divenne imperatore nel 69 d.C. e inaugurò una dinastia diversa, quella dei Flavi.",
            },
        ],
    },

    {
        id: 48,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-religioni",
        difficulty: 1,
        question:
            "Chi fu Maometto?",
        answers: [
            {
                id: "A",
                text: "Un re medievale europeo",
                correct: false,
                explanation:
                    "Maometto non fu un sovrano europeo. Visse nella penisola arabica tra il VI e il VII secolo.",
            },
            {
                id: "B",
                text: "Il fondatore dell’Islam",
                correct: true,
                explanation:
                    "Questa è la formulazione prevista dal quesito. Più precisamente, Maometto o Muhammad è considerato dalla tradizione islamica il profeta attraverso cui venne trasmessa la rivelazione del Corano e rappresenta la figura centrale nella nascita storica dell'Islam.",
            },
            {
                id: "C",
                text: "Un filosofo ebraico",
                correct: false,
                explanation:
                    "Maometto non fu un filosofo ebraico. È la figura religiosa centrale legata alla nascita dell'Islam nel VII secolo.",
            },
            {
                id: "D",
                text: "Un imperatore romano",
                correct: false,
                explanation:
                    "Maometto non fu mai imperatore romano. Nacque alla Mecca intorno al 570 e morì a Medina nel 632.",
            },
        ],
    },

    {
        id: 49,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-medievale",
        difficulty: 2,
        question:
            "Il sistema feudale nel Medioevo fu:",
        answers: [
            {
                id: "A",
                text: "Un tipo di monarchia costituzionale basato su un esercito centralizzato",
                correct: false,
                explanation:
                    "La monarchia costituzionale è una forma politica molto più tarda. Il sistema feudale medievale era invece fondato su rapporti personali e patrimoniali tra signori e vassalli.",
            },
            {
                id: "B",
                text: "Un sistema di commercio marittimo lungo le coste dell’Adriatico",
                correct: false,
                explanation:
                    "Il commercio marittimo fu importante nel Medioevo, soprattutto per città come Venezia, ma non definisce il sistema feudale.",
            },
            {
                id: "C",
                text: "Un sistema di scambio di terre e servizi tra signori e vassalli",
                correct: true,
                explanation:
                    "Nel modello feudale un signore poteva concedere un feudo a un vassallo in cambio di fedeltà e servizi, spesso di carattere militare. L'alternativa è una semplificazione scolastica ma rappresenta correttamente il principio generale.",
            },
            {
                id: "D",
                text: "Un’organizzazione di cavalieri uniti da ideali repubblicani",
                correct: false,
                explanation:
                    "La società feudale era fondata su rapporti gerarchici e personali e non su ideali repubblicani condivisi da organizzazioni di cavalieri.",
            },
        ],
    },

    {
        id: 50,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-moderna",
        difficulty: 2,
        question:
            "Quale fu la causa principale della Rivoluzione americana?",
        answers: [
            {
                id: "A",
                text: "La guerra civile tra Stati Uniti e Messico",
                correct: false,
                explanation:
                    "Non vi fu una guerra civile tra Stati Uniti e Messico alla base della Rivoluzione americana. La guerra messicano-americana avvenne inoltre molto più tardi, tra il 1846 e il 1848.",
            },
            {
                id: "B",
                text: "Il fallimento del Congresso di Vienna",
                correct: false,
                explanation:
                    "Il Congresso di Vienna si svolse nel 1814-1815, decenni dopo l'indipendenza americana. Non può quindi esserne una causa.",
            },
            {
                id: "C",
                text: "L’invasione francese delle colonie sudamericane",
                correct: false,
                explanation:
                    "La Rivoluzione americana riguardò le tredici colonie britanniche del Nord America e non un'invasione francese delle colonie sudamericane.",
            },
            {
                id: "D",
                text: "La protesta delle colonie contro le tasse imposte dalla Gran Bretagna",
                correct: true,
                explanation:
                    "Uno dei principali motivi della Rivoluzione americana fu l'opposizione delle colonie britanniche alla tassazione decisa da Londra senza una loro rappresentanza parlamentare. È celebre il principio «no taxation without representation».",
            },
        ],
    },

    {
        id: 51,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-contemporanea",
        difficulty: 2,
        question:
            "La cosiddetta “Rivoluzione d’Ottobre” del 1917 fu:",
        answers: [
            {
                id: "A",
                text: "Un’insurrezione che portò al potere i bolscevichi di Lenin, in Russia",
                correct: true,
                explanation:
                    "La Rivoluzione d'Ottobre del 1917 portò i bolscevichi guidati da Lenin alla conquista del potere in Russia, rovesciando il Governo provvisorio. Fu uno degli eventi centrali della Rivoluzione russa.",
            },
            {
                id: "B",
                text: "Una guerra civile guidata dal generale Franco, nella penisola iberica",
                correct: false,
                explanation:
                    "Francisco Franco fu protagonista della Guerra civile spagnola, iniziata nel 1936. Si tratta quindi di un evento diverso e successivo.",
            },
            {
                id: "C",
                text: "La pace che pose fine alla Prima Guerra Mondiale, in Francia",
                correct: false,
                explanation:
                    "La Prima Guerra Mondiale terminò nel 1918 e il Trattato di Versailles venne firmato nel 1919. La Rivoluzione d'Ottobre avvenne invece in Russia nel 1917.",
            },
            {
                id: "D",
                text: "L’atto di abdicazione dello zar Nicola III di Polonia",
                correct: false,
                explanation:
                    "Lo zar russo era Nicola II, non Nicola III di Polonia. Inoltre la sua abdicazione avvenne durante la Rivoluzione di Febbraio, prima della Rivoluzione d'Ottobre.",
            },
        ],
    },

    {
        id: 52,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-contemporanea",
        difficulty: 1,
        question:
            "Quando avvenne la caduta del Muro di Berlino?",
        answers: [
            {
                id: "A",
                text: "Nel 1975",
                correct: false,
                explanation:
                    "Nel 1975 il Muro di Berlino divideva ancora Berlino Est e Berlino Ovest. Sarebbe rimasto in piedi per altri quattordici anni.",
            },
            {
                id: "B",
                text: "Nel 1989",
                correct: true,
                explanation:
                    "L'apertura del Muro di Berlino avvenne il 9 novembre 1989 e divenne uno dei simboli della fine della Guerra fredda. La riunificazione tedesca avvenne poi nel 1990.",
            },
            {
                id: "C",
                text: "Nel 1961",
                correct: false,
                explanation:
                    "Il 1961 è l'anno in cui il Muro di Berlino venne costruito, non quello della sua caduta.",
            },
            {
                id: "D",
                text: "Nel 1995",
                correct: false,
                explanation:
                    "Nel 1995 il Muro era già caduto da diversi anni e la Germania era già stata riunificata.",
            },
        ],
    },

    {
        id: 53,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-italiana-contemporanea",
        difficulty: 2,
        question:
            "Enrico Berlinguer fu:",
        answers: [
            {
                id: "A",
                text: "Primo ministro spagnolo",
                correct: false,
                explanation:
                    "Berlinguer fu un politico italiano e non ricoprì incarichi di governo in Spagna.",
            },
            {
                id: "B",
                text: "Presidente della Repubblica Italiana",
                correct: false,
                explanation:
                    "Enrico Berlinguer non fu Presidente della Repubblica. La sua attività politica si svolse soprattutto all'interno del Partito Comunista Italiano.",
            },
            {
                id: "C",
                text: "Segretario del Partito Comunista Italiano",
                correct: true,
                explanation:
                    "Enrico Berlinguer fu segretario del Partito Comunista Italiano dal 1972 fino alla sua morte nel 1984. Fu una delle figure più importanti della politica italiana del secondo dopoguerra.",
            },
            {
                id: "D",
                text: "Leader del Movimento Sociale Italiano",
                correct: false,
                explanation:
                    "Il Movimento Sociale Italiano apparteneva a un'area politica completamente diversa dal PCI. Berlinguer fu invece il leader del Partito Comunista Italiano.",
            },
        ],
    },

    {
        id: 54,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-demografia",
        difficulty: 1,
        question:
            "Che cosa si intende con il concetto di \"densità di popolazione\"?",
        answers: [
            {
                id: "A",
                text: "La percentuale di popolazione urbana",
                correct: false,
                explanation:
                    "La percentuale di popolazione urbana indica quanta parte degli abitanti vive nelle città. Non misura il rapporto tra abitanti e superficie.",
            },
            {
                id: "B",
                text: "La crescita demografica annuale",
                correct: false,
                explanation:
                    "La crescita demografica misura l'aumento o la diminuzione della popolazione in un determinato periodo. È un concetto diverso dalla densità.",
            },
            {
                id: "C",
                text: "Il numero totale di abitanti di un paese",
                correct: false,
                explanation:
                    "Conoscere il numero totale degli abitanti non basta a determinare la densità. Bisogna metterlo in rapporto con la superficie del territorio.",
            },
            {
                id: "D",
                text: "Il numero di abitanti per chilometro quadrato",
                correct: true,
                explanation:
                    "La densità di popolazione si calcola dividendo il numero degli abitanti per la superficie del territorio. Viene normalmente espressa in abitanti per chilometro quadrato.",
            },
        ],
    },

    {
        id: 55,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-politica",
        difficulty: 1,
        question:
            "Quale tra questi è uno stato insulare?",
        answers: [
            {
                id: "A",
                text: "Giappone",
                correct: true,
                explanation:
                    "Il Giappone è uno Stato insulare formato da un vasto arcipelago nell'Oceano Pacifico. Le sue quattro isole principali sono Honshu, Hokkaido, Kyushu e Shikoku.",
            },
            {
                id: "B",
                text: "Brasile",
                correct: false,
                explanation:
                    "Il Brasile occupa una vasta parte del continente sudamericano. Non è quindi uno Stato insulare.",
            },
            {
                id: "C",
                text: "Egitto",
                correct: false,
                explanation:
                    "L'Egitto si estende principalmente nell'Africa nordorientale e nella penisola del Sinai. Non è classificato come Stato insulare.",
            },
            {
                id: "D",
                text: "Germania",
                correct: false,
                explanation:
                    "La Germania è uno Stato dell'Europa continentale. Possiede alcune isole, ma il suo territorio principale non è insulare.",
            },
        ],
    },

    {
        id: 56,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "educazione-civica",
        difficulty: 1,
        question:
            "Cos’è l’Unione Europea?",
        answers: [
            {
                id: "A",
                text: "Un gruppo di stati extraeuropei che commerciano con l’Europa",
                correct: false,
                explanation:
                    "L'Unione Europea è costituita da Stati europei e non da Paesi extraeuropei organizzati esclusivamente per il commercio.",
            },
            {
                id: "B",
                text: "Un’organizzazione di paesi europei che collaborano economicamente e politicamente",
                correct: true,
                explanation:
                    "L'Unione Europea è un'unione politica ed economica composta da Stati europei che cooperano attraverso istituzioni e politiche comuni. La collaborazione non riguarda quindi soltanto il commercio.",
            },
            {
                id: "C",
                text: "Un singolo paese europeo molto grande, federato secondo il modello degli Stati Uniti d’America",
                correct: false,
                explanation:
                    "L'UE non è un unico Stato federale. Gli Stati membri rimangono Stati sovrani pur condividendo competenze e istituzioni in numerosi settori.",
            },
            {
                id: "D",
                text: "Un’associazione di città europee senza governo comune",
                correct: false,
                explanation:
                    "I membri dell'Unione Europea sono Stati, non città. Inoltre l'UE possiede proprie istituzioni, come Parlamento, Commissione e Consiglio.",
            },
        ],
    },

    {
        id: 57,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-economica",
        difficulty: 1,
        question:
            "Quale tra questi è un importante settore economico basato sui servizi?",
        answers: [
            {
                id: "A",
                text: "Secondario",
                correct: false,
                explanation:
                    "Il settore secondario comprende principalmente l'industria, la manifattura e le costruzioni. Trasforma le materie prime in prodotti.",
            },
            {
                id: "B",
                text: "Primario",
                correct: false,
                explanation:
                    "Il settore primario comprende attività come agricoltura, pesca, allevamento ed estrazione di risorse naturali.",
            },
            {
                id: "C",
                text: "Terziario",
                correct: true,
                explanation:
                    "Il settore terziario comprende le attività basate sui servizi, come commercio, trasporti, turismo, banche, sanità e istruzione. Nella classificazione scolastica tradizionale è quindi la risposta corretta.",
            },
            {
                id: "D",
                text: "Quaternario",
                correct: false,
                explanation:
                    "In alcune classificazioni il settore quaternario comprende servizi avanzati legati a conoscenza, ricerca e informazione. Tuttavia il quesito fa riferimento alla tradizionale classificazione in cui il settore dei servizi è il terziario.",
            },
        ],
    },

    {
        id: 58,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-italiana",
        difficulty: 1,
        question:
            "Qual è il capoluogo della regione Friuli Venezia Giulia?",
        answers: [
            {
                id: "A",
                text: "Venezia",
                correct: false,
                explanation:
                    "Venezia è il capoluogo della regione Veneto, non del Friuli Venezia Giulia.",
            },
            {
                id: "B",
                text: "Torino",
                correct: false,
                explanation:
                    "Torino è il capoluogo del Piemonte. Si trova nell'Italia nord-occidentale.",
            },
            {
                id: "C",
                text: "Udine",
                correct: false,
                explanation:
                    "Udine è una delle principali città del Friuli Venezia Giulia, ma non è il capoluogo regionale.",
            },
            {
                id: "D",
                text: "Trieste",
                correct: true,
                explanation:
                    "Trieste è il capoluogo del Friuli Venezia Giulia. È situata nell'estremo nord-est dell'Italia, vicino al confine con la Slovenia.",
            },
        ],
    },

    {
        id: 59,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-fisica",
        difficulty: 1,
        question:
            "Quale delle seguenti affermazioni sull’equatore è corretta?",
        answers: [
            {
                id: "A",
                text: "È una linea immaginaria che divide la Terra in emisfero boreale e australe",
                correct: true,
                explanation:
                    "L'equatore è il parallelo fondamentale posto a 0° di latitudine. Divide convenzionalmente la Terra nell'emisfero boreale, a nord, e nell'emisfero australe, a sud.",
            },
            {
                id: "B",
                text: "È un meridiano che attraversa la terra dal Polo Nord al Polo Sud",
                correct: false,
                explanation:
                    "I meridiani collegano i due poli. L'equatore è invece un parallelo e si trova alla stessa distanza dal Polo Nord e dal Polo Sud.",
            },
            {
                id: "C",
                text: "È una catena montuosa situata in Africa meridionale",
                correct: false,
                explanation:
                    "L'equatore non è un elemento fisico del territorio, ma una linea geografica immaginaria utilizzata come riferimento per la latitudine.",
            },
            {
                id: "D",
                text: "È la linea geografica che segna il confine tra Europa, Asia e Australia",
                correct: false,
                explanation:
                    "L'equatore attraversa diversi continenti e oceani, ma non costituisce il confine tra Europa, Asia e Australia.",
            },
        ],
    },

    {
        id: 60,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "astronomia",
        difficulty: 1,
        question:
            "Quale pianeta del Sistema Solare è conosciuto come il \"Pianeta Rosso\"?",
        answers: [
            {
                id: "A",
                text: "Saturno",
                correct: false,
                explanation:
                    "Saturno è noto soprattutto per il suo esteso sistema di anelli. Non viene chiamato «Pianeta Rosso».",
            },
            {
                id: "B",
                text: "Marte",
                correct: true,
                explanation:
                    "Marte è chiamato «Pianeta Rosso» per il colore rossastro della sua superficie, dovuto principalmente alla presenza di ossidi di ferro nei materiali superficiali.",
            },
            {
                id: "C",
                text: "Venere",
                correct: false,
                explanation:
                    "Venere è un pianeta roccioso avvolto da una spessa atmosfera ricca di anidride carbonica, ma non è conosciuto come Pianeta Rosso.",
            },
            {
                id: "D",
                text: "Giove",
                correct: false,
                explanation:
                    "Giove è il pianeta più grande del Sistema Solare ed è noto anche per la Grande Macchia Rossa, ma il soprannome «Pianeta Rosso» identifica Marte.",
            },
        ],
    },
    {
        id: 61,
        area: "cultura-matematico-scientifica",
        category: "scienze-della-terra-meteorologia",
        difficulty: 2,
        question:
            "Completare la seguente affermazione: I venti si formano dovunque esista…",
        answers: [
            {
                id: "A",
                text: "la brezza marina",
                correct: false,
                explanation:
                    "La brezza marina è essa stessa un particolare tipo di vento e non rappresenta la condizione generale necessaria alla formazione dei venti. Nasce proprio a causa di differenze di pressione prodotte dal diverso riscaldamento di terra e mare.",
            },
            {
                id: "B",
                text: "un’escursione termica",
                correct: false,
                explanation:
                    "Una differenza di temperatura può contribuire alla formazione di differenze di pressione, ma non è la condizione formulata in modo più generale e diretto. Il movimento dell'aria avviene infatti tra zone con pressione atmosferica differente.",
            },
            {
                id: "C",
                text: "una differenza di pressione atmosferica",
                correct: true,
                explanation:
                    "Il vento è uno spostamento di masse d'aria determinato principalmente da differenze di pressione atmosferica. L'aria tende a muoversi dalle aree di alta pressione verso quelle di pressione più bassa.",
            },
            {
                id: "D",
                text: "Nessuna risposta è corretta",
                correct: false,
                explanation:
                    "Una risposta corretta è presente: i venti si formano quando esistono differenze di pressione atmosferica tra diverse zone.",
            },
        ],
    },

    {
        id: 62,
        area: "cultura-matematico-scientifica",
        category: "scienze-della-terra-meteorologia",
        difficulty: 1,
        question:
            "Con quale altro nome vengono definiti i tornado?",
        answers: [
            {
                id: "A",
                text: "Trombe d’aria",
                correct: true,
                explanation:
                    "Nel linguaggio scolastico italiano i tornado vengono comunemente indicati anche come «trombe d'aria». Sono vortici atmosferici molto intensi che si estendono da una nube temporalesca fino al suolo.",
            },
            {
                id: "B",
                text: "Ciclone tropicale",
                correct: false,
                explanation:
                    "Un ciclone tropicale è un sistema atmosferico molto più esteso, come un uragano o un tifone. Un tornado ha invece dimensioni molto più ridotte e una struttura differente.",
            },
            {
                id: "C",
                text: "Cicloni extratropicali",
                correct: false,
                explanation:
                    "I cicloni extratropicali sono grandi sistemi di bassa pressione tipici delle medie latitudini. Non sono sinonimi di tornado.",
            },
            {
                id: "D",
                text: "Anticicloni",
                correct: false,
                explanation:
                    "Gli anticicloni sono zone di alta pressione atmosferica, generalmente associate a condizioni meteorologiche più stabili. Non corrispondono ai tornado.",
            },
        ],
    },

    {
        id: 63,
        area: "cultura-matematico-scientifica",
        category: "scienze-della-terra-acqua",
        difficulty: 1,
        question:
            "L’acqua di mare:",
        answers: [
            {
                id: "A",
                text: "è meno densa dell’acqua dolce",
                correct: false,
                explanation:
                    "La presenza dei sali disciolti aumenta la massa dell'acqua marina a parità di volume. Per questo l'acqua di mare non è meno densa di quella dolce.",
            },
            {
                id: "B",
                text: "Ha la stessa densità dell’acqua dolce",
                correct: false,
                explanation:
                    "Le due densità non sono identiche. La salinità rende mediamente l'acqua marina più densa dell'acqua dolce.",
            },
            {
                id: "C",
                text: "nessuna delle altre risposte è corretta",
                correct: false,
                explanation:
                    "Una delle alternative è corretta: l'acqua di mare presenta normalmente una densità maggiore rispetto all'acqua dolce.",
            },
            {
                id: "D",
                text: "è più densa dell’acqua dolce",
                correct: true,
                explanation:
                    "L'acqua marina contiene sali minerali disciolti che ne aumentano la densità. Per questo, a condizioni comparabili, è generalmente più densa dell'acqua dolce.",
            },
        ],
    },

    {
        id: 64,
        area: "cultura-matematico-scientifica",
        category: "biologia-genetica",
        difficulty: 3,
        question:
            "Un uomo ha gruppo sanguigno A e sua moglie 0. Quali possono essere i fenotipi dei figli?",
        answers: [
            {
                id: "A",
                text: "Sicuramente solo A",
                correct: false,
                explanation:
                    "Un uomo di gruppo A può avere genotipo IᴬIᴬ oppure Iᴬi. Se è eterozigote Iᴬi, con una donna di gruppo 0, ii, può avere anche figli di gruppo 0.",
            },
            {
                id: "B",
                text: "Sia A che 0",
                correct: true,
                explanation:
                    "La madre di gruppo 0 ha genotipo ii. Se il padre di gruppo A è eterozigote Iᴬi, i figli possono ereditare Iᴬi e risultare di gruppo A oppure ii e risultare di gruppo 0. Questi sono quindi i fenotipi possibili considerando i genotipi compatibili con il fenotipo paterno.",
            },
            {
                id: "C",
                text: "Non possono avere figli: i gruppi sanguigni sono incompatibili",
                correct: false,
                explanation:
                    "I gruppi sanguigni A e 0 non impediscono affatto di avere figli. Il sistema ABO determina semplicemente quali alleli possono essere trasmessi alla prole.",
            },
            {
                id: "D",
                text: "Sicuramente solo 0",
                correct: false,
                explanation:
                    "Il padre possiede almeno un allele Iᴬ, che può essere trasmesso ai figli. Di conseguenza non è vero che tutti i figli debbano necessariamente avere gruppo 0.",
            },
        ],
    },

    {
        id: 65,
        area: "cultura-matematico-scientifica",
        category: "biologia-cellulare",
        difficulty: 3,
        question:
            "La divisione mitotica porta alla",
        answers: [
            {
                id: "A",
                text: "formazione dei gameti",
                correct: false,
                explanation:
                    "I gameti vengono normalmente prodotti attraverso la meiosi, non attraverso la mitosi. La meiosi dimezza il numero dei cromosomi.",
            },
            {
                id: "B",
                text: "riduzione del numero dei cromosomi, ma non della massa cellulare",
                correct: false,
                explanation:
                    "La mitosi mantiene generalmente invariato il numero di cromosomi nelle cellule figlie. Il dimezzamento cromosomico è caratteristico della meiosi.",
            },
            {
                id: "C",
                text: "riduzione della massa cellulare, ma non del numero dei cromosomi",
                correct: true,
                explanation:
                    "Questa è l'alternativa prevista come corretta dal quesito originale. La formulazione, però, non è una descrizione standard della mitosi: più precisamente, la mitosi produce due nuclei geneticamente equivalenti e, con la citodieresi, due cellule figlie che conservano lo stesso numero di cromosomi della cellula madre.",
            },
            {
                id: "D",
                text: "maturazione delle cellule somatiche",
                correct: false,
                explanation:
                    "La mitosi permette crescita, rinnovamento e proliferazione delle cellule somatiche, ma «maturazione» non rappresenta propriamente il risultato specifico della divisione mitotica.",
            },
        ],
    },

    {
        id: 66,
        area: "cultura-matematico-scientifica",
        category: "biologia-genetica",
        difficulty: 2,
        question:
            "Negli eucarioti la trascrizione, cioè la sintesi di RNA su stampo di DNA, è un processo che avviene",
        answers: [
            {
                id: "A",
                text: "all’interno del nucleo",
                correct: true,
                explanation:
                    "Nelle cellule eucariotiche il DNA nucleare è contenuto nel nucleo e qui avviene la trascrizione, cioè la produzione di RNA utilizzando il DNA come stampo.",
            },
            {
                id: "B",
                text: "nelle cavità del reticolo endoplasmatico liscio",
                correct: false,
                explanation:
                    "Il reticolo endoplasmatico liscio è coinvolto soprattutto nella sintesi dei lipidi, nella detossificazione e in altre funzioni metaboliche. Non è la sede della trascrizione del DNA nucleare.",
            },
            {
                id: "C",
                text: "sulla faccia esterna della membrana plasmatica",
                correct: false,
                explanation:
                    "La membrana plasmatica regola gli scambi tra cellula e ambiente, ma non costituisce la sede della trascrizione genetica.",
            },
            {
                id: "D",
                text: "sui ribosomi",
                correct: false,
                explanation:
                    "Sui ribosomi avviene la traduzione, cioè la sintesi delle proteine a partire dall'RNA messaggero. La trascrizione è invece la produzione dell'RNA a partire dal DNA.",
            },
        ],
    },

    {
        id: 67,
        area: "cultura-matematico-scientifica",
        category: "chimica-composti",
        difficulty: 2,
        question:
            "Quali tra i seguenti composti non è un ossido?",
        answers: [
            {
                id: "A",
                text: "CaO",
                correct: false,
                explanation:
                    "CaO è l'ossido di calcio. È un composto binario formato da calcio e ossigeno ed è quindi un ossido.",
            },
            {
                id: "B",
                text: "Li2O",
                correct: false,
                explanation:
                    "Li₂O è l'ossido di litio, formato da litio e ossigeno. Appartiene quindi alla categoria degli ossidi.",
            },
            {
                id: "C",
                text: "N2O5",
                correct: false,
                explanation:
                    "N₂O₅ è il pentossido di diazoto, composto binario di azoto e ossigeno. È quindi un ossido.",
            },
            {
                id: "D",
                text: "HClO",
                correct: true,
                explanation:
                    "HClO è l'acido ipocloroso, un ossiacido contenente idrogeno, cloro e ossigeno. Non è un ossido, perché gli ossidi sono composti binari dell'ossigeno con un altro elemento.",
            },
        ],
    },

    {
        id: 68,
        area: "cultura-matematico-scientifica",
        category: "chimica-legami",
        difficulty: 2,
        question:
            "Quale delle seguenti coppie di elementi è più probabile che formi un composto covalente?",
        answers: [
            {
                id: "A",
                text: "Na e Cl",
                correct: false,
                explanation:
                    "Sodio e cloro formano principalmente un composto ionico, NaCl. Il sodio tende a cedere un elettrone e il cloro ad acquistarlo.",
            },
            {
                id: "B",
                text: "C e O",
                correct: true,
                explanation:
                    "Carbonio e ossigeno sono entrambi non metalli e tendono a condividere elettroni formando legami covalenti. Composti come CO₂ ne sono esempi tipici.",
            },
            {
                id: "C",
                text: "Mg e F",
                correct: false,
                explanation:
                    "Magnesio è un metallo e fluoro un non metallo. Il loro composto MgF₂ presenta prevalentemente legami ionici.",
            },
            {
                id: "D",
                text: "K e Br",
                correct: false,
                explanation:
                    "Potassio e bromo formano normalmente bromuro di potassio, KBr, un composto ionico costituito da K⁺ e Br⁻.",
            },
        ],
    },

    {
        id: 69,
        area: "cultura-matematico-scientifica",
        category: "chimica-reazioni",
        difficulty: 3,
        question:
            "Quale equazione chimica rappresenta una reazione di neutralizzazione?",
        answers: [
            {
                id: "A",
                text: "Zn + 2HCl → ZnCl2 + H2",
                correct: false,
                explanation:
                    "Questa è una reazione tra un metallo e un acido, con formazione di un sale e liberazione di idrogeno. Non è una classica neutralizzazione acido-base.",
            },
            {
                id: "B",
                text: "CaCO3 → CaO + CO2",
                correct: false,
                explanation:
                    "Questa è una reazione di decomposizione in cui il carbonato di calcio si trasforma in ossido di calcio e anidride carbonica.",
            },
            {
                id: "C",
                text: "Ca(OH)2 + 2HBr → CaBr2 + 2H2O",
                correct: true,
                explanation:
                    "È una reazione di neutralizzazione tra una base, Ca(OH)₂, e un acido, HBr. I prodotti sono un sale, CaBr₂, e acqua.",
            },
            {
                id: "D",
                text: "Na2CO3 + MgCl2 → MgCO3 + 2NaCl",
                correct: false,
                explanation:
                    "Questa è una reazione di doppio scambio tra due composti ionici. Non rappresenta una neutralizzazione tra acido e base.",
            },
        ],
    },

    {
        id: 70,
        area: "cultura-matematico-scientifica",
        category: "chimica-elementi",
        difficulty: 2,
        question:
            "In quale dei seguenti gruppi di elementi sono contenuti soltanto metalli?",
        answers: [
            {
                id: "A",
                text: "Al, Na, Mo, Hg",
                correct: true,
                explanation:
                    "Alluminio, sodio, molibdeno e mercurio sono tutti elementi metallici. Il mercurio è particolare perché è liquido a temperatura ambiente, ma rimane un metallo.",
            },
            {
                id: "B",
                text: "C, Ca, I, Cs",
                correct: false,
                explanation:
                    "Calcio e cesio sono metalli, ma carbonio e iodio sono non metalli. Il gruppo quindi non contiene soltanto metalli.",
            },
            {
                id: "C",
                text: "Sr, S, Cr, Cu",
                correct: false,
                explanation:
                    "Stronzio, cromo e rame sono metalli, mentre lo zolfo è un non metallo.",
            },
            {
                id: "D",
                text: "S, Cl, Na, Cr",
                correct: false,
                explanation:
                    "Sodio e cromo sono metalli, ma zolfo e cloro appartengono ai non metalli.",
            },
        ],
    },

    {
        id: 71,
        area: "cultura-matematico-scientifica",
        category: "matematica-numeri",
        difficulty: 1,
        question:
            "Quale dei seguenti numeri non appartiene all’insieme dei numeri razionali ℚ?",
        answers: [
            {
                id: "A",
                text: "7/5",
                correct: false,
                explanation:
                    "7/5 è il rapporto tra due numeri interi con denominatore diverso da zero. Per definizione è quindi un numero razionale.",
            },
            {
                id: "B",
                text: "0,25",
                correct: false,
                explanation:
                    "0,25 è un decimale finito e può essere scritto come frazione: 25/100 = 1/4. È quindi razionale.",
            },
            {
                id: "C",
                text: "-3",
                correct: false,
                explanation:
                    "Ogni numero intero è anche razionale perché può essere espresso come frazione con denominatore 1. Infatti -3 = -3/1.",
            },
            {
                id: "D",
                text: "√2",
                correct: true,
                explanation:
                    "√2 è un numero irrazionale: non può essere espresso come rapporto tra due numeri interi. La sua espansione decimale è infinita e non periodica.",
            },
        ],
    },

    {
        id: 72,
        area: "cultura-matematico-scientifica",
        category: "matematica-probabilita",
        difficulty: 1,
        question:
            "Si lancia un dado a 6 facce. Qual è la probabilità di ottenere un numero primo?",
        answers: [
            {
                id: "A",
                text: "2/3",
                correct: false,
                explanation:
                    "2/3 corrisponderebbe a quattro risultati favorevoli su sei. I numeri primi presenti sulle facce di un dado sono invece soltanto tre.",
            },
            {
                id: "B",
                text: "1/2",
                correct: true,
                explanation:
                    "Le facce del dado sono 1, 2, 3, 4, 5 e 6. I numeri primi sono 2, 3 e 5: ci sono quindi 3 casi favorevoli su 6, cioè 3/6 = 1/2.",
            },
            {
                id: "C",
                text: "5/6",
                correct: false,
                explanation:
                    "5/6 significherebbe che cinque dei sei risultati possibili sono numeri primi. In realtà soltanto 2, 3 e 5 sono primi.",
            },
            {
                id: "D",
                text: "1/3",
                correct: false,
                explanation:
                    "1/3 equivale a due casi favorevoli su sei, mentre i numeri primi sulle facce del dado sono tre.",
            },
        ],
    },

    {
        id: 73,
        area: "cultura-matematico-scientifica",
        category: "matematica-probabilita",
        difficulty: 1,
        question:
            "In un’urna ci sono 5 palline rosse e 3 verdi. Si estrae una pallina a caso. Qual è la probabilità che sia rossa?",
        answers: [
            {
                id: "A",
                text: "3/5",
                correct: false,
                explanation:
                    "3/5 non deriva dal rapporto tra palline rosse e numero totale di palline. Il totale è infatti 8, non 5.",
            },
            {
                id: "B",
                text: "1/2",
                correct: false,
                explanation:
                    "La probabilità sarebbe 1/2 soltanto se metà delle palline fosse rossa. Invece le palline rosse sono 5 su 8.",
            },
            {
                id: "C",
                text: "5/8",
                correct: true,
                explanation:
                    "Nell'urna ci sono complessivamente 5 + 3 = 8 palline. I casi favorevoli sono le 5 palline rosse, quindi la probabilità è 5/8.",
            },
            {
                id: "D",
                text: "5/3",
                correct: false,
                explanation:
                    "Una probabilità deve essere compresa tra 0 e 1. 5/3 è maggiore di 1 e non può quindi rappresentare una probabilità.",
            },
        ],
    },

    {
        id: 74,
        area: "cultura-matematico-scientifica",
        category: "matematica-aritmetica",
        difficulty: 1,
        question:
            "Quanto vale 1,5 × 12?",
        answers: [
            {
                id: "A",
                text: "18",
                correct: true,
                explanation:
                    "1,5 × 12 può essere calcolato come 12 + metà di 12. Otteniamo quindi 12 + 6 = 18.",
            },
            {
                id: "B",
                text: "12/5",
                correct: false,
                explanation:
                    "12/5 equivale a 2,4 e non al prodotto tra 1,5 e 12.",
            },
            {
                id: "C",
                text: "6",
                correct: false,
                explanation:
                    "6 è soltanto la metà di 12. Poiché 1,5 equivale a una volta e mezzo, il risultato deve essere maggiore di 12.",
            },
            {
                id: "D",
                text: "12,5",
                correct: false,
                explanation:
                    "Moltiplicare 12 per 1,5 non significa aggiungere semplicemente 0,5. Bisogna aggiungere a 12 la sua metà, ottenendo 18.",
            },
        ],
    },

    {
        id: 75,
        area: "cultura-matematico-scientifica",
        category: "matematica-frazioni",
        difficulty: 1,
        question:
            "Quale delle seguenti frazioni è equivalente a 6/8?",
        answers: [
            {
                id: "A",
                text: "3/5",
                correct: false,
                explanation:
                    "3/5 = 0,6 mentre 6/8 = 0,75. Le due frazioni non rappresentano quindi lo stesso valore.",
            },
            {
                id: "B",
                text: "5/6",
                correct: false,
                explanation:
                    "5/6 vale circa 0,833, mentre 6/8 vale 0,75. Non sono frazioni equivalenti.",
            },
            {
                id: "C",
                text: "4/7",
                correct: false,
                explanation:
                    "4/7 vale circa 0,571 e non è equivalente a 6/8.",
            },
            {
                id: "D",
                text: "9/12",
                correct: true,
                explanation:
                    "6/8 si semplifica a 3/4 dividendo numeratore e denominatore per 2. Anche 9/12 si semplifica a 3/4 dividendo entrambi per 3, quindi le due frazioni sono equivalenti.",
            },
        ],
    },

    {
        id: 76,
        area: "cultura-matematico-scientifica",
        category: "matematica-algebra",
        difficulty: 2,
        question:
            "Semplifica l’espressione (3x + 2x) - (x - 4).",
        answers: [
            {
                id: "A",
                text: "4x - 4",
                correct: false,
                explanation:
                    "Davanti alla parentesi c'è un segno meno, quindi togliendo la parentesi - (x - 4) diventa -x + 4, non -x - 4.",
            },
            {
                id: "B",
                text: "4x + 4",
                correct: true,
                explanation:
                    "Prima sommiamo 3x + 2x = 5x. Poi togliamo la parentesi cambiando i segni: 5x - x + 4 = 4x + 4.",
            },
            {
                id: "C",
                text: "5x + 4",
                correct: false,
                explanation:
                    "Dopo aver ottenuto 5x bisogna ancora sottrarre x. Il coefficiente finale della x è quindi 4 e non 5.",
            },
            {
                id: "D",
                text: "5x - x - 4",
                correct: false,
                explanation:
                    "Quando si elimina la parentesi preceduta dal segno meno, il termine -4 cambia segno e diventa +4. L'espressione corretta intermedia è 5x - x + 4.",
            },
        ],
    },

    {
        id: 77,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria",
        difficulty: 1,
        question:
            "Qual è la misura della somma degli angoli interni di un parallelogramma?",
        answers: [
            {
                id: "A",
                text: "120°",
                correct: false,
                explanation:
                    "120° non può essere la somma degli angoli interni di un quadrilatero. È inferiore perfino alla somma degli angoli di un triangolo.",
            },
            {
                id: "B",
                text: "180°",
                correct: false,
                explanation:
                    "180° è la somma degli angoli interni di un triangolo. Un parallelogramma è invece un quadrilatero.",
            },
            {
                id: "C",
                text: "360°",
                correct: true,
                explanation:
                    "Un parallelogramma è un quadrilatero e la somma degli angoli interni di qualsiasi quadrilatero è 360°. Inoltre gli angoli opposti sono uguali e quelli consecutivi sono supplementari.",
            },
            {
                id: "D",
                text: "90°",
                correct: false,
                explanation:
                    "90° può essere la misura di un singolo angolo in particolari parallelogrammi, come rettangoli e quadrati, ma non della somma dei quattro angoli.",
            },
        ],
    },

    {
        id: 78,
        area: "cultura-matematico-scientifica",
        category: "informatica",
        difficulty: 1,
        question:
            "Quale dei seguenti software è più comunemente utilizzato per analisi dei dati, tabelle e grafici?",
        answers: [
            {
                id: "A",
                text: "Excel",
                correct: true,
                explanation:
                    "Microsoft Excel è un software di foglio elettronico utilizzato per organizzare dati in tabelle, eseguire calcoli e formule, effettuare analisi e creare diversi tipi di grafici.",
            },
            {
                id: "B",
                text: "Photoshop",
                correct: false,
                explanation:
                    "Photoshop è principalmente un software per l'elaborazione e la modifica di immagini digitali. Non è progettato principalmente per tabelle e analisi numeriche.",
            },
            {
                id: "C",
                text: "Acrobat Reader",
                correct: false,
                explanation:
                    "Acrobat Reader viene utilizzato principalmente per visualizzare e gestire documenti PDF. Non è un foglio elettronico.",
            },
            {
                id: "D",
                text: "Word",
                correct: false,
                explanation:
                    "Word è principalmente un programma di videoscrittura. Può contenere tabelle e grafici, ma per analisi dei dati e calcoli viene comunemente utilizzato Excel.",
            },
        ],
    },

    {
        id: 79,
        area: "cultura-matematico-scientifica",
        category: "matematica-statistica",
        difficulty: 1,
        question:
            "Se la media dei voti di 5 studenti è 7, qual è la somma dei loro voti?",
        answers: [
            {
                id: "A",
                text: "25",
                correct: false,
                explanation:
                    "Se la somma fosse 25, la media sarebbe 25/5 = 5 e non 7.",
            },
            {
                id: "B",
                text: "12",
                correct: false,
                explanation:
                    "Una somma di 12 produrrebbe una media di 12/5 = 2,4, quindi non soddisfa il dato del problema.",
            },
            {
                id: "C",
                text: "7",
                correct: false,
                explanation:
                    "7 è la media, non la somma. Per ottenere la somma bisogna moltiplicare la media per il numero di studenti.",
            },
            {
                id: "D",
                text: "35",
                correct: true,
                explanation:
                    "La media aritmetica è data dalla somma dei valori divisa per il loro numero. Quindi somma = media × numero di studenti = 7 × 5 = 35.",
            },
        ],
    },

    {
        id: 80,
        area: "cultura-matematico-scientifica",
        category: "matematica-percentuali",
        difficulty: 1,
        question:
            "In un sondaggio, il 40% delle persone ha dichiarato di preferire il tè al caffè. Su un campione di 200 persone, quante hanno scelto il tè?",
        answers: [
            {
                id: "A",
                text: "120",
                correct: false,
                explanation:
                    "120 persone rappresenterebbero il 60% di 200, non il 40%.",
            },
            {
                id: "B",
                text: "80",
                correct: true,
                explanation:
                    "Il 40% di 200 si calcola facendo 200 × 40/100 = 200 × 0,4 = 80. Quindi 80 persone hanno dichiarato di preferire il tè.",
            },
            {
                id: "C",
                text: "60",
                correct: false,
                explanation:
                    "60 persone su 200 rappresentano il 30% del campione, perché 60/200 = 0,30.",
            },
            {
                id: "D",
                text: "40",
                correct: false,
                explanation:
                    "40 persone rappresentano il 20% di 200. Il valore 40 indicato nel testo è una percentuale, non il numero assoluto di persone.",
            },
        ],
    },
];

export default simulation19;