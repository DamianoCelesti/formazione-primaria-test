const passages17 = {
    passage01: `Ogni considerazione sui problemi di comunicazione nella prima infanzia richiede la distinzione tra i termini: "comunicazione", "linguaggio", "discorso". La comunicazione è il costrutto più ampio, che comprende ogni atto, intenzionale o no, che modifica il comportamento, le idee o le opinioni di un'altra persona. Il "linguaggio" è un sistema complesso e convenzionale di simboli arbitrari disposti e usati secondo date regole con finalità comunicative (Lahey, 1988). Nell'apprendimento del linguaggio sono compresi quattro livelli di regole: - "pragmatico", che presiede all'uso del linguaggio in un contesto sociale; - "semantico", regole riguardanti il significato e le classi di parole; - "morfologico" e "sintattico", regole per unire morfemi (unità di significato) e parole in frasi; - "fonologico", regole indicanti i suoni e le loro combinazioni permesse entro un dato sistema di linguaggio. Il "discorso" è un modo di espressione del linguaggio che implica la produzione e la ricezione di segnali vocali. C'è una seconda importante distinzione fra "comunicazione espressiva" (capacità di produrre vocalizzazioni, gesti e/o discorso) e "comunicazione ricettiva" (capacità di ricevere/o comprendere i segnali comunicativi altrui). Per una comunicazione efficace sono fondamentali sia la competenza ricettiva che quella espressiva.

Tratto e adattato da C. H. Zeanah Jr (1996), Manuale di salute mentale infantile. Amsterdam: Elsevier.`,

    passage02: `Due contributi fondamentali. Secondo Piaget, alla nascita i riflessi rappresentano l'unica forma di risposta agli stimoli ambientali. Sulla base dei riflessi, già nei primi mesi di vita il bambino, attraverso l'interazione con l'ambiente fisico e sociale, inizia a stabilire connessioni (chiamate schemi) tra uno stimolo e una risposta. Questi schemi vengono poi gradualmente modificati, secondo due meccanismi che Piaget considera come le funzioni fondamentali e costanti dello sviluppo: l'assimilazione (utilizzazione di schemi preesistenti per rispondere a stimoli nuovi) e l'accomodamento (elaborazione di schemi nuovi, meglio rispondenti a stimoli esterni). Tramite queste due funzioni, l'organismo si adatta in maniera sempre più efficace all'ambiente circostante e l'intelligenza del bambino può svilupparsi. Secondo Vygotskij l'apprendimento è storicamente determinato e si realizza in primo luogo attraverso l'interazione dell'individuo con il contesto culturale. Lo strumento principale di questa interazione è il linguaggio, che, nelle fasi iniziali dello sviluppo, il bambino integra progressivamente con l'azione, in una costante connessione linguaggio-azione. In uno stadio più maturo il bambino interiorizza il linguaggio e in tal modo sviluppa il pensiero. Il pensiero, quindi, si manifesta innanzitutto come funzione interpsichica, cioè finalizzata alla comunicazione tra gli individui, tramite il linguaggio. Solo successivamente diventa una funzione intrapsichica, cioè strumento di rappresentazione interiore della realtà e di ragionamento astratto.

Tratto e adattato da Lastrucci E. Apprendimento, in Enciclopedia dei ragazzi, Roma, Treccani, [2005], online.`,
};

