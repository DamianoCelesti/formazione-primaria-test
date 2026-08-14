const passages = {
    passage01: `Quando si parla di studio efficace, si tende spesso a contrapporre due strategie come se fossero incompatibili: comprendere e memorizzare. La prima viene associata a uno studio profondo e intelligente; la seconda, invece, viene talvolta descritta come un'attività meccanica. Questa opposizione è però fuorviante. Comprendere un concetto senza riuscire a richiamarlo quando serve limita la possibilità di utilizzarlo; ricordare una definizione senza comprenderne le relazioni con altri concetti produce una conoscenza fragile.

Il punto non è quindi scegliere tra comprensione e memoria, ma comprendere come possano sostenersi reciprocamente. Quando uno studente prova a ricostruire un argomento senza guardare gli appunti, per esempio, non sta soltanto verificando ciò che ricorda: deve anche organizzare le informazioni, riconoscere i collegamenti mancanti e distinguere ciò che sa con sicurezza da ciò che sta soltanto intuendo. Il recupero dalla memoria diventa così anche uno strumento per individuare lacune nella comprensione.

Ciò non significa che ogni forma di ripetizione sia efficace. Rileggere molte volte una pagina può aumentare la familiarità con le parole senza garantire che il contenuto sia realmente disponibile quando il testo non è più davanti agli occhi. La sensazione di riconoscere un'informazione, infatti, non coincide necessariamente con la capacità di richiamarla e utilizzarla autonomamente. Per questo un metodo di studio efficace dovrebbe alternare momenti di elaborazione, recupero attivo e controllo degli errori, invece di affidarsi a un'unica tecnica.`,

    passage02: `Nelle città congestionate, l'ampliamento di una strada può sembrare la soluzione più immediata: se molte automobili devono attraversare uno spazio insufficiente, aumentare lo spazio disponibile dovrebbe ridurre il traffico. Nel breve periodo ciò può effettivamente accadere. Tuttavia, quando un percorso diventa più rapido, alcune persone che prima sceglievano altri orari, altri itinerari o altri mezzi possono decidere di utilizzare proprio quella strada. Nel tempo, quindi, una parte della capacità aggiuntiva può essere assorbita da nuovi spostamenti in automobile.

Questo fenomeno non implica che costruire o ampliare una strada sia sempre inutile. In alcuni contesti un intervento infrastrutturale può eliminare un punto particolarmente critico, migliorare la sicurezza o collegare aree precedentemente isolate. Significa piuttosto che la valutazione non dovrebbe fermarsi alla domanda: "quante corsie sono disponibili?". Occorre osservare come cambiano i comportamenti delle persone e come l'intervento si inserisce nell'intero sistema dei trasporti.

Lo stesso vale, in senso opposto, per le politiche che favoriscono il trasporto pubblico, gli spostamenti a piedi o in bicicletta. La presenza di una pista ciclabile, considerata isolatamente, dice poco sulla sua utilità reale: contano la continuità del percorso, la connessione con le destinazioni, la sicurezza agli incroci e l'integrazione con altri mezzi. Una rete di trasporto, dunque, non può essere valutata semplicemente sommando le sue infrastrutture; bisogna considerare le relazioni che esse producono tra comportamenti, percorsi e possibilità di scelta.`,

    passage03: `La digitalizzazione degli archivi ha trasformato profondamente il lavoro di chi studia documenti storici. Consultare a distanza migliaia di pagine che un tempo richiedevano lunghi spostamenti rappresenta un vantaggio evidente. Inoltre, la possibilità di effettuare ricerche automatiche all'interno di grandi raccolte consente di individuare ricorrenze, nomi e formule linguistiche che una lettura esclusivamente manuale potrebbe non mettere facilmente in evidenza.

Questi vantaggi non eliminano però la necessità di comprendere come l'archivio sia stato costruito. Una raccolta digitale può contenere soltanto una parte dei documenti conservati fisicamente; alcuni materiali possono essere esclusi perché fragili, difficili da riprodurre o semplicemente non ancora digitalizzati. Anche i sistemi automatici di riconoscimento del testo possono introdurre errori, soprattutto quando lavorano su manoscritti, caratteri tipografici antichi o pagine deteriorate.

Per questo l'assenza di una parola nei risultati di una ricerca digitale non dimostra automaticamente che quella parola non compaia nei documenti originali. Potrebbe essere realmente assente, ma potrebbe anche trovarsi in un documento non digitalizzato oppure essere stata letta in modo errato dal sistema informatico. Gli strumenti digitali ampliano quindi enormemente le possibilità della ricerca, purché i risultati vengano interpretati alla luce dei limiti dello strumento utilizzato.`,
};

