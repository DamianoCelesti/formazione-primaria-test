# Sezione 7 — Logica: Sillogismi

I **sillogismi** applicano direttamente ciò che abbiamo appena studiato su deduzioni, quantificatori, inclusioni e negazioni. Sono quindi un passaggio centrale del ragionamento logico. Manteniamo la modalità stabilita: **teoria completa ed esempi esclusivamente esplicativi**, senza trasformarli in esercizi o quiz. 

---

# 1. Introduzione

Un **sillogismo** è un ragionamento deduttivo nel quale, a partire da alcune proposizioni chiamate **premesse**, si cerca di ottenere una **conclusione**.

Un esempio classico è:

> Tutti gli uomini sono mortali.
>  Socrate è un uomo.
>  Dunque Socrate è mortale.

La struttura è:

**Premessa 1:** tutti gli uomini sono mortali.

**Premessa 2:** Socrate è un uomo.

**Conclusione:** Socrate è mortale.

La conclusione non aggiunge arbitrariamente una nuova informazione: deriva necessariamente dalla combinazione delle premesse.

Per comprendere i sillogismi bisogna padroneggiare soprattutto:

- **tutti**; 
- **nessuno**; 
- **alcuni**; 
-  appartenenza a insiemi; 
-  inclusione tra insiemi; 
-  incompatibilità; 
-  validità della conclusione. 

---

# 2. Teoria

# 2.1 Che cos'è un sillogismo

Nel significato tradizionale, il **sillogismo categorico** è formato da:

1. **premessa maggiore**; 
2. **premessa minore**; 
3. **conclusione**. 

Esempio:

> Tutti i mammiferi sono vertebrati.
>  Tutti i cani sono mammiferi.
>  Quindi tutti i cani sono vertebrati.

Le due premesse stabiliscono rapporti tra tre categorie:

-  cani; 
-  mammiferi; 
-  vertebrati. 

La conclusione nasce collegando questi rapporti.

---

# 2.2 I tre termini del sillogismo

Nel sillogismo categorico tradizionale compaiono tre termini fondamentali:

- **termine maggiore**; 
- **termine minore**; 
- **termine medio**. 

Consideriamo:

> Tutti i mammiferi sono vertebrati.
>  Tutti i cani sono mammiferi.
>  Quindi tutti i cani sono vertebrati.

### Termine minore

È il soggetto della conclusione:

> **cani**.

### Termine maggiore

È il predicato della conclusione:

> **vertebrati**.

### Termine medio

Compare nelle premesse ma scompare dalla conclusione:

> **mammiferi**.

Il termine medio serve da **ponte logico** tra gli altri due.

---

# 2.3 Funzione del termine medio

Possiamo rappresentare il sillogismo precedente così:

**CANI → MAMMIFERI → VERTEBRATI**

Poiché:

> tutti i cani appartengono ai mammiferi

e:

> tutti i mammiferi appartengono ai vertebrati,

otteniamo:

> tutti i cani appartengono ai vertebrati.

Il termine medio:

> mammiferi

permette quindi di collegare:

> cani

a:

> vertebrati.

---

# 2.4 Le quattro proposizioni categoriche fondamentali

I sillogismi utilizzano spesso quattro forme fondamentali già incontrate studiando i quantificatori.

---

## Universale affermativa

> **Tutti gli A sono B.**

Esempio:

> Tutti i quadrati sono poligoni.

Indica:

**A ⊆ B**

---

## Universale negativa

> **Nessun A è B.**

Esempio:

> Nessun quadrato è un triangolo.

Indica che A e B non hanno elementi in comune.

---

## Particolare affermativa

> **Alcuni A sono B.**

Esempio:

> Alcuni animali sono mammiferi.

Indica che esiste almeno un elemento appartenente sia ad A sia a B.

---

## Particolare negativa

> **Alcuni A non sono B.**

Esempio:

> Alcuni animali non sono mammiferi.

Indica che almeno un elemento appartenente ad A rimane fuori dall'insieme B.

---

# 2.5 Rappresentare i sillogismi come insiemi

Un modo utile per comprendere i sillogismi è pensare alle categorie come **insiemi**.

Se:

> Tutti gli A sono B,

allora:

**A ⊆ B**

Se inoltre:

> Tutti i B sono C,

allora:

**A ⊆ B ⊆ C**

Da cui:

**A ⊆ C**

e quindi:

> Tutti gli A sono C.

