const passages = {
    passage01: `Lucia, alunna di un liceo linguistico, è indecisa a quale corso aggiuntivo organizzato dall'istituto, partecipare tra quattro possibili: corso di cinese, corso di arabo, corso di russo, corso di greco. La durata dei corsi, non necessariamente in questo ordine, è di trenta, trentadue, trentacinque, quaranta lezioni ed il prezzo, sempre non necessariamente in questo ordine, è di 290 euro, 320 euro, 340 euro e 350 euro. La durata di ogni singola lezione varia a seconda del corso, le lezioni possono durare due ore e mezza, tre ore, tre ore e mezza e quattro ore.

È inoltre noto che:
- ogni lezione del corso che costa 290 euro ha durata di due ore e mezza e l'intero corso dura trentadue lezioni;
- le lezioni del corso di arabo durano tre ore e mezza e la durata del corso è inferiore a trentadue lezioni;
- il costo del corso di greco è superiore a 320 euro, la durata delle lezioni è inferiore a quattro ore e la durata dell'intero corso è inferiore alle quaranta lezioni;
- il costo del corso di russo è 350 euro.`,

    passage02: `Nato quasi contemporaneamente alla scuola della Gestalt (la nascita del comportamentismo fu annunciata nel 1913 da J.B. Watson che espose il "manifesto" della scuola nell'articolo "La psicologia come la vede il comportamentista") questo movimento è fondato sullo studio scientifico del comportamento, cioè degli aspetti esteriori, praticamente osservabili, dell'attività mentale. Riprendendo il termine inglese behavior (comportamento) è conosciuto anche come behaviorismo.

Si può dire che con la nascita del movimento comportamentista il concetto stesso di psicologia che si era diffuso negli ultimi anni subì un radicale mutamento. Watson, infatti, riteneva che l'oggetto di studio privilegiato dei primi psicologi - la "mente" - fosse in realtà un qualcosa di troppo vago, mal definito e soprattutto estremamente soggettivo, al punto da non poter essere assunto in alcun modo come oggetto di studio di una disciplina che voleva proporsi come sperimentale e scientifica.

Proponendosi di far diventare la psicologia una disciplina con uno statuto analogo a quello delle scienze naturali tradizionali, così da poter pervenire a conoscenze oggettive che permettano di prevedere e controllare il comportamento e di dar luogo ad applicazioni pratiche, i comportamentismi ridisegnarono la psicologia e i suoi campi di studio, focalizzandosi sullo studio del comportamento manifesto (inteso come insieme di risposte puramente fisiologiche - muscolari e ghiandolari - degli individui) e dell'apprendimento.

Proposero quindi di escludere dal campo della psicologia la coscienza e i processi mentali, fenomeni su cui, secondo i comportamentisti, non è possibile stabilire un accordo tra gli studiosi e non è possibile indagare applicando procedure di indagine rigorose. L'oggetto della psicologia deve invece essere il complesso delle manifestazioni esteriori, direttamente osservabili, di un individuo, di cui la psicologia dovrebbe anche scoprire le leggi che ne stanno alla base.

Più precisamente il comportamentismo è interessato a stabilire rapporti tra gli stimoli recepiti dal soggetto e le sue risposte (il comportamentismo è anche denominato, da alcuni degli studiosi che si riconoscono in questa scuola, psicologia S-R, cioè stimolo-risposta), senza prendere in considerazione ciò che intercorre tra questi due elementi, sia che si tratti di processi mentali, sia che si tratti di processi fisiologici. La mente e il cervello vengono pertanto definiti come una "scatola nera" (black box), ossia un dispositivo le cui operazioni interne non possono essere indagate e di cui sono rilevabili solo gli input (stimoli in entrata) e gli output (risposte in uscita).

Il ritenere irrilevanti i processi biologici per spiegare il comportamento e l'insistere sull'azione degli stimoli nel modulare le risposte hanno indotto i comportamentisti a misconoscere il ruolo dei fattori innati e a considerare le caratteristiche dell'individuo determinate prevalentemente dall'ambiente, che modificherebbe i comportamenti attraverso processi di condizionamento.

Il comportamentismo ebbe un rapido successo negli Stati Uniti (anche perché ben si accordava con la mentalità pragmatica, efficientistica e tecnologica di questo paese) e sino agli anni Cinquanta fu la scuola egemone nella psicologia anglosassone. Le ricerche di Watson sul condizionamento furono proseguite da E.R. Guthrie e B.F. Skinner. Innovazioni teoriche furono invece introdotte da C.L. Hull, K.W. Spence e W.K. Estes, i quali cercarono di precisare ed estendere i principi comportamentisti applicandovi modelli matematici. Nel frattempo era venuto meno il rigoroso divieto di interessarsi di ciò che si frappone tra gli stimoli e le risposte e si iniziò a ipotizzare l'esistenza di "variabili intervenienti", cioè di processi interni all'organismo non rilevabili a livello del comportamento manifesto, ma necessari per la spiegazione di quest'ultimo. Hull ipotizzò l'esistenza di pulsioni, D. Hebb di "assembramenti neuronali", E.C. Tolman di "mappe cognitive". Più in generale, vennero avanzate le cosiddette teorie della mediazione, le quali ipotizzano che tra la ricezione dello stimolo e l'emissione della risposta intervengano dei processi intermedi di natura simbolica, non direttamente osservabili. Queste più recenti proposte teoriche vengono in genere fatte rientrare nel cosiddetto neocomportamentismo, che media il passaggio tra il vero e proprio comportamentismo e il cognitivismo.`,

    passage03: `Alla concisione, è chiaro, che Jean Paul attribuisce l’anima dell’arguzia. Ma la concisione in sé stessa non è spiritosa, altrimenti ogni espressione laconica sarebbe un motto. La concisione del motto dev’essere di una specie particolare. […] A questo riguardo la nostra ricerca si è inserita, dimostrando che la concisione del motto è spesso il risultato di un processo particolare, che ha lasciato nella lettera del motto una seconda traccia, cioè la formazione sostitutiva. […] scopriamo anche però che l’arguzia dipende soltanto dall’espressione verbale prodotta dal processo di condensazione (S. Freud - Il motto di spirito).`,

    passage04: `[…] le ragioni profonde del sistema organizzativo burocratico sono da ricercare nel desiderio di eliminare i rapporti di potere e di dipendenza, amministrando le cose anziché governare gli uomini. L’ideale della burocrazia è un mondo i cui partecipanti sono tutti legati da regole impersonali e sono eliminati gli ordini arbitrari, le influenze personali, ma anche l’iniziativa individuale. Le conseguenze, generate da norme che regolano ogni minimo comportamento delle persone, sono: l’osservanza formale delle regole, intese come fini a se stesse, la rigidità di comportamenti, l’incapacità di cambiamento, la demotivazione del personale e la deresponsabilizzazione rispetto al compito.`,

    passage05: `L’approccio psicolessicale si propone di affrontare lo studio delle differenze individuali fondamentali mediante l’esplorazione del linguaggio. L’assunzione alla base di questo approccio è che le differenze individuali più importanti vengono codificate nel linguaggio naturale attraverso parole singole […]. Il dizionario di una data lingua costituisce dunque una fonte potenzialmente esaustiva delle differenze individuali più rilevanti.`,
};

