# Sezione 6 — Logica: Deduzioni e inferenze — Parte 2 di 2

## Implicazioni, condizioni necessarie e sufficienti, negazioni e quantificatori

In questa seconda parte completiamo la base della **logica deduttiva** affrontando quattro concetti fondamentali: **implicazioni, condizioni sufficienti e necessarie, negazioni e quantificatori**. Sono concetti strettamente collegati e saranno indispensabili anche per comprendere sillogismi e problemi logici più complessi. Manteniamo la modalità stabilita: teoria completa ed esempi soltanto esplicativi. 

---

# 1. Introduzione

Molti ragionamenti possono essere espressi mediante strutture del tipo:

> **Se accade A, allora accade B.**

Per esempio:

> Se un numero è multiplo di 4, allora è pari.

Questa struttura prende il nome di **implicazione**.

Per comprenderla correttamente bisogna distinguere due concetti:

- **condizione sufficiente**; 
- **condizione necessaria**. 

Inoltre, molte deduzioni dipendono da parole come:

-  tutti; 
-  nessuno; 
-  qualcuno; 
-  almeno uno; 
-  alcuni. 

Queste parole prendono il nome di **quantificatori** perché indicano quanti elementi di un insieme possiedono una determinata proprietà.

Infine, dobbiamo saper costruire correttamente la **negazione** di un'affermazione.

Per esempio, la negazione di:

> Tutti gli studenti hanno studiato.

non è:

> Nessuno studente ha studiato.

La negazione corretta è:

> **Almeno uno studente non ha studiato.**

Comprendere queste differenze è essenziale per ragionare correttamente.

---

# 2. Teoria

# 2.1 L'implicazione

Un'**implicazione logica** mette in relazione due proposizioni secondo la struttura:

> **Se A, allora B.**

Si può rappresentare simbolicamente come:

**A → B**

La proposizione A viene chiamata **antecedente**.

La proposizione B viene chiamata **conseguente**.

Esempio:

> Se un numero è multiplo di 10, allora termina per 0.

Abbiamo:

**A:** il numero è multiplo di 10.

**B:** il numero termina per 0.

Quindi:

**A → B**

---

# 2.2 Antecedente e conseguente

Nella frase:

> Se Marco è nato a Roma, allora è nato in Italia.

abbiamo:

### Antecedente

> Marco è nato a Roma.

### Conseguente

> Marco è nato in Italia.

L'implicazione stabilisce che, quando l'antecedente è vero, anche il conseguente deve essere vero.

Non stabilisce necessariamente il contrario.

---

# 2.3 Che cosa afferma realmente "se A allora B"

La struttura:

> Se A, allora B

significa:

> **ogni volta che si verifica A, deve verificarsi anche B.**

Non significa automaticamente:

> B si verifica soltanto quando si verifica A.

Consideriamo:

> Se un numero è multiplo di 4, allora è pari.

È corretto.

Ma un numero può essere pari senza essere multiplo di 4.

Per esempio:

> 6 è pari,

ma:

> 6 non è multiplo di 4.

Quindi:

**multiplo di 4 → pari**

ma non:

**pari → multiplo di 4.**

---

# 2.4 Condizione sufficiente

Se abbiamo:

> **Se A, allora B**

possiamo dire che **A è una condizione sufficiente per B**.

Perché?

Perché il verificarsi di A **basta** per garantire B.

Esempio:

> Se un numero è divisibile per 4, allora è pari.

Essere divisibile per 4 è una condizione **sufficiente** per essere pari.

Se sappiamo:

> 12 è divisibile per 4,

non ci serve altro per concludere:

> 12 è pari.

---

# 2.5 "Sufficiente" significa "basta"

Un modo semplice per ricordare il concetto è:

> **sufficiente = basta.**

Se A è sufficiente per B:

> avere A basta per ottenere B.

Esempio:

> Essere un quadrato è sufficiente per essere un rettangolo.

Ogni quadrato possiede infatti le caratteristiche necessarie per essere classificato anche come rettangolo.

Quindi:

**quadrato → rettangolo.**

---

# 2.6 Condizione necessaria

Nella stessa implicazione:

> A → B

possiamo dire che **B è una condizione necessaria per A**.

Questo significa che A non può verificarsi senza B.

Esempio:

> Se un numero è multiplo di 4, allora è pari.

Essere **pari** è necessario affinché un numero possa essere multiplo di 4.

Un numero dispari non può essere multiplo di 4.

---

# 2.7 "Necessario" significa "non può mancare"

Un modo utile per comprendere la necessità è:

> **necessario = deve esserci.**

Se B è necessario per A:

> A non può esistere senza B.