---

# 2.6 Catena di inclusioni

Consideriamo:

> Tutti i gatti sono mammiferi.

> Tutti i mammiferi sono animali.

Possiamo costruire:

**GATTI ⊆ MAMMIFERI ⊆ ANIMALI**

Perciò:

> Tutti i gatti sono animali.

La proprietà fondamentale utilizzata è la **transitività dell'inclusione**.

---

# 2.7 L'inclusione ha una direzione

Da:

> Tutti gli A sono B

non possiamo concludere:

> Tutti i B sono A.

Esempio:

> Tutti i gatti sono mammiferi.

Non significa:

> Tutti i mammiferi sono gatti.

L'insieme dei mammiferi è più ampio.

Possiamo avere:

-  gatti; 
-  cani; 
-  cavalli; 
-  balene; 
-  esseri umani. 

---

# 2.8 Il termine medio deve collegare realmente le categorie

Consideriamo:

> Tutti gli A sono B.

> Tutti i C sono B.

Possiamo rappresentare:

**A → B ← C**

Da queste premesse non possiamo sapere quale rapporto esista tra A e C.

Potrebbero:

-  sovrapporsi; 
-  essere completamente distinti; 
-  avere alcuni elementi in comune. 

Esempio:

> Tutti i cani sono mammiferi.

> Tutti i gatti sono mammiferi.

Non possiamo concludere:

> Tutti i cani sono gatti.

E neppure:

> Nessun cane è gatto,

basandoci soltanto su queste due premesse.

Il fatto che due categorie appartengano a una categoria più ampia non stabilisce automaticamente un rapporto tra loro.

---

# 2.9 Errore del termine medio non sufficientemente collegato

Consideriamo:

> Tutti i medici sono laureati.

> Luca è laureato.

Conclusione:

> Luca è medico.

La struttura è:

**MEDICI ⊆ LAUREATI**

e:

**Luca ∈ LAUREATI**

Ma Luca potrebbe essere:

-  avvocato; 
-  insegnante; 
-  ingegnere; 
-  laureato senza esercitare una professione. 

L'appartenenza all'insieme più ampio non permette di ricostruire automaticamente l'appartenenza a uno dei suoi sottoinsiemi.

---

# 2.10 Sillogismo con "nessuno"

Consideriamo:

> Nessun rettile è un mammifero.

> Tutti i serpenti sono rettili.

Possiamo concludere:

> Nessun serpente è un mammifero.

Schema:

**SERPENTI ⊆ RETTILI**

e:

**RETTILI ∩ MAMMIFERI = ∅**

Quindi:

**SERPENTI ∩ MAMMIFERI = ∅**

Se un'intera categoria è esclusa da B, anche ogni suo sottoinsieme è escluso da B.

---

# 2.11 Universalità negativa e appartenenza individuale

Consideriamo:

> Nessun A è B.

> Marco è A.

Possiamo dedurre:

> Marco non è B.

Esempio:

> Nessun triangolo è un quadrato.

> La figura X è un triangolo.

Quindi:

> La figura X non è un quadrato.

È una conseguenza necessaria.

---

# 2.12 Sillogismi con "alcuni"

Le proposizioni particolari richiedono maggiore attenzione.

Consideriamo:

> Alcuni A sono B.

Questo significa soltanto:

> esiste almeno un elemento che appartiene sia ad A sia a B.

Non sappiamo quale elemento sia né quanti siano.

---

# 2.13 Da "alcuni" non si passa automaticamente a "tutti"

Da:

> Alcuni studenti leggono romanzi.

non possiamo concludere:

> Tutti gli studenti leggono romanzi.

L'informazione:

> almeno uno

non può essere trasformata in:

> ogni elemento.

---

# 2.14 Da "alcuni A sono B" possiamo invertire l'esistenza

Se:

> Alcuni A sono B,

allora possiamo affermare:

> Alcuni B sono A.

Esempio:

> Alcuni insegnanti sono musicisti.

Significa che esiste almeno una persona appartenente sia al gruppo:

> insegnanti

sia al gruppo:

> musicisti.

Di conseguenza è vero anche:

> Alcuni musicisti sono insegnanti.

L'intersezione è la stessa.

---

# 2.15 Questo non vale per "tutti"

Attenzione alla differenza:

> Alcuni A sono B

permette:

> Alcuni B sono A.

Ma:

> Tutti gli A sono B

non permette:

> Tutti i B sono A.

Esempio:

> Alcuni cani sono animali domestici.

permette:

> Alcuni animali domestici sono cani.

Ma:

> Tutti i cani sono mammiferi

non permette:

> Tutti i mammiferi sono cani.

---

# 2.16 "Alcuni A non sono B"

Consideriamo:

> Alcuni studenti non sono maggiorenni.

Significa che esiste almeno uno studente che:

-  appartiene all'insieme degli studenti; 
-  non appartiene all'insieme dei maggiorenni. 

Non sappiamo nulla, però, sugli altri studenti.

Potrebbero:

-  essere tutti maggiorenni; 
-  essere quasi tutti minorenni; 
-  esserci varie combinazioni. 

---

# 2.17 Una premessa particolare non identifica l'individuo

Supponiamo:

> Alcuni studenti praticano nuoto.

> Luca è uno studente.

Non possiamo concludere:

> Luca pratica nuoto.

La prima premessa garantisce l'esistenza di almeno uno studente nuotatore, ma non ci dice chi sia.

---

# 2.18 Combinare una particolare con un'universale

Consideriamo:

> Alcuni A sono B.

> Tutti i B sono C.

Possiamo concludere:

> Alcuni A sono C.

Perché?

Esiste almeno un elemento che è contemporaneamente:

> A e B.

Poiché ogni B è C, quell'elemento è anche C.

Schema:

**alcuni A ∩ B esistono**

e:

**B ⊆ C**

quindi:

**alcuni A ∩ C esistono.**

---

# 2.19 Esempio concreto

> Alcuni studenti sono musicisti.

> Tutti i musicisti conoscono la teoria musicale.

Quindi:

> Alcuni studenti conoscono la teoria musicale.

Almeno gli studenti che sono musicisti appartengono anche al gruppo di coloro che conoscono la teoria musicale.

---

# 2.20 Combinare una particolare con un'universale negativa

Consideriamo:

> Alcuni A sono B.

> Nessun B è C.

Possiamo concludere:

> Alcuni A non sono C.

Infatti esiste almeno un elemento A che è B.

Ma nessun B può essere C.

Quell'elemento A non può quindi essere C.

---

# 2.21 Esempio concreto

> Alcuni animali sono rettili.

> Nessun rettile è un mammifero.

Quindi:

> Alcuni animali non sono mammiferi.

Gli animali che sappiamo essere rettili non possono essere mammiferi.

---

# 2.22 Due proposizioni particolari spesso non bastano

Consideriamo:

> Alcuni A sono B.

> Alcuni B sono C.

Possiamo concludere:

> Alcuni A sono C?

No, non necessariamente.

I due "alcuni" potrebbero riferirsi a elementi diversi.

---

# 2.23 Esempio dei gruppi diversi

Supponiamo:

> Alcuni studenti sono musicisti.

> Alcuni musicisti sono insegnanti.

Potremmo avere:

-  Anna = studentessa e musicista; 
-  Marco = musicista e insegnante. 

Non è necessario che esista qualcuno che sia contemporaneamente:

-  studente; 
-  musicista; 
-  insegnante. 

Quindi non possiamo dedurre:

> Alcuni studenti sono insegnanti.

---

# 2.24 L'identità degli "alcuni" non è garantita

Questa è una regola generale molto importante.

Se abbiamo:

> Alcuni A sono B.

e:

> Alcuni B sono C,

la parola *alcuni* nelle due premesse non garantisce che si stia parlando degli **stessi elementi**.

Per ottenere una conclusione sicura serve una relazione più forte.

---

# 2.25 Sillogismi con individui

Non tutti i ragionamenti riguardano intere categorie.

Possiamo avere:

> Tutti gli A sono B.

> Marco è A.

Quindi:

> Marco è B.

È una forma semplice di applicazione di una regola universale a un individuo.

---

# 2.26 Catena con individuo

Consideriamo:

> Tutti gli studenti del corso hanno un badge.

> Tutti coloro che hanno un badge possono entrare nell'aula.

> Lucia è una studentessa del corso.

Possiamo seguire la catena:

**Lucia → studentessa**

↓

**studenti → badge**

↓

**Lucia → badge**

↓

**badge → accesso**

↓

**Lucia può entrare nell'aula.**

La conclusione deriva da più passaggi successivi.

---

# 2.27 Premesse negative

Le negazioni possono limitare le conclusioni.

Esempio:

> Nessun A è B.

> Tutti i C sono A.

Quindi:

> Nessun C è B.

Schema:

**C ⊆ A**

e:

**A ∩ B = ∅**

quindi:

**C ∩ B = ∅.**

---

# 2.28 Una conclusione affermativa richiede un collegamento positivo sufficiente

Consideriamo:

> Nessun A è B.

> Nessun C è B.

Da queste due premesse non possiamo concludere:

> Tutti gli A sono C

oppure:

> Nessun A è C.

Sappiamo soltanto che entrambe le categorie sono separate da B.

Il rapporto tra A e C resta indeterminato.

---

# 2.29 Esempio concreto

> Nessun cane è un rettile.

> Nessun gatto è un rettile.

Non segue né:

> tutti i cani sono gatti

né:

> nessun cane è gatto.

Il fatto di condividere una stessa esclusione non stabilisce un rapporto reciproco.

---

# 2.30 Sillogismi e diagrammi di Eulero-Venn

I rapporti tra categorie possono essere rappresentati mentalmente tramite insiemi.

Per esempio:

> Tutti gli A sono B.

Si può immaginare un cerchio A completamente contenuto nel cerchio B.

> Nessun A è B.

Due cerchi separati.

> Alcuni A sono B.

Due cerchi sovrapposti, con almeno un elemento nella zona comune.

> Alcuni A non sono B.

Almeno un elemento di A si trova fuori da B.

Questa rappresentazione rende intuitivi molti sillogismi.

---

# 2.31 Inclusione totale

> Tutti gli A sono B.

Rappresentazione:

**A completamente dentro B.**

Questo significa che non esiste alcun A esterno a B.

Ma possono esistere molti B che non sono A.

---

# 2.32 Esclusione totale

> Nessun A è B.

Rappresentazione:

**A e B separati.**

Non esiste alcun elemento contemporaneamente A e B.

---

# 2.33 Sovrapposizione parziale certa

> Alcuni A sono B.

Rappresentazione:

A e B devono avere **almeno una zona comune occupata**.

Non sappiamo se:

-  la sovrapposizione sia piccola; 
-  sia grande; 
-  tutti gli A siano B; 
-  tutti i B siano A. 

Sappiamo soltanto che l'intersezione non è vuota.

---

# 2.34 Esistenza fuori dall'insieme

> Alcuni A non sono B.

Significa che almeno una parte dell'insieme A si trova fuori da B.

Non ci dice se esistano anche elementi A all'interno di B.

---

# 2.35 Validità di un sillogismo

Come studiato nella sezione precedente, la **validità** non riguarda la verità reale delle premesse.

Consideriamo:

> Tutti i draghi sono bibliotecari.

> Tutti i bibliotecari sono immortali.

> Quindi tutti i draghi sono immortali.

Le premesse sono fantastiche, ma la struttura è valida:

**DRAGHI ⊆ BIBLIOTECARI ⊆ IMMORTALI**

quindi:

**DRAGHI ⊆ IMMORTALI.**

---

# 2.36 Solidità del ragionamento

Quando un ragionamento è:

-  formalmente valido; 
-  costruito con premesse vere, 

si può parlare, in logica, di un ragionamento **corretto o solido** (*sound*, nella terminologia logica).

La distinzione fondamentale rimane:

**validità → struttura**

**verità → premesse/conclusioni rispetto ai fatti.**

---

# 2.37 Conclusione troppo forte

Un errore frequente nei ragionamenti consiste nel ricavare una conclusione più forte delle informazioni disponibili.

Premessa:

> Alcuni studenti hanno superato l'esame.

Conclusione:

> Tutti gli studenti hanno superato l'esame.

La conclusione aggiunge un'universalità non contenuta nella premessa.

---

# 2.38 Conclusione più debole

Da un'informazione molto forte possiamo invece talvolta ricavare un'informazione più debole, purché sia garantita anche l'esistenza degli elementi considerati.

Se sappiamo:

> Tutti gli studenti della classe hanno superato l'esame

e sappiamo che la classe contiene studenti, allora possiamo dire:

> Alcuni studenti della classe hanno superato l'esame.

L'universale contiene un'informazione più forte.

La questione dell'esistenza deve però essere tenuta presente nella logica formale.

---

# 2.39 Sillogismi ipotetici

Il termine sillogismo viene utilizzato anche per ragionamenti costruiti mediante **implicazioni**.

Consideriamo:

> Se A, allora B.

> Se B, allora C.

Possiamo dedurre:

> Se A, allora C.

Questo viene spesso chiamato **sillogismo ipotetico**.

---

# 2.40 Catena di implicazioni

Schema:

**A → B**

**B → C**

quindi:

**A → C**

Esempio:

> Se un numero è multiplo di 8, è multiplo di 4.

> Se è multiplo di 4, è pari.

Quindi:

> Se un numero è multiplo di 8, è pari.

---

# 2.41 Sillogismo disgiuntivo

Un'altra struttura deduttiva utilizza un'alternativa.

Schema:

> A oppure B.

> Non A.

> Quindi B.

Esempio:

> Il documento si trova nella cartella A oppure nella cartella B.

> Non si trova nella cartella A.

Quindi:

> si trova nella cartella B.

Questo ragionamento presuppone che l'alternativa iniziale copra realmente le possibilità considerate.

---

# 2.42 Importanza del significato di "o"

Come studiato precedentemente, **o** può essere:

-  inclusivo; 
-  esclusivo. 

In molti sillogismi disgiuntivi, dalla proposizione:

> A o B

e:

> non A

possiamo comunque concludere:

> B,

sia con lettura inclusiva sia esclusiva, purché l'affermazione iniziale garantisca che almeno una delle due alternative sia vera.

---

# 2.43 Il dilemma

Esistono ragionamenti nei quali vengono considerate più alternative con conseguenze differenti.

Una struttura semplice può essere:

> Se A, allora C.

> Se B, allora C.

> A oppure B.

Quindi:

> C.

Qualunque delle alternative ammesse si realizzi, la conclusione rimane la stessa.

Per il livello richiesto è sufficiente comprendere il principio generale senza approfondire la classificazione formale dei dilemmi.

---

# 2.44 Sillogismo categorico e sillogismo ipotetico

### Categorico

Utilizza rapporti tra categorie:

> Tutti gli A sono B.

> Tutti i B sono C.

> Quindi tutti gli A sono C.

### Ipotetico

Utilizza implicazioni:

> Se A allora B.

> Se B allora C.

> Quindi se A allora C.

Sono entrambi ragionamenti deduttivi, ma utilizzano strutture differenti.

---

# 3. Concetti fondamentali

## Sillogismo

Ragionamento deduttivo nel quale una conclusione viene ricavata da due o più premesse collegate logicamente.

---

## Premessa maggiore

Nel sillogismo categorico tradizionale è la premessa che contiene il **termine maggiore**, cioè il predicato della conclusione.

---

## Premessa minore

Contiene il **termine minore**, cioè il soggetto della conclusione.

---

## Termine medio

Compare nelle premesse ma non nella conclusione e collega gli altri due termini.

---

## Termine maggiore

È il predicato della conclusione.

---

## Termine minore

È il soggetto della conclusione.

---

## Sillogismo categorico

Utilizza proposizioni che esprimono rapporti tra categorie:

-  tutti; 
-  nessuno; 
-  alcuni. 

---

## Sillogismo ipotetico

Collega implicazioni.

> A → B
>  B → C
>  quindi A → C.

---

## Sillogismo disgiuntivo

Parte da un'alternativa:

> A oppure B.

e dall'esclusione di una possibilità ricava l'altra.

---

# 4. Regole, classificazioni e caratteristiche

## Forme categoriche fondamentali

### Universale affermativa

> Tutti gli A sono B.

### Universale negativa

> Nessun A è B.

### Particolare affermativa

> Alcuni A sono B.

### Particolare negativa

> Alcuni A non sono B.

---

# Catena universale valida

**Tutti A sono B**

**Tutti B sono C**

↓

**Tutti A sono C**

---

# Inclusione + esclusione

**Tutti A sono B**

**Nessun B è C**

↓

**Nessun A è C**

---

# Particolare + universale

**Alcuni A sono B**

**Tutti B sono C**

↓

**Alcuni A sono C**

---

# Particolare + universale negativa

**Alcuni A sono B**

**Nessun B è C**

↓

**Alcuni A non sono C**

---

# Due particolari

Da:

**Alcuni A sono B**

**Alcuni B sono C**

non segue necessariamente:

**Alcuni A sono C.**

Gli elementi indicati da *alcuni* possono essere differenti.

---

# Catena ipotetica

**A → B**

**B → C**

↓

**A → C**

---

# Sillogismo disgiuntivo

