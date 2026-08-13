# Sezione 10 — Logica: Serie numeriche

Le **serie numeriche** sono successioni di numeri ordinate secondo una determinata regola. In questa sezione studieremo la teoria necessaria per comprendere come una successione può essere costruita e quali sono le principali relazioni matematiche che possono collegarne i termini.

Gli esempi servono esclusivamente a mostrare il funzionamento delle diverse strutture, senza trasformarsi in esercizi da risolvere.

---

# 1. Introduzione

Una sequenza come:

> 2, 4, 6, 8, 10, ...

non è semplicemente un insieme di numeri.

L'**ordine** è fondamentale.

Ogni numero occupa una posizione precisa e il passaggio da un termine al successivo segue una regola:

> aggiungere 2.

Una **serie numerica**, nel linguaggio dei test di logica, è quindi una successione ordinata di numeri costruita secondo una o più relazioni.

In matematica sarebbe più preciso parlare di **successione numerica**, ma nei test di ragionamento è molto comune l'espressione *serie numerica*.

Una successione può seguire:

-  addizioni; 
-  sottrazioni; 
-  moltiplicazioni; 
-  divisioni; 
-  potenze; 
-  alternanze; 
-  combinazioni di operazioni; 
-  relazioni tra termini non consecutivi; 
-  proprietà di particolari insiemi numerici. 

---

# 2. Teoria

# 2.1 Il termine di una successione

Ogni numero presente nella successione prende il nome di **termine**.

Consideriamo:

> 4, 7, 10, 13, 16

Possiamo indicare:

-  primo termine = 4; 
-  secondo termine = 7; 
-  terzo termine = 10; 
-  quarto termine = 13; 
-  quinto termine = 16. 

In simboli matematici, una successione può essere indicata:

> a₁, a₂, a₃, a₄, ...

dove:

- **a₁** è il primo termine; 
- **a₂** il secondo; 
- **aₙ** il termine in posizione n. 

---

# 2.2 Regola generatrice

La **regola generatrice** è il criterio che determina i termini della successione.

Per esempio:

> 5, 8, 11, 14, 17, ...

La regola è:

> aggiungere 3 al termine precedente.

Possiamo scrivere:

**aₙ₊₁ = aₙ + 3**

Questo significa:

> il termine successivo si ottiene aggiungendo 3 al precedente.

---

# 2.3 Successioni additive

Una delle strutture più semplici è quella in cui si aggiunge sempre la stessa quantità.

Esempio:

> 3, 7, 11, 15, 19, ...

Ogni termine aumenta di:

> +4.

Le differenze tra termini consecutivi sono:

> 7 − 3 = 4

> 11 − 7 = 4

> 15 − 11 = 4

Quindi:

**+4, +4, +4, +4**

---

# 2.4 Progressione aritmetica

Una successione nella quale la differenza tra due termini consecutivi è sempre costante prende il nome di **progressione aritmetica**.

Esempio:

> 10, 15, 20, 25, 30, ...

La differenza costante è:

> **d = 5**

e viene chiamata **ragione della progressione aritmetica** o differenza comune.

---

# 2.5 Formula della progressione aritmetica

Se conosciamo:

-  primo termine **a₁**; 
-  differenza **d**; 

il termine di posizione n può essere espresso come:

**aₙ = a₁ + (n − 1)d**

Esempio:

> 3, 7, 11, 15, ...

Abbiamo:

**a₁ = 3**

**d = 4**

Il quarto termine è:

**a₄ = 3 + (4 − 1) × 4**

**a₄ = 3 + 12 = 15**

---

# 2.6 Successioni sottrattive

La stessa struttura può procedere in senso decrescente.

> 30, 26, 22, 18, 14, ...

Ogni termine viene ottenuto sottraendo:

> 4.

Le differenze sono:

> −4, −4, −4, −4.

Anche questa è una progressione aritmetica, con:

**d = −4**

---

# 2.7 Differenze non costanti

Una successione può essere additiva senza avere una differenza costante.

Consideriamo:

> 2, 5, 9, 14, 20, 27, ...

Le differenze sono:

> +3, +4, +5, +6, +7

La regola non è:

> aggiungere sempre lo stesso numero,

ma:

> aggiungere numeri progressivamente crescenti.

La successione delle differenze forma a sua volta:

> 3, 4, 5, 6, 7, ...

---

# 2.8 Successione delle differenze

Data:

> a₁, a₂, a₃, ...

possiamo osservare:

**a₂ − a₁**

**a₃ − a₂**

**a₄ − a₃**

e così via.

Questi valori costituiscono una **successione delle differenze**.

Esempio:

> 1, 4, 9, 16, 25

Differenze:

> 3, 5, 7, 9.

I termini aumentano quindi secondo i numeri dispari consecutivi.

---

# 2.9 Differenze seconde

A volte le prime differenze non sono costanti, ma lo diventano le differenze tra le differenze.

Consideriamo:

> 1, 4, 9, 16, 25

Prime differenze:

> 3, 5, 7, 9

Seconde differenze:

> 2, 2, 2.

Le **seconde differenze** sono costanti.

Questo tipo di struttura compare frequentemente nelle successioni legate a formule quadratiche.

---

# 2.10 Quadrati perfetti

Una successione può essere costituita dai quadrati dei numeri naturali:

> 1, 4, 9, 16, 25, 36, ...

perché:

> 1² = 1

> 2² = 4

> 3² = 9

> 4² = 16

> 5² = 25

> 6² = 36.

Formula:

**aₙ = n²**

---

# 2.11 Cubi perfetti

Analogamente:

> 1, 8, 27, 64, 125, ...

perché:

> 1³ = 1

> 2³ = 8

> 3³ = 27

> 4³ = 64

> 5³ = 125.

Formula:

**aₙ = n³**

---

# 2.12 Altre potenze

Una successione può utilizzare anche altre potenze.

Per esempio:

> 2, 4, 8, 16, 32, 64, ...

può essere rappresentata come:

> 2¹, 2², 2³, 2⁴, 2⁵, 2⁶.

Qui la base rimane costante mentre aumenta l'esponente.

---

# 2.13 Successioni moltiplicative

Una successione può essere costruita moltiplicando ogni termine per una quantità costante.

Esempio:

> 3, 6, 12, 24, 48, ...

Ogni termine viene moltiplicato per:

> 2.

Schema:

**×2, ×2, ×2, ×2**

---

# 2.14 Progressione geometrica

Una successione nella quale ogni termine viene ottenuto moltiplicando il precedente per una costante prende il nome di **progressione geometrica**.

Esempio:

> 5, 15, 45, 135, ...

La costante è:

> **q = 3**

e viene chiamata **ragione della progressione geometrica**.

---

# 2.15 Formula della progressione geometrica

Se:

-  primo termine = **a₁**; 
-  ragione = **q**; 

allora:

**aₙ = a₁ × qⁿ⁻¹**

Esempio:

> 2, 6, 18, 54, ...

Abbiamo:

**a₁ = 2**

**q = 3**

Il quarto termine è:

**a₄ = 2 × 3³**

**a₄ = 2 × 27 = 54**

---

# 2.16 Successioni per divisione

Una successione geometrica può anche diminuire.

Esempio:

> 128, 64, 32, 16, 8, ...

Ogni termine viene diviso per:

> 2.

Equivalentemente possiamo dire che viene moltiplicato per:

> 1/2.

La ragione geometrica è quindi:

**q = 1/2**

---

# 2.17 Differenza e rapporto

Due confronti fondamentali tra termini consecutivi sono:

### Differenza

**aₙ₊₁ − aₙ**

utile nelle strutture additive.

### Rapporto

**aₙ₊₁ / aₙ**

utile nelle strutture moltiplicative, quando il denominatore non è zero.

Esempio:

> 2, 6, 18, 54

Rapporti:

> 6/2 = 3

> 18/6 = 3

> 54/18 = 3.

---

# 2.18 Operazioni variabili

Non è necessario utilizzare sempre la stessa operazione.

Una successione può seguire:

> +1, +2, +3, +4, ...

Esempio:

> 5, 6, 8, 11, 15, ...

Passaggi:

> 5 + 1 = 6

> 6 + 2 = 8

> 8 + 3 = 11

