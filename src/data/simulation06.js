const passages = {
    passage01: `Alla fine del romanzo più famoso di Milan Kundera, L’insostenibile leggerezza dell’essere,
il protagonista Tomáš ammette di essere felice: Ma è una felicità paradossale, la sua.
Ottenuta non malgrado il suo scetticismo, ma grazie ad esso. Tomáš si sente felice nel
momento in cui perde il lavoro e tutto ciò che ha considerato come la propria missione.
Bisogna piantarla di pensare che l’ottimismo sia legato alla felicità e lo scetticismo
all’amarezza. Direi quasi che è vero il contrario. Lo scettico Milan Kundera se n’è andato
l’11 luglio a Parigi (dove era emigrato nel 1975), all’età di 94 anni. Ma la sua voce si era
spenta da tempo. Era del resto sempre stato un uomo molto riservato. In un’intervista a
Philip Roth, aveva confessato: Quando ero un ragazzino, sognavo un miracoloso
unguento che mi avrebbe reso invisibile. Poi sono diventato adulto, ho iniziato a scrivere,
e ho voluto avere successo. Ora che sono conosciuto vorrei avere un unguento che mi
renda invisibile. È stato un grande scrittore, uno dei più grandi della seconda metà del
Novecento. Romanzi come Lo scherzo (1967), Gli amori ridicoli (1972: il libro che
preferiva perché legato al periodo più felice della mia vita), La vita è altrove (1973), e
L’insostenibile leggerezza dell’essere (1984) e i racconti de Il libro del riso e dell’oblio
(1978), tutti pubblicati in italiano da Adelphi, pur essendo cambiato profondamente il
contesto storico nei quali sono nati, rimangono attuali per la bellezza della scrittura, la
costruzione dei personaggi e la profondità delle riflessioni filosofiche. Tutti fanno i conti
con la morte della cultura nella nostra epoca. Kundera si colloca nella grande tradizione
del romanzo dell’Europa Centrale. I suoi riferimenti costanti sono stati Kafka, Musil, Broch,
Gombrowicz: romanzieri meravigliosamente diffidenti verso l’illusione del progresso,
diffidenti del kitsch della speranza. Il loro dolore per il tramonto dell’Occidente, non un
dolore sentimentale. È un dolore ironico. Spesso Kundera ribadiva la sua convinzione che
al giorno d’oggi non ci sia più spazio per gli scherzi: si prende tutto sul serio. Lo scherzo è
il primo, bellissimo, romanzo di Kundera. I successivi sono sotto molti aspetti, com’è
naturale, delle variazioni di questo tema. Ma quell’allegria, che è insita nella natura della
burla, anche se ha conseguenze negative, è venuta a mancare. Gli scherzi non sono una
forma di liberazione, sostiene giustamente Kundera. Ma sono una specie di boccata
d’aria. […] Kundera ha portato l’Europa Centrale all’attenzione dei lettori di quella
dell’Ovest, e l’ha fatto con intuizioni universalmente riconosciute nel loro fascino.`,

    passage02: `Vittorio si risvegliò alle cinque del mattino. Telefonò in Turchia. Quindi si vestì, fece
colazione e uscì di casa. Salì in macchina. Partì con il consueto giro dei cantieri. Mentre
era alla guida, continuava a telefonare. Sentì Torino e Cagliari. Si fece dare ragguagli dai
soci spagnoli. Cercava di recuperare sui fronti lasciati scoperti nelle ultime settimane. Se
pensava a quello che c’era da fare prima di agosto si sentiva male. Si sentiva
discretamente bene. Infragilito, ma con addosso un nuovo tipo di serenità. La forza che
persino la vecchiaia possedeva. Dopo aver finito coi cantieri, poco prima di mezzogiorno,
guidò fino agli uffici dell’amministrazione. C’era da fare parecchio anche lì. E poi, a ora di
pranzo, sarebbe arrivato Michele. Suo figlio veniva a trovarlo sul lavoro. Lo portò in un
ristorante a pochi passi dagli uffici. Michele ordinò primo e secondo. Bistecca al sangue.
Vittorio si limitò a un’insalata e a un piattino di verdure grigliate. Lo stomaco dava ancora
dei fastidi. Ma era un piacere veder mangiare suo figlio. Sentirlo parlare, entrare nel suo
mondo. Una settimana. A un certo punto, non sapeva come, Vittorio era riuscito a
strappargliela. D’accordo papà, disse Michele tornando a infilzare ciò che restava della
bistecca. Sarebbe rimasto a Bari fino a metà luglio. Bene. Molto bene. Magari lo aveva
deciso già da qualche giorno ed era venuto lì per fargli credere di essere stato lui, il
vecchio padre, tanto abile da convincerlo a restare. Presero la macedonia. Michele ordinò
anche il caffè. Il vecchio pagò il conto.`,

    passage03: `Natali Shaheen è una calciatrice e attivista palestinese, che ora vive e gioca a Sassari; la
sua è una storia di tenacia, coraggio, lotta contro i pregiudizi. Gary Lineker è un ex
calciatore inglese, ora presentatore televisivo di fama mondiale; una persona con grande
visibilità, che ha in più occasioni utilizzato per lanciare messaggi di empatia e solidarietà
nei confronti dei rifugiati. Due storie molto lontane che si sono incrociate il 24 maggio,
presso la Federazione nazionale della stampa italiana, in occasione della cerimonia di
premiazione dell’edizione 2023 del premio Sport e diritti umani. La giuria del premio,
promosso da Amnesty International Italia e Sport for Society, quest’anno ha deciso di
affiancare al consueto riconoscimento un premio speciale internazionale. Natali Shaneen,
vincitrice della quinta edizione del premio, si è innamorata del calcio da bambina, a
Gerico, e per percorrere la sua strada ha sfidato difficoltà enormi (spostamenti proibitivi,
posti di blocco, assenza di squadre femminili, una diffusa ostilità). Ora gioca in Italia e con
la stessa determinazione porta avanti il suo impegno per i diritti umani attraverso lo sport,
oltre che per la promozione dello sport stesso come diritto, accessibile a tutte le persone.
Racconta la sua esperienza e come il calcio femminile abbia iniziato a scalfire la mentalità
comune, in un contesto in cui le donne non fanno sport e restano a casa. C’è ancora tanto
da fare, ma Shaheen trasmette l’energia di chi sa di aver trovato uno strumento, una
chiave, per continuare a promuovere il diritto di inseguire i propri sogni e la libertà.`,
};

