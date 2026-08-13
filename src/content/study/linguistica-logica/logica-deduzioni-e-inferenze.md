# Sezione 6 — Logica: Deduzioni e inferenze — Parte 1 di 2

Con questa sezione iniziamo il **ragionamento logico**, una delle aree a priorità massima del percorso. Come stabilito nelle istruzioni di studio, gli esempi servono esclusivamente a spiegare il funzionamento dei concetti e non diventano esercizi o quiz. 

In questa prima parte studieremo:

-  che cos'è un ragionamento logico; 
-  proposizioni; 
-  premesse e conclusioni; 
-  deduzione; 
-  validità; 
-  verità e validità; 
-  inferenze necessarie e possibili; 
-  conseguenza logica; 
-  compatibilità e contraddizione; 
-  errori fondamentali di deduzione. 

Nella seconda parte completeremo il capitolo con **implicazioni, condizioni necessarie e sufficienti, negazioni e quantificatori**, che sono strettamente collegati a deduzioni e inferenze.

---

# 1. Introduzione

Il **ragionamento logico** consiste nel ricavare correttamente delle conclusioni a partire da determinate informazioni.

Consideriamo:

> Tutti i mammiferi sono vertebrati.
>  Il cane è un mammifero.

Da queste informazioni possiamo concludere:

> Il cane è un vertebrato.

Non abbiamo bisogno di osservare direttamente il cane: la conclusione deriva logicamente dalle informazioni iniziali.

La struttura fondamentale è quindi:

**informazioni iniziali → ragionamento → conclusione**

Le informazioni dalle quali partiamo prendono il nome di **premesse**.

L'informazione che ricaviamo prende il nome di **conclusione**.

Il punto centrale della logica è stabilire se la conclusione è realmente giustificata dalle premesse.

---

# 2. Teoria

# 2.1 Che cos'è una proposizione logica

Una **proposizione** è un'affermazione alla quale è possibile attribuire un valore di:

- **vero**; 
- **falso**. 

Per esempio:

> Roma è la capitale d'Italia.

È una proposizione, perché possiamo stabilire che è vera.

> Roma è la capitale della Francia.

È anch'essa una proposizione, ma è falsa.

In logica non importa che una frase sia vera per essere considerata una proposizione: importa che possa essere giudicata **vera oppure falsa**.

---

# 2.2 Frasi che non sono proposizioni

Non tutte le frasi sono proposizioni logiche.

Per esempio:

> Chiudi la porta!

È un ordine.

Non possiamo classificarlo semplicemente come vero o falso.

Allo stesso modo:

> Come stai?

è una domanda.

Anche questa non possiede direttamente un valore di verità.

Quindi:

**affermazione valutabile come vera/falsa → proposizione**

**ordine, domanda, esclamazione → normalmente non proposizione logica**

---

# 2.3 Premesse

Le **premesse** sono le affermazioni dalle quali parte un ragionamento.

Esempio:

> Tutti gli studenti della classe hanno consegnato il compito.
>  Luca è uno studente della classe.

Queste sono le premesse.

Da esse possiamo ricavare:

> Luca ha consegnato il compito.

La conclusione non viene semplicemente inventata: è contenuta logicamente nella combinazione delle due premesse.

---

# 2.4 Conclusione

La **conclusione** è l'affermazione ottenuta attraverso il ragionamento.

Schema:

**Premessa 1:** tutti gli A sono B.

**Premessa 2:** X è A.

**Conclusione:** X è B.

Esempio:

> Tutti i triangoli hanno tre lati.

> Questa figura è un triangolo.

Quindi:

> Questa figura ha tre lati.

---

# 2.5 Che cos'è un'inferenza

Un'**inferenza** è il passaggio logico dalle premesse a una conclusione.

Non è quindi semplicemente la conclusione stessa.

È il **processo di ragionamento** che permette di passare:

> da ciò che sappiamo

a

> ciò che possiamo ricavare.

Possiamo rappresentarlo così:

**premessa/e → inferenza → conclusione**

---

# 2.6 Deduzione

La **deduzione** è una forma di ragionamento nella quale, se le premesse sono vere e il ragionamento è valido, la conclusione deve necessariamente essere vera.

Esempio:

> Tutti i pianeti del Sistema solare orbitano intorno al Sole.