> 11 + 4 = 15.

---

# 2.19 Incrementi moltiplicativi

Anche i moltiplicatori possono cambiare.

Esempio:

> 1, 2, 6, 24, 120, ...

Passaggi:

> ×2

> ×3

> ×4

> ×5.

Questa è la successione dei **fattoriali**:

> 1!, 2!, 3!, 4!, 5!, ...

dove:

**n! = n × (n−1) × ... × 2 × 1**

---

# 2.20 Fattoriale

Per un numero naturale positivo:

> 4! = 4 × 3 × 2 × 1 = 24.

> 5! = 5 × 4 × 3 × 2 × 1 = 120.

Per convenzione matematica:

> 0! = 1.

Una successione fattoriale cresce molto rapidamente.

---

# 2.21 Operazioni alternate

Una successione può alternare due operazioni.

Esempio:

> 3, 6, 8, 16, 18, 36, ...

Passaggi:

> ×2

> +2

> ×2

> +2

> ×2.

La regola generale è quindi ciclica:

**×2, +2, ×2, +2, ...**

---

# 2.22 Alternanza di segno

Può alternare anche il segno.

Esempio:

> 2, −2, 2, −2, 2, −2, ...

La successione alterna:

> positivo / negativo.

Una possibile formula è:

**aₙ = 2(−1)ⁿ⁺¹**

---

# 2.23 Due successioni intercalate

Una serie apparente può essere formata in realtà da **due successioni indipendenti alternate**.

Consideriamo:

> 2, 10, 4, 20, 6, 30, 8, 40, ...

Separiamo le posizioni dispari:

> 2, 4, 6, 8

e le posizioni pari:

> 10, 20, 30, 40.

La successione complessiva alterna quindi due regole.

---

# 2.24 Posizioni pari e dispari

Se abbiamo:

> a₁, a₂, a₃, a₄, a₅, a₆...

possiamo distinguere:

### Posizioni dispari

> a₁, a₃, a₅, ...

### Posizioni pari

> a₂, a₄, a₆, ...

Le due sottosuccessioni possono seguire leggi differenti.

---

# 2.25 Tre successioni intercalate

Lo stesso principio può riguardare tre gruppi.

Esempio:

> 1, 10, 100, 2, 20, 200, 3, 30, 300, ...

Abbiamo:

### Posizioni 1, 4, 7

> 1, 2, 3

### Posizioni 2, 5, 8

> 10, 20, 30

### Posizioni 3, 6, 9

> 100, 200, 300.

---

# 2.26 Successioni ricorsive

Una successione è **ricorsiva** quando un termine dipende da uno o più termini precedenti.

Una forma semplice è:

**aₙ = aₙ₋₁ + k**

Ma possono esistere relazioni più complesse.

---

# 2.27 Successione di Fibonacci

Un esempio molto noto è la **successione di Fibonacci**:

> 1, 1, 2, 3, 5, 8, 13, 21, ...

Ogni termine, a partire dal terzo, è la somma dei due precedenti:

**aₙ = aₙ₋₁ + aₙ₋₂**

Per esempio:

> 1 + 1 = 2

> 1 + 2 = 3

> 2 + 3 = 5

> 3 + 5 = 8.

---

# 2.28 Variante delle successioni ricorsive

Il rapporto tra termini precedenti può essere diverso.

Esempio:

> 2, 3, 5, 8, 13, ...

anche questa successione segue:

> termine = somma dei due precedenti,

ma parte da valori iniziali differenti rispetto alla Fibonacci classica.

La **regola ricorsiva** e i **valori iniziali** determinano insieme la successione.

---

# 2.29 Successioni basate sui numeri naturali

Una successione può essere semplicemente:

> 1, 2, 3, 4, 5, ...

cioè l'insieme ordinato dei numeri naturali positivi.

Altre successioni possono selezionare particolari categorie di naturali.

---

# 2.30 Numeri pari

> 2, 4, 6, 8, 10, 12, ...

Formula:

**aₙ = 2n**

Sono i multipli positivi di 2.

---

# 2.31 Numeri dispari

> 1, 3, 5, 7, 9, 11, ...

Formula:

**aₙ = 2n − 1**