const simulation06 = [
    {
        id: 1,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages.passage01,
        question:
            "Dal testo si può dedurre che:",
        answers: [
            {
                id: "A",
                text: "\"L’insostenibile leggerezza dell’essere\" era il romanzo prediletto dal suo autore",
                correct: false,
                explanation:
                    "Il testo definisce L’insostenibile leggerezza dell’essere il romanzo più famoso di Kundera, ma non il suo preferito. Viene invece indicato Gli amori ridicoli come il libro che Kundera preferiva, perché legato al periodo più felice della sua vita.",
            },
            {
                id: "B",
                text: "Philip Roth sognava di essere infelice",
                correct: false,
                explanation:
                    "Philip Roth viene citato soltanto come l'intervistatore al quale Kundera raccontò il proprio desiderio di diventare invisibile. Il testo non afferma che Roth desiderasse essere infelice.",
            },
            {
                id: "C",
                text: "Tomáš si dichiara infelice",
                correct: false,
                explanation:
                    "Il brano afferma esplicitamente il contrario: Tomáš «ammette di essere felice». La particolarità consiste nel fatto che la sua felicità nasce in circostanze apparentemente negative.",
            },
            {
                id: "D",
                text: "Tomáš è il personaggio di un romanzo di Kundera",
                correct: true,
                explanation:
                    "Tomáš viene presentato come il protagonista de L’insostenibile leggerezza dell’essere, romanzo di Milan Kundera. Questa informazione è espressamente contenuta nell'apertura del brano.",
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
            "Dal testo si evince che i romanzi di Kundera:",
        answers: [
            {
                id: "A",
                text: "sorvolano sempre sugli aspetti filosofici",
                correct: false,
                explanation:
                    "Il testo sostiene esattamente il contrario e cita tra i motivi della loro attualità «la profondità delle riflessioni filosofiche». Gli aspetti filosofici hanno quindi un ruolo rilevante.",
            },
            {
                id: "B",
                text: "risultano non pienamente apprezzabili perché trattano la morte della cultura",
                correct: false,
                explanation:
                    "Pur affrontando il tema della «morte della cultura», i romanzi vengono definiti ancora attuali e apprezzabili per la scrittura, i personaggi e le riflessioni filosofiche. Il tema non ne diminuisce quindi il valore secondo l'autore.",
            },
            {
                id: "C",
                text: "sono stati concepiti in un contesto storico diverso da quello attuale",
                correct: true,
                explanation:
                    "Il brano afferma che «è cambiato profondamente il contesto storico nel quale sono nati», ma che le opere rimangono attuali. La risposta riprende precisamente questa informazione.",
            },
            {
                id: "D",
                text: "si scontrano con la visione di autori come Musil",
                correct: false,
                explanation:
                    "Musil viene indicato tra i riferimenti costanti di Kundera insieme a Kafka, Broch e Gombrowicz. Non viene quindi presentato come un autore in opposizione alla sua visione.",
            },
        ],
    },

    {
        id: 3,
        area: "linguistica-logica",
        category: "comprensione-stilistica",
        difficulty: 3,
        passage: passages.passage01,
        question:
            "In “Ottenuta non malgrado il suo scetticismo, ma grazie ad esso. Tomáš si sente felice nel momento in cui perde il lavoro e tutto ciò che ha considerato come la propria missione”, il corsivo è usato per:",
        answers: [
            {
                id: "A",
                text: "sottolineare un tono spregiativo",
                correct: false,
                explanation:
                    "Il corsivo non serve qui a manifestare disprezzo verso Tomáš o verso lo scetticismo. Il contenuto viene invece messo in particolare evidenza perché esprime il nucleo paradossale del ragionamento.",
            },
            {
                id: "B",
                text: "enfatizzare i concetti espressi",
                correct: true,
                explanation:
                    "Il corsivo richiama l'attenzione sul fatto che la felicità di Tomáš nasce grazie allo scetticismo e proprio nel momento della perdita. La funzione è quindi enfatica: mette in rilievo un passaggio importante per comprendere il senso del testo.",
            },
            {
                id: "C",
                text: "nascondere una metafora",
                correct: false,
                explanation:
                    "Il corsivo non «nasconde» una figura retorica. È una scelta tipografica utilizzata per mettere in evidenza determinate parole o idee.",
            },
            {
                id: "D",
                text: "indicare che chi scrive sta mentendo",
                correct: false,
                explanation:
                    "Non esiste una convenzione secondo cui il corsivo indichi una menzogna dell'autore. Nel brano è semplicemente utilizzato per evidenziare concetti centrali.",
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
            "Lo scherzo, da quanto si deduce dal brano:",
        answers: [
            {
                id: "A",
                text: "secondo l’autore andrebbe maggiormente praticato",
                correct: true,
                explanation:
                    "Il brano lamenta che oggi «si prende tutto sul serio» e afferma che, anche se gli scherzi non costituiscono una vera liberazione, sono comunque «una specie di boccata d’aria». Tra le alternative proposte, questa è quindi quella coerente con il valore positivo attribuito allo scherzo.",
            },
            {
                id: "B",
                text: "è ritenuto da Kundera una forma di liberazione",
                correct: false,
                explanation:
                    "Il testo nega esplicitamente questa interpretazione: «Gli scherzi non sono una forma di liberazione». Sono però considerati una possibile «boccata d'aria».",
            },
            {
                id: "C",
                text: "secondo Kundera negli ultimi tempi è abusato",
                correct: false,
                explanation:
                    "Kundera sostiene semmai che oggi non vi sia più spazio sufficiente per gli scherzi perché tutto viene preso troppo sul serio. Il problema non è quindi un eccesso di scherzi.",
            },
            {
                id: "D",
                text: "è un tema che caratterizza soltanto uno dei romanzi di Kundera",
                correct: false,
                explanation:
                    "Lo scherzo dà il titolo al primo romanzo, ma il testo afferma che le opere successive sono, sotto diversi aspetti, «variazioni di questo tema». Non è quindi limitato a una sola opera.",
            },
        ],
    },

    {
        id: 5,
        area: "linguistica-logica",
        category: "lessico-nel-contesto",
        difficulty: 2,
        passage: passages.passage01,
        question:
            "Con “felicità paradossale”, nel brano, si intende una felicità:",
        answers: [
            {
                id: "A",
                text: "logicamente ineccepibile",
                correct: false,
                explanation:
                    "L'aggettivo «paradossale» segnala proprio qualcosa che appare contrario alle aspettative o alla logica comune. Non significa quindi perfettamente lineare e prevedibile.",
            },
            {
                id: "B",
                text: "intesa come una missione",
                correct: false,
                explanation:
                    "Nel testo è il lavoro a essere associato a ciò che Tomáš considerava una missione. La felicità nasce paradossalmente quando egli perde proprio quel lavoro.",
            },
            {
                id: "C",
                text: "assurda, contraddittoria",
                correct: true,
                explanation:
                    "«Paradossale» indica qualcosa che sembra contraddittorio o contrario a ciò che normalmente ci aspetteremmo. Tomáš è felice proprio quando perde il lavoro e ciò che considerava la propria missione.",
            },
            {
                id: "D",
                text: "giusta e dotata di coerenza",
                correct: false,
                explanation:
                    "Questa definizione elimina il carattere di apparente contraddizione espresso da «paradossale». Il punto del passo è invece sorprendere il lettore rispetto alla normale associazione tra successo e felicità.",
            },
        ],
    },

    {
        id: 6,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages.passage02,
        question:
            "Michele, da quanto si deduce dal brano:",
        answers: [
            {
                id: "A",
                text: "è solito pranzare poco prima di mezzogiorno",
                correct: false,
                explanation:
                    "Il testo racconta soltanto questo particolare pranzo con il padre e non descrive le abitudini quotidiane di Michele. Non possiamo quindi dedurre a che ora sia solito mangiare.",
            },
            {
                id: "B",
                text: "detesta le verdure grigliate",
                correct: false,
                explanation:
                    "Le verdure grigliate vengono ordinate da Vittorio, non da Michele. Il testo non ci fornisce informazioni sui gusti di Michele riguardo alle verdure.",
            },
            {
                id: "C",
                text: "paga il conto",
                correct: false,
                explanation:
                    "Alla fine del pranzo il testo precisa che «il vecchio pagò il conto», cioè Vittorio. Michele non paga.",
            },
            {
                id: "D",
                text: "pranza in un ristorante",
                correct: true,
                explanation:
                    "Vittorio porta suo figlio in «un ristorante a pochi passi dagli uffici» e i due mangiano insieme. È quindi certo che Michele pranzi in un ristorante.",
            },
        ],
    },

    {
        id: 7,
        area: "linguistica-logica",
        category: "figure-retoriche",
        difficulty: 3,
        passage: passages.passage02,
        question:
            "Nel brano, l’espressione “entrare nel suo mondo” racchiude:",
        answers: [
            {
                id: "A",
                text: "una metafora",
                correct: true,
                explanation:
                    "Vittorio non entra fisicamente in un mondo differente. L'espressione indica figurativamente la possibilità di comprendere meglio pensieri, esperienze e vita del figlio ascoltandolo parlare: è quindi una metafora.",
            },
            {
                id: "B",
                text: "un significato letterale",
                correct: false,
                explanation:
                    "Non viene descritto uno spostamento fisico verso un luogo chiamato «mondo». Il significato è figurato e riguarda la comprensione della realtà personale di Michele.",
            },
            {
                id: "C",
                text: "una similitudine",
                correct: false,
                explanation:
                    "Una similitudine presenta normalmente un confronto esplicito attraverso espressioni come «come», «simile a» o «pare». Qui il trasferimento di significato avviene senza un confronto esplicito.",
            },
            {
                id: "D",
                text: "un’ironia",
                correct: false,
                explanation:
                    "Il narratore non intende dire il contrario di ciò che afferma né creare un effetto ironico. L'espressione comunica il desiderio sincero del padre di avvicinarsi alla vita del figlio.",
            },
        ],
    },

    {
        id: 8,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages.passage02,
        question:
            "Da quanto si deduce dal brano, Vittorio:",
        answers: [
            {
                id: "A",
                text: "è certo di concludere tutto entro fine agosto",
                correct: false,
                explanation:
                    "Il testo afferma che Vittorio si sente male pensando a tutto ciò che deve fare «prima di agosto». Non viene detto che sia certo di concludere ogni attività entro la fine di agosto.",
            },
            {
                id: "B",
                text: "esce di casa prima di telefonare in Turchia",
                correct: false,
                explanation:
                    "L'ordine degli eventi è esplicito: Vittorio si sveglia alle cinque, telefona in Turchia, poi si veste, fa colazione ed esce di casa.",
            },
            {
                id: "C",
                text: "si è svegliato presto",
                correct: true,
                explanation:
                    "Il brano comincia affermando che Vittorio «si risvegliò alle cinque del mattino». Si può quindi certamente dire che si sia svegliato presto.",
            },
            {
                id: "D",
                text: "mangia un secondo di carne",
                correct: false,
                explanation:
                    "È Michele a mangiare la bistecca. Vittorio, avendo ancora fastidi allo stomaco, si limita invece a un'insalata e a un piattino di verdure grigliate.",
            },
        ],
    },

    {
        id: 9,
        area: "linguistica-logica",
        category: "inferenza-testuale",
        difficulty: 3,
        passage: passages.passage02,
        question:
            "In “Magari lo aveva deciso già da qualche giorno ed era venuto lì per fargli credere di essere stato lui, il vecchio padre, tanto abile da convincerlo a restare”, si deduce che la decisione di Michele:",
        answers: [
            {
                id: "A",
                text: "probabilmente era già stata meditata in precedenza",
                correct: true,
                explanation:
                    "Vittorio ipotizza che Michele avesse già deciso «da qualche giorno» di restare a Bari e che abbia semplicemente lasciato credere al padre di averlo convinto. La decisione potrebbe quindi essere precedente al loro incontro.",
            },
            {
                id: "B",
                text: "non dipende in alcun modo da Michele",
                correct: false,
                explanation:
                    "È proprio Michele a decidere se rimanere o meno a Bari. Il dubbio riguarda soltanto il momento in cui avrebbe preso tale decisione.",
            },
            {
                id: "C",
                text: "non è presa con convinzione",
                correct: false,
                explanation:
                    "Il testo non esprime incertezza di Michele sulla decisione. Anzi, Vittorio pensa che possa averla presa autonomamente già prima del pranzo.",
            },
            {
                id: "D",
                text: "è del tutto impulsiva",
                correct: false,
                explanation:
                    "Se Michele aveva già deciso qualche giorno prima, la scelta non può essere definita del tutto improvvisa o impulsiva. L'ipotesi suggerisce piuttosto una decisione già maturata.",
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
            "Dall’espressione “D’accordo papà, disse Michele tornando a infilzare ciò che restava della bistecca”, si evince:",
        answers: [
            {
                id: "A",
                text: "lo scarso appetito del figlio",
                correct: false,
                explanation:
                    "Michele ha ordinato primo e secondo, una bistecca al sangue, macedonia e anche il caffè. Il suo comportamento non suggerisce quindi scarso appetito.",
            },
            {
                id: "B",
                text: "un senso di disgusto verso la pietanza",
                correct: false,
                explanation:
                    "Michele continua a mangiare la bistecca, quindi il testo non suggerisce disgusto. Non vi sono espressioni di rifiuto della pietanza.",
            },
            {
                id: "C",
                text: "la rabbia del padre",
                correct: false,
                explanation:
                    "Vittorio è invece soddisfatto della decisione del figlio e pensa «Bene. Molto bene». Non viene rappresentato come arrabbiato.",
            },
            {
                id: "D",
                text: "che Michele mangia l’intera bistecca",
                correct: true,
                explanation:
                    "La soluzione indicata dalla prova è questa. L'espressione mostra Michele che continua a mangiare «ciò che restava della bistecca», coerentemente con il fatto che stia portando a termine la pietanza. Tra le alternative proposte è l'unica compatibile con la scena descritta.",
            },
        ],
    },

    {
        id: 11,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 4,
        passage: passages.passage03,
        question:
            "Dall’espressione “Racconta la sua esperienza e come il calcio femminile abbia iniziato a scalfire la mentalità comune, in un contesto in cui le donne non fanno sport e restano a casa” si evince:",
        answers: [
            {
                id: "A",
                text: "che il calcio ha scalfito la mentalità di Shaheen",
                correct: false,
                explanation:
                    "La «mentalità comune» non è quella personale di Shaheen, che al contrario ha sfidato i pregiudizi esistenti. Il cambiamento riguarda più ampiamente il contesto sociale in cui viveva.",
            },
            {
                id: "B",
                text: "che la calciatrice è stata per molto tempo relegata in casa",
                correct: false,
                explanation:
                    "Il testo afferma che in quel contesto le donne generalmente non praticano sport e restano a casa, ma non dice che Shaheen sia rimasta personalmente e per lungo tempo confinata in casa.",
            },
            {
                id: "C",
                text: "l’esemplarità della storia di Shaheen per le donne del suo paese",
                correct: true,
                explanation:
                    "La sua esperienza dimostra che il calcio femminile può contribuire a mettere in discussione una mentalità che limita la libertà delle donne. Shaheen viene quindi presentata come esempio di tenacia e di superamento dei pregiudizi.",
            },
            {
                id: "D",
                text: "la totale condiscendenza di Shaheen con la mentalità della sua cultura d’origine",
                correct: false,
                explanation:
                    "La sua storia è definita fin dall'inizio una «lotta contro i pregiudizi». Non accetta quindi passivamente le limitazioni del contesto culturale.",
            },
        ],
    },

    {
        id: 12,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages.passage03,
        question:
            "Shaheen, secondo quanto si deduce dal testo:",
        answers: [
            {
                id: "A",
                text: "ha accantonato da tempo il tema dei diritti umani",
                correct: false,
                explanation:
                    "Il testo afferma che continua a portare avanti il proprio impegno per i diritti umani attraverso lo sport. Non ha quindi abbandonato questo tema.",
            },
            {
                id: "B",
                text: "si è occupata in via esclusiva di promozione dello sport",
                correct: false,
                explanation:
                    "La sua attività comprende sia la promozione dello sport come diritto sia un più ampio impegno sui diritti umani. Non è quindi esclusivamente sportiva.",
            },
            {
                id: "C",
                text: "ha incontrato Gary Lineker a Gerico",
                correct: false,
                explanation:
                    "Le loro storie si sono incontrate il 24 maggio presso la Federazione nazionale della stampa italiana, in occasione della premiazione. Gerico è invece il luogo in cui Shaheen si innamorò del calcio da bambina.",
            },
            {
                id: "D",
                text: "ha seguito la sua passione malgrado l’ostilità culturale",
                correct: true,
                explanation:
                    "Shaheen ha affrontato assenza di squadre femminili, difficoltà negli spostamenti e «una diffusa ostilità». Nonostante questi ostacoli ha continuato a perseguire la propria passione per il calcio.",
            },
        ],
    },

    {
        id: 13,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages.passage03,
        question:
            "NON è un’informazione presente nel testo:",
        answers: [
            {
                id: "A",
                text: "lo stato in cui gioca Shaheen",
                correct: false,
                explanation:
                    "Il testo afferma che Shaheen «ora vive e gioca a Sassari», quindi sappiamo che gioca in Italia. Questa informazione è presente.",
            },
            {
                id: "B",
                text: "l’attuale professione di Lineker",
                correct: false,
                explanation:
                    "Lineker viene descritto come «ex calciatore inglese, ora presentatore televisivo di fama mondiale». La sua professione attuale è quindi indicata.",
            },
            {
                id: "C",
                text: "la professione di Shaheen",
                correct: false,
                explanation:
                    "All'inizio viene definita «una calciatrice e attivista palestinese». La sua attività è quindi esplicitamente indicata.",
            },
            {
                id: "D",
                text: "l’età di Lineker",
                correct: true,
                explanation:
                    "Il testo fornisce informazioni sulla carriera di Gary Lineker e sul suo impegno pubblico, ma non specifica quanti anni abbia. È quindi l'informazione assente.",
            },
        ],
    },

    {
        id: 14,
        area: "linguistica-logica",
        category: "coesione-testuale",
        difficulty: 4,
        passage: passages.passage03,
        question:
            "Nell’espressione “Gary Lineker è un ex calciatore inglese, ora presentatore televisivo di fama mondiale; una persona con grande visibilità, che ha in più occasioni utilizzato per lanciare messaggi di empatia e solidarietà nei confronti dei rifugiati”, il “che” si riferisce a:",
        answers: [
            {
                id: "A",
                text: "visibilità",
                correct: true,
                explanation:
                    "Il senso della frase è che Lineker ha utilizzato più volte la propria «grande visibilità» per diffondere messaggi di empatia e solidarietà. Il pronome relativo «che» riprende quindi «visibilità».",
            },
            {
                id: "B",
                text: "empatia e solidarietà",
                correct: false,
                explanation:
                    "Empatia e solidarietà compaiono dopo il pronome relativo e rappresentano il contenuto dei messaggi diffusi. Non costituiscono quindi l'antecedente di «che».",
            },
            {
                id: "C",
                text: "Gary Lineker",
                correct: false,
                explanation:
                    "È Lineker a utilizzare qualcosa per lanciare i messaggi, e ciò che utilizza è la sua visibilità. Il pronome non sostituisce direttamente il soggetto.",
            },
            {
                id: "D",
                text: "fama mondiale",
                correct: false,
                explanation:
                    "«Di fama mondiale» qualifica il presentatore televisivo. Il referente concreto ripreso dal pronome relativo è invece «grande visibilità».",
            },
        ],
    },

    {
        id: 15,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages.passage03,
        question:
            "Dal testo si deduce che:",
        answers: [
            {
                id: "A",
                text: "gli intralci iniziali di Shaheen consistettero prevalentemente nelle proibizioni dei genitori",
                correct: false,
                explanation:
                    "Il testo cita spostamenti proibitivi, posti di blocco, assenza di squadre femminili e ostilità diffusa. Non attribuisce invece gli ostacoli principalmente ai genitori.",
            },
            {
                id: "B",
                text: "la passione di Shaheen per il calcio è molto recente",
                correct: false,
                explanation:
                    "Shaheen «si è innamorata del calcio da bambina, a Gerico». La passione nasce quindi molti anni prima degli eventi raccontati.",
            },
            {
                id: "C",
                text: "Gary Lineker è un calciatore palestinese",
                correct: false,
                explanation:
                    "Lineker viene indicato come ex calciatore inglese. È Shaheen a essere palestinese.",
            },
            {
                id: "D",
                text: "si è tenuta l’edizione 2023 del premio “Sport e diritti umani”",
                correct: true,
                explanation:
                    "Il testo racconta espressamente la cerimonia di premiazione dell'edizione 2023 del premio Sport e diritti umani. Shaheen ne è indicata come vincitrice della quinta edizione.",
            },
        ],
    },

    {
        id: 16,
        area: "linguistica-logica",
        category: "pronomi-personali",
        difficulty: 2,
        question:
            "Indicare la frase in cui è presente il pronome corretto:",
        answers: [
            {
                id: "A",
                text: "Maria non sta bene: ci ho detto di riposare.",
                correct: false,
                explanation:
                    "«Ci» non sostituisce correttamente il complemento di termine singolare femminile «a Maria». Può avere altri valori, come «a noi» oppure un valore locativo.",
            },
            {
                id: "B",
                text: "Maria non sta bene: gli ho detto di riposare.",
                correct: false,
                explanation:
                    "Nell'italiano standard «gli» sostituisce normalmente «a lui». Maria è femminile singolare, quindi il pronome corretto è «le».",
            },
            {
                id: "C",
                text: "Maria non sta bene: le ho detto di riposare.",
                correct: true,
                explanation:
                    "«Le» è il pronome personale atono corretto per sostituire «a Maria»: «ho detto a Maria di riposare» diventa «le ho detto di riposare».",
            },
            {
                id: "D",
                text: "Maria non sta bene: c’ho detto di riposare.",
                correct: false,
                explanation:
                    "«C'ho» non sostituisce correttamente il complemento «a Maria» in questa frase. La forma standard richiesta è «le ho detto».",
            },
        ],
    },

    {
        id: 17,
        area: "linguistica-logica",
        category: "morfologia-verbale",
        difficulty: 2,
        question:
            "Individuare la corretta coniugazione al participio presente di “andare”:",
        answers: [
            {
                id: "A",
                text: "andante",
                correct: true,
                explanation:
                    "«Andante» è il participio presente del verbo «andare». Nell'italiano moderno il participio presente viene spesso utilizzato soprattutto con valore aggettivale o sostantivato.",
            },
            {
                id: "B",
                text: "andiamo",
                correct: false,
                explanation:
                    "«Andiamo» è la prima persona plurale del presente indicativo di «andare» e può anche avere valore esortativo. Non è un participio.",
            },
            {
                id: "C",
                text: "andando",
                correct: false,
                explanation:
                    "«Andando» è il gerundio presente di «andare». Il gerundio termina in «-ando» per i verbi della prima coniugazione.",
            },
            {
                id: "D",
                text: "andato",
                correct: false,
                explanation:
                    "«Andato» è il participio passato del verbo «andare», utilizzato per esempio nei tempi composti: «sono andato».",
            },
        ],
    },

    {
        id: 18,
        area: "linguistica-logica",
        category: "divisione-in-sillabe",
        difficulty: 3,
        question:
            "La corretta divisione in sillabe della parola “lapislazzulo” è:",
        answers: [
            {
                id: "A",
                text: "lap-is-laz-zu-lo",
                correct: false,
                explanation:
                    "La prima parte non viene divisa «lap-is». La scansione sillabica corretta mantiene «la-pi» e organizza la parte centrale secondo la pronuncia della parola.",
            },
            {
                id: "B",
                text: "la-pi-sla-zz-ulo",
                correct: false,
                explanation:
                    "Questa soluzione crea gruppi sillabici non corretti, in particolare «zz» isolato. Le consonanti doppie vengono normalmente separate tra sillabe adiacenti.",
            },
            {
                id: "C",
                text: "la-pi-sla-z-zu-lo",
                correct: false,
                explanation:
                    "La sequenza centrale viene segmentata in modo scorretto. In «lapislazzulo» la «s» appartiene alla sillaba che termina in «slaz», secondo la divisione indicata dalla prova.",
            },
            {
                id: "D",
                text: "la-pi-slaz-zu-lo",
                correct: true,
                explanation:
                    "La divisione corretta indicata dalla prova è «la-pi-slaz-zu-lo». La doppia «zz» viene separata tra le sillabe «slaz» e «zu».",
            },
        ],
    },

    {
        id: 19,
        area: "linguistica-logica",
        category: "ortografia",
        difficulty: 2,
        question:
            "Tra le seguenti, è scritta correttamente la parola:",
        answers: [
            {
                id: "A",
                text: "acquoso",
                correct: true,
                explanation:
                    "«Acquoso» è la grafia corretta e deriva da «acqua». Mantiene quindi il gruppo «acqu-», come anche in «acquatico» e «acquedotto».",
            },
            {
                id: "B",
                text: "accuitrino",
                correct: false,
                explanation:
                    "La grafia proposta non è corretta. Il termine corretto è «acquitrino», con il gruppo iniziale «acqui-».",
            },
            {
                id: "C",
                text: "acqquatico",
                correct: false,
                explanation:
                    "La forma corretta è «acquatico». Il gruppo richiesto è «cqu», non «cqqu».",
            },
            {
                id: "D",
                text: "aquisto",
                correct: false,
                explanation:
                    "La grafia corretta è «acquisto», con «cqu». La stessa sequenza compare nel verbo «acquistare».",
            },
        ],
    },

    {
        id: 20,
        area: "linguistica-logica",
        category: "ortografia",
        difficulty: 3,
        question:
            "Individuare, tra le seguenti frasi, quella ortograficamente corretta:",
        answers: [
            {
                id: "A",
                text: "di mele, in frigo, c’è ne sono quattro.",
                correct: false,
                explanation:
                    "La forma corretta è «ce ne sono», non «c'è ne sono». «C'è» deriva da «ci è», mentre la costruzione pronominale richiesta utilizza «ce ne».",
            },
            {
                id: "B",
                text: "non lo saprai né ora né mai.",
                correct: true,
                explanation:
                    "La frase è ortograficamente corretta. La congiunzione negativa «né» richiede l'accento e viene utilizzata correttamente nella correlazione «né... né...».",
            },
            {
                id: "C",
                text: "non c’è nè per nessuno.",
                correct: false,
                explanation:
                    "Quando significa «e non» o viene usato nella correlazione negativa, «né» si scrive con accento acuto: «né». La forma «nè» con accento grave è errata.",
            },
            {
                id: "D",
                text: "non ce n’è siamo ricordati.",
                correct: false,
                explanation:
                    "La costruzione corretta sarebbe «non ce ne siamo ricordati». «N'è» equivale a «ne è» e non può essere utilizzato davanti all'ausiliare «siamo» in questa frase.",
            },
        ],
    },
    {
        id: 21,
        area: "linguistica-logica",
        category: "ortografia-plurali",
        difficulty: 3,
        question:
            "Indicare, tra i seguenti nomi plurali, quello NON scritto correttamente:",
        answers: [
            {
                id: "A",
                text: "roccie",
                correct: true,
                explanation:
                    "La forma «roccie» è errata: il plurale corretto di «roccia» è «rocce». Nei nomi in -cia preceduti da consonante, come in «roccia», la i generalmente cade al plurale.",
            },
            {
                id: "B",
                text: "piogge",
                correct: false,
                explanation:
                    "«Piogge» è il plurale corretto di «pioggia». La i non viene mantenuta nella forma plurale.",
            },
            {
                id: "C",
                text: "mance",
                correct: false,
                explanation:
                    "«Mance» è il plurale corretto di «mancia». Poiché -cia è preceduto dalla consonante n, la i cade al plurale.",
            },
            {
                id: "D",
                text: "camicie",
                correct: false,
                explanation:
                    "«Camicie» è scritto correttamente. Nei nomi in -cia preceduti da vocale, come «camicia», la i viene normalmente conservata al plurale.",
            },
        ],
    },

    {
        id: 22,
        area: "linguistica-logica",
        category: "connettivi",
        difficulty: 2,
        question:
            "Senza che ne venga alterato il senso, in “Rientriamo a casa, visto che sta facendo notte”, “visto che” potrebbe essere sostituito da:",
        answers: [
            {
                id: "A",
                text: "prima che",
                correct: false,
                explanation:
                    "«Prima che» introduce una relazione temporale e richiederebbe normalmente il congiuntivo. Non esprime la causa per cui si decide di rientrare.",
            },
            {
                id: "B",
                text: "poiché",
                correct: true,
                explanation:
                    "«Visto che» ha qui valore causale e può essere sostituito da «poiché»: si rientra a casa perché sta facendo notte. Il rapporto logico tra le due proposizioni rimane invariato.",
            },
            {
                id: "C",
                text: "finché",
                correct: false,
                explanation:
                    "«Finché» introduce normalmente un limite o una durata temporale. Non esprime il motivo del rientro.",
            },
            {
                id: "D",
                text: "anche se",
                correct: false,
                explanation:
                    "«Anche se» introduce un rapporto concessivo, cioè un fatto che non impedisce ciò che viene espresso nella principale. Qui serve invece un connettivo causale.",
            },
        ],
    },

    {
        id: 23,
        area: "linguistica-logica",
        category: "lessico-sinonimi",
        difficulty: 3,
        question:
            "NON è un sinonimo di “tracotante”:",
        answers: [
            {
                id: "A",
                text: "accidioso",
                correct: true,
                explanation:
                    "«Accidioso» indica una persona indolente, pigra, apatica o priva di volontà. Non è quindi sinonimo di «tracotante», che indica invece un atteggiamento arrogante, insolente e presuntuoso.",
            },
            {
                id: "B",
                text: "superbo",
                correct: false,
                explanation:
                    "«Superbo», quando indica una persona altezzosa e piena di sé, è semanticamente vicino a «tracotante». Entrambi possono descrivere un atteggiamento arrogante.",
            },
            {
                id: "C",
                text: "presuntuoso",
                correct: false,
                explanation:
                    "«Presuntuoso» indica chi ha un'eccessiva considerazione di sé e si mostra arrogante. È quindi vicino al significato di «tracotante».",
            },
            {
                id: "D",
                text: "borioso",
                correct: false,
                explanation:
                    "«Borioso» indica chi ostenta superiorità e ha un atteggiamento vanitoso e arrogante. È dunque un possibile sinonimo di «tracotante».",
            },
        ],
    },

    {
        id: 24,
        area: "linguistica-logica",
        category: "forma-passiva",
        difficulty: 3,
        question:
            "Indicare la frase in cui è presente un verbo passivo:",
        answers: [
            {
                id: "A",
                text: "sono maturato molto nel primo anno di Università",
                correct: false,
                explanation:
                    "«Sono maturato» è un tempo composto attivo del verbo intransitivo «maturare», formato con l'ausiliare essere. La presenza di «essere» non implica automaticamente una costruzione passiva.",
            },
            {
                id: "B",
                text: "quest’anno sono andato in vacanza",
                correct: false,
                explanation:
                    "«Sono andato» è passato prossimo attivo del verbo intransitivo «andare». Anche qui «essere» funziona da ausiliare e non costruisce una forma passiva.",
            },
            {
                id: "C",
                text: "non sono sempre supportato dai miei amici",
                correct: true,
                explanation:
                    "La costruzione «sono supportato» è passiva: il soggetto riceve l'azione compiuta dai suoi amici. «Dai miei amici» è infatti il complemento d'agente.",
            },
            {
                id: "D",
                text: "sono soddisfatto della gara",
                correct: false,
                explanation:
                    "«Soddisfatto» funziona qui come aggettivo riferito al soggetto e descrive uno stato. Non viene espressa un'azione subita da un agente.",
            },
        ],
    },

    {
        id: 25,
        area: "linguistica-logica",
        category: "morfologia-verbale",
        difficulty: 3,
        question:
            "Individuare la voce verbale coniugata al congiuntivo imperfetto:",
        answers: [
            {
                id: "A",
                text: "abbia parlato",
                correct: false,
                explanation:
                    "«Abbia parlato» è congiuntivo passato: è formato dal congiuntivo presente dell'ausiliare «avere» più il participio passato «parlato».",
            },
            {
                id: "B",
                text: "avevo",
                correct: false,
                explanation:
                    "«Avevo» è imperfetto indicativo del verbo «avere», prima persona singolare. Non appartiene al modo congiuntivo.",
            },
            {
                id: "C",
                text: "avessi avuto",
                correct: false,
                explanation:
                    "«Avessi avuto» è congiuntivo trapassato, formato dal congiuntivo imperfetto dell'ausiliare «avere» più il participio passato «avuto».",
            },
            {
                id: "D",
                text: "avessi",
                correct: true,
                explanation:
                    "«Avessi» è una forma del congiuntivo imperfetto del verbo «avere». Può comparire, per esempio, in «Se avessi tempo, verrei con te».",
            },
        ],
    },

    {
        id: 26,
        area: "linguistica-logica",
        category: "lessico-sinonimi",
        difficulty: 3,
        question:
            "NON è un sinonimo di “trepido”:",
        answers: [
            {
                id: "A",
                text: "smanioso",
                correct: false,
                explanation:
                    "«Smanioso» può indicare una condizione di forte agitazione, desiderio o ansiosa attesa. In determinati contesti è quindi vicino al significato di «trepido».",
            },
            {
                id: "B",
                text: "triste",
                correct: true,
                explanation:
                    "«Triste» indica principalmente uno stato di dolore o infelicità. «Trepido» significa invece ansioso, timoroso, agitato per attesa o preoccupazione e non è sinonimo di «triste».",
            },
            {
                id: "C",
                text: "timoroso",
                correct: false,
                explanation:
                    "«Timoroso» è vicino a uno dei significati di «trepido», che può indicare paura, apprensione o ansietà.",
            },
            {
                id: "D",
                text: "ansioso",
                correct: false,
                explanation:
                    "«Ansioso» è un sinonimo appropriato di «trepido» quando quest'ultimo descrive uno stato di inquietudine e attesa preoccupata.",
            },
        ],
    },

    {
        id: 27,
        area: "linguistica-logica",
        category: "formazione-delle-parole",
        difficulty: 3,
        question:
            "Nella parola “decolorare”, “de-” è:",
        answers: [
            {
                id: "A",
                text: "un suffisso accrescitivo",
                correct: false,
                explanation:
                    "Un suffisso viene aggiunto alla fine della parola, mentre «de-» compare prima della base lessicale. Non è quindi un suffisso e non possiede valore accrescitivo.",
            },
            {
                id: "B",
                text: "un articolo",
                correct: false,
                explanation:
                    "Gli articoli italiani sono forme come «il», «lo», «la», «un» e «una». «De-» è invece un elemento morfologico che precede la base della parola.",
            },
            {
                id: "C",
                text: "un prefisso privativo",
                correct: true,
                explanation:
                    "In «decolorare», il prefisso «de-» esprime eliminazione o privazione: decolorare significa infatti togliere o diminuire il colore. È quindi un prefisso con valore privativo.",
            },
            {
                id: "D",
                text: "una preposizione articolata",
                correct: false,
                explanation:
                    "Le preposizioni articolate derivano dall'unione di una preposizione semplice con un articolo, come «del», «della» o «dai». «De-» in «decolorare» è invece parte della struttura della parola.",
            },
        ],
    },

    {
        id: 28,
        area: "linguistica-logica",
        category: "analisi-logica",
        difficulty: 2,
        question:
            "Individuare la frase in cui è presente un complemento di stato in luogo:",
        answers: [
            {
                id: "A",
                text: "abito a Matera",
                correct: true,
                explanation:
                    "«A Matera» indica il luogo in cui il soggetto abita stabilmente e risponde alla domanda «dove?». È quindi un complemento di stato in luogo.",
            },
            {
                id: "B",
                text: "mi porti a ballare?",
                correct: false,
                explanation:
                    "«A ballare» è una costruzione con infinito che esprime lo scopo o l'attività verso cui si dirige l'azione. Non indica un luogo nel quale il soggetto si trova.",
            },
            {
                id: "C",
                text: "andiamo a casa",
                correct: false,
                explanation:
                    "«A casa» indica la destinazione del movimento espresso da «andiamo». È quindi un complemento di moto a luogo.",
            },
            {
                id: "D",
                text: "vado a dormire",
                correct: false,
                explanation:
                    "«A dormire» indica l'azione che il soggetto si appresta a compiere, non un luogo fisico in cui permane.",
            },
        ],
    },

    {
        id: 29,
        area: "linguistica-logica",
        category: "parti-del-discorso",
        difficulty: 2,
        question:
            "In “Non dici mai la verità”, “mai”, al livello grammaticale, è:",
        answers: [
            {
                id: "A",
                text: "una congiunzione",
                correct: false,
                explanation:
                    "Una congiunzione collega parole o proposizioni. «Mai» non svolge questa funzione nella frase.",
            },
            {
                id: "B",
                text: "un’interiezione",
                correct: false,
                explanation:
                    "Le interiezioni esprimono emozioni, richiami o reazioni immediate, come «ah!» o «oh!». «Mai» non appartiene a questa categoria.",
            },
            {
                id: "C",
                text: "un sostantivo",
                correct: false,
                explanation:
                    "Un sostantivo designa una persona, un oggetto, un concetto o un'entità. «Mai» non svolge funzione nominale in questa frase.",
            },
            {
                id: "D",
                text: "un avverbio",
                correct: true,
                explanation:
                    "«Mai» è un avverbio di tempo con valore negativo. Nell'espressione «non dici mai» indica che l'azione non avviene in nessun momento.",
            },
        ],
    },

    {
        id: 30,
        area: "linguistica-logica",
        category: "connettivi",
        difficulty: 3,
        question:
            "Senza alterare il senso della frase “nonostante avessi paura, mi sono tuffata”, “nonostante” potrebbe essere sostituito da:",
        answers: [
            {
                id: "A",
                text: "siccome",
                correct: false,
                explanation:
                    "«Siccome» introduce una causa: «siccome avevo paura» significherebbe che la paura è la ragione del tuffo. Il significato originario è invece concessivo.",
            },
            {
                id: "B",
                text: "sebbene",
                correct: true,
                explanation:
                    "«Sebbene» è una congiunzione concessiva e può sostituire «nonostante» senza cambiare il senso: «sebbene avessi paura, mi sono tuffata». Entrambe richiedono qui il congiuntivo.",
            },
            {
                id: "C",
                text: "poiché",
                correct: false,
                explanation:
                    "«Poiché» introduce una proposizione causale e cambierebbe il rapporto logico tra paura e tuffo.",
            },
            {
                id: "D",
                text: "comunque",
                correct: false,
                explanation:
                    "«Comunque» può esprimere un valore avversativo o concessivo in altre costruzioni, ma non può sostituire direttamente «nonostante» davanti alla subordinata «avessi paura» mantenendo la stessa struttura.",
            },
        ],
    },

    {
        id: 31,
        area: "linguistica-logica",
        category: "morfologia-verbale",
        difficulty: 3,
        question:
            "La voce verbale “saremo andati” è coniugata:",
        answers: [
            {
                id: "A",
                text: "alla prima persona plurale dell’indicativo futuro anteriore",
                correct: true,
                explanation:
                    "«Saremo andati» è formato dal futuro semplice dell'ausiliare «essere» («saremo») più il participio passato «andati». È quindi futuro anteriore indicativo, prima persona plurale.",
            },
            {
                id: "B",
                text: "alla terza persona plurale dell’indicativo trapassato prossimo",
                correct: false,
                explanation:
                    "Il trapassato prossimo alla terza persona plurale sarebbe «erano andati». «Saremo» appartiene invece al futuro.",
            },
            {
                id: "C",
                text: "alla prima persona plurale del congiuntivo imperfetto",
                correct: false,
                explanation:
                    "Il congiuntivo imperfetto di «andare» alla prima persona plurale è «andassimo». «Saremo andati» è un tempo composto dell'indicativo.",
            },
            {
                id: "D",
                text: "alla terza persona singolare del condizionale passato",
                correct: false,
                explanation:
                    "La terza persona singolare del condizionale passato sarebbe «sarebbe andato» o «sarebbe andata», non «saremo andati».",
            },
        ],
    },

    {
        id: 32,
        area: "linguistica-logica",
        category: "pronomi-relativi",
        difficulty: 3,
        question:
            "Individuare il completamento NON corretto. “La poltrona …”:",
        answers: [
            {
                id: "A",
                text: "sulla quale siedo era di mio nonno",
                correct: false,
                explanation:
                    "La costruzione è corretta: si dice «sedere su una poltrona», quindi il pronome relativo può essere introdotto da «su»: «sulla quale siedo».",
            },
            {
                id: "B",
                text: "a cui volevo, non mi piace più",
                correct: true,
                explanation:
                    "La frase è scorretta perché il verbo «volere» è transitivo e non regge la preposizione «a». Si potrebbe dire, per esempio, «la poltrona che volevo non mi piace più».",
            },
            {
                id: "C",
                text: "per cui ho speso una fortuna si è rovinata",
                correct: false,
                explanation:
                    "La costruzione è grammaticalmente possibile: «per cui» equivale qui a «per la quale», indicando ciò per cui è stata sostenuta la spesa.",
            },
            {
                id: "D",
                text: "di cui ti parlavo è troppo cara",
                correct: false,
                explanation:
                    "Il verbo «parlare» regge la preposizione «di»: «parlare di una poltrona». La forma relativa «di cui» è quindi corretta.",
            },
        ],
    },

    {
        id: 33,
        area: "linguistica-logica",
        category: "punteggiatura",
        difficulty: 3,
        question:
            "Indicare la frase in cui i due punti sono inseriti in maniera corretta:",
        answers: [
            {
                id: "A",
                text: "ecco: che cosa significavano quei segnali che i Saraceni erano tornati sul piede di guerra",
                correct: false,
                explanation:
                    "I due punti non devono separare «ecco» dall'espressione interrogativa indiretta che completa il significato. Sono collocati troppo presto.",
            },
            {
                id: "B",
                text: "ecco che cosa significavano quei segnali: che i Saraceni erano tornati sul piede di guerra",
                correct: true,
                explanation:
                    "I due punti introducono correttamente la spiegazione di ciò che significavano i segnali. La seconda parte specifica il contenuto annunciato dalla prima.",
            },
            {
                id: "C",
                text: "ecco che cosa significavano: quei segnali che i Saraceni erano tornati sul piede di guerra",
                correct: false,
                explanation:
                    "La posizione dei due punti separa impropriamente il verbo «significavano» dal suo soggetto «quei segnali» e rende poco coerente la costruzione.",
            },
            {
                id: "D",
                text: "ecco che cosa significavano quei segnali che: i Saraceni erano tornati sul piede di guerra",
                correct: false,
                explanation:
                    "I due punti non possono essere collocati dopo il «che» introduttivo. La congiunzione deve restare unita alla proposizione che introduce.",
            },
        ],
    },

    {
        id: 34,
        area: "linguistica-logica",
        category: "punteggiatura",
        difficulty: 3,
        question:
            "Indicare la frase scritta con la punteggiatura corretta:",
        answers: [
            {
                id: "A",
                text: "Il Mare dei Caraibi, in piena tempesta muggiva tremendamente, scagliando delle vere montagne d’acqua contro i moli di Puerto Limon e, le spiagge del Nicaragua e di Costarica.",
                correct: false,
                explanation:
                    "L'inciso «in piena tempesta» dovrebbe essere chiuso da una seconda virgola. Inoltre è scorretta la virgola tra la congiunzione «e» e «le spiagge».",
            },
            {
                id: "B",
                text: "Il Mare dei Caraibi, in piena tempesta, muggiva tremendamente, scagliando delle vere montagne d’acqua contro i moli di Puerto Limon e le spiagge del Nicaragua e di Costarica.",
                correct: true,
                explanation:
                    "L'inciso «in piena tempesta» è correttamente racchiuso tra virgole. Anche il gerundio «scagliando» è separato in modo appropriato e la coordinazione finale non presenta virgole inutili.",
            },
            {
                id: "C",
                text: "Il Mare, dei Caraibi in piena tempesta, muggiva tremendamente, scagliando delle vere montagne d’acqua! contro i moli di Puerto Limon e le spiagge del Nicaragua e di Costarica.",
                correct: false,
                explanation:
                    "La virgola separa impropriamente «Mare» dalla specificazione «dei Caraibi». Anche il punto esclamativo interrompe in modo scorretto la costruzione prima del complemento retto da «contro».",
            },
            {
                id: "D",
                text: "Il Mare dei Caraibi in piena tempesta muggiva tremendamente; scagliando delle vere montagne d’acqua contro: i moli di Puerto Limon e le spiagge del Nicaragua e di Costarica.",
                correct: false,
                explanation:
                    "Il punto e virgola separa in modo innaturale il gerundio dal verbo principale e i due punti dopo «contro» interrompono una normale relazione tra preposizione e complemento.",
            },
        ],
    },

    {
        id: 35,
        area: "linguistica-logica",
        category: "ortografia",
        difficulty: 2,
        question:
            "Indicare la frase ortograficamente corretta:",
        answers: [
            {
                id: "A",
                text: "pultroppo non siamo riusciti a venire al concerto",
                correct: false,
                explanation:
                    "La forma corretta è «purtroppo», non «pultroppo». La parola contiene la consonante r.",
            },
            {
                id: "B",
                text: "penso che avvolte Marco esageri davvero",
                correct: false,
                explanation:
                    "Quando significa «talvolta», l'espressione corretta è «a volte», in due parole. «Avvolte» è invece il participio passato femminile plurale di «avvolgere».",
            },
            {
                id: "C",
                text: "con un pò di sacrifici, compreremo una casa nuova",
                correct: false,
                explanation:
                    "La forma corretta è «po'», con apostrofo, perché deriva dal troncamento di «poco». «Pò» con accento è errato.",
            },
            {
                id: "D",
                text: "qual è il tuo animale preferito?",
                correct: true,
                explanation:
                    "«Qual è» si scrive senza apostrofo perché «qual» è una forma ottenuta per troncamento di «quale». La frase non presenta errori ortografici.",
            },
        ],
    },

    {
        id: 36,
        area: "linguistica-logica",
        category: "aggettivi-gradi",
        difficulty: 2,
        question:
            "La frase “Luca è il più elegante del gruppo” contiene:",
        answers: [
            {
                id: "A",
                text: "un superlativo assoluto",
                correct: false,
                explanation:
                    "Il superlativo assoluto esprime una qualità al massimo grado senza confronto con un gruppo, per esempio «Luca è elegantissimo». Qui invece Luca viene confrontato con gli altri membri del gruppo.",
            },
            {
                id: "B",
                text: "un superlativo relativo",
                correct: true,
                explanation:
                    "«Il più elegante del gruppo» attribuisce a Luca il grado massimo della qualità rispetto a un insieme determinato. Questa è precisamente la struttura del superlativo relativo.",
            },
            {
                id: "C",
                text: "un comparativo di minoranza",
                correct: false,
                explanation:
                    "Un comparativo di minoranza avrebbe una forma come «Luca è meno elegante di Marco». Qui viene invece indicato il massimo grado all'interno del gruppo.",
            },
            {
                id: "D",
                text: "un comparativo di uguaglianza",
                correct: false,
                explanation:
                    "Un comparativo di uguaglianza avrebbe una struttura come «Luca è elegante quanto Marco». La frase non esprime uguaglianza.",
            },
        ],
    },

    {
        id: 37,
        area: "linguistica-logica",
        category: "ortografia-verbale",
        difficulty: 2,
        question:
            "Tra i seguenti verbi, quello scritto in forma corretta è:",
        answers: [
            {
                id: "A",
                text: "scioglere",
                correct: false,
                explanation:
                    "La grafia corretta è «sciogliere», con la i dopo il gruppo «gl». «Scioglere» è errato.",
            },
            {
                id: "B",
                text: "sognamo",
                correct: false,
                explanation:
                    "La forma corretta è «sogniamo», prima persona plurale del presente indicativo di «sognare». La i è necessaria nella desinenza «-iamo».",
            },
            {
                id: "C",
                text: "sciegliere",
                correct: false,
                explanation:
                    "La grafia corretta è «scegliere». Non si scrive «sciegliere».",
            },
            {
                id: "D",
                text: "insegniamo",
                correct: true,
                explanation:
                    "«Insegniamo» è la forma corretta della prima persona plurale del presente indicativo di «insegnare». La desinenza «-iamo» mantiene la i.",
            },
        ],
    },

    {
        id: 38,
        area: "linguistica-logica",
        category: "formazione-delle-parole",
        difficulty: 3,
        question:
            "Indicare, tra le seguenti coppie, quella in cui è presente un reale rapporto di derivazione:",
        answers: [
            {
                id: "A",
                text: "tacco-tacchino",
                correct: false,
                explanation:
                    "Nonostante la somiglianza grafica, «tacchino» non deriva da «tacco». Le due parole hanno origini e significati distinti.",
            },
            {
                id: "B",
                text: "fiore-fioraio",
                correct: true,
                explanation:
                    "«Fioraio» deriva realmente da «fiore» mediante l'aggiunta di un suffisso. Indica infatti una persona che vende o coltiva fiori.",
            },
            {
                id: "C",
                text: "addio-addiaccio",
                correct: false,
                explanation:
                    "La somiglianza fonetica non costituisce un rapporto di derivazione. «Addiaccio» non è formato derivando regolarmente dal sostantivo «addio».",
            },
            {
                id: "D",
                text: "foca-focaccia",
                correct: false,
                explanation:
                    "«Focaccia» non deriva da «foca». Le due parole si assomigliano soltanto nella forma e non condividono un rapporto derivativo.",
            },
        ],
    },

    {
        id: 39,
        area: "linguistica-logica",
        category: "lessico",
        difficulty: 3,
        question:
            "Se qualcosa viene definito “pleonastico”, si intende dire che è:",
        answers: [
            {
                id: "A",
                text: "insolito",
                correct: false,
                explanation:
                    "«Insolito» significa non abituale o raro. Non corrisponde al significato di «pleonastico».",
            },
            {
                id: "B",
                text: "superfluo",
                correct: true,
                explanation:
                    "«Pleonastico» indica qualcosa di ridondante o non necessario, perché aggiunge elementi che non servono realmente al significato. Può quindi essere reso con «superfluo».",
            },
            {
                id: "C",
                text: "un avverbio",
                correct: false,
                explanation:
                    "«Pleonastico» è un aggettivo, non il nome di una parte del discorso. Può essere utilizzato per descrivere una parola o un'espressione ridondante.",
            },
            {
                id: "D",
                text: "problematico",
                correct: false,
                explanation:
                    "«Problematico» significa difficile, complesso o caratterizzato da problemi. Non equivale a «pleonastico».",
            },
        ],
    },

    {
        id: 40,
        area: "linguistica-logica",
        category: "lessico-contrari",
        difficulty: 3,
        question:
            "È un contrario di “deplorevole”:",
        answers: [
            {
                id: "A",
                text: "reprensibile",
                correct: false,
                explanation:
                    "«Reprensibile» significa meritevole di rimprovero o censura. È quindi semanticamente vicino a «deplorevole», non il suo contrario.",
            },
            {
                id: "B",
                text: "riprovevole",
                correct: false,
                explanation:
                    "«Riprovevole» indica qualcosa degno di disapprovazione e condanna. È un sinonimo di «deplorevole».",
            },
            {
                id: "C",
                text: "biasimevole",
                correct: false,
                explanation:
                    "«Biasimevole» significa che merita biasimo o critica. Anche questa parola appartiene allo stesso campo semantico di «deplorevole».",
            },
            {
                id: "D",
                text: "encomiabile",
                correct: true,
                explanation:
                    "«Encomiabile» significa degno di elogio, approvazione o lode. È quindi il contrario di «deplorevole», che indica qualcosa degno di biasimo o condanna.",
            },
        ],
    },
    {
        id: 41,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 3,
        question:
            "Qual è il vero nome di Italo Svevo?",
        answers: [
            {
                id: "A",
                text: "Aron Hector Schmitz",
                correct: true,
                explanation:
                    "Italo Svevo è lo pseudonimo letterario di Aron Hector Schmitz. Lo scrittore triestino scelse questo nome d'arte per richiamare simbolicamente la doppia componente italiana e germanica della propria formazione culturale.",
            },
            {
                id: "B",
                text: "Italo Svevo è il nome vero",
                correct: false,
                explanation:
                    "Italo Svevo è uno pseudonimo, non il nome anagrafico dello scrittore. Il suo vero nome era Aron Hector Schmitz.",
            },
            {
                id: "C",
                text: "Carlo Slataper",
                correct: false,
                explanation:
                    "Scipio Slataper fu un altro importante scrittore triestino del primo Novecento. Carlo Slataper non è il vero nome di Italo Svevo.",
            },
            {
                id: "D",
                text: "Italo Moravia",
                correct: false,
                explanation:
                    "Italo Moravia non è il nome anagrafico di Svevo. Il nome «Moravia» richiama invece Alberto Moravia, pseudonimo di Alberto Pincherle.",
            },
        ],
    },

    {
        id: 42,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-italiana",
        difficulty: 2,
        question:
            "Quante sono le regioni italiane?",
        answers: [
            {
                id: "A",
                text: "20",
                correct: true,
                explanation:
                    "L'Italia è suddivisa amministrativamente in 20 regioni. Cinque di esse sono regioni a statuto speciale: Sicilia, Sardegna, Valle d'Aosta, Trentino-Alto Adige/Südtirol e Friuli Venezia Giulia.",
            },
            {
                id: "B",
                text: "15",
                correct: false,
                explanation:
                    "15 non è il numero complessivo delle regioni italiane. È invece il numero delle regioni a statuto ordinario, mentre altre 5 hanno statuto speciale.",
            },
            {
                id: "C",
                text: "21",
                correct: false,
                explanation:
                    "Le regioni italiane sono 20, non 21. Il Trentino-Alto Adige/Südtirol costituisce una sola regione, pur comprendendo le due province autonome di Trento e Bolzano.",
            },
            {
                id: "D",
                text: "19",
                correct: false,
                explanation:
                    "Il numero corretto è 20. Tutte le regioni, sia a statuto ordinario sia a statuto speciale, devono essere comprese nel conteggio.",
            },
        ],
    },

    {
        id: 43,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-generale",
        difficulty: 2,
        question:
            "Quali sono i nomi dei continenti?",
        answers: [
            {
                id: "A",
                text: "Asia, Africa, Americhe e Antartide",
                correct: false,
                explanation:
                    "L'elenco è incompleto perché mancano Europa e Oceania. Non comprende quindi tutti i continenti secondo la classificazione adottata dal quesito.",
            },
            {
                id: "B",
                text: "Europa, Asia, Australia, Americhe e Antartide",
                correct: false,
                explanation:
                    "L'elenco non comprende l'Africa e utilizza «Australia» al posto dell'insieme geografico più ampio indicato come Oceania nella classificazione proposta dalla prova.",
            },
            {
                id: "C",
                text: "Italia, Francia, Germania, Austria, Spagna",
                correct: false,
                explanation:
                    "Questi sono Stati europei, non continenti. Appartengono tutti al continente europeo.",
            },
            {
                id: "D",
                text: "Europa, Asia, Africa, Oceania, Americhe e Antartide",
                correct: true,
                explanation:
                    "È l'elenco completo secondo la classificazione a sei continenti adottata nel quesito: Europa, Asia, Africa, Oceania, Americhe e Antartide.",
            },
        ],
    },

    {
        id: 44,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-romana",
        difficulty: 2,
        question:
            "Quando e da chi fu fondata Roma?",
        answers: [
            {
                id: "A",
                text: "nel I sec. d.C. da Romolo e Remo",
                correct: false,
                explanation:
                    "La tradizione colloca la fondazione di Roma molti secoli prima, nell'VIII secolo a.C. Inoltre attribuisce a Romolo il ruolo di fondatore e primo re.",
            },
            {
                id: "B",
                text: "nel I sec. a.C. da Enea",
                correct: false,
                explanation:
                    "Enea appartiene al ciclo leggendario delle origini del popolo romano, ma non è considerato il fondatore diretto di Roma. La tradizione attribuisce la fondazione a Romolo.",
            },
            {
                id: "C",
                text: "nel 753 a.C. da Romolo",
                correct: true,
                explanation:
                    "Secondo la tradizione romana, Roma fu fondata da Romolo il 21 aprile del 753 a.C. Si tratta della data tradizionale, non di un evento documentabile con assoluta precisione storica.",
            },
            {
                id: "D",
                text: "intorno al 500 a.C. da Giulio Cesare",
                correct: false,
                explanation:
                    "Giulio Cesare visse nel I secolo a.C., molti secoli dopo la data tradizionale della fondazione di Roma. Non fu quindi il fondatore della città.",
            },
        ],
    },

    {
        id: 45,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-contemporanea",
        difficulty: 2,
        question:
            "Quale evento è considerato causa scatenante della Prima Guerra Mondiale?",
        answers: [
            {
                id: "A",
                text: "l’avvento del Nazismo in Germania nel 1933",
                correct: false,
                explanation:
                    "Il nazismo arrivò al potere in Germania nel 1933, quasi vent'anni dopo l'inizio della Prima guerra mondiale. È invece strettamente collegato agli eventi che precedettero la Seconda guerra mondiale.",
            },
            {
                id: "B",
                text: "il genocidio degli Armeni a partire dal 1915",
                correct: false,
                explanation:
                    "Il genocidio degli Armeni ebbe luogo durante la Prima guerra mondiale e quindi non può esserne considerato la causa scatenante.",
            },
            {
                id: "C",
                text: "l’assassinio a Sarajevo dell’Arciduca Francesco Ferdinando nel 1914",
                correct: true,
                explanation:
                    "L'assassinio dell'arciduca Francesco Ferdinando d'Asburgo a Sarajevo il 28 giugno 1914 è considerato l'evento scatenante della Prima guerra mondiale. Le cause profonde comprendevano però rivalità imperialistiche, nazionalismi, corsa agli armamenti e sistema delle alleanze.",
            },
            {
                id: "D",
                text: "la Rivoluzione Russa del 1917",
                correct: false,
                explanation:
                    "La Rivoluzione russa avvenne quando la guerra era già iniziata da circa tre anni. Ebbe conseguenze importanti sul conflitto, ma non ne fu la causa iniziale.",
            },
        ],
    },

    {
        id: 46,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-medievale",
        difficulty: 2,
        question:
            "Quanti canti ci sono nella Divina Commedia di Dante Alighieri?",
        answers: [
            {
                id: "A",
                text: "99 canti",
                correct: false,
                explanation:
                    "Le tre cantiche non hanno complessivamente 99 canti. Inferno ne possiede 34, mentre Purgatorio e Paradiso ne hanno 33 ciascuno.",
            },
            {
                id: "B",
                text: "60 canti",
                correct: false,
                explanation:
                    "Il numero è troppo basso. La Divina Commedia è un poema molto ampio organizzato complessivamente in 100 canti.",
            },
            {
                id: "C",
                text: "100 canti",
                correct: true,
                explanation:
                    "La Divina Commedia è composta da 100 canti: 34 nell'Inferno e 33 rispettivamente nel Purgatorio e nel Paradiso. Il numero 100 possiede anche un forte valore simbolico di perfezione e completezza.",
            },
            {
                id: "D",
                text: "3: Inferno, Purgatorio e Paradiso",
                correct: false,
                explanation:
                    "Inferno, Purgatorio e Paradiso sono le tre cantiche dell'opera, non i tre canti. Ogni cantica è composta da numerosi canti.",
            },
        ],
    },

    {
        id: 47,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-risorgimento",
        difficulty: 2,
        question:
            "In che anno Vittorio Emanuele II viene proclamato re d'Italia?",
        answers: [
            {
                id: "A",
                text: "1871",
                correct: false,
                explanation:
                    "Nel 1871 Roma divenne capitale del Regno d'Italia. Vittorio Emanuele II era già stato proclamato re d'Italia dieci anni prima.",
            },
            {
                id: "B",
                text: "1861",
                correct: true,
                explanation:
                    "Nel 1861 fu proclamato il Regno d'Italia e Vittorio Emanuele II assunse il titolo di re d'Italia. La proclamazione avvenne il 17 marzo.",
            },
            {
                id: "C",
                text: "1814",
                correct: false,
                explanation:
                    "Il 1814 appartiene alla fase finale dell'età napoleonica e precede di molti decenni il processo conclusivo dell'unificazione italiana.",
            },
            {
                id: "D",
                text: "1789",
                correct: false,
                explanation:
                    "Il 1789 è l'anno d'inizio della Rivoluzione francese. Vittorio Emanuele II non era ancora nato.",
            },
        ],
    },

    {
        id: 48,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "educazione-civica-sviluppo-sostenibile",
        difficulty: 3,
        question:
            "Cos’è l’Agenda 2030?",
        answers: [
            {
                id: "A",
                text: "è una proposta di legge per favorire la mobilità degli studenti europei nel decennio post-pandemico",
                correct: false,
                explanation:
                    "L'Agenda 2030 non è una legge europea sulla mobilità studentesca. È un programma internazionale molto più ampio dedicato allo sviluppo sostenibile.",
            },
            {
                id: "B",
                text: "è un programma d’azione per lo Sviluppo Sostenibile sottoscritto dall’ONU nel 2015",
                correct: true,
                explanation:
                    "L'Agenda 2030 per lo sviluppo sostenibile è stata adottata nel 2015 dagli Stati membri delle Nazioni Unite. Comprende 17 Obiettivi di sviluppo sostenibile, dedicati a temi ambientali, sociali ed economici.",
            },
            {
                id: "C",
                text: "è un programma di ricerca finalizzato alla gestione della missione spaziale internazionale del 2030",
                correct: false,
                explanation:
                    "L'Agenda 2030 non riguarda una missione spaziale. I suoi obiettivi affrontano temi come povertà, istruzione, salute, uguaglianza, clima e sostenibilità.",
            },
            {
                id: "D",
                text: "è un’agenda stilata dai governatori americani per raggiungere degli obiettivi democratici per le elezioni del 2030 negli U.S.A.",
                correct: false,
                explanation:
                    "L'Agenda 2030 è un'iniziativa delle Nazioni Unite e coinvolge la comunità internazionale, non soltanto gli Stati Uniti o un singolo partito politico.",
            },
        ],
    },

    {
        id: 49,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "preistoria",
        difficulty: 2,
        question:
            "In quante e quali fasi si suddivide la Preistoria?",
        answers: [
            {
                id: "A",
                text: "tre: età della Pietra, del Ferro e del Fuoco",
                correct: false,
                explanation:
                    "Questa non è la suddivisione indicata nella periodizzazione scolastica proposta dal quesito. Inoltre «età del Fuoco» non costituisce una fase convenzionale della Preistoria.",
            },
            {
                id: "B",
                text: "non si può suddividere in fasi",
                correct: false,
                explanation:
                    "La Preistoria viene convenzionalmente suddivisa dagli studiosi in diverse fasi sulla base dei cambiamenti tecnologici, economici e culturali.",
            },
            {
                id: "C",
                text: "tre: Paleolitico, Mesolitico e Neolitico",
                correct: true,
                explanation:
                    "Nella classificazione adottata dal quesito, l'età della pietra preistorica viene distinta in Paleolitico, Mesolitico e Neolitico. Il passaggio tra queste fasi è associato a importanti cambiamenti nelle tecniche e nelle forme di sussistenza.",
            },
            {
                id: "D",
                text: "due: Paleolitico e Neolitico",
                correct: false,
                explanation:
                    "Questa suddivisione trascura il Mesolitico, fase intermedia tra Paleolitico e Neolitico prevista dalla classificazione utilizzata nella prova.",
            },
        ],
    },

    {
        id: 50,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-delle-origini",
        difficulty: 3,
        question:
            "Qual è il testo poetico in volgare con cui si fa iniziare ufficialmente la letteratura italiana?",
        answers: [
            {
                id: "A",
                text: "La Vita nova di Dante Alighieri",
                correct: false,
                explanation:
                    "La Vita nova è un'opera di Dante della fine del XIII secolo. La tradizione letteraria in volgare italiano era già iniziata diversi decenni prima.",
            },
            {
                id: "B",
                text: "La Divina Commedia di Dante Alighieri",
                correct: false,
                explanation:
                    "La Divina Commedia è una delle opere fondamentali della letteratura italiana, ma appartiene al Trecento e non rappresenta il primo testo poetico della tradizione in volgare.",
            },
            {
                id: "C",
                text: "Il cosiddetto “Placito di Capua”",
                correct: false,
                explanation:
                    "Il Placito capuano del 960 è una delle prime testimonianze scritte del volgare italiano, ma è un documento giuridico e non un testo poetico.",
            },
            {
                id: "D",
                text: "Il Cantico delle creature di Francesco d’Assisi",
                correct: true,
                explanation:
                    "Il Cantico delle creature, o Cantico di frate Sole, composto da Francesco d'Assisi nel XIII secolo, è tradizionalmente considerato uno dei primi grandi testi poetici della letteratura italiana in volgare.",
            },
        ],
    },

    {
        id: 51,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-medievale",
        difficulty: 2,
        question:
            "Quando nasce il Sacro Romano Impero?",
        answers: [
            {
                id: "A",
                text: "nel 500 con l’unione dei regni romano-barbarici",
                correct: false,
                explanation:
                    "Nel VI secolo esistevano diversi regni romano-barbarici sorti dopo la caduta dell'Impero romano d'Occidente. Non è però questo l'evento tradizionalmente associato alla nascita del Sacro Romano Impero.",
            },
            {
                id: "B",
                text: "con l’elezione del Papa Leone IV",
                correct: false,
                explanation:
                    "La nascita del Sacro Romano Impero non viene collegata all'elezione di Leone IV. Il pontefice protagonista dell'incoronazione imperiale di Carlo Magno fu Leone III.",
            },
            {
                id: "C",
                text: "con l’incoronazione di Carlo Magno a Roma nell’800",
                correct: true,
                explanation:
                    "La tradizione colloca la nascita del Sacro Romano Impero nell'incoronazione di Carlo Magno come imperatore da parte di papa Leone III, avvenuta a Roma nella notte di Natale dell'800.",
            },
            {
                id: "D",
                text: "quando Carlo Magno diventa Re dei Franchi nel 771",
                correct: false,
                explanation:
                    "Carlo Magno divenne re dei Franchi prima di essere incoronato imperatore. È l'incoronazione imperiale dell'800 a rappresentare il passaggio decisivo indicato dal quesito.",
            },
        ],
    },

    {
        id: 52,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-moderna",
        difficulty: 3,
        question:
            "Cosa si considera per Riforma protestante:",
        answers: [
            {
                id: "A",
                text: "le riforme proposte in seno ai concili vaticani della Chiesa di Roma fra Settecento e Ottocento",
                correct: false,
                explanation:
                    "La Riforma protestante appartiene al XVI secolo e precede di molto il periodo indicato. Fu un movimento religioso che mise in discussione aspetti fondamentali della Chiesa cattolica dell'epoca.",
            },
            {
                id: "B",
                text: "le proteste degli ordini mendicanti contro la corruzione della Chiesa di Roma",
                correct: false,
                explanation:
                    "Gli ordini mendicanti nacquero nel Medioevo e furono protagonisti di movimenti di rinnovamento religioso, ma non definiscono la Riforma protestante del Cinquecento.",
            },
            {
                id: "C",
                text: "le proteste degli aristocratici che imperversano in Europa nel Cinquecento contro Carlo V",
                correct: false,
                explanation:
                    "Le tensioni politiche con Carlo V ebbero un ruolo nel contesto della Riforma, ma il movimento non può essere ridotto alle proteste dell'aristocrazia contro l'imperatore.",
            },
            {
                id: "D",
                text: "le 95 tesi contro la corruzione della Chiesa di Roma pubblicate dal monaco tedesco Martin Lutero nel 1517",
                correct: true,
                explanation:
                    "Il 1517 e le 95 tesi attribuite a Martin Lutero sono tradizionalmente considerati il punto di partenza della Riforma protestante. Lutero criticò in particolare la pratica delle indulgenze e successivamente sviluppò una più ampia critica teologica alla Chiesa di Roma.",
            },
        ],
    },

    {
        id: 53,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-medievale",
        difficulty: 3,
        question:
            "Il titolo Decameron di Giovanni Boccaccio significa:",
        answers: [
            {
                id: "A",
                text: "dieci amori",
                correct: false,
                explanation:
                    "Il titolo non indica dieci storie d'amore. Nell'opera sono presenti novelle di argomenti molto diversi, comprese vicende amorose, comiche e tragiche.",
            },
            {
                id: "B",
                text: "dieci racconti",
                correct: false,
                explanation:
                    "Le novelle complessive sono cento. Il numero dieci nel titolo riguarda invece le giornate in cui viene organizzata la narrazione.",
            },
            {
                id: "C",
                text: "cento novelle",
                correct: false,
                explanation:
                    "Il Decameron contiene effettivamente cento novelle, ma il significato letterale del titolo non è «cento novelle».",
            },
            {
                id: "D",
                text: "dieci giornate",
                correct: true,
                explanation:
                    "«Decameron» deriva dal greco e significa letteralmente «dieci giornate». L'opera è costruita intorno a dieci giovani che raccontano novelle durante dieci giornate narrative.",
            },
        ],
    },

    {
        id: 54,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-rinascimentale",
        difficulty: 2,
        question:
            "Nell’Orlando furioso di Ludovico Ariosto, Orlando diventa folle per amore di:",
        answers: [
            {
                id: "A",
                text: "Angelica, pastorella di fede Cristiana",
                correct: false,
                explanation:
                    "Angelica non è una pastorella cristiana. Nell'opera è una principessa orientale proveniente dal Catai.",
            },
            {
                id: "B",
                text: "Angelica, principessa del Catai",
                correct: true,
                explanation:
                    "Orlando è innamorato di Angelica, principessa del Catai. Quando scopre il suo amore per Medoro, perde il senno e impazzisce: da questa vicenda deriva uno dei nuclei fondamentali del poema.",
            },
            {
                id: "C",
                text: "Alcina, maga malvagia e sorella di Morgana",
                correct: false,
                explanation:
                    "Alcina è una maga presente nel poema e coinvolta soprattutto nelle vicende di Ruggiero. Non è la causa della follia amorosa di Orlando.",
            },
            {
                id: "D",
                text: "nessuno, diventa folle a causa di una pozione magica",
                correct: false,
                explanation:
                    "La follia di Orlando non deriva da una pozione. È provocata dalla scoperta della relazione amorosa tra Angelica e Medoro.",
            },
        ],
    },

    {
        id: 55,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-ottocento",
        difficulty: 2,
        question:
            "Nell’ode Il cinque maggio Alessandro Manzoni celebra:",
        answers: [
            {
                id: "A",
                text: "il compleanno di Napoleone",
                correct: false,
                explanation:
                    "Il titolo non indica il compleanno di Napoleone. Il 5 maggio è la data della sua morte.",
            },
            {
                id: "B",
                text: "il matrimonio di Renzo e Lucia",
                correct: false,
                explanation:
                    "Renzo e Lucia sono protagonisti de I promessi sposi. Il cinque maggio è invece un'ode dedicata a Napoleone Bonaparte.",
            },
            {
                id: "C",
                text: "la propria conversione religiosa",
                correct: false,
                explanation:
                    "La conversione religiosa di Manzoni ebbe grande influenza sulla sua produzione, ma non è l'evento celebrato nell'ode.",
            },
            {
                id: "D",
                text: "la morte di Napoleone",
                correct: true,
                explanation:
                    "Manzoni compose Il cinque maggio dopo aver appreso della morte di Napoleone Bonaparte, avvenuta il 5 maggio 1821 a Sant'Elena. L'ode riflette sulla grandezza storica di Napoleone e sul giudizio della Provvidenza.",
            },
        ],
    },

    {
        id: 56,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-medievale",
        difficulty: 2,
        question:
            "Quale periodo storico si intende con il termine Medioevo:",
        answers: [
            {
                id: "A",
                text: "dall’anno 100 all’anno 1000",
                correct: false,
                explanation:
                    "Queste date non rappresentano la periodizzazione tradizionale del Medioevo. Il periodo inizia convenzionalmente nel V secolo.",
            },
            {
                id: "B",
                text: "dalla nascita di Gesù Cristo alla Peste del Trecento",
                correct: false,
                explanation:
                    "La nascita di Cristo non viene normalmente utilizzata come inizio del Medioevo. Essa appartiene ancora all'età antica.",
            },
            {
                id: "C",
                text: "dalla nascita del Cristianesimo fino alla nascita dell’Islam",
                correct: false,
                explanation:
                    "Questi eventi non costituiscono i limiti cronologici convenzionali dell'intero Medioevo.",
            },
            {
                id: "D",
                text: "dalla caduta dell’Impero Romano d’Occidente (476) alla scoperta dell’America",
                correct: true,
                explanation:
                    "Secondo una periodizzazione scolastica tradizionale, il Medioevo va dalla caduta dell'Impero romano d'Occidente nel 476 alla scoperta dell'America nel 1492. Si tratta di date convenzionali utilizzate per delimitare grandi periodi storici.",
            },
        ],
    },

    {
        id: 57,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-contemporanea",
        difficulty: 2,
        question:
            "Quando e dove gli Stati Uniti lanciano la bomba atomica?",
        answers: [
            {
                id: "A",
                text: "Nel 1935 in Giappone",
                correct: false,
                explanation:
                    "Nel 1935 la Seconda guerra mondiale non era ancora iniziata in Europa e le armi atomiche non erano ancora disponibili.",
            },
            {
                id: "B",
                text: "Nel 1975 in Russia",
                correct: false,
                explanation:
                    "Gli Stati Uniti non lanciarono bombe atomiche sulla Russia nel 1975. I bombardamenti atomici in guerra avvennero nel 1945 contro il Giappone.",
            },
            {
                id: "C",
                text: "Nel 1945 a Hiroshima e Nagasaki",
                correct: true,
                explanation:
                    "Gli Stati Uniti sganciarono una bomba atomica su Hiroshima il 6 agosto 1945 e una seconda su Nagasaki il 9 agosto. Furono gli unici impieghi di armi nucleari in guerra fino a oggi.",
            },
            {
                id: "D",
                text: "gli Stati Uniti non hanno mai lanciato la bomba atomica",
                correct: false,
                explanation:
                    "L'affermazione è storicamente errata. Le bombe atomiche furono utilizzate dagli Stati Uniti contro Hiroshima e Nagasaki durante la fase finale della Seconda guerra mondiale.",
            },
        ],
    },

    {
        id: 58,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 2,
        question:
            "Gabriele d’Annunzio ha scritto il romanzo dal titolo:",
        answers: [
            {
                id: "A",
                text: "La noia",
                correct: false,
                explanation:
                    "La noia è un romanzo di Alberto Moravia, pubblicato nel 1960. Non appartiene alla produzione dannunziana.",
            },
            {
                id: "B",
                text: "Alcyone",
                correct: false,
                explanation:
                    "Alcyone è un'importante raccolta poetica di D'Annunzio e costituisce il terzo libro delle Laudi. Non è però un romanzo.",
            },
            {
                id: "C",
                text: "Il piacere",
                correct: true,
                explanation:
                    "Il piacere è un romanzo di Gabriele D'Annunzio pubblicato nel 1889. Il protagonista Andrea Sperelli incarna diversi aspetti dell'estetismo e del decadentismo dannunziano.",
            },
            {
                id: "D",
                text: "non ha scritto romanzi",
                correct: false,
                explanation:
                    "D'Annunzio fu autore anche di numerosi romanzi, tra cui Il piacere, L'innocente e Il trionfo della morte.",
            },
        ],
    },

    {
        id: 59,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-ottocento",
        difficulty: 2,
        question:
            "Quale opera di Giacomo Leopardi è intitolata ad un fiore?",
        answers: [
            {
                id: "A",
                text: "Il bucaneve",
                correct: false,
                explanation:
                    "Il bucaneve non è il titolo dell'opera leopardiana indicata dal quesito.",
            },
            {
                id: "B",
                text: "non ha intitolato nessuna opera ad un fiore",
                correct: false,
                explanation:
                    "Leopardi ha intitolato uno dei suoi più celebri componimenti proprio a un fiore: La ginestra.",
            },
            {
                id: "C",
                text: "Il gelsomino notturno",
                correct: false,
                explanation:
                    "Il gelsomino notturno è una poesia di Giovanni Pascoli, non di Giacomo Leopardi.",
            },
            {
                id: "D",
                text: "La ginestra",
                correct: true,
                explanation:
                    "La ginestra, o Il fiore del deserto, è uno degli ultimi e più importanti componimenti di Giacomo Leopardi. Il fiore che cresce sulle pendici del Vesuvio diventa simbolo della fragilità umana e della dignità solidale di fronte alla natura.",
            },
        ],
    },

    {
        id: 60,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "unione-europea",
        difficulty: 3,
        question:
            "Quando nasce l’Unione Europea?",
        answers: [
            {
                id: "A",
                text: "con il Trattato di Maastricht nel 1992",
                correct: true,
                explanation:
                    "La risposta indicata dalla prova è il Trattato di Maastricht, firmato nel 1992, che istituì formalmente l'Unione Europea. Il trattato entrò poi in vigore il 1° novembre 1993: è utile ricordare la distinzione tra anno della firma e anno dell'entrata in vigore.",
            },
            {
                id: "B",
                text: "ancora non è stata istituita",
                correct: false,
                explanation:
                    "L'Unione Europea esiste ed è il risultato di un lungo processo di integrazione iniziato dalle precedenti Comunità europee.",
            },
            {
                id: "C",
                text: "con la fine della Seconda Guerra Mondiale",
                correct: false,
                explanation:
                    "La fine della Seconda guerra mondiale nel 1945 favorì politicamente il processo di integrazione europea, ma l'Unione Europea non nacque formalmente in quell'anno.",
            },
            {
                id: "D",
                text: "con i Trattati di Roma nel 1957",
                correct: false,
                explanation:
                    "I Trattati di Roma del 1957 istituirono la Comunità Economica Europea e l'Euratom, tappe fondamentali del processo di integrazione. L'Unione Europea propriamente detta viene invece collegata al Trattato di Maastricht.",
            },
        ],
    },
    {
        id: 61,
        area: "cultura-matematico-scientifica",
        category: "matematica-insiemi-numerici",
        difficulty: 2,
        question:
            "Quanti numeri interi sono compresi tra 1/2 e 1/6?",
        answers: [
            {
                id: "A",
                text: "3",
                correct: false,
                explanation:
                    "1/2 corrisponde a 0,5 e 1/6 a circa 0,167. Nell'intervallo compreso tra questi due valori non sono presenti tre numeri interi.",
            },
            {
                id: "B",
                text: "5",
                correct: false,
                explanation:
                    "L'intervallo considerato è interamente compreso tra 0 e 1. Non può quindi contenere cinque numeri interi.",
            },
            {
                id: "C",
                text: "nessuno",
                correct: true,
                explanation:
                    "1/6 ≈ 0,167 e 1/2 = 0,5. Non esiste alcun numero intero maggiore di 1/6 e contemporaneamente minore di 1/2, quindi la risposta è «nessuno».",
            },
            {
                id: "D",
                text: "1",
                correct: false,
                explanation:
                    "Il numero intero più vicino sarebbe 0, ma 0 è minore sia di 1/6 sia di 1/2 e quindi non si trova tra le due frazioni. Anche 1 è maggiore di entrambe.",
            },
        ],
    },

    {
        id: 62,
        area: "cultura-matematico-scientifica",
        category: "fisica-stati-della-materia",
        difficulty: 2,
        question:
            "I gas:",
        answers: [
            {
                id: "A",
                text: "non hanno né forma né volume proprio",
                correct: true,
                explanation:
                    "Un gas non possiede né una forma propria né un volume proprio. Tende infatti a occupare tutto il volume disponibile del recipiente che lo contiene, assumendone anche la forma.",
            },
            {
                id: "B",
                text: "non hanno massa",
                correct: false,
                explanation:
                    "I gas sono costituiti da particelle e possiedono massa. Per esempio, una bombola piena di gas pesa più della stessa bombola vuota.",
            },
            {
                id: "C",
                text: "possono cambiare forma ma non volume",
                correct: false,
                explanation:
                    "Questa descrizione è più vicina al comportamento dei liquidi, che hanno volume proprio ma non forma propria. I gas possono invece modificare sia forma sia volume.",
            },
            {
                id: "D",
                text: "possono diminuire il loro volume ma non cambiare la loro forma",
                correct: false,
                explanation:
                    "I gas sono comprimibili e possono diminuire il proprio volume, ma non possiedono nemmeno una forma propria. Assumono sempre la forma del recipiente.",
            },
        ],
    },

    {
        id: 63,
        area: "cultura-matematico-scientifica",
        category: "biologia-ecologia",
        difficulty: 3,
        question:
            "Che tipologia di relazione esiste tra due specie in simbiosi?",
        answers: [
            {
                id: "A",
                text: "Svantaggiosa per entrambe",
                correct: false,
                explanation:
                    "Una relazione sfavorevole a entrambe le specie sarebbe più vicina a una situazione di competizione. Non è la relazione indicata come corretta dalla prova.",
            },
            {
                id: "B",
                text: "Vantaggiosa per entrambe",
                correct: true,
                explanation:
                    "Nella formulazione scolastica adottata dal quesito, la simbiosi è intesa come una relazione stretta nella quale entrambe le specie traggono vantaggio. Un esempio classico è l'associazione tra alcuni funghi e alghe nei licheni.",
            },
            {
                id: "C",
                text: "Svantaggiosa per una delle due",
                correct: false,
                explanation:
                    "Una relazione in cui un organismo trae beneficio causando un danno all'altro è tipicamente descritta come parassitismo. Non corrisponde alla risposta prevista qui per «simbiosi».",
            },
            {
                id: "D",
                text: "Di competizione",
                correct: false,
                explanation:
                    "Nella competizione due organismi utilizzano risorse limitate comuni e possono danneggiarsi reciprocamente. Non rappresenta la relazione vantaggiosa richiesta dal quesito.",
            },
        ],
    },

    {
        id: 64,
        area: "cultura-matematico-scientifica",
        category: "chimica-formule",
        difficulty: 2,
        question:
            "Qual è la formula chimica del metano?",
        answers: [
            {
                id: "A",
                text: "CH₄",
                correct: true,
                explanation:
                    "Il metano ha formula CH₄: una molecola è formata da un atomo di carbonio legato a quattro atomi di idrogeno. È il più semplice degli idrocarburi.",
            },
            {
                id: "B",
                text: "H₂O",
                correct: false,
                explanation:
                    "H₂O è la formula chimica dell'acqua, costituita da due atomi di idrogeno e uno di ossigeno.",
            },
            {
                id: "C",
                text: "H₂",
                correct: false,
                explanation:
                    "H₂ rappresenta l'idrogeno molecolare. Non contiene carbonio e quindi non può essere la formula del metano.",
            },
            {
                id: "D",
                text: "N₂",
                correct: false,
                explanation:
                    "N₂ rappresenta l'azoto molecolare, formato da due atomi di azoto. Non ha relazione con la struttura del metano.",
            },
        ],
    },

    {
        id: 65,
        area: "cultura-matematico-scientifica",
        category: "biologia-nutrizione",
        difficulty: 2,
        question:
            "La mancanza di vitamina C nella dieta può causare:",
        answers: [
            {
                id: "A",
                text: "carie",
                correct: false,
                explanation:
                    "La carie dentale è legata soprattutto all'azione di batteri della bocca e alla presenza frequente di zuccheri fermentabili. Non è la malattia tipicamente provocata dalla carenza di vitamina C.",
            },
            {
                id: "B",
                text: "scorbuto",
                correct: true,
                explanation:
                    "Una grave e prolungata carenza di vitamina C può provocare lo scorbuto. Tra le manifestazioni possono comparire debolezza, problemi alle gengive e difficoltà nella normale formazione del collagene.",
            },
            {
                id: "C",
                text: "pancreatite",
                correct: false,
                explanation:
                    "La pancreatite è un'infiammazione del pancreas e può avere diverse cause. Non è la patologia caratteristica della carenza di vitamina C.",
            },
            {
                id: "D",
                text: "appedicite",
                correct: false,
                explanation:
                    "L'appendicite è un'infiammazione dell'appendice e non deriva dalla mancanza di vitamina C. La malattia da carenza associata alla vitamina C è lo scorbuto.",
            },
        ],
    },

    {
        id: 66,
        area: "cultura-matematico-scientifica",
        category: "chimica-legami",
        difficulty: 3,
        question:
            "Il legame che lega il cloro all'idrogeno nell’HCl è:",
        answers: [
            {
                id: "A",
                text: "metallico",
                correct: false,
                explanation:
                    "Il legame metallico è tipico degli atomi metallici in strutture nelle quali gli elettroni sono delocalizzati. Né idrogeno né cloro formano in HCl un legame di questo tipo.",
            },
            {
                id: "B",
                text: "covalente puro",
                correct: false,
                explanation:
                    "Un legame covalente puro o apolare prevede una condivisione degli elettroni sostanzialmente uniforme. In HCl il cloro attira maggiormente gli elettroni rispetto all'idrogeno.",
            },
            {
                id: "C",
                text: "covalente polare",
                correct: true,
                explanation:
                    "Il legame H-Cl è covalente polare perché gli elettroni vengono condivisi, ma non in modo uniforme. Il cloro è più elettronegativo dell'idrogeno e attira maggiormente verso di sé la coppia elettronica.",
            },
            {
                id: "D",
                text: "ionico",
                correct: false,
                explanation:
                    "Nel legame ionico avviene una sostanziale formazione di ioni mediante trasferimento di elettroni. Nella molecola HCl il legame tra H e Cl è invece covalente polare.",
            },
        ],
    },

    {
        id: 67,
        area: "cultura-matematico-scientifica",
        category: "biologia-metabolismo",
        difficulty: 3,
        question:
            "Cosa si intende per metabolismo?",
        answers: [
            {
                id: "A",
                text: "il complesso di trasformazioni chimiche finalizzate ad estrapolare energia dagli alimenti",
                correct: true,
                explanation:
                    "Questa è la risposta indicata dalla prova. Il metabolismo comprende le trasformazioni chimiche che avvengono nell'organismo e che permettono, tra le altre cose, di ricavare e utilizzare energia dalle sostanze nutritive.",
            },
            {
                id: "B",
                text: "i processi che permettono alla materia di rimanere immutata",
                correct: false,
                explanation:
                    "Il metabolismo comporta proprio trasformazioni delle sostanze. La materia coinvolta nelle reazioni metaboliche non rimane quindi chimicamente immutata.",
            },
            {
                id: "C",
                text: "i processi che permettono alla materia di cambiare la propria forma",
                correct: false,
                explanation:
                    "Un semplice cambiamento di forma fisica non definisce il metabolismo. Si tratta invece di una rete di reazioni chimiche che modifica le molecole all'interno degli organismi.",
            },
            {
                id: "D",
                text: "i meccanismi che regolano il funzionamento degli organi",
                correct: false,
                explanation:
                    "La regolazione degli organi coinvolge sistemi nervosi, endocrini e altri meccanismi fisiologici. Il metabolismo indica più specificamente l'insieme delle trasformazioni chimiche dell'organismo.",
            },
        ],
    },

    {
        id: 68,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria",
        difficulty: 2,
        question:
            "Se α e β sono gli angoli acuti di un triangolo rettangolo, allora",
        answers: [
            {
                id: "A",
                text: "α-β=0°",
                correct: false,
                explanation:
                    "Questa uguaglianza significherebbe α=β, situazione che si verifica soltanto in un triangolo rettangolo isoscele. Non vale per tutti i triangoli rettangoli.",
            },
            {
                id: "B",
                text: "α+β=90°",
                correct: true,
                explanation:
                    "La somma degli angoli interni di un triangolo è 180°. Poiché in un triangolo rettangolo un angolo misura 90°, gli altri due devono avere complessivamente 180°-90°=90°.",
            },
            {
                id: "C",
                text: "α+β=180°",
                correct: false,
                explanation:
                    "Se i due angoli acuti sommassero 180°, aggiungendo l'angolo retto si arriverebbe a 270°, impossibile per un triangolo.",
            },
            {
                id: "D",
                text: "α=45° e β=45°",
                correct: false,
                explanation:
                    "Questa situazione è possibile soltanto per un particolare triangolo rettangolo, quello isoscele. In generale i due angoli possono avere misure differenti, purché la loro somma sia 90°.",
            },
        ],
    },

    {
        id: 69,
        area: "cultura-matematico-scientifica",
        category: "matematica-probabilita",
        difficulty: 3,
        question:
            "La probabilità di ottenere almeno una testa dal lancio simultaneo di due monete è",
        answers: [
            {
                id: "A",
                text: "3/4",
                correct: true,
                explanation:
                    "Gli esiti equiprobabili sono TT, TC, CT e CC. In tre casi su quattro compare almeno una testa: TT, TC e CT. La probabilità è quindi 3/4.",
            },
            {
                id: "B",
                text: "1",
                correct: false,
                explanation:
                    "Una probabilità pari a 1 significherebbe che l'evento è certo. È però possibile ottenere due croci, quindi almeno una testa non è garantita.",
            },
            {
                id: "C",
                text: "1/4",
                correct: false,
                explanation:
                    "1/4 è la probabilità di un singolo esito specifico, per esempio due teste oppure due croci. Gli esiti con almeno una testa sono invece tre.",
            },
            {
                id: "D",
                text: "2/4",
                correct: false,
                explanation:
                    "2/4=1/2, ma gli esiti favorevoli non sono due. Sono tre su quattro: TT, TC e CT.",
            },
        ],
    },

    {
        id: 70,
        area: "cultura-matematico-scientifica",
        category: "biologia-genetica",
        difficulty: 2,
        question:
            "I primi esperimenti di genetica furono condotti su:",
        answers: [
            {
                id: "A",
                text: "esseri umani",
                correct: false,
                explanation:
                    "I celebri esperimenti che posero le basi della genetica classica non furono condotti inizialmente sugli esseri umani. L'organismo utilizzato permetteva di controllare facilmente gli incroci e osservare caratteri distinti.",
            },
            {
                id: "B",
                text: "moscerini della frutta (drosofila)",
                correct: false,
                explanation:
                    "La Drosophila divenne successivamente un organismo fondamentale negli studi genetici, soprattutto nel Novecento con gli esperimenti di Thomas Hunt Morgan. Gli esperimenti considerati fondativi della genetica sono però quelli di Mendel.",
            },
            {
                id: "C",
                text: "piante di pisello odoroso",
                correct: true,
                explanation:
                    "La risposta indicata dalla prova fa riferimento agli esperimenti di Gregor Mendel sulle piante di pisello. Studiando l'ereditarietà di caratteri facilmente distinguibili, Mendel formulò le leggi fondamentali della genetica classica.",
            },
            {
                id: "D",
                text: "scimmie",
                correct: false,
                explanation:
                    "Le scimmie non furono l'organismo utilizzato negli esperimenti di Mendel che vengono considerati il punto di partenza della genetica classica.",
            },
        ],
    },

    {
        id: 71,
        area: "cultura-matematico-scientifica",
        category: "informatica-internet",
        difficulty: 2,
        question:
            "Quale tra i seguenti è un motore di ricerca?",
        answers: [
            {
                id: "A",
                text: "Google",
                correct: true,
                explanation:
                    "Google è un motore di ricerca: permette di cercare pagine e informazioni presenti sul Web attraverso parole chiave e altri criteri.",
            },
            {
                id: "B",
                text: "Safari",
                correct: false,
                explanation:
                    "Safari è un browser web sviluppato da Apple. Un browser permette di visualizzare e navigare tra siti Internet, ma non è di per sé un motore di ricerca.",
            },
            {
                id: "C",
                text: "Edge",
                correct: false,
                explanation:
                    "Microsoft Edge è un browser web. Può utilizzare motori di ricerca come Bing o Google, ma browser e motore di ricerca sono strumenti differenti.",
            },
            {
                id: "D",
                text: "Mozilla",
                correct: false,
                explanation:
                    "Mozilla è l'organizzazione legata, tra gli altri progetti, al browser Firefox. Non è il motore di ricerca richiesto dal quesito.",
            },
        ],
    },

    {
        id: 72,
        area: "cultura-matematico-scientifica",
        category: "matematica-divisibilita",
        difficulty: 2,
        question:
            "Il massimo comune divisore tra 16 e 25",
        answers: [
            {
                id: "A",
                text: "è 400",
                correct: false,
                explanation:
                    "400 è il prodotto 16×25 e non può essere un divisore di numeri più piccoli come 16 e 25. Un divisore comune deve dividere entrambi senza resto.",
            },
            {
                id: "B",
                text: "non esiste",
                correct: false,
                explanation:
                    "Il massimo comune divisore tra due numeri interi positivi esiste sempre. Almeno il numero 1 divide entrambi.",
            },
            {
                id: "C",
                text: "è 0",
                correct: false,
                explanation:
                    "Zero non è un divisore di 16 o 25, perché la divisione per zero non è definita. Non può quindi essere il loro massimo comune divisore.",
            },
            {
                id: "D",
                text: "è 1",
                correct: true,
                explanation:
                    "16 ha come fattori primi soltanto potenze di 2, mentre 25=5². Non possiedono fattori primi comuni, quindi MCD(16,25)=1 e i due numeri sono coprimi.",
            },
        ],
    },

    {
        id: 73,
        area: "cultura-matematico-scientifica",
        category: "chimica-tavola-periodica",
        difficulty: 2,
        question:
            "Quale dei seguenti elementi è un metallo?",
        answers: [
            {
                id: "A",
                text: "Idrogeno",
                correct: false,
                explanation:
                    "L'idrogeno è classificato come non metallo. Pur trovandosi nella prima colonna della tavola periodica, presenta caratteristiche molto diverse dai metalli alcalini.",
            },
            {
                id: "B",
                text: "Neon",
                correct: false,
                explanation:
                    "Il neon è un gas nobile e appartiene al gruppo 18 della tavola periodica. È un non metallo molto poco reattivo.",
            },
            {
                id: "C",
                text: "Zolfo",
                correct: false,
                explanation:
                    "Lo zolfo è un non metallo appartenente al gruppo 16 della tavola periodica. A temperatura ambiente si presenta normalmente come un solido.",
            },
            {
                id: "D",
                text: "Rame",
                correct: true,
                explanation:
                    "Il rame è un metallo, simbolo chimico Cu. È un buon conduttore elettrico e termico e per questo viene largamente utilizzato, per esempio, nei cavi elettrici.",
            },
        ],
    },

    {
        id: 74,
        area: "cultura-matematico-scientifica",
        category: "matematica-frazioni",
        difficulty: 2,
        question:
            "Quale tra i seguenti numeri razionali è il maggiore: 2/3, 3/2, 3/4, 4/3",
        answers: [
            {
                id: "A",
                text: "2/3",
                correct: false,
                explanation:
                    "2/3 vale circa 0,67. È quindi minore sia di 4/3, che vale circa 1,33, sia di 3/2, che vale 1,5.",
            },
            {
                id: "B",
                text: "3/4",
                correct: false,
                explanation:
                    "3/4=0,75. È maggiore di 2/3 ma rimane inferiore alle frazioni improprie 4/3 e 3/2.",
            },
            {
                id: "C",
                text: "3/2",
                correct: true,
                explanation:
                    "3/2=1,5. Confrontando i valori: 2/3≈0,67; 3/4=0,75; 4/3≈1,33; 3/2=1,5. Il maggiore è quindi 3/2.",
            },
            {
                id: "D",
                text: "4/3",
                correct: false,
                explanation:
                    "4/3 vale circa 1,33 ed è maggiore di 2/3 e 3/4. Tuttavia è minore di 3/2=1,5.",
            },
        ],
    },

    {
        id: 75,
        area: "cultura-matematico-scientifica",
        category: "informatica-informazione",
        difficulty: 2,
        question:
            "Quale delle seguenti espressioni denota l’unità di misura della quantità di informazione?",
        answers: [
            {
                id: "A",
                text: "CPU",
                correct: false,
                explanation:
                    "CPU significa Central Processing Unit ed è l'unità centrale di elaborazione di un computer. Non è un'unità di misura dell'informazione.",
            },
            {
                id: "B",
                text: "bit",
                correct: true,
                explanation:
                    "Il bit, abbreviazione di binary digit, è l'unità elementare dell'informazione digitale. Può assumere due valori, convenzionalmente rappresentati da 0 e 1.",
            },
            {
                id: "C",
                text: "doc",
                correct: false,
                explanation:
                    "DOC è comunemente associato a un formato di file per documenti di testo. Non è un'unità di misura della quantità di informazione.",
            },
            {
                id: "D",
                text: "PDF",
                correct: false,
                explanation:
                    "PDF significa Portable Document Format ed è un formato di documento. Non misura la quantità di informazione digitale.",
            },
        ],
    },

    {
        id: 76,
        area: "cultura-matematico-scientifica",
        category: "informatica-hardware",
        difficulty: 2,
        question:
            "Quale tra le seguenti è una periferica di input?",
        answers: [
            {
                id: "A",
                text: "monitor",
                correct: false,
                explanation:
                    "Il monitor è principalmente una periferica di output perché mostra all'utente le informazioni elaborate dal computer.",
            },
            {
                id: "B",
                text: "mouse",
                correct: true,
                explanation:
                    "Il mouse è una periferica di input perché permette all'utente di inviare comandi e informazioni al computer attraverso movimenti, clic e altri controlli.",
            },
            {
                id: "C",
                text: "cuffie",
                correct: false,
                explanation:
                    "Le cuffie sono periferiche di output perché ricevono dal computer segnali audio e li trasformano in suono percepibile dall'utente.",
            },
            {
                id: "D",
                text: "stampante",
                correct: false,
                explanation:
                    "La stampante è una periferica di output perché trasferisce su carta o altro supporto le informazioni elaborate dal computer.",
            },
        ],
    },

    {
        id: 77,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria",
        difficulty: 3,
        question:
            "Se la diagonale di un’aiuola quadrata misura 2 m, allora la sua area è",
        answers: [
            {
                id: "A",
                text: "4 m²",
                correct: false,
                explanation:
                    "4 m² sarebbe l'area di un quadrato con lato 2 m. Nel problema, però, 2 m è la diagonale e non il lato.",
            },
            {
                id: "B",
                text: "2 m²",
                correct: true,
                explanation:
                    "Per un quadrato vale d=l√2. Se d=2, allora l=2/√2=√2 m. L'area è quindi l²=(√2)²=2 m². Si può anche usare direttamente A=d²/2=4/2=2 m².",
            },
            {
                id: "C",
                text: "1 m²",
                correct: false,
                explanation:
                    "Un quadrato di area 1 m² avrebbe lato 1 m e diagonale √2 m, non 2 m. Il dato non soddisfa quindi il problema.",
            },
            {
                id: "D",
                text: "8 m²",
                correct: false,
                explanation:
                    "8 m² è troppo grande rispetto alla diagonale indicata. Utilizzando la formula A=d²/2 si ottiene 2²/2=2 m².",
            },
        ],
    },

    {
        id: 78,
        area: "cultura-matematico-scientifica",
        category: "scienze-della-terra-paleontologia",
        difficulty: 2,
        question:
            "La fossilizzazione è:",
        answers: [
            {
                id: "A",
                text: "il processo mediante il quale i resti di un organismo morto sono trasformati in fossili",
                correct: true,
                explanation:
                    "La fossilizzazione comprende i processi attraverso i quali resti o tracce di organismi del passato vengono conservati nelle rocce e trasformati in fossili. Richiede particolari condizioni che limitino la completa decomposizione.",
            },
            {
                id: "B",
                text: "l'attività di studio dei fossili",
                correct: false,
                explanation:
                    "Lo studio scientifico dei fossili appartiene alla paleontologia. La fossilizzazione indica invece il processo di formazione e conservazione dei fossili.",
            },
            {
                id: "C",
                text: "il processo di estrazione del carbone",
                correct: false,
                explanation:
                    "L'estrazione del carbone è un'attività mineraria. Non coincide con il processo naturale attraverso cui si formano i fossili.",
            },
            {
                id: "D",
                text: "l'attività di datazione relativa dei fossili",
                correct: false,
                explanation:
                    "La datazione relativa permette di stabilire l'ordine cronologico di rocce o fossili senza determinarne necessariamente l'età assoluta. È una tecnica di studio, non la fossilizzazione.",
            },
        ],
    },

    {
        id: 79,
        area: "cultura-matematico-scientifica",
        category: "fisica-passaggi-di-stato",
        difficulty: 2,
        question:
            "Come viene chiamato il passaggio di stato da solido ad aeriforme?",
        answers: [
            {
                id: "A",
                text: "solidificazione",
                correct: false,
                explanation:
                    "La solidificazione è il passaggio dallo stato liquido allo stato solido, come quando l'acqua congela e diventa ghiaccio.",
            },
            {
                id: "B",
                text: "sublimazione",
                correct: true,
                explanation:
                    "La sublimazione è il passaggio diretto dallo stato solido allo stato aeriforme senza passare attraverso lo stato liquido. Un esempio tipico è il comportamento del ghiaccio secco.",
            },
            {
                id: "C",
                text: "liquefazione",
                correct: false,
                explanation:
                    "La liquefazione è il passaggio dallo stato aeriforme allo stato liquido. È quindi un processo differente da quello richiesto.",
            },
            {
                id: "D",
                text: "brinamento",
                correct: false,
                explanation:
                    "Il brinamento è il processo inverso della sublimazione: una sostanza passa direttamente dallo stato aeriforme a quello solido.",
            },
        ],
    },

    {
        id: 80,
        area: "cultura-matematico-scientifica",
        category: "matematica-proprieta-operazioni",
        difficulty: 3,
        question:
            "Se a, b, c sono numeri interi, allora vale",
        answers: [
            {
                id: "A",
                text: "a+b=c",
                correct: false,
                explanation:
                    "Non esiste alcuna ragione per cui la somma di due interi qualsiasi a e b debba essere uguale a un terzo intero arbitrario c. Per esempio, con a=1, b=2 e c=10 l'uguaglianza è falsa.",
            },
            {
                id: "B",
                text: "a+b+c<a×b×c",
                correct: false,
                explanation:
                    "Questa disuguaglianza non vale per tutti gli interi. Per esempio, scegliendo a=b=c=1 otteniamo 3<1, che è falso.",
            },
            {
                id: "C",
                text: "-a<a, -b<b, -c<c",
                correct: false,
                explanation:
                    "Queste disuguaglianze valgono soltanto quando a, b e c sono positivi. Se a fosse negativo, per esempio a=-2, avremmo -a=2 e quindi 2<-2, che è falso.",
            },
            {
                id: "D",
                text: "a×(b+c)=a×b+a×c",
                correct: true,
                explanation:
                    "Questa è la proprietà distributiva della moltiplicazione rispetto all'addizione e vale per tutti i numeri interi. Per esempio, 2×(3+4)=14 e anche 2×3+2×4=6+8=14.",
            },
        ],
    },
];

export default simulation06;