const passages = {
    passage01: `Quando Elisa arrivò al laboratorio di ceramica erano appena passate le sette. La porta era socchiusa. La sera precedente era stata lei a chiuderla, dopo aver controllato due volte la serratura, perché sul tavolo erano rimasti i lavori destinati alla mostra del giorno successivo.

Per qualche secondo rimase nel corridoio. Pensò alla piccola scultura che aveva impiegato settimane a terminare e immaginò il tavolo vuoto prima ancora di entrare. Poi sentì un colpo provenire dall'interno. Spinse lentamente la porta e trovò una sedia rovesciata, alcuni fogli sparsi sul pavimento e una delle finestre aperta. Le sculture, però, erano ancora al loro posto.

Da dietro uno scaffale uscì improvvisamente un gatto grigio, che attraversò la stanza e saltò sul davanzale. Elisa lo seguì con lo sguardo finché scomparve nel cortile. Solo allora si accorse che accanto alla porta c'era una cassetta degli attrezzi.

Pochi minuti dopo arrivò il custode. Spiegò che quella mattina aveva trovato la finestra bloccata e aveva aperto la porta del laboratorio per prendere gli strumenti necessari a sistemarla. Era poi sceso al piano inferiore per cercare un pezzo di ricambio. Probabilmente il gatto era entrato proprio durante la sua assenza.

Elisa raccolse i fogli e rimise in piedi la sedia. Le venne da sorridere pensando alla rapidità con cui, pochi minuti prima, aveva trasformato una porta socchiusa in una storia molto più grave.`,

    passage02: `Quando si valuta la durata di un oggetto, si tende spesso a considerare soprattutto quanto sia resistente. La resistenza è certamente importante: un componente che si rompe facilmente riduce la vita utile del prodotto. Tuttavia, resistenza e riparabilità non sono la stessa proprietà. Un apparecchio può avere una struttura esterna molto robusta e diventare comunque inutilizzabile se un componente soggetto a usura non può essere sostituito.

La situazione opposta mostra lo stesso problema da un'altra prospettiva. Un oggetto progettato in modo da permettere la sostituzione dei componenti principali può continuare a essere utilizzato anche dopo diversi guasti. La durata effettiva dipende quindi non soltanto dalla frequenza con cui si verificano i problemi, ma anche dalla possibilità di ripristinare la funzione dell'oggetto quando essi si verificano.

Ciò non significa che ogni componente debba essere sempre facilmente accessibile. In alcuni casi un involucro chiuso può proteggere meglio parti delicate oppure rispondere a esigenze di sicurezza. Il punto è che queste caratteristiche devono essere considerate insieme: aumentare una proprietà può comportare vantaggi e svantaggi rispetto a un'altra.

Per valutare seriamente la durata di un prodotto, dunque, chiedersi soltanto "quanto è difficile romperlo?" è insufficiente. Bisogna anche domandarsi che cosa accade dopo un guasto: quali parti possono essere sostituite, con quali strumenti, a quale costo e senza danneggiare il resto dell'oggetto.`,

    passage03: `Tradurre un testo non significa necessariamente sostituire ogni parola con il suo equivalente più immediato in un'altra lingua. Una stessa parola può assumere significati diversi a seconda del contesto, mentre espressioni formate da più parole possono avere un significato che non coincide con la somma dei loro elementi.

Anche lo scopo comunicativo conta. Una frase grammaticalmente interrogativa può essere usata, in una determinata situazione, per formulare una richiesta. Se una persona a tavola domanda a chi le sta accanto se può passarle il pane, normalmente non sta cercando informazioni sulle capacità fisiche dell'interlocutore. Una traduzione che conservasse soltanto il significato letterale delle singole parole potrebbe quindi perdere la funzione concreta dell'enunciato.

Esiste poi il problema del registro. Due espressioni possono indicare sostanzialmente la stessa cosa ma differire perché una è formale e l'altra colloquiale, una è neutra e l'altra ironica, una appartiene alla lingua comune e l'altra a un settore specialistico. Ignorare queste differenze può modificare il modo in cui il lettore percepisce chi parla.

Per questo non sempre esiste una sola traduzione corretta indipendentemente dal contesto. Il traduttore deve stabilire quali caratteristiche del testo siano decisive nella situazione concreta: significato, funzione, tono, registro e, in alcuni casi, perfino ritmo o giochi di parole. La fedeltà non consiste quindi necessariamente nel conservare la forma più simile, ma nel capire che cosa quella forma sta facendo nel testo originale.`,
};