Esempio:

> Essere maggiorenne è necessario per avere 25 anni.

Una persona di 25 anni deve necessariamente essere maggiorenne.

Ma essere maggiorenne non basta per avere 25 anni.

Può averne:

-  18; 
-  30; 
-

60.

---

# 2.8 Sufficiente e necessario nella stessa implicazione

Da:

> A → B

ricaviamo sempre due letture equivalenti:

### A è sufficiente per B

e

### B è necessaria per A.

Esempio:

> Se una figura è un quadrato, allora ha quattro lati.

Possiamo dire:

> Essere un quadrato è sufficiente per avere quattro lati.

e:

> Avere quattro lati è necessario per essere un quadrato.

---

# 2.9 Una condizione necessaria può non essere sufficiente

Consideriamo:

> Per essere un quadrato è necessario avere quattro lati.

È vero.

Ma avere quattro lati non basta per essere un quadrato.

Anche:

-  rettangoli; 
-  rombi; 
-  trapezi; 

hanno quattro lati.

Quindi:

> avere quattro lati

è **necessario**, ma non **sufficiente** per essere un quadrato.

---

# 2.10 Una condizione sufficiente può non essere necessaria

Consideriamo:

> Essere un multiplo di 4 è sufficiente per essere pari.

Ma non è necessario essere multiplo di 4 per essere pari.

Per esempio:

> 6 è pari, ma non è multiplo di 4.

Quindi:

> multiplo di 4

è sufficiente ma non necessario per:

> essere pari.

---

# 2.11 Condizione necessaria e sufficiente

In alcuni casi una condizione è contemporaneamente:

-  necessaria; 
-  sufficiente. 

Questo significa che i due eventi si verificano insieme.

Possiamo scrivere:

**A ↔ B**

e leggere:

> A se e solo se B.

---

# 2.12 "Se e solo se"

L'espressione:

> **A se e solo se B**

significa contemporaneamente:

**A → B**

e

**B → A.**

Esempio matematico:

> Un numero intero è pari **se e solo se** è divisibile per 2.

Essere divisibile per 2:

-  è sufficiente per essere pari; 
-  è necessario per essere pari. 

Le due condizioni coincidono.

---

# 2.13 Implicazione e converso

Data:

> A → B

la proposizione:

> B → A

viene chiamata **conversa** o **reciproca** dell'implicazione.

È fondamentale capire che la conversa **non è automaticamente vera**.

Esempio:

> Se una figura è un quadrato, allora è un rettangolo.

La conversa sarebbe:

> Se una figura è un rettangolo, allora è un quadrato.

Questa è falsa.

Un rettangolo può non avere tutti i lati uguali.

---

# 2.14 L'inversa

Data:

> A → B

l'**inversa** è:

> non A → non B.

Esempio:

> Se un numero è multiplo di 4, allora è pari.

Inversa:

> Se un numero non è multiplo di 4, allora non è pari.

Questa è falsa.

Il numero 6 non è multiplo di 4 ma è pari.

L'inversa non è quindi equivalente all'implicazione originale.

---

# 2.15 La contrapposta

Data:

> A → B

la **contrapposta** è:

> non B → non A.

Questa, a differenza della conversa e dell'inversa, è logicamente equivalente all'implicazione originale.

Esempio:

> Se un numero è multiplo di 4, allora è pari.

Contrapposta:

> Se un numero non è pari, allora non è multiplo di 4.

È corretta.

Se un numero è dispari, non può essere multiplo di 4.

---

# 2.16 Implicazione e contrapposta

La regola fondamentale è:

**A → B**

equivale a:

**¬B → ¬A**

dove il simbolo **¬** significa:

> non.

Quindi:

> Se A, allora B.

equivale logicamente a:

> Se non B, allora non A.

---

# 2.17 Modus ponens

Una delle forme deduttive fondamentali è il **modus ponens**.

Struttura:

> Se A, allora B.
>  A.
>  Quindi B.

Esempio:

> Se un numero è multiplo di 4, allora è pari.

> 12 è multiplo di 4.

Quindi:

> 12 è pari.

È una deduzione valida.

---

# 2.18 Modus tollens

Un'altra forma fondamentale è il **modus tollens**.

Struttura:

> Se A, allora B.
>  Non B.
>  Quindi non A.

Esempio:

> Se una figura è un quadrato, allora ha quattro lati.

> Questa figura non ha quattro lati.

Quindi:

> questa figura non è un quadrato.

Anche questa forma è valida.

---

# 2.19 Affermare il conseguente

Abbiamo già introdotto questo errore nella parte precedente.

Struttura:

> Se A, allora B.
>  B.
>  Quindi A.

Non è generalmente valido.

Esempio:

> Se piove, la strada è bagnata.

> La strada è bagnata.

Non possiamo concludere:

> Ha piovuto.

La strada potrebbe essere stata:

-  lavata; 
-  bagnata da un irrigatore; 
-  bagnata per un'altra causa. 

---

# 2.20 Negare l'antecedente

Altro errore:

> Se A, allora B.
>  Non A.
>  Quindi non B.

Non è generalmente valido.

Esempio:

> Se Marco è a Roma, Marco è in Italia.

> Marco non è a Roma.

Non possiamo concludere:

> Marco non è in Italia.

Potrebbe essere a Firenze.

---

# 2.21 Tabella concettuale dell'implicazione

Le quattro strutture principali sono:

### Implicazione

**A → B**

### Conversa

**B → A**

### Inversa

**¬A → ¬B**

### Contrapposta

**¬B → ¬A**

Solo la **contrapposta** è sempre logicamente equivalente all'implicazione iniziale.

---

# 2.22 La negazione

La **negazione** trasforma una proposizione in un'affermazione che esclude ciò che essa afferma.

Se abbiamo:

> Marco è presente.

la negazione è:

> Marco **non è presente**.

Simbolicamente, se una proposizione è A:

> **¬A**

significa:

> non A.

---

# 2.23 Negazione di una proposizione semplice

Esempio:

> Oggi piove.

Negazione:

> Oggi **non piove**.

Oppure:

> Marco ha consegnato il compito.

Negazione:

> Marco **non ha consegnato il compito**.

La negazione deve riguardare esattamente il contenuto dell'affermazione.

---

# 2.24 Doppia negazione

In logica classica:

> non (non A)

equivale a:

> A.

Simbolicamente:

**¬¬A = A**

Esempio:

> Non è vero che Marco non è presente.

equivale logicamente a:

> Marco è presente.

Nella lingua quotidiana la doppia negazione può essere utilizzata anche con sfumature stilistiche, ma in logica la struttura viene interpretata formalmente.

---

# 2.25 Negare non significa dire il contrario estremo

Consideriamo:

> Marco è alto.

La negazione è:

> Marco **non è alto**.

Non necessariamente:

> Marco è basso.

Potrebbe essere di altezza media.

Questo è un principio molto importante.

La negazione di una proprietà significa semplicemente:

> quella proprietà non vale.

Non obbliga sempre ad attribuire la proprietà opposta.

---

# 2.26 Negazione delle proposizioni composte

Quando una frase contiene più condizioni, negarla richiede attenzione.

Consideriamo:

> Marco studia **e** lavora.

Perché questa frase sia vera, entrambe le cose devono essere vere.

La sua negazione non è semplicemente:

> Marco non studia e non lavora.

Questa sarebbe una situazione particolare.

La negazione corretta è:

> Marco non studia **oppure** non lavora.

È sufficiente che almeno una delle due parti non sia vera perché l'affermazione originale risulti falsa.

---

# 2.27 Negazione di "A e B"

La regola è:

**¬(A ∧ B) = ¬A ∨ ¬B**

Dove:

- **∧** significa "e"; 
- **∨** significa "oppure". 

Quindi la negazione di:

> A e B

è:

> non A oppure non B.

---

# 2.28 Negazione di "A oppure B"

Consideriamo:

> Marco è a Roma oppure a Milano.

Per negare l'affermazione, dobbiamo escludere entrambe le possibilità:

> Marco non è a Roma **e** non è a Milano.

Regola:

**¬(A ∨ B) = ¬A ∧ ¬B**

Queste due regole sono conosciute come **leggi di De Morgan**.

Per il livello del test è soprattutto importante comprenderne il significato, più che ricordarne il nome.

---

# 2.29 "E" logico

La congiunzione logica **e** richiede che entrambe le proposizioni siano vere.

> A e B

è vera soltanto quando:

-  A è vera; 
-  B è vera. 

Esempio:

> Marco è maggiorenne e possiede la patente.

L'affermazione complessiva richiede entrambe le caratteristiche.

---

# 2.30 "O" logico

La disgiunzione:

> A oppure B

può essere interpretata in due modi.

### O inclusivo

Almeno una delle due è vera, ma possono esserlo anche entrambe.

> Per accedere è sufficiente avere un passaporto o una carta d'identità valida.

In molti contesti il possesso di entrambi i documenti non crea problemi.

### O esclusivo

Una possibilità esclude l'altra.

> Il risultato è pari o dispari.

Un numero intero non può essere contemporaneamente pari e dispari.

Il contesto determina il significato.

---