const simulation17 = [
    {
        id: 1,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages17.passage01,
        question:
            "Quale delle seguenti affermazioni contraddice quanto contenuto nel testo?",
        answers: [
            {
                id: "A",
                text: "II funzionamento del linguaggio è determinato da differenti livelli di regole.",
                correct: false,
                explanation:
                    "Il testo afferma espressamente che nell'apprendimento del linguaggio sono compresi quattro livelli di regole: pragmatico, semantico, morfologico-sintattico e fonologico. L'affermazione è quindi coerente con il brano.",
            },
            {
                id: "B",
                text: "Comunicazione, linguaggio e discorso sono costrutti differenti ma correlati fra loro.",
                correct: false,
                explanation:
                    "Il brano distingue chiaramente comunicazione, linguaggio e discorso, mostrando nello stesso tempo i rapporti tra questi concetti. L'affermazione non contraddice quindi il testo.",
            },
            {
                id: "C",
                text: "La comunicazione è sempre un atto intenzionale.",
                correct: true,
                explanation:
                    "Questa affermazione contraddice direttamente il brano, che definisce la comunicazione come ogni atto «intenzionale o no» capace di modificare comportamento, idee o opinioni di un'altra persona.",
            },
            {
                id: "D",
                text: "Le regole fonologiche sono vincolate dal sistema linguistico cui si fa riferimento.",
                correct: false,
                explanation:
                    "Il testo afferma che le regole fonologiche indicano i suoni e le combinazioni permesse «entro un dato sistema di linguaggio». L'affermazione è dunque corretta rispetto al brano.",
            },
        ],
    },

    {
        id: 2,
        area: "linguistica-logica",
        category: "lessico-comprensione",
        difficulty: 2,
        passage: passages17.passage01,
        question:
            "Fra le definizioni proposte sotto per termini contenuti nel brano, individuate l’unica corretta.",
        answers: [
            {
                id: "A",
                text: "Finalità: ‘scopo, intenzione’.",
                correct: true,
                explanation:
                    "«Finalità» indica lo scopo o l'obiettivo a cui qualcosa è diretto. Nel brano il linguaggio viene infatti descritto come utilizzato secondo regole «con finalità comunicative».",
            },
            {
                id: "B",
                text: "Arbitrario: ‘motivato’.",
                correct: false,
                explanation:
                    "«Arbitrario» non significa «motivato». Nel linguaggio indica che il rapporto tra un segno e ciò che esso rappresenta non è necessariamente naturale o obbligato.",
            },
            {
                id: "C",
                text: "Convenzionale: ‘poco originale’.",
                correct: false,
                explanation:
                    "Nel contesto linguistico «convenzionale» indica qualcosa fondato su una convenzione condivisa da una comunità. Non significa semplicemente «poco originale».",
            },
            {
                id: "D",
                text: "Ricettivo: ‘di intelligenza pronta’.",
                correct: false,
                explanation:
                    "Nel brano «ricettivo» riguarda la capacità di ricevere e comprendere i segnali comunicativi altrui. Non indica una persona particolarmente intelligente o pronta.",
            },
        ],
    },

    {
        id: 3,
        area: "linguistica-logica",
        category: "linguistica-semantica",
        difficulty: 1,
        passage: passages17.passage01,
        question:
            "Il livello semantico del linguaggio si riferisce:",
        answers: [
            {
                id: "A",
                text: "Alle regole grammaticali di combinazione del linguaggio.",
                correct: false,
                explanation:
                    "Le regole relative alla combinazione di morfemi e parole appartengono soprattutto ai livelli morfologico e sintattico.",
            },
            {
                id: "B",
                text: "Alle regole di combinazione dei suoni di una lingua.",
                correct: false,
                explanation:
                    "La combinazione dei suoni appartiene al livello fonologico, che stabilisce quali suoni e combinazioni siano ammessi in un determinato sistema linguistico.",
            },
            {
                id: "C",
                text: "Alle regole di uso sociale del linguaggio.",
                correct: false,
                explanation:
                    "L'uso del linguaggio all'interno del contesto sociale riguarda il livello pragmatico.",
            },
            {
                id: "D",
                text: "Al significato delle parole.",
                correct: true,
                explanation:
                    "Il livello semantico riguarda il significato e le classi delle parole. È quindi la componente linguistica che studia ciò che parole ed espressioni significano.",
            },
        ],
    },

    {
        id: 4,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages17.passage01,
        question:
            "Il linguaggio è definibile come:",
        answers: [
            {
                id: "A",
                text: "Un sistema che comprende la comunicazione.",
                correct: false,
                explanation:
                    "Nel testo è la comunicazione a essere definita il costrutto più ampio. Il linguaggio rientra quindi nell'ambito della comunicazione e non viceversa.",
            },
            {
                id: "B",
                text: "Un sotto-sistema della comunicazione.",
                correct: true,
                explanation:
                    "La comunicazione viene presentata come il concetto più ampio, mentre il linguaggio è un sistema convenzionale di simboli utilizzato con finalità comunicative. Può dunque essere considerato un sotto-sistema della comunicazione.",
            },
            {
                id: "C",
                text: "La capacità di produrre e ricevere suoni linguistici.",
                correct: false,
                explanation:
                    "Questa descrizione è troppo limitata. Il linguaggio comprende regole pragmatiche, semantiche, morfologiche, sintattiche e fonologiche e non si riduce alla produzione e ricezione di suoni.",
            },
            {
                id: "D",
                text: "La competenza nell’uso sociale della comunicazione.",
                correct: false,
                explanation:
                    "L'uso sociale del linguaggio corrisponde specificamente al livello pragmatico, non alla definizione complessiva di linguaggio.",
            },
        ],
    },

    {
        id: 5,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages17.passage02,
        question:
            "Quali sono i due contributi fondamentali di cui parla il titolo del brano?",
        answers: [
            {
                id: "A",
                text: "L’assimilazione e l’accomodamento.",
                correct: false,
                explanation:
                    "Assimilazione e accomodamento sono due concetti fondamentali della teoria di Piaget, ma il brano nel suo complesso presenta il contributo di due differenti studiosi.",
            },
            {
                id: "B",
                text: "I concetti di inter- e intrapsichico.",
                correct: false,
                explanation:
                    "Questi due concetti appartengono alla parte dedicata a Vygotskij. Non rappresentano i due contributi complessivi richiamati dal titolo.",
            },
            {
                id: "C",
                text: "Quello di Piaget e quello di Vygotskij.",
                correct: true,
                explanation:
                    "Il brano espone prima la concezione dello sviluppo cognitivo di Piaget e successivamente quella di Vygotskij. I «due contributi fondamentali» sono quindi quelli dei due studiosi.",
            },
            {
                id: "D",
                text: "I concetti di rappresentazione interiore e ragionamento astratto.",
                correct: false,
                explanation:
                    "Rappresentazione interiore e ragionamento astratto descrivono aspetti della funzione intrapsichica secondo Vygotskij, non i due contributi generali presentati nel brano.",
            },
        ],
    },

    {
        id: 6,
        area: "linguistica-logica",
        category: "lessico-sintassi",
        difficulty: 2,
        passage: passages17.passage02,
        question:
            "Quale fra le espressioni seguenti è un equivalente del sintagma verbale meglio rispondenti?",
        answers: [
            {
                id: "A",
                text: "Che è meglio se rispondono",
                correct: false,
                explanation:
                    "Questa costruzione modifica il significato originale e non costituisce una corretta parafrasi di «meglio rispondenti».",
            },
            {
                id: "B",
                text: "Creati per rispondere",
                correct: false,
                explanation:
                    "«Creati per rispondere» introduce un'idea di finalità che non compare nel sintagma originale. Il testo parla invece di schemi più adeguati agli stimoli.",
            },
            {
                id: "C",
                text: "Coloro che rispondono meglio",
                correct: false,
                explanation:
                    "«Coloro» si riferisce normalmente a persone o individui, mentre nel brano «rispondenti» è riferito agli «schemi».",
            },
            {
                id: "D",
                text: "Che rispondono meglio",
                correct: true,
                explanation:
                    "«Schemi nuovi, meglio rispondenti a stimoli esterni» può essere correttamente riformulato come «schemi nuovi che rispondono meglio agli stimoli esterni».",
            },
        ],
    },

    {
        id: 7,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages17.passage02,
        question:
            "Cosa significa storicamente determinato?",
        answers: [
            {
                id: "A",
                text: "Che è il risultato dell’evoluzione della società umana",
                correct: true,
                explanation:
                    "Secondo Vygotskij l'apprendimento dipende dal contesto culturale e sociale in cui vive l'individuo. Dire che è «storicamente determinato» significa quindi collegarlo allo sviluppo storico della società e della cultura.",
            },
            {
                id: "B",
                text: "Che è frutto delle riflessioni degli storici",
                correct: false,
                explanation:
                    "«Storicamente determinato» non significa elaborato dagli studiosi di storia. Il riferimento è al peso delle condizioni storiche e culturali sullo sviluppo umano.",
            },
            {
                id: "C",
                text: "Che è opinione comune che sia determinato",
                correct: false,
                explanation:
                    "L'espressione non riguarda un'opinione condivisa. Descrive il fatto che l'apprendimento è condizionato dal contesto storico-sociale.",
            },
            {
                id: "D",
                text: "Che ha dei confini storici ben precisi",
                correct: false,
                explanation:
                    "Il testo non parla di limiti cronologici rigidi. Si riferisce invece all'influenza dell'evoluzione storica e culturale sul processo di apprendimento.",
            },
        ],
    },

    {
        id: 8,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 4,
        passage: passages17.passage02,
        question:
            "A quale degli elementi teorici sintetizzati dal brano fa riferimento questa celebre frase di Lev Vygotskij: “Per comprendere il linguaggio degli altri, non è sufficiente comprenderne le parole, è necessario capirne il pensiero”?",
        answers: [
            {
                id: "A",
                text: "Alla funzione intrapsichica del linguaggio",
                correct: false,
                explanation:
                    "La funzione intrapsichica riguarda soprattutto l'interiorizzazione del linguaggio come strumento di rappresentazione della realtà e ragionamento individuale.",
            },
            {
                id: "B",
                text: "Alla funzione interpsichica del linguaggio",
                correct: true,
                explanation:
                    "La frase riguarda la comprensione del pensiero di un'altra persona attraverso il linguaggio. Nel brano la funzione interpsichica è proprio quella finalizzata alla comunicazione tra individui.",
            },
            {
                id: "C",
                text: "Allo strumento dello schema, come connessione fra uno stimolo e una risposta",
                correct: false,
                explanation:
                    "Il concetto di schema appartiene alla teoria di Piaget e descrive connessioni tra stimolo e risposta. La frase citata è invece di Vygotskij.",
            },
            {
                id: "D",
                text: "Alla funzione di accomodamento, ovvero l’elaborazione di schemi nuovi",
                correct: false,
                explanation:
                    "Anche l'accomodamento appartiene alla teoria piagetiana. Non è il concetto a cui fa riferimento la citazione di Vygotskij sulla comprensione del linguaggio altrui.",
            },
        ],
    },

    {
        id: 9,
        area: "linguistica-logica",
        category: "lessico",
        difficulty: 2,
        passage: passages17.passage02,
        question:
            "Con quale equivalente lessicale potrebbe essere sostituito il verbo integrare nella frase “che […] il bambino integra progressivamente con l'azione”?",
        answers: [
            {
                id: "A",
                text: "Confronta",
                correct: false,
                explanation:
                    "«Confrontare» significa mettere due elementi a paragone. Nel brano il bambino non confronta linguaggio e azione, ma li mette progressivamente in connessione.",
            },
            {
                id: "B",
                text: "Interiorizza",
                correct: false,
                explanation:
                    "L'interiorizzazione avviene successivamente, quando il linguaggio diventa strumento del pensiero. Non è il significato di «integra» nella frase indicata.",
            },
            {
                id: "C",
                text: "Oppone",
                correct: false,
                explanation:
                    "«Opporre» significherebbe porre linguaggio e azione in contrasto, mentre il testo descrive una loro progressiva connessione.",
            },
            {
                id: "D",
                text: "Associa",
                correct: true,
                explanation:
                    "Nel contesto «integra progressivamente con l'azione» significa che il bambino collega o associa il linguaggio alle proprie azioni.",
            },
        ],
    },

    {
        id: 10,
        area: "linguistica-logica",
        category: "ortografia-sillabazione",
        difficulty: 2,
        question:
            "Quale, tra le seguenti, è la corretta divisione in sillabe della parola “quadrato”?",
        answers: [
            {
                id: "A",
                text: "Qu-a-dra-to",
                correct: false,
                explanation:
                    "Il gruppo «qu» non viene separato in questo modo e la divisione proposta non rispetta la sillabazione italiana.",
            },
            {
                id: "B",
                text: "Qu-ad-ra-to",
                correct: false,
                explanation:
                    "La divisione separa impropriamente i gruppi fonetici della parola. «Quadrato» è formato da tre sillabe.",
            },
            {
                id: "C",
                text: "Qua-dra-to",
                correct: true,
                explanation:
                    "La corretta divisione sillabica è «qua-dra-to»: tre sillabe, con il gruppo consonantico «dr» che rimane unito nella seconda sillaba.",
            },
            {
                id: "D",
                text: "Quad-ra-to",
                correct: false,
                explanation:
                    "La prima sillaba non è «quad». La consonante «d» appartiene alla sillaba successiva insieme alla «r»: «dra».",
            },
        ],
    },

    {
        id: 11,
        area: "linguistica-logica",
        category: "grammatica-aggettivi",
        difficulty: 2,
        question:
            "Quale tra i seguenti è il superlativo relativo di “buono”?",
        answers: [
            {
                id: "A",
                text: "Il più buono",
                correct: true,
                explanation:
                    "Il superlativo relativo indica il grado massimo di una qualità all'interno di un gruppo ed è formato normalmente con articolo + più/meno + aggettivo. «Il più buono» è quindi il superlativo relativo.",
            },
            {
                id: "B",
                text: "Supremo",
                correct: false,
                explanation:
                    "«Supremo» è un aggettivo con significato di massimo o elevatissimo, ma non costituisce il superlativo relativo regolare di «buono».",
            },
            {
                id: "C",
                text: "Ottimo",
                correct: false,
                explanation:
                    "«Ottimo» è il superlativo assoluto organico di «buono», non il superlativo relativo.",
            },
            {
                id: "D",
                text: "Migliore",
                correct: false,
                explanation:
                    "«Migliore» è il comparativo organico di maggioranza di «buono». Non è un superlativo relativo.",
            },
        ],
    },

    {
        id: 12,
        area: "linguistica-logica",
        category: "ortografia",
        difficulty: 1,
        question:
            "Quale di queste espressioni è corretta?",
        answers: [
            {
                id: "A",
                text: "È possibile avere un po di frutta",
                correct: false,
                explanation:
                    "La forma «po» richiede l'apostrofo perché deriva dal troncamento di «poco»: si scrive «po'».",
            },
            {
                id: "B",
                text: "È possibile avere un po’ di frutta",
                correct: true,
                explanation:
                    "La grafia corretta è «po'», con apostrofo e senza accento. Deriva dal troncamento della parola «poco».",
            },
            {
                id: "C",
                text: "È possibile avere un Po di frutta",
                correct: false,
                explanation:
                    "La maiuscola non è corretta: «Po» con la maiuscola è il nome del fiume italiano. Nel significato di «poco» serve invece «po'».",
            },
            {
                id: "D",
                text: "È possibile avere un pò di frutta",
                correct: false,
                explanation:
                    "La grafia «pò» con accento è errata. La forma corretta è «po'» con apostrofo.",
            },
        ],
    },

    {
        id: 13,
        area: "linguistica-logica",
        category: "grammatica-verbi",
        difficulty: 2,
        question:
            "Quale frase utilizza il futuro anteriore?",
        answers: [
            {
                id: "A",
                text: "Quando supererò il test mi iscriverò all’università",
                correct: false,
                explanation:
                    "«Supererò» e «mi iscriverò» sono forme del futuro semplice. Non compare un futuro anteriore.",
            },
            {
                id: "B",
                text: "Quando superai il test mi iscrissi all’università",
                correct: false,
                explanation:
                    "«Superai» e «mi iscrissi» sono forme del passato remoto.",
            },
            {
                id: "C",
                text: "Se avessi superato il test mi sarei iscritto all’università",
                correct: false,
                explanation:
                    "«Avessi superato» è congiuntivo trapassato e «mi sarei iscritto» è condizionale passato.",
            },
            {
                id: "D",
                text: "Quando avrò superato il test mi iscriverò all’università",
                correct: true,
                explanation:
                    "«Avrò superato» è futuro anteriore, formato dal futuro semplice dell'ausiliare «avere» più il participio passato «superato». Indica un'azione futura che sarà conclusa prima di un'altra azione futura.",
            },
        ],
    },

    {
        id: 14,
        area: "linguistica-logica",
        category: "grammatica-aggettivi",
        difficulty: 1,
        question:
            "Quanti tipi di superlativo esistono nella struttura grammaticale dell’italiano?",
        answers: [
            {
                id: "A",
                text: "uno solo",
                correct: false,
                explanation:
                    "In italiano non esiste un solo tipo di superlativo. La grammatica distingue due categorie principali.",
            },
            {
                id: "B",
                text: "tre",
                correct: false,
                explanation:
                    "La classificazione grammaticale tradizionale non prevede tre tipi fondamentali di superlativo.",
            },
            {
                id: "C",
                text: "due",
                correct: true,
                explanation:
                    "I due tipi sono il superlativo assoluto, che esprime una qualità al massimo grado senza confronto, e il superlativo relativo, che stabilisce il massimo o minimo all'interno di un gruppo.",
            },
            {
                id: "D",
                text: "quattro",
                correct: false,
                explanation:
                    "La grammatica italiana distingue due tipi fondamentali di superlativo, non quattro.",
            },
        ],
    },

    {
        id: 15,
        area: "linguistica-logica",
        category: "analisi-del-periodo",
        difficulty: 3,
        question:
            "Quale tipo di proposizione è contenuta nella frase: “Lei è già molto brava in inglese, per essere una studentessa del primo anno”.",
        answers: [
            {
                id: "A",
                text: "Concessiva",
                correct: true,
                explanation:
                    "L'espressione «per essere una studentessa del primo anno» introduce una circostanza che potrebbe far pensare il contrario di quanto affermato nella principale: nonostante sia soltanto al primo anno, è già molto brava. Ha quindi valore concessivo.",
            },
            {
                id: "B",
                text: "Finale",
                correct: false,
                explanation:
                    "Una proposizione finale indica lo scopo di un'azione, generalmente rispondendo alla domanda «per quale fine?». Qui non viene espresso alcuno scopo.",
            },
            {
                id: "C",
                text: "Causale",
                correct: false,
                explanation:
                    "La frase non afferma che sia brava «perché» è una studentessa del primo anno. Anzi, proprio il fatto di essere al primo anno rende sorprendente la sua bravura.",
            },
            {
                id: "D",
                text: "Temporale",
                correct: false,
                explanation:
                    "La subordinata non indica quando avviene l'azione o la situazione della principale. Non ha quindi valore temporale.",
            },
        ],
    },

    {
        id: 16,
        area: "linguistica-logica",
        category: "lessico-sinonimi",
        difficulty: 2,
        question:
            "Quale fra i seguenti è un possibile equivalente per significato di “forbito”?",
        answers: [
            {
                id: "A",
                text: "Celebre",
                correct: false,
                explanation:
                    "«Celebre» significa famoso o noto. Non è sinonimo di «forbito».",
            },
            {
                id: "B",
                text: "Ricercato",
                correct: true,
                explanation:
                    "«Forbito», riferito soprattutto al linguaggio o allo stile, significa elegante, raffinato, accurato. «Ricercato» può quindi essere utilizzato come equivalente.",
            },
            {
                id: "C",
                text: "Ritagliato",
                correct: false,
                explanation:
                    "«Ritagliato» indica qualcosa che è stato tagliato o ricavato da altro materiale. Non ha relazione con il significato di «forbito».",
            },
            {
                id: "D",
                text: "Insignito",
                correct: false,
                explanation:
                    "«Insignito» significa che qualcuno è stato premiato o decorato con un titolo o un'onorificenza. Non è sinonimo di «forbito».",
            },
        ],
    },

    {
        id: 17,
        area: "linguistica-logica",
        category: "lessico-sinonimi",
        difficulty: 2,
        question:
            "Quale fra i seguenti è un possibile equivalente per significato di “lascito”?",
        answers: [
            {
                id: "A",
                text: "Corruzione.",
                correct: false,
                explanation:
                    "«Corruzione» indica un deterioramento morale o materiale oppure un'attività illecita. Non è sinonimo di «lascito».",
            },
            {
                id: "B",
                text: "Sferzata.",
                correct: false,
                explanation:
                    "«Sferzata» indica letteralmente un colpo di sferza o, figurativamente, un impulso energico. Non corrisponde a «lascito».",
            },
            {
                id: "C",
                text: "Donazione.",
                correct: true,
                explanation:
                    "Un «lascito» è un bene, patrimonio o disposizione che viene lasciata a qualcuno, spesso per testamento. «Donazione» è quindi l'alternativa semanticamente più vicina.",
            },
            {
                id: "D",
                text: "Abbandono.",
                correct: false,
                explanation:
                    "«Abbandono» indica il lasciare qualcuno o qualcosa senza cura o protezione. Non coincide con il significato patrimoniale o figurato di «lascito».",
            },
        ],
    },

    {
        id: 18,
        area: "linguistica-logica",
        category: "lessico-classificazione",
        difficulty: 1,
        question:
            "Quale fra i termini che seguono completa adeguatamente questa serie di aggettivi che esprimono stati d’animo: triste, eccitato, indifferente",
        answers: [
            {
                id: "A",
                text: "sentimento",
                correct: false,
                explanation:
                    "«Sentimento» è un sostantivo, mentre la serie è composta da aggettivi che descrivono uno stato emotivo.",
            },
            {
                id: "B",
                text: "tristezza",
                correct: false,
                explanation:
                    "«Tristezza» è un sostantivo che indica uno stato d'animo, mentre servirebbe un altro aggettivo.",
            },
            {
                id: "C",
                text: "stato d’animo",
                correct: false,
                explanation:
                    "«Stato d'animo» è una locuzione nominale e indica la categoria generale a cui appartengono i termini della serie, non un altro elemento dello stesso tipo grammaticale.",
            },
            {
                id: "D",
                text: "allegro",
                correct: true,
                explanation:
                    "«Allegro» è, come «triste», «eccitato» e «indifferente», un aggettivo che può descrivere lo stato d'animo di una persona.",
            },
        ],
    },

    {
        id: 19,
        area: "linguistica-logica",
        category: "ortografia-monosillabi",
        difficulty: 3,
        question:
            "Quale dei seguenti monosillabi non presenta varianti ortografiche a seconda del significato?",
        answers: [
            {
                id: "A",
                text: "la",
                correct: false,
                explanation:
                    "«La» senza accento può essere articolo o pronome, mentre «là» con accento è un avverbio di luogo. Presenta quindi una variante ortografica legata al significato.",
            },
            {
                id: "B",
                text: "do",
                correct: true,
                explanation:
                    "«Do» si scrive senza accento sia quando è la prima persona del verbo «dare» sia quando indica la nota musicale. Non esiste quindi una variante accentata standard per distinguerne i significati.",
            },
            {
                id: "C",
                text: "se",
                correct: false,
                explanation:
                    "«Se» senza accento può essere una congiunzione o un pronome atono, mentre «sé» accentato è un pronome personale tonico.",
            },
            {
                id: "D",
                text: "di",
                correct: false,
                explanation:
                    "«Di» senza accento è una preposizione, mentre «dì» con accento può significare «giorno» o essere una forma dell'imperativo di «dire».",
            },
        ],
    },

    {
        id: 20,
        area: "linguistica-logica",
        category: "lessico-intruso",
        difficulty: 2,
        question:
            "Trovate l’intruso in questa serie: brusio, tramestio, brucio, acciottolio:",
        answers: [
            {
                id: "A",
                text: "brucio",
                correct: true,
                explanation:
                    "«Brucio» è una forma verbale del verbo «bruciare». Gli altri termini sono invece sostantivi che indicano diversi tipi di rumore o suono.",
            },
            {
                id: "B",
                text: "brusio",
                correct: false,
                explanation:
                    "«Brusio» è un sostantivo che indica un rumore sommesso e continuo prodotto, per esempio, da molte persone che parlano contemporaneamente.",
            },
            {
                id: "C",
                text: "tramestio",
                correct: false,
                explanation:
                    "«Tramestio» indica un rumore confuso provocato da movimenti, passi o attività. Appartiene quindi allo stesso campo semantico di «brusio» e «acciottolio».",
            },
            {
                id: "D",
                text: "acciottolio",
                correct: false,
                explanation:
                    "«Acciottolio» è un sostantivo che indica un rumore prodotto dall'urto di oggetti, tipicamente stoviglie o oggetti simili. Non è l'intruso.",
            },
        ],
    },
    {
        id: 21,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-manzoni",
        difficulty: 2,
        question:
            "“Ei fu. Siccome immobile, / dato il mortal sospiro” è l’incipit della poesia",
        answers: [
            {
                id: "A",
                text: "A Zacinto",
                correct: false,
                explanation:
                    "«A Zacinto» è un celebre sonetto di Ugo Foscolo dedicato alla sua isola natale. Non contiene l'incipit riportato nella domanda.",
            },
            {
                id: "B",
                text: "Soldati",
                correct: false,
                explanation:
                    "«Soldati» è una brevissima poesia di Giuseppe Ungaretti composta durante la Prima guerra mondiale. I versi citati appartengono invece a Manzoni.",
            },
            {
                id: "C",
                text: "Il Cinque Maggio",
                correct: true,
                explanation:
                    "«Ei fu. Siccome immobile, dato il mortal sospiro» è l'incipit de «Il Cinque Maggio» di Alessandro Manzoni, ode composta nel 1821 dopo la morte di Napoleone Bonaparte.",
            },
            {
                id: "D",
                text: "L’amica di nonna Speranza",
                correct: false,
                explanation:
                    "«L'amica di nonna Speranza» è una poesia di Guido Gozzano, appartenente alla produzione crepuscolare. Non è il testo citato.",
            },
        ],
    },

    {
        id: 22,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "metrica",
        difficulty: 1,
        question:
            "Un settenario è un verso composto da:",
        answers: [
            {
                id: "A",
                text: "Sette sillabe metriche",
                correct: true,
                explanation:
                    "Il settenario è un verso della metrica italiana che, nella definizione scolastica, è composto da sette sillabe metriche. È uno dei versi più frequenti della tradizione poetica italiana.",
            },
            {
                id: "B",
                text: "Cinque sillabe",
                correct: false,
                explanation:
                    "Un verso di cinque sillabe metriche viene chiamato quinario, non settenario.",
            },
            {
                id: "C",
                text: "Undici sillabe metriche",
                correct: false,
                explanation:
                    "Il verso di undici sillabe metriche è l'endecasillabo, molto utilizzato nella poesia italiana, compresa la «Divina Commedia».",
            },
            {
                id: "D",
                text: "Otto sillabe metriche",
                correct: false,
                explanation:
                    "Un verso di otto sillabe metriche è un ottonario. Il settenario ne presenta invece sette.",
            },
        ],
    },

    {
        id: 23,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-dante",
        difficulty: 2,
        question:
            "Quale poeta Dante non incontra nella Divina Commedia:",
        answers: [
            {
                id: "A",
                text: "Orazio",
                correct: false,
                explanation:
                    "Orazio compare nel IV canto dell'Inferno tra gli spiriti magni del Limbo, insieme ad altri grandi poeti dell'antichità.",
            },
            {
                id: "B",
                text: "Virgilio",
                correct: false,
                explanation:
                    "Virgilio è addirittura la guida principale di Dante attraverso l'Inferno e il Purgatorio. È uno dei personaggi centrali dell'opera.",
            },
            {
                id: "C",
                text: "Guido Guinizelli",
                correct: false,
                explanation:
                    "Guido Guinizelli compare nel XXVI canto del Purgatorio. Dante lo considera un importante predecessore della poesia stilnovistica.",
            },
            {
                id: "D",
                text: "Petrarca",
                correct: true,
                explanation:
                    "Francesco Petrarca nacque nel 1304 e appartiene alla generazione successiva a Dante. Non compare quindi come personaggio della «Divina Commedia».",
            },
        ],
    },

    {
        id: 24,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-pirandello",
        difficulty: 1,
        question:
            "L’uomo dal fiore in bocca è una pièce teatrale ambientata nel caffè di una stazione ferroviaria. Il suo autore è",
        answers: [
            {
                id: "A",
                text: "Carlo Goldoni",
                correct: false,
                explanation:
                    "Carlo Goldoni fu il grande riformatore della commedia italiana del Settecento. Non è l'autore de «L'uomo dal fiore in bocca».",
            },
            {
                id: "B",
                text: "Luigi Pirandello",
                correct: true,
                explanation:
                    "«L'uomo dal fiore in bocca» è un atto unico di Luigi Pirandello, derivato dalla novella «La morte addosso». Il dialogo mette a confronto un uomo gravemente malato e un avventore della stazione.",
            },
            {
                id: "C",
                text: "Vittorio Alfieri",
                correct: false,
                explanation:
                    "Vittorio Alfieri è noto soprattutto per le sue tragedie settecentesche, come «Saul» e «Mirra».",
            },
            {
                id: "D",
                text: "Pier Paolo Pasolini",
                correct: false,
                explanation:
                    "Pasolini fu poeta, scrittore e regista del Novecento, ma non è l'autore della pièce citata.",
            },
        ],
    },

    {
        id: 25,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-novecento",
        difficulty: 3,
        question:
            "Il “Gruppo 63”, è un movimento di neoavanguardia che prese il nome dall’anno della sua fondazione. Quale, tra i seguenti autori, NON appartenne al “Gruppo 63”?",
        answers: [
            {
                id: "A",
                text: "Umberto Eco",
                correct: false,
                explanation:
                    "Umberto Eco partecipò all'esperienza del Gruppo 63 e fu uno degli intellettuali legati alla neoavanguardia italiana.",
            },
            {
                id: "B",
                text: "Edoardo Sanguineti",
                correct: false,
                explanation:
                    "Edoardo Sanguineti fu uno dei protagonisti più importanti della neoavanguardia italiana e del Gruppo 63.",
            },
            {
                id: "C",
                text: "Italo Svevo",
                correct: true,
                explanation:
                    "Italo Svevo morì nel 1928, molti anni prima della nascita del Gruppo 63. È noto soprattutto per romanzi come «La coscienza di Zeno».",
            },
            {
                id: "D",
                text: "Alberto Arbasino",
                correct: false,
                explanation:
                    "Alberto Arbasino fu uno degli scrittori e intellettuali legati al Gruppo 63 e alla sperimentazione della neoavanguardia.",
            },
        ],
    },

    {
        id: 26,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-pavese",
        difficulty: 2,
        question:
            "Verrà la morte e avrà i tuoi occhi è una raccolta di poesie ispirate dall’attrice cinematografica Constance Dowling. L’autore della raccolta è",
        answers: [
            {
                id: "A",
                text: "Gabriele d’Annunzio",
                correct: false,
                explanation:
                    "D'Annunzio appartiene a una generazione precedente e morì nel 1938. Non è l'autore della raccolta dedicata a Constance Dowling.",
            },
            {
                id: "B",
                text: "Giacomo Leopardi",
                correct: false,
                explanation:
                    "Leopardi visse nella prima metà dell'Ottocento e non può essere collegato alla vicenda biografica di Constance Dowling.",
            },
            {
                id: "C",
                text: "Carlo Gozzano",
                correct: false,
                explanation:
                    "Guido Gozzano, non Carlo, fu un importante poeta crepuscolare. In ogni caso non è l'autore della raccolta citata.",
            },
            {
                id: "D",
                text: "Cesare Pavese",
                correct: true,
                explanation:
                    "«Verrà la morte e avrà i tuoi occhi» è una raccolta poetica di Cesare Pavese, pubblicata postuma nel 1951. Alcune poesie furono legate alla sua tormentata relazione con l'attrice americana Constance Dowling.",
            },
        ],
    },

    {
        id: 27,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-autori-personaggi",
        difficulty: 3,
        question:
            "Quale, tra i seguenti abbinamenti tra opera letteraria e personaggio, è sbagliato",
        answers: [
            {
                id: "A",
                text: "Sei personaggi in cerca di autore – Enrico IV",
                correct: true,
                explanation:
                    "L'abbinamento è sbagliato. «Enrico IV» è il protagonista dell'omonima opera teatrale di Pirandello, mentre «Sei personaggi in cerca d'autore» presenta un gruppo di sei personaggi senza autore.",
            },
            {
                id: "B",
                text: "Il deserto dei tartari – Giovanni Drogo",
                correct: false,
                explanation:
                    "Giovanni Drogo è il protagonista de «Il deserto dei Tartari» di Dino Buzzati. L'abbinamento è quindi corretto.",
            },
            {
                id: "C",
                text: "Il giardino dei Finzi Contini - Micol",
                correct: false,
                explanation:
                    "Micol Finzi-Contini è uno dei personaggi centrali del romanzo di Giorgio Bassani. L'abbinamento è corretto.",
            },
            {
                id: "D",
                text: "Il barone rampante – Cosimo Piovasco di Rondò",
                correct: false,
                explanation:
                    "Cosimo Piovasco di Rondò è il protagonista de «Il barone rampante» di Italo Calvino, che decide di vivere sugli alberi.",
            },
        ],
    },

    {
        id: 28,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-contemporanea",
        difficulty: 3,
        question:
            "Quale, tra i seguenti, non è un capo di Stato del XX secolo?",
        answers: [
            {
                id: "A",
                text: "Charles de Gaulle",
                correct: false,
                explanation:
                    "Charles de Gaulle fu Presidente della Repubblica francese dal 1959 al 1969 e quindi una figura politica e istituzionale del XX secolo.",
            },
            {
                id: "B",
                text: "Abraham Lincoln",
                correct: true,
                explanation:
                    "Abraham Lincoln fu Presidente degli Stati Uniti dal 1861 al 1865 e appartiene quindi al XIX secolo. È la risposta prevista dal test.",
            },
            {
                id: "C",
                text: "Iosif Stalin",
                correct: false,
                explanation:
                    "Stalin fu il principale leader dell'Unione Sovietica nel XX secolo. Nel linguaggio del quesito viene considerato tra i capi politici dello Stato sovietico.",
            },
            {
                id: "D",
                text: "Winston Churchill",
                correct: false,
                explanation:
                    "Churchill fu Primo ministro britannico e una delle principali figure politiche del XX secolo. Il test usa qui «capo di Stato» in senso non strettamente tecnico per indicare importanti leader nazionali.",
            },
        ],
    },

    {
        id: 29,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-seconda-guerra-mondiale",
        difficulty: 1,
        question:
            "Quale, tra i seguenti Paesi, mantenne lo stato di neutralità durante la Seconda Guerra Mondiale",
        answers: [
            {
                id: "A",
                text: "Germania",
                correct: false,
                explanation:
                    "La Germania nazista fu una delle principali potenze dell'Asse e protagonista diretta del conflitto.",
            },
            {
                id: "B",
                text: "Gran Bretagna",
                correct: false,
                explanation:
                    "Il Regno Unito entrò in guerra contro la Germania nel settembre 1939 e fu una delle principali potenze alleate.",
            },
            {
                id: "C",
                text: "Romania",
                correct: false,
                explanation:
                    "La Romania partecipò alla guerra inizialmente a fianco dell'Asse e nel 1944 cambiò schieramento. Non rimase neutrale.",
            },
            {
                id: "D",
                text: "Svizzera",
                correct: true,
                explanation:
                    "La Svizzera mantenne formalmente la propria neutralità durante la Seconda Guerra Mondiale, pur trovandosi circondata in larga parte da Paesi coinvolti nel conflitto.",
            },
        ],
    },

    {
        id: 30,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-guerra-fredda",
        difficulty: 2,
        question:
            "In quale anno fu sottoscritto da Stati Uniti, Unione Sovietica e Regno Unito il trattato di non proliferazione nucleare?",
        answers: [
            {
                id: "A",
                text: "1936",
                correct: false,
                explanation:
                    "Nel 1936 la Seconda Guerra Mondiale non era ancora iniziata e le armi nucleari non erano ancora state sviluppate.",
            },
            {
                id: "B",
                text: "1945",
                correct: false,
                explanation:
                    "Il 1945 è l'anno in cui vennero utilizzate le prime bombe atomiche in guerra, ma il Trattato di non proliferazione fu sottoscritto successivamente.",
            },
            {
                id: "C",
                text: "1968",
                correct: true,
                explanation:
                    "Il Trattato di non proliferazione nucleare fu aperto alla firma nel 1968. Il suo obiettivo è limitare la diffusione delle armi nucleari e favorire usi pacifici dell'energia atomica.",
            },
            {
                id: "D",
                text: "1918",
                correct: false,
                explanation:
                    "Nel 1918 si concludeva la Prima Guerra Mondiale. La tecnologia nucleare militare sarebbe comparsa diversi decenni più tardi.",
            },
        ],
    },

    {
        id: 31,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-repubblica-italiana",
        difficulty: 2,
        question:
            "Chi fu il primo presidente della Repubblica Italiana",
        answers: [
            {
                id: "A",
                text: "Enrico De Nicola",
                correct: true,
                explanation:
                    "Enrico De Nicola fu eletto Capo provvisorio dello Stato nel 1946 e, con l'entrata in vigore della Costituzione il 1° gennaio 1948, assunse il titolo di Presidente della Repubblica.",
            },
            {
                id: "B",
                text: "Giovanni Giolitti",
                correct: false,
                explanation:
                    "Giolitti fu più volte Presidente del Consiglio durante il Regno d'Italia, ma morì nel 1928, prima della nascita della Repubblica.",
            },
            {
                id: "C",
                text: "Palmiro Togliatti",
                correct: false,
                explanation:
                    "Togliatti fu uno dei principali leader del Partito Comunista Italiano e ricoprì incarichi di governo, ma non fu Presidente della Repubblica.",
            },
            {
                id: "D",
                text: "Bettino Ricasoli",
                correct: false,
                explanation:
                    "Bettino Ricasoli fu Presidente del Consiglio nell'Ottocento, durante il Regno d'Italia. Non appartiene alla storia presidenziale della Repubblica.",
            },
        ],
    },

    {
        id: 32,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-cronologia",
        difficulty: 2,
        question:
            "Qual è la corretta sequenza temporale:",
        answers: [
            {
                id: "A",
                text: "Guerra civile americana, Rivoluzione russa, Guerra civile spagnola, Rivoluzione francese.",
                correct: false,
                explanation:
                    "La Rivoluzione francese iniziò nel 1789 ed è quindi precedente alla Guerra civile americana, alla Rivoluzione russa e alla Guerra civile spagnola.",
            },
            {
                id: "B",
                text: "Rivoluzione francese, Guerra civile americana, Rivoluzione russa, Guerra civile spagnola.",
                correct: true,
                explanation:
                    "L'ordine è corretto: Rivoluzione francese dal 1789; Guerra civile americana 1861-1865; Rivoluzione russa 1917; Guerra civile spagnola 1936-1939.",
            },
            {
                id: "C",
                text: "Rivoluzione russa, Rivoluzione francese, Guerra civile americana, Guerra civile spagnola.",
                correct: false,
                explanation:
                    "La Rivoluzione russa del 1917 è molto successiva alla Rivoluzione francese e alla Guerra civile americana.",
            },
            {
                id: "D",
                text: "Nessuna sequenza è corretta perché non vi è mai stata una Guerra civile spagnola.",
                correct: false,
                explanation:
                    "La Guerra civile spagnola si combatté realmente tra il 1936 e il 1939, tra il fronte repubblicano e quello nazionalista guidato da Francisco Franco.",
            },
        ],
    },

    {
        id: 33,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-politica",
        difficulty: 2,
        question:
            "Il “corridoio di Danzica” fu una delle questioni territoriali che portarono alla Seconda Guerra Mondiale. In quale Stato si trova oggi Danzica:",
        answers: [
            {
                id: "A",
                text: "Germania",
                correct: false,
                explanation:
                    "Danzica, oggi Gdańsk, non appartiene alla Germania contemporanea, anche se storicamente la questione della città fu legata ai rapporti tra Germania e Polonia.",
            },
            {
                id: "B",
                text: "Bielorussia",
                correct: false,
                explanation:
                    "La Bielorussia si trova più a est e non comprende il territorio della città di Gdańsk.",
            },
            {
                id: "C",
                text: "Lituania",
                correct: false,
                explanation:
                    "La Lituania è uno Stato baltico, ma Gdańsk non appartiene al suo territorio.",
            },
            {
                id: "D",
                text: "Polonia",
                correct: true,
                explanation:
                    "Danzica, oggi Gdańsk, si trova in Polonia sul Mar Baltico. La questione del corridoio polacco e della Città Libera di Danzica fu uno dei punti di tensione precedenti alla guerra.",
            },
        ],
    },

    {
        id: 34,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-contemporanea",
        difficulty: 2,
        question:
            "Nel 1919 a Weimar viene elaborata la costituzione repubblicana di quale Stato?",
        answers: [
            {
                id: "A",
                text: "Austria",
                correct: false,
                explanation:
                    "L'Austria divenne una repubblica dopo la Prima Guerra Mondiale, ma la Costituzione di Weimar non riguardava lo Stato austriaco.",
            },
            {
                id: "B",
                text: "Svizzera",
                correct: false,
                explanation:
                    "La Svizzera possedeva già un ordinamento federale repubblicano e non è collegata alla Costituzione di Weimar.",
            },
            {
                id: "C",
                text: "Germania",
                correct: true,
                explanation:
                    "Nel 1919 venne elaborata la Costituzione della Repubblica di Weimar, il regime democratico tedesco nato dopo la sconfitta nella Prima Guerra Mondiale.",
            },
            {
                id: "D",
                text: "Ungheria",
                correct: false,
                explanation:
                    "Anche l'Ungheria attraversò importanti trasformazioni dopo la Prima Guerra Mondiale, ma la Repubblica di Weimar era tedesca.",
            },
        ],
    },

    {
        id: 35,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-italiana",
        difficulty: 1,
        question:
            "La provincia di Udine fu colpita dal terremoto del 1976. In quale regione si trova?",
        answers: [
            {
                id: "A",
                text: "Friuli-Venezia Giulia",
                correct: true,
                explanation:
                    "Udine si trova nella regione Friuli-Venezia Giulia, nell'Italia nord-orientale. Il terremoto del Friuli del 1976 colpì duramente l'area.",
            },
            {
                id: "B",
                text: "Piemonte",
                correct: false,
                explanation:
                    "Il Piemonte si trova nell'Italia nord-occidentale e ha Torino come capoluogo.",
            },
            {
                id: "C",
                text: "Lombardia",
                correct: false,
                explanation:
                    "La Lombardia confina con il Piemonte e il Veneto, ma Udine non appartiene a questa regione.",
            },
            {
                id: "D",
                text: "Lazio",
                correct: false,
                explanation:
                    "Il Lazio è una regione dell'Italia centrale e ha Roma come capoluogo. Udine si trova molto più a nord-est.",
            },
        ],
    },

    {
        id: 36,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-unione-europea",
        difficulty: 2,
        question:
            "Il Portogallo è entrato nella comunità economica europea nel?",
        answers: [
            {
                id: "A",
                text: "1957",
                correct: false,
                explanation:
                    "Nel 1957 furono firmati i Trattati di Roma dai sei Paesi fondatori della CEE. Il Portogallo non era tra questi.",
            },
            {
                id: "B",
                text: "1986",
                correct: true,
                explanation:
                    "Il Portogallo entrò nella Comunità Economica Europea nel 1986 insieme alla Spagna, portando a dodici il numero degli Stati membri.",
            },
            {
                id: "C",
                text: "2006",
                correct: false,
                explanation:
                    "Nel 2006 il Portogallo era già membro da vent'anni.",
            },
            {
                id: "D",
                text: "1992",
                correct: false,
                explanation:
                    "Il 1992 è legato al Trattato di Maastricht e alla nascita dell'Unione Europea, ma il Portogallo era già entrato nella CEE nel 1986.",
            },
        ],
    },

    {
        id: 37,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-italiana",
        difficulty: 1,
        question:
            "La regione Trentino-Alto Adige è suddivisa nelle due province autonome di Trento e Bolzano e confina con?",
        answers: [
            {
                id: "A",
                text: "Germania",
                correct: false,
                explanation:
                    "Tra il Trentino-Alto Adige e la Germania si trova il territorio austriaco. Non esiste un confine diretto tra regione e Germania.",
            },
            {
                id: "B",
                text: "Slovenia",
                correct: false,
                explanation:
                    "La Slovenia confina con il Friuli-Venezia Giulia, ma non con il Trentino-Alto Adige.",
            },
            {
                id: "C",
                text: "Austria",
                correct: true,
                explanation:
                    "Il Trentino-Alto Adige confina a nord con l'Austria. La provincia autonoma di Bolzano è direttamente adiacente al territorio austriaco.",
            },
            {
                id: "D",
                text: "Croazia",
                correct: false,
                explanation:
                    "La Croazia non confina direttamente con questa regione italiana.",
            },
        ],
    },

    {
        id: 38,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-fiumi",
        difficulty: 2,
        question:
            "Quale è il fiume più lungo?",
        answers: [
            {
                id: "A",
                text: "Danubio",
                correct: false,
                explanation:
                    "Il Danubio è uno dei principali fiumi europei e supera i 2.800 km, ma è più corto del Nilo secondo la classificazione utilizzata dal test.",
            },
            {
                id: "B",
                text: "Gange",
                correct: false,
                explanation:
                    "Il Gange è uno dei maggiori fiumi dell'Asia meridionale, ma la sua lunghezza è inferiore a quella del Nilo.",
            },
            {
                id: "C",
                text: "Rio delle Amazzoni",
                correct: false,
                explanation:
                    "Il Rio delle Amazzoni è uno dei fiumi più lunghi del mondo e il primato con il Nilo può dipendere dai criteri di misurazione. Nel quesito, tuttavia, la soluzione prevista è il Nilo.",
            },
            {
                id: "D",
                text: "Nilo",
                correct: true,
                explanation:
                    "Secondo la classificazione geografica tradizionale adottata dal test, il Nilo è considerato il fiume più lungo del mondo, con una lunghezza di circa 6.650 km.",
            },
        ],
    },

    {
        id: 39,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-italiana",
        difficulty: 1,
        question:
            "L’altopiano del Gran Sasso si trova?",
        answers: [
            {
                id: "A",
                text: "nella Meseta",
                correct: false,
                explanation:
                    "La Meseta è un vasto altopiano situato nella penisola iberica, soprattutto in Spagna.",
            },
            {
                id: "B",
                text: "negli Appennini",
                correct: true,
                explanation:
                    "Il Gran Sasso d'Italia appartiene all'Appennino centrale e si trova principalmente in Abruzzo. Comprende anche il Corno Grande, la vetta più elevata degli Appennini.",
            },
            {
                id: "C",
                text: "nelle Alpi",
                correct: false,
                explanation:
                    "Le Alpi si trovano nella parte settentrionale dell'Italia. Il Gran Sasso appartiene invece alla catena degli Appennini.",
            },
            {
                id: "D",
                text: "nel Massiccio Centrale",
                correct: false,
                explanation:
                    "Il Massiccio Centrale è una regione montuosa della Francia. Non comprende il Gran Sasso.",
            },
        ],
    },

    {
        id: 40,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-organizzazioni-internazionali",
        difficulty: 1,
        question:
            "Il nome Unesco indica?",
        answers: [
            {
                id: "A",
                text: "un’organizzazione delle Nazioni Unite",
                correct: true,
                explanation:
                    "L'UNESCO è l'Organizzazione delle Nazioni Unite per l'Educazione, la Scienza e la Cultura. È un'agenzia specializzata dell'ONU.",
            },
            {
                id: "B",
                text: "una multinazionale",
                correct: false,
                explanation:
                    "L'UNESCO non è un'impresa privata o una multinazionale, ma un'organizzazione internazionale.",
            },
            {
                id: "C",
                text: "una città sudamericana",
                correct: false,
                explanation:
                    "UNESCO è una sigla internazionale e non il nome di una città.",
            },
            {
                id: "D",
                text: "un fiume",
                correct: false,
                explanation:
                    "UNESCO non identifica alcun fiume. È un'organizzazione appartenente al sistema delle Nazioni Unite.",
            },
        ],
    },
    {
        id: 41,
        area: "cultura-matematico-scientifica",
        category: "matematica-proporzionalita",
        difficulty: 3,
        question:
            "Ada e Bob misurano quanti cartoncini rettangolari identici servono per fare una fila che va da un lato all’altro del banco. Ma i due usano lati diversi come unità di misura. Ada fa una fila di 14 cartoncini mentre a Bob ne servono 21. Che cosa è corretto concludere sulle unità di misura?",
        answers: [
            {
                id: "A",
                text: "L’unità di misura di Ada è i 14/21 di quella di Bob.",
                correct: false,
                explanation:
                    "La relazione è invertita. Se la lunghezza del banco è la stessa, 14 unità di Ada equivalgono a 21 unità di Bob; quindi un’unità di Ada è 21/14, cioè 3/2, di quella di Bob.",
            },
            {
                id: "B",
                text: "L’unità di misura di Ada supera di 7cm di quella di Bob.",
                correct: false,
                explanation:
                    "Conosciamo il numero di cartoncini necessari, ma non la loro lunghezza espressa in centimetri. Non è quindi possibile concludere che la differenza sia di 7 cm.",
            },
            {
                id: "C",
                text: "L’unità di misura di Bob è i 2/3 di quella di Ada.",
                correct: true,
                explanation:
                    "La stessa lunghezza corrisponde a 14 unità di Ada e a 21 di Bob. Quindi l’unità di Bob vale 14/21 di quella di Ada, cioè 2/3.",
            },
            {
                id: "D",
                text: "L’unità di misura di Bob è maggiore di quella di Ada, ma occorrono ulteriori misure per determinare di quanto sia più grande.",
                correct: false,
                explanation:
                    "Se per coprire la stessa lunghezza Bob necessita di 21 unità mentre Ada soltanto di 14, l’unità di Bob è più piccola, non più grande. Inoltre il rapporto può essere determinato direttamente.",
            },
        ],
    },

    {
        id: 42,
        area: "cultura-matematico-scientifica",
        category: "matematica-percentuali",
        difficulty: 3,
        question:
            "Un’indagine sugli sport praticati rivela che la percentuale di chi pratica lo sci è del 45% e la percentuale di chi gioca a calcio è del 55%. Indicare quale delle seguenti affermazioni non è corretta:",
        answers: [
            {
                id: "A",
                text: "Di sicuro il numero di partecipanti all’indagine che praticano calcio supera di 10 il numero di quelli che sciano.",
                correct: true,
                explanation:
                    "Le percentuali differiscono di 10 punti percentuali, ma questo non significa necessariamente una differenza di 10 persone. Per esempio, su 200 partecipanti la differenza sarebbe di 20 persone.",
            },
            {
                id: "B",
                text: "Ci potrebbero essere persone che praticano entrambi gli sport.",
                correct: false,
                explanation:
                    "Le due percentuali non specificano che i gruppi siano disgiunti. È quindi possibile che alcune persone pratichino sia sci sia calcio.",
            },
            {
                id: "C",
                text: "In assoluto ci sono meno persone che sciano di quelle che giocano a calcio.",
                correct: false,
                explanation:
                    "All’interno dello stesso campione il 45% è inferiore al 55%, quindi il numero di persone che pratica sci è inferiore a quello di chi pratica calcio.",
            },
            {
                id: "D",
                text: "Sicuramente il numero di persone che pratica lo sci è più della metà di quello delle persone che giocano a calcio.",
                correct: false,
                explanation:
                    "La metà del 55% è 27,5%. Il 45% è maggiore di 27,5%, quindi il numero degli sciatori è certamente superiore alla metà del numero dei giocatori di calcio.",
            },
        ],
    },

    {
        id: 43,
        area: "cultura-matematico-scientifica",
        category: "geometria-solida",
        difficulty: 2,
        question:
            "Se si trasla una circonferenza lungo una direzione perpendicolare al piano che contiene la circonferenza stessa si ottiene",
        answers: [
            {
                id: "A",
                text: "Una superficie a forma di ciambella (chiamata toro).",
                correct: false,
                explanation:
                    "Il toro si ottiene facendo ruotare una circonferenza attorno a una retta complanare esterna alla circonferenza. Non deriva da una semplice traslazione perpendicolare al suo piano.",
            },
            {
                id: "B",
                text: "Una sfera dello stesso raggio della circonferenza.",
                correct: false,
                explanation:
                    "Una sfera non viene generata traslando una circonferenza lungo una direzione rettilinea. Tale movimento mantiene costante la sezione circolare.",
            },
            {
                id: "C",
                text: "Un cono circolare retto.",
                correct: false,
                explanation:
                    "Per ottenere un cono la sezione circolare dovrebbe variare progressivamente di dimensione fino a ridursi a un punto. Nella traslazione descritta la circonferenza mantiene invece lo stesso raggio.",
            },
            {
                id: "D",
                text: "Un cilindro a base circolare.",
                correct: true,
                explanation:
                    "Traslando una circonferenza lungo una direzione perpendicolare al suo piano, mantenendone forma e dimensione, si genera la superficie di un cilindro circolare.",
            },
        ],
    },

    {
        id: 44,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria",
        difficulty: 3,
        question:
            "Un rettangolo e un triangolo isoscele hanno la base di uguale misura, ma il triangolo ha l’altezza doppia di quella del rettangolo. Indicare quale affermazione è corretta:",
        answers: [
            {
                id: "A",
                text: "Senza ulteriori informazioni non si può dire niente sulla relazione tra le aree delle due figure.",
                correct: false,
                explanation:
                    "Le informazioni fornite sono sufficienti. Se la base comune è b e l’altezza del rettangolo è h, quella del triangolo è 2h e le due aree possono essere calcolate.",
            },
            {
                id: "B",
                text: "Il triangolo isoscele e il rettangolo hanno la stessa area.",
                correct: true,
                explanation:
                    "Il rettangolo ha area b × h. Il triangolo ha area (b × 2h) / 2 = b × h. Le due figure hanno quindi la stessa area.",
            },
            {
                id: "C",
                text: "L’area del rettangolo è la metà di quella del triangolo, perché l’altezza del triangolo è il doppio di quella del rettangolo.",
                correct: false,
                explanation:
                    "Nella formula dell’area del triangolo compare anche la divisione per 2. Il raddoppio dell’altezza viene quindi compensato da questo fattore.",
            },
            {
                id: "D",
                text: "Il perimetro del triangolo è uguale a quello del rettangolo.",
                correct: false,
                explanation:
                    "Dai dati forniti non segue l’uguaglianza dei perimetri. Conoscere base e altezza non implica che i lati obliqui del triangolo producano lo stesso perimetro del rettangolo.",
            },
        ],
    },

    {
        id: 45,
        area: "cultura-matematico-scientifica",
        category: "matematica-angoli",
        difficulty: 2,
        question:
            "Un orologio con le lancette indica che sono le 10:27. A che ora la lancetta dei minuti avrà ruotato di un angolo retto?",
        answers: [
            {
                id: "A",
                text: "10:57.",
                correct: false,
                explanation:
                    "In 30 minuti la lancetta dei minuti compie mezzo giro, cioè 180°. Un angolo retto corrisponde invece a 90°.",
            },
            {
                id: "B",
                text: "13:27.",
                correct: false,
                explanation:
                    "Tre ore sono molto più del tempo necessario alla lancetta dei minuti per compiere una rotazione di 90°.",
            },
            {
                id: "C",
                text: "10:42.",
                correct: true,
                explanation:
                    "La lancetta dei minuti percorre 360° in 60 minuti, cioè 6° al minuto. Per ruotare di 90° servono 90/6 = 15 minuti: 10:27 + 15 minuti = 10:42.",
            },
            {
                id: "D",
                text: "10:47.",
                correct: false,
                explanation:
                    "In 20 minuti la lancetta dei minuti ruoterebbe di 20 × 6° = 120°, non di 90°.",
            },
        ],
    },

    {
        id: 46,
        area: "cultura-matematico-scientifica",
        category: "matematica-frazioni-geometria",
        difficulty: 3,
        question:
            "Considerato il rettangolo seguente, quali delle tre figure sottostanti possono rappresentare i 5/4 del rettangolo?",
        questionImage: {
            src: `${import.meta.env.BASE_URL}resources/questions/simulation17/domanda-46.png`,
            alt: "Rettangolo su griglia e tre figure numerate 1, 2 e 3 da confrontare per individuare quali rappresentano i cinque quarti del rettangolo iniziale",
        },
        answers: [
            {
                id: "A",
                text: "Solo la figura 2. perché la figura 3. non è più un rettangolo",
                correct: false,
                explanation:
                    "La figura 3 è ancora un rettangolo: suddividerlo mediante segmenti orizzontali non ne modifica il contorno esterno. Non c’è quindi motivo di escluderla.",
            },
            {
                id: "B",
                text: "La figura 1. perché è composta da 4 delle 5 parti uguali in cui ho diviso il rettangolo",
                correct: false,
                explanation:
                    "Quattro quinti rappresentano 4/5, cioè una quantità minore dell’intero. Il quesito chiede invece 5/4, che è maggiore dell’intero.",
            },
            {
                id: "C",
                text: "Nessuna perché, se si divide un rettangolo in 4 parti, non se ne possono prendere 5",
                correct: false,
                explanation:
                    "Una frazione impropria come 5/4 è perfettamente possibile e rappresenta un intero più un quarto. Non è necessario limitarsi alle sole quattro parti dell’unità iniziale.",
            },
            {
                id: "D",
                text: "La figura 2. e la figura 3",
                correct: true,
                explanation:
                    "Le figure 2 e 3 rappresentano entrambe una superficie pari a cinque quarti del rettangolo di partenza, anche se la suddivisione grafica viene mostrata in modi differenti.",
            },
        ],
    },

    {
        id: 47,
        area: "cultura-matematico-scientifica",
        category: "matematica-proprieta-operazioni",
        difficulty: 3,
        question:
            "L’insegnante chiede: “Se prendo un qualunque numero intero e ne faccio il triplo e poi divido a metà il risultato, trovo lo stesso valore che avrei ottenuto calcolando la metà del numero e moltiplicando per 3?’’ Sono riportate quattro risposte diverse di alcuni studenti e studentesse. Quale risposta è corretta e matematicamente ben giustificata?",
        answers: [
            {
                id: "A",
                text: "Daniela: Sì, perché dividere a metà è come moltiplicare per 0,5 e la moltiplicazione è commutativa.",
                correct: true,
                explanation:
                    "Triplicare n e poi dimezzare significa 3n × 0,5. Dimezzare n e poi triplicare significa n × 0,5 × 3. Per la proprietà commutativa della moltiplicazione i due risultati coincidono per ogni numero intero.",
            },
            {
                id: "B",
                text: "Carlo: No, perché la divisione non è una operazione che ha in generale la proprietà commutativa.",
                correct: false,
                explanation:
                    "È vero che la divisione non è commutativa, ma qui dimezzare equivale a moltiplicare per 1/2. Le operazioni possono quindi essere espresse come moltiplicazioni e riordinate.",
            },
            {
                id: "C",
                text: "Andrea: Sì perché, se prendo 8 e ne calcolo il triplo, trovo 24 e la metà di 24 è 12. La metà di 8 è 4 e se lo moltiplico per 3 trovo di nuovo 12.",
                correct: false,
                explanation:
                    "L’esempio con 8 mostra che l’affermazione funziona in quel singolo caso, ma non costituisce una dimostrazione valida per un qualunque numero intero.",
            },
            {
                id: "D",
                text: "Barbara: No, perché non è vero per tutti i numeri: se scelgo di partire dal numero 0 non posso fare la divisione, perché non si può mai dividere 0.",
                correct: false,
                explanation:
                    "È possibile dividere zero per un numero diverso da zero: 0/2 = 0. Ciò che non è definito è invece dividere un numero per zero.",
            },
        ],
    },

    {
        id: 48,
        area: "cultura-matematico-scientifica",
        category: "matematica-operazioni",
        difficulty: 3,
        question:
            "Quale di queste uguaglianze non è corretta?",
        answers: [
            {
                id: "A",
                text: "55 : 1,1 = 550 : 11",
                correct: false,
                explanation:
                    "Entrambi i membri valgono 50. Moltiplicare dividendo e divisore per 10 non modifica il quoziente.",
            },
            {
                id: "B",
                text: "156 : (3 : 10) = (156 : 3) :10",
                correct: true,
                explanation:
                    "A sinistra 156 ÷ (3/10) = 156 × 10/3 = 520. A destra (156 ÷ 3) ÷ 10 = 52/10 = 5,2. I due risultati sono diversi.",
            },
            {
                id: "C",
                text: "5320 : 5 = 532 x 2",
                correct: false,
                explanation:
                    "5320 ÷ 5 = 1064 e 532 × 2 = 1064. L’uguaglianza è quindi corretta.",
            },
            {
                id: "D",
                text: "152 x ( 14 :10 ) = (152 x 14) :10",
                correct: false,
                explanation:
                    "Moltiplicare 152 per 14/10 equivale a moltiplicare prima 152 per 14 e poi dividere per 10. L’uguaglianza è corretta.",
            },
        ],
    },

    {
        id: 49,
        area: "cultura-matematico-scientifica",
        category: "matematica-probabilita",
        difficulty: 3,
        question:
            "L’insegnante dice ‘’Ci sono due scatole, la prima contiene 4 caramelle al limone e 8 all’arancia, mentre nella seconda scatola ci sono 10 caramelle al limone e 15 all’arancia. Se Mirko vuole pescare senza guardare e desidera prendere una caramella all’arancia, in quale scatola gli conviene prendere una caramella e perché?’’ Quale risposta è giustificata correttamente?",
        answers: [
            {
                id: "A",
                text: "Mirko deve scegliere la seconda scatola perché è quella che contiene più caramelle all’arancia.",
                correct: false,
                explanation:
                    "Non conta soltanto il numero assoluto di caramelle all’arancia, ma la loro proporzione rispetto al totale. Nella seconda scatola la probabilità è 15/25 = 3/5.",
            },
            {
                id: "B",
                text: "Mirko può scegliere una scatola qualsiasi tanto da entrambe le scatole potrebbe prendere una caramella al limone oppure una all’arancia.",
                correct: false,
                explanation:
                    "Entrambi gli esiti sono possibili, ma non con la stessa probabilità nelle due scatole. La prima offre una probabilità maggiore di ottenere una caramella all’arancia.",
            },
            {
                id: "C",
                text: "Mirko deve scegliere la prima scatola perché le caramelle all’arancia sono il doppio di quelle al limone mentre nella seconda scatola sono meno del doppio.",
                correct: true,
                explanation:
                    "Nella prima scatola la probabilità di arancia è 8/12 = 2/3, circa 66,7%. Nella seconda è 15/25 = 3/5 = 60%. Conviene quindi scegliere la prima.",
            },
            {
                id: "D",
                text: "Mirko deve scegliere la prima scatola perché è quella che contiene meno caramelle al limone.",
                correct: false,
                explanation:
                    "La conclusione è corretta, ma la giustificazione non lo è: bisogna confrontare le proporzioni di caramelle all’arancia sul totale, non semplicemente il numero di caramelle al limone.",
            },
        ],
    },

    {
        id: 50,
        area: "cultura-matematico-scientifica",
        category: "matematica-piano-cartesiano",
        difficulty: 4,
        question:
            "Sul piano cartesiano in figura sono rappresentati i punti P, A, B, C, D. Se chiamiamo ( x , y ) le coordinate del punto P, allora quale dei seguenti punti ha coordinate ( -2x , -y+1/2 )?",
        questionImage: {
            src: `${import.meta.env.BASE_URL}resources/questions/simulation17/domanda-50.png`,
            alt: "Piano cartesiano con i punti P, A, B, C e D utilizzato per individuare il punto di coordinate meno due x e meno y più un mezzo",
        },
        answers: [
            {
                id: "A",
                text: "Punto C.",
                correct: false,
                explanation:
                    "Il punto C si trova a sinistra dell’asse y, mentre la trasformazione -2x cambia segno alla coordinata x di P e porta il punto sul semipiano destro.",
            },
            {
                id: "B",
                text: "Punto B.",
                correct: false,
                explanation:
                    "Il punto B si trova nel quadrante inferiore destro, ma le sue coordinate non corrispondono alla trasformazione indicata a partire dal punto P.",
            },
            {
                id: "C",
                text: "Punto D.",
                correct: false,
                explanation:
                    "Il punto D rimane nel semipiano sinistro e superiore. La trasformazione della coordinata x, invece, porta il punto nel semipiano destro.",
            },
            {
                id: "D",
                text: "Punto A.",
                correct: true,
                explanation:
                    "Dalla figura si ricavano le coordinate di P e applicando la trasformazione (-2x, -y + 1/2) si ottengono le coordinate rappresentate dal punto A.",
            },
        ],
    },

    {
        id: 51,
        area: "cultura-matematico-scientifica",
        category: "fisica-elettricita",
        difficulty: 3,
        question:
            "La prima legge di Ohm dice che la relazione tra l’intensità di corrente I che percorre un circuito elettrico, la differenza di potenziale V del generatore e la resistenza del circuito R è data da I = V / R Sul piano cartesiano che ha V sull’asse orizzontale e I sull’asse verticale, il grafico che rappresenta l’andamento dell’intensità di corrente al variare del potenziale è",
        answers: [
            {
                id: "A",
                text: "Una retta crescente passante per l’origine se R ≠ 0.",
                correct: true,
                explanation:
                    "Con R costante vale I = (1/R)V. Intensità e tensione sono quindi direttamente proporzionali: il grafico è una retta passante per l’origine con coefficiente angolare 1/R.",
            },
            {
                id: "B",
                text: "Una curva chiusa, perché non circola corrente in un circuito aperto.",
                correct: false,
                explanation:
                    "Il quesito descrive la relazione matematica tra I e V per una resistenza R. Una curva chiusa non rappresenta la legge di Ohm.",
            },
            {
                id: "C",
                text: "Un’iperbole, perché le due grandezze sono inversamente proporzionali.",
                correct: false,
                explanation:
                    "A resistenza costante I e V sono direttamente, non inversamente, proporzionali. Un’iperbole comparirebbe in una relazione del tipo I = k/V.",
            },
            {
                id: "D",
                text: "Una retta non passante per l’origine qualunque sia R, perché le due grandezze non sono direttamente proporzionali perché R è al denominatore.",
                correct: false,
                explanation:
                    "Il fatto che R sia al denominatore non impedisce la proporzionalità diretta tra I e V: R è una costante e 1/R costituisce semplicemente il coefficiente della retta.",
            },
        ],
    },

    {
        id: 52,
        area: "cultura-matematico-scientifica",
        category: "matematica-probabilita",
        difficulty: 2,
        question:
            "Un fotomoltiplicatore emette un fotone al secondo. La probabilità che un fotone emesso passi attraverso una fenditura e sia rilevato sullo schermo è 0,65. Negli ultimi tre secondi tutti e tre i fotoni emessi sono stati rilevati sullo schermo. Quale è la probabilità che il fotone successivo sia ancora rilevato sullo schermo?",
        answers: [
            {
                id: "A",
                text: "(0,65)4 perché si devono moltiplicare le rispettive probabilità per sapere quando quattro eventi si verificano tutti e quattro.",
                correct: false,
                explanation:
                    "(0,65)^4 sarebbe la probabilità che quattro fotoni indipendenti vengano tutti rilevati. La domanda chiede invece soltanto la probabilità relativa al prossimo fotone.",
            },
            {
                id: "B",
                text: "0,65 perché tutte le emissioni sono indipendenti.",
                correct: true,
                explanation:
                    "Poiché gli eventi sono indipendenti, il risultato delle tre emissioni precedenti non modifica la probabilità della successiva. Essa resta quindi pari a 0,65.",
            },
            {
                id: "C",
                text: "4 x 0,65 perché ci sono quattro eventi da considerare tutti con la stessa probabilità.",
                correct: false,
                explanation:
                    "Le probabilità non si sommano o moltiplicano in questo modo. Inoltre 4 × 0,65 = 2,6, che non può essere una probabilità perché supera 1.",
            },
            {
                id: "D",
                text: "0,5 perché gli esiti possibili sono solo due: il fotone viene rilevato oppure no.",
                correct: false,
                explanation:
                    "Avere due esiti possibili non significa che siano equiprobabili. Il problema specifica esplicitamente che la probabilità di rilevazione è 0,65.",
            },
        ],
    },

    {
        id: 53,
        area: "cultura-matematico-scientifica",
        category: "fisica-pressione",
        difficulty: 3,
        question:
            "La formula che permette di calcolare la pressione esercitata su una superficie quadrata di lato L da una forza costante di intensità F che è diretta perpendicolarmente alla superficie è p = F / L². Se si considera una seconda superficie quadrata di lato pari a L/3, quale sarà la pressione esercitata su di essa dalla forza F?",
        answers: [
            {
                id: "A",
                text: "La pressione sul secondo quadrato è un terzo di quella sul primo quadrato.",
                correct: false,
                explanation:
                    "Riducendo il lato a un terzo, l’area non diventa un terzo ma un nono, perché l’area del quadrato dipende dal quadrato del lato.",
            },
            {
                id: "B",
                text: "La pressione resta la stessa, perché F non è cambiata.",
                correct: false,
                explanation:
                    "La forza rimane uguale, ma cambia l’area sulla quale agisce. A parità di forza, diminuendo l’area la pressione aumenta.",
            },
            {
                id: "C",
                text: "La pressione sul secondo quadrato è nove volte quella sul primo quadrato.",
                correct: true,
                explanation:
                    "Il nuovo lato è L/3, quindi la nuova area è L²/9. La pressione diventa F/(L²/9) = 9F/L², cioè nove volte quella iniziale.",
            },
            {
                id: "D",
                text: "La pressione sul secondo quadrato è il triplo di quella sul primo quadrato.",
                correct: false,
                explanation:
                    "La pressione aumenta di un fattore 9 e non 3, perché l’area dipende dal quadrato della lunghezza del lato.",
            },
        ],
    },

    {
        id: 54,
        area: "cultura-matematico-scientifica",
        category: "biologia-fotosintesi",
        difficulty: 1,
        question:
            "La fotosintesi è un processo metabolico che riguarda:",
        answers: [
            {
                id: "A",
                text: "Solo piante e funghi terrestri.",
                correct: false,
                explanation:
                    "I funghi non effettuano fotosintesi e sono organismi eterotrofi. Inoltre la fotosintesi non è limitata agli ambienti terrestri.",
            },
            {
                id: "B",
                text: "Solo organismi acquatici.",
                correct: false,
                explanation:
                    "Numerosi organismi acquatici svolgono fotosintesi, ma il processo avviene anche nelle piante e in altri organismi terrestri.",
            },
            {
                id: "C",
                text: "Solo organismi terrestri.",
                correct: false,
                explanation:
                    "Alghe e altri organismi fotosintetici acquatici dimostrano che la fotosintesi non è esclusivamente terrestre.",
            },
            {
                id: "D",
                text: "Sia organismi acquatici che terrestri.",
                correct: true,
                explanation:
                    "La fotosintesi viene effettuata da organismi presenti sia negli ambienti terrestri sia in quelli acquatici, come piante, alghe e alcuni microrganismi.",
            },
        ],
    },

    {
        id: 55,
        area: "cultura-matematico-scientifica",
        category: "biologia-classificazione",
        difficulty: 2,
        question:
            "Da un punto di vista sistematico, quali delle seguenti associazioni è errata?",
        answers: [
            {
                id: "A",
                text: "Trota, Sogliola, Medusa.",
                correct: true,
                explanation:
                    "Trota e sogliola sono pesci, mentre la medusa appartiene ai Cnidari. L’associazione riunisce quindi organismi appartenenti a gruppi sistematici molto differenti.",
            },
            {
                id: "B",
                text: "Colibrì, Aquila, Pappagallo.",
                correct: false,
                explanation:
                    "Colibrì, aquila e pappagallo appartengono tutti alla classe degli uccelli.",
            },
            {
                id: "C",
                text: "Scimpanzè, Marmotta, Gatto.",
                correct: false,
                explanation:
                    "Scimpanzé, marmotta e gatto appartengono tutti alla classe dei mammiferi.",
            },
            {
                id: "D",
                text: "Salamandra, Rospo, Tritone.",
                correct: false,
                explanation:
                    "Salamandra, rospo e tritone appartengono tutti alla classe degli anfibi.",
            },
        ],
    },

    {
        id: 56,
        area: "cultura-matematico-scientifica",
        category: "biologia-riproduzione",
        difficulty: 2,
        question:
            "Una sola delle affermazioni è esatta. Quale?",
        answers: [
            {
                id: "A",
                text: "Gli animali si riproducono esclusivamente per riproduzione sessuata",
                correct: false,
                explanation:
                    "Esistono animali in grado di riprodursi anche asessualmente, per esempio attraverso gemmazione, frammentazione o partenogenesi.",
            },
            {
                id: "B",
                text: "Tutte le piante si possono riprodurre per riproduzione asessuata",
                correct: true,
                explanation:
                    "È l’alternativa indicata dal test. La riproduzione asessuata nelle piante può avvenire attraverso diverse forme di propagazione vegetativa, senza fusione di gameti.",
            },
            {
                id: "C",
                text: "Tutti gli animali si possono riprodurre per riproduzione asessuata",
                correct: false,
                explanation:
                    "Solo alcuni gruppi animali possono utilizzare modalità di riproduzione asessuata. Non è una capacità propria di tutti gli animali.",
            },
            {
                id: "D",
                text: "Le piante si riproducono esclusivamente per riproduzione sessuata",
                correct: false,
                explanation:
                    "Molte piante possono riprodursi anche per via asessuata o vegetativa. La riproduzione sessuata non è quindi l’unica modalità.",
            },
        ],
    },

    {
        id: 57,
        area: "cultura-matematico-scientifica",
        category: "biologia-organismi-viventi",
        difficulty: 2,
        question:
            "Quale delle seguenti affermazioni è errata",
        answers: [
            {
                id: "A",
                text: "Tutti gli organismi viventi sono sistemi aperti.",
                correct: false,
                explanation:
                    "Gli organismi viventi scambiano continuamente materia ed energia con l’ambiente circostante. Per questo vengono considerati sistemi aperti.",
            },
            {
                id: "B",
                text: "Tutti gli organismi viventi contengono acidi nucleici.",
                correct: false,
                explanation:
                    "Gli organismi cellulari possiedono materiale genetico costituito da acidi nucleici, fondamentale per conservare e trasmettere l’informazione biologica.",
            },
            {
                id: "C",
                text: "Tutti gli organismi viventi sono sistemi chiusi.",
                correct: true,
                explanation:
                    "Questa affermazione è errata. Gli organismi viventi non sono sistemi chiusi perché devono scambiare materia ed energia con l’ambiente per mantenere le proprie funzioni vitali.",
            },
            {
                id: "D",
                text: "Tutti gli organismi viventi sono costituiti da cellule.",
                correct: false,
                explanation:
                    "La teoria cellulare considera la cellula l’unità fondamentale degli organismi viventi. Gli organismi possono essere unicellulari o pluricellulari.",
            },
        ],
    },

    {
        id: 58,
        area: "cultura-matematico-scientifica",
        category: "biologia-anatomia",
        difficulty: 2,
        question:
            "Quali sono le funzioni del fegato?",
        answers: [
            {
                id: "A",
                text: "Organo fondamentale dell’apparato digerente dei vertebrati, che interviene nella trasformazione in chimo degli alimenti.",
                correct: false,
                explanation:
                    "La trasformazione del bolo alimentare in chimo avviene principalmente nello stomaco. Questa descrizione non identifica correttamente le funzioni del fegato.",
            },
            {
                id: "B",
                text: "Regolare la fotosintesi clorofilliana.",
                correct: false,
                explanation:
                    "La fotosintesi è un processo delle cellule fotosintetiche vegetali e di altri organismi autotrofi. Non riguarda il fegato animale.",
            },
            {
                id: "C",
                text: "Produrre piastrine e globuli rossi.",
                correct: false,
                explanation:
                    "Nell’adulto la produzione delle cellule del sangue avviene principalmente nel midollo osseo. Non è questa la funzione principale del fegato.",
            },
            {
                id: "D",
                text: "Produrre la bile e favorire la trasformazione degli alimenti assorbiti, partecipare al metabolismo delle proteine e alla riduzione dei loro scarti tossici, consentire la gestione e l’immagazzinamento degli zuccheri.",
                correct: true,
                explanation:
                    "Il fegato produce la bile, partecipa al metabolismo di numerose sostanze, contribuisce alla detossificazione e regola le riserve energetiche, per esempio immagazzinando glucosio sotto forma di glicogeno.",
            },
        ],
    },

    {
        id: 59,
        area: "cultura-matematico-scientifica",
        category: "biologia-etologia",
        difficulty: 1,
        question:
            "L’etologia è:",
        answers: [
            {
                id: "A",
                text: "Lo studio del comportamento animale.",
                correct: true,
                explanation:
                    "L’etologia è la disciplina scientifica che studia il comportamento degli animali, in particolare anche nel loro ambiente naturale.",
            },
            {
                id: "B",
                text: "Lo studio del rapporto tra organismi e ambiente.",
                correct: false,
                explanation:
                    "Lo studio delle relazioni tra organismi e ambiente appartiene principalmente all’ecologia.",
            },
            {
                id: "C",
                text: "Lo studio delle diverse forme di inquinamento.",
                correct: false,
                explanation:
                    "L’inquinamento viene studiato nell’ambito delle scienze ambientali e di altre discipline specifiche, non dall’etologia.",
            },
            {
                id: "D",
                text: "Lo studio degli esseri viventi.",
                correct: false,
                explanation:
                    "La biologia è la disciplina generale che studia gli esseri viventi. L’etologia si concentra specificamente sul loro comportamento, soprattutto animale.",
            },
        ],
    },

    {
        id: 60,
        area: "cultura-matematico-scientifica",
        category: "biologia-genetica",
        difficulty: 2,
        question:
            "La probabilità di ottenere cuccioli con la coda mozza dall'incrocio tra un cane a cui sia stata tagliata la coda e una cagna a cui sia stata tagliata la coda è:",
        answers: [
            {
                id: "A",
                text: "50%.",
                correct: false,
                explanation:
                    "Il taglio della coda è una modificazione acquisita durante la vita e non altera il patrimonio genetico trasmesso ai gameti. Non esiste quindi una probabilità del 50% dovuta a questo intervento.",
            },
            {
                id: "B",
                text: "0%.",
                correct: true,
                explanation:
                    "Una caratteristica acquisita come il taglio della coda non viene ereditata geneticamente. Il fatto che entrambi i genitori abbiano subito il taglio non determina la nascita di cuccioli con la coda già mozzata.",
            },
            {
                id: "C",
                text: "100%.",
                correct: false,
                explanation:
                    "La mutilazione della coda dei genitori non modifica i geni coinvolti nello sviluppo della coda. Non viene quindi trasmessa automaticamente alla prole.",
            },
            {
                id: "D",
                text: "75%.",
                correct: false,
                explanation:
                    "Il valore 75% sarebbe pertinente a determinati incroci genetici mendeliani, ma qui non è coinvolto un carattere genetico ereditario: il taglio della coda è acquisito.",
            },
        ],
    },
];

export default simulation17;