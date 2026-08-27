const passages = {
    passage01: `La notte del 20 dicembre 1849 un uragano violentissimo imperversava sopra Mompracem,
isola selvaggia, di fama sinistra, covo di formidabili pirati, situata nel mare della Malesia, a poche
centinaia di miglia dalle coste occidentali del Borneo.

Pel cielo, spinte da un vento irresistibile, correvano come cavalli sbrigliati nere masse di
vapori, che, di quando in quando, lasciavano cadere sulle cupe foreste dell'isola furiosi acquazzoni;
sul mare sollevato dal vento, s'urtavano disordinatamente, enormi ondate, confondendo i loro
muggiti con gli scoppi ora brevi e secchi ed ora interminabili, delle folgori.

Né dalle capanne allineate in fondo alla baia dell'isola, né sulle fortificazioni che la
difendevano, né sulla tumultuosa superficie del mare, si scorgeva alcun lume; chi però, venendo da
oriente, avesse guardato in alto, avrebbe visto sulla cima di un'altissima rupe, tagliata a picco sul
mare, brillare due punti luminosi, due finestre vivamente illuminate.

Chi mai vegliava in quell'ora e con simile bufera, nell'isola dei sanguinari pirati?

Tra un labirinto di trincee sfondate, di terrapieni cadenti, di steccati divelti, di gabbioni
sventrati, presso i quali si scorgevano ancora armi infrante e ossa umane, una vasta e solida
capanna s'innalzava, adorna sulla cima di una grande bandiera rossa, con nel mezzo una testa di
tigre.

Una stanza di quell'abitazione è illuminata, le pareti sono coperte di pesanti tessuti rossi, di
velluti e di broccati di gran pregio, ma qua e là sgualciti, strappati e macchiati, e il pavimento
scompare sotto un alto strato di tappeti di Persia, sfolgoranti d'oro, ma anche questi lacerati e
imbrattati.

Nel mezzo sta un tavolo d'ebano, intarsiato di madreperla e adorno di fregi d'argento,
carico di bottiglie e di bicchieri del più puro cristallo; negli angoli grandi scaffali in parte rovinati,
zeppi di vasi riboccanti di braccialetti d'oro, di orecchini, di anelli, di medaglioni, di preziosi arredi
sacri, contorti o schiacciati, di perle provenienti dalle famose peschiere di Ceylan, di smeraldi, di
rubini e di diamanti che scintillavano come tanti soli, sotto i riflessi di una lampada dorata sospesa
al soffitto.

(Emilio Salgari, Le tigri di Mompracem, BUR Rizzoli, Milano, 2001)`,
};


