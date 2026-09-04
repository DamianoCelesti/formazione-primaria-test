const passages15 = {
    passage01: `Crisi del matrimonio, aumento del numero dei divorzi, elevata difficoltà nel mantenere un legame per lungo tempo, liberalizzazione della sessualità e messa in discussione della cultura etero-centrica. Al di là delle opinioni personali è indubbio che stiamo vivendo anni di grandi cambiamenti sociali e importanti rivoluzioni nell'ambito della sfera relazionale e sessuale. Tra queste se ne sta affacciando una nuova: la crisi dell'"amore unico". Proprio in questi ultimi vent'anni si è acceso un nuovo movimento che mette in discussione i principi della monogamia: il poliamore.

Ma di cosa si tratta? Con questo termine ombrello si fa riferimento a un insieme di numerosi stili relazionali affettivi e/o sessuali, accomunati tutti dalla possibilità di intrattenere rapporti allargati tra più di due persone, di qualsiasi genere e orientamento sessuale. Le caratteristiche fondamentali di questo approccio sono la consensualità e la chiarezza che ne rappresentano i capisaldi etici: la consensualità consiste nel via libera che tutti i componenti di una relazione si concedono affinché possano estendere il proprio campo amoroso e sessuale, con i dovuti limiti e le regole che gli innamorati decidono insieme; mentre la chiarezza riguarda la comunicazione a tutti i partners della presenza di altri legami, al fine di evitare sotterfugi.

È importante chiarire che nel poliamore non ci si abbandona alla promiscuità e non si cerca di evitare l'impegno di una relazione, ma si danno maggiori concessioni a quella parte di sé che vuole sentirsi appagata sessualmente e affettivamente. Paradossalmente ci si impegna di più. Altra cosa importante è che non si smette di amare: si amano più persone. Sia chiaro che non ho intenzione di sostenere che il poliamore sia migliore della monogamia, ciò nonostante sento di poter affermare che questo nostro modo di metterci in relazione non è perfetto e che il poliamore ha qualcosa di importante da insegnarci. Cosa? Personalmente ritengo che la monogamia, basata sul principio di esclusività, si sia incancrenita su alcuni preconcetti che sono la causa del suo stesso fallimento. Un conto è amare una sola persona, un altro è credere che tutti debbano fare altrettanto perché altrimenti malati di mente, o che si debba considerare qualsiasi desiderio di "altro" come un sintomo di insoddisfazione verso il rapporto o verso il partner. Il poliamore suggerisce infatti che nonostante si possa essere appagati da una relazione, ciò non impedisca lo svilupparsi di ulteriori legami e non comporti l'obbligo di sentirsi esauditi nella propria totalità.

(da: Vittorio Arrigoni, "E se la monogamia non fosse abbastanza?", culturaemotiva.it).`,

    passage02: `I colori possono influenzare il nostro umore e addirittura incidere sulla nostra salute. Proprio per tale ragione la scelta del colore nella casa deve essere attenta, accurata e subordinata al tipo di ambiente e all'attività che in questo ambiente verrà svolta. I colori si distinguono in primari e secondari, caldi e freddi. Quando un colore entra nei nostri occhi è in grado di liberare un'energia che influisce direttamente sulla produzione di ormoni. Ormoni calmanti e antistress sono prodotti nel caso in cui i nostri occhi vengano esposti a un colore come il blu, il quale ha la peculiare caratteristica di stimolare il sonno; diversamente il rosso è un colore dinamico che scatena l'adrenalina. È quindi sconsigliabile usare il colore rosso per la camera da letto, per la quale sono sicuramente più adatte tinte più tenui e colori pastello.`,
};