const simulation14 = [
    {
        id: 1,
        area: "linguistica-logica",
        category: "logica-vincoli",
        difficulty: 4,
        passage: passages.passage01,
        question:
            "Quale corso ha lezioni che durano ciascuna tre ore?",
        answers: [
            {
                id: "A",
                text: "Il corso di cinese.",
                correct: false,
                explanation:
                    "Il corso di cinese costa 290 euro. Dal testo sappiamo che il corso da 290 euro ha lezioni della durata di due ore e mezza, quindi non può essere la risposta.",
            },
            {
                id: "B",
                text: "Il corso che dura quaranta lezioni.",
                correct: false,
                explanation:
                    "Il corso di quaranta lezioni è quello di russo. Completando i vincoli, le sue lezioni durano quattro ore e non tre.",
            },
            {
                id: "C",
                text: "Il corso di greco.",
                correct: true,
                explanation:
                    "Il corso di arabo occupa la durata di tre ore e mezza, quello da 290 euro quella di due ore e mezza e il russo quella di quattro ore. Al corso di greco rimane quindi la durata di tre ore per le singole lezioni.",
            },
            {
                id: "D",
                text: "Il corso che dura trenta lezioni.",
                correct: false,
                explanation:
                    "Il corso di trenta lezioni è quello di arabo, poiché deve avere una durata complessiva inferiore a trentadue lezioni. Le lezioni di arabo durano però tre ore e mezza.",
            },
        ],
    },

    {
        id: 2,
        area: "linguistica-logica",
        category: "logica-vincoli",
        difficulty: 4,
        passage: passages.passage01,
        question:
            "Qual è il corso che costa 320 euro?",
        answers: [
            {
                id: "A",
                text: "Quello in cui ciascuna lezione dura tre ore e mezza.",
                correct: true,
                explanation:
                    "Le lezioni di arabo durano tre ore e mezza e il corso dura trenta lezioni. Il russo costa 350 euro, il greco deve costare più di 320 euro e il cinese risulta essere quello da 290 euro: all'arabo rimangono quindi 320 euro.",
            },
            {
                id: "B",
                text: "Il corso di cinese.",
                correct: false,
                explanation:
                    "Il corso di cinese risulta essere quello da 290 euro, formato da trentadue lezioni di due ore e mezza ciascuna.",
            },
            {
                id: "C",
                text: "Il corso di greco.",
                correct: false,
                explanation:
                    "Il testo stabilisce che il costo del corso di greco è superiore a 320 euro. Completando i dati, il greco costa 340 euro.",
            },
            {
                id: "D",
                text: "Quello formato da quaranta lezioni.",
                correct: false,
                explanation:
                    "Il corso di quaranta lezioni è quello di russo e il testo specifica direttamente che il corso di russo costa 350 euro.",
            },
        ],
    },

    {
        id: 3,
        area: "linguistica-logica",
        category: "logica-vincoli",
        difficulty: 3,
        passage: passages.passage01,
        question:
            "Quale corso ha il numero maggiore di lezioni?",
        answers: [
            {
                id: "A",
                text: "Il corso in cui ogni lezione dura tre ore.",
                correct: false,
                explanation:
                    "Le lezioni di tre ore appartengono al corso di greco. Il greco è formato da trentacinque lezioni, non dal numero massimo di quaranta.",
            },
            {
                id: "B",
                text: "Il corso in cui ogni lezione dura tre ore e mezza.",
                correct: false,
                explanation:
                    "Le lezioni di tre ore e mezza sono quelle del corso di arabo. L'arabo dura trenta lezioni, cioè il numero più basso tra quelli proposti.",
            },
            {
                id: "C",
                text: "Il corso di cinese.",
                correct: false,
                explanation:
                    "Il corso di cinese è formato da trentadue lezioni. Esiste quindi un corso con un numero maggiore di lezioni.",
            },
            {
                id: "D",
                text: "Il corso che costa 350 euro.",
                correct: true,
                explanation:
                    "Il corso che costa 350 euro è quello di russo. Dopo aver assegnato 30 lezioni all'arabo, 32 al cinese e 35 al greco, al russo restano le quaranta lezioni, cioè il numero maggiore.",
            },
        ],
    },

    {
        id: 4,
        area: "linguistica-logica",
        category: "logica-vincoli",
        difficulty: 3,
        passage: passages.passage01,
        question:
            "Sulla base delle informazioni fornite, indicare l'affermazione corretta.",
        answers: [
            {
                id: "A",
                text: "Il corso di russo è formato da trentacinque lezioni.",
                correct: false,
                explanation:
                    "Il russo costa 350 euro e, completando tutti i vincoli, è il corso formato da quaranta lezioni. Le trentacinque lezioni appartengono al greco.",
            },
            {
                id: "B",
                text: "Il corso di cinese costa 290 euro.",
                correct: true,
                explanation:
                    "Il corso da 290 euro ha trentadue lezioni da due ore e mezza. Arabo, greco e russo occupano necessariamente le altre combinazioni, quindi il corso da 290 euro è quello di cinese.",
            },
            {
                id: "C",
                text: "Il corso di greco è formato da trenta lezioni.",
                correct: false,
                explanation:
                    "Le trenta lezioni appartengono all'arabo perché il suo corso deve durare meno di trentadue lezioni. Il greco ne ha invece trentacinque.",
            },
            {
                id: "D",
                text: "Le lezioni del corso di greco durano tre ore e mezza.",
                correct: false,
                explanation:
                    "Il testo attribuisce espressamente le lezioni da tre ore e mezza al corso di arabo. Quelle di greco durano tre ore.",
            },
        ],
    },

    {
        id: 5,
        area: "linguistica-logica",
        category: "logica-vincoli",
        difficulty: 3,
        passage: passages.passage01,
        question:
            "Quale corso sceglierebbe Lucia se decidesse di scegliere quello che, in base al costo, è secondo in ordine decrescente?",
        answers: [
            {
                id: "A",
                text: "Il corso che è formato da quaranta lezioni.",
                correct: false,
                explanation:
                    "Il corso di quaranta lezioni è il russo e costa 350 euro, cioè il prezzo più alto. È quindi primo e non secondo in ordine decrescente.",
            },
            {
                id: "B",
                text: "Il corso la cui lezione dura tre ore e mezza.",
                correct: false,
                explanation:
                    "Il corso con lezioni da tre ore e mezza è l'arabo e costa 320 euro. È soltanto il terzo prezzo in ordine decrescente.",
            },
            {
                id: "C",
                text: "Il corso che è formato da trentacinque lezioni.",
                correct: true,
                explanation:
                    "I prezzi in ordine decrescente sono 350, 340, 320 e 290 euro. Il secondo è 340 euro, cioè il corso di greco, che è formato da trentacinque lezioni.",
            },
            {
                id: "D",
                text: "Il corso che è formato da trentadue lezioni.",
                correct: false,
                explanation:
                    "Il corso di trentadue lezioni è quello di cinese e costa 290 euro, il prezzo più basso tra quelli indicati.",
            },
        ],
    },

    {
        id: 6,
        area: "linguistica-logica",
        category: "logica-vincoli",
        difficulty: 3,
        passage: passages.passage01,
        question:
            "Quale corso sceglierebbe Lucia se decidesse di scegliere quello che, in base alla durata di ciascuna lezione, è terzo in ordine crescente?",
        answers: [
            {
                id: "A",
                text: "Il corso formato da quaranta lezioni.",
                correct: false,
                explanation:
                    "Il corso di quaranta lezioni è quello di russo, le cui lezioni durano quattro ore. È quindi il quarto, non il terzo, in ordine crescente.",
            },
            {
                id: "B",
                text: "Il corso che costa 350 euro.",
                correct: false,
                explanation:
                    "Il corso da 350 euro è sempre il russo e le sue lezioni sono quelle più lunghe, pari a quattro ore.",
            },
            {
                id: "C",
                text: "Il corso che costa 340 euro.",
                correct: false,
                explanation:
                    "Il corso da 340 euro è il greco e ogni sua lezione dura tre ore. È quindi secondo dopo il cinese da due ore e mezza.",
            },
            {
                id: "D",
                text: "Il corso di arabo.",
                correct: true,
                explanation:
                    "Le durate in ordine crescente sono: cinese 2,5 ore, greco 3 ore, arabo 3,5 ore, russo 4 ore. Il terzo corso è quindi quello di arabo.",
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
            "Indicare quale tra le seguenti affermazioni rispecchia meglio la concezione della mente che aveva lo studioso Watson rispetto ai primi psicologi.",
        answers: [
            {
                id: "A",
                text: "Il concetto di mente è un concetto definito in modo inadeguato e approssimativo, il che lo rende un oggetto di studio inappropriato per la scienza.",
                correct: true,
                explanation:
                    "Il brano afferma che Watson considerava la mente qualcosa di troppo vago, mal definito e soggettivo per essere studiato rigorosamente da una disciplina sperimentale e scientifica.",
            },
            {
                id: "B",
                text: "Il concetto di mente è formulato troppo rigidamente per essere trattato da una disciplina flessibile e di ampio respiro quale è la psicologia.",
                correct: false,
                explanation:
                    "Watson non critica una definizione troppo rigida della mente, ma esattamente il contrario: la considera troppo vaga, mal definita e soggettiva.",
            },
            {
                id: "C",
                text: "Il concetto di mente è troppo vago ma nonostante questo può essere trattato da un punto di vista scientifico.",
                correct: false,
                explanation:
                    "Il testo afferma che proprio la vaghezza e la soggettività della mente impediscono, secondo Watson, di assumerla come oggetto scientifico della psicologia.",
            },
            {
                id: "D",
                text: "Il concetto di mente è un concetto definito in modo oggettivo ed inequivocabile, costituendo pertanto un oggetto di studio più che appropriato per una disciplina scientifica.",
                correct: false,
                explanation:
                    "Questa affermazione è opposta alla posizione di Watson riportata nel brano. Egli considerava la mente un concetto mal definito e troppo soggettivo.",
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
            "Indicare quale tra le seguenti affermazioni riferite al brano non è corretta.",
        answers: [
            {
                id: "A",
                text: "Il comportamentismo si diffuse, negli Stati Uniti, anche grazie al vantaggio di essere molto in linea con le tendenze della società statunitense.",
                correct: false,
                explanation:
                    "Il brano conferma questa affermazione: il comportamentismo ebbe successo negli Stati Uniti anche perché si accordava bene con la mentalità pragmatica, efficientistica e tecnologica del Paese.",
            },
            {
                id: "B",
                text: "Il comportamentismo nasce trovando terreno fertile sulle teorie fondate dal già esistente movimento inglese behaviorista.",
                correct: true,
                explanation:
                    "Questa affermazione non è sostenuta dal brano. «Behaviorismo» è semplicemente un altro nome del comportamentismo, ricavato dall'inglese behavior, cioè comportamento; non viene descritto come un precedente movimento inglese.",
            },
            {
                id: "C",
                text: "Fino agli anni 50 il comportamentismo restò la scuola di pensiero predominante all'interno della scena anglosassone.",
                correct: false,
                explanation:
                    "Il testo afferma espressamente che fino agli anni Cinquanta il comportamentismo fu la scuola egemone nella psicologia anglosassone.",
            },
            {
                id: "D",
                text: "Il comportamentismo viene spesso definito psicologia S-R.",
                correct: false,
                explanation:
                    "Il brano indica esplicitamente la denominazione psicologia S-R, cioè stimolo-risposta, utilizzata da alcuni studiosi comportamentisti.",
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
            "La \"black-box\" o scatola nera è:",
        answers: [
            {
                id: "A",
                text: "Un dispositivo che elabora attraverso operazioni interne, che rappresentano l'oggetto di studio dei comportamentisti, gli input in entrata trasformandoli in output direttamene osservabili.",
                correct: false,
                explanation:
                    "Per i comportamentisti le operazioni interne della black box non rappresentano l'oggetto direttamente studiabile. Sono invece osservabili gli stimoli in entrata e le risposte in uscita.",
            },
            {
                id: "B",
                text: "Lo strumento che consente di capire le operazioni che trasformano gli input in entrata negli output da noi direttamente osservabili.",
                correct: false,
                explanation:
                    "Il concetto di scatola nera esprime esattamente l'impossibilità di osservare direttamente le operazioni interne. Non è quindi uno strumento che permette di conoscerle.",
            },
            {
                id: "C",
                text: "Il dispositivo di cui si avvalsero studiosi comportamentisti quali Skinner per studiare il funzionamento della mente umana.",
                correct: false,
                explanation:
                    "Nel brano «black box» non indica un apparecchio sperimentale. È una metafora utilizzata per descrivere mente e cervello come sistemi di cui si osservano input e output ma non i processi interni.",
            },
            {
                id: "D",
                text: "La metafora di cui si avvale il comportamentismo per spiegare i concetti di mente e cervello.",
                correct: true,
                explanation:
                    "Mente e cervello vengono definiti nel brano come una «scatola nera», cioè un sistema le cui operazioni interne non sono direttamente indagate e di cui si rilevano soprattutto stimoli in entrata e risposte in uscita.",
            },
        ],
    },

    {
        id: 10,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages.passage02,
        question:
            "Indicare quale tra le seguenti affermazioni è corretta.",
        answers: [
            {
                id: "A",
                text: "Spence, Guthrie e Tolman proseguirono le ricerche di Watson non discostandosi dal suo pensiero.",
                correct: false,
                explanation:
                    "Il brano distingue i diversi contributi: Guthrie proseguì le ricerche sul condizionamento, Spence contribuì con modelli matematici e Tolman introdusse il concetto di mappe cognitive. Non si limitarono quindi tutti a proseguire invariato il pensiero di Watson.",
            },
            {
                id: "B",
                text: "Estes, Guthrie e Skinner integrarono il pensiero comportamentista attraverso modelli provenienti dalla matematica.",
                correct: false,
                explanation:
                    "Il testo attribuisce l'applicazione di modelli matematici a Hull, Spence ed Estes. Guthrie e Skinner sono invece indicati come continuatori delle ricerche sul condizionamento.",
            },
            {
                id: "C",
                text: "Hull e Hebb iniziarono ad indagare altri processi coinvolti nella spiegazione del comportamento considerando anche variabili non direttamente osservabili.",
                correct: true,
                explanation:
                    "Il testo spiega che vennero introdotte variabili intervenienti non direttamente osservabili: Hull ipotizzò le pulsioni e Hebb gli «assembramenti neuronali».",
            },
            {
                id: "D",
                text: "Watson elaborò insieme a Hebb la teoria degli \"assembramenti neuronali\" estendendo i principi della matematica all'approccio comportamentista.",
                correct: false,
                explanation:
                    "Gli «assembramenti neuronali» sono attribuiti nel testo a D. Hebb, non a Watson. Inoltre i modelli matematici sono collegati soprattutto a Hull, Spence ed Estes.",
            },
        ],
    },

    {
        id: 11,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages.passage02,
        question:
            "Le teorie della mediazione:",
        answers: [
            {
                id: "A",
                text: "Possono già essere inserite all'interno del filone cognitivista.",
                correct: false,
                explanation:
                    "Il testo le colloca nel neocomportamentismo, che costituisce una fase di passaggio tra il comportamentismo vero e proprio e il successivo cognitivismo.",
            },
            {
                id: "B",
                text: "Rientrano nel neocomportamentismo che si propone come soluzione al dibattito ideologico tra il comportamentismo e il già esistente cognitivismo.",
                correct: false,
                explanation:
                    "Il neocomportamentismo viene descritto come una fase che media il passaggio verso il cognitivismo, non come soluzione a un dibattito tra due scuole già pienamente contrapposte.",
            },
            {
                id: "C",
                text: "Avanzano l'ipotesi che sia possibile osservare i processi intermedi che operano la trasformazione dello stimolo in risposta.",
                correct: false,
                explanation:
                    "Il brano specifica che questi processi intermedi di natura simbolica sono «non direttamente osservabili». L'alternativa afferma quindi il contrario.",
            },
            {
                id: "D",
                text: "Ipotizzano che processi di natura simbolica abbiano un ruolo attivo nella trasformazione dell'input in output.",
                correct: true,
                explanation:
                    "Le teorie della mediazione ipotizzano processi intermedi di natura simbolica tra la ricezione dello stimolo e l'emissione della risposta. Essi non sono direttamente osservabili ma vengono considerati necessari per spiegare il comportamento.",
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
            "Riferendosi al motto di spirito, in questo brano Freud sostiene che (indicare la risposta errata):",
        answers: [
            {
                id: "A",
                text: "La concisione non sempre rende un effetto spiritoso.",
                correct: false,
                explanation:
                    "Il testo afferma espressamente che la concisione in sé non è spiritosa, altrimenti ogni espressione laconica sarebbe un motto. Questa affermazione è quindi coerente con il brano.",
            },
            {
                id: "B",
                text: "La concisione è anche il risultato di un processo di formazione sostitutiva.",
                correct: false,
                explanation:
                    "Freud collega la particolare concisione del motto a un processo che lascia come traccia una formazione sostitutiva. L'affermazione è quindi compatibile con il testo.",
            },
            {
                id: "C",
                text: "L'arguzia è determinata dalla concisione.",
                correct: true,
                explanation:
                    "Questa è l'affermazione errata. Freud precisa che la concisione da sola non basta a rendere spiritosa un'espressione: l'arguzia dipende dalla particolare espressione verbale prodotta dal processo di condensazione.",
            },
            {
                id: "D",
                text: "L'arguzia è anche il risultato di un processo di condensazione.",
                correct: false,
                explanation:
                    "Nel finale del brano Freud collega esplicitamente l'arguzia all'espressione verbale prodotta dal processo di condensazione. Questa alternativa è quindi corretta rispetto al testo.",
            },
        ],
    },

    {
        id: 13,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages.passage04,
        question:
            "Secondo quanto riportato indicare la risposta corretta.",
        answers: [
            {
                id: "A",
                text: "Nei sistemi organizzativi efficienti sono eliminati i rapporti di potere e dipendenza.",
                correct: false,
                explanation:
                    "Il testo presenta l'eliminazione dei rapporti di potere come ideale profondo del sistema burocratico, non come caratteristica necessariamente realizzata da tutti i sistemi organizzativi efficienti.",
            },
            {
                id: "B",
                text: "Una rigida applicazione delle norme porta a scarso coinvolgimento delle persone.",
                correct: true,
                explanation:
                    "Tra le conseguenze della regolamentazione rigida il testo indica demotivazione, deresponsabilizzazione, rigidità e incapacità di cambiamento. Tutto ciò corrisponde a uno scarso coinvolgimento personale.",
            },
            {
                id: "C",
                text: "L'ordinamento burocratico favorisce la partecipazione attiva degli individui.",
                correct: false,
                explanation:
                    "Il testo afferma che l'ideale burocratico elimina anche l'iniziativa individuale e può generare demotivazione. Non favorisce quindi la partecipazione attiva.",
            },
            {
                id: "D",
                text: "Flessibilità e responsabilizzazione sono conseguenze dell'applicazione dell'ideale di burocrazia.",
                correct: false,
                explanation:
                    "Il brano afferma il contrario: le conseguenze comprendono rigidità, incapacità di cambiamento e deresponsabilizzazione.",
            },
        ],
    },

    {
        id: 14,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages.passage05,
        question:
            "Secondo l'approccio psicolessicale le differenze individuali:",
        answers: [
            {
                id: "A",
                text: "Coincidono con le differenze linguistiche.",
                correct: false,
                explanation:
                    "Il testo non sostiene che differenze individuali e linguistiche coincidano. Dice che le caratteristiche individuali più importanti vengono codificate nel linguaggio.",
            },
            {
                id: "B",
                text: "Sono rappresentate dal lessico di alcune specifiche lingue.",
                correct: false,
                explanation:
                    "Il testo parla del dizionario di «una data lingua» come fonte delle differenze individuali rilevanti, ma non limita il fenomeno ad alcune lingue particolari.",
            },
            {
                id: "C",
                text: "Costituiscono la causa della varietà lessicale.",
                correct: false,
                explanation:
                    "Non viene affermato che le differenze individuali siano la causa della varietà lessicale. L'assunto è che vengano codificate attraverso parole del linguaggio naturale.",
            },
            {
                id: "D",
                text: "Si esprimono attraverso il canale lessicale.",
                correct: true,
                explanation:
                    "L'approccio psicolessicale parte proprio dall'idea che le differenze individuali più importanti vengano codificate attraverso parole del linguaggio naturale. Il lessico diventa quindi una fonte per studiarle.",
            },
        ],
    },

    {
        id: 15,
        area: "linguistica-logica",
        category: "logica-analogie",
        difficulty: 2,
        question:
            "Dopo aver individuato la logica che lega due delle tre parole, inserire il termine mancate.",
        questionImage: {
            src: `${import.meta.env.BASE_URL}resources/simulation14/domanda-15.png`,
            alt: "Schema analogico con bue in alto a sinistra, ape in alto a destra, punto interrogativo in basso a sinistra e sciame in basso a destra",
        },
        answers: [
            {
                id: "A",
                text: "Stalla.",
                correct: false,
                explanation:
                    "La stalla è il luogo in cui vengono ricoverati bovini e altri animali, ma la relazione mostrata dallo schema non è animale → luogo. «Ape» è associata a «sciame» come individuo → insieme.",
            },
            {
                id: "B",
                text: "Alveare.",
                correct: false,
                explanation:
                    "L'alveare è il luogo o la struttura in cui vive una colonia di api. «Sciame» indica invece un insieme di api, quindi la relazione richiesta è individuo → nome collettivo.",
            },
            {
                id: "C",
                text: "Mandria.",
                correct: true,
                explanation:
                    "Uno sciame è un insieme di api. Analogamente una mandria è un insieme di bovini, quindi «bue : mandria = ape : sciame».",
            },
            {
                id: "D",
                text: "Arnia.",
                correct: false,
                explanation:
                    "L'arnia è la struttura artificiale destinata a ospitare una colonia di api. Non rappresenta il nome collettivo corrispondente a «bue».",
            },
        ],
    },

    {
        id: 16,
        area: "linguistica-logica",
        category: "grammatica-avverbi",
        difficulty: 2,
        question:
            "Quale funzione svolge la parte grammaticale scritta in maiuscolo nel seguente enunciato? \"QUANDO passi a trovarmi?\".",
        answers: [
            {
                id: "A",
                text: "Pronome.",
                correct: false,
                explanation:
                    "Un pronome sostituisce normalmente un nome. «Quando» non sostituisce alcun elemento nominale, ma chiede in quale momento avverrà l'azione.",
            },
            {
                id: "B",
                text: "Avverbio.",
                correct: true,
                explanation:
                    "In questa domanda «quando» è un avverbio interrogativo di tempo: introduce una richiesta relativa al momento in cui qualcuno passerà a trovare il parlante.",
            },
            {
                id: "C",
                text: "Aggettivo.",
                correct: false,
                explanation:
                    "Un aggettivo accompagna o qualifica un nome. «Quando» non modifica alcun sostantivo nell'enunciato.",
            },
            {
                id: "D",
                text: "Congiunzione.",
                correct: false,
                explanation:
                    "«Quando» può anche essere una congiunzione temporale, per esempio in «Quando arriverai, chiamami». Qui però compare in una domanda diretta e svolge funzione di avverbio interrogativo.",
            },
        ],
    },

    {
        id: 17,
        area: "linguistica-logica",
        category: "grammatica-verbi",
        difficulty: 2,
        question:
            "Quale tra le seguenti forme verbali è al tempo trapassato remoto?",
        answers: [
            {
                id: "A",
                text: "Noi redigemmo.",
                correct: false,
                explanation:
                    "«Redigemmo» è indicativo passato remoto, prima persona plurale. Non è un tempo composto.",
            },
            {
                id: "B",
                text: "Tu redigevi.",
                correct: false,
                explanation:
                    "«Redigevi» è indicativo imperfetto, seconda persona singolare.",
            },
            {
                id: "C",
                text: "Voi avevate redatto.",
                correct: false,
                explanation:
                    "«Avevate redatto» è indicativo trapassato prossimo, formato dall'imperfetto dell'ausiliare «avere» più il participio passato.",
            },
            {
                id: "D",
                text: "Io ebbi redatto.",
                correct: true,
                explanation:
                    "Il trapassato remoto si forma con il passato remoto dell'ausiliare più il participio passato. «Ebbi redatto» è quindi indicativo trapassato remoto.",
            },
        ],
    },

    {
        id: 18,
        area: "linguistica-logica",
        category: "grammatica-aggettivi",
        difficulty: 1,
        question:
            "Quale funzione svolge la parte grammaticale scritta in maiuscolo nel seguente enunciato? \"Non ho più visto nessuno dei VECCHI amici\".",
        answers: [
            {
                id: "A",
                text: "Aggettivo.",
                correct: true,
                explanation:
                    "«Vecchi» accompagna il sostantivo «amici» e ne esprime una caratteristica. Svolge quindi funzione di aggettivo qualificativo.",
            },
            {
                id: "B",
                text: "Pronome.",
                correct: false,
                explanation:
                    "Un pronome sostituisce un nome. Qui «vecchi» non sostituisce «amici», ma lo accompagna e lo qualifica.",
            },
            {
                id: "C",
                text: "Sostantivo.",
                correct: false,
                explanation:
                    "Il sostantivo della frase è «amici». «Vecchi» dipende da questo nome e ne specifica una caratteristica.",
            },
            {
                id: "D",
                text: "Verbo.",
                correct: false,
                explanation:
                    "«Vecchi» non esprime un'azione, uno stato o un modo di essere attraverso una forma verbale. Il verbo del periodo è «ho visto».",
            },
        ],
    },

    {
        id: 19,
        area: "linguistica-logica",
        category: "formazione-delle-parole",
        difficulty: 3,
        question:
            "Quale tra i seguenti nomi è un \"falso alterato\" e quindi, pur terminando con un suffisso di alterazione, è in realtà un nome primitivo?",
        answers: [
            {
                id: "A",
                text: "Gattone.",
                correct: false,
                explanation:
                    "«Gattone» deriva chiaramente da «gatto» mediante il suffisso accrescitivo «-one». È quindi un vero nome alterato.",
            },
            {
                id: "B",
                text: "Zanzarina.",
                correct: false,
                explanation:
                    "«Zanzarina» può essere interpretato come diminutivo di «zanzara». Presenta quindi un'effettiva relazione di alterazione.",
            },
            {
                id: "C",
                text: "Pulcino.",
                correct: true,
                explanation:
                    "«Pulcino» termina in «-ino», che normalmente è un suffisso diminutivo, ma non significa «piccolo pulce» né deriva in italiano moderno da un nome base attraverso alterazione. È quindi classificato come falso alterato.",
            },
            {
                id: "D",
                text: "Cavallino.",
                correct: false,
                explanation:
                    "«Cavallino» deriva da «cavallo» mediante il suffisso diminutivo «-ino». È quindi un nome effettivamente alterato.",
            },
        ],
    },

    {
        id: 20,
        area: "linguistica-logica",
        category: "ortografia",
        difficulty: 1,
        question:
            "Quale tra le seguenti frasi contiene un errore?",
        answers: [
            {
                id: "A",
                text: "Il mio film preferito è \"C'era una volta il West\".",
                correct: false,
                explanation:
                    "La frase è ortograficamente corretta. In «c'era» l'apostrofo segnala correttamente l'elisione di «ci» davanti al verbo essere.",
            },
            {
                id: "B",
                text: "Il film non mi piace per niente!",
                correct: false,
                explanation:
                    "La frase è grammaticalmente e ortograficamente corretta. Anche il punto esclamativo è compatibile con il tono dell'enunciato.",
            },
            {
                id: "C",
                text: "Ieri ho rivisto un vecchio film in bianco e nero.",
                correct: false,
                explanation:
                    "Non sono presenti errori ortografici o grammaticali nella frase.",
            },
            {
                id: "D",
                text: "Qual'è il tuo film preferito!",
                correct: true,
                explanation:
                    "L'errore è «Qual'è». La forma corretta è «Qual è», senza apostrofo, perché «qual» è un troncamento di «quale» e non un'elisione. In una domanda sarebbe inoltre normalmente appropriato il punto interrogativo.",
            },
        ],
    },
    {
        id: 21,
        area: "linguistica-logica",
        category: "punteggiatura",
        difficulty: 2,
        question:
            "Indicare quale tra le seguenti alternative di risposta presenta un corretto impiego della punteggiatura.",
        answers: [
            {
                id: "A",
                text: "Niente? Da fare! Lo abbiamo perso?",
                correct: false,
                explanation:
                    "La punteggiatura spezza in modo innaturale l'espressione «niente da fare» e trasforma senza motivo l'ultima frase in una domanda. Il risultato non rispetta il normale significato dell'enunciato.",
            },
            {
                id: "B",
                text: "Niente da fare lo abbiamo perso?",
                correct: false,
                explanation:
                    "Tra «Niente da fare» e «lo abbiamo perso» è necessario un segno di punteggiatura che separi chiaramente le due parti. Inoltre il punto interrogativo finale non è appropriato perché l'enunciato è affermativo.",
            },
            {
                id: "C",
                text: "Niente da fare: lo abbiamo perso.",
                correct: true,
                explanation:
                    "I due punti sono usati correttamente perché la seconda parte spiega o precisa la prima: non c'è più nulla da fare perché l'oggetto o la persona è stato perso. Anche il punto finale è coerente con il carattere affermativo della frase.",
            },
            {
                id: "D",
                text: "Niente, da fare, lo abbiamo perso!",
                correct: false,
                explanation:
                    "Le virgole separano impropriamente l'espressione fissa «niente da fare». Non esiste una ragione sintattica per isolare «da fare» tra due virgole.",
            },
        ],
    },

    {
        id: 22,
        area: "linguistica-logica",
        category: "lessico-sinonimi",
        difficulty: 1,
        question:
            "Quale tra i seguenti termini è sinonimo di \"lampante\"?",
        answers: [
            {
                id: "A",
                text: "Palese.",
                correct: true,
                explanation:
                    "«Lampante» significa evidente, chiaro, manifesto, tale da non lasciare dubbi. «Palese» esprime precisamente lo stesso significato.",
            },
            {
                id: "B",
                text: "Conveniente.",
                correct: false,
                explanation:
                    "«Conveniente» indica qualcosa di vantaggioso, opportuno o economicamente favorevole. Non significa evidente o manifesto.",
            },
            {
                id: "C",
                text: "Torbido.",
                correct: false,
                explanation:
                    "«Torbido» può indicare qualcosa di poco limpido, confuso o oscuro. Ha quindi un significato quasi opposto a «lampante».",
            },
            {
                id: "D",
                text: "Ambiguo.",
                correct: false,
                explanation:
                    "«Ambiguo» indica qualcosa che può essere interpretato in modi differenti e non è chiaro. «Lampante» indica invece qualcosa di perfettamente evidente.",
            },
        ],
    },

    {
        id: 23,
        area: "linguistica-logica",
        category: "analisi-logica",
        difficulty: 2,
        question:
            "Inserire un complemento di termine a completamento della seguente frase: \"Cecilia ha comprato ............... un cappotto di lana cotta.\".",
        answers: [
            {
                id: "A",
                text: "Per il suo compleanno.",
                correct: false,
                explanation:
                    "«Per il suo compleanno» esprime una circostanza o uno scopo legato all'acquisto, non la persona a cui è destinato qualcosa mediante un complemento di termine.",
            },
            {
                id: "B",
                text: "Proprio oggi.",
                correct: false,
                explanation:
                    "«Proprio oggi» indica il tempo in cui è avvenuto l'acquisto. È quindi un'espressione temporale e non un complemento di termine.",
            },
            {
                id: "C",
                text: "Senza esitazione.",
                correct: false,
                explanation:
                    "«Senza esitazione» indica il modo o la maniera con cui Cecilia ha compiuto l'azione. Non risponde alla domanda «a chi?».",
            },
            {
                id: "D",
                text: "A Francesca.",
                correct: true,
                explanation:
                    "Il complemento di termine indica la persona o la cosa verso cui è diretta l'azione e risponde generalmente alla domanda «a chi?» o «a che cosa?». «A Francesca» svolge esattamente questa funzione.",
            },
        ],
    },

    {
        id: 24,
        area: "linguistica-logica",
        category: "grammatica-verbi",
        difficulty: 2,
        question:
            "Individuare quale delle quattro opzioni indica la corretta analisi grammaticale del seguente verbo: liberammo.",
        answers: [
            {
                id: "A",
                text: "Voce del verbo 'liberare', transitivo, attivo, prima coniugazione, modo indicativo, tempo passato remoto, prima persona singolare.",
                correct: false,
                explanation:
                    "«Liberammo» non è prima persona singolare. La prima persona singolare del passato remoto sarebbe «liberai».",
            },
            {
                id: "B",
                text: "Voce del verbo 'liberare', transitivo, attivo, prima coniugazione, modo indicativo, tempo passato remoto, prima persona plurale.",
                correct: true,
                explanation:
                    "«Liberammo» deriva dal verbo «liberare», appartenente alla prima coniugazione. È una forma attiva dell'indicativo passato remoto, prima persona plurale: «noi liberammo».",
            },
            {
                id: "C",
                text: "Voce del verbo 'liberare', transitivo, attivo, prima coniugazione, modo indicativo, tempo passato remoto, seconda persona singolare.",
                correct: false,
                explanation:
                    "La seconda persona singolare del passato remoto è «liberasti». «Liberammo» corrisponde invece alla prima persona plurale.",
            },
            {
                id: "D",
                text: "Voce del verbo 'liberare', transitivo, attivo, prima coniugazione, modo indicativo, tempo passato remoto, seconda persona plurale.",
                correct: false,
                explanation:
                    "La seconda persona plurale sarebbe «liberaste». La terminazione «-ammo» identifica in questo caso la prima persona plurale.",
            },
        ],
    },

    {
        id: 25,
        area: "linguistica-logica",
        category: "lessico-sinonimi",
        difficulty: 2,
        question:
            "Tre dei vocaboli elencati di seguito sono sinonimi, mentre uno non lo è: eliminare l'intruso.",
        answers: [
            {
                id: "A",
                text: "Sciocchezza.",
                correct: false,
                explanation:
                    "«Sciocchezza» può indicare qualcosa di privo di senso o ragionevolezza. È semanticamente vicina a «sproposito» e «assurdità».",
            },
            {
                id: "B",
                text: "Assurdità.",
                correct: false,
                explanation:
                    "«Assurdità» indica qualcosa di illogico, irragionevole o privo di senso. Può quindi essere considerato sinonimo di «sproposito» e «sciocchezza».",
            },
            {
                id: "C",
                text: "Verità.",
                correct: true,
                explanation:
                    "«Verità» indica ciò che corrisponde alla realtà o ai fatti. È semanticamente diversa da «sproposito», «assurdità» e «sciocchezza», che indicano invece qualcosa di insensato o errato.",
            },
            {
                id: "D",
                text: "Sproposito.",
                correct: false,
                explanation:
                    "Uno «sproposito» è un'affermazione o un'azione assurda, insensata o gravemente sbagliata. È quindi vicino semanticamente a «assurdità» e «sciocchezza».",
            },
        ],
    },

    {
        id: 26,
        area: "linguistica-logica",
        category: "logica-associazioni",
        difficulty: 3,
        question:
            "Quale dei seguenti termini può essere inserito tra le parentesi assumendo un significato associabile sia al termine che precede che a quello che segue? Pesce (...?...) Eclissi.",
        answers: [
            {
                id: "A",
                text: "Azzurro.",
                correct: false,
                explanation:
                    "Esiste l'espressione «pesce azzurro», ma «eclissi azzurra» non costituisce l'associazione richiesta dal quesito.",
            },
            {
                id: "B",
                text: "Astro.",
                correct: false,
                explanation:
                    "«Astro» è collegato semanticamente alle eclissi, ma non forma una normale espressione con «pesce» analoga a quella richiesta.",
            },
            {
                id: "C",
                text: "Palla.",
                correct: false,
                explanation:
                    "«Pesce palla» è un'espressione corretta, ma «palla eclissi» o «eclissi palla» non costituisce un'associazione di uso comune.",
            },
            {
                id: "D",
                text: "Luna.",
                correct: true,
                explanation:
                    "Esiste il «pesce luna», grande pesce marino noto anche come Mola mola. La Luna è inoltre protagonista delle eclissi lunari e interviene anche geometricamente nelle eclissi solari.",
            },
        ],
    },

    {
        id: 27,
        area: "linguistica-logica",
        category: "logica-anagrammi",
        difficulty: 3,
        question:
            "Quale termine non può essere anagrammato?",
        answers: [
            {
                id: "A",
                text: "Acqua.",
                correct: true,
                explanation:
                    "Tra le alternative, «acqua» non permette di formare con le stesse lettere un'altra comune parola italiana. Le altre parole hanno invece anagrammi immediatamente riconoscibili.",
            },
            {
                id: "B",
                text: "Canto.",
                correct: false,
                explanation:
                    "«Canto» può essere anagrammato formando «conta», utilizzando esattamente le stesse lettere in ordine differente.",
            },
            {
                id: "C",
                text: "Male.",
                correct: false,
                explanation:
                    "«Male» può essere anagrammato in «mela». Le quattro lettere sono le stesse e cambia soltanto il loro ordine.",
            },
            {
                id: "D",
                text: "Lato.",
                correct: false,
                explanation:
                    "«Lato» può essere anagrammato in «alto». Anche in questo caso vengono utilizzate esattamente le stesse lettere.",
            },
        ],
    },

    {
        id: 28,
        area: "linguistica-logica",
        category: "lessico-sinonimi",
        difficulty: 2,
        question:
            "Se \"perdere tempo evitando di manifestare il proprio pensiero\" sta a \"temporeggiare\" allora \"strappare con forza, staccare\" sta a \"__________\":",
        answers: [
            {
                id: "A",
                text: "Radicare.",
                correct: false,
                explanation:
                    "«Radicare» significa mettere radici o rendere qualcosa profondamente stabile. Esprime quindi quasi l'azione opposta rispetto allo strappare via.",
            },
            {
                id: "B",
                text: "Estirpare.",
                correct: true,
                explanation:
                    "«Estirpare» significa strappare o togliere completamente qualcosa, spesso dalla radice. Corrisponde quindi alla definizione «strappare con forza, staccare».",
            },
            {
                id: "C",
                text: "Piantare.",
                correct: false,
                explanation:
                    "«Piantare» può significare collocare una pianta nel terreno o inserire qualcosa. Non significa strapparla o rimuoverla con forza.",
            },
            {
                id: "D",
                text: "Inserire.",
                correct: false,
                explanation:
                    "«Inserire» significa introdurre o collocare qualcosa all'interno di qualcos'altro. È semanticamente diverso da «staccare» o «strappare».",
            },
        ],
    },

    {
        id: 29,
        area: "linguistica-logica",
        category: "logica-associazioni",
        difficulty: 3,
        question:
            "Quale tra le seguenti parole ha un legame con tutte e tre quelle indicate? Risata - annata - pianta.",
        answers: [
            {
                id: "A",
                text: "Seme.",
                correct: false,
                explanation:
                    "«Seme» è naturalmente collegato alla pianta, ma non forma espressioni comuni equivalenti con «risata» e «annata».",
            },
            {
                id: "B",
                text: "Fiore.",
                correct: false,
                explanation:
                    "«Fiore» è collegato alla pianta, ma non si combina normalmente con «risata» e «annata» nel modo richiesto.",
            },
            {
                id: "C",
                text: "Avanti.",
                correct: false,
                explanation:
                    "«Avanti» non crea tre espressioni di senso compiuto con «risata», «annata» e «pianta».",
            },
            {
                id: "D",
                text: "Grassa.",
                correct: true,
                explanation:
                    "Si possono formare tutte e tre le espressioni: «risata grassa», «annata grassa» e «pianta grassa». È quindi l'unico termine associabile correttamente a tutte e tre le parole.",
            },
        ],
    },

    {
        id: 30,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        question:
            "Qual è il significato della frase seguente? Fattori sociali sono anche suscettibili di influenzare in modo decisivo ed irreversibile sia l'acquisizione del linguaggio che l'acquisto della propria lingua materna che lo sviluppo della competenza linguistica nelle sue varie sottocompetenza.",
        answers: [
            {
                id: "A",
                text: "L'apprendimento della propria lingua è un processo autonomo e indipendente da condizionamenti sociali.",
                correct: false,
                explanation:
                    "La frase afferma esattamente il contrario: i fattori sociali possono incidere in modo decisivo sull'apprendimento linguistico.",
            },
            {
                id: "B",
                text: "L'apprendimento linguistico è reversibile.",
                correct: false,
                explanation:
                    "Nel testo compare esplicitamente l'espressione «in modo decisivo ed irreversibile». Questa alternativa modifica quindi il significato originale.",
            },
            {
                id: "C",
                text: "Esistono fattori sociali capaci di influenzare l'acquisizione del linguaggio e lo sviluppo della propria capacità linguistica.",
                correct: true,
                explanation:
                    "Questa alternativa riformula correttamente il significato dell'enunciato: alcuni fattori sociali possono incidere sull'acquisizione della lingua e sullo sviluppo delle diverse competenze linguistiche.",
            },
            {
                id: "D",
                text: "Esistono fattori sociali influenzati dalle norme e dalle condizioni del linguaggio.",
                correct: false,
                explanation:
                    "La relazione causale è invertita. Nella frase sono i fattori sociali a influenzare l'apprendimento e lo sviluppo linguistico, non il contrario.",
            },
        ],
    },

    {
        id: 31,
        area: "linguistica-logica",
        category: "figure-retoriche",
        difficulty: 3,
        question:
            "Sapendo che l'ossimoro è un procedimento retorico che consiste nell'unire due parole o espressioni che sono inconciliabili nel significato in quanto indicano propriamente una contrarietà, quale tra le seguenti alternative non rappresenta un ossimoro?",
        answers: [
            {
                id: "A",
                text: "Le coincidenze fortuite.",
                correct: true,
                explanation:
                    "«Coincidenze fortuite» non unisce concetti contrari: una coincidenza è già per sua natura casuale o fortuita. L'espressione è semmai ridondante, non ossimorica.",
            },
            {
                id: "B",
                text: "Convergenze parallele.",
                correct: false,
                explanation:
                    "«Convergenze» implica un avvicinamento verso un punto comune, mentre linee parallele non convergono. L'accostamento crea quindi una contraddizione tipica dell'ossimoro.",
            },
            {
                id: "C",
                text: "Un silenzio eloquente.",
                correct: false,
                explanation:
                    "Il silenzio implica assenza di parole, mentre «eloquente» indica grande capacità espressiva. L'unione dei due concetti contrastanti costituisce un ossimoro.",
            },
            {
                id: "D",
                text: "Sprofondare verso l'alto.",
                correct: false,
                explanation:
                    "«Sprofondare» indica un movimento verso il basso, mentre «verso l'alto» indica la direzione opposta. Il contrasto produce un evidente ossimoro.",
            },
        ],
    },

    {
        id: 32,
        area: "linguistica-logica",
        category: "logica-serie-figurali",
        difficulty: 3,
        question:
            "Uno solo dei disegni contrassegnati con lettere costituisce il logico completamento della serie di disegni numerata da 1 a 5. Quale?",
        questionImage: {
            src: `${import.meta.env.BASE_URL}resources/simulation14/domanda-32.png`,
            alt: "Serie figurale circolare numerata da 1 a 5 con la figura 2 mancante e quattro alternative A, B, C e D",
        },
        answers: [
            {
                id: "A",
                text: "Il disegno indicato con la lettera C.",
                correct: false,
                explanation:
                    "La figura C ripropone il settore oscurato nella zona superiore, ma non occupa la posizione necessaria per completare la rotazione progressiva della serie.",
            },
            {
                id: "B",
                text: "Il disegno indicato con la lettera A.",
                correct: true,
                explanation:
                    "Il settore scuro si sposta progressivamente di un quarto di giro lungo l'anello: nella figura 1 è in alto a sinistra, nella 3 è in basso a destra, nella 4 in basso a sinistra e nella 5 torna in alto a sinistra. La figura mancante deve quindi avere il settore in alto a destra, configurazione mostrata dal disegno A.",
            },
            {
                id: "C",
                text: "Il disegno indicato con la lettera D.",
                correct: false,
                explanation:
                    "Il disegno D colloca la parte oscurata sul lato destro in una posizione differente da quella necessaria nella progressione. Non completa correttamente il movimento regolare osservato.",
            },
            {
                id: "D",
                text: "Il disegno indicato con la lettera B.",
                correct: false,
                explanation:
                    "La figura B colloca il settore nella zona inferiore sinistra, posizione che compare già successivamente nella figura 4. Inserirla come figura 2 interromperebbe l'ordine della rotazione.",
            },
        ],
    },

    {
        id: 33,
        area: "linguistica-logica",
        category: "logica-analogie",
        difficulty: 2,
        question:
            "«..?..» sta a «Motocicletta» come «Aliante» sta a «..?..».",
        answers: [
            {
                id: "A",
                text: "Manubrio - Volante.",
                correct: false,
                explanation:
                    "Manubrio e volante sono parti di mezzi di trasporto, ma il rapporto non corrisponde a quello tra aliante e il secondo termine richiesto.",
            },
            {
                id: "B",
                text: "Ruota - Carburatore.",
                correct: false,
                explanation:
                    "Ruota e carburatore sono componenti meccanici, mentre «aliante» indica un intero mezzo di trasporto. La relazione è quindi incoerente.",
            },
            {
                id: "C",
                text: "Macchina - Ala.",
                correct: false,
                explanation:
                    "Una macchina è un mezzo completo, mentre un'ala è soltanto una parte di un aeromobile. Le due coppie non presentano la stessa relazione.",
            },
            {
                id: "D",
                text: "Bicicletta - Aeroplano.",
                correct: true,
                explanation:
                    "La bicicletta è un mezzo a due ruote senza motore rispetto alla motocicletta, che ne rappresenta una versione motorizzata. Analogamente l'aliante è un aeromobile privo di propulsione propria rispetto all'aeroplano motorizzato.",
            },
        ],
    },

    {
        id: 34,
        area: "linguistica-logica",
        category: "lessico-versi-degli-animali",
        difficulty: 2,
        question:
            "«Merlo» sta a «Fischiare» come «Cinghiale» sta a «..?..».",
        answers: [
            {
                id: "A",
                text: "Frinire.",
                correct: false,
                explanation:
                    "«Frinire» è il verbo utilizzato soprattutto per il verso di alcuni insetti, come cicale e grilli. Non indica il verso del cinghiale.",
            },
            {
                id: "B",
                text: "Guaire.",
                correct: false,
                explanation:
                    "«Guaire» è associato soprattutto al cane e ad altri canidi quando emettono un verso lamentoso.",
            },
            {
                id: "C",
                text: "Grugnire.",
                correct: true,
                explanation:
                    "Il cinghiale appartiene alla famiglia dei suidi e il suo verso viene indicato con il verbo «grugnire», proprio come quello del maiale.",
            },
            {
                id: "D",
                text: "Zigare.",
                correct: false,
                explanation:
                    "«Zigare» non è il verbo normalmente utilizzato per descrivere il verso caratteristico del cinghiale. La risposta corretta è «grugnire».",
            },
        ],
    },

    {
        id: 35,
        area: "linguistica-logica",
        category: "logica-analogie",
        difficulty: 2,
        question:
            "«Burro» sta a «..?..» come «..?..» sta a «Uva».",
        answers: [
            {
                id: "A",
                text: "Latte - Vino.",
                correct: true,
                explanation:
                    "Il burro viene prodotto a partire dal latte; analogamente il vino viene prodotto a partire dall'uva. La relazione è quindi prodotto → materia prima nella prima coppia e materia derivata → origine nella seconda.",
            },
            {
                id: "B",
                text: "Formaggio - Frutta.",
                correct: false,
                explanation:
                    "Burro e formaggio sono entrambi derivati del latte, mentre frutta e uva hanno una relazione di categoria. Le due relazioni non coincidono.",
            },
            {
                id: "C",
                text: "Bianco - Vino.",
                correct: false,
                explanation:
                    "«Bianco» può qualificare il burro e il vino, ma non stabilisce una relazione analoga tra prodotto e materia prima.",
            },
            {
                id: "D",
                text: "Formaggio - Mosto.",
                correct: false,
                explanation:
                    "Il formaggio non è la materia prima da cui si ottiene il burro. Inoltre il mosto deriva dall'uva, ma la prima metà dell'analogia non sarebbe coerente.",
            },
        ],
    },

    {
        id: 36,
        area: "linguistica-logica",
        category: "lessico",
        difficulty: 2,
        question:
            "Colui che è capace delle azioni più basse, cattive e schifose si dice è:",
        answers: [
            {
                id: "A",
                text: "Una persona venale.",
                correct: false,
                explanation:
                    "Una persona venale è facilmente corruttibile o attribuisce eccessiva importanza al denaro. Il termine non esprime in generale la bassezza morale descritta dalla domanda.",
            },
            {
                id: "B",
                text: "Una persona abietta.",
                correct: true,
                explanation:
                    "«Abietto» indica una persona moralmente spregevole, vile, capace di comportamenti molto bassi e ripugnanti. È quindi il termine corrispondente alla definizione.",
            },
            {
                id: "C",
                text: "Una persona acquiescente.",
                correct: false,
                explanation:
                    "Una persona acquiescente tende ad accettare senza opporsi le volontà o le richieste altrui. Non significa moralmente spregevole.",
            },
            {
                id: "D",
                text: "Una persona boriosa.",
                correct: false,
                explanation:
                    "«Borioso» indica una persona piena di sé, arrogante o presuntuosa. Non implica necessariamente la capacità di azioni basse e ripugnanti.",
            },
        ],
    },

    {
        id: 37,
        area: "linguistica-logica",
        category: "lessico-sinonimi",
        difficulty: 2,
        question:
            "In quale dei seguenti gruppi di termini può essere inserito \"percuotere\"?",
        answers: [
            {
                id: "A",
                text: "Obliare, trascurare, scordare.",
                correct: false,
                explanation:
                    "Questi termini riguardano principalmente il dimenticare o il non prestare attenzione. Non sono sinonimi di «percuotere».",
            },
            {
                id: "B",
                text: "Abbandonare, dimenticare, lasciare.",
                correct: false,
                explanation:
                    "Le parole del gruppo indicano separazione o dimenticanza. Non hanno il significato di colpire qualcuno o qualcosa.",
            },
            {
                id: "C",
                text: "Battere, picchiare, malmenare.",
                correct: true,
                explanation:
                    "«Percuotere» significa colpire ripetutamente o con una certa forza. «Battere», «picchiare» e «malmenare» appartengono quindi allo stesso campo semantico.",
            },
            {
                id: "D",
                text: "Livellare, perequare, pareggiare.",
                correct: false,
                explanation:
                    "Questi verbi indicano generalmente il rendere uguale o uniforme qualcosa. Non sono sinonimi di «percuotere».",
            },
        ],
    },

    {
        id: 38,
        area: "linguistica-logica",
        category: "lessico-comprensione",
        difficulty: 3,
        question:
            "La frase Dopo averlo lungamente osservato, ne ha stigmatizzato il comportamento nella sua opera significa:",
        answers: [
            {
                id: "A",
                text: "Qualcuno ha proposto, in un suo scritto, di imitare il comportamento di un'altra persona.",
                correct: false,
                explanation:
                    "«Stigmatizzare» non significa proporre qualcosa come modello da imitare. Indica invece una forte censura o condanna.",
            },
            {
                id: "B",
                text: "Qualcuno ha lodato entusiasticamente il comportamento di un'altra persona.",
                correct: false,
                explanation:
                    "Lodare è il contrario del significato assunto da «stigmatizzare» in questo contesto. Il verbo esprime una critica molto severa.",
            },
            {
                id: "C",
                text: "Qualcuno ha ridicolizzato con una caricatura il comportamento di un'altra persona.",
                correct: false,
                explanation:
                    "Stigmatizzare può implicare una condanna pubblica, ma non significa specificamente trasformare qualcuno in una caricatura o ridicolizzarlo.",
            },
            {
                id: "D",
                text: "Qualcuno ha vivamente criticato il comportamento di un'altra persona in una sua opera.",
                correct: true,
                explanation:
                    "«Stigmatizzare» significa censurare o condannare severamente un comportamento, evidenziandone gli aspetti negativi. Questa alternativa rende quindi correttamente il senso della frase.",
            },
        ],
    },

    {
        id: 39,
        area: "linguistica-logica",
        category: "logica-deduttiva",
        difficulty: 2,
        question:
            "\"Stefano è appassionato di giardinaggio; tutti gli appassionati di giardinaggio amano la natura; alcuni floricoltori sono appassionati di giardinaggio\". Se le precedenti affermazioni sono vere, quale delle seguenti è sicuramente vera?",
        answers: [
            {
                id: "A",
                text: "Stefano è un floricoltore.",
                correct: false,
                explanation:
                    "Sappiamo soltanto che alcuni floricoltori sono appassionati di giardinaggio. Non segue che ogni appassionato, e quindi Stefano, sia necessariamente un floricoltore.",
            },
            {
                id: "B",
                text: "Stefano ama la natura.",
                correct: true,
                explanation:
                    "Stefano è appassionato di giardinaggio e la premessa stabilisce che tutti gli appassionati di giardinaggio amano la natura. Applicando direttamente la regola, Stefano ama necessariamente la natura.",
            },
            {
                id: "C",
                text: "Tutti coloro che amano la natura sono appassionati di giardinaggio.",
                correct: false,
                explanation:
                    "La premessa dice che gli appassionati di giardinaggio amano la natura, non che tutti gli amanti della natura siano appassionati di giardinaggio. Sarebbe un'inversione non valida dell'implicazione.",
            },
            {
                id: "D",
                text: "Tutti i floricoltori amano la natura.",
                correct: false,
                explanation:
                    "Sappiamo che solo alcuni floricoltori sono appassionati di giardinaggio. Non possiamo estendere la proprietà dell'amare la natura a tutti i floricoltori.",
            },
        ],
    },

    {
        id: 40,
        area: "linguistica-logica",
        category: "logica-parole",
        difficulty: 2,
        question:
            "Quale dei seguenti termini, sostituito ai puntini, forma parole di senso compiuto? EFFIC(..) - (..)TONE.",
        answers: [
            {
                id: "A",
                text: "ACE.",
                correct: true,
                explanation:
                    "Inserendo «ACE» si ottengono due parole italiane corrette: EFFIC + ACE = «efficace» e ACE + TONE = «acetone». È quindi l'unica soluzione che completa entrambe le parole.",
            },
            {
                id: "B",
                text: "CEN.",
                correct: false,
                explanation:
                    "Inserendo «CEN» non si ottengono due parole italiane di senso compiuto da entrambe le combinazioni.",
            },
            {
                id: "C",
                text: "INTE.",
                correct: false,
                explanation:
                    "«Efficinte» e «intetone» non sono parole corrette. La sequenza non soddisfa quindi il criterio dell'esercizio.",
            },
            {
                id: "D",
                text: "ACIA.",
                correct: false,
                explanation:
                    "La sequenza «ACIA» non permette di formare contemporaneamente una parola corretta dopo «EFFIC» e una prima di «TONE».",
            },
        ],
    },
    {
        id: 41,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-prima-guerra-mondiale",
        difficulty: 2,
        question:
            "Quale fu l'evento che innescò l'inizio della Prima Guerra Mondiale nel 1914?",
        answers: [
            {
                id: "A",
                text: "L’occupazione da parte della Germania del Belgio.",
                correct: false,
                explanation:
                    "L'invasione tedesca del Belgio avvenne nell'agosto del 1914 e contribuì all'ingresso del Regno Unito nel conflitto. Fu quindi una conseguenza dell'inizio della guerra, non l'evento che la innescò.",
            },
            {
                id: "B",
                text: "L'occupazione da parte dell'Austria della Bosnia-Erzegovina.",
                correct: false,
                explanation:
                    "L'Austria-Ungheria aveva annesso formalmente la Bosnia-Erzegovina nel 1908, provocando una grave crisi internazionale. L'evento immediatamente collegato allo scoppio della guerra avvenne invece nel 1914.",
            },
            {
                id: "C",
                text: "L'uccisione dell'arciduca austro-ungarico Francesco Ferdinando.",
                correct: true,
                explanation:
                    "Il 28 giugno 1914 l'arciduca Francesco Ferdinando, erede al trono austro-ungarico, fu assassinato a Sarajevo da Gavrilo Princip. L'attentato provocò la crisi di luglio e mise in moto il sistema di alleanze che portò allo scoppio della Prima Guerra Mondiale.",
            },
            {
                id: "D",
                text: "L’assassinio di Jean Jaurès, da parte di un fanatico francese.",
                correct: false,
                explanation:
                    "Jean Jaurès, importante politico socialista e pacifista francese, fu assassinato il 31 luglio 1914. La crisi internazionale che portò alla guerra era però già iniziata dopo l'attentato di Sarajevo.",
            },
        ],
    },

    {
        id: 42,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-prima-guerra-mondiale",
        difficulty: 2,
        question:
            "La Conferenza di Pace di Parigi, dopo la Prima Guerra Mondiale, quale trattato impose alla Germania?",
        answers: [
            {
                id: "A",
                text: "Trattato di Versailles.",
                correct: true,
                explanation:
                    "Il Trattato di Versailles fu firmato nel 1919 e regolò la pace con la Germania dopo la Prima Guerra Mondiale. Impose alla Germania perdite territoriali, limitazioni militari e pesanti riparazioni di guerra.",
            },
            {
                id: "B",
                text: "Trattato di Sévres.",
                correct: false,
                explanation:
                    "Il Trattato di Sèvres del 1920 riguardò principalmente l'Impero ottomano. Non fu il trattato imposto alla Germania.",
            },
            {
                id: "C",
                text: "Trattato di Saint Germain.",
                correct: false,
                explanation:
                    "Il Trattato di Saint-Germain del 1919 regolò la pace con l'Austria dopo la dissoluzione dell'Impero austro-ungarico.",
            },
            {
                id: "D",
                text: "Trattato di Trianon.",
                correct: false,
                explanation:
                    "Il Trattato di Trianon del 1920 riguardò l'Ungheria. La Germania fu invece interessata dal Trattato di Versailles.",
            },
        ],
    },

    {
        id: 43,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-colonialismo-italiano",
        difficulty: 3,
        question:
            "Quando iniziò la politica coloniale dell'Italia? Che esito ebbero le prime operazioni coloniali?",
        answers: [
            {
                id: "A",
                text: "Nel 1830, immediatamente dopo l'Unificazione, e si risolse in una cocente disfatta, a Dogali nel 1832.",
                correct: false,
                explanation:
                    "L'Italia non era ancora uno Stato unitario nel 1830: il Regno d'Italia nacque nel 1861. Anche le date relative a Dogali sono quindi incompatibili con la cronologia storica.",
            },
            {
                id: "B",
                text: "Nel 1890 sotto il governo Crispi, e si risolse nella vittoria di Dogali del 1891 e nel conseguente assoggettamento dell'Etiopia.",
                correct: false,
                explanation:
                    "La battaglia di Dogali avvenne nel 1887 e fu una sconfitta italiana, non una vittoria del 1891. Inoltre l'Etiopia non fu assoggettata in quella fase.",
            },
            {
                id: "C",
                text: "Nel 1874 sotto il primo governo Giolitti, e si risolse nella vittoria di Dogali del 1877 e nel conseguente assoggettamento dell'Eritrea.",
                correct: false,
                explanation:
                    "Giovanni Giolitti non guidava il governo italiano nel 1874 e Dogali non avvenne nel 1877. La ricostruzione cronologica dell'alternativa è quindi errata.",
            },
            {
                id: "D",
                text: "Nel 1882 sotto il governo Depretis, e si risolse in una cocente disfatta, a Dogali nel 1887.",
                correct: true,
                explanation:
                    "La politica coloniale italiana in Africa orientale iniziò negli anni Ottanta dell'Ottocento, durante l'età di Depretis. Nel gennaio 1887 una colonna italiana fu sconfitta a Dogali dalle forze etiopiche, episodio che rappresentò un duro insuccesso della prima espansione coloniale.",
            },
        ],
    },

    {
        id: 44,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-fascismo",
        difficulty: 3,
        question:
            "Con la famosa espressione \"secessione dell'Aventino\" si è soliti ricordare un importante episodio accaduto in Italia nel 1924; quale?",
        answers: [
            {
                id: "A",
                text: "Il concordato che, dopo due anni di trattative nel più assoluto riserbo, Mussolini strinse con la Santa Sede e che venne sancito nel Palazzo pontificio di Pio XI, sull'Aventino.",
                correct: false,
                explanation:
                    "I rapporti tra Stato fascista e Santa Sede furono regolati dai Patti Lateranensi del 1929. Questo episodio non viene chiamato secessione dell'Aventino.",
            },
            {
                id: "B",
                text: "La decisione, presa a seguito del delitto Matteotti (deputato socialista rapito da un gruppo di squadristi dopo aver pronunciato alla Camera una durissima requisitoria contro il fascismo) da parte dei gruppi d'opposizione al fascismo, di astenersi dai lavori parlamentari finché non fosse stata ripristinata la legalità democratica.",
                correct: true,
                explanation:
                    "Dopo il rapimento e l'uccisione di Giacomo Matteotti nel 1924, molti deputati dell'opposizione decisero di non partecipare ai lavori parlamentari. Questa protesta politica contro il fascismo è passata alla storia come «secessione dell'Aventino».",
            },
            {
                id: "C",
                text: "L'incontro che Mussolini ebbe con Hitler nella sua villa sull'Aventino, durante il quale fu firmato l'accordo bellico tra Italia e Germania noto come \"patto d'acciaio\".",
                correct: false,
                explanation:
                    "Il Patto d'Acciaio tra Italia e Germania fu firmato nel 1939, quindici anni dopo la crisi Matteotti. Non ha alcuna relazione con la secessione dell'Aventino.",
            },
            {
                id: "D",
                text: "La formulazione, durante una riunione straordinaria del Parlamento sull'Aventino, delle cosiddette \"leggi fascistissime\" da parte del partito fascista e, in particolare, ad opera del ministro della Giustizia Alfredo Rocco; leggi che avrebbero stravolto definitivamente i connotati dello Stato liberale.",
                correct: false,
                explanation:
                    "Le leggi fascistissime furono approvate soprattutto tra il 1925 e il 1926 e consolidarono la dittatura fascista. Non furono formulate durante una riunione parlamentare sull'Aventino.",
            },
        ],
    },

    {
        id: 45,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-colonialismo-fascista",
        difficulty: 2,
        question:
            "Nel 1936, quale conseguenza della politica coloniale fascista, Vittorio Emanuele III, oltre al titolo di Re d'Italia, assume anche quello di....",
        answers: [
            {
                id: "A",
                text: "Re della Tunisia.",
                correct: false,
                explanation:
                    "La Tunisia era un protettorato francese e non venne conquistata dall'Italia fascista nel 1936. Vittorio Emanuele III non assunse questo titolo.",
            },
            {
                id: "B",
                text: "Gran Sultano delle Indie Orientali.",
                correct: false,
                explanation:
                    "Questo titolo non appartiene alla storia della monarchia italiana e non ha alcuna relazione con le conquiste coloniali fasciste.",
            },
            {
                id: "C",
                text: "Imperatore d'Etiopia.",
                correct: true,
                explanation:
                    "Dopo la conquista italiana dell'Etiopia nel 1936, Mussolini proclamò la nascita dell'Africa Orientale Italiana e Vittorio Emanuele III assunse il titolo di Imperatore d'Etiopia.",
            },
            {
                id: "D",
                text: "Imperatore d'Egitto.",
                correct: false,
                explanation:
                    "L'Egitto non venne conquistato dall'Italia nella guerra d'Etiopia e Vittorio Emanuele III non ne assunse il titolo imperiale.",
            },
        ],
    },

    {
        id: 46,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-repubblica-italiana",
        difficulty: 3,
        question:
            "Il 18 febbraio 1984 viene firmato a Roma, a Villa Madama, il nuovo Concordato tra Stato e Chiesa. Il firmatario per l'Italia è:",
        answers: [
            {
                id: "A",
                text: "Bettino Craxi.",
                correct: true,
                explanation:
                    "Il nuovo Concordato tra Repubblica Italiana e Santa Sede fu firmato il 18 febbraio 1984 a Villa Madama. Per l'Italia firmò Bettino Craxi, allora Presidente del Consiglio.",
            },
            {
                id: "B",
                text: "Arnaldo Forlani.",
                correct: false,
                explanation:
                    "Arnaldo Forlani fu Presidente del Consiglio tra il 1980 e il 1981. Nel febbraio 1984 il governo italiano era guidato da Bettino Craxi.",
            },
            {
                id: "C",
                text: "Giulio Andreotti.",
                correct: false,
                explanation:
                    "Giulio Andreotti ricoprì più volte la carica di Presidente del Consiglio, ma non era il capo del governo al momento della firma del nuovo Concordato del 1984.",
            },
            {
                id: "D",
                text: "Pier Luigi Romita.",
                correct: false,
                explanation:
                    "Pier Luigi Romita fu un politico italiano e ricoprì incarichi ministeriali, ma non fu il firmatario italiano dell'accordo di Villa Madama.",
            },
        ],
    },

    {
        id: 47,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "educazione-civica-costituzione",
        difficulty: 2,
        question:
            "A chi si rivolge la Costituzione italiana quando richiede l'adempimento dei doveri inderogabili di solidarietà politica, economica e sociale?",
        answers: [
            {
                id: "A",
                text: "Ai cittadini, durante lo svolgimento del servizio militare.",
                correct: false,
                explanation:
                    "I doveri di solidarietà non sono limitati allo svolgimento del servizio militare. Il principio ha carattere generale.",
            },
            {
                id: "B",
                text: "Ai funzionario dello Stato.",
                correct: false,
                explanation:
                    "Il principio di solidarietà non riguarda soltanto i funzionari pubblici. Il quesito fa riferimento a un dovere di portata generale.",
            },
            {
                id: "C",
                text: "Ai cittadini cui sono affidate funzioni pubbliche.",
                correct: false,
                explanation:
                    "Chi svolge funzioni pubbliche ha specifici doveri costituzionali, ma i doveri di solidarietà politica, economica e sociale richiamati nel quesito non sono limitati a questa categoria.",
            },
            {
                id: "D",
                text: "A tutti i cittadini.",
                correct: true,
                explanation:
                    "Questa è la risposta indicata dal test. Il riferimento è all'articolo 2 della Costituzione, che afferma il principio dei doveri inderogabili di solidarietà politica, economica e sociale all'interno della comunità.",
            },
        ],
    },

    {
        id: 48,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "educazione-civica-costituzione",
        difficulty: 1,
        question:
            "Afferma solennemente l'art. 1 della Costituzione italiana che: \"la sovranità appartiene _______________ che la esercita nelle forme e nei limiti della Costituzione\".",
        answers: [
            {
                id: "A",
                text: "Al Parlamento.",
                correct: false,
                explanation:
                    "Il Parlamento esercita importanti funzioni rappresentative e legislative, ma l'articolo 1 non attribuisce ad esso la titolarità della sovranità.",
            },
            {
                id: "B",
                text: "Al popolo.",
                correct: true,
                explanation:
                    "L'articolo 1 della Costituzione stabilisce che «la sovranità appartiene al popolo, che la esercita nelle forme e nei limiti della Costituzione». È uno dei principi fondamentali dell'ordinamento repubblicano.",
            },
            {
                id: "C",
                text: "Al Presidente della Repubblica.",
                correct: false,
                explanation:
                    "Il Presidente della Repubblica è il Capo dello Stato e rappresenta l'unità nazionale, ma non è titolare della sovranità.",
            },
            {
                id: "D",
                text: "Al Governo.",
                correct: false,
                explanation:
                    "Il Governo esercita il potere esecutivo, ma la sovranità appartiene costituzionalmente al popolo.",
            },
        ],
    },

    {
        id: 49,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "educazione-civica-costituzione",
        difficulty: 2,
        question:
            "A norma della Costituzione, quali fonti regolano i rapporti tra Stato e Chiesa?",
        answers: [
            {
                id: "A",
                text: "Le leggi costituzionali.",
                correct: false,
                explanation:
                    "I rapporti tra Stato italiano e Chiesa cattolica non sono definiti genericamente da leggi costituzionali. La Costituzione richiama una fonte specifica.",
            },
            {
                id: "B",
                text: "Le leggi ordinarie.",
                correct: false,
                explanation:
                    "Le leggi ordinarie possono disciplinare numerose materie, ma l'articolo 7 della Costituzione richiama espressamente i Patti Lateranensi per i rapporti tra Stato e Chiesa cattolica.",
            },
            {
                id: "C",
                text: "I Patti Lateranensi.",
                correct: true,
                explanation:
                    "L'articolo 7 della Costituzione afferma che Stato e Chiesa cattolica sono indipendenti e sovrani ciascuno nel proprio ordine e che i loro rapporti sono regolati dai Patti Lateranensi.",
            },
            {
                id: "D",
                text: "I decreti emanati dal Governo.",
                correct: false,
                explanation:
                    "I decreti governativi non costituiscono la fonte fondamentale indicata dalla Costituzione per regolare i rapporti tra Stato e Chiesa cattolica.",
            },
        ],
    },

    {
        id: 50,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-fisica",
        difficulty: 1,
        question:
            "Qual è il monte più alto del mondo?",
        answers: [
            {
                id: "A",
                text: "Everest.",
                correct: true,
                explanation:
                    "L'Everest è la montagna più alta del mondo rispetto al livello medio del mare, con una quota superiore agli 8.800 metri. Si trova nella catena dell'Himalaya, al confine tra Nepal e Tibet.",
            },
            {
                id: "B",
                text: "Makalu.",
                correct: false,
                explanation:
                    "Il Makalu è una delle montagne più alte della Terra e supera gli 8.000 metri, ma è più basso dell'Everest.",
            },
            {
                id: "C",
                text: "K2.",
                correct: false,
                explanation:
                    "Il K2 è la seconda montagna più alta del mondo e raggiunge circa 8.611 metri. L'Everest rimane più elevato.",
            },
            {
                id: "D",
                text: "Kangchenjunga.",
                correct: false,
                explanation:
                    "Il Kangchenjunga è la terza montagna più alta del mondo. Non supera né l'Everest né il K2.",
            },
        ],
    },

    {
        id: 51,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-demografia",
        difficulty: 2,
        question:
            "Qual è il Paese europeo con la più bassa densità di popolazione?",
        answers: [
            {
                id: "A",
                text: "Portogallo.",
                correct: false,
                explanation:
                    "Il Portogallo ha una densità di popolazione nettamente superiore rispetto all'Islanda. Non è quindi il Paese indicato dal quesito.",
            },
            {
                id: "B",
                text: "Lituania.",
                correct: false,
                explanation:
                    "La Lituania presenta una densità relativamente contenuta, ma comunque superiore a quella islandese.",
            },
            {
                id: "C",
                text: "Lussemburgo.",
                correct: false,
                explanation:
                    "Il Lussemburgo è uno Stato di piccole dimensioni territoriali e presenta una densità di popolazione molto elevata rispetto all'Islanda.",
            },
            {
                id: "D",
                text: "Islanda.",
                correct: true,
                explanation:
                    "L'Islanda ha una popolazione relativamente ridotta distribuita su un territorio piuttosto vasto. Tra le alternative proposte è quindi il Paese con la densità di popolazione più bassa.",
            },
        ],
    },

    {
        id: 52,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-continenti",
        difficulty: 1,
        question:
            "Qual è il continente più esteso della Terra?",
        answers: [
            {
                id: "A",
                text: "America Meridionale.",
                correct: false,
                explanation:
                    "L'America Meridionale possiede una grande superficie, ma è molto meno estesa dell'Asia.",
            },
            {
                id: "B",
                text: "Asia.",
                correct: true,
                explanation:
                    "L'Asia è il continente più esteso della Terra e occupa circa un terzo delle terre emerse. È anche il continente più popoloso.",
            },
            {
                id: "C",
                text: "Africa.",
                correct: false,
                explanation:
                    "L'Africa è il secondo continente più esteso del pianeta, dopo l'Asia.",
            },
            {
                id: "D",
                text: "America Settentrionale e Centrale.",
                correct: false,
                explanation:
                    "Anche considerando insieme America Settentrionale e Centrale, la loro superficie rimane inferiore a quella dell'Asia.",
            },
        ],
    },

    {
        id: 53,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-italiana",
        difficulty: 2,
        question:
            "Le Bocche di Bonifacio separano la Corsica da quale regione italiana?",
        answers: [
            {
                id: "A",
                text: "Liguria.",
                correct: false,
                explanation:
                    "La Liguria si trova nell'Italia nord-occidentale e si affaccia sul Mar Ligure. Non è separata dalla Corsica dalle Bocche di Bonifacio.",
            },
            {
                id: "B",
                text: "Toscana.",
                correct: false,
                explanation:
                    "La Toscana si affaccia sul Mar Tirreno e comprende l'Arcipelago Toscano, ma non è la regione posta immediatamente a sud della Corsica.",
            },
            {
                id: "C",
                text: "Lazio.",
                correct: false,
                explanation:
                    "Il Lazio si trova nell'Italia centrale e non è direttamente separato dalla Corsica attraverso lo stretto indicato.",
            },
            {
                id: "D",
                text: "Sardegna.",
                correct: true,
                explanation:
                    "Le Bocche di Bonifacio sono lo stretto che separa la Corsica, appartenente alla Francia, dalla Sardegna. Si trovano tra l'estremità meridionale corsa e quella settentrionale sarda.",
            },
        ],
    },

    {
        id: 54,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-italiana",
        difficulty: 2,
        question:
            "Il valico del Colle di Tenda quali nazioni mette in comunicazione?",
        answers: [
            {
                id: "A",
                text: "Italia-Francia.",
                correct: true,
                explanation:
                    "Il Colle di Tenda si trova nelle Alpi Marittime e costituisce un collegamento storico tra il Piemonte italiano e il territorio francese.",
            },
            {
                id: "B",
                text: "Italia-Slovenia.",
                correct: false,
                explanation:
                    "Il confine tra Italia e Slovenia si trova molto più a est, nell'area del Friuli-Venezia Giulia. Il Colle di Tenda è invece nelle Alpi occidentali.",
            },
            {
                id: "C",
                text: "Italia-Austria.",
                correct: false,
                explanation:
                    "Italia e Austria sono collegate attraverso diversi valichi alpini, ma il Colle di Tenda non si trova lungo quel confine.",
            },
            {
                id: "D",
                text: "Italia-Svizzera.",
                correct: false,
                explanation:
                    "Il confine italo-svizzero attraversa le Alpi centrali. Il Colle di Tenda collega invece Italia e Francia.",
            },
        ],
    },

    {
        id: 55,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-pirandello",
        difficulty: 3,
        question:
            "La produzione narrativa di Pirandello che nasce in margine al Verismo, se ne distacca per una nota polemica più violenta, per una visione amara e paradossale della vita ed un'ironia corrosiva. I suoi personaggi sono prevalentemente:",
        answers: [
            {
                id: "A",
                text: "Aristocratici che si interrogano sui concetti di bene e male.",
                correct: false,
                explanation:
                    "L'aristocrazia e la riflessione morale sul bene e sul male non rappresentano il tipo umano predominante della narrativa pirandelliana.",
            },
            {
                id: "B",
                text: "Esteti che ritengono vero e buono ciò che è bello.",
                correct: false,
                explanation:
                    "La figura dell'esteta è maggiormente collegata al Decadentismo e soprattutto alla narrativa di D'Annunzio. Non è il personaggio tipico di Pirandello.",
            },
            {
                id: "C",
                text: "Piccoli borghesi dall'esistenza grama e soffocante e con una brama disperata di vivere, di essere qualcuno.",
                correct: true,
                explanation:
                    "Molti personaggi pirandelliani appartengono alla piccola borghesia e vivono esistenze soffocanti, condizionate dalle convenzioni sociali e dalla distanza tra ciò che sentono di essere e l'immagine che gli altri attribuiscono loro.",
            },
            {
                id: "D",
                text: "«Eroi» che sentono la vita come un impegno e un dovere, di cui dovranno rendere conto a Dio.",
                correct: false,
                explanation:
                    "Questa concezione eroica e religiosa dell'esistenza non caratterizza generalmente i protagonisti pirandelliani, spesso invece segnati da crisi d'identità e relativismo.",
            },
        ],
    },

    {
        id: 56,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-pascoli",
        difficulty: 2,
        question:
            "Quale delle seguenti opere è stata scritta da Giovanni Pascoli?",
        answers: [
            {
                id: "A",
                text: "Lavandare.",
                correct: true,
                explanation:
                    "«Lavandare» è una poesia di Giovanni Pascoli inclusa nella raccolta «Myricae». Il componimento descrive un paesaggio autunnale e il canto malinconico delle lavandaie.",
            },
            {
                id: "B",
                text: "Alla luna.",
                correct: false,
                explanation:
                    "«Alla luna» è un idillio di Giacomo Leopardi, composto nel 1819 e successivamente inserito nei «Canti».",
            },
            {
                id: "C",
                text: "Due nel crepuscolo.",
                correct: false,
                explanation:
                    "Questa non è l'opera pascoliana indicata dal quesito. La risposta corretta tra le alternative è «Lavandare».",
            },
            {
                id: "D",
                text: "Estiva.",
                correct: false,
                explanation:
                    "«Estiva» non è la poesia pascoliana richiesta in questa domanda. «Lavandare» appartiene invece con certezza alla produzione di Pascoli.",
            },
        ],
    },

    {
        id: 57,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-foscolo",
        difficulty: 4,
        question:
            "Il carme Dei Sepolcri fu scritto nel 1806 da Ugo Foscolo. Nell'opera Foscolo sostiene:",
        answers: [
            {
                id: "A",
                text: "Le necessità di legislazioni igienico-sanitarie volte a trasferire i sepolcri fuori dai centri abitati.",
                correct: false,
                explanation:
                    "Il carme nasce anche dal dibattito provocato dall'editto napoleonico di Saint-Cloud, ma Foscolo non si limita a sostenere una questione igienico-sanitaria. Il centro dell'opera è il valore umano, affettivo e civile delle tombe.",
            },
            {
                id: "B",
                text: "L’eternità dell’arte sepolcrale come riflesso dell’immortalità dell’anima.",
                correct: false,
                explanation:
                    "Foscolo mantiene una concezione materialistica e non fonda il valore dei sepolcri sulla fede nell'immortalità dell'anima.",
            },
            {
                id: "C",
                text: "La dimensione religiosa del sepolcro come fondamento della società cristiana a lui contemporanea.",
                correct: false,
                explanation:
                    "Il valore attribuito da Foscolo alle tombe è soprattutto affettivo e civile, non deriva da una concezione religiosa cristiana dell'aldilà.",
            },
            {
                id: "D",
                text: "La centralità della funzione civile dei sepolcri entro un’ottica materialistica (inesistenza di una vita ultraterrena).",
                correct: true,
                explanation:
                    "Pur non credendo in una vita ultraterrena, Foscolo attribuisce ai sepolcri un'importante funzione civile e affettiva: conservano la memoria dei defunti, rafforzano i legami tra generazioni e mantengono vivi gli esempi dei grandi uomini.",
            },
        ],
    },

    {
        id: 58,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-correnti",
        difficulty: 3,
        question:
            "Quale delle seguenti alternative riporta le correnti letterarie italiane secondo il corretto ordine cronologico?",
        answers: [
            {
                id: "A",
                text: "Realismo, Romanticismo, Verismo, Decadentismo.",
                correct: false,
                explanation:
                    "Il Romanticismo precede il Realismo nell'Ottocento. Questa sequenza inverte quindi i primi due movimenti.",
            },
            {
                id: "B",
                text: "Romanticismo, Realismo, Verismo, Decadentismo.",
                correct: true,
                explanation:
                    "La successione proposta dal test segue correttamente lo sviluppo ottocentesco: Romanticismo, poi Realismo, quindi Verismo italiano e infine Decadentismo tra la fine dell'Ottocento e l'inizio del Novecento.",
            },
            {
                id: "C",
                text: "Romanticismo, Realismo, Decadentismo, Verismo.",
                correct: false,
                explanation:
                    "Il Verismo si sviluppa prima del pieno affermarsi del Decadentismo italiano. Le ultime due correnti sono quindi invertite.",
            },
            {
                id: "D",
                text: "Romanticismo, Verismo, Realismo, Decadentismo.",
                correct: false,
                explanation:
                    "Il Realismo precede il Verismo e ne costituisce uno dei riferimenti culturali. Non può quindi essere collocato dopo il Verismo.",
            },
        ],
    },

    {
        id: 59,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-dannunzio",
        difficulty: 3,
        question:
            "Che cos'è \"Le vergini delle rocce\", opera composta da G. D'Annunzio?",
        answers: [
            {
                id: "A",
                text: "Una tragedia ambientata in Abruzzo e fuori da ogni logica temporale.",
                correct: false,
                explanation:
                    "«Le vergini delle rocce» non è una tragedia. È un'opera narrativa in prosa legata alla fase del superomismo dannunziano.",
            },
            {
                id: "B",
                text: "Una delle prime raccolte di liriche scritte dal poeta, ancora influenzata dal gusto romantico e dai modi foscoliani.",
                correct: false,
                explanation:
                    "L'opera non è una raccolta poetica giovanile. È un romanzo pubblicato negli anni Novanta dell'Ottocento.",
            },
            {
                id: "C",
                text: "Un poema allegorico la cui tematica, sulla base del modello dantesco, è il viaggio.",
                correct: false,
                explanation:
                    "La struttura dell'opera non riprende il viaggio allegorico dantesco. È invece centrata sulla figura di Claudio Cantelmo e sull'ideologia aristocratica e superomistica.",
            },
            {
                id: "D",
                text: "Un romanzo che ha per protagonista un superuomo nietzschiano che vuole farsi promotore di un riscatto nazionale.",
                correct: true,
                explanation:
                    "«Le vergini delle rocce» è un romanzo di Gabriele D'Annunzio pubblicato nel 1895. Il protagonista Claudio Cantelmo incarna l'ideale dannunziano del superuomo, influenzato dalla lettura di Nietzsche e legato a un progetto di rigenerazione aristocratica della società.",
            },
        ],
    },

    {
        id: 60,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-foscolo",
        difficulty: 3,
        question:
            "\"Forse perché della fatal quiete / tu sei l'imago, a me sì cara vieni, / o sera! ...\". Da quale opera sono tratti i versi riportati in precedenza e qual è il motivo che li anima?",
        answers: [
            {
                id: "A",
                text: "Sono versi tratti dal carme \"Dei sepolcri\" di U. Foscolo; i motivi dominanti sono l'analogia tra notte e morte e la \"corrispondenza d'amorosi sensi\" che lega ai defunti i superstiti.",
                correct: false,
                explanation:
                    "La «corrispondenza d'amorosi sensi» appartiene effettivamente ai «Sepolcri», ma i versi citati non provengono da quel carme. Sono l'incipit di un sonetto dedicato alla sera.",
            },
            {
                id: "B",
                text: "Sono versi tratti dal sonetto \"Alla sera\" di U. Foscolo; i motivi dominanti sono quello romantico della notte come prefigurazione della morte e quello del placarsi, durante essa, dei tumulti che agitano l'animo del poeta.",
                correct: true,
                explanation:
                    "I versi aprono il sonetto «Alla sera» di Ugo Foscolo. La sera è amata dal poeta perché rappresenta simbolicamente la «fatal quiete», cioè la morte, e perché porta una temporanea pace ai tormenti interiori che agitano il suo animo.",
            },
            {
                id: "C",
                text: "Sono versi tratti dalla canzone \"La quiete dopo la tempesta\" di G. Leopardi; i motivi dominanti sono il senso di gioia che nasce al termine della tempesta e quello del piacere inteso come figlio dell'affanno, in quanto originato unicamente dalla fine di un timore, dalla cessazione della tempesta.",
                correct: false,
                explanation:
                    "La descrizione dei temi leopardiani è pertinente a «La quiete dopo la tempesta», ma i versi riportati appartengono a Foscolo e non a Leopardi.",
            },
            {
                id: "D",
                text: "Sono versi tratti dall'idillio \"La sera del dì di festa\" di G. Leopardi; il motivo dominante è la labilità e la fugacità dell'esistenza umana.",
                correct: false,
                explanation:
                    "«La sera del dì di festa» è un componimento di Leopardi, ma l'espressione «fatal quiete» e i versi citati appartengono al sonetto foscoliano «Alla sera».",
            },
        ],
    },
    {
        id: 61,
        area: "cultura-matematico-scientifica",
        category: "fisica-leve",
        difficulty: 2,
        question:
            "Una generica leva è una macchina costituita da un’asta rigida su cui agiscono due forze dette resistenza e potenza o forza motrice. L’asta può ruotare attorno ad un punto fisso detto fulcro. Una leva di primo genere:",
        answers: [
            {
                id: "A",
                text: "Ha la resistenza tra il fulcro e la forza motrice.",
                correct: false,
                explanation:
                    "Questa disposizione caratterizza una leva di secondo genere. In essa la resistenza si trova tra il fulcro e la forza applicata.",
            },
            {
                id: "B",
                text: "È sempre vantaggiosa.",
                correct: false,
                explanation:
                    "Una leva di primo genere può essere vantaggiosa, svantaggiosa oppure indifferente a seconda delle lunghezze dei bracci. Non è quindi sempre vantaggiosa.",
            },
            {
                id: "C",
                text: "Ha il fulcro tra il braccio della resistenza e quello della potenza.",
                correct: true,
                explanation:
                    "Nella leva di primo genere il fulcro si trova tra la forza resistente e la forza motrice. Esempi tipici sono l'altalena e le forbici.",
            },
            {
                id: "D",
                text: "Ha la forza motrice tra il fulcro e la resistenza.",
                correct: false,
                explanation:
                    "Questa disposizione è propria della leva di terzo genere, nella quale la potenza si trova tra fulcro e resistenza.",
            },
        ],
    },

    {
        id: 62,
        area: "cultura-matematico-scientifica",
        category: "biologia-cellulare",
        difficulty: 2,
        question:
            "Esistono due tipi di cellule: procariotiche ed eucariotiche. Le prime:",
        answers: [
            {
                id: "A",
                text: "Sono prive di un nucleo racchiuso da una membrana.",
                correct: true,
                explanation:
                    "Le cellule procariotiche non possiedono un vero nucleo delimitato da membrana. Il loro DNA si trova in una regione del citoplasma chiamata nucleoide.",
            },
            {
                id: "B",
                text: "Hanno il materiale genetico segregato all’interno del nucleo.",
                correct: false,
                explanation:
                    "Questa caratteristica appartiene alle cellule eucariotiche. Nei procarioti non esiste un nucleo delimitato da una membrana.",
            },
            {
                id: "C",
                text: "Possiedono un nucleo ben distinto.",
                correct: false,
                explanation:
                    "Le cellule procariotiche sono caratterizzate proprio dall'assenza di un nucleo ben distinto e delimitato da membrana.",
            },
            {
                id: "D",
                text: "Sono molto più grandi di quelle eucariotiche.",
                correct: false,
                explanation:
                    "In genere le cellule procariotiche sono più piccole e strutturalmente più semplici delle cellule eucariotiche.",
            },
        ],
    },

    {
        id: 63,
        area: "cultura-matematico-scientifica",
        category: "biologia-organizzazione",
        difficulty: 2,
        question:
            "Quale sequenza rappresenta l’ordine corretto di complessità crescente degli organismi viventi?",
        answers: [
            {
                id: "A",
                text: "Tessuto, Organo, Organismo, Sistema di organi.",
                correct: false,
                explanation:
                    "Un sistema di organi è costituito da più organi e fa parte dell'organismo. Deve quindi precedere l'organismo nella scala di complessità.",
            },
            {
                id: "B",
                text: "Organo, Tessuto, Sistema di organi, Organismo.",
                correct: false,
                explanation:
                    "Il tessuto è meno complesso di un organo, perché un organo è costituito dall'organizzazione di più tessuti.",
            },
            {
                id: "C",
                text: "Tessuto, Sistema di organi, Organo, Organismo.",
                correct: false,
                explanation:
                    "Un sistema di organi è più complesso di un singolo organo. L'ordine tra questi due elementi è quindi invertito.",
            },
            {
                id: "D",
                text: "Tessuto, Organo, Sistema di organi, Organismo.",
                correct: true,
                explanation:
                    "Più cellule organizzate formano un tessuto; più tessuti formano un organo; più organi coordinati costituiscono un sistema di organi e l'insieme dei sistemi forma l'organismo.",
            },
        ],
    },

    {
        id: 64,
        area: "cultura-matematico-scientifica",
        category: "scienze-della-terra-movimenti",
        difficulty: 2,
        question:
            "La Terra compie diversi movimenti, che fanno variare la sua posizione nello spazio rispetto agli altri corpi celesti. Durante il moto di rotazione:",
        answers: [
            {
                id: "A",
                text: "La Terra gira intorno al proprio asse da est ad ovest.",
                correct: false,
                explanation:
                    "La Terra ruota nel verso opposto, cioè da ovest verso est. Questa rotazione spiega il moto apparente del Sole da est verso ovest.",
            },
            {
                id: "B",
                text: "Il nostro pianeta gira su se stesso; più precisamente, ruota attorno a un asse passante per i poli, chiamato asse terrestre.",
                correct: true,
                explanation:
                    "Il moto di rotazione è il movimento della Terra attorno al proprio asse. L'asse terrestre passa idealmente per il Polo Nord e il Polo Sud.",
            },
            {
                id: "C",
                text: "La Terra descrive un’orbita eclittica.",
                correct: false,
                explanation:
                    "Il movimento della Terra attorno al Sole è chiamato moto di rivoluzione. Non coincide con la rotazione attorno al proprio asse.",
            },
            {
                id: "D",
                text: "La Terra impiega 22 ore, 50 minuti e 4 secondi, cioè un giorno sidereo, a compiere una rotazione completa.",
                correct: false,
                explanation:
                    "Il giorno sidereo terrestre dura circa 23 ore, 56 minuti e 4 secondi, non 22 ore e 50 minuti.",
            },
        ],
    },

    {
        id: 65,
        area: "cultura-matematico-scientifica",
        category: "geografia-coordinate",
        difficulty: 2,
        question:
            "Con riferimento alla Terra, indicare l’affermazione corretta circa i paralleli geografici.",
        answers: [
            {
                id: "A",
                text: "Sono le uniche linee a formare il reticolato geografico.",
                correct: false,
                explanation:
                    "Il reticolato geografico è costituito sia dai paralleli sia dai meridiani. I paralleli da soli non sono sufficienti.",
            },
            {
                id: "B",
                text: "Il parallelo di riferimento passa per l’Osservatorio astronomico di Greenwich, presso Londra.",
                correct: false,
                explanation:
                    "Greenwich identifica il meridiano fondamentale, cioè il meridiano di longitudine 0°. Il parallelo fondamentale è invece l'equatore.",
            },
            {
                id: "C",
                text: "Sono circonferenze ideali tracciate sulla Terra da piani paralleli al piano dell’equatore.",
                correct: true,
                explanation:
                    "I paralleli sono circonferenze immaginarie ottenute dall'intersezione della superficie terrestre con piani paralleli a quello dell'equatore. Servono a determinare la latitudine.",
            },
            {
                id: "D",
                text: "Sono le due semicirconferenze comprese tra un polo terrestre e l’altro.",
                correct: false,
                explanation:
                    "Questa descrizione riguarda i meridiani, che collegano idealmente il Polo Nord e il Polo Sud.",
            },
        ],
    },

    {
        id: 66,
        area: "cultura-matematico-scientifica",
        category: "biologia-genetica",
        difficulty: 1,
        question:
            "Ogni specie possiede un certo numero di cromosomi; la specie Homo ne possiede:",
        answers: [
            {
                id: "A",
                text: "23 paia.",
                correct: true,
                explanation:
                    "Le cellule somatiche umane possiedono normalmente 46 cromosomi organizzati in 23 coppie: 22 coppie di autosomi e una coppia di cromosomi sessuali.",
            },
            {
                id: "B",
                text: "56 paia.",
                correct: false,
                explanation:
                    "56 paia corrisponderebbero a 112 cromosomi, un numero molto superiore al normale corredo cromosomico umano.",
            },
            {
                id: "C",
                text: "21 paia.",
                correct: false,
                explanation:
                    "21 coppie corrisponderebbero a 42 cromosomi. Nella specie umana il normale numero diploide è invece 46.",
            },
            {
                id: "D",
                text: "26 paia.",
                correct: false,
                explanation:
                    "26 coppie corrisponderebbero a 52 cromosomi. L'essere umano ne possiede normalmente 23 coppie.",
            },
        ],
    },

    {
        id: 67,
        area: "cultura-matematico-scientifica",
        category: "chimica-passaggi-di-stato",
        difficulty: 1,
        question:
            "È il passaggio diretto dallo stato solido allo stato aeriforme:",
        answers: [
            {
                id: "A",
                text: "Condensazione.",
                correct: false,
                explanation:
                    "La condensazione è il passaggio dallo stato aeriforme allo stato liquido. È quindi un processo differente.",
            },
            {
                id: "B",
                text: "Fusione.",
                correct: false,
                explanation:
                    "La fusione è il passaggio dallo stato solido a quello liquido. Non avviene direttamente verso lo stato aeriforme.",
            },
            {
                id: "C",
                text: "Brinamento.",
                correct: false,
                explanation:
                    "Il brinamento è il passaggio diretto dallo stato aeriforme allo stato solido, cioè il processo inverso della sublimazione.",
            },
            {
                id: "D",
                text: "Sublimazione.",
                correct: true,
                explanation:
                    "La sublimazione è il passaggio diretto di una sostanza dallo stato solido a quello aeriforme senza attraversare lo stato liquido.",
            },
        ],
    },

    {
        id: 68,
        area: "cultura-matematico-scientifica",
        category: "biologia-anatomia",
        difficulty: 2,
        question:
            "L’orecchio esterno:",
        answers: [
            {
                id: "A",
                text: "Contiene un fluido che si muove in risposta alle onde sonore o ai movimenti della testa.",
                correct: false,
                explanation:
                    "Questa caratteristica riguarda l'orecchio interno, che contiene strutture piene di liquido coinvolte nell'udito e nell'equilibrio.",
            },
            {
                id: "B",
                text: "Raccoglie e convoglia le onde sonore verso la parte interna, è costituito dal padiglione auricolare e dal condotto uditivo.",
                correct: true,
                explanation:
                    "L'orecchio esterno comprende il padiglione auricolare e il condotto uditivo esterno. La sua funzione principale è raccogliere le onde sonore e indirizzarle verso il timpano.",
            },
            {
                id: "C",
                text: "È una cavità piena d’aria che inizia con il timpano e termina con la finestra ovale e la finestra rotonda.",
                correct: false,
                explanation:
                    "Questa descrizione corrisponde all'orecchio medio, che contiene anche la catena degli ossicini.",
            },
            {
                id: "D",
                text: "È suddiviso in tre aree: i canali semicircolari, il vestibolo e la coclea.",
                correct: false,
                explanation:
                    "Canali semicircolari, vestibolo e coclea appartengono all'orecchio interno, non a quello esterno.",
            },
        ],
    },

    {
        id: 69,
        area: "cultura-matematico-scientifica",
        category: "fisica-grandezze",
        difficulty: 3,
        question:
            "1) massa; 2) intensità luminosa; 3) volume; 4) carica elettrica; 5) tempo. Quali fra le precedenti sono grandezze fondamentali?",
        answers: [
            {
                id: "A",
                text: "1); 4); 5) sono grandezze fondamentali, mentre le altre sono derivate.",
                correct: false,
                explanation:
                    "La carica elettrica è una grandezza derivata nel Sistema Internazionale, mentre l'intensità luminosa è una delle sette grandezze fondamentali.",
            },
            {
                id: "B",
                text: "3); 4); 5) sono grandezze fondamentali, mentre le altre sono derivate.",
                correct: false,
                explanation:
                    "Il volume è una grandezza derivata dalla lunghezza e la carica elettrica deriva dalla corrente elettrica e dal tempo.",
            },
            {
                id: "C",
                text: "1); 2); 5) sono grandezze fondamentali, mentre le altre sono derivate.",
                correct: true,
                explanation:
                    "Massa, intensità luminosa e tempo appartengono alle grandezze fondamentali del Sistema Internazionale. Il volume deriva dalla lunghezza e la carica elettrica dalla corrente elettrica moltiplicata per il tempo.",
            },
            {
                id: "D",
                text: "1); 2); 3) sono grandezze fondamentali, mentre le altre sono derivate.",
                correct: false,
                explanation:
                    "Il volume non è fondamentale: si misura in metri cubi e deriva dalla grandezza fondamentale lunghezza.",
            },
        ],
    },

    {
        id: 70,
        area: "cultura-matematico-scientifica",
        category: "chimica-metalli",
        difficulty: 2,
        question:
            "I metalli:",
        answers: [
            {
                id: "A",
                text: "A temperatura ambiente (20°C) sono solidi, a eccezione del mercurio.",
                correct: true,
                explanation:
                    "Nella classificazione scolastica, i metalli sono generalmente solidi a temperatura ambiente. Il mercurio rappresenta la nota eccezione perché è liquido intorno ai 20 °C.",
            },
            {
                id: "B",
                text: "Non possono mai essere ridotti in fili.",
                correct: false,
                explanation:
                    "Molti metalli sono duttili, cioè possono essere trasformati in fili. Il rame è un esempio evidente di questa proprietà.",
            },
            {
                id: "C",
                text: "Ad eccezione del carbonio, sono cattivi conduttori del calore e della corrente elettrica.",
                correct: false,
                explanation:
                    "I metalli sono generalmente buoni conduttori sia del calore sia della corrente elettrica. Inoltre il carbonio non è un metallo.",
            },
            {
                id: "D",
                text: "Non possono mai essere modellati in lamine sottili.",
                correct: false,
                explanation:
                    "Molti metalli sono malleabili e possono quindi essere lavorati fino a ottenere lamine molto sottili.",
            },
        ],
    },

    {
        id: 71,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria",
        difficulty: 2,
        question:
            "Il diametro di un cerchio misura 36 cm. Calcolare la sua area.",
        answers: [
            {
                id: "A",
                text: "81π.",
                correct: false,
                explanation:
                    "81π corrisponderebbe all'area di un cerchio con raggio 9 cm. Qui il raggio è 18 cm.",
            },
            {
                id: "B",
                text: "144π.",
                correct: false,
                explanation:
                    "144π si otterrebbe con raggio 12 cm. Il diametro dato è 36 cm e quindi il raggio è 18 cm.",
            },
            {
                id: "C",
                text: "648π.",
                correct: false,
                explanation:
                    "L'area non si ottiene moltiplicando semplicemente 36 per 18. Bisogna usare la formula πr².",
            },
            {
                id: "D",
                text: "324π.",
                correct: true,
                explanation:
                    "Il raggio è metà del diametro: 36/2 = 18 cm. Applicando A = πr² si ottiene π × 18² = 324π cm².",
            },
        ],
    },

    {
        id: 72,
        area: "cultura-matematico-scientifica",
        category: "matematica-equazioni",
        difficulty: 2,
        question:
            "Qual è la soluzione della seguente equazione? (x + 4) (x - 4) = x(x + 2).",
        answers: [
            {
                id: "A",
                text: "X = 8.",
                correct: false,
                explanation:
                    "Sostituendo x = 8, il primo membro vale 12 × 4 = 48 mentre il secondo vale 8 × 10 = 80. I due valori non coincidono.",
            },
            {
                id: "B",
                text: "X = -8.",
                correct: true,
                explanation:
                    "Sviluppando: (x+4)(x-4) = x²-16 e x(x+2) = x²+2x. Eliminando x² si ottiene -16 = 2x, quindi x = -8.",
            },
            {
                id: "C",
                text: "X = 4.",
                correct: false,
                explanation:
                    "Con x = 4 il primo membro vale zero, mentre il secondo vale 24. La soluzione non è quindi 4.",
            },
            {
                id: "D",
                text: "X = -2.",
                correct: false,
                explanation:
                    "Con x = -2 il primo membro vale -12 mentre il secondo vale zero. L'equazione non è soddisfatta.",
            },
        ],
    },

    {
        id: 73,
        area: "cultura-matematico-scientifica",
        category: "matematica-frazioni",
        difficulty: 2,
        question:
            "Usando opportunamente la divisione o la moltiplicazione, indicare quale delle seguenti uguaglianze è falsa.",
        answers: [
            {
                id: "A",
                text: "18/30 = 3/5.",
                correct: false,
                explanation:
                    "Dividendo numeratore e denominatore di 18/30 per 6 si ottiene 3/5. L'uguaglianza è quindi vera.",
            },
            {
                id: "B",
                text: "25/20 = 5/4.",
                correct: false,
                explanation:
                    "Dividendo 25 e 20 per 5 si ottiene correttamente 5/4.",
            },
            {
                id: "C",
                text: "12/16 = 3/5.",
                correct: true,
                explanation:
                    "12/16 si semplifica dividendo per 4 e diventa 3/4, non 3/5. Questa è quindi l'uguaglianza falsa.",
            },
            {
                id: "D",
                text: "12/8 = 3/2.",
                correct: false,
                explanation:
                    "Dividendo numeratore e denominatore di 12/8 per 4 si ottiene 3/2. L'uguaglianza è corretta.",
            },
        ],
    },

    {
        id: 74,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria",
        difficulty: 2,
        question:
            "Calcolare l'area di un rombo, sapendo che le diagonali sono rispettivamente 10 cm e 12 cm.",
        answers: [
            {
                id: "A",
                text: "60 cm².",
                correct: true,
                explanation:
                    "L'area del rombo è data dal prodotto delle diagonali diviso due: A = (D × d) / 2. Quindi (10 × 12) / 2 = 60 cm².",
            },
            {
                id: "B",
                text: "30 cm².",
                correct: false,
                explanation:
                    "30 cm² è la metà del risultato corretto. Il prodotto delle diagonali è 120 e deve essere diviso per 2 una sola volta.",
            },
            {
                id: "C",
                text: "120 cm².",
                correct: false,
                explanation:
                    "120 è il prodotto delle due diagonali, ma la formula dell'area del rombo richiede di dividerlo per 2.",
            },
            {
                id: "D",
                text: "40 cm².",
                correct: false,
                explanation:
                    "40 cm² non deriva dalla formula corretta. Con diagonali di 10 e 12 cm l'area è 60 cm².",
            },
        ],
    },

    {
        id: 75,
        area: "cultura-matematico-scientifica",
        category: "matematica-algebra",
        difficulty: 3,
        question:
            "Calcolare il quadrato del binomio (1/2ab + 3/2b)².",
        answers: [
            {
                id: "A",
                text: "1/4a²b² + 3/2ab + 9/4b².",
                correct: false,
                explanation:
                    "Nel doppio prodotto deve comparire b², perché entrambi i termini del binomio contengono il fattore b.",
            },
            {
                id: "B",
                text: "1/4a²b + 3/2ab² + 9/4b².",
                correct: false,
                explanation:
                    "Il quadrato del primo termine (1/2ab)² è 1/4a²b². In questa alternativa manca un fattore b.",
            },
            {
                id: "C",
                text: "1/4a²b² + 3/2a²b + 9/4b².",
                correct: false,
                explanation:
                    "Il doppio prodotto è 2 × (1/2ab) × (3/2b) = 3/2ab². Non compare quindi a²b.",
            },
            {
                id: "D",
                text: "1/4a²b² + 3/2ab² + 9/4b².",
                correct: true,
                explanation:
                    "Applicando (x+y)² = x² + 2xy + y² si ottiene (1/2ab)² = 1/4a²b², il doppio prodotto 3/2ab² e (3/2b)² = 9/4b².",
            },
        ],
    },

    {
        id: 76,
        area: "cultura-matematico-scientifica",
        category: "matematica-espressioni",
        difficulty: 3,
        question:
            "Calcolare il valore della seguente espressione. (1/2 + 4/3) (1/2 + 2) - (3/2 - 1/2)².",
        answers: [
            {
                id: "A",
                text: "55/12.",
                correct: false,
                explanation:
                    "55/12 è il risultato del solo prodotto dei primi due fattori. Bisogna ancora sottrarre il quadrato della differenza, che vale 1.",
            },
            {
                id: "B",
                text: "43/12.",
                correct: true,
                explanation:
                    "1/2 + 4/3 = 11/6 e 1/2 + 2 = 5/2. Il loro prodotto è 55/12. Inoltre (3/2 - 1/2)² = 1, quindi 55/12 - 12/12 = 43/12.",
            },
            {
                id: "C",
                text: "55/2.",
                correct: false,
                explanation:
                    "Questo valore deriva da un calcolo scorretto con le frazioni. Il prodotto iniziale è 55/12, non 55/2.",
            },
            {
                id: "D",
                text: "43/3.",
                correct: false,
                explanation:
                    "Il denominatore comune non viene gestito correttamente in questa alternativa. Il risultato dell'espressione è 43/12.",
            },
        ],
    },

    {
        id: 77,
        area: "cultura-matematico-scientifica",
        category: "matematica-calcolo",
        difficulty: 3,
        question:
            "Indicare quale tra i seguenti calcoli è corretto:",
        answers: [
            {
                id: "A",
                text: "24 : 8 = (24 : 2) : (8 : 2).",
                correct: false,
                explanation:
                    "Matematicamente questa uguaglianza è in realtà corretta: 24 : 8 = 3 e 12 : 4 = 3. Il quesito del PDF presenta quindi un'incongruenza rispetto alla soluzione ufficiale indicata.",
            },
            {
                id: "B",
                text: "8 : 10 = 0 resto 8.",
                correct: false,
                explanation:
                    "Se si considera la divisione euclidea tra numeri naturali, anche questa affermazione può essere considerata corretta: 8 = 10 × 0 + 8. Questo conferma che il quesito originale è problematico.",
            },
            {
                id: "C",
                text: "1632 : 4 = 48.",
                correct: true,
                explanation:
                    "Questa è la risposta indicata come corretta nel PDF originale e viene mantenuta per fedeltà alla fonte. Tuttavia matematicamente 1632 : 4 = 408, non 48: la domanda contiene quindi un evidente errore.",
            },
            {
                id: "D",
                text: "23 - 12 - 5 = 23 - (12 - 5).",
                correct: false,
                explanation:
                    "Il primo membro vale 23 - 12 - 5 = 6, mentre il secondo vale 23 - 7 = 16. L'uguaglianza è quindi falsa.",
            },
        ],
    },

    {
        id: 78,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria-angoli",
        difficulty: 1,
        question:
            "Individuare l'affermazione errata tra le seguenti:",
        answers: [
            {
                id: "A",
                text: "Un angolo > 90° è detto angolo acuto.",
                correct: true,
                explanation:
                    "Un angolo acuto misura meno di 90°. Un angolo maggiore di 90° non può quindi essere definito acuto; tra 90° e 180° è ottuso.",
            },
            {
                id: "B",
                text: "Un angolo di 360° è detto angolo giro.",
                correct: false,
                explanation:
                    "Un angolo giro misura esattamente 360°. L'affermazione è corretta.",
            },
            {
                id: "C",
                text: "Un angolo di 90° è detto angolo retto.",
                correct: false,
                explanation:
                    "Per definizione un angolo retto misura esattamente 90°, quindi l'affermazione è corretta.",
            },
            {
                id: "D",
                text: "Un angolo di 180° è detto angolo piatto.",
                correct: false,
                explanation:
                    "Un angolo piatto misura 180°, quindi anche questa affermazione è corretta.",
            },
        ],
    },

    {
        id: 79,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria",
        difficulty: 2,
        question:
            "Calcolare l’area di un rettangolo sapendo che la base misura 10 cm e l’altezza è pari ai 3/5 della base.",
        answers: [
            {
                id: "A",
                text: "20 cm².",
                correct: false,
                explanation:
                    "L'altezza non misura 2 cm. I 3/5 di 10 sono 6 cm, quindi l'area è maggiore.",
            },
            {
                id: "B",
                text: "30 cm².",
                correct: false,
                explanation:
                    "30 cm² si otterrebbe utilizzando un'altezza di 3 cm. L'altezza reale è invece 6 cm.",
            },
            {
                id: "C",
                text: "15 cm².",
                correct: false,
                explanation:
                    "Questo valore non corrisponde al prodotto tra la base di 10 cm e l'altezza ricavata dai 3/5 della base.",
            },
            {
                id: "D",
                text: "60 cm².",
                correct: true,
                explanation:
                    "L'altezza misura 3/5 di 10 cm, cioè 6 cm. L'area del rettangolo è quindi base × altezza = 10 × 6 = 60 cm².",
            },
        ],
    },

    {
        id: 80,
        area: "cultura-matematico-scientifica",
        category: "matematica-frazioni",
        difficulty: 2,
        question:
            "Calcolare la capacità di una damigiana, sapendo che i 2/5 di essa corrispondono a 20 litri di vino.",
        answers: [
            {
                id: "A",
                text: "45 litri.",
                correct: false,
                explanation:
                    "Se la capacità fosse 45 litri, i suoi 2/5 sarebbero 18 litri, non 20.",
            },
            {
                id: "B",
                text: "50 litri.",
                correct: true,
                explanation:
                    "Se 2/5 della capacità corrispondono a 20 litri, 1/5 corrisponde a 10 litri. Cinque quinti valgono quindi 50 litri.",
            },
            {
                id: "C",
                text: "55 litri.",
                correct: false,
                explanation:
                    "I 2/5 di 55 litri sono 22 litri. Non corrispondono quindi ai 20 litri indicati.",
            },
            {
                id: "D",
                text: "60 litri.",
                correct: false,
                explanation:
                    "I 2/5 di 60 litri equivalgono a 24 litri. La capacità richiesta è invece 50 litri.",
            },
        ],
    }
];

export default simulation14;