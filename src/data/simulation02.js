const passages = {
    passage01: `Quando un'organizzazione vuole migliorare un'attività complessa, è naturale cercare indicatori che permettano di misurarne i risultati. Un ospedale può osservare i tempi di attesa, una scuola i risultati delle prove, un servizio clienti la durata media delle chiamate. Il problema nasce quando l'indicatore smette di essere considerato un segnale parziale e diventa un surrogato dell'obiettivo stesso. Ridurre il tempo medio di una chiamata, per esempio, non equivale necessariamente a risolvere meglio i problemi degli utenti.

La difficoltà aumenta quando le persone sanno che la loro prestazione sarà valutata attraverso un numero preciso. Se il criterio premia soprattutto la rapidità, può diventare razionale chiudere rapidamente i casi semplici e dedicare meno attenzione a quelli complessi. L'indicatore, in altre parole, non si limita più a descrivere un comportamento: contribuisce a modificarlo. Un miglioramento apparente del numero misurato può quindi convivere con un peggioramento dell'obiettivo che quel numero avrebbe dovuto rappresentare.

Da ciò non segue che misurare sia inutile. Rinunciare agli indicatori renderebbe difficile individuare problemi, confrontare periodi diversi o verificare gli effetti di un intervento. È più prudente utilizzare più misure complementari, controllare gli effetti inattesi prodotti dagli incentivi e ricordare che nessun indicatore sintetico può sostituire completamente il giudizio sul fenomeno osservato. La domanda utile non è soltanto "il numero è migliorato?", ma anche "che cosa è cambiato per farlo migliorare?".`,

    passage02: `Restaurare un edificio storico può sembrare, a prima vista, un'operazione diretta: riportarlo il più possibile al suo aspetto originario. Ma molti edifici che consideriamo storici sono il risultato di trasformazioni avvenute durante secoli diversi. Una chiesa medievale può possedere una facciata settecentesca, un palazzo rinascimentale può essere stato modificato nell'Ottocento e persino una riparazione relativamente recente può essere diventata parte della storia dell'edificio.

Per questo il restauro non consiste necessariamente nel cancellare tutte le aggiunte successive per ricostruire un presunto stato iniziale. Eliminare una trasformazione significa eliminare anche una testimonianza del periodo che l'ha prodotta. Allo stesso tempo, conservare qualsiasi modifica soltanto perché antica sarebbe una regola altrettanto meccanica: alcune aggiunte possono compromettere la stabilità dell'edificio o avere distrutto elementi di particolare importanza.

Le decisioni richiedono quindi documentazione e confronto tra valori diversi: importanza storica delle varie fasi, stato di conservazione, sicurezza, funzione attuale dell'edificio e possibilità di distinguere gli interventi moderni dalle parti autentiche. Anche la reversibilità può essere importante: quando possibile, un intervento dovrebbe evitare di impedire definitivamente future scelte diverse. Il restauro, in questa prospettiva, non ricostruisce semplicemente il passato; decide responsabilmente come trasmetterne le tracce al futuro.`,

    passage03: `Una previsione espressa in termini probabilistici viene talvolta percepita come meno utile di una previsione categorica. Dire che un evento ha il 30% di probabilità di verificarsi sembra, a qualcuno, un modo per evitare di scegliere tra "accadrà" e "non accadrà". In realtà, quando la probabilità è costruita e interpretata correttamente, contiene un'informazione che una risposta semplicemente affermativa o negativa non può fornire: misura il grado di incertezza associato alle informazioni disponibili.

Supponiamo che un sistema di previsione attribuisca ripetutamente una probabilità del 30% a un certo tipo di evento in situazioni comparabili. Se il sistema è ben calibrato, quell'evento dovrebbe verificarsi approssimativamente in tre casi su dieci all'interno di un insieme sufficientemente ampio di previsioni di quel tipo. Ciò non permette di sapere in anticipo quale singolo caso farà parte dei tre, ma consente di prendere decisioni diverse da quelle che si prenderebbero con una probabilità del 2% o del 90%.

Le probabilità possono inoltre cambiare quando arrivano nuove informazioni. Questo aggiornamento non dimostra necessariamente che la previsione precedente fosse irrazionale: due valutazioni diverse possono essere entrambe coerenti se formulate sulla base di informazioni disponibili in momenti diversi. L'incertezza, quindi, non coincide con l'ignoranza completa. Può essere descritta, confrontata e aggiornata; proprio per questo può diventare uno strumento per decidere.`,

};

