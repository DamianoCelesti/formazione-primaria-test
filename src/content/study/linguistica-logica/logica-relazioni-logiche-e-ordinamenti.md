# Sezione 8 — Logica: Relazioni logiche e ordinamenti

Questa sezione prosegue il blocco di logica teorica mantenendo lo stesso metodo stabilito: **spiegazione completa, niente quiz o strategie di risposta, esempi solo esplicativi**. 

---

# 1. Introduzione

Molti problemi logici non riguardano soltanto categorie come:

> tutti, nessuno, alcuni

oppure implicazioni del tipo:

> se A, allora B.

Spesso dobbiamo invece comprendere **come diversi elementi sono messi in relazione tra loro**.

Per esempio:

> Anna è più alta di Luca.
>  Luca è più alto di Marco.

Da queste informazioni possiamo costruire un ordine:

**Anna > Luca > Marco**

e dedurre che:

> Anna è più alta di Marco.

In altri casi le relazioni riguardano:

-  l'ordine di arrivo; 
-  la posizione in una fila; 
-  l'età; 
-  la distanza; 
-  l'ordine temporale; 
-  la parentela; 
-  la vicinanza; 
-  l'appartenenza a gruppi; 
-  la precedenza; 
-  la successione. 

Per ragionare correttamente bisogna comprendere le **proprietà della relazione** utilizzata.

Non tutte le relazioni funzionano allo stesso modo.

Per esempio:

> essere più alto di

è una relazione transitiva.

Ma:

> essere amico di

non lo è necessariamente.

Questa distinzione è fondamentale.

---

# 2. Teoria

# 2.1 Che cos'è una relazione logica

Una **relazione** collega due o più elementi secondo una determinata proprietà.

Per esempio:

> Marco è più alto di Luca.

La relazione è:

> **essere più alto di**

e collega:

-  Marco; 
-  Luca. 

Possiamo rappresentarla come:

**Marco > Luca**

---

# 2.2 Relazioni binarie

Quando una relazione collega due elementi, viene detta **binaria**.

Esempi:

> A è maggiore di B.

> A precede B.

> A è fratello di B.

> A conosce B.

La struttura generale è:

**A R B**

dove:

-  A = primo elemento; 
-  B = secondo elemento; 
-  R = relazione. 

---

# 2.3 Direzione della relazione

Molte relazioni hanno una direzione.

Consideriamo:

> Marco è più vecchio di Luca.

Questo significa che:

> Luca è più giovane di Marco.

Ma non significa:

> Luca è più vecchio di Marco.

La relazione cambia quando invertiamo gli elementi.

Questo tipo di rapporto deve essere seguito attentamente.

---

# 2.4 Relazioni simmetriche

Una relazione è **simmetrica** quando:

> se A è in relazione con B, allora anche B è nella stessa relazione con A.

Esempio:

> Marco è sposato con Anna.

Allora:

> Anna è sposata con Marco.

La relazione:

> essere sposato con

è simmetrica.

---

# 2.5 Altri esempi di relazioni simmetriche

Possono essere simmetriche, a seconda del significato:

> essere collega di

> essere vicino a

> essere gemello di

> essere della stessa età di

Se:

> A ha la stessa età di B,

allora:

> B ha la stessa età di A.

---

# 2.6 Relazioni non simmetriche

Una relazione è **non simmetrica** quando non possiamo invertire automaticamente gli elementi.

Esempio:

> Marco è padre di Luca.

Non possiamo dire:

> Luca è padre di Marco.

La relazione inversa è:

> Luca è figlio di Marco.

---

# 2.7 Relazioni inverse

Due relazioni sono **inverse** quando descrivono lo stesso rapporto da punti di vista opposti.

Esempi:

> maggiore di ↔ minore di

> più vecchio di ↔ più giovane di

> padre di ↔ figlio di

> sopra ↔ sotto

> davanti ↔ dietro

> prima di ↔ dopo di

Se:

> A è sopra B,

allora:

> B è sotto A.

---

# 2.8 Relazioni transitive

Una relazione è **transitiva** quando:

> se A è in relazione con B

e:

> B è in relazione con C,

allora:

> A è in relazione con C.

Schema:

**A R B**

**B R C**

↓

**A R C**

---

# 2.9 Esempio di transitività con l'altezza

> Anna è più alta di Beatrice.

> Beatrice è più alta di Carla.

Da queste informazioni segue:

> Anna è più alta di Carla.

Schema:

**Anna > Beatrice > Carla**

La relazione "più alto di" è transitiva.

---

# 2.10 Transitività nell'ordine temporale

> L'evento A avviene prima dell'evento B.

> L'evento B avviene prima dell'evento C.

Allora:

> A avviene prima di C.

La relazione:

> **prima di**

è transitiva.

---

# 2.11 Transitività nelle quantità

Se:

> A costa più di B

e:

> B costa più di C,

allora:

> A costa più di C.

