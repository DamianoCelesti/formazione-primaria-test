# Sezione 12 — Logica: Serie miste

Le **serie miste** combinano nello stesso schema elementi di natura diversa, per esempio:

-  numeri; 
-  lettere; 
-  simboli; 
-  coppie o blocchi; 
-  posizioni; 
-  operazioni differenti. 

Sono quindi più complesse delle sole serie numeriche o alfabetiche, perché richiedono di riconoscere **più regole contemporaneamente** e capire come queste regole interagiscono.

Gli esempi servono esclusivamente a spiegare la teoria, senza trasformarsi in esercizi o quiz.

---

# 1. Introduzione

Consideriamo una successione:

> A1, B2, C3, D4, ...

Qui sono presenti contemporaneamente:

-  una successione alfabetica: 

> A, B, C, D...

-  una successione numerica: 

> 1, 2, 3, 4...

Le due componenti avanzano insieme.

Una serie mista può però essere molto più articolata:

> A2, C4, E8, G16, ...

La componente alfabetica segue:

> A, C, E, G...

cioè:

> +2 posizioni.

La componente numerica segue:

> 2, 4, 8, 16...

cioè:

> ×2.

La regola generale non è quindi unica: abbiamo **due progressioni parallele**.

Il principio fondamentale delle serie miste è:

> **separare le diverse componenti e analizzare la regolarità di ciascuna.**

---

# 2. Teoria

# 2.1 Che cos'è una serie mista

Una **serie mista** è una successione nella quale i termini contengono due o più componenti appartenenti a categorie differenti.

Per esempio:

> A1, B3, C5, D7

Ogni termine contiene:

-  una lettera; 
-  un numero. 

Le lettere seguono:

> A, B, C, D

mentre i numeri seguono:

> 1, 3, 5, 7.

La serie complessiva è quindi il risultato di due successioni combinate.

---

# 2.2 Componenti indipendenti

In molti casi le componenti evolvono indipendentemente.

Esempio:

> A2, C4, E6, G8.

Lettere:

> A, C, E, G

→ +2.

Numeri:

> 2, 4, 6, 8

→ +2.

Le due regole hanno la stessa variazione, ma potrebbero anche essere diverse.

---

# 2.3 Componenti con regole differenti

Esempio:

> A2, C4, E8, G16.

Lettere:

> A, C, E, G

→ +2.

Numeri:

> 2, 4, 8, 16

→ ×2.

La componente alfabetica segue una progressione aritmetica delle posizioni.

La componente numerica segue una progressione geometrica.

---

# 2.4 Relazione tra le componenti

In altri casi le componenti non sono indipendenti: il numero può dipendere direttamente dalla lettera.

Esempio:

> A1, B2, C3, D4.

Qui il numero coincide con la posizione alfabetica della lettera:

> A = 1

> B = 2

> C = 3

> D = 4.

La regola non consiste soltanto in due sequenze parallele: esiste anche una **relazione interna a ogni termine**.

---

# 2.5 Relazione proporzionale tra lettera e numero

Consideriamo:

> A2, B4, C6, D8.

Le posizioni alfabetiche sono:

> 1, 2, 3, 4.

I numeri sono:

> 2, 4, 6, 8.

La relazione è:

> **numero = 2 × posizione alfabetica.**

Quindi:

**n = 2p**

dove:

-  p = posizione della lettera; 
-  n = componente numerica. 

---

# 2.6 Relazioni mediante potenze

Esempio:

> A1, B4, C9, D16, E25.

Le lettere occupano le posizioni:

> 1, 2, 3, 4, 5.

I numeri sono:

> 1², 2², 3², 4², 5².

Quindi:

> **numero = quadrato della posizione alfabetica.**

Formula:

**n = p²**

---

# 2.7 Coppie lettera-numero

In una serie:

> A3, C6, E9, G12

possiamo osservare almeno due livelli:

### Lettere

> A, C, E, G

→ +2.

### Numeri

> 3, 6, 9, 12

→ +3.

Ogni termine costituisce una **coppia ordinata**:

> (lettera, numero).

La posizione di entrambe le componenti deve essere rispettata.