> La Terra è un pianeta del Sistema solare.

Conclusione:

> La Terra orbita intorno al Sole.

La conclusione non è soltanto probabile.

Date le premesse, è **necessaria**.

Questo carattere di necessità è il tratto fondamentale del ragionamento deduttivo.

---

# 2.7 Struttura della deduzione

Una deduzione può essere rappresentata così:

**regola generale**

-

**caso particolare**

↓

**conclusione necessaria**

Per esempio:

**Regola generale:**

> Tutti gli esseri umani sono mortali.

**Caso particolare:**

> Socrate è un essere umano.

**Conclusione:**

> Socrate è mortale.

Questo è uno degli esempi classici di ragionamento deduttivo.

---

# 2.8 Dalla generalità al caso particolare

Molte deduzioni procedono da una regola generale verso un caso specifico.

> Tutti i quadrati hanno quattro lati.

> La figura A è un quadrato.

Quindi:

> La figura A ha quattro lati.

Non tutte le deduzioni devono necessariamente avere questa forma, ma è una struttura molto comune e semplice da comprendere.

---

# 2.9 Validità di un ragionamento

Un ragionamento è **valido** quando la conclusione segue necessariamente dalle premesse.

Questo concetto deve essere distinto dalla verità delle singole affermazioni.

Consideriamo:

> Tutti gli animali immaginari sono blu.
>  Il drago X è un animale immaginario.
>  Quindi il drago X è blu.

Dal punto di vista della realtà, stiamo parlando di elementi inventati.

Ma la **forma del ragionamento** è valida:

> tutti gli A sono B;

> X è A;

> dunque X è B.

La logica analizza principalmente questa struttura.

---

# 2.10 Verità e validità

**Verità** e **validità** non sono sinonimi.

La **verità** riguarda le singole proposizioni.

La **validità** riguarda il rapporto tra premesse e conclusione.

Consideriamo:

> Tutti i pesci sono mammiferi.
>  Il tonno è un pesce.
>  Quindi il tonno è un mammifero.

La prima premessa è falsa.

Anche la conclusione è falsa.

Ma la forma è logicamente valida:

**tutti gli A sono B**

**X è A**

**quindi X è B**

Se le premesse fossero vere, la conclusione non potrebbe essere falsa.

---

# 2.11 Un ragionamento valido con premesse false

Questo punto è importante perché nella vita quotidiana tendiamo a chiedere:

> "È vero?"

In logica dobbiamo porre anche una seconda domanda:

> "La conclusione deriva correttamente dalle premesse?"

Per esempio:

> Tutti i libri sono rossi.
>  Questo oggetto è un libro.
>  Quindi questo oggetto è rosso.

La prima premessa non è vera in generale.

Ma, **supponendo che le premesse siano vere**, la conclusione segue necessariamente.

La struttura è quindi valida.

---

# 2.12 Un ragionamento non valido può avere una conclusione vera

Anche questo è possibile.

Consideriamo:

> Tutti i cani sono mammiferi.
>  Il gatto è un mammifero.
>  Quindi il gatto è un animale.

La conclusione:

> il gatto è un animale

è vera.

Ma non deriva necessariamente dalle due premesse nel modo in cui il ragionamento è costruito.

Una conclusione può quindi essere vera **per motivi indipendenti** senza rendere valido il ragionamento utilizzato per raggiungerla.

---

# 2.13 Conseguenza logica

Una proposizione è una **conseguenza logica** delle premesse quando non è possibile avere contemporaneamente:

-  tutte le premesse vere; 
-  la conclusione falsa. 

Esempio:

> Tutti gli studenti hanno un libro.

> Marta è una studentessa.

La conclusione:

> Marta ha un libro.

è una conseguenza logica.

Se le due premesse sono vere, non possiamo rendere falsa la conclusione senza creare una contraddizione.

---

# 2.14 Necessariamente vero

Nel ragionamento deduttivo è fondamentale il concetto di **necessità**.

Una conclusione è necessaria quando le premesse non lasciano alternative compatibili.

Esempio:

> Nessun rettile è un mammifero.

> Il serpente è un rettile.

Possiamo concludere necessariamente:

> Il serpente non è un mammifero.

Non significa soltanto:

> "È probabile che non sia un mammifero."

Significa:

> date le premesse, non può essere altrimenti.

---

# 2.15 Possibile ≠ necessario

Questa è una delle distinzioni più importanti della logica.

Consideriamo:

> Alcuni studenti della classe giocano a calcio.

Sappiamo che esiste almeno uno studente che gioca a calcio.

Supponiamo inoltre:

> Marco è uno studente della classe.

Possiamo dire:

> Marco **potrebbe** essere uno degli studenti che giocano a calcio.

Ma non possiamo concludere:

> Marco gioca a calcio.

La conclusione è **possibile**, non necessaria.

---

# 2.16 Informazione insufficiente

In molti ragionamenti le premesse non permettono di stabilire una determinata conclusione.

Esempio:

> Alcuni medici lavorano in ospedale.

> Anna è un medico.

Non sappiamo se Anna faccia parte del gruppo dei medici che lavorano in ospedale.

Le informazioni sono quindi **insufficienti** per concludere:

> Anna lavora in ospedale.

E sono insufficienti anche per concludere:

> Anna non lavora in ospedale.

La posizione corretta dal punto di vista logico è:

> **non possiamo determinarlo dalle premesse.**

---

# 2.17 Il principio di non aggiungere informazioni

Una deduzione deve basarsi soltanto sulle informazioni disponibili.

Se abbiamo:

> Marco è più alto di Luca.

possiamo dedurre:

> Luca è più basso di Marco.

Ma non possiamo dedurre:

> Marco è alto due metri.

oppure:

> Luca è basso.

La prima premessa stabilisce soltanto una **relazione relativa** tra i due.

Non fornisce la loro altezza assoluta.

---

# 2.18 Conoscenza del mondo e premesse

Nei ragionamenti formali è importante distinguere ciò che è contenuto nelle premesse da ciò che sappiamo per esperienza personale.

Supponiamo:

> Tutti gli animali della categoria X possono volare.

> Il pinguino P appartiene alla categoria X.

All'interno di questo sistema di premesse dobbiamo concludere:

> Il pinguino P può volare.

Anche se sappiamo dalla biologia che i pinguini reali non volano.

Il punto è che la deduzione studia:

> **che cosa segue dalle premesse date.**

Naturalmente, in un ragionamento sulla realtà possiamo anche valutare se le premesse siano vere; ma si tratta di una questione distinta dalla validità inferenziale.

---

# 2.19 Inferenza necessaria

Un'**inferenza necessaria** è una conclusione che deve essere vera se le premesse sono vere.

Esempio:

> Tutti gli A sono B.

> Nessun B è C.

> Luca è A.

Possiamo procedere:

Luca è A.

↓

Tutti gli A sono B.

↓

Luca è B.

Poi:

Luca è B.

↓

Nessun B è C.

↓

Luca non è C.

La conclusione:

> Luca non è C

è necessaria.

---

# 2.20 Inferenza possibile

Un'**inferenza possibile** è compatibile con le premesse ma non è obbligatoria.

Esempio:

> Alcuni studenti leggono romanzi.

La frase è compatibile con:

> alcuni studenti leggono anche poesie.

Ma non lo implica.

È possibile che accada, ma non possiamo dedurlo.

---

# 2.21 Inferenza impossibile

Una conclusione è **impossibile rispetto alle premesse** quando entra in contraddizione con esse.

Premesse:

> Nessun A è B.

> Marco è A.

Conclusione proposta:

> Marco è B.

Questa conclusione è incompatibile con le premesse.

Se Marco appartiene ad A e nessun elemento di A appartiene a B, Marco non può appartenere a B.

---

# 2.22 Tre livelli fondamentali

È utile quindi distinguere:

### Necessario

Le premesse obbligano alla conclusione.

### Possibile

La conclusione è compatibile con le premesse, ma non obbligatoria.

### Impossibile

La conclusione contraddice le premesse.

Questa distinzione sarà fondamentale anche quando studieremo:

-  quantificatori; 
-  condizioni; 
-  sillogismi. 

---

# 2.23 Compatibilità

Due affermazioni sono **compatibili** quando possono essere entrambe vere nello stesso momento.

Per esempio:

> Marco studia matematica.

> Marco studia storia.

Non esiste alcuna contraddizione.