Lo stesso vale per:

-  peso; 
-  altezza; 
-  lunghezza; 
-  punteggio; 
-  età; 
-  posizione in una graduatoria. 

---

# 2.12 Relazioni non transitive

Non tutte le relazioni permettono questo passaggio.

Esempio:

> Marco è amico di Luca.

> Luca è amico di Anna.

Non segue necessariamente:

> Marco è amico di Anna.

La relazione:

> essere amico di

non è necessariamente transitiva.

---

# 2.13 Altro esempio di non transitività

> Marco conosce Luca.

> Luca conosce Anna.

Non possiamo concludere:

> Marco conosce Anna.

La conoscenza personale non si trasferisce automaticamente attraverso una catena.

---

# 2.14 Relazioni riflessive

Una relazione è **riflessiva** quando ogni elemento è in relazione con se stesso.

Per esempio, la relazione:

> essere uguale a

è riflessiva:

> A = A.

Oppure:

> avere la stessa età di

può essere considerata riflessiva, perché ogni persona ha la stessa età di se stessa.

Per il livello richiesto è sufficiente comprendere il concetto generale.

---

# 2.15 Relazioni antisimmetriche

Una relazione è **antisimmetrica** quando, se:

> A R B

e:

> B R A,

allora A e B devono coincidere.

Un esempio matematico semplice è:

> ≤

Se:

> A ≤ B

e:

> B ≤ A,

allora:

> A = B.

Questa proprietà è utile soprattutto negli ordinamenti.

---

# 2.16 Ordinamenti

Un **ordinamento** dispone più elementi secondo una relazione.

Per esempio:

> Anna arriva prima di Luca.

> Luca arriva prima di Marco.

Possiamo ordinare:

**Anna → Luca → Marco**

L'ordinamento può riguardare:

-  tempo; 
-  posizione; 
-  altezza; 
-  età; 
-  quantità; 
-  punteggio; 
-  distanza. 

---

# 2.17 Ordinamento lineare

Un **ordinamento lineare** dispone gli elementi lungo una sola sequenza.

Esempio:

> A viene prima di B.
>  B viene prima di C.
>  C viene prima di D.

Otteniamo:

**A → B → C → D**

Ogni elemento occupa una posizione definita rispetto agli altri.

---

# 2.18 Ordinamento crescente e decrescente

Una sequenza può essere costruita in due direzioni.

### Crescente

Dal valore più piccolo al più grande:

**2 < 5 < 8 < 12**

### Decrescente

Dal valore più grande al più piccolo:

**12 > 8 > 5 > 2**

Lo stesso principio vale con:

-  età; 
-  altezza; 
-  punteggi; 
-  date; 
-  distanze. 

---

# 2.19 Ordinamento temporale

Quando le relazioni riguardano il tempo, possiamo costruire una cronologia.

Esempio:

> Marco arriva prima di Lucia.

> Lucia arriva prima di Paolo.

Otteniamo:

**Marco → Lucia → Paolo**

Da cui segue:

> Marco arriva prima di Paolo.

---

# 2.20 "Prima di" e "dopo di"

Sono relazioni inverse.

Se:

> A viene prima di B,

allora:

> B viene dopo A.

Esempio:

> Marco è arrivato prima di Luca.

Equivale a:

> Luca è arrivato dopo Marco.

È importante mantenere la direzione corretta.

---

# 2.21 Posizione assoluta e posizione relativa

Una posizione può essere descritta in due modi.

### Posizione assoluta

> Marco è terzo.

Conosciamo esattamente il suo posto.

### Posizione relativa

> Marco è davanti a Luca.

Sappiamo soltanto il rapporto tra due persone, non la loro posizione precisa nell'intera sequenza.

---

# 2.22 Informazione relativa non basta per una posizione assoluta

Supponiamo:

> Anna è davanti a Luca.

Non sappiamo se Anna sia:

-  prima; 
-  seconda; 
-  terza. 

Sappiamo soltanto che la sua posizione precede quella di Luca.

Quindi:

**relazione relativa ≠ posizione assoluta**

---

# 2.23 Relazioni immediate

Alcune informazioni stabiliscono che due elementi sono consecutivi.

Per esempio:

> Anna è immediatamente prima di Luca.

Questo significa che non esiste nessun elemento tra loro.

Se Anna è terza:

> Luca deve essere quarto.

---

# 2.24 "Prima di" ≠ "immediatamente prima di"

Confrontiamo:

> Anna è prima di Luca.

Potrebbero esserci altre persone tra loro.

Invece:

> Anna è immediatamente prima di Luca.

Le due posizioni sono consecutive.

Questa distinzione è molto importante.

---

# 2.25 Adiacenza

Due elementi sono **adiacenti** quando occupano posizioni consecutive.

Esempio:

> Anna è accanto a Luca.

In una fila lineare, ciò può significare che:

-  Anna è immediatamente prima di Luca; 
-  oppure immediatamente dopo. 