---

# 2.32 Multipli

I multipli di 5 formano:

> 5, 10, 15, 20, 25, ...

Formula:

**aₙ = 5n**

In generale, i multipli positivi di k sono:

**k, 2k, 3k, 4k, ...**

---

# 2.33 Numeri primi

Un **numero primo** è un numero naturale maggiore di 1 che possiede esattamente due divisori positivi:

-  1; 
-  se stesso. 

I primi numeri primi sono:

> 2, 3, 5, 7, 11, 13, 17, 19, 23, ...

Il numero **2** è l'unico numero primo pari.

Il numero **1 non è primo**.

---

# 2.34 Successioni di numeri primi

Una successione può essere costruita semplicemente prendendo in ordine i numeri primi:

> 2, 3, 5, 7, 11, 13, ...

Le differenze non sono costanti:

> +1, +2, +2, +4, +2...

La regola riguarda quindi una **proprietà dei termini**, non una singola operazione aritmetica costante.

---

# 2.35 Numeri triangolari

I **numeri triangolari** sono:

> 1, 3, 6, 10, 15, 21, ...

Si ottengono sommando progressivamente i numeri naturali:

> 1

> 1 + 2 = 3

> 1 + 2 + 3 = 6

> 1 + 2 + 3 + 4 = 10.

Formula:

**Tₙ = n(n + 1) / 2**

---

# 2.36 Differenze dei numeri triangolari

Nella successione:

> 1, 3, 6, 10, 15, 21

le differenze sono:

> +2, +3, +4, +5, +6.

Quindi il termine successivo si costruisce aggiungendo numeri naturali consecutivi.

---

# 2.37 Numeri quadrati e numeri dispari

Esiste un'importante relazione:

> 1, 4, 9, 16, 25, ...

Differenze:

> 3, 5, 7, 9.

Questo riflette l'identità:

**(n + 1)² − n² = 2n + 1**

Quindi i quadrati consecutivi differiscono sempre per numeri dispari consecutivi.

---

# 2.38 Serie basate sulla posizione

A volte il valore dipende direttamente dalla posizione n.

Esempio:

> 2, 4, 6, 8, ...

Formula:

**aₙ = 2n**

Oppure:

> 1, 4, 9, 16, ...

Formula:

**aₙ = n²**

La posizione stessa fa quindi parte della regola.

---

# 2.39 Combinazione di posizione e costante

Esempio:

> 3, 5, 7, 9, 11, ...

può essere scritto:

**aₙ = 2n + 1**

per n a partire da 1:

> n=1 → 3

> n=2 → 5

> n=3 → 7.

---

# 2.40 Successioni con operazioni composte

Una regola può contenere più di un'operazione.

Esempio:

> 2, 5, 11, 23, 47, ...

Ogni termine deriva dal precedente mediante:

> ×2 +1.

Infatti:

> 2 × 2 + 1 = 5

> 5 × 2 + 1 = 11

> 11 × 2 + 1 = 23

> 23 × 2 + 1 = 47.

---

# 2.41 Moltiplicazione e sottrazione

Allo stesso modo:

> 10, 19, 37, 73, ...

può seguire:

> ×2 −1.

Per esempio:

> 10 × 2 − 1 = 19

> 19 × 2 − 1 = 37

> 37 × 2 − 1 = 73.

---

# 2.42 Operazione composta variabile

Una struttura può combinare un'operazione costante con una quantità variabile.

Esempio:

> 2, 5, 12, 27, ...

può essere costruita attraverso:

> ×2 +1

> ×2 +2

> ×2 +3

e così via.

In questo caso la regola comprende:

-  una componente costante; 
-  una componente progressiva. 

---

# 2.43 Successioni periodiche

Una successione è **periodica** quando uno schema si ripete dopo un numero fisso di termini.

Esempio:

> 1, 2, 3, 1, 2, 3, 1, 2, 3, ...

Il periodo è:

> 3 termini.

---

# 2.44 Ciclo di operazioni

Può essere periodico non il valore, ma il tipo di operazione.

Per esempio:

> +2, ×2, +2, ×2, ...

Il ciclo delle operazioni ha lunghezza 2.

---