Marco può studiare entrambe.

---

# 2.24 Incompatibilità

Due affermazioni sono **incompatibili** quando non possono essere contemporaneamente vere nello stesso senso e nello stesso momento.

Per esempio:

> La porta è completamente aperta.

> La porta è completamente chiusa.

Se stiamo descrivendo la stessa porta nello stesso momento e con lo stesso significato, le due affermazioni sono incompatibili.

---

# 2.25 Contraddizione

Una **contraddizione** si verifica quando due proposizioni affermano situazioni che si escludono logicamente.

La forma più evidente è:

> A

e

> non A.

Esempio:

> Marco è presente.

> Marco non è presente.

Se le frasi si riferiscono allo stesso luogo e allo stesso momento, non possono essere entrambe vere.

---

# 2.26 Il principio di non contraddizione

Uno dei principi fondamentali della logica classica stabilisce che una proposizione non può essere contemporaneamente vera e falsa **nello stesso senso e nello stesso momento**.

Non possiamo avere:

> A è vero

e contemporaneamente:

> A è falso

senza contraddizione.

Questa precisazione è importante perché due frasi apparentemente opposte possono riferirsi a momenti diversi.

Per esempio:

> Alle otto Marco era a casa.

> Alle nove Marco non era a casa.

Non c'è contraddizione, perché cambia il momento temporale.

---

# 2.27 Deduzioni attraverso relazioni di ordine

La deduzione non riguarda soltanto categorie come:

> tutti / nessuno.

Può riguardare anche relazioni.

Per esempio:

> Anna è più alta di Marta.

> Marta è più alta di Lucia.

Possiamo concludere:

> Anna è più alta di Lucia.

La relazione "essere più alto di" è, in questo contesto, **transitiva**.

Schema:

**A > B**

**B > C**

↓

**A > C**

---

# 2.28 Relazioni transitive

Una relazione è **transitiva** quando, se vale tra A e B e tra B e C, allora vale anche tra A e C.

Esempi comuni:

### Maggiore di

> 10 > 7

> 7 > 3

quindi:

> 10 > 3.

### Più vecchio di

> Anna è più vecchia di Luca.

> Luca è più vecchio di Marco.

quindi:

> Anna è più vecchia di Marco.

### Prima di

> Evento A avviene prima di B.

> B avviene prima di C.

quindi:

> A avviene prima di C.

---

# 2.29 Non tutte le relazioni sono transitive

È molto importante non applicare automaticamente questa proprietà.

Per esempio:

> Marco è amico di Luca.

> Luca è amico di Giulia.

Non possiamo concludere:

> Marco è amico di Giulia.

L'amicizia non è necessariamente transitiva.

Allo stesso modo:

> Marco conosce Luca.

> Luca conosce Anna.

non implica:

> Marco conosce Anna.

---

# 2.30 Relazioni simmetriche

Una relazione è **simmetrica** quando, se A ha una determinata relazione con B, anche B possiede la stessa relazione con A.

Esempio:

> Marco è fratello di Luca.

Se entrambi sono maschi e si usa *fratello* nel senso familiare corrispondente, anche Luca è fratello di Marco.

Più semplicemente:

> A è sposato con B

implica:

> B è sposato con A.

---

# 2.31 Relazioni non simmetriche

> Marco è padre di Luca.

Non implica:

> Luca è padre di Marco.

La relazione deve essere invertita:

> Luca è figlio di Marco.

Quindi "essere padre di" non è simmetrica.

---

# 2.32 Relazioni inverse

Alcune relazioni possiedono un rapporto inverso.

Esempio:

> A è padre di B.

corrisponde a:

> B è figlio/a di A.

Oppure:

> A è maggiore di B.

corrisponde a:

> B è minore di A.

Queste trasformazioni possono produrre deduzioni corrette.

---

# 2.33 Ordinamento

Quando una relazione permette di disporre elementi secondo un ordine, possiamo costruire una catena.

Esempio:

> Andrea è arrivato prima di Luca.

> Luca è arrivato prima di Marco.

Otteniamo:

**Andrea → Luca → Marco**

Da cui possiamo ricavare:

> Andrea è arrivato prima di Marco.

L'ordinamento può riguardare:

-  tempo; 
-  altezza; 
-  età; 
-  posizione; 
-  quantità; 
-  punteggio. 

---

# 2.34 Deduzioni con appartenenza a categorie

Molti ragionamenti riguardano insiemi o categorie.

Esempio:

> Tutti i gatti sono mammiferi.

Questo significa:

> ogni elemento dell'insieme "gatti" appartiene anche all'insieme "mammiferi".

Possiamo rappresentarlo concettualmente:

**GATTI ⊆ MAMMIFERI**

Se:

> Micio è un gatto,

allora:

> Micio è un mammifero.

---

# 2.35 Inclusione tra categorie

Consideriamo:

> Tutti gli A sono B.

Questa affermazione significa che l'insieme A è contenuto nell'insieme B.

Ma non significa necessariamente:

> tutti i B sono A.

Esempio:

> Tutti i cani sono mammiferi.

È vero.

Ma non segue:

> Tutti i mammiferi sono cani.

I mammiferi comprendono molte altre categorie.

---

# 2.36 Inversione illegittima

L'errore precedente prende la forma:

> Tutti gli A sono B.

↓

> Tutti i B sono A.

Questa trasformazione **non è generalmente valida**.

Esempio:

> Tutti gli insegnanti della scuola sono laureati.

Non implica:

> Tutti i laureati sono insegnanti della scuola.

Il secondo gruppo può essere molto più grande.

---

# 2.37 Dal generale al particolare: attenzione

Da:

> Tutti gli A sono B

e:

> X è A

possiamo dedurre:

> X è B.

Ma da:

> Tutti gli A sono B

e:

> X è B

non possiamo automaticamente dedurre:

> X è A.

Esempio:

> Tutti i cani sono animali.

> Il gatto è un animale.

Non segue:

> Il gatto è un cane.

---

# 2.38 Affermare il conseguente

Questo errore può essere presentato in forma più generale attraverso un'implicazione:

> Se A, allora B.

> B.

> Quindi A.

Questa conclusione non è generalmente valida.

Esempio:

> Se piove, la strada è bagnata.

> La strada è bagnata.

Non possiamo concludere con certezza:

> Ha piovuto.

Potrebbe essere stata bagnata per altri motivi.

Questo tipo di errore verrà approfondito studiando le **implicazioni**.

---

# 2.39 Negare l'antecedente

Un altro errore è:

> Se A, allora B.

> Non A.

> Quindi non B.

Anche questo non è generalmente valido.

Esempio:

> Se Luca è a Roma, è in Italia.

> Luca non è a Roma.

Non possiamo concludere:

> Luca non è in Italia.

Potrebbe essere a Milano, Firenze, Torino o in qualsiasi altro luogo italiano.

---

# 2.40 Informazioni indipendenti

Due informazioni possono non avere un rapporto sufficiente per produrre una conclusione.

> Marco studia matematica.

> Luca abita a Roma.

Da queste due premesse non emerge una relazione logica particolare tra Marco e Luca.

Il fatto che due proposizioni vengano presentate insieme non significa che una debba spiegare o determinare l'altra.

---

# 2.41 Correlazione non significa automaticamente causa

Questo principio è utile anche nella comprensione dei testi.

Supponiamo:

> Nel periodo estivo aumentano sia le vendite di gelati sia il numero di persone presenti sulle spiagge.

Le due quantità aumentano contemporaneamente.

Non possiamo concludere semplicemente:

> L'aumento delle vendite di gelati causa l'aumento delle persone sulle spiagge.

Potrebbero dipendere entrambe da un terzo fattore:

> l'estate e le temperature elevate.

La contemporaneità o associazione tra due fenomeni non dimostra automaticamente un rapporto causale.

---

# 2.42 Deduzione e induzione

La **deduzione** deve essere distinta dall'**induzione**.

### Deduzione

Parte da premesse e produce una conclusione necessaria.

> Tutti gli A sono B.

> X è A.

> Quindi X è B.

### Induzione

Parte spesso da casi particolari e formula una generalizzazione probabile.

Per esempio:

> Ho osservato molti cigni e tutti erano bianchi.

Potrei ipotizzare:

> Tutti i cigni sono bianchi.

Ma la conclusione non è logicamente necessaria: potrebbe esistere un cigno non ancora osservato di un altro colore.

