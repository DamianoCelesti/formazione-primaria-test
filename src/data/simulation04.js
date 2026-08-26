const passages = {
    passage01: `Se potessimo includere tutti i mali del mondo in una sola parola, quale sceglieremmo? Di sicuro il termine “estrattivismo” sarebbe un buon candidato, almeno secondo attivisti e studiosi. Ormai onnipresente, la denuncia dell’estrattivismo è intersezionale. La troviamo nei dibattiti sull’ecologismo, sul decolonialismo e sull’anticapitalismo. L’estrattivismo indica il furto, la depredazione e lo sfruttamento del sud del mondo, ma anche l’inquinamento e la deregolamentazione che colpisce l’ambiente. All’inizio l’espressione si riferiva soprattutto allo sfruttamento delle foreste, delle miniere e dei giacimenti di petrolio da parte delle multinazionali in Sudamerica, ma oggi si ritrova nei contesti più diversi: la pesca intensiva, lo sfruttamento del corpo delle donne, l’appropriazione delle culture indigene, l’uso dei dati personali da parte dei giganti della tecnologia. L’idea di estrattivismo propone una griglia di analisi complessiva del sistema economico, nel solco del concetto di sfruttamento delle persone sulle persone. L’assonanza tra i due termini non è casuale. Prima di essere resa popolare da Karl Marx (1818-1883), la parola “ausbeutung” (sfruttamento) era infatti usata per indicare l’estrazione del carbone e dei minerali.`,

    passage02: `Una delle sere precedenti il Natale, a T., mi trovavo nella mia stanza di cui non avevo ancora pagato la pigione, veramente una delle più fredde e piccole stanze che siano sulla terra. Erano le sei della sera, e fuori la pioggia cadeva ininterrottamente, con solo uno scroscio segreto, greve, variato soltanto dal sibilo del vento, il quale, infilandosi in non so che modo sotto la porta, posava mani gelate sui miei piedi. […] Ancora meno allegra, anzi lugubre del tutto, la vista di quella stanza dove la luce andava morendo, essendo, d’inverno, le sei della sera. Rigido e squallido come una tavola il letto, con la sua coperta di un verdenero scrupolosamente stirata e rimboccata insieme al risvolto delle lenzuola, ch’erano di grossa tela macchiata di ruggine. […] E la finestra era forse più allegra? Alle sei della sera, specie se è una sera d’inverno, una finestra così, incassata come una fenditura, stretta come una crepa in un muro putrido, non è possibile, davvero, che consoli nessuno. Era così, e per questo, che quella sera […] io avvertivo un così profondo e crescente e angoscioso malessere […]. Ero in uno stato di lieve incoscienza, di torpore che m’impediva di prendere una qualsiasi decisione in merito alla crudeltà di quel pavimento, del letto, della finestra e degli stessi muri della stanza.`,

    passage03: `Quando le nuvole coprono il sole e annunciano pioggia, il lago Kivu assume un colore opalescente e sembra avvolto da una calma quasi irreale. La tranquillità è solo apparente. Il lago, di origine vulcanica, racchiude nel suo ventre enormi quantità di anidride carbonica che potrebbero improvvisamente causare un’eruzione capace di liberare gas tossici e innescare uno tsunami. Le acque sono ostili alla fauna e solo poche specie di pesci ostinati sopravvivono. Ma la minaccia, più che dalla natura, in questo angolo d’Africa viene dall’uomo. Il lago Kivu è il confine naturale che separa la Repubblica Democratica del Congo dal Ruanda, due paesi impegnati in un conflitto non dichiarato combattuto per procura e scandito da dichiarazioni sempre più bellicose. A guardare una carta geografica si rimane sbigottiti: è come se il Molise fosse ai ferri corti con la Germania. Le proporzioni dei territori sono quelle. Ma nell’Africa equatoriale i nostri metri di giudizio non valgono. Sulla riva Nord del lago una frontiera divide due città: a ovest la congolese Goma a est la ruandese Gisenyi. Sono due sorelle da fiaba dei fratelli Grimm. Goma ha 700mila abitanti e migliaia di profughi e nel 2002 ha rischiato di essere cancellata dall’eruzione del vulcano Nyiragongo; Gisenyi di abitanti ne ha circa 80mila, è una città placida e quasi elegante, dalla vocazione turistica un po’ appassita e sede del principale birrificio del Ruanda.`,
};