const simulation01 = [
    {
        id: 1,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 4,
        passage: passages.passage01,
        question:
            "Quale formulazione esprime meglio la tesi complessiva sostenuta nel brano?",
        answers: [
            {
                id: "A",
                text: "La comprensione è superiore alla memoria e dovrebbe progressivamente sostituirla nello studio.",
                correct: false,
                explanation:
                    "Il brano critica proprio la contrapposizione tra comprensione e memoria. Comprendere senza riuscire a richiamare le informazioni viene presentato come un limite, così come ricordare senza comprendere: nessuna delle due capacità può semplicemente sostituire l'altra.",
            },
            {
                id: "B",
                text: "Uno studio efficace integra comprensione e memoria, utilizzando anche il recupero attivo per verificare conoscenze e individuare lacune.",
                correct: true,
                explanation:
                    "È la tesi che collega tutti e tre i paragrafi: comprensione e memoria devono sostenersi reciprocamente. Il testo attribuisce particolare valore al recupero attivo perché non serve soltanto a ricordare, ma permette anche di verificare l'organizzazione delle conoscenze e di scoprire ciò che non è stato compreso pienamente.",
            },
            {
                id: "C",
                text: "La rilettura ripetuta è inefficace in qualsiasi situazione e dovrebbe essere completamente eliminata.",
                correct: false,
                explanation:
                    "Il testo afferma che la rilettura può produrre familiarità senza garantire il richiamo autonomo, ma non sostiene che sia sempre inutile. La critica riguarda l'affidarsi esclusivamente alla rilettura come prova dell'apprendimento.",
            },
            {
                id: "D",
                text: "La memoria è una capacità prevalentemente meccanica che non contribuisce alla comprensione dei concetti.",
                correct: false,
                explanation:
                    "Il secondo paragrafo mostra esattamente il contrario: tentare di recuperare informazioni dalla memoria può costringere lo studente a ricostruire collegamenti e a individuare lacune concettuali. La memoria viene quindi presentata anche come strumento al servizio della comprensione.",
            },
        ],
    },

    {
        id: 2,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 4,
        passage: passages.passage01,
        question:
            "Quale funzione svolge l'esempio dello studente che prova a ricostruire un argomento senza consultare gli appunti?",
        answers: [
            {
                id: "A",
                text: "Dimostra che gli appunti ostacolano normalmente la comprensione e dovrebbero essere evitati.",
                correct: false,
                explanation:
                    "Il testo non attribuisce agli appunti un effetto negativo generale. L'esempio richiede soltanto di non consultarli temporaneamente per verificare ciò che si è in grado di recuperare autonomamente.",
            },
            {
                id: "B",
                text: "Mostra concretamente come il recupero dalla memoria possa verificare sia il ricordo sia l'organizzazione della comprensione.",
                correct: true,
                explanation:
                    "L'esempio traduce in una situazione concreta la tesi del paragrafo: tentando di ricostruire un argomento, lo studente deve ricordare informazioni ma anche organizzarle e riconoscere collegamenti mancanti. Il recupero attivo diventa quindi contemporaneamente prova di memoria e strumento di controllo della comprensione.",
            },
            {
                id: "C",
                text: "Serve a dimostrare che un argomento è stato compreso soltanto se può essere ripetuto parola per parola.",
                correct: false,
                explanation:
                    "Il brano parla di ricostruire e organizzare un argomento, non di riprodurlo letteralmente. Una ripetizione verbatim potrebbe perfino indicare memorizzazione senza necessariamente dimostrare comprensione delle relazioni concettuali.",
            },
            {
                id: "D",
                text: "Introduce un'eccezione alla tesi principale, perché mostra un caso in cui memoria e comprensione entrano in conflitto.",
                correct: false,
                explanation:
                    "L'esempio non costituisce un'eccezione, ma rafforza la tesi principale. Mostra infatti una situazione in cui memoria e comprensione operano insieme anziché entrare in conflitto.",
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
            "Quale conclusione si può ragionevolmente inferire dall'ultimo paragrafo?",
        answers: [
            {
                id: "A",
                text: "Riconoscere facilmente un'informazione durante la rilettura non garantisce di saperla recuperare senza aiuti.",
                correct: true,
                explanation:
                    "Il testo distingue esplicitamente la familiarità prodotta dalla rilettura dalla capacità di richiamare autonomamente un contenuto. Ne segue che la sensazione di conoscere qualcosa mentre lo si vede non è una prova sufficiente della capacità di ricordarlo in sua assenza.",
            },
            {
                id: "B",
                text: "Se un'informazione appare familiare, significa che è stata necessariamente compresa in profondità.",
                correct: false,
                explanation:
                    "Il brano mette in guardia proprio da questa equivalenza. La familiarità può nascere dalla ripetuta esposizione alle stesse parole senza garantire né richiamo autonomo né comprensione profonda.",
            },
            {
                id: "C",
                text: "Il recupero dalla memoria è utile esclusivamente negli ultimi giorni prima di un esame.",
                correct: false,
                explanation:
                    "Nel testo non compare alcun limite temporale di questo tipo. Il recupero attivo è descritto come componente generale di un metodo di studio efficace.",
            },
            {
                id: "D",
                text: "Più volte si legge una pagina, maggiore è necessariamente la capacità di applicarne i concetti.",
                correct: false,
                explanation:
                    "La rilettura può aumentare la familiarità, ma il testo nega che questo garantisca automaticamente disponibilità e uso autonomo delle conoscenze. Applicare un concetto richiede qualcosa di più della semplice esposizione ripetuta.",
            },
        ],
    },

    {
        id: 4,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 4,
        passage: passages.passage01,
        question:
            "Nel terzo paragrafo, che cosa indica precisamente l'espressione «questa sensazione» implicata dal riferimento alla familiarità?",
        answers: [
            {
                id: "A",
                text: "La convinzione di aver dimenticato completamente ciò che si è studiato.",
                correct: false,
                explanation:
                    "Il passaggio descrive il fenomeno opposto: durante la rilettura il contenuto appare noto e facilmente riconoscibile. Il rischio consiste proprio nello scambiare questa familiarità per una conoscenza realmente recuperabile.",
            },
            {
                id: "B",
                text: "La percezione che un contenuto sia conosciuto perché appare familiare mentre lo si rilegge.",
                correct: true,
                explanation:
                    "Il referente concettuale è la familiarità prodotta dall'esposizione ripetuta al testo. Il brano avverte che questa percezione soggettiva può essere ingannevole, perché riconoscimento e richiamo autonomo sono processi differenti.",
            },
            {
                id: "C",
                text: "La difficoltà di comprendere un testo quando contiene parole sconosciute.",
                correct: false,
                explanation:
                    "Il problema del lessico sconosciuto non viene affrontato nel passaggio. La questione riguarda la differenza tra riconoscere informazioni già viste e riuscire a recuperarle autonomamente.",
            },
            {
                id: "D",
                text: "La fatica fisica provocata da sessioni di studio troppo lunghe.",
                correct: false,
                explanation:
                    "Il testo non affronta affaticamento o durata delle sessioni di studio. Il discorso resta concentrato sui processi cognitivi di comprensione, familiarità e recupero.",
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
            "Qual è la funzione del primo paragrafo rispetto alla tesi sviluppata nel resto del brano?",
        answers: [
            {
                id: "A",
                text: "Presenta un ragionamento intuitivo sull'ampliamento delle strade e ne mostra un possibile limite dovuto al cambiamento dei comportamenti.",
                correct: true,
                explanation:
                    "Il paragrafo parte dall'idea intuitiva secondo cui più spazio dovrebbe produrre meno congestione, ma introduce poi la possibilità che tempi di percorrenza migliori attirino nuovi spostamenti in automobile. In questo modo prepara la tesi più generale secondo cui le infrastrutture vanno valutate considerando le reazioni dell'intero sistema.",
            },
            {
                id: "B",
                text: "Dimostra definitivamente che ogni nuova strada provoca più traffico di quello esistente prima della costruzione.",
                correct: false,
                explanation:
                    "Il testo usa formulazioni probabilistiche: una parte della capacità aggiuntiva «può» essere assorbita da nuovi spostamenti. Inoltre il secondo paragrafo precisa esplicitamente che ampliare una strada non è sempre inutile.",
            },
            {
                id: "C",
                text: "Descrive esclusivamente un problema economico legato al costo di costruzione delle infrastrutture.",
                correct: false,
                explanation:
                    "Nel paragrafo non vengono discussi costi economici. L'attenzione è rivolta al rapporto tra capacità stradale, tempi di percorrenza e comportamento degli utenti.",
            },
            {
                id: "D",
                text: "Introduce il trasporto pubblico come unica soluzione possibile alla congestione urbana.",
                correct: false,
                explanation:
                    "Il trasporto pubblico viene menzionato soltanto nel terzo paragrafo insieme agli spostamenti a piedi e in bicicletta. Il brano non propone una soluzione unica, ma invita a valutare il sistema nel suo complesso.",
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
            "Quale delle seguenti affermazioni NON è sostenuta dal brano?",
        answers: [
            {
                id: "A",
                text: "Un intervento stradale può essere utile anche per ragioni diverse dalla riduzione immediata della congestione.",
                correct: false,
                explanation:
                    "Il secondo paragrafo cita esplicitamente possibili benefici come eliminare un punto critico, migliorare la sicurezza o collegare aree isolate. Questa affermazione è quindi pienamente coerente con il testo.",
            },
            {
                id: "B",
                text: "La quantità di infrastrutture presenti è sufficiente, da sola, per misurare la qualità di una rete di trasporto.",
                correct: true,
                explanation:
                    "È precisamente la posizione che il brano rifiuta. L'ultimo paragrafo afferma che una rete non può essere valutata semplicemente sommando le infrastrutture, perché contano continuità, connessioni, sicurezza e conseguenze sui comportamenti.",
            },
            {
                id: "C",
                text: "Il miglioramento di un percorso può modificare le scelte di alcune persone riguardo a itinerario, orario o mezzo utilizzato.",
                correct: false,
                explanation:
                    "È il meccanismo descritto nel primo paragrafo. Quando una strada diventa più conveniente, utenti che prima compivano scelte diverse possono essere incentivati a utilizzarla.",
            },
            {
                id: "D",
                text: "Una pista ciclabile isolata può risultare poco utile se non è collegata efficacemente alle destinazioni e al resto della rete.",
                correct: false,
                explanation:
                    "Il terzo paragrafo usa proprio la pista ciclabile per mostrare che la presenza materiale dell'infrastruttura non basta. Continuità, connessioni e sicurezza ne determinano in buona parte l'utilità reale.",
            },
        ],
    },

    {
        id: 7,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 5,
        passage: passages.passage02,
        question:
            "Quale principio generale può essere dedotto dagli esempi della strada ampliata e della pista ciclabile?",
        answers: [
            {
                id: "A",
                text: "L'effetto di un'infrastruttura dipende anche dalle interazioni con il comportamento degli utenti e con gli altri elementi della rete.",
                correct: true,
                explanation:
                    "Entrambi gli esempi mostrano che non basta osservare l'infrastruttura isolatamente: una strada può modificare la domanda di mobilità e una pista ciclabile può funzionare diversamente in base alle connessioni disponibili. Il principio generale è quindi sistemico: gli effetti dipendono dalle relazioni tra infrastrutture, comportamenti e alternative.",
            },
            {
                id: "B",
                text: "Ogni infrastruttura produce inevitabilmente effetti opposti rispetto a quelli per cui è stata progettata.",
                correct: false,
                explanation:
                    "Il testo non sostiene un paradosso universale di questo tipo. Ammette anzi che gli interventi possano raggiungere obiettivi utili, purché vengano valutati nel contesto complessivo.",
            },
            {
                id: "C",
                text: "Le infrastrutture più costose sono generalmente quelle che modificano maggiormente le abitudini degli utenti.",
                correct: false,
                explanation:
                    "Il costo degli interventi non viene mai utilizzato come variabile esplicativa. Il cambiamento dei comportamenti viene collegato soprattutto a convenienza, accessibilità, continuità e possibilità di scelta.",
            },
            {
                id: "D",
                text: "Una rete efficiente deve necessariamente ridurre il numero totale degli spostamenti effettuati dalle persone.",
                correct: false,
                explanation:
                    "Il testo non indica la riduzione del numero complessivo degli spostamenti come obiettivo generale. Si concentra invece sulle modalità con cui gli spostamenti vengono distribuiti tra percorsi e mezzi diversi.",
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
            "Quale vantaggio della digitalizzazione viene indicato esplicitamente nel primo paragrafo?",
        answers: [
            {
                id: "A",
                text: "Garantisce che tutti i documenti conservati fisicamente siano disponibili anche online.",
                correct: false,
                explanation:
                    "Il secondo paragrafo precisa proprio che una raccolta digitale può includere solo una parte del patrimonio fisico. La digitalizzazione amplia l'accesso, ma non implica completezza automatica.",
            },
            {
                id: "B",
                text: "Permette di consultare grandi quantità di documenti a distanza e di cercare automaticamente ricorrenze all'interno delle raccolte.",
                correct: true,
                explanation:
                    "Il primo paragrafo presenta entrambi i vantaggi: ridurre la necessità di spostamenti fisici e utilizzare ricerche automatiche per individuare nomi, formule o ricorrenze. Sono possibilità che possono ampliare notevolmente il lavoro dello studioso.",
            },
            {
                id: "C",
                text: "Elimina la necessità di interpretare i documenti perché i risultati vengono prodotti automaticamente.",
                correct: false,
                explanation:
                    "L'intero brano insiste sulla necessità di interpretare criticamente i risultati digitali. L'automazione facilita la ricerca, ma non sostituisce la valutazione dello studioso.",
            },
            {
                id: "D",
                text: "Rende impossibili gli errori di trascrizione presenti nei documenti antichi.",
                correct: false,
                explanation:
                    "Il secondo paragrafo segnala esplicitamente che i sistemi di riconoscimento automatico possono introdurre errori. Manoscritti, caratteri antichi e pagine danneggiate possono rendere il riconoscimento particolarmente difficile.",
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
            "Perché, secondo il brano, l'assenza di una parola dai risultati di ricerca non dimostra necessariamente che essa sia assente dai documenti originali?",
        answers: [
            {
                id: "A",
                text: "Perché i documenti storici utilizzano sempre sinonimi al posto delle parole cercate dagli studiosi moderni.",
                correct: false,
                explanation:
                    "Il testo non afferma che nei documenti storici vengano sempre utilizzati sinonimi. Il problema riguarda invece la possibile incompletezza della raccolta digitale e gli errori del riconoscimento automatico.",
            },
            {
                id: "B",
                text: "Perché una ricerca digitale restituisce intenzionalmente soltanto una selezione casuale dei risultati trovati.",
                correct: false,
                explanation:
                    "Il brano non descrive alcun meccanismo di selezione casuale dei risultati. La possibilità di falsi negativi deriva dalla costruzione dell'archivio e dai limiti tecnici della lettura automatica.",
            },
            {
                id: "C",
                text: "Perché il documento contenente la parola potrebbe non essere stato digitalizzato oppure il sistema potrebbe non averla riconosciuta correttamente.",
                correct: true,
                explanation:
                    "Sono precisamente le due possibilità indicate nell'ultimo paragrafo. Un risultato negativo deve quindi essere interpretato con cautela: può riflettere un'assenza reale, ma anche un limite della raccolta o del sistema di riconoscimento.",
            },
            {
                id: "D",
                text: "Perché le parole presenti nei documenti digitalizzati vengono normalmente eliminate dopo la prima ricerca.",
                correct: false,
                explanation:
                    "Una ricerca non modifica o cancella il contenuto dell'archivio. L'alternativa descrive un comportamento che non appartiene ai sistemi di consultazione illustrati nel brano.",
            },
        ],
    },

    {
        id: 10,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 4,
        passage: passages.passage03,
        question:
            "Quale conclusione è maggiormente coerente con lo scopo comunicativo dell'intero brano?",
        answers: [
            {
                id: "A",
                text: "Gli archivi digitali dovrebbero sostituire completamente quelli fisici perché sono più rapidi da consultare.",
                correct: false,
                explanation:
                    "Il testo riconosce i grandi vantaggi della digitalizzazione ma sottolinea anche che il digitale può rappresentare soltanto una parte dell'archivio fisico. Non viene quindi sostenuta la sostituzione completa delle fonti originali.",
            },
            {
                id: "B",
                text: "Gli strumenti digitali sono inutili per la ricerca storica perché possono commettere errori.",
                correct: false,
                explanation:
                    "La conclusione sarebbe eccessivamente negativa e contraria al primo e all'ultimo paragrafo. Gli strumenti digitali vengono descritti come capaci di ampliare enormemente le possibilità di ricerca, purché se ne conoscano i limiti.",
            },
            {
                id: "C",
                text: "L'utilità degli strumenti digitali aumenta quando i loro risultati vengono interpretati conoscendo criteri di selezione e possibili limiti tecnici.",
                correct: true,
                explanation:
                    "È la sintesi dell'argomentazione: accessibilità e ricerca automatica sono vantaggi reali, ma non rendono infallibile l'archivio. Conoscere ciò che è stato digitalizzato e i possibili errori del riconoscimento permette di usare meglio i risultati.",
            },
            {
                id: "D",
                text: "La ricerca storica dovrebbe utilizzare soltanto documenti manoscritti perché quelli stampati sono facilmente interpretati male dai computer.",
                correct: false,
                explanation:
                    "Il testo cita sia manoscritti sia caratteri tipografici antichi come possibili fonti di difficoltà tecnica. Non propone però di limitare la ricerca a un particolare tipo di documento.",
            },
        ],
    },

    {
        id: 11,
        area: "linguistica-logica",
        category: "grammatica-sintassi",
        difficulty: 3,
        question:
            "Quale frase utilizza correttamente il pronome relativo nell'italiano standard?",
        answers: [
            {
                id: "A",
                text: "La ricercatrice che le ho parlato ieri presenterà il progetto.",
                correct: false,
                explanation:
                    "Il verbo «parlare», quando indica la persona con cui si parla, richiede la preposizione «a»: la forma corretta sarebbe «la ricercatrice a cui ho parlato». Il semplice «che» non può svolgere in questo caso la funzione di complemento di termine.",
            },
            {
                id: "B",
                text: "Il progetto di cui abbiamo discusso sarà avviato a settembre.",
                correct: true,
                explanation:
                    "Il verbo «discutere», nel significato di parlare o ragionare su un argomento, può reggere «di». Il pronome relativo «cui», preceduto dalla preposizione necessaria, riprende correttamente «il progetto»: «abbiamo discusso del progetto» diventa «il progetto di cui abbiamo discusso».",
            },
            {
                id: "C",
                text: "Il collega cui gli ho inviato il documento mi ha risposto.",
                correct: false,
                explanation:
                    "«Cui» svolge già la funzione di complemento di termine, equivalente a «al quale». Aggiungere anche «gli» produce una duplicazione dello stesso complemento: è sufficiente dire «il collega cui ho inviato il documento».",
            },
            {
                id: "D",
                text: "La città dove ne sono nato si trova sulla costa.",
                correct: false,
                explanation:
                    "«Dove» indica già il luogo in cui si è nati; il clitico «ne» aggiunge impropriamente un secondo riferimento allo stesso luogo. La costruzione corretta sarebbe semplicemente «la città dove sono nato».",
            },
        ],
    },

    {
        id: 12,
        area: "linguistica-logica",
        category: "grammatica-sintassi",
        difficulty: 4,
        question:
            "Nella frase «Sebbene il percorso fosse più lungo, scegliemmo quella strada affinché tutti potessero raggiungere facilmente la destinazione», quali subordinate sono introdotte rispettivamente da «sebbene» e «affinché»?",
        answers: [
            {
                id: "A",
                text: "Causale e consecutiva.",
                correct: false,
                explanation:
                    "Una causale esprime la ragione di un fatto, mentre una consecutiva ne indica la conseguenza. Qui «sebbene il percorso fosse più lungo» presenta invece una circostanza che non impedisce la scelta, e «affinché» introduce lo scopo perseguito.",
            },
            {
                id: "B",
                text: "Concessiva e finale.",
                correct: true,
                explanation:
                    "«Sebbene» introduce tipicamente una subordinata concessiva: il percorso più lungo avrebbe potuto sconsigliare quella scelta, ma non la impedisce. «Affinché tutti potessero raggiungere...» esprime invece il fine per cui quella strada viene scelta, quindi è una subordinata finale.",
            },
            {
                id: "C",
                text: "Temporale e dichiarativa.",
                correct: false,
                explanation:
                    "Una temporale collocherebbe un evento nel tempo rispetto a un altro, mentre una dichiarativa specificherebbe il contenuto di un elemento della principale. Nessuna delle due funzioni corrisponde ai rapporti logici espressi da «sebbene» e «affinché».",
            },
            {
                id: "D",
                text: "Ipotetica e causale.",
                correct: false,
                explanation:
                    "La subordinata introdotta da «sebbene» non pone una condizione, mentre quella introdotta da «affinché» non fornisce la causa della scelta. Il secondo segmento indica il risultato intenzionalmente perseguito, cioè lo scopo.",
            },
        ],
    },

    {
        id: 13,
        area: "linguistica-logica",
        category: "grammatica-sintassi",
        difficulty: 4,
        question:
            "Quale frase comunica senza ambiguità che tutti i docenti, e non soltanto alcuni, erano già stati informati?",
        answers: [
            {
                id: "A",
                text: "I docenti che erano già stati informati entrarono nell'aula.",
                correct: false,
                explanation:
                    "La relativa senza virgole ha valore restrittivo: individua soltanto i docenti già informati distinguendoli da altri che potrebbero non esserlo. La frase quindi non permette di concludere che tutti i docenti fossero informati.",
            },
            {
                id: "B",
                text: "I docenti, che erano già stati informati, entrarono nell'aula.",
                correct: true,
                explanation:
                    "Le virgole attribuiscono alla relativa un valore esplicativo o appositivo: l'informazione «erano già stati informati» viene riferita all'intero gruppo dei docenti già identificato. La frase comunica quindi che tutti i docenti considerati possiedono quella caratteristica.",
            },
            {
                id: "C",
                text: "I docenti che, erano già stati informati entrarono nell'aula.",
                correct: false,
                explanation:
                    "La virgola separa impropriamente il pronome relativo «che» dal predicato della subordinata. Oltre a essere scorretto dal punto di vista della punteggiatura, il periodo non esprime chiaramente il significato richiesto.",
            },
            {
                id: "D",
                text: "I docenti che erano, già stati informati, entrarono nell'aula.",
                correct: false,
                explanation:
                    "Le virgole spezzano in modo ingiustificato il gruppo verbale «erano già stati informati». La punteggiatura non trasforma correttamente la relativa in un inciso riferito a tutti i docenti.",
            },
        ],
    },

    {
        id: 14,
        area: "linguistica-logica",
        category: "lessico-semantica",
        difficulty: 3,
        question:
            "Nella frase «Le nuove prove corroborano l'ipotesi iniziale, ma non sono sufficienti a dimostrarla definitivamente», quale significato assume il verbo «corroborare»?",
        answers: [
            {
                id: "A",
                text: "Confutare mostrando che un'ipotesi è falsa.",
                correct: false,
                explanation:
                    "«Confutare» significa fornire argomenti o prove contro una tesi, mentre «corroborare» ha orientamento opposto. Nel periodo le nuove prove rendono l'ipotesi più sostenibile, pur senza trasformarla in una conclusione definitiva.",
            },
            {
                id: "B",
                text: "Rafforzare o fornire ulteriore sostegno a un'ipotesi.",
                correct: true,
                explanation:
                    "«Corroborare» significa rafforzare una tesi, un'ipotesi o una testimonianza mediante ulteriori elementi a favore. La seconda parte della frase precisa però che un sostegno maggiore non equivale necessariamente a una dimostrazione conclusiva.",
            },
            {
                id: "C",
                text: "Sostituire un'ipotesi con una teoria completamente diversa.",
                correct: false,
                explanation:
                    "Il verbo non implica sostituzione. Al contrario, nel contesto l'ipotesi iniziale viene mantenuta e riceve nuovo sostegno dalle prove raccolte.",
            },
            {
                id: "D",
                text: "Formulare per la prima volta un'ipotesi ancora priva di prove.",
                correct: false,
                explanation:
                    "La frase parla di un'«ipotesi iniziale» già esistente e di nuove prove che intervengono successivamente. «Corroborare» riguarda quindi il rafforzamento di qualcosa già formulato, non la sua prima elaborazione.",
            },
        ],
    },

    {
        id: 15,
        area: "linguistica-logica",
        category: "figure-retoriche",
        difficulty: 2,
        question:
            "Nell'espressione «Ho aspettato un'eternità prima che arrivasse l'autobus», quale figura retorica è utilizzata principalmente?",
        answers: [
            {
                id: "A",
                text: "Metonimia.",
                correct: false,
                explanation:
                    "La metonimia sostituisce un termine con un altro legato da una relazione logica o di contiguità, come l'autore per l'opera. Nell'espressione non avviene una sostituzione di questo tipo.",
            },
            {
                id: "B",
                text: "Iperbole.",
                correct: true,
                explanation:
                    "L'attesa reale non può essere durata letteralmente un'eternità: il tempo viene volutamente esagerato per comunicare la percezione di un'attesa molto lunga. Questa amplificazione intenzionale è caratteristica dell'iperbole.",
            },
            {
                id: "C",
                text: "Ossimoro.",
                correct: false,
                explanation:
                    "L'ossimoro accosta termini semanticamente opposti, come «silenzio assordante». Qui non sono presenti concetti contrari uniti nella stessa espressione.",
            },
            {
                id: "D",
                text: "Anafora.",
                correct: false,
                explanation:
                    "L'anafora consiste nella ripetizione della stessa parola o espressione all'inizio di segmenti successivi. La frase contiene invece una singola esagerazione temporale.",
            },
        ],
    },

    {
        id: 16,
        area: "linguistica-logica",
        category: "logica-condizioni",
        difficulty: 4,
        question:
            "Per sostenere l'esame è necessario aver consegnato il progetto, ma la consegna del progetto non è sufficiente per poter sostenere l'esame. Quale affermazione è necessariamente vera?",
        answers: [
            {
                id: "A",
                text: "Chi ha consegnato il progetto può sicuramente sostenere l'esame.",
                correct: false,
                explanation:
                    "La consegna è dichiarata necessaria ma non sufficiente. Significa che possono esistere ulteriori requisiti: aver consegnato il progetto è obbligatorio, ma da solo non garantisce il diritto a sostenere l'esame.",
            },
            {
                id: "B",
                text: "Chi può sostenere l'esame ha necessariamente consegnato il progetto.",
                correct: true,
                explanation:
                    "Se la consegna è una condizione necessaria, ogni persona che soddisfa la condizione finale — poter sostenere l'esame — deve averla rispettata. In simboli, se E significa «può sostenere l'esame» e P «ha consegnato il progetto», la relazione necessaria è E → P.",
            },
            {
                id: "C",
                text: "Chi non può sostenere l'esame non ha necessariamente consegnato il progetto.",
                correct: false,
                explanation:
                    "Una persona potrebbe aver consegnato il progetto e non poter comunque sostenere l'esame perché manca un altro requisito. Dunque dall'impossibilità di sostenere l'esame non si può dedurre l'assenza della consegna.",
            },
            {
                id: "D",
                text: "Consegnare il progetto e poter sostenere l'esame sono condizioni equivalenti.",
                correct: false,
                explanation:
                    "L'equivalenza richiederebbe entrambe le implicazioni: E → P e P → E. Il testo concede soltanto la prima e nega esplicitamente la seconda affermando che la consegna non è sufficiente.",
            },
        ],
        resources: [
            {
                id: "condizione-necessaria-sufficiente",
                type: "diagram",
                label: "Schema di condizioni necessarie e sufficienti",
                src: `${import.meta.env.BASE_URL}resources/diagrams/condizione-necessaria-sufficiente.png`,
                alt: "Diagramma logico che confronta condizione necessaria, sufficiente e necessaria e sufficiente",
                caption:
                    "Lo schema permette di distinguere la direzione delle implicazioni e di evitare l'errore di invertire una condizione necessaria.",
            },
        ],
    },

    {
        id: 17,
        area: "linguistica-logica",
        category: "logica-negazioni",
        difficulty: 4,
        question:
            "Qual è la negazione logica corretta dell'affermazione «Ogni studente ha risolto almeno uno dei problemi assegnati»?",
        answers: [
            {
                id: "A",
                text: "Nessuno studente ha risolto alcun problema.",
                correct: false,
                explanation:
                    "Questa affermazione è molto più forte della negazione richiesta: sostiene che tutti gli studenti abbiano risolto zero problemi. Per rendere falsa la proposizione iniziale è sufficiente invece trovare anche un solo studente che non ne abbia risolto nessuno.",
            },
            {
                id: "B",
                text: "Almeno uno studente non ha risolto nessuno dei problemi assegnati.",
                correct: true,
                explanation:
                    "La proposizione originaria ha struttura «per ogni studente esiste almeno un problema risolto». Negarla significa trasformare il quantificatore universale in esistenziale e negare la proprietà: esiste almeno uno studente per cui non esiste alcun problema risolto.",
            },
            {
                id: "C",
                text: "Ogni studente ha lasciato irrisolto almeno un problema.",
                correct: false,
                explanation:
                    "Questa frase può essere vera contemporaneamente a quella originale. Uno studente potrebbe aver risolto alcuni problemi e averne lasciato irrisolto almeno uno, soddisfacendo entrambe le proposizioni.",
            },
            {
                id: "D",
                text: "Almeno un problema non è stato risolto da nessuno studente.",
                correct: false,
                explanation:
                    "Qui il quantificatore riguarda i problemi, non gli studenti. Potrebbe esistere un problema irrisolto da tutti e, nello stesso tempo, ogni studente potrebbe aver risolto almeno un altro problema: la frase originaria resterebbe vera.",
            },
        ],
    },

    {
        id: 18,
        area: "linguistica-logica",
        category: "sillogismi",
        difficulty: 4,
        question:
            "Si considerino le seguenti premesse: «Tutti i romanzi del gruppo R sono opere tradotte»; «Nessuna opera tradotta del catalogo è stata pubblicata prima del 1950». Quale conclusione segue necessariamente?",
        answers: [
            {
                id: "A",
                text: "Nessun romanzo del gruppo R è stato pubblicato prima del 1950.",
                correct: true,
                explanation:
                    "Tutti gli elementi di R appartengono all'insieme delle opere tradotte. Poiché nessuna opera tradotta considerata appartiene all'insieme delle opere pubblicate prima del 1950, anche l'intero sottoinsieme R ne resta escluso.",
            },
            {
                id: "B",
                text: "Tutte le opere tradotte appartengono al gruppo R.",
                correct: false,
                explanation:
                    "La prima premessa stabilisce R ⊆ opere tradotte, ma non l'inclusione inversa. Possono esistere molte opere tradotte che non siano romanzi del gruppo R.",
            },
            {
                id: "C",
                text: "Esiste almeno un romanzo nel gruppo R.",
                correct: false,
                explanation:
                    "Le premesse descrivono le proprietà che avrebbero gli eventuali membri di R, ma non affermano che R contenga effettivamente almeno un elemento. In logica classica, da una proposizione universale non segue automaticamente l'esistenza di casi concreti.",
            },
            {
                id: "D",
                text: "Tutte le opere pubblicate dopo il 1950 appartengono al gruppo R.",
                correct: false,
                explanation:
                    "Dal fatto che le opere tradotte considerate non siano anteriori al 1950 non deriva che tutte le opere successive siano tradotte o appartengano a R. L'alternativa trasforma una restrizione temporale in un'inclusione molto più ampia che le premesse non giustificano.",
            },
        ],
        resources: [
            {
                id: "sillogismo-insiemi-inclusione",
                type: "diagram",
                label: "Diagramma degli insiemi del sillogismo",
                src: `${import.meta.env.BASE_URL}resources/diagrams/sillogismo-insiemi-inclusione.png`,
                alt: "Diagramma di Eulero con il gruppo R contenuto nelle opere tradotte e separato dalle opere anteriori al 1950",
                caption:
                    "Il diagramma rende visibile l'inclusione R ⊆ opere tradotte e l'esclusione delle opere tradotte dall'insieme delle opere anteriori al 1950.",
            },
        ],
    },

    {
        id: 19,
        area: "linguistica-logica",
        category: "ordinamenti",
        difficulty: 5,
        question:
            "Cinque relazioni, A, B, C, D ed E, vengono presentate una per volta. B è immediatamente dopo D; A viene prima di D; C viene dopo B; E viene prima di A. Quale relazione occupa necessariamente la terza posizione?",
        answers: [
            {
                id: "A",
                text: "A",
                correct: false,
                explanation:
                    "E deve precedere A, mentre A deve precedere D; inoltre D deve essere seguito immediatamente da B e B deve precedere C. La catena completa imposta dai vincoli è E → A → D → B → C, quindi A occupa la seconda posizione.",
            },
            {
                id: "B",
                text: "B",
                correct: false,
                explanation:
                    "Poiché B deve venire immediatamente dopo D, una volta ricostruita la catena E-A-D-B-C risulta in quarta posizione. Collocarlo in terza posizione renderebbe D secondo, ma non resterebbe spazio per rispettare contemporaneamente E prima di A e A prima di D.",
            },
            {
                id: "C",
                text: "D",
                correct: true,
                explanation:
                    "I vincoli si concatenano senza alternative: E deve precedere A, A deve precedere D, D deve essere immediatamente seguito da B e B deve precedere C. Con cinque elementi questo determina un unico ordine, E-A-D-B-C, nel quale D è terzo.",
            },
            {
                id: "D",
                text: "E",
                correct: false,
                explanation:
                    "E deve precedere A e, attraverso A, anche D e B. Nell'unico ordinamento compatibile E-A-D-B-C, E occupa quindi la prima posizione, non la terza.",
            },
        ],
        resources: [
            {
                id: "ordinamento-cinque-elementi",
                type: "diagram",
                label: "Schema di ricostruzione di un ordinamento logico",
                src: `${import.meta.env.BASE_URL}resources/diagrams/ordinamento-cinque-elementi.png`,
                alt: "Schema con i vincoli E prima di A, A prima di D, D immediatamente prima di B e B prima di C",
                caption:
                    "Lo schema mostra come concatenare progressivamente i vincoli fino a ottenere l'unico ordinamento possibile.",
            },
        ],
    },

    {
        id: 20,
        area: "linguistica-logica",
        category: "combinatoria",
        difficulty: 3,
        question:
            "Un codice è formato da due lettere diverse scelte tra A, B, C e D, seguite da una cifra pari scelta tra 2, 4 e 6. L'ordine delle lettere conta. Quanti codici distinti si possono formare?",
        answers: [
            {
                id: "A",
                text: "24",
                correct: false,
                explanation:
                    "Per ottenere 24 si considererebbero correttamente 4×3 modi di scegliere in ordine le due lettere, ma soltanto 2 possibilità per la cifra. Le cifre ammesse sono invece tre: 2, 4 e 6.",
            },
            {
                id: "B",
                text: "36",
                correct: true,
                explanation:
                    "La prima lettera può essere scelta in 4 modi. La seconda deve essere diversa dalla prima e ha quindi 3 possibilità; la cifra finale ha 3 possibilità: per il principio fondamentale del conteggio, 4×3×3 = 36 codici.",
            },
            {
                id: "C",
                text: "48",
                correct: false,
                explanation:
                    "Il valore 48 corrisponderebbe, ad esempio, a 4×3×4, ma per l'ultima posizione non ci sono quattro possibilità. Le sole cifre consentite sono 2, 4 e 6, quindi le scelte per quella posizione sono tre.",
            },
            {
                id: "D",
                text: "18",
                correct: false,
                explanation:
                    "18 si otterrebbe usando soltanto 2 possibilità in una delle due posizioni alfabetiche, ma dopo aver scelto la prima lettera ne restano 3 utilizzabili. Poiché l'ordine conta, coppie come AB e BA devono inoltre essere considerate distinte.",
            },
        ],
    },

    {
        id: 21,
        area: "linguistica-logica",
        category: "grammatica-sintassi",
        difficulty: 3,
        question:
            "Quale completamento costruisce correttamente un periodo ipotetico dell'irrealtà riferito al passato? «Se avessi saputo che la riunione era stata anticipata, ___ prima.»",
        answers: [
            {
                id: "A",
                text: "sarei arrivato",
                correct: true,
                explanation:
                    "Nel periodo ipotetico dell'irrealtà riferito al passato, la protasi usa normalmente il congiuntivo trapassato («se avessi saputo») e l'apodosi il condizionale passato («sarei arrivato»). La frase indica infatti una situazione che non si è verificata: non ho saputo dell'anticipo e, di conseguenza, non sono arrivato prima.",
            },
            {
                id: "B",
                text: "arriverei",
                correct: false,
                explanation:
                    "«Arriverei» è un condizionale presente e si adatta normalmente a una conseguenza riferita al presente o al futuro, come in «se lo sapessi, arriverei prima». Qui invece sia la condizione sia la conseguenza appartengono a un passato ormai concluso, quindi serve il condizionale passato.",
            },
            {
                id: "C",
                text: "fossi arrivato",
                correct: false,
                explanation:
                    "«Fossi arrivato» è un congiuntivo trapassato e potrebbe comparire nella subordinata introdotta da «se», non nell'apodosi della frase proposta. Usarlo qui produrrebbe due congiuntivi senza esprimere correttamente la conseguenza ipotetica.",
            },
            {
                id: "D",
                text: "arrivavo",
                correct: false,
                explanation:
                    "«Arrivavo» è un indicativo imperfetto e non esprime, in questa costruzione standard, la conseguenza irreale di una condizione non realizzata nel passato. L'imperfetto può avere usi colloquiali in alcuni periodi ipotetici, ma non è la forma richiesta dalla costruzione formale proposta.",
            },
        ],
    },

    {
        id: 22,
        area: "linguistica-logica",
        category: "grammatica-sintassi",
        difficulty: 4,
        question:
            "Nella frase «In questa biblioteca si prestano anche libri provenienti da altre sedi», quale funzione svolge «si»?",
        answers: [
            {
                id: "A",
                text: "Pronome riflessivo",
                correct: false,
                explanation:
                    "Nel valore riflessivo il soggetto compie un'azione su se stesso, come in «Luca si lava». Nella frase proposta i libri non compiono l'azione del prestare su se stessi, quindi non si tratta di una costruzione riflessiva.",
            },
            {
                id: "B",
                text: "Si passivante",
                correct: true,
                explanation:
                    "La costruzione equivale a «in questa biblioteca vengono prestati anche libri provenienti da altre sedi». «Libri» funziona come soggetto grammaticale e il verbo concorda con esso al plurale («si prestano»), caratteristica tipica del si passivante.",
            },
            {
                id: "C",
                text: "Si impersonale",
                correct: false,
                explanation:
                    "Il si impersonale costruisce normalmente un soggetto generico, come in «in biblioteca si legge in silenzio», e con un verbo intransitivo o usato senza un oggetto che diventi soggetto. Qui «libri» determina invece l'accordo plurale del verbo e la frase può essere trasformata direttamente in una passiva.",
            },
            {
                id: "D",
                text: "Pronome reciproco",
                correct: false,
                explanation:
                    "Il valore reciproco richiede più soggetti che compiono l'azione l'uno verso l'altro, come in «Marco e Anna si salutano». Nella frase non esiste alcuna relazione reciproca tra i libri.",
            },
        ],
    },

    {
        id: 23,
        area: "linguistica-logica",
        category: "ambiguita-semantica",
        difficulty: 3,
        question:
            "La frase «Giulia ha detto a Marta che sua madre sarebbe arrivata alle otto» è ambigua. Da che cosa nasce principalmente l'ambiguità?",
        answers: [
            {
                id: "A",
                text: "Dal fatto che non è chiaro se «sua madre» sia la madre di Giulia o quella di Marta.",
                correct: true,
                explanation:
                    "Il possessivo «sua» non indica grammaticalmente quale delle due persone femminili nominate sia il possessore. Senza ulteriori informazioni contestuali, la madre potrebbe quindi essere quella di Giulia oppure quella di Marta.",
            },
            {
                id: "B",
                text: "Dal fatto che «alle otto» può indicare contemporaneamente un luogo e un orario.",
                correct: false,
                explanation:
                    "«Alle otto» ha qui un valore temporale inequivocabile e indica l'ora prevista dell'arrivo. Non possiede, nel contesto della frase, una lettura locativa plausibile.",
            },
            {
                id: "C",
                text: "Dal fatto che non è possibile stabilire chi abbia pronunciato la frase.",
                correct: false,
                explanation:
                    "Il soggetto del verbo «ha detto» è chiaramente Giulia. L'ambiguità non riguarda quindi chi parla, ma il referente del possessivo «sua».",
            },
            {
                id: "D",
                text: "Dal fatto che il condizionale passato non permette di distinguere futuro e passato.",
                correct: false,
                explanation:
                    "«Sarebbe arrivata» può esprimere il cosiddetto futuro nel passato, cioè un evento successivo rispetto al momento del dire. Questa scelta verbale non è però la causa dell'ambiguità relativa all'identità della madre.",
            },
        ],
    },

    {
        id: 24,
        area: "linguistica-logica",
        category: "lessico-semantica",
        difficulty: 3,
        question:
            "Nel periodo «Un dato avulso dal contesto può suggerire conclusioni molto diverse da quelle che emergono considerando l'intero fenomeno», quale significato assume «avulso»?",
        answers: [
            {
                id: "A",
                text: "Ricavato mediante un calcolo statistico complesso",
                correct: false,
                explanation:
                    "«Avulso» non descrive il procedimento con cui un dato viene ottenuto. Un dato può essere semplice o complesso e risultare comunque avulso se viene considerato separatamente dal contesto che gli attribuisce significato.",
            },
            {
                id: "B",
                text: "Separato o isolato dal contesto a cui appartiene",
                correct: true,
                explanation:
                    "«Avulso» significa letteralmente staccato, separato da qualcosa con cui dovrebbe essere collegato. Nel periodo indica quindi un dato interpretato senza tenere conto delle circostanze, delle relazioni e delle altre informazioni necessarie a comprenderlo correttamente.",
            },
            {
                id: "C",
                text: "Dimostrato in modo definitivo e incontestabile",
                correct: false,
                explanation:
                    "L'aggettivo non riguarda il grado di certezza o di dimostrazione di un'informazione. Anzi, il periodo suggerisce che isolare un dato dal contesto possa favorire interpretazioni fuorvianti.",
            },
            {
                id: "D",
                text: "Contraddetto da tutte le altre informazioni disponibili",
                correct: false,
                explanation:
                    "Un dato avulso non è necessariamente falso né contraddetto dagli altri dati. Il problema consiste nel considerarlo isolatamente, privandolo delle relazioni necessarie a interpretarne correttamente il significato.",
            },
        ],
    },

    {
        id: 25,
        area: "linguistica-logica",
        category: "coesione-testuale",
        difficulty: 3,
        question:
            "Quale connettivo completa meglio il periodo? «Il numero dei partecipanti allo studio è elevato; ___, il campione non rappresenta adeguatamente tutte le fasce d'età della popolazione.»",
        answers: [
            {
                id: "A",
                text: "pertanto",
                correct: false,
                explanation:
                    "«Pertanto» introduce normalmente una conseguenza logica. Un campione non diventa poco rappresentativo come conseguenza dell'elevato numero di partecipanti: le due informazioni sono invece poste in contrasto.",
            },
            {
                id: "B",
                text: "infatti",
                correct: false,
                explanation:
                    "«Infatti» introduce una spiegazione o una conferma di ciò che precede. Qui la seconda proposizione limita il valore positivo suggerito dalla numerosità del campione, anziché spiegarlo.",
            },
            {
                id: "C",
                text: "ciononostante",
                correct: true,
                explanation:
                    "«Ciononostante» introduce correttamente un rapporto concessivo-avversativo: nonostante il numero elevato di partecipanti, permane un problema di rappresentatività. Il periodo distingue così la dimensione quantitativa del campione dalla sua composizione.",
            },
            {
                id: "D",
                text: "inoltre",
                correct: false,
                explanation:
                    "«Inoltre» aggiunge normalmente un'informazione dello stesso orientamento argomentativo della precedente. In questo caso serve invece segnalare che un elemento apparentemente positivo non elimina una limitazione importante.",
            },
        ],
    },

    {
        id: 26,
        area: "linguistica-logica",
        category: "logica-negazioni",
        difficulty: 4,
        question:
            "Qual è la negazione logica dell'affermazione «Marco consegna il modulo e paga la quota»?",
        answers: [
            {
                id: "A",
                text: "Marco non consegna il modulo e non paga la quota.",
                correct: false,
                explanation:
                    "Questa situazione rende certamente falsa l'affermazione iniziale, ma rappresenta soltanto uno dei modi possibili in cui può essere falsa. Basta infatti che manchi anche una sola delle due condizioni perché la congiunzione originaria non sia verificata.",
            },
            {
                id: "B",
                text: "Marco non consegna il modulo oppure non paga la quota.",
                correct: true,
                explanation:
                    "Per la legge di De Morgan, la negazione di «P e Q» è «non P oppure non Q». L'«oppure» è inclusivo: comprende il caso in cui manca una sola condizione e anche quello in cui mancano entrambe.",
            },
            {
                id: "C",
                text: "Marco consegna il modulo oppure paga la quota.",
                correct: false,
                explanation:
                    "Questa proposizione è compatibile anche con il caso in cui Marco compia entrambe le azioni, cioè proprio con l'affermazione originaria. Non può quindi costituirne la negazione.",
            },
            {
                id: "D",
                text: "Marco consegna il modulo ma non paga la quota.",
                correct: false,
                explanation:
                    "Anche questa situazione rende falsa la frase iniziale, ma descrive soltanto un caso particolare. La negazione deve comprendere anche il caso opposto, in cui Marco paga ma non consegna, e quello in cui non compie nessuna delle due azioni.",
            },
        ],
    },

    {
        id: 27,
        area: "linguistica-logica",
        category: "logica-deduttiva",
        difficulty: 4,
        question:
            "Sono vere le seguenti implicazioni: «Se Paolo supera la preselezione, accede al colloquio»; «Se Paolo accede al colloquio, riceve una convocazione». Si sa che Paolo non ha ricevuto alcuna convocazione. Che cosa segue necessariamente?",
        answers: [
            {
                id: "A",
                text: "Paolo ha superato la preselezione ma ha rinunciato al colloquio.",
                correct: false,
                explanation:
                    "Se avesse superato la preselezione, secondo la prima premessa avrebbe avuto accesso al colloquio; da questo, per la seconda premessa, sarebbe derivata la convocazione. L'assenza della convocazione rende quindi incompatibile questa ipotesi con le condizioni date.",
            },
            {
                id: "B",
                text: "Paolo non ha avuto accesso al colloquio e non ha superato la preselezione.",
                correct: true,
                explanation:
                    "Dalla seconda implicazione e dall'assenza della convocazione si applica il modus tollens: Paolo non ha avuto accesso al colloquio. Applicando nuovamente il modus tollens alla prima implicazione, si deduce che non ha superato la preselezione.",
            },
            {
                id: "C",
                text: "Paolo non ha ricevuto la convocazione, ma potrebbe comunque aver avuto accesso al colloquio.",
                correct: false,
                explanation:
                    "La seconda premessa stabilisce che l'accesso al colloquio implica sempre la convocazione. Se la convocazione non esiste, l'accesso al colloquio deve essere escluso all'interno del sistema logico descritto.",
            },
            {
                id: "D",
                text: "Non è possibile dedurre nulla sul risultato della preselezione.",
                correct: false,
                explanation:
                    "La concatenazione delle due implicazioni permette invece una deduzione precisa. L'assenza dell'ultimo effetto risale, attraverso due applicazioni del modus tollens, fino all'assenza della condizione iniziale.",
            },
        ],
    },

    {
        id: 28,
        area: "linguistica-logica",
        category: "insiemi",
        difficulty: 4,
        question:
            "In un gruppo di 80 studenti, 48 studiano inglese, 37 studiano francese e 15 non studiano nessuna delle due lingue. Quanti studenti studiano entrambe le lingue?",
        answers: [
            {
                id: "A",
                text: "20",
                correct: true,
                explanation:
                    "Gli studenti che studiano almeno una delle due lingue sono 80 − 15 = 65. Applicando il principio di inclusione-esclusione, 48 + 37 − intersezione = 65; quindi l'intersezione vale 85 − 65 = 20.",
            },
            {
                id: "B",
                text: "5",
                correct: false,
                explanation:
                    "Il valore 5 si otterrebbe sottraendo semplicemente 80 dalla somma 48 + 37, ma ciò presupporrebbe che tutti gli 80 studenti studiassero almeno una lingua. In realtà 15 studenti non ne studiano nessuna, quindi l'unione contiene soltanto 65 persone.",
            },
            {
                id: "C",
                text: "17",
                correct: false,
                explanation:
                    "Con un'intersezione di 17, l'unione sarebbe 48 + 37 − 17 = 68 studenti. Resterebbero quindi 12 studenti fuori da entrambi gli insiemi, mentre il testo specifica che sono 15.",
            },
            {
                id: "D",
                text: "28",
                correct: false,
                explanation:
                    "Con 28 studenti nell'intersezione, l'unione sarebbe 48 + 37 − 28 = 57. Ciò implicherebbe 23 studenti che non studiano nessuna lingua, in contrasto con i 15 indicati.",
            },
        ],
        resources: [
            {
                id: "diagramma-venn-lingue",
                type: "diagram",
                label: "Diagramma di Venn per due insiemi sovrapposti",
                src: `${import.meta.env.BASE_URL}resources/diagrams/venn-inglese-francese.png`,
                alt: "Diagramma di Venn con studenti di inglese, studenti di francese, intersezione e studenti esterni ai due insiemi",
                caption:
                    "Il diagramma permette di visualizzare l'unione, l'intersezione e i 15 studenti che non appartengono a nessuno dei due insiemi.",
            },
        ],
    },

    {
        id: 29,
        area: "linguistica-logica",
        category: "sequenze-numeriche",
        difficulty: 3,
        question:
            "Quale numero completa la sequenza? 7, 10, 16, 25, 37, ___",
        answers: [
            {
                id: "A",
                text: "49",
                correct: false,
                explanation:
                    "37 + 12 = 49 ripeterebbe semplicemente l'ultimo incremento. Gli incrementi, invece, crescono regolarmente di 3: +3, +6, +9, +12 e quindi successivamente +15.",
            },
            {
                id: "B",
                text: "50",
                correct: false,
                explanation:
                    "Da 37 a 50 l'incremento sarebbe +13, che interrompe la progressione delle differenze multiple di 3. La regola non riguarda quindi un aumento arbitrario vicino al precedente.",
            },
            {
                id: "C",
                text: "52",
                correct: true,
                explanation:
                    "Le differenze successive sono 3, 6, 9 e 12, cioè aumentano ogni volta di 3. La differenza successiva deve essere 15, per cui 37 + 15 = 52.",
            },
            {
                id: "D",
                text: "55",
                correct: false,
                explanation:
                    "Per arrivare a 55 bisognerebbe aggiungere 18, saltando l'incremento atteso di 15. Il valore 18 sarebbe eventualmente la differenza successiva a quella richiesta, non quella immediata.",
            },
        ],
    },

    {
        id: 30,
        area: "linguistica-logica",
        category: "sequenze-alfabetiche",
        difficulty: 3,
        question:
            "Quale lettera completa la sequenza? C, E, H, L, Q, ___",
        answers: [
            {
                id: "A",
                text: "V",
                correct: false,
                explanation:
                    "Da Q a V il salto sarebbe di 5 posizioni, uguale a quello precedente da L a Q. La regola prevede invece incrementi progressivamente maggiori.",
            },
            {
                id: "B",
                text: "W",
                correct: true,
                explanation:
                    "Considerando le posizioni alfabetiche si ottiene 3, 5, 8, 12, 17: gli incrementi sono +2, +3, +4 e +5. Il passo successivo è +6, quindi 17 + 6 = 23, che corrisponde alla lettera W.",
            },
            {
                id: "C",
                text: "X",
                correct: false,
                explanation:
                    "X occupa la posizione 24 e richiederebbe un salto di +7 da Q. Il +7 sarebbe il passo successivo a quello richiesto, mentre qui la progressione deve continuare con +6.",
            },
            {
                id: "D",
                text: "U",
                correct: false,
                explanation:
                    "U occupa la posizione 21 e implicherebbe un incremento di soli 4 posti. Questo valore è già comparso in precedenza tra H e L e non rispetta la crescita regolare degli incrementi.",
            },
        ],
    },

    {
        id: 31,
        area: "linguistica-logica",
        category: "probabilita",
        difficulty: 4,
        question:
            "Un'urna contiene 4 palline bianche e 3 nere. Si estraggono due palline senza reinserimento. Qual è la probabilità di ottenere esattamente una pallina nera?",
        answers: [
            {
                id: "A",
                text: "4/7",
                correct: true,
                explanation:
                    "L'evento può verificarsi in due ordini: bianca-nera oppure nera-bianca. Le probabilità sono (4/7)×(3/6) e (3/7)×(4/6); sommandole si ottiene 24/42 = 4/7.",
            },
            {
                id: "B",
                text: "12/49",
                correct: false,
                explanation:
                    "12/49 deriva dal prodotto 4/7 × 3/7, che mantiene erroneamente 7 come denominatore anche nella seconda estrazione. Senza reinserimento, dopo la prima estrazione rimangono soltanto 6 palline.",
            },
            {
                id: "C",
                text: "2/7",
                correct: false,
                explanation:
                    "2/7 non tiene conto correttamente dei due possibili ordini in cui può comparire l'unica pallina nera. L'evento «esattamente una nera» comprende infatti sia nera-bianca sia bianca-nera.",
            },
            {
                id: "D",
                text: "3/7",
                correct: false,
                explanation:
                    "3/7 è la probabilità di estrarre una pallina nera alla prima estrazione. Il quesito riguarda però due estrazioni e richiede che complessivamente ne compaia esattamente una nera.",
            },
        ],
        resources: [
            {
                id: "albero-probabilita-urna",
                type: "diagram",
                label: "Albero delle probabilità senza reinserimento",
                src: `${import.meta.env.BASE_URL}resources/diagrams/probabilita-urna-senza-reinserimento.png`,
                alt: "Diagramma ad albero delle due estrazioni da un'urna con quattro palline bianche e tre nere",
                caption:
                    "L'albero evidenzia come le probabilità cambino nella seconda estrazione e mostra i due percorsi favorevoli: bianca-nera e nera-bianca.",
            },
        ],
    },

    {
        id: 32,
        area: "linguistica-logica",
        category: "percentuali",
        difficulty: 3,
        question:
            "Dopo un aumento del 15%, il prezzo di un servizio è diventato 92 euro. Qual era il prezzo prima dell'aumento?",
        answers: [
            {
                id: "A",
                text: "78,20 euro",
                correct: false,
                explanation:
                    "78,20 euro si ottengono sottraendo il 15% di 92 dal prezzo finale, ma il 15% dell'aumento era calcolato sul prezzo iniziale, non su quello finale. Le due basi percentuali sono diverse.",
            },
            {
                id: "B",
                text: "80 euro",
                correct: true,
                explanation:
                    "Se il prezzo iniziale è P, dopo un aumento del 15% diventa 1,15P. Risolvendo 1,15P = 92 si ottiene P = 92/1,15 = 80 euro; infatti il 15% di 80 è 12 e 80 + 12 = 92.",
            },
            {
                id: "C",
                text: "77 euro",
                correct: false,
                explanation:
                    "Aggiungendo il 15% a 77 euro si ottengono 88,55 euro, non 92. L'alternativa non soddisfa quindi la relazione percentuale indicata.",
            },
            {
                id: "D",
                text: "84 euro",
                correct: false,
                explanation:
                    "Il 15% di 84 è 12,60 euro, quindi il prezzo finale sarebbe 96,60 euro. Per risalire al valore iniziale occorre dividere il prezzo finale per 1,15, non sottrarre una quantità scelta direttamente.",
            },
        ],
    },

    {
        id: 33,
        area: "linguistica-logica",
        category: "percentuali",
        difficulty: 4,
        question:
            "La percentuale di studenti che supera una prova passa dal 40% al 50%. Quale affermazione descrive correttamente la variazione?",
        answers: [
            {
                id: "A",
                text: "È aumentata di 10 punti percentuali e del 25% rispetto al valore iniziale.",
                correct: true,
                explanation:
                    "La differenza assoluta tra le due percentuali è 50% − 40% = 10 punti percentuali. L'aumento relativo rispetto al valore iniziale è invece 10/40 = 0,25, cioè il 25%.",
            },
            {
                id: "B",
                text: "È aumentata del 10%, cioè di 10 punti percentuali: le due espressioni sono equivalenti.",
                correct: false,
                explanation:
                    "Punti percentuali e variazione percentuale non sono la stessa cosa. Passare dal 40% al 50% significa guadagnare 10 punti percentuali, ma quei 10 punti rappresentano il 25% del valore iniziale di 40.",
            },
            {
                id: "C",
                text: "È aumentata del 50%, perché il valore finale è pari al 50%.",
                correct: false,
                explanation:
                    "Il 50% è il nuovo livello raggiunto, non la variazione relativa. Per misurare l'aumento bisogna confrontare la differenza di 10 con il valore iniziale di 40.",
            },
            {
                id: "D",
                text: "È aumentata di 25 punti percentuali e del 10% rispetto al valore iniziale.",
                correct: false,
                explanation:
                    "L'alternativa inverte i due concetti. I punti percentuali sono 10, mentre l'incremento relativo è del 25%.",
            },
        ],
    },

    {
        id: 34,
        area: "linguistica-logica",
        category: "logica-deduttiva",
        difficulty: 5,
        question:
            "Tre scatole A, B e C contengono complessivamente un solo premio. Sulla scatola A c'è scritto «Il premio non è nella scatola B»; sulla B «Il premio è nella scatola C»; sulla C «Il premio non è nella scatola C». Sapendo che ESATTAMENTE una delle tre affermazioni è vera, dove si trova il premio?",
        answers: [
            {
                id: "A",
                text: "Nella scatola A",
                correct: false,
                explanation:
                    "Se il premio fosse in A, l'affermazione su A sarebbe vera perché il premio non sarebbe in B; quella su B sarebbe falsa, mentre quella su C sarebbe anch'essa vera perché il premio non sarebbe in C. Si avrebbero quindi due affermazioni vere, in contrasto con il vincolo.",
            },
            {
                id: "B",
                text: "Nella scatola B",
                correct: true,
                explanation:
                    "Se il premio è in B, la frase sulla scatola A è falsa, perché afferma che il premio non è in B. Anche la frase sulla B è falsa, mentre quella sulla C è vera perché il premio effettivamente non è in C: risulta quindi vera esattamente una sola affermazione.",
            },
            {
                id: "C",
                text: "Nella scatola C",
                correct: false,
                explanation:
                    "Se il premio fosse in C, l'affermazione della scatola A sarebbe vera perché il premio non sarebbe in B, e quella della scatola B sarebbe anch'essa vera. La frase sulla C sarebbe falsa, producendo nuovamente due affermazioni vere.",
            },
            {
                id: "D",
                text: "Non è possibile determinarlo in modo univoco.",
                correct: false,
                explanation:
                    "È possibile verificare separatamente le tre posizioni del premio. Soltanto l'ipotesi «premio in B» produce esattamente una frase vera, quindi la soluzione è univoca.",
            },
        ],
        resources: [
            {
                id: "scatole-verita-logica",
                type: "diagram",
                label: "Schema delle tre scatole e delle relative affermazioni",
                src: `${import.meta.env.BASE_URL}resources/diagrams/scatole-logica-verita.png`,
                alt: "Tre scatole A, B e C con le rispettive affermazioni logiche",
                caption:
                    "Lo schema consente di verificare sistematicamente le tre possibili posizioni del premio e contare quante affermazioni risultano vere in ciascun caso.",
            },
        ],
    },

    {
        id: 35,
        area: "linguistica-logica",
        category: "logica-assegnazioni",
        difficulty: 4,
        question:
            "Anna, Bruno e Carla scelgono ciascuno una materia diversa tra Arte, Musica e Teatro. Anna non sceglie Musica; Bruno non sceglie né Arte né Teatro; Carla non sceglie Teatro. Quale assegnazione è necessariamente corretta?",
        answers: [
            {
                id: "A",
                text: "Anna sceglie Teatro, Bruno Musica e Carla Arte.",
                correct: true,
                explanation:
                    "Bruno, esclusi Arte e Teatro, deve necessariamente scegliere Musica. Restano Arte e Teatro per Anna e Carla; poiché Carla non può scegliere Teatro, Carla deve scegliere Arte e Anna Teatro.",
            },
            {
                id: "B",
                text: "Anna sceglie Arte, Bruno Musica e Carla Teatro.",
                correct: false,
                explanation:
                    "Bruno potrebbe effettivamente scegliere Musica, ma Carla non può scegliere Teatro secondo un vincolo esplicito. Questa assegnazione viola quindi direttamente una delle condizioni.",
            },
            {
                id: "C",
                text: "Anna sceglie Teatro, Bruno Arte e Carla Musica.",
                correct: false,
                explanation:
                    "Bruno non può scegliere Arte né Teatro e deve quindi essere assegnato a Musica. L'alternativa viola il vincolo più restrittivo del problema.",
            },
            {
                id: "D",
                text: "Anna sceglie Arte, Bruno Teatro e Carla Musica.",
                correct: false,
                explanation:
                    "Bruno non può scegliere Teatro, perciò questa configurazione è impossibile. Il vincolo su Bruno determina in realtà immediatamente la sua materia e permette poi di completare l'intera assegnazione.",
            },
        ],
        resources: [
            {
                id: "griglia-logica-materie",
                type: "diagram",
                label: "Griglia per problemi di assegnazione",
                src: `${import.meta.env.BASE_URL}resources/diagrams/griglia-logica-assegnazioni.png`,
                alt: "Griglia con Anna, Bruno e Carla sulle righe e Arte, Musica e Teatro sulle colonne",
                caption:
                    "Una griglia di esclusione permette di segnare progressivamente i vincoli e visualizzare perché rimane una sola assegnazione possibile.",
            },
        ],
    },

    {
        id: 36,
        area: "linguistica-logica",
        category: "problemi-quantitativi",
        difficulty: 4,
        question:
            "Un'auto percorre 90 km a 45 km/h e successivamente altri 90 km a 90 km/h. Qual è la velocità media sull'intero percorso?",
        answers: [
            {
                id: "A",
                text: "60 km/h",
                correct: true,
                explanation:
                    "Il primo tratto richiede 90/45 = 2 ore, mentre il secondo richiede 90/90 = 1 ora. L'auto percorre quindi 180 km in 3 ore complessive: 180/3 = 60 km/h.",
            },
            {
                id: "B",
                text: "67,5 km/h",
                correct: false,
                explanation:
                    "67,5 km/h è la media aritmetica semplice tra 45 e 90, ma non è applicabile perché le due velocità vengono mantenute per tempi diversi. Nella velocità media bisogna dividere la distanza totale per il tempo totale.",
            },
            {
                id: "C",
                text: "75 km/h",
                correct: false,
                explanation:
                    "A 75 km/h di media, percorrere 180 km richiederebbe 2,4 ore. Il viaggio reale dura invece 3 ore, quindi questo valore sovrastima la velocità media.",
            },
            {
                id: "D",
                text: "55 km/h",
                correct: false,
                explanation:
                    "Con una velocità media di 55 km/h, 180 km richiederebbero circa 3,27 ore. Poiché i tempi dei due tratti sono esattamente 2 e 1 ora, il tempo complessivo è soltanto 3 ore.",
            },
        ],
    },

    {
        id: 37,
        area: "linguistica-logica",
        category: "problemi-quantitativi",
        difficulty: 5,
        question:
            "In una classe il 60% degli studenti è costituito da ragazze. Dopo l'ingresso di 8 nuove ragazze, le ragazze rappresentano esattamente i 2/3 della classe. Quanti studenti c'erano inizialmente?",
        answers: [
            {
                id: "A",
                text: "32",
                correct: false,
                explanation:
                    "Con 32 studenti iniziali, il 60% sarebbe 19,2, che non può rappresentare un numero intero di studenti. Inoltre il dato non soddisferebbe correttamente la proporzione finale richiesta.",
            },
            {
                id: "B",
                text: "40",
                correct: true,
                explanation:
                    "Indicando con x il numero iniziale, le ragazze sono 0,6x. Dopo gli 8 ingressi vale (0,6x + 8)/(x + 8) = 2/3; da 1,8x + 24 = 2x + 16 si ottiene 0,2x = 8 e quindi x = 40. Inizialmente le ragazze sono 24 e dopo l'ingresso diventano 32 su 48, cioè esattamente 2/3.",
            },
            {
                id: "C",
                text: "48",
                correct: false,
                explanation:
                    "Il 60% di 48 è 28,8, che non può essere il numero di ragazze di una classe reale. Inoltre aggiungendo 8 ragazze non si otterrebbe la frazione finale richiesta.",
            },
            {
                id: "D",
                text: "50",
                correct: false,
                explanation:
                    "Con 50 studenti iniziali ci sarebbero 30 ragazze; dopo l'ingresso si avrebbero 38 ragazze su 58 studenti. Il rapporto 38/58 è circa 65,5%, inferiore ai 2/3 richiesti.",
            },
        ],
    },

    {
        id: 38,
        area: "linguistica-logica",
        category: "sillogismi",
        difficulty: 3,
        question:
            "Premesse: «Tutti i botanici del gruppo sono ricercatori»; «Alcuni insegnanti sono botanici del gruppo». Quale conclusione segue necessariamente?",
        answers: [
            {
                id: "A",
                text: "Tutti gli insegnanti sono ricercatori.",
                correct: false,
                explanation:
                    "La seconda premessa parla soltanto di «alcuni» insegnanti, non dell'intera categoria. Possiamo quindi dedurre qualcosa soltanto sugli insegnanti che appartengono anche al gruppo dei botanici.",
            },
            {
                id: "B",
                text: "Alcuni insegnanti sono ricercatori.",
                correct: true,
                explanation:
                    "Esiste almeno un insegnante che è botanico del gruppo. Poiché tutti i botanici del gruppo sono ricercatori, quello stesso individuo appartiene necessariamente anche all'insieme dei ricercatori.",
            },
            {
                id: "C",
                text: "Nessun ricercatore è insegnante.",
                correct: false,
                explanation:
                    "Le premesse implicano esattamente il contrario per almeno alcuni individui: gli insegnanti che sono botanici sono anche ricercatori. L'intersezione tra insegnanti e ricercatori non è quindi vuota.",
            },
            {
                id: "D",
                text: "Alcuni botanici del gruppo non sono ricercatori.",
                correct: false,
                explanation:
                    "La prima premessa afferma che tutti i botanici del gruppo sono ricercatori. Un botanico del gruppo che non fosse ricercatore contraddirebbe direttamente questa inclusione universale.",
            },
        ],
    },

    {
        id: 39,
        area: "linguistica-logica",
        category: "logica-spaziale",
        difficulty: 2,
        question:
            "La località B si trova a est della località A. La località C si trova a nord di B. La località D si trova a ovest di C, alla stessa distanza che separa A da B. Dove si trova D rispetto ad A?",
        answers: [
            {
                id: "A",
                text: "A nord di A",
                correct: true,
                explanation:
                    "Ponendo A in coordinate (0,0), B può essere rappresentata come (1,0). C diventa allora (1,1) e, spostandosi verso ovest della stessa distanza A-B, D si trova in (0,1): direttamente a nord di A.",
            },
            {
                id: "B",
                text: "A est di A",
                correct: false,
                explanation:
                    "Lo spostamento iniziale verso est da A a B viene annullato dallo spostamento finale verso ovest da C a D, perché le distanze sono uguali. Rimane soltanto lo spostamento verso nord.",
            },
            {
                id: "C",
                text: "A nord-est di A",
                correct: false,
                explanation:
                    "C si trova effettivamente a nord-est di A, ma D si sposta verso ovest rispetto a C. Poiché tale spostamento ha la stessa ampiezza del tratto A-B, la componente orizzontale torna a zero.",
            },
            {
                id: "D",
                text: "A ovest di A",
                correct: false,
                explanation:
                    "Per trovarsi a ovest di A, lo spostamento finale verso ovest dovrebbe essere maggiore dello spostamento iniziale verso est. Il testo specifica invece che le due distanze sono uguali.",
            },
        ],
    },

    {
        id: 40,
        area: "linguistica-logica",
        category: "ordinamenti",
        difficulty: 4,
        question:
            "Quattro seminari W, X, Y e Z si svolgono da lunedì a giovedì, uno al giorno. X si svolge dopo W; Y si svolge immediatamente prima di Z; W non si svolge lunedì. In quale giorno deve necessariamente svolgersi Y?",
        answers: [
            {
                id: "A",
                text: "Lunedì",
                correct: true,
                explanation:
                    "Se Y è lunedì, Z è martedì e restano mercoledì e giovedì per W e X; poiché X deve essere dopo W, si ottiene W mercoledì e X giovedì. Le altre possibili coppie consecutive per Y-Z impediscono invece di collocare W non lunedì con X successivo.",
            },
            {
                id: "B",
                text: "Martedì",
                correct: false,
                explanation:
                    "Se Y fosse martedì, Z sarebbe mercoledì e resterebbero lunedì e giovedì per W e X. W non può essere lunedì, quindi dovrebbe essere giovedì, ma a quel punto non esisterebbe alcun giorno successivo disponibile per X.",
            },
            {
                id: "C",
                text: "Mercoledì",
                correct: false,
                explanation:
                    "Se Y fosse mercoledì, Z occuperebbe giovedì e resterebbero soltanto lunedì e martedì per W e X. Poiché W non può essere lunedì, dovrebbe essere martedì, lasciando però X lunedì, cioè prima di W, in violazione del vincolo.",
            },
            {
                id: "D",
                text: "Non è possibile determinarlo in modo univoco",
                correct: false,
                explanation:
                    "Le tre possibili collocazioni della coppia consecutiva Y-Z possono essere controllate una per una. Le coppie martedì-mercoledì e mercoledì-giovedì producono contraddizioni, mentre lunedì-martedì consente un'unica sistemazione valida: Y lunedì, Z martedì, W mercoledì e X giovedì.",
            },
        ],
    },
    {
        id: 41,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 4,
        question:
            "Quale affermazione descrive correttamente una differenza stilistica generale tra la Commedia di Dante e il Canzoniere di Petrarca?",
        answers: [
            {
                id: "A",
                text: "La Commedia presenta una notevole varietà di registri e lessico, mentre il Canzoniere tende a una lingua poetica più selezionata e uniforme.",
                correct: true,
                explanation:
                    "La Commedia attraversa ambienti, personaggi e situazioni molto differenti e può quindi passare dal registro sublime a quello quotidiano, realistico o persino aspro. La lingua lirica di Petrarca è invece sottoposta a una forte selezione e ricerca di equilibrio, caratteristica spesso contrapposta al plurilinguismo dantesco.",
            },
            {
                id: "B",
                text: "Il Canzoniere utilizza sistematicamente una varietà di registri maggiore della Commedia, che mantiene invece un linguaggio quasi uniforme.",
                correct: false,
                explanation:
                    "La relazione è sostanzialmente invertita. È soprattutto la Commedia a essere caratterizzata da un'ampia escursione stilistica e lessicale, mentre Petrarca tende a restringere e controllare maggiormente il repertorio linguistico della propria poesia volgare.",
            },
            {
                id: "C",
                text: "La differenza principale consiste nel fatto che Dante scrive la Commedia esclusivamente in latino, mentre Petrarca utilizza esclusivamente il volgare.",
                correct: false,
                explanation:
                    "La Commedia è scritta in volgare fiorentino, non in latino. Petrarca scrisse numerose opere latine, mentre il Canzoniere, noto anche come Rerum vulgarium fragmenta, è composto prevalentemente in volgare.",
            },
            {
                id: "D",
                text: "Per plurilinguismo dantesco si intende soprattutto l'uso alternato di italiano, francese e latino in ogni canto del poema.",
                correct: false,
                explanation:
                    "Il plurilinguismo della Commedia riguarda soprattutto la varietà dei livelli lessicali, stilistici e tonali all'interno del volgare, pur includendo occasionalmente parole o espressioni di altre lingue. Non significa che ogni canto alterni sistematicamente tre lingue diverse.",
            },
        ],
    },

    {
        id: 42,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 4,
        question:
            "Nel Canzoniere di Petrarca, quale funzione assume principalmente il continuo ritorno del poeta sul proprio amore per Laura?",
        answers: [
            {
                id: "A",
                text: "Costruisce soprattutto un racconto d'avventura nel quale Laura diventa progressivamente protagonista di eventi politici.",
                correct: false,
                explanation:
                    "Il Canzoniere non è organizzato come un romanzo d'avventura e Laura non diventa protagonista di una vicenda politica. Il centro dell'opera è piuttosto la coscienza del poeta e il modo in cui essa rielabora nel tempo desiderio, memoria e conflitto morale.",
            },
            {
                id: "B",
                text: "Permette al poeta di analizzare nel tempo il proprio dissidio tra desiderio terreno, coscienza della precarietà e aspirazione morale.",
                correct: true,
                explanation:
                    "L'amore per Laura è anche occasione di una continua analisi dell'io. Petrarca mette in scena un soggetto diviso tra attrazione per i beni terreni, consapevolezza dello scorrere del tempo e aspirazione a un diverso orientamento spirituale.",
            },
            {
                id: "C",
                text: "Serve a dimostrare che il poeta ha definitivamente superato ogni conflitto interiore già all'inizio della raccolta.",
                correct: false,
                explanation:
                    "Il conflitto non viene risolto immediatamente, ma costituisce uno dei motori dell'intera raccolta. Proprio l'oscillazione tra desiderio, pentimento, memoria e aspirazione spirituale contribuisce alla complessità psicologica del Canzoniere.",
            },
            {
                id: "D",
                text: "Ha lo scopo principale di trasformare Laura in una figura allegorica identica a Beatrice nella Commedia.",
                correct: false,
                explanation:
                    "Laura possiede certamente una forte elaborazione poetica e simbolica, ma la sua funzione non coincide semplicemente con quella di Beatrice. Nella Commedia Beatrice assume anche un'esplicita funzione teologica e salvifica che non può essere trasferita automaticamente alla figura petrarchesca.",
            },
        ],
    },

    {
        id: 43,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 3,
        question:
            "Nel Decameron, quale interpretazione descrive meglio il rapporto tra «fortuna» e «ingegno» che ricorre in molte novelle?",
        answers: [
            {
                id: "A",
                text: "La fortuna determina rigidamente ogni evento e rende sempre inutile qualunque iniziativa umana.",
                correct: false,
                explanation:
                    "Nel Decameron gli eventi possono certamente dipendere dal caso o da circostanze imprevedibili, ma i personaggi non sono sempre passivi. Molte novelle mostrano proprio la capacità umana di reagire alle difficoltà attraverso intelligenza, prontezza e iniziativa.",
            },
            {
                id: "B",
                text: "L'ingegno permette spesso ai personaggi di reagire alle circostanze mutevoli della fortuna, anche se non garantisce sempre il successo.",
                correct: true,
                explanation:
                    "La fortuna rappresenta la componente imprevedibile dell'esistenza, mentre l'ingegno indica la capacità di comprendere una situazione e trovare una risposta efficace. Boccaccio mette frequentemente in scena l'interazione tra questi due fattori, senza trasformare l'intelligenza in una garanzia assoluta di vittoria.",
            },
            {
                id: "C",
                text: "La fortuna coincide nel Decameron esclusivamente con la Provvidenza cristiana che premia i personaggi moralmente migliori.",
                correct: false,
                explanation:
                    "La fortuna boccacciana ha spesso il carattere dell'imprevedibilità delle circostanze e non funziona come un meccanismo che premia sempre i virtuosi. Personaggi moralmente discutibili possono avere successo, mentre altri possono essere colpiti da eventi indipendenti dai propri meriti.",
            },
            {
                id: "D",
                text: "L'ingegno indica principalmente la cultura letteraria dei narratori e non influenza le azioni dei personaggi delle novelle.",
                correct: false,
                explanation:
                    "L'ingegno è una qualità operativa presente in numerosi personaggi: può manifestarsi attraverso una risposta pronta, un piano, una beffa o la capacità di uscire da una situazione difficile. Non riguarda quindi soltanto la preparazione culturale della brigata narrante.",
            },
        ],
    },

    {
        id: 44,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 4,
        question:
            "Quale descrizione coglie meglio il modo in cui Manzoni utilizza la storia nei Promessi sposi?",
        answers: [
            {
                id: "A",
                text: "Gli eventi storici vengono usati soltanto come sfondo decorativo e non modificano realmente la vita dei protagonisti.",
                correct: false,
                explanation:
                    "Gli eventi collettivi incidono direttamente sulle vicende individuali. Carestia, tumulti di Milano, guerra e peste modificano gli spostamenti, le possibilità e perfino la sopravvivenza dei personaggi.",
            },
            {
                id: "B",
                text: "Personaggi d'invenzione vengono inseriti in un contesto storico documentato, permettendo di rappresentare anche gli effetti della storia sulla vita quotidiana.",
                correct: true,
                explanation:
                    "Renzo e Lucia sono personaggi immaginari, ma si muovono in una Lombardia secentesca ricostruita attraverso fonti storiche. Questo permette a Manzoni di intrecciare vicende private e fenomeni collettivi, mostrando anche il funzionamento delle istituzioni e delle strutture sociali.",
            },
            {
                id: "C",
                text: "Manzoni utilizza soltanto personaggi storicamente documentati per evitare qualsiasi forma di invenzione narrativa.",
                correct: false,
                explanation:
                    "Nel romanzo compaiono anche personaggi storici, ma molti protagonisti fondamentali sono inventati. Il romanzo storico manzoniano nasce proprio dall'incontro tra ricostruzione documentata e invenzione narrativa compatibile con il quadro storico.",
            },
            {
                id: "D",
                text: "La ricostruzione storica serve soprattutto a idealizzare il Seicento lombardo come un periodo di ordine politico e amministrativo.",
                correct: false,
                explanation:
                    "Il Seicento rappresentato nel romanzo è spesso caratterizzato da inefficienze, ingiustizie, violenza e cattiva amministrazione. Manzoni usa anche l'ironia per mettere in luce la distanza tra norme proclamate e realtà effettiva.",
            },
        ],
    },

    {
        id: 45,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 5,
        question:
            "Quale affermazione descrive meglio il passaggio che la critica scolastica indica tradizionalmente come evoluzione dal «pessimismo storico» al «pessimismo cosmico» in Leopardi?",
        answers: [
            {
                id: "A",
                text: "Leopardi passa dall'idea che la civiltà abbia indebolito illusioni capaci di rendere l'uomo meno infelice a una visione dell'infelicità come condizione legata alla natura stessa degli esseri viventi.",
                correct: true,
                explanation:
                    "Nella ricostruzione tradizionale del pensiero leopardiano, in una prima fase assume rilievo la perdita delle illusioni prodotta dalla ragione e dalla civiltà moderna. Successivamente l'infelicità viene ricondotta più radicalmente al meccanismo stesso della natura, che genera negli esseri viventi un desiderio di felicità destinato a non essere pienamente soddisfatto.",
            },
            {
                id: "B",
                text: "Leopardi passa da una concezione della natura come nemica dell'uomo a una fiducia sempre maggiore nella sua funzione provvidenziale.",
                correct: false,
                explanation:
                    "La direzione è opposta a quella descritta dalla tradizionale periodizzazione scolastica. La natura, inizialmente considerata anche capace di offrire illusioni protettive, viene progressivamente rappresentata come indifferente alla felicità delle proprie creature.",
            },
            {
                id: "C",
                text: "Il pessimismo cosmico consiste nell'idea che soltanto gli uomini moderni siano infelici, mentre gli antichi vivevano in una condizione naturalmente felice.",
                correct: false,
                explanation:
                    "Questa formulazione è più vicina ad alcuni aspetti della fase definita «storica», nella quale la modernità razionale avrebbe distrutto illusioni vitali possedute in misura maggiore dagli antichi. Il pessimismo cosmico estende invece il problema dell'infelicità alla condizione naturale degli esseri viventi.",
            },
            {
                id: "D",
                text: "Le due espressioni indicano semplicemente il passaggio di Leopardi dalla poesia alla narrativa realistica di argomento sociale.",
                correct: false,
                explanation:
                    "«Pessimismo storico» e «pessimismo cosmico» sono categorie utilizzate per descrivere sviluppi del pensiero leopardiano, non il passaggio tra due generi letterari. Leopardi continuò inoltre a praticare forme poetiche e prosastiche molto diverse senza trasformarsi in narratore realista nel senso verista del termine.",
            },
        ],

    },

    {
        id: 46,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 4,
        question:
            "Nella narrativa verghiana, che cosa indica principalmente la cosiddetta «regressione» del narratore?",
        answers: [
            {
                id: "A",
                text: "Il narratore rinuncia a ogni costruzione narrativa e trascrive direttamente, senza mediazioni, conversazioni realmente registrate tra contadini.",
                correct: false,
                explanation:
                    "L'impersonalità verghiana non equivale a una registrazione documentaria della realtà. La lingua e la voce narrativa sono costruite artisticamente in modo da avvicinarsi ai valori, alle categorie mentali e alle forme espressive dell'ambiente rappresentato.",
            },
            {
                id: "B",
                text: "La voce narrante tende ad assumere prospettive e criteri di giudizio propri del mondo rappresentato, riducendo l'intervento esplicito dell'autore.",
                correct: true,
                explanation:
                    "La regressione consiste nel far apparire il racconto come se emergesse dall'interno della comunità narrata. Il narratore può quindi utilizzare modi di pensare, valori e giudizi condivisi dai personaggi, contribuendo all'effetto di impersonalità tipico della poetica verista di Verga.",
            },
            {
                id: "C",
                text: "Il narratore torna progressivamente all'infanzia e racconta tutti gli eventi dal punto di vista di un bambino.",
                correct: false,
                explanation:
                    "Il termine «regressione» non indica un ritorno anagrafico all'infanzia. È una categoria critica relativa alla posizione della voce narrante rispetto all'ambiente sociale e culturale rappresentato.",
            },
            {
                id: "D",
                text: "L'autore interrompe il racconto per spiegare direttamente al lettore quale comportamento morale dovrebbe adottare.",
                correct: false,
                explanation:
                    "Questa modalità corrisponderebbe a una forte presenza esplicita del narratore, mentre l'impersonalità verghiana tende proprio a ridurre il commento autoriale manifesto. Il giudizio emerge spesso indirettamente dal funzionamento stesso del mondo narrato.",
            },
        ],
    },

    {
        id: 47,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 4,
        question:
            "Quale affermazione descrive meglio un tratto fondamentale di Ossi di seppia di Eugenio Montale?",
        answers: [
            {
                id: "A",
                text: "Il paesaggio e gli oggetti concreti possono diventare espressione di una condizione esistenziale segnata da disarmonia, limite e difficoltà di trovare un significato definitivo.",
                correct: true,
                explanation:
                    "In Ossi di seppia il paesaggio ligure, la pietra, l'aridità e molti oggetti quotidiani non svolgono una semplice funzione descrittiva. Diventano spesso mezzi attraverso cui prende forma una condizione esistenziale problematica, collegata anche al celebre tema del «male di vivere».",
            },
            {
                id: "B",
                text: "La raccolta sviluppa principalmente il mito dannunziano del poeta-superuomo capace di dominare la società attraverso la propria eccezionalità.",
                correct: false,
                explanation:
                    "Il superomismo è legato soprattutto a una parte della produzione di D'Annunzio e alla sua rielaborazione di temi nietzscheani. Montale prende le distanze da una concezione trionfalistica del poeta e rappresenta piuttosto limite, disincanto e difficoltà conoscitiva.",
            },
            {
                id: "C",
                text: "L'opera appartiene al Verismo e applica sistematicamente la regressione del narratore alle comunità rurali siciliane.",
                correct: false,
                explanation:
                    "Il Verismo e la regressione del narratore rimandano soprattutto alla narrativa di Verga. Ossi di seppia, pubblicato nel 1925, appartiene a un contesto poetico novecentesco completamente diverso.",
            },
            {
                id: "D",
                text: "La raccolta propone una fiducia costante nella capacità della poesia di fornire spiegazioni certe e universali della realtà.",
                correct: false,
                explanation:
                    "La poesia montaliana è caratterizzata proprio dalla difficoltà di raggiungere verità definitive e da una forte coscienza del limite. Anche quando compare l'attesa di un possibile «varco», non si trasforma in un sistema di certezze universali.",
            },
        ],
    },

    {
        id: 48,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-risorgimento",
        difficulty: 3,
        question:
            "Quale sequenza dispone correttamente questi eventi dal più antico al più recente?",
        answers: [
            {
                id: "A",
                text: "Accordi di Plombières → Seconda guerra d'indipendenza → Spedizione dei Mille → proclamazione del Regno d'Italia",
                correct: true,
                explanation:
                    "Gli accordi di Plombières tra Cavour e Napoleone III risalgono al 1858; la Seconda guerra d'indipendenza si combatté nel 1859. La Spedizione dei Mille iniziò nel 1860 e il Regno d'Italia fu proclamato il 17 marzo 1861.",
            },
            {
                id: "B",
                text: "Seconda guerra d'indipendenza → Accordi di Plombières → proclamazione del Regno d'Italia → Spedizione dei Mille",
                correct: false,
                explanation:
                    "Gli accordi di Plombières precedettero la guerra del 1859 e contribuirono a preparare l'alleanza franco-piemontese. Inoltre la Spedizione dei Mille del 1860 precedette la proclamazione del Regno d'Italia del 1861.",
            },
            {
                id: "C",
                text: "Spedizione dei Mille → Seconda guerra d'indipendenza → Accordi di Plombières → proclamazione del Regno d'Italia",
                correct: false,
                explanation:
                    "La Spedizione dei Mille avvenne nel 1860, dopo gli accordi del 1858 e la guerra del 1859. Soltanto l'ultimo elemento, la proclamazione del Regno d'Italia nel 1861, è collocato correttamente alla fine.",
            },
            {
                id: "D",
                text: "Accordi di Plombières → Spedizione dei Mille → Seconda guerra d'indipendenza → proclamazione del Regno d'Italia",
                correct: false,
                explanation:
                    "Dopo Plombières venne la Seconda guerra d'indipendenza del 1859; la spedizione garibaldina iniziò l'anno successivo. Invertire questi due eventi altera la successione che portò all'unificazione del 1861.",
            },
        ],
        resources: [
            {
                id: "risorgimento-1858-1861",
                type: "timeline",
                title: "Dal progetto franco-piemontese al Regno d'Italia",
                events: [
                    {
                        year: "1858",
                        label: "Accordi di Plombières",
                    },
                    {
                        year: "1859",
                        label: "Seconda guerra d'indipendenza",
                    },
                    {
                        year: "1860",
                        label: "Spedizione dei Mille",
                    },
                    {
                        year: "1861",
                        label: "Proclamazione del Regno d'Italia",
                    },
                ],
            },
        ],
    },

    {
        id: 49,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-italiana",
        difficulty: 3,
        question:
            "Quale affermazione descrive correttamente la situazione territoriale del Regno d'Italia al momento della sua proclamazione nel 1861?",
        answers: [
            {
                id: "A",
                text: "Comprendeva già Roma e il Veneto, che erano stati annessi durante la Spedizione dei Mille.",
                correct: false,
                explanation:
                    "Nel 1861 né il Veneto né Roma facevano ancora parte del Regno d'Italia. Il Veneto fu acquisito nel 1866, mentre Roma entrò nel Regno nel 1870 dopo la presa di Porta Pia.",
            },
            {
                id: "B",
                text: "Non comprendeva ancora né il Veneto né Roma, acquisiti rispettivamente nel 1866 e nel 1870.",
                correct: true,
                explanation:
                    "L'unificazione del 1861 fu un passaggio decisivo ma non completò territorialmente il processo risorgimentale. Il Veneto entrò nel Regno dopo la Terza guerra d'indipendenza del 1866 e Roma fu annessa nel 1870.",
            },
            {
                id: "C",
                text: "Comprendeva Roma ma non la Sicilia, che rimase parte del Regno delle Due Sicilie fino al 1870.",
                correct: false,
                explanation:
                    "La Sicilia era stata conquistata dalla spedizione garibaldina e, attraverso i plebisciti e l'annessione al Regno sabaudo, faceva parte del nuovo Regno d'Italia nel 1861. Roma rimaneva invece nello Stato Pontificio.",
            },
            {
                id: "D",
                text: "Comprendeva il Veneto ma non la Lombardia, rimasta sotto il controllo austriaco fino alla Prima guerra mondiale.",
                correct: false,
                explanation:
                    "La Lombardia era passata al Regno di Sardegna nel 1859, dopo la Seconda guerra d'indipendenza, ed entrò quindi nel Regno d'Italia nel 1861. Il Veneto rimase invece sotto dominio austriaco fino al 1866.",
            },
        ],
    },

    {
        id: 50,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-prima-guerra-mondiale",
        difficulty: 4,
        question:
            "Perché l'Italia, pur appartenendo alla Triplice Alleanza, non entrò immediatamente nella Prima guerra mondiale nell'agosto 1914?",
        answers: [
            {
                id: "A",
                text: "Perché la Triplice Alleanza aveva carattere prevalentemente difensivo e il governo italiano sostenne che non ricorressero le condizioni per un intervento automatico.",
                correct: true,
                explanation:
                    "La Triplice Alleanza legava Italia, Germania e Austria-Ungheria, ma prevedeva obblighi legati soprattutto a un'aggressione subita. Nel 1914 l'Italia interpretò l'iniziativa austro-ungarica contro la Serbia come incompatibile con un automatismo dell'intervento e dichiarò la neutralità.",
            },
            {
                id: "B",
                text: "Perché l'Italia aveva già abbandonato formalmente la Triplice Alleanza nel 1900 e non possedeva più alcun accordo con Germania e Austria-Ungheria.",
                correct: false,
                explanation:
                    "L'Italia apparteneva ancora formalmente alla Triplice Alleanza nel 1914. La scelta della neutralità dipese dall'interpretazione degli obblighi del trattato e dagli interessi italiani, non da un precedente scioglimento formale dell'alleanza.",
            },
            {
                id: "C",
                text: "Perché il Parlamento italiano aveva approvato nel 1914 una legge costituzionale che vietava qualsiasi guerra fuori dal territorio nazionale.",
                correct: false,
                explanation:
                    "Non esisteva una simile norma costituzionale. Il dibattito tra neutralisti e interventisti fu politico, diplomatico e strategico e portò infine all'entrata in guerra contro l'Austria-Ungheria nel maggio 1915.",
            },
            {
                id: "D",
                text: "Perché l'Italia era già militarmente alleata con Francia e Regno Unito fin dall'inizio del conflitto.",
                correct: false,
                explanation:
                    "Nel 1914 l'Italia non faceva parte dell'Intesa come alleato militare. L'avvicinamento decisivo alle potenze dell'Intesa avvenne con il Patto di Londra dell'aprile 1915, seguito dall'entrata in guerra.",
            },
        ],
    },

    {
        id: 51,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-fascismo",
        difficulty: 4,
        question:
            "Perché la crisi seguita al delitto Matteotti del 1924 rappresentò un passaggio decisivo nel consolidamento della dittatura fascista?",
        answers: [
            {
                id: "A",
                text: "Perché provocò immediatamente la caduta definitiva di Mussolini e il ritorno a libere elezioni.",
                correct: false,
                explanation:
                    "Il regime non cadde dopo il delitto Matteotti. L'opposizione attraversò una grave crisi e la secessione dell'Aventino non riuscì a determinare la rimozione di Mussolini, che nei mesi successivi rafforzò invece il proprio controllo.",
            },
            {
                id: "B",
                text: "Perché alla crisi politica seguì una svolta apertamente autoritaria, culminata nel 1925-1926 nello smantellamento delle libertà politiche e del pluralismo.",
                correct: true,
                explanation:
                    "L'assassinio di Matteotti mise il fascismo in seria difficoltà, ma la crisi non portò al crollo del governo. Dopo il discorso di Mussolini del 3 gennaio 1925, il regime accelerò la trasformazione dittatoriale attraverso provvedimenti che limitarono opposizione, stampa e libertà politica.",
            },
            {
                id: "C",
                text: "Perché Matteotti era il re d'Italia e il suo assassinio comportò automaticamente l'abolizione della monarchia.",
                correct: false,
                explanation:
                    "Giacomo Matteotti era un deputato socialista e un importante oppositore del fascismo, non il sovrano. La monarchia rimase in vigore durante tutto il regime fascista e terminò soltanto con il referendum istituzionale del 1946.",
            },
            {
                id: "D",
                text: "Perché il delitto determinò l'ingresso dell'Italia nella Seconda guerra mondiale pochi mesi dopo.",
                correct: false,
                explanation:
                    "Il delitto Matteotti avvenne nel 1924, mentre l'Italia entrò nella Seconda guerra mondiale il 10 giugno 1940. Tra i due eventi intercorrono sedici anni e non esiste il rapporto cronologico diretto suggerito dall'alternativa.",
            },
        ],
        resources: [
            {
                id: "fascismo-1922-1926",
                type: "timeline",
                title: "Dall'ascesa del fascismo alla dittatura",
                events: [
                    {
                        year: "1922",
                        label: "Marcia su Roma e incarico di governo a Mussolini",
                    },
                    {
                        year: "1923",
                        label: "Legge Acerbo",
                    },
                    {
                        year: "1924",
                        label: "Elezioni politiche e delitto Matteotti",
                    },
                    {
                        year: "1925-1926",
                        label: "Svolta dittatoriale e leggi fascistissime",
                    },
                ],
            },
        ],
    },

    {
        id: 52,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-seconda-guerra-mondiale",
        difficulty: 4,
        question:
            "Quale descrizione rappresenta correttamente una conseguenza dell'armistizio italiano annunciato l'8 settembre 1943?",
        answers: [
            {
                id: "A",
                text: "L'Italia uscì immediatamente da ogni conflitto e l'intero territorio nazionale tornò sotto un unico governo.",
                correct: false,
                explanation:
                    "L'armistizio non pose immediatamente fine alla guerra sul territorio italiano. Seguì invece una fase complessa caratterizzata dall'occupazione tedesca di gran parte del Centro-Nord, dall'avanzata alleata e dalla divisione politica e militare del Paese.",
            },
            {
                id: "B",
                text: "La Germania occupò ampie zone del Centro-Nord, nacque la Repubblica Sociale Italiana e si sviluppò la Resistenza contro nazisti e fascisti repubblicani.",
                correct: true,
                explanation:
                    "Dopo l'annuncio dell'armistizio, le forze tedesche occuparono rapidamente gran parte dell'Italia non controllata dagli Alleati. Nel Centro-Nord nacque la Repubblica Sociale Italiana guidata da Mussolini, mentre si svilupparono le formazioni della Resistenza.",
            },
            {
                id: "C",
                text: "Mussolini tornò a guidare il Regno d'Italia da Roma con il sostegno degli Alleati anglo-americani.",
                correct: false,
                explanation:
                    "Mussolini, liberato dai tedeschi, guidò la Repubblica Sociale Italiana sotto forte dipendenza dalla Germania. Il Regno d'Italia, con il re e il governo Badoglio, si collocò invece nell'area controllata dagli Alleati.",
            },
            {
                id: "D",
                text: "L'esercito tedesco abbandonò immediatamente la penisola e concentrò tutte le proprie forze sul fronte orientale.",
                correct: false,
                explanation:
                    "Accadde il contrario: la Germania occupò militarmente vaste aree dell'Italia e organizzò una lunga difesa contro l'avanzata alleata. Il territorio italiano rimase teatro di guerra fino al 1945.",
            },
        ],
        resources: [
            {
                id: "italia-1943-1945",
                type: "map",
                label: "Carta dell'Italia dopo l'armistizio dell'8 settembre 1943",
                src: `${import.meta.env.BASE_URL}resources/maps/italia-1943-1945.png`,
                alt: "Carta dell'Italia tra 1943 e 1945 con aree occupate dai tedeschi, Repubblica Sociale Italiana, Regno del Sud e avanzata alleata",
                caption:
                    "La carta permette di visualizzare la divisione politico-militare della penisola dopo l'armistizio e il progressivo spostamento del fronte verso nord.",
            },
        ],
    },

    {
        id: 53,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-repubblica-italiana",
        difficulty: 3,
        question:
            "Quale sequenza di eventi relativi alla nascita della Repubblica italiana è cronologicamente corretta?",
        answers: [
            {
                id: "A",
                text: "Referendum istituzionale → elezione dell'Assemblea Costituente → approvazione della Costituzione → entrata in vigore della Costituzione",
                correct: true,
                explanation:
                    "Il referendum istituzionale e l'elezione dell'Assemblea Costituente si svolsero entrambi il 2 giugno 1946. La Costituzione fu poi approvata dall'Assemblea il 22 dicembre 1947 ed entrò in vigore il 1° gennaio 1948.",
            },
            {
                id: "B",
                text: "Approvazione della Costituzione → referendum istituzionale → elezione dell'Assemblea Costituente → entrata in vigore della Costituzione",
                correct: false,
                explanation:
                    "La Costituzione fu elaborata proprio dall'Assemblea Costituente eletta nel 1946, quindi non poteva essere approvata prima della sua elezione. L'approvazione avvenne soltanto nel dicembre 1947.",
            },
            {
                id: "C",
                text: "Elezione dell'Assemblea Costituente → entrata in vigore della Costituzione → referendum istituzionale → approvazione della Costituzione",
                correct: false,
                explanation:
                    "Il referendum e l'elezione dell'Assemblea Costituente furono contemporanei, il 2 giugno 1946. L'entrata in vigore della Costituzione avvenne invece dopo la sua approvazione e promulgazione, il 1° gennaio 1948.",
            },
            {
                id: "D",
                text: "Entrata in vigore della Costituzione → referendum istituzionale → approvazione della Costituzione → elezione dell'Assemblea Costituente",
                correct: false,
                explanation:
                    "Questa sequenza rovescia quasi interamente l'ordine reale degli eventi. La Costituzione poté entrare in vigore soltanto dopo il referendum repubblicano, l'elezione dell'Assemblea e il lavoro costituzionale del 1946-1947.",
            },
        ],
    },

    {
        id: 54,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "educazione-civica",
        difficulty: 3,
        question:
            "Quale affermazione corrisponde al contenuto dell'articolo 34 della Costituzione italiana?",
        answers: [
            {
                id: "A",
                text: "La scuola è aperta a tutti e i capaci e meritevoli, anche se privi di mezzi, hanno diritto di raggiungere i gradi più alti degli studi.",
                correct: true,
                explanation:
                    "L'articolo 34 afferma l'apertura della scuola a tutti e collega il diritto allo studio anche alla possibilità per capaci e meritevoli privi di mezzi di raggiungere i gradi più alti dell'istruzione. Prevede inoltre, nel suo testo costituzionale, che l'istruzione inferiore impartita per almeno otto anni sia obbligatoria e gratuita.",
            },
            {
                id: "B",
                text: "L'insegnamento può essere impartito esclusivamente dallo Stato e non possono esistere scuole istituite da soggetti privati.",
                correct: false,
                explanation:
                    "Questa formulazione contrasta con l'articolo 33, che riconosce a enti e privati il diritto di istituire scuole e istituti di educazione, secondo le condizioni previste dall'ordinamento. L'articolo 34 riguarda soprattutto accesso alla scuola e diritto allo studio.",
            },
            {
                id: "C",
                text: "L'accesso ai gradi più alti degli studi è riservato costituzionalmente a chi possiede mezzi economici sufficienti.",
                correct: false,
                explanation:
                    "L'articolo 34 afferma esattamente il principio opposto: capacità e merito non devono essere vanificati dalla mancanza di mezzi economici. La Repubblica deve rendere effettivo questo diritto attraverso strumenti come borse di studio e altre provvidenze attribuite secondo concorso.",
            },
            {
                id: "D",
                text: "La Costituzione stabilisce che soltanto l'istruzione universitaria debba essere obbligatoria e gratuita.",
                correct: false,
                explanation:
                    "L'università non è resa obbligatoria dall'articolo 34. Il testo costituzionale riferisce obbligatorietà e gratuità all'istruzione inferiore impartita per almeno otto anni, mentre per i gradi superiori tutela il diritto allo studio dei capaci e meritevoli.",
            },
        ],
    },

    {
        id: 55,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-europea",
        difficulty: 4,
        question:
            "Quale associazione tra tappa dell'integrazione europea e relativo significato storico è corretta?",
        answers: [
            {
                id: "A",
                text: "Trattati di Roma del 1957 — istituzione della Comunità Economica Europea.",
                correct: true,
                explanation:
                    "I Trattati di Roma, firmati nel 1957 ed entrati in vigore nel 1958, istituirono la Comunità Economica Europea e l'Euratom. Rappresentarono un passaggio fondamentale dall'integrazione settoriale della CECA verso una cooperazione economica molto più ampia.",
            },
            {
                id: "B",
                text: "Trattato di Maastricht del 1992 — istituzione originaria della Comunità Europea del Carbone e dell'Acciaio.",
                correct: false,
                explanation:
                    "La CECA nacque con il Trattato di Parigi del 1951, diversi decenni prima di Maastricht. Il Trattato di Maastricht, firmato nel 1992, segnò invece la nascita dell'Unione europea e approfondì il percorso verso l'unione economica e monetaria.",
            },
            {
                id: "C",
                text: "Trattato di Parigi del 1951 — introduzione immediata dell'euro come moneta comune dei sei Stati fondatori.",
                correct: false,
                explanation:
                    "Il Trattato di Parigi istituì la CECA, concentrata sui settori del carbone e dell'acciaio. L'euro appartiene a una fase molto successiva del processo di integrazione e fu introdotto come moneta scritturale nel 1999 e come contante nel 2002.",
            },
            {
                id: "D",
                text: "Dichiarazione Schuman del 1950 — abolizione immediata di tutte le frontiere interne europee e fondazione dell'area Schengen.",
                correct: false,
                explanation:
                    "La Dichiarazione Schuman propose la messa in comune della produzione franco-tedesca di carbone e acciaio e preparò la nascita della CECA. L'accordo di Schengen appartiene invece agli anni Ottanta e riguarda la progressiva eliminazione dei controlli alle frontiere interne tra gli Stati partecipanti.",
            },
        ],
        resources: [
            {
                id: "integrazione-europea-timeline",
                type: "timeline",
                title: "Tappe essenziali dell'integrazione europea",
                events: [
                    {
                        year: "1950",
                        label: "Dichiarazione Schuman",
                    },
                    {
                        year: "1951",
                        label: "Trattato di Parigi e nascita della CECA",
                    },
                    {
                        year: "1957",
                        label: "Trattati di Roma e nascita della CEE",
                    },
                    {
                        year: "1992",
                        label: "Trattato di Maastricht",
                    },
                ],
            },
        ],
    },

    {
        id: 56,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-italiana",
        difficulty: 3,
        question:
            "Quale elenco comprende tutte e sole le regioni italiane che confinano via terra con il Lazio?",
        answers: [
            {
                id: "A",
                text: "Toscana, Umbria, Marche, Abruzzo, Molise e Campania",
                correct: true,
                explanation:
                    "Il Lazio confina a nord-ovest con la Toscana, a nord con l'Umbria, per un breve tratto con le Marche, a est con l'Abruzzo e il Molise e a sud-est con la Campania. A ovest è invece delimitato dal mar Tirreno.",
            },
            {
                id: "B",
                text: "Toscana, Umbria, Emilia-Romagna, Abruzzo, Molise e Campania",
                correct: false,
                explanation:
                    "L'Emilia-Romagna non confina con il Lazio: tra le due regioni si interpongono principalmente Toscana e Marche. Nell'elenco manca inoltre proprio la regione Marche, che possiede un breve confine con il Lazio.",
            },
            {
                id: "C",
                text: "Toscana, Umbria, Marche, Abruzzo, Puglia e Campania",
                correct: false,
                explanation:
                    "La Puglia non raggiunge il Lazio; tra le due regioni si trova il territorio di altre regioni meridionali. Il confine orientale meridionale del Lazio comprende invece un breve tratto con il Molise.",
            },
            {
                id: "D",
                text: "Liguria, Toscana, Umbria, Marche, Abruzzo e Campania",
                correct: false,
                explanation:
                    "La Liguria non confina con il Lazio, essendo separata da esso dalla Toscana. Inoltre l'elenco omette il Molise, che confina con il settore sud-orientale del Lazio.",
            },
        ],
        resources: [
            {
                id: "lazio-regioni-confinanti",
                type: "map",
                label: "Carta delle regioni confinanti con il Lazio",
                src: `${import.meta.env.BASE_URL}resources/maps/lazio-regioni-confinanti.png`,
                alt: "Carta dell'Italia centrale con il Lazio e le regioni confinanti evidenziate",
                caption:
                    "La carta permette di osservare la posizione del Lazio rispetto a Toscana, Umbria, Marche, Abruzzo, Molise e Campania.",
            },
        ],
    },

    {
        id: 57,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-fisica",
        difficulty: 3,
        question:
            "Quale affermazione descrive correttamente il bacino idrografico del Po?",
        answers: [
            {
                id: "A",
                text: "Raccoglie acque provenienti sia dal versante meridionale delle Alpi sia da quello settentrionale dell'Appennino e le convoglia verso l'Adriatico.",
                correct: true,
                explanation:
                    "Il bacino del Po occupa gran parte della Pianura Padana ed è alimentato da numerosi affluenti provenienti dalle Alpi e dall'Appennino settentrionale. Il fiume principale scorre verso est e termina con un ampio delta nel mar Adriatico.",
            },
            {
                id: "B",
                text: "Raccoglie esclusivamente fiumi provenienti dagli Appennini e termina nel mar Tirreno presso Roma.",
                correct: false,
                explanation:
                    "Molti importanti affluenti del Po provengono dalle Alpi, quindi il bacino non è esclusivamente appenninico. Il fiume che attraversa Roma e sfocia nel Tirreno è il Tevere.",
            },
            {
                id: "C",
                text: "Coincide con il bacino dell'Adige, perché l'Adige è il principale affluente orientale del Po.",
                correct: false,
                explanation:
                    "Po e Adige appartengono a bacini distinti e raggiungono separatamente il mar Adriatico. L'Adige non è un affluente del Po, anche se entrambi scorrono nell'Italia settentrionale.",
            },
            {
                id: "D",
                text: "È limitato interamente alla regione Piemonte e non riceve affluenti dopo l'ingresso in Lombardia.",
                correct: false,
                explanation:
                    "Il Po nasce in Piemonte ma attraversa e delimita territori di più regioni della Pianura Padana. Riceve numerosi affluenti anche molto più a est, tra cui fiumi provenienti dalla Lombardia e dall'Emilia-Romagna.",
            },
        ],
        resources: [
            {
                id: "bacino-idrografico-po",
                type: "map",
                label: "Carta del bacino idrografico del Po",
                src: `${import.meta.env.BASE_URL}resources/maps/bacino-idrografico-po.png`,
                alt: "Carta dell'Italia settentrionale con corso del Po, principali affluenti, Alpi, Appennini e foce nell'Adriatico",
                caption:
                    "La carta evidenzia il ruolo delle Alpi e dell'Appennino come aree di alimentazione del sistema fluviale padano.",
            },
        ],
    },

    {
        id: 58,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-coordinate",
        difficulty: 3,
        question:
            "Due località P e Q hanno rispettivamente coordinate 42° N, 5° E e 42° N, 15° E. Quale affermazione è necessariamente vera?",
        answers: [
            {
                id: "A",
                text: "P e Q si trovano sullo stesso meridiano, ma Q è più a nord.",
                correct: false,
                explanation:
                    "I meridiani sono individuati dalla longitudine, che nei due punti è diversa: 5° E per P e 15° E per Q. La latitudine è invece identica, quindi nessuno dei due punti è più a nord dell'altro.",
            },
            {
                id: "B",
                text: "P e Q si trovano sullo stesso parallelo e Q è più a est di P.",
                correct: true,
                explanation:
                    "Entrambi i punti hanno latitudine 42° N, quindi appartengono allo stesso parallelo. Q possiede una longitudine orientale maggiore, 15° E invece di 5° E, e si trova quindi più a est.",
            },
            {
                id: "C",
                text: "Q si trova più vicino all'Equatore perché possiede una longitudine maggiore.",
                correct: false,
                explanation:
                    "La distanza angolare dall'Equatore è determinata dalla latitudine, non dalla longitudine. Poiché entrambe le località sono a 42° N, hanno la stessa distanza angolare dall'Equatore.",
            },
            {
                id: "D",
                text: "P si trova nell'emisfero occidentale mentre Q si trova in quello orientale.",
                correct: false,
                explanation:
                    "Entrambe le longitudini sono indicate con E, cioè est del meridiano di Greenwich. P e Q appartengono quindi entrambe all'emisfero orientale rispetto al meridiano fondamentale.",
            },
        ],
        resources: [
            {
                id: "coordinate-paralleli-meridiani",
                type: "diagram",
                label: "Schema di latitudine e longitudine",
                src: `${import.meta.env.BASE_URL}resources/diagrams/coordinate-paralleli-meridiani.png`,
                alt: "Reticolo geografico con paralleli, meridiani e due punti alla stessa latitudine ma con longitudine diversa",
                caption:
                    "Lo schema mostra che punti con la stessa latitudine appartengono allo stesso parallelo, mentre la longitudine determina la posizione est-ovest.",
            },
        ],
    },

    {
        id: 59,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-cartografia",
        difficulty: 3,
        question:
            "Su una carta in scala 1:200.000, due località distano 7,5 cm. Qual è la loro distanza reale?",
        answers: [
            {
                id: "A",
                text: "1,5 km",
                correct: false,
                explanation:
                    "In scala 1:200.000, un centimetro sulla carta corrisponde a 200.000 cm reali, cioè 2 km. Moltiplicando 7,5 per 2 si ottiene una distanza molto maggiore di 1,5 km.",
            },
            {
                id: "B",
                text: "15 km",
                correct: true,
                explanation:
                    "La scala 1:200.000 significa che 1 cm sulla carta rappresenta 200.000 cm nella realtà. Poiché 200.000 cm equivalgono a 2 km, 7,5 cm corrispondono a 7,5 × 2 = 15 km.",
            },
            {
                id: "C",
                text: "150 km",
                correct: false,
                explanation:
                    "150 km è dieci volte il risultato corretto e deriva da una conversione errata tra centimetri e chilometri. Duecentomila centimetri equivalgono a 2 km, non a 20 km.",
            },
            {
                id: "D",
                text: "3,75 km",
                correct: false,
                explanation:
                    "Questo valore si otterrebbe usando erroneamente 0,5 km per ogni centimetro della carta. La scala indicata stabilisce invece che ogni centimetro rappresenta 2 km reali.",
            },
        ],
    },

    {
        id: 60,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-europea",
        difficulty: 4,
        question:
            "Quale associazione tra grande fiume europeo e mare in cui sfocia è corretta?",
        answers: [
            {
                id: "A",
                text: "Danubio — Mar Nero",
                correct: true,
                explanation:
                    "Il Danubio attraversa o delimita numerosi Stati dell'Europa centrale e orientale e termina con un vasto delta nel Mar Nero, principalmente tra Romania e Ucraina. Il suo bacino costituisce uno dei grandi sistemi idrografici transnazionali europei.",
            },
            {
                id: "B",
                text: "Reno — Mar Nero",
                correct: false,
                explanation:
                    "Il Reno scorre dall'area alpina verso l'Europa nord-occidentale e raggiunge il Mare del Nord attraverso il sistema deltizio dei Paesi Bassi. Non appartiene quindi al bacino del Mar Nero.",
            },
            {
                id: "C",
                text: "Loira — Mar Mediterraneo",
                correct: false,
                explanation:
                    "La Loira attraversa la Francia e sfocia nell'Oceano Atlantico nei pressi di Saint-Nazaire. Non raggiunge il Mediterraneo, verso il quale scorrono invece altri sistemi fluviali francesi, come quello del Rodano.",
            },
            {
                id: "D",
                text: "Ebro — Oceano Atlantico",
                correct: false,
                explanation:
                    "L'Ebro attraversa la Spagna nord-orientale e forma un delta nel Mar Mediterraneo. Tra i grandi fiumi della penisola iberica che raggiungono l'Atlantico vi sono invece, per esempio, il Tago e il Duero.",
            },
        ],
        resources: [
            {
                id: "europa-grandi-fiumi",
                type: "map",
                label: "Carta dei principali fiumi europei",
                src: `${import.meta.env.BASE_URL}resources/maps/europa-grandi-fiumi.png`,
                alt: "Carta fisica dell'Europa con Danubio, Reno, Loira ed Ebro e i rispettivi mari di sbocco",
                caption:
                    "La carta permette di associare i principali sistemi fluviali europei ai rispettivi bacini marittimi.",
            },
        ],
    }, {
        id: 61,
        area: "cultura-matematico-scientifica",
        category: "matematica-aritmetica",
        difficulty: 3,
        question:
            "Qual è il valore dell'espressione 5/6 − 1/4 + 1/3?",
        answers: [
            {
                id: "A",
                text: "11/12",
                correct: true,
                explanation:
                    "Per sommare e sottrarre frazioni occorre esprimerle con un denominatore comune. Il minimo comune multiplo di 6, 4 e 3 è 12: 5/6 = 10/12, 1/4 = 3/12 e 1/3 = 4/12; quindi 10/12 − 3/12 + 4/12 = 11/12.",
            },
            {
                id: "B",
                text: "7/12",
                correct: false,
                explanation:
                    "7/12 si ottiene fermandosi dopo la prima sottrazione: 10/12 − 3/12 = 7/12. L'espressione contiene però anche il termine +1/3, cioè +4/12, che deve ancora essere sommato.",
            },
            {
                id: "C",
                text: "1/2",
                correct: false,
                explanation:
                    "1/2 equivale a 6/12 e non è il risultato delle operazioni indicate. Quando si sommano o sottraggono frazioni con denominatori diversi non si possono operare direttamente numeratori e denominatori: bisogna prima trovare un denominatore comune.",
            },
            {
                id: "D",
                text: "13/12",
                correct: false,
                explanation:
                    "13/12 si otterrebbe trattando erroneamente il termine 1/4 come positivo: 10/12 + 3/12 avrebbe già valore 13/12. Nel testo, invece, 1/4 deve essere sottratto, mentre 1/3 deve essere aggiunto.",
            },
        ],
    },

    {
        id: 62,
        area: "cultura-matematico-scientifica",
        category: "matematica-algebra",
        difficulty: 4,
        question:
            "Qual è la soluzione dell'equazione (x − 2)/3 + (x + 1)/2 = 5?",
        answers: [
            {
                id: "A",
                text: "x = 5",
                correct: false,
                explanation:
                    "Sostituendo x = 5 si ottiene 3/3 + 6/2 = 1 + 3 = 4, non 5. Una soluzione di un'equazione deve rendere uguali i due membri quando viene sostituita alla variabile.",
            },
            {
                id: "B",
                text: "x = 6",
                correct: false,
                explanation:
                    "Con x = 6 il primo membro diventa 4/3 + 7/2 = 29/6, cioè circa 4,83. Il valore è vicino a 5 ma non lo raggiunge esattamente, quindi 6 non è una soluzione.",
            },
            {
                id: "C",
                text: "x = 31/5",
                correct: true,
                explanation:
                    "Moltiplicando entrambi i membri per 6 si eliminano i denominatori: 2(x−2) + 3(x+1) = 30. Sviluppando si ottiene 2x−4+3x+3=30, quindi 5x−1=30, 5x=31 e infine x=31/5, cioè 6,2.",
            },
            {
                id: "D",
                text: "x = 13/2",
                correct: false,
                explanation:
                    "13/2 equivale a 6,5. Sostituendolo nell'equazione si ottiene 1,5 + 3,75 = 5,25, quindi il primo membro non coincide con 5.",
            },
        ],
    },

    {
        id: 63,
        area: "cultura-matematico-scientifica",
        category: "matematica-problemi",
        difficulty: 4,
        question:
            "Per uno spettacolo vengono venduti 30 biglietti: quelli interi costano 12 euro e quelli ridotti 8 euro. L'incasso complessivo è di 296 euro. Quanti biglietti ridotti sono stati venduti?",
        answers: [
            {
                id: "A",
                text: "14",
                correct: false,
                explanation:
                    "14 è il numero dei biglietti interi nella soluzione corretta, non di quelli ridotti. Con 14 interi e 16 ridotti l'incasso è infatti 14×12 + 16×8 = 168 + 128 = 296 euro.",
            },
            {
                id: "B",
                text: "16",
                correct: true,
                explanation:
                    "Indicando con I gli interi e con R i ridotti, si ha I+R=30 e 12I+8R=296. Sostituendo I=30−R: 12(30−R)+8R=296, quindi 360−4R=296, da cui 4R=64 e R=16.",
            },
            {
                id: "C",
                text: "18",
                correct: false,
                explanation:
                    "Se fossero stati venduti 18 ridotti, gli interi sarebbero 12. L'incasso sarebbe 18×8 + 12×12 = 144 + 144 = 288 euro, inferiore agli 296 euro indicati.",
            },
            {
                id: "D",
                text: "20",
                correct: false,
                explanation:
                    "Con 20 biglietti ridotti resterebbero 10 biglietti interi. L'incasso sarebbe 20×8 + 10×12 = 160 + 120 = 280 euro, quindi questa distribuzione non soddisfa il dato economico.",
            },
        ],
    },

    {
        id: 64,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria",
        difficulty: 3,
        question:
            "Un rettangolo ha una diagonale lunga 13 cm e uno dei lati lungo 5 cm. Qual è la sua area?",
        answers: [
            {
                id: "A",
                text: "30 cm²",
                correct: false,
                explanation:
                    "Un'area di 30 cm² con un lato di 5 cm richiederebbe un secondo lato di 6 cm. In quel caso la diagonale sarebbe √(5²+6²)=√61, non 13 cm.",
            },
            {
                id: "B",
                text: "60 cm²",
                correct: true,
                explanation:
                    "La diagonale e i due lati del rettangolo formano un triangolo rettangolo. Per Pitagora, il lato mancante vale √(13²−5²)=√(169−25)=√144=12 cm; l'area è quindi 5×12=60 cm².",
            },
            {
                id: "C",
                text: "65 cm²",
                correct: false,
                explanation:
                    "65 deriva dal prodotto 5×13, ma la diagonale non è un lato del rettangolo e quindi non può essere utilizzata direttamente nella formula dell'area. Prima bisogna determinare il secondo lato tramite il teorema di Pitagora.",
            },
            {
                id: "D",
                text: "78 cm²",
                correct: false,
                explanation:
                    "78 cm² corrisponderebbero, con un lato di 5 cm, a un secondo lato di 15,6 cm, che sarebbe addirittura maggiore della diagonale. In un rettangolo la diagonale è sempre più lunga di ciascun singolo lato.",
            },
        ],

    },

    {
        id: 65,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria",
        difficulty: 3,
        question:
            "Una circonferenza misura 10π cm. Qual è l'area del cerchio delimitato da essa?",
        answers: [
            {
                id: "A",
                text: "10π cm²",
                correct: false,
                explanation:
                    "10π è la misura della circonferenza fornita dal problema, non quella dell'area. Circonferenza e area utilizzano formule diverse: C=2πr e A=πr².",
            },
            {
                id: "B",
                text: "20π cm²",
                correct: false,
                explanation:
                    "Dalla circonferenza 10π si ricava un raggio di 5 cm. L'area richiede il quadrato del raggio, quindi non basta moltiplicare semplicemente π per un valore lineare vicino a 20.",
            },
            {
                id: "C",
                text: "25π cm²",
                correct: true,
                explanation:
                    "Da 2πr=10π si ottiene 2r=10 e quindi r=5 cm. Applicando la formula A=πr² si ha A=π×5²=25π cm².",
            },
            {
                id: "D",
                text: "100π cm²",
                correct: false,
                explanation:
                    "100π deriverebbe dal quadrato di 10, ma 10 non è il raggio: è il coefficiente della misura della circonferenza 10π. Il raggio deve prima essere ricavato dividendo per 2π.",
            },
        ],
    },

    {
        id: 66,
        area: "cultura-matematico-scientifica",
        category: "matematica-statistica",
        difficulty: 4,
        question:
            "Si considerano i dati 2, 3, 3, 4, 8. Se il valore 8 viene sostituito con 80, quale affermazione è corretta?",
        answers: [
            {
                id: "A",
                text: "La media e la mediana rimangono entrambe invariate.",
                correct: false,
                explanation:
                    "La mediana resta 3 perché il valore centrale dell'insieme ordinato non cambia. La media, invece, è sensibile alla grandezza di tutti i valori e aumenta notevolmente quando 8 viene sostituito da 80.",
            },
            {
                id: "B",
                text: "La media rimane 4, mentre la mediana passa da 3 a 16.",
                correct: false,
                explanation:
                    "La media iniziale è 20/5=4, ma dopo la sostituzione la somma diventa 92 e la nuova media è 18,4. La mediana rimane invece il terzo valore della sequenza ordinata, cioè 3.",
            },
            {
                id: "C",
                text: "La media aumenta da 4 a 18,4, mentre la mediana rimane 3.",
                correct: true,
                explanation:
                    "La media iniziale è (2+3+3+4+8)/5=4. Dopo la sostituzione diventa (2+3+3+4+80)/5=92/5=18,4, mentre la mediana resta 3: questo mostra perché la mediana è generalmente più resistente ai valori estremi.",
            },
            {
                id: "D",
                text: "La mediana aumenta più della media perché 80 è un valore estremo.",
                correct: false,
                explanation:
                    "Accade il contrario: un valore estremo influenza fortemente la media, che utilizza tutti i valori nella somma. La mediana dipende invece dalla posizione centrale dei dati ordinati e in questo caso non cambia affatto.",
            },
        ],
    },

    {
        id: 67,
        area: "cultura-matematico-scientifica",
        category: "matematica-proporzioni",
        difficulty: 4,
        question:
            "Otto stampanti identiche producono complessivamente 2400 pagine in 15 minuti. Supponendo una velocità costante per ogni stampante, quante pagine producono 12 stampanti in 10 minuti?",
        answers: [
            {
                id: "A",
                text: "1600",
                correct: false,
                explanation:
                    "1600 si otterrebbero riducendo il numero di pagine in proporzione al passaggio da 15 a 10 minuti senza considerare l'aumento delle stampanti. Il problema richiede invece di combinare entrambi i fattori.",
            },
            {
                id: "B",
                text: "2400",
                correct: true,
                explanation:
                    "Otto stampanti per 15 minuti corrispondono a 120 stampante-minuti. Anche 12 stampanti per 10 minuti producono 120 stampante-minuti; a parità di produttività, il lavoro complessivo è quindi identico: 2400 pagine.",
            },
            {
                id: "C",
                text: "3600",
                correct: false,
                explanation:
                    "3600 deriverebbero dall'aumento da 8 a 12 stampanti mantenendo invariati i 15 minuti. Nel secondo caso, però, il tempo disponibile scende da 15 a 10 minuti e compensa esattamente l'aumento del numero di macchine.",
            },
            {
                id: "D",
                text: "1800",
                correct: false,
                explanation:
                    "Questo risultato non rispetta la proporzionalità con il numero complessivo di stampante-minuti. Poiché 8×15 e 12×10 sono entrambi uguali a 120, la produzione deve restare la stessa.",
            },
        ],
    },

    {
        id: 68,
        area: "cultura-matematico-scientifica",
        category: "matematica-probabilita",
        difficulty: 3,
        question:
            "Si lancia una moneta equilibrata e contemporaneamente un dado regolare a sei facce. Qual è la probabilità di ottenere testa e un numero maggiore di 4?",
        answers: [
            {
                id: "A",
                text: "1/12",
                correct: false,
                explanation:
                    "Sul dado i risultati maggiori di 4 sono due, cioè 5 e 6, quindi la loro probabilità è 2/6=1/3. Moltiplicando per 1/2, probabilità di testa, si ottiene 1/6 e non 1/12.",
            },
            {
                id: "B",
                text: "1/6",
                correct: true,
                explanation:
                    "La probabilità di testa è 1/2 e quella di ottenere 5 oppure 6 è 2/6=1/3. I due esperimenti sono indipendenti, quindi la probabilità congiunta è (1/2)×(1/3)=1/6.",
            },
            {
                id: "C",
                text: "1/3",
                correct: false,
                explanation:
                    "1/3 è soltanto la probabilità che il dado mostri un numero maggiore di 4. Il quesito richiede contemporaneamente anche l'evento «testa», che dimezza ulteriormente la probabilità.",
            },
            {
                id: "D",
                text: "1/2",
                correct: false,
                explanation:
                    "1/2 è la probabilità di ottenere testa indipendentemente dal risultato del dado. Poiché deve verificarsi anche una seconda condizione, la probabilità complessiva è necessariamente inferiore.",
            },
        ],
    },

    {
        id: 69,
        area: "cultura-matematico-scientifica",
        category: "matematica-potenze",
        difficulty: 3,
        question:
            "Quanto vale 0,00072 × (3 × 10⁵)?",
        answers: [
            {
                id: "A",
                text: "0,216",
                correct: false,
                explanation:
                    "0,216 si ottiene perdendo tre ordini di grandezza durante la gestione delle potenze di 10. Poiché 0,00072 = 7,2×10⁻⁴, il prodotto delle potenze è 10⁻⁴×10⁵=10¹.",
            },
            {
                id: "B",
                text: "21,6",
                correct: false,
                explanation:
                    "Il prodotto dei coefficienti 7,2×3 vale 21,6, ma manca ancora il fattore 10 derivante da 10⁻⁴×10⁵. Il risultato deve quindi essere dieci volte maggiore.",
            },
            {
                id: "C",
                text: "216",
                correct: true,
                explanation:
                    "Scrivendo 0,00072 come 7,2×10⁻⁴ si ottiene (7,2×3)×10⁻⁴⁺⁵ = 21,6×10¹. Questo valore equivale a 216.",
            },
            {
                id: "D",
                text: "2160",
                correct: false,
                explanation:
                    "2160 corrisponderebbe a un fattore 100 rispetto a 21,6. La differenza tra gli esponenti −4 e +5 produce invece 10¹, cioè un fattore 10.",
            },
        ],
    },

    {
        id: 70,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria",
        difficulty: 4,
        question:
            "Un cubo ha volume 125 cm³. Qual è la sua superficie totale?",
        answers: [
            {
                id: "A",
                text: "25 cm²",
                correct: false,
                explanation:
                    "25 cm² è l'area di una singola faccia del cubo, perché il lato misura 5 cm e 5²=25. La superficie totale comprende però tutte e sei le facce.",
            },
            {
                id: "B",
                text: "75 cm²",
                correct: false,
                explanation:
                    "75 cm² equivale a tre facce da 25 cm² ciascuna. Un cubo possiede invece sei facce quadrate congruenti, tutte da includere nella superficie totale.",
            },
            {
                id: "C",
                text: "125 cm²",
                correct: false,
                explanation:
                    "125 è il valore numerico del volume, espresso in centimetri cubi. Volume e superficie sono grandezze differenti e hanno anche unità di misura diverse.",
            },
            {
                id: "D",
                text: "150 cm²",
                correct: true,
                explanation:
                    "Dal volume s³=125 si ricava s=5 cm. Ogni faccia ha area 5²=25 cm² e le facce sono sei, quindi la superficie totale è 6×25=150 cm².",
            },
        ],
    },

    {
        id: 71,
        area: "cultura-matematico-scientifica",
        category: "biologia-cellulare",
        difficulty: 4,
        question:
            "Una cellula animale viene immersa in una soluzione ipertonica rispetto al suo citoplasma. Quale fenomeno ci si aspetta principalmente?",
        answers: [
            {
                id: "A",
                text: "L'acqua entra nella cellula per osmosi e la cellula tende a gonfiarsi.",
                correct: false,
                explanation:
                    "Questo comportamento è tipico di una soluzione ipotonica, nella quale la concentrazione dei soluti esterni è inferiore a quella interna. In tale situazione l'acqua tende a entrare nella cellula per osmosi.",
            },
            {
                id: "B",
                text: "L'acqua esce dalla cellula per osmosi e la cellula tende a ridurre il proprio volume.",
                correct: true,
                explanation:
                    "In una soluzione ipertonica la concentrazione effettiva di soluti non permeanti è maggiore all'esterno. L'acqua attraversa quindi la membrana verso l'ambiente esterno e una cellula animale tende a restringersi.",
            },
            {
                id: "C",
                text: "I soluti esterni vengono tutti pompati attivamente dentro la cellula finché le concentrazioni diventano identiche.",
                correct: false,
                explanation:
                    "L'osmosi riguarda principalmente il movimento dell'acqua attraverso una membrana semipermeabile e non richiede che tutti i soluti vengano trasportati attivamente. Molti soluti, inoltre, non possono attraversare liberamente la membrana.",
            },
            {
                id: "D",
                text: "Non avviene alcun movimento d'acqua perché l'osmosi interessa soltanto le cellule vegetali.",
                correct: false,
                explanation:
                    "L'osmosi avviene attraverso membrane semipermeabili sia nelle cellule animali sia in quelle vegetali. Nelle cellule vegetali la parete cellulare modifica gli effetti macroscopici dell'ingresso d'acqua, ma non elimina il fenomeno.",
            },
        ],

    },

    {
        id: 72,
        area: "cultura-matematico-scientifica",
        category: "biologia-genetica",
        difficulty: 3,
        question:
            "In un carattere mendeliano a dominanza completa, A è dominante su a. Qual è la probabilità che dall'incrocio Aa × aa nasca un individuo con fenotipo recessivo?",
        answers: [
            {
                id: "A",
                text: "0%",
                correct: false,
                explanation:
                    "Il genitore Aa può produrre sia gameti A sia gameti a, mentre il genitore aa produce soltanto gameti a. È quindi possibile ottenere figli aa, che manifestano il fenotipo recessivo.",
            },
            {
                id: "B",
                text: "25%",
                correct: false,
                explanation:
                    "Il 25% è tipico della probabilità di aa nell'incrocio Aa×Aa. Nell'incrocio proposto uno dei genitori fornisce sempre l'allele a, quindi la probabilità di ottenere aa è maggiore.",
            },
            {
                id: "C",
                text: "50%",
                correct: true,
                explanation:
                    "Il genitore Aa produce gameti A e a con probabilità 1/2 ciascuno, mentre il genitore aa produce esclusivamente gameti a. I figli sono quindi per metà Aa, con fenotipo dominante, e per metà aa, con fenotipo recessivo.",
            },
            {
                id: "D",
                text: "75%",
                correct: false,
                explanation:
                    "Una probabilità del 75% per il fenotipo dominante compare nell'incrocio Aa×Aa, dove AA e Aa rappresentano tre combinazioni su quattro. Nell'incrocio Aa×aa le due classi fenotipiche hanno invece la stessa probabilità.",
            },
        ],

    },

    {
        id: 73,
        area: "cultura-matematico-scientifica",
        category: "ecologia",
        difficulty: 4,
        question:
            "Un inquinante persistente, difficilmente degradabile e accumulabile nei tessuti degli organismi viene introdotto in una catena alimentare acquatica. Perché la sua concentrazione può risultare particolarmente elevata nei predatori al vertice della catena?",
        answers: [
            {
                id: "A",
                text: "Perché i predatori producono spontaneamente l'inquinante durante la respirazione cellulare.",
                correct: false,
                explanation:
                    "La respirazione cellulare utilizza sostanze organiche per ricavare energia e non genera automaticamente contaminanti ambientali persistenti. L'inquinante proviene dall'ambiente e viene trasferito attraverso l'alimentazione.",
            },
            {
                id: "B",
                text: "Perché avviene biomagnificazione: i predatori assumono l'inquinante accumulato in numerose prede e possono raggiungere concentrazioni crescenti ai livelli trofici superiori.",
                correct: true,
                explanation:
                    "Un contaminante persistente che viene eliminato lentamente può accumularsi negli organismi. Quando un predatore consuma molte prede contaminate, può concentrare ulteriormente la sostanza nei propri tessuti: questo aumento lungo i livelli trofici è chiamato biomagnificazione.",
            },
            {
                id: "C",
                text: "Perché l'energia aumenta a ogni passaggio della catena alimentare e trasporta con sé una quantità crescente di inquinante.",
                correct: false,
                explanation:
                    "L'energia disponibile diminuisce passando da un livello trofico al successivo a causa delle perdite metaboliche. La biomagnificazione dei contaminanti non dipende quindi da un aumento dell'energia.",
            },
            {
                id: "D",
                text: "Perché soltanto i predatori possono assorbire sostanze chimiche dall'ambiente.",
                correct: false,
                explanation:
                    "Anche produttori e consumatori di livelli inferiori possono assorbire o ingerire contaminanti. Il problema dei predatori apicali deriva dal fatto che essi integrano l'inquinante accumulato in un gran numero di organismi consumati.",
            },
        ],
    },

    {
        id: 74,
        area: "cultura-matematico-scientifica",
        category: "chimica",
        difficulty: 4,
        question:
            "A parità delle altre condizioni, una soluzione con pH 3 ha quale concentrazione di ioni H⁺ rispetto a una soluzione con pH 5?",
        answers: [
            {
                id: "A",
                text: "2 volte maggiore",
                correct: false,
                explanation:
                    "La scala del pH non è lineare ma logaritmica. Una differenza di due unità non significa quindi raddoppiare la concentrazione degli ioni H⁺.",
            },
            {
                id: "B",
                text: "10 volte maggiore",
                correct: false,
                explanation:
                    "Una differenza di una sola unità di pH corrisponde a un fattore 10 nella concentrazione di H⁺. Qui la differenza è di due unità, quindi il fattore deve essere 10².",
            },
            {
                id: "C",
                text: "100 volte maggiore",
                correct: true,
                explanation:
                    "Il pH è definito come −log₁₀[H⁺]. Una soluzione a pH 3 ha [H⁺]=10⁻³ mol/L, mentre una a pH 5 ha 10⁻⁵ mol/L: il rapporto è 10⁻³/10⁻⁵=10²=100.",
            },
            {
                id: "D",
                text: "100 volte minore",
                correct: false,
                explanation:
                    "Valori di pH più bassi corrispondono a concentrazioni maggiori di ioni H⁺. L'alternativa inverte quindi la relazione tra acidità e pH.",
            },
        ],
    },

    {
        id: 75,
        area: "cultura-matematico-scientifica",
        category: "chimica",
        difficulty: 5,
        question:
            "Considera la reazione bilanciata 2H₂ + O₂ → 2H₂O. Facendo reagire 4 mol di H₂ con 1 mol di O₂ e supponendo che la reazione proceda completamente, quale situazione finale si ottiene?",
        answers: [
            {
                id: "A",
                text: "Si formano 4 mol di H₂O e non rimane alcun reagente.",
                correct: false,
                explanation:
                    "Per produrre 4 mol di acqua servirebbero 4 mol di H₂ ma anche 2 mol di O₂. Poiché è disponibile soltanto 1 mol di ossigeno, O₂ è il reagente limitante e impedisce la formazione di 4 mol di acqua.",
            },
            {
                id: "B",
                text: "Si formano 2 mol di H₂O e rimangono 2 mol di H₂ non reagite.",
                correct: true,
                explanation:
                    "Una mole di O₂ reagisce, secondo i coefficienti stechiometrici, con 2 mol di H₂ e produce 2 mol di H₂O. Delle 4 mol iniziali di idrogeno ne vengono quindi consumate 2 e ne rimangono altre 2: l'ossigeno è il reagente limitante.",
            },
            {
                id: "C",
                text: "Si forma 1 mol di H₂O e rimangono 3 mol di H₂.",
                correct: false,
                explanation:
                    "La reazione bilanciata mostra che 1 mol di O₂ produce 2 mol di H₂O, non una sola. I coefficienti stechiometrici indicano rapporti molari precisi tra reagenti e prodotti.",
            },
            {
                id: "D",
                text: "Si formano 2 mol di H₂O e rimane 1 mol di O₂ non reagita.",
                correct: false,
                explanation:
                    "L'ossigeno viene consumato completamente perché è presente nella quantità necessaria a reagire con 2 delle 4 mol di idrogeno. Il reagente che rimane in eccesso è quindi H₂, non O₂.",
            },
        ],
    },

    {
        id: 76,
        area: "cultura-matematico-scientifica",
        category: "fisica-dinamica",
        difficulty: 3,
        question:
            "Su un corpo di massa 2 kg agiscono contemporaneamente una forza di 10 N verso destra e una forza di 4 N verso sinistra. Qual è l'accelerazione del corpo?",
        answers: [
            {
                id: "A",
                text: "3 m/s² verso destra",
                correct: true,
                explanation:
                    "Le forze hanno verso opposto, quindi la risultante è 10−4=6 N verso destra. Applicando il secondo principio della dinamica, a=F/m=6/2=3 m/s² verso destra.",
            },
            {
                id: "B",
                text: "7 m/s² verso destra",
                correct: false,
                explanation:
                    "7 m/s² si otterrebbero sommando impropriamente i moduli delle due forze, 10+4=14 N, e dividendo per 2 kg. Le forze sono però opposte e devono essere sottratte vettorialmente.",
            },
            {
                id: "C",
                text: "3 m/s² verso sinistra",
                correct: false,
                explanation:
                    "Il modulo dell'accelerazione sarebbe corretto, ma il verso è sbagliato. La forza più intensa è quella di 10 N verso destra, quindi anche la risultante e l'accelerazione puntano verso destra.",
            },
            {
                id: "D",
                text: "6 m/s² verso destra",
                correct: false,
                explanation:
                    "6 N è la forza risultante, non l'accelerazione. Per ottenere l'accelerazione bisogna ancora dividere la risultante per la massa di 2 kg, ottenendo 3 m/s².",
            },
        ],
    },

    {
        id: 77,
        area: "cultura-matematico-scientifica",
        category: "fisica-elettricita",
        difficulty: 4,
        question:
            "Due resistori da 6 Ω e 3 Ω sono collegati in parallelo. Qual è la loro resistenza equivalente?",
        answers: [
            {
                id: "A",
                text: "2 Ω",
                correct: true,
                explanation:
                    "Per resistori in parallelo vale 1/Rₑq = 1/R₁ + 1/R₂. Quindi 1/Rₑq = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2, da cui Rₑq=2 Ω.",
            },
            {
                id: "B",
                text: "9 Ω",
                correct: false,
                explanation:
                    "9 Ω è la somma 6+3 ed è la resistenza equivalente che si otterrebbe collegando i resistori in serie. Nel parallelo la resistenza equivalente è invece inferiore a ciascuna delle singole resistenze.",
            },
            {
                id: "C",
                text: "4,5 Ω",
                correct: false,
                explanation:
                    "4,5 Ω è la media aritmetica di 6 e 3, ma non esiste una regola che permetta di calcolare così la resistenza equivalente. I collegamenti elettrici seguono formule diverse per serie e parallelo.",
            },
            {
                id: "D",
                text: "3 Ω",
                correct: false,
                explanation:
                    "In un collegamento parallelo la resistenza equivalente deve essere minore della resistenza più piccola del circuito, che qui è 3 Ω. Un valore esattamente uguale a 3 Ω non soddisfa quindi questa proprietà.",
            },
        ],

    },

    {
        id: 78,
        area: "cultura-matematico-scientifica",
        category: "scienze-della-terra",
        difficulty: 4,
        question:
            "Che cosa avviene tipicamente in un margine convergente tra una placca oceanica e una placca continentale?",
        answers: [
            {
                id: "A",
                text: "La placca oceanica, generalmente più densa, può sprofondare sotto quella continentale formando una zona di subduzione.",
                correct: true,
                explanation:
                    "La litosfera oceanica è generalmente più densa di quella continentale e può quindi immergersi nel mantello lungo una zona di subduzione. Questi margini sono spesso associati a fosse oceaniche, intensa sismicità e archi vulcanici sul margine continentale.",
            },
            {
                id: "B",
                text: "Le due placche si allontanano e il magma risale formando nuova crosta oceanica tra esse.",
                correct: false,
                explanation:
                    "Questa descrizione riguarda un margine divergente, come quelli presenti lungo molte dorsali medio-oceaniche. In un margine convergente le placche si muovono invece l'una verso l'altra.",
            },
            {
                id: "C",
                text: "Le placche scorrono lateralmente senza convergere e senza divergere, come lungo una faglia trasforme.",
                correct: false,
                explanation:
                    "Lo scorrimento prevalentemente orizzontale caratterizza i margini trasformi. Un margine oceanico-continentale convergente comporta invece avvicinamento e, normalmente, subduzione della placca oceanica.",
            },
            {
                id: "D",
                text: "La placca continentale sprofonda sempre completamente sotto quella oceanica perché è più densa.",
                correct: false,
                explanation:
                    "La crosta continentale è generalmente meno densa della litosfera oceanica e tende quindi a rimanere relativamente più sollevata. È normalmente la placca oceanica a entrare in subduzione.",
            },
        ],
        resources: [
            {
                id: "subduzione-oceanica-continentale",
                type: "diagram",
                label: "Margine convergente oceanico-continentale",
                src: `${import.meta.env.BASE_URL}resources/diagrams/subduzione-oceanica-continentale.png`,
                alt: "Sezione schematica di una placca oceanica che subduce sotto una placca continentale",
                caption:
                    "Lo schema evidenzia fossa oceanica, zona di subduzione, terremoti e formazione di un arco vulcanico continentale.",
            },
        ],
    },

    {
        id: 79,
        area: "cultura-matematico-scientifica",
        category: "scienze-della-terra",
        difficulty: 4,
        question:
            "Quale osservazione sismologica costituisce una delle principali evidenze del fatto che il nucleo esterno terrestre è liquido?",
        answers: [
            {
                id: "A",
                text: "Le onde S non attraversano il nucleo esterno, mentre le onde P possono attraversarlo subendo variazioni di velocità e direzione.",
                correct: true,
                explanation:
                    "Le onde S sono onde di taglio e non si propagano nei liquidi. La loro assenza oltre determinate regioni, insieme alla rifrazione delle onde P, ha permesso di dedurre che il nucleo esterno possiede comportamento liquido.",
            },
            {
                id: "B",
                text: "Né le onde P né le onde S riescono mai ad attraversare materiali solidi.",
                correct: false,
                explanation:
                    "Le onde P attraversano solidi e liquidi, mentre le onde S si propagano nei solidi ma non nei liquidi. Proprio questa differenza di comportamento rende le onde sismiche strumenti fondamentali per studiare l'interno terrestre.",
            },
            {
                id: "C",
                text: "Le onde S attraversano i liquidi più rapidamente dei solidi e accelerano nel nucleo esterno.",
                correct: false,
                explanation:
                    "Le onde S non possono propagarsi in un mezzo liquido perché richiedono una resistenza alle deformazioni di taglio. Non si osserva quindi una loro accelerazione nel nucleo esterno, ma la loro scomparsa.",
            },
            {
                id: "D",
                text: "Tutte le onde sismiche percorrono la Terra in linea retta e senza modificare mai la propria velocità.",
                correct: false,
                explanation:
                    "La velocità delle onde dipende dalle proprietà fisiche dei materiali attraversati. Quando incontrano superfici di discontinuità possono riflettersi o rifrangersi, e proprio queste variazioni permettono di ricostruire la struttura interna del pianeta.",
            },
        ],
        resources: [
            {
                id: "onde-sismiche-nucleo-terrestre",
                type: "diagram",
                label: "Propagazione delle onde P e S nell'interno terrestre",
                src: `${import.meta.env.BASE_URL}resources/diagrams/onde-p-s-nucleo-terrestre.png`,
                alt: "Sezione della Terra con traiettorie delle onde P, arresto delle onde S al nucleo esterno e zone d'ombra sismica",
                caption:
                    "Lo schema mostra la diversa propagazione delle onde P e S e il ruolo del nucleo esterno liquido nella formazione delle zone d'ombra.",
            },
        ],
    },

    {
        id: 80,
        area: "cultura-matematico-scientifica",
        category: "astronomia",
        difficulty: 3,
        question:
            "Qual è la causa principale dell'alternarsi delle stagioni sulla Terra?",
        answers: [
            {
                id: "A",
                text: "La variazione della distanza tra Terra e Sole durante l'anno.",
                correct: false,
                explanation:
                    "L'orbita terrestre è leggermente ellittica e la distanza dal Sole varia, ma questo non è il meccanismo principale delle stagioni. Un indizio decisivo è che quando nell'emisfero nord è estate, nell'emisfero sud è inverno, nonostante la distanza Terra-Sole sia la stessa per entrambi.",
            },
            {
                id: "B",
                text: "L'inclinazione dell'asse terrestre rispetto al piano dell'orbita, combinata con il moto di rivoluzione attorno al Sole.",
                correct: true,
                explanation:
                    "L'asse terrestre è inclinato di circa 23,5° rispetto alla perpendicolare al piano orbitale. Durante la rivoluzione, questa inclinazione modifica nei due emisferi sia l'angolo con cui arrivano i raggi solari sia la durata delle ore di luce, producendo l'alternanza delle stagioni.",
            },
            {
                id: "C",
                text: "La rotazione della Terra attorno al proprio asse ogni circa 24 ore.",
                correct: false,
                explanation:
                    "La rotazione terrestre è responsabile principalmente dell'alternanza tra giorno e notte. Le stagioni richiedono invece un fenomeno su scala annuale legato all'inclinazione dell'asse e alla rivoluzione.",
            },
            {
                id: "D",
                text: "Le fasi lunari, che modificano periodicamente la quantità di energia solare ricevuta dalla Terra.",
                correct: false,
                explanation:
                    "Le fasi lunari dipendono dalle diverse configurazioni geometriche tra Sole, Terra e Luna e non determinano le stagioni. Il loro ciclo dura inoltre circa un mese, mentre quello stagionale segue l'anno terrestre.",
            },
        ],

    },
];

export default simulation01;