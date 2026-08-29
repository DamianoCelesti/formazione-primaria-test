const passages = {
    passage01: `Una studentessa liceale deve decidere a quale università iscriversi fra quattro possibili: 1) Università di Trieste, per la quale è necessario superare un test di ingresso di 60 domande; 2) Università di Pisa, per la quale è necessario superare un test di ingresso di 67 domande; 3) Università di Genova, per la quale è necessario superare un test di ingresso di 70 domande; 4) Università di Milano, per la quale è necessario superare un test di ingresso di 75 domande.

Le quote per l'iscrizione sono: 860 euro, 920 euro, 970 euro e 1.100 euro, non necessariamente in questo ordine. I corsi di laurea variano per durata a seconda dell'Università scelta: in ordine sparso durano tre, quattro, cinque e sei anni.

È inoltre noto che:
- 860 euro è la quota per l'iscrizione all'Università il cui corso di laurea dura quattro anni;
- il corso di laurea dell'Università di Genova dura cinque anni;
- l'Università per la quale è necessario superare un test di ingresso di 75 domande ha una quota di iscrizione di 1.100 euro e la durata del corso di laurea non è di tre anni;
- la quota per l'iscrizione all'Università, per la quale è necessario superare un test di ingresso di 67 domande, è 920 euro.`,

    passage02: `"Senza contare le altre capacità innate, la gratificazione, in termini di successo nella vita, ottenuta grazie alla motivazione, appare evidente se si considerano le eccezionali prestazioni scolastiche e professionali degli studenti di origine asiatica che vivono in America.

Un attento esame dei dati indica che questi soggetti hanno mediamente un Q.I. di appena due o tre punti superiore a quello dei bianchi. Tuttavia, stando alle professioni - avvocato e medico - che molti di essi intraprendono una volta diventati adulti, nel loro insieme si comportano come se avessero un Q.I. molto più alto - l'equivalente di 110 nel caso dei nippoamericani e di 120 in quello dei cinoamericani. A quanto pare, ciò è dovuto al fatto che, fin dai primi anni di scuola, i bambini asiatici si impegnano nello studio molto più dei bianchi. Sanford Dorenbusch, un sociologo di Stanford che ha esaminato più di diecimila studenti della scuola superiore, scoprì che quelli di origine asiatica dedicavano ai loro compiti un numero di ore superiore del 40 per cento rispetto agli altri. “Mentre la maggior parte dei genitori americani è disposta ad accettare i punti deboli del proprio figlio sottolineando invece le sue particolari abilità, nel caso dei genitori asiatici, l'atteggiamento mentale è questo: 'Se non vai bene, dovrai studiare qualche ora di più la sera, e se ancora questo non basta, vorrà dire che ti alzerai un po' prima la mattina'. Essi sono convinti che chiunque possa ottenere buoni risultati scolastici, purché si impegni a dovere.” In breve, una forte etica culturale del lavoro si traduce in motivazione, entusiasmo e perseveranza maggiori - in altre parole, in un vantaggio sul piano emotivo.

Nella misura in cui le emozioni intralciano o potenziano le nostre capacità di pensare, di fare progetti, di risolvere problemi, di sottoporci a un addestramento in vista di un obiettivo lontano, e altre ancora, esse non fanno che definire i limiti della nostra capacità di usare abilità mentali innate, e pertanto determinano il nostro successo nella vita. Ancora, nella misura in cui le nostre azioni sono motivate da sentimenti di entusiasmo e di piacere - o anche da un grado ottimale di ansia - sono proprio tali sentimenti a spingerci verso la realizzazione. In questo senso, l'intelligenza emotiva è un'abilità fondamentale che influenza profondamente tutte le altre, di volta in volta facilitandone l'espressione, o interferendo con esse".

(Daniel Goleman, Intelligenza Emotiva, Bur edizioni)`,

    passage03: `"Per impostare percorsi individualizzati e/o personalizzati occorre precisare le competenze ritenute fondamentali, individuare gli obiettivi e i concetti essenziali di ogni materia che si intendono perseguire per tutti gli allievi nei diversi livelli di ogni determinato istituto, evidenziare quali di tali competenze, conoscenze e abilità possano essere perseguite dall'allievo con deficit, nel caso siano necessarie delle differenziazioni. L'eventuale severità del deficit intellettivo da parte di un allievo non dovrebbe impedire il perseguimento di obiettivi il più possibile collegati a quelli previsti dal curricolo comune, sulla base di un'attenta osservazione delle caratteristiche apprenditive sia del soggetto con deficit sia dei suoi coetanei, dell'analisi dei nuclei fondanti della materia di studio e di una ricerca delle connessioni con la programmazione di classe. Può essere interessante a questo proposito descrivere sinteticamente il percorso di apprendimento relativo a un obiettivo di matematica di Michele, un ragazzino con sindrome di Down di 12 anni le cui scarse conoscenze e abilità aritmetiche, inizialmente, sembrano vincolarlo a una programmazione personalizzata senza contatti con quella elaborata per i compagni. Michele, quando non può beneficiare di un rapporto individuale con il docente, trascorre il suo tempo in classe giocando secondo modalità stereotipate che prevedono un combattimento tra un gruppo di matite colorate e una matita/capo; una matita/capo che lo rappresenta e che vince sempre le matite/nemici, buttandole a terra, una per volta. E così ripetutamente per tutta l'ora di matematica, mentre ci si sta dedicando alle espressioni aritmetiche. Gli insegnanti, dopo aver analizzato la situazione, progettano un percorso che intende far progredire l'apprendimento matematico di Michele attraverso il gioco delle matite e il coinvolgimento di alcuni compagni in momenti programmati, aumentando la difficoltà delle situazioni problematiche, grazie alla "messa in campo" di più gruppi di matite/nemici e di più matite/capo (una per ogni partecipante). Il ragazzino viene quindi stimolato dall'insegnante presente a risolvere diverse situazioni-problema che introducono progressivamente l'operazione dell'addizione e della sottrazione e i relativi segni tramite domande sugli esiti dei combattimenti ("Quanti sono i nemici caduti?", "Quanti erano i nemici in totale?", ecc.) e la riformulazione in lingua naturale e in linguaggio matematico delle situazioni".

Fonte: Elementi di didattica speciale per l'inclusione Patrizia Sandri Dipartimento di Scienze dell'Educazione "G.M. Bertin", Università degli Studi di Bologna - riviste digitali Erickson`,
};