L'induzione può produrre conoscenze utili, ma possiede un grado di certezza diverso dalla deduzione.

---

# 2.43 Deduzione e previsione

Anche una **previsione** non è automaticamente una deduzione.

> Negli ultimi dieci giorni il treno è arrivato in ritardo.

Potremmo pensare:

> Probabilmente sarà in ritardo anche domani.

È una previsione basata sull'esperienza.

Non è però una conseguenza logicamente necessaria.

Domani il treno potrebbe arrivare puntuale.

---

# 2.44 Deduzione e probabilità

La logica deduttiva lavora principalmente con il concetto di:

> **necessariamente vero date le premesse.**

La probabilità riguarda invece:

> **quanto è plausibile un evento.**

Per esempio:

> È molto probabile che domani piova.

non significa:

> È logicamente necessario che domani piova.

Le due nozioni devono rimanere distinte.

---

# 3. Concetti fondamentali

## Proposizione

Affermazione alla quale può essere attribuito un valore di verità:

-  vero; 
-  falso. 

---

## Premessa

Informazione dalla quale parte il ragionamento.

---

## Conclusione

Informazione ottenuta attraverso il ragionamento.

---

## Inferenza

Passaggio dalle premesse alla conclusione.

---

## Deduzione

Inferenza nella quale la conclusione segue **necessariamente** dalle premesse, se il ragionamento è valido.

---

## Validità

Proprietà della struttura di un ragionamento.

Un ragionamento è valido quando non è possibile che le premesse siano tutte vere e la conclusione falsa.

---

## Verità

Proprietà di una singola proposizione rispetto ai fatti o al sistema considerato.

---

## Conseguenza logica

Una conclusione è conseguenza logica delle premesse quando deve essere vera ogni volta che le premesse sono vere.

---

## Inferenza necessaria

Conclusione obbligata dalle premesse.

---

## Inferenza possibile

Conclusione compatibile con le premesse ma non obbligatoria.

---

## Inferenza impossibile

Conclusione incompatibile con le premesse.

---

## Contraddizione

Situazione nella quale vengono affermate proposizioni logicamente incompatibili.

Forma fondamentale:

> A

e

> non A.

---

## Relazione transitiva

Se:

> A R B

e

> B R C,

allora:

> A R C.

Per esempio:

> più grande di.

---

## Relazione simmetrica

Se A è in relazione con B, anche B è nella stessa relazione con A.

Per esempio:

> essere sposato con.

---

# 4. Regole, classificazioni e caratteristiche

## Struttura fondamentale della deduzione

**Premessa 1**

-

**Premessa 2**

↓

**Conclusione necessaria**

Esempio strutturale:

> Tutti gli A sono B.

> X è A.

> Quindi X è B.

---

# Necessario, possibile e impossibile

### Necessario

Deve essere vero date le premesse.

### Possibile

Può essere vero senza contraddire le premesse.

### Impossibile

Contraddice almeno una delle premesse.

---

# Verità e validità

Non confondere:

**verità → riguarda una proposizione**

**validità → riguarda un ragionamento**

Un ragionamento può essere formalmente valido anche se contiene premesse false.

---

# Inclusione

Da:

> Tutti gli A sono B

possiamo rappresentare:

**A ⊆ B**

Ma non possiamo invertire automaticamente:

**B ⊆ A**

---

# Relazioni transitive

Esempi tipici:

-  maggiore di; 
-  minore di; 
-  più vecchio di; 
-  più alto di; 
-  prima di; 
-  dopo di. 

Se:

**A > B**

e

**B > C**

allora:

**A > C**.

---

# Relazioni non necessariamente transitive

Tra gli esempi:

-  essere amico di; 
-  conoscere; 
-  apprezzare. 

Da:

> A è amico di B

e:

> B è amico di C

non deriva:

> A è amico di C.

---

# 5. Esempi per comprendere la teoria

## Esempio 1 — Deduzione semplice

> Tutti gli insegnanti della scuola hanno un badge.

> Laura è un'insegnante della scuola.

La struttura è:

**insegnanti → badge**

**Laura → insegnante**

quindi:

**Laura → badge**

La conclusione deriva necessariamente dalle premesse.

---

## Esempio 2 — Informazione insufficiente