**A oppure B**

**non A**

↓

**B**

---

# 5. Esempi per comprendere la teoria

## Esempio 1 — Catena di inclusione

> Tutti i canarini sono uccelli.
>  Tutti gli uccelli sono vertebrati.

Abbiamo:

**CANARINI ⊆ UCCELLI ⊆ VERTEBRATI**

Quindi:

> Tutti i canarini sono vertebrati.

---

## Esempio 2 — Universale negativa

> Nessun rettile è un mammifero.
>  Tutti i serpenti sono rettili.

Poiché:

**SERPENTI ⊆ RETTILI**

e:

**RETTILI ∩ MAMMIFERI = ∅**

segue:

> Nessun serpente è un mammifero.

---

## Esempio 3 — Particolare e universale

> Alcuni studenti sono atleti.
>  Tutti gli atleti si allenano regolarmente.

Gli studenti che sappiamo essere atleti appartengono anche alla seconda categoria.

Quindi:

> Alcuni studenti si allenano regolarmente.

---

## Esempio 4 — Due "alcuni"

> Alcuni studenti sono musicisti.
>  Alcuni musicisti sono insegnanti.

Non possiamo collegare necessariamente i due gruppi particolari.

Potremmo avere:

> Anna = studentessa e musicista.

> Luca = musicista e insegnante.

Senza nessuno che sia contemporaneamente studente e insegnante.

---

## Esempio 5 — Errore di inversione

> Tutti i medici sono laureati.
>  Marco è laureato.

Non possiamo concludere:

> Marco è medico.

L'informazione:

**MEDICI ⊆ LAUREATI**

non permette di trasformarla in:

**LAUREATI ⊆ MEDICI**.

---

## Esempio 6 — Individuo e categoria

> Nessun membro del gruppo A è maggiorenne.
>  Luca appartiene al gruppo A.

Ne segue:

> Luca non è maggiorenne.

---

## Esempio 7 — Sillogismo ipotetico

> Se studio, comprendo l'argomento.

> Se comprendo l'argomento, riesco a spiegarlo.

Possiamo collegare:

**studio → comprensione → capacità di spiegare**

ottenendo:

> Se studio, riesco a spiegare l'argomento.

Il ragionamento considera vere le implicazioni date come premesse.

---

## Esempio 8 — Sillogismo disgiuntivo

> Anna è in biblioteca oppure è a casa.

> Anna non è in biblioteca.

Ne segue:

> Anna è a casa.

L'alternativa iniziale e l'esclusione della prima possibilità determinano la seconda.

---

# 6. Concetti da non confondere

# Termine medio ≠ conclusione

Il **termine medio** serve a collegare gli altri termini ma normalmente **non compare nella conclusione**.

Esempio:

> Cani → mammiferi → vertebrati.

Conclusione:

> cani → vertebrati.

*Mammiferi* è il ponte.

---

# Tutti A sono B ≠ tutti B sono A

> Tutti i cani sono mammiferi.

non significa:

> Tutti i mammiferi sono cani.

L'inclusione non può essere invertita.

---

# Alcuni A sono B ≠ alcuni A non sono B

### Alcuni A sono B

Garantisce almeno un elemento nell'intersezione.

### Alcuni A non sono B

Garantisce almeno un elemento di A esterno a B.

Le due affermazioni non sono negazioni reciproche.

---

# Alcuni ≠ individuo identificato

> Alcuni studenti leggono.

non significa:

> Marco legge

anche se Marco è uno studente.

Non sappiamo quali studenti siano coinvolti.

---

# Due "alcuni" ≠ stesso gruppo

> Alcuni A sono B.

> Alcuni B sono C.

I due gruppi indicati da *alcuni* possono essere differenti.

---

# Categoria comune ≠ relazione reciproca

> Tutti gli A sono C.

> Tutti i B sono C.

non permette di stabilire automaticamente il rapporto tra A e B.

Condividere una categoria superiore non significa essere la stessa categoria.

---

# Verità ≠ validità del sillogismo

Un sillogismo può avere una struttura valida anche con premesse false.

La validità riguarda:

> **se la conclusione segue dalle premesse.**

---

# Sillogismo categorico ≠ ipotetico

### Categorico

Lavora soprattutto con appartenenza e inclusione:

> tutti A sono B.

### Ipotetico

Lavora con implicazioni:

> se A allora B.

---

# Conclusione possibile ≠ conclusione necessaria

