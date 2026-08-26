const passages = {
    passage01: `Gli occhi spalancati. «Fino alle sei del mattino non mi sono addormentato. L’ho combinata grossa. Ma potrei stare sveglio 5-6 giorni». A rivivere un’altra volta quei momenti magici, quando la connessione dell’atleta è totale con il qui e ora, quando i sensi si acuiscono, quando non c’è pressione che appesantisce, distrae, fa disperdere energie, solo concentrazione e convinzione. «Prima della gara ero in quel momento: mi sentivo completamente libero, zero pressioni, ho scherzato con Thomas Ceccon, la sera prima abbiamo giocato a briscola». Nicolò Martinenghi (Tete è il soprannome che gli ha dato da bambino il fratello Jacopo, il primo che ha abbracciato insieme alla fidanzata Adelaide), 25 anni il 1° agosto, segni particolari campione olimpico, è il contagio che speriamo si diffonda in tutta la compagnia del cloro (lui sarà protagonista della 4X100 mista). Con la medaglia al collo ha dato il cinque più o meno a tutta la Defense Arena, la sua festa è durata più di quella dell’enfant du pays, il francese Leon Marchand. È un guascone ma tenero, in quel sorriso con un brillantino sui denti (la passione nasce dal padre Samuele, orafo a Varese, «ma questo al collo è il gioiello più bello») c’è sempre una nota di dolcezza. Da bambino il basket gli piaceva più del nuoto («ed è rimasto il mio amore»), il primo approccio con l’acqua non è stato dei più amichevoli, poi i compagni in piscina erano simpatici e lui si è convinto. Quando il suo allenatore però gli ha detto che doveva lasciare l’impianto di Brebbia per spostarsi in uno più grande, lui voleva smettere, «a me piaceva la compagnia, mica nuotare». […] Ogni tanto con la piscina ci litiga ancora. «La piscina è malinconia, in inverno è una tortura. È gioia, è dolore, è odio, è un po’ amore, amicizia, e sì, è conoscenza, perché tutti i giorni cerco di conoscere meglio me stesso e quello che faccio».`,

    passage02: `La nostra vita è fatta di situazioni in cui le parole, le azioni, gli sguardi e i corpi esistono perché occupano certi spazi. Lo spazio infatti è campo di espressione e verifica delle identità. Se questo è vero in generale, per le donne vale anche di più, perché lo spazio in molti casi ha funzionato come cifra di un destino imposto. Palazzi nascosti, case dimenticate, camere, giardini segreti, stanze con finestre, cucine, soffitte, collegi, stalle, celle di monasteri, salottini e ogni altra forma di luogo chiuso, separato dal mondo di fuori, sono stati, per secoli, gli ambienti dove spesso hanno potuto trascorrere il tempo le donne, insieme ad altre donne, oppure da sole, in compagnia di storie, quando avevano il lusso della fantasia, e di ruoli, difetti e vizi spesso inventati da altri. Non è un caso, del resto, che là dove prendono forma punti di vista e voci femminili, in letteratura come nelle altre arti, ecco che molte volte arrivano metafore e racconti visuali che ci chiedono di immaginare le esistenze altrui proprio a partire dallo spazio. Così avremo la protagonista di Una donna (Sibilla Aleramo, 1906), che nella prima pagina del romanzo parla subito della conquista di un «pezzetto di giardino mio» e usa lo spazio – delle camminate in città o della casa – per costruire il sentimento di una contrapposizione tra il mondo arioso e aperto del padre e il mondo oscuro e chiuso della madre; facendolo, tra l’altro, in un libro nato anche dalla visione di un dramma teatrale intitolato a un particolare spazio: Casa di bambola (Henrik Ibsen, 1879). Oppure, e soprattutto, ecco Virginia Woolf, per la quale riuscire a scrivere significa dichiarare guerra all’angelo del focolare, vale a dire al tipo di donna più celebrato dal poema in undici canti di Conventry Patmore The Angel in the House (1854).`,

    passage03: `Leoncino è un ragazzetto entrato appena nei dieci anni.

“Perché questo nome di Leoncino?”, domanderete voi.

La storia sarebbe un po’ lunghetta, ma io ve la racconterò in quattro parole.

Bisogna dunque sapere che quando questo bambino fu portato al fonte battesimale, la sua mamma avrebbe gradito volentieri che si fosse chiamato Luigi: ma il babbo, incaponitosi a farne col tempo un guerriero (il babbo era comandante dei pompieri e bisogna perdonargli certe debolezze guerresche) volle a tutti i costi che fosse battezzato col nome di Napoleone.

Napoleone!… Come si fa, domando io, a mettere un nomone così grosso sulla testa di un tenero lattante? C’è quasi pericolo di soffocarlo!

Fatto sta che in famiglia, per vezzeggiativo, cominciarono subito a chiamarlo Napoleoncino: ma poi, avvedutisi che questo vezzeggiativo era troppo lungo, gli tagliarono le prime due sillabe (Na-po), e così, di un Napoleoncino, ne fecero per risparmio di fiato un economico e modesto Leoncino.

Il piccolo guerriero crebbe a occhiate, e a dieci anni era già diventato un bel ragazzo. Correva, ballava, saltava, faceva la ginnastica, e, cosa singolarissima! qualche volta anche studiava.

Di burattini e di altri balocchi non voleva saperne. L’unica sua passione erano le sciabole di latta con l’impugnatura dorata e i fucilini a saltaleone, da caricarsi in tempo di pace coi lupini secchi e, in tempo di vera guerra, coi sassolini di ghiaia o coi nòccioli di ciliegia.

Il suo babbo, poi, per contentarlo e per coltivargli sempre più lo spirito marziale, gli aveva fatto fare anche l’uniforme di generale d’armata, con le spalline di bambagia gialla come lo zafferano e con un berretto di panno scuro, ornato di un bel nastro di tela incerata e rilucente, che, veduto da lontano, pareva proprio un gallone d’argento.`,
};