const simulation03 = [
    {
        id: 1,
        area: "linguistica-logica",
        category: "comprensione-del-testo-narrativo",
        difficulty: 3,
        passage: passages.passage01,
        question:
            "Quale elemento porta inizialmente Elisa a immaginare che possa essere accaduto qualcosa di grave nel laboratorio?",
        answers: [
            {
                id: "A",
                text: "La presenza della cassetta degli attrezzi accanto alla porta.",
                correct: false,
                explanation:
                    "Elisa nota la cassetta degli attrezzi soltanto dopo essere entrata e dopo aver visto uscire il gatto. Questo elemento contribuisce semmai a preparare la spiegazione successiva del custode, non al sospetto iniziale.",
            },
            {
                id: "B",
                text: "La scomparsa della scultura che aveva preparato per la mostra.",
                correct: false,
                explanation:
                    "La scultura non è scomparsa: entrando, Elisa scopre che le opere sono ancora al loro posto. Prima di entrare immagina il possibile danno, ma il testo distingue chiaramente ciò che teme da ciò che effettivamente osserva.",
            },
            {
                id: "C",
                text: "Il fatto che la porta sia socchiusa nonostante lei ricordi di averla chiusa accuratamente la sera precedente.",
                correct: true,
                explanation:
                    "Il contrasto tra il ricordo della porta chiusa e la porta trovata aperta genera il primo sospetto di Elisa. Il rumore proveniente dall'interno rafforza successivamente questa interpretazione, ma nasce dopo che il sospetto si è già formato.",
            },
            {
                id: "D",
                text: "L'affermazione del custode secondo cui qualcuno aveva danneggiato la finestra.",
                correct: false,
                explanation:
                    "Il custode non afferma che qualcuno abbia danneggiato la finestra: dice di averla trovata bloccata e di essere andato a prendere gli strumenti per sistemarla. Inoltre questa spiegazione arriva soltanto alla fine dell'episodio.",
            },
        ],
    },

    {
        id: 2,
        area: "linguistica-logica",
        category: "comprensione-del-testo-narrativo",
        difficulty: 3,
        passage: passages.passage01,
        question:
            "Quale sequenza ricostruisce correttamente l'ordine cronologico degli eventi narrati o ricordati?",
        answers: [
            {
                id: "A",
                text: "Elisa chiude il laboratorio la sera precedente → il custode apre il laboratorio al mattino → Elisa arriva → il custode ritorna e spiega l'accaduto.",
                correct: true,
                explanation:
                    "Il testo presenta prima l'arrivo di Elisa, ma attraverso il ricordo informa che la sera precedente aveva chiuso il laboratorio. La spiegazione finale chiarisce poi che il custode era entrato quella mattina prima dell'arrivo di Elisa e che ritorna soltanto dopo che lei ha scoperto il gatto.",
            },
            {
                id: "B",
                text: "Il custode spiega l'accaduto → Elisa chiude il laboratorio → il gatto entra → Elisa arriva.",
                correct: false,
                explanation:
                    "La spiegazione del custode avviene alla fine della scena, quindi non può precedere gli altri eventi. Inoltre la chiusura effettuata da Elisa appartiene alla sera precedente.",
            },
            {
                id: "C",
                text: "Elisa arriva → Elisa chiude il laboratorio → il custode apre la porta → Elisa sente il rumore.",
                correct: false,
                explanation:
                    "La chiusura del laboratorio è un evento anteriore all'arrivo mattutino di Elisa. Il racconto lo presenta attraverso un richiamo al passato, ma cronologicamente deve essere collocato prima.",
            },
            {
                id: "D",
                text: "Il gatto esce → Elisa arriva → il custode apre il laboratorio → Elisa chiude la porta la sera precedente.",
                correct: false,
                explanation:
                    "Questa sequenza rovescia diversi rapporti temporali esplicitamente stabiliti dal testo. Il gatto esce soltanto dopo l'ingresso di Elisa, mentre la chiusura della porta è l'evento più antico tra quelli elencati.",
            },
        ],
    },

    {
        id: 3,
        area: "linguistica-logica",
        category: "comprensione-del-testo-narrativo",
        difficulty: 4,
        passage: passages.passage01,
        question:
            "Quale descrizione del punto di vista narrativo è più coerente con il brano?",
        answers: [
            {
                id: "A",
                text: "Il narratore conosce e riferisce contemporaneamente tutti i pensieri di Elisa, del custode e del gatto.",
                correct: false,
                explanation:
                    "Il testo non entra nella mente del custode né, naturalmente, attribuisce pensieri al gatto. Le informazioni sulle intenzioni del custode diventano disponibili soltanto quando egli le comunica a Elisa.",
            },
            {
                id: "B",
                text: "La storia è narrata in prima persona direttamente dal custode.",
                correct: false,
                explanation:
                    "La narrazione utilizza la terza persona e segue soprattutto Elisa. Il custode interviene come personaggio e fornisce una spiegazione, ma non è la voce narrante.",
            },
            {
                id: "C",
                text: "Il narratore evita completamente di riferire percezioni, ricordi o pensieri dei personaggi.",
                correct: false,
                explanation:
                    "Il testo riferisce esplicitamente ciò che Elisa ricorda, immagina e pensa. Il lettore conosce quindi anche la sua interpretazione soggettiva degli eventi, non soltanto azioni osservabili dall'esterno.",
            },
            {
                id: "D",
                text: "La narrazione in terza persona segue soprattutto la prospettiva di Elisa, mostrando ciò che percepisce e interpreta prima di conoscere la spiegazione del custode.",
                correct: true,
                explanation:
                    "Il lettore scopre la situazione insieme a Elisa e condivide inizialmente la limitatezza delle informazioni a sua disposizione. Questa focalizzazione rende significativa la correzione finale della sua prima interpretazione.",
            },
        ],
    },

    {
        id: 4,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 4,
        passage: passages.passage02,
        question:
            "Quale distinzione è fondamentale per il ragionamento sviluppato nel brano?",
        answers: [
            {
                id: "A",
                text: "Gli oggetti costosi sono necessariamente resistenti, mentre quelli economici sono necessariamente riparabili.",
                correct: false,
                explanation:
                    "Il prezzo non viene utilizzato come criterio per distinguere resistenza e riparabilità. Il testo considera invece due caratteristiche tecniche che possono combinarsi in modi differenti nello stesso prodotto.",
            },
            {
                id: "B",
                text: "Resistere a un guasto e poter recuperare la funzionalità dopo un guasto sono proprietà differenti.",
                correct: true,
                explanation:
                    "La resistenza riguarda la probabilità o facilità con cui un componente si danneggia; la riparabilità riguarda invece ciò che è possibile fare quando il danno si è già verificato. Il brano sostiene che entrambe contribuiscono alla durata effettiva dell'oggetto.",
            },
            {
                id: "C",
                text: "Soltanto i componenti esterni possono rompersi, mentre quelli interni possono soltanto usurarsi.",
                correct: false,
                explanation:
                    "Il testo non stabilisce una distinzione di questo tipo tra componenti interni ed esterni. Qualunque componente può contribuire alla perdita di funzionalità del prodotto.",
            },
            {
                id: "D",
                text: "Un oggetto riparabile non può essere contemporaneamente anche resistente.",
                correct: false,
                explanation:
                    "Le due proprietà non sono presentate come incompatibili. Un prodotto può essere sia resistente sia riparabile; il punto è evitare di trattare una delle due caratteristiche come se rendesse irrilevante l'altra.",
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
            "Nel terzo paragrafo, quale funzione svolge l'affermazione secondo cui non ogni componente deve essere sempre facilmente accessibile?",
        answers: [
            {
                id: "A",
                text: "Contraddice completamente la tesi precedente e sostiene che la riparabilità non abbia alcuna importanza.",
                correct: false,
                explanation:
                    "Il brano continua a considerare la riparabilità una componente importante della durata. L'affermazione introduce soltanto un limite alla possibilità di trasformarla in un principio assoluto.",
            },
            {
                id: "B",
                text: "Introduce un argomento estraneo, perché la sicurezza non può influire sulla progettazione di un oggetto.",
                correct: false,
                explanation:
                    "La sicurezza viene presentata proprio come uno dei fattori che possono giustificare determinate scelte progettuali. Serve quindi ad ampliare il ragionamento, mostrando che esistono obiettivi potenzialmente in tensione tra loro.",
            },
            {
                id: "C",
                text: "Limita la tesi evitando di trasformare la riparabilità in una regola assoluta e introduce l'idea di un compromesso tra esigenze diverse.",
                correct: true,
                explanation:
                    "L'autore difende il valore della riparabilità senza sostenere che debba prevalere in ogni circostanza. L'esempio di involucri chiusi per protezione o sicurezza mostra che una valutazione ragionevole deve considerare più proprietà contemporaneamente.",
            },
            {
                id: "D",
                text: "Dimostra che un involucro chiuso garantisce sempre una durata maggiore di uno apribile.",
                correct: false,
                explanation:
                    "Il testo dice soltanto che in alcuni casi una struttura chiusa può offrire determinati vantaggi. Non formula una regola universale secondo cui tale scelta produca sempre una maggiore durata.",
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
            "Quale situazione è maggiormente coerente con la conclusione dell'autore?",
        answers: [
            {
                id: "A",
                text: "Due prodotti ugualmente resistenti possono avere una durata d'uso diversa se, dopo lo stesso guasto, uno può essere riparato e l'altro no.",
                correct: true,
                explanation:
                    "La conclusione invita a considerare ciò che accade anche dopo il guasto. Se la probabilità di rottura è simile ma soltanto uno dei prodotti può essere riportato facilmente in funzione, la loro durata effettiva può divergere.",
            },
            {
                id: "B",
                text: "Se un prodotto non si rompe durante il primo anno, è logicamente impossibile che diventi inutilizzabile in seguito.",
                correct: false,
                explanation:
                    "La mancata rottura iniziale non garantisce l'assenza di problemi futuri. Il brano considera esplicitamente usura e guasti come fenomeni che possono intervenire nel corso della vita dell'oggetto.",
            },
            {
                id: "C",
                text: "La possibilità di sostituire un componente rende irrilevante la qualità di tutti gli altri componenti.",
                correct: false,
                explanation:
                    "Il testo sostiene che resistenza e riparabilità vadano considerate insieme. Rendere riparabile un singolo componente non elimina l'importanza della qualità e dell'affidabilità complessive.",
            },
            {
                id: "D",
                text: "La durata di un prodotto può essere stabilita osservandone esclusivamente l'aspetto esterno.",
                correct: false,
                explanation:
                    "L'aspetto esterno non rivela necessariamente quali parti siano soggette a usura né se possano essere sostituite. Il brano invita proprio a considerare caratteristiche funzionali che non si riducono alla robustezza visibile.",
            },
        ],
    },

    {
        id: 7,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages.passage03,
        question:
            "Perché, secondo il brano, la sostituzione parola per parola può produrre una traduzione inadeguata?",
        answers: [
            {
                id: "A",
                text: "Perché ogni parola possiede esattamente un significato in una lingua e nessun equivalente nelle altre.",
                correct: false,
                explanation:
                    "Il testo afferma il contrario: una stessa parola può assumere significati differenti a seconda del contesto. Proprio questa variabilità rende insufficiente la sostituzione meccanica.",
            },
            {
                id: "B",
                text: "Perché nella traduzione è sempre necessario eliminare tutte le parole presenti nel testo originale.",
                correct: false,
                explanation:
                    "Tradurre non significa eliminare il contenuto linguistico dell'originale. Significa trovare forme nella lingua di arrivo capaci di conservarne gli aspetti rilevanti.",
            },
            {
                id: "C",
                text: "Perché le lingue utilizzano sempre lo stesso lessico ma un ordine delle parole completamente diverso.",
                correct: false,
                explanation:
                    "Le differenze tra lingue non riguardano soltanto l'ordine delle parole e certamente non condividono tutte lo stesso lessico. Il brano sottolinea soprattutto contesto, espressioni complesse, funzione e registro.",
            },
            {
                id: "D",
                text: "Perché significato e funzione possono dipendere dal contesto e da combinazioni di parole, non soltanto dal significato isolato dei singoli termini.",
                correct: true,
                explanation:
                    "Il testo insiste sul fatto che parole ed espressioni acquistano valore all'interno di una situazione comunicativa. Una resa formalmente vicina può quindi essere poco fedele se perde il significato contestuale o la funzione concreta dell'enunciato.",
            },
        ],
    },

    {
        id: 8,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 4,
        passage: passages.passage03,
        question:
            "Che cosa dimostra principalmente l'esempio della richiesta di passare il pane?",
        answers: [
            {
                id: "A",
                text: "Che una frase interrogativa è grammaticalmente scorretta quando viene utilizzata durante una richiesta.",
                correct: false,
                explanation:
                    "Una forma interrogativa può essere perfettamente corretta e svolgere pragmaticamente la funzione di richiesta. Il brano usa proprio questa possibilità per mostrare che forma grammaticale e funzione comunicativa non coincidono sempre.",
            },
            {
                id: "B",
                text: "Che per tradurre adeguatamente può essere necessario riconoscere l'intenzione comunicativa oltre al significato letterale della frase.",
                correct: true,
                explanation:
                    "La domanda sulla possibilità di passare il pane non mira normalmente a verificare una capacità fisica, ma a ottenere un'azione. Il traduttore deve quindi comprendere ciò che l'enunciato fa nella situazione, non soltanto ciò che dice letteralmente.",
            },
            {
                id: "C",
                text: "Che tutte le richieste devono essere tradotte utilizzando un verbo all'imperativo.",
                correct: false,
                explanation:
                    "Una richiesta può assumere molte forme, comprese interrogative e formule di cortesia. Il testo non prescrive di trasformarle sempre in imperativi.",
            },
            {
                id: "D",
                text: "Che il significato delle frasi dipende esclusivamente dalla relazione personale tra i due interlocutori.",
                correct: false,
                explanation:
                    "La relazione tra interlocutori può influire sul registro, ma non è l'unico elemento pertinente. Il brano considera anche contesto, significato, funzione, tono e convenzioni linguistiche.",
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
            "Quale affermazione sintetizza meglio la concezione di «fedeltà» proposta nell'ultimo paragrafo?",
        answers: [
            {
                id: "A",
                text: "Una traduzione fedele cerca di conservare gli aspetti decisivi del testo nel nuovo contesto, anche quando ciò richiede di allontanarsi dalla forma letterale.",
                correct: true,
                explanation:
                    "La conclusione distingue la fedeltà dalla semplice somiglianza formale. Se funzione, tono o significato richiedono una formulazione diversa nella lingua di arrivo, una resa meno letterale può essere più fedele all'effetto del testo originale.",
            },
            {
                id: "B",
                text: "Una traduzione è fedele soltanto quando ogni parola occupa esattamente la stessa posizione dell'originale.",
                correct: false,
                explanation:
                    "Questo criterio ridurrebbe la traduzione a una corrispondenza meccanica tra forme. Il brano sostiene invece che le strutture linguistiche devono essere interpretate in relazione alla loro funzione.",
            },
            {
                id: "C",
                text: "Essere fedeli significa sostituire liberamente il significato originale con quello preferito dal traduttore.",
                correct: false,
                explanation:
                    "La flessibilità non equivale ad arbitrarietà. Il traduttore deve preservare gli aspetti rilevanti dell'originale, non inventare liberamente un nuovo contenuto.",
            },
            {
                id: "D",
                text: "Due traduzioni differenti dello stesso passaggio non possono essere entrambe accettabili.",
                correct: false,
                explanation:
                    "Il testo afferma esplicitamente che non sempre esiste una sola soluzione corretta indipendente dal contesto. Traduzioni differenti possono privilegiare in modo legittimo aspetti diversi purché siano coerenti con il testo e la situazione.",
            },
        ],
    },

    {
        id: 10,
        area: "linguistica-logica",
        category: "formazione-delle-parole",
        difficulty: 3,
        question:
            "Quale descrizione analizza correttamente la formazione della parola «riaprire» rispetto ad «aprire»?",
        answers: [
            {
                id: "A",
                text: "È una parola ottenuta mediante suffissazione, perché «ri-» viene aggiunto alla fine della base.",
                correct: false,
                explanation:
                    "Un suffisso viene collocato dopo la base lessicale. In «riaprire», invece, l'elemento «ri-» precede il verbo «aprire», quindi non può essere classificato come suffisso.",
            },
            {
                id: "B",
                text: "È una forma flessa dello stesso verbo che esprime esclusivamente persona e numero.",
                correct: false,
                explanation:
                    "Forme come «apro», «apriamo» o «aprivano» appartengono alla flessione verbale e modificano tratti grammaticali. «Riaprire» introduce invece un elemento derivazionale con il significato generale di ripetizione o nuova apertura.",
            },
            {
                id: "C",
                text: "È una parola derivata mediante prefissazione con «ri-», che aggiunge alla base l'idea di ripetizione o rinnovamento dell'azione.",
                correct: true,
                explanation:
                    "La prefissazione consiste nell'aggiungere un elemento prima della base lessicale. In questo caso «ri-» si combina con «aprire» e forma un nuovo lessema collegato all'idea di aprire nuovamente.",
            },
            {
                id: "D",
                text: "È una parola composta dall'unione di due sostantivi autonomi.",
                correct: false,
                explanation:
                    "«Ri-» non è qui un sostantivo autonomo accostato a un altro sostantivo. È un prefisso legato a una base verbale, quindi il processo è derivazionale e non una composizione di due parole autonome.",
            },
        ],
    },

    {
        id: 11,
        area: "linguistica-logica",
        category: "coesione-testuale",
        difficulty: 4,
        question:
            "Nel periodo «Il comune ha vietato il transito sul ponte fino alla conclusione dei lavori. Questa decisione ha modificato i percorsi degli autobus», a che cosa rinvia l'espressione «questa decisione»?",
        answers: [
            {
                id: "A",
                text: "Soltanto al sostantivo «ponte».",
                correct: false,
                explanation:
                    "«Questa decisione» non indica un oggetto fisico e non può quindi identificarsi con il ponte. Riprende invece il contenuto dell'azione amministrativa descritta nella frase precedente.",
            },
            {
                id: "B",
                text: "All'intero contenuto precedente relativo al divieto di transito disposto dal comune.",
                correct: true,
                explanation:
                    "L'espressione riassume e riprende una porzione precedente del testo, trasformandola nel referente della frase successiva. È un meccanismo di coesione anaforica che evita di ripetere per intero «il divieto di transito sul ponte fino alla conclusione dei lavori».",
            },
            {
                id: "C",
                text: "Esclusivamente ai lavori che devono ancora essere eseguiti.",
                correct: false,
                explanation:
                    "I lavori costituiscono una parte del contesto, ma non sono la «decisione». La decisione è il provvedimento di vietare temporaneamente il transito.",
            },
            {
                id: "D",
                text: "A un'informazione che verrà introdotta soltanto nella frase successiva.",
                correct: false,
                explanation:
                    "Il riferimento è retrospettivo, non anticipatorio. L'espressione recupera un contenuto già espresso, perciò svolge una funzione anaforica e non cataforica.",
            },
        ],
    },

    {
        id: 12,
        area: "linguistica-logica",
        category: "analisi-logica",
        difficulty: 4,
        question:
            "Nella frase «La commissione ha giudicato il progetto inadatto», quale funzione svolge «inadatto»?",
        answers: [
            {
                id: "A",
                text: "Complemento oggetto",
                correct: false,
                explanation:
                    "Il complemento oggetto è «il progetto», cioè l'elemento direttamente interessato dal giudizio della commissione. «Inadatto» esprime invece una proprietà attribuita proprio a quell'oggetto.",
            },
            {
                id: "B",
                text: "Attributo del soggetto",
                correct: false,
                explanation:
                    "Il soggetto è «la commissione» e «inadatto» non si riferisce ad essa. Inoltre l'aggettivo non è inserito direttamente nel sintagma nominale «il progetto», ma completa il significato del verbo «giudicare».",
            },
            {
                id: "C",
                text: "Complemento di modo",
                correct: false,
                explanation:
                    "«Inadatto» non indica il modo in cui la commissione compie l'azione di giudicare. Descrive invece la condizione o qualità che viene attribuita al progetto attraverso il giudizio.",
            },
            {
                id: "D",
                text: "Complemento predicativo dell'oggetto",
                correct: true,
                explanation:
                    "L'aggettivo «inadatto» completa il significato del verbo estimativo «giudicare» e si riferisce al complemento oggetto «il progetto». È quindi un complemento predicativo dell'oggetto.",
            },
        ],
    },

    {
        id: 13,
        area: "linguistica-logica",
        category: "punteggiatura",
        difficulty: 3,
        question:
            "In quale frase il punto e virgola è impiegato correttamente per separare due proposizioni autonome ma strettamente collegate?",
        answers: [
            {
                id: "A",
                text: "La prima proposta richiede investimenti elevati; la seconda, invece, può essere realizzata con le risorse già disponibili.",
                correct: true,
                explanation:
                    "Le due proposizioni sono sintatticamente autonome ma appartengono allo stesso confronto argomentativo. Il punto e virgola segnala una separazione più forte della virgola ma meno netta di quella normalmente prodotta dal punto fermo.",
            },
            {
                id: "B",
                text: "Il direttore; della biblioteca ha convocato una riunione.",
                correct: false,
                explanation:
                    "Il punto e virgola separa impropriamente il nucleo nominale «il direttore» dal complemento «della biblioteca». Non esiste alcun confine proposizionale che giustifichi il segno.",
            },
            {
                id: "C",
                text: "Abbiamo; completato il lavoro prima della scadenza.",
                correct: false,
                explanation:
                    "Il segno divide l'ausiliare «abbiamo» dal participio «completato», elementi che costituiscono insieme il predicato verbale. Una separazione del genere è sintatticamente ingiustificata.",
            },
            {
                id: "D",
                text: "Il progetto è stato approvato dal; consiglio comunale.",
                correct: false,
                explanation:
                    "Il punto e virgola interrompe impropriamente il complemento d'agente «dal consiglio comunale». Non deve essere inserito all'interno di un sintagma che funziona come unità.",
            },
        ],
    },

    {
        id: 14,
        area: "linguistica-logica",
        category: "verbi",
        difficulty: 4,
        question:
            "Nella frase «Mentre leggevo in biblioteca, qualcuno bussò alla porta», quale rapporto tra i tempi verbali è espresso?",
        answers: [
            {
                id: "A",
                text: "Entrambe le azioni sono presentate come abituali e ripetute indefinitamente.",
                correct: false,
                explanation:
                    "L'imperfetto può esprimere abitualità in altri contesti, ma qui «mentre leggevo» presenta soprattutto un'azione in corso. «Bussò» indica invece un singolo evento che interviene durante tale situazione.",
            },
            {
                id: "B",
                text: "«Bussò» indica un'azione precedente e già conclusa prima dell'inizio della lettura.",
                correct: false,
                explanation:
                    "Il connettivo «mentre» colloca il bussare durante l'azione di leggere, non prima di essa. La lettura costituisce lo sfondo temporale in cui si inserisce l'evento puntuale.",
            },
            {
                id: "C",
                text: "L'imperfetto presenta un'azione in corso come sfondo, mentre il passato remoto introduce un evento puntuale che si verifica durante essa.",
                correct: true,
                explanation:
                    "«Leggevo» rappresenta una situazione durativa non considerata nei suoi limiti conclusivi. «Bussò» presenta invece un evento delimitato che interviene all'interno di quello sfondo temporale.",
            },
            {
                id: "D",
                text: "Il passato remoto indica necessariamente un'azione che dura più a lungo di quella espressa all'imperfetto.",
                correct: false,
                explanation:
                    "La distinzione tra i due tempi non dipende semplicemente dalla durata fisica delle azioni. Riguarda soprattutto il modo in cui il parlante presenta l'evento: in corso e non delimitato oppure considerato come evento concluso.",
            },
        ],
    },

    {
        id: 15,
        area: "linguistica-logica",
        category: "lessico-semantica",
        difficulty: 3,
        question:
            "Quale affermazione descrive meglio la differenza tra «casa» e «catapecchia» quando entrambe indicano un'abitazione?",
        answers: [
            {
                id: "A",
                text: "«Catapecchia» è necessariamente il termine tecnico usato dagli architetti, mentre «casa» appartiene soltanto al linguaggio figurato.",
                correct: false,
                explanation:
                    "«Casa» è una parola comune e può essere usata in senso pienamente letterale. «Catapecchia» non è un tecnicismo architettonico: possiede normalmente una forte sfumatura valutativa negativa.",
            },
            {
                id: "B",
                text: "I due termini possono riferirsi allo stesso tipo generale di realtà, ma «catapecchia» aggiunge una connotazione negativa di precarietà o cattivo stato.",
                correct: true,
                explanation:
                    "La denotazione può sovrapporsi parzialmente perché entrambi i termini possono indicare un'abitazione. «Catapecchia», però, comunica anche un giudizio negativo sulle condizioni o sul valore dell'edificio: questa componente appartiene alla connotazione.",
            },
            {
                id: "C",
                text: "I due termini sono perfettamente equivalenti in ogni contesto e possiedono sempre lo stesso registro e lo stesso valore espressivo.",
                correct: false,
                explanation:
                    "La sostituzione può cambiare sensibilmente il tono della frase. Chiamare un'abitazione «catapecchia» introduce una valutazione che il termine neutro «casa» non esprime necessariamente.",
            },
            {
                id: "D",
                text: "«Casa» indica sempre un edificio grande, mentre «catapecchia» indica esclusivamente un edificio di dimensioni ridotte.",
                correct: false,
                explanation:
                    "La differenza fondamentale non riguarda una misura precisa delle dimensioni. «Catapecchia» richiama soprattutto cattive condizioni, povertà o precarietà dell'edificio.",
            },
        ],
    },

    {
        id: 16,
        area: "linguistica-logica",
        category: "logica-controesempio",
        difficulty: 3,
        question:
            "Per confutare l'affermazione universale «Ogni numero intero divisibile per 6 è anche divisibile per 4», quale dei seguenti numeri costituisce un controesempio?",
        answers: [
            {
                id: "A",
                text: "24",
                correct: false,
                explanation:
                    "24 è divisibile sia per 6 sia per 4. È quindi compatibile con l'affermazione e non può essere utilizzato per dimostrarne la falsità.",
            },
            {
                id: "B",
                text: "16",
                correct: false,
                explanation:
                    "16 è divisibile per 4 ma non per 6. Per essere un controesempio deve soddisfare la condizione iniziale, cioè essere divisibile per 6, e contemporaneamente violare la conseguenza.",
            },
            {
                id: "C",
                text: "20",
                correct: false,
                explanation:
                    "20 è divisibile per 4 ma non per 6. Non appartiene quindi alla classe di numeri sulla quale l'affermazione universale formula la propria conclusione.",
            },
            {
                id: "D",
                text: "18",
                correct: true,
                explanation:
                    "18 è divisibile per 6 perché 18=6×3, ma non è divisibile per 4. Un solo caso che soddisfa la premessa e rende falsa la conclusione è sufficiente a confutare una proposizione universale.",
            },
        ],
    },

    {
        id: 17,
        area: "linguistica-logica",
        category: "principio-dei-cassetti",
        difficulty: 4,
        question:
            "In un gruppo di 25 persone, quale affermazione è necessariamente vera considerando soltanto i 12 mesi dell'anno in cui possono essere nate?",
        answers: [
            {
                id: "A",
                text: "Almeno quattro persone sono nate nello stesso mese.",
                correct: false,
                explanation:
                    "È possibile distribuire 25 persone nei dodici mesi assegnandone tre a un mese e due a ciascuno degli altri undici: 3+22=25. In questa distribuzione nessun mese contiene quattro persone, quindi la conclusione non è garantita.",
            },
            {
                id: "B",
                text: "Esattamente tre persone sono nate nello stesso mese.",
                correct: false,
                explanation:
                    "Si può garantire l'esistenza di almeno un mese con tre persone, ma non che il numero sia esattamente tre. Potrebbero infatti esserci quattro, cinque o più persone nate nello stesso mese.",
            },
            {
                id: "C",
                text: "Almeno tre persone sono nate nello stesso mese.",
                correct: true,
                explanation:
                    "Se ogni mese contenesse al massimo due persone, nei dodici mesi potrebbero essere collocate al massimo 12×2=24 persone. Poiché le persone sono 25, almeno un mese deve contenerne almeno tre: è un'applicazione del principio dei cassetti.",
            },
            {
                id: "D",
                text: "Esistono necessariamente due mesi con almeno tre persone ciascuno.",
                correct: false,
                explanation:
                    "Non è necessario che i mesi con almeno tre persone siano due. La distribuzione 3 persone in un mese e 2 persone in ciascuno degli altri undici soddisfa il totale di 25 e presenta un solo mese con almeno tre persone.",
            },
        ],
    },

    {
        id: 18,
        area: "linguistica-logica",
        category: "logica-reti",
        difficulty: 4,
        question:
            "Una rete di sentieri presenta esclusivamente i seguenti collegamenti diretti bidirezionali: A-B, A-C, B-D, C-D, C-F, D-E, F-E. Ogni collegamento percorso conta come un tratto. Qual è il numero minimo di tratti necessari per andare da A a E?",
        answers: [
            {
                id: "A",
                text: "3",
                correct: true,
                explanation:
                    "Esistono diversi percorsi di tre tratti, per esempio A-B-D-E oppure A-C-D-E o A-C-F-E. Non esiste invece alcun collegamento diretto A-E né un nodo collegato contemporaneamente ad A ed E, quindi un percorso di uno o due tratti è impossibile.",
            },
            {
                id: "B",
                text: "2",
                correct: false,
                explanation:
                    "Un percorso di due tratti richiederebbe un nodo X tale che esistano sia A-X sia X-E. I vicini di A sono B e C, mentre E è collegato soltanto a D e F: non esiste quindi un nodo intermedio comune.",
            },
            {
                id: "C",
                text: "4",
                correct: false,
                explanation:
                    "È possibile costruire percorsi di quattro o più tratti, ma non sono minimi. Per esempio A-B-D-E raggiunge già la destinazione utilizzando soltanto tre collegamenti.",
            },
            {
                id: "D",
                text: "5",
                correct: false,
                explanation:
                    "Cinque tratti sono più del necessario. Il quesito richiede il percorso più breve, non il numero massimo di collegamenti che possono essere attraversati senza ripetizioni.",
            },
        ],
        resources: [
            {
                id: "rete-sentieri-a-e",
                type: "diagram",
                label: "Rete dei sentieri",
                src: `${import.meta.env.BASE_URL}resources/diagrams/rete-sentieri-a-b-c-d-e-f.png`,
                alt: "Grafo non orientato con i collegamenti A-B, A-C, B-D, C-D, C-F, D-E e F-E",
                caption:
                    "Il diagramma consente di confrontare visivamente i diversi percorsi disponibili tra A ed E.",
            },
        ],
    },

    {
        id: 19,
        area: "linguistica-logica",
        category: "logica-intervalli",
        difficulty: 3,
        question:
            "Tre attività si svolgono negli intervalli A: 9:10-10:00, B: 9:40-10:20 e C: 9:50-10:05. Per quanti minuti le tre attività sono in corso contemporaneamente?",
        answers: [
            {
                id: "A",
                text: "5 minuti",
                correct: false,
                explanation:
                    "Alle 9:50 tutte e tre le attività sono già iniziate e A termina alle 10:00. L'intervallo comune è quindi più lungo di cinque minuti.",
            },
            {
                id: "B",
                text: "10 minuti",
                correct: true,
                explanation:
                    "La sovrapposizione tra tutte e tre inizia alle 9:50, quando comincia C, e termina alle 10:00, quando finisce A. L'intersezione dei tre intervalli è quindi 9:50-10:00, pari a 10 minuti.",
            },
            {
                id: "C",
                text: "15 minuti",
                correct: false,
                explanation:
                    "C dura complessivamente 15 minuti, ma negli ultimi cinque, tra le 10:00 e le 10:05, A è già terminata. Non tutto l'intervallo di C è quindi condiviso da tutte e tre.",
            },
            {
                id: "D",
                text: "20 minuti",
                correct: false,
                explanation:
                    "Tra le 9:40 e le 10:00 A e B si sovrappongono per 20 minuti, ma C inizia soltanto alle 9:50. Per il quesito devono essere contemporaneamente attive tutte e tre.",
            },
        ],
        resources: [
            {
                id: "intervalli-attivita-sovrapposizione",
                type: "diagram",
                label: "Linea temporale delle tre attività",
                src: `${import.meta.env.BASE_URL}resources/diagrams/intervalli-attivita-9-10.png`,
                alt: "Linea temporale con attività A dalle 9:10 alle 10:00, B dalle 9:40 alle 10:20 e C dalle 9:50 alle 10:05",
                caption:
                    "La rappresentazione permette di individuare graficamente l'intersezione comune tra i tre intervalli.",
            },
        ],
    },

    {
        id: 20,
        area: "linguistica-logica",
        category: "logica-classificazione",
        difficulty: 4,
        question:
            "Un dossier è considerato ammissibile se e solo se è firmato e contiene ESATTAMENTE UNO tra allegato tecnico e ricevuta di pagamento. I dossier sono: P = firmato, allegato presente, ricevuta presente; Q = firmato, allegato presente, ricevuta assente; R = non firmato, allegato assente, ricevuta presente; S = firmato, allegato assente, ricevuta assente. Quale dossier è ammissibile?",
        answers: [
            {
                id: "A",
                text: "P",
                correct: false,
                explanation:
                    "P è firmato, ma contiene sia l'allegato sia la ricevuta. La regola richiede esattamente uno dei due elementi, quindi la presenza contemporanea di entrambi rende P non conforme.",
            },
            {
                id: "B",
                text: "R",
                correct: false,
                explanation:
                    "R soddisfa la condizione relativa alla presenza di esattamente uno dei due documenti, perché possiede soltanto la ricevuta. Manca però la firma, che è anch'essa una condizione necessaria per l'ammissibilità.",
            },
            {
                id: "C",
                text: "S",
                correct: false,
                explanation:
                    "S è firmato ma non contiene né allegato tecnico né ricevuta. «Esattamente uno» esclude sia il caso in cui siano presenti entrambi sia quello in cui non sia presente nessuno dei due.",
            },
            {
                id: "D",
                text: "Q",
                correct: true,
                explanation:
                    "Q è firmato e contiene l'allegato tecnico ma non la ricevuta. Soddisfa quindi entrambe le componenti della regola: firma presente ed esattamente uno dei due documenti aggiuntivi.",
            },
        ],
    },
    {
        id: 21,
        area: "linguistica-logica",
        category: "coesione-sintattica",
        difficulty: 3,
        question:
            "Nella frase «Sara prepara le slide; Marco, il materiale stampato», quale elemento è sottinteso nella seconda proposizione?",
        answers: [
            {
                id: "A",
                text: "Il soggetto «Marco»",
                correct: false,
                explanation:
                    "Il soggetto non è sottinteso, perché «Marco» è espresso esplicitamente nella seconda proposizione. L'elemento mancante deve invece essere recuperato dalla struttura della prima proposizione.",
            },
            {
                id: "B",
                text: "Il complemento oggetto «il materiale stampato»",
                correct: false,
                explanation:
                    "Anche il complemento oggetto è espresso chiaramente. La frase indica che Marco compie sul materiale stampato la stessa azione che Sara compie sulle slide.",
            },
            {
                id: "C",
                text: "Il verbo «prepara»",
                correct: true,
                explanation:
                    "La seconda proposizione equivale a «Marco prepara il materiale stampato». Il verbo non viene ripetuto perché può essere recuperato facilmente dalla prima proposizione: si tratta quindi di un'ellissi verbale.",
            },
            {
                id: "D",
                text: "L'intera proposizione «Sara prepara le slide»",
                correct: false,
                explanation:
                    "Non viene sottintesa l'intera prima proposizione, perché la seconda presenta un nuovo soggetto e un nuovo complemento oggetto. L'unico elemento necessario per completarne la struttura è il predicato «prepara».",
            },
        ],
    },

    {
        id: 22,
        area: "linguistica-logica",
        category: "coesione-testuale",
        difficulty: 4,
        question:
            "Nella frase «Lo avevo previsto: il treno sarebbe arrivato in ritardo», quale funzione svolge il pronome «lo»?",
        answers: [
            {
                id: "A",
                text: "Anticipa un contenuto che viene esplicitato successivamente, svolgendo una funzione cataforica.",
                correct: true,
                explanation:
                    "Il significato di «lo» viene chiarito soltanto dopo i due punti: ciò che era stato previsto è che il treno sarebbe arrivato in ritardo. Il riferimento procede quindi in avanti nel testo, caratteristica della catafora.",
            },
            {
                id: "B",
                text: "Riprende un nome già espresso nella frase precedente, svolgendo una funzione anaforica.",
                correct: false,
                explanation:
                    "Nel quesito non compare alcun antecedente precedente a cui «lo» possa rinviare. L'anafora recupera normalmente un referente già introdotto, mentre qui il contenuto viene specificato dopo.",
            },
            {
                id: "C",
                text: "Indica il luogo in cui si trova il parlante.",
                correct: false,
                explanation:
                    "Il pronome «lo» non svolge qui alcuna funzione spaziale. Espressioni come «qui» o «lì» possono avere valore deittico di luogo, mentre «lo» anticipa un'intera proposizione.",
            },
            {
                id: "D",
                text: "Sostituisce il soggetto grammaticale «il treno».",
                correct: false,
                explanation:
                    "Il soggetto della proposizione successiva è «il treno», ma «lo» non ne è un sostituto. Il pronome anticipa invece il contenuto complessivo «il treno sarebbe arrivato in ritardo».",
            },
        ],
    },

    {
        id: 23,
        area: "linguistica-logica",
        category: "lessico-semantica",
        difficulty: 3,
        question:
            "In quale coppia il primo termine è un IPERONIMO del secondo?",
        answers: [
            {
                id: "A",
                text: "delfino → mammifero",
                correct: false,
                explanation:
                    "La relazione è nella direzione opposta: «delfino» è un termine più specifico compreso nella categoria generale «mammifero». Delfino è quindi iponimo di mammifero.",
            },
            {
                id: "B",
                text: "veicolo → bicicletta",
                correct: true,
                explanation:
                    "«Veicolo» designa una categoria più generale che comprende, tra gli altri elementi, la bicicletta. «Veicolo» è quindi iperonimo, mentre «bicicletta» è uno dei suoi iponimi.",
            },
            {
                id: "C",
                text: "quercia → albero",
                correct: false,
                explanation:
                    "Una quercia è un particolare tipo di albero. È quindi «albero» a essere l'iperonimo e «quercia» l'iponimo.",
            },
            {
                id: "D",
                text: "coltello → forchetta",
                correct: false,
                explanation:
                    "Nessuno dei due termini comprende semanticamente l'altro. Possono essere considerati co-iponimi di categorie più generali come «posata», ma non sono tra loro in rapporto iperonimo-iponimo.",
            },
        ],
    },

    {
        id: 24,
        area: "linguistica-logica",
        category: "struttura-informativa",
        difficulty: 4,
        question:
            "Quale delle seguenti frasi è una frase scissa che mette specificamente in rilievo Marta come persona che ha consegnato il fascicolo?",
        answers: [
            {
                id: "A",
                text: "Marta ha consegnato il fascicolo.",
                correct: false,
                explanation:
                    "È una normale frase dichiarativa con ordine soggetto-verbo-oggetto. Comunica lo stesso evento fondamentale, ma non utilizza la struttura sintattica tipica della frase scissa.",
            },
            {
                id: "B",
                text: "Il fascicolo, Marta lo ha consegnato.",
                correct: false,
                explanation:
                    "Qui «il fascicolo» è anticipato e ripreso dal pronome «lo»: si tratta di una dislocazione a sinistra. La costruzione mette in primo piano il fascicolo come tema, non utilizza la struttura «essere + elemento focalizzato + che».",
            },
            {
                id: "C",
                text: "Ha consegnato il fascicolo Marta.",
                correct: false,
                explanation:
                    "La posizione finale del soggetto può conferirgli rilievo informativo, soprattutto attraverso l'intonazione, ma non produce una frase scissa. Manca infatti la costruzione con il verbo «essere» seguito dall'elemento focalizzato.",
            },
            {
                id: "D",
                text: "È Marta che ha consegnato il fascicolo.",
                correct: true,
                explanation:
                    "La costruzione «è Marta che...» separa e mette in rilievo il costituente «Marta», presentandolo come focus dell'enunciato. È la struttura tipica della frase scissa.",
            },
        ],
    },

    {
        id: 25,
        area: "linguistica-logica",
        category: "relazioni-lessicali",
        difficulty: 4,
        question:
            "Dal punto di vista semantico, quale relazione esiste tra i verbi «comprare» e «vendere»?",
        answers: [
            {
                id: "A",
                text: "Sono sinonimi perfetti, perché descrivono esattamente la stessa azione dallo stesso punto di vista.",
                correct: false,
                explanation:
                    "I due verbi possono riferirsi alla stessa transazione, ma assegnano ruoli differenti ai partecipanti. Chi compra acquisisce qualcosa, mentre chi vende la cede.",
            },
            {
                id: "B",
                text: "Sono iperonimo e iponimo, perché ogni vendita è un particolare tipo di acquisto.",
                correct: false,
                explanation:
                    "Nessuno dei due significati include l'altro come categoria più generale. La relazione iperonimo-iponimo si avrebbe, per esempio, tra «veicolo» e «bicicletta».",
            },
            {
                id: "C",
                text: "Esprimono una relazione inversa: descrivono la stessa transazione da prospettive complementari dei partecipanti.",
                correct: true,
                explanation:
                    "Se Anna compra un libro da Bruno, Bruno vende quel libro ad Anna. I due verbi rappresentano quindi lo stesso rapporto da due ruoli speculari, compratore e venditore.",
            },
            {
                id: "D",
                text: "Sono antonimi graduabili come «caldo» e «freddo».",
                correct: false,
                explanation:
                    "Gli antonimi graduabili rappresentano poli opposti di una scala sulla quale possono esistere valori intermedi. «Comprare» e «vendere» non formano una scala di intensità, ma due prospettive complementari della stessa relazione.",
            },
        ],
    },

    {
        id: 26,
        area: "linguistica-logica",
        category: "concordanza-grammaticale",
        difficulty: 3,
        question:
            "Quale frase presenta la concordanza corretta nell'italiano standard?",
        answers: [
            {
                id: "A",
                text: "Ciascuno dei candidati hanno ricevuto una scheda.",
                correct: false,
                explanation:
                    "Il soggetto grammaticale è «ciascuno», singolare, non «i candidati». La presenza del complemento plurale «dei candidati» non modifica il numero grammaticale del soggetto.",
            },
            {
                id: "B",
                text: "Ciascuno dei candidati ha ricevuto una scheda.",
                correct: true,
                explanation:
                    "«Ciascuno» è un pronome indefinito singolare e richiede quindi il verbo al singolare. «Dei candidati» specifica l'insieme da cui vengono considerati i singoli individui, ma non determina l'accordo del verbo.",
            },
            {
                id: "C",
                text: "Ciascuno dei candidati avete ricevuto una scheda.",
                correct: false,
                explanation:
                    "«Avete ricevuto» è una seconda persona plurale e non concorda con il soggetto «ciascuno». La forma richiesta è la terza persona singolare.",
            },
            {
                id: "D",
                text: "Ciascuno dei candidati riceveranno una scheda.",
                correct: false,
                explanation:
                    "Anche al futuro il verbo deve concordare con «ciascuno», quindi la forma sarebbe «riceverà». Il sostantivo plurale contenuto nel complemento non rende plurale il soggetto.",
            },
        ],
    },

    {
        id: 27,
        area: "linguistica-logica",
        category: "analisi-del-periodo",
        difficulty: 4,
        question:
            "Nella frase «Dopo aver terminato il colloquio, Paolo uscì dall'ufficio», come si classifica «dopo aver terminato il colloquio»?",
        answers: [
            {
                id: "A",
                text: "Subordinata temporale implicita",
                correct: true,
                explanation:
                    "La proposizione stabilisce quando avviene l'uscita di Paolo: essa avviene dopo la conclusione del colloquio. È implicita perché il verbo compare all'infinito composto «aver terminato» invece che in una forma personale.",
            },
            {
                id: "B",
                text: "Subordinata temporale esplicita",
                correct: false,
                explanation:
                    "Il rapporto temporale è corretto, ma la classificazione «esplicita» è sbagliata. Una subordinata esplicita utilizzerebbe un verbo di modo finito, come in «dopo che ebbe terminato il colloquio».",
            },
            {
                id: "C",
                text: "Subordinata causale implicita",
                correct: false,
                explanation:
                    "La frase non presenta la conclusione del colloquio come causa dell'uscita, ma colloca temporalmente le due azioni. Il connettivo «dopo» rende esplicito proprio questo rapporto cronologico.",
            },
            {
                id: "D",
                text: "Subordinata finale implicita",
                correct: false,
                explanation:
                    "Una finale esprimerebbe lo scopo dell'azione principale, come «uscì per telefonare». Qui non viene indicato uno scopo, ma un evento precedente rispetto all'uscita.",
            },
        ],
    },

    {
        id: 28,
        area: "linguistica-logica",
        category: "pragmatica",
        difficulty: 4,
        question:
            "Nell'enunciato «Anche Sara ha superato la prova», quale informazione viene normalmente data per presupposta dall'uso di «anche»?",
        answers: [
            {
                id: "A",
                text: "Sara era l'unica candidata che poteva superare la prova.",
                correct: false,
                explanation:
                    "«Anche» suggerisce proprio l'esistenza di almeno un altro elemento oltre a quello focalizzato. Interpretare Sara come unica persona che può aver superato la prova contrasta quindi con il valore aggiuntivo della particella.",
            },
            {
                id: "B",
                text: "Sara non ha realmente sostenuto la prova.",
                correct: false,
                explanation:
                    "L'enunciato afferma invece che Sara l'ha superata e presuppone normalmente che qualcun altro abbia fatto altrettanto. Non esiste alcun elemento che neghi la partecipazione di Sara.",
            },
            {
                id: "C",
                text: "Tutti coloro che hanno sostenuto la prova l'hanno superata.",
                correct: false,
                explanation:
                    "L'enunciato non quantifica tutti i partecipanti. Sapere che Sara e almeno un'altra persona hanno superato la prova non permette di concludere che nessuno sia stato bocciato.",
            },
            {
                id: "D",
                text: "Almeno un'altra persona, oltre a Sara, ha superato la prova.",
                correct: true,
                explanation:
                    "La particella aggiuntiva «anche» presenta Sara come un elemento che si aggiunge ad altri casi pertinenti già noti o dati per acquisiti. L'enunciato afferma che Sara ha superato la prova e normalmente presuppone che ciò sia vero anche per almeno qualcun altro.",
            },
        ],
    },

    {
        id: 29,
        area: "linguistica-logica",
        category: "deissi",
        difficulty: 3,
        question:
            "Nella frase «Ci vediamo qui domani», perché le parole «qui» e «domani» non possono essere interpretate pienamente senza conoscere la situazione in cui la frase è stata pronunciata?",
        answers: [
            {
                id: "A",
                text: "Perché sono entrambe pronomi relativi e richiedono un antecedente espresso.",
                correct: false,
                explanation:
                    "«Qui» e «domani» non sono pronomi relativi. Sono avverbi il cui riferimento dipende rispettivamente dal luogo e dal momento della comunicazione.",
            },
            {
                id: "B",
                text: "Perché possiedono sempre un significato diverso in ogni regione italiana.",
                correct: false,
                explanation:
                    "La questione non riguarda variazioni regionali del significato. Le stesse parole possono essere utilizzate in tutto l'italiano standard, ma cambiano referente in base alla situazione concreta.",
            },
            {
                id: "C",
                text: "Perché sono espressioni deittiche: «qui» dipende dal luogo del riferimento comunicativo e «domani» dal momento dell'enunciazione.",
                correct: true,
                explanation:
                    "Per sapere dove sia «qui» bisogna conoscere il punto spaziale assunto come riferimento; per sapere quale giorno sia «domani» bisogna conoscere quando viene pronunciata la frase. Sono quindi rispettivamente deittici spaziale e temporale.",
            },
            {
                id: "D",
                text: "Perché sono abbreviazioni di espressioni più lunghe che devono necessariamente essere scritte per esteso.",
                correct: false,
                explanation:
                    "Entrambe sono parole autonome dell'italiano e non abbreviazioni. Il problema interpretativo nasce dalla dipendenza dal contesto situazionale, non da una forma grafica incompleta.",
            },
        ],
    },

    {
        id: 30,
        area: "linguistica-logica",
        category: "logica-invarianti",
        difficulty: 4,
        question:
            "Dodici carte mostrano inizialmente tutte il lato bianco. A ogni mossa bisogna girare ESATTAMENTE due carte, facendo diventare bianco il lato nero e nero il lato bianco. È possibile arrivare a una configurazione con esattamente 7 carte bianche?",
        answers: [
            {
                id: "A",
                text: "Sì, perché dopo sette mosse rimarranno necessariamente sette carte bianche.",
                correct: false,
                explanation:
                    "Il numero di mosse non coincide con il numero finale di carte bianche, perché la stessa carta può essere girata più volte. Bisogna invece osservare come ogni mossa può modificare la quantità complessiva di carte bianche.",
            },
            {
                id: "B",
                text: "No, perché il numero di carte bianche mantiene sempre la stessa parità e quindi rimane pari.",
                correct: true,
                explanation:
                    "Girando due carte, il numero delle bianche può diminuire di 2, aumentare di 2 oppure rimanere invariato se si gira una bianca e una nera. Partendo da 12, che è pari, il numero delle bianche rimane quindi sempre pari e non può diventare 7.",
            },
            {
                id: "C",
                text: "Sì, purché almeno una carta venga girata tre volte.",
                correct: false,
                explanation:
                    "Girare più volte la stessa carta non modifica l'invariante fondamentale. Ogni singola mossa coinvolge comunque due carte e conserva la parità del numero di carte bianche.",
            },
            {
                id: "D",
                text: "No, perché una carta girata una volta non può più essere girata.",
                correct: false,
                explanation:
                    "Il testo non impone alcun divieto di riutilizzare una carta in mosse successive. L'impossibilità deriva dalla parità, non da una restrizione inesistente.",
            },
        ],
    },

    {
        id: 31,
        area: "linguistica-logica",
        category: "logica-disuguaglianze",
        difficulty: 5,
        question:
            "Quattro oggetti A, B, C e D vengono pesati. Si registrano contemporaneamente queste tre affermazioni: A + B pesa più di C + D; C pesa più di A; D pesa più di B. Quale conclusione è logicamente necessaria?",
        answers: [
            {
                id: "A",
                text: "Le tre affermazioni non possono essere tutte vere contemporaneamente.",
                correct: true,
                explanation:
                    "Da C>A e D>B, sommando membro a membro, segue necessariamente C+D>A+B. Questo contraddice la prima affermazione, secondo cui A+B>C+D: almeno una delle tre misurazioni o affermazioni deve quindi essere errata.",
            },
            {
                id: "B",
                text: "A è necessariamente l'oggetto più pesante dei quattro.",
                correct: false,
                explanation:
                    "Una delle premesse afferma addirittura C>A, quindi A non può essere più pesante di C se quella premessa viene mantenuta. Il vero problema è che le tre informazioni sono reciprocamente incompatibili.",
            },
            {
                id: "C",
                text: "B e D devono avere esattamente lo stesso peso.",
                correct: false,
                explanation:
                    "La terza affermazione stabilisce D>B, quindi esclude l'uguaglianza. Non esiste inoltre alcun passaggio logico che costringa i due pesi a coincidere.",
            },
            {
                id: "D",
                text: "A + B e C + D devono avere necessariamente lo stesso peso.",
                correct: false,
                explanation:
                    "Le premesse forniscono due disuguaglianze opposte, non un'uguaglianza. La conseguenza corretta è che i dati sono incoerenti, non che le due somme coincidano.",
            },
        ],
    },

    {
        id: 32,
        area: "linguistica-logica",
        category: "ragionamento-combinato",
        difficulty: 4,
        question:
            "Quattro squadre disputano un girone all'italiana nel quale ciascuna incontra una volta tutte le altre. Una vittoria assegna 3 punti alla vincente e 0 alla perdente; un pareggio assegna 1 punto a ciascuna squadra. Al termine delle 6 partite, la somma dei punti ottenuti da tutte le squadre è 16. Quante partite sono terminate in pareggio?",
        answers: [
            {
                id: "A",
                text: "1",
                correct: false,
                explanation:
                    "Se ci fosse un solo pareggio, cinque partite assegnerebbero 3 punti ciascuna e una ne assegnerebbe 2. Il totale sarebbe quindi 5×3+2=17 punti.",
            },
            {
                id: "B",
                text: "3",
                correct: false,
                explanation:
                    "Con tre pareggi, tre partite assegnerebbero 2 punti e le altre tre 3 punti. La somma sarebbe 6+9=15, inferiore ai 16 punti indicati.",
            },
            {
                id: "C",
                text: "4",
                correct: false,
                explanation:
                    "Quattro pareggi produrrebbero 8 punti e le due partite decisive altri 6, per un totale di 14. Ogni pareggio riduce infatti di un punto il totale rispetto a una partita con vincitore.",
            },
            {
                id: "D",
                text: "2",
                correct: true,
                explanation:
                    "Se tutte le sei partite avessero un vincitore, verrebbero distribuiti 6×3=18 punti. Ogni pareggio distribuisce soltanto 2 punti e riduce quindi il totale di 1; per passare da 18 a 16 servono esattamente due pareggi.",
            },
        ],
    },

    {
        id: 33,
        area: "linguistica-logica",
        category: "ragionamento-causale",
        difficulty: 4,
        question:
            "Uno studio osservazionale rileva che gli studenti che prendono appunti a mano ottengono mediamente risultati più alti di quelli che usano un computer. Non è stata effettuata alcuna assegnazione casuale dei due metodi. Quale conclusione è logicamente più corretta?",
        answers: [
            {
                id: "A",
                text: "Il computer causa necessariamente risultati peggiori in qualsiasi studente.",
                correct: false,
                explanation:
                    "Una relazione osservata tra due variabili non dimostra da sola un rapporto causale universale. Potrebbero esistere differenze iniziali tra i gruppi o altri fattori collegati sia alla scelta del metodo sia ai risultati.",
            },
            {
                id: "B",
                text: "Prendere appunti a mano non può avere alcun effetto sui risultati, perché lo studio non è sperimentale.",
                correct: false,
                explanation:
                    "Lo studio non consente di stabilire con sicurezza l'assenza di un effetto. Può esistere realmente una relazione causale, ma i dati osservazionali descritti non bastano da soli a isolarla da altre possibili spiegazioni.",
            },
            {
                id: "C",
                text: "I dati mostrano un'associazione tra metodo di appunti e risultati, ma da soli non dimostrano che il metodo sia la causa della differenza.",
                correct: true,
                explanation:
                    "È la conclusione compatibile con le informazioni disponibili. Senza un controllo adeguato dei possibili fattori confondenti, l'associazione osservata non permette di attribuire automaticamente al metodo di appunti l'intera differenza nei risultati.",
            },
            {
                id: "D",
                text: "I risultati dimostrano che tutti gli studenti che prendono appunti a mano superano tutti quelli che usano il computer.",
                correct: false,
                explanation:
                    "Il testo parla di risultati medi dei gruppi e non stabilisce una separazione completa tra tutti gli individui. Due medie differenti possono essere compatibili con un'ampia sovrapposizione dei risultati individuali.",
            },
        ],
    },

    {
        id: 34,
        area: "linguistica-logica",
        category: "logica-relazioni",
        difficulty: 5,
        question:
            "Tre elettori devono scegliere tra A, B e C. Le preferenze sono: elettore 1: A > B > C; elettore 2: B > C > A; elettore 3: C > A > B. Confrontando ogni coppia a maggioranza, quale situazione si verifica?",
        answers: [
            {
                id: "A",
                text: "A batte sia B sia C e risulta quindi superiore a entrambi.",
                correct: false,
                explanation:
                    "A batte B perché è preferito dagli elettori 1 e 3. Tuttavia contro C viene preferito soltanto dall'elettore 1, mentre gli elettori 2 e 3 preferiscono C.",
            },
            {
                id: "B",
                text: "A batte B, B batte C e C batte A, formando un ciclo nelle preferenze di maggioranza.",
                correct: true,
                explanation:
                    "A è preferito a B dagli elettori 1 e 3; B è preferito a C dagli elettori 1 e 2; C è preferito ad A dagli elettori 2 e 3. La relazione collettiva forma quindi il ciclo A>B>C>A e non è transitiva.",
            },
            {
                id: "C",
                text: "Ogni confronto termina necessariamente in parità.",
                correct: false,
                explanation:
                    "Con tre elettori non si verifica una parità 1-1 nei confronti a due alternative: ciascun confronto assegna una maggioranza di due voti contro uno. Il problema nasce non dalla parità ma dalla struttura ciclica dei risultati.",
            },
            {
                id: "D",
                text: "Le preferenze dei tre elettori sono identiche ma scritte iniziando da alternative diverse.",
                correct: false,
                explanation:
                    "Le graduatorie individuali sono realmente differenti. Per esempio l'elettore 1 preferisce A a C, mentre gli elettori 2 e 3 preferiscono C ad A.",
            },
        ],
        resources: [
            {
                id: "preferenze-maggioranza-ciclica",
                type: "diagram",
                label: "Tabella delle preferenze e confronti a maggioranza",
                src: `${import.meta.env.BASE_URL}resources/diagrams/preferenze-maggioranza-ciclica.png`,
                alt: "Tre colonne con le graduatorie A B C, B C A e C A B e frecce dei confronti A batte B, B batte C, C batte A",
                caption:
                    "Lo schema consente di confrontare separatamente ogni coppia di alternative e osservare il ciclo prodotto dalla maggioranza.",
            },
        ],
    },

    {
        id: 35,
        area: "linguistica-logica",
        category: "logica-griglie",
        difficulty: 3,
        question:
            "In una griglia 4×4 ogni riga e ogni colonna deve contenere una sola volta ciascuno dei numeri 1, 2, 3 e 4. Le righe sono: «1 2 3 4», «3 4 1 2», «2 1 4 3», «4 3 ? 1». Quale numero deve sostituire il punto interrogativo?",
        answers: [
            {
                id: "A",
                text: "4",
                correct: false,
                explanation:
                    "La quarta riga contiene già il numero 4 nella prima posizione. Inserire un altro 4 violerebbe immediatamente la regola secondo cui ciascun numero deve comparire una sola volta per riga.",
            },
            {
                id: "B",
                text: "1",
                correct: false,
                explanation:
                    "Il numero 1 è già presente nell'ultima posizione della quarta riga. Inoltre la terza colonna contiene già 1 nella seconda riga.",
            },
            {
                id: "C",
                text: "3",
                correct: false,
                explanation:
                    "La quarta riga contiene già 3 nella seconda posizione. Anche la terza colonna deve completarsi con il solo numero mancante, che non è 3.",
            },
            {
                id: "D",
                text: "2",
                correct: true,
                explanation:
                    "Nella quarta riga compaiono già 4, 3 e 1, quindi manca necessariamente 2. Il controllo sulla terza colonna conferma il risultato: 3, 1, 4, 2 contiene tutti i numeri da 1 a 4 una sola volta.",
            },
        ],
        resources: [
            {
                id: "griglia-latina-quattro",
                type: "diagram",
                label: "Griglia logica 4×4",
                src: `${import.meta.env.BASE_URL}resources/diagrams/griglia-latina-4x4.png`,
                alt: "Griglia quattro per quattro con le righe 1 2 3 4, 3 4 1 2, 2 1 4 3 e 4 3 punto interrogativo 1",
                caption:
                    "La griglia rende visibili contemporaneamente i vincoli sulle righe e sulle colonne.",
            },
        ],
    },

    {
        id: 36,
        area: "linguistica-logica",
        category: "ragionamento-informativo",
        difficulty: 4,
        question:
            "Devi identificare con certezza un oggetto scelto tra 16 oggetti possibili. Puoi porre soltanto domande alle quali si risponde «sì» oppure «no», e puoi scegliere ogni domanda in base alle risposte precedenti. Qual è il numero MINIMO di domande necessario nel caso peggiore?",
        answers: [
            {
                id: "A",
                text: "4",
                correct: true,
                explanation:
                    "Una domanda sì/no può dividere al massimo le possibilità in due gruppi. Con 4 domande si possono distinguere fino a 2⁴=16 sequenze di risposte diverse, quindi quattro domande bastano se ogni volta si dividono opportunamente le possibilità.",
            },
            {
                id: "B",
                text: "3",
                correct: false,
                explanation:
                    "Con tre risposte binarie esistono soltanto 2³=8 sequenze possibili. Non sono sufficienti per distinguere con certezza 16 oggetti differenti.",
            },
            {
                id: "C",
                text: "8",
                correct: false,
                explanation:
                    "Otto domande potrebbero certamente essere sufficienti, ma il quesito richiede il minimo. Una strategia che dimezza ogni volta il numero delle possibilità raggiunge l'identificazione già dopo quattro domande.",
            },
            {
                id: "D",
                text: "16",
                correct: false,
                explanation:
                    "Non è necessario chiedere separatamente informazioni su ciascun oggetto. Domande ben progettate possono eliminare metà delle possibilità a ogni risposta, rendendo la ricerca molto più efficiente.",
            },
        ],
    },

    {
        id: 37,
        area: "linguistica-logica",
        category: "ragionamento-spaziale",
        difficulty: 4,
        question:
            "La rete di un cubo è formata da quattro quadrati in fila nell'ordine A-B-C-D, con il quadrato E sopra B e il quadrato F sotto B. Quando la rete viene ripiegata, quale faccia risulta opposta a B?",
        answers: [
            {
                id: "A",
                text: "E",
                correct: false,
                explanation:
                    "E è direttamente collegata a B lungo un lato della rete e, una volta ripiegata, diventa una faccia adiacente a B. Due facce che condividono uno spigolo non possono essere opposte.",
            },
            {
                id: "B",
                text: "A",
                correct: false,
                explanation:
                    "Anche A condivide direttamente un lato con B e diventa quindi una faccia laterale adiacente. Non può trovarsi sul lato opposto del cubo rispetto a B.",
            },
            {
                id: "C",
                text: "D",
                correct: true,
                explanation:
                    "Prendendo B come faccia di riferimento, A, C, E e F si ripiegano formando le quattro facce adiacenti. D, collegata esternamente a C, si richiude infine sul lato posteriore e risulta quindi opposta a B.",
            },
            {
                id: "D",
                text: "F",
                correct: false,
                explanation:
                    "F è collegata direttamente al lato inferiore di B e diventa la faccia inferiore rispetto alla faccia di riferimento. È quindi adiacente a B, non opposta.",
            },
        ],
        resources: [
            {
                id: "rete-cubo-a-f",
                type: "diagram",
                label: "Rete piana del cubo",
                src: `${import.meta.env.BASE_URL}resources/diagrams/rete-cubo-a-b-c-d-e-f.png`,
                alt: "Rete di cubo con A B C D in fila, E sopra B e F sotto B",
                caption:
                    "La figura permette di seguire mentalmente il ripiegamento delle sei facce del cubo.",
            },
        ],
    },

    {
        id: 38,
        area: "linguistica-logica",
        category: "ragionamento-critico",
        difficulty: 4,
        question:
            "Una biblioteca vuole sapere se i propri utenti preferiscono libri cartacei o ebook. Invia il questionario esclusivamente alle persone che, nell'ultimo mese, hanno preso in prestito almeno un ebook. Il 78% dei rispondenti dichiara di preferire gli ebook. Qual è il principale problema logico nel concludere che «il 78% di tutti gli utenti della biblioteca preferisce gli ebook»?",
        answers: [
            {
                id: "A",
                text: "Il 78% non può essere utilizzato perché qualunque percentuale superiore al 50% è statisticamente impossibile.",
                correct: false,
                explanation:
                    "Una percentuale del 78% è perfettamente possibile. Il problema non riguarda il valore numerico della percentuale, ma il modo in cui sono state selezionate le persone alle quali è stato inviato il questionario.",
            },
            {
                id: "B",
                text: "Il campione è selezionato proprio tra persone che hanno recentemente usato ebook e può quindi non rappresentare l'intera popolazione degli utenti.",
                correct: true,
                explanation:
                    "La procedura di selezione favorisce la presenza di utenti già coinvolti nell'uso degli ebook. Il risultato descrive il campione intervistato, ma non può essere automaticamente generalizzato a tutti gli utenti senza dimostrarne la rappresentatività.",
            },
            {
                id: "C",
                text: "Un questionario non può mai essere utilizzato per studiare una preferenza.",
                correct: false,
                explanation:
                    "I questionari possono essere strumenti appropriati per rilevare opinioni e preferenze. La validità dell'inferenza dipende però dal disegno dell'indagine, dalla formulazione delle domande e soprattutto, in questo caso, dal campionamento.",
            },
            {
                id: "D",
                text: "Per conoscere una preferenza sarebbe obbligatorio intervistare esattamente il 50% degli utenti.",
                correct: false,
                explanation:
                    "Non esiste una regola generale che imponga di intervistare metà della popolazione. Anche campioni molto più piccoli possono essere informativi se selezionati con metodi adeguati e sufficientemente rappresentativi.",
            },
        ],
    },

    {
        id: 39,
        area: "linguistica-logica",
        category: "interpretazione-di-dati",
        difficulty: 4,
        question:
            "Quattro gruppi completano un'attività. I risultati sono: gruppo A, 120 operazioni e 6 errori; gruppo B, 200 operazioni e 8 errori; gruppo C, 90 operazioni e 3 errori; gruppo D, 150 operazioni e 9 errori. Quale gruppo presenta il TASSO di errore più basso?",
        answers: [
            {
                id: "A",
                text: "Gruppo A",
                correct: false,
                explanation:
                    "Il gruppo A commette 6 errori su 120 operazioni: 6/120=0,05, cioè il 5%. Per confrontare gruppi di dimensioni diverse bisogna utilizzare il rapporto errori/operazioni e non il numero assoluto di errori.",
            },
            {
                id: "B",
                text: "Gruppo B",
                correct: false,
                explanation:
                    "Il gruppo B ha un tasso di 8/200=0,04, cioè il 4%. È migliore di A e D, ma resta superiore al tasso del gruppo C.",
            },
            {
                id: "C",
                text: "Gruppo D",
                correct: false,
                explanation:
                    "Il gruppo D commette 9 errori su 150 operazioni, pari al 6%. È quindi il tasso più alto tra quelli indicati, non il più basso.",
            },
            {
                id: "D",
                text: "Gruppo C",
                correct: true,
                explanation:
                    "Il gruppo C presenta 3 errori su 90 operazioni: 3/90=1/30≈0,0333, cioè circa il 3,33%. È inferiore al 5% di A, al 4% di B e al 6% di D.",
            },
        ],
    },

    {
        id: 40,
        area: "linguistica-logica",
        category: "ragionamento-algoritmico",
        difficulty: 3,
        question:
            "Un procedimento riceve in ingresso un numero n. Se n < 10, lo moltiplica per 3; altrimenti sottrae 4. Sul risultato ottenuto applica poi questa seconda regola: se il numero è pari, lo divide per 2; se è dispari, aggiunge 5. Qual è l'uscita quando n = 5?",
        answers: [
            {
                id: "A",
                text: "20",
                correct: true,
                explanation:
                    "Poiché 5<10, la prima regola produce 5×3=15. Il risultato è dispari, quindi viene applicato il secondo ramo appropriato: 15+5=20.",
            },
            {
                id: "B",
                text: "7,5",
                correct: false,
                explanation:
                    "7,5 deriverebbe dalla divisione di 15 per 2, ma quella operazione è prevista soltanto quando il risultato intermedio è pari. Poiché 15 è dispari, deve essere utilizzato l'altro ramo.",
            },
            {
                id: "C",
                text: "8",
                correct: false,
                explanation:
                    "Questo valore può derivare dall'applicazione impropria della sottrazione prevista per gli ingressi maggiori o uguali a 10. Con n=5 bisogna invece utilizzare il ramo della moltiplicazione per 3.",
            },
            {
                id: "D",
                text: "15",
                correct: false,
                explanation:
                    "15 è soltanto il risultato intermedio dopo la prima regola. Il procedimento contiene una seconda decisione che deve essere applicata prima di ottenere l'uscita finale.",
            },
        ],
        resources: [
            {
                id: "flowchart-regole-numero",
                type: "diagram",
                label: "Diagramma di flusso del procedimento",
                src: `${import.meta.env.BASE_URL}resources/diagrams/flowchart-regole-numero.png`,
                alt: "Diagramma di flusso con controllo n minore di 10, moltiplicazione per 3 o sottrazione di 4, seguito da controllo pari o dispari e relativa operazione",
                caption:
                    "Il diagramma permette di seguire nell'ordine corretto i due punti decisionali dell'algoritmo.",
            },
        ],
    },
    {
        id: 41,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 3,
        question:
            "Quale trasformazione descrive correttamente un aspetto fondamentale della riforma teatrale di Carlo Goldoni?",
        answers: [
            {
                id: "A",
                text: "L'aumento dell'improvvisazione degli attori e il rafforzamento delle maschere come personaggi fissi.",
                correct: false,
                explanation:
                    "Improvvisazione, canovaccio e tipi fissi erano elementi caratteristici della commedia dell'arte da cui Goldoni progressivamente si distaccò. La sua riforma non eliminò improvvisamente tutta la tradizione precedente, ma ne ridusse gradualmente questi elementi.",
            },
            {
                id: "B",
                text: "Il passaggio verso copioni interamente scritti e personaggi maggiormente individualizzati, costruiti attraverso l'osservazione della realtà sociale.",
                correct: true,
                explanation:
                    "Goldoni sostituì progressivamente il semplice canovaccio con testi scritti e ridusse il ruolo delle maschere stereotipate, sviluppando personaggi dotati di caratteri più individuali. La ricerca di naturalezza nel dialogo e l'osservazione concreta della società sono aspetti centrali della sua riforma.",
            },
            {
                id: "C",
                text: "L'abbandono definitivo della commedia per dedicare il teatro esclusivamente alla tragedia di argomento mitologico.",
                correct: false,
                explanation:
                    "Goldoni fu soprattutto un grande riformatore della commedia e non sostituì questo genere con la tragedia. Opere come La locandiera mostrano precisamente il risultato raggiunto dalla sua nuova concezione del teatro comico.",
            },
            {
                id: "D",
                text: "La sostituzione dell'italiano e del veneziano con il latino come unica lingua ammessa sulle scene.",
                correct: false,
                explanation:
                    "Goldoni non impose il latino al teatro comico. La sua produzione utilizza invece italiano e veneziano, cercando spesso una lingua scenica naturale e aderente alle situazioni e ai personaggi rappresentati.",
            },
        ],
    },

    {
        id: 42,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 4,
        question:
            "Nel Giorno di Giuseppe Parini, perché la presentazione apparentemente solenne delle occupazioni del «giovin signore» produce un effetto satirico?",
        answers: [
            {
                id: "A",
                text: "Perché il protagonista compie realmente imprese militari eroiche che il narratore cerca di ridicolizzare.",
                correct: false,
                explanation:
                    "Il giovin signore non è rappresentato come un autentico eroe militare. Le sue occupazioni sono prevalentemente mondane, oziose e quotidiane, e proprio la sproporzione rispetto al tono elevato contribuisce alla satira.",
            },
            {
                id: "B",
                text: "Perché Parini utilizza uno stile volutamente trascurato per dimostrare l'incapacità del protagonista di comprendere la poesia.",
                correct: false,
                explanation:
                    "Lo stile del Giorno è tutt'altro che trascurato: è raffinato, classicistico e spesso solenne. L'effetto critico nasce dal contrasto tra questa elevatezza formale e la vacuità delle azioni descritte.",
            },
            {
                id: "C",
                text: "Perché il narratore condanna sempre direttamente il giovane nobile utilizzando insulti espliciti.",
                correct: false,
                explanation:
                    "La critica pariniana utilizza frequentemente l'ironia e l'antifrasi invece dell'attacco esplicito. Il narratore finge spesso di istruire e celebrare il giovane, lasciando emergere indirettamente l'assurdità del suo stile di vita.",
            },
            {
                id: "D",
                text: "Perché l'apparente celebrazione e lo stile elevato entrano in contrasto con la frivolezza della vita aristocratica rappresentata.",
                correct: true,
                explanation:
                    "Parini assume ironicamente il ruolo di precettore del giovane aristocratico e tratta occupazioni banali come se fossero imprese degne di un poema solenne. Il contrasto tra forma elevata e contenuto futile rende visibile la critica all'ozio e al torpore morale di una parte della nobiltà settecentesca.",
            },
        ],
    },

    {
        id: 43,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 4,
        question:
            "Quale affermazione descrive correttamente uno sviluppo importante della tragedia di Vittorio Alfieri?",
        answers: [
            {
                id: "A",
                text: "Nelle opere più mature Alfieri elimina ogni conflitto individuale per rappresentare esclusivamente battaglie storiche collettive.",
                correct: false,
                explanation:
                    "Nelle grandi tragedie mature il conflitto individuale può diventare ancora più intenso. Saul e Mirra, per esempio, concentrano il dramma proprio nell'interiorità tormentata dei protagonisti.",
            },
            {
                id: "B",
                text: "Alfieri abbandona progressivamente la tragedia e trasforma Saul e Mirra in commedie fondate sull'equivoco.",
                correct: false,
                explanation:
                    "Saul e Mirra appartengono pienamente alla produzione tragica alfieriana. Non utilizzano i meccanismi tipici della commedia d'equivoco, ma conducono i protagonisti verso conflitti drammatici e distruttivi.",
            },
            {
                id: "C",
                text: "Accanto al tema politico della libertà contro la tirannide, nelle tragedie mature il conflitto può spostarsi profondamente all'interno della psiche del protagonista.",
                correct: true,
                explanation:
                    "Libertà e opposizione alla tirannide sono temi fondamentali della riflessione alfieriana. In opere come Saul e Mirra, tuttavia, il dramma assume una forte dimensione interiore: il protagonista è lacerato da forze psicologiche e passioni che non riesce a dominare.",
            },
            {
                id: "D",
                text: "L'obiettivo principale delle tragedie alfieriane è dimostrare che il potere assoluto garantisce necessariamente la libertà individuale.",
                correct: false,
                explanation:
                    "Questa affermazione è incompatibile con uno dei nuclei più caratteristici del pensiero di Alfieri. La concentrazione del potere e la tirannide sono percepite come minacce alla libertà, non come sue garanzie.",
            },
        ],
    },

    {
        id: 44,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 4,
        question:
            "Che cosa caratterizza principalmente la cosiddetta «metrica barbara» sperimentata da Giosuè Carducci?",
        answers: [
            {
                id: "A",
                text: "Il tentativo di adattare alla lingua italiana strutture ritmiche e metriche ispirate alla poesia classica greca e latina.",
                correct: true,
                explanation:
                    "Carducci cercò di riprodurre nell'italiano l'effetto di metri della tradizione classica, pur lavorando con una lingua fondata sull'accento e non sulla quantità delle sillabe come il greco e il latino antichi. Le Odi barbare sono il risultato più celebre di questa sperimentazione.",
            },
            {
                id: "B",
                text: "L'uso esclusivo del verso libero, privo di qualsiasi riferimento a modelli metrici precedenti.",
                correct: false,
                explanation:
                    "La metrica barbara nasce proprio da un intenso confronto con modelli antichi. Non coincide quindi con il verso libero novecentesco, che rompe in maniera differente con gli schemi metrici tradizionali.",
            },
            {
                id: "C",
                text: "La composizione di poesie esclusivamente in lingue germaniche medievali tradotte letteralmente in italiano.",
                correct: false,
                explanation:
                    "Il termine «barbara» non indica l'impiego di lingue dei popoli storicamente definiti barbari. È il nome dato da Carducci ai suoi tentativi di adattare i metri classici alla prosodia italiana.",
            },
            {
                id: "D",
                text: "La sostituzione sistematica degli endecasillabi con versi composti da un numero casuale di sillabe.",
                correct: false,
                explanation:
                    "La sperimentazione carducciana è fortemente controllata e non basata sulla casualità. Il poeta costruisce corrispondenze ritmiche elaborate per evocare forme metriche classiche attraverso gli strumenti prosodici dell'italiano.",
            },
        ],
    },

    {
        id: 45,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-avanguardie",
        difficulty: 3,
        question:
            "Quale scelta formale è maggiormente coerente con il programma letterario sviluppato dal Futurismo italiano?",
        answers: [
            {
                id: "A",
                text: "Imitare rigorosamente il linguaggio e le forme della poesia medievale per restaurare integralmente la tradizione.",
                correct: false,
                explanation:
                    "Il Futurismo si presenta come un'avanguardia polemicamente rivolta contro il culto del passato. La restaurazione delle forme antiche sarebbe quindi in contrasto con il suo programma di rottura.",
            },
            {
                id: "B",
                text: "Limitare la letteratura alla descrizione immobile di paesaggi pastorali, evitando ogni riferimento alla tecnologia moderna.",
                correct: false,
                explanation:
                    "Macchine, velocità, industria e dinamismo della vita moderna costituiscono invece alcuni degli elementi più riconoscibili dell'immaginario futurista. L'immobilità contemplativa non rappresenta il suo ideale dominante.",
            },
            {
                id: "C",
                text: "Conservare obbligatoriamente sintassi, punteggiatura e ordine tradizionale delle parole come garanzia di continuità con il passato.",
                correct: false,
                explanation:
                    "La sperimentazione futurista arrivò proprio a mettere in discussione sintassi e punteggiatura tradizionali. Le successive teorie marinettiane delle «parole in libertà» cercavano una scrittura più rapida e dinamica.",
            },
            {
                id: "D",
                text: "Frammentare la sintassi e sperimentare associazioni verbali capaci di suggerire velocità, simultaneità e dinamismo della civiltà moderna.",
                correct: true,
                explanation:
                    "Il Futurismo, fondato da Filippo Tommaso Marinetti, esaltava velocità, macchina e trasformazione tecnologica. Sul piano letterario questa ricerca condusse anche a sperimentazioni radicali della sintassi e alla poetica delle «parole in libertà».",
            },
        ],
    },

    {
        id: 46,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "generi-e-forme-letterarie",
        difficulty: 3,
        question:
            "Quale struttura corrisponde alla forma tipica del sonetto nella tradizione poetica italiana?",
        answers: [
            {
                id: "A",
                text: "Dodici versi organizzati in tre quartine.",
                correct: false,
                explanation:
                    "Una struttura di tre quartine non corrisponde alla forma canonica del sonetto italiano. Il sonetto possiede complessivamente quattordici versi.",
            },
            {
                id: "B",
                text: "Quattordici versi, generalmente endecasillabi, organizzati in due quartine e due terzine.",
                correct: true,
                explanation:
                    "Il sonetto italiano nella sua forma tipica è composto da quattordici versi, tradizionalmente endecasillabi. La struttura viene normalmente suddivisa in una prima parte di otto versi, cioè due quartine, e una seconda di sei, cioè due terzine.",
            },
            {
                id: "C",
                text: "Otto strofe di otto versi ciascuna, tutte obbligatoriamente in rima baciata.",
                correct: false,
                explanation:
                    "Questa descrizione non appartiene al sonetto e produrrebbe un componimento di sessantaquattro versi. Le rime del sonetto possono inoltre seguire diversi schemi storicamente attestati.",
            },
            {
                id: "D",
                text: "Un numero libero di versi senza alcuna organizzazione strofica riconoscibile.",
                correct: false,
                explanation:
                    "Il sonetto è proprio una delle forme metriche più strutturate e riconoscibili della tradizione italiana. Il numero dei versi e la divisione fondamentale in quartine e terzine ne costituiscono elementi caratteristici.",
            },
        ],
    },

    {
        id: 47,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 4,
        question:
            "Quale descrizione coglie correttamente un principio strutturale della Gerusalemme liberata di Torquato Tasso?",
        answers: [
            {
                id: "A",
                text: "Il poema elimina completamente amore, magia e avventure individuali per limitarsi a una cronaca documentaria della crociata.",
                correct: false,
                explanation:
                    "La materia storica della Prima crociata costituisce l'asse dell'opera, ma il poema comprende anche passioni amorose, elementi meravigliosi e vicende individuali. Non è quindi una semplice cronaca storica.",
            },
            {
                id: "B",
                text: "Il poema non possiede alcuna azione centrale e raccoglie episodi completamente indipendenti tra loro.",
                correct: false,
                explanation:
                    "Tasso attribuisce invece grande importanza all'unità dell'azione epica. Le diverse vicende sono rapportate all'impresa fondamentale dei crociati e possono avvicinare oppure allontanare i personaggi da essa.",
            },
            {
                id: "C",
                text: "La conquista cristiana di Gerusalemme fornisce un'azione centrale unitaria, mentre passioni e avventure possono temporaneamente allontanare i guerrieri dall'impresa comune.",
                correct: true,
                explanation:
                    "La Prima crociata e la conquista di Gerusalemme costituiscono il movimento centrale del poema. Intorno a esso operano spinte centrifughe, come passioni amorose e avventure, che deviano temporaneamente alcuni personaggi dal loro compito.",
            },
            {
                id: "D",
                text: "L'intera opera è ambientata nell'Italia contemporanea di Tasso e ha come unico tema la vita delle corti rinascimentali.",
                correct: false,
                explanation:
                    "La Gerusalemme liberata è ambientata nell'epoca della Prima crociata, non nell'Italia cinquecentesca contemporanea all'autore. La cultura di corte appartiene al contesto in cui Tasso scrive, ma non costituisce l'ambientazione principale del poema.",
            },
        ],
    },

    {
        id: 48,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "metodologia-storica",
        difficulty: 3,
        question:
            "Uno storico vuole studiare la frequenza scolastica in una città italiana nel 1872. Quale dei seguenti materiali costituisce una fonte primaria particolarmente pertinente?",
        answers: [
            {
                id: "A",
                text: "Un registro delle presenze degli alunni compilato da una scuola della città nel 1872.",
                correct: true,
                explanation:
                    "Il registro è stato prodotto nel periodo studiato e documenta direttamente l'attività amministrativa della scuola. Può quindi fornire dati di prima mano sulle presenze, anche se deve essere interpretato considerando modalità di compilazione ed eventuali lacune.",
            },
            {
                id: "B",
                text: "Un manuale universitario pubblicato nel 2025 sulla storia dell'istruzione italiana.",
                correct: false,
                explanation:
                    "Un manuale contemporaneo è una fonte secondaria: ricostruisce e interpreta il passato utilizzando studi e documenti precedenti. Può essere molto utile, ma non è una testimonianza prodotta nel 1872.",
            },
            {
                id: "C",
                text: "Una voce enciclopedica moderna dedicata alla scuola nell'Ottocento.",
                correct: false,
                explanation:
                    "Anche una voce enciclopedica è una ricostruzione successiva e appartiene normalmente alle fonti secondarie. Riassume conoscenze elaborate attraverso altre fonti invece di costituire direttamente un documento dell'epoca studiata.",
            },
            {
                id: "D",
                text: "Un documentario realizzato oggi utilizzando studi di diversi storici.",
                correct: false,
                explanation:
                    "Il documentario è un prodotto interpretativo contemporaneo e quindi, rispetto alla frequenza scolastica del 1872, costituisce una fonte secondaria. Potrebbe però incorporare immagini o documenti primari che andrebbero analizzati separatamente.",
            },
        ],
    },

    {
        id: 49,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-moderna",
        difficulty: 3,
        question:
            "Quale controversia è direttamente collegata alle origini della Riforma protestante avviata da Martin Lutero?",
        answers: [
            {
                id: "A",
                text: "La richiesta di abolire il cristianesimo in tutti i principati tedeschi.",
                correct: false,
                explanation:
                    "Lutero non mirava all'abolizione del cristianesimo, ma a una profonda riforma religiosa fondata sulla propria interpretazione delle Scritture. Il movimento produsse poi una frattura della cristianità occidentale.",
            },
            {
                id: "B",
                text: "La critica alla pratica delle indulgenze, espressa nelle 95 tesi del 1517 e inserita in una più ampia riflessione su peccato, grazia e autorità religiosa.",
                correct: true,
                explanation:
                    "Le 95 tesi di Lutero sono convenzionalmente associate all'inizio della Riforma e nacquero dalla polemica sulle indulgenze. Il conflitto si ampliò successivamente fino a coinvolgere questioni dottrinali e il rapporto con l'autorità della Chiesa di Roma.",
            },
            {
                id: "C",
                text: "La volontà di restaurare il politeismo dell'antica Roma come religione ufficiale della Germania.",
                correct: false,
                explanation:
                    "La Riforma rimase pienamente interna all'orizzonte cristiano, pur producendo nuove confessioni. Non perseguì alcuna restaurazione delle religioni politeistiche antiche.",
            },
            {
                id: "D",
                text: "La disputa sul diritto degli astronomi di utilizzare il telescopio, nata dopo la pubblicazione delle opere di Galileo.",
                correct: false,
                explanation:
                    "Le vicende di Galileo appartengono alla storia della rivoluzione scientifica del Seicento e non costituiscono l'origine della Riforma luterana. Le 95 tesi precedono di molti decenni le principali controversie galileiane.",
            },
        ],
    },

    {
        id: 50,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-della-scienza",
        difficulty: 4,
        question:
            "Quale elemento rappresenta una novità fondamentale associata alla rivoluzione scientifica e al metodo galileiano?",
        answers: [
            {
                id: "A",
                text: "Considerare sufficiente l'autorità degli autori antichi anche quando le osservazioni producono risultati differenti.",
                correct: false,
                explanation:
                    "La nuova scienza mise in discussione proprio il ricorso all'autorità come criterio sufficiente per stabilire la verità di un'affermazione sulla natura. Le ipotesi dovevano confrontarsi con fenomeni osservabili e verificabili.",
            },
            {
                id: "B",
                text: "Rinunciare alle misurazioni perché i fenomeni naturali non possono essere descritti quantitativamente.",
                correct: false,
                explanation:
                    "La misurazione e la quantificazione divennero invece elementi centrali della nuova indagine scientifica. Galileo attribuì alla matematica un ruolo essenziale nella formulazione delle leggi della natura.",
            },
            {
                id: "C",
                text: "Separare completamente esperienza e matematica, utilizzandone sempre una sola per ogni problema.",
                correct: false,
                explanation:
                    "Uno degli aspetti innovativi fu proprio l'integrazione tra esperienza ed elaborazione matematica. L'esperimento permette di interrogare controllatamente la natura, mentre la matematica consente di esprimere relazioni quantitative.",
            },
            {
                id: "D",
                text: "Formulare e controllare ipotesi attraverso osservazioni ed esperimenti, utilizzando anche il linguaggio matematico per descrivere regolarità nei fenomeni.",
                correct: true,
                explanation:
                    "Il metodo associato alla scienza galileiana combina esperienza controllata, formulazione di ipotesi e ragionamento matematico. La natura non viene soltanto osservata passivamente: viene interrogata attraverso esperimenti progettati per verificare relazioni precise.",
            },
        ],
        resources: [
            {
                id: "metodo-galileiano",
                type: "diagram",
                label: "Schema del metodo scientifico galileiano",
                src: `${import.meta.env.BASE_URL}resources/diagrams/metodo-galileiano-esperimento-matematica.png`,
                alt: "Schema con osservazione, formulazione dell'ipotesi, deduzione matematica, esperimento e verifica dei risultati",
                caption:
                    "Il diagramma evidenzia l'integrazione tra osservazione, ipotesi, matematica ed esperimento nella nascita della scienza moderna.",
            },
        ],
    },

    {
        id: 51,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-del-pensiero-politico",
        difficulty: 4,
        question:
            "Quale organizzazione dello Stato è maggiormente coerente con la teoria della separazione dei poteri associata a Montesquieu?",
        answers: [
            {
                id: "A",
                text: "Un'unica autorità produce le leggi, le applica e giudica autonomamente ogni violazione.",
                correct: false,
                explanation:
                    "Questa configurazione concentra nella stessa autorità le principali funzioni dello Stato. È proprio il tipo di concentrazione che la teoria della separazione dei poteri considera pericoloso per la libertà.",
            },
            {
                id: "B",
                text: "Il potere giudiziario dipende direttamente dall'organo esecutivo e deve applicarne le decisioni senza autonomia.",
                correct: false,
                explanation:
                    "La separazione richiede che la funzione giudiziaria non sia semplicemente subordinata a quella esecutiva. In caso contrario chi governa potrebbe anche controllare direttamente il giudizio sulla legalità delle proprie azioni.",
            },
            {
                id: "C",
                text: "Le funzioni legislativa, esecutiva e giudiziaria sono affidate a organi distinti, in modo da limitare la concentrazione e l'abuso del potere.",
                correct: true,
                explanation:
                    "Montesquieu collega la libertà politica alla necessità che il potere possa essere limitato da altri poteri. La distinzione tra legislativo, esecutivo e giudiziario mira quindi a evitare che tutte le funzioni fondamentali siano concentrate nella stessa autorità.",
            },
            {
                id: "D",
                text: "Tutte le funzioni dello Stato vengono eliminate, perché qualsiasi forma di potere è incompatibile con la libertà.",
                correct: false,
                explanation:
                    "Montesquieu non propone l'abolizione dello Stato o di ogni autorità politica. Il problema è organizzare e bilanciare il potere per impedirne l'uso arbitrario.",
            },
        ],
        resources: [
            {
                id: "separazione-poteri-montesquieu",
                type: "diagram",
                label: "Separazione dei tre poteri",
                src: `${import.meta.env.BASE_URL}resources/diagrams/separazione-poteri-montesquieu.png`,
                alt: "Schema con potere legislativo, esecutivo e giudiziario rappresentati come funzioni distinte dello Stato",
                caption:
                    "Lo schema rende visibile la distinzione delle tre funzioni fondamentali e il principio di limitazione reciproca del potere.",
            },
        ],
    },

    {
        id: 52,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-rivoluzione-francese",
        difficulty: 4,
        question:
            "Perché i provvedimenti dell'agosto 1789 rappresentarono un passaggio fondamentale nella crisi dell'Ancien Régime in Francia?",
        answers: [
            {
                id: "A",
                text: "Perché furono colpiti i privilegi feudali e vennero proclamati principi di libertà, uguaglianza giuridica e sovranità della nazione.",
                correct: true,
                explanation:
                    "Nella notte del 4 agosto l'Assemblea intervenne sui privilegi e sui vincoli feudali; il 26 agosto approvò la Dichiarazione dei diritti dell'uomo e del cittadino. Questi atti mettevano in discussione principi fondamentali dell'ordine sociale e politico dell'Antico Regime.",
            },
            {
                id: "B",
                text: "Perché vennero ripristinati tutti i privilegi fiscali della nobiltà che erano stati aboliti nei decenni precedenti.",
                correct: false,
                explanation:
                    "La direzione del processo fu opposta: l'Assemblea colpì i privilegi di origine feudale. L'uguaglianza giuridica dei cittadini era incompatibile con il mantenimento delle tradizionali distinzioni di privilegio.",
            },
            {
                id: "C",
                text: "Perché Luigi XVI ottenne un potere assoluto maggiore di quello posseduto prima della rivoluzione.",
                correct: false,
                explanation:
                    "La Rivoluzione erose progressivamente l'assolutismo monarchico. La sovranità veniva ricondotta alla nazione e il potere del re veniva sottoposto a nuovi limiti politici e costituzionali.",
            },
            {
                id: "D",
                text: "Perché la Dichiarazione dei diritti abolì immediatamente qualunque forma di proprietà privata.",
                correct: false,
                explanation:
                    "La proprietà era invece inclusa tra i diritti tutelati dalla Dichiarazione. Il documento non progettava l'abolizione generale della proprietà privata.",
            },
        ],
        resources: [
            {
                id: "rivoluzione-francese-agosto-1789",
                type: "timeline",
                label: "Agosto 1789 e crisi dell'Ancien Régime",
                src: `${import.meta.env.BASE_URL}resources/diagrams/rivoluzione-francese-agosto-1789.png`,
                alt: "Linea del tempo con abolizione dei privilegi feudali il 4 agosto 1789 e Dichiarazione dei diritti dell'uomo e del cittadino il 26 agosto 1789",
                caption:
                    "La linea del tempo collega i due principali provvedimenti dell'agosto 1789 al progressivo superamento dell'ordine politico e sociale dell'Ancien Régime.",
            },
        ],
    },

    {
        id: 53,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-economica",
        difficulty: 4,
        question:
            "Negli Stati Uniti, dopo il crollo finanziario del 1929, diminuirono fortemente produzione e investimenti mentre aumentarono fallimenti bancari e disoccupazione. Quale interpretazione storica è più corretta?",
        answers: [
            {
                id: "A",
                text: "La crisi rimase confinata alla Borsa e non ebbe conseguenze significative sull'economia reale.",
                correct: false,
                explanation:
                    "La contrazione della produzione, gli effetti sul sistema bancario e la forte crescita della disoccupazione mostrano precisamente il contrario. La crisi finanziaria si trasformò in una depressione economica e sociale molto più ampia.",
            },
            {
                id: "B",
                text: "La crisi finanziaria si propagò all'economia reale, contribuendo a una grave contrazione produttiva e occupazionale.",
                correct: true,
                explanation:
                    "La Grande depressione non fu soltanto un crollo delle quotazioni azionarie. Fallimenti bancari, riduzione degli investimenti e della domanda, caduta della produzione e disoccupazione di massa mostrano l'estensione sistemica della crisi.",
            },
            {
                id: "C",
                text: "Il crollo del 1929 provocò immediatamente piena occupazione grazie all'espansione automatica della produzione industriale.",
                correct: false,
                explanation:
                    "La disoccupazione crebbe invece drammaticamente negli anni successivi. La riduzione della domanda e degli investimenti contribuì alla diminuzione, non all'espansione immediata, della produzione.",
            },
            {
                id: "D",
                text: "La crisi riguardò esclusivamente l'agricoltura e lasciò intatti banche, industria e commercio.",
                correct: false,
                explanation:
                    "L'agricoltura fu duramente colpita, ma non fu l'unico settore coinvolto. La depressione investì il sistema bancario, l'industria, i redditi, il commercio internazionale e il mercato del lavoro.",
            },
        ],
    },

    {
        id: 54,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-guerra-fredda",
        difficulty: 3,
        question:
            "Quale descrizione del rapporto tra NATO e Patto di Varsavia durante la Guerra fredda è corretta?",
        answers: [
            {
                id: "A",
                text: "Erano due organizzazioni economiche create esclusivamente per gestire una moneta comune europea.",
                correct: false,
                explanation:
                    "NATO e Patto di Varsavia erano principalmente alleanze politico-militari. Non furono create per gestire una moneta comune né svolgevano la funzione delle successive istituzioni economiche europee.",
            },
            {
                id: "B",
                text: "Appartenevano entrambe al blocco sovietico ed erano dirette politicamente da Mosca.",
                correct: false,
                explanation:
                    "Il Patto di Varsavia apparteneva al sistema di alleanze guidato dall'URSS. La NATO era invece l'alleanza militare del blocco occidentale, con un ruolo centrale degli Stati Uniti.",
            },
            {
                id: "C",
                text: "Furono create soltanto dopo la dissoluzione dell'Unione Sovietica per sostituire le organizzazioni della Guerra fredda.",
                correct: false,
                explanation:
                    "Entrambe nacquero proprio durante la Guerra fredda: la NATO nel 1949 e il Patto di Varsavia nel 1955. Il Patto di Varsavia fu sciolto nel 1991.",
            },
            {
                id: "D",
                text: "Rappresentarono due sistemi di alleanza contrapposti, collegati rispettivamente al blocco occidentale e a quello guidato dall'Unione Sovietica.",
                correct: true,
                explanation:
                    "Il bipolarismo della Guerra fredda organizzò gran parte dell'Europa intorno a due blocchi contrapposti. La NATO costituì il principale sistema militare occidentale, mentre il Patto di Varsavia riunì l'URSS e vari Stati dell'Europa orientale.",
            },
        ],
        resources: [
            {
                id: "europa-blocchi-guerra-fredda",
                type: "map",
                label: "Europa dei due blocchi durante la Guerra fredda",
                src: `${import.meta.env.BASE_URL}resources/maps/europa-blocchi-guerra-fredda.png`,
                alt: "Carta storica europea con paesi appartenenti alla NATO e al Patto di Varsavia durante la Guerra fredda",
                caption:
                    "La carta permette di visualizzare geograficamente la contrapposizione politico-militare tra blocco occidentale e blocco sovietico.",
            },
        ],
    },

    {
        id: 55,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-contemporanea",
        difficulty: 4,
        question:
            "Quale affermazione descrive meglio il processo di decolonizzazione acceleratosi dopo la Seconda guerra mondiale?",
        answers: [
            {
                id: "A",
                text: "Portò all'espansione generalizzata degli imperi coloniali europei in Asia e Africa.",
                correct: false,
                explanation:
                    "Il processo seguì la direzione opposta: numerosi territori coloniali ottennero progressivamente l'indipendenza. Gli imperi europei persero quindi gran parte dei possedimenti costruiti nei secoli precedenti.",
            },
            {
                id: "B",
                text: "Si svolse ovunque in modo identico e pacifico, senza guerre né conflitti politici.",
                correct: false,
                explanation:
                    "La decolonizzazione ebbe modalità molto differenti. In alcuni territori avvennero negoziati relativamente pacifici, mentre in altri si svilupparono lunghe guerre di indipendenza e violente crisi politiche.",
            },
            {
                id: "C",
                text: "Fu favorita dall'indebolimento delle potenze coloniali, dalla crescita dei movimenti nazionali e dall'affermazione del principio di autodeterminazione.",
                correct: true,
                explanation:
                    "Dopo il 1945 le potenze europee erano indebolite e i movimenti indipendentisti asiatici e africani avevano acquistato maggiore forza. Il principio di autodeterminazione contribuì inoltre a delegittimare progressivamente il dominio coloniale tradizionale.",
            },
            {
                id: "D",
                text: "Produsse l'immediata adesione obbligatoria di tutti i nuovi Stati indipendenti alla NATO.",
                correct: false,
                explanation:
                    "I nuovi Stati seguirono orientamenti internazionali differenti. Molti cercarono anzi di evitare l'allineamento automatico con uno dei due blocchi della Guerra fredda, dando vita anche al movimento dei non allineati.",
            },
        ],
    },

    {
        id: 56,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-fisica",
        difficulty: 4,
        question:
            "Una massa d'aria umida proveniente dal mare incontra una catena montuosa. Perché il versante sopravento può risultare più piovoso di quello sottovento?",
        answers: [
            {
                id: "A",
                text: "L'aria umida viene costretta a salire, si raffredda e può condensare producendo precipitazioni; sul versante opposto l'aria discendente tende invece a riscaldarsi e asciugarsi.",
                correct: true,
                explanation:
                    "È il cosiddetto effetto orografico. L'ascesa dell'aria favorisce raffreddamento, condensazione e precipitazioni sul lato esposto ai venti, mentre la discesa sul lato sottovento favorisce condizioni relativamente più secche.",
            },
            {
                id: "B",
                text: "Le montagne impediscono sempre alle nuvole di formarsi sul versante sopravento e concentrano tutta la pioggia sul lato opposto.",
                correct: false,
                explanation:
                    "L'ascesa forzata dell'aria può proprio favorire la formazione di nubi sul versante sopravento. Il lato sottovento tende generalmente a essere più asciutto, non necessariamente più piovoso.",
            },
            {
                id: "C",
                text: "Il versante sopravento riceve più pioggia esclusivamente perché si trova sempre più vicino all'Equatore.",
                correct: false,
                explanation:
                    "La posizione rispetto all'Equatore non distingue automaticamente i due versanti della stessa montagna. La differenza descritta dipende principalmente dalla direzione dei venti e dal sollevamento orografico dell'aria.",
            },
            {
                id: "D",
                text: "L'aria che sale lungo la montagna diventa progressivamente più calda e per questo produce immediatamente pioggia.",
                correct: false,
                explanation:
                    "Durante la salita l'aria tende invece a espandersi e raffreddarsi. È proprio il raffreddamento a favorire la condensazione del vapore acqueo quando vengono raggiunte condizioni appropriate.",
            },
        ],
        resources: [
            {
                id: "effetto-orografico",
                type: "diagram",
                label: "Effetto orografico: sopravento e sottovento",
                src: `${import.meta.env.BASE_URL}resources/diagrams/effetto-orografico-sopravento-sottovento.png`,
                alt: "Sezione di una montagna con aria umida in salita sul versante sopravento, nubi e precipitazioni, e aria più secca in discesa sul versante sottovento",
                caption:
                    "Il diagramma mostra il raffreddamento dell'aria in salita e il riscaldamento dell'aria in discesa sui due lati del rilievo.",
            },
        ],
    },

    {
        id: 57,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-demografica",
        difficulty: 4,
        question:
            "In un territorio, durante un anno, si registrano 1.240 nascite, 1.380 decessi, 560 immigrati e 370 emigrati. Quale combinazione dei saldi è corretta?",
        answers: [
            {
                id: "A",
                text: "Saldo naturale +140; saldo migratorio −190; saldo complessivo −50.",
                correct: false,
                explanation:
                    "I segni sono invertiti. Il saldo naturale è nascite meno decessi e quello migratorio è immigrati meno emigrati.",
            },
            {
                id: "B",
                text: "Saldo naturale −140; saldo migratorio +190; saldo complessivo +50.",
                correct: true,
                explanation:
                    "Il saldo naturale è 1.240−1.380=−140. Il saldo migratorio è 560−370=+190; combinando i due valori si ottiene −140+190=+50, quindi il movimento complessivo è positivo.",
            },
            {
                id: "C",
                text: "Saldo naturale −140; saldo migratorio +930; saldo complessivo +790.",
                correct: false,
                explanation:
                    "930 è la somma di immigrati ed emigrati, non il loro saldo. Per valutare la variazione migratoria bisogna sottrarre le partenze dagli arrivi.",
            },
            {
                id: "D",
                text: "Saldo naturale +2.620; saldo migratorio +190; saldo complessivo +2.810.",
                correct: false,
                explanation:
                    "2.620 è la somma di nascite e decessi e non rappresenta una variazione della popolazione. I saldi sono differenze tra flussi che aumentano e flussi che diminuiscono la popolazione.",
            },
        ],
    },

    {
        id: 58,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-umana",
        difficulty: 3,
        question:
            "Quale affermazione descrive correttamente il processo di urbanizzazione?",
        answers: [
            {
                id: "A",
                text: "Indica esclusivamente l'aumento della popolazione totale di uno Stato, indipendentemente da dove essa vive.",
                correct: false,
                explanation:
                    "La popolazione complessiva può aumentare senza che aumenti la quota di persone residenti in aree urbane. Urbanizzazione e crescita demografica totale sono quindi fenomeni distinti.",
            },
            {
                id: "B",
                text: "Si verifica soltanto quando una nuova capitale viene fondata per decisione del governo.",
                correct: false,
                explanation:
                    "La fondazione o espansione di una città può contribuire all'urbanizzazione, ma non ne rappresenta l'unico meccanismo. Il fenomeno riguarda un cambiamento più generale nella distribuzione territoriale della popolazione.",
            },
            {
                id: "C",
                text: "Coincide necessariamente con la diminuzione del numero assoluto degli abitanti delle città.",
                correct: false,
                explanation:
                    "Una diminuzione generalizzata della popolazione urbana sarebbe semmai incompatibile con la forma più comune del processo. L'urbanizzazione riguarda l'aumento del peso relativo della popolazione urbana.",
            },
            {
                id: "D",
                text: "Consiste nell'aumento della quota di popolazione che vive in aree urbane e può essere favorito, tra l'altro, da migrazioni rurali-urbane e trasformazioni degli insediamenti.",
                correct: true,
                explanation:
                    "L'urbanizzazione descrive il progressivo aumento dell'importanza demografica delle aree urbane. Può derivare dallo spostamento di persone dalle campagne alle città e anche dalla crescita o riclassificazione di insediamenti precedentemente considerati rurali.",
            },
        ],
    },

    {
        id: 59,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-economica",
        difficulty: 3,
        question:
            "Considera queste tre attività: 1) coltivazione del grano; 2) produzione industriale di pasta a partire dalla farina; 3) trasporto e vendita della pasta nei negozi. A quali settori economici appartengono rispettivamente?",
        answers: [
            {
                id: "A",
                text: "Terziario → primario → secondario",
                correct: false,
                explanation:
                    "La coltivazione agricola non appartiene al terziario ma al settore primario. Anche le altre due classificazioni risultano quindi spostate rispetto alla natura delle attività descritte.",
            },
            {
                id: "B",
                text: "Secondario → terziario → primario",
                correct: false,
                explanation:
                    "Il settore secondario riguarda soprattutto la trasformazione delle materie prime, quindi descrive la produzione industriale della pasta e non la coltivazione del grano. Trasporto e commercio appartengono invece ai servizi.",
            },
            {
                id: "C",
                text: "Primario → secondario → terziario",
                correct: true,
                explanation:
                    "L'agricoltura produce materie prime e appartiene al settore primario. L'industria trasforma tali materie in beni e appartiene al secondario, mentre trasporto e commercio sono servizi e rientrano nel terziario.",
            },
            {
                id: "D",
                text: "Primario → primario → secondario",
                correct: false,
                explanation:
                    "La trasformazione industriale della farina in pasta non è più un'attività primaria. Allo stesso modo vendita e trasporto non sono attività manifatturiere, ma servizi del settore terziario.",
            },
        ],
    },

    {
        id: 60,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-astronomica",
        difficulty: 3,
        question:
            "Trascurando le modifiche politiche dei fusi orari, due località differiscono di 45° di longitudine. A quale differenza approssimativa di tempo solare locale corrisponde questo scarto?",
        answers: [
            {
                id: "A",
                text: "3 ore",
                correct: true,
                explanation:
                    "La Terra compie circa 360° di rotazione in 24 ore, cioè 15° ogni ora. Una differenza di 45° corrisponde quindi a 45/15=3 ore di differenza nel tempo solare locale.",
            },
            {
                id: "B",
                text: "1 ora",
                correct: false,
                explanation:
                    "Un'ora corrisponde approssimativamente a 15° di longitudine, non a 45°. Per uno scarto di 45° bisogna considerare tre intervalli da 15°.",
            },
            {
                id: "C",
                text: "6 ore",
                correct: false,
                explanation:
                    "Sei ore corrisponderebbero a circa 90° di longitudine, perché 6×15°=90°. Il valore indicato nel quesito è soltanto la metà.",
            },
            {
                id: "D",
                text: "15 ore",
                correct: false,
                explanation:
                    "15 è il numero di gradi di longitudine associato approssimativamente a un'ora di rotazione terrestre, non il numero di ore corrispondenti a 45°. Confondere le due grandezze porta a questo risultato.",
            },
        ],
        resources: [
            {
                id: "longitudine-tempo-solare",
                type: "diagram",
                label: "Longitudine e differenza di tempo solare",
                src: `${import.meta.env.BASE_URL}resources/diagrams/longitudine-tempo-solare.png`,
                alt: "Schema della Terra suddivisa in intervalli di 15 gradi di longitudine con indicazione della rotazione e della corrispondenza approssimativa di un'ora",
                caption:
                    "Lo schema mostra perché una rotazione di 360 gradi in 24 ore corrisponde a circa 15 gradi di longitudine per ogni ora.",
            },
        ],
    },
    {
        id: 61,
        area: "cultura-matematico-scientifica",
        category: "matematica-informatica",
        difficulty: 3,
        question:
            "Quale numero decimale corrisponde al numero binario 110101₂?",
        answers: [
            {
                id: "A",
                text: "45",
                correct: false,
                explanation:
                    "45 in binario sarebbe 101101₂. Nel numero proposto sono attive le posizioni corrispondenti a 32, 16, 4 e 1, non quelle necessarie per ottenere 45.",
            },
            {
                id: "B",
                text: "53",
                correct: true,
                explanation:
                    "Le cifre binarie rappresentano potenze di 2: 110101₂ = 1×2⁵ + 1×2⁴ + 0×2³ + 1×2² + 0×2¹ + 1×2⁰. Si ottiene quindi 32+16+4+1=53.",
            },
            {
                id: "C",
                text: "61",
                correct: false,
                explanation:
                    "61 richiederebbe anche il contributo di 2³=8, ma nella posizione corrispondente il numero binario presenta uno 0. Aggiungere impropriamente anche 8 porterebbe proprio da 53 a 61.",
            },
            {
                id: "D",
                text: "101",
                correct: false,
                explanation:
                    "Leggere 110101 come se fosse un numero decimale trasformato con una semplice regola sulle cifre non è corretto. Nel sistema binario ogni posizione vale una potenza di 2, non una potenza di 10.",
            },
        ],
    },

    {
        id: 62,
        area: "cultura-matematico-scientifica",
        category: "matematica-insiemi-numerici",
        difficulty: 3,
        question:
            "Quale dei seguenti numeri è irrazionale?",
        answers: [
            {
                id: "A",
                text: "0,125",
                correct: false,
                explanation:
                    "0,125 è un decimale finito e può essere scritto come frazione: 125/1000 = 1/8. È quindi un numero razionale.",
            },
            {
                id: "B",
                text: "−7",
                correct: false,
                explanation:
                    "Ogni numero intero è anche razionale, perché può essere espresso come rapporto tra due interi con denominatore diverso da zero. In particolare −7 = −7/1.",
            },
            {
                id: "C",
                text: "0,3333… con il 3 periodico",
                correct: false,
                explanation:
                    "Un decimale periodico è razionale. Infatti 0,3333… rappresenta esattamente la frazione 1/3.",
            },
            {
                id: "D",
                text: "√18",
                correct: true,
                explanation:
                    "√18 può essere semplificato come √(9×2)=3√2. Poiché √2 è irrazionale, anche 3√2 è irrazionale e non può essere espresso come rapporto tra due interi.",
            },
        ],
    },

    {
        id: 63,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria",
        difficulty: 3,
        question:
            "Quanto misura ciascun angolo esterno di un ottagono regolare?",
        answers: [
            {
                id: "A",
                text: "45°",
                correct: true,
                explanation:
                    "La somma degli angoli esterni di qualsiasi poligono convesso, prendendone uno per vertice nello stesso verso, è 360°. In un ottagono regolare gli otto angoli esterni sono uguali, quindi ciascuno misura 360°/8=45°.",
            },
            {
                id: "B",
                text: "90°",
                correct: false,
                explanation:
                    "Un angolo esterno di 90° caratterizza, per esempio, un quadrato regolare: 360°/4=90°. Un ottagono possiede il doppio dei lati e quindi angoli esterni più piccoli.",
            },
            {
                id: "C",
                text: "135°",
                correct: false,
                explanation:
                    "135° è la misura di ciascun angolo interno di un ottagono regolare. Angolo interno ed esterno adiacente sono supplementari: 180°−135°=45°.",
            },
            {
                id: "D",
                text: "22,5°",
                correct: false,
                explanation:
                    "22,5° si otterrebbero dividendo 180° per 8, operazione che non rappresenta la regola degli angoli esterni. La loro somma complessiva è 360°, non 180°.",
            },
        ],
    },

    {
        id: 64,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria",
        difficulty: 4,
        question:
            "Due triangoli hanno rispettivamente due lati lunghi 5 cm e 8 cm e l'angolo COMPRESO tra questi due lati misura 60° in entrambi. Quale conclusione è corretta?",
        answers: [
            {
                id: "A",
                text: "I triangoli possono avere forme diverse perché conoscere due lati non permette mai di determinare un triangolo.",
                correct: false,
                explanation:
                    "Conoscere soltanto due lati non sarebbe sufficiente, ma qui è noto anche l'angolo compreso tra essi. Queste tre informazioni determinano la forma e le dimensioni del triangolo.",
            },
            {
                id: "B",
                text: "I triangoli sono soltanto simili, ma possono avere dimensioni differenti.",
                correct: false,
                explanation:
                    "I lati corrispondenti indicati hanno già le stesse lunghezze, non soltanto lo stesso rapporto. Il criterio disponibile permette quindi di concludere qualcosa di più forte della semplice similitudine.",
            },
            {
                id: "C",
                text: "I triangoli sono congruenti per il criterio lato-angolo-lato.",
                correct: true,
                explanation:
                    "Due lati e l'angolo compreso sono uguali nei due triangoli. Il criterio lato-angolo-lato determina quindi triangoli congruenti, cioè sovrapponibili e con tutti gli elementi corrispondenti uguali.",
            },
            {
                id: "D",
                text: "I triangoli sono necessariamente rettangoli.",
                correct: false,
                explanation:
                    "L'angolo noto misura 60°, non 90°, e nessuna delle informazioni fornite impone l'esistenza di un angolo retto. La conclusione riguarda la congruenza, non la classificazione come triangoli rettangoli.",
            },
        ],
    },

    {
        id: 65,
        area: "cultura-matematico-scientifica",
        category: "matematica-unita-di-misura",
        difficulty: 3,
        question:
            "Un recipiente ha un volume interno di 3500 cm³. A quanti litri corrisponde questo volume?",
        answers: [
            {
                id: "A",
                text: "0,35 L",
                correct: false,
                explanation:
                    "0,35 L corrispondono a 350 cm³. La conversione corretta utilizza l'equivalenza 1000 cm³ = 1 L.",
            },
            {
                id: "B",
                text: "3,5 L",
                correct: true,
                explanation:
                    "Un litro equivale a un decimetro cubo, cioè 1000 cm³. Dividendo 3500 cm³ per 1000 si ottengono quindi 3,5 L.",
            },
            {
                id: "C",
                text: "35 L",
                correct: false,
                explanation:
                    "35 L corrisponderebbero a 35.000 cm³, dieci volte il volume indicato. L'errore deriva da uno spostamento scorretto della virgola nella conversione.",
            },
            {
                id: "D",
                text: "350 L",
                correct: false,
                explanation:
                    "350 L equivalgono a 350.000 cm³ e sono cento volte il valore corretto. Per passare dai centimetri cubi ai litri bisogna dividere per 1000.",
            },
        ],
    },

    {
        id: 66,
        area: "cultura-matematico-scientifica",
        category: "matematica-probabilita",
        difficulty: 4,
        question:
            "In un corso A, 18 studenti hanno superato una prova e 12 non l'hanno superata. In un corso B, 24 studenti l'hanno superata e 6 non l'hanno superata. Se viene scelto casualmente uno studente SAPENDO che appartiene al corso B, qual è la probabilità che abbia superato la prova?",
        answers: [
            {
                id: "A",
                text: "24/60",
                correct: false,
                explanation:
                    "60 è il numero totale degli studenti dei due corsi, ma l'informazione «appartiene al corso B» restringe lo spazio dei casi possibili. Bisogna quindi considerare soltanto i 30 studenti del corso B.",
            },
            {
                id: "B",
                text: "24/36",
                correct: false,
                explanation:
                    "36 è il numero complessivo degli studenti che hanno superato la prova nei due corsi, 18+24. Non è però il denominatore pertinente una volta stabilito che lo studente scelto appartiene al corso B.",
            },
            {
                id: "C",
                text: "6/30",
                correct: false,
                explanation:
                    "6/30 è la probabilità, all'interno del corso B, di scegliere uno studente che NON ha superato la prova. È l'evento complementare rispetto a quello richiesto.",
            },
            {
                id: "D",
                text: "24/30 = 4/5",
                correct: true,
                explanation:
                    "Nel corso B gli studenti sono 24+6=30 e 24 di essi hanno superato la prova. La probabilità condizionata all'appartenenza al corso B è quindi 24/30=4/5, cioè 80%.",
            },
        ],
    },

    {
        id: 67,
        area: "cultura-matematico-scientifica",
        category: "analisi-presentazione-dati",
        difficulty: 4,
        question:
            "Due valori, 48 e 52, vengono rappresentati con due barre verticali. Quale scelta grafica può far apparire visivamente la differenza tra i due valori molto più grande di quanto sia realmente, pur lasciando invariati i dati?",
        answers: [
            {
                id: "A",
                text: "Far iniziare l'asse verticale da 47 invece che da 0 senza rendere evidente la troncatura.",
                correct: true,
                explanation:
                    "Se l'asse parte da 47, le altezze visibili diventano proporzionalmente 1 e 5 rispetto alla base mostrata, facendo apparire enorme una differenza numerica di appena 4 unità. Un asse troncato non è sempre scorretto, ma deve essere riconoscibile e interpretato con attenzione.",
            },
            {
                id: "B",
                text: "Scrivere chiaramente sopra le barre i valori 48 e 52.",
                correct: false,
                explanation:
                    "Mostrare i valori numerici rende più semplice verificare la dimensione reale della differenza. Questa scelta aumenta la trasparenza invece di amplificare artificialmente l'impressione visiva.",
            },
            {
                id: "C",
                text: "Utilizzare la stessa scala per entrambe le barre.",
                correct: false,
                explanation:
                    "Una scala comune è necessaria per confrontare correttamente le altezze. Utilizzare scale differenti per barre che devono essere confrontate sarebbe invece fuorviante.",
            },
            {
                id: "D",
                text: "Indicare sull'asse verticale unità regolarmente distanziate.",
                correct: false,
                explanation:
                    "Intervalli regolari e chiaramente etichettati facilitano una lettura corretta del grafico. Il problema nasce quando la costruzione grafica altera la percezione delle proporzioni senza renderlo evidente.",
            },
        ],
        resources: [
            {
                id: "grafico-asse-troncato",
                type: "diagram",
                label: "Confronto tra asse completo e asse troncato",
                src: `${import.meta.env.BASE_URL}resources/diagrams/grafico-asse-troncato-48-52.png`,
                alt: "Due grafici a barre degli stessi valori 48 e 52, uno con asse verticale da zero e uno con asse che inizia da 47",
                caption:
                    "Il confronto mostra come la scelta della scala possa modificare fortemente la percezione visiva pur lasciando invariati i dati.",
            },
        ],
    },

    {
        id: 68,
        area: "cultura-matematico-scientifica",
        category: "biologia-divisione-cellulare",
        difficulty: 4,
        question:
            "Nell'essere umano, quale risultato fondamentale della meiosi consente alla fecondazione di ristabilire il normale numero diploide di cromosomi?",
        answers: [
            {
                id: "A",
                text: "La meiosi raddoppia il numero dei cromosomi nei gameti portandolo da 46 a 92.",
                correct: false,
                explanation:
                    "La meiosi svolge la funzione opposta: riduce il numero delle serie cromosomiche. Gameti con 92 cromosomi produrrebbero, dopo la fecondazione, uno zigote con un numero ancora maggiore.",
            },
            {
                id: "B",
                text: "La meiosi produce cellule somatiche diploidi geneticamente identiche alla cellula iniziale.",
                correct: false,
                explanation:
                    "Questo risultato è più vicino alla funzione della mitosi nelle cellule diploidi. La meiosi è invece collegata alla produzione di cellule riproduttive con numero cromosomico dimezzato.",
            },
            {
                id: "C",
                text: "La meiosi produce gameti aploidi con 23 cromosomi, così la fusione di due gameti ristabilisce 46 cromosomi nello zigote.",
                correct: true,
                explanation:
                    "Le cellule somatiche umane sono normalmente diploidi con 46 cromosomi, mentre i gameti prodotti attraverso la meiosi sono aploidi e ne contengono 23. Alla fecondazione, 23 cromosomi dell'ovulo e 23 dello spermatozoo formano nuovamente un corredo diploide di 46.",
            },
            {
                id: "D",
                text: "La meiosi elimina completamente i cromosomi dai gameti, che li ricevono soltanto dopo la fecondazione.",
                correct: false,
                explanation:
                    "I gameti possiedono un corredo cromosomico completo ma aploide. La fecondazione combina i due corredi parentali, non crea cromosomi dal nulla.",
            },
        ],
        resources: [
            {
                id: "meiosi-diploide-aploide",
                type: "diagram",
                label: "Riduzione cromosomica durante la meiosi",
                src: `${import.meta.env.BASE_URL}resources/diagrams/meiosi-diploide-aploide.png`,
                alt: "Schema semplificato di una cellula diploide che attraverso la meiosi produce cellule aploidi e della successiva fecondazione che ristabilisce il numero diploide",
                caption:
                    "Lo schema evidenzia la riduzione del numero cromosomico nella meiosi e il suo ripristino attraverso la fecondazione.",
            },
        ],
    },

    {
        id: 69,
        area: "cultura-matematico-scientifica",
        category: "biologia-evoluzione",
        difficulty: 4,
        question:
            "In una popolazione di insetti esiste una variazione ereditaria del colore. Dopo un cambiamento ambientale, gli individui di colore scuro risultano meno visibili ai predatori e producono mediamente più discendenti. Dopo molte generazioni aumenta la frequenza del colore scuro. Quale processo descrive meglio il fenomeno?",
        answers: [
            {
                id: "A",
                text: "Gli insetti chiari decidono volontariamente di diventare scuri perché ne riconoscono il vantaggio.",
                correct: false,
                explanation:
                    "La selezione naturale non richiede che gli organismi modifichino intenzionalmente caratteristiche ereditarie in risposta a un bisogno. La variazione esiste nella popolazione prima che l'ambiente ne favorisca una parte.",
            },
            {
                id: "B",
                text: "La selezione naturale favorisce una variante ereditaria che, in quell'ambiente, aumenta il successo riproduttivo.",
                correct: true,
                explanation:
                    "Gli individui scuri possiedono in questo ambiente un vantaggio che permette loro, in media, di lasciare più discendenti. Se il carattere è ereditabile, la variante può quindi diventare più frequente nelle generazioni successive.",
            },
            {
                id: "C",
                text: "Ogni singolo insetto evolve durante la propria vita fino a raggiungere automaticamente il colore migliore.",
                correct: false,
                explanation:
                    "L'evoluzione biologica riguarda cambiamenti nelle popolazioni attraverso le generazioni, non la trasformazione evolutiva intenzionale di un individuo nel corso della propria vita. Gli individui vengono selezionati; sono le popolazioni a evolvere.",
            },
            {
                id: "D",
                text: "Il colore scuro aumenta perché tutte le variazioni ereditarie diventano necessariamente più comuni con il tempo.",
                correct: false,
                explanation:
                    "Una variante non aumenta automaticamente soltanto perché è ereditaria. Il suo destino dipende da selezione, deriva genetica e altri processi; nello scenario descritto è il maggiore successo riproduttivo a spiegare l'aumento.",
            },
        ],
    },

    {
        id: 70,
        area: "cultura-matematico-scientifica",
        category: "biologia-molecolare",
        difficulty: 4,
        question:
            "In una molecola di DNA a doppio filamento sono presenti, in un certo tratto, complessivamente 120 basi adenina e 80 basi guanina. Quante basi timina e citosina devono essere presenti nello stesso tratto?",
        answers: [
            {
                id: "A",
                text: "80 timine e 120 citosine",
                correct: false,
                explanation:
                    "Questa alternativa scambia le due coppie complementari. Nel DNA a doppio filamento l'adenina si appaia con la timina, mentre la guanina si appaia con la citosina.",
            },
            {
                id: "B",
                text: "200 timine e 200 citosine",
                correct: false,
                explanation:
                    "Il numero delle basi complementari non coincide con il totale di adenine e guanine sommato. Ogni adenina richiede una timina corrispondente e ogni guanina una citosina.",
            },
            {
                id: "C",
                text: "120 timine e 120 citosine",
                correct: false,
                explanation:
                    "La quantità di timina è corretta perché deve eguagliare quella di adenina. La citosina deve però essere presente in 80 unità, pari al numero delle guanine.",
            },
            {
                id: "D",
                text: "120 timine e 80 citosine",
                correct: true,
                explanation:
                    "Nella doppia elica del DNA adenina e timina formano una coppia complementare, così come guanina e citosina. Di conseguenza 120 adenine richiedono 120 timine e 80 guanine richiedono 80 citosine.",
            },
        ],
    },

    {
        id: 71,
        area: "cultura-matematico-scientifica",
        category: "scienze-della-terra-acque",
        difficulty: 4,
        question:
            "In un acquifero non confinato, per diversi anni viene pompata acqua più rapidamente di quanto le precipitazioni riescano a ricaricarla. Quale conseguenza è più plausibile?",
        answers: [
            {
                id: "A",
                text: "La falda può abbassarsi, soprattutto nelle zone interessate dal prelievo.",
                correct: true,
                explanation:
                    "Se l'uscita di acqua supera persistentemente la ricarica, la quantità immagazzinata nell'acquifero diminuisce. Il livello della falda può quindi scendere e attorno ai pozzi può formarsi una depressione piezometrica.",
            },
            {
                id: "B",
                text: "La falda deve necessariamente salire perché il pompaggio richiama nuova acqua dal sottosuolo.",
                correct: false,
                explanation:
                    "Il pompaggio può richiamare acqua dalle zone circostanti, ma non crea nuova acqua. Se la ricarica complessiva resta inferiore al prelievo, il bilancio continua a essere negativo.",
            },
            {
                id: "C",
                text: "L'acquifero si trasforma automaticamente in un lago superficiale.",
                correct: false,
                explanation:
                    "L'acqua sotterranea occupa pori e fratture del terreno e delle rocce. Una diminuzione delle riserve non comporta la trasformazione automatica dell'acquifero in una massa d'acqua superficiale.",
            },
            {
                id: "D",
                text: "Il pompaggio non può influire sulla falda perché soltanto l'evaporazione modifica le acque sotterranee.",
                correct: false,
                explanation:
                    "I prelievi tramite pozzi costituiscono una vera uscita dal sistema sotterraneo. La falda dipende dal bilancio tra ricarica, deflusso naturale e prelievi umani.",
            },
        ],
        resources: [
            {
                id: "acquifero-pompaggio-falda",
                type: "diagram",
                label: "Acquifero, falda e pompaggio",
                src: `${import.meta.env.BASE_URL}resources/diagrams/acquifero-pompaggio-falda.png`,
                alt: "Sezione del sottosuolo con zona insatura, falda, acquifero, pozzo e abbassamento locale del livello dell'acqua dovuto al pompaggio",
                caption:
                    "Il diagramma mostra il rapporto tra ricarica dell'acquifero, livello della falda e prelievo attraverso un pozzo.",
            },
        ],
    },

    {
        id: 72,
        area: "cultura-matematico-scientifica",
        category: "scienze-della-terra-atmosfera",
        difficulty: 3,
        question:
            "Per quale motivo, in condizioni ordinarie, la pressione atmosferica tende a diminuire aumentando l'altitudine?",
        answers: [
            {
                id: "A",
                text: "Perché in alta quota la gravità scompare completamente.",
                correct: false,
                explanation:
                    "La gravità è ancora presente anche alle quote raggiunte normalmente sulla superficie terrestre. Non è la sua scomparsa a spiegare la diminuzione della pressione.",
            },
            {
                id: "B",
                text: "Perché l'ossigeno diventa l'unico gas presente nell'atmosfera.",
                correct: false,
                explanation:
                    "La composizione relativa dell'aria non cambia in questo modo alle normali quote troposferiche. La pressione riguarda il peso complessivo della colonna d'aria sovrastante.",
            },
            {
                id: "C",
                text: "Perché sopra un punto posto più in alto c'è una minore quantità di atmosfera che contribuisce con il proprio peso alla pressione.",
                correct: true,
                explanation:
                    "La pressione atmosferica è collegata al peso della colonna d'aria sovrastante. Salendo di quota rimane meno aria sopra l'osservatore e la densità atmosferica tende anch'essa a diminuire, perciò la pressione diventa inferiore.",
            },
            {
                id: "D",
                text: "Perché l'aria in alta quota non possiede massa.",
                correct: false,
                explanation:
                    "Le molecole dell'aria mantengono la propria massa anche in alta quota. È la quantità di aria sovrastante e la sua densità a diminuire, non la massa delle singole molecole.",
            },
        ],
    },

    {
        id: 73,
        area: "cultura-matematico-scientifica",
        category: "chimica-soluzioni",
        difficulty: 3,
        question:
            "Una soluzione viene preparata sciogliendo 15 g di sale in 135 g di acqua. Qual è la percentuale in massa del sale nella soluzione?",
        answers: [
            {
                id: "A",
                text: "11,1%",
                correct: false,
                explanation:
                    "11,1% deriva approssimativamente dal rapporto 15/135, cioè soluto diviso solvente. La percentuale in massa utilizza invece al denominatore la massa totale della soluzione.",
            },
            {
                id: "B",
                text: "10%",
                correct: true,
                explanation:
                    "La massa totale della soluzione è 15+135=150 g. La percentuale in massa del sale è quindi (15/150)×100=10%.",
            },
            {
                id: "C",
                text: "15%",
                correct: false,
                explanation:
                    "Il fatto che siano presenti 15 g di sale non significa che la concentrazione sia automaticamente del 15%. La percentuale dipende dal rapporto tra massa del soluto e massa totale della soluzione.",
            },
            {
                id: "D",
                text: "90%",
                correct: false,
                explanation:
                    "90% corrisponde invece alla percentuale in massa dell'acqua: 135/150×100=90%. Sale e acqua costituiscono rispettivamente il 10% e il 90% della massa complessiva.",
            },
        ],
    },

    {
        id: 74,
        area: "cultura-matematico-scientifica",
        category: "chimica-miscele",
        difficulty: 4,
        question:
            "Una miscela contiene limatura di ferro, sabbia insolubile in acqua e sale da cucina solubile in acqua. Quale sequenza permette di separare correttamente i tre componenti sfruttando proprietà fisiche?",
        answers: [
            {
                id: "A",
                text: "Sciogliere tutto nell'acqua e poi utilizzare soltanto un filtro per ottenere separatamente tutti e tre i componenti.",
                correct: false,
                explanation:
                    "Il filtro potrebbe trattenere la sabbia, ma il sale disciolto attraverserebbe il filtro insieme all'acqua. Inoltre la limatura di ferro non viene separata selettivamente con questa sola procedura.",
            },
            {
                id: "B",
                text: "Riscaldare la miscela fino a trasformare tutti i componenti in gas e raccoglierli nello stesso recipiente.",
                correct: false,
                explanation:
                    "Non è necessario ricorrere a trasformazioni così drastiche e alcuni componenti non vaporizzerebbero semplicemente nelle condizioni ordinarie. La miscela può essere separata sfruttando magnetismo, solubilità e differenze di stato.",
            },
            {
                id: "C",
                text: "Aggiungere acqua e far evaporare immediatamente tutto senza separare prima i solidi insolubili.",
                correct: false,
                explanation:
                    "Alla fine si otterrebbe nuovamente una miscela di sale e materiali insolubili. Per recuperare separatamente ciascun componente occorre effettuare passaggi selettivi prima dell'evaporazione.",
            },
            {
                id: "D",
                text: "Rimuovere il ferro con una calamita; aggiungere acqua per sciogliere il sale; filtrare la sabbia; evaporare l'acqua per recuperare il sale.",
                correct: true,
                explanation:
                    "La calamita sfrutta le proprietà magnetiche del ferro. L'acqua dissolve il sale ma non la sabbia, che può essere trattenuta per filtrazione; infine l'evaporazione dell'acqua permette di recuperare il sale disciolto.",
            },
        ],
    },

    {
        id: 75,
        area: "cultura-matematico-scientifica",
        category: "fisica-termodinamica",
        difficulty: 4,
        question:
            "A pressione costante, un recipiente contiene ghiaccio e acqua in equilibrio alla temperatura di fusione. Continuando a fornire calore mentre è ancora presente del ghiaccio, che cosa accade idealmente?",
        answers: [
            {
                id: "A",
                text: "La temperatura rimane circa costante mentre l'energia fornita viene utilizzata per la fusione del ghiaccio.",
                correct: true,
                explanation:
                    "Durante il cambiamento di fase, l'energia assorbita serve principalmente a modificare l'organizzazione microscopica della sostanza invece di aumentare la temperatura. Solo dopo la completa fusione, ulteriore calore farà aumentare la temperatura dell'acqua.",
            },
            {
                id: "B",
                text: "La temperatura aumenta immediatamente di un grado per ogni quantità fissa di ghiaccio che fonde.",
                correct: false,
                explanation:
                    "Durante la fusione di una sostanza pura a pressione costante la temperatura rimane approssimativamente al valore di fusione finché coesistono le due fasi. Il calore fornito è calore latente.",
            },
            {
                id: "C",
                text: "La temperatura diminuisce perché la fusione produce spontaneamente freddo.",
                correct: false,
                explanation:
                    "La fusione richiede assorbimento di energia e non genera una diminuzione obbligatoria della temperatura della miscela in equilibrio. Il sistema resta al punto di fusione finché il passaggio di fase continua.",
            },
            {
                id: "D",
                text: "Il ghiaccio non può fondere finché la temperatura dell'intera miscela non supera di molti gradi il punto di fusione.",
                correct: false,
                explanation:
                    "Il passaggio di fase avviene proprio alla temperatura di fusione nelle condizioni considerate. Non è necessario surriscaldare di molti gradi la miscela prima che il ghiaccio inizi a trasformarsi in acqua.",
            },
        ],
        resources: [
            {
                id: "curva-riscaldamento-fusione",
                type: "diagram",
                label: "Curva di riscaldamento durante la fusione",
                src: `${import.meta.env.BASE_URL}resources/diagrams/curva-riscaldamento-fusione-ghiaccio.png`,
                alt: "Grafico temperatura in funzione del calore fornito con un tratto orizzontale durante la fusione del ghiaccio",
                caption:
                    "Il tratto a temperatura costante rappresenta l'energia assorbita durante il cambiamento di fase.",
            },
        ],
    },

    {
        id: 76,
        area: "cultura-matematico-scientifica",
        category: "fisica-onde",
        difficulty: 4,
        question:
            "Un'onda si propaga con velocità di 340 m/s e ha frequenza 170 Hz. Qual è la sua lunghezza d'onda?",
        answers: [
            {
                id: "A",
                text: "0,5 m",
                correct: false,
                explanation:
                    "0,5 m non soddisfa la relazione v=fλ: 170×0,5=85 m/s. A velocità e frequenza note, la lunghezza d'onda si ottiene dividendo v per f.",
            },
            {
                id: "B",
                text: "170 m",
                correct: false,
                explanation:
                    "La frequenza espressa in hertz non coincide numericamente con la lunghezza d'onda. Le due grandezze hanno inoltre unità differenti.",
            },
            {
                id: "C",
                text: "2 m",
                correct: true,
                explanation:
                    "Per un'onda vale v=fλ. Risolvendo rispetto alla lunghezza d'onda si ottiene λ=v/f=340/170=2 m.",
            },
            {
                id: "D",
                text: "57.800 m",
                correct: false,
                explanation:
                    "57.800 deriva dal prodotto 340×170, ma la formula richiede v=fλ. Per ricavare λ bisogna quindi dividere la velocità per la frequenza, non moltiplicarle.",
            },
        ],
    },

    {
        id: 77,
        area: "cultura-matematico-scientifica",
        category: "fisica-magnetismo",
        difficulty: 4,
        question:
            "Una bobina percorsa da corrente genera un campo magnetico. Quale modifica permette di invertire i poli nord e sud prodotti dalla bobina mantenendone invariata la geometria?",
        answers: [
            {
                id: "A",
                text: "Aumentare soltanto il numero di spire senza modificare il verso della corrente.",
                correct: false,
                explanation:
                    "Aumentare il numero di spire può modificare l'intensità del campo magnetico, ma non ne inverte automaticamente l'orientamento. La polarità dipende dal verso della corrente nella bobina.",
            },
            {
                id: "B",
                text: "Invertire il verso della corrente elettrica nella bobina.",
                correct: true,
                explanation:
                    "Il verso del campo magnetico prodotto da una bobina dipende dal verso della corrente. Invertendo la corrente si inverte il campo e quindi si scambiano le posizioni dei poli magnetici.",
            },
            {
                id: "C",
                text: "Raddoppiare la lunghezza del filo mantenendo identici verso della corrente e disposizione delle spire.",
                correct: false,
                explanation:
                    "Una variazione geometrica può modificare l'intensità o la distribuzione del campo, ma non costituisce il principio necessario per invertire la polarità. Il cambiamento decisivo è l'inversione della corrente.",
            },
            {
                id: "D",
                text: "Aumentare la temperatura della bobina mantenendo invariata la corrente.",
                correct: false,
                explanation:
                    "La temperatura può influenzare la resistenza elettrica del filo e quindi, indirettamente, l'intensità della corrente. Non è però il meccanismo che determina l'inversione dei poli.",
            },
        ],
        resources: [
            {
                id: "bobina-verso-corrente-campo",
                type: "diagram",
                label: "Corrente e polarità di una bobina",
                src: `${import.meta.env.BASE_URL}resources/diagrams/bobina-corrente-poli-magnetici.png`,
                alt: "Due bobine identiche con corrente nei versi opposti e poli nord e sud invertiti",
                caption:
                    "Lo schema mostra che invertendo il verso della corrente si inverte anche l'orientamento del campo magnetico.",
            },
        ],
    },

    {
        id: 78,
        area: "cultura-matematico-scientifica",
        category: "fisica-grandezze",
        difficulty: 3,
        question:
            "Un campione omogeneo ha massa 540 g e volume 200 cm³. Qual è la sua densità?",
        answers: [
            {
                id: "A",
                text: "0,37 g/cm³",
                correct: false,
                explanation:
                    "Questo valore è vicino al rapporto inverso volume/massa, 200/540. La densità è invece definita come massa divisa per volume.",
            },
            {
                id: "B",
                text: "1,7 g/cm³",
                correct: false,
                explanation:
                    "Il valore non deriva dal rapporto corretto tra le due grandezze fornite. È necessario utilizzare ρ=m/V con le unità coerenti.",
            },
            {
                id: "C",
                text: "108.000 g/cm³",
                correct: false,
                explanation:
                    "108.000 deriva dal prodotto 540×200, ma la densità non è un prodotto. Esprime quanta massa è contenuta in una determinata unità di volume.",
            },
            {
                id: "D",
                text: "2,7 g/cm³",
                correct: true,
                explanation:
                    "La densità è definita dal rapporto ρ=m/V. Inserendo i dati si ottiene 540 g / 200 cm³ = 2,7 g/cm³.",
            },
        ],
    },

    {
        id: 79,
        area: "cultura-matematico-scientifica",
        category: "astronomia",
        difficulty: 4,
        question:
            "Perché dalla Terra osserviamo approssimativamente sempre lo stesso emisfero della Luna?",
        answers: [
            {
                id: "A",
                text: "Perché la Luna ruota sul proprio asse nello stesso tempo in cui compie una rivoluzione attorno alla Terra.",
                correct: true,
                explanation:
                    "La Luna è in rotazione sincrona: mentre percorre un'orbita attorno alla Terra compie anche circa una rotazione sul proprio asse. Questa sincronizzazione mantiene approssimativamente lo stesso emisfero rivolto verso il nostro pianeta.",
            },
            {
                id: "B",
                text: "Perché la Luna non ruota affatto sul proprio asse.",
                correct: false,
                explanation:
                    "Se la Luna non ruotasse sul proprio asse, durante una rivoluzione vedremmo progressivamente tutti i suoi lati. Proprio la sua rotazione sincronizzata con il moto orbitale produce l'effetto osservato.",
            },
            {
                id: "C",
                text: "Perché soltanto metà della superficie lunare viene mai illuminata dal Sole.",
                correct: false,
                explanation:
                    "In momenti diversi quasi tutta la superficie lunare riceve luce solare. Il cosiddetto lato lontano non è permanentemente buio: la questione riguarda l'orientamento rispetto alla Terra, non l'illuminazione.",
            },
            {
                id: "D",
                text: "Perché l'atmosfera terrestre nasconde continuamente metà della Luna.",
                correct: false,
                explanation:
                    "L'atmosfera terrestre può influire sulla qualità delle osservazioni, ma non determina quale emisfero lunare è rivolto verso di noi. La causa è il rapporto tra rotazione e rivoluzione della Luna.",
            },
        ],
        resources: [
            {
                id: "rotazione-sincrona-luna",
                type: "diagram",
                label: "Rotazione sincrona della Luna",
                src: `${import.meta.env.BASE_URL}resources/diagrams/rotazione-sincrona-luna.png`,
                alt: "Schema della Luna in diverse posizioni lungo l'orbita terrestre mostrando che ruota su se stessa mantenendo lo stesso emisfero rivolto verso la Terra",
                caption:
                    "Il diagramma permette di confrontare il moto orbitale della Luna con la sua rotazione sul proprio asse.",
            },
        ],
    },

    {
        id: 80,
        area: "cultura-matematico-scientifica",
        category: "fisica-termologia",
        difficulty: 3,
        question:
            "Un cucchiaio metallico viene lasciato con un'estremità immersa in una bevanda molto calda. Dopo qualche tempo anche il manico diventa caldo. Quale meccanismo trasferisce principalmente energia lungo il cucchiaio?",
        answers: [
            {
                id: "A",
                text: "Convezione del metallo, perché porzioni solide del cucchiaio si spostano dal liquido caldo verso il manico.",
                correct: false,
                explanation:
                    "Nella convezione è il moto macroscopico di un fluido a trasportare energia. Il metallo del cucchiaio rimane invece sostanzialmente nella propria posizione mentre l'energia si propaga al suo interno.",
            },
            {
                id: "B",
                text: "Evaporazione del metallo, che trasporta materiale caldo verso l'altra estremità.",
                correct: false,
                explanation:
                    "Alle temperature di una normale bevanda il cucchiaio metallico non evapora. Il riscaldamento del manico non richiede alcun trasferimento macroscopico di metallo.",
            },
            {
                id: "C",
                text: "Conduzione termica attraverso il materiale del cucchiaio.",
                correct: true,
                explanation:
                    "La conduzione trasferisce energia tra regioni a temperatura diversa all'interno di un materiale senza trasporto macroscopico di materia. I metalli sono generalmente buoni conduttori termici, quindi il calore si propaga dall'estremità immersa verso il manico.",
            },
            {
                id: "D",
                text: "Soltanto irraggiamento, perché il contatto diretto impedisce la conduzione.",
                correct: false,
                explanation:
                    "L'irraggiamento può contribuire agli scambi termici nell'ambiente, ma non è il meccanismo principale lungo il corpo del cucchiaio. Il contatto tra le diverse parti del solido favorisce proprio la conduzione.",
            },
        ],
    },
];

export default simulation03;