---

# 2.8 Ordine interno del termine

Non bisogna confondere:

> A3

con:

> 3A.

Formalmente potrebbero contenere gli stessi due simboli, ma all'interno di una successione la posizione può avere un significato.

Per esempio:

> A1, 2B, C3, 4D...

potrebbe seguire un'alternanza:

-  lettera-numero; 
-  numero-lettera; 
-  lettera-numero; 
-  numero-lettera. 

L'**ordine interno** può essere parte della regola.

---

# 2.9 Alternanza della struttura

Una serie può alternare la forma dei termini.

Esempio:

> A1, 2B, C3, 4D, E5, ...

Abbiamo:

### Posizioni dispari

> A1, C3, E5

### Posizioni pari

> 2B, 4D.

La disposizione interna cambia regolarmente.

La regola riguarda quindi non soltanto i valori, ma anche la **forma del termine**.

---

# 2.10 Serie miste intercalate

Come nelle serie numeriche e alfabetiche, possono esistere due sottosuccessioni alternate.

Esempio:

> A1, Z10, B2, Y20, C3, X30, ...

Posizioni dispari:

> A1, B2, C3

Posizioni pari:

> Z10, Y20, X30.

Prima sottosuccessione:

-  lettere crescenti; 
-  numeri +1. 

Seconda:

-  lettere decrescenti; 
-  numeri +10. 

---

# 2.11 Più livelli di regolarità

Una serie mista può possedere contemporaneamente:

1.  una regola tra le lettere; 
2.  una regola tra i numeri; 
3.  una relazione interna lettera-numero; 
4.  un'alternanza tra termini pari e dispari. 

Le strutture possono quindi sovrapporsi.

---

# 2.12 Serie con simboli

Le serie miste possono includere simboli:

> ○1, □2, △3, ○4, □5, △6...

Qui abbiamo:

### Simboli

> ○, □, △

che si ripetono ciclicamente.

### Numeri

> 1, 2, 3, 4, 5, 6

che aumentano di 1.

La regola combina:

-  periodicità; 
-  progressione numerica. 

---

# 2.13 Ciclo simbolico

Se abbiamo:

> ★, ●, ▲, ★, ●, ▲...

il periodo simbolico è:

> 3.

In una serie mista:

> ★2, ●4, ▲6, ★8, ●10...

i simboli seguono un ciclo di tre elementi mentre i numeri seguono:

> +2.

---

# 2.14 Simboli e quantità

Un simbolo può rappresentare direttamente un valore.

Per esempio, in una struttura definita:

> ★ = 2
>  ● = 4
>  ▲ = 6

una successione può essere costruita in funzione dei valori associati ai simboli.

In questo caso bisogna distinguere:

-  simbolo come semplice elemento ciclico; 
-  simbolo come rappresentazione di un valore. 

---

# 2.15 Blocchi misti

Una successione può essere organizzata in blocchi:

> A12, B23, C34, D45...

Ogni termine contiene:

-  una lettera; 
-  due cifre. 

La lettera avanza di una posizione.

Le cifre formano coppie consecutive:

> 1-2
>  2-3
>  3-4
>  4-5.

Quindi esiste una regola interna al blocco.

---

# 2.16 Relazione tra cifre interne

Consideriamo:

> A13, B24, C35, D46.

Le lettere:

> A, B, C, D

avanzano di +1.

Prima cifra:

> 1, 2, 3, 4

avanza di +1.

Seconda cifra:

> 3, 4, 5, 6

avanza di +1.

All'interno di ogni termine inoltre:

> seconda cifra = prima cifra +2.

Abbiamo quindi più relazioni contemporanee.

---

# 2.17 Separazione delle colonne

Una serie di termini complessi può essere pensata come una tabella.

Per esempio:

| TermineLetteraNumero |   |    |
| -------------------- | - | -- |
| A2                   | A | 2  |
| C4                   | C | 4  |
| E8                   | E | 8  |
| G16                  | G | 16 |

Questo rende evidente che:

-  colonna delle lettere → +2; 
-  colonna dei numeri → ×2. 

Il principio teorico è:

> **ogni componente può essere analizzata come una successione autonoma.**

---

# 2.18 Più colonne numeriche

Consideriamo:

> A1-2, B2-4, C3-6, D4-8.

Possiamo separare:

### Lettere

> A, B, C, D

### Primo numero

> 1, 2, 3, 4

### Secondo numero

> 2, 4, 6, 8.

Inoltre:

> secondo numero = 2 × primo numero.

Quindi possiamo avere una relazione verticale e una relazione orizzontale.

---

# 2.19 Relazione verticale

Per **relazione verticale** possiamo intendere, in modo informale, la regola che collega la stessa componente nei termini successivi.

Per esempio:

> A → B → C → D.

Oppure:

> 2 → 4 → 6 → 8.

---

# 2.20 Relazione interna o orizzontale

La relazione interna riguarda invece le componenti appartenenti allo stesso termine.

Esempio:

> A2.

A occupa posizione 1.

Il numero 2 è:

> 1 × 2.

Nel termine:

> B4,

B occupa posizione 2 e:

> 2 × 2 = 4.

La stessa relazione interna si ripete.

---

# 2.21 Serie miste con operazioni alternate

Esempio:

> A2, C4, D8, F10, G20, I22...

Le lettere possono seguire:

> +2, +1, +2, +1...

I numeri:

> ×2, ×2?

Ma una serie realmente coerente potrebbe prevedere un altro ciclo numerico.

Il punto teorico è che **ogni componente può avere una propria alternanza** e i cicli possono avere lunghezze diverse.

---

# 2.22 Cicli di lunghezza differente

Supponiamo:

### Lettere

ciclo ogni 2 passaggi.

### Simboli

ciclo ogni 3 passaggi.

La combinazione complessiva torna alla configurazione iniziale dopo un numero di termini collegato al **minimo comune multiplo** dei periodi.

Per periodi:

> 2 e 3

la configurazione combinata si ripete ogni:

> 6.

Questo collega le serie miste anche al concetto matematico di periodicità.

---

# 2.23 Serie miste con segni

Esempio:

> A+1, B−2, C+3, D−4, E+5...

Le lettere:

> A, B, C, D, E

aumentano di una posizione.

I valori assoluti:

> 1, 2, 3, 4, 5

aumentano di 1.

Il segno:

> +, −, +, −, +

alterna.

Sono quindi presenti tre regole:

1.  ordine alfabetico; 
2.  crescita numerica; 
3.  alternanza del segno. 

---

# 2.24 Valore assoluto e segno

In successioni con numeri negativi bisogna distinguere:

- **valore assoluto**; 
- **segno**. 

Per esempio:

> +2, −4, +6, −8

ha valori assoluti:

> 2, 4, 6, 8

con regola:

> +2,

mentre i segni alternano:

> +, −, +, −.

---

# 2.25 Serie lettera-numero basate sui multipli

Esempio:

> A3, B6, C9, D12.

La posizione alfabetica p è:

> 1, 2, 3, 4.

Il numero è:

> **3p**

Quindi:

> A → 3

> B → 6

> C → 9.

---

# 2.26 Serie basate su posizione più costante

Esempio:

> A4, B5, C6, D7.

Se:

> A = 1,

abbiamo:

> 1 + 3 = 4.

Analogamente:

> B = 2 → 2 + 3 = 5.

Quindi:

**numero = posizione alfabetica + 3.**

---

# 2.27 Serie basate su posizione meno costante

Esempio:

> D1, E2, F3, G4.

Posizioni alfabetiche:

> 4, 5, 6, 7.

Numeri:

> 1, 2, 3, 4.

Relazione:

> **numero = posizione alfabetica − 3.**

---

# 2.28 Serie basate su posizione inversa

Con coppie complementari possiamo avere:

> A26, B25, C24, D23...

La lettera aumenta:

> +1.

Il numero diminuisce:

> −1.

Inoltre:

> posizione lettera + numero = 27.

Per esempio:

> A = 1 → 1 + 26 = 27.

> B = 2 → 2 + 25 = 27.

---

# 2.29 Relazioni complementari

Una struttura del tipo:

> A26, B25, C24...

può essere interpretata anche come associazione tra lettere opposte:

> A ↔ Z

> B ↔ Y

> C ↔ X.

Il numero indica infatti la posizione della lettera complementare.

---

# 2.30 Numeri che indicano salti alfabetici

La componente numerica può indicare non la posizione della lettera, ma il **salto verso il termine successivo**.

Esempio concettuale:

> A2, C3, F4...

A +2 → C.

C +3 → F.

F +4 → J.

In questa struttura il numero associato a una lettera descrive una trasformazione successiva.

---

# 2.31 Informazione operativa

In una serie mista, un numero può quindi avere ruoli diversi:

-  valore autonomo; 
-  posizione alfabetica; 
-  multiplo della posizione; 
-  distanza; 
-  salto; 
-  indice; 
-  quantità associata. 

Il significato dipende dalla regola della successione.

---

# 2.32 Posizione del termine nella serie

Una componente può dipendere non dalla lettera, ma dall'**indice del termine**.

Esempio:

> C1, C4, C9, C16...

La lettera rimane costante.

I numeri sono:

> 1², 2², 3², 4².

La componente numerica dipende dalla posizione del termine nella serie.

---

# 2.33 Lettera dipendente dall'indice

Possiamo avere:

> A2, C4, E6, G8.

Alla posizione n:

-  lettera = posizione alfabetica 2n−1; 
-  numero = 2n. 

Quindi entrambe le componenti dipendono dall'indice n, ma con formule differenti.

---

# 2.34 Serie con parole e numeri

In senso più ampio, una serie mista può includere parole o categorie.

Esempio:

> gennaio-1, febbraio-2, marzo-3...

Qui la relazione deriva dall'ordine dei mesi.

Oppure:

> lunedì-1, martedì-2...

La componente linguistica possiede un ordine convenzionale collegabile a numeri.

---

# 2.35 Ordini convenzionali

Le serie non devono necessariamente utilizzare l'alfabeto.

Possono basarsi su sequenze note:

-  giorni della settimana; 
-  mesi; 
-  stagioni; 
-  punti cardinali in un ciclo; 
-  numeri romani; 
-  note musicali. 

In questi casi è il **sistema ordinato sottostante** a determinare la successione.

---

# 2.36 Numeri romani

I numeri romani possono comparire come componente simbolica.

Principali simboli:

> I = 1

> V = 5

> X = 10

> L = 50

> C = 100

> D = 500

> M = 1000.

Una serie può quindi combinare:

> A-I, B-II, C-III...

dove i numeri romani rappresentano valori numerici.

---

# 2.37 Serie con forme geometriche

Possono essere utilizzate forme:

> triangolo, quadrato, pentagono, esagono...

Il numero di lati costituisce una proprietà ordinabile:

> 3, 4, 5, 6...

Quindi una sequenza di figure può essere interpretata attraverso una caratteristica numerica.

---

# 2.38 Proprietà numerica nascosta

Un simbolo o una parola può possedere una proprietà traducibile in numero.

Per esempio:

> triangolo → 3 lati

> quadrato → 4 lati

> pentagono → 5 lati.

La successione diventa quindi:

> 3, 4, 5...

pur essendo rappresentata graficamente.

---

# 2.39 Serie miste e codifica

Una **codifica** associa elementi diversi secondo una regola.

Esempio:

> A = 1
>  B = 2
>  C = 3.

Oppure:

> A = 2
>  B = 4
>  C = 6.

Nel secondo caso:

> codice = 2 × posizione alfabetica.

Le serie miste possono quindi utilizzare vere e proprie regole di codifica.

---

# 2.40 Codifica reversibile

Una codifica è **reversibile** quando dal valore ottenuto possiamo ricostruire in modo univoco l'elemento iniziale.

Con:

> A=1, B=2, ..., Z=26

il valore:

> 5

identifica:

> E.

Se invece più lettere ricevono lo stesso codice, l'inversione non è univoca.

---

# 2.41 Serie miste ricorsive

Anche le componenti di una serie mista possono dipendere dai termini precedenti.

Esempio concettuale:

> la lettera avanza secondo il numero contenuto nel termine precedente.

Oppure:

> il numero successivo è la somma dei due numeri precedenti mentre la lettera avanza di una posizione.

Si combinano quindi:

-  ricorsione numerica; 
-  progressione alfabetica. 

---

# 2.42 Dipendenza incrociata

La componente successiva può dipendere dall'altra componente del termine corrente.

Per esempio:

> il numero indica di quante posizioni avanzare nell'alfabeto.

Schema:

**lettera corrente + numero corrente → lettera successiva.**

Questa è una **dipendenza incrociata** tra componenti.

---

# 2.43 Simmetria nelle serie miste

Una successione può utilizzare simmetrie.

Esempio:

> A26, B25, C24...

La componente alfabetica cresce mentre quella numerica diminuisce in modo perfettamente simmetrico.

La loro somma rimane:

> 27.

---

# 2.44 Quantità costante

Una relazione interna può mantenere costante:

-  una somma; 
-  una differenza; 
-  un prodotto; 
-  un rapporto. 

Esempio:

> A10, B9, C8, D7...

Posizione alfabetica + numero:

> 1+10 = 11

> 2+9 = 11

> 3+8 = 11

> 4+7 = 11.

La **somma costante** è la regola interna.

---

# 2.45 Differenza costante interna

Esempio:

> D1, E2, F3, G4.

Posizione alfabetica − numero:

> 4−1 = 3

> 5−2 = 3

> 6−3 = 3.

La differenza rimane costante.

---

# 2.46 Rapporto costante interno

Esempio:

> A3, B6, C9, D12.

Numero / posizione alfabetica:

> 3/1 = 3

> 6/2 = 3

> 9/3 = 3.

Il rapporto rimane costante.

---

# 2.47 Trasformazioni successive

Una serie può trasformare l'intero termine a ogni passaggio.

Esempio concettuale:

> lettera +1 posizione;

> numero ×2.

Da:

> A2

otteniamo:

> B4,

poi:

> C8,

poi:

> D16.

Questa regola può essere vista come una **trasformazione composta** applicata ripetutamente.

---

# 2.48 Stato e trasformazione

Ogni termine può essere interpretato come uno **stato**.

La regola definisce come passare:

**stato n → stato n+1**

Per esempio:

**(lettera, numero)**

↓

**(+1 posizione, ×2)**

↓

**nuovo termine**

Questa visione permette di comprendere molte serie miste complesse.

---

# 2.49 Regola semplice e regola composta

### Regola semplice

Agisce su una sola caratteristica:

> numeri +2.

### Regola composta

Agisce contemporaneamente su più caratteristiche:

> lettera +1;

> numero ×2;

> segno alternato.

Una serie mista è spesso governata da una **regola composta**.

---

# 2.50 Coerenza della regola

Una regola deve spiegare in modo uniforme l'intera struttura considerata.

Per esempio:

> A2, B4, C6, D8

è spiegata elegantemente da:

-  lettere +1; 
-  numeri +2; 
-  numero = 2 × posizione alfabetica. 

Più relazioni possono essere vere contemporaneamente.

L'importante è distinguere tra:

-  proprietà realmente costanti della successione; 
-  coincidenze locali. 

---

# 3. Concetti fondamentali

## Serie mista

Successione contenente elementi o componenti di natura differente.

---

## Componente

Parte di ciascun termine.

Per esempio in:

> C8

abbiamo:

-  componente alfabetica C; 
-  componente numerica 8. 

---

## Regola parallela

Due componenti evolvono secondo regole autonome.

---

## Relazione interna

Rapporto tra componenti appartenenti allo stesso termine.

---

## Intercalazione

Alternanza di più sottosuccessioni indipendenti.

---

## Periodicità

Ripetizione ciclica di simboli, strutture o operazioni.

---

## Codifica

Regola che associa un simbolo o elemento a un valore.

---

## Dipendenza incrociata

Situazione nella quale una componente influenza l'evoluzione di un'altra.

---

## Trasformazione composta

Regola che modifica contemporaneamente più componenti.

---

# 4. Regole, classificazioni e caratteristiche

## Componenti indipendenti

> A2, C4, E8, G16

Lettere:

**+2**

Numeri:

**×2**

---

## Relazione interna

> A2, B4, C6, D8

Regola:

**numero = 2 × posizione alfabetica**

---

## Somma costante

> A10, B9, C8...

Regola:

**posizione lettera + numero = costante**

---

## Differenza costante

> D1, E2, F3...

Regola:

**posizione lettera − numero = costante**

---

## Alternanza

Un termine può modificare:

-  ordine lettera-numero; 
-  segno; 
-  simbolo; 
-  tipo di operazione. 

---

## Intercalazione

### Posizioni dispari

una regola.

### Posizioni pari

una seconda regola.

---

## Cicli

Simboli:

> ○, □, △, ○, □, △...

Numeri:

> 2, 4, 6, 8, 10, 12...

Le due componenti possono avere periodi differenti.

---

# 5. Esempi per comprendere la teoria

## Esempio 1 — Due progressioni parallele

> A2, C4, E6, G8

Lettere:

> A, C, E, G

→ +2.

Numeri:

> 2, 4, 6, 8

→ +2.

---

## Esempio 2 — Regole differenti

> B2, D4, F8, H16

Lettere:

> +2 posizioni.

Numeri:

> ×2.

Le due componenti seguono strutture differenti.

---

## Esempio 3 — Posizione alfabetica

> A1, B2, C3, D4

Il numero coincide con la posizione della lettera.

---

## Esempio 4 — Posizione raddoppiata

> A2, B4, C6, D8

Formula interna:

> numero = 2 × posizione della lettera.

---

## Esempio 5 — Quadrato della posizione

> A1, B4, C9, D16

Numeri:

> 1², 2², 3², 4².

---

## Esempio 6 — Simboli ciclici

> ○2, □4, △6, ○8, □10, △12

Simboli:

> ○ → □ → △ → ○...

Numeri:

> +2.

---

## Esempio 7 — Segno alternato

> A+2, B−4, C+6, D−8

Lettere:

> +1.

Valori assoluti:

> +2.

Segni:

> +, −, +, −.

---

## Esempio 8 — Serie intercalata

> A1, Z10, B2, Y20, C3, X30

Posizioni dispari:

> A1, B2, C3.

Posizioni pari:

> Z10, Y20, X30.

Sono presenti due successioni indipendenti alternate.

---

# 6. Concetti da non confondere

# Componenti parallele ≠ relazione interna

### Parallele

Ogni componente segue la propria successione.

### Relazione interna

Le componenti dello stesso termine dipendono direttamente l'una dall'altra.

Le due situazioni possono anche coesistere.

---

# Posizione alfabetica ≠ posizione nella serie

In:

> C9

C occupa:

> posizione alfabetica 3.

Ma l'intero termine C9 potrebbe essere, per esempio:

> quinto termine della successione.

Sono due indici differenti.

---

# Numero associato ≠ necessariamente posizione alfabetica

In:

> C12

il numero 12 potrebbe rappresentare:

-  un valore autonomo; 
-  quattro volte la posizione di C; 
-  un salto; 
-  un indice; 
-  una quantità. 

La relazione dipende dalla regola.

---

# Alternanza ≠ intercalazione

### Alternanza

Una regola cambia ciclicamente:

> +2, ×2, +2, ×2.

### Intercalazione

Esistono due o più sottosuccessioni intrecciate:

> posizioni dispari e pari.

Le due strutture possono però sovrapporsi.

---

# Simbolo ≠ necessariamente valore numerico

Un simbolo può:

-  essere soltanto parte di un ciclo; 
-  rappresentare un numero; 
-  indicare una categoria. 

Il significato dipende dal sistema.

---

# Somma costante ≠ progressione costante

In:

> A10, B9, C8, D7

le singole componenti cambiano, ma:

> posizione alfabetica + numero

rimane costante.

La regolarità è interna alle coppie.

---

# Numero negativo ≠ diminuzione necessariamente

Una successione può avere:

> +2, −4, +6, −8

in cui i valori assoluti aumentano anche se i segni alternano.

Occorre distinguere valore e segno.

---

# Esistenza di più regolarità ≠ contraddizione

Una serie può essere descritta contemporaneamente da più proprietà compatibili.

Per esempio:

> A2, B4, C6...

ha:

-  lettere +1; 
-  numeri +2; 
-  numero = 2 × posizione alfabetica. 

Le tre descrizioni sono compatibili.

---

# 7. Collegamenti importanti

# Serie miste → serie numeriche

La componente numerica può utilizzare tutte le strutture già studiate:

-  progressioni aritmetiche; 
-  progressioni geometriche; 
-  potenze; 
-  Fibonacci; 
-  differenze progressive; 
-  alternanze. 

---

# Serie miste → serie alfabetiche

Le lettere possono seguire:

-  ordine crescente; 
-  ordine decrescente; 
-  salti costanti; 
-  salti progressivi; 
-  simmetrie; 
-  sottosuccessioni. 

---

# Serie miste → matematica

Le relazioni interne possono utilizzare:

-  somme; 
-  differenze; 
-  prodotti; 
-  rapporti; 
-  potenze; 
-  multipli; 
-  parità; 
-  numeri primi. 

---

# Serie miste → codici

Associazioni come:

> A=1
>  B=2
>  C=3

costituiscono semplici sistemi di **codifica**.

Questo concetto sarà utile anche nel ragionamento con simboli.

---

# Serie miste → periodicità

Quando più cicli interagiscono, la struttura complessiva può dipendere dal loro periodo comune.

Per esempio:

-  ciclo di 2; 
-  ciclo di 3; 

possono produrre una ripetizione completa ogni:

> 6 passaggi.

---

# Serie miste → analogie

In una serie mista bisogna riconoscere relazioni del tipo:

> lettera : numero

oppure:

> termine precedente : termine successivo.

Questo tipo di ragionamento è strettamente collegato alle **analogie**, che saranno affrontate successivamente.

---

# 8. Cosa devo memorizzare

## Definizioni fondamentali

**Serie mista:** successione che combina componenti di natura diversa.

**Componente:** singola parte di un termine.

**Regola parallela:** regola autonoma applicata a una componente.

**Relazione interna:** rapporto tra componenti dello stesso termine.

**Intercalazione:** alternanza di più sottosuccessioni.

**Codifica:** associazione regolata tra elementi e valori.

**Dipendenza incrociata:** una componente determina o influenza un'altra.

**Trasformazione composta:** modifica simultanea di più caratteristiche.

---

## Principio fondamentale

Un termine come:

> A4

può essere analizzato separando:

**A → componente alfabetica**

**4 → componente numerica**

e verificando poi anche l'eventuale relazione:

**A ↔ 4.**

---

## Regole tipiche

### Lettere + numeri indipendenti

> A2, C4, E6...

### Numero dipendente dalla posizione alfabetica

> A2, B4, C6...

### Quadrato della posizione

> A1, B4, C9...

### Simmetria

> A26, B25, C24...

### Segno alternato

> +, −, +, −...

### Simboli ciclici

> ○, □, △, ○...

### Serie intercalate

> posizioni dispari con una regola;

> posizioni pari con un'altra.

---

## Relazioni interne da conoscere

**Somma costante**

**Differenza costante**

**Prodotto costante o regolato**

**Rapporto costante**

**Numero = funzione della posizione alfabetica**

**Numero = funzione dell'indice del termine**

---

## Parole chiave

**Serie mista – componente – posizione alfabetica – indice – relazione interna – regola parallela – alternanza – intercalazione – simbolo – ciclo – codifica – dipendenza incrociata – trasformazione composta – periodicità – simmetria.**

---

## Differenze da ricordare

**Posizione alfabetica ≠ posizione nella successione**

**Componente parallela ≠ relazione interna**

**Numero associato ≠ necessariamente posizione alfabetica**

**Alternanza ≠ intercalazione**

**Simbolo ≠ necessariamente valore numerico**

**Somma costante ≠ successione costante**

**Segno ≠ valore assoluto**

**Più regole compatibili ≠ contraddizione**