> Alcuni studenti frequentano il corso di inglese.

> Marco è uno studente.

Non possiamo stabilire se Marco frequenti inglese.

"Alcuni" indica soltanto l'esistenza di un gruppo non identificato.

---

## Esempio 3 — Relazione transitiva

> Anna è più alta di Beatrice.

> Beatrice è più alta di Carla.

Otteniamo:

**Anna > Beatrice > Carla**

Quindi:

> Anna è più alta di Carla.

---

## Esempio 4 — Relazione non transitiva

> Anna è amica di Beatrice.

> Beatrice è amica di Carla.

Non esiste una regola che obblighi:

> Anna è amica di Carla.

La conclusione può essere vera nella realtà, ma non deriva dalle premesse.

---

## Esempio 5 — Inclusione

> Tutti i medici sono laureati.

La relazione è:

**MEDICI ⊆ LAUREATI**

Non significa:

**LAUREATI ⊆ MEDICI**

Un laureato può avere molte professioni diverse.

---

## Esempio 6 — Necessario e possibile

> Alcuni dipendenti lavorano da casa.

> Marco è un dipendente.

È **possibile** che Marco lavori da casa.

Non è **necessario**.

La premessa non identifica quali dipendenti appartengano a quel gruppo.

---

## Esempio 7 — Contraddizione

> Nessun membro del gruppo indossa una maglietta rossa.

> Marco è membro del gruppo.

L'affermazione:

> Marco indossa una maglietta rossa

è incompatibile con le premesse.

---

## Esempio 8 — Verità e validità

> Tutti i pianeti sono fatti di cioccolato.

> La Terra è un pianeta.

> Quindi la Terra è fatta di cioccolato.

La prima premessa e la conclusione non corrispondono alla realtà.

Ma la struttura:

**tutti A → B**

**X → A**

**quindi X → B**

è valida.

---

# 6. Concetti da non confondere

# Premessa ≠ conclusione

### Premessa

È il punto di partenza.

### Conclusione

È ciò che viene ricavato.

Schema:

**premesse → conclusione**

---

# Inferenza ≠ conclusione

### Inferenza

È il processo logico.

### Conclusione

È il risultato del processo.

---

# Verità ≠ validità

### Verità

Riguarda ciò che una proposizione afferma.

### Validità

Riguarda il rapporto logico tra premesse e conclusione.

Una conclusione vera non rende automaticamente valido un ragionamento.

---

# Necessario ≠ possibile

### Necessario

Non può essere altrimenti date le premesse.

### Possibile

Può essere vero, ma le premesse non lo obbligano.

---

# Possibile ≠ dimostrato

Dire:

> "È possibile che Marco sia a Roma"

non equivale a:

> "Marco è a Roma".

La prima affermazione indica compatibilità; la seconda afferma un fatto.

---

# Non dimostrato ≠ falso

Se le premesse non permettono di dimostrare:

> Marco è a Roma,

non significa automaticamente che possiamo concludere:

> Marco non è a Roma.

Potremmo semplicemente **non avere informazioni sufficienti**.

---

# Tutti gli A sono B ≠ tutti i B sono A

> Tutti i cani sono mammiferi.

non equivale a:

> Tutti i mammiferi sono cani.

L'inclusione ha una direzione.

---

# Relazione transitiva ≠ qualsiasi relazione

> più alto di

è transitiva.

> amico di

non lo è necessariamente.

La proprietà della relazione deve essere compresa prima di estenderla ad altri elementi.

---

# Correlazione ≠ causa

Due fenomeni che variano insieme non sono automaticamente collegati da un rapporto causa-effetto.

È possibile che:

-  A causi B; 
-  B causi A; 
-  un terzo fattore C causi entrambi; 
-  la relazione sia casuale. 

---

# Deduzione ≠ induzione

### Deduzione

Conclusione necessaria date le premesse.

### Induzione

Generalizzazione costruita a partire da osservazioni; può essere molto plausibile ma non logicamente necessaria.

---

# Deduzione ≠ previsione

Una previsione riguarda ciò che **probabilmente accadrà**.

Una deduzione stabilisce ciò che **deve essere vero** se le premesse sono vere.

---

# 7. Collegamenti importanti

## Deduzione → sillogismi