const simulation05 = [
    {
        id: 1,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages.passage01,
        question:
            "L’espressione “L’ho combinata grossa”, nel testo, è interpretabile come:",
        answers: [
            {
                id: "A",
                text: "la gioia per una grande impresa portata a compimento",
                correct: true,
                explanation:
                    "Nel contesto Martinenghi parla dopo una grande impresa sportiva, da campione olimpico, ed è talmente emozionato da non riuscire a dormire. L'espressione idiomatica viene quindi usata in senso scherzoso per sottolineare l'eccezionalità del risultato ottenuto.",
            },
            {
                id: "B",
                text: "la stanchezza per un’insonnia durata molti giorni",
                correct: false,
                explanation:
                    "Martinenghi dice di non essersi addormentato fino alle sei del mattino, ma non afferma di essere rimasto sveglio per molti giorni. La frase «potrei stare sveglio 5-6 giorni» esprime l'euforia del momento, non descrive un'insonnia già durata diversi giorni.",
            },
            {
                id: "C",
                text: "la consapevolezza di aver compiuto un’azione illecita, ma per una nobile causa",
                correct: false,
                explanation:
                    "Nel linguaggio comune «combinarla grossa» può indicare anche aver commesso qualcosa di grave, ma il contesto modifica chiaramente questo significato. Qui non viene descritta alcuna azione illecita.",
            },
            {
                id: "D",
                text: "un grande compromesso tra impegno, sacrificio e divertimento serale",
                correct: false,
                explanation:
                    "Il testo ricorda che Martinenghi aveva scherzato e giocato a briscola prima della gara, ma l'espressione non indica un compromesso tra queste attività. È collegata soprattutto alla grande impresa sportiva appena compiuta.",
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
            "Nel testo, l’espressione “quando i sensi si acuiscono”:",
        answers: [
            {
                id: "A",
                text: "contribuisce a descrivere la fase di alta concentrazione che precede le gare",
                correct: true,
                explanation:
                    "Il testo descrive uno stato in cui l'atleta è completamente concentrato sul «qui e ora», libero dalla pressione e dalle distrazioni. Dire che i sensi «si acuiscono» significa che le percezioni diventano più attente e intense, contribuendo allo stato di massima concentrazione.",
            },
            {
                id: "B",
                text: "evidenzia la sensibilità degli atleti a specifiche tematiche sociali",
                correct: false,
                explanation:
                    "«Sensi» indica qui le facoltà percettive, non la sensibilità morale o sociale dell'atleta. Il contesto riguarda la preparazione mentale alla competizione.",
            },
            {
                id: "C",
                text: "mette in luce la rabbia di chi si sente sotto pressione dopo una sconfitta",
                correct: false,
                explanation:
                    "Il testo descrive una situazione opposta: Martinenghi afferma di sentirsi «completamente libero» e con «zero pressioni». Non viene descritta né una sconfitta né uno stato di rabbia.",
            },
            {
                id: "D",
                text: "descrive un tratto tipico dell’atleta non concentrato",
                correct: false,
                explanation:
                    "L'acuirsi dei sensi è associato proprio alla massima concentrazione. Un atleta distratto avrebbe invece difficoltà a mantenere l'attenzione pienamente focalizzata sul presente.",
            },
        ],
    },

    {
        id: 3,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages.passage01,
        question:
            "Dal testo si deduce che:",
        answers: [
            {
                id: "A",
                text: "Nicolò Martinenghi è un campione olimpico",
                correct: true,
                explanation:
                    "Il testo lo afferma esplicitamente descrivendolo con «segni particolari campione olimpico» e facendo riferimento alla medaglia conquistata. Non è quindi una semplice supposizione.",
            },
            {
                id: "B",
                text: "Nicolò Martinenghi ha una sorella di nome Adelaide",
                correct: false,
                explanation:
                    "Adelaide viene indicata come la fidanzata di Martinenghi. Il fratello citato nel testo è invece Jacopo.",
            },
            {
                id: "C",
                text: "Thomas Ceccon è stato vittima di momenti di tensione alla Defense Arena",
                correct: false,
                explanation:
                    "Thomas Ceccon viene citato soltanto perché Martinenghi racconta di aver scherzato con lui. Il testo non fornisce alcuna informazione su suoi momenti di tensione.",
            },
            {
                id: "D",
                text: "Jacopo è campione della 4x100 mista",
                correct: false,
                explanation:
                    "Jacopo è il fratello di Nicolò. È Nicolò Martinenghi, invece, a essere indicato come futuro protagonista della staffetta 4x100 mista.",
            },
        ],
    },

    {
        id: 4,
        area: "linguistica-logica",
        category: "linguaggio-figurato",
        difficulty: 3,
        passage: passages.passage01,
        question:
            "Nel testo, l’espressione “il contagio che speriamo si diffonda in tutta la compagnia del cloro”:",
        answers: [
            {
                id: "A",
                text: "indica l’auspicio che dopo quella di Martinenghi seguano altre vittorie nel nuoto",
                correct: true,
                explanation:
                    "«Contagio» è usato figurativamente: l'autrice spera che il successo e l'entusiasmo di Martinenghi si trasmettano agli altri nuotatori italiani. Anche «compagnia del cloro» è un modo figurato per indicare l'ambiente del nuoto.",
            },
            {
                id: "B",
                text: "esprime preoccupazione per la pandemia creatasi dopo la gara",
                correct: false,
                explanation:
                    "La parola «contagio» non è utilizzata letteralmente in riferimento a una malattia. Il tono del passo è positivo e riguarda la speranza di nuovi successi sportivi.",
            },
            {
                id: "C",
                text: "ha a che vedere con le malattie virali trasmissibili in ambito sportivo",
                correct: false,
                explanation:
                    "Non si parla di virus o di trasmissione di malattie. Il termine appartiene a una metafora costruita intorno alla diffusione del successo.",
            },
            {
                id: "D",
                text: "sottolinea che il cloro può avere effetti dannosi sul sistema immunitario",
                correct: false,
                explanation:
                    "«Compagnia del cloro» indica semplicemente i nuotatori e l'ambiente delle piscine. Il testo non affronta effetti medici o immunologici del cloro.",
            },
        ],
    },

    {
        id: 5,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages.passage01,
        question:
            "Dal testo si deduce che:",
        answers: [
            {
                id: "A",
                text: "la piscina, secondo Martinenghi, è anche una forma di conoscenza",
                correct: true,
                explanation:
                    "Martinenghi afferma esplicitamente che la piscina «è conoscenza» perché ogni giorno cerca di conoscere meglio se stesso e ciò che fa. Il nuoto assume quindi per lui anche un valore di conoscenza personale.",
            },
            {
                id: "B",
                text: "Martinenghi ha sempre e soltanto amato il nuoto",
                correct: false,
                explanation:
                    "Il testo racconta un rapporto molto più complesso con il nuoto. Da bambino preferiva il basket e in un momento arrivò persino a voler smettere di nuotare.",
            },
            {
                id: "C",
                text: "secondo Martinenghi allenarsi in piscina è particolarmente gradevole nel periodo invernale",
                correct: false,
                explanation:
                    "Martinenghi dice esattamente il contrario: «in inverno è una tortura». Il suo rapporto con la piscina comprende sia aspetti positivi sia fatica e dolore.",
            },
            {
                id: "D",
                text: "da bambino Martinenghi aborriva il basket",
                correct: false,
                explanation:
                    "Il testo afferma che da bambino il basket gli piaceva più del nuoto e che è rimasto il suo «amore». Non lo detestava affatto.",
            },
        ],
    },

    {
        id: 6,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages.passage02,
        question:
            "Il contenuto informativo del testo si incentra su:",
        answers: [
            {
                id: "A",
                text: "l’importanza simbolica dello spazio",
                correct: true,
                explanation:
                    "L'intero brano analizza lo spazio non soltanto come luogo fisico, ma come elemento capace di esprimere identità, condizioni sociali e possibilità di libertà. Particolare attenzione viene dedicata al rapporto tra spazio e identità femminile.",
            },
            {
                id: "B",
                text: "la storia dell’architettura italiana",
                correct: false,
                explanation:
                    "Nel testo vengono nominati molti ambienti, come case, stanze e giardini, ma non per ricostruirne la storia architettonica. Sono utilizzati per riflettere sul significato sociale e simbolico dello spazio.",
            },
            {
                id: "C",
                text: "il modo in cui il tempo viene trascorso dagli uomini nei salotti domestici",
                correct: false,
                explanation:
                    "Il brano è centrato soprattutto sull'esperienza femminile degli spazi. Non analizza le abitudini degli uomini nei salotti.",
            },
            {
                id: "D",
                text: "la divisione strutturale più funzionale e confortevole per gli interni lavorativi e domestici",
                correct: false,
                explanation:
                    "Non è un testo di progettazione degli interni. L'organizzazione materiale degli edifici viene considerata per il suo significato culturale e sociale.",
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
            "L’autrice del testo sostiene che:",
        answers: [
            {
                id: "A",
                text: "esiste una correlazione tra lo spazio e le identità, soprattutto femminili",
                correct: true,
                explanation:
                    "All'inizio del brano viene affermato chiaramente che «lo spazio è campo di espressione e verifica delle identità» e che ciò vale particolarmente per le donne. Gli spazi possono quindi riflettere e condizionare ruoli e possibilità individuali.",
            },
            {
                id: "B",
                text: "le donne non hanno mai avuto fantasia nell’inventare racconti",
                correct: false,
                explanation:
                    "Il testo non sostiene affatto questa idea. Parla anzi di donne che potevano vivere «in compagnia di storie» quando avevano il «lusso della fantasia».",
            },
            {
                id: "C",
                text: "gli spazi abitati dalle donne hanno sempre garantito loro un pieno contatto con il mondo esterno",
                correct: false,
                explanation:
                    "Molti degli spazi citati sono invece descritti come chiusi e «separati dal mondo di fuori». Storicamente potevano quindi rappresentare anche forme di limitazione.",
            },
            {
                id: "D",
                text: "le identità sono sempre avulse dagli spazi",
                correct: false,
                explanation:
                    "È l'esatto contrario della tesi iniziale. L'autrice considera lo spazio un elemento strettamente collegato alla costruzione e alla rappresentazione delle identità.",
            },
        ],
    },

    {
        id: 8,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages.passage02,
        question:
            "Dal testo si deduce che:",
        answers: [
            {
                id: "A",
                text: "lo spazio è simbolicamente rilevante anche nel romanzo “Una donna”",
                correct: true,
                explanation:
                    "Il romanzo di Sibilla Aleramo viene utilizzato proprio come esempio. La protagonista parla di un «pezzetto di giardino mio» e contrappone attraverso gli spazi il mondo aperto del padre a quello oscuro e chiuso della madre.",
            },
            {
                id: "B",
                text: "“un pezzetto di giardino mio” è il titolo di un romanzo",
                correct: false,
                explanation:
                    "È una frase pronunciata dalla protagonista di Una donna, non il titolo dell'opera. Il titolo del romanzo è appunto Una donna.",
            },
            {
                id: "C",
                text: "“Casa di bambola” è un’opera di Sibilla Aleramo",
                correct: false,
                explanation:
                    "Il testo attribuisce Casa di bambola a Henrik Ibsen e indica anche l'anno 1879. Sibilla Aleramo è invece autrice di Una donna.",
            },
            {
                id: "D",
                text: "Ibsen non ha scritto drammi teatrali",
                correct: false,
                explanation:
                    "Il testo definisce esplicitamente Casa di bambola un «dramma teatrale» di Henrik Ibsen. L'alternativa contraddice quindi direttamente il brano.",
            },
        ],
    },

    {
        id: 9,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages.passage02,
        question:
            "Da quanto si evince dal testo, Virginia Woolf:",
        answers: [
            {
                id: "A",
                text: "ha avversato l’idea di angelo del focolare",
                correct: true,
                explanation:
                    "Il testo afferma che per Woolf riuscire a scrivere significa «dichiarare guerra all'angelo del focolare». L'espressione rappresenta un modello tradizionale e limitante di femminilità contro cui la scrittrice si pone.",
            },
            {
                id: "B",
                text: "ha scritto la prima edizione di “The Angel in the House”",
                correct: false,
                explanation:
                    "Il poema The Angel in the House viene attribuito nel testo a Coventry Patmore. Woolf ne critica invece il modello femminile.",
            },
            {
                id: "C",
                text: "in un suo poema ha celebrato la donna come angelo del focolare",
                correct: false,
                explanation:
                    "Non è Woolf a celebrare questo modello. Il testo presenta la sua posizione come esplicitamente contraria.",
            },
            {
                id: "D",
                text: "insieme a Patmore ha scritto un dramma teatrale contro le donne",
                correct: false,
                explanation:
                    "Il testo non attribuisce alcuna opera comune a Woolf e Patmore. Patmore è citato come autore del poema che contribuì a diffondere l'immagine dell'angelo del focolare.",
            },
        ],
    },

    {
        id: 10,
        area: "linguistica-logica",
        category: "lessico-nel-contesto",
        difficulty: 2,
        passage: passages.passage02,
        question:
            "Nell’espressione “all’angelo del focolare, vale a dire al tipo di donna più celebrato […]”, senza che il senso venga alterato, “vale a dire” potrebbe essere sostituito da:",
        answers: [
            {
                id: "A",
                text: "ovvero",
                correct: true,
                explanation:
                    "«Vale a dire» introduce una spiegazione o riformulazione di quanto precede. «Ovvero», usato con valore esplicativo, può svolgere la stessa funzione: «cioè», «in altre parole».",
            },
            {
                id: "B",
                text: "nonché",
                correct: false,
                explanation:
                    "«Nonché» ha normalmente valore aggiuntivo e significa «e anche», «oltre a». Non introduce quindi una riformulazione equivalente.",
            },
            {
                id: "C",
                text: "giacché",
                correct: false,
                explanation:
                    "«Giacché» è una congiunzione causale equivalente a «poiché» o «dato che». Modificherebbe il rapporto logico tra le parti della frase.",
            },
            {
                id: "D",
                text: "poiché",
                correct: false,
                explanation:
                    "«Poiché» introduce una causa. «Vale a dire» introduce invece una spiegazione del significato dell'espressione precedente.",
            },
        ],
    },

    {
        id: 11,
        area: "linguistica-logica",
        category: "comprensione-del-testo-letterario",
        difficulty: 3,
        passage: passages.passage03,
        question:
            "Dal testo si deduce che Leoncino:",
        answers: [
            {
                id: "A",
                text: "si chiama Napoleone",
                correct: true,
                explanation:
                    "Il padre volle che il bambino fosse battezzato con il nome di Napoleone. «Leoncino» nasce successivamente come abbreviazione familiare e affettuosa di «Napoleoncino».",
            },
            {
                id: "B",
                text: "ha compiuto da tempo dieci anni",
                correct: false,
                explanation:
                    "All'inizio viene descritto come un ragazzo «entrato appena nei dieci anni». Ha quindi appena raggiunto questa età.",
            },
            {
                id: "C",
                text: "non è mai stato battezzato",
                correct: false,
                explanation:
                    "Il testo racconta esplicitamente il momento in cui fu portato al fonte battesimale e la scelta del nome. È quindi stato battezzato.",
            },
            {
                id: "D",
                text: "da piccolo rischiò di morire soffocato",
                correct: false,
                explanation:
                    "Il riferimento al pericolo di soffocamento è una battuta ironica del narratore sul nome «Napoleone», considerato troppo grande per un lattante. Non descrive un reale episodio di soffocamento.",
            },
        ],
    },

    {
        id: 12,
        area: "linguistica-logica",
        category: "comprensione-del-testo-letterario",
        difficulty: 3,
        passage: passages.passage03,
        question:
            "Dal testo si deduce che il padre di Napoleone:",
        answers: [
            {
                id: "A",
                text: "aveva una passione per l’àmbito bellico",
                correct: true,
                explanation:
                    "Il narratore parla delle sue «debolezze guerresche», racconta che voleva fare del figlio un guerriero e che gli fece preparare perfino un'uniforme da generale. Sono tutti elementi che mostrano il suo interesse per l'ambito militare.",
            },
            {
                id: "B",
                text: "desiderava battezzare il figlio col nome di Luigi",
                correct: false,
                explanation:
                    "Era la madre a desiderare il nome Luigi. Il padre insistette invece perché fosse chiamato Napoleone.",
            },
            {
                id: "C",
                text: "aveva combattuto a fianco di Napoleone Bonaparte",
                correct: false,
                explanation:
                    "Il testo non afferma nulla del genere. Il nome Napoleone viene scelto per il suo significato evocativo e guerriero, non perché il padre avesse conosciuto Bonaparte.",
            },
            {
                id: "D",
                text: "faceva il guerriero, ma era particolarmente debole",
                correct: false,
                explanation:
                    "Il padre era comandante dei pompieri, non un guerriero. Inoltre le «debolezze guerresche» sono un'espressione ironica che indica la sua passione per il mondo militare.",
            },
        ],
    },

    {
        id: 13,
        area: "linguistica-logica",
        category: "lessico-nel-contesto",
        difficulty: 2,
        passage: passages.passage03,
        question:
            "Nel testo, l’espressione “per vezzeggiativo” si può interpretare come segue:",
        answers: [
            {
                id: "A",
                text: "in modo affettuoso",
                correct: true,
                explanation:
                    "Un vezzeggiativo è una forma alterata utilizzata per esprimere affetto, familiarità o tenerezza. «Napoleoncino» nasce infatti come modo familiare e affettuoso di chiamare il bambino.",
            },
            {
                id: "B",
                text: "con violenza",
                correct: false,
                explanation:
                    "Il vezzeggiativo non esprime violenza. È normalmente collegato a una sfumatura affettiva e benevola.",
            },
            {
                id: "C",
                text: "in modo oltraggioso",
                correct: false,
                explanation:
                    "Un'espressione oltraggiosa ha valore offensivo. Il vezzeggiativo, invece, è generalmente affettuoso.",
            },
            {
                id: "D",
                text: "con astio",
                correct: false,
                explanation:
                    "«Astio» indica rancore e ostilità, significati opposti alla sfumatura affettuosa normalmente espressa da un vezzeggiativo.",
            },
        ],
    },

    {
        id: 14,
        area: "linguistica-logica",
        category: "comprensione-del-testo-letterario",
        difficulty: 3,
        passage: passages.passage03,
        question:
            "Dall’espressione “Correva, ballava, saltava, faceva la ginnastica, e, cosa singolarissima! qualche volta anche studiava” si evince che:",
        answers: [
            {
                id: "A",
                text: "lo studio non era l’attività prevalente di Leoncino",
                correct: true,
                explanation:
                    "Il narratore elenca numerose attività fisiche svolte abitualmente da Leoncino e presenta ironicamente come «singolarissima» la circostanza che qualche volta studiasse. L'ironia lascia quindi capire che lo studio non era tra le sue occupazioni principali.",
            },
            {
                id: "B",
                text: "lo studio era l’attività in cui Leoncino risultava più singolarmente bravo",
                correct: false,
                explanation:
                    "Il testo non giudica la bravura scolastica di Leoncino. L'elemento considerato insolito è semplicemente il fatto che studiasse qualche volta.",
            },
            {
                id: "C",
                text: "Leoncino praticava più lo studio della corsa",
                correct: false,
                explanation:
                    "Il passo suggerisce l'opposto: le attività fisiche sono numerose e abituali, mentre lo studio compare soltanto «qualche volta».",
            },
            {
                id: "D",
                text: "la bravura di Leoncino nelle attività ludiche era singolarissima",
                correct: false,
                explanation:
                    "L'esclamazione «cosa singolarissima!» introduce specificamente il fatto che Leoncino studiasse. Non si riferisce alla sua abilità nel correre, ballare o fare ginnastica.",
            },
        ],
    },

    {
        id: 15,
        area: "linguistica-logica",
        category: "lessico-nel-contesto",
        difficulty: 3,
        passage: passages.passage03,
        question:
            "L’espressione “per coltivargli sempre più lo spirito marziale” si potrebbe interpretare nel seguente modo:",
        answers: [
            {
                id: "A",
                text: "per accrescere sempre più in lui la passione per la guerra",
                correct: true,
                explanation:
                    "«Marziale» deriva da Marte, dio romano della guerra, e significa relativo alla guerra o alla vita militare. Il padre cerca quindi di rafforzare nel figlio l'interesse per il mondo militare.",
            },
            {
                id: "B",
                text: "per invogliarlo sempre più alla passione per i viaggi spaziali",
                correct: false,
                explanation:
                    "Non bisogna confondere «marziale» con «marziano». Il primo termine riguarda la guerra e l'ambito militare, mentre il secondo si riferisce al pianeta Marte.",
            },
            {
                id: "C",
                text: "per coltivare sempre più la sua spiritualità",
                correct: false,
                explanation:
                    "La parola «spirito» potrebbe trarre in inganno, ma «spirito marziale» indica un atteggiamento combattivo e militare. Non riguarda la spiritualità religiosa o interiore.",
            },
            {
                id: "D",
                text: "per aumentare sempre più la sua bravura negli sport dell’aria",
                correct: false,
                explanation:
                    "Il testo non parla di sport aerei. Tutto il contesto - sciabole, fucili giocattolo e uniforme da generale - chiarisce il significato militare dell'espressione.",
            },
        ],
    },

    {
        id: 16,
        area: "linguistica-logica",
        category: "ortografia",
        difficulty: 2,
        question:
            "Tra le seguenti, è scritta correttamente la parola:",
        answers: [
            {
                id: "A",
                text: "igiene",
                correct: true,
                explanation:
                    "«Igiene» è la grafia corretta. La parola indica l'insieme delle pratiche e delle condizioni utili alla tutela della salute.",
            },
            {
                id: "B",
                text: "crocera",
                correct: false,
                explanation:
                    "La forma corretta è «crociera», con la «i». Per esempio: «una crociera nel Mediterraneo».",
            },
            {
                id: "C",
                text: "cospiquo",
                correct: false,
                explanation:
                    "La grafia corretta è «cospicuo», con la sequenza «-cuo». Significa notevole, considerevole o abbondante.",
            },
            {
                id: "D",
                text: "coscenza",
                correct: false,
                explanation:
                    "La forma corretta è «coscienza», con «-ienza». La stessa sequenza compare in parole derivate come «coscienzioso».",
            },
        ],
    },

    {
        id: 17,
        area: "linguistica-logica",
        category: "analisi-logica",
        difficulty: 3,
        question:
            "Individuare la frase in cui è presente un complemento d’agente:",
        answers: [
            {
                id: "A",
                text: "Francesca è stata aiutata da Marco",
                correct: true,
                explanation:
                    "La frase è passiva: «Francesca è stata aiutata». «Da Marco» indica la persona che compie l'azione espressa dal verbo passivo ed è quindi complemento d'agente.",
            },
            {
                id: "B",
                text: "Maria è arrivata tardi da Lucia",
                correct: false,
                explanation:
                    "«Da Lucia» indica il luogo o la persona presso cui Maria è arrivata. Non esiste una costruzione passiva e quindi non può essere complemento d'agente.",
            },
            {
                id: "C",
                text: "ho comprato un ferro da stiro",
                correct: false,
                explanation:
                    "«Da stiro» specifica la funzione del ferro, cioè ciò per cui viene utilizzato. Non indica chi compie l'azione.",
            },
            {
                id: "D",
                text: "la stanno aspettando da molti giorni",
                correct: false,
                explanation:
                    "«Da molti giorni» esprime la durata nel tempo di una situazione iniziata nel passato. Il «da» non introduce quindi un agente.",
            },
        ],
    },

    {
        id: 18,
        area: "linguistica-logica",
        category: "morfologia-verbale",
        difficulty: 3,
        question:
            "Individuare la voce verbale coniugata al condizionale passato:",
        answers: [
            {
                id: "A",
                text: "avrebbe pensato",
                correct: true,
                explanation:
                    "Il condizionale passato è formato dal condizionale presente dell'ausiliare più il participio passato. «Avrebbe pensato» = «avrebbe» + «pensato» ed è quindi condizionale passato.",
            },
            {
                id: "B",
                text: "penserebbe",
                correct: false,
                explanation:
                    "«Penserebbe» è condizionale presente, terza persona singolare. È una forma semplice e non contiene l'ausiliare necessario per il condizionale passato.",
            },
            {
                id: "C",
                text: "penserà",
                correct: false,
                explanation:
                    "«Penserà» è futuro semplice dell'indicativo, terza persona singolare.",
            },
            {
                id: "D",
                text: "avrà pensato",
                correct: false,
                explanation:
                    "«Avrà pensato» è futuro anteriore dell'indicativo: futuro semplice dell'ausiliare «avere» più participio passato.",
            },
        ],
    },

    {
        id: 19,
        area: "linguistica-logica",
        category: "morfologia-verbale",
        difficulty: 2,
        question:
            "Individuare la corretta coniugazione al gerundio presente di “volare”:",
        answers: [
            {
                id: "A",
                text: "volando",
                correct: true,
                explanation:
                    "Il gerundio presente dei verbi della prima coniugazione in «-are» si forma generalmente sostituendo la terminazione con «-ando». Da «volare» si ottiene quindi «volando».",
            },
            {
                id: "B",
                text: "volendo",
                correct: false,
                explanation:
                    "«Volendo» è il gerundio presente del verbo «volere», non di «volare». La somiglianza grafica non deve confondere i due verbi.",
            },
            {
                id: "C",
                text: "volante",
                correct: false,
                explanation:
                    "«Volante» può essere un participio presente o un aggettivo/sostantivo a seconda del contesto, ma non è il gerundio presente di «volare».",
            },
            {
                id: "D",
                text: "volato",
                correct: false,
                explanation:
                    "«Volato» è il participio passato di «volare». Il gerundio presente corretto è «volando».",
            },
        ],
    },

    {
        id: 20,
        area: "linguistica-logica",
        category: "analisi-logica",
        difficulty: 3,
        question:
            "Indicare la frase in cui è presente un complemento oggetto:",
        answers: [
            {
                id: "A",
                text: "non ho fatto i compiti",
                correct: true,
                explanation:
                    "«I compiti» è il complemento oggetto del verbo transitivo «fare»: indica ciò su cui ricade direttamente l'azione e risponde alla domanda «che cosa non ho fatto?».",
            },
            {
                id: "B",
                text: "l’insegnante di inglese è assente",
                correct: false,
                explanation:
                    "Il verbo «essere» collega qui il soggetto «l'insegnante di inglese» alla qualità «assente». Non è presente alcun complemento oggetto.",
            },
            {
                id: "C",
                text: "l’anello è prezioso",
                correct: false,
                explanation:
                    "Anche in questa frase «è» funziona da copula e «prezioso» è la parte nominale del predicato. «L'anello» è il soggetto, non un complemento oggetto.",
            },
            {
                id: "D",
                text: "ho giocato a pallacanestro",
                correct: false,
                explanation:
                    "Il verbo «giocare» è qui costruito con la preposizione «a»: «a pallacanestro». Proprio la presenza della preposizione mostra che non si tratta di un complemento oggetto diretto.",
            },
        ],
    },
    {
        id: 21,
        area: "linguistica-logica",
        category: "punteggiatura",
        difficulty: 3,
        question:
            "Indicare la frase in cui la punteggiatura è usata correttamente:",
        answers: [
            {
                id: "A",
                text: "Luca, che non voleva perdere, decise di non partecipare alla gara.",
                correct: true,
                explanation:
                    "La proposizione relativa «che non voleva perdere» è incidentale e fornisce un'informazione aggiuntiva su Luca; per questo viene correttamente racchiusa tra due virgole. Il resto della frase, «Luca decise di non partecipare alla gara», rimane sintatticamente completo.",
            },
            {
                id: "B",
                text: "Luca che, non voleva perdere decise di, non partecipare alla gara.",
                correct: false,
                explanation:
                    "Le virgole sono collocate in punti che spezzano illegittimamente le unità sintattiche. In particolare non si deve separare «che» dal predicato «non voleva perdere» né «decise di» dall'infinito «non partecipare».",
            },
            {
                id: "C",
                text: "Luca che non voleva perdere, decise: di non partecipare alla gara.",
                correct: false,
                explanation:
                    "La virgola prima di «decise» separa impropriamente il soggetto completo dal suo predicato. Anche i due punti tra «decise» e «di non partecipare» non sono giustificati, perché l'infinito completa direttamente il verbo.",
            },
            {
                id: "D",
                text: "Luca che non voleva perdere: decise, di non partecipare alla gara.",
                correct: false,
                explanation:
                    "I due punti non devono separare il soggetto dal predicato e la virgola non deve interrompere la costruzione «decidere di + infinito». La punteggiatura rende quindi scorretta la struttura della frase.",
            },
        ],
    },

    {
        id: 22,
        area: "linguistica-logica",
        category: "verbi-riflessivi",
        difficulty: 2,
        question:
            "Indicare la frase in cui è presente un verbo alla forma riflessiva:",
        answers: [
            {
                id: "A",
                text: "lei si sveglia sempre molto presto",
                correct: true,
                explanation:
                    "«Si sveglia» è una forma riflessiva: il soggetto «lei» compie un'azione che riguarda il soggetto stesso. Il pronome «si» accompagna il verbo «svegliare» nella forma pronominale «svegliarsi».",
            },
            {
                id: "B",
                text: "ci sono delle bibite in frigo",
                correct: false,
                explanation:
                    "«Ci sono» è una costruzione del verbo essere con valore esistenziale. Il pronome «ci» non rende il verbo riflessivo.",
            },
            {
                id: "C",
                text: "dovresti riflettere di più sulla questione",
                correct: false,
                explanation:
                    "Il verbo «riflettere» contiene graficamente la sequenza «rifl-», ma non è per questo un verbo riflessivo. Non compare infatti alcun pronome riflessivo come «mi», «ti» o «si».",
            },
            {
                id: "D",
                text: "ho pensato spesso a te",
                correct: false,
                explanation:
                    "«Ho pensato» è una normale forma attiva del verbo pensare. L'espressione «a te» è un complemento introdotto da preposizione e non indica riflessività.",
            },
        ],
    },

    {
        id: 23,
        area: "linguistica-logica",
        category: "divisione-in-sillabe",
        difficulty: 3,
        question:
            "La corretta divisione in sillabe di “sottopassaggio” è:",
        answers: [
            {
                id: "A",
                text: "sot-to-pas-sag-gio",
                correct: true,
                explanation:
                    "La divisione corretta è «sot-to-pas-sag-gio». Le consonanti doppie vengono normalmente separate tra due sillabe: «tt» diventa «t-to», «ss» diventa «s-s» e «gg» viene divisa tra «sag» e «gio».",
            },
            {
                id: "B",
                text: "sott-o-pas-sag-gio",
                correct: false,
                explanation:
                    "La doppia «tt» non rimane interamente nella prima sillaba. Nella divisione sillabica italiana le consonanti doppie vengono separate.",
            },
            {
                id: "C",
                text: "sot-to-pa-ss-agg-io",
                correct: false,
                explanation:
                    "Questa divisione spezza in modo scorretto gruppi consonantici e vocalici. In particolare «ss» e «gg» devono essere distribuite tra sillabe adiacenti secondo la struttura «pas-sag-gio».",
            },
            {
                id: "D",
                text: "so-t-to-pa-ss-a-gg-io",
                correct: false,
                explanation:
                    "La parola viene frammentata eccessivamente e vengono create sequenze che non costituiscono sillabe corrette. La divisione appropriata è «sot-to-pas-sag-gio».",
            },
        ],
    },

    {
        id: 24,
        area: "linguistica-logica",
        category: "ortografia",
        difficulty: 2,
        question:
            "Individuare la frase graficamente corretta:",
        answers: [
            {
                id: "A",
                text: "Siccome Marco si è allontanato, sto qui ad aspettarlo.",
                correct: true,
                explanation:
                    "La frase utilizza correttamente «si» senza accento, «è» con accento come verbo essere e «sto» e «qui» senza accento. Anche la virgola separa correttamente la subordinata causale dalla proposizione principale.",
            },
            {
                id: "B",
                text: "Siccome Marco sì è allontanato, stò quì ad aspettarlo.",
                correct: false,
                explanation:
                    "Sono presenti tre errori: il pronome «si» non vuole accento, «sto» si scrive senza accento e anche «qui» non è accentato. «Sì» con accento è invece l'avverbio affermativo.",
            },
            {
                id: "C",
                text: "Siccome Marco si e allontanato, sto quì ad aspettarlo.",
                correct: false,
                explanation:
                    "La voce del verbo essere deve essere scritta «è» con accento. Inoltre «qui» non vuole l'accento grafico.",
            },
            {
                id: "D",
                text: "Siccome Marco si è allontanato, stò qui ad aspettarlo.",
                correct: false,
                explanation:
                    "L'unico errore è «stò». La prima persona singolare del presente indicativo di «stare» si scrive «sto», senza accento.",
            },
        ],
    },

    {
        id: 25,
        area: "linguistica-logica",
        category: "parti-del-discorso",
        difficulty: 2,
        question:
            "“Certamente”, al livello grammaticale, è:",
        answers: [
            {
                id: "A",
                text: "un avverbio",
                correct: true,
                explanation:
                    "«Certamente» è un avverbio, formato dall'aggettivo «certo» con il suffisso avverbiale «-mente». Può esprimere certezza o affermazione, come in «Certamente verrò».",
            },
            {
                id: "B",
                text: "un nome",
                correct: false,
                explanation:
                    "Un nome designa persone, oggetti, luoghi, concetti o entità. «Certamente» non svolge questa funzione ma modifica il significato dell'enunciato esprimendo certezza.",
            },
            {
                id: "C",
                text: "una congiunzione",
                correct: false,
                explanation:
                    "Le congiunzioni collegano parole o proposizioni, come «e», «ma», «perché». «Certamente» non svolge normalmente una funzione di collegamento.",
            },
            {
                id: "D",
                text: "un pronome",
                correct: false,
                explanation:
                    "Un pronome sostituisce o richiama un nome. «Certamente» non sostituisce alcun elemento nominale ed è invece un avverbio.",
            },
        ],
    },

    {
        id: 26,
        area: "linguistica-logica",
        category: "lessico",
        difficulty: 3,
        question:
            "Avere ossequio per qualcuno significa:",
        answers: [
            {
                id: "A",
                text: "nutrire rispetto",
                correct: true,
                explanation:
                    "«Ossequio» indica rispetto profondo, deferenza o riguardo verso qualcuno. «Avere ossequio per qualcuno» significa quindi mostrargli rispetto e considerazione.",
            },
            {
                id: "B",
                text: "provare antipatia",
                correct: false,
                explanation:
                    "L'antipatia indica avversione o scarsa simpatia ed è lontana dal significato di «ossequio», che implica invece rispetto.",
            },
            {
                id: "C",
                text: "essere indifferente",
                correct: false,
                explanation:
                    "L'indifferenza indica mancanza di particolare interesse o partecipazione. L'ossequio comporta invece un atteggiamento positivo di rispetto e deferenza.",
            },
            {
                id: "D",
                text: "essere in imbarazzo",
                correct: false,
                explanation:
                    "L'imbarazzo è uno stato di disagio o difficoltà e non costituisce il significato della parola «ossequio».",
            },
        ],
    },

    {
        id: 27,
        area: "linguistica-logica",
        category: "ortografia-plurali",
        difficulty: 3,
        question:
            "Indicare, tra i seguenti, il plurale graficamente corretto:",
        answers: [
            {
                id: "A",
                text: "frecce",
                correct: true,
                explanation:
                    "Il plurale di «freccia» è «frecce». Nei nomi in «-cia» preceduti da consonante, la «i» generalmente cade al plurale: freccia → frecce.",
            },
            {
                id: "B",
                text: "fascie",
                correct: false,
                explanation:
                    "Il plurale corretto di «fascia» è «fasce». Poiché prima di «-cia» c'è una consonante, la «i» non viene mantenuta.",
            },
            {
                id: "C",
                text: "coscie",
                correct: false,
                explanation:
                    "Il plurale standard di «coscia» è «cosce». Anche qui la «i» cade davanti alla desinenza plurale.",
            },
            {
                id: "D",
                text: "spiaggie",
                correct: false,
                explanation:
                    "Il plurale corretto di «spiaggia» è «spiagge». La grafia «spiaggie» mantiene erroneamente la «i».",
            },
        ],
    },

    {
        id: 28,
        area: "linguistica-logica",
        category: "lessico-contrari",
        difficulty: 3,
        question:
            "È un contrario di “fulgido”:",
        answers: [
            {
                id: "A",
                text: "opaco",
                correct: true,
                explanation:
                    "«Fulgido» significa splendente, luminoso, brillante. «Opaco», che indica qualcosa privo di lucentezza o poco luminoso, ne rappresenta quindi un contrario appropriato.",
            },
            {
                id: "B",
                text: "lieto",
                correct: false,
                explanation:
                    "«Lieto» significa allegro, felice o favorevole e appartiene a un campo semantico differente. Non esprime l'opposto della luminosità indicata da «fulgido».",
            },
            {
                id: "C",
                text: "smagliante",
                correct: false,
                explanation:
                    "«Smagliante» significa molto brillante, luminoso o splendido. È quindi vicino a «fulgido» e non il suo contrario.",
            },
            {
                id: "D",
                text: "frenetico",
                correct: false,
                explanation:
                    "«Frenetico» indica qualcosa di agitato o caratterizzato da attività molto intensa. Non si oppone semanticamente a «fulgido».",
            },
        ],
    },

    {
        id: 29,
        area: "linguistica-logica",
        category: "pronomi-relativi",
        difficulty: 3,
        question:
            "Individuare la continuazione corretta. “La persona …”:",
        answers: [
            {
                id: "A",
                text: "di cui ti parlavo, ora si è laureata",
                correct: true,
                explanation:
                    "Il verbo «parlare» nella costruzione proposta richiede la preposizione «di»: «parlare di qualcuno». Il pronome relativo corretto è quindi «di cui»: «la persona di cui ti parlavo».",
            },
            {
                id: "B",
                text: "a cui avevo conosciuto, si chiama Laura",
                correct: false,
                explanation:
                    "Il verbo «conoscere» è transitivo e regge direttamente il complemento oggetto: si dice «avevo conosciuto la persona», non «avevo conosciuto alla persona». Sarebbe corretto «che avevo conosciuto».",
            },
            {
                id: "C",
                text: "della quale avevo incontrato, mi piace molto",
                correct: false,
                explanation:
                    "Anche «incontrare» è transitivo e non richiede la preposizione «di». La costruzione corretta sarebbe «la persona che avevo incontrato».",
            },
            {
                id: "D",
                text: "dove mi piaceva, non mi ha più chiamato",
                correct: false,
                explanation:
                    "«Dove» è normalmente un avverbio relativo riferito a un luogo e non può sostituire correttamente «la persona». La frase risulta quindi sintatticamente incoerente.",
            },
        ],
    },

    {
        id: 30,
        area: "linguistica-logica",
        category: "lessico-sinonimi",
        difficulty: 4,
        question:
            "NON è un sinonimo di “improcrastinabile”:",
        answers: [
            {
                id: "A",
                text: "indissolubile",
                correct: true,
                explanation:
                    "«Indissolubile» significa che non può essere sciolto, separato o spezzato, anche in senso figurato. Non significa quindi «che non può essere rimandato», valore proprio di «improcrastinabile».",
            },
            {
                id: "B",
                text: "improrogabile",
                correct: false,
                explanation:
                    "«Improrogabile» indica qualcosa che non può essere prorogato o rinviato. È quindi sinonimo di «improcrastinabile».",
            },
            {
                id: "C",
                text: "indifferibile",
                correct: false,
                explanation:
                    "«Indifferibile» significa che non può essere differito, cioè rimandato a un momento successivo. Ha quindi un significato molto vicino a «improcrastinabile».",
            },
            {
                id: "D",
                text: "indilazionabile",
                correct: false,
                explanation:
                    "«Indilazionabile» significa che non ammette dilazioni o rinvii. Anche questo termine è sinonimo di «improcrastinabile».",
            },
        ],
    },

    {
        id: 31,
        area: "linguistica-logica",
        category: "connettivi",
        difficulty: 3,
        question:
            "Nella frase “Non si fa aiutare, …………. tutti gli offrano il loro supporto”, si potrebbe completare la parte mancante con:",
        answers: [
            {
                id: "A",
                text: "nonostante",
                correct: true,
                explanation:
                    "«Nonostante» introduce una relazione concessiva: tutti gli offrono supporto, ma ciò nonostante la persona non si lascia aiutare. È inoltre correttamente seguito dal congiuntivo «offrano».",
            },
            {
                id: "B",
                text: "infatti",
                correct: false,
                explanation:
                    "«Infatti» introduce normalmente una spiegazione o una conferma di quanto precede. Qui invece le due informazioni sono in contrasto: riceve offerte di aiuto ma non si fa aiutare.",
            },
            {
                id: "C",
                text: "poiché",
                correct: false,
                explanation:
                    "«Poiché» introduce una causa. La frase significherebbe che la persona rifiuta l'aiuto perché tutti glielo offrono, rapporto logico che non corrisponde al significato previsto.",
            },
            {
                id: "D",
                text: "tuttavia",
                correct: false,
                explanation:
                    "«Tuttavia» ha valore avversativo, ma non può essere inserito direttamente davanti alla proposizione con il congiuntivo «tutti gli offrano». Una costruzione possibile sarebbe, per esempio, «Tutti gli offrono supporto; tuttavia, non si fa aiutare».",
            },
        ],
    },

    {
        id: 32,
        area: "linguistica-logica",
        category: "aggettivi-indefiniti",
        difficulty: 2,
        question:
            "In “qualsiasi libro va bene”, “qualsiasi”, al livello grammaticale, è:",
        answers: [
            {
                id: "A",
                text: "un aggettivo indefinito",
                correct: true,
                explanation:
                    "«Qualsiasi» accompagna il sostantivo «libro» senza identificarne uno preciso. Svolge quindi la funzione di aggettivo indefinito.",
            },
            {
                id: "B",
                text: "un pronome personale",
                correct: false,
                explanation:
                    "I pronomi personali sono forme come «io», «tu», «lui», «lei», «noi». «Qualsiasi» non indica una persona grammaticale.",
            },
            {
                id: "C",
                text: "un aggettivo qualificativo",
                correct: false,
                explanation:
                    "Un aggettivo qualificativo attribuisce una qualità al nome, come «grande» o «interessante». «Qualsiasi» esprime invece indeterminatezza nella scelta.",
            },
            {
                id: "D",
                text: "una congiunzione",
                correct: false,
                explanation:
                    "Le congiunzioni collegano parole o proposizioni. «Qualsiasi» accompagna direttamente il nome «libro» e non svolge funzione di collegamento.",
            },
        ],
    },

    {
        id: 33,
        area: "linguistica-logica",
        category: "aggettivi-gradi",
        difficulty: 3,
        question:
            "La forma “acerrimo” è:",
        answers: [
            {
                id: "A",
                text: "un superlativo",
                correct: true,
                explanation:
                    "«Acerrimo» è una forma di superlativo assoluto di origine latina, collegata all'aggettivo «acre». Si usa soprattutto in espressioni come «acerrimo nemico» per indicare un grado molto intenso della qualità.",
            },
            {
                id: "B",
                text: "un sostantivo",
                correct: false,
                explanation:
                    "«Acerrimo» è un aggettivo e concorda con il nome a cui si riferisce: «acerrimo avversario», «acerrima rivalità». Non è normalmente un sostantivo.",
            },
            {
                id: "C",
                text: "un comparativo di minoranza",
                correct: false,
                explanation:
                    "Il comparativo di minoranza utilizza una struttura come «meno forte di». «Acerrimo» esprime invece un grado molto elevato della qualità.",
            },
            {
                id: "D",
                text: "un’interiezione",
                correct: false,
                explanation:
                    "Le interiezioni sono espressioni come «ah!», «oh!» o «ahi!». «Acerrimo» non appartiene a questa categoria grammaticale.",
            },
        ],
    },

    {
        id: 34,
        area: "linguistica-logica",
        category: "morfologia-verbale",
        difficulty: 3,
        question:
            "La forma verbale “avessero ascoltato” è coniugata:",
        answers: [
            {
                id: "A",
                text: "al congiuntivo trapassato",
                correct: true,
                explanation:
                    "Il congiuntivo trapassato si forma con il congiuntivo imperfetto dell'ausiliare più il participio passato. «Avessero» è congiuntivo imperfetto di «avere» e «ascoltato» è il participio passato.",
            },
            {
                id: "B",
                text: "al congiuntivo presente",
                correct: false,
                explanation:
                    "Il congiuntivo presente del verbo ascoltare avrebbe forme come «che ascoltino». La forma proposta contiene invece un ausiliare al congiuntivo imperfetto.",
            },
            {
                id: "C",
                text: "al congiuntivo imperfetto",
                correct: false,
                explanation:
                    "«Avessero» da solo è congiuntivo imperfetto di «avere», ma insieme al participio «ascoltato» costruisce il tempo composto chiamato congiuntivo trapassato.",
            },
            {
                id: "D",
                text: "all’indicativo trapassato remoto",
                correct: false,
                explanation:
                    "Il trapassato remoto indicativo avrebbe una forma come «ebbero ascoltato». «Avessero ascoltato» appartiene invece al modo congiuntivo.",
            },
        ],
    },

    {
        id: 35,
        area: "linguistica-logica",
        category: "ortografia",
        difficulty: 3,
        question:
            "Indicare la frase graficamente corretta:",
        answers: [
            {
                id: "A",
                text: "se arriverete in tempo, ceneremo insieme",
                correct: true,
                explanation:
                    "Le parole della frase sono tutte graficamente corrette: «se» è una congiunzione e non richiede accento, mentre «arriverete» e «ceneremo» sono correttamente coniugati.",
            },
            {
                id: "B",
                text: "chi fa da sé fa per tré",
                correct: false,
                explanation:
                    "«Sé» richiede correttamente l'accento quando è pronome tonico, ma «tre» si scrive senza accento. La forma «tré» è quindi errata.",
            },
            {
                id: "C",
                text: "non sò se uscire o stare a casa",
                correct: false,
                explanation:
                    "La prima persona singolare del presente indicativo di «sapere» si scrive «so», senza accento. «Sò» è una grafia errata.",
            },
            {
                id: "D",
                text: "ognuno tenga vicino a se il proprio bagaglio",
                correct: false,
                explanation:
                    "Quando è pronome personale tonico e significa «se stesso», «sé» richiede l'accento: «vicino a sé». Senza accento, «se» è normalmente una congiunzione.",
            },
        ],
    },

    {
        id: 36,
        area: "linguistica-logica",
        category: "analisi-del-periodo",
        difficulty: 3,
        question:
            "Indicare la corretta forma esplicita della frase “Mi accorsi di non avere più fame”:",
        answers: [
            {
                id: "A",
                text: "mi accorsi che non avevo più fame",
                correct: true,
                explanation:
                    "«Di non avere più fame» è una subordinata implicita costruita con l'infinito. La corrispondente forma esplicita utilizza la congiunzione «che» e un verbo di modo finito: «che non avevo più fame».",
            },
            {
                id: "B",
                text: "mi accorsi di non aver avuto fame",
                correct: false,
                explanation:
                    "La proposizione rimane implicita perché continua a essere introdotta da «di» e utilizza un infinito, «aver avuto». Inoltre modifica il rapporto temporale rispetto alla frase originaria.",
            },
            {
                id: "C",
                text: "mi accorsi di non essere affamato",
                correct: false,
                explanation:
                    "Anche questa costruzione è implicita perché presenta l'infinito «essere». Il quesito chiede invece la trasformazione in una subordinata esplicita.",
            },
            {
                id: "D",
                text: "me ne accorsi non essendo affamato",
                correct: false,
                explanation:
                    "La costruzione con il gerundio cambia il rapporto sintattico e logico tra le proposizioni. Non rappresenta la trasformazione esplicita dell'originale.",
            },
        ],
    },

    {
        id: 37,
        area: "linguistica-logica",
        category: "lessico-sinonimi",
        difficulty: 3,
        question:
            "NON è un sinonimo di “abominevole”:",
        answers: [
            {
                id: "A",
                text: "abbiente",
                correct: true,
                explanation:
                    "«Abbiente» significa economicamente benestante o dotato di mezzi. Non ha quindi alcuna relazione sinonimica con «abominevole», che indica qualcosa di ripugnante o moralmente spregevole.",
            },
            {
                id: "B",
                text: "esecrabile",
                correct: false,
                explanation:
                    "«Esecrabile» indica qualcosa degno di forte condanna o ripugnanza ed è quindi un sinonimo appropriato di «abominevole».",
            },
            {
                id: "C",
                text: "turpe",
                correct: false,
                explanation:
                    "«Turpe» significa moralmente vergognoso, ignobile o ripugnante. È semanticamente vicino ad «abominevole».",
            },
            {
                id: "D",
                text: "spregevole",
                correct: false,
                explanation:
                    "«Spregevole» indica qualcosa o qualcuno degno di disprezzo. Anche questo termine appartiene allo stesso campo semantico di «abominevole».",
            },
        ],
    },

    {
        id: 38,
        area: "linguistica-logica",
        category: "pronomi-personali",
        difficulty: 3,
        question:
            "A partire dalla frase “Qualcuno può prestare il dizionario a Paolo?”, individuare la forma con il pronome corretto:",
        answers: [
            {
                id: "A",
                text: "Qualcuno gli può prestare il dizionario?",
                correct: true,
                explanation:
                    "«A Paolo» è un complemento di termine maschile singolare e viene sostituito dal pronome personale atono «gli». La frase conserva quindi il significato originale.",
            },
            {
                id: "B",
                text: "Qualcuno le può prestare il dizionario?",
                correct: false,
                explanation:
                    "Nell'italiano standard «le» sostituisce normalmente un complemento di termine femminile singolare, per esempio «a Lucia». Paolo è invece maschile.",
            },
            {
                id: "C",
                text: "Qualcuno ne può prestare il dizionario?",
                correct: false,
                explanation:
                    "«Ne» può sostituire complementi introdotti da «di» o esprimere valore partitivo. Non sostituisce il complemento di termine «a Paolo».",
            },
            {
                id: "D",
                text: "Qualcuno ci può prestare il dizionario?",
                correct: false,
                explanation:
                    "«Ci» può significare «a noi», «in quel luogo» o assumere altri valori pronominali. Non sostituisce correttamente «a Paolo».",
            },
        ],
    },

    {
        id: 39,
        area: "linguistica-logica",
        category: "pronomi",
        difficulty: 4,
        question:
            "Nella frase “Questo è il libro che Lucia mi ha regalato: ne ho già letti tre capitoli”, il “ne” si riferisce a:",
        answers: [
            {
                id: "A",
                text: "Libro",
                correct: true,
                explanation:
                    "Il pronome «ne» equivale qui a «del libro»: «ho già letto tre capitoli del libro». Riprende quindi anaforicamente il referente «libro».",
            },
            {
                id: "B",
                text: "Lucia",
                correct: false,
                explanation:
                    "La frase non significa «tre capitoli di Lucia». Lucia è la persona che ha regalato il libro, ma non è il referente del pronome.",
            },
            {
                id: "C",
                text: "Già",
                correct: false,
                explanation:
                    "«Già» è un avverbio di tempo e non può costituire l'antecedente di «ne». Il pronome rimanda a un elemento nominale precedente.",
            },
            {
                id: "D",
                text: "capitoli",
                correct: false,
                explanation:
                    "«Capitoli» compare dopo «ne» ed è l'oggetto quantificato: «tre capitoli». «Ne» specifica da quale libro provengono quei capitoli, quindi non sostituisce «capitoli».",
            },
        ],
    },

    {
        id: 40,
        area: "linguistica-logica",
        category: "morfologia-verbale",
        difficulty: 2,
        question:
            "La forma verbale “sii” è coniugata al modo:",
        answers: [
            {
                id: "A",
                text: "imperativo",
                correct: true,
                explanation:
                    "«Sii» è la seconda persona singolare dell'imperativo presente del verbo «essere», come nella frase «Sii prudente!». Viene utilizzato per esprimere un ordine, un invito o un'esortazione.",
            },
            {
                id: "B",
                text: "congiuntivo",
                correct: false,
                explanation:
                    "La seconda persona singolare del congiuntivo presente di «essere» è «sia», come in «penso che tu sia pronto». «Sii» appartiene invece all'imperativo.",
            },
            {
                id: "C",
                text: "indicativo",
                correct: false,
                explanation:
                    "Nell'indicativo presente la seconda persona singolare del verbo «essere» è «sei». La forma «sii» non appartiene quindi all'indicativo.",
            },
            {
                id: "D",
                text: "infinito",
                correct: false,
                explanation:
                    "L'infinito del verbo è semplicemente «essere». L'infinito non varia in base alla persona grammaticale.",
            },
        ],
    },
    {
        id: 41,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 2,
        question:
            "A che genere letterario appartiene L’Orlando furioso di Ludovico Ariosto?",
        answers: [
            {
                id: "A",
                text: "Epico-cavalleresco",
                correct: true,
                explanation:
                    "L'Orlando furioso è un poema epico-cavalleresco di Ludovico Ariosto. Riprende la materia cavalleresca legata ai paladini di Carlo Magno e intreccia guerra, amore, avventura e magia.",
            },
            {
                id: "B",
                text: "Lirico",
                correct: false,
                explanation:
                    "La lirica è un genere prevalentemente legato all'espressione dei sentimenti e dell'interiorità dell'io poetico. L'Orlando furioso è invece un ampio poema narrativo.",
            },
            {
                id: "C",
                text: "Oratorio",
                correct: false,
                explanation:
                    "L'oratorio è soprattutto una composizione musicale, spesso di argomento religioso, destinata all'esecuzione vocale e strumentale. Non è il genere dell'opera ariostesca.",
            },
            {
                id: "D",
                text: "Didascalico",
                correct: false,
                explanation:
                    "Un'opera didascalica mira principalmente a insegnare o trasmettere conoscenze. L'Orlando furioso ha invece carattere narrativo, epico e cavalleresco.",
            },
        ],
    },

    {
        id: 42,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 3,
        question:
            "Chi è l’autore del romanzo I vecchi e i giovani?",
        answers: [
            {
                id: "A",
                text: "Alessandro Manzoni",
                correct: false,
                explanation:
                    "Alessandro Manzoni è soprattutto autore de I promessi sposi. Non scrisse I vecchi e i giovani.",
            },
            {
                id: "B",
                text: "Guido Gozzano",
                correct: false,
                explanation:
                    "Guido Gozzano è principalmente un poeta legato al Crepuscolarismo, noto per raccolte come I colloqui. Non è autore del romanzo indicato.",
            },
            {
                id: "C",
                text: "Giovanni Pascoli",
                correct: false,
                explanation:
                    "Giovanni Pascoli è uno dei maggiori poeti italiani tra Ottocento e Novecento, autore di Myricae e Canti di Castelvecchio. Non scrisse I vecchi e i giovani.",
            },
            {
                id: "D",
                text: "Luigi Pirandello",
                correct: true,
                explanation:
                    "I vecchi e i giovani è un romanzo di Luigi Pirandello. L'opera affronta anche la crisi politica e sociale della Sicilia e dell'Italia postunitaria, mettendo a confronto generazioni e ideali differenti.",
            },
        ],
    },

    {
        id: 43,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 2,
        question:
            "Chi è l’autore del romanzo Gli indifferenti?",
        answers: [
            {
                id: "A",
                text: "Pierpaolo Pasolini",
                correct: false,
                explanation:
                    "Pier Paolo Pasolini è autore di opere come Ragazzi di vita e Le ceneri di Gramsci. Gli indifferenti non appartiene alla sua produzione.",
            },
            {
                id: "B",
                text: "Alberto Moravia",
                correct: true,
                explanation:
                    "Gli indifferenti è il romanzo d'esordio di Alberto Moravia, pubblicato nel 1929. L'opera rappresenta la crisi morale e l'inerzia della borghesia attraverso la famiglia Ardengo.",
            },
            {
                id: "C",
                text: "Elena Ferrante",
                correct: false,
                explanation:
                    "Elena Ferrante è un'autrice contemporanea nota soprattutto per la saga de L'amica geniale. Non è l'autrice de Gli indifferenti.",
            },
            {
                id: "D",
                text: "Niccolò Ammanniti",
                correct: false,
                explanation:
                    "Niccolò Ammaniti è uno scrittore contemporaneo, autore tra l'altro di Io non ho paura. Gli indifferenti è invece di Moravia.",
            },
        ],
    },

    {
        id: 44,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 3,
        question:
            "Chi è l’autore del romanzo Quer pasticciaccio brutto di via Merulana?",
        answers: [
            {
                id: "A",
                text: "Carlo Emilio Gadda",
                correct: true,
                explanation:
                    "Quer pasticciaccio brutto de via Merulana è uno dei romanzi più celebri di Carlo Emilio Gadda. L'opera è nota anche per la forte sperimentazione linguistica e per la mescolanza di italiano, dialetti e registri diversi.",
            },
            {
                id: "B",
                text: "Giuseppe Gioacchino Belli",
                correct: false,
                explanation:
                    "Giuseppe Gioachino Belli è noto soprattutto per i suoi sonetti in romanesco dell'Ottocento. Non scrisse il romanzo indicato.",
            },
            {
                id: "C",
                text: "Carlo Alberto Camillo Sallustri (Trilussa)",
                correct: false,
                explanation:
                    "Trilussa fu un poeta romano celebre per componimenti in dialetto romanesco. Non è autore di Quer pasticciaccio brutto de via Merulana.",
            },
            {
                id: "D",
                text: "Alberto Moravia",
                correct: false,
                explanation:
                    "Moravia è autore di romanzi come Gli indifferenti e La noia. Il Pasticciaccio è invece opera di Carlo Emilio Gadda.",
            },
        ],
    },

    {
        id: 45,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 2,
        question:
            "Chi ha scritto Il Gattopardo ?",
        answers: [
            {
                id: "A",
                text: "Giuseppe Tomasi di Lampedusa",
                correct: true,
                explanation:
                    "Il Gattopardo è il celebre romanzo di Giuseppe Tomasi di Lampedusa, pubblicato postumo nel 1958. È ambientato soprattutto nella Sicilia del Risorgimento e segue le vicende della famiglia del principe di Salina.",
            },
            {
                id: "B",
                text: "Federico De Roberto",
                correct: false,
                explanation:
                    "Federico De Roberto è autore de I Viceré, un altro importante romanzo ambientato nella società siciliana. Non scrisse Il Gattopardo.",
            },
            {
                id: "C",
                text: "Giovanni Verga",
                correct: false,
                explanation:
                    "Giovanni Verga è autore di opere come I Malavoglia e Mastro-don Gesualdo. Non è autore de Il Gattopardo.",
            },
            {
                id: "D",
                text: "Luigi Pirandello",
                correct: false,
                explanation:
                    "Pirandello scrisse romanzi, novelle e opere teatrali come Il fu Mattia Pascal e Sei personaggi in cerca d'autore. Il Gattopardo è di Tomasi di Lampedusa.",
            },
        ],
    },

    {
        id: 46,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 3,
        question:
            "Tra queste, qual è un’opera di Pier Paolo Pasolini?",
        answers: [
            {
                id: "A",
                text: "Le ceneri di Gramsci",
                correct: true,
                explanation:
                    "Le ceneri di Gramsci è una raccolta poetica di Pier Paolo Pasolini pubblicata nel 1957. Vi emergono temi politici, sociali e autobiografici tipici della riflessione dell'autore.",
            },
            {
                id: "B",
                text: "Sei personaggi in cerca di autore",
                correct: false,
                explanation:
                    "Sei personaggi in cerca d'autore è un'opera teatrale di Luigi Pirandello, rappresentata per la prima volta nel 1921.",
            },
            {
                id: "C",
                text: "La noia",
                correct: false,
                explanation:
                    "La noia è un romanzo di Alberto Moravia pubblicato nel 1960. Non appartiene alla produzione di Pasolini.",
            },
            {
                id: "D",
                text: "Nessuno si salva da solo",
                correct: false,
                explanation:
                    "Nessuno si salva da solo è un romanzo di Margaret Mazzantini. Non è un'opera di Pier Paolo Pasolini.",
            },
        ],
    },

    {
        id: 47,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-medievale",
        difficulty: 2,
        question:
            "Di quale argomento Dante parla nell’opera La Vita Nova?",
        answers: [
            {
                id: "A",
                text: "L’incontro e l’amore per Beatrice",
                correct: true,
                explanation:
                    "La Vita Nova è un prosimetro giovanile di Dante incentrato sull'esperienza amorosa e spirituale legata a Beatrice. Alterna parti in prosa e componimenti poetici.",
            },
            {
                id: "B",
                text: "Le lotte tra l’Impero e il Papato",
                correct: false,
                explanation:
                    "Il rapporto tra potere imperiale e papale è affrontato in modo più diretto in opere politiche come la Monarchia. Non è il tema principale della Vita Nova.",
            },
            {
                id: "C",
                text: "Le pene dei dannati nell’Inferno",
                correct: false,
                explanation:
                    "Le pene dei dannati appartengono alla prima cantica della Divina Commedia, l'Inferno. La Vita Nova è invece legata soprattutto alla figura di Beatrice e all'amore.",
            },
            {
                id: "D",
                text: "Il paesaggio del Purgatorio",
                correct: false,
                explanation:
                    "Il Purgatorio è la seconda cantica della Divina Commedia. Non costituisce l'argomento della Vita Nova.",
            },
        ],
    },

    {
        id: 48,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storiografia",
        difficulty: 4,
        question:
            "Chi ha fondato nel 1929 la rivista Annales d’Histoire Économique et Sociale?",
        answers: [
            {
                id: "A",
                text: "Marc Bloch, Lucien Febvre",
                correct: true,
                explanation:
                    "Marc Bloch e Lucien Febvre fondarono nel 1929 la rivista Annales d'histoire économique et sociale. Da questa esperienza nacque la cosiddetta scuola delle Annales, che ampliò lo studio storico includendo economia, società, mentalità e fenomeni di lunga durata.",
            },
            {
                id: "B",
                text: "Michel Foucault",
                correct: false,
                explanation:
                    "Michel Foucault fu un filosofo e storico delle idee francese del Novecento, ma non fu tra i fondatori della rivista Annales.",
            },
            {
                id: "C",
                text: "Jacques Derrida",
                correct: false,
                explanation:
                    "Jacques Derrida è noto soprattutto come filosofo legato alla decostruzione. Non fondò la rivista Annales.",
            },
            {
                id: "D",
                text: "Gilles Deleuze e Félix Guattari",
                correct: false,
                explanation:
                    "Deleuze e Guattari furono importanti filosofi del Novecento e collaborarono in diverse opere, ma non fondarono la rivista Annales.",
            },
        ],
    },

    {
        id: 49,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-moderna",
        difficulty: 2,
        question:
            "Quando è avvenuta la presa della Bastiglia, simbolo dell’ancien régime, evento fondamentale della Rivoluzione francese?",
        answers: [
            {
                id: "A",
                text: "12 marzo 1915",
                correct: false,
                explanation:
                    "Il 1915 appartiene al periodo della Prima guerra mondiale, oltre un secolo dopo la Rivoluzione francese. Non può quindi essere la data della presa della Bastiglia.",
            },
            {
                id: "B",
                text: "14 luglio 1789",
                correct: true,
                explanation:
                    "La Bastiglia fu presa il 14 luglio 1789 a Parigi. L'evento divenne uno dei simboli principali dell'inizio della Rivoluzione francese e il 14 luglio è oggi festa nazionale in Francia.",
            },
            {
                id: "C",
                text: "6 maggio 1848",
                correct: false,
                explanation:
                    "Il 1848 fu un anno di importanti rivoluzioni europee, ma la presa della Bastiglia avvenne molti decenni prima, nel 1789.",
            },
            {
                id: "D",
                text: "5 marzo 1739",
                correct: false,
                explanation:
                    "Il 1739 precede di cinquant'anni la Rivoluzione francese. La data corretta è il 14 luglio 1789.",
            },
        ],
    },

    {
        id: 50,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-risorgimento",
        difficulty: 2,
        question:
            "Di che anno è lo Statuto Albertino, statuto fondamentale della monarchia di Savoia?",
        answers: [
            {
                id: "A",
                text: "1915",
                correct: false,
                explanation:
                    "Il 1915 è l'anno dell'ingresso dell'Italia nella Prima guerra mondiale. Lo Statuto Albertino era già in vigore da molti decenni.",
            },
            {
                id: "B",
                text: "1848",
                correct: true,
                explanation:
                    "Lo Statuto Albertino fu concesso da Carlo Alberto di Savoia nel 1848 al Regno di Sardegna. Dopo l'unificazione divenne la carta fondamentale del Regno d'Italia fino all'entrata in vigore della Costituzione repubblicana.",
            },
            {
                id: "C",
                text: "1861",
                correct: false,
                explanation:
                    "Il 1861 è l'anno della proclamazione del Regno d'Italia. Lo Statuto Albertino risale invece al 1848.",
            },
            {
                id: "D",
                text: "1870",
                correct: false,
                explanation:
                    "Il 1870 è legato soprattutto alla presa di Roma e al completamento dell'unificazione territoriale italiana dell'epoca. Lo Statuto era stato concesso nel 1848.",
            },
        ],
    },

    {
        id: 51,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-risorgimento",
        difficulty: 2,
        question:
            "Quando nasce il Regno d’Italia?",
        answers: [
            {
                id: "A",
                text: "17 marzo 1815",
                correct: false,
                explanation:
                    "Nel 1815 l'Italia era ancora suddivisa in diversi Stati e il Congresso di Vienna aveva ridisegnato l'assetto politico europeo dopo Napoleone.",
            },
            {
                id: "B",
                text: "17 marzo 1861",
                correct: true,
                explanation:
                    "Il Regno d'Italia fu proclamato il 17 marzo 1861, con Vittorio Emanuele II come re. Il processo di unificazione territoriale non era però ancora completamente concluso.",
            },
            {
                id: "C",
                text: "17 marzo 1789",
                correct: false,
                explanation:
                    "Il 1789 è l'anno d'inizio della Rivoluzione francese e precede di molti decenni l'unificazione italiana.",
            },
            {
                id: "D",
                text: "17 marzo 1961",
                correct: false,
                explanation:
                    "Il 1961 rappresentò il centenario dell'Unità d'Italia. Il Regno era nato esattamente cento anni prima.",
            },
        ],
    },

    {
        id: 52,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "educazione-civica",
        difficulty: 2,
        question:
            "Quando è entrata in vigore la Costituzione italiana?",
        answers: [
            {
                id: "A",
                text: "1950",
                correct: false,
                explanation:
                    "Nel 1950 la Costituzione era già in vigore da due anni. Era stata approvata dall'Assemblea Costituente nel 1947.",
            },
            {
                id: "B",
                text: "1946",
                correct: false,
                explanation:
                    "Nel 1946 si svolsero il referendum istituzionale e l'elezione dell'Assemblea Costituente. La Costituzione non entrò però in vigore in quell'anno.",
            },
            {
                id: "C",
                text: "1948",
                correct: true,
                explanation:
                    "La Costituzione della Repubblica Italiana entrò in vigore il 1° gennaio 1948. Era stata promulgata il 27 dicembre 1947.",
            },
            {
                id: "D",
                text: "1962",
                correct: false,
                explanation:
                    "Il 1962 è molto successivo alla nascita della Repubblica e all'entrata in vigore della Costituzione.",
            },
        ],
    },

    {
        id: 53,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "unione-europea",
        difficulty: 3,
        question:
            "Quando è entrato in vigore il Trattato di Maastricht?",
        answers: [
            {
                id: "A",
                text: "1 novembre 1993",
                correct: true,
                explanation:
                    "Il Trattato di Maastricht entrò in vigore il 1° novembre 1993. Firmato nel 1992, istituì formalmente l'Unione Europea e pose le basi per ulteriori sviluppi dell'integrazione, compresa l'unione economica e monetaria.",
            },
            {
                id: "B",
                text: "1 novembre 1989",
                correct: false,
                explanation:
                    "Il 1989 è ricordato soprattutto per la caduta del Muro di Berlino. Il Trattato di Maastricht non era ancora stato firmato.",
            },
            {
                id: "C",
                text: "1 novembre 1979",
                correct: false,
                explanation:
                    "Nel 1979 avvennero le prime elezioni dirette del Parlamento europeo, ma Maastricht appartiene agli anni Novanta.",
            },
            {
                id: "D",
                text: "1 novembre 1969",
                correct: false,
                explanation:
                    "Nel 1969 l'integrazione europea era ancora nella fase delle Comunità europee. Il Trattato di Maastricht entrò in vigore nel 1993.",
            },
        ],
    },

    {
        id: 54,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-contemporanea",
        difficulty: 2,
        question:
            "Quando è avvenuta la recente invasione russa dell’Ucraina?",
        answers: [
            {
                id: "A",
                text: "Febbraio 2018",
                correct: false,
                explanation:
                    "Il 2018 non è l'anno dell'invasione russa su vasta scala indicata dal quesito. Le tensioni russo-ucraine erano comunque già iniziate negli anni precedenti.",
            },
            {
                id: "B",
                text: "Febbraio 2010",
                correct: false,
                explanation:
                    "Il 2010 precede sia l'annessione russa della Crimea del 2014 sia l'invasione su vasta scala del 2022.",
            },
            {
                id: "C",
                text: "Febbraio 2022",
                correct: true,
                explanation:
                    "La Russia avviò l'invasione su vasta scala dell'Ucraina il 24 febbraio 2022. Il conflitto russo-ucraino aveva però radici precedenti e comprendeva già gli eventi iniziati nel 2014.",
            },
            {
                id: "D",
                text: "Febbraio 2000",
                correct: false,
                explanation:
                    "Il 2000 è molto precedente alla fase del conflitto cui fa riferimento il quesito.",
            },
        ],
    },

    {
        id: 55,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-astronomica",
        difficulty: 3,
        question:
            "Cosa è una eclissi solare?",
        answers: [
            {
                id: "A",
                text: "Un fenomeno ottico-astronomico visto dalla terra caratterizzato dall’oscuramento di tutto una parte del disco solare da parte della Luna",
                correct: true,
                explanation:
                    "L'alternativa presenta un piccolo errore formale nel testo del PDF, ma descrive il concetto corretto: un'eclissi solare si verifica quando la Luna si interpone tra Terra e Sole e oscura totalmente o parzialmente il disco solare per un osservatore terrestre.",
            },
            {
                id: "B",
                text: "Un fenomeno ottico astronomico visto dalla luna caratterizzato dall’oscuramento di tutto o una parte del disco solare da parte della luna",
                correct: false,
                explanation:
                    "Il fenomeno definito eclissi solare nel normale riferimento astronomico viene osservato dalla Terra. La Luna si trova tra la Terra e il Sole.",
            },
            {
                id: "C",
                text: "Un fenomeno ottico astronomico visto dal sole caratterizzato dall’oscuramento di tutto o una parte del disco solare da parte della luna",
                correct: false,
                explanation:
                    "Non ha senso definire l'eclissi solare come un fenomeno osservato dal Sole. È l'osservatore terrestre a vedere la Luna coprire apparentemente il disco solare.",
            },
            {
                id: "D",
                text: "Nessuna delle risposte è corretta",
                correct: false,
                explanation:
                    "L'alternativa A, nonostante la formulazione imperfetta presente nel PDF, contiene la definizione corretta del fenomeno.",
            },
        ],
    },

    {
        id: 56,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-fisica",
        difficulty: 3,
        question:
            "Cosa è una gola?",
        answers: [
            {
                id: "A",
                text: "Una conformazione verticale in cui la parte superiore presenti una più accentuata sporgenza in avanti rispetto a quella inferiore",
                correct: false,
                explanation:
                    "Questa descrizione richiama piuttosto una parete sporgente o una conformazione rocciosa particolare. Non definisce una gola geografica.",
            },
            {
                id: "B",
                text: "Una valle profondamente incisa, caratterizzata da pareti molto ripide sul cui fondo scorre in genere un corso d’acqua",
                correct: true,
                explanation:
                    "Una gola è una valle stretta e profondamente incisa, delimitata da pareti ripide o quasi verticali. È spesso prodotta dall'erosione esercitata nel tempo da un corso d'acqua.",
            },
            {
                id: "C",
                text: "Una formazione naturale caratterizzata da diversi strati di roccia rossa che rivelano milioni di anni di storia geologica.",
                correct: false,
                explanation:
                    "Una gola può certamente mostrare strati rocciosi di epoche diverse, ma il colore rosso e la stratificazione non ne costituiscono la definizione generale.",
            },
            {
                id: "D",
                text: "Nessuna delle risposte è corretta",
                correct: false,
                explanation:
                    "L'alternativa B fornisce una definizione geografica corretta di gola.",
            },
        ],
    },

    {
        id: 57,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-politica",
        difficulty: 2,
        question:
            "Qual è il paese più popoloso dell’Africa?",
        answers: [
            {
                id: "A",
                text: "Mozambico",
                correct: false,
                explanation:
                    "Il Mozambico possiede una popolazione numerosa, ma molto inferiore a quella della Nigeria.",
            },
            {
                id: "B",
                text: "Algeria",
                correct: false,
                explanation:
                    "L'Algeria è il Paese africano più esteso per superficie, ma non il più popoloso.",
            },
            {
                id: "C",
                text: "Somalia",
                correct: false,
                explanation:
                    "La Somalia ha una popolazione molto più ridotta rispetto alla Nigeria e non è il Paese più popoloso del continente.",
            },
            {
                id: "D",
                text: "Nigeria",
                correct: true,
                explanation:
                    "La Nigeria è il Paese più popoloso dell'Africa, con oltre duecento milioni di abitanti. È anche uno degli Stati demograficamente più importanti del mondo.",
            },
        ],
    },

    {
        id: 58,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-italiana",
        difficulty: 2,
        question:
            "Qual è la regione meno estesa d’Italia?",
        answers: [
            {
                id: "A",
                text: "Molise",
                correct: false,
                explanation:
                    "Il Molise è una delle regioni italiane più piccole, ma la sua superficie è superiore a quella della Valle d'Aosta.",
            },
            {
                id: "B",
                text: "Basilicata",
                correct: false,
                explanation:
                    "La Basilicata ha una superficie nettamente maggiore rispetto alla Valle d'Aosta.",
            },
            {
                id: "C",
                text: "Liguria",
                correct: false,
                explanation:
                    "La Liguria è una regione territorialmente piccola e stretta tra montagne e mare, ma non è la meno estesa d'Italia.",
            },
            {
                id: "D",
                text: "Valle d’Aosta",
                correct: true,
                explanation:
                    "La Valle d'Aosta è la regione italiana meno estesa, con una superficie di circa 3.260 km². È anche una regione autonoma a statuto speciale.",
            },
        ],
    },

    {
        id: 59,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-sociale",
        difficulty: 3,
        question:
            "Che si intende per minoranze linguistiche?",
        answers: [
            {
                id: "A",
                text: "gruppi di popolazione che parlano una lingua materna diversa da quella di una maggioranza",
                correct: true,
                explanation:
                    "Una minoranza linguistica è una comunità che utilizza tradizionalmente una lingua diversa da quella parlata dalla maggioranza della popolazione di un determinato territorio o Stato. In Italia diverse minoranze linguistiche storiche sono tutelate dalla legge.",
            },
            {
                id: "B",
                text: "gruppi di immigrati che parlano lingue diverse",
                correct: false,
                explanation:
                    "Un gruppo di immigrati può naturalmente utilizzare una lingua differente, ma il concetto di minoranza linguistica non coincide semplicemente con quello di immigrazione. Può riguardare comunità storicamente presenti in un territorio da secoli.",
            },
            {
                id: "C",
                text: "gruppi che abitano nel medesimo comune",
                correct: false,
                explanation:
                    "Vivere nello stesso comune non determina l'appartenenza a una minoranza linguistica. Il criterio rilevante è l'uso di una lingua propria distinta da quella maggioritaria.",
            },
            {
                id: "D",
                text: "nessuna risposta è corretta",
                correct: false,
                explanation:
                    "L'alternativa A fornisce la definizione generale corretta.",
            },
        ],
    },

    {
        id: 60,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-economica",
        difficulty: 2,
        question:
            "Qual è la regione italiana con il PIL più alto?",
        answers: [
            {
                id: "A",
                text: "Liguria",
                correct: false,
                explanation:
                    "La Liguria contribuisce all'economia italiana soprattutto attraverso servizi, portualità e turismo, ma il suo PIL complessivo è nettamente inferiore a quello della Lombardia.",
            },
            {
                id: "B",
                text: "Campania",
                correct: false,
                explanation:
                    "La Campania è una delle regioni economicamente e demograficamente più importanti del Mezzogiorno, ma non possiede il PIL regionale complessivo più elevato d'Italia.",
            },
            {
                id: "C",
                text: "Toscana",
                correct: false,
                explanation:
                    "La Toscana possiede un'economia importante e diversificata, ma il suo prodotto interno lordo complessivo è inferiore a quello lombardo.",
            },
            {
                id: "D",
                text: "Lombardia",
                correct: true,
                explanation:
                    "La Lombardia è la regione italiana che produce il valore più elevato di PIL complessivo. Il territorio concentra una parte molto rilevante dell'industria, dei servizi, della finanza e delle attività economiche nazionali.",
            },
        ],
    },
    {
        id: 61,
        area: "cultura-matematico-scientifica",
        category: "scienze-della-terra-atmosfera",
        difficulty: 2,
        question:
            "Quale strumento viene utilizzato per misurare l'umidità dell'aria?",
        answers: [
            {
                id: "A",
                text: "barometro",
                correct: false,
                explanation:
                    "Il barometro misura la pressione atmosferica, non l'umidità dell'aria. La pressione atmosferica rappresenta la pressione esercitata dall'atmosfera sulla superficie terrestre.",
            },
            {
                id: "B",
                text: "termometro",
                correct: false,
                explanation:
                    "Il termometro misura la temperatura. Sebbene temperatura e umidità siano grandezze meteorologiche collegate, per misurare direttamente l'umidità si utilizza un altro strumento.",
            },
            {
                id: "C",
                text: "igrometro",
                correct: true,
                explanation:
                    "L'igrometro è lo strumento utilizzato per misurare l'umidità dell'aria. In meteorologia viene spesso misurata l'umidità relativa, cioè il rapporto tra la quantità di vapore acqueo presente nell'aria e quella massima che potrebbe contenere nelle stesse condizioni.",
            },
            {
                id: "D",
                text: "metro",
                correct: false,
                explanation:
                    "Il metro è un'unità di misura della lunghezza e, nel linguaggio comune, indica anche strumenti utilizzati per misurare distanze. Non serve a misurare l'umidità atmosferica.",
            },
        ],
    },

    {
        id: 62,
        area: "cultura-matematico-scientifica",
        category: "scienze-della-terra-climatologia",
        difficulty: 2,
        question:
            "Cosa si intende per escursione termica?",
        answers: [
            {
                id: "A",
                text: "la differenza tra la temperatura massima e quella minima",
                correct: true,
                explanation:
                    "L'escursione termica è la differenza tra la temperatura massima e quella minima registrate in un determinato intervallo di tempo. Per esempio, se durante una giornata si raggiungono 25 °C e la minima è 10 °C, l'escursione termica giornaliera è di 15 °C.",
            },
            {
                id: "B",
                text: "l'escursione che si svolge in montagna solo nei mesi estivi",
                correct: false,
                explanation:
                    "Qui il termine «escursione» non indica una gita. «Escursione termica» è un'espressione scientifica relativa alla variazione della temperatura.",
            },
            {
                id: "C",
                text: "la differenza delle ore del dì e quelle della notte",
                correct: false,
                explanation:
                    "La differenza tra durata del giorno e della notte riguarda fenomeni astronomici legati alle stagioni e alla latitudine. Non definisce l'escursione termica.",
            },
            {
                id: "D",
                text: "la differenza tra le temperature dell'emisfero boreale e quello australe",
                correct: false,
                explanation:
                    "L'escursione termica non confronta necessariamente due emisferi. Può essere calcolata per una singola località confrontando temperatura massima e minima.",
            },
        ],
    },

    {
        id: 63,
        area: "cultura-matematico-scientifica",
        category: "scienze-della-terra-oceanografia",
        difficulty: 3,
        question:
            "Che cosa sono le maree?",
        answers: [
            {
                id: "A",
                text: "variazioni casuali del livello del mare",
                correct: false,
                explanation:
                    "Le maree non sono variazioni casuali. Presentano una periodicità legata principalmente alle interazioni gravitazionali tra Terra, Luna e Sole.",
            },
            {
                id: "B",
                text: "variazioni dell'altezza del mare dovute alla rotazione terrestre",
                correct: false,
                explanation:
                    "La rotazione terrestre influenza il modo in cui osserviamo il ciclo delle maree, ma non ne costituisce da sola la causa fondamentale. Il fenomeno è legato soprattutto all'attrazione gravitazionale esercitata dalla Luna e, in misura minore, dal Sole.",
            },
            {
                id: "C",
                text: "variazioni del livello del mare dovute all'attrazione gravitazionale della Luna e del Sole",
                correct: true,
                explanation:
                    "Le maree sono oscillazioni periodiche del livello dei mari prodotte principalmente dall'attrazione gravitazionale della Luna e anche del Sole. La loro intensità varia in base alle posizioni relative di Terra, Luna e Sole.",
            },
            {
                id: "D",
                text: "oscillazioni delle acque dovute all'azione del vento sulla superficie del mare",
                correct: false,
                explanation:
                    "Il vento è uno dei principali responsabili delle onde superficiali, non delle maree. Onde e maree sono fenomeni differenti e hanno cause diverse.",
            },
        ],
    },

    {
        id: 64,
        area: "cultura-matematico-scientifica",
        category: "geografia-fisica",
        difficulty: 2,
        question:
            "Cosa significa la sigla \"s.l.m.\" dopo l'indicazione della quota di un punto sulla superficie terrestre?",
        answers: [
            {
                id: "A",
                text: "sopra la media",
                correct: false,
                explanation:
                    "La sigla non riguarda una media statistica. Nelle indicazioni geografiche delle altitudini il riferimento utilizzato è il livello medio del mare.",
            },
            {
                id: "B",
                text: "sotto le montagne",
                correct: false,
                explanation:
                    "Questa espressione non corrisponde alla sigla geografica «s.l.m.». La quota di un luogo viene normalmente espressa rispetto al livello del mare.",
            },
            {
                id: "C",
                text: "sopra le maree",
                correct: false,
                explanation:
                    "La sigla non significa «sopra le maree». Il mare viene utilizzato come superficie convenzionale di riferimento per misurare l'altitudine.",
            },
            {
                id: "D",
                text: "sul livello del mare",
                correct: true,
                explanation:
                    "«s.l.m.» significa «sul livello del mare». Una quota di 500 m s.l.m., per esempio, indica che il punto si trova a circa 500 metri sopra il livello medio del mare assunto come riferimento.",
            },
        ],
    },

    {
        id: 65,
        area: "cultura-matematico-scientifica",
        category: "biologia-sistema-endocrino",
        difficulty: 3,
        question:
            "Indicare l’abbinamento ERRATO tra ghiandole endocrine e ormoni",
        answers: [
            {
                id: "A",
                text: "tiroide-melatonina",
                correct: true,
                explanation:
                    "L'abbinamento è errato. La melatonina è prodotta principalmente dalla ghiandola pineale o epifisi, mentre la tiroide produce soprattutto ormoni tiroidei come tiroxina (T4) e triiodotironina (T3).",
            },
            {
                id: "B",
                text: "pancreas-insulina",
                correct: false,
                explanation:
                    "L'abbinamento è corretto. Le cellule beta delle isole pancreatiche producono insulina, ormone fondamentale nella regolazione della concentrazione di glucosio nel sangue.",
            },
            {
                id: "C",
                text: "testicolo-testosterone",
                correct: false,
                explanation:
                    "L'abbinamento è corretto. I testicoli, in particolare le cellule di Leydig, producono testosterone, importante ormone sessuale androgeno.",
            },
            {
                id: "D",
                text: "ovaio-estrogeni",
                correct: false,
                explanation:
                    "L'abbinamento è corretto. Le ovaie producono, tra gli altri ormoni sessuali, estrogeni e progesterone.",
            },
        ],
    },

    {
        id: 66,
        area: "cultura-matematico-scientifica",
        category: "biologia-microbiologia",
        difficulty: 2,
        question:
            "L’influenza è dovuta:",
        answers: [
            {
                id: "A",
                text: "all’azione del polline",
                correct: false,
                explanation:
                    "Il polline può provocare reazioni allergiche come rinite e congiuntivite, ma non causa l'influenza. Le allergie e le infezioni influenzali hanno cause differenti.",
            },
            {
                id: "B",
                text: "all’azione di uno stafilococco",
                correct: false,
                explanation:
                    "Gli stafilococchi sono batteri che possono provocare diverse infezioni, ma non sono responsabili dell'influenza.",
            },
            {
                id: "C",
                text: "all’azione di uno pneumococco",
                correct: false,
                explanation:
                    "Lo pneumococco è un batterio che può provocare malattie come polmonite, meningite e otite. Non è l'agente causale dell'influenza.",
            },
            {
                id: "D",
                text: "ad una infezione virale",
                correct: true,
                explanation:
                    "L'influenza è una malattia infettiva provocata dai virus influenzali. Per questo gli antibiotici, che agiscono contro i batteri, non curano direttamente l'infezione influenzale virale.",
            },
        ],
    },

    {
        id: 67,
        area: "cultura-matematico-scientifica",
        category: "biologia-cellulare",
        difficulty: 3,
        question:
            "Il pH fisiologico all’interno della cellula è:",
        answers: [
            {
                id: "A",
                text: "1.0",
                correct: false,
                explanation:
                    "Un pH pari a 1 indica un ambiente estremamente acido e sarebbe incompatibile con il normale funzionamento della maggior parte delle strutture cellulari.",
            },
            {
                id: "B",
                text: "2.5",
                correct: false,
                explanation:
                    "Anche 2,5 rappresenta un valore fortemente acido. Alcuni compartimenti cellulari possono avere un pH più acido, ma non rappresenta il valore fisiologico generale indicato dal quesito.",
            },
            {
                id: "C",
                text: "7.4",
                correct: true,
                explanation:
                    "Nel test la risposta indicata è 7,4. Il concetto fondamentale da ricordare è che l'ambiente fisiologico cellulare è mantenuto vicino alla neutralità grazie a sistemi tampone e meccanismi di regolazione, perché variazioni estreme di pH altererebbero la funzione di proteine ed enzimi.",
            },
            {
                id: "D",
                text: "13.4",
                correct: false,
                explanation:
                    "Un pH di 13,4 è estremamente basico e non è compatibile con le normali condizioni fisiologiche della cellula.",
            },
        ],
    },

    {
        id: 68,
        area: "cultura-matematico-scientifica",
        category: "biologia-biochimica",
        difficulty: 3,
        question:
            "Il glucosio è:",
        answers: [
            {
                id: "A",
                text: "un monosaccaride",
                correct: true,
                explanation:
                    "Il glucosio è un monosaccaride, cioè uno zucchero semplice che non può essere idrolizzato in carboidrati ancora più piccoli. È una delle principali molecole utilizzate dalle cellule come fonte energetica.",
            },
            {
                id: "B",
                text: "un disaccaride",
                correct: false,
                explanation:
                    "Un disaccaride è formato dall'unione di due monosaccaridi, come il saccarosio formato da glucosio e fruttosio. Il glucosio è invece una singola unità monosaccaridica.",
            },
            {
                id: "C",
                text: "uno zucchero contenente un gruppo chetonico",
                correct: false,
                explanation:
                    "Il glucosio è classificato come aldoso, perché nella sua forma aperta possiede un gruppo aldeidico. Il fruttosio è invece un esempio tipico di chetoso.",
            },
            {
                id: "D",
                text: "un composto aromatico",
                correct: false,
                explanation:
                    "Il glucosio non è un composto aromatico. È un carboidrato con formula molecolare C6H12O6.",
            },
        ],
    },

    {
        id: 69,
        area: "cultura-matematico-scientifica",
        category: "biologia-biochimica",
        difficulty: 3,
        question:
            "Il legame peptidico è il tipo di legame covalente che unisce due:",
        answers: [
            {
                id: "A",
                text: "Nucleotidi",
                correct: false,
                explanation:
                    "I nucleotidi degli acidi nucleici sono collegati principalmente mediante legami fosfodiesterici. Il legame peptidico riguarda invece la costruzione delle proteine.",
            },
            {
                id: "B",
                text: "Amminoacidi",
                correct: true,
                explanation:
                    "Il legame peptidico è un legame covalente che si forma tra il gruppo carbossilico di un amminoacido e il gruppo amminico di un altro. La ripetizione di questi legami permette la formazione delle catene polipeptidiche delle proteine.",
            },
            {
                id: "C",
                text: "acidi grassi",
                correct: false,
                explanation:
                    "Gli acidi grassi partecipano alla formazione di lipidi e possono legarsi, per esempio, al glicerolo attraverso legami estere. Non vengono uniti tra loro mediante legami peptidici.",
            },
            {
                id: "D",
                text: "monosaccaridi",
                correct: false,
                explanation:
                    "I monosaccaridi possono unirsi formando disaccaridi e polisaccaridi mediante legami glicosidici. Il legame peptidico è specifico degli amminoacidi.",
            },
        ],
    },

    {
        id: 70,
        area: "cultura-matematico-scientifica",
        category: "chimica-struttura-atomica",
        difficulty: 2,
        question:
            "Di quali particelle è fatto un atomo?",
        answers: [
            {
                id: "A",
                text: "nucleoni, elettroni e neutroni",
                correct: false,
                explanation:
                    "Il termine «nucleoni» comprende già protoni e neutroni. Aggiungere nuovamente i neutroni rende quindi l'elenco ridondante e non rappresenta la risposta prevista dal quesito.",
            },
            {
                id: "B",
                text: "protoni, neutroni ed elettroni",
                correct: true,
                explanation:
                    "Nel modello atomico di base, un atomo è costituito da un nucleo contenente protoni e neutroni, attorno al quale si trovano gli elettroni. I protoni hanno carica positiva, gli elettroni negativa e i neutroni sono elettricamente neutri.",
            },
            {
                id: "C",
                text: "bosoni, protoni e neutroni",
                correct: false,
                explanation:
                    "I bosoni sono una categoria di particelle della fisica fondamentale, ma non costituiscono l'elenco scolastico delle tre particelle subatomiche fondamentali dell'atomo richiesto dal quesito.",
            },
            {
                id: "D",
                text: "elettroni e protoni",
                correct: false,
                explanation:
                    "Questo elenco omette i neutroni, presenti nel nucleo della maggior parte degli atomi. Fa eccezione il più comune isotopo dell'idrogeno, il cui nucleo contiene un solo protone.",
            },
        ],
    },

    {
        id: 71,
        area: "cultura-matematico-scientifica",
        category: "chimica-legami",
        difficulty: 3,
        question:
            "Le molecole di acqua possono interagire tra loro mediante la formazione di:",
        answers: [
            {
                id: "A",
                text: "legami a idrogeno",
                correct: true,
                explanation:
                    "Le molecole d'acqua sono polari: l'ossigeno possiede una parziale carica negativa e gli idrogeni parziali cariche positive. Questa polarità permette la formazione di legami a idrogeno tra molecole differenti, responsabili di molte proprietà particolari dell'acqua.",
            },
            {
                id: "B",
                text: "legami covalenti puri",
                correct: false,
                explanation:
                    "Un legame covalente puro implica una condivisione sostanzialmente uniforme degli elettroni. I legami O-H all'interno della molecola d'acqua sono invece covalenti polari.",
            },
            {
                id: "C",
                text: "legami covalenti polari",
                correct: false,
                explanation:
                    "I legami covalenti polari uniscono ossigeno e idrogeno ALL'INTERNO di ciascuna molecola d'acqua. Il quesito chiede invece come molecole d'acqua diverse interagiscano tra loro: attraverso legami a idrogeno.",
            },
            {
                id: "D",
                text: "legami ionici",
                correct: false,
                explanation:
                    "Un legame ionico deriva dall'attrazione elettrostatica tra ioni di carica opposta. Le normali interazioni tra molecole d'acqua non sono legami ionici.",
            },
        ],
    },

    {
        id: 72,
        area: "cultura-matematico-scientifica",
        category: "chimica-organica",
        difficulty: 2,
        question:
            "L’elemento principale delle molecole organiche è:",
        answers: [
            {
                id: "A",
                text: "il sodio",
                correct: false,
                explanation:
                    "Il sodio è un elemento importante per numerosi processi biologici, soprattutto sotto forma di ione Na+, ma non costituisce l'elemento strutturale fondamentale delle molecole organiche.",
            },
            {
                id: "B",
                text: "l’argon",
                correct: false,
                explanation:
                    "L'argon è un gas nobile chimicamente poco reattivo. Non rappresenta la base strutturale dei composti organici.",
            },
            {
                id: "C",
                text: "il calcio",
                correct: false,
                explanation:
                    "Il calcio è importante per ossa, segnalazione cellulare e altri processi biologici, ma la chimica organica è fondata principalmente sui composti del carbonio.",
            },
            {
                id: "D",
                text: "il carbonio",
                correct: true,
                explanation:
                    "Il carbonio è l'elemento fondamentale delle molecole organiche. Grazie alla capacità di formare quattro legami covalenti può costruire catene, anelli e strutture molto complesse alla base di carboidrati, lipidi, proteine e acidi nucleici.",
            },
        ],
    },

    {
        id: 73,
        area: "cultura-matematico-scientifica",
        category: "chimica-equilibrio",
        difficulty: 4,
        question:
            "In una reazione chimica reversibile la velocità della reazione da sinistra a destra è uguale a quella da destra a sinistra quando:",
        answers: [
            {
                id: "A",
                text: "la concentrazione dei reagenti è uguale a quella dei prodotti",
                correct: false,
                explanation:
                    "All'equilibrio le concentrazioni di reagenti e prodotti rimangono costanti, ma non devono necessariamente essere uguali tra loro. Possono esserci, per esempio, molti più prodotti che reagenti.",
            },
            {
                id: "B",
                text: "la reazione è esotermica verso destra",
                correct: false,
                explanation:
                    "Il fatto che una direzione della reazione sia esotermica riguarda lo scambio di energia, ma non definisce la condizione in cui le due velocità diventano uguali.",
            },
            {
                id: "C",
                text: "la reazione è all’equilibrio",
                correct: true,
                explanation:
                    "L'equilibrio chimico è dinamico: la reazione diretta e quella inversa continuano entrambe, ma avvengono alla stessa velocità. Per questo le concentrazioni macroscopiche di reagenti e prodotti non cambiano più nel tempo.",
            },
            {
                id: "D",
                text: "temperatura e pressione sono quelle standard",
                correct: false,
                explanation:
                    "Una reazione può raggiungere l'equilibrio anche in condizioni diverse da quelle standard. Temperatura e pressione possono influenzare la posizione dell'equilibrio, ma non è necessario che abbiano valori standard.",
            },
        ],
    },

    {
        id: 74,
        area: "cultura-matematico-scientifica",
        category: "chimica-acidi-basi",
        difficulty: 3,
        question:
            "Quando si scioglie in acqua il composto NaOH, il pH della soluzione ottenuta è sempre:",
        answers: [
            {
                id: "A",
                text: "uguale a 7",
                correct: false,
                explanation:
                    "Un pH pari a 7 indica una soluzione neutra nelle condizioni ordinarie considerate. NaOH è invece una base forte e rende la soluzione basica.",
            },
            {
                id: "B",
                text: "maggiore di 7",
                correct: true,
                explanation:
                    "L'idrossido di sodio, NaOH, è una base forte e in acqua libera ioni OH−. L'aumento della concentrazione di ioni idrossido rende la soluzione basica, quindi con pH maggiore di 7 nelle condizioni considerate dal quesito.",
            },
            {
                id: "C",
                text: "minore di 7",
                correct: false,
                explanation:
                    "Un pH inferiore a 7 caratterizza una soluzione acida. NaOH produce invece una soluzione basica.",
            },
            {
                id: "D",
                text: "uguale a 5",
                correct: false,
                explanation:
                    "pH 5 corrisponde a una soluzione acida. È quindi incompatibile con la presenza di una base forte come NaOH.",
            },
        ],
    },

    {
        id: 75,
        area: "cultura-matematico-scientifica",
        category: "matematica-divisibilita",
        difficulty: 2,
        question:
            "Un multiplo di 6:",
        answers: [
            {
                id: "A",
                text: "è anche un divisore di 6",
                correct: false,
                explanation:
                    "Multiplo e divisore sono concetti differenti. Per esempio 12 è multiplo di 6, ma non è divisore di 6 perché 6/12 non è un numero intero.",
            },
            {
                id: "B",
                text: "è anche un multiplo di 3",
                correct: true,
                explanation:
                    "Ogni multiplo di 6 può essere scritto come 6n. Poiché 6=2×3, si ha 6n=3×(2n): è quindi sempre anche un multiplo di 3.",
            },
            {
                id: "C",
                text: "Può essere dispari",
                correct: false,
                explanation:
                    "Ogni multiplo intero di 6 è anche multiplo di 2 e quindi è necessariamente pari. Non può essere dispari.",
            },
            {
                id: "D",
                text: "nessuno risposta è corretta",
                correct: false,
                explanation:
                    "Una risposta corretta esiste: l'alternativa B. Ogni multiplo di 6 è necessariamente anche multiplo di 3.",
            },
        ],
    },

    {
        id: 76,
        area: "cultura-matematico-scientifica",
        category: "matematica-divisibilita",
        difficulty: 2,
        question:
            "Il massimo comune divisore tra 9 e 16",
        answers: [
            {
                id: "A",
                text: "è 1",
                correct: true,
                explanation:
                    "I divisori di 9 sono 1, 3 e 9, mentre quelli di 16 sono 1, 2, 4, 8 e 16. L'unico divisore comune è 1, quindi MCD(9,16)=1. I due numeri sono coprimi.",
            },
            {
                id: "B",
                text: "è 0",
                correct: false,
                explanation:
                    "Zero non può essere il massimo comune divisore di due numeri positivi. Almeno 1 divide sempre entrambi.",
            },
            {
                id: "C",
                text: "non esiste",
                correct: false,
                explanation:
                    "Il massimo comune divisore di due interi positivi esiste sempre. In questo caso è 1.",
            },
            {
                id: "D",
                text: "è 6",
                correct: false,
                explanation:
                    "6 non divide né 9 né 16 senza resto. Non può quindi essere un divisore comune.",
            },
        ],
    },

    {
        id: 77,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria",
        difficulty: 3,
        question:
            "In quale dei seguenti elenchi compaiono solo poligoni regolari?",
        answers: [
            {
                id: "A",
                text: "quadrato, rombo, rettangolo",
                correct: false,
                explanation:
                    "Il quadrato è regolare perché possiede tutti i lati e tutti gli angoli uguali. Un rombo generico ha tutti i lati uguali ma non necessariamente tutti gli angoli uguali, mentre un rettangolo generico ha angoli uguali ma non tutti i lati uguali.",
            },
            {
                id: "B",
                text: "quadrato, rettangolo, triangolo rettangolo",
                correct: false,
                explanation:
                    "Un rettangolo generico non è regolare perché i quattro lati non sono tutti uguali. Anche un triangolo rettangolo non può essere regolare, perché un triangolo regolare è necessariamente equilatero con tre angoli di 60°.",
            },
            {
                id: "C",
                text: "quadrato, rombo, pentagono",
                correct: false,
                explanation:
                    "Un rombo non è necessariamente regolare e neppure un pentagono generico lo è. Per essere regolare, un poligono deve avere sia tutti i lati sia tutti gli angoli congruenti.",
            },
            {
                id: "D",
                text: "quadrato, triangolo equilatero",
                correct: true,
                explanation:
                    "Il quadrato ha quattro lati uguali e quattro angoli uguali di 90°. Il triangolo equilatero ha tre lati uguali e tre angoli uguali di 60°: entrambi sono quindi poligoni regolari.",
            },
        ],
    },

    {
        id: 78,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria",
        difficulty: 2,
        question:
            "Se l’area di un’aiuola quadrata è 16 m2 allora il suo perimetro è",
        answers: [
            {
                id: "A",
                text: "8 m",
                correct: false,
                explanation:
                    "Se il lato fosse 2 m, il perimetro sarebbe 8 m, ma l'area sarebbe soltanto 2²=4 m². Non soddisfa quindi il dato del problema.",
            },
            {
                id: "B",
                text: "32 m",
                correct: false,
                explanation:
                    "Un perimetro di 32 m corrisponderebbe a un quadrato di lato 8 m, la cui area sarebbe 8²=64 m².",
            },
            {
                id: "C",
                text: "64 m",
                correct: false,
                explanation:
                    "64 è il risultato che si potrebbe ottenere moltiplicando erroneamente l'area per 4. Prima bisogna invece ricavare il lato dalla radice quadrata dell'area.",
            },
            {
                id: "D",
                text: "16 m",
                correct: true,
                explanation:
                    "L'area del quadrato è lato². Se lato²=16, il lato misura √16=4 m. Il perimetro è quindi 4×4=16 m.",
            },
        ],
    },

    {
        id: 79,
        area: "cultura-matematico-scientifica",
        category: "matematica-probabilita",
        difficulty: 2,
        question:
            "La probabilità di ottenere due teste dal lancio di due monete è",
        answers: [
            {
                id: "A",
                text: "0.25",
                correct: true,
                explanation:
                    "Con due monete equilibrate gli esiti equiprobabili sono quattro: testa-testa, testa-croce, croce-testa e croce-croce. Solo uno contiene due teste, quindi la probabilità è 1/4=0,25.",
            },
            {
                id: "B",
                text: "0.5",
                correct: false,
                explanation:
                    "0,5 corrisponde a una probabilità di 1/2. Per ottenere due teste devono invece verificarsi contemporaneamente due eventi con probabilità 1/2: 1/2×1/2=1/4.",
            },
            {
                id: "C",
                text: "0.75",
                correct: false,
                explanation:
                    "0,75 corrisponde a 3/4 ed è invece la probabilità di NON ottenere due teste, cioè di ottenere uno degli altri tre esiti.",
            },
            {
                id: "D",
                text: "1",
                correct: false,
                explanation:
                    "Una probabilità pari a 1 indicherebbe un evento certo. Ottenere due teste non è certo, perché sono possibili anche altri tre risultati.",
            },
        ],
    },

    {
        id: 80,
        area: "cultura-matematico-scientifica",
        category: "matematica-statistica",
        difficulty: 2,
        question:
            "Le temperature registrate negli ultimi quattro giorni a Matera sono 27°, 25°, 29° e 27°, dunque la temperatura media nel periodo considerato è",
        answers: [
            {
                id: "A",
                text: "non troppo elevata",
                correct: false,
                explanation:
                    "Questa è una valutazione qualitativa e soggettiva, non il valore numerico della media aritmetica richiesto dal quesito.",
            },
            {
                id: "B",
                text: "28°",
                correct: false,
                explanation:
                    "La somma delle quattro temperature è 27+25+29+27=108. Dividendo per 4 si ottiene 27, non 28.",
            },
            {
                id: "C",
                text: "27°",
                correct: true,
                explanation:
                    "La media aritmetica si ottiene sommando i valori e dividendo per il loro numero: (27+25+29+27)/4 = 108/4 = 27 °C.",
            },
            {
                id: "D",
                text: "26°",
                correct: false,
                explanation:
                    "26° non corrisponde alla media dei quattro valori indicati. Una media di 26° richiederebbe una somma complessiva di 104°, mentre quella reale è 108°.",
            },
        ],
    },
];

export default simulation05;