const simulation04 = [
    {
        id: 1,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages.passage01,
        question:
            "Da quanto si deduce complessivamente dal brano, qual è il significato attuale del termine “estrattivismo”?",
        answers: [
            {
                id: "A",
                text: "Un sistema economico fondato sullo sfruttamento sistematico di risorse e popolazioni, spesso localizzato nel Sud globale.",
                correct: true,
                explanation:
                    "È la risposta coerente con il significato ampio attribuito oggi all’estrattivismo nel brano. Il concetto non riguarda più soltanto l’estrazione materiale di risorse naturali, ma viene utilizzato per descrivere diverse forme di appropriazione e sfruttamento di risorse, persone, culture e dati.",
            },
            {
                id: "B",
                text: "Una forma di regolamentazione internazionale tesa a bilanciare lo sfruttamento delle risorse naturali.",
                correct: false,
                explanation:
                    "Il brano non presenta l’estrattivismo come un sistema di regolamentazione. Al contrario, lo associa a sfruttamento, depredazione, inquinamento e appropriazione delle risorse.",
            },
            {
                id: "C",
                text: "L’insieme delle tecniche utilizzate per estrarre risorse dai giacimenti, a scopi esclusivamente industriali.",
                correct: false,
                explanation:
                    "Questo significato sarebbe troppo ristretto. In origine il termine era collegato soprattutto a miniere, foreste e petrolio, ma il testo spiega che oggi viene applicato anche a fenomeni come pesca intensiva, dati personali e appropriazione culturale.",
            },
            {
                id: "D",
                text: "Un modello di sviluppo basato sulla conservazione ambientale nei paesi a basso reddito.",
                correct: false,
                explanation:
                    "La conservazione ambientale rappresenta quasi il contrario del fenomeno descritto. Nel brano l’estrattivismo è collegato anche all’inquinamento e allo sfruttamento intensivo dell’ambiente.",
            },
        ],
    },

    {
        id: 2,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages.passage01,
        question:
            "In che senso, secondo il brano, la critica all’estrattivismo è “intersezionale”?",
        answers: [
            {
                id: "A",
                text: "Perché coinvolge e connette varie lotte sociali, come quelle ecologiste e anticoloniali.",
                correct: true,
                explanation:
                    "Il testo afferma che il concetto compare nei dibattiti sull’ecologismo, sul decolonialismo e sull’anticapitalismo. «Intersezionale» indica quindi l’intreccio tra diversi problemi e prospettive di critica sociale.",
            },
            {
                id: "B",
                text: "Perché riguarda esclusivamente le intersezioni geografiche tra Nord e Sud del mondo.",
                correct: false,
                explanation:
                    "Il termine non viene utilizzato in senso geografico. Nord e Sud globale sono importanti nel discorso sull’estrattivismo, ma l’intersezionalità riguarda la connessione tra diversi ambiti di sfruttamento e diverse lotte sociali.",
            },
            {
                id: "C",
                text: "Perché viene affrontata da diversi settori industriali e tecnologici in maniera disgiunta.",
                correct: false,
                explanation:
                    "«Intersezionale» indica proprio una lettura che collega fenomeni differenti, non una loro considerazione separata. Il brano presenta l’estrattivismo come una griglia interpretativa complessiva.",
            },
            {
                id: "D",
                text: "Perché è una critica nata in ambito accademico e priva di impatto sulle mobilitazioni reali.",
                correct: false,
                explanation:
                    "Il brano parla esplicitamente sia di studiosi sia di attivisti. Non sostiene quindi che il concetto sia confinato all’ambito accademico.",
            },
        ],
    },

    {
        id: 3,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages.passage01,
        question:
            "Cosa si intende nel brano con “assonanza” tra i termini “estrattivismo” e “sfruttamento”?",
        answers: [
            {
                id: "A",
                text: "Che i due termini esprimono concetti analoghi.",
                correct: true,
                explanation:
                    "Nel contesto il riferimento all’assonanza sottolinea la vicinanza concettuale tra estrazione e sfruttamento. Il testo rafforza questo collegamento ricordando che il termine tedesco «Ausbeutung», poi associato allo sfruttamento, era utilizzato anche per l’estrazione mineraria.",
            },
            {
                id: "B",
                text: "Che i due termini suonano simili ma di fatto non hanno alcun legame concettuale tra loro.",
                correct: false,
                explanation:
                    "Il brano afferma esattamente che il legame «non è casuale». Viene infatti ricostruita una relazione storica e concettuale tra sfruttamento economico ed estrazione di risorse.",
            },
            {
                id: "C",
                text: "Che “estrattivismo” riguarda l’ambiente, mentre “sfruttamento” riguarda solo l’economia.",
                correct: false,
                explanation:
                    "Il testo amplia il significato dell’estrattivismo ben oltre l’ambiente e considera anche sfruttamento delle persone, dei dati e delle culture. La separazione proposta dall’alternativa è quindi troppo netta.",
            },
            {
                id: "D",
                text: "Che va distinto nettamente il significato delle due parole, essendo l’una il contrario dell’altra.",
                correct: false,
                explanation:
                    "I due concetti non sono presentati come contrari. Il brano sottolinea invece la loro affinità e utilizza proprio il concetto di sfruttamento per spiegare quello di estrattivismo.",
            },
        ],
    },

    {
        id: 4,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages.passage01,
        question:
            "Quale delle seguenti pratiche è considerata una forma moderna di “estrattivismo”, secondo quanto si deduce dal brano?",
        answers: [
            {
                id: "A",
                text: "L’utilizzo dei dati personali da parte delle grandi piattaforme digitali.",
                correct: true,
                explanation:
                    "Il brano cita esplicitamente «l’uso dei dati personali da parte dei giganti della tecnologia» tra gli esempi contemporanei di estrattivismo. Il concetto viene quindi esteso anche alle risorse immateriali come i dati.",
            },
            {
                id: "B",
                text: "L’implementazione di politiche green-oriented da parte delle multinazionali.",
                correct: false,
                explanation:
                    "Il testo non presenta le politiche ambientali sostenibili come esempio di estrattivismo. Il fenomeno è invece associato a sfruttamento e depredazione.",
            },
            {
                id: "C",
                text: "La valorizzazione delle tradizioni indigene attraverso il turismo responsabile.",
                correct: false,
                explanation:
                    "Nel brano compare l’appropriazione delle culture indigene, non la loro valorizzazione rispettosa. I due comportamenti hanno significato molto diverso.",
            },
            {
                id: "D",
                text: "L’analisi scientifica delle risorse forestali per la tutela della biodiversità.",
                correct: false,
                explanation:
                    "Studiare scientificamente le foreste per proteggerne la biodiversità non costituisce di per sé una forma di sfruttamento estrattivo. Il brano fa riferimento allo sfruttamento intensivo delle risorse forestali.",
            },
        ],
    },

    {
        id: 5,
        area: "linguistica-logica",
        category: "lessico-nel-contesto",
        difficulty: 3,
        passage: passages.passage01,
        question:
            "Nel contesto del brano, quale tra le seguenti espressioni potrebbe sostituire correttamente “nel solco del concetto di sfruttamento delle persone sulle persone”?",
        answers: [
            {
                id: "A",
                text: "In continuità con il concetto di sfruttamento delle persone sulle persone.",
                correct: true,
                explanation:
                    "L’espressione «nel solco di» significa figurativamente seguendo una linea già tracciata, quindi in continuità con una tradizione o un concetto precedente. Il nuovo concetto viene presentato come sviluppo di quello di sfruttamento.",
            },
            {
                id: "B",
                text: "In opposizione al concetto di sfruttamento delle persone sulle persone.",
                correct: false,
                explanation:
                    "«Nel solco di» non esprime opposizione, ma continuità e collegamento. Il brano associa infatti direttamente estrattivismo e sfruttamento.",
            },
            {
                id: "C",
                text: "Nonostante il concetto di sfruttamento delle persone sulle persone.",
                correct: false,
                explanation:
                    "«Nonostante» introduce un rapporto concessivo, cioè un fatto che non impedisce quanto segue. Questa relazione non è presente nell’espressione originale.",
            },
            {
                id: "D",
                text: "A prescindere dal concetto di sfruttamento delle persone sulle persone.",
                correct: false,
                explanation:
                    "«A prescindere da» indica che qualcosa viene considerato indipendentemente da un altro elemento. Il brano sostiene invece che il concetto di estrattivismo si inserisce proprio nella linea interpretativa dello sfruttamento.",
            },
        ],
    },

    {
        id: 6,
        area: "linguistica-logica",
        category: "comprensione-del-testo-letterario",
        difficulty: 3,
        passage: passages.passage02,
        question:
            "Quale delle seguenti affermazioni esprime meglio la funzione della descrizione ambientale nel brano?",
        answers: [
            {
                id: "A",
                text: "Riflettere il disagio psicologico della protagonista attraverso l’ambiente.",
                correct: true,
                explanation:
                    "La stanza viene descritta attraverso termini come «lugubre», «rigido», «squallido» e «putrido», che corrispondono al crescente malessere interiore della protagonista. Ambiente e stato psicologico risultano quindi profondamente collegati.",
            },
            {
                id: "B",
                text: "Fornire una cornice realistica alla narrazione, senza riflettere l'umore del personaggio.",
                correct: false,
                explanation:
                    "La descrizione non è neutrale. La percezione dell’ambiente è fortemente filtrata dallo stato emotivo della protagonista e contribuisce direttamente alla sensazione di oppressione.",
            },
            {
                id: "C",
                text: "Introdurre un contrasto tra l'esterno tetro e l'interno confortevole della stanza.",
                correct: false,
                explanation:
                    "Non esiste un interno confortevole: anche la stanza è descritta come fredda, piccola, squallida e angosciante. Interno ed esterno contribuiscono entrambi all’atmosfera negativa.",
            },
            {
                id: "D",
                text: "Descrivere in modo neutro lo spazio fisico, separandolo dal flusso di pensiero dell’autrice.",
                correct: false,
                explanation:
                    "La descrizione è fortemente soggettiva e utilizza immagini figurate come il vento che posa «mani gelate» sui piedi. Lo spazio viene quindi percepito attraverso la sensibilità della protagonista.",
            },
        ],
    },

    {
        id: 7,
        area: "linguistica-logica",
        category: "lessico-nel-contesto",
        difficulty: 3,
        passage: passages.passage02,
        question:
            "Nell'espressione “la pioggia cadeva ininterrottamente, con solo uno scroscio segreto, greve”, quale tra i seguenti significati è più vicino a “greve”?",
        answers: [
            {
                id: "A",
                text: "Pesante, carico di malinconia.",
                correct: true,
                explanation:
                    "Nel contesto «greve» richiama qualcosa di pesante, opprimente e cupo. Il termine contribuisce all’atmosfera malinconica e angosciante dell’intero brano.",
            },
            {
                id: "B",
                text: "Ritmico, regolare, brioso.",
                correct: false,
                explanation:
                    "«Brioso» suggerisce vivacità e leggerezza, elementi incompatibili con il tono cupo della descrizione. Anche «ritmico» non rende il valore emotivo assunto da «greve».",
            },
            {
                id: "C",
                text: "Leggero, non percepibile.",
                correct: false,
                explanation:
                    "È quasi l’opposto del significato richiesto. «Greve» comunica peso e oppressione, non leggerezza.",
            },
            {
                id: "D",
                text: "Fulmineo, violento.",
                correct: false,
                explanation:
                    "Il termine non indica principalmente rapidità o improvvisa violenza. Nel passo caratterizza piuttosto il peso cupo e opprimente dello scroscio.",
            },
        ],
    },

    {
        id: 8,
        area: "linguistica-logica",
        category: "comprensione-del-testo-letterario",
        difficulty: 4,
        passage: passages.passage02,
        question:
            "Che valore ha, nel contesto del brano, la ripetizione della formula “alle sei della sera”?",
        answers: [
            {
                id: "A",
                text: "Associa a quel momento della giornata una condizione interiore di oppressione e immobilità.",
                correct: true,
                explanation:
                    "La ripetizione trasforma l’orario in qualcosa di più di una semplice indicazione cronologica. Le sei della sera in inverno diventano il momento simbolico in cui luce, ambiente e stato psicologico della protagonista convergono nella stessa sensazione di angoscia.",
            },
            {
                id: "B",
                text: "Serve solo a indicare il tempo preciso dell’azione, per collocare i fatti.",
                correct: false,
                explanation:
                    "La funzione cronologica esiste, ma non è l’unica né la principale. La ripetizione insistita conferisce all’orario un valore emotivo e atmosferico.",
            },
            {
                id: "C",
                text: "Indica che un evento particolarmente traumatico è accaduto in quel preciso orario.",
                correct: false,
                explanation:
                    "Nel brano non viene raccontato alcun precedente evento traumatico avvenuto alle sei. Il disagio deriva dalla condizione presente della protagonista e dall’ambiente che la circonda.",
            },
            {
                id: "D",
                text: "Indica il cessato funzionamento dell’orologio della protagonista.",
                correct: false,
                explanation:
                    "Non esiste alcun riferimento a un orologio guasto. La ripetizione dell’orario è una scelta stilistica e narrativa.",
            },
        ],
    },

    {
        id: 9,
        area: "linguistica-logica",
        category: "comprensione-del-testo-letterario",
        difficulty: 3,
        passage: passages.passage02,
        question:
            "Che cosa suggerisce l’espressione “E la finestra era forse più allegra?” nel contesto del brano?",
        answers: [
            {
                id: "A",
                text: "Che la finestra, come tutto l’ambiente, contribuisce a un’atmosfera cupa e triste.",
                correct: true,
                explanation:
                    "La domanda ha valore retorico: la risposta implicita è negativa. La finestra viene subito descritta come stretta e simile a una crepa in un muro putrido, rafforzando la sensazione di oppressione.",
            },
            {
                id: "B",
                text: "Che la finestra è l’unico elemento positivo nel racconto.",
                correct: false,
                explanation:
                    "La descrizione della finestra è fortemente negativa. Non costituisce quindi un elemento di conforto rispetto al resto della stanza.",
            },
            {
                id: "C",
                text: "Che la finestra rappresenta un rifugio accogliente per la protagonista.",
                correct: false,
                explanation:
                    "La protagonista afferma implicitamente il contrario: quella finestra non può «consolare nessuno». Non è quindi rappresentata come rifugio.",
            },
            {
                id: "D",
                text: "Che la finestra è descritta in modo neutro e non influisce sull’umore generale.",
                correct: false,
                explanation:
                    "Termini come «fenditura», «crepa» e «muro putrido» mostrano una descrizione fortemente connotata. La finestra partecipa pienamente alla costruzione dell’atmosfera lugubre.",
            },
        ],
    },

    {
        id: 10,
        area: "linguistica-logica",
        category: "comprensione-del-testo-letterario",
        difficulty: 4,
        passage: passages.passage02,
        question:
            "Una possibile interpretazione dell’espressione “Ero in uno stato di lieve incoscienza, di torpore che m’impediva di prendere una qualsiasi decisione in merito alla crudeltà di quel pavimento, del letto, della finestra e degli stessi muri della stanza” è la seguente:",
        answers: [
            {
                id: "A",
                text: "La protagonista non riesce a reagire con piena lucidità alla spiacevolezza di quell’ambiente.",
                correct: true,
                explanation:
                    "«Torpore» e «lieve incoscienza» indicano una condizione di ridotta capacità di reazione. La protagonista percepisce intensamente l’ostilità dell’ambiente, ma il proprio stato psicologico le impedisce di prendere una decisione o reagire efficacemente.",
            },
            {
                id: "B",
                text: "L’autrice esamina la bruttezza dell’ambiente con analiticità, consapevolezza e distacco emotivo.",
                correct: false,
                explanation:
                    "Il passo esprime esattamente l’assenza di distacco emotivo. La protagonista è profondamente coinvolta e descrive un crescente malessere e uno stato di torpore.",
            },
            {
                id: "C",
                text: "L’autrice esercita la propria crudeltà su chi la costringe a vivere in quel luogo.",
                correct: false,
                explanation:
                    "L’aggettivo «crudeltà» viene attribuito figurativamente agli elementi della stanza, non alle azioni della protagonista. Il senso è quello di un ambiente percepito come ostile.",
            },
            {
                id: "D",
                text: "La protagonista accetta serenamente l’ambiente in cui si trova, senza voler esprimere critiche.",
                correct: false,
                explanation:
                    "Il testo parla di «profondo e crescente e angoscioso malessere». Non c’è quindi alcuna accettazione serena della situazione.",
            },
        ],
    },

    {
        id: 11,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages.passage03,
        question:
            "Da quanto si deduce dal brano, quale fenomeno naturale rende potenzialmente pericoloso il lago Kivu?",
        answers: [
            {
                id: "A",
                text: "La presenza di grandi quantità di anidride carbonica nel fondo del lago.",
                correct: true,
                explanation:
                    "Il testo afferma che il lago racchiude enormi quantità di anidride carbonica che potrebbero essere liberate improvvisamente. Un evento del genere potrebbe produrre una pericolosa emissione di gas e altri fenomeni associati.",
            },
            {
                id: "B",
                text: "La presenza di pesci particolarmente pericolosi per l’uomo.",
                correct: false,
                explanation:
                    "Il brano afferma soltanto che poche specie di pesci riescono a sopravvivere nelle acque ostili. Non attribuisce ai pesci un particolare pericolo per l’uomo.",
            },
            {
                id: "C",
                text: "L’innalzamento della temperatura delle acque durante la stagione secca.",
                correct: false,
                explanation:
                    "Il testo non collega il rischio principale a un aumento stagionale della temperatura. Il fenomeno indicato esplicitamente è l’accumulo di gas nel lago.",
            },
            {
                id: "D",
                text: "L’erosione delle rive dovuta all’attività agricola intensiva.",
                correct: false,
                explanation:
                    "Nel brano non viene indicata l’erosione agricola come minaccia naturale del lago. È un’informazione non sostenuta dal testo.",
            },
        ],
    },

    {
        id: 12,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages.passage03,
        question:
            "Quale paradosso geopolitico viene evidenziato dall’autore del brano?",
        answers: [
            {
                id: "A",
                text: "La sproporzione tra la dimensione dei due Paesi in conflitto.",
                correct: true,
                explanation:
                    "L’autore paragona la situazione a un ipotetico conflitto tra Molise e Germania per evidenziare la fortissima differenza di dimensioni tra Ruanda e Repubblica Democratica del Congo. È questa sproporzione a generare lo stupore descritto nel testo.",
            },
            {
                id: "B",
                text: "L’inesistenza di barriere naturali tra i due Paesi in guerra.",
                correct: false,
                explanation:
                    "Il brano afferma invece che il lago Kivu costituisce proprio un confine naturale tra i due Paesi. L’alternativa contraddice quindi direttamente il testo.",
            },
            {
                id: "C",
                text: "Il fatto che un piccolo lago possa contenere gas tossici.",
                correct: false,
                explanation:
                    "La presenza di gas è un elemento naturalistico importante, ma il paragone con Molise e Germania riguarda espressamente le dimensioni dei due Stati coinvolti nelle tensioni.",
            },
            {
                id: "D",
                text: "La presenza di fauna ostile in un ambiente apparentemente calmo.",
                correct: false,
                explanation:
                    "Il contrasto tra calma apparente e pericolo naturale è presente nel brano, ma non è il paradosso geopolitico evidenziato dall’autore.",
            },
        ],
    },

    {
        id: 13,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages.passage03,
        question:
            "Dal brano si evince che la principale causa di minaccia per la stabilità della zona è rappresentata da:",
        answers: [
            {
                id: "A",
                text: "Le tensioni politiche tra la Repubblica Democratica del Congo e il Ruanda.",
                correct: true,
                explanation:
                    "Dopo aver descritto i rischi naturali, l’autore precisa che «la minaccia, più che dalla natura, [...] viene dall’uomo». Il riferimento immediatamente successivo è alle tensioni e al conflitto per procura tra Congo e Ruanda.",
            },
            {
                id: "B",
                text: "La scarsa presenza di turismo nella regione.",
                correct: false,
                explanation:
                    "Il turismo viene citato soltanto parlando della città di Gisenyi. Non viene indicato come causa dell’instabilità regionale.",
            },
            {
                id: "C",
                text: "Le difficoltà economiche delle popolazioni locali.",
                correct: false,
                explanation:
                    "Il brano non identifica le difficoltà economiche come minaccia principale. La causa evidenziata è di natura geopolitica e riguarda i rapporti tra i due Stati.",
            },
            {
                id: "D",
                text: "Il rischio di inondazioni causate dal cambiamento climatico.",
                correct: false,
                explanation:
                    "Il cambiamento climatico non viene indicato nel testo come causa dell’instabilità della zona. Il rischio naturale menzionato riguarda soprattutto l'origine vulcanica e i gas presenti nel lago.",
            },
        ],
    },

    {
        id: 14,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages.passage03,
        question:
            "Che cosa afferma l’autore del brano riguardo all’uso dei “nostri metri di giudizio” in Africa?",
        answers: [
            {
                id: "A",
                text: "Che non sono adeguati a comprendere le dinamiche africane.",
                correct: true,
                explanation:
                    "Dopo il paragone tra Molise e Germania, l’autore osserva che «nell’Africa equatoriale i nostri metri di giudizio non valgono». Intende quindi mettere in guardia dall’applicare automaticamente categorie e proporzioni familiari al contesto europeo.",
            },
            {
                id: "B",
                text: "Che sono validi per l’analisi geopolitica, ma non per quella culturale.",
                correct: false,
                explanation:
                    "Il brano non introduce questa distinzione. L’affermazione è più generale e riguarda l’inadeguatezza di criteri di giudizio applicati meccanicamente a un contesto molto diverso.",
            },
            {
                id: "C",
                text: "Che sono utili solo per fare sondaggi di tipo etnico e culturale.",
                correct: false,
                explanation:
                    "Non si parla di sondaggi né di strumenti di ricerca etnica. «Metri di giudizio» è un’espressione figurata che indica criteri interpretativi.",
            },
            {
                id: "D",
                text: "Che sono stati usati soltanto dai fratelli Grimm.",
                correct: false,
                explanation:
                    "I fratelli Grimm vengono evocati attraverso una similitudine riferita alle due città. Non hanno alcun rapporto con l’espressione «metri di giudizio».",
            },
        ],
    },

    {
        id: 15,
        area: "linguistica-logica",
        category: "tipologia-testuale",
        difficulty: 3,
        passage: passages.passage03,
        question:
            "Qual è lo stile narrativo adottato dall’autore del brano?",
        answers: [
            {
                id: "A",
                text: "Giornalistico-descrittivo, con elementi evocativi e comparativi.",
                correct: true,
                explanation:
                    "Il brano presenta informazioni giornalistiche su territorio, popolazione, rischi naturali e tensioni geopolitiche, ma utilizza anche descrizioni suggestive e paragoni, come quello tra Congo-Ruanda e Germania-Molise. È quindi un testo informativo arricchito da elementi evocativi.",
            },
            {
                id: "B",
                text: "Tecnico-scientifico, esclusivamente focalizzato su dati ambientali.",
                correct: false,
                explanation:
                    "Il testo contiene informazioni ambientali, ma affronta anche geopolitica, popolazione e descrizione delle città. Inoltre impiega immagini e similitudini incompatibili con uno stile esclusivamente tecnico.",
            },
            {
                id: "C",
                text: "Narrativo-autobiografico, incentrato su esperienze personali.",
                correct: false,
                explanation:
                    "Il narratore non racconta principalmente la propria esperienza personale. Il centro del brano è la descrizione giornalistica della regione del lago Kivu.",
            },
            {
                id: "D",
                text: "Ironico-satirico, con intento polemico verso le istituzioni.",
                correct: false,
                explanation:
                    "Il paragone geografico presenta una certa vivacità espressiva, ma il testo non è costruito come una satira delle istituzioni. Il tono prevalente resta informativo e descrittivo.",
            },
        ],
    },

    {
        id: 16,
        area: "linguistica-logica",
        category: "morfologia",
        difficulty: 3,
        question:
            "Quale tra i seguenti nomi è alterato al vezzeggiativo?",
        answers: [
            {
                id: "A",
                text: "Bambinuccia",
                correct: true,
                explanation:
                    "«Bambinuccia» è un nome alterato con valore vezzeggiativo: il suffisso «-uccia» può esprimere affetto, tenerezza o partecipazione emotiva. In questo caso modifica «bambina» aggiungendo una sfumatura affettiva.",
            },
            {
                id: "B",
                text: "Boccone",
                correct: false,
                explanation:
                    "«Boccone» deriva storicamente da «bocca», ma nell'uso comune è ormai una parola con significato autonomo, cioè una quantità di cibo che può essere messa in bocca. Non rappresenta qui un normale vezzeggiativo.",
            },
            {
                id: "C",
                text: "Fratellastro",
                correct: false,
                explanation:
                    "Il suffisso «-astro» può assumere valore peggiorativo in molti alterati. Inoltre «fratellastro» possiede anche un significato lessicalizzato specifico relativo alla parentela e non è un vezzeggiativo.",
            },
            {
                id: "D",
                text: "Tavolino",
                correct: false,
                explanation:
                    "«Tavolino» presenta normalmente valore diminutivo: indica un tavolo di piccole dimensioni. Il suffisso «-ino» può anche assumere sfumature affettive in altri contesti, ma qui prevale il valore diminutivo.",
            },
        ],
    },

    {
        id: 17,
        area: "linguistica-logica",
        category: "aggettivi-gradi",
        difficulty: 2,
        question:
            "Quale delle seguenti espressioni contiene un comparativo di maggioranza?",
        answers: [
            {
                id: "A",
                text: "Luca è più bravo di me",
                correct: true,
                explanation:
                    "La costruzione «più + aggettivo + di» esprime un comparativo di maggioranza: la qualità di Luca viene confrontata con quella del secondo termine di paragone.",
            },
            {
                id: "B",
                text: "Questo caffè è ottimo",
                correct: false,
                explanation:
                    "«Ottimo» è tradizionalmente considerato un superlativo assoluto organico di «buono». Non mette direttamente a confronto due elementi.",
            },
            {
                id: "C",
                text: "Maria è la più brava del mondo",
                correct: false,
                explanation:
                    "«La più brava» è un superlativo relativo: Maria viene collocata al grado massimo della qualità all’interno dell’insieme indicato.",
            },
            {
                id: "D",
                text: "Marco è il più alto della classe",
                correct: false,
                explanation:
                    "Anche «il più alto della classe» è un superlativo relativo. Marco viene confrontato con tutti i membri della classe e indicato come quello che possiede la qualità al massimo grado.",
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
                text: "Non è giusto schernire i compagni per i loro errori",
                correct: true,
                explanation:
                    "«Schernire» significa deridere, prendere in giro o trattare qualcuno con disprezzo e ironia offensiva. La frase utilizza quindi correttamente il verbo riferendolo ai compagni derisi per i propri errori.",
            },
            {
                id: "B",
                text: "Ho schernito la lista della spesa sul foglio",
                correct: false,
                explanation:
                    "Nel contesto servirebbe un verbo come «scritto» o «segnato». «Schernire» non significa scrivere o annotare qualcosa.",
            },
            {
                id: "C",
                text: "Schernendo con attenzione la dieta, dimagrirai più in fretta",
                correct: false,
                explanation:
                    "Probabilmente il senso richiesto sarebbe «seguendo» la dieta. «Schernire una dieta» significherebbe deriderla, espressione che non è coerente con il significato della frase.",
            },
            {
                id: "D",
                text: "Con questo caldo, è meglio schernire bene tutte le finestre",
                correct: false,
                explanation:
                    "Il verbo corretto potrebbe essere, a seconda del significato, «schermare» le finestre dalla luce. «Schernire» significa invece deridere qualcuno o qualcosa.",
            },
        ],
    },

    {
        id: 19,
        area: "linguistica-logica",
        category: "ortografia",
        difficulty: 2,
        question:
            "Individua la frase scritta correttamente:",
        answers: [
            {
                id: "A",
                text: "Qual è il tuo animale preferito?",
                correct: true,
                explanation:
                    "La frase è ortograficamente corretta. «Qual è» si scrive senza apostrofo perché «qual» deriva dal troncamento di «quale», non da un'elisione.",
            },
            {
                id: "B",
                text: "Quì abita la mia migliore amica.",
                correct: false,
                explanation:
                    "L'avverbio «qui» non richiede accento grafico. La forma corretta è quindi «Qui abita la mia migliore amica».",
            },
            {
                id: "C",
                text: "Come si chiama il bar affianco al nostro hotel?",
                correct: false,
                explanation:
                    "Quando significa «accanto», la locuzione si scrive normalmente «a fianco», in due parole: «il bar a fianco al nostro hotel». «Affianco» è invece anche forma del verbo «affiancare», come in «io affianco».",
            },
            {
                id: "D",
                text: "C'è ne sarebbero di cose da raccontare!",
                correct: false,
                explanation:
                    "La forma corretta è «Ce ne sarebbero». «Ce» è una variante del pronome «ci» davanti ad altri pronomi clitici; «c'è» significa invece «ci è» e non è adatto a questa costruzione.",
            },
        ],
    },

    {
        id: 20,
        area: "linguistica-logica",
        category: "sintassi",
        difficulty: 3,
        question:
            "Individua il completamento corretto dell'espressione \"_______, puoi prenderti una pausa\":",
        answers: [
            {
                id: "A",
                text: "Dal momento che hai completato il lavoro",
                correct: true,
                explanation:
                    "«Dal momento che» introduce correttamente una proposizione causale: poiché il lavoro è stato completato, ne consegue la possibilità di prendersi una pausa. Anche il tempo verbale «hai completato» è coerente con il significato.",
            },
            {
                id: "B",
                text: "Ovviamente che hai concluso i compiti",
                correct: false,
                explanation:
                    "«Ovviamente che» non costituisce in questo contesto un corretto connettivo subordinante causale. Si potrebbe dire, per esempio, «Ovviamente, se hai concluso i compiti...» oppure utilizzare una vera congiunzione causale.",
            },
            {
                id: "C",
                text: "Finché terminassi",
                correct: false,
                explanation:
                    "«Finché» introduce normalmente un limite temporale e la forma «terminassi» non costruisce qui una relazione corretta con la principale. Il periodo risultante è sintatticamente e semanticamente incoerente.",
            },
            {
                id: "D",
                text: "Sebbene avrai concluso tutto",
                correct: false,
                explanation:
                    "«Sebbene» introduce una subordinata concessiva e richiede normalmente il congiuntivo, non il futuro indicativo «avrai concluso». Inoltre il rapporto logico richiesto dalla frase è causale, non concessivo.",
            },
        ],
    },
    {
        id: 21,
        area: "linguistica-logica",
        category: "figure-retoriche",
        difficulty: 3,
        question:
            "Quale espressione contiene una metonimia?",
        answers: [
            {
                id: "A",
                text: "Oggi leggiamo Dante.",
                correct: true,
                explanation:
                    "La frase contiene una metonimia perché viene nominato l'autore, Dante, al posto delle sue opere. Naturalmente non si 'legge Dante' come persona: si leggono i testi scritti da Dante.",
            },
            {
                id: "B",
                text: "Prendiamo la moto!",
                correct: false,
                explanation:
                    "La parola «moto» indica direttamente il mezzo di trasporto a cui ci si riferisce. Non avviene una sostituzione tra due termini legati da una relazione concettuale, quindi non c'è metonimia.",
            },
            {
                id: "C",
                text: "Io mangerò una pizza.",
                correct: false,
                explanation:
                    "La parola «pizza» indica direttamente l'alimento che verrà mangiato. Non viene utilizzato un termine al posto di un altro sulla base di una relazione di contiguità.",
            },
            {
                id: "D",
                text: "Lucia è incantevole.",
                correct: false,
                explanation:
                    "La frase contiene semplicemente un aggettivo qualificativo riferito a Lucia. Non presenta alcuna sostituzione metonimica.",
            },
        ],
    },

    {
        id: 22,
        area: "linguistica-logica",
        category: "lessico-sinonimi",
        difficulty: 3,
        question:
            "NON è un sinonimo di “eclettico”:",
        answers: [
            {
                id: "A",
                text: "ellittico",
                correct: true,
                explanation:
                    "«Ellittico» non è sinonimo di «eclettico». Può indicare qualcosa relativo all'ellisse oppure, nel linguaggio, un'espressione nella quale alcuni elementi sono sottintesi.",
            },
            {
                id: "B",
                text: "poliedrico",
                correct: false,
                explanation:
                    "«Poliedrico» può indicare figurativamente una persona dotata di interessi, capacità o aspetti molteplici. In questo senso è vicino a «eclettico».",
            },
            {
                id: "C",
                text: "versatile",
                correct: false,
                explanation:
                    "«Versatile» indica una persona capace di adattarsi a molte attività o interessarsi a campi diversi. È quindi semanticamente vicino a «eclettico».",
            },
            {
                id: "D",
                text: "multiforme",
                correct: false,
                explanation:
                    "«Multiforme» significa caratterizzato da molte forme o manifestazioni differenti. Può quindi essere usato, in determinati contesti, con valore vicino a «eclettico» e «poliedrico».",
            },
        ],
    },

    {
        id: 23,
        area: "linguistica-logica",
        category: "lessico-contrari",
        difficulty: 4,
        question:
            "È un contrario di “mellifluo”:",
        answers: [
            {
                id: "A",
                text: "schietto",
                correct: true,
                explanation:
                    "«Mellifluo», riferito soprattutto al modo di parlare, può indicare un tono eccessivamente dolce, insinuante o affettato. «Schietto» indica invece un modo di esprimersi franco, diretto e privo di artificiosa dolcezza.",
            },
            {
                id: "B",
                text: "suadente",
                correct: false,
                explanation:
                    "«Suadente» indica un modo di parlare persuasivo, dolce e capace di attirare. È quindi vicino al significato di «mellifluo», non il suo contrario.",
            },
            {
                id: "C",
                text: "mieloso",
                correct: false,
                explanation:
                    "«Mieloso» significa eccessivamente dolce o affettato e può essere utilizzato proprio come sinonimo di «mellifluo». Non rappresenta quindi il contrario richiesto.",
            },
            {
                id: "D",
                text: "sdolcinato",
                correct: false,
                explanation:
                    "Anche «sdolcinato» descrive un atteggiamento o un linguaggio eccessivamente dolce e sentimentale. È semanticamente vicino a «mellifluo».",
            },
        ],
    },

    {
        id: 24,
        area: "linguistica-logica",
        category: "formazione-delle-parole",
        difficulty: 3,
        question:
            "Il prefissoide “tele-” indica:",
        answers: [
            {
                id: "A",
                text: "da lontano",
                correct: true,
                explanation:
                    "Il prefissoide «tele-» deriva dal greco e richiama il significato di «lontano» o «a distanza». Lo ritroviamo in parole come «telefono», «telecomunicazione» e «telelavoro».",
            },
            {
                id: "B",
                text: "a colori",
                correct: false,
                explanation:
                    "Il significato di «tele-» non riguarda il colore. La presenza del prefissoide indica normalmente una relazione con qualcosa che avviene o viene trasmesso a distanza.",
            },
            {
                id: "C",
                text: "impossibile",
                correct: false,
                explanation:
                    "Il valore di impossibilità o negazione può essere espresso da altri prefissi, come «in-» in alcuni contesti. «Tele-» non possiede questo significato.",
            },
            {
                id: "D",
                text: "schermo",
                correct: false,
                explanation:
                    "L'associazione può nascere da parole come «televisione», ma «tele-» non significa «schermo». Il suo significato originario è collegato alla distanza.",
            },
        ],
    },

    {
        id: 25,
        area: "linguistica-logica",
        category: "analisi-logica",
        difficulty: 3,
        question:
            "Quale frase contiene un complemento di moto a luogo?",
        answers: [
            {
                id: "A",
                text: "Vado al supermercato",
                correct: true,
                explanation:
                    "«Al supermercato» indica il luogo verso il quale è diretto il movimento espresso dal verbo «vado». È quindi un complemento di moto a luogo.",
            },
            {
                id: "B",
                text: "Resto in biblioteca fino alle sei",
                correct: false,
                explanation:
                    "«In biblioteca» indica il luogo nel quale il soggetto rimane e svolge quindi funzione di stato in luogo. Non c'è movimento verso una destinazione.",
            },
            {
                id: "C",
                text: "Sono uscito felice",
                correct: false,
                explanation:
                    "«Felice» esprime una condizione riferita al soggetto e non un luogo. Non può quindi essere classificato come complemento di moto a luogo.",
            },
            {
                id: "D",
                text: "Cammino distrattamente",
                correct: false,
                explanation:
                    "«Distrattamente» è un avverbio di modo e indica come viene compiuta l'azione. La frase non specifica alcuna destinazione.",
            },
        ],
    },

    {
        id: 26,
        area: "linguistica-logica",
        category: "morfologia-verbale",
        difficulty: 3,
        question:
            "Individua la forma verbale coniugata al condizionale presente:",
        answers: [
            {
                id: "A",
                text: "verrei",
                correct: true,
                explanation:
                    "«Verrei» è la prima persona singolare del condizionale presente del verbo «venire». Il condizionale presente può esprimere possibilità, desiderio, cortesia o un'azione subordinata a una condizione.",
            },
            {
                id: "B",
                text: "venissi",
                correct: false,
                explanation:
                    "«Venissi» è una forma del congiuntivo imperfetto. Per esempio: «Se venissi domani, potremmo parlarne».",
            },
            {
                id: "C",
                text: "verrò",
                correct: false,
                explanation:
                    "«Verrò» è la prima persona singolare del futuro semplice indicativo. Indica normalmente un'azione collocata nel futuro.",
            },
            {
                id: "D",
                text: "venga",
                correct: false,
                explanation:
                    "«Venga» può essere congiuntivo presente, per esempio in «Spero che venga», oppure imperativo formale. Non è condizionale.",
            },
        ],
    },

    {
        id: 27,
        area: "linguistica-logica",
        category: "morfologia-verbale",
        difficulty: 3,
        question:
            "Individua la voce verbale coniugata al congiuntivo trapassato:",
        answers: [
            {
                id: "A",
                text: "avessi rischiato",
                correct: true,
                explanation:
                    "Il congiuntivo trapassato è formato dal congiuntivo imperfetto dell'ausiliare più il participio passato. «Avessi rischiato» presenta esattamente questa struttura.",
            },
            {
                id: "B",
                text: "rischiassi",
                correct: false,
                explanation:
                    "«Rischiassi» è congiuntivo imperfetto. È una forma semplice e non contiene l'ausiliare necessario per costruire il trapassato.",
            },
            {
                id: "C",
                text: "abbia rischiato",
                correct: false,
                explanation:
                    "«Abbia rischiato» è congiuntivo passato, formato dal congiuntivo presente dell'ausiliare «avere» più il participio passato.",
            },
            {
                id: "D",
                text: "rischiò",
                correct: false,
                explanation:
                    "«Rischiò» è la terza persona singolare del passato remoto indicativo. Non appartiene quindi al modo congiuntivo.",
            },
        ],
    },

    {
        id: 28,
        area: "linguistica-logica",
        category: "sintassi-figure",
        difficulty: 4,
        question:
            "Indica l'espressione in cui è presente un anacoluto:",
        answers: [
            {
                id: "A",
                text: "Il coraggio, chi non ce l’ha non se lo può dare",
                correct: true,
                explanation:
                    "L'anacoluto consiste in una rottura della costruzione sintattica inizialmente impostata. «Il coraggio» viene posto all'inizio come elemento sospeso, mentre la frase prosegue con una struttura sintattica diversa: «chi non ce l'ha...».",
            },
            {
                id: "B",
                text: "Barcollo ma non mollo",
                correct: false,
                explanation:
                    "La frase è sintatticamente regolare ed è costruita attraverso due proposizioni coordinate dalla congiunzione avversativa «ma». Non presenta una rottura della struttura sintattica.",
            },
            {
                id: "C",
                text: "Il mattino ha l'oro in bocca",
                correct: false,
                explanation:
                    "È un proverbio costruito grammaticalmente in modo regolare. Può contenere un'immagine figurata, ma non un anacoluto.",
            },
            {
                id: "D",
                text: "Ride bene chi ride ultimo",
                correct: false,
                explanation:
                    "Anche questa espressione proverbiale presenta una struttura sintattica completa e coerente. Non si verifica alcun cambiamento improvviso della costruzione.",
            },
        ],
    },

    {
        id: 29,
        area: "linguistica-logica",
        category: "formazione-delle-parole",
        difficulty: 4,
        question:
            "Quale parola contiene un prefisso privativo?",
        answers: [
            {
                id: "A",
                text: "invalido",
                correct: true,
                explanation:
                    "In «invalido», il prefisso «in-» possiede valore negativo o privativo: indica la mancanza della condizione espressa dalla base «valido». Il significato è quindi vicino a «non valido».",
            },
            {
                id: "B",
                text: "rilancio",
                correct: false,
                explanation:
                    "Il prefisso «ri-» esprime normalmente ripetizione o rinnovamento dell'azione, come in «rilanciare». Non ha valore privativo.",
            },
            {
                id: "C",
                text: "disegno",
                correct: false,
                explanation:
                    "La sequenza iniziale «dis-» non va interpretata qui semplicemente come un prefisso privativo produttivo applicato a «egno». «Disegno» è una parola lessicalizzata con una diversa storia etimologica.",
            },
            {
                id: "D",
                text: "riflesso",
                correct: false,
                explanation:
                    "La parola «riflesso» non contiene un prefisso privativo. L'elemento iniziale è storicamente collegato all'idea di ritorno o ripiegamento, non alla negazione.",
            },
        ],
    },

    {
        id: 30,
        area: "linguistica-logica",
        category: "analisi-logica",
        difficulty: 3,
        question:
            "In quale frase è presente un complemento di causa?",
        answers: [
            {
                id: "A",
                text: "È arrossita per la vergogna",
                correct: true,
                explanation:
                    "«Per la vergogna» indica la causa che ha provocato l'arrossire. Risponde alla domanda «per quale motivo è arrossita?» ed è quindi un complemento di causa.",
            },
            {
                id: "B",
                text: "È arrivata con l’autobus",
                correct: false,
                explanation:
                    "«Con l'autobus» indica il mezzo utilizzato per arrivare. È quindi un complemento di mezzo o strumento.",
            },
            {
                id: "C",
                text: "Ha causato un incidente",
                correct: false,
                explanation:
                    "La presenza del verbo «causare» non significa automaticamente che vi sia un complemento di causa. «Un incidente» è il complemento oggetto del verbo.",
            },
            {
                id: "D",
                text: "Ha salutato con la mano",
                correct: false,
                explanation:
                    "«Con la mano» indica il mezzo o lo strumento attraverso il quale viene compiuto il saluto. Non esprime il motivo per cui l'azione avviene.",
            },
        ],
    },

    {
        id: 31,
        area: "linguistica-logica",
        category: "morfologia",
        difficulty: 2,
        question:
            "Quale parola è un aggettivo indefinito?",
        answers: [
            {
                id: "A",
                text: "qualche",
                correct: true,
                explanation:
                    "«Qualche» è un aggettivo indefinito quando accompagna un nome, come in «qualche studente». Indica una quantità non determinata con precisione.",
            },
            {
                id: "B",
                text: "primo",
                correct: false,
                explanation:
                    "«Primo» è un numerale ordinale. Indica la posizione di un elemento all'interno di una successione.",
            },
            {
                id: "C",
                text: "forse",
                correct: false,
                explanation:
                    "«Forse» è un avverbio che esprime dubbio o possibilità. Non accompagna un sostantivo qualificandone in modo indefinito la quantità o l'identità.",
            },
            {
                id: "D",
                text: "belloccio",
                correct: false,
                explanation:
                    "«Belloccio» è un aggettivo qualificativo alterato, derivato da «bello». Esprime una qualità e non appartiene agli indefiniti.",
            },
        ],
    },

    {
        id: 32,
        area: "linguistica-logica",
        category: "verbi-servili",
        difficulty: 2,
        question:
            "Quale frase contiene un verbo servile?",
        answers: [
            {
                id: "A",
                text: "Devo studiare per l’esame",
                correct: true,
                explanation:
                    "«Dovere» è un verbo servile quando accompagna un infinito e ne modifica il significato esprimendo necessità o obbligo. In questo caso «devo» serve il verbo principale «studiare».",
            },
            {
                id: "B",
                text: "Dormo tutto il pomeriggio",
                correct: false,
                explanation:
                    "«Dormo» è utilizzato come verbo autonomo e non accompagna un altro verbo all'infinito. Non svolge quindi funzione servile.",
            },
            {
                id: "C",
                text: "Luca approfitta sempre della mia disponibilità",
                correct: false,
                explanation:
                    "«Approfittare» è un normale verbo autonomo. Non appartiene ai principali verbi servili, come dovere, potere e volere.",
            },
            {
                id: "D",
                text: "Non mi serve niente",
                correct: false,
                explanation:
                    "Non bisogna confondere il verbo «servire» con la categoria dei «verbi servili». Qui «serve» significa essere utile o necessario e funziona autonomamente.",
            },
        ],
    },

    {
        id: 33,
        area: "linguistica-logica",
        category: "analisi-del-periodo",
        difficulty: 3,
        question:
            "La frase “Lucia sta studiando per superare l’esame” contiene:",
        answers: [
            {
                id: "A",
                text: "Una principale e una subordinata finale",
                correct: true,
                explanation:
                    "«Lucia sta studiando» costituisce la proposizione principale. «Per superare l'esame» esprime lo scopo per cui Lucia studia ed è quindi una subordinata finale implicita, costruita con «per + infinito».",
            },
            {
                id: "B",
                text: "Due subordinate principali",
                correct: false,
                explanation:
                    "Una proposizione non può essere contemporaneamente definita «subordinata principale». La frase possiede una principale e una subordinata dipendente da essa.",
            },
            {
                id: "C",
                text: "Due coordinate, di cui una causale",
                correct: false,
                explanation:
                    "Le due proposizioni non si trovano sullo stesso piano sintattico. «Per superare l'esame» dipende dalla principale e indica uno scopo, non una causa.",
            },
            {
                id: "D",
                text: "Due principali, di cui una dichiarativa e una volitiva",
                correct: false,
                explanation:
                    "«Per superare l'esame» non può funzionare autonomamente come principale. È una subordinata implicita strettamente dipendente dal verbo «sta studiando».",
            },
        ],
    },

    {
        id: 34,
        area: "linguistica-logica",
        category: "ortografia",
        difficulty: 3,
        question:
            "Tra le seguenti, è scritta correttamente la parola:",
        answers: [
            {
                id: "A",
                text: "conoscente",
                correct: true,
                explanation:
                    "«Conoscente» è scritto correttamente. Deriva dal verbo «conoscere» e indica una persona che si conosce senza che esista necessariamente un rapporto particolarmente stretto.",
            },
            {
                id: "B",
                text: "concupisciente",
                correct: false,
                explanation:
                    "La grafia corretta è «concupiscente», senza la seconda «i» prima di «-ente». Il termine deriva da «concupiscere».",
            },
            {
                id: "C",
                text: "coscente",
                correct: false,
                explanation:
                    "La grafia corretta è «cosciente», con la «i». Significa consapevole o dotato di coscienza.",
            },
            {
                id: "D",
                text: "coscenzioso",
                correct: false,
                explanation:
                    "La forma corretta è «coscienzioso», con «-ienz-». Indica una persona scrupolosa e attenta nell'adempiere i propri doveri.",
            },
        ],
    },

    {
        id: 35,
        area: "linguistica-logica",
        category: "avverbi",
        difficulty: 2,
        question:
            "Quale tra i seguenti è un avverbio di tempo?",
        answers: [
            {
                id: "A",
                text: "ieri",
                correct: true,
                explanation:
                    "«Ieri» è un avverbio di tempo perché colloca un fatto nel giorno precedente a quello in cui si parla. Risponde alla domanda «quando?».",
            },
            {
                id: "B",
                text: "velocemente",
                correct: false,
                explanation:
                    "«Velocemente» è un avverbio di modo. Indica in quale maniera viene svolta un'azione.",
            },
            {
                id: "C",
                text: "là",
                correct: false,
                explanation:
                    "«Là» è un avverbio di luogo. Indica una posizione spaziale distante dal parlante.",
            },
            {
                id: "D",
                text: "anche",
                correct: false,
                explanation:
                    "«Anche» è normalmente un avverbio con valore aggiuntivo o inclusivo. Non indica il momento in cui si verifica un'azione.",
            },
        ],
    },

    {
        id: 36,
        area: "linguistica-logica",
        category: "logica-principio-cassetti",
        difficulty: 4,
        question:
            "Una scatola contiene 5 penne blu e 3 penne rosse. Quante penne bisogna estrarre (senza guardare) per essere sicuri di avere almeno 1 penna blu ed almeno 1 penna rossa?",
        answers: [
            {
                id: "A",
                text: "6",
                correct: true,
                explanation:
                    "Bisogna considerare il caso peggiore. Potremmo estrarre per prime tutte e 5 le penne blu; a quel punto la sesta penna deve necessariamente essere rossa, garantendo almeno un elemento di entrambi i colori.",
            },
            {
                id: "B",
                text: "2",
                correct: false,
                explanation:
                    "Con due estrazioni potremmo ottenere due penne blu oppure due rosse. Non esiste quindi alcuna garanzia di avere entrambi i colori.",
            },
            {
                id: "C",
                text: "4",
                correct: false,
                explanation:
                    "Quattro estrazioni non bastano, perché potrebbero essere tutte blu: nella scatola sono presenti 5 penne blu. In questo caso non avremmo ancora alcuna penna rossa.",
            },
            {
                id: "D",
                text: "8",
                correct: false,
                explanation:
                    "Estraendo tutte e 8 le penne avremmo certamente entrambi i colori, ma il quesito chiede il numero minimo necessario per avere la garanzia. Tale numero è 6.",
            },
        ],
    },

    {
        id: 37,
        area: "linguistica-logica",
        category: "logica-ordinamenti",
        difficulty: 3,
        question:
            "In una stanza ci sono 3 fratelli: Marco è più alto di Luca, Luca è più basso di Gianni. Di conseguenza:",
        answers: [
            {
                id: "A",
                text: "Luca è il più basso, non si può stabilire chi è il più alto",
                correct: true,
                explanation:
                    "Dalle informazioni sappiamo Marco > Luca e Gianni > Luca. Luca è quindi sicuramente più basso di entrambi, ma non viene fornito alcun confronto diretto tra Marco e Gianni.",
            },
            {
                id: "B",
                text: "Gianni è più basso di Marco",
                correct: false,
                explanation:
                    "Non abbiamo alcun dato che confronti direttamente Gianni con Marco. Potrebbe essere più alto, più basso oppure della stessa altezza di Marco.",
            },
            {
                id: "C",
                text: "Non si può stabilire chi sia il più basso, né chi sia il più alto",
                correct: false,
                explanation:
                    "Il più alto non può essere determinato, ma il più basso sì. Luca è esplicitamente più basso sia di Marco sia di Gianni.",
            },
            {
                id: "D",
                text: "Marco è il più alto, Luca è il più basso",
                correct: false,
                explanation:
                    "La seconda parte è corretta, ma la prima non è dimostrata. Gianni potrebbe essere più alto di Marco perché non conosciamo il rapporto tra i due.",
            },
        ],
    },

    {
        id: 38,
        area: "linguistica-logica",
        category: "logica-algebrica",
        difficulty: 3,
        question:
            "Se Marco e Luca salgono assieme sulla bilancia, questa segna 140 kg. Se, invece, Marco e Gianni salgono assieme sulla bilancia, questa segna 140 kg. Di conseguenza:",
        answers: [
            {
                id: "A",
                text: "Luca e Gianni sono dello stesso peso",
                correct: true,
                explanation:
                    "Indichiamo i pesi con M, L e G. Abbiamo M+L=140 e M+G=140; sottraendo M da entrambe le uguaglianze otteniamo L=G, quindi Luca e Gianni pesano necessariamente lo stesso.",
            },
            {
                id: "B",
                text: "Marco, Luca e Gianni pesano 70 kg",
                correct: false,
                explanation:
                    "Dalle due somme non è possibile ricavare il peso individuale di Marco. Per esempio Marco potrebbe pesare 80 kg e sia Luca sia Gianni 60 kg, rispettando entrambe le condizioni.",
            },
            {
                id: "C",
                text: "Marco, Luca e Gianni sono dello stesso peso",
                correct: false,
                explanation:
                    "Possiamo dimostrare soltanto che Luca e Gianni hanno lo stesso peso. Non esiste alcuna informazione che obblighi Marco ad avere quel medesimo peso.",
            },
            {
                id: "D",
                text: "Marco pesa di più di Luca e Gianni",
                correct: false,
                explanation:
                    "Non conosciamo il valore del peso di Marco rispetto agli altri due. Sappiamo soltanto che sostituendo Luca con Gianni il peso complessivo rimane identico.",
            },
        ],
    },

    {
        id: 39,
        area: "linguistica-logica",
        category: "logica-condizionale",
        difficulty: 4,
        question:
            "Se è vero che chi esagera rischia, allora è vero anche che:",
        answers: [
            {
                id: "A",
                text: "Chi non rischia non esagera",
                correct: true,
                explanation:
                    "La premessa ha forma «se una persona esagera, allora rischia»: E → R. La sua contrapposta logicamente equivalente è ¬R → ¬E, cioè «chi non rischia non esagera».",
            },
            {
                id: "B",
                text: "Rischia solo chi esagera",
                correct: false,
                explanation:
                    "Questa frase trasformerebbe la condizione sufficiente in una condizione necessaria: R → E. La premessa non esclude che qualcuno possa rischiare anche per motivi diversi dall'esagerare.",
            },
            {
                id: "C",
                text: "Chi non esagera non rischia",
                correct: false,
                explanation:
                    "Questa è l'inversa della proposizione iniziale: ¬E → ¬R. Non è logicamente equivalente alla premessa; una persona che non esagera potrebbe comunque correre un rischio per altre ragioni.",
            },
            {
                id: "D",
                text: "Nessuna risposta è corretta",
                correct: false,
                explanation:
                    "Una risposta corretta esiste: l'alternativa A rappresenta la contrapposta della proposizione iniziale ed è logicamente equivalente ad essa.",
            },
        ],
    },

    {
        id: 40,
        area: "linguistica-logica",
        category: "sillogismi",
        difficulty: 4,
        question:
            "Se è vero che tutti i lionfi sono animali, ed è vero che alcuni animali sono neri, allora è vero anche che:",
        answers: [
            {
                id: "A",
                text: "Alcuni animali sono lionfi",
                correct: false,
                explanation:
                    "Sapere che tutti i lionfi appartengono all'insieme degli animali non dimostra che esistano realmente dei lionfi. Una proposizione universale non implica necessariamente l'esistenza di membri della categoria.",
            },
            {
                id: "B",
                text: "Tutti i lionfi sono neri",
                correct: false,
                explanation:
                    "Sappiamo soltanto che alcuni animali sono neri. Non è detto che tali animali appartengano all'insieme dei lionfi, quindi non possiamo estendere la proprietà «nero» a tutti i lionfi.",
            },
            {
                id: "C",
                text: "Nessuna risposta è corretta",
                correct: true,
                explanation:
                    "Le premesse stabiliscono soltanto che l'eventuale insieme dei lionfi è contenuto nell'insieme degli animali e che esistono alcuni animali neri. Non viene fornita alcuna relazione necessaria tra lionfi e animali neri, quindi nessuna delle altre conclusioni segue logicamente.",
            },
            {
                id: "D",
                text: "Nessun lionfo è nero",
                correct: false,
                explanation:
                    "Le premesse non permettono neppure di escludere che alcuni lionfi possano essere neri. Semplicemente non conosciamo alcuna relazione tra l'insieme dei lionfi e il sottoinsieme degli animali neri.",
            },
        ],
    },
    {
        id: 41,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "metrica-letteraria",
        difficulty: 3,
        question:
            "L’endecasillabo è:",
        answers: [
            {
                id: "A",
                text: "Il verso usato nella “Divina Commedia”",
                correct: true,
                explanation:
                    "Nel contesto delle alternative fornite, questa è la risposta corretta. L'endecasillabo è un verso della tradizione poetica italiana caratterizzato da undici sillabe metriche, ed è il verso fondamentale della Divina Commedia di Dante, organizzata in terzine di endecasillabi.",
            },
            {
                id: "B",
                text: "Un componimento di 11 versi usato dagli Stilnovisti",
                correct: false,
                explanation:
                    "L'endecasillabo non è un componimento formato da undici versi. È un singolo verso, normalmente di undici sillabe metriche, utilizzato in moltissime forme poetiche italiane.",
            },
            {
                id: "C",
                text: "Una strofa di 11 sillabe, tipica del Barocco",
                correct: false,
                explanation:
                    "L'endecasillabo non è una strofa ma un verso. Inoltre non è tipico esclusivamente del Barocco: è presente in gran parte della tradizione poetica italiana, da Dante e Petrarca fino alla poesia moderna.",
            },
            {
                id: "D",
                text: "Il genere metrico tipico della prosa futurista",
                correct: false,
                explanation:
                    "Il Futurismo sperimentò fortemente con sintassi, disposizione grafica e verso libero. L'endecasillabo appartiene invece alla tradizione metrica poetica italiana e non è un genere della prosa futurista.",
            },
        ],
    },

    {
        id: 42,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 2,
        question:
            "È autore della “Gerusalemme Liberata”, poema epico ambientato nella Prima Crociata:",
        answers: [
            {
                id: "A",
                text: "Torquato Tasso",
                correct: true,
                explanation:
                    "Torquato Tasso è l'autore della Gerusalemme liberata, poema epico-cavalleresco del Cinquecento incentrato sulla fase finale della Prima crociata e sulla conquista cristiana di Gerusalemme. Tra i personaggi principali figura Goffredo di Buglione.",
            },
            {
                id: "B",
                text: "Ludovico Ariosto",
                correct: false,
                explanation:
                    "Ludovico Ariosto è autore dell'Orlando furioso. Anche questa è un'opera fondamentale della letteratura rinascimentale, ma sviluppa vicende cavalleresche legate al ciclo carolingio e non è la Gerusalemme liberata.",
            },
            {
                id: "C",
                text: "Giacomo Leopardi",
                correct: false,
                explanation:
                    "Giacomo Leopardi è un poeta e pensatore dell'Ottocento, autore dei Canti, delle Operette morali e dello Zibaldone. Visse molti secoli dopo l'epoca di Tasso.",
            },
            {
                id: "D",
                text: "Giovanni Boccaccio",
                correct: false,
                explanation:
                    "Giovanni Boccaccio è uno dei principali autori del Trecento ed è soprattutto noto per il Decameron. Non è autore della Gerusalemme liberata.",
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
                text: "1793",
                correct: true,
                explanation:
                    "Carlo Goldoni nacque a Venezia nel 1707 e morì a Parigi nel 1793. È una delle figure centrali del teatro italiano del Settecento e promosse una profonda riforma della commedia.",
            },
            {
                id: "B",
                text: "1876",
                correct: false,
                explanation:
                    "Il 1876 appartiene al XIX secolo ed è molto successivo alla vita di Goldoni. Il commediografo morì invece nel 1793, durante il periodo della Rivoluzione francese.",
            },
            {
                id: "C",
                text: "1623",
                correct: false,
                explanation:
                    "Nel 1623 Goldoni non era ancora nato: nacque infatti nel 1707. Questa data appartiene al secolo precedente rispetto alla sua attività teatrale.",
            },
            {
                id: "D",
                text: "1599",
                correct: false,
                explanation:
                    "Il 1599 appartiene alla fine del Cinquecento, più di un secolo prima della nascita di Goldoni. Non può quindi essere la data della sua morte.",
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
                text: "Giuseppe Ungaretti",
                correct: true,
                explanation:
                    "Giuseppe Ungaretti pubblicò Il porto sepolto nel 1916, durante la Prima guerra mondiale. Molti testi confluirono successivamente nella raccolta L'Allegria; la sua poesia è caratterizzata da forte concentrazione espressiva e centralità della parola.",
            },
            {
                id: "B",
                text: "Giovanni Pascoli",
                correct: false,
                explanation:
                    "Pascoli è autore di raccolte come Myricae e Canti di Castelvecchio. Il porto sepolto appartiene invece alla produzione di Ungaretti.",
            },
            {
                id: "C",
                text: "Gabriele D'Annunzio",
                correct: false,
                explanation:
                    "D'Annunzio è autore, tra le altre opere, delle Laudi e del romanzo Il piacere. Non scrisse Il porto sepolto.",
            },
            {
                id: "D",
                text: "Italo Svevo",
                correct: false,
                explanation:
                    "Italo Svevo è soprattutto un romanziere, autore di Una vita, Senilità e La coscienza di Zeno. Non è autore della raccolta poetica indicata.",
            },
        ],
    },

    {
        id: 45,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 3,
        question:
            "NON è un’opera di Giovanni Verga:",
        answers: [
            {
                id: "A",
                text: "Il trionfo della morte",
                correct: true,
                explanation:
                    "Il trionfo della morte non è un'opera di Giovanni Verga, ma un romanzo di Gabriele D'Annunzio pubblicato nel 1894. Appartiene alla fase decadente della narrativa dannunziana.",
            },
            {
                id: "B",
                text: "Storia di una capinera",
                correct: false,
                explanation:
                    "Storia di una capinera è un romanzo epistolare di Giovanni Verga, appartenente alla sua produzione precedente alla piena stagione verista.",
            },
            {
                id: "C",
                text: "Eva",
                correct: false,
                explanation:
                    "Eva è un romanzo di Giovanni Verga pubblicato negli anni Settanta dell'Ottocento. Fa parte della fase della sua narrativa precedente ai grandi romanzi veristi.",
            },
            {
                id: "D",
                text: "Tigre reale",
                correct: false,
                explanation:
                    "Tigre reale è anch'esso un romanzo di Giovanni Verga. È quindi una delle opere dell'autore e non può essere la risposta al quesito che chiede l'eccezione.",
            },
        ],
    },

    {
        id: 46,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-novecento",
        difficulty: 3,
        question:
            "Ha fatto parte della corrente letteraria dell’Ermetismo:",
        answers: [
            {
                id: "A",
                text: "Salvatore Quasimodo",
                correct: true,
                explanation:
                    "Salvatore Quasimodo è uno dei principali poeti associati all'Ermetismo italiano, insieme ad autori come Mario Luzi. La prima fase della sua poesia è caratterizzata da linguaggio concentrato, analogico ed essenziale.",
            },
            {
                id: "B",
                text: "Pier Paolo Pasolini",
                correct: false,
                explanation:
                    "Pasolini appartiene a una stagione successiva e sviluppò poesia, narrativa, saggistica e cinema con caratteristiche molto differenti dall'Ermetismo.",
            },
            {
                id: "C",
                text: "Elsa Morante",
                correct: false,
                explanation:
                    "Elsa Morante è soprattutto una grande narratrice del Novecento, autrice di romanzi come L'isola di Arturo e La Storia. Non è considerata un'esponente dell'Ermetismo.",
            },
            {
                id: "D",
                text: "Alberto Moravia",
                correct: false,
                explanation:
                    "Moravia è un importante romanziere del Novecento, autore de Gli indifferenti. La sua narrativa analizza soprattutto società borghese, alienazione e rapporti umani e non appartiene alla poesia ermetica.",
            },
        ],
    },

    {
        id: 47,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-antica",
        difficulty: 2,
        question:
            "Chi fu il fondatore della dinastia Giulio-Claudia e primo imperatore romano?",
        answers: [
            {
                id: "A",
                text: "Augusto",
                correct: true,
                explanation:
                    "Ottaviano Augusto fu il primo imperatore romano e governò dal 27 a.C. al 14 d.C. Con lui ebbe inizio il principato e la dinastia giulio-claudia.",
            },
            {
                id: "B",
                text: "Vespasiano",
                correct: false,
                explanation:
                    "Vespasiano divenne imperatore nel 69 d.C. e fondò la dinastia flavia, non quella giulio-claudia.",
            },
            {
                id: "C",
                text: "Nerone",
                correct: false,
                explanation:
                    "Nerone apparteneva alla dinastia giulio-claudia ma ne fu l'ultimo imperatore, regnando dal 54 al 68 d.C. Non ne fu quindi il fondatore.",
            },
            {
                id: "D",
                text: "Caligola",
                correct: false,
                explanation:
                    "Caligola fu un imperatore della dinastia giulio-claudia, successivo a Tiberio. Non fu però il primo imperatore romano.",
            },
        ],
    },

    {
        id: 48,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-medievale",
        difficulty: 2,
        question:
            "Chi fu Maometto?",
        answers: [
            {
                id: "A",
                text: "Il fondatore dell’Islam",
                correct: true,
                explanation:
                    "Nel quadro semplificato proposto dal quesito, questa è la risposta prevista. Maometto, o Muhammad, fu il profeta centrale dell'Islam e la figura storica attorno alla quale nacque nel VII secolo la comunità musulmana nella penisola arabica.",
            },
            {
                id: "B",
                text: "Un imperatore romano",
                correct: false,
                explanation:
                    "Maometto non fu un imperatore romano. Visse nella penisola arabica tra il VI e il VII secolo, molti secoli dopo la fase principale dell'Impero romano d'Occidente.",
            },
            {
                id: "C",
                text: "Un re medievale europeo",
                correct: false,
                explanation:
                    "Maometto non fu un sovrano europeo. Operò principalmente nelle città arabe di Mecca e Medina.",
            },
            {
                id: "D",
                text: "Un filosofo ebraico",
                correct: false,
                explanation:
                    "Maometto non apparteneva alla tradizione filosofica ebraica. È la figura profetica centrale dell'Islam.",
            },
        ],
    },

    {
        id: 49,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-medievale",
        difficulty: 3,
        question:
            "Il sistema feudale nel Medioevo fu:",
        answers: [
            {
                id: "A",
                text: "Un sistema di scambio di terre e servizi tra signori e vassalli",
                correct: true,
                explanation:
                    "Nel modello semplificato proposto dal quesito, il feudalesimo si basava su rapporti personali tra signori e vassalli, legati da obblighi reciproci. Il signore poteva concedere un feudo in cambio di fedeltà e servizi, soprattutto militari.",
            },
            {
                id: "B",
                text: "Un’organizzazione di cavalieri uniti da ideali repubblicani",
                correct: false,
                explanation:
                    "Il rapporto feudale non era fondato su ideali repubblicani. Era invece legato a una società gerarchica e a rapporti personali di fedeltà e servizio.",
            },
            {
                id: "C",
                text: "Un sistema di commercio marittimo lungo le coste dell’Adriatico",
                correct: false,
                explanation:
                    "Il commercio marittimo fu importante nel Medioevo, soprattutto per città come Venezia, ma non definisce il sistema feudale.",
            },
            {
                id: "D",
                text: "Un tipo di monarchia costituzionale basato su un esercito centralizzato",
                correct: false,
                explanation:
                    "Le monarchie costituzionali sono caratteristiche di epoche molto più tarde. Inoltre il mondo feudale era spesso caratterizzato da frammentazione del potere, non da completa centralizzazione.",
            },
        ],
    },

    {
        id: 50,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-moderna",
        difficulty: 3,
        question:
            "Quale fu la causa principale della Rivoluzione americana?",
        answers: [
            {
                id: "A",
                text: "La protesta delle colonie contro le tasse imposte dalla Gran Bretagna",
                correct: true,
                explanation:
                    "Tra le cause principali della Rivoluzione americana vi fu il conflitto sulla tassazione imposta dal Parlamento britannico alle tredici colonie senza una loro rappresentanza politica diretta. Lo slogan «No taxation without representation» sintetizza bene questa protesta.",
            },
            {
                id: "B",
                text: "L’invasione francese delle colonie sudamericane",
                correct: false,
                explanation:
                    "Le tredici colonie coinvolte nella Rivoluzione americana erano situate nell'America settentrionale e dipendevano dalla Gran Bretagna. Un'invasione francese del Sudamerica non ne fu la causa.",
            },
            {
                id: "C",
                text: "La guerra civile tra Stati Uniti e Messico",
                correct: false,
                explanation:
                    "La guerra messicano-statunitense avvenne nel XIX secolo, molti decenni dopo l'indipendenza americana. Non può quindi essere una causa della Rivoluzione iniziata negli anni Settanta del Settecento.",
            },
            {
                id: "D",
                text: "Il fallimento del Congresso di Vienna",
                correct: false,
                explanation:
                    "Il Congresso di Vienna si svolse tra il 1814 e il 1815, dopo la caduta di Napoleone. La Dichiarazione d'indipendenza americana risale invece al 1776.",
            },
        ],
    },

    {
        id: 51,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-contemporanea",
        difficulty: 3,
        question:
            "La cosiddetta “Rivoluzione d’Ottobre” del 1917 fu:",
        answers: [
            {
                id: "A",
                text: "Un’insurrezione che portò al potere i bolscevichi di Lenin, in Russia",
                correct: true,
                explanation:
                    "La Rivoluzione d'Ottobre del 1917 portò i bolscevichi guidati da Lenin alla conquista del potere in Russia, rovesciando il governo provvisorio sorto dopo la Rivoluzione di febbraio.",
            },
            {
                id: "B",
                text: "L’atto di abdicazione dello zar Nicola III di Polonia",
                correct: false,
                explanation:
                    "Lo zar coinvolto nella rivoluzione russa era Nicola II, non Nicola III, ed era imperatore di Russia. La sua abdicazione avvenne in seguito alla Rivoluzione di febbraio, prima della presa del potere bolscevica.",
            },
            {
                id: "C",
                text: "La pace che pose fine alla Prima Guerra Mondiale, in Francia",
                correct: false,
                explanation:
                    "La Prima guerra mondiale terminò nel 1918 e fu seguita dai trattati di pace, tra cui quello di Versailles del 1919. La Rivoluzione d'Ottobre fu invece un evento politico interno alla Russia.",
            },
            {
                id: "D",
                text: "Una guerra civile guidata dal generale Franco, nella penisola iberica",
                correct: false,
                explanation:
                    "Francisco Franco fu protagonista della guerra civile spagnola, iniziata nel 1936. Si tratta di un evento diverso e successivo rispetto alla Rivoluzione russa.",
            },
        ],
    },

    {
        id: 52,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-contemporanea",
        difficulty: 2,
        question:
            "Quando avvenne la caduta del Muro di Berlino?",
        answers: [
            {
                id: "A",
                text: "Nel 1989",
                correct: true,
                explanation:
                    "Il Muro di Berlino venne aperto il 9 novembre 1989. L'evento divenne uno dei simboli principali della fine della Guerra fredda e anticipò la riunificazione tedesca del 1990.",
            },
            {
                id: "B",
                text: "Nel 1975",
                correct: false,
                explanation:
                    "Nel 1975 il Muro esisteva ancora e continuava a separare Berlino Est da Berlino Ovest. Sarebbe rimasto in funzione per altri quattordici anni.",
            },
            {
                id: "C",
                text: "Nel 1995",
                correct: false,
                explanation:
                    "Nel 1995 il Muro era già caduto da diversi anni e la Germania era già stata riunificata.",
            },
            {
                id: "D",
                text: "Nel 1961",
                correct: false,
                explanation:
                    "Il 1961 è l'anno della costruzione del Muro di Berlino, non della sua caduta. Fu eretto dalle autorità della Germania orientale a partire dal 13 agosto.",
            },
        ],
    },

    {
        id: 53,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-italiana-contemporanea",
        difficulty: 3,
        question:
            "Enrico Berlinguer fu:",
        answers: [
            {
                id: "A",
                text: "Segretario del Partito Comunista Italiano",
                correct: true,
                explanation:
                    "Enrico Berlinguer fu segretario generale del Partito Comunista Italiano dal 1972 fino alla sua morte nel 1984. È una delle principali figure politiche dell'Italia repubblicana del secondo dopoguerra.",
            },
            {
                id: "B",
                text: "Presidente della Repubblica Italiana",
                correct: false,
                explanation:
                    "Berlinguer non fu mai Presidente della Repubblica. Durante gran parte della sua leadership del PCI la Presidenza della Repubblica fu ricoperta da altre figure, tra cui Giovanni Leone e Sandro Pertini.",
            },
            {
                id: "C",
                text: "Leader del Movimento Sociale Italiano",
                correct: false,
                explanation:
                    "Il Movimento Sociale Italiano apparteneva a un'area politica completamente diversa. Berlinguer era invece il principale dirigente del Partito Comunista Italiano.",
            },
            {
                id: "D",
                text: "Primo ministro spagnolo",
                correct: false,
                explanation:
                    "Berlinguer fu un politico italiano e non ricoprì incarichi di governo in Spagna. La sua attività politica si svolse principalmente all'interno del PCI.",
            },
        ],
    },

    {
        id: 54,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-demografica",
        difficulty: 2,
        question:
            "Che cosa si intende con il concetto di \"densità di popolazione\"?",
        answers: [
            {
                id: "A",
                text: "Il numero di abitanti per chilometro quadrato",
                correct: true,
                explanation:
                    "La densità di popolazione mette in rapporto il numero degli abitanti con la superficie del territorio. Si calcola generalmente dividendo la popolazione per i chilometri quadrati dell'area considerata.",
            },
            {
                id: "B",
                text: "Il numero totale di abitanti di un paese",
                correct: false,
                explanation:
                    "Questo dato rappresenta la popolazione assoluta. Due Stati possono avere la stessa popolazione complessiva ma densità molto diverse se hanno superfici differenti.",
            },
            {
                id: "C",
                text: "La crescita demografica annuale",
                correct: false,
                explanation:
                    "La crescita demografica misura come varia il numero di abitanti nel tempo. La densità riguarda invece il rapporto tra abitanti e superficie.",
            },
            {
                id: "D",
                text: "La percentuale di popolazione urbana",
                correct: false,
                explanation:
                    "La percentuale di popolazione urbana indica la quota di persone che vive nelle città. È un indicatore differente dalla densità di popolazione.",
            },
        ],
    },

    {
        id: 55,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-politica",
        difficulty: 2,
        question:
            "Quale tra questi è uno stato insulare?",
        answers: [
            {
                id: "A",
                text: "Giappone",
                correct: true,
                explanation:
                    "Il Giappone è uno Stato insulare formato da un vasto arcipelago nell'Asia orientale. Le sue quattro isole principali sono Honshu, Hokkaido, Kyushu e Shikoku.",
            },
            {
                id: "B",
                text: "Germania",
                correct: false,
                explanation:
                    "La Germania è uno Stato dell'Europa centrale con numerosi confini terrestri, tra cui Francia, Polonia, Austria e Paesi Bassi. Non è quindi uno Stato insulare.",
            },
            {
                id: "C",
                text: "Brasile",
                correct: false,
                explanation:
                    "Il Brasile occupa una vasta parte del continente sudamericano e confina via terra con quasi tutti gli Stati del Sudamerica. Non è uno Stato insulare.",
            },
            {
                id: "D",
                text: "Egitto",
                correct: false,
                explanation:
                    "L'Egitto si trova nell'Africa nordorientale e nella penisola del Sinai e possiede confini terrestri. Non è costituito esclusivamente da un'isola o da un arcipelago.",
            },
        ],
    },

    {
        id: 56,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "istituzioni-europee",
        difficulty: 2,
        question:
            "Cos’è l’Unione Europea?",
        answers: [
            {
                id: "A",
                text: "Un’organizzazione di paesi europei che collaborano economicamente e politicamente",
                correct: true,
                explanation:
                    "Nel livello di semplificazione del quesito, questa è la risposta corretta. L'Unione Europea è un'unione politica ed economica sovranazionale formata da Stati europei che condividono istituzioni, norme e politiche in numerosi ambiti.",
            },
            {
                id: "B",
                text: "Un singolo paese europeo molto grande, federato secondo il modello degli Stati Uniti d’America",
                correct: false,
                explanation:
                    "L'Unione Europea non è un unico Stato. I suoi membri rimangono Stati sovrani pur avendo attribuito alle istituzioni europee determinate competenze comuni.",
            },
            {
                id: "C",
                text: "Un’associazione di città europee senza governo comune",
                correct: false,
                explanation:
                    "I membri dell'UE sono Stati, non singole città. L'Unione dispone inoltre di istituzioni comuni come Commissione europea, Parlamento europeo e Consiglio.",
            },
            {
                id: "D",
                text: "Un gruppo di stati extraeuropei che commerciano con l’Europa",
                correct: false,
                explanation:
                    "Gli Stati membri sono europei. Le relazioni commerciali con Paesi esterni esistono, ma non definiscono che cosa sia l'Unione Europea.",
            },
        ],
    },

    {
        id: 57,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-economica",
        difficulty: 2,
        question:
            "Quale tra questi è un importante settore economico basato sui servizi?",
        answers: [
            {
                id: "A",
                text: "Terziario",
                correct: true,
                explanation:
                    "Il settore terziario comprende attività che forniscono servizi, come commercio, trasporti, turismo, banche, istruzione e sanità. Si distingue dal primario, legato alle risorse naturali, e dal secondario, legato alla trasformazione industriale.",
            },
            {
                id: "B",
                text: "Primario",
                correct: false,
                explanation:
                    "Il settore primario comprende attività come agricoltura, pesca, allevamento ed estrazione di risorse naturali. Non è principalmente un settore di servizi.",
            },
            {
                id: "C",
                text: "Secondario",
                correct: false,
                explanation:
                    "Il settore secondario riguarda soprattutto l'industria e la trasformazione delle materie prime in prodotti finiti o semilavorati.",
            },
            {
                id: "D",
                text: "Quaternario",
                correct: false,
                explanation:
                    "In alcune classificazioni moderne il quaternario comprende servizi avanzati legati a conoscenza, ricerca e informazione. Tuttavia, nel modello tradizionale richiesto dal quesito, il grande settore economico dei servizi è il terziario.",
            },
        ],
    },

    {
        id: 58,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-italiana",
        difficulty: 2,
        question:
            "Qual è il capoluogo della regione Friuli Venezia Giulia?",
        answers: [
            {
                id: "A",
                text: "Trieste",
                correct: true,
                explanation:
                    "Trieste è il capoluogo del Friuli Venezia Giulia, regione autonoma a statuto speciale dell'Italia nordorientale. La città si affaccia sul golfo di Trieste, nell'alto Adriatico.",
            },
            {
                id: "B",
                text: "Torino",
                correct: false,
                explanation:
                    "Torino è il capoluogo del Piemonte, nell'Italia nordoccidentale. Non appartiene al Friuli Venezia Giulia.",
            },
            {
                id: "C",
                text: "Udine",
                correct: false,
                explanation:
                    "Udine è un'importante città del Friuli Venezia Giulia, ma non è il capoluogo regionale. Il capoluogo è Trieste.",
            },
            {
                id: "D",
                text: "Venezia",
                correct: false,
                explanation:
                    "Venezia è il capoluogo della regione Veneto. Nonostante il nome «Venezia Giulia», il Friuli Venezia Giulia è una regione distinta dal Veneto.",
            },
        ],
    },

    {
        id: 59,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-cartografia",
        difficulty: 2,
        question:
            "Quale delle seguenti affermazioni sull’equatore è corretta?",
        answers: [
            {
                id: "A",
                text: "È una linea immaginaria che divide la Terra in emisfero boreale e australe",
                correct: true,
                explanation:
                    "L'equatore è il parallelo fondamentale di latitudine 0°. Divide convenzionalmente la Terra nell'emisfero boreale, a nord, e nell'emisfero australe, a sud.",
            },
            {
                id: "B",
                text: "È la linea geografica che segna il confine tra Europa, Asia e Australia",
                correct: false,
                explanation:
                    "L'equatore attraversa diversi continenti e oceani, ma non costituisce un confine tra Europa, Asia e Australia. La sua funzione geografica fondamentale è quella di riferimento per la latitudine.",
            },
            {
                id: "C",
                text: "È un meridiano che attraversa la terra dal Polo Nord al Polo Sud",
                correct: false,
                explanation:
                    "L'equatore è un parallelo, non un meridiano. I meridiani sono semicirconferenze che collegano i due poli e vengono utilizzati per determinare la longitudine.",
            },
            {
                id: "D",
                text: "È una catena montuosa situata in Africa meridionale",
                correct: false,
                explanation:
                    "L'equatore è una linea geografica immaginaria e non un elemento fisico del territorio. Inoltre attraversa la fascia centrale del pianeta.",
            },
        ],
    },

    {
        id: 60,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "astronomia-geografia",
        difficulty: 2,
        question:
            "Quale pianeta del Sistema Solare è conosciuto come il \"Pianeta Rosso\"?",
        answers: [
            {
                id: "A",
                text: "Marte",
                correct: true,
                explanation:
                    "Marte è chiamato «Pianeta Rosso» per il colore rossastro della sua superficie, dovuto soprattutto alla presenza di ossidi di ferro nei materiali superficiali.",
            },
            {
                id: "B",
                text: "Venere",
                correct: false,
                explanation:
                    "Venere è il secondo pianeta dal Sole ed è avvolto da una densissima atmosfera ricca di anidride carbonica. Non è però conosciuto come Pianeta Rosso.",
            },
            {
                id: "C",
                text: "Giove",
                correct: false,
                explanation:
                    "Giove è il più grande pianeta del Sistema Solare ed è un gigante gassoso. Presenta la famosa Grande Macchia Rossa, ma il soprannome «Pianeta Rosso» indica Marte.",
            },
            {
                id: "D",
                text: "Saturno",
                correct: false,
                explanation:
                    "Saturno è noto soprattutto per il vasto sistema di anelli. Non è identificato con il soprannome «Pianeta Rosso».",
            },
        ],
    },
    {
        id: 61,
        area: "cultura-matematico-scientifica",
        category: "scienze-della-terra-atmosfera",
        difficulty: 2,
        question:
            "Completare la seguente affermazione: I venti si formano dovunque esista…",
        answers: [
            {
                id: "A",
                text: "una differenza di pressione atmosferica",
                correct: true,
                explanation:
                    "Il vento è movimento di masse d'aria provocato principalmente da differenze di pressione atmosferica. L'aria tende a spostarsi dalle zone di pressione maggiore verso quelle di pressione minore; il moto reale viene poi influenzato anche dalla rotazione terrestre, dall'attrito e dalla conformazione del territorio.",
            },
            {
                id: "B",
                text: "la brezza marina",
                correct: false,
                explanation:
                    "La brezza marina è essa stessa un particolare tipo di vento, non la condizione generale necessaria alla formazione di tutti i venti. Nasce proprio da differenze di temperatura e quindi di pressione tra mare e terra.",
            },
            {
                id: "C",
                text: "un’escursione termica",
                correct: false,
                explanation:
                    "Differenze di temperatura possono contribuire a creare differenze di pressione e quindi generare vento, ma l'escursione termica non rappresenta direttamente la condizione generale indicata. Il meccanismo immediato è il gradiente di pressione.",
            },
            {
                id: "D",
                text: "Nessuna risposta è corretta",
                correct: false,
                explanation:
                    "Una risposta corretta è presente: una differenza di pressione atmosferica può mettere in movimento l'aria e generare vento.",
            },
        ],
    },

    {
        id: 62,
        area: "cultura-matematico-scientifica",
        category: "scienze-della-terra-meteorologia",
        difficulty: 2,
        question:
            "Con quale altro nome vengono definiti i tornado?",
        answers: [
            {
                id: "A",
                text: "Trombe d’aria",
                correct: true,
                explanation:
                    "Nel linguaggio comune italiano il tornado viene spesso chiamato «tromba d'aria». È un vortice atmosferico molto intenso che si estende da una nube temporalesca verso il suolo.",
            },
            {
                id: "B",
                text: "Anticicloni",
                correct: false,
                explanation:
                    "Un anticiclone è una vasta area caratterizzata da pressione atmosferica relativamente alta. È un fenomeno meteorologico completamente diverso da un tornado.",
            },
            {
                id: "C",
                text: "Ciclone tropicale",
                correct: false,
                explanation:
                    "Un ciclone tropicale è un sistema atmosferico di dimensioni enormemente superiori rispetto a un tornado e si sviluppa sugli oceani tropicali. Uragani e tifoni sono cicloni tropicali.",
            },
            {
                id: "D",
                text: "Cicloni extratropicali",
                correct: false,
                explanation:
                    "I cicloni extratropicali sono grandi sistemi di bassa pressione delle medie latitudini. Non sono sinonimi di tornado o tromba d'aria.",
            },
        ],
    },

    {
        id: 63,
        area: "cultura-matematico-scientifica",
        category: "scienze-della-terra-acque",
        difficulty: 2,
        question:
            "L’acqua di mare:",
        answers: [
            {
                id: "A",
                text: "è più densa dell’acqua dolce",
                correct: true,
                explanation:
                    "L'acqua marina contiene sali disciolti che aumentano la massa presente a parità di volume. Per questo, in condizioni comparabili di temperatura, la densità dell'acqua di mare è generalmente maggiore di quella dell'acqua dolce.",
            },
            {
                id: "B",
                text: "è meno densa dell’acqua dolce",
                correct: false,
                explanation:
                    "La presenza dei sali tende ad aumentare, non a diminuire, la densità. Per questo un corpo può avere una galleggiabilità leggermente maggiore nell'acqua marina.",
            },
            {
                id: "C",
                text: "Ha la stessa densità dell’acqua dolce",
                correct: false,
                explanation:
                    "Le due densità non sono normalmente identiche. Salinità e temperatura influenzano la densità dell'acqua, e quella marina contiene una quantità significativa di sali disciolti.",
            },
            {
                id: "D",
                text: "nessuna delle altre risposte è corretta",
                correct: false,
                explanation:
                    "L'alternativa A è corretta: l'acqua marina è normalmente più densa dell'acqua dolce.",
            },
        ],
    },

    {
        id: 64,
        area: "cultura-matematico-scientifica",
        category: "biologia-genetica",
        difficulty: 4,
        question:
            "Un uomo ha gruppo sanguigno A e sua moglie 0. Quali possono essere i fenotipi dei figli?",
        answers: [
            {
                id: "A",
                text: "Sia A che 0",
                correct: true,
                explanation:
                    "Una persona di gruppo A può avere genotipo IᴬIᴬ oppure Iᴬi, mentre una persona di gruppo 0 ha genotipo ii. Se il padre è eterozigote Iᴬi, i figli possono essere Iᴬi, quindi gruppo A, oppure ii, quindi gruppo 0. Per questo entrambi i fenotipi sono possibili.",
            },
            {
                id: "B",
                text: "Sicuramente solo A",
                correct: false,
                explanation:
                    "Questo sarebbe vero soltanto se il padre fosse omozigote IᴬIᴬ. Poiché dal solo fenotipo A non possiamo sapere se sia IᴬIᴬ o Iᴬi, non possiamo escludere figli di gruppo 0.",
            },
            {
                id: "C",
                text: "Non possono avere figli: i gruppi sanguigni sono incompatibili",
                correct: false,
                explanation:
                    "I gruppi sanguigni A e 0 non impediscono biologicamente a una coppia di avere figli. Il sistema ABO riguarda l'ereditarietà degli antigeni dei globuli rossi, non la possibilità generale di riproduzione.",
            },
            {
                id: "D",
                text: "Sicuramente solo 0",
                correct: false,
                explanation:
                    "La madre trasmette sempre l'allele i, ma il padre può trasmettere Iᴬ. In tal caso il figlio avrà genotipo Iᴬi e fenotipo A.",
            },
        ],
    },

    {
        id: 65,
        area: "cultura-matematico-scientifica",
        category: "biologia-cellulare",
        difficulty: 4,
        question:
            "La divisione mitotica porta alla",
        answers: [
            {
                id: "A",
                text: "riduzione della massa cellulare, ma non del numero dei cromosomi",
                correct: true,
                explanation:
                    "Tra le alternative del PDF, questa è quella prevista come corretta: dopo la divisione, la massa e il contenuto cellulare della cellula madre vengono distribuiti tra le cellule figlie, mentre il numero di cromosomi viene conservato. Il punto biologicamente fondamentale da ricordare è che la mitosi produce cellule figlie con lo stesso numero cromosomico della cellula madre.",
            },
            {
                id: "B",
                text: "maturazione delle cellule somatiche",
                correct: false,
                explanation:
                    "La mitosi è un processo di divisione cellulare e non coincide con la maturazione o differenziazione delle cellule. Una cellula può differenziarsi dopo essersi divisa, ma sono processi distinti.",
            },
            {
                id: "C",
                text: "formazione dei gameti",
                correct: false,
                explanation:
                    "La formazione dei gameti negli organismi a riproduzione sessuata è associata alla meiosi, che dimezza il numero cromosomico. La mitosi conserva invece il numero dei cromosomi.",
            },
            {
                id: "D",
                text: "riduzione del numero dei cromosomi, ma non della massa cellulare",
                correct: false,
                explanation:
                    "La riduzione del numero cromosomico è una caratteristica della meiosi, non della mitosi. In una normale mitosi, le cellule figlie mantengono lo stesso numero di cromosomi della cellula di partenza.",
            },
        ],
    },

    {
        id: 66,
        area: "cultura-matematico-scientifica",
        category: "biologia-molecolare",
        difficulty: 3,
        question:
            "Negli eucarioti la trascrizione, cioè la sintesi di RNA su stampo di DNA, è un processo che avviene",
        answers: [
            {
                id: "A",
                text: "all’interno del nucleo",
                correct: true,
                explanation:
                    "Nelle cellule eucariotiche il DNA nucleare si trova principalmente nel nucleo e qui avviene la trascrizione dei geni nucleari in RNA. L'RNA prodotto può poi essere elaborato e, nel caso dell'mRNA, raggiungere il citoplasma per la traduzione.",
            },
            {
                id: "B",
                text: "sui ribosomi",
                correct: false,
                explanation:
                    "I ribosomi sono la sede della traduzione, cioè della sintesi delle proteine a partire dall'informazione contenuta nell'mRNA. Trascrizione e traduzione sono due processi distinti.",
            },
            {
                id: "C",
                text: "nelle cavità del reticolo endoplasmatico liscio",
                correct: false,
                explanation:
                    "Il reticolo endoplasmatico liscio è coinvolto soprattutto in sintesi lipidica, metabolismo e detossificazione. Non è la sede principale della trascrizione del DNA nucleare.",
            },
            {
                id: "D",
                text: "sulla faccia esterna della membrana plasmatica",
                correct: false,
                explanation:
                    "La membrana plasmatica regola gli scambi tra cellula e ambiente e partecipa alla comunicazione cellulare, ma non è la sede della trascrizione.",
            },
        ],
    },

    {
        id: 67,
        area: "cultura-matematico-scientifica",
        category: "chimica-composti",
        difficulty: 3,
        question:
            "Quali tra i seguenti composti non è un ossido?",
        answers: [
            {
                id: "A",
                text: "HClO",
                correct: true,
                explanation:
                    "HClO è l'acido ipocloroso, un ossiacido contenente idrogeno, cloro e ossigeno. Un ossido è invece un composto binario dell'ossigeno con un altro elemento.",
            },
            {
                id: "B",
                text: "N2O5",
                correct: false,
                explanation:
                    "N₂O₅ è il pentossido di diazoto, composto binario formato da azoto e ossigeno. È quindi un ossido.",
            },
            {
                id: "C",
                text: "CaO",
                correct: false,
                explanation:
                    "CaO è ossido di calcio ed è formato soltanto da calcio e ossigeno. Appartiene quindi agli ossidi.",
            },
            {
                id: "D",
                text: "Li2O",
                correct: false,
                explanation:
                    "Li₂O è ossido di litio, composto binario di litio e ossigeno. È quindi un ossido.",
            },
        ],
    },

    {
        id: 68,
        area: "cultura-matematico-scientifica",
        category: "chimica-legami",
        difficulty: 3,
        question:
            "Quale delle seguenti coppie di elementi è più probabile che formi un composto covalente?",
        answers: [
            {
                id: "A",
                text: "C e O",
                correct: true,
                explanation:
                    "Carbonio e ossigeno sono entrambi non metalli e tendono a formare legami covalenti attraverso la condivisione di elettroni. Composti come CO₂ ne sono un esempio.",
            },
            {
                id: "B",
                text: "Mg e F",
                correct: false,
                explanation:
                    "Il magnesio è un metallo e il fluoro un non metallo fortemente elettronegativo. La loro combinazione tende a produrre un composto ionico, come MgF₂.",
            },
            {
                id: "C",
                text: "K e Br",
                correct: false,
                explanation:
                    "Il potassio è un metallo alcalino e il bromo un non metallo. La loro combinazione produce tipicamente KBr, caratterizzato prevalentemente da legame ionico.",
            },
            {
                id: "D",
                text: "Na e Cl",
                correct: false,
                explanation:
                    "Sodio e cloro formano il cloruro di sodio, NaCl, classico esempio di composto ionico. Il sodio cede un elettrone al cloro formando Na⁺ e Cl⁻.",
            },
        ],
    },

    {
        id: 69,
        area: "cultura-matematico-scientifica",
        category: "chimica-reazioni",
        difficulty: 4,
        question:
            "Quale equazione chimica rappresenta una reazione di neutralizzazione?",
        answers: [
            {
                id: "A",
                text: "Ca(OH)2 + 2HBr → CaBr2 + 2H2O",
                correct: true,
                explanation:
                    "È una reazione tra una base, Ca(OH)₂, e un acido, HBr. I prodotti sono un sale, CaBr₂, e acqua: è quindi una tipica neutralizzazione acido-base.",
            },
            {
                id: "B",
                text: "Zn + 2HCl → ZnCl2 + H2",
                correct: false,
                explanation:
                    "Questa è una reazione tra un metallo e un acido che produce un sale e idrogeno molecolare. Non è una neutralizzazione acido-base.",
            },
            {
                id: "C",
                text: "Na2CO3 + MgCl2 → MgCO3 + 2NaCl",
                correct: false,
                explanation:
                    "È una reazione di doppio scambio tra due sali. Non coinvolge direttamente la combinazione di un acido con una base per formare acqua.",
            },
            {
                id: "D",
                text: "CaCO3 → CaO + CO2",
                correct: false,
                explanation:
                    "Questa è una reazione di decomposizione: un singolo composto si trasforma in due prodotti più semplici.",
            },
        ],
    },

    {
        id: 70,
        area: "cultura-matematico-scientifica",
        category: "chimica-tavola-periodica",
        difficulty: 3,
        question:
            "In quale dei seguenti gruppi di elementi sono contenuti soltanto metalli?",
        answers: [
            {
                id: "A",
                text: "Al, Na, Mo, Hg",
                correct: true,
                explanation:
                    "Alluminio (Al), sodio (Na), molibdeno (Mo) e mercurio (Hg) sono tutti elementi metallici. Appartengono a diverse categorie di metalli della tavola periodica.",
            },
            {
                id: "B",
                text: "S, Cl, Na, Cr",
                correct: false,
                explanation:
                    "Zolfo (S) e cloro (Cl) sono non metalli. Soltanto sodio e cromo sono metalli.",
            },
            {
                id: "C",
                text: "C, Ca, I, Cs",
                correct: false,
                explanation:
                    "Carbonio (C) e iodio (I) sono non metalli, mentre calcio e cesio sono metalli. Il gruppo non contiene quindi esclusivamente metalli.",
            },
            {
                id: "D",
                text: "Sr, S, Cr, Cu",
                correct: false,
                explanation:
                    "Stronzio, cromo e rame sono metalli, ma lo zolfo è un non metallo. Basta la presenza di un solo non metallo per rendere errata l'alternativa.",
            },
        ],
    },

    {
        id: 71,
        area: "cultura-matematico-scientifica",
        category: "matematica-insiemi-numerici",
        difficulty: 2,
        question:
            "Quale dei seguenti numeri non appartiene all’insieme dei numeri razionali ℚ?",
        answers: [
            {
                id: "A",
                text: "√2",
                correct: true,
                explanation:
                    "√2 è un numero irrazionale: non può essere espresso esattamente come rapporto tra due numeri interi. La sua rappresentazione decimale è infinita e non periodica.",
            },
            {
                id: "B",
                text: "-3",
                correct: false,
                explanation:
                    "Ogni numero intero appartiene anche ai razionali, perché può essere scritto come frazione con denominatore 1. Infatti −3 = −3/1.",
            },
            {
                id: "C",
                text: "7/5",
                correct: false,
                explanation:
                    "7/5 è esplicitamente il rapporto tra due interi con denominatore diverso da zero. È quindi un numero razionale.",
            },
            {
                id: "D",
                text: "0,25",
                correct: false,
                explanation:
                    "0,25 è un decimale finito e può essere scritto come 25/100 = 1/4. Appartiene dunque ai numeri razionali.",
            },
        ],
    },

    {
        id: 72,
        area: "cultura-matematico-scientifica",
        category: "matematica-probabilita",
        difficulty: 2,
        question:
            "Si lancia un dado a 6 facce. Qual è la probabilità di ottenere un numero primo?",
        answers: [
            {
                id: "A",
                text: "1/2",
                correct: true,
                explanation:
                    "I numeri primi tra 1 e 6 sono 2, 3 e 5: tre risultati favorevoli su sei possibili. La probabilità è quindi 3/6=1/2.",
            },
            {
                id: "B",
                text: "1/3",
                correct: false,
                explanation:
                    "1/3 corrisponderebbe a due risultati favorevoli su sei. I numeri primi possibili sono invece tre: 2, 3 e 5.",
            },
            {
                id: "C",
                text: "2/3",
                correct: false,
                explanation:
                    "2/3 significherebbe quattro risultati favorevoli su sei. Ricorda che 1 non è un numero primo, quindi i risultati favorevoli sono soltanto tre.",
            },
            {
                id: "D",
                text: "5/6",
                correct: false,
                explanation:
                    "5/6 richiederebbe cinque risultati favorevoli. Sul dado soltanto 2, 3 e 5 sono primi.",
            },
        ],
    },

    {
        id: 73,
        area: "cultura-matematico-scientifica",
        category: "matematica-probabilita",
        difficulty: 2,
        question:
            "In un’urna ci sono 5 palline rosse e 3 verdi. Si estrae una pallina a caso. Qual è la probabilità che sia rossa?",
        answers: [
            {
                id: "A",
                text: "5/8",
                correct: true,
                explanation:
                    "Le palline totali sono 5+3=8 e i casi favorevoli sono le 5 palline rosse. La probabilità è quindi 5/8.",
            },
            {
                id: "B",
                text: "3/5",
                correct: false,
                explanation:
                    "Il denominatore deve rappresentare il numero totale di esiti equiprobabili, cioè 8 palline, non il numero delle sole palline rosse.",
            },
            {
                id: "C",
                text: "1/2",
                correct: false,
                explanation:
                    "La probabilità sarebbe 1/2 soltanto se i due colori avessero lo stesso numero di palline. Qui le rosse sono 5 e le verdi 3.",
            },
            {
                id: "D",
                text: "5/3",
                correct: false,
                explanation:
                    "Una probabilità non può superare 1. Il rapporto 5/3 è maggiore di 1 e quindi non può rappresentare una probabilità valida.",
            },
        ],
    },

    {
        id: 74,
        area: "cultura-matematico-scientifica",
        category: "matematica-calcolo",
        difficulty: 2,
        question:
            "Quanto vale 1,5 × 12?",
        answers: [
            {
                id: "A",
                text: "18",
                correct: true,
                explanation:
                    "1,5×12 può essere calcolato come 12 + metà di 12. Poiché metà di 12 è 6, il risultato è 12+6=18.",
            },
            {
                id: "B",
                text: "6",
                correct: false,
                explanation:
                    "6 rappresenta soltanto 0,5×12. Nel fattore 1,5 bisogna considerare sia una volta 12 sia un'altra metà di 12.",
            },
            {
                id: "C",
                text: "12,5",
                correct: false,
                explanation:
                    "Moltiplicare per 1,5 non significa aggiungere semplicemente 0,5 al numero iniziale. Significa aumentare il valore del 50%.",
            },
            {
                id: "D",
                text: "12/5",
                correct: false,
                explanation:
                    "12/5 vale 2,4 e non corrisponde alla moltiplicazione richiesta. Il risultato corretto è 18.",
            },
        ],
    },

    {
        id: 75,
        area: "cultura-matematico-scientifica",
        category: "matematica-frazioni",
        difficulty: 2,
        question:
            "Quale delle seguenti frazioni è equivalente a 6/8?",
        answers: [
            {
                id: "A",
                text: "9/12",
                correct: true,
                explanation:
                    "6/8 si semplifica dividendo numeratore e denominatore per 2: 6/8=3/4. Anche 9/12, dividendo entrambi per 3, diventa 3/4; le due frazioni sono quindi equivalenti.",
            },
            {
                id: "B",
                text: "3/5",
                correct: false,
                explanation:
                    "3/5=0,6, mentre 6/8=0,75. I due valori sono diversi.",
            },
            {
                id: "C",
                text: "4/7",
                correct: false,
                explanation:
                    "4/7 è circa 0,571, quindi non equivale a 3/4=0,75.",
            },
            {
                id: "D",
                text: "5/6",
                correct: false,
                explanation:
                    "5/6 è circa 0,833, mentre 6/8 equivale a 0,75. Non sono quindi frazioni equivalenti.",
            },
        ],
    },

    {
        id: 76,
        area: "cultura-matematico-scientifica",
        category: "matematica-algebra",
        difficulty: 3,
        question:
            "Semplifica l’espressione (3x + 2x) - (x - 4).",
        answers: [
            {
                id: "A",
                text: "4x + 4",
                correct: true,
                explanation:
                    "Prima si sommano i termini simili: 3x+2x=5x. Eliminando la parentesi preceduta dal segno meno, −(x−4)=−x+4. Quindi 5x−x+4=4x+4.",
            },
            {
                id: "B",
                text: "5x - x - 4",
                correct: false,
                explanation:
                    "Il segno meno davanti alla parentesi deve cambiare il segno di entrambi i termini. In particolare −(−4) diventa +4, non −4.",
            },
            {
                id: "C",
                text: "4x - 4",
                correct: false,
                explanation:
                    "Il coefficiente di x è corretto, ma il termine noto ha segno sbagliato. Il meno davanti alla parentesi trasforma −4 in +4.",
            },
            {
                id: "D",
                text: "5x + 4",
                correct: false,
                explanation:
                    "Dopo aver ottenuto 5x bisogna ancora sottrarre x. Pertanto il termine in x diventa 4x, non rimane 5x.",
            },
        ],
    },

    {
        id: 77,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria",
        difficulty: 2,
        question:
            "Qual è la misura della somma degli angoli interni di un parallelogramma?",
        answers: [
            {
                id: "A",
                text: "360°",
                correct: true,
                explanation:
                    "Un parallelogramma è un quadrilatero. La somma degli angoli interni di qualsiasi quadrilatero è (4−2)×180°=360°.",
            },
            {
                id: "B",
                text: "120°",
                correct: false,
                explanation:
                    "120° non può rappresentare la somma dei quattro angoli interni di un quadrilatero. È inferiore perfino a due angoli retti.",
            },
            {
                id: "C",
                text: "180°",
                correct: false,
                explanation:
                    "180° è la somma degli angoli interni di un triangolo. Un parallelogramma può essere diviso da una diagonale in due triangoli, quindi la somma è 180°+180°=360°.",
            },
            {
                id: "D",
                text: "90°",
                correct: false,
                explanation:
                    "90° è la misura di un singolo angolo retto. Anche in un rettangolo, che è un particolare parallelogramma, i quattro angoli retti sommano 360°.",
            },
        ],
    },

    {
        id: 78,
        area: "cultura-matematico-scientifica",
        category: "informatica",
        difficulty: 2,
        question:
            "Quale dei seguenti software è più comunemente utilizzato per analisi dei dati, tabelle e grafici?",
        answers: [
            {
                id: "A",
                text: "Excel",
                correct: true,
                explanation:
                    "Microsoft Excel è un foglio elettronico progettato per organizzare dati in righe e colonne, eseguire calcoli tramite formule e funzioni e creare grafici e tabelle.",
            },
            {
                id: "B",
                text: "Word",
                correct: false,
                explanation:
                    "Microsoft Word è principalmente un programma di videoscrittura. Può contenere tabelle e grafici, ma non è lo strumento principale per l'analisi strutturata dei dati.",
            },
            {
                id: "C",
                text: "Photoshop",
                correct: false,
                explanation:
                    "Adobe Photoshop è un software dedicato principalmente all'elaborazione e alla modifica di immagini digitali. Non è un foglio elettronico.",
            },
            {
                id: "D",
                text: "Acrobat Reader",
                correct: false,
                explanation:
                    "Acrobat Reader viene utilizzato principalmente per visualizzare e gestire documenti PDF. Non è progettato per analisi numeriche, tabelle di calcolo e grafici.",
            },
        ],
    },

    {
        id: 79,
        area: "cultura-matematico-scientifica",
        category: "matematica-statistica",
        difficulty: 2,
        question:
            "Se la media dei voti di 5 studenti è 7, qual è la somma dei loro voti?",
        answers: [
            {
                id: "A",
                text: "35",
                correct: true,
                explanation:
                    "La media aritmetica è data dalla somma dei valori divisa per il loro numero. Se somma/5=7, allora la somma è 7×5=35.",
            },
            {
                id: "B",
                text: "7",
                correct: false,
                explanation:
                    "7 è la media, non la somma complessiva. Per trovare il totale bisogna moltiplicare la media per il numero degli studenti.",
            },
            {
                id: "C",
                text: "12",
                correct: false,
                explanation:
                    "12 non deriva dalla relazione tra media e numero dei dati. La somma deve soddisfare S/5=7.",
            },
            {
                id: "D",
                text: "25",
                correct: false,
                explanation:
                    "Se la somma fosse 25, la media sarebbe 25/5=5 e non 7. Il totale corretto è 35.",
            },
        ],
    },

    {
        id: 80,
        area: "cultura-matematico-scientifica",
        category: "matematica-percentuali",
        difficulty: 2,
        question:
            "In un sondaggio, il 40% delle persone ha dichiarato di preferire il tè al caffè. Su un campione di 200 persone, quante hanno scelto il tè?",
        answers: [
            {
                id: "A",
                text: "80",
                correct: true,
                explanation:
                    "Il 40% di 200 si calcola come 0,40×200=80. Equivalentemente, 40/100×200=80 persone.",
            },
            {
                id: "B",
                text: "60",
                correct: false,
                explanation:
                    "60 persone rappresenterebbero il 30% di 200, perché 60/200=0,30. Il quesito indica invece il 40%.",
            },
            {
                id: "C",
                text: "40",
                correct: false,
                explanation:
                    "40 è il valore percentuale, ma non il numero di persone. Il 40% di 200 è maggiore di 40 e corrisponde a 80.",
            },
            {
                id: "D",
                text: "120",
                correct: false,
                explanation:
                    "120 rappresenta il 60% del campione. È il numero di persone che resterebbe se il restante 60% non avesse scelto il tè, ma la domanda chiede il gruppo del 40%.",
            },
        ],
    }
];

export default simulation04;