const simulation12 = [
    {
        id: 1,
        area: "linguistica-logica",
        category: "logica-vincoli",
        difficulty: 4,
        passage: passages.passage01,
        question:
            "Qual è l'Università il cui corso di laurea dura sei anni?",
        answers: [
            {
                id: "A",
                text: "Quella la cui quota di iscrizione è di 970 euro.",
                correct: false,
                explanation:
                    "La quota di 970 euro appartiene all'Università di Genova. Il testo stabilisce però che il corso di Genova dura cinque anni, non sei.",
            },
            {
                id: "B",
                text: "Quella di Trieste.",
                correct: false,
                explanation:
                    "Trieste richiede il test da 60 domande e, completando i vincoli, ha una quota di 860 euro. Poiché la quota di 860 euro corrisponde al corso di quattro anni, Trieste dura quattro anni.",
            },
            {
                id: "C",
                text: "Quella di Milano.",
                correct: true,
                explanation:
                    "Milano è l'Università con il test da 75 domande, quindi ha una quota di 1.100 euro. Non può avere il corso di tre anni; dato che Genova dura cinque anni e Trieste quattro, a Milano spettano necessariamente i sei anni.",
            },
            {
                id: "D",
                text: "Quella la cui quota di iscrizione è di 920 euro.",
                correct: false,
                explanation:
                    "La quota di 920 euro appartiene a Pisa, perché Pisa richiede il test da 67 domande. Dai vincoli risulta che il suo corso dura tre anni.",
            },
        ],
    },

    {
        id: 2,
        area: "linguistica-logica",
        category: "logica-vincoli",
        difficulty: 3,
        passage: passages.passage01,
        question:
            "Euro 970 è la quota per l'iscrizione all'Università:",
        answers: [
            {
                id: "A",
                text: "Di Genova.",
                correct: true,
                explanation:
                    "Pisa ha necessariamente la quota di 920 euro e Milano quella di 1.100 euro. Se Genova avesse 860 euro dovrebbe avere un corso di quattro anni, ma il testo dice che dura cinque anni: Genova deve quindi avere la quota di 970 euro.",
            },
            {
                id: "B",
                text: "Di Trieste.",
                correct: false,
                explanation:
                    "Trieste non può avere la quota di 970 euro. Una volta assegnati 920 euro a Pisa, 1.100 euro a Milano e 970 euro a Genova, per Trieste rimangono 860 euro.",
            },
            {
                id: "C",
                text: "Di Milano.",
                correct: false,
                explanation:
                    "Milano è l'Università con il test di 75 domande. Il brano specifica direttamente che questa Università ha una quota di 1.100 euro.",
            },
            {
                id: "D",
                text: "Di Pisa.",
                correct: false,
                explanation:
                    "Pisa richiede il test di 67 domande e il testo specifica che l'Università con questo test ha una quota di 920 euro. Non può quindi avere una quota di 970 euro.",
            },
        ],
    },

    {
        id: 3,
        area: "linguistica-logica",
        category: "logica-vincoli",
        difficulty: 4,
        passage: passages.passage01,
        question:
            "Sulla base delle informazioni fornite, indicare l'affermazione corretta.",
        answers: [
            {
                id: "A",
                text: "Il corso di laurea dell'Università, per la quale è necessario superare un test di ingresso di 60 domande, dura tre anni.",
                correct: false,
                explanation:
                    "Il test da 60 domande appartiene a Trieste. Trieste ha la quota di 860 euro e questa quota è associata nel testo a un corso della durata di quattro anni.",
            },
            {
                id: "B",
                text: "Il corso di laurea dell'Università di Pisa dura quattro anni.",
                correct: false,
                explanation:
                    "Pisa ha una quota di 920 euro. Una volta assegnati quattro anni a Trieste, cinque a Genova e sei a Milano, Pisa deve avere il corso della durata di tre anni.",
            },
            {
                id: "C",
                text: "Euro 860 è la quota per l'iscrizione all'Università il cui corso di laurea dura tre anni.",
                correct: false,
                explanation:
                    "Il testo stabilisce direttamente che la quota di 860 euro appartiene all'Università il cui corso dura quattro anni. L'affermazione modifica quindi un dato esplicito.",
            },
            {
                id: "D",
                text: "Euro 1.100 è la quota per l'iscrizione all'Università il cui corso di laurea dura sei anni.",
                correct: true,
                explanation:
                    "La quota di 1.100 euro appartiene a Milano. Milano non può avere il corso di tre anni e, dopo aver assegnato quattro anni a Trieste e cinque a Genova, a Milano rimangono necessariamente sei anni.",
            },
        ],
    },

    {
        id: 4,
        area: "linguistica-logica",
        category: "logica-vincoli",
        difficulty: 4,
        passage: passages.passage01,
        question:
            "A quale Università si iscriverebbe la studentessa se decidesse di scegliere quella che, in base alla quota di iscrizione, è seconda in ordine decrescente?",
        answers: [
            {
                id: "A",
                text: "A quella di Trieste.",
                correct: false,
                explanation:
                    "Trieste ha la quota più bassa, pari a 860 euro. Non occupa quindi il secondo posto nell'ordinamento decrescente delle quote.",
            },
            {
                id: "B",
                text: "A quella il cui corso di laurea dura cinque anni.",
                correct: true,
                explanation:
                    "Le quote in ordine decrescente sono 1.100, 970, 920 e 860 euro. La seconda è quindi 970 euro, quota appartenente a Genova, il cui corso dura cinque anni.",
            },
            {
                id: "C",
                text: "A quella il cui corso di laurea dura tre anni.",
                correct: false,
                explanation:
                    "Il corso di tre anni appartiene a Pisa, la cui quota è 920 euro. Questa è la terza quota in ordine decrescente.",
            },
            {
                id: "D",
                text: "A quella di Milano.",
                correct: false,
                explanation:
                    "Milano ha la quota di 1.100 euro, che è la più alta tra quelle indicate. Occupa quindi il primo posto, non il secondo.",
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
            "Quale Università ha la quota di iscrizione più bassa?",
        answers: [
            {
                id: "A",
                text: "Quella per la quale è necessario superare un test di ingresso di 67 domande.",
                correct: false,
                explanation:
                    "Il test da 67 domande appartiene a Pisa e la sua quota è indicata esplicitamente come 920 euro. Esiste una quota più bassa, pari a 860 euro.",
            },
            {
                id: "B",
                text: "Quella di Genova.",
                correct: false,
                explanation:
                    "Genova ha una quota di 970 euro. Non è quindi l'Università con la quota minima.",
            },
            {
                id: "C",
                text: "Quella per la quale è necessario superare un test di ingresso di 60 domande.",
                correct: true,
                explanation:
                    "L'Università con il test di 60 domande è Trieste. Completando le assegnazioni, Trieste ha la quota di 860 euro, la più bassa tra 860, 920, 970 e 1.100 euro.",
            },
            {
                id: "D",
                text: "Quella di Pisa.",
                correct: false,
                explanation:
                    "Pisa ha una quota di 920 euro. La quota più bassa è invece quella di Trieste, pari a 860 euro.",
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
            "Quale Università ha la durata del corso di laurea di tre anni?",
        answers: [
            {
                id: "A",
                text: "Quella di Milano.",
                correct: false,
                explanation:
                    "Il testo specifica che Milano, cioè l'Università con il test da 75 domande, non ha un corso della durata di tre anni. Dai vincoli risulta che dura sei anni.",
            },
            {
                id: "B",
                text: "Quella che prevede quale quota di iscrizione 970 euro.",
                correct: false,
                explanation:
                    "La quota di 970 euro appartiene a Genova e il testo dice esplicitamente che Genova ha un corso della durata di cinque anni.",
            },
            {
                id: "C",
                text: "Quella che prevede quale quota di iscrizione 860 euro.",
                correct: false,
                explanation:
                    "La quota di 860 euro è collegata direttamente nel brano a un corso della durata di quattro anni. Non può quindi corrispondere al corso di tre anni.",
            },
            {
                id: "D",
                text: "Quella di Pisa.",
                correct: true,
                explanation:
                    "Trieste dura quattro anni, Genova cinque e Milano sei. L'unica durata rimasta, tre anni, deve quindi appartenere all'Università di Pisa.",
            },
        ],
    },

    {
        id: 7,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages.passage02,
        question:
            "Secondo l'autore, che cosa può intralciare o potenziare le nostre capacità di pensare o risolvere problemi?",
        answers: [
            {
                id: "A",
                text: "Le emozioni.",
                correct: true,
                explanation:
                    "Il testo afferma esplicitamente che le emozioni possono «intralciare o potenziare» la capacità di pensare, fare progetti e risolvere problemi. Per Goleman esse influenzano quindi il modo in cui utilizziamo le nostre capacità mentali.",
            },
            {
                id: "B",
                text: "Lo studio.",
                correct: false,
                explanation:
                    "Lo studio è importante nel brano e viene collegato all'impegno degli studenti, ma non è indicato come ciò che può direttamente intralciare o potenziare le capacità mentali. Questa funzione viene attribuita alle emozioni.",
            },
            {
                id: "C",
                text: "Il background sociale.",
                correct: false,
                explanation:
                    "Il brano confronta gruppi culturali differenti, ma non identifica il background sociale come il fattore che intralcia o potenzia direttamente il pensiero e la capacità di risolvere problemi.",
            },
            {
                id: "D",
                text: "La famiglia.",
                correct: false,
                explanation:
                    "L'atteggiamento familiare viene utilizzato per spiegare alcune differenze nella motivazione allo studio, ma la frase specifica del testo attribuisce alle emozioni il potere di interferire con le capacità cognitive.",
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
            "Secondo l'autore, come agisce l'intelligenza emotiva?",
        answers: [
            {
                id: "A",
                text: "Non interferisce in nulla.",
                correct: false,
                explanation:
                    "Questa risposta contraddice direttamente la conclusione del testo. L'intelligenza emotiva può infatti facilitare l'espressione delle altre abilità oppure interferire con esse.",
            },
            {
                id: "B",
                text: "Facilita l'espressione di altre abilità o interferisce con esse.",
                correct: true,
                explanation:
                    "Nell'ultima frase del brano l'intelligenza emotiva viene definita un'abilità fondamentale che influenza tutte le altre, «di volta in volta facilitandone l'espressione, o interferendo con esse».",
            },
            {
                id: "C",
                text: "Aiuta l'individuo nei meri rapporti con gli altri.",
                correct: false,
                explanation:
                    "Il testo attribuisce all'intelligenza emotiva un'influenza molto più ampia dei soli rapporti sociali. Essa interviene anche nel pensiero, nella progettazione, nella soluzione dei problemi e nella motivazione.",
            },
            {
                id: "D",
                text: "Ha il solo obiettivo di creare ansie o bloccare l'individuo.",
                correct: false,
                explanation:
                    "L'autore non attribuisce all'intelligenza emotiva unicamente effetti negativi. Anche l'entusiasmo, il piacere e perfino un livello ottimale di ansia possono favorire il raggiungimento degli obiettivi.",
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
            "Secondo Dorenbusch, qual è l'approccio delle famiglie asiatiche ai risultati scolastici dei propri figli?",
        answers: [
            {
                id: "A",
                text: "Gli asiatici lasciano i propri figli sempre liberi di scegliere come meglio approcciarsi allo studio.",
                correct: false,
                explanation:
                    "Nel testo i genitori asiatici vengono descritti come molto orientati all'impegno e alla perseveranza. Se i risultati non sono buoni, incoraggiano i figli ad aumentare il tempo dedicato allo studio.",
            },
            {
                id: "B",
                text: "Gli asiatici sono disposti ad accettare ad ogni costo i punti deboli dei figli.",
                correct: false,
                explanation:
                    "Questo atteggiamento viene attribuito piuttosto, in modo generale, ai genitori americani, che tenderebbero ad accettare i punti deboli sottolineando le abilità particolari del figlio.",
            },
            {
                id: "C",
                text: "Gli asiatici credono che i risultati scolastici non influiscano affatto sulla vita dei propri figli.",
                correct: false,
                explanation:
                    "Il brano mette in relazione proprio l'impegno scolastico con le successive prestazioni professionali. Non sostiene quindi che i risultati scolastici siano irrilevanti.",
            },
            {
                id: "D",
                text: "Gli asiatici credono che chiunque possa ottenere buoni risultati, purché si applichi.",
                correct: true,
                explanation:
                    "Il testo afferma espressamente che i genitori asiatici sono convinti che chiunque possa ottenere buoni risultati scolastici «purché si impegni a dovere». L'impegno viene quindi considerato decisivo.",
            },
        ],
    },

    {
        id: 10,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages.passage02,
        question:
            "Secondo l'autore, la motivazione a che cosa può portare?",
        answers: [
            {
                id: "A",
                text: "Ad illudersi di poter raggiungere risultati che non sono alla portata dell'individuo.",
                correct: false,
                explanation:
                    "L'autore presenta la motivazione in senso positivo e la collega al successo. Non sostiene che produca necessariamente illusioni su obiettivi irraggiungibili.",
            },
            {
                id: "B",
                text: "Alla sola competizione con gli altri.",
                correct: false,
                explanation:
                    "La competizione con gli altri non viene indicata come l'unico effetto della motivazione. Il testo parla piuttosto di impegno, perseveranza e successo scolastico e professionale.",
            },
            {
                id: "C",
                text: "Ad eccezionali prestazioni scolastiche e professionali.",
                correct: true,
                explanation:
                    "Nelle prime righe l'autore presenta proprio le eccezionali prestazioni scolastiche e professionali come esempio evidente della gratificazione ottenuta grazie alla motivazione.",
            },
            {
                id: "D",
                text: "A sopravvalutarsi senza tenere conto dei propri obiettivi reali.",
                correct: false,
                explanation:
                    "Il brano non associa la motivazione alla sopravvalutazione di sé. La considera invece una risorsa che sostiene l'entusiasmo, la perseveranza e il raggiungimento degli obiettivi.",
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
            "Individuare il completamento errato: Quando si impostano percorsi personalizzati...",
        answers: [
            {
                id: "A",
                text: "È sempre opportuno individuare delle differenziazioni per l'alunno con deficit.",
                correct: true,
                explanation:
                    "Questo è il completamento errato. Il testo afferma che bisogna individuare eventuali differenziazioni «nel caso siano necessarie», non che debbano essere sempre introdotte.",
            },
            {
                id: "B",
                text: "Bisogna individuare i concetti essenziali di ogni materia.",
                correct: false,
                explanation:
                    "Questa indicazione è contenuta direttamente nel brano. Nella progettazione occorre individuare gli obiettivi e i concetti essenziali delle diverse materie.",
            },
            {
                id: "C",
                text: "È fondamentale individuare gli obiettivi essenziali per ciascuna materia.",
                correct: false,
                explanation:
                    "Il testo sottolinea proprio la necessità di individuare gli obiettivi fondamentali ed essenziali da perseguire all'interno del percorso didattico.",
            },
            {
                id: "D",
                text: "Occorre individuare le conoscenze e le abilità che l'alunno con deficit può perseguire.",
                correct: false,
                explanation:
                    "Il brano richiede esplicitamente di evidenziare quali competenze, conoscenze e abilità possano essere perseguite dall'allievo con deficit.",
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
            "Nei casi in cui il deficit dell'alunno abbia carattere di severità cosa occorre controllare?",
        answers: [
            {
                id: "A",
                text: "Che il deficit stesso consenta la formulazione di obiettivi individualizzati, anche se sostanzialmente differenti da quelli del curricolo comune.",
                correct: false,
                explanation:
                    "Il testo sostiene che anche in presenza di un deficit severo gli obiettivi dovrebbero rimanere il più possibile collegati al curricolo comune. Non propone quindi una separazione sostanziale come principio generale.",
            },
            {
                id: "B",
                text: "Che il deficit stesso non renda impossibile il raggiungimento di obiettivi in linea con quelli individuati dal curricolo comune.",
                correct: true,
                explanation:
                    "Il brano afferma che la severità del deficit intellettivo non dovrebbe impedire il perseguimento di obiettivi il più possibile collegati a quelli previsti dal curricolo comune.",
            },
            {
                id: "C",
                text: "Che sulla base della natura del deficit si prescinda dall'analisi dei nuclei essenziali della materia curricolare.",
                correct: false,
                explanation:
                    "Il testo richiede esattamente l'opposto: occorre analizzare i nuclei fondanti della materia di studio per costruire un percorso adeguato.",
            },
            {
                id: "D",
                text: "Che gli obiettivi posti all’alunno con il deficit intellettivo prescindano dalle caratteristiche apprenditive sia dello stesso sia dei suoi coetanei.",
                correct: false,
                explanation:
                    "La progettazione deve basarsi proprio su un'attenta osservazione delle caratteristiche apprenditive dell'allievo con deficit e dei suoi coetanei. Non deve quindi prescindere da esse.",
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
            "A titolo esemplificativo, gli autori del testo propongono di considerare il caso di Michele:",
        answers: [
            {
                id: "A",
                text: "Un ragazzino di 12 anni le cui capacità aritmetiche parevano, all'inizio, essere allineate alla programmazione curricolare elaborata per i compagni.",
                correct: false,
                explanation:
                    "Il testo afferma precisamente il contrario: Michele presenta inizialmente scarse conoscenze e abilità aritmetiche, che sembrano allontanarlo dalla programmazione dei compagni.",
            },
            {
                id: "B",
                text: "Un ragazzino di 12 anni le cui scarse conoscenze aritmetiche, sia all'inizio, sia alla fine del percorso, erano tali da impedire la predisposizione di una didattica personalizzata, differenziata da quella seguita dal resto della classe.",
                correct: false,
                explanation:
                    "Il brano mostra proprio che viene progettato un percorso personalizzato efficace. Non afferma inoltre che le difficoltà rimangano immutate fino alla fine.",
            },
            {
                id: "C",
                text: "Un ragazzino di 12 anni le cui evidenti difficoltà in matematica ed aritmetica hanno sancito una definitiva impossibilità di integrare la sua programmazione individualizzata con quella riservata al resto del gruppo classe.",
                correct: false,
                explanation:
                    "L'esempio di Michele serve a dimostrare il contrario: gli insegnanti cercano connessioni con la programmazione della classe e coinvolgono alcuni compagni nel percorso.",
            },
            {
                id: "D",
                text: "Un ragazzino 12 anni le cui difficoltà aritmetiche sembrano, al principio, destinarlo ad un programma formativo individualizzato senza punti di continuità con quello seguito dai compagni.",
                correct: true,
                explanation:
                    "Questa alternativa riproduce la situazione iniziale descritta nel testo. Le scarse conoscenze e abilità aritmetiche di Michele sembrano inizialmente vincolarlo a una programmazione personalizzata senza contatti con quella dei compagni.",
            },
        ],
    },

    {
        id: 14,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages.passage03,
        question:
            "Quale attività di gioco stereotipata mette in atto Michele durante le ore dedicate all'insegnamento dell'aritmetica?",
        answers: [
            {
                id: "A",
                text: "Una lotta tra matite, in cui la matita capo riesce a sconfiggere le matite nemiche.",
                correct: true,
                explanation:
                    "Michele mette in scena un combattimento tra un gruppo di matite colorate e una matita/capo che rappresenta lui stesso. Nel gioco la matita/capo vince sempre le matite/nemici facendole cadere una per volta.",
            },
            {
                id: "B",
                text: "Un combattimento tra matite colorate, in cui le matite nemiche riescono a battere la matita capo.",
                correct: false,
                explanation:
                    "Nel testo avviene esattamente il contrario. È la matita/capo di Michele a vincere sempre contro le matite nemiche.",
            },
            {
                id: "C",
                text: "Uno scontro tra matite nere e colorate, in cui alternativamente riescono ad imporsi come vincitori o la matita capo o le matite nemiche.",
                correct: false,
                explanation:
                    "Il risultato del gioco non è alternato. Il brano specifica che la matita/capo vince sempre, una caratteristica che rende il gioco stereotipato e ripetitivo.",
            },
            {
                id: "D",
                text: "Una battaglia tra matite, in cui la matita capo e le matite nemiche si affrontano in duello che non prevede né vinti né vincitori.",
                correct: false,
                explanation:
                    "Il gioco prevede invece un vincitore preciso. La matita/capo sconfigge le altre matite una alla volta.",
            },
        ],
    },

    {
        id: 15,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 3,
        passage: passages.passage03,
        question:
            "Quale intervento introducono gli insegnanti per aiutare Michele?",
        answers: [
            {
                id: "A",
                text: "Un intervento basato sulla sostituzione degli obiettivi didattici (apprendimento delle operazioni di addizione e sottrazione), con nuovi e diversi obiettivi, finalizzati a favorire l'inserimento di Michele nel gruppo dei compagni, i quali vengono gradualmente coinvolti nell'attività di gioco del ragazzo.",
                correct: false,
                explanation:
                    "Gli obiettivi matematici non vengono abbandonati. Al contrario, il gioco viene utilizzato proprio per introdurre progressivamente addizione, sottrazione e relativo linguaggio matematico.",
            },
            {
                id: "B",
                text: "Un intervento basato sull'introduzione di nuove matite e di nuovi compagni all'interno del gioco, poiché ciò che importa non è tanto l'acquisizione delle nozioni di addizione e sottrazione, quanto assicurare che Michele possa integrarsi nel gruppo classe, apprendendo a gestire situazioni-problema di struttura e difficoltà via via maggiori.",
                correct: false,
                explanation:
                    "Il coinvolgimento dei compagni e l'aumento della complessità sono presenti, ma il testo non considera secondario l'apprendimento di addizione e sottrazione. Queste operazioni costituiscono proprio parte degli obiettivi del percorso.",
            },
            {
                id: "C",
                text: "Un intervento che prevede la partecipazione al gioco anche di altri compagni, in modo da proporre a Michele situazioni problematiche di crescente difficoltà, per la risoluzione delle quali occorre mettere in campo abilità ed operazioni collegate al linguaggio della matematica.",
                correct: true,
                explanation:
                    "Gli insegnanti trasformano il gioco spontaneo di Michele in uno strumento didattico, coinvolgendo alcuni compagni e aumentando gradualmente la complessità delle situazioni. Attraverso il gioco vengono introdotte addizione, sottrazione e riformulazioni in linguaggio matematico.",
            },
            {
                id: "D",
                text: "Un intervento che permette in modo casuale e non programmato ai compagni di partecipare al gioco di Michele, per integrarlo nel gruppo ed “alleggerire” le ore di matematica per l’intera classe.",
                correct: false,
                explanation:
                    "Il coinvolgimento dei compagni avviene in «momenti programmati», non casualmente. Inoltre l'obiettivo non è alleggerire la lezione, ma favorire l'apprendimento matematico di Michele.",
            },
        ],
    },

    {
        id: 16,
        area: "linguistica-logica",
        category: "formazione-delle-parole",
        difficulty: 2,
        question:
            "Indicare quale tra i nomi proposti non è primitivo bensì derivato:",
        answers: [
            {
                id: "A",
                text: "Rumore.",
                correct: false,
                explanation:
                    "«Rumore» è considerato un nome primitivo, cioè non formato mediante l'aggiunta di affissi a un'altra parola italiana di base.",
            },
            {
                id: "B",
                text: "Boscaiolo.",
                correct: true,
                explanation:
                    "«Boscaiolo» è un nome derivato formato a partire da «bosco» mediante il suffisso «-aiolo». Indica una persona che lavora nel bosco o svolge attività legate al taglio del legname.",
            },
            {
                id: "C",
                text: "Forbici.",
                correct: false,
                explanation:
                    "«Forbici» non deriva, nell'analisi morfologica scolastica, da un'altra parola italiana mediante un suffisso produttivo. È quindi classificato come nome primitivo.",
            },
            {
                id: "D",
                text: "Rapina.",
                correct: false,
                explanation:
                    "Nella classificazione richiesta dal quesito «rapina» è considerato un nome primitivo. L'elemento chiaramente derivato tra le alternative è «boscaiolo».",
            },
        ],
    },

    {
        id: 17,
        area: "linguistica-logica",
        category: "grammatica-participio",
        difficulty: 2,
        question:
            "Nella frase \"Mario ed Alfredo sono due uomini ammalianti\", quale funzione svolge il participio presente?",
        answers: [
            {
                id: "A",
                text: "Verbo.",
                correct: false,
                explanation:
                    "«Ammalianti» deriva dal participio presente del verbo «ammaliare», ma nella frase non costituisce il predicato verbale. Qualifica invece il nome «uomini».",
            },
            {
                id: "B",
                text: "Avverbio.",
                correct: false,
                explanation:
                    "Un avverbio modifica generalmente un verbo, un aggettivo o un altro avverbio. «Ammalianti» modifica invece direttamente il sostantivo «uomini».",
            },
            {
                id: "C",
                text: "Sostantivo.",
                correct: false,
                explanation:
                    "In questo contesto «ammalianti» non indica autonomamente persone o cose. È usato per attribuire una qualità agli uomini nominati nella frase.",
            },
            {
                id: "D",
                text: "Aggettivo.",
                correct: true,
                explanation:
                    "Il participio presente «ammalianti» svolge funzione di aggettivo qualificativo perché attribuisce una caratteristica ai due uomini. Equivale semanticamente a «affascinanti» o «seducenti».",
            },
        ],
    },

    {
        id: 18,
        area: "linguistica-logica",
        category: "grammatica-pronomi",
        difficulty: 2,
        question:
            "Quale tra i seguenti è utilizzato unicamente come pronome indefinito?",
        answers: [
            {
                id: "A",
                text: "Ogni.",
                correct: false,
                explanation:
                    "«Ogni» viene utilizzato come aggettivo indefinito davanti a un sostantivo, per esempio «ogni giorno». Non è usato unicamente come pronome.",
            },
            {
                id: "B",
                text: "Qualche.",
                correct: false,
                explanation:
                    "«Qualche» accompagna normalmente un nome, come in «qualche persona», e svolge quindi funzione di aggettivo indefinito.",
            },
            {
                id: "C",
                text: "Niente.",
                correct: true,
                explanation:
                    "«Niente» è utilizzato come pronome indefinito con il significato di «nessuna cosa», per esempio «non ho visto niente». Non accompagna un sostantivo con funzione aggettivale.",
            },
            {
                id: "D",
                text: "Qualsiasi.",
                correct: false,
                explanation:
                    "«Qualsiasi» può accompagnare un nome, come in «qualsiasi persona», assumendo funzione di aggettivo indefinito. Non è quindi utilizzato unicamente come pronome.",
            },
        ],
    },

    {
        id: 19,
        area: "linguistica-logica",
        category: "grammatica-avverbio",
        difficulty: 2,
        question:
            "Indicare quale tra le alternative completa correttamente la seguente affermazione: “_____ è una parte invariabile del discorso che si giustappone ai verbi per determinarne l'azione nello spazio, nel tempo o nelle modalità.”.",
        answers: [
            {
                id: "A",
                text: "La congiunzione.",
                correct: false,
                explanation:
                    "La congiunzione serve principalmente a collegare parole o proposizioni, come «e», «ma», «perché». Non determina l'azione del verbo nello spazio, nel tempo o nel modo.",
            },
            {
                id: "B",
                text: "L’avverbio.",
                correct: true,
                explanation:
                    "L'avverbio è una parte invariabile del discorso e può precisare il significato di un verbo indicando, per esempio, luogo, tempo o modo: «qui», «ieri», «bene».",
            },
            {
                id: "C",
                text: "Il pronome.",
                correct: false,
                explanation:
                    "Il pronome sostituisce generalmente un nome o un altro elemento nominale per evitare ripetizioni. Non svolge la funzione descritta nella definizione.",
            },
            {
                id: "D",
                text: "L’aggettivo.",
                correct: false,
                explanation:
                    "L'aggettivo modifica principalmente un nome attribuendogli una qualità o determinandolo. Inoltre, a differenza dell'avverbio, normalmente varia per genere e numero.",
            },
        ],
    },

    {
        id: 20,
        area: "linguistica-logica",
        category: "lessico-sinonimi",
        difficulty: 2,
        question:
            "Quale tra i seguenti termini è sinonimo di \"silloge\"?",
        answers: [
            {
                id: "A",
                text: "Raccolta.",
                correct: true,
                explanation:
                    "«Silloge» significa raccolta o collezione di testi, componimenti o documenti riuniti secondo un determinato criterio. «Raccolta» è quindi il sinonimo corretto.",
            },
            {
                id: "B",
                text: "Edificio.",
                correct: false,
                explanation:
                    "«Edificio» indica una costruzione destinata a essere utilizzata come abitazione, sede o altro spazio. Non ha alcun rapporto semantico con «silloge».",
            },
            {
                id: "C",
                text: "Segreto.",
                correct: false,
                explanation:
                    "«Segreto» indica qualcosa che non deve essere conosciuto o divulgato. Non significa raccolta di testi o materiali.",
            },
            {
                id: "D",
                text: "Sentimento.",
                correct: false,
                explanation:
                    "«Sentimento» indica uno stato affettivo o emotivo. È semanticamente diverso da «silloge», che significa raccolta.",
            },
        ],
    },
    {
        id: 21,
        area: "linguistica-logica",
        category: "lessico-contrari",
        difficulty: 2,
        question:
            "\"Congruo\" è il contrario di uno dei seguenti termini, quale?",
        answers: [
            {
                id: "A",
                text: "Conforme.",
                correct: false,
                explanation:
                    "«Conforme» significa corrispondente, adeguato o coerente con qualcosa. Ha quindi un significato vicino a «congruo», non opposto.",
            },
            {
                id: "B",
                text: "Perfetto.",
                correct: false,
                explanation:
                    "«Perfetto» indica qualcosa di completo o privo di difetti. Non costituisce il contrario diretto di «congruo».",
            },
            {
                id: "C",
                text: "Inadeguato.",
                correct: true,
                explanation:
                    "«Congruo» significa adeguato, proporzionato, conveniente rispetto a una determinata situazione. «Inadeguato» esprime precisamente il significato contrario.",
            },
            {
                id: "D",
                text: "Dilazionato.",
                correct: false,
                explanation:
                    "«Dilazionato» significa rinviato o distribuito nel tempo. Non ha un rapporto di opposizione semantica con «congruo».",
            },
        ],
    },

    {
        id: 22,
        area: "linguistica-logica",
        category: "lessico",
        difficulty: 2,
        question:
            "Un ragionamento capzioso è:",
        answers: [
            {
                id: "A",
                text: "Ingannevole.",
                correct: true,
                explanation:
                    "Un ragionamento «capzioso» è costruito in modo da sembrare corretto, ma contiene insidie che possono trarre in errore. «Ingannevole» è quindi il significato più adatto.",
            },
            {
                id: "B",
                text: "Sincero.",
                correct: false,
                explanation:
                    "«Sincero» indica qualcosa di autentico e privo di intenzioni ingannevoli. È quindi quasi opposto al significato di «capzioso».",
            },
            {
                id: "C",
                text: "Ineccepibile.",
                correct: false,
                explanation:
                    "Un ragionamento ineccepibile è corretto e non presenta elementi criticabili. Un ragionamento capzioso, invece, può apparire valido pur essendo fuorviante.",
            },
            {
                id: "D",
                text: "Rigoroso.",
                correct: false,
                explanation:
                    "«Rigoroso» indica precisione e coerenza metodologica. Non implica l'intenzione di trarre in inganno propria di un ragionamento capzioso.",
            },
        ],
    },

    {
        id: 23,
        area: "linguistica-logica",
        category: "lessico-sinonimi",
        difficulty: 3,
        question:
            "In ogni coppia i due vocaboli possono assumere sostanzialmente lo stesso significato (sinonimi), tranne in una. Si individui la coppia “scorretta”.",
        answers: [
            {
                id: "A",
                text: "Lapis/matita.",
                correct: false,
                explanation:
                    "«Lapis» è un termine utilizzato, soprattutto in alcune aree d'Italia, con il significato di matita. La coppia può quindi essere considerata sinonimica.",
            },
            {
                id: "B",
                text: "Spelonca/caverna.",
                correct: false,
                explanation:
                    "«Spelonca» indica una grotta o una caverna, spesso con sfumatura negativa o figurata. I due vocaboli possono quindi assumere sostanzialmente lo stesso significato.",
            },
            {
                id: "C",
                text: "Lordo/imbrattato.",
                correct: false,
                explanation:
                    "«Lordo» può significare sporco o sudicio e «imbrattato» indica qualcosa reso sporco. Nei contesti appropriati i due termini sono semanticamente vicini.",
            },
            {
                id: "D",
                text: "Barattolo/scambio.",
                correct: true,
                explanation:
                    "«Barattolo» indica normalmente un recipiente, mentre «scambio» indica il dare qualcosa ricevendo qualcos'altro. Non sono sinonimi; probabilmente l'inganno deriva dalla somiglianza con «baratto», che invece significa scambio.",
            },
        ],
    },

    {
        id: 24,
        area: "linguistica-logica",
        category: "analisi-del-periodo",
        difficulty: 2,
        question:
            "Individuare la proposizione incidentale all'interno del seguente periodo: \"Jasmine, ed era l'ora, ha finalmente lasciato l'uomo con cui stava ormai da anni e che la tradiva da tempo\".",
        answers: [
            {
                id: "A",
                text: "E che la tradiva da tempo.",
                correct: false,
                explanation:
                    "«E che la tradiva da tempo» è una proposizione relativa coordinata alla precedente relativa. Fornisce un'informazione sull'uomo.",
            },
            {
                id: "B",
                text: "Ed era l'ora.",
                correct: true,
                explanation:
                    "«Ed era l'ora» è inserita nel periodo come commento autonomo del parlante e potrebbe essere eliminata senza compromettere la struttura sintattica principale. È quindi una proposizione incidentale.",
            },
            {
                id: "C",
                text: "Jasmine ha lasciato l'uomo.",
                correct: false,
                explanation:
                    "Questa è la struttura fondamentale della proposizione principale, non un inciso. Contiene il nucleo informativo centrale della frase.",
            },
            {
                id: "D",
                text: "Con cui stava ormai da anni.",
                correct: false,
                explanation:
                    "Questa è una subordinata relativa riferita a «l'uomo». Specifica da quanto tempo Jasmine aveva una relazione con lui.",
            },
        ],
    },

    {
        id: 25,
        area: "linguistica-logica",
        category: "analisi-logica",
        difficulty: 2,
        question:
            "Indicare quale funzione logica svolge la parte della frase scritta in caratteri maiuscoli: \"Mia figlia è fatta così, ha sempre la testa FRA LE NUVOLE.\".",
        answers: [
            {
                id: "A",
                text: "Complemento di moto a luogo / moto a luogo figurato.",
                correct: false,
                explanation:
                    "Non viene descritto uno spostamento verso un luogo. La testa è figuratamente già «fra le nuvole», quindi manca l'idea di moto a luogo.",
            },
            {
                id: "B",
                text: "Complemento di moto per luogo / moto per luogo figurato.",
                correct: false,
                explanation:
                    "Il moto per luogo indica un percorso attraverso uno spazio. La frase non descrive alcun movimento attraverso le nuvole.",
            },
            {
                id: "C",
                text: "Complemento di stato in luogo / stato in luogo figurato.",
                correct: true,
                explanation:
                    "L'espressione «fra le nuvole» indica figuratamente la condizione in cui si trova la persona, cioè distratta o assorta. Dal punto di vista dell'analisi logica viene interpretata come stato in luogo figurato.",
            },
            {
                id: "D",
                text: "Complemento di moto entro luogo circoscritto.",
                correct: false,
                explanation:
                    "Non vi è alcun movimento compiuto all'interno di un luogo circoscritto. L'espressione ha invece valore statico e figurato.",
            },
        ],
    },

    {
        id: 26,
        area: "linguistica-logica",
        category: "analisi-logica",
        difficulty: 3,
        question:
            "Individuare la frase che contiene un complemento di causa efficiente.",
        answers: [
            {
                id: "A",
                text: "L'aeroporto di Fiumicino è momentaneamente chiuso a causa del maltempo.",
                correct: false,
                explanation:
                    "«A causa del maltempo» è un complemento di causa: indica il motivo della chiusura. Non è causa efficiente perché non dipende da un verbo passivo indicando ciò che compie l'azione.",
            },
            {
                id: "B",
                text: "La Sagrada Familia è stata progettata dal famoso architetto Antoni Gaudí.",
                correct: false,
                explanation:
                    "«Dal famoso architetto Antoni Gaudí» indica una persona che compie l'azione espressa dal verbo passivo. È quindi complemento d'agente, non di causa efficiente.",
            },
            {
                id: "C",
                text: "Dopo la separazione, Chiara ha sofferto di depressione per anni.",
                correct: false,
                explanation:
                    "La frase non presenta una costruzione passiva con un'entità non animata responsabile dell'azione. Non contiene quindi un complemento di causa efficiente.",
            },
            {
                id: "D",
                text: "Tutti i fiori in giardino sono stati sradicati dal forte vento.",
                correct: true,
                explanation:
                    "«Dal forte vento» indica l'entità non animata che produce l'azione nella costruzione passiva «sono stati sradicati». Questo è precisamente un complemento di causa efficiente.",
            },
        ],
    },

    {
        id: 27,
        area: "linguistica-logica",
        category: "logica-ordinamenti",
        difficulty: 4,
        question:
            "Il corso di design è più costoso del corso di grafica pubblicitaria, ma a sua volta il corso di grafica pubblicitaria è più economico del corso di fotografia, inoltre il corso di creazione siti web è più caro del corso di fotografia, ma più economico del corso di design. Infine il corso di fotoshop è più costoso del corso di grafica pubblicitaria ma più economico del corso di creazione siti web. Quale tra le seguenti affermazioni è certamente vera?",
        answers: [
            {
                id: "A",
                text: "Non si sa se il corso di fotoshop sia più o meno costoso del corso di fotografia.",
                correct: true,
                explanation:
                    "Dai dati otteniamo design > creazione siti web > fotografia > grafica pubblicitaria. Sappiamo inoltre che creazione siti web > fotoshop > grafica pubblicitaria, ma non viene stabilita la relazione tra fotoshop e fotografia. Potrebbe essere più costoso o meno costoso.",
            },
            {
                id: "B",
                text: "Il corso di creazione siti web è più economico del corso di grafica pubblicitaria.",
                correct: false,
                explanation:
                    "È vero il contrario. Il corso di creazione siti web è più caro di fotografia, che a sua volta è più cara di grafica pubblicitaria.",
            },
            {
                id: "C",
                text: "Il corso di fotografia è più caro del corso di fotoshop ma più economico del corso di creazione siti web.",
                correct: false,
                explanation:
                    "Fotografia è certamente più economica di creazione siti web, ma non sappiamo se sia più o meno costosa di fotoshop. Questa parte della conclusione non è quindi garantita.",
            },
            {
                id: "D",
                text: "Non si sa se il corso di fotoshop sia più o meno costoso del corso di design.",
                correct: false,
                explanation:
                    "Sappiamo che fotoshop è più economico di creazione siti web e che quest'ultimo è più economico di design. Di conseguenza fotoshop è certamente più economico di design.",
            },
        ],
    },

    {
        id: 28,
        area: "linguistica-logica",
        category: "logica-associazioni",
        difficulty: 3,
        question:
            "Quale dei seguenti termini può essere inserito tra le parentesi assumendo un significato associabile sia al termine che precede che a quello che segue? Locale (...?...) Patrimonio.",
        answers: [
            {
                id: "A",
                text: "Cassaforte.",
                correct: false,
                explanation:
                    "«Cassaforte» può essere associata a un patrimonio, ma non crea un'associazione altrettanto naturale e generale con «locale» nel senso richiesto dall'esercizio.",
            },
            {
                id: "B",
                text: "Gestione.",
                correct: true,
                explanation:
                    "«Gestione» può essere associato a «locale» nell'espressione «gestione locale» e a «patrimonio» nell'espressione «gestione del patrimonio». È quindi il termine che costruisce una relazione significativa con entrambi.",
            },
            {
                id: "C",
                text: "Bar.",
                correct: false,
                explanation:
                    "«Bar» può essere un locale, ma non forma un'associazione significativa con «patrimonio» nel senso richiesto dal quesito.",
            },
            {
                id: "D",
                text: "Pub.",
                correct: false,
                explanation:
                    "Un pub è certamente un tipo di locale, ma non è semanticamente associabile a «patrimonio» nel modo richiesto.",
            },
        ],
    },

    {
        id: 29,
        area: "linguistica-logica",
        category: "logica-relazioni",
        difficulty: 3,
        question:
            "Se S>P, Q>P, Q<R, quale delle seguenti affermazioni è sicuramente vera?",
        answers: [
            {
                id: "A",
                text: "R>S.",
                correct: false,
                explanation:
                    "Sappiamo che R è maggiore di Q e che Q è maggiore di P, ma non abbiamo un confronto diretto tra R e S. R potrebbe essere maggiore oppure minore di S.",
            },
            {
                id: "B",
                text: "S>Q.",
                correct: false,
                explanation:
                    "S e Q sono entrambi maggiori di P, ma non viene fornita alcuna relazione tra loro. Non possiamo stabilire quale dei due sia maggiore.",
            },
            {
                id: "C",
                text: "R<S.",
                correct: false,
                explanation:
                    "Anche questa relazione non può essere ricavata. Le informazioni consentono soltanto di stabilire che R > Q > P.",
            },
            {
                id: "D",
                text: "P<R.",
                correct: true,
                explanation:
                    "Poiché Q>P e Q<R, abbiamo R>Q>P. Per la proprietà transitiva dell'ordine segue necessariamente che R>P, cioè P<R.",
            },
        ],
    },

    {
        id: 30,
        area: "linguistica-logica",
        category: "logica-classificazione",
        difficulty: 2,
        question:
            "Quali elementi eliminerebbe dal seguente gruppo? tunica - elmo - casco - loden - coppola - cuffia.",
        answers: [
            {
                id: "A",
                text: "Tunica - elmo.",
                correct: false,
                explanation:
                    "La tunica è un indumento per il corpo, mentre l'elmo è un copricapo protettivo. Non appartengono quindi alla stessa categoria da eliminare.",
            },
            {
                id: "B",
                text: "Casco - elmo.",
                correct: false,
                explanation:
                    "Casco ed elmo sono entrambi oggetti indossati sulla testa e risultano coerenti con coppola e cuffia. Non sono gli elementi estranei.",
            },
            {
                id: "C",
                text: "Tunica - loden.",
                correct: true,
                explanation:
                    "Tunica e loden sono indumenti destinati principalmente a coprire il corpo. Elmo, casco, coppola e cuffia sono invece tutti copricapi, quindi i primi due sono gli elementi da eliminare.",
            },
            {
                id: "D",
                text: "Coppola - cuffia.",
                correct: false,
                explanation:
                    "Coppola e cuffia sono entrambe forme di copricapo. Appartengono quindi allo stesso gruppo di casco ed elmo.",
            },
        ],
    },

    {
        id: 31,
        area: "linguistica-logica",
        category: "logica-analogie",
        difficulty: 2,
        question:
            "Se \"Cane\" sta a \"abbaiare, guaire, ringhiare, latrare, ululare\" allora è logico che \"Cicala\" stia a:",
        answers: [
            {
                id: "A",
                text: "Frinire, stridere.",
                correct: true,
                explanation:
                    "«Frinire» è il verbo tipicamente utilizzato per indicare il verso della cicala; anche «stridere» può descrivere un suono acuto e penetrante. La relazione è quindi animale → suoni prodotti.",
            },
            {
                id: "B",
                text: "Tubare, grugare.",
                correct: false,
                explanation:
                    "«Tubare» è tipico soprattutto dei colombi e «grugare» è anch'esso associato a determinati uccelli. Non descrivono il verso della cicala.",
            },
            {
                id: "C",
                text: "Zillare, nitrire.",
                correct: false,
                explanation:
                    "«Nitrire» è il verso del cavallo. La coppia non corrisponde quindi ai suoni caratteristici della cicala.",
            },
            {
                id: "D",
                text: "Sibilare, soffiare.",
                correct: false,
                explanation:
                    "«Sibilare» e «soffiare» possono essere associati ad altri animali o a fenomeni diversi. La cicala è caratteristicamente descritta come un insetto che frinisce.",
            },
        ],
    },

    {
        id: 32,
        area: "linguistica-logica",
        category: "logica-parole",
        difficulty: 4,
        question:
            "Individuare il termine che completa logicamente la proporzione. \"paio\" sta a \"panico\" come \"alea\" sta a ......",
        answers: [
            {
                id: "A",
                text: "Allegra.",
                correct: false,
                explanation:
                    "«Allegra» non riproduce la stessa trasformazione applicata a «paio» per ottenere «panico». Le lettere aggiunte e la loro posizione sono differenti.",
            },
            {
                id: "B",
                text: "Altera.",
                correct: true,
                explanation:
                    "Da «paio» a «panico» le lettere originali rimangono nello stesso ordine e vengono inserite nuove consonanti: PA-I-O → PA-N-I-C-O. Analogamente ALEA diventa AL-T-E-R-A, cioè «altera».",
            },
            {
                id: "C",
                text: "Arresa.",
                correct: false,
                explanation:
                    "«Arresa» non conserva la struttura delle lettere di «alea» secondo il modello mostrato dalla prima coppia. Non applica quindi la stessa regola.",
            },
            {
                id: "D",
                text: "Altare.",
                correct: false,
                explanation:
                    "Anche «altare» modifica l'ordine o la struttura richiesta rispetto ad «alea». Il termine coerente con la trasformazione è «altera».",
            },
        ],
    },

    {
        id: 33,
        area: "linguistica-logica",
        category: "logica-analogie",
        difficulty: 2,
        question:
            "Se \"Infermiere\" sta a \"Ospedale\" allora \"..?..\" sta a \"..?..\". Completare in modo analogo.",
        answers: [
            {
                id: "A",
                text: "Negozio - Commesso.",
                correct: false,
                explanation:
                    "La relazione è presentata nell'ordine luogo → professione, mentre «Infermiere - Ospedale» segue l'ordine professione → luogo di lavoro.",
            },
            {
                id: "B",
                text: "Classe - Insegnante.",
                correct: false,
                explanation:
                    "Anche qui l'ordine è invertito: prima viene il luogo e poi la professione. Per rispettare l'analogia dovrebbe essere «Insegnante - Classe».",
            },
            {
                id: "C",
                text: "Fabbrica - Operaio.",
                correct: false,
                explanation:
                    "La relazione semantica è corretta, ma l'ordine è opposto rispetto a «Infermiere - Ospedale». La proporzione richiede prima il lavoratore e poi il luogo.",
            },
            {
                id: "D",
                text: "Ristoratore - Ristorante.",
                correct: true,
                explanation:
                    "L'infermiere svolge la propria attività nell'ospedale; analogamente il ristoratore svolge la propria attività nel ristorante. La relazione professione → luogo di lavoro è mantenuta nello stesso ordine.",
            },
        ],
    },

    {
        id: 34,
        area: "linguistica-logica",
        category: "logica-deduttiva",
        difficulty: 4,
        question:
            "Tutte le amiche di Cecilia si truccano, la maggior parte mette la matita per occhi e non adopera fondotinta, ma tutte mettono il fard. Debora è una amica di Cecilia e quindi:",
        answers: [
            {
                id: "A",
                text: "Debora sicuramente non possiede trucchi.",
                correct: false,
                explanation:
                    "Sappiamo che tutte le amiche di Cecilia si truccano e che tutte mettono il fard. Debora quindi utilizza sicuramente almeno un prodotto cosmetico.",
            },
            {
                id: "B",
                text: "Debora sicuramente non mette il fard ma adopera il fondotinta.",
                correct: false,
                explanation:
                    "È esplicitamente stabilito che tutte le amiche di Cecilia mettono il fard. Debora non può quindi essere un'eccezione.",
            },
            {
                id: "C",
                text: "Debora potrebbe non mettere la matita per gli occhi e adoperare il fondotinta.",
                correct: true,
                explanation:
                    "La matita e l'assenza di fondotinta riguardano soltanto «la maggior parte» delle amiche, non tutte. Debora potrebbe quindi appartenere alla minoranza che non mette la matita e usa il fondotinta; sappiamo soltanto con certezza che si trucca e mette il fard.",
            },
            {
                id: "D",
                text: "Debora si trucca con il fard e la matita per gli occhi.",
                correct: false,
                explanation:
                    "È certo che Debora si trucchi e usi il fard, ma non è certo che utilizzi anche la matita per gli occhi. Questa caratteristica appartiene solo alla maggioranza.",
            },
        ],
    },

    {
        id: 35,
        area: "linguistica-logica",
        category: "logica-ordinamenti",
        difficulty: 2,
        question:
            "L'anguria è più rossa delle ciliegie che sono più rosse dei lamponi; le mele sono più rosse delle ciliegie e quindi:",
        answers: [
            {
                id: "A",
                text: "I lamponi sono meno rossi delle mele.",
                correct: true,
                explanation:
                    "Le ciliegie sono più rosse dei lamponi e le mele sono più rosse delle ciliegie. Per transitività, le mele sono quindi più rosse dei lamponi, ossia i lamponi sono meno rossi delle mele.",
            },
            {
                id: "B",
                text: "L'anguria è sicuramente più rossa delle mele.",
                correct: false,
                explanation:
                    "Anguria e mele sono entrambe più rosse delle ciliegie, ma non viene fornito alcun confronto diretto tra loro. Non possiamo sapere quale delle due sia più rossa.",
            },
            {
                id: "C",
                text: "Mele e anguria hanno sicuramente intensità di rosso diverse.",
                correct: false,
                explanation:
                    "Le informazioni non escludono che mele e anguria possano avere la stessa intensità di rosso. Sappiamo soltanto che entrambe superano le ciliegie.",
            },
            {
                id: "D",
                text: "I lamponi sono più rossi delle mele.",
                correct: false,
                explanation:
                    "È vero l'opposto: mele > ciliegie > lamponi. I lamponi sono quindi meno rossi delle mele.",
            },
        ],
    },

    {
        id: 36,
        area: "linguistica-logica",
        category: "logica-proposizionale",
        difficulty: 4,
        question:
            "“So che se si inceppa la carta, la stampante non funziona. Quale frase tra le seguenti è corretta?”.",
        answers: [
            {
                id: "A",
                text: "Se la stampante non funziona, ciò significa che la carta non si è inceppata.",
                correct: false,
                explanation:
                    "Dal fatto che un inceppamento provochi il malfunzionamento non segue che ogni malfunzionamento escluda un inceppamento. Questa frase non deriva dalla premessa.",
            },
            {
                id: "B",
                text: "Se la stampante funziona, ciò significa che la carta non si è inceppata.",
                correct: true,
                explanation:
                    "La premessa è: se la carta si inceppa, allora la stampante non funziona. La sua contrapposta logicamente equivalente è: se la stampante funziona, allora la carta non si è inceppata.",
            },
            {
                id: "C",
                text: "Se la stampante non funziona, ciò significa che la carta si è inceppata.",
                correct: false,
                explanation:
                    "Questo sarebbe il converso della premessa e non è necessariamente vero. La stampante potrebbe non funzionare per molte altre cause.",
            },
            {
                id: "D",
                text: "Se la stampante funziona, potrebbe essersi inceppata la carta.",
                correct: false,
                explanation:
                    "Se la carta fosse inceppata, secondo la premessa la stampante non funzionerebbe. Una stampante funzionante esclude quindi l'inceppamento previsto dalla condizione.",
            },
        ],
    },

    {
        id: 37,
        area: "linguistica-logica",
        category: "logica-sequenze",
        difficulty: 2,
        question:
            "Identificare la sequenza corretta: 1) lavare le tende sporche 2) accorgersi che le tende sono sporche 3) risalire la scala con le tende pulite 4) salire su una scala 5) staccare le tende sporche e scendere dalla scala 6) appendere le tende pulite.",
        answers: [
            {
                id: "A",
                text: "4, 2, 1, 3, 6, 5.",
                correct: false,
                explanation:
                    "Non avrebbe senso salire sulla scala prima di accorgersi che le tende sono sporche. Inoltre il lavaggio deve avvenire dopo averle staccate.",
            },
            {
                id: "B",
                text: "4, 6, 1, 5, 2, 3.",
                correct: false,
                explanation:
                    "Questa sequenza prevede di appendere tende pulite prima di averle lavate e addirittura prima di aver riconosciuto che sono sporche. L'ordine temporale è incoerente.",
            },
            {
                id: "C",
                text: "2, 4, 5, 1, 3, 6.",
                correct: true,
                explanation:
                    "Prima ci si accorge che le tende sono sporche; poi si sale sulla scala, le si stacca e si scende, quindi si lavano. Infine si risale con le tende pulite e le si appende: 2, 4, 5, 1, 3, 6.",
            },
            {
                id: "D",
                text: "5, 4, 1, 3, 6, 2.",
                correct: false,
                explanation:
                    "La sequenza inizia con lo staccare le tende senza essere prima saliti sulla scala e termina con l'accorgersi che erano sporche. Non rispetta la successione logica delle azioni.",
            },
        ],
    },

    {
        id: 38,
        area: "linguistica-logica",
        category: "logica-parole",
        difficulty: 3,
        question:
            "Inserire il termine che permetta di completare la prima parola e formulare l'inizio della seconda in modo che entrambe abbiano senso compiuto e siano di uso corrente: TI (?) RE.",
        answers: [
            {
                id: "A",
                text: "RATA.",
                correct: false,
                explanation:
                    "Inserendo «RATA» non si ottengono due parole di uso corrente attraverso le combinazioni richieste con «TI» e «RE».",
            },
            {
                id: "B",
                text: "BARA.",
                correct: false,
                explanation:
                    "La combinazione con «BARA» non permette di formare contemporaneamente due parole italiane corrette utilizzando la parte precedente e quella successiva.",
            },
            {
                id: "C",
                text: "CENA.",
                correct: false,
                explanation:
                    "«CENA» è una parola autonoma, ma non consente di completare «TI» e iniziare correttamente la parola che termina con «RE» secondo la regola dell'esercizio.",
            },
            {
                id: "D",
                text: "SANA.",
                correct: true,
                explanation:
                    "Con «SANA» si ottengono due parole di uso comune: TI + SANA = «tisana» e SANA + RE = «sanare». Soddisfa quindi entrambe le condizioni.",
            },
        ],
    },

    {
        id: 39,
        area: "linguistica-logica",
        category: "lessico-modi-di-dire",
        difficulty: 2,
        question:
            "Se l'espressione \"Andare, camminare a testa alta\" sta a \"avere orgogliosa coscienza della propria onestà, della propria integrità, del proprio merito\" allora l'espressione \"Partire col piede sbagliato\" sta a:",
        answers: [
            {
                id: "A",
                text: "Non sapere a chi rivolgersi per essere aiutati.",
                correct: false,
                explanation:
                    "L'espressione non riguarda la mancanza di persone a cui chiedere aiuto. Fa riferimento all'inizio negativo di un'attività o di una situazione.",
            },
            {
                id: "B",
                text: "Iniziare qualcosa con una mossa errata.",
                correct: true,
                explanation:
                    "«Partire col piede sbagliato» significa cominciare male un'attività, un rapporto o una situazione, compiendo subito un errore o creando condizioni sfavorevoli.",
            },
            {
                id: "C",
                text: "Correre velocemente.",
                correct: false,
                explanation:
                    "Il significato dell'espressione è figurato e non riguarda il modo fisico di camminare o correre.",
            },
            {
                id: "D",
                text: "Prostrarsi davanti a qualcuno per ottenere qualcosa.",
                correct: false,
                explanation:
                    "Questa descrizione riguarda un atteggiamento di sottomissione o adulazione. Non corrisponde al modo di dire «partire col piede sbagliato».",
            },
        ],
    },

    {
        id: 40,
        area: "linguistica-logica",
        category: "logica-serie-figurali",
        difficulty: 4,
        question:
            "Quale delle figure proposte integra la serie?",
        questionImage: {
            src: `${import.meta.env.BASE_URL}resources/questions/simulation12/domanda-40.png`,
            alt: "Serie figurale con tre griglie e quattro possibili figure di completamento numerate da 1 a 4",
        },
        answers: [
            {
                id: "A",
                text: "La figura 1).",
                correct: true,
                explanation:
                    "La Figura 1 prosegue correttamente la trasformazione mostrata nelle griglie precedenti: i simboli vengono ricollocati mantenendo la successione e le variazioni di orientamento previste dalla serie. La disposizione della freccia diagonale e dei simboli lungo il bordo inferiore è coerente con il passaggio precedente.",
            },
            {
                id: "B",
                text: "La figura 2).",
                correct: false,
                explanation:
                    "Nella Figura 2 la disposizione e l'orientamento dei simboli non rispettano completamente la trasformazione applicata nelle figure precedenti. In particolare, alcuni elementi lungo la parte inferiore della griglia risultano collocati nella sequenza sbagliata.",
            },
            {
                id: "C",
                text: "La figura 3).",
                correct: false,
                explanation:
                    "La Figura 3 presenta una configurazione simile, ma la freccia interna e la sequenza dei simboli sul bordo non corrispondono alla progressione della serie. Introduce quindi una disposizione che interrompe la regola.",
            },
            {
                id: "D",
                text: "La figura 4).",
                correct: false,
                explanation:
                    "La Figura 4 modifica in modo non coerente sia la posizione della freccia diagonale sia l'ordine degli altri simboli. Non continua quindi il movimento e la rotazione osservabili nelle tre griglie date.",
            },
        ],
    },
    {
        id: 41,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-contemporanea",
        difficulty: 3,
        question:
            "A differenza dei trattati di Saint Germain-en-Laye (settembre 1919), Neuilly (novembre 1919), Sèvres (agosto 1920) e Trianon (novembre 1920), tutti a chiusura della prima guerra mondiale, quello di Versailles del giugno 1919 è riconosciuto come il più importante per l'evoluzione geopolitica futura dell'Europa in quanto:",
        answers: [
            {
                id: "A",
                text: "Disegna i nuovi assetti di Austria e Ungheria, ridimensionandole a seguito del crollo dell'impero austro-ungarico.",
                correct: false,
                explanation:
                    "La ridefinizione territoriale dell'ex Impero austro-ungarico fu affrontata soprattutto attraverso altri trattati del dopoguerra, in particolare Saint-Germain e Trianon. Non è questo l'elemento caratterizzante del trattato di Versailles.",
            },
            {
                id: "B",
                text: "Indica nella Germania la principale responsabile del conflitto.",
                correct: true,
                explanation:
                    "Il trattato di Versailles impose alla Germania pesanti condizioni territoriali, militari ed economiche e le attribuì la responsabilità del conflitto attraverso la cosiddetta clausola di responsabilità di guerra. Le conseguenze del trattato influenzarono profondamente la politica europea dei decenni successivi.",
            },
            {
                id: "C",
                text: "Si occupa della situazione dell'impero ottomano.",
                correct: false,
                explanation:
                    "La sistemazione dell'Impero ottomano fu affrontata soprattutto con il trattato di Sèvres del 1920. Versailles riguardò principalmente la Germania.",
            },
            {
                id: "D",
                text: "Affronta per la prima volta la questione ebraica.",
                correct: false,
                explanation:
                    "La cosiddetta questione ebraica non costituisce il motivo per cui il trattato di Versailles è considerato centrale negli assetti geopolitici del primo dopoguerra.",
            },
        ],
    },

    {
        id: 42,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-contemporanea",
        difficulty: 3,
        question:
            "Il patto Briand-Kellogg è un trattato multilaterale, stilato a Parigi il 27 agosto 1928, con il fine di:",
        answers: [
            {
                id: "A",
                text: "Prevenire l'espansionismo sovietico in Europa.",
                correct: false,
                explanation:
                    "Il patto non nacque come alleanza antisovietica. Il suo obiettivo era molto più generale e riguardava il rifiuto della guerra come strumento di politica internazionale.",
            },
            {
                id: "B",
                text: "Regolare in forma laica i rapporti tra Stati e confessioni religiose.",
                correct: false,
                explanation:
                    "Il trattato non riguardava i rapporti tra Stato e religioni. Era un accordo internazionale legato alla pace e alle relazioni tra gli Stati.",
            },
            {
                id: "C",
                text: "Decolonizzare Africa e Asia.",
                correct: false,
                explanation:
                    "La decolonizzazione di Africa e Asia avvenne soprattutto nel secondo dopoguerra e non era lo scopo del patto Briand-Kellogg.",
            },
            {
                id: "D",
                text: "Eliminare la guerra quale strumento di politica internazionale.",
                correct: true,
                explanation:
                    "Il patto Briand-Kellogg del 1928 cercò di mettere fuori legge il ricorso alla guerra come mezzo per risolvere controversie internazionali. Gli Stati firmatari si impegnavano a privilegiare soluzioni pacifiche.",
            },
        ],
    },

    {
        id: 43,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-contemporanea",
        difficulty: 4,
        question:
            "In Indocina, l'opposizione alla Francia fu espressa dal Viet Minh:",
        answers: [
            {
                id: "A",
                text: "Un movimento di resistenza comunista ai giapponesi, che nel settembre del 1945 dichiarò l'indipendenza del Vietnam.",
                correct: true,
                explanation:
                    "Il Viet Minh, guidato da Ho Chi Minh, nacque come movimento indipendentista e comunista e combatté anche contro l'occupazione giapponese. Dopo la resa del Giappone, nel settembre 1945, Ho Chi Minh proclamò l'indipendenza del Vietnam.",
            },
            {
                id: "B",
                text: "Un'organizzazione vietnamita guidata da Ho chi Minh, costituita nel 1945, di ispirazione comunista.",
                correct: false,
                explanation:
                    "Il riferimento a Ho Chi Minh e all'ispirazione comunista è corretto, ma la data non lo è: il Viet Minh era stato costituito già nel 1941, non nel 1945.",
            },
            {
                id: "C",
                text: "Partito Nazionalista Vietnamita fondato nel 1913 da Suan Yat-sen, che avviò un programma di modernizzazione prima di portare il Paese alla guerra con il Giappone.",
                correct: false,
                explanation:
                    "Sun Yat-sen è una figura centrale della storia cinese, non il fondatore del Viet Minh. L'alternativa mescola elementi della storia cinese con quella vietnamita.",
            },
            {
                id: "D",
                text: "Comunisti del Vietnam meridionale, attivi dal 1957 all’interno del Fronte di liberazione nazionale nella lunga lotta contro il governo sudvietnamita e le forze esterne, soprattutto statunitensi, che lo appoggiavano.",
                correct: false,
                explanation:
                    "Questa descrizione si riferisce più propriamente ai Viet Cong, attivi nella successiva guerra del Vietnam. Il Viet Minh appartiene alla fase precedente della lotta anticoloniale.",
            },
        ],
    },

    {
        id: 44,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-contemporanea",
        difficulty: 3,
        question:
            "Nel 1956, Israele si alleò con Gran Bretagna e Francia nell’attacco all’Egitto, che aveva nazionalizzato il Canale di Suez. Il conflitto arabo-israeliano del ’56 si concluse:",
        answers: [
            {
                id: "A",
                text: "Sul piano politico con il plauso dell’ONU e della comunità internazionale.",
                correct: false,
                explanation:
                    "L'intervento contro l'Egitto non ricevette il plauso generale della comunità internazionale. Al contrario, le pressioni internazionali portarono alla cessazione delle operazioni e al ritiro.",
            },
            {
                id: "B",
                text: "Sul piano politico con la condanna dell’ONU e della comunità internazionale, esclusi gli Stati Uniti.",
                correct: false,
                explanation:
                    "Anche gli Stati Uniti esercitarono forti pressioni perché Francia, Gran Bretagna e Israele interrompessero l'operazione. L'espressione «esclusi gli Stati Uniti» rende quindi errata l'alternativa.",
            },
            {
                id: "C",
                text: "Sul piano militare con una schiacciante vittoria israeliana.",
                correct: true,
                explanation:
                    "Sul piano strettamente militare Israele ottenne rapidamente importanti successi, occupando il Sinai. Sul piano politico, però, le pressioni internazionali costrinsero le forze coinvolte al ritiro.",
            },
            {
                id: "D",
                text: "Sul piano militare con una cocente sconfitta israeliana.",
                correct: false,
                explanation:
                    "Israele non subì una sconfitta militare nella crisi di Suez. Le difficoltà dell'operazione furono soprattutto di natura politica e diplomatica.",
            },
        ],
    },

    {
        id: 45,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "educazione-civica-onu",
        difficulty: 2,
        question:
            "Completare la seguente frase con l'opzione corretta: \"L'Organizzazione delle Nazioni Unite (ONU) è un'organizzazione internazionale universale nata nel 1945...\".",
        answers: [
            {
                id: "A",
                text: "Con lo scopo di coordinare gli sforzi economici per il raggiungimento del benessere collettivo.",
                correct: false,
                explanation:
                    "La cooperazione economica rientra tra le attività dell'ONU, ma non rappresenta la finalità fondamentale per cui l'organizzazione fu istituita nel 1945.",
            },
            {
                id: "B",
                text: "Con lo scopo di facilitare gli scambi commerciali nel contesto del World Trade Organization.",
                correct: false,
                explanation:
                    "La World Trade Organization è un'organizzazione distinta dall'ONU e nacque molto più tardi. L'ONU non fu creata principalmente per regolare gli scambi commerciali.",
            },
            {
                id: "C",
                text: "Per promuovere la pace e la sicurezza internazionale attraverso un sistema di sicurezza collettivo.",
                correct: true,
                explanation:
                    "Una delle finalità centrali della nascita dell'ONU nel 1945 fu evitare nuovi conflitti mondiali e mantenere la pace e la sicurezza internazionale attraverso la cooperazione e un sistema di sicurezza collettiva.",
            },
            {
                id: "D",
                text: "Per promuovere lo sviluppo sostenibile e le tematiche ambientali.",
                correct: false,
                explanation:
                    "Lo sviluppo sostenibile è oggi un'importante area d'intervento dell'ONU, ma non rappresenta la finalità primaria indicata per la sua fondazione nel 1945.",
            },
        ],
    },

    {
        id: 46,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "seconda-guerra-mondiale",
        difficulty: 3,
        question:
            "Durante l’ultima fase della Seconda guerra mondiale, cosa rese progressivamente meno efficace l’utilizzo degli U-Boot da parte della marina tedesca?",
        answers: [
            {
                id: "A",
                text: "Il sempre più scarso rifornimento di gasolio che complicava le missioni degli U-Boot.",
                correct: false,
                explanation:
                    "I problemi logistici ebbero un peso, ma non rappresentano il fattore tecnico fondamentale indicato dal quesito per spiegare la crescente vulnerabilità dei sommergibili tedeschi.",
            },
            {
                id: "B",
                text: "Il perfezionamento dei radar e dei sonar, che permise l’individuazione dei sottomarini e la loro distruzione.",
                correct: true,
                explanation:
                    "Il miglioramento delle tecnologie alleate di rilevamento, insieme ad altre innovazioni antisommergibile, rese progressivamente più semplice individuare e colpire gli U-Boot tedeschi durante la battaglia dell'Atlantico.",
            },
            {
                id: "C",
                text: "Il progressivo aumento di sottomarini angloamericani impegnati nella Battaglia dell’Atlantico.",
                correct: false,
                explanation:
                    "La lotta antisommergibile alleata dipese soprattutto da navi di scorta, aerei, radar, sonar e intelligence. Non fu il numero dei sottomarini angloamericani a costituire il fattore decisivo indicato.",
            },
            {
                id: "D",
                text: "Il progressivo disinteresse di Hitler nell’assicurarsi il controllo dei mari.",
                correct: false,
                explanation:
                    "Il controllo delle rotte atlantiche rimase strategicamente importante. La perdita di efficacia degli U-Boot dipese soprattutto dall'evoluzione delle contromisure alleate.",
            },
        ],
    },

    {
        id: 47,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "prima-guerra-mondiale",
        difficulty: 2,
        question:
            "Da cosa prende il nome la celeberrima \"battaglia della Marna\" combattuta nelle prime fasi del Primo conflitto mondiale?",
        answers: [
            {
                id: "A",
                text: "Dal nome del nuovo mezzo corazzato francese utilizzato in battaglia, \"le Marme\".",
                correct: false,
                explanation:
                    "Non esiste un mezzo corazzato denominato in questo modo da cui avrebbe preso nome la battaglia. Il riferimento è geografico.",
            },
            {
                id: "B",
                text: "Dal rilievo montuoso tra il Belgio e la Francia, luogo principale degli scontri tra truppe tedesche e francesi.",
                correct: false,
                explanation:
                    "La Marna non è un rilievo montuoso. È un fiume della Francia settentrionale.",
            },
            {
                id: "C",
                text: "Dalla città in cui si concentrarono gli scontri tra truppe tedesche e anglo-francesi.",
                correct: false,
                explanation:
                    "Il nome non deriva da una città, ma dal fiume presso il quale si svolsero importanti combattimenti.",
            },
            {
                id: "D",
                text: "Dal fiume su cui le truppe francesi e tedesche si scontrarono.",
                correct: true,
                explanation:
                    "La battaglia prende il nome dal fiume Marna, nella Francia settentrionale. La prima battaglia della Marna, nel settembre 1914, contribuì a fermare l'avanzata tedesca verso Parigi.",
            },
        ],
    },

    {
        id: 48,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "prima-guerra-mondiale",
        difficulty: 3,
        question:
            "Cosa prevedeva il \"patto di Londra\" siglato segretamente dal governo Salandra nel 1915 con Francia e Gran Bretagna?",
        answers: [
            {
                id: "A",
                text: "L'ingresso in guerra dell'Italia, a cui sarebbero state concesse acquisizioni territoriali quali: il Trentino, parti del Tirolo, dell'Istria, della Dalmazia e altri compensi coloniali.",
                correct: true,
                explanation:
                    "Il Patto di Londra dell'aprile 1915 impegnava l'Italia a entrare in guerra a fianco dell'Intesa. In cambio venivano promesse diverse acquisizioni territoriali e compensi in caso di vittoria.",
            },
            {
                id: "B",
                text: "La neutralità dell'Italia nel conflitto fino alla fine della guerra.",
                correct: false,
                explanation:
                    "L'accordo segnò proprio il superamento della neutralità italiana. Poche settimane dopo l'Italia entrò in guerra contro l'Austria-Ungheria.",
            },
            {
                id: "C",
                text: "L'invio di derrate alimentari e militari agli alleati dell'Intesa fino all'ingresso dell'Italia nel conflitto.",
                correct: false,
                explanation:
                    "Il Patto di Londra non si limitava alla fornitura di beni. Prevedeva direttamente l'ingresso dell'Italia nel conflitto.",
            },
            {
                id: "D",
                text: "Il pieno dispiegamento della Marina italiana nella completa disposizione delle direttive inglesi, a cui sarebbe dovuta corrispondere la concessione all'Italia di vaste aree anatoliche e sul Mar Nero.",
                correct: false,
                explanation:
                    "L'accordo prevedeva compensi territoriali, ma non era strutturato nei termini descritti da questa alternativa. Il punto centrale era l'intervento militare italiano a fianco dell'Intesa.",
            },
        ],
    },

    {
        id: 49,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 2,
        question:
            "\"Non chiederci la parola che squadri da ogni lato/ l’animo nostro informe, e a lettere di fuoco/ lo dichiari e risplenda come un croco perduto in mezzo a un polveroso prato. I versi sono tratti da:",

        answers: [
            {
                id: "A",
                text: "Non chiederci la parola di eugenio montale",
                correct: true,
                explanation:
                    "gay",
            },
            {
                id: "B",
                text: "Non chiederci la parola di giovanni pascoli",
                correct: false,
                explanation:
                    "----",
            },
            {
                id: "C",
                text: "Non chiederci la parola di giuseppe ungaretti",
                correct: false,
                explanation:
                    "----",
            },
            {
                id: "D",
                text: "Non chiederci la parola di alessandro manzoni",
                correct: false,
                explanation:
                    "-----",
            },
        ],
    },
    {
        id: 50,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana-futurismo",
        difficulty: 3,
        question:
            "\"Noi vogliamo cantare l'amor del pericolo, l'abitudine all'energia e alla temerità\". Questo è il primo articolo di un importante manifesto simbolo di un movimento artistico, culturale e letterario. Quale?",
        answers: [
            {
                id: "A",
                text: "Il Manifesto del Dadaismo scritto da Tristan Tzara.",
                correct: false,
                explanation:
                    "Tristan Tzara fu uno dei principali esponenti del Dadaismo e pubblicò importanti manifesti dadaisti. La frase citata, però, appartiene al Manifesto del Futurismo e non al movimento dadaista.",
            },
            {
                id: "B",
                text: "Il Manifesto del Cavaliere Azzurro scritto da Vassilij Kandinskij.",
                correct: false,
                explanation:
                    "Vassilij Kandinskij fu una figura fondamentale dell'arte astratta e del gruppo Der Blaue Reiter, cioè Il Cavaliere Azzurro. La celebrazione del pericolo, dell'energia e della temerità è invece tipica del Futurismo.",
            },
            {
                id: "C",
                text: "Il manifesto del Futurismo scritto da Filippo Tommaso Marinetti.",
                correct: true,
                explanation:
                    "La frase è tratta dal Manifesto del Futurismo di Filippo Tommaso Marinetti, pubblicato nel 1909. Il Futurismo esaltava energia, velocità, modernità, azione e rottura con la cultura tradizionale.",
            },
            {
                id: "D",
                text: "Il Manifesto della cinematografia futurista scritto da Sergio Corazzini.",
                correct: false,
                explanation:
                    "Il quesito fa riferimento al manifesto generale del Futurismo, non a un manifesto dedicato al cinema. Inoltre Sergio Corazzini è ricordato soprattutto come poeta crepuscolare e non come autore del manifesto citato.",
            },
        ],
    },

    {
        id: 51,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 2,
        question:
            "\"Il gattopardo\" è:",
        answers: [
            {
                id: "A",
                text: "Un romanzo di Giuseppe Tomasi di Lampedusa che narra le trasformazioni della società siciliana nel Risorgimento.",
                correct: true,
                explanation:
                    "«Il Gattopardo» è il celebre romanzo di Giuseppe Tomasi di Lampedusa ambientato in Sicilia durante il Risorgimento. Attraverso la famiglia del principe di Salina racconta i cambiamenti politici e sociali legati alla fine del vecchio ordine aristocratico.",
            },
            {
                id: "B",
                text: "Un romanzo di Giorgio Bassani che narra amicizie, amori e dolori di una famiglia.",
                correct: false,
                explanation:
                    "Giorgio Bassani è autore di opere come «Il giardino dei Finzi-Contini». «Il Gattopardo» appartiene invece a Giuseppe Tomasi di Lampedusa.",
            },
            {
                id: "C",
                text: "Una raccolta di poesie di Pascoli che narra la vita bucolica delle campagne italiane.",
                correct: false,
                explanation:
                    "Giovanni Pascoli è autore di raccolte poetiche come «Myricae» e «Canti di Castelvecchio». «Il Gattopardo» non è una raccolta poetica, ma un romanzo.",
            },
            {
                id: "D",
                text: "Un romanzo di Italo Calvino che narra le peripezie di un ragazzo di città.",
                correct: false,
                explanation:
                    "Italo Calvino è autore di numerosi romanzi e racconti, ma non de «Il Gattopardo». L'opera fu scritta da Giuseppe Tomasi di Lampedusa.",
            },
        ],
    },

    {
        id: 52,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-dante",
        difficulty: 2,
        question:
            "“E quindi uscimmo a riveder le stelle”, è un verso tratto da quale opera italiana?",
        answers: [
            {
                id: "A",
                text: "\"Myricae\" di Giovanni Pascoli.",
                correct: false,
                explanation:
                    "«Myricae» è una raccolta poetica di Giovanni Pascoli. Il celebre verso proposto dal quesito appartiene invece alla «Divina Commedia».",
            },
            {
                id: "B",
                text: "\"Acque e Terre\" di Salvatore Quasimodo.",
                correct: false,
                explanation:
                    "«Acque e terre» è una raccolta poetica di Salvatore Quasimodo, autore del Novecento. Il verso citato è molto precedente e appartiene a Dante.",
            },
            {
                id: "C",
                text: "\"Lo Zibaldone\" di Giacomo Leopardi.",
                correct: false,
                explanation:
                    "Lo «Zibaldone» è la grande raccolta di pensieri e riflessioni di Giacomo Leopardi. Non contiene il verso «E quindi uscimmo a riveder le stelle».",
            },
            {
                id: "D",
                text: "L'Inferno della \"Divina Commedia\" di Dante Alighieri.",
                correct: true,
                explanation:
                    "«E quindi uscimmo a riveder le stelle» è l'ultimo verso del canto XXXIV dell'Inferno. Dante e Virgilio hanno terminato il viaggio attraverso l'Inferno e stanno tornando verso la superficie terrestre.",
            },
        ],
    },

    {
        id: 53,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 3,
        question:
            "Una celebre opera italiana si apre con una nota dell'autore che introduce il romanzo raccontando di aver trovato un antico manoscritto anonimo del Seicento in cui “si vedrà in angusto Teatro luttuose Traggedie d'horrori, e Scene di malvaggità grandiosa, con intermezi d'Imprese virtuose e buontà angeliche, opposte alle operationi diaboliche”. Di quale opera si parla?",
        answers: [
            {
                id: "A",
                text: "\"La coscienza di Zeno\" di Italo Svevo.",
                correct: false,
                explanation:
                    "«La coscienza di Zeno» si presenta attraverso gli scritti autobiografici del protagonista Zeno Cosini, pubblicati dal suo psicoanalista. Non utilizza l'espediente del manoscritto seicentesco anonimo.",
            },
            {
                id: "B",
                text: "\"I promessi sposi\" di Alessandro Manzoni.",
                correct: true,
                explanation:
                    "Manzoni apre «I promessi sposi» attraverso il celebre espediente narrativo del manoscritto anonimo del Seicento, che il narratore dichiara di aver ritrovato e successivamente riscritto in una lingua più moderna e comprensibile.",
            },
            {
                id: "C",
                text: "\"Jacopo Ortis\" di Ugo Foscolo.",
                correct: false,
                explanation:
                    "«Ultime lettere di Jacopo Ortis» di Ugo Foscolo è un romanzo epistolare composto dalle lettere del protagonista. Non prende avvio dal ritrovamento di un manoscritto seicentesco.",
            },
            {
                id: "D",
                text: "\"I Malavoglia\" di Giovanni Verga.",
                correct: false,
                explanation:
                    "«I Malavoglia» è un romanzo verista di Giovanni Verga dedicato alla famiglia Toscano. Non presenta l'espediente narrativo del manoscritto anonimo utilizzato da Manzoni.",
            },
        ],
    },

    {
        id: 54,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-astronomica",
        difficulty: 2,
        question:
            "L’anno luce corrisponde:",
        answers: [
            {
                id: "A",
                text: "Alla distanza percorsa dalla luce o da altra radiazione elettromagnetica nel vuoto.",
                correct: false,
                explanation:
                    "Questa definizione è incompleta perché non specifica l'intervallo temporale. Per definire un anno luce bisogna indicare la distanza percorsa dalla luce durante un intero anno.",
            },
            {
                id: "B",
                text: "Alla distanza percorsa nel vuoto, in un anno, da un satellite.",
                correct: false,
                explanation:
                    "L'anno luce non riguarda il movimento di un satellite. È una misura astronomica costruita utilizzando la velocità della luce nel vuoto.",
            },
            {
                id: "C",
                text: "Alla distanza percorsa dalla luce o da altra radiazione elettromagnetica nel vuoto, in un anno.",
                correct: true,
                explanation:
                    "L'anno luce è un'unità di distanza, non di tempo. Corrisponde alla distanza percorsa dalla luce nel vuoto durante un anno, pari a circa 9,46 × 10¹² chilometri.",
            },
            {
                id: "D",
                text: "Alla distanza percorsa dalla luce o da altra radiazione elettromagnetica nel vuoto, in un mese.",
                correct: false,
                explanation:
                    "Una distanza percorsa dalla luce in un mese sarebbe molto inferiore a un anno luce. Per definizione l'intervallo temporale utilizzato è un anno.",
            },
        ],
    },
    {
        id: 55,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-coordinate-geografiche",
        difficulty: 2,
        question:
            "La latitudine rappresenta:",
        answers: [
            {
                id: "A",
                text: "La distanza angolare di un punto sulla superficie terrestre dal meridiano di Greenwich.",
                correct: false,
                explanation:
                    "La distanza angolare rispetto al meridiano di Greenwich definisce la longitudine, non la latitudine. La longitudine indica infatti quanto un punto si trova a est o a ovest del meridiano fondamentale.",
            },
            {
                id: "B",
                text: "La distanza di un punto sulla superficie terrestre dal meridiano di Greenwich.",
                correct: false,
                explanation:
                    "Anche questa alternativa fa riferimento al meridiano di Greenwich e quindi al concetto di longitudine. Inoltre le coordinate geografiche vengono espresse come distanze angolari.",
            },
            {
                id: "C",
                text: "La distanza angolare di un punto sulla superficie terrestre dall'equatore.",
                correct: true,
                explanation:
                    "La latitudine è la distanza angolare di un punto dall'equatore. Viene espressa in gradi e può essere nord oppure sud, fino a un massimo di 90° ai poli.",
            },
            {
                id: "D",
                text: "La distanza angolare di un punto sulla superficie terrestre.",
                correct: false,
                explanation:
                    "La definizione è incompleta perché non specifica rispetto a quale riferimento venga misurata la distanza angolare. Per la latitudine il riferimento fondamentale è l'equatore.",
            },
        ],
    },

    {
        id: 56,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-economica",
        difficulty: 2,
        question:
            "L'insieme di fenomeni, connessi con la crescita dell'integrazione economica, sociale e culturale tra le diverse aree del mondo è detto:",
        answers: [
            {
                id: "A",
                text: "Globalizzazione.",
                correct: true,
                explanation:
                    "La globalizzazione indica il crescente collegamento e l'interdipendenza tra diverse aree del mondo sul piano economico, sociale, culturale, tecnologico e comunicativo.",
            },
            {
                id: "B",
                text: "Global Warming.",
                correct: false,
                explanation:
                    "Global warming significa riscaldamento globale e indica l'aumento della temperatura media del pianeta. Non descrive l'integrazione economica, sociale e culturale tra diverse parti del mondo.",
            },
            {
                id: "C",
                text: "Localizzazione.",
                correct: false,
                explanation:
                    "La localizzazione riguarda il collocamento di un'attività, di un fenomeno o di una risorsa in un determinato luogo. È un concetto diverso dall'integrazione mondiale descritta nella domanda.",
            },
            {
                id: "D",
                text: "Integrazione.",
                correct: false,
                explanation:
                    "«Integrazione» è un termine generico che descrive l'unione o il coordinamento tra elementi differenti. Il fenomeno mondiale descritto specificamente dal quesito prende il nome di globalizzazione.",
            },
        ],
    },

    {
        id: 57,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-fisica",
        difficulty: 2,
        question:
            "Fra quali continenti si estende il Mare Mediterraneo?",
        answers: [
            {
                id: "A",
                text: "Africa, Europa.",
                correct: false,
                explanation:
                    "Il Mediterraneo bagna effettivamente Africa ed Europa, ma questa risposta è incompleta perché sulle sue coste si affaccia anche il continente asiatico.",
            },
            {
                id: "B",
                text: "Asia, Europa.",
                correct: false,
                explanation:
                    "Anche Asia ed Europa si affacciano sul Mediterraneo, ma manca l'Africa, che costituisce tutto il margine meridionale del bacino.",
            },
            {
                id: "C",
                text: "Africa, Asia, Europa, America Settentrionale.",
                correct: false,
                explanation:
                    "L'America Settentrionale non si affaccia sul Mediterraneo. Il mare è compreso tra Europa, Africa e Asia.",
            },
            {
                id: "D",
                text: "Africa, Asia, Europa.",
                correct: true,
                explanation:
                    "Il Mar Mediterraneo si trova tra tre continenti: Europa a nord, Africa a sud e Asia nella sua parte orientale. Per questo ha avuto storicamente un ruolo centrale nei rapporti tra queste aree.",
            },
        ],
    },

    {
        id: 58,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-italiana",
        difficulty: 2,
        question:
            "Che tipo di regione è la pianura Padana?",
        answers: [
            {
                id: "A",
                text: "Regione storico-culturale.",
                correct: false,
                explanation:
                    "Una regione storico-culturale viene individuata soprattutto sulla base di elementi storici, linguistici o culturali comuni. La Pianura Padana viene invece definita principalmente attraverso caratteristiche fisiche del territorio.",
            },
            {
                id: "B",
                text: "Regione fisica.",
                correct: true,
                explanation:
                    "La Pianura Padana è una regione fisica perché viene individuata sulla base di caratteristiche geografiche e morfologiche comuni. È la grande pianura dell'Italia settentrionale attraversata dal Po e dai suoi affluenti.",
            },
            {
                id: "C",
                text: "Non è una regione.",
                correct: false,
                explanation:
                    "La Pianura Padana può essere considerata una regione geografica in senso fisico, anche se non costituisce una regione amministrativa italiana.",
            },
            {
                id: "D",
                text: "Regione fisico-politica.",
                correct: false,
                explanation:
                    "La Pianura Padana non coincide con un'unica entità politica o amministrativa. Si estende infatti attraverso territori appartenenti a diverse regioni italiane.",
            },
        ],
    },

    {
        id: 59,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-fisica",
        difficulty: 2,
        question:
            "Se attraverso lo Stretto di Panama provenendo da est, in quale oceano arrivo?",
        answers: [
            {
                id: "A",
                text: "Oceano Indiano.",
                correct: false,
                explanation:
                    "L'Oceano Indiano si trova tra Africa, Asia e Australia e non è collegato direttamente al passaggio attraverso Panama.",
            },
            {
                id: "B",
                text: "Oceano Atlantico.",
                correct: false,
                explanation:
                    "Provenendo da est ci si trova già sul versante atlantico. Attraversando Panama verso ovest si raggiunge invece il Pacifico.",
            },
            {
                id: "C",
                text: "Oceano Pacifico.",
                correct: true,
                explanation:
                    "Panama collega geograficamente il versante atlantico, attraverso il Mar dei Caraibi, con l'Oceano Pacifico. Provenendo da est e attraversando Panama si arriva quindi nel Pacifico.",
            },
            {
                id: "D",
                text: "Oceano Artico.",
                correct: false,
                explanation:
                    "L'Oceano Artico si trova attorno al Polo Nord ed è completamente estraneo al collegamento tra i due versanti di Panama.",
            },
        ],
    },

    {
        id: 60,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-italiana",
        difficulty: 3,
        question:
            "Quale tra le seguenti città italiane si trova più a nord?",
        answers: [
            {
                id: "A",
                text: "Piacenza.",
                correct: false,
                explanation:
                    "Piacenza si trova nell'Emilia-Romagna settentrionale ed è molto vicina alla latitudine di Cremona, ma si trova leggermente più a sud.",
            },
            {
                id: "B",
                text: "Parma.",
                correct: false,
                explanation:
                    "Parma si trova più a sud rispetto sia a Piacenza sia a Cremona. Non è quindi la città più settentrionale tra quelle indicate.",
            },
            {
                id: "C",
                text: "Modena.",
                correct: false,
                explanation:
                    "Modena è la più meridionale tra le quattro città proposte. La sua latitudine è inferiore a quelle di Parma, Piacenza e Cremona.",
            },
            {
                id: "D",
                text: "Cremona.",
                correct: true,
                explanation:
                    "Cremona è la città più a nord tra quelle proposte. Si trova a una latitudine leggermente superiore a Piacenza, mentre Parma e Modena sono ancora più meridionali.",
            },
        ],
    },
    {
        id: 61,
        area: "cultura-matematico-scientifica",
        category: "matematica-mcm",
        difficulty: 3,
        question:
            "Filippo si prepara per una gara di triathlon. Si allena nel nuoto ogni 3 giorni, nella corsa a piedi ogni 6 giorni e nella corsa in bicicletta ogni 8 giorni. Se oggi si è allenato in tutti e tre gli sport, tra quanti giorni si allenerà di nuovo per la prima volta nei tre sport nella stessa giornata?",
        answers: [
            {
                id: "A",
                text: "Tra 48 giorni.",
                correct: false,
                explanation:
                    "48 è un multiplo comune di 3, 6 e 8, ma non è il primo. Il problema chiede quando i tre allenamenti coincideranno nuovamente per la prima volta, quindi bisogna trovare il minimo comune multiplo.",
            },
            {
                id: "B",
                text: "Tra 17 giorni.",
                correct: false,
                explanation:
                    "17 non è divisibile né per 3, né per 6, né per 8. Non può quindi rappresentare un giorno in cui coincidono tutti e tre gli allenamenti.",
            },
            {
                id: "C",
                text: "Tra 24 giorni.",
                correct: true,
                explanation:
                    "Bisogna calcolare il minimo comune multiplo di 3, 6 e 8. Il primo numero divisibile contemporaneamente per tutti e tre è 24, quindi dopo 24 giorni Filippo svolgerà di nuovo i tre allenamenti nella stessa giornata.",
            },
            {
                id: "D",
                text: "Tra 148 giorni.",
                correct: false,
                explanation:
                    "148 non è divisibile per 3 e non è quindi un multiplo comune dei tre intervalli. Inoltre è molto superiore al primo momento di coincidenza.",
            },
        ],
    },

    {
        id: 62,
        area: "cultura-matematico-scientifica",
        category: "matematica-calcolo-letterale",
        difficulty: 4,
        question:
            "Semplifica la seguente espressione: (a+2b)²-(a-2b)²+(4ab+1)²-(4ab+1)(4ab-1).",
        answers: [
            {
                id: "A",
                text: "16ab+2.",
                correct: true,
                explanation:
                    "La differenza (a+2b)²-(a-2b)² vale 8ab. Inoltre (4ab+1)²-(4ab+1)(4ab-1) = (4ab+1)[(4ab+1)-(4ab-1)] = 8ab+2. Sommando si ottiene 16ab+2.",
            },
            {
                id: "B",
                text: "4ab+2.",
                correct: false,
                explanation:
                    "Questo risultato trascura parte dei termini che si ottengono sviluppando i quadrati. I due blocchi dell'espressione producono rispettivamente 8ab e 8ab+2.",
            },
            {
                id: "C",
                text: "16ab-2.",
                correct: false,
                explanation:
                    "Il termine numerico finale è positivo. Nella differenza tra (4ab+1)² e (4ab+1)(4ab-1) rimane infatti +2.",
            },
            {
                id: "D",
                text: "4ab-2.",
                correct: false,
                explanation:
                    "Sia il coefficiente di ab sia il segno del termine numerico sono errati. Semplificando completamente l'espressione si ottiene 16ab+2.",
            },
        ],
    },

    {
        id: 63,
        area: "cultura-matematico-scientifica",
        category: "matematica-equazioni",
        difficulty: 4,
        question:
            "Risolvi la seguente equazione: (2x+1)²-3(2x-1)(2x+1)=-2(2x+1)(2x-3).",
        answers: [
            {
                id: "A",
                text: "2.",
                correct: false,
                explanation:
                    "Sostituendo x=2 l'equazione non risulta verificata. Conviene raccogliere il fattore comune (2x+1) per semplificare il calcolo.",
            },
            {
                id: "B",
                text: "1/2.",
                correct: false,
                explanation:
                    "Per x=1/2 il fattore 2x+1 non si annulla e i due membri non coincidono. Non è quindi una soluzione.",
            },
            {
                id: "C",
                text: "-2.",
                correct: false,
                explanation:
                    "Anche sostituendo x=-2 si ottengono valori diversi nei due membri. La soluzione deriva invece dall'annullamento del fattore 2x+1.",
            },
            {
                id: "D",
                text: "-1/2.",
                correct: true,
                explanation:
                    "Portando tutto a un membro e raccogliendo (2x+1), l'espressione si riduce a -2(2x+1)=0. Quindi 2x+1=0 e x=-1/2.",
            },
        ],
    },

    {
        id: 64,
        area: "cultura-matematico-scientifica",
        category: "matematica-sistemi",
        difficulty: 3,
        question:
            "Due numeri sono tali che sommando al doppio del primo il secondo si ottiene 5 e sottraendo dal primo il doppio del secondo si ottiene -5. Quali sono i due numeri?",
        answers: [
            {
                id: "A",
                text: "1; 2.",
                correct: false,
                explanation:
                    "Con 1 e 2 la prima condizione sarebbe 2×1+2=4, non 5. La coppia non soddisfa quindi già la prima equazione.",
            },
            {
                id: "B",
                text: "1; 3.",
                correct: true,
                explanation:
                    "Indicando i numeri con x e y si ottiene il sistema 2x+y=5 e x-2y=-5. Risolvendolo si ricava x=1 e y=3; infatti 2×1+3=5 e 1-2×3=-5.",
            },
            {
                id: "C",
                text: "1; 4.",
                correct: false,
                explanation:
                    "Con 1 e 4 il doppio del primo più il secondo vale 6. Inoltre 1-8=-7, quindi nessuna delle due condizioni viene rispettata.",
            },
            {
                id: "D",
                text: "2; 3.",
                correct: false,
                explanation:
                    "Con 2 e 3 la prima espressione vale 7 e la seconda vale -4. La coppia non soddisfa il sistema indicato.",
            },
        ],
    },

    {
        id: 65,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria-angoli",
        difficulty: 2,
        question:
            "Un angolo di ampiezza 196° è:",
        answers: [
            {
                id: "A",
                text: "Ottuso.",
                correct: false,
                explanation:
                    "Un angolo ottuso misura più di 90° ma meno di 180°. Poiché 196° supera 180°, non appartiene a questa categoria.",
            },
            {
                id: "B",
                text: "Acuto.",
                correct: false,
                explanation:
                    "Un angolo acuto ha un'ampiezza inferiore a 90°. Un angolo di 196° è molto più ampio.",
            },
            {
                id: "C",
                text: "Concavo.",
                correct: true,
                explanation:
                    "Un angolo concavo ha ampiezza maggiore di 180° e minore di 360°. Poiché 196° è compreso in questo intervallo, l'angolo è concavo.",
            },
            {
                id: "D",
                text: "Convesso.",
                correct: false,
                explanation:
                    "Un angolo convesso ha ampiezza inferiore a 180°. L'angolo proposto misura invece 196°.",
            },
        ],
    },

    {
        id: 66,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria-angoli",
        difficulty: 3,
        question:
            "Le bisettrici di due angoli adiacenti formano un angolo:",
        answers: [
            {
                id: "A",
                text: "Acuto.",
                correct: false,
                explanation:
                    "Due angoli adiacenti hanno somma pari a 180°. Le loro metà non formano quindi un angolo inferiore a 90°.",
            },
            {
                id: "B",
                text: "Dipende dalle ampiezze dei due angoli.",
                correct: false,
                explanation:
                    "Anche se le ampiezze dei singoli angoli possono variare, la loro somma rimane sempre 180°. Di conseguenza la somma delle loro metà è sempre 90°.",
            },
            {
                id: "C",
                text: "Ottuso.",
                correct: false,
                explanation:
                    "L'angolo formato dalle due bisettrici non può superare 90°. Le bisettrici dividono infatti i due angoli adiacenti in due metà la cui somma è 90°.",
            },
            {
                id: "D",
                text: "Retto.",
                correct: true,
                explanation:
                    "Se i due angoli adiacenti misurano α e β, allora α+β=180°. Le loro bisettrici formano α/2+β/2=90°, cioè un angolo retto.",
            },
        ],
    },

    {
        id: 67,
        area: "cultura-matematico-scientifica",
        category: "matematica-insiemi",
        difficulty: 3,
        question:
            "L’intersezione degli insiemi: A = 3001, 3109, 3217, 3301, B = 3011, 3119, 3217, 3307, C = 3001, 3121, 3217, 3313 e D = 3001, 3137, 3217, 3319 è l’insieme E, con:",
        answers: [
            {
                id: "A",
                text: "E = 3217.",
                correct: true,
                explanation:
                    "L'intersezione contiene soltanto gli elementi presenti contemporaneamente in A, B, C e D. Il numero 3217 compare in tutti e quattro gli insiemi, mentre 3001 manca nell'insieme B.",
            },
            {
                id: "B",
                text: "E = 3001, 3217.",
                correct: false,
                explanation:
                    "3217 appartiene a tutti gli insiemi, ma 3001 non compare nell'insieme B. Non può quindi far parte dell'intersezione complessiva.",
            },
            {
                id: "C",
                text: "E = Ø.",
                correct: false,
                explanation:
                    "L'intersezione non è vuota perché esiste almeno un elemento comune a tutti e quattro gli insiemi: 3217.",
            },
            {
                id: "D",
                text: "E = 3001.",
                correct: false,
                explanation:
                    "3001 compare in A, C e D ma non in B. Non appartiene quindi all'intersezione dei quattro insiemi.",
            },
        ],
    },

    {
        id: 68,
        area: "cultura-matematico-scientifica",
        category: "matematica-probabilita",
        difficulty: 3,
        question:
            "“Per decidere chi andrà al mare con i nonni questo week end, Marta e i suoi 4 fratelli Marco, Matteo, Giorgio e Giovanni scrivono i loro nomi su dei bigliettini, li mettono in un sacchetto e procedono con le estrazioni. Qual è la probabilità che venga estratto per primo Marco, per secondo Matteo e per terzo Giorgio?”.",
        answers: [
            {
                id: "A",
                text: "1/30.",
                correct: false,
                explanation:
                    "Per ottenere l'ordine esatto richiesto bisogna moltiplicare tre probabilità successive senza reinserimento. Il risultato non è 1/30.",
            },
            {
                id: "B",
                text: "1/60.",
                correct: true,
                explanation:
                    "Ci sono 5 biglietti: la probabilità di Marco per primo è 1/5, poi Matteo è 1/4 e Giorgio è 1/3. Il prodotto è 1/5 × 1/4 × 1/3 = 1/60.",
            },
            {
                id: "C",
                text: "3/5.",
                correct: false,
                explanation:
                    "3/5 rappresenterebbe una probabilità molto elevata e non tiene conto dell'ordine preciso di tre estrazioni consecutive.",
            },
            {
                id: "D",
                text: "1/3.",
                correct: false,
                explanation:
                    "1/3 è soltanto la probabilità di scegliere una persona specifica quando ne rimangono tre. Non considera le prime due estrazioni richieste.",
            },
        ],
    },

    {
        id: 69,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria",
        difficulty: 3,
        question:
            "“Indica la risposta corretta. Dato un parallelogramma ABCD, se raddoppi la lunghezza di tutti i suoi lati (senza cambiarne la forma):”.",
        answers: [
            {
                id: "A",
                text: "Il perimetro raddoppia e l’area triplica.",
                correct: false,
                explanation:
                    "Il perimetro raddoppia effettivamente, ma l'area non triplica. Quando tutte le lunghezze vengono moltiplicate per 2, l'area viene moltiplicata per 2²=4.",
            },
            {
                id: "B",
                text: "Il perimetro si dimezza e l'area raddoppia.",
                correct: false,
                explanation:
                    "Raddoppiando tutti i lati il perimetro non può diminuire. Anche l'area cresce di un fattore quattro, non due.",
            },
            {
                id: "C",
                text: "Il perimetro e l'area sono il doppio del valore di partenza.",
                correct: false,
                explanation:
                    "Il perimetro è effettivamente doppio, ma l'area dipende dal quadrato del fattore di scala. Con fattore 2 diventa quattro volte quella iniziale.",
            },
            {
                id: "D",
                text: "Il perimetro duplica e l'area quadruplica.",
                correct: true,
                explanation:
                    "Raddoppiando tutte le dimensioni lineari, ogni lato viene moltiplicato per 2 e quindi anche il perimetro raddoppia. L'area viene invece moltiplicata per 2², quindi quadruplica.",
            },
        ],
    },

    {
        id: 70,
        area: "cultura-matematico-scientifica",
        category: "matematica-statistica",
        difficulty: 3,
        question:
            "La seguente tabella riporta i dati sugli stipendi dei dipendenti. Indicare la risposta vera:",
        questionImage: {
            src: `${import.meta.env.BASE_URL}resources/questions/simulation12/domanda-70.png`,
            alt: "Tabella degli stipendi mensili dei dipendenti con stipendio in euro e numero di dipendenti",
        },
        answers: [
            {
                id: "A",
                text: "La mediana è 1800.",
                correct: false,
                explanation:
                    "I dipendenti totali sono 72. La mediana dipende quindi dal 36° e 37° valore ordinato; entrambi ricadono nella fascia dei 1.350 euro, perché i primi 12 guadagnano 1.100 euro e i successivi 45 guadagnano 1.350 euro.",
            },
            {
                id: "B",
                text: "La moda è 45.",
                correct: false,
                explanation:
                    "45 è la frequenza associata allo stipendio di 1.350 euro, cioè il numero di dipendenti che percepiscono quella cifra. La moda è il valore che compare più frequentemente, quindi è 1.350 euro.",
            },
            {
                id: "C",
                text: "La moda è 1350.",
                correct: true,
                explanation:
                    "Lo stipendio di 1.350 euro è percepito da 45 dipendenti, più di qualunque altra fascia indicata nella tabella. È quindi il valore modale della distribuzione.",
            },
            {
                id: "D",
                text: "La media è 1800.",
                correct: false,
                explanation:
                    "La media ponderata è (1100×12 + 1350×45 + 1800×9 + 3200×4 + 5000×2) / 72 = 1568,75 euro. Non è quindi pari a 1.800 euro.",
            },
        ],
    },

    {
        id: 71,
        area: "cultura-matematico-scientifica",
        category: "biologia-cellulare",
        difficulty: 2,
        question:
            "Il DNA nelle cellule umane si trova:",
        answers: [
            {
                id: "A",
                text: "All'interno del nucleo.",
                correct: true,
                explanation:
                    "Nel contesto scolastico del quesito, il DNA cromosomico delle cellule umane è contenuto nel nucleo. Una piccola quantità di DNA è presente anche nei mitocondri, ma questa possibilità non compare tra le alternative.",
            },
            {
                id: "B",
                text: "Nel cloroplasto.",
                correct: false,
                explanation:
                    "I cloroplasti sono organuli caratteristici delle cellule vegetali e non sono presenti nelle cellule umane.",
            },
            {
                id: "C",
                text: "Nel citoplasma.",
                correct: false,
                explanation:
                    "Nelle cellule eucariotiche umane il DNA cromosomico non è liberamente disperso nel citoplasma, ma è racchiuso principalmente nel nucleo.",
            },
            {
                id: "D",
                text: "Nell'apparato di Golgi.",
                correct: false,
                explanation:
                    "L'apparato di Golgi modifica, organizza e smista proteine e lipidi. Non è la sede del patrimonio genetico nucleare.",
            },
        ],
    },

    {
        id: 72,
        area: "cultura-matematico-scientifica",
        category: "biologia-cellulare",
        difficulty: 2,
        question:
            "Qual è la funzione dei Ribosomi?",
        answers: [
            {
                id: "A",
                text: "Digerire i grassi.",
                correct: false,
                explanation:
                    "La digestione dei grassi non è compito dei ribosomi. I ribosomi sono strutture cellulari coinvolte direttamente nella sintesi delle proteine.",
            },
            {
                id: "B",
                text: "Leggere le informazioni contenute nell’m-RNA.",
                correct: true,
                explanation:
                    "Durante la traduzione i ribosomi scorrono sull'mRNA e ne leggono i codoni, permettendo l'assemblaggio degli amminoacidi nella corretta sequenza proteica.",
            },
            {
                id: "C",
                text: "Sintetizzare i carboidrati.",
                correct: false,
                explanation:
                    "I ribosomi non producono carboidrati. La loro funzione fondamentale è la sintesi proteica.",
            },
            {
                id: "D",
                text: "Leggere le informazioni contenute nell’r-RNA.",
                correct: false,
                explanation:
                    "L'rRNA è uno dei componenti strutturali e funzionali del ribosoma stesso. L'informazione che viene tradotta per costruire una proteina è invece contenuta nell'mRNA.",
            },
        ],
    },

    {
        id: 73,
        area: "cultura-matematico-scientifica",
        category: "biologia-fotosintesi",
        difficulty: 2,
        question:
            "I prodotti della Fotosintesi sono:",
        answers: [
            {
                id: "A",
                text: "Sei molecole di ossigeno.",
                correct: false,
                explanation:
                    "L'ossigeno è uno dei prodotti della fotosintesi, ma l'equazione complessiva comprende anche la formazione di glucosio.",
            },
            {
                id: "B",
                text: "Una molecola di glucosio.",
                correct: false,
                explanation:
                    "Anche il glucosio è un prodotto della fotosintesi, ma questa alternativa è incompleta perché non considera l'ossigeno liberato.",
            },
            {
                id: "C",
                text: "Una molecola di glucosio e sei molecole di anidride carbonica.",
                correct: false,
                explanation:
                    "L'anidride carbonica è un reagente della fotosintesi e viene utilizzata dalla pianta, non prodotta nell'equazione semplificata del processo.",
            },
            {
                id: "D",
                text: "Una molecola di glucosio e sei molecole di ossigeno.",
                correct: true,
                explanation:
                    "Nella rappresentazione scolastica della fotosintesi, 6 CO₂ + 6 H₂O producono una molecola di glucosio C₆H₁₂O₆ e 6 molecole di O₂ grazie all'energia luminosa.",
            },
        ],
    },

    {
        id: 74,
        area: "cultura-matematico-scientifica",
        category: "scienze-della-terra-atmosfera",
        difficulty: 2,
        question:
            "Nell'atmosfera terrestre:",
        answers: [
            {
                id: "A",
                text: "L'azoto è presente circa al 78%.",
                correct: true,
                explanation:
                    "L'azoto molecolare è il gas più abbondante nell'atmosfera terrestre e rappresenta circa il 78% dell'aria secca. L'ossigeno costituisce invece circa il 21%.",
            },
            {
                id: "B",
                text: "Non c'è azoto.",
                correct: false,
                explanation:
                    "L'affermazione è l'opposto della realtà: l'azoto è il componente più abbondante dell'atmosfera terrestre.",
            },
            {
                id: "C",
                text: "L'azoto è presente al 30%.",
                correct: false,
                explanation:
                    "Il valore del 30% è troppo basso. La percentuale atmosferica di azoto è circa il 78%.",
            },
            {
                id: "D",
                text: "L'azoto è presente al 50%.",
                correct: false,
                explanation:
                    "L'azoto costituisce ben più della metà dell'atmosfera: la sua percentuale è approssimativamente del 78%.",
            },
        ],
    },

    {
        id: 75,
        area: "cultura-matematico-scientifica",
        category: "fisica-atomica",
        difficulty: 1,
        question:
            "L'elettrone è carico:",
        answers: [
            {
                id: "A",
                text: "Dipende.",
                correct: false,
                explanation:
                    "La carica elettrica dell'elettrone non dipende dalle circostanze considerate nel quesito. È una proprietà fondamentale della particella.",
            },
            {
                id: "B",
                text: "Neutro.",
                correct: false,
                explanation:
                    "Una particella neutra avrebbe carica elettrica totale nulla. L'elettrone possiede invece una carica elementare negativa.",
            },
            {
                id: "C",
                text: "Negativamente.",
                correct: true,
                explanation:
                    "L'elettrone possiede carica elettrica negativa, pari in modulo alla carica positiva del protone. La sua carica è circa -1,602 × 10⁻¹⁹ coulomb.",
            },
            {
                id: "D",
                text: "Positivamente.",
                correct: false,
                explanation:
                    "La carica positiva è associata al protone. L'elettrone ha invece carica negativa.",
            },
        ],
    },

    {
        id: 76,
        area: "cultura-matematico-scientifica",
        category: "fisica-elettrostatica",
        difficulty: 2,
        question:
            "La forza esercitata da un campo elettrico su una carica elettrica è descritta:",
        answers: [
            {
                id: "A",
                text: "Dalla legge di Mendel.",
                correct: false,
                explanation:
                    "Le leggi di Mendel appartengono alla genetica e descrivono la trasmissione ereditaria dei caratteri. Non riguardano le forze elettriche.",
            },
            {
                id: "B",
                text: "Dalla legge di Coulomb.",
                correct: true,
                explanation:
                    "Nel contesto del quesito, la legge di Coulomb descrive la forza elettrostatica tra cariche elettriche, determinandone intensità e dipendenza dalla distanza.",
            },
            {
                id: "C",
                text: "Dalla legge di Lavoisier.",
                correct: false,
                explanation:
                    "Lavoisier è associato alla legge di conservazione della massa nelle reazioni chimiche. Non descrive la forza elettrica.",
            },
            {
                id: "D",
                text: "Dalla legge di Darwin.",
                correct: false,
                explanation:
                    "Darwin elaborò la teoria dell'evoluzione per selezione naturale. Non formulò una legge relativa alle interazioni elettriche.",
            },
        ],
    },

    {
        id: 77,
        area: "cultura-matematico-scientifica",
        category: "chimica-organica",
        difficulty: 2,
        question:
            "Il metano è:",
        answers: [
            {
                id: "A",
                text: "Un alcool.",
                correct: false,
                explanation:
                    "Gli alcoli possiedono un gruppo funzionale -OH. Il metano, CH₄, non contiene ossigeno e non appartiene quindi a questa classe.",
            },
            {
                id: "B",
                text: "Un alchino.",
                correct: false,
                explanation:
                    "Gli alchini presentano almeno un triplo legame carbonio-carbonio. Il metano contiene un solo atomo di carbonio e non può avere un simile legame.",
            },
            {
                id: "C",
                text: "Un acido carbossilico.",
                correct: false,
                explanation:
                    "Gli acidi carbossilici contengono il gruppo -COOH. Il metano ha formula CH₄ e non possiede questo gruppo funzionale.",
            },
            {
                id: "D",
                text: "Un idrocarburo.",
                correct: true,
                explanation:
                    "Il metano, CH₄, è formato esclusivamente da carbonio e idrogeno e appartiene quindi agli idrocarburi. Più precisamente è l'alcano più semplice.",
            },
        ],
    },

    {
        id: 78,
        area: "cultura-matematico-scientifica",
        category: "chimica-atomica",
        difficulty: 3,
        question:
            "Un isotopo è:",
        answers: [
            {
                id: "A",
                text: "Un anione avente carica positiva e numero di massa uguale rispetto ad un altro dello stesso elemento.",
                correct: false,
                explanation:
                    "Un anione possiede per definizione carica negativa, non positiva. Inoltre la definizione di isotopo riguarda il numero di massa e non il segno della carica.",
            },
            {
                id: "B",
                text: "Un atomo avente numero di massa uguale rispetto ad un altro dello stesso elemento.",
                correct: false,
                explanation:
                    "Due isotopi dello stesso elemento hanno lo stesso numero atomico ma un diverso numero di neutroni e quindi un diverso numero di massa.",
            },
            {
                id: "C",
                text: "Un atomo avente numero di massa diverso rispetto ad un altro dello stesso elemento.",
                correct: true,
                explanation:
                    "Gli isotopi sono atomi dello stesso elemento, quindi hanno lo stesso numero di protoni, ma possiedono un diverso numero di neutroni. Di conseguenza presentano un diverso numero di massa.",
            },
            {
                id: "D",
                text: "Uno ione avente numero di massa uguale rispetto ad un altro dello stesso elemento.",
                correct: false,
                explanation:
                    "La ionizzazione riguarda la perdita o l'acquisto di elettroni. Non è ciò che distingue gli isotopi, che differiscono invece nel numero di neutroni.",
            },
        ],
    },

    {
        id: 79,
        area: "cultura-matematico-scientifica",
        category: "informatica-posta-elettronica",
        difficulty: 1,
        question:
            "Quali tipologie di file si possono allegare ad un messaggio di posta elettronica?",
        answers: [
            {
                id: "A",
                text: "Solo file di testo.",
                correct: false,
                explanation:
                    "Le email possono contenere allegati di molti formati differenti, come immagini, PDF, documenti, archivi e file multimediali. Non sono limitate ai file di testo.",
            },
            {
                id: "B",
                text: "Qualsiasi tipo di file.",
                correct: true,
                explanation:
                    "In linea generale è possibile allegare diversi tipi di file a un messaggio di posta elettronica. I singoli servizi possono comunque imporre limiti di dimensione o bloccare determinati formati per motivi di sicurezza.",
            },
            {
                id: "C",
                text: "Qualsiasi tipo di file, purché sia crittografato.",
                correct: false,
                explanation:
                    "La crittografia non è un requisito generale per allegare un file. È una misura di sicurezza che può essere utilizzata in alcuni casi, ma non è obbligatoria.",
            },
            {
                id: "D",
                text: "Nessuna, non si possono allegare file.",
                correct: false,
                explanation:
                    "Una delle funzioni fondamentali della posta elettronica è proprio la possibilità di inviare file come allegati insieme al messaggio.",
            },
        ],
    },

    {
        id: 80,
        area: "cultura-matematico-scientifica",
        category: "informatica-periferiche",
        difficulty: 1,
        question:
            "Cosa sono microfono e auricolari?",
        answers: [
            {
                id: "A",
                text: "Il microfono una periferica di input e gli auricolari una periferica di output.",
                correct: true,
                explanation:
                    "Il microfono acquisisce suoni e li invia al computer, quindi è una periferica di input. Gli auricolari ricevono dal dispositivo un segnale audio e lo riproducono per l'utente, quindi sono periferiche di output.",
            },
            {
                id: "B",
                text: "Due periferiche di output.",
                correct: false,
                explanation:
                    "Gli auricolari sono effettivamente periferiche di output, ma il microfono svolge la funzione opposta: acquisisce informazioni sonore.",
            },
            {
                id: "C",
                text: "Due periferiche di input.",
                correct: false,
                explanation:
                    "Il microfono è una periferica di input, ma gli auricolari non acquisiscono dati: riproducono audio in uscita.",
            },
            {
                id: "D",
                text: "Il microfono una periferica di output e gli auricolari una periferica di input.",
                correct: false,
                explanation:
                    "Questa alternativa inverte le funzioni. Il microfono immette dati audio nel sistema, mentre gli auricolari producono l'uscita sonora.",
            },
        ],
    }
];
export default simulation12;