const simulation02 = [
    {
        id: 1,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 4,
        passage: passages.passage01,
        question:
            "Quale convinzione viene principalmente messa in discussione nel primo paragrafo?",
        answers: [
            {
                id: "A",
                text: "Qualunque attività complessa è impossibile da misurare attraverso dati numerici.",
                correct: false,
                explanation:
                    "Il brano non sostiene che i fenomeni complessi siano impossibili da misurare. Al contrario, riconosce l'utilità degli indicatori; il problema nasce quando una misura parziale viene trattata come se coincidesse interamente con l'obiettivo.",
            },
            {
                id: "B",
                text: "Gli indicatori quantitativi sono utili soltanto nelle attività commerciali.",
                correct: false,
                explanation:
                    "Gli esempi comprendono ospedali, scuole e servizi clienti, quindi settori molto diversi. Il testo attribuisce agli indicatori una funzione generale di osservazione e controllo, non limitata al mondo commerciale.",
            },
            {
                id: "C",
                text: "Migliorare un indicatore equivale necessariamente a migliorare il fenomeno che l'indicatore dovrebbe rappresentare.",
                correct: true,
                explanation:
                    "Il primo paragrafo distingue esplicitamente la misura dall'obiettivo reale. Un tempo medio più basso, per esempio, può sembrare positivo senza dimostrare che i problemi degli utenti siano stati risolti meglio: l'indicatore è soltanto una rappresentazione parziale del fenomeno.",
            },
            {
                id: "D",
                text: "Un'organizzazione dovrebbe valutare le proprie attività esclusivamente attraverso giudizi soggettivi.",
                correct: false,
                explanation:
                    "Il testo non propone di sostituire i dati con valutazioni puramente soggettive. Nell'ultimo paragrafo difende l'uso delle misure, purché siano interpretate insieme ad altri elementi e non trasformate nell'unico criterio di giudizio.",
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
            "Nel primo paragrafo, dire che un indicatore diventa un «surrogato dell'obiettivo» significa che:",
        answers: [
            {
                id: "A",
                text: "viene trattato come sostituto dell'obiettivo reale, pur rappresentandone soltanto un aspetto.",
                correct: true,
                explanation:
                    "Nel contesto «surrogato» indica qualcosa che prende il posto di un'altra cosa senza coincidere perfettamente con essa. L'errore consiste quindi nel trasformare una misura parziale, come la durata di una chiamata, nell'equivalente dell'intera qualità del servizio.",
            },
            {
                id: "B",
                text: "viene eliminato perché considerato statisticamente poco affidabile.",
                correct: false,
                explanation:
                    "Il passaggio non descrive l'abbandono dell'indicatore, ma un suo uso eccessivo. Il problema nasce proprio quando la misura continua a essere utilizzata e assume un'importanza maggiore di quella che dovrebbe avere.",
            },
            {
                id: "C",
                text: "viene calcolato utilizzando soltanto dati approssimativi.",
                correct: false,
                explanation:
                    "Un indicatore può essere calcolato con grande precisione e rimanere comunque un surrogato imperfetto dell'obiettivo. La questione riguarda ciò che la misura rappresenta, non necessariamente l'accuratezza matematica del suo calcolo.",
            },
            {
                id: "D",
                text: "viene confrontato con un indicatore appartenente a un'altra organizzazione.",
                correct: false,
                explanation:
                    "Il confronto tra organizzazioni non è ciò che definisce il termine nel brano. «Surrogato» riguarda la sostituzione concettuale dell'obiettivo reale con una misura che ne rappresenta soltanto una parte.",
            },
        ],
    },

    {
        id: 3,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 4,
        passage: passages.passage01,
        question:
            "Quale funzione svolge principalmente il terzo paragrafo nell'argomentazione?",
        answers: [
            {
                id: "A",
                text: "Sostiene che gli indicatori debbano essere eliminati perché producono inevitabilmente comportamenti opportunistici.",
                correct: false,
                explanation:
                    "Il paragrafo afferma esplicitamente che rinunciare alle misure renderebbe più difficile individuare problemi e verificare gli interventi. La posizione dell'autore non è quindi un rifiuto degli indicatori.",
            },
            {
                id: "B",
                text: "Introduce un nuovo argomento indipendente riguardante esclusivamente il confronto tra organizzazioni.",
                correct: false,
                explanation:
                    "Il confronto tra periodi è soltanto uno degli usi citati. Il paragrafo risponde invece al problema sviluppato in precedenza e propone un modo più prudente di utilizzare le misure.",
            },
            {
                id: "C",
                text: "Dimostra che un singolo indicatore è sufficiente purché venga raccolto per un periodo abbastanza lungo.",
                correct: false,
                explanation:
                    "La durata della raccolta non elimina il limite di una misura parziale. Il testo propone infatti di combinare più indicatori e di osservare anche gli effetti inattesi prodotti dagli incentivi.",
            },
            {
                id: "D",
                text: "Evita una conclusione estrema e propone criteri per utilizzare gli indicatori senza confonderli con gli obiettivi.",
                correct: true,
                explanation:
                    "Dopo aver mostrato i rischi delle misure trasformate in obiettivi, l'autore precisa che misurare resta utile. La soluzione proposta consiste nell'usare indicatori complementari, controllare gli effetti prodotti e interpretare le variazioni invece di limitarsi al valore numerico.",
            },
        ],
    },

    {
        id: 4,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 5,
        passage: passages.passage01,
        question:
            "Quale situazione rappresenta meglio il meccanismo descritto nel secondo paragrafo?",
        answers: [
            {
                id: "A",
                text: "Un museo misura ogni anno il numero dei visitatori e confronta il dato con quello degli anni precedenti.",
                correct: false,
                explanation:
                    "La semplice raccolta di un dato non mostra ancora che la misura abbia modificato il comportamento di chi viene valutato. Il secondo paragrafo riguarda proprio l'effetto dell'incentivo creato dal criterio di valutazione.",
            },
            {
                id: "B",
                text: "Un centro assistenza premia gli operatori per il numero di pratiche chiuse e alcuni iniziano a privilegiare i casi più rapidi, lasciando indietro quelli complessi.",
                correct: true,
                explanation:
                    "Qui il criterio di valutazione modifica direttamente le scelte degli operatori. Il numero delle pratiche concluse può migliorare mentre la qualità complessiva del servizio peggiora per gli utenti con problemi più difficili: è esattamente il rischio illustrato dal testo.",
            },
            {
                id: "C",
                text: "Un'università sostituisce un questionario cartaceo con la stessa versione compilabile online.",
                correct: false,
                explanation:
                    "La modalità tecnica di raccolta cambia, ma non viene descritto alcun incentivo capace di alterare il comportamento valutato. Non è quindi un esempio del meccanismo centrale del secondo paragrafo.",
            },
            {
                id: "D",
                text: "Una biblioteca scopre che il numero dei prestiti è diminuito durante un mese in cui è rimasta chiusa per lavori.",
                correct: false,
                explanation:
                    "La diminuzione è spiegata da una causa esterna evidente, cioè la chiusura. Non mostra un comportamento modificato allo scopo di migliorare l'indicatore utilizzato per la valutazione.",
            },
        ],
    },

    {
        id: 5,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 4,
        passage: passages.passage02,
        question:
            "Quale idea di «autenticità» dell'edificio è maggiormente coerente con il brano?",
        answers: [
            {
                id: "A",
                text: "È autentico soltanto ciò che appartiene con certezza al momento della prima costruzione.",
                correct: false,
                explanation:
                    "Il testo contesta l'idea che la storia dell'edificio coincida esclusivamente con la sua fase iniziale. Modifiche successive possono essere diventate esse stesse testimonianze storiche significative.",
            },
            {
                id: "B",
                text: "L'autenticità può comprendere tracce appartenenti a fasi storiche differenti, che devono essere valutate prima di decidere cosa conservare.",
                correct: true,
                explanation:
                    "Il brano presenta l'edificio storico come risultato di trasformazioni stratificate nel tempo. Di conseguenza, la tutela non consiste automaticamente nel riportarlo a un unico momento originario, ma nel valutare il significato delle diverse fasi.",
            },
            {
                id: "C",
                text: "Qualunque modifica realizzata in passato deve essere conservata indipendentemente dal suo valore e dalle sue conseguenze.",
                correct: false,
                explanation:
                    "Il secondo paragrafo rifiuta anche questa regola automatica. Un'aggiunta può essere antica ma compromettere la stabilità o avere cancellato elementi di particolare importanza, quindi l'età non basta da sola a determinarne la conservazione.",
            },
            {
                id: "D",
                text: "L'autenticità dipende esclusivamente dalla somiglianza visiva dell'edificio restaurato con fotografie antiche.",
                correct: false,
                explanation:
                    "Il testo insiste su documentazione, successione delle fasi, materiali e riconoscibilità degli interventi. La sola somiglianza estetica non è quindi un criterio sufficiente per stabilire l'autenticità storica.",
            },
        ],
    },

    {
        id: 6,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 4,
        passage: passages.passage02,
        question:
            "Quale principio il brano rifiuta esplicitamente insieme all'idea di riportare sempre l'edificio allo stato originario?",
        answers: [
            {
                id: "A",
                text: "La necessità di documentare le trasformazioni avvenute nel tempo.",
                correct: false,
                explanation:
                    "La documentazione viene indicata come uno degli strumenti necessari per prendere decisioni consapevoli. Non è quindi un principio rifiutato dall'autore.",
            },
            {
                id: "B",
                text: "La possibilità di distinguere, quando opportuno, le parti storiche dagli interventi moderni.",
                correct: false,
                explanation:
                    "Il terzo paragrafo considera esplicitamente importante valutare la riconoscibilità degli interventi moderni. Questo criterio serve a non creare una falsa continuità storica.",
            },
            {
                id: "C",
                text: "La valutazione della sicurezza e dello stato di conservazione dell'edificio.",
                correct: false,
                explanation:
                    "Sicurezza e conservazione sono inclusi tra i fattori che devono essere confrontati. Il restauro non viene concepito come un'operazione puramente estetica.",
            },
            {
                id: "D",
                text: "La conservazione automatica di qualsiasi aggiunta soltanto perché appartiene al passato.",
                correct: true,
                explanation:
                    "Il testo critica due automatismi opposti: eliminare tutto ciò che non è originario e conservare tutto ciò che è antico. In entrambi i casi mancherebbe una valutazione del significato storico, dello stato materiale e delle conseguenze dell'intervento.",
            },
        ],
    },

    {
        id: 7,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages.passage02,
        question:
            "Quale intervento rispetterebbe maggiormente l'approccio descritto nell'ultimo paragrafo?",
        answers: [
            {
                id: "A",
                text: "Documentare accuratamente le modifiche, valutarne l'impatto e preferire, quando possibile, soluzioni che possano essere rimosse in futuro senza distruggere le parti storiche.",
                correct: true,
                explanation:
                    "L'alternativa combina i principi esplicitamente richiamati nel testo: documentazione, confronto tra diversi valori e reversibilità. L'obiettivo è intervenire senza trasformare una decisione attuale in un vincolo irreversibile per tutte le generazioni future.",
            },
            {
                id: "B",
                text: "Eliminare tutte le parti posteriori alla data di costruzione, anche quando possiedono un rilevante valore storico autonomo.",
                correct: false,
                explanation:
                    "Questa scelta applica proprio l'automatismo criticato nel secondo paragrafo. Una fase successiva può essere diventata una testimonianza storica importante e non deve essere cancellata soltanto perché non originaria.",
            },
            {
                id: "C",
                text: "Ricostruire liberamente le parti mancanti senza documentare quali elementi siano moderni, purché il risultato appaia antico.",
                correct: false,
                explanation:
                    "Un risultato visivamente uniforme potrebbe rendere difficile distinguere testimonianza storica e ricostruzione contemporanea. Il testo attribuisce invece importanza alla documentazione e alla leggibilità degli interventi.",
            },
            {
                id: "D",
                text: "Evitare qualunque intervento anche quando esistono problemi strutturali che mettono a rischio l'edificio.",
                correct: false,
                explanation:
                    "Conservare non significa necessariamente non intervenire. La sicurezza e lo stato di conservazione sono esplicitamente inclusi tra i fattori da considerare, quindi alcuni interventi possono essere indispensabili.",
            },
        ],
    },

    {
        id: 8,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages.passage03,
        question:
            "Secondo l'esempio del secondo paragrafo, come va interpretata correttamente una probabilità del 30% attribuita ripetutamente a eventi comparabili?",
        answers: [
            {
                id: "A",
                text: "L'evento si verificherà per il 30% della durata di ciascun singolo caso.",
                correct: false,
                explanation:
                    "La percentuale riguarda la frequenza attesa dell'evento in un insieme di casi comparabili, non la frazione temporale di ogni singolo evento. Un caso specifico può verificarsi oppure no.",
            },
            {
                id: "B",
                text: "L'evento deve verificarsi esattamente nel terzo caso di ogni gruppo di dieci previsioni.",
                correct: false,
                explanation:
                    "La probabilità non determina l'ordine in cui avverranno gli eventi. Anche un sistema ben calibrato può produrre sequenze irregolari; il rapporto di circa tre su dieci emerge su un numero sufficientemente grande di casi.",
            },
            {
                id: "C",
                text: "In un ampio insieme di casi di quel tipo, l'evento dovrebbe verificarsi approssimativamente tre volte ogni dieci.",
                correct: true,
                explanation:
                    "È precisamente la nozione di calibrazione illustrata dal testo. Una previsione del 30% non identifica quali singoli casi avranno esito positivo, ma indica la frequenza attesa su molti casi comparabili.",
            },
            {
                id: "D",
                text: "Il sistema non possiede informazioni utili e sceglie casualmente un valore compreso tra 0 e 100.",
                correct: false,
                explanation:
                    "Il brano distingue esplicitamente l'incertezza quantificata dall'ignoranza completa. Una probabilità può essere fondata sulle informazioni disponibili anche quando non permette una previsione certa del singolo caso.",
            },
        ],
    },

    {
        id: 9,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 4,
        passage: passages.passage03,
        question:
            "Una previsione passa dal 70% al 40% dopo l'arrivo di nuovi dati. Quale interpretazione è più coerente con il terzo paragrafo?",
        answers: [
            {
                id: "A",
                text: "La previsione iniziale era necessariamente irrazionale, perché una previsione corretta non può mai cambiare.",
                correct: false,
                explanation:
                    "Il testo sostiene esattamente il contrario: una valutazione razionale dipende dalle informazioni disponibili in quel momento. Nuovi dati possono giustificare un aggiornamento senza rendere automaticamente scorretto il ragionamento precedente.",
            },
            {
                id: "B",
                text: "Le due valutazioni possono essere entrambe ragionevoli se utilizzano correttamente informazioni disponibili in momenti differenti.",
                correct: true,
                explanation:
                    "Il terzo paragrafo presenta la probabilità come una valutazione condizionata alle informazioni disponibili. Quando queste cambiano, può cambiare razionalmente anche la probabilità attribuita all'evento.",
            },
            {
                id: "C",
                text: "Il passaggio al 40% dimostra che l'evento non potrà più verificarsi.",
                correct: false,
                explanation:
                    "Una probabilità del 40% indica ancora una possibilità significativa che l'evento si verifichi. Probabilità inferiore al 50% non significa impossibilità.",
            },
            {
                id: "D",
                text: "La nuova probabilità deve essere ignorata perché soltanto la prima previsione può essere considerata indipendente.",
                correct: false,
                explanation:
                    "Il brano attribuisce valore proprio all'aggiornamento sulla base di nuove informazioni. Non esiste alcun principio per cui la prima previsione possieda automaticamente uno status privilegiato.",
            },
        ],
    },

    {
        id: 10,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 5,
        passage: passages.passage03,
        question:
            "Quale osservazione metterebbe maggiormente in dubbio la buona calibrazione del sistema descritto nel secondo paragrafo?",
        answers: [
            {
                id: "A",
                text: "Su migliaia di casi valutati al 30%, l'evento si verifica stabilmente in circa il 90% dei casi.",
                correct: true,
                explanation:
                    "Un sistema ben calibrato dovrebbe associare previsioni del 30% a una frequenza osservata vicina al 30% su molti casi comparabili. Una frequenza stabile intorno al 90% indicherebbe quindi una forte discrepanza tra probabilità prevista e risultati osservati.",
            },
            {
                id: "B",
                text: "In una singola occasione valutata al 30%, l'evento effettivamente si verifica.",
                correct: false,
                explanation:
                    "Un evento con probabilità del 30% può perfettamente verificarsi. Il risultato di un singolo caso non permette di valutare la calibrazione, che richiede un insieme ampio di previsioni comparabili.",
            },
            {
                id: "C",
                text: "Due casi diversi ricevono probabilità differenti perché sono disponibili informazioni differenti.",
                correct: false,
                explanation:
                    "Attribuire probabilità diverse a situazioni diverse è compatibile con un sistema razionale. La calibrazione non richiede di assegnare lo stesso valore a ogni caso.",
            },
            {
                id: "D",
                text: "Una previsione viene aggiornata quando arrivano nuove informazioni pertinenti.",
                correct: false,
                explanation:
                    "L'aggiornamento è presentato dal brano come comportamento corretto, non come difetto. Una previsione dovrebbe poter cambiare quando cambia la base informativa su cui è costruita.",
            },
        ],
    },

    {
        id: 11,
        area: "linguistica-logica",
        category: "grammatica-sintassi",
        difficulty: 3,
        question:
            "Quale frase contiene un predicato nominale formato dal verbo «essere» usato come copula e da una parte nominale?",
        answers: [
            {
                id: "A",
                text: "Il professore è in aula.",
                correct: false,
                explanation:
                    "Qui «essere» indica la collocazione del soggetto in un luogo e ha quindi valore proprio, equivalente a «si trova». Non collega il soggetto a una qualità o a una denominazione che costituisca il nome del predicato.",
            },
            {
                id: "B",
                text: "La riunione è alle quindici.",
                correct: false,
                explanation:
                    "In questa frase «essere» serve a collocare temporalmente l'evento. Non forma una copula seguita da un nome o aggettivo riferito al soggetto.",
            },
            {
                id: "C",
                text: "I documenti sono sul tavolo.",
                correct: false,
                explanation:
                    "Anche qui «essere» indica una posizione, cioè «si trovano sul tavolo». Il sintagma «sul tavolo» è un complemento di luogo e non costituisce la parte nominale di un predicato nominale.",
            },
            {
                id: "D",
                text: "La spiegazione è convincente.",
                correct: true,
                explanation:
                    "«È» svolge funzione di copula e collega il soggetto «la spiegazione» all'aggettivo «convincente», che ne esprime una qualità. L'insieme «è convincente» costituisce quindi un predicato nominale.",
            },
        ],
    },

    {
        id: 12,
        area: "linguistica-logica",
        category: "grammatica-sintassi",
        difficulty: 4,
        question:
            "Quale frase utilizza il gerundio in modo corretto, facendo coincidere il suo soggetto implicito con quello della proposizione principale?",
        answers: [
            {
                id: "A",
                text: "Entrando nell'aula, le finestre erano già aperte.",
                correct: false,
                explanation:
                    "Il gerundio «entrando» richiederebbe come soggetto implicito chi compie l'azione di entrare. Il soggetto grammaticale della principale è invece «le finestre», che evidentemente non possono entrare nell'aula: si crea così un gerundio con soggetto incongruente.",
            },
            {
                id: "B",
                text: "Attraversando il cortile, Marta incontrò il direttore.",
                correct: true,
                explanation:
                    "Il soggetto implicito di «attraversando» è Marta, che è anche il soggetto della proposizione principale «Marta incontrò». Le due azioni sono quindi correttamente riferite alla stessa persona.",
            },
            {
                id: "C",
                text: "Studiando attentamente il documento, il problema risultò evidente.",
                correct: false,
                explanation:
                    "Chi studia il documento dovrebbe essere una persona, mentre il soggetto della principale è «il problema». La costruzione lascia quindi senza espressione il vero soggetto del gerundio e produce un collegamento sintattico improprio.",
            },
            {
                id: "D",
                text: "Arrivando alla stazione, il treno era già partito.",
                correct: false,
                explanation:
                    "La frase suggerirebbe grammaticalmente che sia «il treno» ad arrivare alla stazione, mentre il significato previsto è probabilmente che vi arrivi una persona non espressa. Per evitare l'ambiguità bisognerebbe esplicitare il soggetto, per esempio «Quando arrivai alla stazione...».",
            },
        ],
    },

    {
        id: 13,
        area: "linguistica-logica",
        category: "grammatica-sintassi",
        difficulty: 3,
        question:
            "Quale frase presenta correttamente l'accordo del participio passato con un pronome clitico oggetto diretto che lo precede?",
        answers: [
            {
                id: "A",
                text: "Le lettere? Le ho scritto ieri.",
                correct: false,
                explanation:
                    "Il pronome «le» sostituisce «le lettere» ed è un complemento oggetto femminile plurale collocato prima del participio. Nell'italiano standard il participio deve concordare: «le ho scritte».",
            },
            {
                id: "B",
                text: "I documenti? Gli ho controllati questa mattina.",
                correct: false,
                explanation:
                    "Per sostituire un complemento oggetto maschile plurale serve il pronome «li», non «gli». «Gli» svolge normalmente funzione di complemento di termine, come in «gli ho parlato».",
            },
            {
                id: "C",
                text: "Le relazioni? Le ho lette questa mattina.",
                correct: true,
                explanation:
                    "Il pronome «le» riprende il complemento oggetto femminile plurale «le relazioni». Poiché precede il participio passato, la forma corretta concorda in genere e numero: «lette».",
            },
            {
                id: "D",
                text: "La relazione? L'ho letti questa mattina.",
                correct: false,
                explanation:
                    "Il pronome eliso «l'» riprende qui «la relazione», femminile singolare. Il participio dovrebbe essere «letta», non «letti», che è una forma maschile plurale.",
            },
        ],
    },

    {
        id: 14,
        area: "linguistica-logica",
        category: "lessico-semantica",
        difficulty: 3,
        question:
            "Nel periodo «Il presidente rispose con tono perentorio, escludendo ogni ulteriore rinvio della decisione», quale significato assume «perentorio»?",
        answers: [
            {
                id: "A",
                text: "Categorico e deciso, tale da non ammettere facilmente repliche o rinvii.",
                correct: true,
                explanation:
                    "Nel contesto «perentorio» indica un tono fermo, definitivo e autoritativo. La precisazione secondo cui vengono esclusi ulteriori rinvii rafforza proprio questa interpretazione.",
            },
            {
                id: "B",
                text: "Incerto e formulato con grande cautela.",
                correct: false,
                explanation:
                    "Un tono incerto o esitante è semanticamente opposto a «perentorio». Nel periodo il presidente assume invece una posizione netta.",
            },
            {
                id: "C",
                text: "Ironico e intenzionalmente scherzoso.",
                correct: false,
                explanation:
                    "L'ironia può caratterizzare il tono di un'affermazione, ma non è il significato di «perentorio». Il termine riguarda soprattutto fermezza e carattere non dilatorio della comunicazione.",
            },
            {
                id: "D",
                text: "Molto dettagliato e ricco di spiegazioni tecniche.",
                correct: false,
                explanation:
                    "Una risposta può essere dettagliata senza essere perentoria e viceversa. L'aggettivo non indica la quantità di informazioni fornite, ma il carattere fermo e categorico dell'enunciato.",
            },
        ],
    },

    {
        id: 15,
        area: "linguistica-logica",
        category: "figure-retoriche",
        difficulty: 4,
        question:
            "Nella frase «Non adattiamo le persone alle regole, ma le regole alle persone», quale figura retorica è particolarmente evidente?",
        answers: [
            {
                id: "A",
                text: "Climax",
                correct: false,
                explanation:
                    "Il climax dispone parole o concetti secondo una progressione crescente o decrescente d'intensità. Nella frase non c'è una scala, ma un'inversione dell'ordine di due elementi.",
            },
            {
                id: "B",
                text: "Metonimia",
                correct: false,
                explanation:
                    "La metonimia sostituisce un termine con un altro legato da una relazione di contiguità, per esempio l'autore con l'opera. Qui nessun termine viene sostituito in questo modo.",
            },
            {
                id: "C",
                text: "Anafora",
                correct: false,
                explanation:
                    "L'anafora consiste nella ripetizione di una parola o espressione all'inizio di segmenti successivi. La frase presenta invece una struttura incrociata tra «persone» e «regole».",
            },
            {
                id: "D",
                text: "Chiasmo",
                correct: true,
                explanation:
                    "La seconda parte rovescia l'ordine degli elementi della prima: «persone → regole» diventa «regole → persone». Questa disposizione incrociata, schematizzabile come AB-BA, è caratteristica del chiasmo.",
            },
        ],
    },

    {
        id: 16,
        area: "linguistica-logica",
        category: "logica-proposizionale",
        difficulty: 4,
        question:
            "Si sa che esattamente una tra le proposizioni P e Q è vera. Inoltre R è vera se e solo se P è vera. Sapendo che R è falsa, quale conclusione segue necessariamente?",
        answers: [
            {
                id: "A",
                text: "P e Q sono entrambe false.",
                correct: false,
                explanation:
                    "Il vincolo iniziale stabilisce che esattamente una tra P e Q deve essere vera. Non possono quindi essere entrambe false, indipendentemente dal valore di R.",
            },
            {
                id: "B",
                text: "P è vera e Q è falsa.",
                correct: false,
                explanation:
                    "Poiché R è equivalente a P, le due proposizioni devono avere lo stesso valore di verità. Se R è falsa, anche P deve essere falsa, quindi questa alternativa è incompatibile con il bicondizionale.",
            },
            {
                id: "C",
                text: "P è falsa e Q è vera.",
                correct: true,
                explanation:
                    "Da «R se e solo se P» segue che R e P hanno lo stesso valore di verità. R è falsa, dunque P è falsa; poiché esattamente una tra P e Q è vera, Q deve necessariamente essere vera.",
            },
            {
                id: "D",
                text: "Non è possibile determinare il valore di Q.",
                correct: false,
                explanation:
                    "Il valore di Q diventa determinabile proprio grazie alla combinazione dei due vincoli. Stabilito che P è falsa, la condizione «esattamente una tra P e Q è vera» obbliga Q a essere vera.",
            },
        ],
        resources: [
            {
                id: "bicondizionale-o-esclusivo",
                type: "diagram",
                label: "Schema logico di bicondizionale e alternativa esclusiva",
                src: `${import.meta.env.BASE_URL}resources/diagrams/bicondizionale-o-esclusivo.png`,
                alt: "Schema dei valori di verità per P, Q e R con R equivalente a P ed esattamente una tra P e Q vera",
                caption:
                    "Lo schema aiuta a combinare il bicondizionale R ↔ P con il vincolo di alternativa esclusiva tra P e Q.",
            },
        ],
    },

    {
        id: 17,
        area: "linguistica-logica",
        category: "sufficienza-dei-dati",
        difficulty: 5,
        question:
            "Siano x e y numeri interi positivi con x > y. Si vuole determinare il valore di x. Informazione I: x + y = 14. Informazione II: xy = 45. Quale affermazione è corretta?",
        answers: [
            {
                id: "A",
                text: "L'informazione I, da sola, è sufficiente.",
                correct: false,
                explanation:
                    "Con x+y=14 e x>y esistono più coppie possibili, per esempio (13,1), (12,2), (11,3) e così via. Non è quindi possibile determinare un unico valore di x utilizzando soltanto l'informazione I.",
            },
            {
                id: "B",
                text: "Le due informazioni insieme sono sufficienti, ma nessuna delle due lo è da sola.",
                correct: true,
                explanation:
                    "L'informazione II da sola permette più coppie positive, come (45,1), (15,3) e (9,5). Combinandola con x+y=14 rimane soltanto la coppia (9,5), quindi x=9: insieme i dati determinano un'unica soluzione.",
            },
            {
                id: "C",
                text: "L'informazione II, da sola, è sufficiente.",
                correct: false,
                explanation:
                    "Il prodotto 45 può essere ottenuto da più coppie di interi positivi con x>y. Per esempio 45×1, 15×3 e 9×5 soddisfano tutte l'informazione II, quindi x non è determinato.",
            },
            {
                id: "D",
                text: "Nemmeno le due informazioni insieme sono sufficienti.",
                correct: false,
                explanation:
                    "Le condizioni simultanee x+y=14 e xy=45 individuano le radici dell'equazione t²−14t+45=0, cioè 5 e 9. Poiché è specificato x>y, si ottiene univocamente x=9 e y=5.",
            },
        ],
    },

    {
        id: 18,
        area: "linguistica-logica",
        category: "problemi-quantitativi",
        difficulty: 4,
        question:
            "La somma delle età attuali di Anna e Luca è 40 anni. Tra 4 anni, Anna avrà il doppio dell'età che Luca aveva 2 anni fa. Quanti anni ha oggi Luca?",
        answers: [
            {
                id: "A",
                text: "12 anni",
                correct: false,
                explanation:
                    "Se Luca avesse 12 anni, Anna ne avrebbe 28. Tra quattro anni Anna avrebbe 32 anni, mentre Luca due anni fa ne avrebbe avuti 10; il doppio sarebbe 20, quindi la condizione non sarebbe rispettata.",
            },
            {
                id: "B",
                text: "14 anni",
                correct: false,
                explanation:
                    "Con Luca a 14 anni, Anna ne avrebbe 26. Tra quattro anni Anna avrebbe 30 anni, mentre il doppio dell'età di Luca due anni fa sarebbe 2×12=24.",
            },
            {
                id: "C",
                text: "18 anni",
                correct: false,
                explanation:
                    "Se Luca avesse 18 anni, Anna ne avrebbe 22. Tra quattro anni Anna avrebbe 26 anni, mentre il doppio dell'età di Luca due anni fa sarebbe 2×16=32, quindi il rapporto sarebbe invertito rispetto alla condizione.",
            },
            {
                id: "D",
                text: "16 anni",
                correct: true,
                explanation:
                    "Indicando con L l'età di Luca, Anna ha 40−L anni. La condizione dà (40−L)+4 = 2(L−2), quindi 44−L=2L−4, 48=3L e L=16; Anna ha quindi 24 anni.",
            },
        ],
    },

    {
        id: 19,
        area: "linguistica-logica",
        category: "ragionamento-numerico",
        difficulty: 3,
        question:
            "Due controlli periodici vengono effettuati oggi nello stesso giorno. Il primo si ripete ogni 6 giorni e il secondo ogni 8 giorni. Dopo quanti giorni coincideranno nuovamente per la prima volta?",
        answers: [
            {
                id: "A",
                text: "24 giorni",
                correct: true,
                explanation:
                    "Bisogna trovare il minimo comune multiplo di 6 e 8. I multipli di 6 sono 6, 12, 18, 24..., quelli di 8 sono 8, 16, 24...; il primo valore comune positivo è quindi 24.",
            },
            {
                id: "B",
                text: "14 giorni",
                correct: false,
                explanation:
                    "14 è la somma dei due intervalli, ma sommare le periodicità non determina quando due cicli coincidono. Serve un numero che sia contemporaneamente multiplo sia di 6 sia di 8.",
            },
            {
                id: "C",
                text: "48 giorni",
                correct: false,
                explanation:
                    "48 è effettivamente un multiplo comune di 6 e 8, quindi i controlli coinciderebbero anche dopo 48 giorni. Non è però la prima coincidenza successiva, perché entrambi si svolgono già al giorno 24.",
            },
            {
                id: "D",
                text: "12 giorni",
                correct: false,
                explanation:
                    "12 è un multiplo di 6 ma non di 8. Dopo 12 giorni si svolgerebbe quindi il primo controllo, ma non il secondo.",
            },
        ],
    },

    {
        id: 20,
        area: "linguistica-logica",
        category: "analogie-logiche",
        difficulty: 2,
        question:
            "Completa l'analogia individuando la relazione corretta: «termometro : temperatura = dinamometro : ___».",
        answers: [
            {
                id: "A",
                text: "massa",
                correct: false,
                explanation:
                    "La massa viene normalmente misurata mediante una bilancia. Un dinamometro non misura direttamente la massa, anche se il peso di un corpo dipende dalla sua massa e dall'accelerazione di gravità.",
            },
            {
                id: "B",
                text: "pressione",
                correct: false,
                explanation:
                    "La pressione atmosferica viene misurata con il barometro, mentre altri tipi di pressione possono essere misurati con manometri. Non è la grandezza associata al dinamometro nell'analogia.",
            },
            {
                id: "C",
                text: "forza",
                correct: true,
                explanation:
                    "La relazione è «strumento : grandezza misurata». Il termometro misura la temperatura e il dinamometro misura una forza, spesso sfruttando la deformazione elastica di una molla opportunamente calibrata.",
            },
            {
                id: "D",
                text: "volume",
                correct: false,
                explanation:
                    "Il volume può essere misurato, per esempio, con recipienti graduati o ricavato geometricamente. Il dinamometro è invece uno strumento destinato alla misura delle forze.",
            },
        ],
    },
    {
        id: 21,
        area: "linguistica-logica",
        category: "ortografia",
        difficulty: 2,
        question:
            "Quale frase è ortograficamente corretta secondo l'italiano standard?",
        answers: [
            {
                id: "A",
                text: "Qual è l'obiettivo a cui stai lavorando da un po'?",
                correct: true,
                explanation:
                    "La grafia è corretta in entrambi i punti potenzialmente insidiosi. «Qual» deriva da troncamento e non richiede apostrofo davanti a «è», mentre «po'» è la forma tronca di «poco» e richiede l'apostrofo.",
            },
            {
                id: "B",
                text: "Qual'è l'obiettivo a cui stai lavorando da un po'?",
                correct: false,
                explanation:
                    "L'errore è «qual'è». Nella locuzione «qual è» non avviene un'elisione ma un troncamento di «quale», quindi non si inserisce l'apostrofo.",
            },
            {
                id: "C",
                text: "Qual è l'obiettivo a cui stai lavorando da un pò?",
                correct: false,
                explanation:
                    "La forma «pò» con accento è errata. «Po'» deriva dal troncamento di «poco» e si scrive con apostrofo, non con accento.",
            },
            {
                id: "D",
                text: "Qual'è l'obiettivo a cui stai lavorando da un pò?",
                correct: false,
                explanation:
                    "Questa frase contiene entrambi gli errori: «qual'è» dovrebbe essere «qual è» e «pò» dovrebbe essere «po'». Sono due fenomeni ortografici differenti e vanno quindi distinti.",
            },
        ],
    },

    {
        id: 22,
        area: "linguistica-logica",
        category: "parti-del-discorso",
        difficulty: 3,
        question:
            "In quale frase la parola «molto» svolge funzione di avverbio?",
        answers: [
            {
                id: "A",
                text: "Ho letto molti articoli sull'argomento.",
                correct: false,
                explanation:
                    "In questa frase «molti» accompagna il nome «articoli» e concorda con esso nel genere e nel numero. Svolge quindi funzione di aggettivo indefinito, non di avverbio.",
            },
            {
                id: "B",
                text: "Molti hanno già consegnato il modulo.",
                correct: false,
                explanation:
                    "Qui «molti» non accompagna un nome espresso ma lo sostituisce, indicando molte persone. Ha quindi valore di pronome indefinito.",
            },
            {
                id: "C",
                text: "Il relatore ha parlato molto lentamente.",
                correct: true,
                explanation:
                    "«Molto» modifica l'avverbio «lentamente» precisandone l'intensità e rimane invariabile. In questo uso è dunque un avverbio di quantità.",
            },
            {
                id: "D",
                text: "È rimasto ancora molto lavoro da completare.",
                correct: false,
                explanation:
                    "Qui «molto» determina la quantità del nome «lavoro». È quindi un aggettivo indefinito riferito a un sostantivo, anche se la forma maschile singolare coincide graficamente con quella dell'avverbio.",
            },
        ],
    },

    {
        id: 23,
        area: "linguistica-logica",
        category: "grammatica-sintassi",
        difficulty: 3,
        question:
            "Quale trasformazione passiva conserva correttamente significato e tempo verbale della frase «I tecnici controlleranno i dispositivi domani»?",
        answers: [
            {
                id: "A",
                text: "I tecnici saranno controllati dai dispositivi domani.",
                correct: false,
                explanation:
                    "La frase inverte impropriamente i ruoli semantici: nell'originale sono i tecnici a compiere il controllo e i dispositivi a subirlo. Nella trasformazione passiva il complemento oggetto originario deve diventare soggetto.",
            },
            {
                id: "B",
                text: "I dispositivi saranno controllati dai tecnici domani.",
                correct: true,
                explanation:
                    "«I dispositivi», complemento oggetto della frase attiva, diventa soggetto della passiva. Il futuro «controlleranno» viene correttamente trasformato in «saranno controllati», mentre «i tecnici» diventa complemento d'agente.",
            },
            {
                id: "C",
                text: "I dispositivi sono stati controllati dai tecnici domani.",
                correct: false,
                explanation:
                    "I ruoli sintattici sono corretti, ma il tempo verbale non lo è. «Sono stati controllati» è un passato prossimo, mentre la frase originale indica un'azione futura.",
            },
            {
                id: "D",
                text: "I dispositivi controllerebbero i tecnici domani.",
                correct: false,
                explanation:
                    "La frase rimane attiva e inoltre introduce un condizionale non presente nell'originale. Cambia quindi sia la struttura sintattica sia il valore temporale e modale.",
            },
        ],
    },

    {
        id: 24,
        area: "linguistica-logica",
        category: "discorso-indiretto",
        difficulty: 4,
        question:
            "Trasforma correttamente nel discorso indiretto la frase pronunciata ieri da Maria: «Domani partirò per Torino».",
        answers: [
            {
                id: "A",
                text: "Maria disse che domani partirà per Torino.",
                correct: false,
                explanation:
                    "La frase mantiene sia il riferimento temporale sia il futuro come se il punto di vista fosse ancora quello del discorso diretto. Poiché il verbo introduttivo è al passato, occorre normalmente adattare anche questi riferimenti.",
            },
            {
                id: "B",
                text: "Maria disse che il giorno prima era partita per Torino.",
                correct: false,
                explanation:
                    "Questa trasformazione colloca la partenza prima del momento in cui Maria parlò. Nell'originale «domani» indica invece un evento successivo rispetto all'atto del parlare.",
            },
            {
                id: "C",
                text: "Maria disse che quel giorno partiva per Torino.",
                correct: false,
                explanation:
                    "«Quel giorno» sposterebbe la partenza allo stesso giorno della dichiarazione. Nell'originale, invece, Maria colloca esplicitamente l'evento nel giorno successivo.",
            },
            {
                id: "D",
                text: "Maria disse che sarebbe partita per Torino il giorno dopo.",
                correct: true,
                explanation:
                    "Il futuro rispetto a un momento passato viene normalmente espresso con il condizionale passato: «sarebbe partita». Anche «domani» viene adattato al nuovo punto di vista temporale e diventa «il giorno dopo».",
            },
        ],
    },

    {
        id: 25,
        area: "linguistica-logica",
        category: "registro-linguistico",
        difficulty: 3,
        question:
            "Quale frase è più adatta a una comunicazione formale indirizzata a un ente pubblico?",
        answers: [
            {
                id: "A",
                text: "La invitiamo a trasmettere la documentazione richiesta entro il termine indicato.",
                correct: true,
                explanation:
                    "La frase utilizza un registro formale, impersonale e preciso, adatto alla comunicazione amministrativa. Il lessico è neutro e non contiene espressioni colloquiali o confidenziali.",
            },
            {
                id: "B",
                text: "Mandateci quei documenti appena potete, così sistemiamo tutto.",
                correct: false,
                explanation:
                    "La frase è comprensibile ma utilizza un registro colloquiale, soprattutto in «mandateci», «quei documenti» e «sistemiamo tutto». In una comunicazione istituzionale sono preferibili formulazioni più precise e meno familiari.",
            },
            {
                id: "C",
                text: "Se riuscite, fateci avere un po' di roba entro la data che vi abbiamo detto.",
                correct: false,
                explanation:
                    "Espressioni come «un po' di roba» e «la data che vi abbiamo detto» sono vaghe e colloquiali. Un testo amministrativo dovrebbe identificare chiaramente la documentazione e il termine previsto.",
            },
            {
                id: "D",
                text: "Dateci tutto in tempo, perché poi non possiamo starvi dietro.",
                correct: false,
                explanation:
                    "La formulazione è diretta e informale e contiene l'espressione colloquiale «starvi dietro». Non possiede il grado di neutralità e cortesia convenzionale richiesto da una comunicazione formale.",
            },
        ],
    },

    {
        id: 26,
        area: "linguistica-logica",
        category: "lessico-semantica",
        difficulty: 3,
        question:
            "Nel periodo «L'errore nella raccolta dei dati potrebbe inficiare le conclusioni dello studio», che cosa significa «inficiare»?",
        answers: [
            {
                id: "A",
                text: "Confermare definitivamente",
                correct: false,
                explanation:
                    "«Inficiare» non significa rafforzare o confermare qualcosa. Nel contesto l'errore costituisce invece una possibile causa di indebolimento dell'attendibilità delle conclusioni.",
            },
            {
                id: "B",
                text: "Rendere più dettagliate",
                correct: false,
                explanation:
                    "Aumentare il livello di dettaglio di una conclusione è un'operazione diversa. Il verbo riguarda la validità o l'efficacia di qualcosa, non la quantità delle informazioni fornite.",
            },
            {
                id: "C",
                text: "Compromettere o rendere meno valide",
                correct: true,
                explanation:
                    "«Inficiare» significa compromettere la validità, l'efficacia o l'attendibilità di qualcosa. Nel periodo, un errore metodologico potrebbe quindi rendere le conclusioni meno solide o persino non affidabili.",
            },
            {
                id: "D",
                text: "Rendere pubbliche",
                correct: false,
                explanation:
                    "La pubblicazione o diffusione di risultati non è implicata dal verbo. «Inficiare» riguarda la loro validità, non il fatto che vengano comunicati all'esterno.",
            },
        ],
    },

    {
        id: 27,
        area: "linguistica-logica",
        category: "punteggiatura",
        difficulty: 3,
        question:
            "In quale frase i due punti sono utilizzati correttamente per introdurre una spiegazione di quanto appena affermato?",
        answers: [
            {
                id: "A",
                text: "Il problema: principale era la mancanza di tempo.",
                correct: false,
                explanation:
                    "I due punti separano impropriamente il nome «problema» dal suo aggettivo «principale». La punteggiatura non deve spezzare elementi strettamente legati all'interno dello stesso sintagma.",
            },
            {
                id: "B",
                text: "C'era un solo problema: mancava il documento originale.",
                correct: true,
                explanation:
                    "La seconda proposizione chiarisce precisamente quale fosse il problema anticipato nella prima. I due punti sono quindi correttamente utilizzati con funzione esplicativa.",
            },
            {
                id: "C",
                text: "Il responsabile ha: approvato la proposta.",
                correct: false,
                explanation:
                    "I due punti non possono separare l'ausiliare o il verbo dal proprio complemento in questo modo. Non viene introdotta né una spiegazione né un'elencazione autonoma.",
            },
            {
                id: "D",
                text: "Gli studenti: hanno terminato l'esame.",
                correct: false,
                explanation:
                    "La punteggiatura separa senza motivo il soggetto «gli studenti» dal predicato «hanno terminato». Tra soggetto e verbo non si inseriscono normalmente i due punti.",
            },
        ],
    },

    {
        id: 28,
        area: "linguistica-logica",
        category: "pronomi",
        difficulty: 4,
        question:
            "Nella frase «Avevo bisogno di tre quaderni e ne ho comprati tre», quale funzione svolge «ne»?",
        answers: [
            {
                id: "A",
                text: "Sostituisce un complemento di luogo e significa «da lì».",
                correct: false,
                explanation:
                    "«Ne» può effettivamente avere valore locativo in frasi come «ne sono uscito», con il significato di «da lì». Nel periodo proposto, però, il riferimento è ai quaderni e non a un luogo.",
            },
            {
                id: "B",
                text: "Svolge funzione di soggetto del verbo «ho comprati».",
                correct: false,
                explanation:
                    "Il soggetto sottinteso del verbo è «io». «Ne» è invece un pronome clitico collegato all'oggetto quantificato dall'espressione «tre».",
            },
            {
                id: "C",
                text: "Sostituisce un complemento di termine e significa «a loro».",
                correct: false,
                explanation:
                    "Il complemento di termine è normalmente ripreso da forme come «gli» o «le». Qui non significa «a loro», ma richiama l'insieme dei quaderni da cui viene indicata una quantità.",
            },
            {
                id: "D",
                text: "Ha valore partitivo e riprende «dei quaderni».",
                correct: true,
                explanation:
                    "La costruzione può essere esplicitata come «ho comprato tre dei quaderni di cui avevo bisogno». «Ne» ha quindi valore partitivo e consente di evitare la ripetizione del nome già menzionato.",
            },
        ],
    },

    {
        id: 29,
        area: "linguistica-logica",
        category: "logica-vincoli",
        difficulty: 4,
        question:
            "Quattro interruttori A, B, C e D possono essere accesi o spenti. Esattamente due sono accesi. A e B non possono essere entrambi accesi; se C è acceso, anche A è acceso; D è spento. Quali interruttori sono necessariamente accesi?",
        answers: [
            {
                id: "A",
                text: "A e C",
                correct: true,
                explanation:
                    "Poiché D è spento, i due interruttori accesi devono essere scelti tra A, B e C. Se C fosse spento, per averne due accesi servirebbero A e B insieme, ma ciò è vietato; quindi C è acceso e, per la seconda regola, anche A deve esserlo.",
            },
            {
                id: "B",
                text: "A e B",
                correct: false,
                explanation:
                    "La prima condizione vieta esplicitamente che A e B siano contemporaneamente accesi. Questa configurazione non può quindi soddisfare i vincoli.",
            },
            {
                id: "C",
                text: "B e C",
                correct: false,
                explanation:
                    "Se C è acceso, la regola impone che sia acceso anche A. La configurazione B-C richiederebbe quindi almeno tre interruttori accesi oppure violerebbe direttamente il vincolo su C.",
            },
            {
                id: "D",
                text: "B e D",
                correct: false,
                explanation:
                    "D è dichiarato esplicitamente spento. Qualunque configurazione che lo consideri acceso è quindi immediatamente incompatibile con le premesse.",
            },
        ],
    },

    {
        id: 30,
        area: "linguistica-logica",
        category: "logica-spaziale",
        difficulty: 3,
        question:
            "Anna, Bruno, Carla e Diego sono seduti ai quattro lati di un tavolo quadrato, tutti rivolti verso il centro. Anna è di fronte a Bruno e Carla siede immediatamente alla destra di Anna. Chi è seduto di fronte a Carla?",
        answers: [
            {
                id: "A",
                text: "Anna",
                correct: false,
                explanation:
                    "Anna è adiacente a Carla perché Carla si trova immediatamente alla sua destra. In un tavolo quadrato, una persona non può essere contemporaneamente accanto e di fronte alla stessa persona.",
            },
            {
                id: "B",
                text: "Bruno",
                correct: false,
                explanation:
                    "Bruno occupa il posto di fronte ad Anna. Di conseguenza è adiacente a Carla, non nella posizione opposta rispetto a lei.",
            },
            {
                id: "C",
                text: "Diego",
                correct: true,
                explanation:
                    "Fissando Anna in un lato del tavolo, Bruno deve occupare quello opposto e Carla uno dei due lati adiacenti, precisamente alla destra di Anna. Rimane a Diego l'unico lato libero, che è esattamente di fronte a Carla.",
            },
            {
                id: "D",
                text: "Carla stessa",
                correct: false,
                explanation:
                    "Il posto di fronte a una persona è un'altra posizione del tavolo. Nessuno può essere seduto di fronte a se stesso nella configurazione descritta.",
            },
        ],
    },

    {
        id: 31,
        area: "linguistica-logica",
        category: "combinatoria",
        difficulty: 3,
        question:
            "A una riunione partecipano 8 persone. Se ciascuna coppia di persone si stringe la mano esattamente una volta, quante strette di mano avvengono in totale?",
        answers: [
            {
                id: "A",
                text: "16",
                correct: false,
                explanation:
                    "16 non conta tutte le possibili coppie tra gli otto partecipanti. Ogni persona può stringere la mano a sette altre persone, ma bisogna poi evitare di contare due volte la stessa coppia.",
            },
            {
                id: "B",
                text: "28",
                correct: true,
                explanation:
                    "Le coppie non ordinate di 8 persone sono 8×7/2 = 28. La divisione per 2 è necessaria perché la stretta tra Anna e Bruno è la stessa della stretta tra Bruno e Anna.",
            },
            {
                id: "C",
                text: "56",
                correct: false,
                explanation:
                    "8×7=56 conta ogni stretta due volte, una per ciascun ordine possibile dei due partecipanti. Poiché una stretta è un incontro tra una coppia senza ordine, bisogna dividere per 2.",
            },
            {
                id: "D",
                text: "64",
                correct: false,
                explanation:
                    "64=8² conterebbe anche otto ipotetiche coppie di ciascuna persona con se stessa e distinguerebbe impropriamente l'ordine delle persone. Nessuna delle due cose è prevista dal problema.",
            },
        ],
    },

    {
        id: 32,
        area: "linguistica-logica",
        category: "probabilita",
        difficulty: 4,
        question:
            "Una moneta equilibrata viene lanciata tre volte. Qual è la probabilità di ottenere almeno una volta testa?",
        answers: [
            {
                id: "A",
                text: "1/2",
                correct: false,
                explanation:
                    "1/2 è la probabilità di ottenere testa in un singolo lancio. Con tre tentativi indipendenti aumentano le possibilità che testa compaia almeno una volta.",
            },
            {
                id: "B",
                text: "3/8",
                correct: false,
                explanation:
                    "3/8 corrisponde alla probabilità di ottenere esattamente una testa nei tre lanci. Il quesito include invece anche i casi con due teste e con tre teste.",
            },
            {
                id: "C",
                text: "3/4",
                correct: false,
                explanation:
                    "Il valore non comprende correttamente tutti gli otto esiti equiprobabili dei tre lanci. Per «almeno una testa» conviene calcolare l'evento complementare, cioè nessuna testa.",
            },
            {
                id: "D",
                text: "7/8",
                correct: true,
                explanation:
                    "L'unico modo per non ottenere mai testa è avere tre croci, con probabilità (1/2)³=1/8. Per complementarità, la probabilità di almeno una testa è quindi 1−1/8=7/8.",
            },
        ],
    },

    {
        id: 33,
        area: "linguistica-logica",
        category: "ragionamento-calendario",
        difficulty: 3,
        question:
            "In un determinato anno il 6 aprile cade di lunedì. In quale giorno della settimana cade il 25 aprile dello stesso anno?",
        answers: [
            {
                id: "A",
                text: "Sabato",
                correct: true,
                explanation:
                    "Dal 6 al 25 aprile trascorrono 19 giorni. Poiché 19 = 14 + 5, dopo due settimane complete bisogna avanzare di altri cinque giorni: da lunedì si arriva a sabato.",
            },
            {
                id: "B",
                text: "Venerdì",
                correct: false,
                explanation:
                    "Venerdì sarebbe quattro giorni dopo lunedì. Il resto della divisione di 19 per 7 è invece 5, quindi occorre avanzare di cinque giorni.",
            },
            {
                id: "C",
                text: "Domenica",
                correct: false,
                explanation:
                    "Domenica è sei giorni dopo lunedì. Per raggiungerla servirebbe uno scarto congruente a 6 modulo 7, mentre 19 è congruente a 5.",
            },
            {
                id: "D",
                text: "Lunedì",
                correct: false,
                explanation:
                    "Il giorno della settimana sarebbe nuovamente lunedì soltanto dopo un numero di giorni multiplo di 7. Diciannove non è un multiplo di 7.",
            },
        ],
    },

    {
        id: 34,
        area: "linguistica-logica",
        category: "ragionamento-numerico",
        difficulty: 4,
        question:
            "Quale dei seguenti numeri, quando viene diviso per 5, lascia resto 2 e, quando viene diviso per 3, lascia resto 1?",
        answers: [
            {
                id: "A",
                text: "12",
                correct: false,
                explanation:
                    "12 diviso per 5 lascia effettivamente resto 2, ma 12 è divisibile esattamente per 3 e lascia quindi resto 0. Deve essere soddisfatta contemporaneamente anche la seconda condizione.",
            },
            {
                id: "B",
                text: "17",
                correct: false,
                explanation:
                    "17 diviso per 5 lascia resto 2, ma 17=15+2 e quindi nella divisione per 3 lascia resto 2. Non soddisfa la seconda richiesta.",
            },
            {
                id: "C",
                text: "7",
                correct: true,
                explanation:
                    "7=5+2, quindi nella divisione per 5 lascia resto 2. Inoltre 7=2×3+1, quindi nella divisione per 3 lascia resto 1: entrambe le condizioni sono rispettate.",
            },
            {
                id: "D",
                text: "27",
                correct: false,
                explanation:
                    "27 diviso per 5 lascia resto 2, ma è esattamente divisibile per 3. Il resto della seconda divisione è quindi 0 e non 1.",
            },
        ],
    },

    {
        id: 35,
        area: "linguistica-logica",
        category: "logica-selezione",
        difficulty: 4,
        question:
            "Da cinque progetti A, B, C, D ed E devono esserne scelti esattamente tre. A e B non possono essere scelti insieme; se viene scelto C deve essere scelto anche D; E può essere scelto soltanto se viene scelto A. Quale terna è compatibile con tutte le regole?",
        answers: [
            {
                id: "A",
                text: "A, B, D",
                correct: false,
                explanation:
                    "La terna viola direttamente la prima regola, secondo cui A e B non possono essere scelti contemporaneamente. Le altre condizioni non possono rendere valida una combinazione che infrange questo vincolo.",
            },
            {
                id: "B",
                text: "A, D, E",
                correct: true,
                explanation:
                    "A e B non compaiono insieme, C non è scelto e quindi non attiva alcun obbligo, mentre E è accompagnato da A come richiesto. Tutti e tre i vincoli sono quindi rispettati.",
            },
            {
                id: "C",
                text: "B, C, E",
                correct: false,
                explanation:
                    "La scelta di C richiederebbe anche D, che manca. Inoltre E può essere scelto soltanto insieme ad A, anch'esso assente: la terna viola quindi due regole.",
            },
            {
                id: "D",
                text: "A, C, E",
                correct: false,
                explanation:
                    "La presenza di E è compatibile con A, ma la scelta di C rende obbligatoria anche quella di D. Poiché D non compare nella terna, la configurazione non è ammessa.",
            },
        ],
    },

    {
        id: 36,
        area: "linguistica-logica",
        category: "relazioni-di-parentela",
        difficulty: 2,
        question:
            "Marta è sorella di Luca. Luca è il padre di Giulia. Paolo è fratello di Marta. Qual è il rapporto di parentela tra Paolo e Giulia?",
        answers: [
            {
                id: "A",
                text: "Paolo è il padre di Giulia.",
                correct: false,
                explanation:
                    "Il padre di Giulia è esplicitamente indicato come Luca. Paolo è invece fratello di una sorella di Luca e quindi appartiene alla stessa generazione del padre.",
            },
            {
                id: "B",
                text: "Paolo è il fratello di Giulia.",
                correct: false,
                explanation:
                    "Paolo non appartiene alla generazione di Giulia. È fratello di Marta, che a sua volta è sorella del padre di Giulia.",
            },
            {
                id: "C",
                text: "Paolo è il nonno di Giulia.",
                correct: false,
                explanation:
                    "Un nonno sarebbe il padre del padre o della madre di Giulia. Paolo è invece fratello del padre di Giulia e appartiene quindi a una relazione collaterale.",
            },
            {
                id: "D",
                text: "Paolo è lo zio di Giulia.",
                correct: true,
                explanation:
                    "Marta e Paolo sono fratelli e Marta è sorella di Luca, quindi anche Paolo è fratello di Luca. Poiché Luca è padre di Giulia, suo fratello Paolo è lo zio paterno di Giulia.",
            },
        ],
    },

    {
        id: 37,
        area: "linguistica-logica",
        category: "interpretazione-di-dati",
        difficulty: 3,
        question:
            "Il numero di iscritti a quattro corsi è cambiato dal primo al secondo semestre come segue: corso A da 42 a 56; corso B da 60 a 69; corso C da 35 a 47; corso D da 80 a 88. Quale corso ha registrato il maggiore aumento ASSOLUTO di iscritti?",
        answers: [
            {
                id: "A",
                text: "Corso A",
                correct: true,
                explanation:
                    "Il corso A aumenta di 56−42=14 iscritti. Gli aumenti degli altri corsi sono rispettivamente 9, 12 e 8, quindi 14 è l'incremento assoluto maggiore.",
            },
            {
                id: "B",
                text: "Corso B",
                correct: false,
                explanation:
                    "Il corso B passa da 60 a 69 iscritti e aumenta quindi di 9. Il fatto che abbia più iscritti complessivi del corso A non significa che abbia avuto l'aumento assoluto maggiore.",
            },
            {
                id: "C",
                text: "Corso C",
                correct: false,
                explanation:
                    "Il corso C aumenta di 47−35=12 iscritti. È un incremento superiore a quelli di B e D, ma resta inferiore ai 14 iscritti aggiuntivi del corso A.",
            },
            {
                id: "D",
                text: "Corso D",
                correct: false,
                explanation:
                    "Il corso D possiede il numero finale di iscritti più elevato, 88, ma cresce soltanto di 8 unità rispetto alle 80 iniziali. Il quesito richiede la variazione assoluta, non il valore finale più grande.",
            },
        ],
    },

    {
        id: 38,
        area: "linguistica-logica",
        category: "ragionamento-algebrico",
        difficulty: 4,
        question:
            "Due simboli rappresentano numeri interi. Si sa che ▲ + ■ = 10 e ▲ + ▲ + ■ = 17. Quale valore rappresenta ▲?",
        answers: [
            {
                id: "A",
                text: "3",
                correct: false,
                explanation:
                    "Se ▲ valesse 3, dalla prima relazione si avrebbe ■=7. La seconda diventerebbe 3+3+7=13 e non 17.",
            },
            {
                id: "B",
                text: "5",
                correct: false,
                explanation:
                    "Con ▲=5, la prima equazione darebbe ■=5. La seconda avrebbe quindi valore 5+5+5=15, ancora diverso da 17.",
            },
            {
                id: "C",
                text: "7",
                correct: true,
                explanation:
                    "Sottraendo la prima relazione dalla seconda, il termine ■ si elimina: (2▲+■)−(▲+■)=17−10. Rimane ▲=7; di conseguenza ■=3.",
            },
            {
                id: "D",
                text: "10",
                correct: false,
                explanation:
                    "Se ▲ fosse 10, dalla prima relazione seguirebbe ■=0. La seconda avrebbe allora valore 20 e non 17.",
            },
        ],
    },

    {
        id: 39,
        area: "linguistica-logica",
        category: "logica-spaziale",
        difficulty: 3,
        question:
            "Una freccia inizialmente punta verso nord. Viene ruotata di 90° in senso orario, poi di 180° in senso antiorario e infine di 90° in senso orario. In quale direzione punta alla fine?",
        answers: [
            {
                id: "A",
                text: "Est",
                correct: false,
                explanation:
                    "Dopo la prima rotazione la freccia punta effettivamente verso est, ma restano ancora due rotazioni da applicare. Fermarsi a questo passaggio produce quindi un risultato incompleto.",
            },
            {
                id: "B",
                text: "Nord",
                correct: true,
                explanation:
                    "Da nord, 90° in senso orario portano a est; 180° in senso antiorario portano poi a ovest. L'ultima rotazione di 90° in senso orario porta da ovest nuovamente a nord.",
            },
            {
                id: "C",
                text: "Sud",
                correct: false,
                explanation:
                    "La direzione sud non è quella finale della sequenza. Dopo il secondo movimento la freccia è a ovest e una rotazione oraria di 90° da ovest conduce a nord.",
            },
            {
                id: "D",
                text: "Ovest",
                correct: false,
                explanation:
                    "Ovest è la posizione raggiunta dopo le prime due rotazioni. Il terzo movimento modifica ancora l'orientamento e deve essere incluso nel calcolo.",
            },
        ],
    },

    {
        id: 40,
        area: "linguistica-logica",
        category: "logica-matriciale",
        difficulty: 4,
        question:
            "In una griglia 3×3 ogni riga e ogni colonna deve avere somma 15. Le prime due righe sono «8, 1, 6» e «3, 5, 7»; la terza è «4, 9, ?». Quale numero deve sostituire il punto interrogativo?",
        answers: [
            {
                id: "A",
                text: "6",
                correct: false,
                explanation:
                    "Con 6 la terza riga avrebbe somma 4+9+6=19, quindi non rispetterebbe il vincolo. Anche la terza colonna diventerebbe 6+7+6=19.",
            },
            {
                id: "B",
                text: "4",
                correct: false,
                explanation:
                    "Inserendo 4 la terza riga avrebbe somma 17. Il numero mancante deve invece completare 4+9 fino a 15.",
            },
            {
                id: "C",
                text: "3",
                correct: false,
                explanation:
                    "Con 3 la somma della terza riga sarebbe 16 e quella della terza colonna 6+7+3=16. Il valore è quindi superiore di un'unità a quello necessario.",
            },
            {
                id: "D",
                text: "2",
                correct: true,
                explanation:
                    "Nella terza riga deve valere 4+9+?=15, quindi ?=2. Il controllo sulla terza colonna conferma la soluzione: 6+7+2=15.",
            },
        ],
    },
    {
        id: 41,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 4,
        question:
            "Quale affermazione descrive meglio il principio della «verità effettuale della cosa» sviluppato da Niccolò Machiavelli nel Principe?",
        answers: [
            {
                id: "A",
                text: "Il governante dovrebbe modellare sempre la propria azione sulle repubbliche ideali descritte dai filosofi antichi.",
                correct: false,
                explanation:
                    "Machiavelli prende esplicitamente le distanze dalle costruzioni politiche puramente ideali quando non corrispondono al funzionamento concreto del potere. Il suo interesse è rivolto a come gli uomini e gli Stati agiscono realmente, non a come dovrebbero comportarsi in un modello perfetto.",
            },
            {
                id: "B",
                text: "L'analisi politica deve partire dalla realtà concreta dei comportamenti e dei rapporti di forza, distinguendola dai modelli puramente ideali.",
                correct: true,
                explanation:
                    "La «verità effettuale» indica l'attenzione alla realtà politica così come concretamente funziona. Nel Principe Machiavelli studia strumenti, decisioni e comportamenti capaci di acquistare e mantenere lo Stato, evitando di fondare l'analisi soltanto su modelli morali o politici ideali.",
            },
            {
                id: "C",
                text: "La politica è completamente imprevedibile e quindi non può essere studiata attraverso l'esperienza storica.",
                correct: false,
                explanation:
                    "Machiavelli attribuisce invece grande importanza all'esperienza contemporanea e allo studio della storia antica. Pur riconoscendo il ruolo della fortuna, ritiene possibile individuare regolarità nei comportamenti umani e trarne indicazioni per l'azione politica.",
            },
            {
                id: "D",
                text: "La buona politica coincide necessariamente con l'applicazione letterale delle stesse regole morali valide nella vita privata.",
                correct: false,
                explanation:
                    "La riflessione machiavelliana mette in evidenza la specificità dell'azione politica e i problemi legati alla conservazione dello Stato. Ciò non significa elogiare genericamente l'immoralità, ma rifiutare l'idea che l'efficacia politica possa essere spiegata soltanto applicando senza distinzioni la morale privata.",
            },
        ],
    },

    {
        id: 42,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 4,
        question:
            "Nell'Orlando furioso di Ludovico Ariosto, che cosa indica principalmente la tecnica narrativa dell'«entrelacement»?",
        answers: [
            {
                id: "A",
                text: "La ripetizione dello stesso episodio da parte di quattro narratori che ne forniscono versioni incompatibili.",
                correct: false,
                explanation:
                    "L'Orlando furioso possiede una voce narrante che gestisce numerosi fili narrativi, ma non è costruito principalmente attraverso quattro narratori concorrenti. La pluralità riguarda soprattutto le vicende intrecciate dei personaggi.",
            },
            {
                id: "B",
                text: "La disposizione rigorosamente cronologica di tutte le vicende, completando ogni storia prima di iniziarne un'altra.",
                correct: false,
                explanation:
                    "La tecnica ariostesca funziona proprio in modo opposto. Il narratore interrompe spesso una vicenda in un momento significativo per riprenderne un'altra e torna successivamente al filo narrativo sospeso.",
            },
            {
                id: "C",
                text: "L'inserimento sistematico di documenti storici autentici all'interno della narrazione cavalleresca.",
                correct: false,
                explanation:
                    "Il poema rielabora materia cavalleresca e letteraria e non utilizza l'inserimento documentario come principio strutturale fondamentale. L'entrelacement riguarda l'organizzazione simultanea delle diverse vicende narrative.",
            },
            {
                id: "D",
                text: "L'intreccio di più fili narrativi, alternativamente interrotti e ripresi dal narratore nel corso del poema.",
                correct: true,
                explanation:
                    "Ariosto conduce contemporaneamente numerose vicende e passa frequentemente dall'una all'altra, lasciando temporaneamente in sospeso personaggi e azioni. Questa tecnica mantiene vivo l'interesse del lettore e contribuisce alla struttura aperta e dinamica dell'Orlando furioso.",
            },
        ],

    },

    {
        id: 43,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 4,
        question:
            "Quale funzione dei sepolcri è centrale nel carme Dei Sepolcri di Ugo Foscolo?",
        answers: [
            {
                id: "A",
                text: "Conservare la memoria degli individui attraverso gli affetti e offrire alla comunità esempi capaci di alimentare valori civili.",
                correct: true,
                explanation:
                    "Foscolo non attribuisce alla tomba il potere materiale di annullare la morte, ma le riconosce un valore umano, affettivo e civile. Il sepolcro mantiene il rapporto simbolico tra vivi e morti e, nel caso delle grandi figure del passato, può trasmettere memoria e ispirare virtù collettive.",
            },
            {
                id: "B",
                text: "Garantire fisicamente l'immortalità del corpo impedendone la decomposizione.",
                correct: false,
                explanation:
                    "Foscolo mantiene una concezione materialistica della morte e non attribuisce alla sepoltura la capacità di rendere immortale il corpo. L'immortalità evocata nel carme è soprattutto quella della memoria, degli affetti e della poesia.",
            },
            {
                id: "C",
                text: "Dimostrare che soltanto i personaggi appartenenti alla nobiltà possiedono il diritto di essere ricordati.",
                correct: false,
                explanation:
                    "Il valore del sepolcro non dipende semplicemente dall'appartenenza a una classe sociale. Nel carme assumono particolare importanza le tombe degli uomini illustri perché possono trasmettere esempi civili, non perché la nobiltà costituisca di per sé il criterio della memoria.",
            },
            {
                id: "D",
                text: "Sostituire completamente la poesia, che secondo Foscolo non può conservare il ricordo oltre la distruzione materiale delle tombe.",
                correct: false,
                explanation:
                    "La poesia possiede invece nel finale del carme una forza decisiva di conservazione della memoria. Anche quando monumenti e sepolcri vengono distrutti dal tempo, la parola poetica può continuare a tramandare uomini ed eventi.",
            },
        ],
    },

    {
        id: 44,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 3,
        question:
            "Secondo la poetica del «fanciullino» di Giovanni Pascoli, quale atteggiamento caratterizza principalmente il poeta?",
        answers: [
            {
                id: "A",
                text: "L'osservazione esclusivamente scientifica della realtà, dalla quale devono essere eliminate emozioni e analogie.",
                correct: false,
                explanation:
                    "Pascoli non identifica la poesia con un'analisi scientifica e impersonale. Il fanciullino coglie invece aspetti inattesi della realtà e stabilisce rapporti che lo sguardo adulto, reso abituale dalle convenzioni, tende a non percepire.",
            },
            {
                id: "B",
                text: "La capacità di celebrare soltanto eventi eroici e personaggi eccezionali della storia nazionale.",
                correct: false,
                explanation:
                    "La poesia pascoliana attribuisce spesso dignità poetica anche alle piccole cose, alla vita quotidiana e alla natura. Il poeta non è definito dalla scelta esclusiva di soggetti solenni o eroici.",
            },
            {
                id: "C",
                text: "La capacità di guardare il mondo con meraviglia, cogliendo analogie e significati inattesi anche nelle realtà più semplici.",
                correct: true,
                explanation:
                    "Il «fanciullino» rappresenta una facoltà poetica presente nell'uomo che conserva stupore e capacità di scoperta. Attraverso questo sguardo il poeta riconosce relazioni e suggestioni nascoste anche negli oggetti più comuni.",
            },
            {
                id: "D",
                text: "Il rifiuto completo della natura come possibile oggetto della poesia moderna.",
                correct: false,
                explanation:
                    "La natura è al contrario una presenza fondamentale nella poesia di Pascoli. Animali, piante, suoni e fenomeni naturali assumono spesso significati simbolici e partecipano alla costruzione della sua particolare sensibilità poetica.",
            },
        ],
    },

    {
        id: 45,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 4,
        question:
            "Quale caratteristica rende particolarmente problematica l'attendibilità del racconto di Zeno Cosini ne La coscienza di Zeno di Italo Svevo?",
        answers: [
            {
                id: "A",
                text: "La vicenda viene raccontata da un narratore onnisciente che conosce con assoluta certezza pensieri e intenzioni di tutti i personaggi.",
                correct: false,
                explanation:
                    "La parte principale del romanzo è costituita dalle memorie scritte dallo stesso Zeno, quindi non da un narratore onnisciente esterno. La prospettiva è fortemente soggettiva e proprio per questo richiede al lettore una valutazione critica.",
            },
            {
                id: "B",
                text: "Zeno racconta e interpreta retrospettivamente la propria vita, ricorrendo spesso ad auto giustificazioni, contraddizioni e ricostruzioni soggettive.",
                correct: true,
                explanation:
                    "Zeno non è una fonte perfettamente neutrale sulla propria esperienza. Il lettore deve confrontarsi con le sue razionalizzazioni, le contraddizioni e la distanza tra ciò che racconta e ciò che il racconto stesso lascia intuire.",
            },
            {
                id: "C",
                text: "Il romanzo è composto esclusivamente da documenti giudiziari scritti da persone che non hanno mai conosciuto Zeno.",
                correct: false,
                explanation:
                    "Il dispositivo narrativo comprende una cornice legata al dottor S. e soprattutto il memoriale autobiografico del protagonista. Non si tratta di una raccolta di documenti giudiziari esterni.",
            },
            {
                id: "D",
                text: "Zeno perde completamente la memoria all'inizio dell'opera e non ricorda nessun evento della propria vita.",
                correct: false,
                explanation:
                    "Il problema dell'attendibilità non deriva da un'amnesia totale. Zeno ricorda numerosi episodi, ma li seleziona e interpreta da una prospettiva personale, rendendo significativo il rapporto tra memoria, autoanalisi e autoinganno.",
            },
        ],
    },

    {
        id: 46,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 4,
        question:
            "Nell'opera di Luigi Pirandello, che cosa esprime frequentemente il contrasto tra «vita» e «forma»?",
        answers: [
            {
                id: "A",
                text: "L'opposizione tra letteratura in versi, considerata vitale, e romanzo in prosa, considerato necessariamente rigido.",
                correct: false,
                explanation:
                    "Il contrasto pirandelliano non è una classificazione dei generi letterari. «Vita» e «forma» vengono utilizzate per riflettere sull'identità, sulle convenzioni sociali e sui ruoli attraverso i quali gli individui vengono definiti.",
            },
            {
                id: "B",
                text: "La contrapposizione esclusivamente politica tra sostenitori della monarchia e sostenitori della Repubblica.",
                correct: false,
                explanation:
                    "La riflessione possiede soprattutto una dimensione esistenziale e sociale, non coincide con una specifica divisione politica. Pirandello indaga il problema dell'identità e la distanza tra il fluire dell'esistenza e le immagini fisse attribuite all'individuo.",
            },
            {
                id: "C",
                text: "L'idea che ogni individuo possieda un'identità immutabile che gli altri riconoscono sempre nello stesso modo.",
                correct: false,
                explanation:
                    "Pirandello mette proprio in crisi l'idea di un io unico e stabile. L'individuo può apparire diverso a persone diverse ed essere imprigionato in immagini che non coincidono con la percezione che ha di se stesso.",
            },
            {
                id: "D",
                text: "Il conflitto tra il fluire mutevole dell'esistenza e le identità o i ruoli rigidi attraverso cui società e individui cercano di fissarla.",
                correct: true,
                explanation:
                    "La «vita» tende al movimento e alla trasformazione, mentre la «forma» fissa l'individuo in un ruolo, una definizione o una maschera. Questo contrasto è alla base di molte situazioni pirandelliane e della crisi dell'idea di identità unitaria.",
            },
        ],
    },

    {
        id: 47,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 3,
        question:
            "Quale caratteristica è tipica della prima poesia di Giuseppe Ungaretti, in particolare dei testi confluiti nell'Allegria?",
        answers: [
            {
                id: "A",
                text: "L'estrema concentrazione della parola poetica, l'uso intenso delle pause e dello spazio bianco e l'esperienza della guerra come elemento centrale.",
                correct: true,
                explanation:
                    "Molti testi dell'Allegria nascono dall'esperienza della Prima guerra mondiale e utilizzano versi brevi, forte essenzialità linguistica e una disposizione grafica che attribuisce valore alle pause. La parola tende così ad acquistare particolare intensità all'interno di testi spesso molto concentrati.",
            },
            {
                id: "B",
                text: "L'uso obbligatorio di lunghi poemi narrativi in ottave dedicati esclusivamente alle vicende cavalleresche.",
                correct: false,
                explanation:
                    "L'ottava e la narrazione cavalleresca appartengono ad altre tradizioni letterarie, come quella rinascimentale. La poesia ungarettiana del primo periodo tende invece alla brevità e alla concentrazione.",
            },
            {
                id: "C",
                text: "La riproduzione impersonale del linguaggio di una comunità rurale secondo i principi della narrativa verista.",
                correct: false,
                explanation:
                    "Questa descrizione rimanda alle tecniche narrative associate soprattutto a Verga. Ungaretti opera invece nell'ambito della poesia novecentesca e sviluppa una ricerca radicalmente diversa sulla parola e sul verso.",
            },
            {
                id: "D",
                text: "Il rifiuto di qualsiasi esperienza autobiografica, sostituita da una rappresentazione esclusivamente mitologica del mondo classico.",
                correct: false,
                explanation:
                    "L'esperienza personale è molto importante nella prima produzione di Ungaretti, soprattutto quella del soldato durante la guerra. La dimensione individuale viene però trasformata poeticamente in riflessione più generale sulla precarietà, la fraternità e l'esistenza.",
            },
        ],
    },

    {
        id: 48,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-europea",
        difficulty: 4,
        question:
            "Quale obiettivo caratterizzò principalmente il Congresso di Vienna del 1814-1815 dopo la sconfitta di Napoleone?",
        answers: [
            {
                id: "A",
                text: "Creare immediatamente Stati nazionali democratici fondati sul principio di autodeterminazione dei popoli.",
                correct: false,
                explanation:
                    "Il Congresso di Vienna fu guidato dalle grandi potenze monarchiche e non applicò sistematicamente il principio di autodeterminazione nazionale. Le aspirazioni liberali e nazionali sarebbero anzi entrate frequentemente in conflitto con l'ordine restaurato.",
            },
            {
                id: "B",
                text: "Abolire tutte le monarchie europee e sostituirle con repubbliche modellate sulla Francia rivoluzionaria.",
                correct: false,
                explanation:
                    "Le potenze vincitrici cercarono piuttosto di restaurare dinastie e assetti monarchici sconvolti dall'età rivoluzionaria e napoleonica. Il Congresso rappresentò quindi una reazione, non una prosecuzione istituzionale della Rivoluzione francese.",
            },
            {
                id: "C",
                text: "Ristabilire un equilibrio tra le grandi potenze e restaurare, per quanto possibile, l'ordine dinastico precedente all'espansione napoleonica.",
                correct: true,
                explanation:
                    "Due criteri fondamentali furono il principio di legittimità dinastica e la ricerca dell'equilibrio europeo. Lo scopo era impedire che una singola potenza tornasse a dominare il continente e ricostruire un ordine politico stabile dopo le guerre napoleoniche.",
            },
            {
                id: "D",
                text: "Unificare politicamente Germania e Italia sotto un unico sovrano scelto dalle potenze vincitrici.",
                correct: false,
                explanation:
                    "L'unificazione tedesca e quella italiana sarebbero avvenute molti decenni dopo e attraverso processi politici e militari autonomi. Nel 1815 la penisola italiana e l'area tedesca restarono politicamente frammentate.",
            },
        ],
    },

    {
        id: 49,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-risorgimento",
        difficulty: 4,
        question:
            "Quale confronto tra Giuseppe Mazzini e Camillo Benso di Cavour è storicamente corretto?",
        answers: [
            {
                id: "A",
                text: "Entrambi perseguivano come obiettivo politico immediato una repubblica italiana costruita esclusivamente attraverso insurrezioni popolari.",
                correct: false,
                explanation:
                    "La prospettiva repubblicana e insurrezionale apparteneva soprattutto al progetto mazziniano. Cavour operò invece all'interno della monarchia costituzionale sabauda e fece largo uso di diplomazia, alleanze internazionali e iniziativa statale.",
            },
            {
                id: "B",
                text: "Mazzini sosteneva un progetto nazionale repubblicano fondato sulla mobilitazione popolare, mentre Cavour operava in una prospettiva monarchico-costituzionale guidata dal Piemonte.",
                correct: true,
                explanation:
                    "Mazzini collegava indipendenza e unità nazionale a un progetto repubblicano e alla partecipazione del popolo. Cavour, primo ministro piemontese, perseguì invece l'espansione del Regno di Sardegna attraverso modernizzazione, diplomazia e alleanze, contribuendo a un'unificazione sotto la monarchia sabauda.",
            },
            {
                id: "C",
                text: "Mazzini difendeva il dominio austriaco nell'Italia settentrionale, mentre Cavour si opponeva a qualsiasi intervento piemontese fuori dai propri confini.",
                correct: false,
                explanation:
                    "Mazzini fu uno dei principali sostenitori dell'indipendenza nazionale italiana e quindi contrario al dominio straniero. Anche Cavour lavorò concretamente per modificare gli equilibri della penisola e ridurre la presenza austriaca.",
            },
            {
                id: "D",
                text: "Cavour guidava la Giovine Italia, mentre Mazzini era primo ministro del Regno di Sardegna.",
                correct: false,
                explanation:
                    "I ruoli sono invertiti. Mazzini fondò la Giovine Italia nel 1831, mentre Cavour fu presidente del Consiglio del Regno di Sardegna e figura centrale della politica piemontese negli anni precedenti l'unificazione.",
            },
        ],
    },

    {
        id: 50,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-economico-sociale",
        difficulty: 3,
        question:
            "Quale trasformazione è strettamente collegata alla prima industrializzazione europea?",
        answers: [
            {
                id: "A",
                text: "La scomparsa immediata delle città, perché il lavoro industriale veniva svolto esclusivamente nelle campagne.",
                correct: false,
                explanation:
                    "L'industrializzazione favorì invece una forte crescita di diversi centri urbani. La concentrazione di fabbriche e opportunità di lavoro attirò numerosi lavoratori dalle campagne verso le città.",
            },
            {
                id: "B",
                text: "La sostituzione completa del lavoro salariato con forme di lavoro servile.",
                correct: false,
                explanation:
                    "Il lavoro salariato divenne una componente fondamentale del sistema industriale. Le condizioni potevano essere molto dure, ma non si trattò di una generale sostituzione con la servitù personale.",
            },
            {
                id: "C",
                text: "Il ritorno generalizzato alla produzione artigianale domestica come forma dominante dell'economia.",
                correct: false,
                explanation:
                    "La produzione domestica e artigianale non scomparve immediatamente, ma uno degli aspetti distintivi dell'industrializzazione fu proprio l'espansione del sistema di fabbrica. Macchinari, energia e lavoratori vennero concentrati in luoghi produttivi specifici.",
            },
            {
                id: "D",
                text: "L'espansione del sistema di fabbrica, l'aumento del lavoro salariato e una forte crescita urbana in molte aree industriali.",
                correct: true,
                explanation:
                    "La rivoluzione industriale trasformò sia i metodi produttivi sia l'organizzazione sociale. La concentrazione della produzione nelle fabbriche contribuì alla formazione di nuove classi sociali e accelerò l'urbanizzazione nelle regioni maggiormente industrializzate.",
            },
        ],
    },

    {
        id: 51,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-prima-guerra-mondiale",
        difficulty: 4,
        question:
            "Perché sul fronte occidentale della Prima guerra mondiale il conflitto assunse a lungo la forma di una guerra di trincea?",
        answers: [
            {
                id: "A",
                text: "Le capacità difensive di mitragliatrici, artiglieria e reticolati rendevano estremamente costosi gli attacchi contro posizioni fortificate, favorendo lo stallo.",
                correct: true,
                explanation:
                    "Le nuove capacità di fuoco difensive rendevano molto difficile attraversare allo scoperto lo spazio tra le linee avversarie. Gli eserciti costruirono quindi sistemi di trincee sempre più estesi e numerose offensive produssero enormi perdite con avanzamenti territoriali limitati.",
            },
            {
                id: "B",
                text: "Tutti gli eserciti coinvolti avevano concordato formalmente di non avanzare oltre le proprie posizioni fino alla fine della guerra.",
                correct: false,
                explanation:
                    "Non esisteva un accordo generale di questo tipo. Gli eserciti lanciarono numerose offensive proprio nel tentativo di rompere il fronte, ma le condizioni militari rendevano spesso difficilissimo ottenere uno sfondamento decisivo.",
            },
            {
                id: "C",
                text: "La guerra si combatté esclusivamente durante l'inverno, quando ogni spostamento militare era impossibile.",
                correct: false,
                explanation:
                    "Le operazioni militari continuarono durante diverse stagioni e importanti offensive si svolsero anche nei mesi più favorevoli. Il problema fondamentale era l'equilibrio tra capacità offensive e potenza delle difese, non un'impossibilità meteorologica permanente.",
            },
            {
                id: "D",
                text: "Nessuno degli eserciti disponeva di artiglieria, quindi era impossibile attaccare fortificazioni a distanza.",
                correct: false,
                explanation:
                    "L'artiglieria fu una delle armi centrali della Prima guerra mondiale e venne impiegata in quantità enormi. Nonostante bombardamenti intensi, le difese potevano sopravvivere e le truppe attaccanti restavano vulnerabili durante l'avanzata.",
            },
        ],
    },

    {
        id: 52,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-fascismo",
        difficulty: 3,
        question:
            "Che cosa stabilirono principalmente i Patti Lateranensi firmati nel 1929 tra il Regno d'Italia e la Santa Sede?",
        answers: [
            {
                id: "A",
                text: "La trasformazione dello Stato italiano in una repubblica confessionale guidata direttamente dal papa.",
                correct: false,
                explanation:
                    "L'Italia rimase una monarchia sotto Vittorio Emanuele III e il governo fascista. I Patti regolarono i rapporti con la Santa Sede ma non trasferirono al pontefice la guida politica dello Stato italiano.",
            },
            {
                id: "B",
                text: "L'annessione dello Stato della Città del Vaticano al territorio amministrato dal Comune di Roma.",
                correct: false,
                explanation:
                    "Accadde il contrario: il Trattato riconobbe la sovranità della Santa Sede sul nuovo Stato della Città del Vaticano. Questo contribuì a risolvere la cosiddetta Questione romana aperta dopo il 1870.",
            },
            {
                id: "C",
                text: "Il riconoscimento dello Stato della Città del Vaticano e una regolazione complessiva dei rapporti tra Stato italiano e Chiesa cattolica.",
                correct: true,
                explanation:
                    "I Patti comprendevano un Trattato, una Convenzione finanziaria e un Concordato. Con essi veniva riconosciuta la sovranità della Santa Sede sul Vaticano e venivano disciplinati diversi aspetti dei rapporti tra lo Stato italiano e la Chiesa.",
            },
            {
                id: "D",
                text: "L'abolizione definitiva di ogni accordo tra autorità civile italiana e Chiesa cattolica.",
                correct: false,
                explanation:
                    "I Patti Lateranensi furono precisamente un insieme di accordi tra le due parti. Il Concordato sarebbe stato successivamente modificato nel 1984, ma non si trattò nel 1929 di un'interruzione delle relazioni.",
            },
        ],
    },

    {
        id: 53,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-fascismo",
        difficulty: 4,
        question:
            "Quale conseguenza produssero le leggi razziali emanate dal regime fascista italiano nel 1938?",
        answers: [
            {
                id: "A",
                text: "L'estensione dei diritti politici e professionali degli ebrei italiani come forma di opposizione alle politiche naziste.",
                correct: false,
                explanation:
                    "Le norme del 1938 ebbero carattere discriminatorio, non inclusivo. Segnarono una grave persecuzione giuridica degli ebrei italiani e limitarono progressivamente la loro partecipazione alla vita pubblica.",
            },
            {
                id: "B",
                text: "L'esclusione e la discriminazione degli ebrei in numerosi ambiti, tra cui scuola, impieghi e vita civile.",
                correct: true,
                explanation:
                    "Le leggi razziali introdussero una discriminazione istituzionalizzata contro gli ebrei. Tra le conseguenze vi furono l'espulsione di docenti e studenti ebrei dalle scuole pubbliche e limitazioni nell'accesso a professioni, proprietà e altri ambiti della vita sociale.",
            },
            {
                id: "C",
                text: "La concessione automatica della cittadinanza italiana a tutti gli ebrei perseguitati negli altri Stati europei.",
                correct: false,
                explanation:
                    "Le politiche fasciste andarono nella direzione opposta, restringendo diritti e possibilità degli ebrei. Non venne introdotto un programma generale di accoglienza e naturalizzazione delle vittime delle persecuzioni europee.",
            },
            {
                id: "D",
                text: "La fine immediata dell'alleanza politica tra l'Italia fascista e la Germania nazista.",
                correct: false,
                explanation:
                    "Le misure antisemite italiane si collocarono invece nel periodo di crescente avvicinamento del regime fascista alla Germania hitleriana. L'alleanza tra i due regimi sarebbe diventata ancora più stretta negli anni successivi.",
            },
        ],
    },

    {
        id: 54,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "educazione-civica",
        difficulty: 4,
        question:
            "Il Presidente della Repubblica ritiene che una legge appena approvata dal Parlamento presenti problemi e, prima di promulgarla, la rinvia alle Camere con un messaggio motivato. Che cosa prevede la Costituzione se le Camere approvano nuovamente la legge?",
        answers: [
            {
                id: "A",
                text: "Il Presidente può continuare a rinviarla indefinitamente finché il Parlamento non modifica il testo.",
                correct: false,
                explanation:
                    "Il rinvio presidenziale non costituisce un veto assoluto e ripetibile senza limiti. La Costituzione consente al Presidente di chiedere una nuova deliberazione, ma riconosce al Parlamento la possibilità di confermare la propria decisione.",
            },
            {
                id: "B",
                text: "La legge decade automaticamente e può essere ripresentata soltanto nella legislatura successiva.",
                correct: false,
                explanation:
                    "Il rinvio non provoca la decadenza automatica della legge. Le Camere possono riesaminarla e scegliere se modificarla oppure approvarla nuovamente.",
            },
            {
                id: "C",
                text: "La legge viene automaticamente sottoposta a referendum popolare prima di poter entrare in vigore.",
                correct: false,
                explanation:
                    "Il rinvio presidenziale non attiva automaticamente un referendum. Gli strumenti referendari previsti dalla Costituzione seguono procedure e condizioni specifiche distinte da questa fase del procedimento legislativo.",
            },
            {
                id: "D",
                text: "Il Presidente deve promulgarla.",
                correct: true,
                explanation:
                    "L'articolo 74 consente al Presidente della Repubblica, prima della promulgazione, di chiedere alle Camere una nuova deliberazione con messaggio motivato. Se le Camere approvano nuovamente la legge, la Costituzione stabilisce che essa deve essere promulgata.",
            },
        ],
    },

    {
        id: 55,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "istituzioni-europee",
        difficulty: 4,
        question:
            "Nel procedimento legislativo ordinario dell'Unione europea, quale descrizione dei ruoli istituzionali è generalmente corretta?",
        answers: [
            {
                id: "A",
                text: "La Commissione europea presenta normalmente le proposte legislative, mentre Parlamento europeo e Consiglio dell'Unione europea partecipano alla loro approvazione.",
                correct: true,
                explanation:
                    "Nel procedimento legislativo ordinario l'iniziativa legislativa appartiene generalmente alla Commissione europea. Parlamento europeo e Consiglio dell'Unione europea svolgono poi il ruolo di colegislatori e devono accordarsi sul testo perché l'atto venga adottato.",
            },
            {
                id: "B",
                text: "La Banca centrale europea approva da sola tutte le leggi dell'Unione, mentre Parlamento e Consiglio hanno soltanto funzioni consultive.",
                correct: false,
                explanation:
                    "La BCE possiede competenze centrali in materia monetaria nell'area dell'euro, ma non costituisce il legislatore generale dell'Unione. Parlamento e Consiglio esercitano invece funzioni legislative fondamentali.",
            },
            {
                id: "C",
                text: "Il Consiglio europeo approva da solo tutte le leggi e può sostituire permanentemente il Parlamento europeo.",
                correct: false,
                explanation:
                    "Il Consiglio europeo definisce gli orientamenti e le priorità politiche generali dell'Unione, ma non esercita normalmente la funzione legislativa. Non va inoltre confuso con il Consiglio dell'Unione europea, che partecipa invece alla legislazione.",
            },
            {
                id: "D",
                text: "La Corte di giustizia dell'Unione europea propone e approva ordinariamente le direttive, mentre la Commissione applica le sentenze.",
                correct: false,
                explanation:
                    "La Corte di giustizia interpreta il diritto dell'Unione e garantisce il rispetto dei trattati nelle controversie di sua competenza. Non è l'organo che ordinariamente propone e approva gli atti legislativi europei.",
            },
        ],

    },

    {
        id: 56,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-cartografia",
        difficulty: 3,
        question:
            "In una carta topografica, che cosa indica generalmente la presenza di curve di livello molto ravvicinate tra loro?",
        answers: [
            {
                id: "A",
                text: "Un territorio perfettamente pianeggiante nel quale l'altitudine rimane costante.",
                correct: false,
                explanation:
                    "In un territorio quasi pianeggiante l'altitudine cambia lentamente nello spazio e le curve di livello tendono quindi a essere molto distanti. Curve molto ravvicinate indicano invece una variazione altimetrica rapida.",
            },
            {
                id: "B",
                text: "Una depressione che si trova necessariamente al di sotto del livello del mare.",
                correct: false,
                explanation:
                    "Le curve ravvicinate descrivono la pendenza e non stabiliscono da sole se una zona si trovi sopra o sotto il livello del mare. Per conoscere l'altitudine assoluta bisogna leggere i valori associati alle curve.",
            },
            {
                id: "C",
                text: "Un pendio ripido, perché l'altitudine cambia molto in una breve distanza orizzontale.",
                correct: true,
                explanation:
                    "Ogni curva di livello unisce punti posti alla stessa quota. Se molte curve sono concentrate in poco spazio, significa che per una piccola distanza orizzontale si supera un grande dislivello, quindi il versante è ripido.",
            },
            {
                id: "D",
                text: "La presenza certa di un fiume navigabile tra due montagne.",
                correct: false,
                explanation:
                    "Le curve possono aiutare a riconoscere valli e forme del rilievo, ma la loro semplice vicinanza non dimostra l'esistenza di un fiume né la sua navigabilità. Per questo servono altri simboli cartografici e informazioni specifiche.",
            },
        ],
        resources: [
            {
                id: "curve-livello-pendenza",
                type: "diagram",
                label: "Curve di livello e pendenza",
                src: `${import.meta.env.BASE_URL}resources/diagrams/curve-livello-pendenza.png`,
                alt: "Confronto tra curve di livello distanziate su un pendio dolce e ravvicinate su un pendio ripido",
                caption:
                    "Il confronto permette di collegare direttamente la distanza tra le isoipse alla pendenza del terreno.",
            },
        ],
    },

    {
        id: 57,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-climatica",
        difficulty: 3,
        question:
            "Una località presenta estati calde con precipitazioni molto scarse e inverni relativamente miti e più piovosi. Quale tipo di clima è più coerente con queste caratteristiche?",
        answers: [
            {
                id: "A",
                text: "Clima equatoriale",
                correct: false,
                explanation:
                    "Il clima equatoriale presenta normalmente temperature elevate durante tutto l'anno e precipitazioni abbondanti distribuite in molti mesi. Una marcata siccità estiva non ne rappresenta la caratteristica tipica.",
            },
            {
                id: "B",
                text: "Clima mediterraneo",
                correct: true,
                explanation:
                    "Uno degli elementi distintivi del clima mediterraneo è proprio la presenza di estati calde e secche e inverni più miti e piovosi. Questo regime è diffuso in molte aree costiere del bacino del Mediterraneo.",
            },
            {
                id: "C",
                text: "Clima polare",
                correct: false,
                explanation:
                    "Il clima polare è caratterizzato da temperature molto basse e da una stagione calda estremamente limitata o assente. Non corrisponde quindi a estati calde e inverni miti.",
            },
            {
                id: "D",
                text: "Clima monsonico tropicale",
                correct: false,
                explanation:
                    "I climi monsonici sono caratterizzati soprattutto dall'alternanza stagionale legata alla circolazione monsonica, spesso con una stagione estiva molto piovosa. Questo andamento è differente dalla tipica siccità estiva mediterranea.",
            },
        ],
        resources: [
            {
                id: "climogramma-mediterraneo",
                type: "diagram",
                label: "Climogramma di una località mediterranea",
                src: `${import.meta.env.BASE_URL}resources/diagrams/climogramma-mediterraneo.png`,
                alt: "Grafico mensile con temperature più elevate in estate e precipitazioni minime nei mesi estivi e maggiori nei mesi autunnali e invernali",
                caption:
                    "Il climogramma permette di riconoscere visivamente la siccità estiva caratteristica del clima mediterraneo.",
            },
        ],
    },

    {
        id: 58,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-demografica",
        difficulty: 4,
        question:
            "Una popolazione presenta una piramide delle età con base molto stretta, fasce adulte relativamente ampie e una consistente presenza di persone anziane. Quale interpretazione è più plausibile?",
        answers: [
            {
                id: "A",
                text: "La popolazione presenta necessariamente una natalità elevatissima e una speranza di vita molto bassa.",
                correct: false,
                explanation:
                    "Una natalità elevata tenderebbe ad allargare la base della piramide, perché aumenterebbe la quota dei bambini. Una forte presenza di anziani è inoltre generalmente incompatibile con una speranza di vita molto bassa.",
            },
            {
                id: "B",
                text: "La struttura dimostra che non esistono movimenti migratori da o verso il territorio.",
                correct: false,
                explanation:
                    "La forma di una piramide delle età può essere influenzata anche dalle migrazioni, soprattutto nelle fasce giovani-adulte. Dal solo profilo descritto non è possibile concludere che il saldo migratorio sia necessariamente nullo.",
            },
            {
                id: "C",
                text: "La popolazione è sicuramente in una fase di rapidissima crescita naturale.",
                correct: false,
                explanation:
                    "Una crescita naturale molto rapida è generalmente associata a una base larga, indicativa di molte nascite rispetto alle generazioni adulte. Una base stretta suggerisce invece un ricambio generazionale più debole.",
            },
            {
                id: "D",
                text: "La popolazione presenta segnali di invecchiamento demografico e di bassa natalità.",
                correct: true,
                explanation:
                    "La base stretta indica che le generazioni più giovani sono relativamente poco numerose, mentre la presenza consistente di anziani segnala una struttura demografica invecchiata. Questo profilo è frequente nelle popolazioni con natalità bassa e lunga speranza di vita.",
            },
        ],
    },

    {
        id: 59,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-demografica",
        difficulty: 3,
        question:
            "Un territorio possiede 3.600.000 abitanti distribuiti su una superficie di 12.000 km². Qual è la sua densità media di popolazione?",
        answers: [
            {
                id: "A",
                text: "300 abitanti per km²",
                correct: true,
                explanation:
                    "La densità demografica si calcola dividendo il numero degli abitanti per la superficie: 3.600.000 / 12.000 = 300. Il risultato significa che, mediamente, sul territorio considerato vivono 300 persone per ogni chilometro quadrato.",
            },
            {
                id: "B",
                text: "30 abitanti per km²",
                correct: false,
                explanation:
                    "30 abitanti per km² produrrebbero, su 12.000 km², una popolazione complessiva di appena 360.000 persone. Il valore è quindi dieci volte inferiore a quello richiesto dai dati.",
            },
            {
                id: "C",
                text: "3.000 abitanti per km²",
                correct: false,
                explanation:
                    "3.000 abitanti per km² moltiplicati per 12.000 km² corrisponderebbero a 36 milioni di abitanti. È un valore dieci volte superiore alla popolazione indicata.",
            },
            {
                id: "D",
                text: "43.200 abitanti per km²",
                correct: false,
                explanation:
                    "Questo risultato deriva da un'operazione non coerente con la definizione di densità. La densità richiede il rapporto popolazione/superficie, non il prodotto tra i due valori né altre combinazioni.",
            },
        ],
    },

    {
        id: 60,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-europea",
        difficulty: 3,
        question:
            "Quale affermazione sullo Stretto di Gibilterra è corretta?",
        answers: [
            {
                id: "A",
                text: "Collega il Mar Nero al Mar Mediterraneo e separa la Turchia europea da quella asiatica.",
                correct: false,
                explanation:
                    "Questa descrizione rimanda al sistema degli stretti turchi e in particolare al Bosforo per il collegamento tra Mar Nero e Mar di Marmara. Gibilterra si trova invece all'estremità occidentale del Mediterraneo.",
            },
            {
                id: "B",
                text: "Collega il Mar Baltico direttamente all'Oceano Atlantico e separa Norvegia e Svezia.",
                correct: false,
                explanation:
                    "Il Baltico comunica con il Mare del Nord attraverso un sistema di stretti situati tra Danimarca e penisola scandinava. Lo Stretto di Gibilterra si trova molto più a sud, tra Europa e Africa.",
            },
            {
                id: "C",
                text: "Collega il Mar Mediterraneo all'Oceano Atlantico e separa la penisola iberica dal Nord Africa.",
                correct: true,
                explanation:
                    "Lo Stretto di Gibilterra costituisce il passaggio naturale tra Atlantico e Mediterraneo. Geograficamente separa la Spagna, nella penisola iberica, dal Marocco sulla costa nordafricana.",
            },
            {
                id: "D",
                text: "Collega il Mar Adriatico al Mar Ionio e separa l'Italia dalla Grecia.",
                correct: false,
                explanation:
                    "Il passaggio tra Adriatico e Ionio si trova nell'area del Canale d'Otranto, tra la penisola salentina e l'Albania. Gibilterra si trova invece tra Spagna e Marocco.",
            },
        ],
        resources: [
            {
                id: "stretto-gibilterra",
                type: "map",
                label: "Carta dello Stretto di Gibilterra",
                src: `${import.meta.env.BASE_URL}resources/maps/stretto-gibilterra.png`,
                alt: "Carta con penisola iberica, Marocco, Oceano Atlantico, Mar Mediterraneo e Stretto di Gibilterra",
                caption:
                    "La carta mostra la posizione strategica dello stretto tra Europa e Africa e tra Mediterraneo e Atlantico.",
            },
        ],
    },
    {
        id: 61,
        area: "cultura-matematico-scientifica",
        category: "matematica-numeri",
        difficulty: 4,
        question:
            "Il numero N ha scomposizione in fattori primi N = 2³ × 3². Quanti divisori positivi distinti possiede N?",
        answers: [
            {
                id: "A",
                text: "5",
                correct: false,
                explanation:
                    "Sommare semplicemente gli esponenti, 3+2=5, non permette di contare i divisori. Ogni divisore può contenere 2 con esponente da 0 a 3 e 3 con esponente da 0 a 2, quindi bisogna contare tutte le combinazioni possibili.",
            },
            {
                id: "B",
                text: "6",
                correct: false,
                explanation:
                    "Il valore 6 non considera tutte le possibili combinazioni degli esponenti dei fattori primi. Per il fattore 2 esistono quattro scelte dell'esponente e per il fattore 3 tre scelte.",
            },
            {
                id: "C",
                text: "12",
                correct: true,
                explanation:
                    "Se N = 2³ × 3², un divisore può contenere 2⁰, 2¹, 2² o 2³: quattro possibilità. Per il fattore 3 può contenere 3⁰, 3¹ o 3²: tre possibilità; dunque i divisori sono 4×3=12.",
            },
            {
                id: "D",
                text: "18",
                correct: false,
                explanation:
                    "18 è il valore del prodotto 2×3² e non rappresenta il numero dei divisori. Il conteggio dei divisori dipende dalle possibilità degli esponenti nella scomposizione in fattori primi.",
            },
        ],
    },

    {
        id: 62,
        area: "cultura-matematico-scientifica",
        category: "matematica-algebra",
        difficulty: 4,
        question:
            "Qual è l'insieme delle soluzioni dell'equazione |2x − 5| = 9?",
        answers: [
            {
                id: "A",
                text: "x = 7 oppure x = −2",
                correct: true,
                explanation:
                    "Un valore assoluto uguale a 9 implica due possibilità: 2x−5=9 oppure 2x−5=−9. Dal primo caso si ottiene x=7, dal secondo 2x=−4 e quindi x=−2.",
            },
            {
                id: "B",
                text: "Soltanto x = 7",
                correct: false,
                explanation:
                    "Questa alternativa considera soltanto il caso 2x−5=9. Poiché sia 9 sia −9 hanno valore assoluto 9, occorre risolvere anche l'equazione 2x−5=−9.",
            },
            {
                id: "C",
                text: "x = 2 oppure x = −7",
                correct: false,
                explanation:
                    "Sostituendo x=2 si ottiene |4−5|=1, mentre con x=−7 si ottiene |−14−5|=19. Nessuno dei due valori rende il primo membro uguale a 9.",
            },
            {
                id: "D",
                text: "Nessuna soluzione reale",
                correct: false,
                explanation:
                    "L'equazione possiede invece due soluzioni reali. Un'equazione del tipo |A|=k con k positivo corrisponde ai due casi A=k e A=−k.",
            },
        ],
    },

    {
        id: 63,
        area: "cultura-matematico-scientifica",
        category: "matematica-algebra",
        difficulty: 3,
        question:
            "Qual è la soluzione della disequazione 4 − 3x ≤ 10?",
        answers: [
            {
                id: "A",
                text: "x ≤ −2",
                correct: false,
                explanation:
                    "Dopo aver ottenuto −3x≤6 bisogna dividere entrambi i membri per −3. Quando si divide una disequazione per un numero negativo, il verso della disuguaglianza deve essere invertito.",
            },
            {
                id: "B",
                text: "x ≥ −2",
                correct: true,
                explanation:
                    "Sottraendo 4 da entrambi i membri si ottiene −3x≤6. Dividendo per −3 il verso si inverte, quindi x≥−2.",
            },
            {
                id: "C",
                text: "x ≥ 2",
                correct: false,
                explanation:
                    "Il segno del valore limite è errato. Da −3x≤6 si ricava −2 dividendo 6 per −3, non +2.",
            },
            {
                id: "D",
                text: "x ≤ 2",
                correct: false,
                explanation:
                    "Questa risposta contiene sia un valore limite sia un verso errati. La corretta divisione per −3 produce x≥−2.",
            },
        ],
    },

    {
        id: 64,
        area: "cultura-matematico-scientifica",
        category: "matematica-funzioni",
        difficulty: 4,
        question:
            "Una funzione lineare associa ai valori x = 0, 2 e 5 rispettivamente i valori y = −2, 4 e 13. Quale formula descrive la funzione?",
        answers: [
            {
                id: "A",
                text: "y = 2x − 2",
                correct: false,
                explanation:
                    "La formula restituisce correttamente y=−2 quando x=0, ma per x=2 produce y=2 anziché 4. L'intercetta è quindi corretta, ma il coefficiente angolare è troppo piccolo.",
            },
            {
                id: "B",
                text: "y = 3x + 2",
                correct: false,
                explanation:
                    "Per x=0 questa formula produce y=2, mentre la tabella indica y=−2. Il termine noto deve quindi essere negativo.",
            },
            {
                id: "C",
                text: "y = 3x − 2",
                correct: true,
                explanation:
                    "Tra x=0 e x=2, y aumenta di 6 mentre x aumenta di 2, quindi il coefficiente angolare è 6/2=3. Poiché per x=0 vale y=−2, l'intercetta è −2: la funzione è dunque y=3x−2, che per x=5 restituisce 13.",
            },
            {
                id: "D",
                text: "y = x + 3",
                correct: false,
                explanation:
                    "Per x=0 questa formula restituisce 3 e non −2. Inoltre il suo coefficiente angolare è 1, mentre i dati mostrano un aumento di y pari a 3 per ogni unità di aumento di x.",
            },
        ],
        resources: [
            {
                id: "funzione-lineare-tabella-grafico",
                type: "diagram",
                label: "Grafico della funzione lineare",
                src: `${import.meta.env.BASE_URL}resources/diagrams/funzione-lineare-3x-meno-2.png`,
                alt: "Piano cartesiano con i punti zero meno due, due quattro e cinque tredici appartenenti alla stessa retta",
                caption:
                    "Il grafico permette di osservare l'intercetta sull'asse y e l'aumento costante della funzione.",
            },
        ],
    },

    {
        id: 65,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria",
        difficulty: 4,
        question:
            "Due triangoli ABC e A'B'C' sono simili. Il lato AB, lungo 6 cm, corrisponde ad A'B', lungo 10 cm. Se AC misura 9 cm, quanto misura il lato corrispondente A'C'?",
        answers: [
            {
                id: "A",
                text: "12 cm",
                correct: false,
                explanation:
                    "Il rapporto di similitudine non è ottenuto aggiungendo semplicemente la differenza 10−6=4 al lato di 9 cm. Nei triangoli simili i lati corrispondenti sono proporzionali.",
            },
            {
                id: "B",
                text: "15 cm",
                correct: true,
                explanation:
                    "Il fattore di scala dal primo al secondo triangolo è 10/6=5/3. Il lato corrispondente vale quindi 9×5/3=15 cm.",
            },
            {
                id: "C",
                text: "13 cm",
                correct: false,
                explanation:
                    "13 cm deriverebbero dall'aggiunta della differenza tra i primi due lati, ma la similitudine conserva i rapporti, non le differenze. Deve valere 6:10 = 9:A'C'.",
            },
            {
                id: "D",
                text: "5,4 cm",
                correct: false,
                explanation:
                    "5,4 cm si ottengono applicando il rapporto inverso 6/10 al lato di 9 cm. Il secondo triangolo è invece più grande del primo, quindi anche il lato A'C' deve essere maggiore di 9 cm.",
            },
        ],
    },

    {
        id: 66,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria",
        difficulty: 3,
        question:
            "Un trapezio ha basi lunghe 8 cm e 14 cm e altezza 6 cm. Qual è la sua area?",
        answers: [
            {
                id: "A",
                text: "48 cm²",
                correct: false,
                explanation:
                    "48 cm² è il prodotto 8×6 e corrisponderebbe all'area di un rettangolo con base 8 e altezza 6. Nel trapezio bisogna tenere conto di entrambe le basi.",
            },
            {
                id: "B",
                text: "84 cm²",
                correct: false,
                explanation:
                    "84 cm² è il prodotto 14×6 e considera soltanto la base maggiore. La formula del trapezio utilizza la semisomma delle due basi moltiplicata per l'altezza.",
            },
            {
                id: "C",
                text: "132 cm²",
                correct: false,
                explanation:
                    "132 deriva da (8+14)×6 senza dividere per 2. La formula corretta è A=(B+b)×h/2.",
            },
            {
                id: "D",
                text: "66 cm²",
                correct: true,
                explanation:
                    "Applicando A=(B+b)×h/2 si ottiene (14+8)×6/2 = 22×3 = 66 cm². La divisione per 2 deriva dal fatto che si utilizza la media delle due basi.",
            },
        ],
    },

    {
        id: 67,
        area: "cultura-matematico-scientifica",
        category: "matematica-potenze",
        difficulty: 3,
        question:
            "Quanto vale (2³ × 4²) / 8?",
        answers: [
            {
                id: "A",
                text: "8",
                correct: false,
                explanation:
                    "Scrivendo tutto come potenze di 2 si ottiene 2³×2⁴/2³. Gli esponenti danno 3+4−3=4, quindi il risultato è 2⁴ e non 2³.",
            },
            {
                id: "B",
                text: "16",
                correct: true,
                explanation:
                    "Poiché 4²=(2²)²=2⁴ e 8=2³, l'espressione diventa 2³×2⁴/2³. Applicando le proprietà delle potenze si ottiene 2^(3+4−3)=2⁴=16.",
            },
            {
                id: "C",
                text: "32",
                correct: false,
                explanation:
                    "32 corrisponde a 2⁵, ma l'esponente risultante è 4. Nel prodotto gli esponenti si sommano, mentre nella divisione quello del denominatore viene sottratto.",
            },
            {
                id: "D",
                text: "64",
                correct: false,
                explanation:
                    "64 è 2⁶ e sovrastima il risultato. Calcolando direttamente, 2³=8 e 4²=16: 8×16/8=16.",
            },
        ],
    },

    {
        id: 68,
        area: "cultura-matematico-scientifica",
        category: "matematica-radicali",
        difficulty: 4,
        question:
            "Qual è la forma semplificata di √50 + √8?",
        answers: [
            {
                id: "A",
                text: "7√2",
                correct: true,
                explanation:
                    "√50 = √(25×2)=5√2 e √8=√(4×2)=2√2. Poiché i radicali hanno la stessa parte √2, possono essere sommati: 5√2+2√2=7√2.",
            },
            {
                id: "B",
                text: "√58",
                correct: false,
                explanation:
                    "In generale √a + √b non è uguale a √(a+b). La proprietà √(ab)=√a√b riguarda i prodotti, non permette di sommare direttamente i radicandi.",
            },
            {
                id: "C",
                text: "13√2",
                correct: false,
                explanation:
                    "I coefficienti corretti dopo la semplificazione sono 5 e 2, non 5 e 8. La loro somma è quindi 7.",
            },
            {
                id: "D",
                text: "10√2",
                correct: false,
                explanation:
                    "√50 non è 5×2 ma 5√2, mentre √8 è 2√2. Sommare correttamente i due termini simili conduce a 7√2.",
            },
        ],
    },

    {
        id: 69,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria-analitica",
        difficulty: 3,
        question:
            "Nel piano cartesiano, qual è il punto medio del segmento con estremi A(−3, 4) e B(5, −2)?",
        answers: [
            {
                id: "A",
                text: "(2, 2)",
                correct: false,
                explanation:
                    "La coordinata x del punto medio non è la differenza tra le ascisse. Bisogna calcolare separatamente la media delle due coordinate x e la media delle due coordinate y.",
            },
            {
                id: "B",
                text: "(1, 1)",
                correct: true,
                explanation:
                    "Il punto medio ha coordinate ((x₁+x₂)/2, (y₁+y₂)/2). Si ottiene quindi ((−3+5)/2, (4−2)/2) = (2/2, 2/2) = (1,1).",
            },
            {
                id: "C",
                text: "(−1, 3)",
                correct: false,
                explanation:
                    "Queste coordinate non sono le medie delle coordinate degli estremi. In particolare, l'ascissa media tra −3 e 5 deve trovarsi a 1.",
            },
            {
                id: "D",
                text: "(4, −3)",
                correct: false,
                explanation:
                    "L'alternativa utilizza valori vicini alle differenze tra le coordinate invece delle loro medie. Il punto medio deve trovarsi esattamente a metà del segmento AB.",
            },
        ],
    },

    {
        id: 70,
        area: "cultura-matematico-scientifica",
        category: "matematica-algebra",
        difficulty: 4,
        question:
            "Quali sono le soluzioni dell'equazione x² − 5x + 6 = 0?",
        answers: [
            {
                id: "A",
                text: "x = 2 e x = 3",
                correct: true,
                explanation:
                    "Il trinomio può essere scomposto come (x−2)(x−3), perché 2+3=5 e 2×3=6. Per la legge di annullamento del prodotto, l'equazione è soddisfatta quando x−2=0 oppure x−3=0, cioè x=2 o x=3.",
            },
            {
                id: "B",
                text: "x = −2 e x = −3",
                correct: false,
                explanation:
                    "Le radici −2 e −3 avrebbero somma −5 e produrrebbero un polinomio con termine lineare +5x. Nell'equazione proposta il coefficiente di x è invece −5.",
            },
            {
                id: "C",
                text: "x = 1 e x = 6",
                correct: false,
                explanation:
                    "1 e 6 hanno prodotto 6, ma la loro somma è 7. Per scomporre x²−5x+6 servono due numeri con prodotto 6 e somma 5.",
            },
            {
                id: "D",
                text: "x = 0 e x = 5",
                correct: false,
                explanation:
                    "Il prodotto di 0 e 5 è 0 e non 6. Inoltre sostituendo x=0 nell'equazione rimane 6, quindi zero non è una soluzione.",
            },
        ],
    },

    {
        id: 71,
        area: "cultura-matematico-scientifica",
        category: "biologia-fotosintesi",
        difficulty: 3,
        question:
            "Durante la fotosintesi, da quale sostanza proviene principalmente il carbonio che viene incorporato nelle molecole organiche prodotte dalla pianta?",
        answers: [
            {
                id: "A",
                text: "Dal diossido di carbonio assorbito dall'ambiente",
                correct: true,
                explanation:
                    "Le piante incorporano il carbonio della CO₂ in molecole organiche attraverso le reazioni di fissazione del carbonio. L'energia necessaria al processo deriva indirettamente dalla luce catturata durante le reazioni fotosintetiche.",
            },
            {
                id: "B",
                text: "Dall'ossigeno molecolare presente nell'atmosfera",
                correct: false,
                explanation:
                    "L'ossigeno atmosferico non costituisce la principale fonte di carbonio della biomassa vegetale, perché non contiene atomi di carbonio. Durante la fotosintesi viene inoltre liberato ossigeno come prodotto delle reazioni che coinvolgono l'acqua.",
            },
            {
                id: "C",
                text: "Dall'acqua assorbita dalle radici",
                correct: false,
                explanation:
                    "L'acqua fornisce idrogeno ed elettroni ed è indispensabile alla fotosintesi, ma la sua molecola H₂O non contiene carbonio. Il carbonio delle sostanze organiche proviene dalla CO₂.",
            },
            {
                id: "D",
                text: "Direttamente dalla luce solare",
                correct: false,
                explanation:
                    "La luce fornisce energia sotto forma di radiazione elettromagnetica, non atomi di carbonio. Energia e materia svolgono ruoli differenti nel processo fotosintetico.",
            },
        ],
    },

    {
        id: 72,
        area: "cultura-matematico-scientifica",
        category: "biologia-apparato-circolatorio",
        difficulty: 3,
        question:
            "Quale percorso descrive correttamente il sangue che attraversa l'arteria polmonare?",
        answers: [
            {
                id: "A",
                text: "Dal ventricolo destro ai polmoni",
                correct: true,
                explanation:
                    "L'arteria polmonare trasporta sangue dal ventricolo destro verso i polmoni, dove avvengono gli scambi gassosi. È un'importante eccezione all'associazione semplificata «arteria = sangue ricco di ossigeno»: le arterie sono definite dalla direzione del flusso rispetto al cuore.",
            },
            {
                id: "B",
                text: "Dai polmoni all'atrio sinistro",
                correct: false,
                explanation:
                    "Questo percorso è svolto dalle vene polmonari, che riportano al cuore sangue ossigenato proveniente dai polmoni. Il sangue entra quindi nell'atrio sinistro.",
            },
            {
                id: "C",
                text: "Dal ventricolo sinistro a tutti i tessuti del corpo",
                correct: false,
                explanation:
                    "Il sangue destinato alla circolazione sistemica lascia il ventricolo sinistro attraverso l'aorta. L'arteria polmonare appartiene invece alla piccola circolazione.",
            },
            {
                id: "D",
                text: "Dall'atrio destro direttamente all'atrio sinistro",
                correct: false,
                explanation:
                    "Nel cuore adulto normale non esiste questo percorso diretto. Il sangue passa dall'atrio destro al ventricolo destro e da lì viene inviato ai polmoni prima di tornare al lato sinistro.",
            },
        ],
    },

    {
        id: 73,
        area: "cultura-matematico-scientifica",
        category: "biologia-immunologia",
        difficulty: 4,
        question:
            "Qual è uno degli scopi fondamentali di una vaccinazione efficace nei confronti di uno specifico agente patogeno?",
        answers: [
            {
                id: "A",
                text: "Eliminare permanentemente dal corpo tutti i microrganismi, anche quelli innocui o utili.",
                correct: false,
                explanation:
                    "La vaccinazione non ha lo scopo di sterilizzare completamente l'organismo da qualsiasi microrganismo. Il corpo ospita anche comunità microbiche normali e utili, come parte del microbiota.",
            },
            {
                id: "B",
                text: "Stimolare una risposta immunitaria adattativa e la formazione di memoria immunologica contro specifici antigeni.",
                correct: true,
                explanation:
                    "La vaccinazione espone il sistema immunitario a antigeni o istruzioni che consentono di riconoscerli senza dover necessariamente affrontare la malattia naturale. La formazione di cellule della memoria permette spesso una risposta più rapida ed efficace nelle esposizioni successive.",
            },
            {
                id: "C",
                text: "Sostituire definitivamente tutti i globuli bianchi dell'organismo con anticorpi artificiali.",
                correct: false,
                explanation:
                    "Gli anticorpi sono proteine e non sostituiscono le cellule immunitarie. Una risposta adattativa coinvolge diverse popolazioni cellulari, tra cui linfociti B e T.",
            },
            {
                id: "D",
                text: "Impedire alle cellule dell'organismo di riconoscere qualsiasi sostanza estranea.",
                correct: false,
                explanation:
                    "Una vaccinazione mira proprio a migliorare il riconoscimento specifico di determinati antigeni. Sopprimere indiscriminatamente il riconoscimento delle sostanze estranee comprometterebbe invece le difese immunitarie.",
            },
        ],
    },

    {
        id: 74,
        area: "cultura-matematico-scientifica",
        category: "ecologia-popolazioni",
        difficulty: 4,
        question:
            "In un modello di crescita logistica di una popolazione, che cosa tende ad accadere quando il numero di individui si avvicina alla capacità portante dell'ambiente?",
        answers: [
            {
                id: "A",
                text: "La crescita accelera indefinitamente perché aumenta il numero degli individui capaci di riprodursi.",
                correct: false,
                explanation:
                    "Questo comportamento sarebbe più vicino a una crescita esponenziale senza limiti ambientali. Nel modello logistico, invece, la scarsità relativa di risorse aumenta all'avvicinarsi della capacità portante.",
            },
            {
                id: "B",
                text: "Il tasso di crescita netto tende a ridursi perché risorse e altri fattori limitanti diventano più importanti.",
                correct: true,
                explanation:
                    "La capacità portante rappresenta il numero di individui che l'ambiente può sostenere stabilmente nelle condizioni considerate. Avvicinandosi a quel valore, competizione, disponibilità di cibo, spazio e altri fattori tendono a rallentare l'aumento della popolazione.",
            },
            {
                id: "C",
                text: "La popolazione deve necessariamente estinguersi appena raggiunge metà della capacità portante.",
                correct: false,
                explanation:
                    "Non esiste una simile soglia generale. Nel modello logistico la crescita è spesso ancora positiva a metà della capacità portante e rallenta progressivamente avvicinandosi al limite.",
            },
            {
                id: "D",
                text: "La capacità portante aumenta automaticamente nella stessa misura della popolazione.",
                correct: false,
                explanation:
                    "La capacità portante dipende dalle caratteristiche dell'ambiente e dalle risorse disponibili, non cresce automaticamente insieme al numero degli individui. Può cambiare nel tempo, ma per cause ecologiche specifiche.",
            },
        ],

    },

    {
        id: 75,
        area: "cultura-matematico-scientifica",
        category: "chimica-legami",
        difficulty: 3,
        question:
            "Quale descrizione rappresenta meglio la formazione del legame ionico nel cloruro di sodio, NaCl?",
        answers: [
            {
                id: "A",
                text: "Sodio e cloro condividono sempre esattamente due coppie di elettroni formando una molecola covalente isolata.",
                correct: false,
                explanation:
                    "La condivisione di coppie di elettroni caratterizza i legami covalenti. Nel cloruro di sodio si formano invece ioni di carica opposta che si organizzano in un reticolo cristallino.",
            },
            {
                id: "B",
                text: "Un elettrone viene trasferito dal sodio al cloro, formando ioni Na⁺ e Cl⁻ attratti elettrostaticamente.",
                correct: true,
                explanation:
                    "Il sodio perde un elettrone diventando Na⁺, mentre il cloro lo acquista diventando Cl⁻. L'attrazione elettrostatica tra gli ioni di carica opposta dà origine al legame ionico nel reticolo del sale.",
            },
            {
                id: "C",
                text: "Il sodio acquista un protone dal cloro e diventa un isotopo più pesante.",
                correct: false,
                explanation:
                    "Un legame chimico ordinario coinvolge principalmente gli elettroni di valenza e non trasferimenti di protoni tra nuclei. Modificare il numero di protoni cambierebbe inoltre l'identità dell'elemento.",
            },
            {
                id: "D",
                text: "Gli atomi perdono entrambi tutti gli elettroni e diventano elettricamente neutri.",
                correct: false,
                explanation:
                    "La perdita di elettroni produce ioni positivi, non particelle neutre. Nel NaCl il sodio perde un elettrone e il cloro lo acquista.",
            },
        ],
    },

    {
        id: 76,
        area: "cultura-matematico-scientifica",
        category: "fisica-gas",
        difficulty: 4,
        question:
            "Una certa quantità di gas occupa 4,0 L alla pressione di 1,5 atm. Se la temperatura rimane costante e il volume viene ridotto a 3,0 L, quale sarà la nuova pressione, assumendo comportamento ideale?",
        answers: [
            {
                id: "A",
                text: "1,125 atm",
                correct: false,
                explanation:
                    "Riducendo il volume a temperatura costante la pressione deve aumentare, non diminuire. Il valore 1,125 atm deriva dall'applicazione del rapporto tra i volumi nella direzione sbagliata.",
            },
            {
                id: "B",
                text: "2,0 atm",
                correct: true,
                explanation:
                    "A temperatura costante vale la legge di Boyle, P₁V₁=P₂V₂. Quindi P₂=(1,5×4,0)/3,0=6/3=2,0 atm.",
            },
            {
                id: "C",
                text: "1,5 atm",
                correct: false,
                explanation:
                    "La pressione resterebbe 1,5 atm soltanto se la variazione di volume fosse compensata da altri cambiamenti appropriati. A temperatura e quantità di gas costanti, diminuendo il volume la pressione aumenta.",
            },
            {
                id: "D",
                text: "4,5 atm",
                correct: false,
                explanation:
                    "4,5 atm è troppo elevato e non soddisfa P₁V₁=P₂V₂. Con tale valore il prodotto finale sarebbe 4,5×3=13,5 atm·L invece dei 6 atm·L iniziali.",
            },
        ],
    },

    {
        id: 77,
        area: "cultura-matematico-scientifica",
        category: "fisica-ottica",
        difficulty: 4,
        question:
            "Un oggetto viene posto davanti a una lente convergente a una distanza maggiore del doppio della distanza focale, cioè oltre 2F. Quale immagine si forma idealmente?",
        answers: [
            {
                id: "A",
                text: "Un'immagine reale, capovolta e ridotta, situata tra F e 2F sul lato opposto della lente.",
                correct: true,
                explanation:
                    "Per una lente convergente, quando l'oggetto si trova oltre 2F, i raggi convergono realmente sul lato opposto della lente. L'immagine risultante è capovolta e più piccola dell'oggetto e si forma tra il fuoco F e il punto 2F.",
            },
            {
                id: "B",
                text: "Un'immagine virtuale, diritta e ingrandita sullo stesso lato dell'oggetto.",
                correct: false,
                explanation:
                    "Questa configurazione si verifica con una lente convergente quando l'oggetto viene posto tra la lente e il fuoco. Oltre 2F, invece, l'immagine è reale e si forma dall'altra parte.",
            },
            {
                id: "C",
                text: "Nessuna immagine, perché una lente convergente funziona soltanto per oggetti posti entro il fuoco.",
                correct: false,
                explanation:
                    "Le lenti convergenti formano immagini anche quando l'oggetto è oltre il fuoco. Cambiano posizione, dimensione e natura dell'immagine a seconda della distanza dell'oggetto.",
            },
            {
                id: "D",
                text: "Un'immagine reale, diritta e della stessa dimensione dell'oggetto.",
                correct: false,
                explanation:
                    "Un'immagine reale prodotta da una singola lente convergente in questa configurazione è capovolta. Quando l'oggetto è esattamente a 2F l'immagine ha la stessa dimensione, mentre oltre 2F risulta ridotta.",
            },
        ],
        resources: [
            {
                id: "lente-convergente-oggetto-oltre-2f",
                type: "diagram",
                label: "Diagramma dei raggi di una lente convergente",
                src: `${import.meta.env.BASE_URL}resources/diagrams/lente-convergente-oggetto-oltre-2f.png`,
                alt: "Diagramma dei raggi con oggetto oltre due volte la distanza focale e immagine reale capovolta ridotta tra F e 2F",
                caption:
                    "Il tracciamento dei raggi principali permette di determinare posizione, orientamento e dimensione dell'immagine.",
            },
        ],
    },

    {
        id: 78,
        area: "cultura-matematico-scientifica",
        category: "fisica-energia",
        difficulty: 3,
        question:
            "Una pallina cade da ferma da una certa altezza. Trascurando completamente la resistenza dell'aria, che cosa accade durante la caduta?",
        answers: [
            {
                id: "A",
                text: "L'energia potenziale gravitazionale diminuisce mentre l'energia cinetica aumenta, mantenendo costante l'energia meccanica totale.",
                correct: true,
                explanation:
                    "In assenza di forze dissipative, l'energia meccanica si conserva. Durante la caduta la diminuzione dell'energia potenziale gravitazionale viene compensata dall'aumento dell'energia cinetica.",
            },
            {
                id: "B",
                text: "Sia l'energia potenziale sia quella cinetica diminuiscono continuamente fino a diventare entrambe nulle.",
                correct: false,
                explanation:
                    "La velocità della pallina aumenta durante la caduta e quindi aumenta anche la sua energia cinetica. La diminuzione dell'energia potenziale non corrisponde a una perdita di energia meccanica quando l'attrito è trascurato.",
            },
            {
                id: "C",
                text: "L'energia cinetica rimane costante perché la massa della pallina non cambia.",
                correct: false,
                explanation:
                    "L'energia cinetica è K=½mv² e dipende anche dalla velocità, non soltanto dalla massa. Poiché la velocità aumenta durante la caduta, aumenta anche K.",
            },
            {
                id: "D",
                text: "L'energia meccanica aumenta continuamente perché la gravità crea nuova energia.",
                correct: false,
                explanation:
                    "La gravità converte energia potenziale in energia cinetica ma, nel modello senza dissipazioni, non aumenta l'energia meccanica totale. Il principio di conservazione dell'energia impedisce una creazione netta di energia.",
            },
        ],
    },

    {
        id: 79,
        area: "cultura-matematico-scientifica",
        category: "scienze-della-terra",
        difficulty: 3,
        question:
            "Come si forma tipicamente una roccia metamorfica?",
        answers: [
            {
                id: "A",
                text: "Dalla trasformazione di una roccia preesistente sottoposta a pressione e temperatura elevate senza completa fusione.",
                correct: true,
                explanation:
                    "Il metamorfismo modifica mineralogia e struttura di rocce preesistenti a causa di condizioni fisiche differenti da quelle originarie. La roccia rimane però sostanzialmente allo stato solido: se fondesse completamente si formerebbe magma.",
            },
            {
                id: "B",
                text: "Esclusivamente dal raffreddamento e dalla solidificazione diretta del magma.",
                correct: false,
                explanation:
                    "Il raffreddamento e la solidificazione del magma producono rocce magmatiche o ignee. Una roccia magmatica può successivamente diventare metamorfica se sottoposta alle condizioni appropriate.",
            },
            {
                id: "C",
                text: "Soltanto dall'accumulo e dalla cementazione di frammenti trasportati da acqua o vento.",
                correct: false,
                explanation:
                    "Deposizione, compattazione e cementazione dei sedimenti sono processi tipici della formazione di molte rocce sedimentarie. Anche queste possono però trasformarsi successivamente in rocce metamorfiche.",
            },
            {
                id: "D",
                text: "Dalla completa evaporazione del mantello terrestre vicino alla superficie.",
                correct: false,
                explanation:
                    "Il mantello non evapora per produrre rocce metamorfiche. Il metamorfismo avviene nella crosta e in altre zone geologiche attraverso cambiamenti di pressione, temperatura e talvolta circolazione di fluidi.",
            },
        ],
        resources: [
            {
                id: "ciclo-delle-rocce",
                type: "diagram",
                label: "Ciclo delle rocce",
                src: `${import.meta.env.BASE_URL}resources/diagrams/ciclo-rocce-magmatiche-sedimentarie-metamorfiche.png`,
                alt: "Diagramma del ciclo delle rocce con trasformazioni tra rocce magmatiche, sedimentarie e metamorfiche",
                caption:
                    "Lo schema distingue metamorfismo, fusione, solidificazione, erosione, sedimentazione e litificazione.",
            },
        ],
    },

    {
        id: 80,
        area: "cultura-matematico-scientifica",
        category: "astronomia",
        difficulty: 4,
        question:
            "Perché normalmente non si verifica un'eclissi di Sole a ogni Luna nuova e un'eclissi di Luna a ogni Luna piena?",
        answers: [
            {
                id: "A",
                text: "Perché la Luna smette periodicamente di orbitare attorno alla Terra durante la maggior parte dei mesi.",
                correct: false,
                explanation:
                    "La Luna continua a orbitare attorno alla Terra durante tutto il proprio ciclo. La mancata eclissi dipende dalla geometria tridimensionale delle orbite, non da interruzioni del moto lunare.",
            },
            {
                id: "B",
                text: "Perché il piano dell'orbita lunare è inclinato rispetto al piano dell'orbita terrestre, quindi Sole, Terra e Luna non sono normalmente allineati con sufficiente precisione.",
                correct: true,
                explanation:
                    "L'orbita della Luna è inclinata di circa 5° rispetto al piano dell'eclittica. Le eclissi possono verificarsi soltanto quando la fase appropriata avviene vicino ai nodi dell'orbita lunare, dove i due piani si intersecano.",
            },
            {
                id: "C",
                text: "Perché le eclissi sono possibili soltanto quando la Terra si trova alla minima distanza dal Sole.",
                correct: false,
                explanation:
                    "La distanza Terra-Sole non è il requisito fondamentale che determina ogni eclissi. È soprattutto necessario che Sole, Terra e Luna raggiungano un allineamento geometrico vicino ai nodi dell'orbita lunare.",
            },
            {
                id: "D",
                text: "Perché durante la Luna nuova e la Luna piena la Luna si trova sempre dalla stessa parte della Terra.",
                correct: false,
                explanation:
                    "Le due fasi corrispondono invece a configurazioni opposte: alla Luna nuova la Luna si trova approssimativamente nella direzione del Sole, mentre alla Luna piena si trova dalla parte opposta del cielo. Questa differenza è proprio ciò che rende possibili rispettivamente eclissi solari e lunari quando l'allineamento è abbastanza preciso.",
            },
        ],

    },
];

export default simulation02;