const simulation15 = [

    {
        id: 1,
        area: "linguistica-logica",
        category: "grammatica-verbi",
        difficulty: 2,
        question:
            "La voce verbale \"abbia affidato\" è espressa nel:",
        answers: [
            {
                id: "A",
                text: "modo indicativo, tempo passato",
                correct: false,
                explanation:
                    "\"Abbia affidato\" non appartiene al modo indicativo. La presenza dell'ausiliare \"abbia\" indica una forma del congiuntivo.",
            },
            {
                id: "B",
                text: "modo congiuntivo, tempo imperfetto",
                correct: false,
                explanation:
                    "Il congiuntivo imperfetto del verbo affidare sarebbe, per esempio, \"affidasse\". \"Abbia affidato\" è invece una forma composta.",
            },
            {
                id: "C",
                text: "modo congiuntivo, tempo passato",
                correct: true,
                explanation:
                    "\"Abbia affidato\" è un congiuntivo passato, formato dal congiuntivo presente dell'ausiliare avere, \"abbia\", più il participio passato \"affidato\".",
            },
            {
                id: "D",
                text: "modo imperativo, tempo presente",
                correct: false,
                explanation:
                    "L'imperativo serve principalmente per ordini, inviti o esortazioni. \"Abbia affidato\" non è una forma imperativa.",
            },
        ],
    },

    {
        id: 2,
        area: "linguistica-logica",
        category: "logica-proposizionale",
        difficulty: 3,
        question:
            "La frase italiana che esprime lo stesso concetto della proposizione \"non è vero che tutti i gigli sono bianchi\" è:",
        answers: [
            {
                id: "A",
                text: "c'è almeno un giglio che non è bianco",
                correct: true,
                explanation:
                    "Negare che tutti i gigli siano bianchi significa affermare che esiste almeno un giglio che non è bianco. È la negazione logica corretta di una proposizione universale.",
            },
            {
                id: "B",
                text: "tutti i gigli sono neri",
                correct: false,
                explanation:
                    "Dal fatto che non tutti i gigli siano bianchi non segue che siano tutti neri. Potrebbero esistere gigli di diversi colori.",
            },
            {
                id: "C",
                text: "c'è almeno un giglio nero",
                correct: false,
                explanation:
                    "Un giglio non bianco non deve necessariamente essere nero. Potrebbe essere giallo, rosa o di un altro colore.",
            },
            {
                id: "D",
                text: "tutti i gigli sono di colore diverso dal bianco",
                correct: false,
                explanation:
                    "Questa frase afferma che nessun giglio è bianco, che è molto più forte della proposizione originale. È sufficiente che esista almeno un'eccezione.",
            },
        ],
    },

    {
        id: 3,
        area: "linguistica-logica",
        category: "logica-analogie",
        difficulty: 2,
        question:
            "Quali, tra i termini proposti, completano correttamente la seguente proporzione verbale? Avvocato : Imputato = X : Y",
        answers: [
            {
                id: "A",
                text: "X = Cucina; Y = Pizza",
                correct: false,
                explanation:
                    "La relazione tra cucina e pizza è principalmente luogo o attività rispetto a un prodotto. Non corrisponde al rapporto professionista-persona assistita.",
            },
            {
                id: "B",
                text: "X = Cavoli; Y = Merenda",
                correct: false,
                explanation:
                    "I due termini richiamano l'espressione proverbiale \"come i cavoli a merenda\", ma non riproducono la relazione avvocato-imputato.",
            },
            {
                id: "C",
                text: "X = Cornice; Y = Pittore",
                correct: false,
                explanation:
                    "La cornice può contenere un'opera realizzata da un pittore, ma non esiste un rapporto analogo a quello tra un professionista e la persona da lui assistita.",
            },
            {
                id: "D",
                text: "X = Medico; Y = Ammalato",
                correct: true,
                explanation:
                    "L'avvocato assiste professionalmente l'imputato; analogamente il medico assiste e cura l'ammalato. La relazione tra le due coppie è quindi coerente.",
            },
        ],
    },

    {
        id: 4,
        area: "linguistica-logica",
        category: "logica-condizionale",
        difficulty: 3,
        question:
            "\"Attilio promette al figlio Fausto che, se si diplomerà con una votazione superiore a 70/100, gli regalerà un viaggio in Europa\". In quale dei seguenti casi si è certi che Attilio NON mantiene la promessa?",
        answers: [
            {
                id: "A",
                text: "Fausto si diploma con 70/100 e non riceve alcun regalo dal padre",
                correct: false,
                explanation:
                    "La promessa vale soltanto se la votazione è superiore a 70/100. Un voto esattamente pari a 70 non soddisfa la condizione.",
            },
            {
                id: "B",
                text: "Fausto si diploma con una votazione pari a 80/100 e non riceve alcun regalo dal padre",
                correct: true,
                explanation:
                    "80/100 è superiore a 70/100, quindi la condizione della promessa si è verificata. Se Attilio non regala il viaggio, non mantiene certamente ciò che aveva promesso.",
            },
            {
                id: "C",
                text: "Fausto viene respinto all'Esame di Stato e riceve in regalo dal padre un viaggio in Europa",
                correct: false,
                explanation:
                    "La promessa non dice che Attilio non possa regalare il viaggio in altri casi. Se Fausto viene respinto, la condizione che obbliga il padre non si realizza.",
            },
            {
                id: "D",
                text: "Fausto si diploma con 60/100 e riceve dal padre in regalo un viaggio in Europa",
                correct: false,
                explanation:
                    "Anche qui la condizione prevista dalla promessa non si verifica. Attilio può comunque decidere liberamente di regalargli il viaggio.",
            },
        ],
    },

    {
        id: 5,
        area: "linguistica-logica",
        category: "logica-analogie",
        difficulty: 2,
        question:
            "Quali, tra i termini proposti, completano correttamente la seguente proporzione verbale? Sarto : X = Muratore : Y",
        answers: [
            {
                id: "A",
                text: "X = Vestito; Y = Impalcatura",
                correct: false,
                explanation:
                    "Vestito e impalcatura possono essere collegati alle due professioni, ma non sono strumenti direttamente equivalenti nella relazione richiesta.",
            },
            {
                id: "B",
                text: "X = Mattone; Y = Stoffa",
                correct: false,
                explanation:
                    "I materiali sono invertiti: la stoffa è utilizzata dal sarto, mentre il mattone è tipicamente utilizzato dal muratore.",
            },
            {
                id: "C",
                text: "X = Ago; Y = Cazzuola",
                correct: true,
                explanation:
                    "L'ago è uno degli strumenti tipici del sarto, così come la cazzuola è uno strumento caratteristico del muratore. La relazione è professione → strumento.",
            },
            {
                id: "D",
                text: "X = Ufficio; Y = Carriola",
                correct: false,
                explanation:
                    "La carriola può essere usata in edilizia, ma \"ufficio\" non rappresenta uno strumento equivalente per il sarto.",
            },
        ],
    },

    {
        id: 6,
        area: "linguistica-logica",
        category: "ortografia",
        difficulty: 2,
        question:
            "Quale delle seguenti frasi contiene un errore ortografico?",
        answers: [
            {
                id: "A",
                text: "Questa crema non mi piace: ha una consistenza troppo acquosa",
                correct: false,
                explanation:
                    "\"Acquosa\" è scritto correttamente con il gruppo \"acqu-\". Non presenta errori ortografici.",
            },
            {
                id: "B",
                text: "Per l'acquisto con carta di credito, è necessario esibire un documento d'identità",
                correct: false,
                explanation:
                    "Sia \"acquisto\" sia \"d'identità\" sono scritti correttamente. La frase non contiene l'errore richiesto.",
            },
            {
                id: "C",
                text: "La stanza era stata messa a soqquadro dalla visita di un topo d'appartamento",
                correct: false,
                explanation:
                    "\"Soqquadro\" è la grafia corretta della parola. Anche \"d'appartamento\" presenta correttamente l'apostrofo.",
            },
            {
                id: "D",
                text: "Il gattino se ne stava aqquattato dietro il cespuglio, pronto a buttarsi sul passerotto",
                correct: true,
                explanation:
                    "La grafia \"aqquattato\" è errata. La forma corretta è \"acquattato\", con il gruppo consonantico \"cqu\".",
            },
        ],
    },

    {
        id: 7,
        area: "linguistica-logica",
        category: "grammatica-aggettivi",
        difficulty: 2,
        question:
            "Quale tra le seguenti frasi contiene un comparativo di uguaglianza?",
        answers: [
            {
                id: "A",
                text: "I felini sono tanto rapidi quanto silenziosi",
                correct: true,
                explanation:
                    "La struttura \"tanto... quanto\" esprime un confronto di uguaglianza tra due qualità: rapidità e silenziosità.",
            },
            {
                id: "B",
                text: "Mio fratello è decisamente meno timido di me",
                correct: false,
                explanation:
                    "\"Meno timido di\" è un comparativo di minoranza. La qualità è attribuita in misura inferiore rispetto al secondo termine.",
            },
            {
                id: "C",
                text: "A Firenze ho visto alcune celeberrime sculture di Michelangelo",
                correct: false,
                explanation:
                    "\"Celeberrime\" è un superlativo assoluto. Non mette in rapporto di uguaglianza due elementi.",
            },
            {
                id: "D",
                text: "L’abito di Rebecca era senza dubbio il più elegante",
                correct: false,
                explanation:
                    "\"Il più elegante\" è un superlativo relativo di maggioranza. Non è un comparativo di uguaglianza.",
            },
        ],
    },

    {
        id: 8,
        area: "linguistica-logica",
        category: "grammatica-pronomi",
        difficulty: 2,
        question:
            "Completare correttamente la frase: \"Quando incontri Elena … di telefonarmi\":",
        answers: [
            {
                id: "A",
                text: "dimmi",
                correct: false,
                explanation:
                    "\"Dimmi\" significa \"di' a me\" e non indica Elena come destinataria dell'invito a telefonare.",
            },
            {
                id: "B",
                text: "dille",
                correct: true,
                explanation:
                    "\"Dille\" significa \"di' a lei\". Poiché Elena è una persona di genere femminile, il pronome indiretto corretto è \"le\".",
            },
            {
                id: "C",
                text: "dicci",
                correct: false,
                explanation:
                    "\"Dicci\" significa \"di' a noi\". Non concorda con il referente Elena.",
            },
            {
                id: "D",
                text: "digli",
                correct: false,
                explanation:
                    "\"Digli\" significa normalmente \"di' a lui\". Per Elena è necessaria la forma femminile \"dille\".",
            },
        ],
    },

    {
        id: 9,
        area: "linguistica-logica",
        category: "analisi-logica",
        difficulty: 2,
        question:
            "Quale delle seguenti frasi contiene un complemento di compagnia?",
        answers: [
            {
                id: "A",
                text: "Cenare in compagnia è sempre gradevole!",
                correct: false,
                explanation:
                    "\"In compagnia\" è qui un'espressione generica e non indica esplicitamente la persona insieme alla quale viene compiuta l'azione.",
            },
            {
                id: "B",
                text: "Vidi Marco in bicicletta con il suo zaino",
                correct: false,
                explanation:
                    "\"Con il suo zaino\" indica un oggetto insieme a Marco e viene normalmente analizzato come complemento di unione, non di compagnia.",
            },
            {
                id: "C",
                text: "Mia zia va spesso al cinema con sua sorella",
                correct: true,
                explanation:
                    "\"Con sua sorella\" indica la persona insieme alla quale la zia compie l'azione di andare al cinema. È quindi un complemento di compagnia.",
            },
            {
                id: "D",
                text: "La borsa per la piscina è già pronta",
                correct: false,
                explanation:
                    "\"Per la piscina\" indica la destinazione o lo scopo della borsa. Non esprime compagnia.",
            },
        ],
    },

    {
        id: 10,
        area: "linguistica-logica",
        category: "grammatica-pronomi",
        difficulty: 3,
        question:
            "Individuare la frase corretta tra le seguenti.",
        answers: [
            {
                id: "A",
                text: "La prima volta che vidi una rapina me ne impressionò parecchio",
                correct: false,
                explanation:
                    "La costruzione \"me ne impressionò\" è errata in questo contesto. Si dovrebbe dire, per esempio, \"mi impressionò parecchio\".",
            },
            {
                id: "B",
                text: "Quella che ti ho detto è la pura verità: dovresti credermene!",
                correct: false,
                explanation:
                    "\"Credermene\" non è la forma appropriata: si direbbe \"dovresti credermi\" oppure \"dovresti crederci\" a seconda del significato.",
            },
            {
                id: "C",
                text: "Il portabagagli della tua auto è molto spazioso: vi ci siamo entrati in due!",
                correct: false,
                explanation:
                    "La presenza contemporanea di \"vi\" e \"ci\" crea una duplicazione pronominale non corretta nello standard richiesto dal quesito.",
            },
            {
                id: "D",
                text: "Era la donna più affascinante che avessi mai incontrato, me ne innamorai all'istante",
                correct: true,
                explanation:
                    "La frase è grammaticalmente corretta. \"Me ne innamorai\" significa \"mi innamorai di lei\" e il congiuntivo trapassato \"avessi incontrato\" è appropriato.",
            },
        ],
    },

    {
        id: 11,
        area: "linguistica-logica",
        category: "lessico-contrari",
        difficulty: 1,
        question:
            "\"Coerente\" è un contrario di:",
        answers: [
            {
                id: "A",
                text: "compatto",
                correct: false,
                explanation:
                    "\"Compatto\" indica qualcosa di unito, denso o coeso. Non rappresenta il contrario diretto di \"coerente\".",
            },
            {
                id: "B",
                text: "contraddittorio",
                correct: true,
                explanation:
                    "\"Coerente\" indica ciò che mantiene una logica e non presenta contraddizioni. \"Contraddittorio\" indica invece ciò che contiene elementi tra loro incompatibili.",
            },
            {
                id: "C",
                text: "semplice",
                correct: false,
                explanation:
                    "\"Semplice\" si oppone soprattutto a \"complesso\". Non è il contrario di \"coerente\".",
            },
            {
                id: "D",
                text: "libero",
                correct: false,
                explanation:
                    "\"Libero\" si contrappone a termini come vincolato, occupato o prigioniero, a seconda del contesto. Non è l'opposto di \"coerente\".",
            },
        ],
    },

    {
        id: 12,
        area: "linguistica-logica",
        category: "lessico",
        difficulty: 2,
        question:
            "Individuare, tra le alternative proposte, quella che completa correttamente la frase seguente: \"La ... che qualcosa sta per accadere si chiama ... \".",
        answers: [
            {
                id: "A",
                text: "sensazione; presentimento",
                correct: true,
                explanation:
                    "Un presentimento è proprio una sensazione o intuizione anticipatoria secondo cui qualcosa sta per accadere, spesso senza disporre di prove precise.",
            },
            {
                id: "B",
                text: "volontà; autoconvincimento",
                correct: false,
                explanation:
                    "La volontà riguarda la decisione o il desiderio di compiere qualcosa, mentre l'autoconvincimento riguarda il persuadere se stessi. Non esprimono l'idea anticipatoria richiesta.",
            },
            {
                id: "C",
                text: "paura; incubo",
                correct: false,
                explanation:
                    "Un incubo è un sogno angosciante, non il nome della sensazione che qualcosa stia per accadere.",
            },
            {
                id: "D",
                text: "intuizione; mistero",
                correct: false,
                explanation:
                    "Un mistero è qualcosa di oscuro o inspiegato. Non è il termine che indica la sensazione anticipatoria descritta.",
            },
        ],
    },

    {
        id: 13,
        area: "linguistica-logica",
        category: "lessico",
        difficulty: 1,
        question:
            "Qual è il significato di \"pulsazione\"?",
        answers: [
            {
                id: "A",
                text: "Rumore sordo",
                correct: false,
                explanation:
                    "Un rumore sordo è un suono poco nitido o profondo. Non costituisce il significato fondamentale di \"pulsazione\".",
            },
            {
                id: "B",
                text: "Stato di salute",
                correct: false,
                explanation:
                    "Lo stato di salute può essere valutato anche attraverso il polso, ma \"pulsazione\" non significa direttamente stato di salute.",
            },
            {
                id: "C",
                text: "Battito del cuore",
                correct: true,
                explanation:
                    "La pulsazione è il battito ritmico percepibile nelle arterie in conseguenza dell'attività cardiaca. Nel linguaggio comune viene quindi associata al battito del cuore.",
            },
            {
                id: "D",
                text: "Variazione impercettibile",
                correct: false,
                explanation:
                    "\"Pulsazione\" indica un movimento o battito ritmico, non una generica variazione impercettibile.",
            },
        ],
    },

    {
        id: 14,
        area: "linguistica-logica",
        category: "grammatica-periodo-ipotetico",
        difficulty: 3,
        question:
            "Individuare, tra le seguenti frasi, quella scritta correttamente.",
        answers: [
            {
                id: "A",
                text: "Sarebbe per me, non ci sarebbe alcun problema a ospitarvi stanotte",
                correct: false,
                explanation:
                    "La costruzione iniziale \"Sarebbe per me\" è impropria. Una forma corretta sarebbe, per esempio, \"Se fosse per me...\".",
            },
            {
                id: "B",
                text: "Volessi forse dire che io sono stonata come una campana?",
                correct: false,
                explanation:
                    "In questo contesto la forma appropriata sarebbe \"Vorresti forse dire...\". \"Volessi\" è un congiuntivo imperfetto usato qui in modo scorretto.",
            },
            {
                id: "C",
                text: "Non andrai alla presentazione di domani, sarei troppo stanco",
                correct: false,
                explanation:
                    "La frase presenta una discordanza tra le persone verbali: \"andrai\" è seconda persona, mentre \"sarei\" è prima persona.",
            },
            {
                id: "D",
                text: "Se anche solo tu fossi stato un po' più attento, quel vaso non si sarebbe rotto in mille pezzi",
                correct: true,
                explanation:
                    "La frase presenta correttamente un periodo ipotetico dell'irrealtà riferito al passato: congiuntivo trapassato nella subordinata e condizionale passato nella principale.",
            },
        ],
    },

    {
        id: 15,
        area: "linguistica-logica",
        category: "grammatica-periodo-ipotetico",
        difficulty: 2,
        question:
            "Completare correttamente la frase seguente: “Se … meno freddo … uscire a passeggiare con la bambina”.",
        answers: [
            {
                id: "A",
                text: "faceva; potremmo",
                correct: false,
                explanation:
                    "Nel periodo ipotetico della possibilità non si usa normalmente l'indicativo imperfetto \"faceva\" insieme al condizionale \"potremmo\".",
            },
            {
                id: "B",
                text: "facesse; potremmo",
                correct: true,
                explanation:
                    "La costruzione corretta è \"Se facesse meno freddo, potremmo uscire...\": congiuntivo imperfetto nella protasi e condizionale presente nell'apodosi.",
            },
            {
                id: "C",
                text: "farebbe; potremmo",
                correct: false,
                explanation:
                    "Dopo \"se\" in questo tipo di periodo ipotetico non si usa il condizionale \"farebbe\". È necessario il congiuntivo imperfetto.",
            },
            {
                id: "D",
                text: "farà; saremmo potuti",
                correct: false,
                explanation:
                    "Le due forme verbali appartengono a piani temporali incompatibili: futuro semplice nella subordinata e condizionale passato nella principale.",
            },
        ],
    },

    {
        id: 16,
        area: "linguistica-logica",
        category: "logica-sequenze",
        difficulty: 4,
        question:
            "Completare correttamente la seguente successione: 5, 7, 11, 13, 17, 19, 23, ?",
        answers: [
            {
                id: "A",
                text: "26",
                correct: false,
                explanation:
                    "26 è un numero pari e non segue il criterio apparente della successione. La serie proposta è composta da numeri primi consecutivi a partire da 5.",
            },
            {
                id: "B",
                text: "24",
                correct: false,
                explanation:
                    "24 è un numero composto e non prosegue la sequenza dei numeri primi mostrata nei termini precedenti.",
            },
            {
                id: "C",
                text: "25",
                correct: true,
                explanation:
                    "Questa è la soluzione indicata ufficialmente nel PDF, che specifica che la risposta corretta di ogni quesito è l'opzione A. Tuttavia la domanda presenta un'incongruenza: la sequenza 5, 7, 11, 13, 17, 19, 23 segue i numeri primi e il termine successivo dovrebbe essere 29, che non compare tra le alternative.",
            },
            {
                id: "D",
                text: "27",
                correct: false,
                explanation:
                    "27 non è un numero primo, essendo divisibile per 3. Non prosegue quindi il criterio matematico apparentemente utilizzato dalla successione.",
            },
        ],
    },

    {
        id: 17,
        area: "linguistica-logica",
        category: "logica-comprensione",
        difficulty: 3,
        question:
            "\"Il confronto delle due fotografie non ha consentito di dimostrare l'impossibilità che la persona ritratta sia la stessa che abbiamo visto ieri\" Qual è il corretto significato della precedente affermazione?",
        answers: [
            {
                id: "A",
                text: "La persona ritratta potrebbe essere la stessa che abbiamo visto ieri",
                correct: true,
                explanation:
                    "Non essere riusciti a dimostrare che sia impossibile che si tratti della stessa persona significa che questa possibilità rimane aperta. Non viene però affermato che sia certamente la stessa.",
            },
            {
                id: "B",
                text: "La persona ritratta è quella che abbiamo visto ieri",
                correct: false,
                explanation:
                    "Il testo non dimostra l'identità delle due persone. Afferma soltanto che non è stata esclusa.",
            },
            {
                id: "C",
                text: "La persona ritratta non può essere la stessa che abbiamo visto ieri",
                correct: false,
                explanation:
                    "Questa frase afferma proprio l'impossibilità che il testo originale dice di non essere riuscito a dimostrare.",
            },
            {
                id: "D",
                text: "Il confronto delle due fotografie ha dimostrato che la persona ritratta non è la stessa che abbiamo visto ieri",
                correct: false,
                explanation:
                    "L'affermazione originale dice esattamente che il confronto non ha permesso di dimostrare tale impossibilità. Questa alternativa ne capovolge il significato.",
            },
        ],
    },

    {
        id: 18,
        area: "linguistica-logica",
        category: "punteggiatura",
        difficulty: 2,
        question:
            "In quale delle seguenti frasi la punteggiatura è usata in modo corretto?",
        answers: [
            {
                id: "A",
                text: "La notte, piovve molto il castello era minaccioso.",
                correct: false,
                explanation:
                    "La virgola dopo \"La notte\" è discutibile e soprattutto manca un segno di punteggiatura tra \"molto\" e \"il castello\". Due proposizioni autonome risultano unite senza separazione.",
            },
            {
                id: "B",
                text: "Ha detto: che la neve era verde possibile!",
                correct: false,
                explanation:
                    "I due punti non vanno inseriti tra \"ha detto\" e la subordinata introdotta da \"che\" in questa forma. Anche la parte finale risulta sintatticamente scorretta.",
            },
            {
                id: "C",
                text: "I ladri fuggirono un poliziotto li rincorse, un passante li bloccò.",
                correct: false,
                explanation:
                    "Manca un segno di punteggiatura dopo \"fuggirono\" per separare correttamente le proposizioni. La frase risulta quindi mal costruita.",
            },
            {
                id: "D",
                text: "Assaggiando la torta, la bambina disse: \"Ma è proprio buona, vero?\".",
                correct: true,
                explanation:
                    "La virgola separa correttamente la subordinata implicita iniziale, mentre i due punti introducono il discorso diretto. Il punto interrogativo è appropriato alla domanda contenuta nella battuta.",
            },
        ],
    },

    {
        id: 19,
        area: "linguistica-logica",
        category: "grammatica-congiunzioni",
        difficulty: 3,
        question:
            "Completare in modo corretto la frase \"... te ne accorgessi, uno sconosciuto ... di borseggiarti\".",
        answers: [
            {
                id: "A",
                text: "Nonostante; sta tentando",
                correct: false,
                explanation:
                    "\"Nonostante te ne accorgessi\" richiederebbe una costruzione diversa e non esprime il significato naturale della frase. Anche il presente progressivo non si accorda bene con il contesto.",
            },
            {
                id: "B",
                text: "Senza che; ha tentato",
                correct: true,
                explanation:
                    "La frase corretta è \"Senza che te ne accorgessi, uno sconosciuto ha tentato di borseggiarti\". \"Senza che\" regge correttamente il congiuntivo imperfetto \"accorgessi\".",
            },
            {
                id: "C",
                text: "Quando anche; tenta",
                correct: false,
                explanation:
                    "\"Quando anche\" non si inserisce naturalmente nella frase e la forma presente \"tenta\" non è coerente con la subordinata al congiuntivo imperfetto.",
            },
            {
                id: "D",
                text: "Ammesso che; tentò",
                correct: false,
                explanation:
                    "\"Ammesso che\" introduce normalmente un'ipotesi o una concessione, mentre qui si vuole esprimere che il tentativo è avvenuto senza che la persona se ne rendesse conto.",
            },
        ],
    },

    {
        id: 20,
        area: "linguistica-logica",
        category: "lessico-sinonimi",
        difficulty: 2,
        question:
            "Un sinonimo dell'aggettivo \"combattuto\" è:",
        answers: [
            {
                id: "A",
                text: "incerto",
                correct: true,
                explanation:
                    "Quando riferito a una persona o a uno stato d'animo, \"combattuto\" significa indeciso, diviso tra possibilità o sentimenti contrastanti. \"Incerto\" è quindi il sinonimo corretto.",
            },
            {
                id: "B",
                text: "facile",
                correct: false,
                explanation:
                    "\"Facile\" indica qualcosa che non presenta difficoltà. Non esprime uno stato di indecisione interiore.",
            },
            {
                id: "C",
                text: "certo",
                correct: false,
                explanation:
                    "\"Certo\" esprime sicurezza e assenza di dubbio. È quindi quasi il contrario di \"combattuto\" nel significato usato qui.",
            },
            {
                id: "D",
                text: "rapido",
                correct: false,
                explanation:
                    "\"Rapido\" indica velocità. Non ha relazione con il significato di indecisione espresso da \"combattuto\".",
            },
        ],
    },
    {
        id: 21,
        area: "linguistica-logica",
        category: "discorso-diretto-indiretto",
        difficulty: 2,
        question:
            "Trasformare la seguente frase in discorso diretto: \"Il comandante esortò i soldati ad essere impavidi e altruisti di fronte al pericolo\".",
        answers: [
            {
                id: "A",
                text: "Il comandante esortò i soldati che sono impavidi ed altruisti di fronte al pericolo",
                correct: false,
                explanation:
                    "Questa frase non trasforma correttamente l'esortazione in discorso diretto. Inoltre cambia il significato, perché presenta i soldati come già impavidi e altruisti.",
            },
            {
                id: "B",
                text: "Il comandante esortò ai soldati: \"Che devono essere impavidi ed altruisti di fronte al pericolo!\"",
                correct: false,
                explanation:
                    "La costruzione «esortò ai soldati» non è corretta e il discorso diretto non viene formulato naturalmente. L'esortazione deve essere resa attraverso l'imperativo.",
            },
            {
                id: "C",
                text: "Il comandante esortò i soldati: \"Siate impavidi ed altruisti di fronte al pericolo!\"",
                correct: true,
                explanation:
                    "Il discorso indiretto «esortò i soldati ad essere» viene trasformato correttamente nell'imperativo «Siate». Le virgolette delimitano inoltre correttamente le parole pronunciate dal comandante.",
            },
            {
                id: "D",
                text: "Il comandante esortò i soldati con le parole: siate impavidi ed altruisti di fronte al pericolo!",
                correct: false,
                explanation:
                    "Il contenuto dell'esortazione è comprensibile, ma manca la corretta rappresentazione grafica del discorso diretto mediante virgolette. Il test considera corretta l'alternativa che presenta esplicitamente la battuta del comandante.",
            },
        ],
    },

    {
        id: 22,
        area: "linguistica-logica",
        category: "grammatica-forma-passiva",
        difficulty: 2,
        question:
            "Quale delle seguenti frasi contiene una forma passiva?",
        answers: [
            {
                id: "A",
                text: "Ripensando all'accaduto sono stato assalito da una paura improvvisa",
                correct: true,
                explanation:
                    "«Sono stato assalito» è una forma passiva, costruita con l'ausiliare essere più il participio passato. Il soggetto subisce l'azione, mentre «da una paura improvvisa» indica ciò che compie figurativamente l'azione.",
            },
            {
                id: "B",
                text: "Il fuoco del camino brucia e scoppietta allegramente",
                correct: false,
                explanation:
                    "«Brucia» e «scoppietta» sono forme attive. Il soggetto «il fuoco» compie direttamente le azioni espresse dai verbi.",
            },
            {
                id: "C",
                text: "La nonna ha già deciso quale sarà il menu per la prossima cena",
                correct: false,
                explanation:
                    "«Ha deciso» è una forma attiva al passato prossimo. La nonna è il soggetto che compie l'azione.",
            },
            {
                id: "D",
                text: "Il cellulare, cadendo dalla tasca, si è scheggiato su un lato",
                correct: false,
                explanation:
                    "«Si è scheggiato» non è una normale forma passiva con essere e participio passato. Esprime piuttosto un cambiamento subito dal cellulare attraverso una costruzione pronominale.",
            },
        ],
    },

    {
        id: 23,
        area: "linguistica-logica",
        category: "grammatica-pronomi",
        difficulty: 2,
        question:
            "Completare la seguente frase inserendo il pronome corretto: \"... di voi sappia qualcosa, vada dalla polizia a denunciarlo\".",
        answers: [
            {
                id: "A",
                text: "che",
                correct: false,
                explanation:
                    "«Che di voi sappia qualcosa» non forma una costruzione grammaticalmente corretta con il significato richiesto.",
            },
            {
                id: "B",
                text: "chi",
                correct: false,
                explanation:
                    "«Chi di voi» potrebbe introdurre una domanda, ma nella frase è richiesto un pronome indefinito che significhi «qualunque persona tra voi».",
            },
            {
                id: "C",
                text: "qualunque",
                correct: false,
                explanation:
                    "«Qualunque» viene normalmente utilizzato come aggettivo davanti a un nome, per esempio «qualunque persona». Da solo non è la forma prevista dalla frase.",
            },
            {
                id: "D",
                text: "chiunque",
                correct: true,
                explanation:
                    "«Chiunque» è un pronome indefinito che significa «qualsiasi persona». La frase corretta è quindi: «Chiunque di voi sappia qualcosa, vada dalla polizia a denunciarlo».",
            },
        ],
    },

    {
        id: 24,
        area: "linguistica-logica",
        category: "logica-sequenze",
        difficulty: 4,
        question:
            "Completare correttamente la seguente successione, utilizzando l’alfabeto italiano: G; 100; N; 87; S; 74; ?; ?",
        answers: [
            {
                id: "A",
                text: "A; 65",
                correct: false,
                explanation:
                    "La parte numerica diminuisce ogni volta di 13: 100, 87, 74, quindi il valore successivo deve essere 61 e non 65.",
            },
            {
                id: "B",
                text: "A; 61",
                correct: true,
                explanation:
                    "I numeri diminuiscono di 13: 100 → 87 → 74 → 61. Considerando l'alfabeto italiano di 21 lettere, le lettere avanzano di cinque posizioni: G → N → S → A, ricominciando dall'inizio dopo la Z.",
            },
            {
                id: "C",
                text: "N; 79",
                correct: false,
                explanation:
                    "N è già comparsa nella successione e 79 non rispetta la progressione numerica, che prevede una diminuzione costante di 13.",
            },
            {
                id: "D",
                text: "B; 80",
                correct: false,
                explanation:
                    "Né la lettera B né il numero 80 rispettano i due schemi paralleli presenti nella successione.",
            },
        ],
    },

    {
        id: 25,
        area: "linguistica-logica",
        category: "lessico-sinonimi",
        difficulty: 1,
        question:
            "Tra le seguenti coppie di termini, quale contiene due sinonimi?",
        answers: [
            {
                id: "A",
                text: "Offensivo – innocuo",
                correct: false,
                explanation:
                    "«Offensivo» indica qualcosa che può offendere o arrecare danno, mentre «innocuo» significa non dannoso. I due termini non sono sinonimi.",
            },
            {
                id: "B",
                text: "Aperto – chiuso",
                correct: false,
                explanation:
                    "«Aperto» e «chiuso» sono contrari, non sinonimi.",
            },
            {
                id: "C",
                text: "Spesso – frequentemente",
                correct: true,
                explanation:
                    "Nel significato temporale, «spesso» significa «frequentemente», cioè molte volte o con una certa frequenza. Sono quindi sinonimi.",
            },
            {
                id: "D",
                text: "Liscio – ruvido",
                correct: false,
                explanation:
                    "«Liscio» indica una superficie uniforme, mentre «ruvido» una superficie aspra. Sono termini di significato opposto.",
            },
        ],
    },

    {
        id: 26,
        area: "linguistica-logica",
        category: "logica-proposizionale",
        difficulty: 4,
        question:
            "\"Se e solo se viene finanziata la ricerca, la malattia sarà debellata\". In base alla precedente affermazione, è necessariamente vero che:",
        answers: [
            {
                id: "A",
                text: "gli Stati dovrebbero finanziare la ricerca",
                correct: false,
                explanation:
                    "La frase iniziale stabilisce una relazione logica, non formula una raccomandazione politica su ciò che gli Stati dovrebbero fare.",
            },
            {
                id: "B",
                text: "per debellare la malattia, occorre un finanziamento ingente",
                correct: false,
                explanation:
                    "La premessa parla della presenza di un finanziamento, ma non specifica che debba essere «ingente». Questo dettaglio viene aggiunto senza giustificazione.",
            },
            {
                id: "C",
                text: "anche con un finanziamento cospicuo, la malattia potrebbe non essere debellata",
                correct: false,
                explanation:
                    "L'espressione «se e solo se» stabilisce una condizione necessaria e sufficiente: secondo la premessa, finanziamento della ricerca e debellamento della malattia sono collegati in entrambe le direzioni.",
            },
            {
                id: "D",
                text: "se la malattia sarà debellata significa che è stata finanziata la ricerca",
                correct: true,
                explanation:
                    "«Se e solo se» indica una doppia implicazione. Quindi, se la malattia viene debellata, deve essere vero anche che la ricerca è stata finanziata.",
            },
        ],
    },

    {
        id: 27,
        area: "linguistica-logica",
        category: "logica-ordinamenti",
        difficulty: 1,
        question:
            "Se Paolo è più vecchio di Gianni e Anna è più vecchia di Paolo, chi tra loro è più vecchio?",
        answers: [
            {
                id: "A",
                text: "Anna",
                correct: true,
                explanation:
                    "Paolo è più vecchio di Gianni e Anna è più vecchia di Paolo. L'ordine è quindi Anna > Paolo > Gianni: Anna è la più vecchia.",
            },
            {
                id: "B",
                text: "Gianni",
                correct: false,
                explanation:
                    "Gianni è più giovane di Paolo e Paolo è a sua volta più giovane di Anna. Gianni non può quindi essere il più vecchio.",
            },
            {
                id: "C",
                text: "Paolo",
                correct: false,
                explanation:
                    "Paolo è più vecchio di Gianni, ma Anna è esplicitamente più vecchia di Paolo.",
            },
            {
                id: "D",
                text: "Paolo o Anna",
                correct: false,
                explanation:
                    "Le informazioni consentono di stabilire con certezza chi è il più vecchio. Anna supera Paolo, quindi non esiste ambiguità.",
            },
        ],
    },

    {
        id: 28,
        area: "linguistica-logica",
        category: "logica-deduttiva",
        difficulty: 2,
        question:
            "\"Tutti gli studenti di informatica sono intelligenti. Andrea è uno studente di informatica\". In base alle precedenti informazioni, quale delle seguenti affermazioni è certamente vera?",
        answers: [
            {
                id: "A",
                text: "Tutti coloro che usano un computer sono intelligenti",
                correct: false,
                explanation:
                    "Le premesse riguardano gli studenti di informatica, non tutte le persone che utilizzano un computer. Questa conclusione estende indebitamente l'informazione.",
            },
            {
                id: "B",
                text: "Andrea è intelligente",
                correct: true,
                explanation:
                    "Tutti gli studenti di informatica sono intelligenti e Andrea appartiene a questo insieme. Di conseguenza Andrea è necessariamente intelligente.",
            },
            {
                id: "C",
                text: "Andrea è uno studente zelante",
                correct: false,
                explanation:
                    "Non viene fornita alcuna informazione sulla diligenza o sullo zelo di Andrea. Non è quindi possibile dedurre questa caratteristica.",
            },
            {
                id: "D",
                text: "Tutte le persone intelligenti studiano informatica",
                correct: false,
                explanation:
                    "La premessa afferma che gli studenti di informatica sono intelligenti, non che tutte le persone intelligenti siano studenti di informatica. Sarebbe un'inversione logica non valida.",
            },
        ],
    },

    {
        id: 29,
        area: "linguistica-logica",
        category: "grammatica-classificazione",
        difficulty: 2,
        question:
            "Indicare l'alternativa da scartare.",
        answers: [
            {
                id: "A",
                text: "Sebbene",
                correct: false,
                explanation:
                    "«Sebbene» è una congiunzione subordinante concessiva. Appartiene quindi alla categoria delle parole che collegano proposizioni.",
            },
            {
                id: "B",
                text: "Infatti",
                correct: false,
                explanation:
                    "«Infatti» ha funzione avverbiale o connettiva e collega logicamente un'affermazione alla sua spiegazione.",
            },
            {
                id: "C",
                text: "Eppure",
                correct: false,
                explanation:
                    "«Eppure» svolge una funzione avversativa o concessiva nel collegamento tra parti del discorso.",
            },
            {
                id: "D",
                text: "Voi",
                correct: true,
                explanation:
                    "«Voi» è un pronome personale di seconda persona plurale. Le altre alternative svolgono invece funzioni connettive tra frasi o proposizioni.",
            },
        ],
    },

    {
        id: 30,
        area: "linguistica-logica",
        category: "logica-insiemi",
        difficulty: 3,
        question:
            "Isole italiane, Isole Tremiti, Isole Baleari. Individuare il diagramma che soddisfa la relazione insiemistica esistente tra i termini dati.",
        questionImage: {
            src: `${import.meta.env.BASE_URL}resources/questions/simulation15/domanda-30.png`,
            alt: "Sette diagrammi insiemistici numerati da 1 a 7 relativi a Isole italiane, Isole Tremiti e Isole Baleari",
        },
        answers: [
            {
                id: "A",
                text: "Diagramma 5",
                correct: false,
                explanation:
                    "Il Diagramma 5 rappresenta insiemi che si sovrappongono tra loro. Le Isole Baleari non appartengono alle isole italiane e non hanno quindi un'intersezione con esse.",
            },
            {
                id: "B",
                text: "Diagramma 1",
                correct: false,
                explanation:
                    "Il Diagramma 1 non rappresenta correttamente il rapporto di inclusione tra Isole Tremiti e Isole italiane. Le Tremiti devono essere completamente comprese nell'insieme delle isole italiane.",
            },
            {
                id: "C",
                text: "Diagramma 2",
                correct: true,
                explanation:
                    "Le Isole Tremiti sono isole italiane, quindi il loro insieme deve essere completamente contenuto nell'insieme «Isole italiane». Le Isole Baleari appartengono invece alla Spagna e devono essere rappresentate da un insieme separato: questa relazione è mostrata dal Diagramma 2.",
            },
            {
                id: "D",
                text: "Diagramma 3",
                correct: false,
                explanation:
                    "Il Diagramma 3 mostra relazioni di intersezione che non corrispondono alla situazione proposta. Le Tremiti devono essere un sottoinsieme delle isole italiane, mentre le Baleari devono rimanere esterne.",
            },
        ],
    },

    {
        id: 31,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages15.passage01,
        question:
            "Secondo quanto riportato nel Brano 1, il termine \"poliamore\":",
        answers: [
            {
                id: "A",
                text: "non fa riferimento a un unico tipo di relazione",
                correct: true,
                explanation:
                    "Il testo definisce «poliamore» come un termine ombrello che comprende numerosi stili relazionali affettivi e/o sessuali. Non identifica quindi una sola e specifica forma di relazione.",
            },
            {
                id: "B",
                text: "fa riferimento esclusivamente all’amore omosessuale",
                correct: false,
                explanation:
                    "Il brano specifica che le persone coinvolte possono essere «di qualsiasi genere e orientamento sessuale». Il poliamore non è quindi limitato alle relazioni omosessuali.",
            },
            {
                id: "C",
                text: "significa promiscuità",
                correct: false,
                explanation:
                    "Il testo precisa esplicitamente che nel poliamore «non ci si abbandona alla promiscuità». Consensualità e chiarezza sono invece presentate come caratteristiche fondamentali.",
            },
            {
                id: "D",
                text: "è utilizzato quando si vuole evitare l’impegno di una relazione",
                correct: false,
                explanation:
                    "Il brano afferma espressamente che il poliamore non nasce dalla volontà di evitare l'impegno e aggiunge che, paradossalmente, «ci si impegna di più».",
            },
        ],
    },

    {
        id: 32,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages15.passage01,
        question:
            "Secondo l’autore del Brano 1, il poliamore:",
        answers: [
            {
                id: "A",
                text: "è immorale",
                correct: false,
                explanation:
                    "L'autore non definisce il poliamore immorale. Al contrario ne evidenzia alcuni principi etici, come consensualità e chiarezza.",
            },
            {
                id: "B",
                text: "mostra che è possibile amare anche al di fuori del principio di esclusività",
                correct: true,
                explanation:
                    "Il testo sostiene che una persona può essere soddisfatta da una relazione e, allo stesso tempo, sviluppare altri legami. Il poliamore mette quindi in discussione l'idea che amore ed esclusività debbano necessariamente coincidere.",
            },
            {
                id: "C",
                text: "è meglio della monogamia",
                correct: false,
                explanation:
                    "L'autore dichiara esplicitamente di non voler sostenere che il poliamore sia migliore della monogamia.",
            },
            {
                id: "D",
                text: "insegna che nella vita si possono amare più persone, purché non tutte nello stesso momento",
                correct: false,
                explanation:
                    "Il punto centrale del poliamore descritto nel testo è proprio la possibilità di intrattenere più legami contemporaneamente, purché siano consensuali e trasparenti.",
            },
        ],
    },

    {
        id: 33,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages15.passage01,
        question:
            "Secondo quanto riportato nel Brano 1, la monogamia:",
        answers: [
            {
                id: "A",
                text: "è perfetta",
                correct: false,
                explanation:
                    "L'autore afferma esplicitamente che il modo tradizionale di concepire le relazioni «non è perfetto».",
            },
            {
                id: "B",
                text: "non prevede, al contrario del poliamore, consensualità e chiarezza",
                correct: false,
                explanation:
                    "Il testo presenta consensualità e chiarezza come elementi fondamentali del poliamore, ma non afferma che questi principi siano necessariamente assenti nella monogamia.",
            },
            {
                id: "C",
                text: "è praticata solo da chi riesce a non desiderare altro che il proprio partner, per sempre",
                correct: false,
                explanation:
                    "L'autore critica proprio l'idea che qualsiasi desiderio verso altre persone debba essere interpretato come prova di insoddisfazione o fallimento della relazione.",
            },
            {
                id: "D",
                text: "da qualche tempo sta attraversando una crisi: non è più l’unico modo concepito per instaurare una relazione d’amore",
                correct: true,
                explanation:
                    "All'inizio del brano si parla di crisi del matrimonio e dell'«amore unico». La nascita e diffusione del poliamore viene presentata come una delle forme che mettono in discussione l'esclusività della monogamia.",
            },
        ],
    },

    {
        id: 34,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages15.passage01,
        question:
            "Secondo quanto riportato nel Brano 1, nell’ambito del poliamore, consensualità e chiarezza significano rispettivamente:",
        answers: [
            {
                id: "A",
                text: "la promiscuità e la confessione, a posteriori, dei tradimenti",
                correct: false,
                explanation:
                    "Il brano esclude esplicitamente la promiscuità e pone l'accento sulla comunicazione preventiva e trasparente tra i partner.",
            },
            {
                id: "B",
                text: "il via libera, senza regole, che ci si dà tra componenti della relazione e la sincerità",
                correct: false,
                explanation:
                    "La consensualità non equivale a un via libera senza regole. Il testo specifica che esistono «i dovuti limiti e le regole» stabiliti insieme.",
            },
            {
                id: "C",
                text: "l’accordo tra i componenti della relazione e la sincerità",
                correct: true,
                explanation:
                    "La consensualità consiste nell'accordo con cui i componenti permettono l'estensione dei rapporti secondo regole condivise. La chiarezza consiste nella comunicazione della presenza degli altri legami, cioè nella trasparenza e sincerità.",
            },
            {
                id: "D",
                text: "l’accordo tra i componenti della relazione, ma non la comunicazione a chi non fa parte della relazione della presenza di altri legami",
                correct: false,
                explanation:
                    "Il testo afferma invece che la chiarezza consiste proprio nel comunicare ai partner la presenza di altri legami, evitando sotterfugi.",
            },
        ],
    },

    {
        id: 35,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages15.passage01,
        question:
            "Secondo quanto riportato nel Brano 1, l’idea di poliamore, risponde, tra le altre cose, al desiderio di:",
        answers: [
            {
                id: "A",
                text: "appagamento sessuale e affettivo",
                correct: true,
                explanation:
                    "Il testo afferma esplicitamente che nel poliamore si concedono maggiori possibilità a quella parte di sé che vuole sentirsi «appagata sessualmente e affettivamente».",
            },
            {
                id: "B",
                text: "non avere la responsabilità di essere l’unico oggetto dell’amore del partner",
                correct: false,
                explanation:
                    "Il brano non presenta questa motivazione come uno degli obiettivi del poliamore. Il punto indicato esplicitamente è l'appagamento affettivo e sessuale.",
            },
            {
                id: "C",
                text: "promiscuità",
                correct: false,
                explanation:
                    "Il testo chiarisce esplicitamente che poliamore e promiscuità non sono la stessa cosa.",
            },
            {
                id: "D",
                text: "imparare nuove tecniche sessuali",
                correct: false,
                explanation:
                    "Nel brano non viene fatto alcun riferimento all'apprendimento di tecniche sessuali.",
            },
        ],
    },

    {
        id: 36,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages15.passage02,
        question:
            "Secondo quanto riportato nel Brano 2, nella scelta del colore della camera da letto:",
        answers: [
            {
                id: "A",
                text: "è consigliato l'uso di colori forti come il rosso poiché stimolerebbe ormoni eccitanti, come l'adrenalina",
                correct: false,
                explanation:
                    "Il brano afferma esattamente il contrario: proprio perché il rosso stimola l'adrenalina, viene sconsigliato nella camera da letto.",
            },
            {
                id: "B",
                text: "è controindicato l'uso di colori forti come il rosso poiché stimolerebbe ormoni eccitanti, come l'adrenalina",
                correct: true,
                explanation:
                    "Il rosso viene descritto come un colore dinamico che scatena l'adrenalina. Per questo motivo il testo lo considera poco adatto alla camera da letto.",
            },
            {
                id: "C",
                text: "è controindicato l'uso di colori forti come il viola poiché stimolerebbe ormoni eccitanti, come l'adrenalina",
                correct: false,
                explanation:
                    "Il brano non attribuisce questa caratteristica al viola. Il colore associato esplicitamente alla produzione di adrenalina è il rosso.",
            },
            {
                id: "D",
                text: "è consigliato l'uso di colori tenui come il blu poiché stimolerebbe ormoni dinamici, come l'adrenalina",
                correct: false,
                explanation:
                    "Il blu viene associato a ormoni calmanti e antistress e alla facilitazione del sonno, non alla produzione di adrenalina.",
            },
        ],
    },

    {
        id: 37,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 1,
        passage: passages15.passage02,
        question:
            "Secondo quanto riportato nel Brano 2, i colori possono:",
        answers: [
            {
                id: "A",
                text: "influire sull'umore degli esseri umani, ma non condizionarne la salute",
                correct: false,
                explanation:
                    "Il testo afferma che i colori possono influenzare l'umore e addirittura incidere sulla salute. Non limita quindi l'effetto al solo umore.",
            },
            {
                id: "B",
                text: "influire sia sulla salute sia sull'umore degli esseri umani, ma solo se sono colori calmanti",
                correct: false,
                explanation:
                    "Il brano non limita gli effetti ai colori calmanti. Anche il rosso viene descritto come capace di produrre effetti fisiologici attraverso l'adrenalina.",
            },
            {
                id: "C",
                text: "influire sia sulla salute sia sull'umore degli esseri umani",
                correct: true,
                explanation:
                    "La prima frase del brano afferma direttamente che i colori possono influenzare il nostro umore e incidere sulla nostra salute.",
            },
            {
                id: "D",
                text: "influire sulla salute degli esseri umani, ma non condizionarne l'umore",
                correct: false,
                explanation:
                    "Anche questa alternativa contraddice il testo, che cita esplicitamente sia l'umore sia la salute.",
            },
        ],
    },

    {
        id: 38,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 1,
        passage: passages15.passage02,
        question:
            "Secondo quanto riportato nel Brano 2, i colori si differenziano in:",
        answers: [
            {
                id: "A",
                text: "primari e secondari, pastello e freddi",
                correct: false,
                explanation:
                    "Il testo cita i colori pastello soltanto come possibili tinte adatte alla camera da letto. Non li usa come categoria opposta ai colori freddi.",
            },
            {
                id: "B",
                text: "primari e secondari, calmanti e antistress",
                correct: false,
                explanation:
                    "«Calmanti» e «antistress» descrivono gli effetti attribuiti ad alcuni colori, non una classificazione generale indicata dal brano.",
            },
            {
                id: "C",
                text: "primari e secondari, caldi e tenui",
                correct: false,
                explanation:
                    "Il testo non contrappone colori caldi e tenui. La classificazione utilizzata è caldi e freddi.",
            },
            {
                id: "D",
                text: "primari e secondari, caldi e freddi",
                correct: true,
                explanation:
                    "Il brano afferma esplicitamente: «I colori si distinguono in primari e secondari, caldi e freddi».",
            },
        ],
    },

    {
        id: 39,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages15.passage02,
        question:
            "Secondo quanto riportato nel Brano 2, quando si guarda un colore:",
        answers: [
            {
                id: "A",
                text: "scaturisce un'energia che influisce solo sulla produzione di ormoni rilassanti",
                correct: false,
                explanation:
                    "Il testo cita sia ormoni calmanti sia l'adrenalina. L'effetto non è quindi limitato agli ormoni rilassanti.",
            },
            {
                id: "B",
                text: "scaturisce un'energia che incide sulla produzione di ormoni",
                correct: true,
                explanation:
                    "Il brano sostiene che quando un colore entra nei nostri occhi libera un'energia capace di influire direttamente sulla produzione di ormoni.",
            },
            {
                id: "C",
                text: "scaturisce un'energia che produce sempre adrenalina",
                correct: false,
                explanation:
                    "Solo il rosso viene associato nel testo all'adrenalina. Il blu, per esempio, viene collegato invece a effetti calmanti e antistress.",
            },
            {
                id: "D",
                text: "scaturisce un'energia che incide sulla produzione di ormoni, ma solo all'interno dell'ambiente domestico",
                correct: false,
                explanation:
                    "La casa è il contesto applicativo discusso nel brano, ma non viene affermato che l'effetto fisiologico dei colori esista soltanto in ambiente domestico.",
            },
        ],
    },

    {
        id: 40,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 1,
        passage: passages15.passage02,
        question:
            "Secondo quanto riportato nel Brano 2, quando si guarda il colore blu:",
        answers: [
            {
                id: "A",
                text: "vengono prodotti ormoni in grado di tranquillizzare e conciliare il sonno",
                correct: true,
                explanation:
                    "Il blu viene associato dal brano alla produzione di ormoni calmanti e antistress. Viene inoltre indicato come un colore capace di stimolare il sonno.",
            },
            {
                id: "B",
                text: "vengono prodotti ormoni in grado di stimolare le capacità intellettive e mentali",
                correct: false,
                explanation:
                    "Il brano non attribuisce al blu un effetto specifico sulle capacità intellettive. Parla invece di calma e sonno.",
            },
            {
                id: "C",
                text: "vengono prodotti ormoni in grado di stimolare la nostra forza vitale ed energica",
                correct: false,
                explanation:
                    "Gli effetti dinamici ed eccitanti vengono associati soprattutto al rosso, non al blu.",
            },
            {
                id: "D",
                text: "viene prodotto l'ormone dell'adrenalina",
                correct: false,
                explanation:
                    "Nel testo è il rosso a essere associato all'adrenalina. Il blu viene descritto come calmante e antistress.",
            },
        ],
    },
    {
        id: 41,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-prima-guerra-mondiale",
        difficulty: 2,
        question:
            "Nell'attentato di Sarajevo del 1914 rimase ucciso:",
        answers: [
            {
                id: "A",
                text: "Nicola II, zar di Russia",
                correct: false,
                explanation:
                    "Nicola II fu l'ultimo zar di Russia e non fu vittima dell'attentato di Sarajevo. Venne deposto durante la Rivoluzione russa del 1917 e ucciso nel 1918.",
            },
            {
                id: "B",
                text: "Francesco Ferdinando, erede al trono d'Austria-Ungheria",
                correct: true,
                explanation:
                    "L'arciduca Francesco Ferdinando, erede al trono austro-ungarico, venne assassinato a Sarajevo il 28 giugno 1914 insieme alla moglie Sofia. L'attentato contribuì a innescare la crisi che portò allo scoppio della Prima Guerra Mondiale.",
            },
            {
                id: "C",
                text: "Francesco Giuseppe, imperatore d'Austria-Ungheria",
                correct: false,
                explanation:
                    "Francesco Giuseppe era l'imperatore dell'Austria-Ungheria e zio di Francesco Ferdinando. Morì nel 1916 e non nell'attentato di Sarajevo.",
            },
            {
                id: "D",
                text: "Georges Clemenceau, capo del governo francese",
                correct: false,
                explanation:
                    "Georges Clemenceau fu un importante politico francese e guidò il governo francese durante la fase finale della Prima Guerra Mondiale. Non fu vittima dell'attentato di Sarajevo.",
            },
        ],
    },

    {
        id: 42,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 2,
        question:
            "Quale delle seguenti opere NON è stata scritta da Pirandello?",
        answers: [
            {
                id: "A",
                text: "Uno, nessuno e centomila",
                correct: false,
                explanation:
                    "\"Uno, nessuno e centomila\" è un romanzo di Luigi Pirandello. Il protagonista Vitangelo Moscarda affronta una profonda crisi della propria identità.",
            },
            {
                id: "B",
                text: "Sei personaggi in cerca di autore",
                correct: false,
                explanation:
                    "\"Sei personaggi in cerca d'autore\" è una delle opere teatrali più celebri di Pirandello e rappresenta un esempio fondamentale del suo teatro metateatrale.",
            },
            {
                id: "C",
                text: "Così è (se vi pare)",
                correct: false,
                explanation:
                    "\"Così è (se vi pare)\" è una commedia di Pirandello incentrata sul tema della relatività della verità e dell'impossibilità di conoscere con certezza la realtà.",
            },
            {
                id: "D",
                text: "I Promessi Sposi",
                correct: true,
                explanation:
                    "\"I Promessi Sposi\" non è un'opera di Pirandello, ma il celebre romanzo storico di Alessandro Manzoni, ambientato nella Lombardia del Seicento.",
            },
        ],
    },

    {
        id: 43,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-colonialismo",
        difficulty: 2,
        question:
            "Durante l’Ottocento una potenza europea occupò l’Algeria e la Tunisia. Quale?",
        answers: [
            {
                id: "A",
                text: "La Francia",
                correct: true,
                explanation:
                    "La Francia conquistò l'Algeria a partire dal 1830 e instaurò il protettorato sulla Tunisia nel 1881. Entrambi i territori entrarono così nella sfera coloniale francese.",
            },
            {
                id: "B",
                text: "La Germania",
                correct: false,
                explanation:
                    "La Germania possedette colonie soprattutto in Africa subsahariana e nel Pacifico, ma non occupò Algeria e Tunisia.",
            },
            {
                id: "C",
                text: "L’Inghilterra",
                correct: false,
                explanation:
                    "Il Regno Unito controllò numerosi territori, tra cui l'Egitto, ma Algeria e Tunisia furono principalmente sotto dominio francese.",
            },
            {
                id: "D",
                text: "L’Italia",
                correct: false,
                explanation:
                    "L'Italia sviluppò una propria politica coloniale in Africa, ma non conquistò Algeria e Tunisia. La Tunisia divenne un protettorato francese.",
            },
        ],
    },

    {
        id: 44,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "logica-matematica-divisibilita",
        difficulty: 2,
        question:
            "Un gioco ha le seguenti regole: se un numero è divisibile per 5 vale 4 punti; se è divisibile per 8 vale 3 punti. In base a tali regole, quale dei seguenti numeri vale di più?",
        answers: [
            {
                id: "A",
                text: "56",
                correct: false,
                explanation:
                    "56 è divisibile per 8, infatti 56 ÷ 8 = 7. Ottiene quindi 3 punti, meno dei 4 punti assegnati a un numero divisibile per 5.",
            },
            {
                id: "B",
                text: "48",
                correct: false,
                explanation:
                    "48 è divisibile per 8, perché 48 ÷ 8 = 6. Vale quindi 3 punti.",
            },
            {
                id: "C",
                text: "70",
                correct: true,
                explanation:
                    "70 è divisibile per 5, quindi secondo le regole del gioco vale 4 punti. Gli altri numeri proposti sono divisibili per 8 e valgono soltanto 3 punti.",
            },
            {
                id: "D",
                text: "64",
                correct: false,
                explanation:
                    "64 è divisibile per 8, dato che 64 ÷ 8 = 8. Ottiene quindi 3 punti e non supera il punteggio di 70.",
            },
        ],
    },

    {
        id: 45,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-repubblica-italiana",
        difficulty: 2,
        question:
            "Il 2 giugno 1946 gli italiani votarono in una consultazione popolare a suffragio universale:",
        answers: [
            {
                id: "A",
                text: "per eleggere i rappresentanti del Parlamento e il nuovo presidente della Repubblica",
                correct: false,
                explanation:
                    "Il 2 giugno 1946 non si votò per eleggere direttamente il Presidente della Repubblica. Furono invece eletti i membri dell'Assemblea costituente.",
            },
            {
                id: "B",
                text: "per eleggere l'Assemblea costituente e decidere la forma di Stato",
                correct: true,
                explanation:
                    "Il 2 giugno 1946 gli italiani votarono contemporaneamente per eleggere l'Assemblea costituente e nel referendum istituzionale tra monarchia e repubblica. Vinse la Repubblica.",
            },
            {
                id: "C",
                text: "per decidere se i Savoia dovessero andare in esilio ed eleggere un nuovo presidente della Repubblica",
                correct: false,
                explanation:
                    "La consultazione riguardava direttamente la scelta tra monarchia e repubblica, non l'elezione popolare di un Presidente della Repubblica.",
            },
            {
                id: "D",
                text: "per eleggere l'Assemblea costituente e il nuovo presidente del Consiglio",
                correct: false,
                explanation:
                    "L'Assemblea costituente venne effettivamente eletta, ma il Presidente del Consiglio non veniva scelto direttamente dagli elettori.",
            },
        ],
    },

    {
        id: 46,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-seconda-guerra-mondiale",
        difficulty: 1,
        question:
            "Dove sbarcarono in Italia, il 10 luglio 1943, le truppe Alleate?",
        answers: [
            {
                id: "A",
                text: "In Calabria",
                correct: false,
                explanation:
                    "Lo sbarco alleato in Calabria avvenne successivamente, nel settembre 1943. Il grande sbarco del 10 luglio interessò un'altra regione.",
            },
            {
                id: "B",
                text: "In Sardegna",
                correct: false,
                explanation:
                    "La Sardegna non fu il luogo dell'operazione alleata iniziata il 10 luglio 1943.",
            },
            {
                id: "C",
                text: "In Puglia",
                correct: false,
                explanation:
                    "La Puglia ebbe un ruolo importante nelle fasi successive della guerra, ma lo sbarco del 10 luglio 1943 avvenne in Sicilia.",
            },
            {
                id: "D",
                text: "In Sicilia",
                correct: true,
                explanation:
                    "Il 10 luglio 1943 iniziò lo sbarco alleato in Sicilia, noto come Operazione Husky. L'operazione contribuì alla crisi del regime fascista e alla successiva caduta di Mussolini.",
            },
        ],
    },

    {
        id: 47,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-unione-sovietica",
        difficulty: 1,
        question:
            "Chi fu il successore di Lenin alla guida dell'URSS?",
        answers: [
            {
                id: "A",
                text: "Trotzkij",
                correct: false,
                explanation:
                    "Lev Trockij fu uno dei protagonisti della Rivoluzione russa e un importante dirigente bolscevico, ma venne progressivamente sconfitto nella lotta politica contro Stalin.",
            },
            {
                id: "B",
                text: "Stalin",
                correct: true,
                explanation:
                    "Dopo la morte di Lenin nel 1924, Stalin riuscì progressivamente a consolidare il proprio potere e divenne il principale leader dell'Unione Sovietica.",
            },
            {
                id: "C",
                text: "Kruscev",
                correct: false,
                explanation:
                    "Nikita Kruscev divenne il principale dirigente sovietico dopo la morte di Stalin nel 1953, quindi molto più tardi.",
            },
            {
                id: "D",
                text: "Breznev",
                correct: false,
                explanation:
                    "Leonid Brežnev guidò l'URSS a partire dagli anni Sessanta. Non fu il successore immediato di Lenin.",
            },
        ],
    },

    {
        id: 48,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-shoah",
        difficulty: 2,
        question:
            "Quale era l'obiettivo della cosiddetta \"Soluzione finale\", messa in atto dalla Germania nazista durante la seconda guerra mondiale?",
        answers: [
            {
                id: "A",
                text: "La deportazione di tutti gli ebrei europei in Palestina",
                correct: false,
                explanation:
                    "La politica nazista non aveva come obiettivo finale il trasferimento degli ebrei in Palestina. La cosiddetta Soluzione finale indicava un progetto di sterminio sistematico.",
            },
            {
                id: "B",
                text: "La rapida fine del conflitto mediante la strategia della \"guerra lampo\"",
                correct: false,
                explanation:
                    "La guerra lampo, o Blitzkrieg, era una strategia militare basata su operazioni rapide e coordinate. Non coincide con la Soluzione finale.",
            },
            {
                id: "C",
                text: "Lo sterminio di tutti gli ebrei d'Europa",
                correct: true,
                explanation:
                    "Con l'espressione «Soluzione finale» il regime nazista indicò il progetto di persecuzione e sterminio sistematico della popolazione ebraica europea durante la Shoah.",
            },
            {
                id: "D",
                text: "L'internamento degli ebrei europei in campi di lavoro, allo scopo di favorire la produzione bellica tedesca",
                correct: false,
                explanation:
                    "Molti deportati furono effettivamente sottoposti al lavoro forzato, ma la Soluzione finale aveva come obiettivo ultimo lo sterminio della popolazione ebraica europea.",
            },
        ],
    },

    {
        id: 49,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-manzoni",
        difficulty: 1,
        question:
            "Quale delle seguenti opere è stata scritta da Manzoni?",
        answers: [
            {
                id: "A",
                text: "Adelchi",
                correct: true,
                explanation:
                    "\"Adelchi\" è una tragedia di Alessandro Manzoni pubblicata nel 1822. L'opera è ambientata nell'VIII secolo durante la guerra tra Longobardi e Franchi.",
            },
            {
                id: "B",
                text: "Aminta",
                correct: false,
                explanation:
                    "\"Aminta\" è una favola pastorale di Torquato Tasso, non di Alessandro Manzoni.",
            },
            {
                id: "C",
                text: "Orlando furioso",
                correct: false,
                explanation:
                    "\"Orlando furioso\" è il grande poema cavalleresco di Ludovico Ariosto.",
            },
            {
                id: "D",
                text: "Ultime lettere di Jacopo Ortis",
                correct: false,
                explanation:
                    "\"Ultime lettere di Jacopo Ortis\" è un romanzo epistolare di Ugo Foscolo.",
            },
        ],
    },

    {
        id: 50,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-capitali",
        difficulty: 1,
        question:
            "Quale delle seguenti città si trova in Bulgaria?",
        answers: [
            {
                id: "A",
                text: "Varsavia",
                correct: false,
                explanation:
                    "Varsavia è la capitale della Polonia e si trova nell'Europa centro-orientale.",
            },
            {
                id: "B",
                text: "Praga",
                correct: false,
                explanation:
                    "Praga è la capitale della Repubblica Ceca, oggi Cechia.",
            },
            {
                id: "C",
                text: "Belgrado",
                correct: false,
                explanation:
                    "Belgrado è la capitale della Serbia, non della Bulgaria.",
            },
            {
                id: "D",
                text: "Sofia",
                correct: true,
                explanation:
                    "Sofia è la capitale e la principale città della Bulgaria. Si trova nella parte occidentale del Paese.",
            },
        ],
    },

    {
        id: 51,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-italiana",
        difficulty: 1,
        question:
            "In quale delle seguenti Regioni italiane si trova l’area geografica del Chianti?",
        answers: [
            {
                id: "A",
                text: "Abruzzo",
                correct: false,
                explanation:
                    "L'Abruzzo si trova nell'Italia centro-meridionale sul versante adriatico. Il Chianti appartiene invece all'Italia centrale tirrenica.",
            },
            {
                id: "B",
                text: "Toscana",
                correct: true,
                explanation:
                    "Il Chianti è una celebre area geografica della Toscana, situata principalmente tra Firenze e Siena e nota soprattutto per la produzione vinicola.",
            },
            {
                id: "C",
                text: "Liguria",
                correct: false,
                explanation:
                    "La Liguria si affaccia sul Mar Ligure e non comprende l'area geografica del Chianti.",
            },
            {
                id: "D",
                text: "Lazio",
                correct: false,
                explanation:
                    "Il Lazio confina con la Toscana, ma il Chianti appartiene alla regione toscana.",
            },
        ],
    },

    {
        id: 52,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-classica",
        difficulty: 1,
        question:
            "Quale tra i seguenti è un personaggio dell'\"Odissea\"?",
        answers: [
            {
                id: "A",
                text: "Orlando",
                correct: false,
                explanation:
                    "Orlando è un celebre paladino della tradizione cavalleresca medievale e rinascimentale, protagonista anche dell'\"Orlando furioso\".",
            },
            {
                id: "B",
                text: "Camilla",
                correct: false,
                explanation:
                    "Camilla è una guerriera presente nell'\"Eneide\" di Virgilio. Non è un personaggio dell'\"Odissea\".",
            },
            {
                id: "C",
                text: "Calipso",
                correct: true,
                explanation:
                    "Calipso è la ninfa che trattiene Ulisse sull'isola di Ogigia per diversi anni. È quindi uno dei personaggi dell'\"Odissea\" di Omero.",
            },
            {
                id: "D",
                text: "Perpetua",
                correct: false,
                explanation:
                    "Perpetua è la domestica di don Abbondio ne \"I Promessi Sposi\" di Alessandro Manzoni.",
            },
        ],
    },

    {
        id: 53,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-dante",
        difficulty: 1,
        question:
            "Chi sono gli amanti del V canto dell'\"Inferno\" della \"Divina Commedia\"?",
        answers: [
            {
                id: "A",
                text: "Giulietta e Romeo",
                correct: false,
                explanation:
                    "Romeo e Giulietta sono i protagonisti della celebre tragedia di William Shakespeare e non compaiono nel V canto dell'Inferno.",
            },
            {
                id: "B",
                text: "Francesco e Paola",
                correct: false,
                explanation:
                    "I nomi sono invertiti e modificati rispetto alla celebre coppia raccontata da Dante.",
            },
            {
                id: "C",
                text: "Casanova e Ludovica",
                correct: false,
                explanation:
                    "Questi personaggi non costituiscono la coppia di amanti protagonista del V canto dell'Inferno.",
            },
            {
                id: "D",
                text: "Paolo e Francesca",
                correct: true,
                explanation:
                    "Nel V canto dell'Inferno Dante incontra Paolo Malatesta e Francesca da Rimini tra i lussuriosi. Francesca racconta al poeta la loro tragica storia d'amore.",
            },
        ],
    },

    {
        id: 54,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-letteratura-dannunzio",
        difficulty: 2,
        question:
            "Quale scrittore italiano organizzò una spedizione per la liberazione di Fiume?",
        answers: [
            {
                id: "A",
                text: "Gabriele D’Annunzio",
                correct: true,
                explanation:
                    "Gabriele D'Annunzio guidò nel 1919 l'impresa di Fiume, occupando la città con un gruppo di legionari. L'esperienza durò fino alla fine del 1920.",
            },
            {
                id: "B",
                text: "Italo Svevo",
                correct: false,
                explanation:
                    "Italo Svevo fu uno scrittore triestino noto soprattutto per \"La coscienza di Zeno\". Non guidò l'impresa di Fiume.",
            },
            {
                id: "C",
                text: "Alberto Moravia",
                correct: false,
                explanation:
                    "Alberto Moravia appartiene a una generazione successiva ed è noto soprattutto per la narrativa del Novecento.",
            },
            {
                id: "D",
                text: "Alessandro Manzoni",
                correct: false,
                explanation:
                    "Manzoni morì nel 1873, molti anni prima dell'impresa di Fiume del 1919.",
            },
        ],
    },

    {
        id: 55,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-boccaccio",
        difficulty: 1,
        question:
            "Il \"Decameron\" di Boccaccio è:",
        answers: [
            {
                id: "A",
                text: "un poema in cento canti",
                correct: false,
                explanation:
                    "Il \"Decameron\" è scritto prevalentemente in prosa e non è un poema strutturato in cento canti.",
            },
            {
                id: "B",
                text: "una raccolta di cento novelle, inserite in una cornice narrativa",
                correct: true,
                explanation:
                    "Il \"Decameron\" contiene cento novelle raccontate da dieci giovani durante dieci giornate. Le novelle sono inserite in una cornice narrativa legata alla fuga da Firenze durante la peste.",
            },
            {
                id: "C",
                text: "una lunga autobiografia, inframmezzata da molte novelle",
                correct: false,
                explanation:
                    "L'opera non è un'autobiografia di Boccaccio. È una raccolta organizzata di racconti inseriti in una cornice narrativa.",
            },
            {
                id: "D",
                text: "una raccolta di novelle esclusivamente di tema amoroso",
                correct: false,
                explanation:
                    "L'amore è un tema importante, ma le novelle trattano anche fortuna, ingegno, beffe, religione, commercio e molti altri aspetti della società.",
            },
        ],
    },

    {
        id: 56,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-lingue",
        difficulty: 1,
        question:
            "Qual è la lingua ufficiale dell’Australia?",
        answers: [
            {
                id: "A",
                text: "Il francese",
                correct: false,
                explanation:
                    "Il francese non è la lingua indicata dal test per l'Australia. È invece lingua ufficiale o molto diffusa in diversi altri Paesi.",
            },
            {
                id: "B",
                text: "Il tedesco",
                correct: false,
                explanation:
                    "Il tedesco non è la lingua indicata per l'Australia nella prova.",
            },
            {
                id: "C",
                text: "L’inglese",
                correct: true,
                explanation:
                    "La risposta indicata dal test è l'inglese, lingua utilizzata nella vita pubblica, nelle istituzioni, nell'istruzione e nella comunicazione quotidiana australiana.",
            },
            {
                id: "D",
                text: "Lo spagnolo",
                correct: false,
                explanation:
                    "Lo spagnolo è parlato da alcune comunità, ma non è la risposta prevista dal quesito.",
            },
        ],
    },

    {
        id: 57,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-europea",
        difficulty: 1,
        question:
            "La Bosnia si trova:",
        answers: [
            {
                id: "A",
                text: "in Africa",
                correct: false,
                explanation:
                    "La Bosnia ed Erzegovina non si trova nel continente africano, ma nell'Europa sud-orientale.",
            },
            {
                id: "B",
                text: "in Australia",
                correct: false,
                explanation:
                    "La Bosnia ed Erzegovina è uno Stato europeo e non appartiene al continente australiano.",
            },
            {
                id: "C",
                text: "in America",
                correct: false,
                explanation:
                    "La Bosnia ed Erzegovina non si trova nel continente americano.",
            },
            {
                id: "D",
                text: "nella penisola Balcanica",
                correct: true,
                explanation:
                    "La Bosnia ed Erzegovina si trova nell'Europa sud-orientale e fa parte della regione geografica dei Balcani.",
            },
        ],
    },

    {
        id: 58,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-risorgimento",
        difficulty: 2,
        question:
            "A quale delle seguenti società segrete era iscritto Giuseppe Mazzini?",
        answers: [
            {
                id: "A",
                text: "Carboneria",
                correct: true,
                explanation:
                    "Giuseppe Mazzini aderì in gioventù alla Carboneria. Successivamente, giudicandone insufficienti metodi e organizzazione, fondò nel 1831 la Giovine Italia.",
            },
            {
                id: "B",
                text: "Maestri del re",
                correct: false,
                explanation:
                    "Questa denominazione non identifica la società segreta alla quale il test associa Giuseppe Mazzini.",
            },
            {
                id: "C",
                text: "Esercito di luce",
                correct: false,
                explanation:
                    "Non è la società segreta risorgimentale collegata a Mazzini nella domanda.",
            },
            {
                id: "D",
                text: "Massoneria",
                correct: false,
                explanation:
                    "La risposta prevista dal quesito è la Carboneria, organizzazione segreta diffusa durante il Risorgimento italiano.",
            },
        ],
    },

    {
        id: 59,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-cronologia",
        difficulty: 2,
        question:
            "Quale serie riporta nel corretto ordine cronologico, dalla più antica alla più recente, le seguenti opere letterarie?",
        answers: [
            {
                id: "A",
                text: "Lo Zibaldone, La Divina Commedia, Sei personaggi in cerca di autore",
                correct: false,
                explanation:
                    "\"La Divina Commedia\" è medievale e precede di molti secoli lo \"Zibaldone\" di Leopardi. L'ordine iniziale è quindi invertito.",
            },
            {
                id: "B",
                text: "La Divina Commedia, Lo Zibaldone, Sei personaggi in cerca di autore",
                correct: true,
                explanation:
                    "\"La Divina Commedia\" risale al Trecento; lo \"Zibaldone\" appartiene all'Ottocento leopardiano; \"Sei personaggi in cerca d'autore\" fu rappresentato nel 1921. Questo è quindi il corretto ordine cronologico.",
            },
            {
                id: "C",
                text: "La Divina Commedia, Sei personaggi in cerca di autore, Lo Zibaldone",
                correct: false,
                explanation:
                    "Lo \"Zibaldone\" è ottocentesco e precede \"Sei personaggi in cerca d'autore\", opera del Novecento.",
            },
            {
                id: "D",
                text: "Lo Zibaldone, Sei personaggi in cerca di autore, La Divina Commedia",
                correct: false,
                explanation:
                    "La \"Divina Commedia\" è la più antica delle tre opere e non può essere collocata alla fine della successione.",
            },
        ],
    },

    {
        id: 60,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-dell-arte",
        difficulty: 1,
        question:
            "Il \"Giudizio Universale\" di Michelangelo si trova:",
        answers: [
            {
                id: "A",
                text: "nella Galleria degli Uffizi, a Firenze",
                correct: false,
                explanation:
                    "Gli Uffizi conservano numerose opere fondamentali del Rinascimento, ma non il \"Giudizio Universale\" di Michelangelo.",
            },
            {
                id: "B",
                text: "nella Basilica di San Giovanni in Laterano, a Roma",
                correct: false,
                explanation:
                    "La Basilica di San Giovanni in Laterano non ospita il celebre affresco del \"Giudizio Universale\".",
            },
            {
                id: "C",
                text: "nella Cappella Sistina",
                correct: true,
                explanation:
                    "Il \"Giudizio Universale\" di Michelangelo è il grande affresco realizzato sulla parete dell'altare della Cappella Sistina, in Vaticano, nel XVI secolo.",
            },
            {
                id: "D",
                text: "all'interno della Basilica di San Paolo fuori le mura, a Roma",
                correct: false,
                explanation:
                    "La Basilica di San Paolo fuori le mura è uno dei principali edifici religiosi di Roma, ma non ospita il \"Giudizio Universale\" di Michelangelo.",
            },
        ],
    },
    {
        id: 61,
        area: "cultura-matematico-scientifica",
        category: "chimica-struttura-atomica",
        difficulty: 2,
        question:
            "Il massimo numero di elettroni contenuti negli orbitali di tipo p è",
        answers: [
            {
                id: "A",
                text: "4",
                correct: false,
                explanation:
                    "Un sottolivello p contiene tre orbitali distinti. Poiché ciascun orbitale può contenere al massimo due elettroni, il numero massimo complessivo non è 4.",
            },
            {
                id: "B",
                text: "2",
                correct: false,
                explanation:
                    "Due è il numero massimo di elettroni che possono occupare un singolo orbitale, secondo il principio di esclusione di Pauli. Il sottolivello p è però formato da tre orbitali.",
            },
            {
                id: "C",
                text: "6",
                correct: true,
                explanation:
                    "Il sottolivello p contiene tre orbitali e ciascun orbitale può ospitare al massimo due elettroni. Quindi 3 × 2 = 6 elettroni.",
            },
            {
                id: "D",
                text: "8",
                correct: false,
                explanation:
                    "Otto elettroni corrispondono alla capacità complessiva del secondo livello energetico considerando un orbitale s e tre orbitali p. I soli orbitali p possono contenere al massimo 6 elettroni.",
            },
        ],
    },

    {
        id: 62,
        area: "cultura-matematico-scientifica",
        category: "fisica-cinematica",
        difficulty: 1,
        question:
            "Un maratoneta percorre la distanza di 10 m in 10 s; qual è la sua velocità media?",
        answers: [
            {
                id: "A",
                text: "1 m/s",
                correct: true,
                explanation:
                    "La velocità media si calcola dividendo lo spazio percorso per il tempo impiegato: v = 10 m / 10 s = 1 m/s.",
            },
            {
                id: "B",
                text: "2 m/s",
                correct: false,
                explanation:
                    "A 2 m/s in 10 secondi si percorrerebbero 20 metri. Il problema indica invece una distanza di 10 metri.",
            },
            {
                id: "C",
                text: "20 m/s",
                correct: false,
                explanation:
                    "20 m/s significherebbe percorrere 200 metri in 10 secondi, una distanza molto superiore a quella indicata.",
            },
            {
                id: "D",
                text: "10 m/s",
                correct: false,
                explanation:
                    "10 m/s corrisponderebbe a percorrere tutti i 10 metri in un solo secondo. Poiché il tempo è di 10 secondi, la velocità è 1 m/s.",
            },
        ],
    },

    {
        id: 63,
        area: "cultura-matematico-scientifica",
        category: "biologia-ecologia",
        difficulty: 2,
        question:
            "La macchia mediterranea è:",
        answers: [
            {
                id: "A",
                text: "una popolazione",
                correct: false,
                explanation:
                    "In ecologia una popolazione è un insieme di individui della stessa specie che vivono in una determinata area. La macchia mediterranea comprende invece molte specie vegetali e animali.",
            },
            {
                id: "B",
                text: "una zona di mare inquinato",
                correct: false,
                explanation:
                    "Il termine «macchia mediterranea» non indica una macchia presente nel mare. È una particolare formazione vegetale caratteristica delle regioni a clima mediterraneo.",
            },
            {
                id: "C",
                text: "un insieme di animali",
                correct: false,
                explanation:
                    "La macchia mediterranea non è costituita soltanto da animali. È caratterizzata soprattutto da una tipica vegetazione di arbusti e piante sempreverdi.",
            },
            {
                id: "D",
                text: "un bioma",
                correct: true,
                explanation:
                    "Nel contesto del quesito, la macchia mediterranea è classificata come un bioma caratteristico delle regioni con clima mediterraneo, contraddistinto da estati calde e secche e inverni miti e piovosi.",
            },
        ],
    },

    {
        id: 64,
        area: "cultura-matematico-scientifica",
        category: "scienze-energia",
        difficulty: 2,
        question:
            "Tra le fonti di energia rinnovabili si annoverano:",
        answers: [
            {
                id: "A",
                text: "il carbone, il gas naturale, il petrolio",
                correct: false,
                explanation:
                    "Carbone, gas naturale e petrolio sono combustibili fossili. Sono risorse non rinnovabili perché si formano in tempi geologici estremamente lunghi.",
            },
            {
                id: "B",
                text: "le radiazioni solari, l'energia eolica, l'energia geotermica",
                correct: true,
                explanation:
                    "Energia solare, eolica e geotermica provengono da fonti che si rigenerano naturalmente e sono quindi considerate fonti energetiche rinnovabili.",
            },
            {
                id: "C",
                text: "la fusione nucleare, l'energia della biomassa, il petrolio",
                correct: false,
                explanation:
                    "La biomassa è una fonte rinnovabile, ma il petrolio è un combustibile fossile non rinnovabile. L'alternativa non contiene quindi esclusivamente fonti rinnovabili.",
            },
            {
                id: "D",
                text: "l'energia geotermica, il gas naturale e le radiazioni solari",
                correct: false,
                explanation:
                    "Geotermico e solare sono rinnovabili, ma il gas naturale è un combustibile fossile e quindi non rinnovabile.",
            },
        ],
    },

    {
        id: 65,
        area: "cultura-matematico-scientifica",
        category: "matematica-equazioni",
        difficulty: 2,
        question:
            "L’equazione 2(x + 3) = 6x + 2 ammette come soluzione:",
        answers: [
            {
                id: "A",
                text: "x = –6",
                correct: false,
                explanation:
                    "Sostituendo x = -6 si ottiene a sinistra 2(-3) = -6 e a destra -36 + 2 = -34. I due membri non sono uguali.",
            },
            {
                id: "B",
                text: "x = –2",
                correct: false,
                explanation:
                    "Con x = -2 il primo membro vale 2, mentre il secondo vale -10. L'equazione non è soddisfatta.",
            },
            {
                id: "C",
                text: "x = 1",
                correct: true,
                explanation:
                    "Sviluppando si ottiene 2x + 6 = 6x + 2. Portando i termini: 6 - 2 = 6x - 2x, quindi 4 = 4x e x = 1.",
            },
            {
                id: "D",
                text: "x = –1",
                correct: false,
                explanation:
                    "Con x = -1 il primo membro vale 4, mentre il secondo vale -4. Non si tratta quindi della soluzione.",
            },
        ],
    },

    {
        id: 66,
        area: "cultura-matematico-scientifica",
        category: "biologia-corpo-umano",
        difficulty: 1,
        question:
            "Dove si formano i globuli rossi?",
        answers: [
            {
                id: "A",
                text: "Nel midollo osseo",
                correct: true,
                explanation:
                    "I globuli rossi, o eritrociti, vengono prodotti attraverso il processo di eritropoiesi principalmente nel midollo osseo rosso.",
            },
            {
                id: "B",
                text: "Nel pancreas",
                correct: false,
                explanation:
                    "Il pancreas svolge funzioni digestive ed endocrine, producendo enzimi e ormoni come insulina e glucagone. Non è la sede di produzione dei globuli rossi.",
            },
            {
                id: "C",
                text: "Nei polmoni",
                correct: false,
                explanation:
                    "I polmoni consentono gli scambi di ossigeno e anidride carbonica. I globuli rossi trasportano questi gas, ma non vengono prodotti nei polmoni.",
            },
            {
                id: "D",
                text: "Nei muscoli scheletrici",
                correct: false,
                explanation:
                    "I muscoli scheletrici sono costituiti soprattutto da fibre muscolari responsabili del movimento. Non producono i globuli rossi.",
            },
        ],
    },

    {
        id: 67,
        area: "cultura-matematico-scientifica",
        category: "fisica-struttura-atomica",
        difficulty: 1,
        question:
            "Il neutrone:",
        answers: [
            {
                id: "A",
                text: "ha carica positiva",
                correct: false,
                explanation:
                    "La particella subatomica con carica positiva è il protone. Il neutrone è elettricamente neutro.",
            },
            {
                id: "B",
                text: "è una particella priva di massa",
                correct: false,
                explanation:
                    "Il neutrone possiede una massa leggermente superiore a quella del protone. Non è quindi una particella priva di massa.",
            },
            {
                id: "C",
                text: "nessuna delle altre alternative è corretta",
                correct: false,
                explanation:
                    "Tra le alternative è presente una descrizione corretta: il neutrone ha carica elettrica nulla.",
            },
            {
                id: "D",
                text: "ha carica nulla",
                correct: true,
                explanation:
                    "Il neutrone è una particella subatomica presente nel nucleo atomico e non possiede carica elettrica netta. Da questa caratteristica deriva il suo nome.",
            },
        ],
    },

    {
        id: 68,
        area: "cultura-matematico-scientifica",
        category: "storia-della-scienza",
        difficulty: 2,
        question:
            "Disporre in ordine cronologico i seguenti scienziati: 1) Archimede; 2) Newton; 3) Volta.",
        answers: [
            {
                id: "A",
                text: "3; 2; 1",
                correct: false,
                explanation:
                    "Alessandro Volta appartiene tra Settecento e Ottocento ed è molto successivo sia ad Archimede sia a Newton.",
            },
            {
                id: "B",
                text: "1; 2; 3",
                correct: true,
                explanation:
                    "Archimede visse nel III secolo a.C.; Isaac Newton tra XVII e XVIII secolo; Alessandro Volta tra XVIII e XIX secolo. L'ordine corretto è quindi 1, 2, 3.",
            },
            {
                id: "C",
                text: "2; 1; 3",
                correct: false,
                explanation:
                    "Newton visse circa duemila anni dopo Archimede. Non può quindi precederlo cronologicamente.",
            },
            {
                id: "D",
                text: "3; 1; 2",
                correct: false,
                explanation:
                    "Volta è il più recente dei tre scienziati e non può essere collocato all'inizio della sequenza.",
            },
        ],
    },

    {
        id: 69,
        area: "cultura-matematico-scientifica",
        category: "astronomia-moti-terrestri",
        difficulty: 2,
        question:
            "L'anno solare è l'intervallo che intercorre tra:",
        answers: [
            {
                id: "A",
                text: "un equinozio e l'altro o tra un solstizio e l'altro",
                correct: false,
                explanation:
                    "Questa alternativa non è quella indicata dal test. Gli intervalli tra specifici equinozi o solstizi sono collegati al ciclo stagionale, ma la definizione richiesta dalla prova è formulata in riferimento all'orbita terrestre.",
            },
            {
                id: "B",
                text: "due successivi passaggi della Luna per uno stesso punto della sua orbita intorno alla Terra",
                correct: false,
                explanation:
                    "Questa definizione riguarda un periodo orbitale della Luna attorno alla Terra, non l'anno terrestre.",
            },
            {
                id: "C",
                text: "due successivi passaggi della Terra per uno stesso punto della sua orbita intorno al Sole",
                correct: true,
                explanation:
                    "Nel quesito l'anno solare viene definito come il tempo necessario affinché la Terra completi un'intera orbita intorno al Sole e ritorni allo stesso punto del percorso.",
            },
            {
                id: "D",
                text: "due successivi passaggi del Sole per uno stesso punto della sua orbita intorno alla Terra",
                correct: false,
                explanation:
                    "Nel modello astronomico moderno è la Terra a orbitare intorno al Sole, non il Sole intorno alla Terra.",
            },
        ],
    },

    {
        id: 70,
        area: "cultura-matematico-scientifica",
        category: "biologia-genetica",
        difficulty: 1,
        question:
            "I primi esperimenti di genetica sui caratteri dominanti e recessivi delle piante furono condotti da:",
        answers: [
            {
                id: "A",
                text: "Gregor Mendel",
                correct: true,
                explanation:
                    "Gregor Mendel studiò l'ereditarietà attraverso esperimenti sulle piante di pisello. Le sue ricerche permisero di formulare le leggi fondamentali dell'ereditarietà dei caratteri.",
            },
            {
                id: "B",
                text: "Renato Cartesio",
                correct: false,
                explanation:
                    "Renato Cartesio, o René Descartes, fu un filosofo e matematico del Seicento. Non condusse gli esperimenti classici sulla trasmissione dei caratteri ereditari.",
            },
            {
                id: "C",
                text: "Albert Einstein",
                correct: false,
                explanation:
                    "Albert Einstein è legato soprattutto alla fisica teorica e alla teoria della relatività, non alla fondazione della genetica.",
            },
            {
                id: "D",
                text: "Carlo Linneo",
                correct: false,
                explanation:
                    "Carlo Linneo è noto soprattutto per la classificazione degli organismi e la nomenclatura binomiale. Gli esperimenti sui caratteri dominanti e recessivi furono condotti da Mendel.",
            },
        ],
    },

    {
        id: 71,
        area: "cultura-matematico-scientifica",
        category: "matematica-potenze",
        difficulty: 2,
        question:
            "L'espressione 3⁹ • 3³ è uguale a:",
        answers: [
            {
                id: "A",
                text: "3³",
                correct: false,
                explanation:
                    "Quando si moltiplicano potenze con la stessa base, gli esponenti si sommano. Non si mantiene quindi semplicemente l'esponente 3.",
            },
            {
                id: "B",
                text: "3²⁷",
                correct: false,
                explanation:
                    "Gli esponenti non devono essere moltiplicati tra loro. 9 × 3 = 27 non è la regola da applicare al prodotto di potenze con la stessa base.",
            },
            {
                id: "C",
                text: "27³",
                correct: false,
                explanation:
                    "27³ equivale a (3³)³ = 3⁹, quindi non rappresenta il prodotto 3⁹ × 3³.",
            },
            {
                id: "D",
                text: "3¹²",
                correct: true,
                explanation:
                    "Nel prodotto di potenze con la stessa base si sommano gli esponenti: 3⁹ × 3³ = 3⁹⁺³ = 3¹².",
            },
        ],
    },

    {
        id: 72,
        area: "cultura-matematico-scientifica",
        category: "matematica-frazioni",
        difficulty: 3,
        question:
            "5/8 : 12/8 x 12/9 =",
        answers: [
            {
                id: "A",
                text: "17/24",
                correct: false,
                explanation:
                    "17/24 non deriva dalla corretta applicazione delle operazioni tra frazioni. Nella divisione bisogna moltiplicare per il reciproco della seconda frazione.",
            },
            {
                id: "B",
                text: "5/9",
                correct: true,
                explanation:
                    "Si calcola 5/8 ÷ 12/8 × 12/9 = 5/8 × 8/12 × 12/9. Semplificando 8 e 12 si ottiene 5/9.",
            },
            {
                id: "C",
                text: "35/8",
                correct: false,
                explanation:
                    "35/8 è maggiore di 4 e non corrisponde al risultato delle operazioni indicate. La corretta semplificazione porta a 5/9.",
            },
            {
                id: "D",
                text: "5/7",
                correct: false,
                explanation:
                    "Non compare alcun fattore 7 nel calcolo da cui possa derivare questo denominatore. Il risultato corretto è 5/9.",
            },
        ],
    },

    {
        id: 73,
        area: "cultura-matematico-scientifica",
        category: "biologia-anatomia",
        difficulty: 1,
        question:
            "Che cos’è il femore?",
        answers: [
            {
                id: "A",
                text: "Un nervo",
                correct: false,
                explanation:
                    "Il femore non appartiene al sistema nervoso. È una struttura ossea dello scheletro.",
            },
            {
                id: "B",
                text: "Un muscolo",
                correct: false,
                explanation:
                    "Il femore non è un tessuto muscolare. È l'osso principale della coscia.",
            },
            {
                id: "C",
                text: "Un osso dell’arto inferiore",
                correct: true,
                explanation:
                    "Il femore è l'osso della coscia e appartiene all'arto inferiore. È inoltre l'osso più lungo e robusto del corpo umano.",
            },
            {
                id: "D",
                text: "Un’articolazione dell’arto inferiore",
                correct: false,
                explanation:
                    "Il femore partecipa alle articolazioni dell'anca e del ginocchio, ma è un osso e non un'articolazione.",
            },
        ],
    },

    {
        id: 74,
        area: "cultura-matematico-scientifica",
        category: "biologia-apparato-uditivo",
        difficulty: 2,
        question:
            "Nel corpo umano, quale tra le seguenti strutture fa parte dell'apparato uditivo?",
        answers: [
            {
                id: "A",
                text: "Le trombe di Eustachio",
                correct: true,
                explanation:
                    "Le trombe di Eustachio collegano l'orecchio medio con la rinofaringe e contribuiscono a equilibrare la pressione ai due lati del timpano.",
            },
            {
                id: "B",
                text: "L'esofago",
                correct: false,
                explanation:
                    "L'esofago appartiene all'apparato digerente e collega la faringe allo stomaco.",
            },
            {
                id: "C",
                text: "L'aorta",
                correct: false,
                explanation:
                    "L'aorta è la principale arteria del sistema circolatorio e trasporta il sangue dal cuore verso il resto dell'organismo.",
            },
            {
                id: "D",
                text: "Il pancreas",
                correct: false,
                explanation:
                    "Il pancreas appartiene agli apparati digerente ed endocrino. Non fa parte dell'apparato uditivo.",
            },
        ],
    },

    {
        id: 75,
        area: "cultura-matematico-scientifica",
        category: "chimica-passaggi-di-stato",
        difficulty: 1,
        question:
            "Quale dei seguenti processi è un cambiamento di stato?",
        answers: [
            {
                id: "A",
                text: "Combustione",
                correct: false,
                explanation:
                    "La combustione è una reazione chimica in cui una sostanza reagisce generalmente con l'ossigeno. Non è un semplice cambiamento di stato fisico.",
            },
            {
                id: "B",
                text: "Elettrolisi",
                correct: false,
                explanation:
                    "L'elettrolisi è un processo chimico provocato dal passaggio di corrente elettrica che può decomporre una sostanza.",
            },
            {
                id: "C",
                text: "Salificazione",
                correct: false,
                explanation:
                    "La salificazione è una reazione chimica che porta alla formazione di un sale. Non rappresenta un cambiamento di stato.",
            },
            {
                id: "D",
                text: "Evaporazione",
                correct: true,
                explanation:
                    "L'evaporazione è il passaggio fisico dallo stato liquido allo stato aeriforme. La composizione chimica della sostanza non cambia.",
            },
        ],
    },

    {
        id: 76,
        area: "cultura-matematico-scientifica",
        category: "matematica-frazioni",
        difficulty: 1,
        question:
            "Quale delle seguenti frazioni è minore di 1?",
        answers: [
            {
                id: "A",
                text: "8/3",
                correct: false,
                explanation:
                    "8/3 è maggiore di 1 perché il numeratore è maggiore del denominatore. Vale infatti circa 2,67.",
            },
            {
                id: "B",
                text: "3/4",
                correct: true,
                explanation:
                    "Una frazione positiva è minore di 1 quando il numeratore è minore del denominatore. 3/4 = 0,75.",
            },
            {
                id: "C",
                text: "7/5",
                correct: false,
                explanation:
                    "7/5 è maggiore di 1 perché 7 è maggiore di 5. Il suo valore è 1,4.",
            },
            {
                id: "D",
                text: "3/2",
                correct: false,
                explanation:
                    "3/2 equivale a 1,5 e quindi è maggiore di 1.",
            },
        ],
    },

    {
        id: 77,
        area: "cultura-matematico-scientifica",
        category: "fisica-cinematica",
        difficulty: 2,
        question:
            "Il moto di un punto la cui velocità aumenta continuamente, con legge costante, in uguali intervalli di tempo è definito:",
        answers: [
            {
                id: "A",
                text: "uniforme",
                correct: false,
                explanation:
                    "Nel moto uniforme la velocità rimane costante nel tempo. Qui invece viene specificato che la velocità aumenta.",
            },
            {
                id: "B",
                text: "armonico",
                correct: false,
                explanation:
                    "Il moto armonico è un moto oscillatorio periodico, come quello ideale di una massa collegata a una molla. Non corrisponde alla definizione data.",
            },
            {
                id: "C",
                text: "uniformemente accelerato",
                correct: true,
                explanation:
                    "Nel moto uniformemente accelerato la velocità varia della stessa quantità in intervalli di tempo uguali. Ciò significa che l'accelerazione è costante.",
            },
            {
                id: "D",
                text: "progressivo",
                correct: false,
                explanation:
                    "«Progressivo» non è il termine fisico specifico utilizzato per indicare un moto con accelerazione costante.",
            },
        ],
    },

    {
        id: 78,
        area: "cultura-matematico-scientifica",
        category: "fisica-termodinamica",
        difficulty: 1,
        question:
            "A che temperatura corrisponde lo zero assoluto?",
        answers: [
            {
                id: "A",
                text: "0 gradi Kelvin",
                correct: true,
                explanation:
                    "Lo zero assoluto corrisponde a 0 kelvin, cioè circa −273,15 °C. È il limite inferiore della scala termodinamica delle temperature.",
            },
            {
                id: "B",
                text: "0 gradi Réamur",
                correct: false,
                explanation:
                    "0 °Ré corrisponde al punto di congelamento dell'acqua nella scala Réaumur, non allo zero assoluto.",
            },
            {
                id: "C",
                text: "0 gradi Celsius",
                correct: false,
                explanation:
                    "0 °C è la temperatura di congelamento dell'acqua in condizioni standard, mentre lo zero assoluto è molto più basso.",
            },
            {
                id: "D",
                text: "0 gradi Fahrenheit",
                correct: false,
                explanation:
                    "0 °F corrisponde a circa −17,8 °C e non allo zero assoluto.",
            },
        ],
    },

    {
        id: 79,
        area: "cultura-matematico-scientifica",
        category: "biologia-riproduzione",
        difficulty: 1,
        question:
            "I gameti sono:",
        answers: [
            {
                id: "A",
                text: "cellule nervose e gliali",
                correct: false,
                explanation:
                    "Neuroni e cellule gliali appartengono al sistema nervoso. Non svolgono la funzione di cellule riproduttive.",
            },
            {
                id: "B",
                text: "recettori cutanei",
                correct: false,
                explanation:
                    "I recettori cutanei rilevano stimoli come pressione, temperatura e dolore. Non sono gameti.",
            },
            {
                id: "C",
                text: "cellule muscolari e satelliti",
                correct: false,
                explanation:
                    "Le cellule muscolari e le cellule satelliti sono coinvolte nella struttura e rigenerazione dei muscoli. Non partecipano direttamente alla riproduzione come gameti.",
            },
            {
                id: "D",
                text: "cellule uovo e spermatozoi",
                correct: true,
                explanation:
                    "I gameti sono le cellule sessuali coinvolte nella riproduzione: la cellula uovo è il gamete femminile e lo spermatozoo quello maschile.",
            },
        ],
    },

    {
        id: 80,
        area: "cultura-matematico-scientifica",
        category: "biologia-acidi-nucleici",
        difficulty: 2,
        question:
            "Una delle funzioni delle molecole dei nucleotidi nelle cellule è quella di rappresentare i monomeri costitutivi:",
        answers: [
            {
                id: "A",
                text: "delle proteine",
                correct: false,
                explanation:
                    "I monomeri fondamentali delle proteine sono gli amminoacidi. I nucleotidi appartengono a un'altra classe di macromolecole.",
            },
            {
                id: "B",
                text: "degli acidi nucleici",
                correct: true,
                explanation:
                    "I nucleotidi sono le unità fondamentali che formano gli acidi nucleici DNA e RNA. Ogni nucleotide comprende uno zucchero, un gruppo fosfato e una base azotata.",
            },
            {
                id: "C",
                text: "dei carboidrati",
                correct: false,
                explanation:
                    "I carboidrati complessi sono formati da unità zuccherine, come i monosaccaridi. Non sono polimeri di nucleotidi.",
            },
            {
                id: "D",
                text: "dei lipidi",
                correct: false,
                explanation:
                    "I lipidi non sono costituiti da nucleotidi. Molti lipidi comprendono componenti come acidi grassi e glicerolo.",
            },
        ],
    }
];

export default simulation15;