# 2.31 I quantificatori

Un **quantificatore** indica quanti elementi di un insieme possiedono una certa proprietà.

Le forme fondamentali sono:

-  tutti; 
-  nessuno; 
-  qualcuno; 
-  almeno uno; 
-  alcuni; 
-  non tutti. 

I quantificatori modificano profondamente il significato logico delle affermazioni.

---

# 2.32 Quantificatore universale

Parole come:

> tutti

esprimono un **quantificatore universale**.

Esempio:

> Tutti gli studenti hanno un libro.

Significa che:

> ogni singolo elemento appartenente al gruppo degli studenti possiede un libro.

Simbolicamente possiamo rappresentare l'idea come:

> per ogni studente X, X ha un libro.

---

# 2.33 "Tutti gli A sono B"

La struttura:

> Tutti gli A sono B

indica un'inclusione:

**A ⊆ B**

Esempio:

> Tutti i quadrati sono quadrilateri.

L'insieme dei quadrati è contenuto nell'insieme dei quadrilateri.

Non significa che tutti i quadrilateri siano quadrati.

---

# 2.34 "Nessun A è B"

La parola:

> nessuno

indica che **zero elementi** del gruppo A appartengono a B.

Esempio:

> Nessun numero dispari è divisibile per 2.

La struttura significa che gli insiemi:

-  numeri dispari; 
-  numeri divisibili per 2 

non condividono elementi.

---

# 2.35 "Qualcuno" e "almeno uno"

In logica:

> qualcuno

significa normalmente:

> **almeno uno**.

Esempio:

> Qualcuno degli studenti ha consegnato il compito.

Significa:

> esiste almeno uno studente che ha consegnato.

Non sappiamo se siano:

-  uno; 
-  due; 
-  dieci; 
-  tutti. 

Sappiamo soltanto che **il numero non è zero**.

---

# 2.36 "Alcuni"

Nell'uso logico elementare:

> alcuni A sono B

significa normalmente:

> esiste almeno un A che è B.

Non significa necessariamente:

> alcuni ma non tutti.

Nel linguaggio quotidiano, invece, la parola *alcuni* può suggerire che non siano tutti.

Dal punto di vista logico stretto, è importante distinguere ciò che è realmente affermato da ciò che viene soltanto suggerito dal linguaggio comune.

---

# 2.37 "Non tutti"

L'espressione:

> non tutti gli A sono B

significa:

> **almeno un A non è B.**

Esempio:

> Non tutti gli studenti sono presenti.

Significa:

> almeno uno studente non è presente.

Non significa:

> nessuno studente è presente.

Alcuni potrebbero esserlo.

---

# 2.38 Negazione di "tutti"

Questa è una regola fondamentale.

Affermazione:

> Tutti gli A sono B.

Negazione:

> **Almeno un A non è B.**

Esempio:

> Tutti gli studenti hanno superato l'esame.

Negazione:

> Almeno uno studente non ha superato l'esame.

Per rendere falsa un'affermazione universale basta infatti trovare **una sola eccezione**.

---

# 2.39 Negazione di "nessuno"

Affermazione:

> Nessun A è B.

Negazione:

> **Almeno un A è B.**

Esempio:

> Nessuno studente ha superato l'esame.

Negazione:

> Almeno uno studente ha superato l'esame.

Una sola eccezione basta a rendere falsa l'affermazione "nessuno".

---

# 2.40 Negazione di "qualcuno"

Affermazione:

> Qualcuno degli A è B.

cioè:

> almeno un A è B.

Negazione:

> **Nessun A è B.**

Esempio:

> Qualche studente è assente.

Negazione:

> Nessuno studente è assente.

equivalente, nel gruppo considerato, a:

> Tutti gli studenti sono presenti.

---

# 2.41 Negazione di "almeno uno"

> Almeno uno studente ha consegnato.

Negazione:

> Nessuno studente ha consegnato.

La negazione elimina completamente l'esistenza dell'elemento indicato.

---

# 2.42 Relazioni fondamentali tra quantificatori

Possiamo riassumere:

### Tutti A sono B

Negazione:

> almeno un A non è B.

### Nessun A è B

Negazione:

> almeno un A è B.

### Almeno un A è B

Negazione:

> nessun A è B.

### Almeno un A non è B

Negazione:

> tutti gli A sono B.

Queste relazioni sono tra le più importanti dell'intera logica verbale.

---

# 2.43 "Tutti" non implica necessariamente esistenza

Nella logica formale più rigorosa, una frase universale come:

> Tutti gli unicorni verdi sono veloci.

può essere considerata formalmente vera anche se non esistono unicorni verdi, perché non esiste nessun elemento che costituisca un controesempio.