I **sillogismi** che studieremo successivamente sono strutture deduttive.

Per esempio:

> Tutti gli A sono B.

> Tutti i B sono C.

> Quindi tutti gli A sono C.

La comprensione delle deduzioni è quindi la base per i sillogismi.

---

# Deduzione → quantificatori

Parole come:

-  tutti; 
-  nessuno; 
-  alcuni; 
-  qualcuno; 

modificano fortemente ciò che possiamo dedurre.

Confrontiamo:

> **Tutti** gli studenti hanno consegnato.

e:

> **Alcuni** studenti hanno consegnato.

Nel primo caso ogni studente appartiene al gruppo.

Nel secondo sappiamo soltanto che almeno una parte lo fa.

I quantificatori saranno approfonditi nella prossima parte.

---

# Deduzione → implicazione

La struttura:

> Se A, allora B

stabilisce un rapporto logico tra due proposizioni.

Da questa struttura potremo ricavare alcune inferenze valide e riconoscere trasformazioni non valide.

---

# Deduzione → condizioni necessarie e sufficienti

L'implicazione permette di distinguere:

-  ciò che basta per ottenere un risultato; 
-  ciò senza cui un risultato non può verificarsi. 

Questi concetti corrispondono alle **condizioni sufficienti e necessarie**.

---

# Deduzione → comprensione del testo

Quando in un testo dobbiamo ricavare un'informazione implicita, utilizziamo spesso un ragionamento inferenziale.

Per esempio:

> Il negozio chiude alle 20.
>  Marco è arrivato alle 21.

Possiamo ricavare:

> Marco è arrivato dopo l'orario di chiusura.

La comprensione linguistica e il ragionamento logico sono quindi strettamente collegati.

---

# Deduzione → matematica

Molte dimostrazioni e procedimenti matematici utilizzano strutture deduttive:

**regola → dati → conseguenza**

Per esempio:

> Tutti gli angoli retti misurano 90°.

> L'angolo A è retto.

Quindi:

> A misura 90°.

---

# 8. Cosa devo memorizzare

## Definizioni fondamentali

**Proposizione:** affermazione che può essere vera o falsa.

**Premessa:** informazione iniziale di un ragionamento.

**Conclusione:** informazione ricavata dalle premesse.

**Inferenza:** passaggio logico dalle premesse alla conclusione.

**Deduzione:** inferenza nella quale la conclusione segue necessariamente dalle premesse.

**Validità:** correttezza della relazione logica tra premesse e conclusione.

**Conseguenza logica:** conclusione che deve essere vera se le premesse sono vere.

**Contraddizione:** incompatibilità tra proposizioni che non possono essere contemporaneamente vere nello stesso senso e momento.

---

## Regole fondamentali

Da:

> Tutti gli A sono B.

> X è A.

possiamo dedurre:

> X è B.

Ma da:

> Tutti gli A sono B.

> X è B.

**non possiamo dedurre automaticamente:**

> X è A.

---

## Necessità

**Necessario** → obbligato dalle premesse.

**Possibile** → compatibile ma non obbligato.

**Impossibile** → incompatibile con le premesse.

**Informazione insufficiente** → le premesse non consentono di decidere.

---

## Relazioni fondamentali

**Transitiva:**

A > B
 B > C
 → A > C.

**Simmetrica:**

A R B
 → B R A.

Non tutte le relazioni possiedono queste proprietà.

---

## Inclusione

> Tutti gli A sono B.

significa:

**A è contenuto in B.**

Non significa automaticamente:

**B è contenuto in A.**

---

## Parole chiave

**Proposizione – premessa – conclusione – inferenza – deduzione – validità – verità – conseguenza logica – necessario – possibile – impossibile – compatibilità – contraddizione – inclusione – relazione transitiva – relazione simmetrica – induzione.**

---

## Differenze da ricordare

**Premessa ≠ conclusione**

**Inferenza ≠ conclusione**

**Verità ≠ validità**

**Necessario ≠ possibile**

**Possibile ≠ dimostrato**

**Non dimostrato ≠ falso**

**Tutti A sono B ≠ tutti B sono A**

**Relazione transitiva ≠ qualsiasi relazione**

**Correlazione ≠ causa**

**Deduzione ≠ induzione**

**Deduzione ≠ previsione**