# 2.45 Successioni monotone

Una successione è **crescente** quando i termini aumentano.

> 2, 5, 8, 11, ...

È **decrescente** quando diminuiscono:

> 20, 15, 10, 5, ...

Queste sono forme di successioni **monotone**.

---

# 2.46 Successione non monotona

Una successione può alternare aumenti e diminuzioni.

> 10, 20, 15, 30, 25, 50, ...

Non è complessivamente crescente termine per termine, perché alcuni passaggi diminuiscono.

Potrebbe però seguire una regola coerente, per esempio:

> ×2, −5, ×2, −5...

La regolarità non coincide necessariamente con la crescita continua.

---

# 2.47 Termine nullo e numeri negativi

Le serie possono comprendere:

> 0

e numeri negativi.

Esempio:

> 8, 5, 2, −1, −4, ...

Differenza:

> −3.

Il passaggio attraverso lo zero non cambia la natura della progressione.

---

# 2.48 Successioni con frazioni

Anche le frazioni possono formare serie.

Esempio:

> 1, 1/2, 1/4, 1/8, 1/16, ...

Ogni termine è la metà del precedente.

È una progressione geometrica con:

**q = 1/2**

---

# 2.49 Successioni con decimali

Per esempio:

> 0,5; 1; 1,5; 2; 2,5; ...

È una progressione aritmetica con:

> d = 0,5.

Le regole delle successioni non dipendono dal fatto che i termini siano interi.

---

# 2.50 Unicità della regola

Da un numero finito di termini può essere possibile costruire matematicamente **più di una regola** capace di generarli.

Per esempio, pochi valori possono essere compatibili con diverse formule.

Nei contesti di logica elementare, tuttavia, si assume normalmente che la successione sia costruita secondo una **regola semplice, coerente e ripetuta**.

Questo non è un principio matematico assoluto, ma una caratteristica del tipo di successioni studiate nei problemi logici.

---

# 3. Concetti fondamentali

## Successione numerica

Sequenza ordinata di numeri costruita secondo una determinata regola.

---

## Termine

Ciascun elemento della successione.

---

## Indice

Numero che indica la posizione del termine.

> aₙ

indica il termine di posizione n.

---

## Regola generatrice

Relazione che determina i termini della successione.

---

## Progressione aritmetica

Successione con differenza costante tra termini consecutivi.

**aₙ₊₁ = aₙ + d**

---

## Progressione geometrica

Successione con rapporto costante tra termini consecutivi.

**aₙ₊₁ = q · aₙ**

---

## Differenza

**aₙ₊₁ − aₙ**

---

## Rapporto

**aₙ₊₁ / aₙ**

quando il denominatore è diverso da zero.

---

## Successione ricorsiva

Successione nella quale un termine dipende da uno o più termini precedenti.

---

## Successione intercalata

Successione composta dall'alternanza di due o più sottosuccessioni.

---

## Successione periodica

Successione nella quale uno schema si ripete regolarmente.

---

# 4. Regole, classificazioni e caratteristiche

## Progressione aritmetica

Esempio:

> 2, 5, 8, 11, ...

Differenza:

> +3.

Formula:

**aₙ = a₁ + (n−1)d**

---

## Progressione geometrica

Esempio:

> 2, 6, 18, 54, ...

Rapporto:

> ×3.

Formula:

**aₙ = a₁qⁿ⁻¹**

---

## Quadrati

> 1, 4, 9, 16, 25...

Formula:

**n²**

---

## Cubi

> 1, 8, 27, 64...

Formula:

**n³**

---

## Numeri pari

> 2, 4, 6, 8...

Formula:

**2n**

---

## Numeri dispari

> 1, 3, 5, 7...

Formula:

**2n − 1**

---

## Numeri primi

> 2, 3, 5, 7, 11, 13...

Numeri maggiori di 1 con esattamente due divisori positivi.

---

## Numeri triangolari

> 1, 3, 6, 10, 15...

Formula:

**n(n+1)/2**

---

## Fibonacci

> 1, 1, 2, 3, 5, 8...

Regola:

**aₙ = aₙ₋₁ + aₙ₋₂**

---

# 5. Esempi per comprendere la teoria

## Esempio 1 — Progressione aritmetica

> 4, 9, 14, 19, 24

Differenze:

> +5, +5, +5, +5.

La successione è una progressione aritmetica con ragione:

> d = 5.

---

## Esempio 2 — Incrementi crescenti

> 1, 3, 6, 10, 15

Passaggi:

> +2, +3, +4, +5.

La quantità aggiunta aumenta di una unità a ogni passaggio.

Si tratta dei primi numeri triangolari.

---

## Esempio 3 — Progressione geometrica

> 4, 12, 36, 108

Rapporti:

> ×3, ×3, ×3.

La ragione geometrica è:

> q = 3.

---

## Esempio 4 — Operazioni alternate

> 5, 10, 12, 24, 26, 52

Passaggi:

> ×2, +2, ×2, +2, ×2.

La successione utilizza un ciclo di due operazioni.

---

## Esempio 5 — Serie intercalata

> 1, 20, 2, 40, 3, 60, 4, 80

Posizioni dispari:

> 1, 2, 3, 4.

Posizioni pari:

> 20, 40, 60, 80.

Sono presenti due sottosuccessioni indipendenti.

---

## Esempio 6 — Fibonacci

> 1, 1, 2, 3, 5, 8, 13

Ogni nuovo termine è la somma dei due precedenti.

Per esempio:

> 5 + 8 = 13.

---

## Esempio 7 — Quadrati

> 1, 4, 9, 16, 25

I termini sono:

> 1², 2², 3², 4², 5².

Le differenze:

> 3, 5, 7, 9

sono numeri dispari consecutivi.

---

## Esempio 8 — Regola composta

> 3, 7, 15, 31, 63

Ogni termine segue:

> ×2 +1.

Infatti:

> 3 × 2 + 1 = 7

> 7 × 2 + 1 = 15

> 15 × 2 + 1 = 31.

---

# 6. Concetti da non confondere

# Serie numerica ≠ insieme di numeri

In un insieme l'ordine può non essere essenziale.

In una successione:

> **l'ordine dei termini è fondamentale.**

---

# Differenza ≠ rapporto

### Differenza

Indica quanto viene aggiunto o sottratto.

### Rapporto

Indica per quale fattore un termine viene moltiplicato rispetto al precedente.

---

# Progressione aritmetica ≠ progressione geometrica

### Aritmetica

Differenza costante.

> 2, 5, 8, 11.

### Geometrica

Rapporto costante.

> 2, 6, 18, 54.

---

# Incremento crescente ≠ progressione aritmetica

> 2, 5, 9, 14, 20

ha differenze:

> 3, 4, 5, 6.

La successione è regolare, ma **non** è una progressione aritmetica perché la differenza non è costante.

---

# Numero primo ≠ numero dispari

Molti numeri primi sono dispari, ma:

> 2

è primo ed è pari.

Inoltre non tutti i numeri dispari sono primi:

> 9 = 3 × 3

è dispari ma composto.

---

# Potenza ≠ moltiplicazione per l'esponente

> 4²

significa:

> 4 × 4 = 16,

non:

> 4 × 2.

---

# Quadrati ≠ raddoppi

> 1, 4, 9, 16...

sono quadrati.

> 1, 2, 4, 8, 16...

sono potenze di 2.

Sono strutture differenti anche se possono condividere alcuni valori.

---

# Alternanza ≠ regola unica ripetuta a ogni passaggio

Una serie può essere perfettamente regolare anche se utilizza:

> +2, ×3, +2, ×3...

La regola è costituita dall'intero **ciclo**, non da una singola operazione.

---

# Successione intercalata ≠ successione irregolare

Una sequenza apparentemente discontinua può derivare dall'alternanza ordinata di due o più successioni.

---

# Termine precedente ≠ posizione del termine

Una regola può dipendere:

-  dal termine precedente; 
-  dalla posizione n; 
-  da più termini precedenti. 

Sono strutture differenti.

---

# Fibonacci ≠ semplice successione additiva costante

In Fibonacci:

> il valore aggiunto cambia continuamente,

perché ogni termine deriva dalla somma dei **due termini precedenti**.

---

# 7. Collegamenti importanti