Per il livello di questo percorso non è necessario approfondire la logica dei domini vuoti, ma è utile sapere che:

> **"tutti gli A sono B" non serve da solo a dimostrare che esistano A.**

Per affermare l'esistenza occorre una premessa come:

> Esiste almeno un A.

---

# 2.44 Quantificatori e inclusione

Consideriamo:

> Tutti gli A sono B.

La relazione è:

**A dentro B.**

Se inoltre:

> Tutti i B sono C,

otteniamo:

**A dentro B dentro C.**

Quindi:

> Tutti gli A sono C.

Esempio:

> Tutti i gatti sono mammiferi.

> Tutti i mammiferi sono vertebrati.

Quindi:

> Tutti i gatti sono vertebrati.

---

# 2.45 "Nessuno" e incompatibilità

Se:

> Nessun A è B,

allora un elemento non può appartenere contemporaneamente ad A e B.

Se sappiamo:

> Marco è A,

possiamo concludere:

> Marco non è B.

Esempio:

> Nessun quadrato è un triangolo.

> La figura X è un quadrato.

Quindi:

> X non è un triangolo.

---

# 2.46 "Alcuni A sono B"

La struttura:

> Alcuni A sono B

garantisce almeno un elemento nell'intersezione tra A e B.

Possiamo rappresentare:

**A ∩ B ≠ ∅**

cioè:

> l'intersezione tra i due insiemi non è vuota.

Non sappiamo, però, quanti elementi appartengano all'intersezione.

---

# 2.47 "Alcuni A non sono B"

Questa struttura significa:

> esiste almeno un elemento appartenente ad A che non appartiene a B.

Esempio:

> Alcuni mammiferi non vivono sulla terraferma.

Significa che esiste almeno un mammifero al quale la proprietà:

> vivere sulla terraferma

non si applica.

---

# 2.48 Universale affermativa

Tradizionalmente la forma:

> **Tutti gli A sono B**

viene chiamata proposizione **universale affermativa**.

Esempio:

> Tutti i quadrati sono poligoni.

---

# 2.49 Universale negativa

La forma:

> **Nessun A è B**

è una **universale negativa**.

Esempio:

> Nessun triangolo è un quadrato.

---

# 2.50 Particolare affermativa

La forma:

> **Alcuni A sono B**

è una **particolare affermativa**.

Esempio:

> Alcuni animali sono mammiferi.

---

# 2.51 Particolare negativa

La forma:

> **Alcuni A non sono B**

è una **particolare negativa**.

Esempio:

> Alcuni animali non sono mammiferi.

Questa classificazione sarà utile quando studieremo i **sillogismi**.

---

# 2.52 Quantificatori e linguaggio naturale

I quantificatori possono comparire con espressioni diverse.

### Universali

-  tutti; 
-  ogni; 
-  ciascun; 
-  qualunque. 

Esempio:

> **Ogni** quadrato ha quattro lati.

equivale a:

> Tutti i quadrati hanno quattro lati.

---

### Esistenziali

-  qualcuno; 
-  alcuni; 
-  almeno uno; 
-  esiste un. 

Esempio:

> **Esiste almeno uno** studente assente.

---

### Negativi

-  nessuno; 
-  nessun; 
-  non esiste alcun. 

Esempio:

> **Nessun** quadrato ha tre lati.

---

# 2.53 "Ogni" e "tutti"

Consideriamo:

> Ogni studente deve consegnare.

e:

> Tutti gli studenti devono consegnare.

Dal punto di vista logico fondamentale esprimono la stessa universalità.

La differenza è soprattutto grammaticale:

- *ogni* accompagna normalmente un nome singolare; 
- *tutti* accompagna normalmente un nome plurale. 

---

# 2.54 "Nessuno" e "non tutti"

Non sono equivalenti.

### Nessuno

> Nessuno studente è presente.

Significa:

> zero studenti sono presenti.

### Non tutti

> Non tutti gli studenti sono presenti.

Significa:

> almeno uno è assente.

Altri studenti potrebbero essere presenti.

Quindi:

**nessuno = zero**

**non tutti = almeno un'eccezione**

---

# 2.55 "Qualcuno" e "tutti"

Da:

> Tutti gli studenti sono presenti.

se sappiamo che esistono studenti, segue:

> almeno uno studente è presente.

Ma da:

> qualcuno studente è presente

non segue:

> tutti sono presenti.

L'informazione esistenziale è più debole dell'informazione universale.

---

# 2.56 Quantificatori annidati

Alcune frasi contengono più di un quantificatore.

Esempio:

> Ogni studente ha letto almeno un libro.

Significa:

> per ciascuno studente esiste almeno un libro letto da quello studente.

Non significa necessariamente che tutti abbiano letto **lo stesso libro**.

Questo punto mostra quanto l'ordine dei quantificatori possa modificare il significato.

---

# 2.57 "Ogni studente ha letto un libro" e "esiste un libro letto da tutti"

Confrontiamo:

> Ogni studente ha letto almeno un libro.

Possiamo avere:

-  Anna ha letto il libro A; 
-  Marco ha letto il libro B; 
-  Lucia ha letto il libro C. 

Invece:

> Esiste un libro che ogni studente ha letto.

significa che c'è **uno specifico libro comune a tutti**.

Le due affermazioni non sono equivalenti.

---

# 2.58 Necessità, sufficienza e quantificatori

Consideriamo:

> Tutti gli A sono B.

Possiamo interpretare:

> essere A è sufficiente per essere B.

e:

> essere B è necessario per essere A.

Esempio:

> Tutti i quadrati sono quadrilateri.

Essere quadrato è:

> sufficiente per essere quadrilatero.

Essere quadrilatero è:

> necessario per essere quadrato.

Questo collega direttamente i quantificatori alle condizioni logiche.

---

# 3. Concetti fondamentali

## Implicazione

Relazione:

**A → B**

che significa:

> se A, allora B.

---

## Antecedente

La parte A dell'implicazione.

> **Se piove**, la strada si bagna.

---

## Conseguente

La parte B.

> Se piove, **la strada si bagna**.

---

## Condizione sufficiente

A è sufficiente per B quando:

> il verificarsi di A basta per garantire B.

---

## Condizione necessaria

B è necessaria per A quando:

> A non può verificarsi senza B.

---

## Condizione necessaria e sufficiente

A e B si implicano reciprocamente:

**A ↔ B**

> A se e solo se B.

---

## Contrapposta

Da:

**A → B**

si ottiene:

**¬B → ¬A.**

È logicamente equivalente all'implicazione originaria.

---

## Modus ponens

**A → B**

**A**

↓

**B**

---

## Modus tollens

**A → B**

**¬B**

↓

**¬A**

---

## Negazione

Operazione che esclude il contenuto di una proposizione.

**A → ¬A**

nel senso di trasformazione della proposizione nella sua negazione.

---

## Quantificatore universale

Indica tutti gli elementi:

> tutti, ogni.

---

## Quantificatore esistenziale

Indica almeno un elemento:

> qualcuno, almeno uno, alcuni.

---

# 4. Regole, classificazioni e caratteristiche

## Implicazione

Da:

**A → B**

ricordare:

**A = sufficiente per B**

**B = necessaria per A**

---

# Contrapposta

**A → B**

equivale a:

**¬B → ¬A**

---

# Forme valide fondamentali

### Modus ponens

**Se A → B**
 **A**
 → **B**

### Modus tollens

**Se A → B**
 **non B**
 → **non A**

---

# Forme non valide

### Affermazione del conseguente

**A → B**
 **B**
 → non possiamo concludere A.

### Negazione dell'antecedente

**A → B**
 **non A**
 → non possiamo concludere non B.

---

# Negazioni fondamentali

### Negazione di "A e B"

> non A **oppure** non B.

### Negazione di "A oppure B"

> non A **e** non B.

---

# Negazione dei quantificatori

### Tutti A sono B

Negazione:

> **Almeno un A non è B.**

### Nessun A è B

Negazione:

> **Almeno un A è B.**

### Almeno un A è B

Negazione:

> **Nessun A è B.**

### Almeno un A non è B

Negazione:

> **Tutti gli A sono B.**

---

# Classificazione tradizionale

| FormaTipo               |                         |
| ----------------------- | ----------------------- |
| **Tutti gli A sono B**  | Universale affermativa  |
| **Nessun A è B**        | Universale negativa     |
| **Alcuni A sono B**     | Particolare affermativa |
| **Alcuni A non sono B** | Particolare negativa    |

---

# 5. Esempi per comprendere la teoria

## Esempio 1 — Condizione sufficiente

> Se un numero è multiplo di 8, allora è pari.

Essere:

> multiplo di 8

è sufficiente per:

> essere pari.

Infatti ogni multiplo di 8 è necessariamente pari.

---

## Esempio 2 — Condizione necessaria

Nella stessa frase:

> essere pari

è necessario per:

> essere multiplo di 8.

Un numero dispari non può essere multiplo di 8.

Ma essere pari non è sufficiente:

> 6 è pari ma non è multiplo di 8.

---

## Esempio 3 — Contrapposta