const simulation08 = [
    {
        id: 1,
        area: "linguistica-logica",
        category: "lessico-contrari",
        difficulty: 3,
        question:
            "Indicare il contrario del termine IMBESTIALIRE:",
        answers: [
            {
                id: "A",
                text: "Ammorbidire",
                correct: false,
                explanation:
                    "«Ammorbidire» significa rendere meno duro, rigido o severo. Non costituisce il contrario preciso di «imbestialire», che indica il diventare o rendere bestiale, feroce o irragionevole.",
            },
            {
                id: "B",
                text: "Ammantare",
                correct: false,
                explanation:
                    "«Ammantare» significa coprire con un manto oppure, in senso figurato, rivestire o nascondere qualcosa sotto una certa apparenza. Non si oppone al significato di «imbestialire».",
            },
            {
                id: "C",
                text: "Ammansire",
                correct: true,
                explanation:
                    "«Ammansire» significa rendere mansueto, docile o meno aggressivo. È quindi il contrario più appropriato di «imbestialire», che può significare rendere feroce o far perdere il controllo.",
            },
            {
                id: "D",
                text: "Addomesticare",
                correct: false,
                explanation:
                    "«Addomesticare» significa rendere domestico un animale o abituarlo alla presenza dell'uomo. È semanticamente vicino all'idea di rendere più docile, ma il contrario indicato dalla prova è «ammansire».",
            },
        ],
    },

    {
        id: 2,
        area: "linguistica-logica",
        category: "divisione-in-sillabe",
        difficulty: 3,
        question:
            "Indicare l'esatta divisione in sillabe della parola STACANOVISTA:",
        answers: [
            {
                id: "A",
                text: "Staca-No-Vi-Sta",
                correct: false,
                explanation:
                    "Questa divisione non rispetta correttamente la struttura sillabica iniziale della parola. «Stacanovista» deve iniziare con le sillabe «sta-ca».",
            },
            {
                id: "B",
                text: "Sta-Can-Ovi-Sta",
                correct: false,
                explanation:
                    "La sequenza «can» viene formata in modo scorretto e anche la parte «ovi» non corrisponde alla corretta scansione sillabica.",
            },
            {
                id: "C",
                text: "Sta-Ca-No-Vis-Ta",
                correct: false,
                explanation:
                    "La parte finale viene divisa in modo errato. Il gruppo corretto è «vi-sta», non «vis-ta».",
            },
            {
                id: "D",
                text: "Sta-ca-no-vi-sta",
                correct: true,
                explanation:
                    "La corretta divisione indicata dalla prova è «sta-ca-no-vi-sta». La parola viene quindi suddivisa in cinque sillabe.",
            },
        ],
    },

    {
        id: 3,
        area: "linguistica-logica",
        category: "lessico-sinonimi",
        difficulty: 3,
        question:
            "L’aggettivo IGNAVO può essere associato alla parola:",
        answers: [
            {
                id: "A",
                text: "Ignorante",
                correct: false,
                explanation:
                    "«Ignorante» indica chi non conosce qualcosa o possiede scarse conoscenze. «Ignavo» riguarda invece soprattutto la mancanza di volontà, iniziativa o decisione.",
            },
            {
                id: "B",
                text: "Antico",
                correct: false,
                explanation:
                    "«Antico» indica qualcosa appartenente a un tempo remoto o molto passato. Non ha relazione con il significato di «ignavo».",
            },
            {
                id: "C",
                text: "Inutile",
                correct: false,
                explanation:
                    "«Inutile» indica qualcosa che non produce un'utilità o un risultato. Non è il sinonimo richiesto per «ignavo».",
            },
            {
                id: "D",
                text: "Indolente",
                correct: true,
                explanation:
                    "«Ignavo» indica una persona priva di energia morale, volontà o iniziativa. «Indolente», nel senso di pigro e poco disposto ad agire, è quindi l'alternativa più vicina.",
            },
        ],
    },

    {
        id: 4,
        area: "linguistica-logica",
        category: "figure-retoriche",
        difficulty: 3,
        question:
            "La figura retorica contenuta nella frase di Petrarca: “Erano i capei d’oro a l’aura sparsi”:",
        answers: [
            {
                id: "A",
                text: "Metafora",
                correct: true,
                explanation:
                    "Nell'espressione «capei d'oro», il colore e la luminosità dei capelli vengono associati figurativamente all'oro. Non si afferma letteralmente che i capelli siano fatti d'oro: si tratta quindi di una metafora.",
            },
            {
                id: "B",
                text: "Ossimoro",
                correct: false,
                explanation:
                    "L'ossimoro accosta parole o concetti in forte contrasto, come «silenzio assordante». Nel verso non compare una costruzione di questo tipo.",
            },
            {
                id: "C",
                text: "Metonimia",
                correct: false,
                explanation:
                    "La metonimia sostituisce un termine con un altro legato da un rapporto logico, come autore-opera o contenitore-contenuto. Non è il fenomeno principale presente nell'espressione «capei d'oro».",
            },
            {
                id: "D",
                text: "Allegoria",
                correct: false,
                explanation:
                    "L'allegoria costruisce un significato simbolico più ampio attraverso immagini o narrazioni. Nel verso viene invece usata un'immagine metaforica.",
            },
        ],
    },

    {
        id: 5,
        area: "linguistica-logica",
        category: "analogie-logiche",
        difficulty: 3,
        question:
            "Individuare la coppia anomala:",
        answers: [
            {
                id: "A",
                text: "Medico – salute",
                correct: false,
                explanation:
                    "Il medico opera nell'ambito della salute, quindi tra i due termini esiste un rapporto professione-campo di attività.",
            },
            {
                id: "B",
                text: "Entomatologo – insetti",
                correct: false,
                explanation:
                    "Nel testo del PDF compare «Entomatologo – insetti». Il rapporto previsto è quello tra lo specialista e il proprio oggetto di studio.",
            },
            {
                id: "C",
                text: "Psicologo – suggestione",
                correct: true,
                explanation:
                    "Questa è la coppia indicata come anomala dalla prova. Nelle altre coppie il secondo termine identifica in modo più diretto l'ambito o l'oggetto tipico dell'attività professionale, mentre «suggestione» non rappresenta nello stesso modo il campo dello psicologo.",
            },
            {
                id: "D",
                text: "Compositore – musica",
                correct: false,
                explanation:
                    "Il compositore crea musica, quindi il rapporto tra professione e attività o prodotto è immediato e coerente.",
            },
        ],
    },

    {
        id: 6,
        area: "linguistica-logica",
        category: "analogie-logiche",
        difficulty: 3,
        question:
            "Individuare la coppia di termine che completa la proporzione: Fornello:Cucina = Pagina: X",
        answers: [
            {
                id: "A",
                text: "Parola",
                correct: false,
                explanation:
                    "Una parola è contenuta in una pagina, ma il rapporto proposto richiede un insieme più grande che contiene l'elemento indicato.",
            },
            {
                id: "B",
                text: "Libro",
                correct: true,
                explanation:
                    "Il fornello è un elemento che si trova nella cucina; analogamente, la pagina è un elemento che si trova in un libro. Il rapporto è quindi parte-insieme.",
            },
            {
                id: "C",
                text: "Carta",
                correct: false,
                explanation:
                    "La pagina può essere materialmente fatta di carta, ma questo sarebbe un rapporto oggetto-materiale, diverso da quello tra fornello e cucina.",
            },
            {
                id: "D",
                text: "Colore",
                correct: false,
                explanation:
                    "Il colore non rappresenta un insieme che contiene la pagina e non riproduce il rapporto espresso dalla prima coppia.",
            },
        ],
    },

    {
        id: 7,
        area: "linguistica-logica",
        category: "ragionamento-logico",
        difficulty: 4,
        question:
            "In una famiglia ciascuno dei figli ha almeno 4 fratelli e 4 sorelle. Di quanti componenti, almeno, è costituita la famiglia?",
        answers: [
            {
                id: "A",
                text: "9",
                correct: false,
                explanation:
                    "Con 9 figli non sarebbe possibile far sì che sia i maschi sia le femmine abbiano contemporaneamente almeno quattro fratelli e quattro sorelle.",
            },
            {
                id: "B",
                text: "8",
                correct: false,
                explanation:
                    "Otto non sono sufficienti. Perché ogni maschio abbia almeno quattro fratelli devono esserci almeno cinque maschi, e lo stesso ragionamento vale per le femmine.",
            },
            {
                id: "C",
                text: "7",
                correct: false,
                explanation:
                    "Sette figli non permettono di avere contemporaneamente almeno cinque maschi e almeno cinque femmine, necessari per soddisfare la condizione.",
            },
            {
                id: "D",
                text: "10",
                correct: true,
                explanation:
                    "La logica utilizzata dalla prova richiede almeno 5 fratelli maschi e 5 sorelle femmine: ogni maschio avrà così altri 4 fratelli e 5 sorelle, e ogni femmina 5 fratelli e altre 4 sorelle. Il test considera quindi 10 come minimo.",
            },
        ],
    },

    {
        id: 8,
        area: "linguistica-logica",
        category: "lessico-contrari",
        difficulty: 3,
        question:
            "Il contrario del termine CREATO è:",
        answers: [
            {
                id: "A",
                text: "Increato",
                correct: true,
                explanation:
                    "«Increato» significa non creato, cioè non venuto all'esistenza attraverso un atto di creazione. È quindi il contrario diretto di «creato».",
            },
            {
                id: "B",
                text: "Inventato",
                correct: false,
                explanation:
                    "«Inventato» può essere semanticamente vicino a «creato», perché indica qualcosa prodotto o concepito. Non è quindi il contrario.",
            },
            {
                id: "C",
                text: "Sconosciuto",
                correct: false,
                explanation:
                    "«Sconosciuto» significa non conosciuto. Il concetto riguarda la conoscenza e non l'essere stato creato o meno.",
            },
            {
                id: "D",
                text: "Non creato",
                correct: false,
                explanation:
                    "L'espressione ha semanticamente lo stesso significato di «increato», ma la prova richiede il termine lessicale specifico «increato».",
            },
        ],
    },

    {
        id: 9,
        area: "linguistica-logica",
        category: "lessico",
        difficulty: 3,
        question:
            "Il significato del termine PRESUNTO è:",
        answers: [
            {
                id: "A",
                text: "Piccolo sunto",
                correct: false,
                explanation:
                    "La somiglianza con la parola «sunto» è soltanto grafica. «Presunto» non indica un breve riassunto.",
            },
            {
                id: "B",
                text: "Indicatore di premonizione",
                correct: false,
                explanation:
                    "Una premonizione riguarda la sensazione o previsione di un evento futuro. Non corrisponde al significato di «presunto».",
            },
            {
                id: "C",
                text: "Ritenuto tale per congettura",
                correct: true,
                explanation:
                    "«Presunto» indica qualcosa o qualcuno che viene considerato tale sulla base di supposizioni, indizi o congetture, senza che vi sia ancora certezza definitiva.",
            },
            {
                id: "D",
                text: "Assunto in precedenza",
                correct: false,
                explanation:
                    "«Presunto» non deriva semanticamente dall'idea di essere stato assunto prima. L'espressione non corrisponde al significato della parola.",
            },
        ],
    },

    {
        id: 10,
        area: "linguistica-logica",
        category: "divisione-in-sillabe",
        difficulty: 3,
        question:
            "La corretta suddivisione del termine anestetico è:",
        answers: [
            {
                id: "A",
                text: "A-ne-steti-co",
                correct: false,
                explanation:
                    "Questa divisione unisce in modo scorretto la parte centrale «steti». La scansione corretta separa «ste» e «ti».",
            },
            {
                id: "B",
                text: "Anes-te-ti-co",
                correct: false,
                explanation:
                    "La sillaba iniziale non è «anes». Il termine viene diviso iniziando da «a-ne».",
            },
            {
                id: "C",
                text: "Ane-ste-ti-co",
                correct: false,
                explanation:
                    "La prima parte «ane» non corrisponde alla scansione indicata nella prova. Le prime due sillabe sono «a-ne».",
            },
            {
                id: "D",
                text: "A-ne-ste-ti-co",
                correct: true,
                explanation:
                    "La suddivisione corretta indicata nel documento è «a-ne-ste-ti-co». Il termine è quindi composto da cinque sillabe.",
            },
        ],
    },

    {
        id: 11,
        area: "linguistica-logica",
        category: "lessico",
        difficulty: 4,
        question:
            "Il significato del termine BALUGINARE è:",
        answers: [
            {
                id: "A",
                text: "Apparire e scomparire rapidamente",
                correct: true,
                explanation:
                    "«Baluginare» indica l'apparire debolmente, a tratti o per brevi istanti, come una luce intermittente. Può essere usato anche figurativamente per un pensiero che compare rapidamente alla mente.",
            },
            {
                id: "B",
                text: "Lampò di luce che precede il tuono",
                correct: false,
                explanation:
                    "Questa descrizione riguarda un lampo o un fulmine. «Baluginare» è invece un verbo e indica un apparire incerto o intermittente.",
            },
            {
                id: "C",
                text: "Essere veloci",
                correct: false,
                explanation:
                    "La rapidità può essere associata al breve apparire di qualcosa, ma «baluginare» non significa genericamente essere veloci.",
            },
            {
                id: "D",
                text: "Mentire spudoratamente",
                correct: false,
                explanation:
                    "Mentire significa affermare consapevolmente qualcosa di falso. Non esiste questa relazione semantica con «baluginare».",
            },
        ],
    },

    {
        id: 12,
        area: "linguistica-logica",
        category: "musica-strumenti",
        difficulty: 3,
        question:
            "Lo strumento musicale che non rientra nella categoria degli strumenti cordofoni è:",
        answers: [
            {
                id: "A",
                text: "Chitarra",
                correct: false,
                explanation:
                    "La chitarra è un cordofono perché il suono è prodotto dalla vibrazione delle sue corde.",
            },
            {
                id: "B",
                text: "Timpano",
                correct: true,
                explanation:
                    "Il timpano non è un cordofono: appartiene agli strumenti a percussione e il suono è prodotto principalmente dalla vibrazione di una membrana.",
            },
            {
                id: "C",
                text: "Liuto",
                correct: false,
                explanation:
                    "Il liuto è uno strumento a corde pizzicate e appartiene quindi alla famiglia dei cordofoni.",
            },
            {
                id: "D",
                text: "Pianoforte",
                correct: false,
                explanation:
                    "Nel pianoforte il suono nasce dalla vibrazione delle corde colpite da martelletti. Per questo, nella classificazione organologica, può essere considerato un cordofono.",
            },
        ],
    },

    {
        id: 13,
        area: "linguistica-logica",
        category: "congiunzioni",
        difficulty: 3,
        question:
            "Inserire la congiunzione pertinente nella seguente frase: “Affronterò qualunque sacrificio .......... tu possa arrivare alla meta”.",
        answers: [
            {
                id: "A",
                text: "Poiché",
                correct: false,
                explanation:
                    "«Poiché» introduce normalmente una causa e significherebbe «dal momento che». Non esprime la condizione necessaria presente nella frase.",
            },
            {
                id: "B",
                text: "Benché",
                correct: false,
                explanation:
                    "«Benché» ha valore concessivo, equivalente a «sebbene». Non rende il significato voluto dalla frase.",
            },
            {
                id: "C",
                text: "Giacché",
                correct: false,
                explanation:
                    "«Giacché» è una congiunzione causale simile a «poiché». Non introduce la condizione richiesta.",
            },
            {
                id: "D",
                text: "Purché",
                correct: true,
                explanation:
                    "«Purché» significa «a condizione che» e si costruisce correttamente con il congiuntivo: «purché tu possa arrivare alla meta». Il senso è che si accetterà qualsiasi sacrificio a quella condizione.",
            },
        ],
    },

    {
        id: 14,
        area: "linguistica-logica",
        category: "lessico",
        difficulty: 4,
        question:
            "Indicare il significato del termine LAPALISSIANO:",
        answers: [
            {
                id: "A",
                text: "Rendere chiaro",
                correct: false,
                explanation:
                    "«Rendere chiaro» descrive un'azione, mentre «lapalissiano» è un aggettivo che caratterizza qualcosa di evidentissimo o banalmente ovvio.",
            },
            {
                id: "B",
                text: "Enunciazione o constatazione ovvia",
                correct: true,
                explanation:
                    "«Lapalissiano» indica qualcosa di talmente evidente da risultare quasi banale. Una «verità lapalissiana» è quindi una constatazione ovvia.",
            },
            {
                id: "C",
                text: "Corrente artistica",
                correct: false,
                explanation:
                    "Il termine non indica un movimento o una corrente artistica. È un aggettivo riferito a un'affermazione ovvia.",
            },
            {
                id: "D",
                text: "Fenomeno riferito ad un’era geologica",
                correct: false,
                explanation:
                    "«Lapalissiano» non appartiene alla terminologia geologica e non indica una fase della storia della Terra.",
            },
        ],
    },

    {
        id: 15,
        area: "linguistica-logica",
        category: "ortografia-pronomi",
        difficulty: 3,
        question:
            "Individuare la frase corretta:",
        answers: [
            {
                id: "A",
                text: "Passami il piatto della frutta se ce ne ancora;",
                correct: false,
                explanation:
                    "Manca il verbo «è» nella costruzione «ce n'è». Per indicare che della frutta è ancora disponibile bisogna scrivere «se ce n'è ancora».",
            },
            {
                id: "B",
                text: "Passami il piatto della frutta, se ce n’è ancora.",
                correct: true,
                explanation:
                    "La costruzione «ce n'è» è corretta: «ce» e «ne» sono particelle pronominali e «è» è la terza persona singolare del verbo essere. Anche la punteggiatura è appropriata.",
            },
            {
                id: "C",
                text: "Passami il piatto della frutta, se c’è ne ancora.",
                correct: false,
                explanation:
                    "«C'è ne» è una grafia scorretta. In questa costruzione bisogna utilizzare «ce n'è».",
            },
            {
                id: "D",
                text: "Passami il piatto della frutta se c’è n’è ancora.",
                correct: false,
                explanation:
                    "Sono state inserite erroneamente due forme del verbo essere. La sequenza corretta è semplicemente «ce n'è».",
            },
        ],
    },

    {
        id: 16,
        area: "linguistica-logica",
        category: "figure-retoriche",
        difficulty: 2,
        question:
            "La frase: “sei arrivato al nocciolo del problema” a quale figura retorica fa riferimento:",
        answers: [
            {
                id: "A",
                text: "Metafora",
                correct: true,
                explanation:
                    "Il «nocciolo» non indica letteralmente il seme di un frutto, ma la parte centrale ed essenziale di una questione. Si tratta quindi di una metafora.",
            },
            {
                id: "B",
                text: "Zeugma",
                correct: false,
                explanation:
                    "Lo zeugma consiste nel collegare uno stesso elemento sintattico a più termini in modo semanticamente diverso. Non è il fenomeno presente nella frase.",
            },
            {
                id: "C",
                text: "Ana lessi",
                correct: false,
                explanation:
                    "L'analessi è un ritorno narrativo a eventi precedenti rispetto al momento del racconto, equivalente al flashback. Non riguarda questa espressione.",
            },
            {
                id: "D",
                text: "Allitterazione",
                correct: false,
                explanation:
                    "L'allitterazione consiste nella ripetizione significativa di suoni o consonanti. Qui il fenomeno centrale riguarda invece l'uso figurato di «nocciolo».",
            },
        ],
    },

    {
        id: 17,
        area: "linguistica-logica",
        category: "analisi-logica",
        difficulty: 3,
        question:
            "Nella frase: “Maria è di carnagione chiara” il complemento “di carnagione” è di:",
        answers: [
            {
                id: "A",
                text: "Limitazione",
                correct: false,
                explanation:
                    "Il complemento di limitazione restringe il significato di un'affermazione a un particolare ambito, come «bravo in matematica». Non è la soluzione indicata dalla prova.",
            },
            {
                id: "B",
                text: "Materia",
                correct: false,
                explanation:
                    "Il complemento di materia indica la sostanza di cui è costituito un oggetto, per esempio «una statua di marmo». «Carnagione» non svolge questa funzione.",
            },
            {
                id: "C",
                text: "Qualità",
                correct: false,
                explanation:
                    "Nella classificazione grammaticale questa costruzione può far pensare al complemento di qualità; tuttavia il PDF della prova evidenzia come soluzione «Specificazione». Nel simulatore seguo quindi la soluzione fornita dal documento.",
            },
            {
                id: "D",
                text: "Specificazione",
                correct: true,
                explanation:
                    "Questa è la risposta evidenziata nella prova originale. Il test classifica quindi «di carnagione» come complemento di specificazione; manteniamo questa soluzione per essere fedeli al documento.",
            },
        ],
    },

    {
        id: 18,
        area: "linguistica-logica",
        category: "lessico-palindromi",
        difficulty: 2,
        question:
            "Individuare il nome palindromo:",
        answers: [
            {
                id: "A",
                text: "Andrea",
                correct: false,
                explanation:
                    "Letto al contrario, «Andrea» non produce la stessa sequenza di lettere. Non è quindi un nome palindromo.",
            },
            {
                id: "B",
                text: "Anna",
                correct: true,
                explanation:
                    "«Anna» si legge nello stesso modo sia da sinistra verso destra sia da destra verso sinistra. È quindi un palindromo.",
            },
            {
                id: "C",
                text: "Achille",
                correct: false,
                explanation:
                    "Invertendo l'ordine delle lettere di «Achille» non si ottiene la stessa parola.",
            },
            {
                id: "D",
                text: "Amalia",
                correct: false,
                explanation:
                    "«Amalia» non mantiene la stessa sequenza di lettere se letta al contrario. Non è quindi palindroma.",
            },
        ],
    },

    {
        id: 19,
        area: "linguistica-logica",
        category: "sintassi",
        difficulty: 3,
        question:
            "Con il termine sintagma si intende:",
        answers: [
            {
                id: "A",
                text: "Un fenomeno naturale",
                correct: false,
                explanation:
                    "«Sintagma» è un termine della linguistica e della grammatica. Non indica un fenomeno naturale.",
            },
            {
                id: "B",
                text: "Un elemento della punteggiatura",
                correct: false,
                explanation:
                    "Gli elementi della punteggiatura sono segni come virgola, punto, punto e virgola e due punti. Un sintagma è invece una struttura sintattica.",
            },
            {
                id: "C",
                text: "L’unità minima della catena sintattica",
                correct: true,
                explanation:
                    "La prova definisce il sintagma come l'unità minima della catena sintattica. Un sintagma è un gruppo organizzato di parole che svolge una determinata funzione all'interno della frase.",
            },
            {
                id: "D",
                text: "La fuoriuscita improvvisa del magma",
                correct: false,
                explanation:
                    "La fuoriuscita di magma riguarda fenomeni vulcanici e non ha relazione con la terminologia sintattica.",
            },
        ],
    },

    {
        id: 20,
        area: "linguistica-logica",
        category: "figure-retoriche",
        difficulty: 3,
        question:
            "Ugo Foscolo nel sonetto “In morte del fratello Giovanni” utilizza tardo traendo...” la figura retorica definita:",
        answers: [
            {
                id: "A",
                text: "Allitterazione",
                correct: true,
                explanation:
                    "In «tardo traendo» viene ripetuto in modo evidente il suono consonantico iniziale «t». La ripetizione dello stesso suono in parole vicine costituisce un'allitterazione.",
            },
            {
                id: "B",
                text: "Iperbole",
                correct: false,
                explanation:
                    "L'iperbole consiste nell'esagerazione intenzionale di un concetto, come «te l'ho detto mille volte». Non è ciò che avviene nell'espressione citata.",
            },
            {
                id: "C",
                text: "Anafora",
                correct: false,
                explanation:
                    "L'anafora consiste nella ripetizione di una o più parole all'inizio di versi o frasi successive. Qui viene ripetuto un suono, non una stessa parola iniziale.",
            },
            {
                id: "D",
                text: "Ellissi",
                correct: false,
                explanation:
                    "L'ellissi consiste nell'omissione di uno o più elementi che possono essere ricavati dal contesto. Non è la figura presente in «tardo traendo».",
            },
        ],
    },
    {
        id: 21,
        area: "linguistica-logica",
        category: "morfologia-verbale",
        difficulty: 2,
        question:
            "Modo condizionale e tempo presente del verbo MEDITARE:",
        answers: [
            {
                id: "A",
                text: "Che noi meditiamo",
                correct: false,
                explanation:
                    "«Che noi meditiamo» è una forma del congiuntivo presente. Non appartiene al condizionale.",
            },
            {
                id: "B",
                text: "Noi mediteremmo",
                correct: true,
                explanation:
                    "«Noi mediteremmo» è la prima persona plurale del condizionale presente del verbo «meditare». Il condizionale presente esprime spesso possibilità, desiderio o un'azione subordinata a una condizione.",
            },
            {
                id: "C",
                text: "Noi avremmo meditato",
                correct: false,
                explanation:
                    "«Noi avremmo meditato» è condizionale passato, formato dal condizionale presente dell'ausiliare «avere» più il participio passato «meditato».",
            },
            {
                id: "D",
                text: "Noi avremmo meditato",
                correct: false,
                explanation:
                    "Anche questa alternativa, duplicata nel PDF originale, è un condizionale passato e non un condizionale presente.",
            },
        ],
    },

    {
        id: 22,
        area: "linguistica-logica",
        category: "lessico",
        difficulty: 3,
        question:
            "Il significato del termine DARSENA è:",
        answers: [
            {
                id: "A",
                text: "Fase dell’attività di pesca",
                correct: false,
                explanation:
                    "Una darsena non è una fase della pesca. Il termine indica invece una zona portuale riparata destinata all'ormeggio delle imbarcazioni.",
            },
            {
                id: "B",
                text: "Strumenti di lavoro dei pescatori",
                correct: false,
                explanation:
                    "Gli strumenti utilizzati dai pescatori possono essere reti, lenze o altri attrezzi. «Darsena» indica invece un luogo.",
            },
            {
                id: "C",
                text: "Rimessa per la riparazione delle imbarcazioni",
                correct: false,
                explanation:
                    "Una struttura destinata specificamente alla costruzione o riparazione delle navi è più propriamente un cantiere navale. La darsena è soprattutto uno specchio d'acqua portuale protetto.",
            },
            {
                id: "D",
                text: "Porticciolo o sito ritirato e protetto",
                correct: true,
                explanation:
                    "Una darsena è una parte riparata di un porto o uno specchio d'acqua protetto nel quale possono sostare e ormeggiare le imbarcazioni.",
            },
        ],
    },

    {
        id: 23,
        area: "linguistica-logica",
        category: "figure-retoriche",
        difficulty: 2,
        question:
            "Individuare l’ossimoro:",
        answers: [
            {
                id: "A",
                text: "Una vecchia stanca",
                correct: false,
                explanation:
                    "Non esiste contrasto logico tra essere anziana ed essere stanca. Le due caratteristiche possono convivere normalmente.",
            },
            {
                id: "B",
                text: "Una giovane gioiosa",
                correct: false,
                explanation:
                    "«Giovane» e «gioiosa» non esprimono concetti opposti e quindi non formano un ossimoro.",
            },
            {
                id: "C",
                text: "Una giovane vecchia",
                correct: true,
                explanation:
                    "L'ossimoro accosta termini dal significato apparentemente contrario. «Giovane» e «vecchia» esprimono concetti opposti e il loro accostamento crea quindi un ossimoro.",
            },
            {
                id: "D",
                text: "Una vecchia saggia",
                correct: false,
                explanation:
                    "Essere anziani ed essere saggi non sono caratteristiche contraddittorie. Non è quindi presente un ossimoro.",
            },
        ],
    },

    {
        id: 24,
        area: "linguistica-logica",
        category: "morfologia-verbale",
        difficulty: 2,
        question:
            "Individuare il participio passato del verbo RIMUGINARE:",
        answers: [
            {
                id: "A",
                text: "Rimuginato",
                correct: true,
                explanation:
                    "«Rimuginato» è il participio passato del verbo «rimuginare». Può essere usato nei tempi composti, per esempio: «Ho rimuginato a lungo sulla questione».",
            },
            {
                id: "B",
                text: "Avendo rimuginato",
                correct: false,
                explanation:
                    "«Avendo rimuginato» è un gerundio passato, formato dall'ausiliare «avendo» più il participio passato.",
            },
            {
                id: "C",
                text: "Rimuginiamo",
                correct: false,
                explanation:
                    "«Rimuginiamo» è la prima persona plurale del presente indicativo del verbo «rimuginare».",
            },
            {
                id: "D",
                text: "Che lui avesse rimuginato",
                correct: false,
                explanation:
                    "«Avesse rimuginato» è congiuntivo trapassato. Il solo participio passato richiesto è «rimuginato».",
            },
        ],
    },

    {
        id: 25,
        area: "linguistica-logica",
        category: "tipologie-testuali",
        difficulty: 3,
        question:
            "Il testo regolativo fornisce indicazioni relative a:",
        answers: [
            {
                id: "A",
                text: "Esposizioni",
                correct: false,
                explanation:
                    "Un testo espositivo ha lo scopo di spiegare o presentare informazioni. Non è questa la funzione principale del testo regolativo.",
            },
            {
                id: "B",
                text: "Prescrizioni",
                correct: true,
                explanation:
                    "Il testo regolativo indica norme, istruzioni, regole o comportamenti da seguire. Fornisce quindi prescrizioni, come avviene nei regolamenti, nelle istruzioni e nelle ricette.",
            },
            {
                id: "C",
                text: "Opposizioni",
                correct: false,
                explanation:
                    "Le opposizioni non costituiscono lo scopo specifico di un testo regolativo.",
            },
            {
                id: "D",
                text: "Imposizioni",
                correct: false,
                explanation:
                    "Un testo regolativo può anche contenere obblighi, ma il termine più generale e corretto indicato dalla prova è «prescrizioni».",
            },
        ],
    },

    {
        id: 26,
        area: "linguistica-logica",
        category: "formazione-delle-parole",
        difficulty: 3,
        question:
            "Per acronimi si intendono:",
        answers: [
            {
                id: "A",
                text: "Testi incrociati",
                correct: false,
                explanation:
                    "Gli acronimi non sono testi incrociati. Sono parole o sigle formate utilizzando elementi iniziali di più parole.",
            },
            {
                id: "B",
                text: "Frutti dal sapore aspro",
                correct: false,
                explanation:
                    "Questa definizione non ha alcun rapporto con il concetto linguistico di acronimo.",
            },
            {
                id: "C",
                text: "Sillabe iniziali di due o più parole",
                correct: true,
                explanation:
                    "La prova definisce gli acronimi come forme ottenute mediante sillabe iniziali di due o più parole. Più in generale, un acronimo nasce combinando lettere o parti iniziali delle parole di un'espressione.",
            },
            {
                id: "D",
                text: "Soggetti ignoti",
                correct: false,
                explanation:
                    "«Soggetti ignoti» non è la definizione di acronimo e appartiene a un ambito completamente diverso.",
            },
        ],
    },

    {
        id: 27,
        area: "linguistica-logica",
        category: "scienze-della-terra-geologia",
        difficulty: 3,
        question:
            "Disciplina che si occupa della misurazione del tempo geologico è la:",
        answers: [
            {
                id: "A",
                text: "Preistoria",
                correct: false,
                explanation:
                    "La preistoria studia le fasi della storia umana precedenti alla documentazione scritta. Non è la disciplina specifica che determina l'età degli eventi geologici.",
            },
            {
                id: "B",
                text: "Cronostoria",
                correct: false,
                explanation:
                    "La cronostoria è una ricostruzione degli eventi secondo il loro ordine temporale. Non è la disciplina geologica richiesta.",
            },
            {
                id: "C",
                text: "Cronologia geografica",
                correct: false,
                explanation:
                    "«Cronologia geografica» non è il nome della disciplina scientifica dedicata alla datazione del tempo geologico.",
            },
            {
                id: "D",
                text: "Geonocronologia",
                correct: true,
                explanation:
                    "Questa è la forma riportata e indicata come corretta nel PDF. Il termine scientifico corretto è «geocronologia»: la disciplina che studia e determina l'età delle rocce, dei fossili e degli eventi della storia geologica della Terra.",
            },
        ],
    },

    {
        id: 28,
        area: "linguistica-logica",
        category: "lessico-campi-semantici",
        difficulty: 3,
        question:
            "Indicare il nome NON appartenente alla stessa sfera semantica:",
        answers: [
            {
                id: "A",
                text: "Suadente",
                correct: true,
                explanation:
                    "«Suadente» è un aggettivo che significa persuasivo, piacevole o capace di attrarre. Non è il nome di un vento.",
            },
            {
                id: "B",
                text: "Libeccio",
                correct: false,
                explanation:
                    "Il Libeccio è un vento che soffia generalmente da sud-ovest. Appartiene quindi allo stesso campo semantico degli altri nomi di vento.",
            },
            {
                id: "C",
                text: "Grecante",
                correct: false,
                explanation:
                    "Il Grecante è un nome riferito a un vento e appartiene quindi alla stessa sfera semantica di Scirocco e Libeccio.",
            },
            {
                id: "D",
                text: "Scirocco",
                correct: false,
                explanation:
                    "Lo Scirocco è un vento caldo proveniente generalmente da sud-est. È quindi un nome di vento.",
            },
        ],
    },

    {
        id: 29,
        area: "linguistica-logica",
        category: "punteggiatura",
        difficulty: 2,
        question:
            "In grammatica l’interpunzione è detta anche:",
        answers: [
            {
                id: "A",
                text: "Punzonamento",
                correct: false,
                explanation:
                    "«Punzonamento» indica normalmente un'operazione tecnica effettuata mediante un punzone. Non è sinonimo di interpunzione.",
            },
            {
                id: "B",
                text: "Puntamento",
                correct: false,
                explanation:
                    "«Puntamento» indica l'atto di puntare qualcosa e non riguarda i segni utilizzati nella scrittura.",
            },
            {
                id: "C",
                text: "Punteggiatura",
                correct: true,
                explanation:
                    "L'interpunzione è l'insieme dei segni di punteggiatura e delle regole che ne disciplinano l'uso: punto, virgola, due punti, punto e virgola e così via.",
            },
            {
                id: "D",
                text: "Punzonatura",
                correct: false,
                explanation:
                    "La punzonatura è un procedimento tecnico con cui si imprime un segno mediante un punzone. Non è un termine grammaticale equivalente a interpunzione.",
            },
        ],
    },

    {
        id: 30,
        area: "linguistica-logica",
        category: "lessico",
        difficulty: 2,
        question:
            "Con il termine lessico si fa riferimento:",
        answers: [
            {
                id: "A",
                text: "Al metodo di cottura",
                correct: false,
                explanation:
                    "Il lessico appartiene alla linguistica e non riguarda tecniche o metodi di cottura.",
            },
            {
                id: "B",
                text: "Al repertorio delle parole",
                correct: true,
                explanation:
                    "Il lessico è l'insieme delle parole di una lingua, di un settore, di un autore o di una persona. Per questo può essere definito il repertorio delle parole.",
            },
            {
                id: "C",
                text: "A una figura retorica",
                correct: false,
                explanation:
                    "Il lessico non è una singola figura retorica. Indica l'insieme dei vocaboli disponibili o utilizzati.",
            },
            {
                id: "D",
                text: "Al tempo verbale",
                correct: false,
                explanation:
                    "I tempi verbali appartengono alla morfologia del verbo. Non costituiscono il significato del termine «lessico».",
            },
        ],
    },

    {
        id: 31,
        area: "linguistica-logica",
        category: "sintassi-frase-minima",
        difficulty: 2,
        question:
            "La struttura della frase minima è composta dagli elementi:",
        answers: [
            {
                id: "A",
                text: "Predicato e complemento",
                correct: false,
                explanation:
                    "Un complemento può ampliare il significato della frase, ma non sostituisce necessariamente il soggetto nella struttura minima indicata dalla prova.",
            },
            {
                id: "B",
                text: "Complemento ed espansioni",
                correct: false,
                explanation:
                    "Le espansioni aggiungono informazioni a una frase già strutturata. Non costituiscono da sole il nucleo della frase minima.",
            },
            {
                id: "C",
                text: "Soggetto e complemento",
                correct: false,
                explanation:
                    "Manca il predicato, che costituisce l'elemento centrale necessario per esprimere ciò che il soggetto fa o ciò che si afferma di esso.",
            },
            {
                id: "D",
                text: "Soggetto e predicato verbale",
                correct: true,
                explanation:
                    "Secondo la classificazione adottata dalla prova, la frase minima è costituita dal soggetto e dal predicato verbale: per esempio «Luca corre».",
            },
        ],
    },

    {
        id: 32,
        area: "linguistica-logica",
        category: "fonetica",
        difficulty: 3,
        question:
            "Il fenomeno linguistico indicato con il termine “iato” è considerato il contrario del:",
        answers: [
            {
                id: "A",
                text: "Dittongo",
                correct: true,
                explanation:
                    "Nel dittongo due vocali vengono pronunciate all'interno della stessa sillaba. Nell'iato, invece, le due vocali appartengono a sillabe diverse: per questo i due fenomeni vengono contrapposti.",
            },
            {
                id: "B",
                text: "Trittongo",
                correct: false,
                explanation:
                    "Il trittongo riguarda tre suoni vocalici pronunciati nella stessa sillaba. La contrapposizione tradizionale richiesta dal quesito è tra iato e dittongo.",
            },
            {
                id: "C",
                text: "Prefisso",
                correct: false,
                explanation:
                    "Il prefisso è un elemento che viene aggiunto all'inizio di una parola per modificarne il significato. Non è un fenomeno fonetico opposto allo iato.",
            },
            {
                id: "D",
                text: "Suffisso",
                correct: false,
                explanation:
                    "Il suffisso viene aggiunto alla fine di una base lessicale. Non riguarda il rapporto tra vocali all'interno delle sillabe.",
            },
        ],
    },

    {
        id: 33,
        area: "linguistica-logica",
        category: "logica-serie-numeriche",
        difficulty: 3,
        question:
            "Completare la seguente successione numerica: 3; 6; 10; 15; 21; ......",
        answers: [
            {
                id: "A",
                text: "36",
                correct: false,
                explanation:
                    "Per ottenere 36 bisognerebbe aggiungere 15 a 21, ma questo non segue la progressione degli incrementi precedenti.",
            },
            {
                id: "B",
                text: "28",
                correct: true,
                explanation:
                    "Le differenze sono progressivamente +3, +4, +5 e +6. Il termine successivo si ottiene quindi aggiungendo +7: 21+7=28.",
            },
            {
                id: "C",
                text: "19",
                correct: false,
                explanation:
                    "19 è addirittura inferiore al termine precedente 21 e interromperebbe la crescita regolare della successione.",
            },
            {
                id: "D",
                text: "47",
                correct: false,
                explanation:
                    "47 non deriva dall'incremento progressivo osservato nella serie. Il passo successivo deve essere +7.",
            },
        ],
    },

    {
        id: 34,
        area: "linguistica-logica",
        category: "logica-serie-alfabetiche",
        difficulty: 3,
        question:
            "Completare la seguente successione alfabetica: C; F; I; N; .....",
        answers: [
            {
                id: "A",
                text: "V",
                correct: false,
                explanation:
                    "V si trova troppo avanti rispetto alla progressione utilizzata nella sequenza.",
            },
            {
                id: "B",
                text: "S",
                correct: false,
                explanation:
                    "S non mantiene lo spostamento regolare di tre posizioni dell'alfabeto italiano.",
            },
            {
                id: "C",
                text: "Q",
                correct: true,
                explanation:
                    "Considerando l'alfabeto italiano tradizionale di 21 lettere, la serie procede di tre posizioni: C, F, I, N, Q. La risposta indicata dalla prova è quindi Q.",
            },
            {
                id: "D",
                text: "L",
                correct: false,
                explanation:
                    "L precederebbe N e interromperebbe la progressione crescente della sequenza.",
            },
        ],
    },

    {
        id: 35,
        area: "linguistica-logica",
        category: "logica-serie-alfabetiche",
        difficulty: 4,
        question:
            "Il tris di lettere che occupa logicamente la seguente sequenza: ZVU; TSR; QPO; NML; ......",
        answers: [
            {
                id: "A",
                text: "DEF",
                correct: false,
                explanation:
                    "Il gruppo DEF è disposto in ordine crescente e non mantiene la struttura delle terne precedenti, nelle quali le lettere procedono all'indietro.",
            },
            {
                id: "B",
                text: "CBA",
                correct: false,
                explanation:
                    "CBA mantiene un ordine decrescente interno, ma si trova troppo avanti nella progressione complessiva.",
            },
            {
                id: "C",
                text: "ABC",
                correct: false,
                explanation:
                    "ABC è in ordine crescente, mentre le terne della serie sono costruite in ordine alfabetico decrescente.",
            },
            {
                id: "D",
                text: "IHG",
                correct: true,
                explanation:
                    "Usando l'alfabeto italiano, le terne sono gruppi di tre lettere consecutive in ordine decrescente: ZVU, TSR, QPO, NML e quindi IHG. Ogni nuova terna prosegue verso l'inizio dell'alfabeto.",
            },
        ],
    },

    {
        id: 36,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages.passage01,
        question:
            "Nel covo del pirata prevale:",
        answers: [
            {
                id: "A",
                text: "luce",
                correct: true,
                explanation:
                    "All'esterno domina il buio della tempesta, ma il covo descritto nel brano è illuminato: le finestre sono «vivamente illuminate», una stanza è illuminata e una lampada fa scintillare oro e pietre preziose.",
            },
            {
                id: "B",
                text: "buio",
                correct: false,
                explanation:
                    "Il buio caratterizza soprattutto l'esterno dell'isola. All'interno dell'abitazione, invece, sono presenti finestre e una stanza illuminate.",
            },
            {
                id: "C",
                text: "penombra",
                correct: false,
                explanation:
                    "Il testo non descrive il covo come immerso nella penombra. Al contrario insiste sulla luce e sui riflessi degli oggetti preziosi.",
            },
            {
                id: "D",
                text: "ombra",
                correct: false,
                explanation:
                    "L'ombra non è l'elemento dominante nella descrizione interna del covo. Vengono invece evidenziate fonti luminose e superfici scintillanti.",
            },
        ],
    },

    {
        id: 37,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages.passage01,
        question:
            "L’isola di Mompracem si trova nel:",
        answers: [
            {
                id: "A",
                text: "mare delle Andemane",
                correct: false,
                explanation:
                    "Il brano non colloca Mompracem nel mare delle Andemane. Nell'apertura viene indicato esplicitamente il mare della Malesia.",
            },
            {
                id: "B",
                text: "mare della Malesia",
                correct: true,
                explanation:
                    "La prima parte del brano descrive Mompracem come un'isola «situata nel mare della Malesia, a poche centinaia di miglia dalle coste occidentali del Borneo».",
            },
            {
                id: "C",
                text: "[alternativa non visibile nella scansione del PDF]",
                correct: false,
                explanation:
                    "Questa alternativa non è leggibile nel documento fornito. Non la ricostruisco per evitare di inventare contenuti assenti dalla fonte.",
            },
            {
                id: "D",
                text: "[alternativa non visibile nella scansione del PDF]",
                correct: false,
                explanation:
                    "Anche questa alternativa non compare nella scansione disponibile. La risposta corretta resta comunque esplicitamente ricavabile dal brano.",
            },
        ],
    },

    {
        id: 38,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages.passage01,
        question:
            "Cosa non si vedeva “... né dalle capanne allineate in fondo alla baia dell’isola, né sulle fortificazioni”?",
        answers: [
            {
                id: "A",
                text: "alcuna strada",
                correct: false,
                explanation:
                    "Il brano non afferma che non fosse visibile alcuna strada. La frase citata fa esplicito riferimento alla mancanza di luce.",
            },
            {
                id: "B",
                text: "alcuna abitazione",
                correct: false,
                explanation:
                    "Le capanne e le fortificazioni sono invece nominate nel testo e quindi la loro esistenza è evidente.",
            },
            {
                id: "C",
                text: "alcun lume",
                correct: true,
                explanation:
                    "Il testo dice espressamente: «non si scorgeva alcun lume». Soltanto guardando verso l'alto si potevano vedere due finestre vivamente illuminate.",
            },
            {
                id: "D",
                text: "alcuna persona",
                correct: false,
                explanation:
                    "La frase citata non riguarda direttamente la presenza o assenza di persone, ma l'impossibilità di vedere delle luci.",
            },
        ],
    },

    {
        id: 39,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages.passage01,
        question:
            "Da quale Paese provengono i tappeti che ricoprono il pavimento:",
        answers: [
            {
                id: "A",
                text: "Giappone",
                correct: false,
                explanation:
                    "Il Giappone non viene indicato come provenienza dei tappeti descritti nel covo.",
            },
            {
                id: "B",
                text: "Egitto",
                correct: false,
                explanation:
                    "Il testo non attribuisce i tappeti all'Egitto.",
            },
            {
                id: "C",
                text: "Turchia",
                correct: false,
                explanation:
                    "Sebbene la Turchia sia storicamente nota anche per la produzione di tappeti, il brano indica una provenienza diversa.",
            },
            {
                id: "D",
                text: "Persia",
                correct: true,
                explanation:
                    "Il brano afferma esplicitamente che il pavimento scompare sotto «un alto strato di tappeti di Persia, sfolgoranti d'oro».",
            },
        ],
    },

    {
        id: 40,
        area: "linguistica-logica",
        category: "comprensione-del-testo",
        difficulty: 2,
        passage: passages.passage01,
        question:
            "Cosa correva “Pel cielo, spinte da un vento irresistibile”?",
        answers: [
            {
                id: "A",
                text: "nere masse di vapori",
                correct: true,
                explanation:
                    "Il testo dice direttamente: «Pel cielo, spinte da un vento irresistibile, correvano come cavalli sbrigliati nere masse di vapori». È quindi una risposta esplicita.",
            },
            {
                id: "B",
                text: "banchi di nebbia",
                correct: false,
                explanation:
                    "Nel passo non vengono indicati banchi di nebbia come ciò che corre nel cielo.",
            },
            {
                id: "C",
                text: "nuvole cariche di pioggia",
                correct: false,
                explanation:
                    "Le masse di vapori provocano furiosi acquazzoni, ma l'espressione esatta utilizzata nel testo è «nere masse di vapori».",
            },
            {
                id: "D",
                text: "foglie secche",
                correct: false,
                explanation:
                    "Il vento non viene descritto mentre trascina foglie secche. La scena riguarda le masse scure di vapori presenti nel cielo.",
            },
        ],
    },
    {
        id: 41,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-italiana-contemporanea",
        difficulty: 2,
        question:
            "Fu rapito e ucciso dalle Brigate rosse:",
        answers: [
            {
                id: "A",
                text: "Paolo Borsellino",
                correct: false,
                explanation:
                    "Paolo Borsellino fu un magistrato impegnato nella lotta alla mafia. Venne ucciso il 19 luglio 1992 nella strage di via D'Amelio a Palermo, non dalle Brigate Rosse.",
            },
            {
                id: "B",
                text: "Aldo Moro",
                correct: true,
                explanation:
                    "Aldo Moro, importante esponente della Democrazia Cristiana, fu rapito dalle Brigate Rosse il 16 marzo 1978. Dopo 55 giorni di prigionia venne ucciso e il suo corpo fu ritrovato il 9 maggio 1978 a Roma.",
            },
            {
                id: "C",
                text: "Giovanni Falcone",
                correct: false,
                explanation:
                    "Giovanni Falcone fu un magistrato antimafia. Venne ucciso il 23 maggio 1992 nella strage di Capaci, organizzata da Cosa Nostra.",
            },
            {
                id: "D",
                text: "Piersanti Mattarella",
                correct: false,
                explanation:
                    "Piersanti Mattarella, presidente della Regione Siciliana, fu assassinato a Palermo nel 1980. Il suo omicidio è legato alla criminalità mafiosa, non alle Brigate Rosse.",
            },
        ],
    },

    {
        id: 42,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-contemporanea",
        difficulty: 2,
        question:
            "L’anno in cui si verificò l’attentato al World Trade Center, conosciuto con il nome di Torri gemelle:",
        answers: [
            {
                id: "A",
                text: "24 dicembre 2001",
                correct: false,
                explanation:
                    "L'attentato alle Torri Gemelle non avvenne il 24 dicembre. Si verificò alcuni mesi prima, nel settembre del 2001.",
            },
            {
                id: "B",
                text: "11 settembre 2000",
                correct: false,
                explanation:
                    "La data dell'11 settembre è corretta, ma l'anno non lo è. Gli attentati avvennero nel 2001.",
            },
            {
                id: "C",
                text: "24 dicembre 2000",
                correct: false,
                explanation:
                    "Questa data non corrisponde agli attentati contro il World Trade Center. L'evento avvenne l'anno successivo.",
            },
            {
                id: "D",
                text: "11 settembre 2001",
                correct: true,
                explanation:
                    "Gli attentati dell'11 settembre 2001 colpirono gli Stati Uniti. Due aerei di linea dirottati furono fatti schiantare contro le Torri Gemelle del World Trade Center di New York.",
            },
        ],
    },

    {
        id: 43,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-italiana",
        difficulty: 2,
        question:
            "La Regione dell’Italia peninsulare non bagnata dal mare è:",
        answers: [
            {
                id: "A",
                text: "Marche",
                correct: false,
                explanation:
                    "Le Marche si affacciano sul Mare Adriatico e possiedono quindi un'estesa costa.",
            },
            {
                id: "B",
                text: "Basilicata",
                correct: false,
                explanation:
                    "La Basilicata è bagnata sia dal Mar Tirreno, nella zona di Maratea, sia dal Mar Ionio.",
            },
            {
                id: "C",
                text: "Umbria",
                correct: true,
                explanation:
                    "L'Umbria è l'unica regione dell'Italia peninsulare che non possiede sbocchi sul mare. Confina con Toscana, Marche e Lazio.",
            },
            {
                id: "D",
                text: "Molise",
                correct: false,
                explanation:
                    "Il Molise possiede un tratto di costa sul Mare Adriatico, dove si trova anche la città di Termoli.",
            },
        ],
    },

    {
        id: 44,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-italiana",
        difficulty: 2,
        question:
            "L’aeroporto internazionale della città di Roma si chiama:",
        answers: [
            {
                id: "A",
                text: "Leonardo da Vinci",
                correct: true,
                explanation:
                    "L'aeroporto internazionale Leonardo da Vinci si trova a Fiumicino ed è il principale aeroporto che serve Roma. Per questo viene comunemente chiamato anche aeroporto di Roma-Fiumicino.",
            },
            {
                id: "B",
                text: "Malpensa",
                correct: false,
                explanation:
                    "Malpensa è uno dei principali aeroporti dell'area di Milano, in Lombardia. Non è l'aeroporto internazionale di Roma.",
            },
            {
                id: "C",
                text: "Orio al Serio",
                correct: false,
                explanation:
                    "L'aeroporto di Orio al Serio si trova vicino a Bergamo ed è utilizzato soprattutto per l'area lombarda.",
            },
            {
                id: "D",
                text: "Caselle",
                correct: false,
                explanation:
                    "Caselle è il nome con cui viene comunemente indicato l'aeroporto di Torino, situato nel comune di Caselle Torinese.",
            },
        ],
    },

    {
        id: 45,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "educazione-civica",
        difficulty: 3,
        question:
            "I cittadini che esercitano il diritto di voto per il Senato hanno un’età non inferiore a:",
        answers: [
            {
                id: "A",
                text: "45 anni",
                correct: false,
                explanation:
                    "45 anni non era l'età minima richiesta per votare per il Senato. È nettamente superiore alla soglia prevista dalla normativa a cui fa riferimento questa prova.",
            },
            {
                id: "B",
                text: "25 anni",
                correct: true,
                explanation:
                    "Questa è la risposta indicata dalla prova A.A. 2020/2021. Al momento in cui fu predisposto il test, per eleggere il Senato della Repubblica era richiesta un'età minima di 25 anni.",
            },
            {
                id: "C",
                text: "18 anni",
                correct: false,
                explanation:
                    "Nella prova del 2020/2021 questa alternativa non era considerata corretta: il quesito faceva riferimento alla normativa allora prevista per l'elettorato attivo del Senato.",
            },
            {
                id: "D",
                text: "30 anni",
                correct: false,
                explanation:
                    "30 anni non era la soglia prevista per esercitare il diritto di voto per il Senato secondo la normativa richiamata dal test.",
            },
        ],
    },

    {
        id: 46,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-contemporanea",
        difficulty: 2,
        question:
            "Le città che subirono due attacchi nucleari sul finire della Seconda guerra mondiale:",
        answers: [
            {
                id: "A",
                text: "Osaka e Tokyo",
                correct: false,
                explanation:
                    "Tokyo e Osaka subirono pesanti bombardamenti convenzionali durante la Seconda guerra mondiale, ma non furono le due città colpite dalle bombe atomiche.",
            },
            {
                id: "B",
                text: "Nagasaky e Tokyo",
                correct: false,
                explanation:
                    "Nagasaki fu effettivamente colpita da una bomba atomica, ma Tokyo no. L'altra città fu Hiroshima.",
            },
            {
                id: "C",
                text: "Hiroshima e Nagasaky",
                correct: true,
                explanation:
                    "Hiroshima fu colpita dalla prima bomba atomica utilizzata in guerra il 6 agosto 1945. Tre giorni dopo, il 9 agosto, una seconda bomba atomica fu sganciata su Nagasaki.",
            },
            {
                id: "D",
                text: "Osaka e Hiroshima",
                correct: false,
                explanation:
                    "Hiroshima fu colpita da una bomba atomica, ma Osaka no. La seconda città colpita fu Nagasaki.",
            },
        ],
    },

    {
        id: 47,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 3,
        question:
            "Il titolo della poesia a cui appartengono i versi: “Ei fu siccome immobile, dato il mortal sospiro, stette la spoglia immemore...” è:",
        answers: [
            {
                id: "A",
                text: "Soldati",
                correct: false,
                explanation:
                    "«Soldati» è una breve poesia di Giuseppe Ungaretti, composta durante la Prima guerra mondiale. Non contiene i versi citati.",
            },
            {
                id: "B",
                text: "Cavallina storna",
                correct: false,
                explanation:
                    "«La cavalla storna» è una poesia di Giovanni Pascoli. Non appartiene ad Alessandro Manzoni e non contiene questi versi.",
            },
            {
                id: "C",
                text: "L’infinito",
                correct: false,
                explanation:
                    "«L'infinito» è uno dei più celebri componimenti di Giacomo Leopardi e inizia con «Sempre caro mi fu quest'ermo colle».",
            },
            {
                id: "D",
                text: "Il cinque maggio",
                correct: true,
                explanation:
                    "I versi appartengono a «Il cinque maggio» di Alessandro Manzoni. L'ode fu composta in occasione della morte di Napoleone Bonaparte, avvenuta il 5 maggio 1821.",
            },
        ],
    },

    {
        id: 48,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 2,
        question:
            "L’autore della poesia “X agosto” è:",
        answers: [
            {
                id: "A",
                text: "Giovanni Pascoli",
                correct: true,
                explanation:
                    "«X agosto» è una poesia di Giovanni Pascoli inclusa nella raccolta «Myricae». Il componimento collega la notte di San Lorenzo alla morte del padre del poeta, assassinato il 10 agosto 1867.",
            },
            {
                id: "B",
                text: "Giacomo Leopardi",
                correct: false,
                explanation:
                    "Giacomo Leopardi è autore di componimenti come «L'infinito», «A Silvia» e «La ginestra». Non ha scritto «X agosto».",
            },
            {
                id: "C",
                text: "Alessandro Manzoni",
                correct: false,
                explanation:
                    "Alessandro Manzoni è autore de «I promessi sposi» e di odi come «Il cinque maggio». «X agosto» appartiene invece a Pascoli.",
            },
            {
                id: "D",
                text: "Gabriele D’Annunzio",
                correct: false,
                explanation:
                    "Gabriele D'Annunzio è autore di opere come «Il piacere» e della raccolta poetica «Alcyone». Non è l'autore di «X agosto».",
            },
        ],
    },

    {
        id: 49,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia",
        difficulty: 3,
        question:
            "La Terra del Fuoco è un arcipelago situato in:",
        answers: [
            {
                id: "A",
                text: "Cile",
                correct: false,
                explanation:
                    "Una parte dell'arcipelago appartiene al Cile, ma il quesito chiede il continente o la grande area geografica in cui si trova.",
            },
            {
                id: "B",
                text: "Italia",
                correct: false,
                explanation:
                    "La Terra del Fuoco si trova all'estremità meridionale del continente americano, non in Europa.",
            },
            {
                id: "C",
                text: "Sud America",
                correct: true,
                explanation:
                    "La Terra del Fuoco è un arcipelago situato all'estremità meridionale del Sud America. Il territorio è diviso principalmente tra Argentina e Cile.",
            },
            {
                id: "D",
                text: "Argentina",
                correct: false,
                explanation:
                    "Parte della Terra del Fuoco appartiene all'Argentina, ma l'arcipelago è condiviso anche con il Cile. La risposta geografica più generale richiesta dal test è «Sud America».",
            },
        ],
    },

    {
        id: 50,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-italiana",
        difficulty: 2,
        question:
            "L’isola di Ventotene appartiene alla Regione:",
        answers: [
            {
                id: "A",
                text: "Puglia",
                correct: false,
                explanation:
                    "Ventotene non appartiene alla Puglia. È un'isola del Mar Tirreno situata al largo delle coste del Lazio.",
            },
            {
                id: "B",
                text: "Lazio",
                correct: true,
                explanation:
                    "Ventotene appartiene alla Regione Lazio e fa parte della provincia di Latina. Insieme ad altre isole costituisce l'arcipelago delle Isole Ponziane.",
            },
            {
                id: "C",
                text: "Campania",
                correct: false,
                explanation:
                    "La Campania comprende diverse isole del Golfo di Napoli, come Ischia, Capri e Procida, ma Ventotene appartiene al Lazio.",
            },
            {
                id: "D",
                text: "Liguria",
                correct: false,
                explanation:
                    "La Liguria si trova nell'Italia nord-occidentale e non comprende l'isola di Ventotene.",
            },
        ],
    },

    {
        id: 51,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-contemporanea",
        difficulty: 2,
        question:
            "La città cinese considerata il luogo da cui si è propagato il virus conosciuto come Coronavirus è:",
        answers: [
            {
                id: "A",
                text: "Shanghai",
                correct: false,
                explanation:
                    "Shanghai non è la città indicata dalla prova. Il quesito fa riferimento alla città nella quale venne identificato il primo grande focolaio noto della pandemia.",
            },
            {
                id: "B",
                text: "Canton",
                correct: false,
                explanation:
                    "Canton, oggi comunemente chiamata Guangzhou, non è la risposta indicata nel documento.",
            },
            {
                id: "C",
                text: "Pechino",
                correct: false,
                explanation:
                    "Pechino è la capitale della Cina, ma non è la città indicata dalla prova per questo quesito.",
            },
            {
                id: "D",
                text: "Wuhan",
                correct: true,
                explanation:
                    "La risposta evidenziata nella prova A.A. 2020/2021 è Wuhan. La città cinese fu il luogo in cui, alla fine del 2019, venne identificato il primo grande focolaio noto di COVID-19.",
            },
        ],
    },

    {
        id: 52,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "letteratura-italiana",
        difficulty: 3,
        question:
            "Il titolo del primo romanzo storico pubblicato in Italia è:",
        answers: [
            {
                id: "A",
                text: "I Promessi sposi",
                correct: true,
                explanation:
                    "La risposta indicata dalla prova è «I Promessi sposi» di Alessandro Manzoni. Il romanzo è ambientato nella Lombardia del Seicento e rappresenta l'opera più importante del romanzo storico italiano ottocentesco.",
            },
            {
                id: "B",
                text: "Rosso mal pelo",
                correct: false,
                explanation:
                    "«Rosso Malpelo» è una novella di Giovanni Verga, non un romanzo storico.",
            },
            {
                id: "C",
                text: "La storia",
                correct: false,
                explanation:
                    "«La Storia» è un romanzo di Elsa Morante pubblicato nel 1974, quindi molto successivo all'opera manzoniana.",
            },
            {
                id: "D",
                text: "I Malavoglia",
                correct: false,
                explanation:
                    "«I Malavoglia» è un romanzo verista di Giovanni Verga pubblicato nel 1881. Non è la risposta richiesta dal quesito.",
            },
        ],
    },

    {
        id: 53,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-fisica",
        difficulty: 2,
        question:
            "La catena dei Monti Urali si trova in:",
        answers: [
            {
                id: "A",
                text: "Mongolia",
                correct: false,
                explanation:
                    "La Mongolia si trova nell'Asia centrale e orientale, ma la catena degli Urali non attraversa questo Stato.",
            },
            {
                id: "B",
                text: "Russia",
                correct: true,
                explanation:
                    "I Monti Urali si estendono principalmente in Russia e costituiscono tradizionalmente una parte del confine geografico tra Europa e Asia.",
            },
            {
                id: "C",
                text: "Italia",
                correct: false,
                explanation:
                    "In Italia le principali catene montuose sono le Alpi e gli Appennini. Gli Urali si trovano molto più a est.",
            },
            {
                id: "D",
                text: "Polonia",
                correct: false,
                explanation:
                    "La Polonia si trova nell'Europa centro-orientale, ma non è attraversata dalla catena degli Urali.",
            },
        ],
    },

    {
        id: 54,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "geografia-italiana",
        difficulty: 2,
        question:
            "Regione italiana a Statuto speciale è:",
        answers: [
            {
                id: "A",
                text: "Lazio",
                correct: false,
                explanation:
                    "Il Lazio è una regione a statuto ordinario. Non appartiene alle cinque regioni italiane dotate di statuto speciale.",
            },
            {
                id: "B",
                text: "Piemonte",
                correct: false,
                explanation:
                    "Il Piemonte è una regione a statuto ordinario.",
            },
            {
                id: "C",
                text: "Valle d’Aosta",
                correct: true,
                explanation:
                    "La Valle d'Aosta è una delle cinque regioni italiane a statuto speciale. Le altre sono Sicilia, Sardegna, Trentino-Alto Adige/Südtirol e Friuli Venezia Giulia.",
            },
            {
                id: "D",
                text: "Lombardia",
                correct: false,
                explanation:
                    "La Lombardia è una regione a statuto ordinario e non dispone dello statuto speciale previsto per alcune regioni italiane.",
            },
        ],
    },

    {
        id: 55,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-italiana-contemporanea",
        difficulty: 3,
        question:
            "Il proclama dell’Armistizio dell’Italia, coinvolta nella Seconda guerra mondiale, è avvenuto a:",
        answers: [
            {
                id: "A",
                text: "Cassino",
                correct: false,
                explanation:
                    "Cassino è nota soprattutto per la battaglia di Montecassino del 1944. Non è il luogo associato all'armistizio italiano del 1943.",
            },
            {
                id: "B",
                text: "Catania",
                correct: false,
                explanation:
                    "Catania non è la località che dà il nome all'armistizio indicato dal quesito.",
            },
            {
                id: "C",
                text: "Castelfranci",
                correct: false,
                explanation:
                    "Castelfranci non è collegata all'armistizio stipulato tra l'Italia e gli Alleati durante la Seconda guerra mondiale.",
            },
            {
                id: "D",
                text: "Cassibile",
                correct: true,
                explanation:
                    "L'armistizio tra l'Italia e gli Alleati venne firmato a Cassibile, in Sicilia, il 3 settembre 1943 e fu reso pubblico l'8 settembre 1943. Per questo è conosciuto come Armistizio di Cassibile.",
            },
        ],
    },

    {
        id: 56,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-italiana-contemporanea",
        difficulty: 3,
        question:
            "I rapporti tra Stato e Chiesa trovarono la loro definizione nel Concordato sottoscritto nel 1929 e sancito nei:",
        answers: [
            {
                id: "A",
                text: "Patti lateranensi",
                correct: true,
                explanation:
                    "I Patti Lateranensi furono sottoscritti nel 1929 tra il Regno d'Italia e la Santa Sede. Regolarono i rapporti tra Stato e Chiesa e riconobbero, tra le altre cose, la sovranità dello Stato della Città del Vaticano.",
            },
            {
                id: "B",
                text: "Patti politici",
                correct: false,
                explanation:
                    "«Patti politici» non è il nome storico dell'accordo del 1929 tra lo Stato italiano e la Santa Sede.",
            },
            {
                id: "C",
                text: "Patti amministrativi",
                correct: false,
                explanation:
                    "Non esiste con questo nome l'accordo storico richiamato dal quesito. La denominazione corretta è Patti Lateranensi.",
            },
            {
                id: "D",
                text: "Patti atlantici",
                correct: false,
                explanation:
                    "Il Patto Atlantico è legato alla nascita della NATO nel secondo dopoguerra e non riguarda il Concordato tra Stato italiano e Chiesa.",
            },
        ],
    },

    {
        id: 57,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-romana",
        difficulty: 3,
        question:
            "L’espressione gli “ozi di Capua” è stata coniata con riferimento alle guerre:",
        answers: [
            {
                id: "A",
                text: "Germaniche",
                correct: false,
                explanation:
                    "Le guerre germaniche riguardarono gli scontri tra Roma e diverse popolazioni germaniche. Non sono il contesto dell'espressione «ozi di Capua».",
            },
            {
                id: "B",
                text: "Puniche",
                correct: true,
                explanation:
                    "L'espressione «ozi di Capua» è collegata alla Seconda guerra punica. Secondo la tradizione, l'esercito di Annibale si sarebbe indebolito durante la permanenza a Capua a causa di una vita troppo agiata.",
            },
            {
                id: "C",
                text: "Bizantine",
                correct: false,
                explanation:
                    "Le guerre bizantine appartengono a un periodo storico molto successivo alle guerre tra Roma e Cartagine.",
            },
            {
                id: "D",
                text: "Ispaniche",
                correct: false,
                explanation:
                    "Roma combatté diverse guerre nella penisola iberica, ma l'espressione «ozi di Capua» è legata alle guerre puniche e ad Annibale.",
            },
        ],
    },

    {
        id: 58,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-antica",
        difficulty: 3,
        question:
            "“Ci vedremo a Filippi”, che sta a significare il momento della resa dei conti, è un’espressione riconducibile a fatti avvenuti in epoca:",
        answers: [
            {
                id: "A",
                text: "Contemporanea",
                correct: false,
                explanation:
                    "L'espressione ha origini molto più antiche e non deriva da avvenimenti dell'età contemporanea.",
            },
            {
                id: "B",
                text: "Medievale",
                correct: false,
                explanation:
                    "Gli eventi collegati a Filippi precedono di molti secoli il Medioevo.",
            },
            {
                id: "C",
                text: "Romana",
                correct: true,
                explanation:
                    "L'espressione rimanda alla battaglia di Filippi del 42 a.C., combattuta nell'età romana. È collegata alla tradizione secondo cui il fantasma di Cesare avrebbe annunciato a Bruto un futuro incontro a Filippi.",
            },
            {
                id: "D",
                text: "Greca",
                correct: false,
                explanation:
                    "Filippi era geograficamente nel mondo greco-macedone, ma gli eventi storici a cui fa riferimento l'espressione riguardano la storia politica romana.",
            },
        ],
    },

    {
        id: 59,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "educazione-civica-istituzioni",
        difficulty: 2,
        question:
            "Quale rappresentante dello Stato, al termine del proprio mandato, diviene Senatore a vita:",
        answers: [
            {
                id: "A",
                text: "Presidente del Consiglio",
                correct: false,
                explanation:
                    "Un ex Presidente del Consiglio non diventa automaticamente senatore a vita al termine del proprio incarico.",
            },
            {
                id: "B",
                text: "Presidente della Corte Costituzionale",
                correct: false,
                explanation:
                    "La conclusione dell'incarico di Presidente della Corte costituzionale non comporta automaticamente la nomina a senatore a vita.",
            },
            {
                id: "C",
                text: "Presidente del Consiglio Superiore della Magistratura",
                correct: false,
                explanation:
                    "Questa funzione non determina automaticamente l'acquisizione della carica di senatore a vita.",
            },
            {
                id: "D",
                text: "Presidente della Repubblica",
                correct: true,
                explanation:
                    "Gli ex Presidenti della Repubblica italiana diventano senatori di diritto e a vita al termine del loro mandato, salvo rinuncia.",
            },
        ],
    },

    {
        id: 60,
        area: "cultura-letteraria-storico-sociale-geografica",
        category: "storia-contemporanea",
        difficulty: 3,
        question:
            "Il Pontefice che istituì la “Giornata mondiale della gioventù”:",
        answers: [
            {
                id: "A",
                text: "Giovanni Paolo II",
                correct: true,
                explanation:
                    "La Giornata Mondiale della Gioventù è legata al pontificato di Giovanni Paolo II. L'iniziativa nacque negli anni Ottanta come grande incontro internazionale dedicato ai giovani cattolici.",
            },
            {
                id: "B",
                text: "Leone XIII",
                correct: false,
                explanation:
                    "Leone XIII fu papa tra il XIX e l'inizio del XX secolo, molti decenni prima dell'istituzione della Giornata Mondiale della Gioventù.",
            },
            {
                id: "C",
                text: "Pio XII",
                correct: false,
                explanation:
                    "Pio XII fu pontefice dal 1939 al 1958. La Giornata Mondiale della Gioventù fu istituita successivamente.",
            },
            {
                id: "D",
                text: "Giovanni Paolo I",
                correct: false,
                explanation:
                    "Giovanni Paolo I ebbe un pontificato molto breve nel 1978. L'iniziativa della Giornata Mondiale della Gioventù è invece associata a Giovanni Paolo II.",
            },
        ],
    },
    {
        id: 61,
        area: "cultura-matematico-scientifica",
        category: "matematica-divisibilita",
        difficulty: 3,
        question:
            "Il numero 642 è:",
        answers: [
            {
                id: "A",
                text: "Indivisibile",
                correct: false,
                explanation:
                    "642 è certamente divisibile, quindi questa alternativa è falsa. Per esempio termina con la cifra 2 e quindi è divisibile per 2.",
            },
            {
                id: "B",
                text: "Divisibile per 2",
                correct: true,
                explanation:
                    "Questa è la risposta evidenziata come corretta nel PDF originale. 642 è divisibile per 2 perché termina con una cifra pari. Attenzione però: 6+4+2=12, quindi 642 è anche divisibile per 3; di conseguenza anche l'alternativa «Divisibile per 2 e per 3» è matematicamente vera e il quesito originale è ambiguo.",
            },
            {
                id: "C",
                text: "Divisibile per 3",
                correct: false,
                explanation:
                    "Matematicamente 642 è effettivamente divisibile anche per 3, perché la somma delle sue cifre è 6+4+2=12, che è multiplo di 3. Tuttavia il PDF evidenzia come soluzione la sola risposta «Divisibile per 2».",
            },
            {
                id: "D",
                text: "Divisibile per 2 e per 3",
                correct: false,
                explanation:
                    "Questa affermazione è anch'essa matematicamente vera: 642 è pari e la somma delle sue cifre è 12, quindi è divisibile sia per 2 sia per 3. Il quesito della prova presenta quindi più di una risposta vera; nel simulatore manteniamo come `correct` quella evidenziata nel documento.",
            },
        ],
    },

    {
        id: 62,
        area: "cultura-matematico-scientifica",
        category: "matematica-frazioni",
        difficulty: 3,
        question:
            "La frazione 5/5 viene definita:",
        answers: [
            {
                id: "A",
                text: "Propria",
                correct: false,
                explanation:
                    "Una frazione propria ha il numeratore minore del denominatore e rappresenta un numero minore di 1. In 5/5 numeratore e denominatore sono invece uguali.",
            },
            {
                id: "B",
                text: "Apparente",
                correct: false,
                explanation:
                    "5/5 vale esattamente 1 e, nella classificazione scolastica più comune, può essere definita anche frazione apparente perché il numeratore è multiplo del denominatore. Il PDF, tuttavia, evidenzia «Impropria» come soluzione prevista.",
            },
            {
                id: "C",
                text: "Inapparente",
                correct: false,
                explanation:
                    "«Inapparente» non è la classificazione indicata dalla prova per 5/5.",
            },
            {
                id: "D",
                text: "Impropria",
                correct: true,
                explanation:
                    "Questa è la risposta evidenziata nel documento. Una frazione è impropria quando il numeratore è maggiore o uguale al denominatore. Va però ricordato che 5/5 vale 1 ed è anche classificabile più precisamente come frazione apparente.",
            },
        ],
    },

    {
        id: 63,
        area: "cultura-matematico-scientifica",
        category: "matematica-insiemi-numerici",
        difficulty: 2,
        question:
            "I numeri per contare e ordinare si chiamano:",
        answers: [
            {
                id: "A",
                text: "Irrazionali",
                correct: false,
                explanation:
                    "I numeri irrazionali non possono essere espressi come rapporto tra due interi, come √2 o π. Non sono la categoria utilizzata normalmente per contare.",
            },
            {
                id: "B",
                text: "Relativi",
                correct: false,
                explanation:
                    "I numeri relativi comprendono numeri positivi, negativi e lo zero. La categoria fondamentale utilizzata per contare e ordinare è invece quella dei numeri naturali.",
            },
            {
                id: "C",
                text: "Naturali",
                correct: true,
                explanation:
                    "I numeri naturali sono quelli utilizzati per contare e ordinare: 0, 1, 2, 3, 4... oppure, secondo alcune convenzioni scolastiche, a partire da 1.",
            },
            {
                id: "D",
                text: "Innaturali",
                correct: false,
                explanation:
                    "«Innaturali» non identifica un insieme numerico utilizzato nella classificazione matematica standard.",
            },
        ],
    },

    {
        id: 64,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria",
        difficulty: 3,
        question:
            "Le diagonali in un esagono sono:",
        answers: [
            {
                id: "A",
                text: "9",
                correct: true,
                explanation:
                    "Il numero delle diagonali di un poligono di n lati si calcola con n(n-3)/2. Per un esagono: 6×(6-3)/2 = 6×3/2 = 9.",
            },
            {
                id: "B",
                text: "18",
                correct: false,
                explanation:
                    "18 si otterrebbe contando ogni diagonale due volte. Poiché una diagonale collega la stessa coppia di vertici indipendentemente dal verso, bisogna dividere per 2.",
            },
            {
                id: "C",
                text: "6",
                correct: false,
                explanation:
                    "6 è il numero dei lati dell'esagono, non quello delle diagonali. Le diagonali complessive sono 9.",
            },
            {
                id: "D",
                text: "12",
                correct: false,
                explanation:
                    "12 non corrisponde al risultato della formula n(n-3)/2 applicata a un esagono.",
            },
        ],
    },

    {
        id: 65,
        area: "cultura-matematico-scientifica",
        category: "matematica-serie-numeriche",
        difficulty: 3,
        question:
            "Corrisponde alla somma dei primi 50 numeri dispari la cifra:",
        answers: [
            {
                id: "A",
                text: "3500",
                correct: false,
                explanation:
                    "3500 non è la somma dei primi 50 numeri dispari. Esiste una proprietà utile: la somma dei primi n numeri dispari è uguale a n².",
            },
            {
                id: "B",
                text: "2500",
                correct: true,
                explanation:
                    "La somma dei primi n numeri dispari è n². Con n=50 otteniamo 50²=2500.",
            },
            {
                id: "C",
                text: "5500",
                correct: false,
                explanation:
                    "5500 è superiore al risultato corretto. Applicando la proprietà della somma dei primi numeri dispari si ottiene 2500.",
            },
            {
                id: "D",
                text: "4500",
                correct: false,
                explanation:
                    "4500 non corrisponde a 50². La somma richiesta è 2500.",
            },
        ],
    },

    {
        id: 66,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria",
        difficulty: 2,
        question:
            "In un triangolo rettangolo con i cateti rispettivamente di 3 e 4 cm la lunghezza dell’ipotenusa sarà:",
        answers: [
            {
                id: "A",
                text: "8",
                correct: false,
                explanation:
                    "Applicando il teorema di Pitagora non si ottiene 8. L'ipotenusa deve soddisfare c²=3²+4².",
            },
            {
                id: "B",
                text: "12",
                correct: false,
                explanation:
                    "12 è il prodotto 3×4, ma l'ipotenusa di un triangolo rettangolo non si calcola moltiplicando i cateti.",
            },
            {
                id: "C",
                text: "5",
                correct: true,
                explanation:
                    "Per il teorema di Pitagora: c²=3²+4²=9+16=25. Quindi c=√25=5 cm. È il classico triangolo rettangolo 3-4-5.",
            },
            {
                id: "D",
                text: "6",
                correct: false,
                explanation:
                    "6 non soddisfa il teorema di Pitagora, perché 6²=36 mentre 3²+4²=25.",
            },
        ],
    },

    {
        id: 67,
        area: "cultura-matematico-scientifica",
        category: "matematica-operazioni",
        difficulty: 4,
        question:
            "Dividere un numero per 0,07 equivale a moltiplicarlo per:",
        answers: [
            {
                id: "A",
                text: "20",
                correct: false,
                explanation:
                    "Moltiplicare per 20 non equivale a dividere per 0,07. Per esempio 1/0,07 è circa 14,29.",
            },
            {
                id: "B",
                text: "5",
                correct: false,
                explanation:
                    "Moltiplicare per 5 equivale a dividere per 0,2, non per 0,07.",
            },
            {
                id: "C",
                text: "15",
                correct: false,
                explanation:
                    "15 è vicino ma non coincide con il reciproco di 0,07. Infatti 1/0,07 = 100/7 ≈ 14,2857.",
            },
            {
                id: "D",
                text: "10",
                correct: true,
                explanation:
                    "ATTENZIONE: questa è la risposta evidenziata come corretta nel PDF, ma matematicamente è errata. Dividere per 0,07 equivale a moltiplicare per 1/0,07 = 100/7 ≈ 14,2857. Nessuna delle quattro alternative della prova è quindi matematicamente esatta.",
            },
        ],
    },

    {
        id: 68,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria",
        difficulty: 2,
        question:
            "Se il diametro di un cerchio misura 40 cm il valore del suo raggio è:",
        answers: [
            {
                id: "A",
                text: "20",
                correct: true,
                explanation:
                    "Il raggio è la metà del diametro. Quindi 40÷2=20 cm.",
            },
            {
                id: "B",
                text: "10",
                correct: false,
                explanation:
                    "10 cm rappresenterebbe un quarto del diametro indicato. Il raggio è invece metà del diametro.",
            },
            {
                id: "C",
                text: "30",
                correct: false,
                explanation:
                    "30 cm è maggiore della metà del diametro. Con diametro 40 cm il raggio è 20 cm.",
            },
            {
                id: "D",
                text: "12",
                correct: false,
                explanation:
                    "12 non deriva dalla relazione fondamentale d=2r. Il valore corretto del raggio è 20 cm.",
            },
        ],
    },

    {
        id: 69,
        area: "cultura-matematico-scientifica",
        category: "matematica-percentuali",
        difficulty: 2,
        question:
            "Maria acquista un vestito in saldo. Il costo iniziale del vestito è di 200 euro, mentre la percentuale di sconto è del 50% più il 50%. Il costo finale del vestito sarà:",
        answers: [
            {
                id: "A",
                text: "100 euro",
                correct: false,
                explanation:
                    "100 euro sarebbe il prezzo dopo il primo sconto del 50%. Bisogna però applicare un secondo sconto del 50% sul prezzo già ridotto.",
            },
            {
                id: "B",
                text: "75 euro",
                correct: false,
                explanation:
                    "Due sconti successivi del 50% non producono un prezzo finale di 75 euro.",
            },
            {
                id: "C",
                text: "50 euro",
                correct: true,
                explanation:
                    "Il primo sconto del 50% riduce 200 euro a 100 euro. Il secondo 50% si applica sui 100 euro rimasti: 100-50=50 euro. Due sconti del 50% non equivalgono quindi a uno sconto totale del 100%.",
            },
            {
                id: "D",
                text: "25 euro",
                correct: false,
                explanation:
                    "25 euro richiederebbe un'ulteriore riduzione. Dopo due sconti consecutivi del 50%, il prezzo passa da 200 a 100 e poi da 100 a 50 euro.",
            },
        ],
    },

    {
        id: 70,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria",
        difficulty: 2,
        question:
            "Il baricentro del triangolo è il punto in cui si incontrano:",
        answers: [
            {
                id: "A",
                text: "Le altezze",
                correct: false,
                explanation:
                    "Il punto di incontro delle tre altezze di un triangolo è l'ortocentro, non il baricentro.",
            },
            {
                id: "B",
                text: "Le mediane",
                correct: true,
                explanation:
                    "Il baricentro è il punto di incontro delle tre mediane di un triangolo. Ogni mediana unisce un vertice con il punto medio del lato opposto.",
            },
            {
                id: "C",
                text: "Due lati",
                correct: false,
                explanation:
                    "Due lati di un triangolo si incontrano semplicemente in un vertice. Il baricentro è invece un punto interno determinato dalle mediane.",
            },
            {
                id: "D",
                text: "Due angoli",
                correct: false,
                explanation:
                    "Gli angoli non sono rette che si intersecano in un punto interno. Il baricentro è definito dall'intersezione delle mediane.",
            },
        ],
    },

    {
        id: 71,
        area: "cultura-matematico-scientifica",
        category: "matematica-geometria",
        difficulty: 2,
        question:
            "Un poligono con nove lati si definisce:",
        answers: [
            {
                id: "A",
                text: "Novagono",
                correct: false,
                explanation:
                    "«Novagono» non è il termine indicato dalla prova per il poligono con nove lati.",
            },
            {
                id: "B",
                text: "Innogano",
                correct: false,
                explanation:
                    "«Innogano» non è il nome geometrico corretto di un poligono a nove lati.",
            },
            {
                id: "C",
                text: "Novegano",
                correct: false,
                explanation:
                    "«Novegano» non è la denominazione geometrica corretta.",
            },
            {
                id: "D",
                text: "Ennagono",
                correct: true,
                explanation:
                    "Un poligono formato da nove lati e nove vertici prende il nome di ennagono.",
            },
        ],
    },

    {
        id: 72,
        area: "cultura-matematico-scientifica",
        category: "matematica-misure",
        difficulty: 2,
        question:
            "100ml corrispondono a:",
        answers: [
            {
                id: "A",
                text: "0,1 L",
                correct: true,
                explanation:
                    "1 litro corrisponde a 1000 millilitri. Quindi 100 ml = 100/1000 L = 0,1 L.",
            },
            {
                id: "B",
                text: "10 L",
                correct: false,
                explanation:
                    "10 litri corrispondono a 10.000 millilitri, non a 100 ml.",
            },
            {
                id: "C",
                text: "0,01 L",
                correct: false,
                explanation:
                    "0,01 L corrisponde a 10 ml. Per ottenere 100 ml servono invece 0,1 L.",
            },
            {
                id: "D",
                text: "1 L",
                correct: false,
                explanation:
                    "1 litro corrisponde a 1000 ml, cioè dieci volte la quantità indicata.",
            },
        ],
    },

    {
        id: 73,
        area: "cultura-matematico-scientifica",
        category: "fisica-unita-di-misura",
        difficulty: 2,
        question:
            "L’unità di misura della temperatura secondo il Sistema Internazionale è:",
        answers: [
            {
                id: "A",
                text: "Pascal",
                correct: false,
                explanation:
                    "Il pascal, simbolo Pa, è l'unità del Sistema Internazionale utilizzata per la pressione.",
            },
            {
                id: "B",
                text: "Kelvin",
                correct: true,
                explanation:
                    "Il kelvin, simbolo K, è l'unità fondamentale della temperatura termodinamica nel Sistema Internazionale.",
            },
            {
                id: "C",
                text: "Joule",
                correct: false,
                explanation:
                    "Il joule è l'unità di misura dell'energia e del lavoro nel Sistema Internazionale.",
            },
            {
                id: "D",
                text: "Newton",
                correct: false,
                explanation:
                    "Il newton è l'unità di misura della forza nel Sistema Internazionale.",
            },
        ],
    },

    {
        id: 74,
        area: "cultura-matematico-scientifica",
        category: "fisica-strumenti-di-misura",
        difficulty: 2,
        question:
            "Il tachimetro è lo strumento che misura:",
        answers: [
            {
                id: "A",
                text: "Il tempo",
                correct: false,
                explanation:
                    "Il tempo viene misurato con strumenti come orologi e cronometri. Il tachimetro misura invece la velocità.",
            },
            {
                id: "B",
                text: "La temperatura",
                correct: false,
                explanation:
                    "La temperatura viene misurata con il termometro.",
            },
            {
                id: "C",
                text: "La velocità",
                correct: true,
                explanation:
                    "Il tachimetro misura la velocità istantanea di un veicolo, generalmente espressa in chilometri orari.",
            },
            {
                id: "D",
                text: "L’accelerazione",
                correct: false,
                explanation:
                    "L'accelerazione può essere misurata mediante un accelerometro. Non è la grandezza indicata normalmente dal tachimetro.",
            },
        ],
    },

    {
        id: 75,
        area: "cultura-matematico-scientifica",
        category: "fisica-dinamica",
        difficulty: 2,
        question:
            "La formula con cui viene calcolata la forza è:",
        answers: [
            {
                id: "A",
                text: "F=V/T",
                correct: false,
                explanation:
                    "Il rapporto tra variazione di velocità e intervallo di tempo è collegato all'accelerazione, non direttamente alla formula fondamentale della forza.",
            },
            {
                id: "B",
                text: "F=T/m",
                correct: false,
                explanation:
                    "Questa espressione non rappresenta la seconda legge della dinamica utilizzata per calcolare la forza.",
            },
            {
                id: "C",
                text: "F=1/2mv^2",
                correct: false,
                explanation:
                    "L'espressione 1/2 mv² rappresenta l'energia cinetica, normalmente indicata con Eₖ, non la forza.",
            },
            {
                id: "D",
                text: "F=m a",
                correct: true,
                explanation:
                    "La seconda legge della dinamica di Newton stabilisce che la forza risultante è uguale al prodotto della massa per l'accelerazione: F=m·a.",
            },
        ],
    },

    {
        id: 76,
        area: "cultura-matematico-scientifica",
        category: "biologia-genetica",
        difficulty: 2,
        question:
            "L’impronta genetica di ogni essere umano è contenuta nel:",
        answers: [
            {
                id: "A",
                text: "DNA",
                correct: true,
                explanation:
                    "Il DNA contiene l'informazione genetica degli esseri umani. L'analisi di particolari regioni del DNA permette di ottenere il cosiddetto profilo o impronta genetica.",
            },
            {
                id: "B",
                text: "PSA",
                correct: false,
                explanation:
                    "PSA è una sigla utilizzata in altri contesti biologici e medici, ma non identifica la molecola che contiene l'informazione genetica.",
            },
            {
                id: "C",
                text: "RDA",
                correct: false,
                explanation:
                    "RDA non è la molecola che conserva l'informazione genetica degli esseri umani.",
            },
            {
                id: "D",
                text: "SDA",
                correct: false,
                explanation:
                    "SDA non corrisponde alla molecola responsabile della conservazione del patrimonio genetico.",
            },
        ],
    },

    {
        id: 77,
        area: "cultura-matematico-scientifica",
        category: "biologia-evoluzione",
        difficulty: 3,
        question:
            "Secondo gli studi di Charles Darwin l’evoluzione è un processo che avviene per:",
        answers: [
            {
                id: "A",
                text: "Casualità",
                correct: false,
                explanation:
                    "Le variazioni ereditarie possono originarsi senza essere dirette dalle necessità dell'organismo, ma la teoria darwiniana non riduce l'intero processo evolutivo alla semplice casualità.",
            },
            {
                id: "B",
                text: "Predisposizione genetica",
                correct: false,
                explanation:
                    "La genetica moderna ha spiegato molti meccanismi dell'ereditarietà, ma l'idea centrale della teoria di Darwin indicata dal quesito è la selezione naturale.",
            },
            {
                id: "C",
                text: "Selezione del più adatto a un certo ambiente",
                correct: true,
                explanation:
                    "Secondo la teoria darwiniana, la selezione naturale favorisce gli individui che possiedono caratteristiche più adatte a un determinato ambiente e che quindi hanno maggiori probabilità di sopravvivere e riprodursi.",
            },
            {
                id: "D",
                text: "Apprendimento di comportamenti",
                correct: false,
                explanation:
                    "L'apprendimento individuale di un comportamento non costituisce il meccanismo fondamentale della selezione naturale darwiniana.",
            },
        ],
    },

    {
        id: 78,
        area: "cultura-matematico-scientifica",
        category: "biologia-genetica",
        difficulty: 2,
        question:
            "La trasmissione dei caratteri ereditari è descritta nelle Leggi di:",
        answers: [
            {
                id: "A",
                text: "Pascal",
                correct: false,
                explanation:
                    "Blaise Pascal è noto soprattutto per contributi alla matematica e alla fisica. Non formulò le leggi fondamentali dell'ereditarietà.",
            },
            {
                id: "B",
                text: "Mendel",
                correct: true,
                explanation:
                    "Gregor Mendel formulò le leggi fondamentali dell'ereditarietà studiando la trasmissione di caratteri nelle piante di pisello. Per questo è considerato uno dei fondatori della genetica.",
            },
            {
                id: "C",
                text: "Hamer",
                correct: false,
                explanation:
                    "Hamer non è l'autore delle leggi classiche sulla trasmissione dei caratteri ereditari richieste dal quesito.",
            },
            {
                id: "D",
                text: "Newton",
                correct: false,
                explanation:
                    "Isaac Newton formulò importanti leggi della meccanica e della gravitazione, non le leggi dell'ereditarietà genetica.",
            },
        ],
    },

    {
        id: 79,
        area: "cultura-matematico-scientifica",
        category: "biologia-fisiologia-vegetale",
        difficulty: 3,
        question:
            "Le piante verdi di notte producono:",
        answers: [
            {
                id: "A",
                text: "Ossigeno",
                correct: false,
                explanation:
                    "In assenza di luce la fotosintesi non procede normalmente, quindi non avviene la produzione fotosintetica di ossigeno.",
            },
            {
                id: "B",
                text: "Idrogeno",
                correct: false,
                explanation:
                    "Le piante non producono normalmente idrogeno come principale prodotto della respirazione notturna.",
            },
            {
                id: "C",
                text: "Ossigeno e anidride carbonica",
                correct: false,
                explanation:
                    "Di notte la fotosintesi si arresta in assenza di luce, mentre continua la respirazione cellulare, che consuma ossigeno e libera anidride carbonica.",
            },
            {
                id: "D",
                text: "Solo anidride carbonica",
                correct: true,
                explanation:
                    "Questa è la risposta prevista dalla prova. In termini scolastici, di notte la fotosintesi non avviene mentre continua la respirazione cellulare, durante la quale la pianta consuma ossigeno e libera anidride carbonica.",
            },
        ],
    },

    {
        id: 80,
        area: "cultura-matematico-scientifica",
        category: "chimica-elementi",
        difficulty: 2,
        question:
            "È un elemento chimico:",
        answers: [
            {
                id: "A",
                text: "Ferro",
                correct: true,
                explanation:
                    "Il ferro è un elemento chimico della tavola periodica, con simbolo Fe e numero atomico 26.",
            },
            {
                id: "B",
                text: "Sangue",
                correct: false,
                explanation:
                    "Il sangue è un tessuto biologico complesso formato da plasma, cellule e numerose sostanze. Non è un elemento chimico.",
            },
            {
                id: "C",
                text: "Acqua",
                correct: false,
                explanation:
                    "L'acqua è un composto chimico formato da idrogeno e ossigeno, con formula H₂O. Non è un elemento.",
            },
            {
                id: "D",
                text: "Bronzo",
                correct: false,
                explanation:
                    "Il bronzo è una lega metallica, costituita principalmente da rame e stagno. Non è quindi un elemento chimico puro.",
            },
        ],
    },
];

export default simulation08;