# Serie numeriche → operazioni matematiche

Le serie utilizzano direttamente:

-  addizione; 
-  sottrazione; 
-  moltiplicazione; 
-  divisione; 
-  potenze. 

Per questo la conoscenza dell'aritmetica è strettamente collegata al ragionamento logico.

---

# Serie numeriche → divisibilità

Successioni di:

-  multipli; 
-  numeri pari; 
-  numeri dispari; 
-  numeri primi 

dipendono dalle proprietà dei numeri che verranno approfondite nella parte matematica.

---

# Serie numeriche → potenze

Le successioni:

> 1, 4, 9, 16...

e:

> 1, 8, 27, 64...

sono direttamente collegate allo studio di:

-  quadrati; 
-  cubi; 
-  potenze. 

---

# Serie numeriche → relazioni

Una successione descrive una relazione ordinata tra termini:

**a₁ → a₂ → a₃ → ...**

Il principio di ordinamento studiato in logica ritorna quindi anche nelle strutture numeriche.

---

# Serie numeriche → ricorsione

Nelle successioni ricorsive l'informazione precedente determina quella successiva.

Per esempio:

> Fibonacci.

Questa struttura è concettualmente simile a una catena di dipendenze:

**termini precedenti → termine successivo.**

---

# Serie numeriche → serie miste

Le strutture numeriche studiate qui potranno essere combinate successivamente con:

-  lettere; 
-  simboli; 
-  posizioni alfabetiche; 

nelle **serie miste**.

---

# 8. Cosa devo memorizzare

## Definizioni fondamentali

**Successione numerica:** sequenza ordinata di numeri costruita secondo una regola.

**Termine:** ciascun numero della successione.

**Indice:** posizione occupata dal termine.

**Regola generatrice:** relazione che determina la successione.

**Progressione aritmetica:** successione con differenza costante.

**Progressione geometrica:** successione con rapporto costante.

**Successione ricorsiva:** un termine dipende da termini precedenti.

**Successione intercalata:** alternanza di due o più sottosuccessioni.

**Successione periodica:** ripetizione regolare di uno schema.

---

## Progressione aritmetica

Regola:

**aₙ = a₁ + (n−1)d**

dove:

**d = differenza costante.**

Esempio:

> 4, 7, 10, 13...

---

## Progressione geometrica

Regola:

**aₙ = a₁qⁿ⁻¹**

dove:

**q = rapporto costante.**

Esempio:

> 2, 6, 18, 54...

---

## Successioni fondamentali

### Pari

> 2, 4, 6, 8...

### Dispari

> 1, 3, 5, 7...

### Primi

> 2, 3, 5, 7, 11...

### Quadrati

> 1, 4, 9, 16, 25...

### Cubi

> 1, 8, 27, 64, 125...

### Triangolari

> 1, 3, 6, 10, 15...

### Fibonacci

> 1, 1, 2, 3, 5, 8, 13...

---

## Strutture principali

**Differenza costante**

> +k.

**Rapporto costante**

> ×k.

**Differenze progressive**

> +2, +3, +4, +5...

**Moltiplicatori progressivi**

> ×2, ×3, ×4...

**Operazioni alternate**

> ×2, +3, ×2, +3...

**Sottosuccessioni intercalate**

> posizioni pari e dispari con regole differenti.

**Regole ricorsive**

> termine costruito usando uno o più precedenti.

---

## Parole chiave

**Successione – termine – indice – regola generatrice – differenza – rapporto – progressione aritmetica – progressione geometrica – quadrato – cubo – numero primo – numero triangolare – Fibonacci – ricorsione – alternanza – intercalazione – periodicità.**

---

## Differenze da ricordare

**Successione ≠ insieme**

**Differenza ≠ rapporto**

**Progressione aritmetica ≠ progressione geometrica**

**Regolarità ≠ differenza necessariamente costante**

**Numero primo ≠ numero dispari**

**Potenza ≠ moltiplicazione per l'esponente**

**Alternanza ≠ irregolarità**

**Serie intercalata ≠ serie casuale**

**Posizione del termine ≠ valore del termine precedente**

**Fibonacci ≠ progressione aritmetica**