> Se una figura è un quadrato, allora ha quattro lati.

Contrapposta:

> Se una figura non ha quattro lati, allora non è un quadrato.

Le due affermazioni hanno lo stesso rapporto logico fondamentale.

---

## Esempio 4 — Conversa non valida

Originale:

> Se una figura è un quadrato, allora ha quattro lati.

Conversa:

> Se una figura ha quattro lati, allora è un quadrato.

La seconda non segue dalla prima.

Un trapezio possiede quattro lati senza essere un quadrato.

---

## Esempio 5 — Modus ponens

> Se un numero è divisibile per 10, termina per 0.

> 120 è divisibile per 10.

Quindi:

> 120 termina per 0.

---

## Esempio 6 — Modus tollens

> Se una figura è un quadrato, ha quattro lati.

> La figura X non ha quattro lati.

Quindi:

> X non è un quadrato.

---

## Esempio 7 — Negazione di "tutti"

> Tutti i libri sono nuovi.

Per rendere falsa questa frase è sufficiente che esista:

> **almeno un libro non nuovo.**

La negazione è quindi:

> Almeno un libro non è nuovo.

---

## Esempio 8 — "Non tutti"

> Non tutti gli studenti hanno superato l'esame.

Questa frase garantisce soltanto che:

> almeno uno non ha superato.

È compatibile sia con:

> uno solo non ha superato;

sia con:

> molti non hanno superato.

---

## Esempio 9 — Nessuno

> Nessun gatto del gruppo è bianco.

Se:

> Micio appartiene al gruppo,

possiamo concludere:

> Micio non è bianco.

---

## Esempio 10 — Alcuni

> Alcuni studenti leggono molto.

Possiamo affermare:

> esiste almeno uno studente che legge molto.

Non possiamo stabilire, soltanto da questa frase, che:

> tutti gli altri non leggano molto.

---

# 6. Concetti da non confondere

# Necessario ≠ sufficiente

### Sufficiente

> basta.

### Necessario

> non può mancare.

Esempio:

> Essere quadrato → essere quadrilatero.

**Quadrato** = sufficiente.

**Quadrilatero** = necessario.

---

# "Se A allora B" ≠ "se B allora A"

> Quadrato → quadrilatero.

non significa:

> quadrilatero → quadrato.

L'implicazione ha una direzione.

---

# Contrapposta ≠ conversa

Da:

> A → B

### Contrapposta

> non B → non A.

È equivalente.

### Conversa

> B → A.

Non è automaticamente equivalente.

---

# Condizione necessaria ≠ condizione unica

Dire:

> B è necessario per A

non significa:

> B da solo produce A.

Può essere soltanto uno dei requisiti necessari.

---

# Negazione ≠ contrario estremo

> Non caldo

non significa necessariamente:

> freddo.

Può significare anche:

> tiepido.

---

# "Tutti" ≠ "alcuni"

### Tutti

Ogni elemento.

### Alcuni

Almeno un elemento.

L'informazione contenuta in *tutti* è molto più forte.

---

# "Nessuno" ≠ "non tutti"

### Nessuno

Zero elementi.

### Non tutti

Almeno un'eccezione.

---

# "Alcuni" ≠ necessariamente "alcuni ma non tutti"

In logica elementare:

> alcuni A sono B

garantisce almeno un caso.

Non esclude necessariamente che possano essere tutti.

---

# "Qualcuno" ≠ una persona specifica

> Qualcuno ha telefonato.

significa:

> esiste almeno una persona che ha telefonato.

Non sappiamo chi sia.

---

# Negazione di "tutti" ≠ "nessuno"

> Tutti hanno studiato.

Negazione:

> almeno uno non ha studiato.

Non:

> nessuno ha studiato.

---

# Negazione di "qualcuno" ≠ "qualcuno non"

> Qualcuno è presente.

Negazione:

> nessuno è presente.

Non:

> qualcuno non è presente.

La seconda affermazione può essere vera contemporaneamente alla prima.

---

# E inclusivo ≠ oppure

> A e B

richiede entrambi.

> A oppure B

richiede almeno una delle alternative nell'interpretazione inclusiva.

---

# O inclusivo ≠ o esclusivo

### Inclusivo

A, B oppure entrambi.

### Esclusivo

A oppure B, ma non entrambi.

Il significato dipende dal contesto.

---

# 7. Collegamenti importanti

# Implicazioni → condizioni necessarie e sufficienti

La relazione fondamentale è:

**A → B**

equivale a dire:

**A sufficiente per B**

e:

**B necessaria per A.**

Questi non sono tre argomenti separati, ma tre modi di descrivere la stessa struttura.

---

# Implicazioni → contrapposizione

L'implicazione:

> A → B

permette sempre la deduzione equivalente:

> non B → non A.

Questa trasformazione sarà molto utile anche nei **sillogismi e problemi di logica verbale**.

---

# Quantificatori → sillogismi

I sillogismi combinano spesso frasi come:

> Tutti gli A sono B.

> Nessun B è C.

> Alcuni D sono A.

Per questo padroneggiare:

-  tutti; 
-  nessuno; 
-  alcuni; 

è indispensabile prima di passare alla sezione dedicata ai sillogismi.

---

# Negazioni → quantificatori

Le negazioni fondamentali sono costruite cambiando contemporaneamente:

-  quantità; 
-  affermazione/negazione. 

Per esempio:

**tutti**

diventa nella negazione:

**almeno uno non**.

Questo rapporto è fondamentale.

---

# Logica → grammatica

Le parole:

-  se; 
-  allora; 
-  tutti; 
-  nessuno; 
-  qualcuno; 

sono elementi linguistici, ma hanno anche un preciso valore logico.

Abbiamo già incontrato **se** nelle proposizioni condizionali:

> Se piove, rimango a casa.

Ora la stessa struttura viene osservata dal punto di vista logico:

**A → B**.

---

# Logica → matematica

Molti concetti matematici sono formulati tramite condizioni necessarie e sufficienti.

Per esempio:

> Se un numero è divisibile per 4, è pari.

Oppure mediante equivalenze:

> Un numero intero è pari se e solo se è divisibile per 2.

Capire la logica rende quindi più chiari anche i ragionamenti matematici.

---

# 8. Cosa devo memorizzare

## Definizioni fondamentali

**Implicazione:** relazione del tipo **se A, allora B**.

**Antecedente:** proposizione A.

**Conseguente:** proposizione B.

**Condizione sufficiente:** condizione che basta per garantire un risultato.

**Condizione necessaria:** condizione che non può mancare affinché qualcosa si verifichi.

**Condizione necessaria e sufficiente:** relazione bidirezionale espressa da **se e solo se**.

**Contrapposta:** da A → B si ottiene ¬B → ¬A.

**Quantificatore:** espressione che indica quanti elementi possiedono una determinata proprietà.

---

## Regole fondamentali

Da:

**A → B**

ricordare:

> **A è sufficiente per B.**

> **B è necessaria per A.**

---

## Deduzioni valide

### Modus ponens

**A → B**
 **A**
 → **B**

### Modus tollens

**A → B**
 **¬B**
 → **¬A**

---

## Trasformazioni da non confondere

Da:

**A → B**

### Contrapposta

**¬B → ¬A**

→ equivalente.

### Conversa

**B → A**

→ non automaticamente valida.

### Inversa

**¬A → ¬B**

→ non automaticamente valida.

---

## Negazioni fondamentali

**Non (A e B)**

\=

**non A oppure non B.**

**Non (A oppure B)**

\=

**non A e non B.**

---

## Quantificatori fondamentali

**Tutti** → ogni elemento.

**Nessuno** → zero elementi.

**Almeno uno / qualcuno** → esiste almeno un elemento.

**Non tutti** → almeno un elemento costituisce un'eccezione.

---

## Negazione dei quantificatori

**Tutti A sono B**

→ **Almeno un A non è B.**

**Nessun A è B**

→ **Almeno un A è B.**

**Almeno un A è B**

→ **Nessun A è B.**

**Almeno un A non è B**

→ **Tutti gli A sono B.**

---

## Quattro forme fondamentali

**Tutti gli A sono B**
 → universale affermativa.

**Nessun A è B**
 → universale negativa.

**Alcuni A sono B**
 → particolare affermativa.

**Alcuni A non sono B**
 → particolare negativa.

---

## Parole chiave

**Implicazione – antecedente – conseguente – necessario – sufficiente – se e solo se – contrapposta – conversa – inversa – modus ponens – modus tollens – negazione – quantificatore – universale – esistenziale – tutti – nessuno – alcuni – almeno uno – non tutti.**

---

## Differenze da ricordare

**Necessario ≠ sufficiente**

**Se A → B ≠ B → A**

**Contrapposta ≠ conversa**

**Contrapposta = equivalente all'implicazione**

**Negazione ≠ contrario estremo**

**Tutti ≠ alcuni**

**Nessuno ≠ non tutti**

**Alcuni ≠ necessariamente alcuni ma non tutti**

**Negazione di tutti = almeno uno non**

**Negazione di nessuno = almeno uno**

**Condizionale grammaticale ≠ implicazione logica**, anche se possono essere collegati.