L'informazione non stabilisce necessariamente quale delle due posizioni occupi ciascuno.

---

# 2.26 Ordinamenti parziali

A volte le informazioni non permettono di stabilire una sequenza completa.

Esempio:

> A viene prima di B.

> C viene prima di D.

Non sappiamo il rapporto tra:

-  A e C; 
-  A e D; 
-  B e C; 
-  B e D. 

Abbiamo quindi due relazioni parziali:

**A → B**

e:

**C → D**

ma non un unico ordinamento completo.

---

# 2.27 Informazione incompleta

In un ordinamento è importante distinguere:

-  ciò che è determinato; 
-  ciò che rimane possibile. 

Per esempio:

> Anna è prima di Luca.

> Marco è dopo Anna.

Non sappiamo necessariamente se Marco sia prima o dopo Luca.

Potremmo avere:

**Anna → Marco → Luca**

oppure:

**Anna → Luca → Marco**

Entrambe rispettano le informazioni.

---

# 2.28 Ordinamento e vincoli

Un **vincolo** è una condizione che limita le possibili disposizioni.

Per esempio:

> Anna deve essere prima di Luca.

Questo elimina tutte le sequenze nelle quali Luca precede Anna.

Altro vincolo:

> Marco non può essere ultimo.

Questo elimina tutte le disposizioni con Marco in ultima posizione.

---

# 2.29 Vincoli positivi e negativi

### Vincolo positivo

Stabilisce ciò che deve accadere.

> Anna è prima di Luca.

### Vincolo negativo

Stabilisce ciò che non può accadere.

> Anna non è prima.

> Marco non è accanto a Luca.

Entrambi limitano lo spazio delle configurazioni possibili.

---

# 2.30 Vincoli assoluti

Un vincolo assoluto assegna una posizione precisa.

Esempio:

> Marco è primo.

Oppure:

> Lucia occupa la quarta posizione.

Questi vincoli sono molto forti perché riducono direttamente le possibilità.

---

# 2.31 Vincoli relativi

Un vincolo relativo stabilisce soltanto un rapporto.

> Marco viene prima di Lucia.

Non sappiamo in quale posizione si trovino.

Potrebbero essere:

> 1° e 2°

oppure:

> 2° e 5°.

---

# 2.32 Distanza tra posizioni

Alcune relazioni indicano una distanza precisa.

Esempio:

> Marco è due posti davanti a Luca.

Se Marco è secondo:

> Luca è quarto.

Bisogna distinguere:

> due posti davanti

da:

> ci sono due persone tra Marco e Luca.

Nel secondo caso la distanza tra le posizioni è di tre.

---

# 2.33 "Due posti di distanza" e "due elementi in mezzo"

Supponiamo:

**A \_ B**

Se A è prima e B è terza, c'è **un elemento in mezzo**.

Le posizioni differiscono di due.

Invece se ci sono **due elementi in mezzo**:

**A \_ \_ B**

la differenza tra le posizioni è tre.

È quindi importante distinguere:

-  distanza numerica tra posizioni; 
-  numero di elementi compresi fra due posizioni. 

---

# 2.34 Ordinamenti circolari

Non tutti gli ordinamenti sono lineari.

In alcuni casi gli elementi sono disposti in un **cerchio**.

Per esempio:

> cinque persone sono sedute intorno a un tavolo rotondo.

Qui non esistono naturalmente:

-  prima posizione; 
-  ultima posizione. 

Le relazioni fondamentali diventano:

-  accanto a; 
-  alla destra di; 
-  alla sinistra di; 
-  di fronte a. 

---

# 2.35 Destra e sinistra

Le relazioni:

> a destra di

e:

> a sinistra di

sono inverse.

Se:

> Anna è a destra di Luca,

allora:

> Luca è a sinistra di Anna.

È essenziale mantenere costante il punto di vista.

---

# 2.36 Ordinamenti spaziali

Le relazioni possono riguardare anche lo spazio.

Per esempio:

> A è a nord di B.

> B è a nord di C.

Allora:

> A è a nord di C.

La relazione è transitiva se stiamo considerando una stessa direzione lineare.

---

# 2.37 Relazioni verticali

Esempio:

> Il libro A è sopra il libro B.

> Il libro B è sopra il libro C.

Quindi:

> A è sopra C.

Possiamo rappresentare:

**A**

↑

**B**

↑

**C**

---

# 2.38 Relazioni orizzontali

> Marco è a sinistra di Luca.

> Luca è a sinistra di Anna.

Quindi:

> Marco è a sinistra di Anna.

Schema:

**Marco — Luca — Anna**

---

# 2.39 Posizione relativa multidimensionale

Se le informazioni utilizzano più direzioni:

-  nord; 
-  sud; 
-  est; 
-  ovest; 

la disposizione non è più una semplice linea.

Esempio:

> A è a nord di B.

> C è a est di B.

Possiamo rappresentare:
