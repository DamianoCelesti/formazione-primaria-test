# Sezione 11 — Logica: Serie alfabetiche

Le **serie alfabetiche** funzionano in modo simile alle serie numeriche, ma utilizzano **lettere ordinate secondo la loro posizione nell'alfabeto**. Per comprenderle è quindi necessario considerare le lettere non soltanto come simboli linguistici, ma anche come elementi di una successione ordinata.

Gli esempi servono esclusivamente a chiarire la teoria e non costituiscono esercizi da risolvere.

---

# 1. Introduzione

Consideriamo la sequenza:

> A, B, C, D, E, ...

La regola è immediata:

> ogni lettera è seguita dalla lettera successiva dell'alfabeto.

Possiamo però avere successioni più complesse:

> A, C, E, G, I, ...

Qui si avanza di **due posizioni** alla volta.

Oppure:

> Z, X, V, T, R, ...

Qui si procede all'indietro di due posizioni.

Le serie alfabetiche possono quindi essere interpretate trasformando idealmente ogni lettera nella sua **posizione numerica**.

L'idea fondamentale è:

**lettera ↔ posizione nell'alfabeto**

Questo crea un collegamento diretto tra serie alfabetiche e serie numeriche.

---

# 2. Teoria

# 2.1 L'alfabeto come successione ordinata

Nel ragionamento logico viene generalmente utilizzato l'alfabeto internazionale di **26 lettere**:

| LetteraPosizioneLetteraPosizione |    |   |    |
| -------------------------------- | -- | - | -- |
| A                                | 1  | N | 14 |
| B                                | 2  | O | 15 |
| C                                | 3  | P | 16 |
| D                                | 4  | Q | 17 |
| E                                | 5  | R | 18 |
| F                                | 6  | S | 19 |
| G                                | 7  | T | 20 |
| H                                | 8  | U | 21 |
| I                                | 9  | V | 22 |
| J                                | 10 | W | 23 |
| K                                | 11 | X | 24 |
| L                                | 12 | Y | 25 |
| M                                | 13 | Z | 26 |

Quindi:

> A = 1

> B = 2

> C = 3

...

> Z = 26.

Questa corrispondenza permette di trattare una successione alfabetica come una successione numerica.

---

# 2.2 Avanzamento di una posizione

La struttura più semplice è:

> A, B, C, D, E, ...

Numericamente:

> 1, 2, 3, 4, 5, ...

La variazione è:

> **+1**

---

# 2.3 Arretramento di una posizione

La successione può procedere in senso contrario:

> Z, Y, X, W, V, ...

Numericamente:

> 26, 25, 24, 23, 22, ...

La variazione è:

> **−1**

L'ordine alfabetico può quindi essere percorso:

-  in avanti; 
-  all'indietro. 

---

# 2.4 Salti costanti

Una successione può avanzare sempre dello stesso numero di posizioni.

Esempio:

> A, C, E, G, I, ...

Posizioni:

> 1, 3, 5, 7, 9.

Differenze:

> +2, +2, +2, +2.

È l'equivalente alfabetico di una **progressione aritmetica**.

---

# 2.5 Salto di tre posizioni

Esempio:

> B, E, H, K, N, ...

Posizioni:

> 2, 5, 8, 11, 14.

Differenza:

> +3.

La relazione è costante.

---

# 2.6 Salti all'indietro

La stessa struttura può procedere in senso decrescente.

> Z, W, T, Q, N, ...

Posizioni:

> 26, 23, 20, 17, 14.

Differenza:

> −3.

---

# 2.7 Salti progressivi

Il numero di posizioni può cambiare progressivamente.

Esempio:

> A, B, D, G, K, ...

Posizioni:

> 1, 2, 4, 7, 11.

Passaggi:

> +1

> +2

> +3

> +4.

La regola non consiste in un salto costante, ma in una **progressione dei salti**.

---

# 2.8 Salti decrescenti

Possiamo avere anche:

> +5, +4, +3, +2...

Per esempio, partendo da A:

> A → F → J → M → O

Posizioni:

> 1 → 6 → 10 → 13 → 15.

Le variazioni diminuiscono progressivamente:

> +5, +4, +3, +2.

---

# 2.9 Alternanza di salti

Le serie alfabetiche possono alternare due movimenti.

Esempio:

> A, C, D, F, G, I, ...

Passaggi:

> +2, +1, +2, +1, +2.

La regola completa è:

**+2, +1, +2, +1...**

---

# 2.10 Alternanza avanti-indietro

Una struttura può anche alternare la direzione.

Esempio concettuale:

> M, O, N, P, O, Q, ...

Movimenti:

> +2

> −1

> +2

> −1

> +2.

La regolarità riguarda quindi sia:

-  l'ampiezza del salto; 
-  sia la direzione. 

---

# 2.11 Due serie alfabetiche intercalate

Come nelle serie numeriche, una sequenza può contenere due sottosuccessioni indipendenti.

Consideriamo:

> A, Z, C, X, E, V, G, T, ...

Posizioni dispari:

> A, C, E, G

con regola:

> +2.

Posizioni pari:

> Z, X, V, T

con regola:

> −2.

La serie complessiva è quindi formata dall'intercalazione di due successioni.

---

# 2.12 Posizioni pari e dispari

Data:

> a₁, a₂, a₃, a₄, ...

possiamo separare:

### Posizioni dispari

> 1°, 3°, 5°, 7°...

### Posizioni pari

> 2°, 4°, 6°, 8°...

Nelle serie alfabetiche questa distinzione può rivelare strutture apparentemente nascoste.

---

# 2.13 Tre successioni intercalate

Possono essere presenti anche tre sottosuccessioni.

Esempio:

> A, F, K, B, G, L, C, H, M, ...

Separando ogni terzo elemento:

### Prima sottosuccessione

> A, B, C

### Seconda

> F, G, H

### Terza

> K, L, M.

La successione complessiva è costruita alternando tre progressioni indipendenti.

---

# 2.14 Serie a coppie

Le lettere possono comparire organizzate in coppie.

Esempio:

> AB, CD, EF, GH, ...

Ogni coppia contiene due lettere consecutive.

Inoltre l'inizio di ogni coppia avanza di due posizioni:

> A → C → E → G.

---

# 2.15 Coppie con distanza costante

Consideriamo:

> AC, DF, GI, JL, ...

All'interno di ogni coppia:

> A → C = +2

> D → F = +2

> G → I = +2.

Tra gli inizi delle coppie:

> A → D = +3

> D → G = +3.

Esistono quindi **due relazioni contemporanee**:

1.  relazione interna alla coppia; 
2.  relazione tra coppie successive. 

---

# 2.16 Coppie convergenti

Una sequenza può utilizzare contemporaneamente l'inizio e la fine dell'alfabeto.

Esempio:

> AZ, BY, CX, DW, ...

Prima lettera:

> A, B, C, D...

procede:

> +1.

Seconda lettera:

> Z, Y, X, W\...

procede:

> −1.

Le due successioni si avvicinano progressivamente verso il centro.

---

# 2.17 Coppie divergenti

Può avvenire anche il contrario.

Partendo da lettere centrali, una componente può avanzare e l'altra arretrare.

L'idea generale è che **le due lettere di una coppia possono seguire regole indipendenti**.

---

# 2.18 Blocchi alfabetici

Una successione può essere organizzata in blocchi.

Per esempio:

> ABC, DEF, GHI, JKL, ...

Ogni blocco contiene:

-  tre lettere consecutive; 
-  il blocco successivo riprende dalle lettere immediatamente successive. 

La struttura è:

**ABC | DEF | GHI | JKL**

---

# 2.19 Blocchi con salto

Esempio:

> ABC, EFG, IJK, ...

All'interno di ogni blocco le lettere sono consecutive.

Tra un blocco e il successivo viene saltata una lettera:

> ABC → salta D → EFG

> EFG → salta H → IJK.

La regola può quindi esistere sia:

-  all'interno del blocco; 
-  tra i blocchi. 

---

# 2.20 Ripetizione periodica

Una successione può ripetere ciclicamente un gruppo di lettere.

> A, B, C, A, B, C, A, B, C, ...

Il periodo è:

> 3.

La struttura è:

**ABC | ABC | ABC**

---

# 2.21 Periodicità delle trasformazioni

Può ripetersi non il gruppo di lettere, ma la sequenza delle operazioni.

Esempio concettuale:

> +1, +3, +1, +3, +1, +3...

La serie alfabetica risultante dipenderà dal punto iniziale, ma la **regola delle trasformazioni** è periodica.

---

# 2.22 Passaggio oltre la Z

In alcune serie l'alfabeto può essere trattato in modo **ciclico**.

Dopo:

> Z

si può ricominciare da:

> A.

Per esempio, con avanzamento di 2:

> W, Y, A, C, E, ...

Numericamente potremmo pensare:

> 23, 25, 27, 29...

ma, superando 26:

> 27 corrisponde nuovamente ad A.

---

# 2.23 Alfabeto ciclico

Nel modello ciclico:

> dopo Z → A

e:

> prima di A → Z.

Possiamo immaginare l'alfabeto disposto in cerchio.

Questo significa che:

> Z + 1 → A

> Z + 2 → B

> A − 1 → Z.

---

# 2.24 Ciclicità ≠ regola universale

Non tutte le successioni alfabetiche utilizzano automaticamente l'alfabeto ciclico.

Se una regola richiede di oltrepassare Z, è necessario che il sistema considerato permetta di ripartire da A.

Dal punto di vista teorico bisogna quindi distinguere:

-  successione lineare A→Z; 
-  successione ciclica A→Z→A. 

---

# 2.25 Lettere opposte nell'alfabeto

Una relazione particolare può associare lettere poste simmetricamente rispetto alle estremità.

Con alfabeto di 26 lettere:

> A ↔ Z

> B ↔ Y

> C ↔ X

> D ↔ W

e così via.

Le loro posizioni sommano sempre:

> **27**

Per esempio:

> A = 1, Z = 26 → 1 + 26 = 27.

> C = 3, X = 24 → 3 + 24 = 27.

---

# 2.26 Coppie complementari

La regola:

**posizione prima lettera + posizione seconda lettera = 27**

produce coppie come:

> AZ

> BY

> CX

> DW

> EV.

È una struttura alfabetica basata sulla **simmetria**.

---

# 2.27 Centro dell'alfabeto

L'alfabeto di 26 lettere ha un numero pari di elementi.

Le due lettere centrali sono:

> M = 13

> N = 14.

Per questo le coppie opposte convergono verso:

> M ↔ N.

---

# 2.28 Relazioni tra posizione e numero

Le lettere possono essere associate direttamente a numeri.

Esempio:

> A1, B2, C3, D4...

Qui il numero coincide con la posizione alfabetica.

Oppure:

> A2, B4, C6, D8...

dove:

> numero = 2 × posizione della lettera.

Questo tipo di struttura conduce direttamente alle **serie miste**, che studieremo nella sezione successiva.

---

# 2.29 Trasformazioni mediante posizione alfabetica

Una regola può essere descritta formalmente.

Se una lettera L occupa la posizione p, una trasformazione del tipo:

> +3

produce la lettera che occupa:

**p + 3**

Per esempio:

> C = 3

> 3 + 3 = 6

> 6 = F.

Quindi:

> C → F.

---

# 2.30 Trasformazione all'indietro

Se:

> H = 8

e applichiamo:

> −3,

otteniamo:

> 8 − 3 = 5

> E = 5.

Quindi:

> H → E.

---

# 2.31 Sequenze basate sui numeri pari

Possiamo prendere le lettere nelle posizioni pari:

> B, D, F, H, J, ...

perché:

> B = 2

> D = 4

> F = 6

> H = 8.

La successione alfabetica corrisponde quindi alla successione numerica:

> 2, 4, 6, 8...

---

# 2.32 Sequenze basate sui numeri dispari

Lettere nelle posizioni dispari:

> A, C, E, G, I, ...

corrispondono:

> 1, 3, 5, 7, 9...

---

# 2.33 Lettere in posizioni prime

Possiamo selezionare le lettere corrispondenti ai numeri primi.

Numeri primi:

> 2, 3, 5, 7, 11, 13...

Lettere:

> B, C, E, G, K, M...

La regola dipende quindi da una proprietà matematica delle **posizioni**, non da un salto costante.

---

# 2.34 Lettere in posizioni quadrate

Posizioni quadrate:

> 1, 4, 9, 16, 25.

Corrispondono a:

> A, D, I, P, Y.

La successione alfabetica deriva quindi:

> 1², 2², 3², 4², 5².

---

# 2.35 Posizione come funzione

Come nelle serie numeriche, possiamo descrivere la posizione alfabetica mediante una funzione.

Per esempio:

> A, C, E, G...

posizioni:

> 1, 3, 5, 7...

Formula:

**pₙ = 2n − 1**

La lettera è quella associata alla posizione pₙ.

---

# 2.36 Serie basate sulle differenze

Consideriamo:

> A, C, F, J, O, ...

Posizioni:

> 1, 3, 6, 10, 15.

Differenze:

> +2, +3, +4, +5.

Queste posizioni seguono la struttura dei **numeri triangolari**, con uno spostamento iniziale opportuno.

Ciò mostra ancora una volta che molte serie alfabetiche sono serie numeriche mascherate da lettere.

---

# 2.37 Regole ricorsive alfabetiche

Anche una successione alfabetica può essere definita ricorsivamente.

Per esempio:

> ogni nuova lettera si ottiene avanzando di un numero di posizioni determinato dal passaggio precedente.

In queste strutture la regola del termine successivo dipende dalla storia della successione.

---

# 2.38 Alternanza di direzione crescente

Esempio concettuale:

> A, D, C, G, F, K, ...

Passaggi:

> +3

> −1

> +4

> −1

> +5.

La successione combina:

-  avanzamenti crescenti; 
-  arretramento costante. 

---

# 2.39 Simmetria rispetto a un centro

Una sequenza può essere costruita prendendo lettere alternativamente da sinistra e da destra dell'alfabeto.

Per esempio:

> A, Z, B, Y, C, X, D, W\...

Abbiamo due sottosuccessioni:

### Crescente

> A, B, C, D...

### Decrescente

> Z, Y, X, W\...

La successione complessiva alterna le due estremità.

---

# 2.40 Distanza alfabetica

La **distanza alfabetica** tra due lettere può essere rappresentata dalla differenza tra le loro posizioni.

Esempio:

> C = 3

> H = 8.

Distanza:

> 8 − 3 = 5.

Quindi H si trova cinque posizioni dopo C.

---

# 2.41 Distanza orientata

Possiamo distinguere anche la direzione:

> C → H = +5

mentre:

> H → C = −5.

La stessa coppia di lettere può quindi essere descritta con distanze opposte in base alla direzione considerata.

---

# 2.42 Distanza interna a coppie

Una successione può conservare una distanza costante tra le lettere di ciascuna coppia.

Esempio:

> AD, BE, CF, DG, ...

All'interno di ogni coppia:

> +3.

La prima componente:

> A, B, C, D

avanza di +1.

La seconda:

> D, E, F, G

avanza anch'essa di +1.

---

# 2.43 Relazioni multiple

Una serie alfabetica può quindi possedere contemporaneamente:

-  una regola tra termini consecutivi; 
-  una regola tra posizioni pari e dispari; 
-  una regola interna a coppie; 
-  una regola tra gruppi; 
-  una simmetria alfabetica. 

È possibile che diverse descrizioni siano formalmente compatibili con pochi termini, ma nelle successioni logiche si considera normalmente una struttura coerente e relativamente semplice.

---

# 3. Concetti fondamentali

## Serie alfabetica

Successione ordinata di lettere costruita secondo una determinata regola.

---

## Posizione alfabetica

Numero associato a ciascuna lettera:

> A = 1, B = 2, ..., Z = 26.

---

## Salto alfabetico

Numero di posizioni percorse tra una lettera e la successiva.

> C → F = +3.

---

## Direzione

Può essere:

-  crescente, verso Z; 
-  decrescente, verso A. 

---

## Serie intercalata

Successione formata dall'alternanza di due o più sottosuccessioni.

---

## Blocco

Gruppo di lettere trattato come unità.

> ABC | DEF | GHI.

---

## Periodicità

Ripetizione regolare di lettere, blocchi o trasformazioni.

---

## Alfabeto ciclico

Interpretazione nella quale dopo Z si riparte da A.

---

## Coppie complementari

Coppie di lettere poste simmetricamente nell'alfabeto:

> A-Z, B-Y, C-X...

con somma delle posizioni pari a 27.

---

# 4. Regole, classificazioni e caratteristiche

## Posizioni fondamentali

**A = 1**

**B = 2**

...

**M = 13**

**N = 14**

...

**Z = 26**

---

# Salto costante

> A, D, G, J...

Posizioni:

> 1, 4, 7, 10...

Regola:

> +3.

---

# Movimento inverso

> Z, V, R, N...

Regola:

> −4.

---

# Salti progressivi

> +1, +2, +3, +4...

---

# Alternanza

> +2, −1, +2, −1...

---

# Serie intercalata

Posizioni dispari:

> una regola.

Posizioni pari:

> un'altra regola.

---

# Simmetria alfabetica

**A ↔ Z**

**B ↔ Y**

**C ↔ X**

...

Regola:

**posizione 1 + posizione 2 = 27**

---

# Alfabeto ciclico

**Z + 1 = A**

**Z + 2 = B**

**A − 1 = Z**

quando la struttura prevede una successione circolare.

---

# 5. Esempi per comprendere la teoria

## Esempio 1 — Salto costante

> B, E, H, K, N

Posizioni:

> 2, 5, 8, 11, 14.

Ogni passaggio è:

> +3.

---

## Esempio 2 — Direzione inversa

> Z, X, V, T, R

Posizioni:

> 26, 24, 22, 20, 18.

Ogni passaggio è:

> −2.

---

## Esempio 3 — Salti progressivi

> A, B, D, G, K

Posizioni:

> 1, 2, 4, 7, 11.

Variazioni:

> +1, +2, +3, +4.

---

## Esempio 4 — Alternanza

> A, D, E, H, I, L

Passaggi:

> +3, +1, +3, +1, +3.

La regola è composta da due movimenti alternati.

---

## Esempio 5 — Intercalazione

> A, Z, B, Y, C, X, D, W

Posizioni dispari:

> A, B, C, D.

Posizioni pari:

> Z, Y, X, W.

Una sottosuccessione cresce, l'altra decresce.

---

## Esempio 6 — Coppie complementari

> AZ, BY, CX, DW

Prime lettere:

> A, B, C, D.

Seconde lettere:

> Z, Y, X, W.

In ogni coppia:

> somma delle posizioni = 27.

---

## Esempio 7 — Coppie con distanza costante

> AC, DF, GI, JL

All'interno di ogni coppia:

> +2.

Tra gli inizi:

> A → D → G → J

abbiamo:

> +3.

---

## Esempio 8 — Posizioni quadrate

> A, D, I, P, Y

Posizioni:

> 1, 4, 9, 16, 25.

Sono:

> 1², 2², 3², 4², 5².

La regola è matematica, applicata alle posizioni alfabetiche.

---

# 6. Concetti da non confondere

# Lettera ≠ posizione alfabetica

La lettera è il simbolo:

> F.

La sua posizione è:

> 6.

Sono due rappresentazioni dello stesso elemento nell'ordinamento alfabetico.

---

# Salto ≠ numero di lettere intermedie

Da:

> A a D

le posizioni sono:

> 1 → 4.

La differenza è:

> 3.

Ma le lettere intermedie sono soltanto:

> B e C,

cioè due.

Come negli ordinamenti, **distanza tra posizioni** e **numero di elementi intermedi** non coincidono.

---

# Serie crescente ≠ ordine alfabetico consecutivo

> A, C, E, G

è crescente, ma le lettere non sono consecutive.

---

# Alternanza ≠ irregolarità

> +2, −1, +2, −1...

è una regola perfettamente ordinata.

L'alternanza stessa costituisce la regola.

---

# Intercalazione ≠ unica successione semplice

Una serie come:

> A, Z, C, X, E, V

può non possedere una semplice trasformazione uniforme tra ogni termine consecutivo, perché contiene due sottosuccessioni alternate.

---

# Coppia ≠ singolo termine indipendente

In strutture come:

> AZ, BY, CX...

ogni elemento può essere analizzato come **coppia**, con relazioni interne ed esterne.

---

# Coppie complementari ≠ lettere consecutive

> A-Z

sono agli estremi opposti dell'alfabeto, non consecutive.

La relazione è di simmetria.

---

# Alfabeto lineare ≠ alfabeto ciclico

### Lineare

A → ... → Z e termina.

### Ciclico

A → ... → Z → A.

La seconda struttura richiede che sia ammesso il ritorno all'inizio.

---

# Posizioni pari ≠ lettere pari

Una lettera non è "pari" in senso proprio.

È **la sua posizione numerica** a essere pari.

Per esempio:

> D

occupa la posizione 4.

---

# Regola alfabetica ≠ necessariamente regola linguistica

Una serie alfabetica non dipende normalmente dal significato delle parole.

Può dipendere esclusivamente dalla **posizione delle lettere**.

---

# 7. Collegamenti importanti

# Serie alfabetiche → serie numeriche

Il collegamento fondamentale è:

> A = 1
>  B = 2
>  ...
>  Z = 26.

Quindi:

> A, C, E, G

può essere trasformata in:

> 1, 3, 5, 7.

Molte strutture alfabetiche sono quindi successioni numeriche rappresentate mediante lettere.

---

# Serie alfabetiche → ordinamenti

L'alfabeto costituisce un ordinamento:

**A < B < C < ... < Z**

Per questo si applicano concetti già studiati:

-  prima; 
-  dopo; 
-  distanza; 
-  direzione; 
-  posizione. 

---

# Serie alfabetiche → relazioni

Relazioni come:

> tre posizioni dopo;

> due posizioni prima;

> lettera opposta;

sono vere e proprie **relazioni logiche tra elementi ordinati**.

---

# Serie alfabetiche → numeri primi e potenze

Le lettere possono essere selezionate in base alla posizione:

> numeri primi → B, C, E, G, K...

> quadrati → A, D, I, P, Y.

Questo collega direttamente le serie alfabetiche alla matematica.

---

# Serie alfabetiche → serie miste

Possiamo associare:

> lettere + numeri

oppure:

> lettere + simboli.

Per esempio:

> A1, C3, E5...

In queste strutture interagiscono più regole contemporaneamente.

Saranno l'argomento della prossima sezione.

---

# 8. Cosa devo memorizzare

## Definizioni fondamentali

**Serie alfabetica:** successione ordinata di lettere costruita secondo una regola.

**Posizione alfabetica:** numero corrispondente alla posizione della lettera nell'alfabeto.

**Salto alfabetico:** variazione tra le posizioni di due lettere.

**Serie intercalata:** alternanza di più sottosuccessioni.

**Blocco:** gruppo di lettere considerato come unità.

**Periodicità:** ripetizione ciclica di una struttura.

**Alfabeto ciclico:** modello nel quale dopo Z si ricomincia da A.

---

## Corrispondenza essenziale

**A = 1**

**B = 2**

**C = 3**

...

**M = 13**

**N = 14**

...

**Z = 26**

---

## Strutture fondamentali

### Salto costante

> +1, +2, +3...

### Movimento inverso

> −1, −2, −3...

### Salto progressivo

> +1, +2, +3, +4...

### Alternanza

> +2, −1, +2, −1...

### Intercalazione

> posizioni dispari con una regola;

> posizioni pari con un'altra.

### Coppie

> due componenti che possono seguire regole indipendenti.

### Blocchi

> ABC | DEF | GHI...

---

## Coppie opposte

**A-Z**

**B-Y**

**C-X**

**D-W**

...

La somma delle posizioni è sempre:

> **27**

---

## Posizioni matematiche

### Pari

> B, D, F, H...

### Dispari

> A, C, E, G...

### Prime

> B, C, E, G, K...

### Quadrate

> A, D, I, P, Y.

---

## Parole chiave

**Alfabeto – posizione – salto – direzione – progressione – alternanza – intercalazione – coppia – blocco – periodicità – simmetria – distanza alfabetica – alfabeto ciclico – posizione pari – posizione dispari.**

---

## Differenze da ricordare

**Lettera ≠ posizione alfabetica**

**Salto alfabetico ≠ numero di lettere intermedie**

**Crescente ≠ necessariamente consecutivo**

**Alternanza ≠ irregolarità**

**Serie intercalata ≠ singola progressione uniforme**

**Coppia ≠ singola lettera**

**Simmetria alfabetica ≠ consecutività**

**Alfabeto lineare ≠ alfabeto ciclico**

**Posizione pari ≠ proprietà della lettera stessa**

**Serie alfabetica ≠ necessariamente relazione linguistica**