Una conclusione può essere compatibile con le premesse senza essere obbligata.

I sillogismi deduttivi validi richiedono invece una conclusione **necessaria**.

---

# 7. Collegamenti importanti

## Sillogismi → quantificatori

Le quattro forme:

-  tutti A sono B; 
-  nessun A è B; 
-  alcuni A sono B; 
-  alcuni A non sono B 

derivano direttamente dallo studio dei quantificatori.

Per comprendere un sillogismo bisogna quindi interpretare con precisione la quantità espressa.

---

# Sillogismi → insiemi

Le proposizioni categoriche possono essere rappresentate come relazioni tra insiemi.

### Tutti A sono B

**A ⊆ B**

### Nessun A è B

**A ∩ B = ∅**

### Alcuni A sono B

**A ∩ B ≠ ∅**

Questa rappresentazione sarà utile anche in matematica.

---

# Sillogismi → relazioni transitive

La struttura:

**A ⊆ B**

**B ⊆ C**

↓

**A ⊆ C**

utilizza una forma di transitività.

È analoga a:

> Anna è più alta di Beatrice.

> Beatrice è più alta di Carla.

> quindi Anna è più alta di Carla.

---

# Sillogismi → implicazioni

La frase:

> Tutti gli A sono B

può essere interpretata individualmente come:

> Se qualcosa è A, allora è B.

Per esempio:

> Tutti i quadrati sono quadrilateri.

equivale a:

> Se una figura è un quadrato, allora è un quadrilatero.

I sillogismi categorici e le implicazioni sono quindi fortemente collegati.

---

# Sillogismi → problemi logici

Nei problemi con più vincoli potremo trovare contemporaneamente:

-  inclusioni; 
-  esclusioni; 
-  appartenenze; 
-  ordinamenti; 
-  implicazioni. 

La capacità di concatenare correttamente le informazioni sarà quindi fondamentale.

---

# 8. Cosa devo memorizzare

## Definizioni fondamentali

**Sillogismo:** ragionamento deduttivo che ricava una conclusione da premesse logicamente collegate.

**Premessa maggiore:** premessa contenente il termine maggiore.

**Premessa minore:** premessa contenente il termine minore.

**Termine medio:** termine che collega le premesse e non compare normalmente nella conclusione.

**Termine maggiore:** predicato della conclusione.

**Termine minore:** soggetto della conclusione.

---

## Quattro proposizioni fondamentali

**Tutti A sono B**
 → universale affermativa.

**Nessun A è B**
 → universale negativa.

**Alcuni A sono B**
 → particolare affermativa.

**Alcuni A non sono B**
 → particolare negativa.

---

## Deduzioni fondamentali

### Inclusione

**Tutti A sono B**

**Tutti B sono C**

→ **Tutti A sono C**

---

### Inclusione ed esclusione

**Tutti A sono B**

**Nessun B è C**

→ **Nessun A è C**

---

### Particolare e universale

**Alcuni A sono B**

**Tutti B sono C**

→ **Alcuni A sono C**

---

### Particolare ed esclusione

**Alcuni A sono B**

**Nessun B è C**

→ **Alcuni A non sono C**

---

## Regole fondamentali

Da:

> Tutti A sono B

**non** segue:

> Tutti B sono A.

Da:

> Alcuni A sono B

segue invece:

> Alcuni B sono A.

Da:

> Alcuni A sono B
>  Alcuni B sono C

**non segue necessariamente:**

> Alcuni A sono C.

---

## Sillogismo ipotetico

**A → B**

**B → C**

→ **A → C**

---

## Sillogismo disgiuntivo

**A oppure B**

**¬A**

→ **B**

---

## Parole chiave

**Sillogismo – premessa – conclusione – termine maggiore – termine minore – termine medio – universale – particolare – inclusione – esclusione – intersezione – sillogismo categorico – sillogismo ipotetico – sillogismo disgiuntivo.**

---

## Differenze da ricordare

**Tutti A sono B ≠ tutti B sono A**

**Alcuni ≠ tutti**

**Alcuni ≠ individuo determinato**

**Due "alcuni" ≠ necessariamente gli stessi elementi**

**Categoria comune ≠ rapporto certo tra due sottocategorie**

**Conclusione possibile ≠ conclusione necessaria**

**Verità delle premesse ≠ validità della struttura**

**Sillogismo categorico ≠ sillogismo ipotetico**