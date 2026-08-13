# Sezione 9 — Logica: Problemi logici con vincoli e più condizioni — Parte 1 di 2

Questa sezione affronta i **problemi logici costruiti mediante più informazioni contemporanee**, nei quali non basta applicare una singola deduzione: bisogna combinare diversi **vincoli**, capire quali conseguenze producono e distinguere ciò che è **obbligatorio**, ciò che è soltanto **possibile** e ciò che è **impossibile**.

Come previsto dalle istruzioni di studio, gli esempi servono esclusivamente a spiegare la teoria e non sono esercizi da risolvere. 

In questa prima parte studieremo:

-  che cos'è un vincolo; 
-  vincoli assoluti e relativi; 
-  vincoli positivi e negativi; 
-  compatibilità tra condizioni; 
-  combinazione di più vincoli; 
-  conseguenze dirette e indirette; 
-  configurazioni possibili; 
-  esclusioni; 
-  assegnazioni; 
-  relazioni uno-a-uno; 
-  posizioni e gruppi. 

---

# 1. Introduzione

Un problema logico può fornire informazioni come:

> Anna arriva prima di Luca.

> Marco arriva dopo Luca.

> Giulia non arriva per ultima.

Preso singolarmente, ogni vincolo è semplice.

Il vero ragionamento nasce quando le informazioni vengono **combinate**.

Dalle prime due, per esempio, possiamo costruire:

**Anna → Luca → Marco**

e quindi dedurre anche:

> Anna arriva prima di Marco.

Questa terza informazione non era scritta direttamente, ma deriva dai vincoli iniziali.

Nei problemi con più condizioni dobbiamo quindi distinguere:

1. **informazioni esplicite**; 
2. **conseguenze necessarie**; 
3. **possibilità compatibili**; 
4. **situazioni impossibili**. 

La logica consiste soprattutto nel capire quali configurazioni rispettano **tutti i vincoli contemporaneamente**.

---

# 2. Teoria

# 2.1 Che cos'è un vincolo logico

Un **vincolo** è una condizione che limita le configurazioni possibili.

Consideriamo quattro persone:

> Anna, Bruno, Carla, Diego.

Senza altre informazioni possono essere ordinate in molti modi.

Se aggiungiamo:

> Anna deve arrivare prima di Bruno,

eliminiamo tutte le disposizioni in cui Bruno precede Anna.

Il vincolo non determina necessariamente l'intero ordine, ma **riduce l'insieme delle possibilità**.

---

# 2.2 Vincolo come restrizione

Possiamo pensare inizialmente a un insieme di configurazioni:

**tutte le possibilità**

Ogni nuovo vincolo elimina quelle incompatibili.

Schema:

**possibilità iniziali**

↓

vincolo 1

↓

**meno possibilità**

↓

vincolo 2

↓

**ancora meno possibilità**

↓

vincolo 3

↓

**configurazioni compatibili finali**

Un problema può condurre:

-  a una sola configurazione; 
-  a più configurazioni; 
-  a nessuna configurazione, se i vincoli sono contraddittori. 

---

# 2.3 Vincoli assoluti

Un **vincolo assoluto** assegna direttamente una caratteristica o una posizione.

Esempi:

> Marco è primo.

> Anna appartiene al gruppo A.

> Luca sceglie matematica.

> Carla vive a Roma.

L'informazione non dipende direttamente dalla posizione di un altro elemento.

---

# 2.4 Vincoli relativi

Un **vincolo relativo** stabilisce un rapporto tra almeno due elementi.

Esempi:

> Anna è prima di Luca.

> Marco è più alto di Paolo.

> Giulia lavora nello stesso gruppo di Anna.

> Bruno non siede accanto a Carla.

La posizione o caratteristica di un elemento viene descritta in relazione a un altro.

---

# 2.5 Vincoli positivi

Un vincolo **positivo** afferma ciò che deve verificarsi.

Esempi:

> Anna è nel gruppo rosso.

> Marco viene prima di Luca.

> Giulia siede accanto a Paolo.

Il vincolo assegna direttamente una relazione o proprietà.

---

# 2.6 Vincoli negativi

Un vincolo **negativo** indica ciò che non può verificarsi.

Esempi:

> Anna non è nel gruppo rosso.

> Marco non è primo.

> Luca non è accanto a Giulia.

Un vincolo negativo può essere meno informativo di uno positivo, ma restringe comunque le possibilità.

---

# 2.7 Vincolo diretto

Un **vincolo diretto** è espresso esplicitamente.

Esempio:

> A è prima di B.

Non richiede alcuna deduzione per essere conosciuto.

---

# 2.8 Conseguenza indiretta

Una **conseguenza indiretta** deriva dalla combinazione dei vincoli.

Esempio:

> A è prima di B.

> B è prima di C.

Possiamo dedurre:

> A è prima di C.

Quest'ultima informazione non è dichiarata direttamente.

È una conseguenza necessaria della transitività.

---

# 2.9 Vincoli indipendenti

Due vincoli possono riguardare elementi completamente differenti.

Per esempio:

> Anna è prima di Luca.

> Marco appartiene al gruppo blu.

Nessuna delle due informazioni produce automaticamente conseguenze sull'altra.

Sono, almeno inizialmente, **indipendenti**.

---

# 2.10 Vincoli collegati

Al contrario:

> Anna è prima di Luca.

> Luca è prima di Marco.

condividono l'elemento:

> Luca.

Possono quindi essere concatenati.

Il risultato:

**Anna → Luca → Marco**

produce nuova informazione.

---

# 2.11 Compatibilità

Due o più vincoli sono **compatibili** se possono essere veri contemporaneamente.

Esempio:

> Anna è prima di Luca.

> Marco è dopo Luca.

Sono compatibili.

Una disposizione possibile è:

**Anna → Luca → Marco**

---

# 2.12 Incompatibilità

Due vincoli sono incompatibili se non possono essere rispettati contemporaneamente.

Esempio:

> Anna è prima di Luca.

> Luca è prima di Anna.

Se parliamo di una classifica lineare senza parità, le due condizioni sono incompatibili.

Non esiste una disposizione che le soddisfi entrambe.

---

# 2.13 Contraddizione diretta

Una contraddizione può essere evidente:

> Marco è primo.

> Marco non è primo.

Oppure:

> Anna appartiene esclusivamente al gruppo A.

> Anna appartiene esclusivamente al gruppo B.

se è stabilito che ogni persona può appartenere a un solo gruppo.

---

# 2.14 Contraddizione indiretta

Talvolta la contraddizione emerge soltanto combinando più informazioni.

Supponiamo:

> A è prima di B.

> B è prima di C.

> C è prima di A.

Dalle prime due otteniamo:

> A è prima di C.

Ma la terza afferma:

> C è prima di A.

In un ordine lineare queste condizioni formano un ciclo impossibile:

**A → B → C → A**

---

# 2.15 Informazione necessaria

Un'informazione è **necessaria** quando risulta vera in ogni configurazione che rispetta tutti i vincoli.

Esempio:

> Anna è prima di Luca.

> Luca è prima di Marco.

In qualsiasi disposizione compatibile:

> Anna è prima di Marco.

Questa conseguenza è necessaria.

---

# 2.16 Informazione possibile

Una situazione è **possibile** quando almeno una configurazione compatibile con tutti i vincoli la contiene.

Supponiamo:

> Anna è prima di Luca.

Con tre persone:

-  Anna; 
-  Luca; 
-  Marco. 

Sono possibili, tra le altre:

**Anna → Luca → Marco**

oppure:

**Marco → Anna → Luca**

Quindi:

> Marco prima di Anna

è possibile.

Ma non necessario.

---

# 2.17 Informazione impossibile

È **impossibile** una configurazione che viola almeno un vincolo.

Con:

> Anna è prima di Luca,

la disposizione:

**Luca → Anna → Marco**

è impossibile.

La ragione non è probabilistica: contraddice direttamente una condizione.

---

# 2.18 Determinato e indeterminato

Un elemento è **determinato** quando i vincoli obbligano una sola posizione o proprietà.

Esempio:

> In una fila di tre persone, Marco è secondo.

La posizione di Marco è determinata.

Un'informazione è invece **indeterminata** quando rimangono più possibilità.

> Anna è prima di Luca.

Non sappiamo automaticamente la posizione precisa di Anna.

---

# 2.19 Più vincoli possono determinare un'informazione

Consideriamo tre persone:

-  Anna; 
-  Luca; 
-  Marco. 

Vincoli:

> Anna è prima di Luca.

> Marco è prima di Anna.

Otteniamo necessariamente:

**Marco → Anna → Luca**

Ora tutte le posizioni sono determinate.

Ogni vincolo singolarmente lasciava diverse possibilità, ma la loro combinazione produce un unico ordine.

---

# 2.20 Ridondanza

Un vincolo è **ridondante** quando non aggiunge nuova informazione perché è già conseguenza degli altri.

Esempio:

> A è prima di B.

> B è prima di C.

> A è prima di C.

La terza informazione è già deducibile dalle prime due.

Non modifica le configurazioni compatibili.

---

# 2.21 Vincolo indipendente e vincolo ridondante

Non sono la stessa cosa.

### Indipendente

Aggiunge informazione nuova non ricavabile dagli altri.

### Ridondante

Ripete, direttamente o indirettamente, qualcosa che sappiamo già.

Esempio:

> A < B
>  B < C
>  A < C

Il terzo vincolo è ridondante.

---

# 2.22 Vincoli di posizione

Questi vincoli riguardano un ordinamento.

Esempi:

> A è primo.

> B è dopo C.

> D è immediatamente prima di E.

> F non è ultimo.

> G è due posti dopo H.

La loro interpretazione dipende dalla struttura dell'ordinamento.

---

# 2.23 Posizione esatta

> Marco è terzo.

Questo assegna una posizione unica.

Se esistono cinque posti:

**1 — 2 — Marco — 4 — 5**

---

# 2.24 Precedenza

> Anna è prima di Marco.

Significa soltanto:

**posizione Anna < posizione Marco**

Non stabilisce quanti elementi si trovino tra loro.

---

# 2.25 Successione immediata

> Anna è immediatamente prima di Marco.

Significa che le posizioni sono consecutive.

Possibili:

**Anna — Marco**

Non possibile:

**Anna — Luca — Marco**

---

# 2.26 Adiacenza senza direzione

> Anna è accanto a Marco.

Significa che devono occupare due posizioni consecutive, ma non stabilisce automaticamente l'ordine.

Possiamo avere:

**Anna — Marco**

oppure:

**Marco — Anna**

---

# 2.27 Non adiacenza

> Anna non è accanto a Marco.

Richiede almeno una posizione intermedia, se entrambi sono nella stessa fila lineare.

Per esempio:

**Anna — Luca — Marco**

è compatibile.

---

# 2.28 Vincoli di distanza

Un vincolo può stabilire la distanza relativa.

> Anna è due posti prima di Marco.

Se Anna è in posizione 2:

> Marco è in posizione 4.

Differenza:

**4 − 2 = 2**

---

# 2.29 Numero di elementi intermedi

Diverso è dire:

> Tra Anna e Marco ci sono due persone.

La struttura deve essere:

**Anna — X — Y — Marco**

oppure:

**Marco — X — Y — Anna**

La differenza tra le loro posizioni è quindi 3.

---

# 2.30 Vincoli di estremità

Esempi:

> Marco è primo.

> Anna è ultima.

> Luca non può essere né primo né ultimo.

L'ultimo vincolo obbliga Luca a una delle posizioni interne.

Se ci sono cinque posti:

> Luca ∈ {2, 3, 4}

---

# 2.31 Vincoli di gruppo

Non tutti i problemi riguardano un ordine.

Possiamo dover distribuire persone tra gruppi.

Esempio:

> Anna appartiene al gruppo A.

> Luca non appartiene al gruppo A.

> Marco deve stare nello stesso gruppo di Anna.

> Giulia deve stare in un gruppo diverso da Luca.

Qui le relazioni fondamentali sono:

-  appartenenza; 
-  esclusione; 
-  uguaglianza di gruppo; 
-  differenza di gruppo. 

---

# 2.32 Stesso gruppo

Se:

> Anna e Luca sono nello stesso gruppo

e:

> Luca e Marco sono nello stesso gruppo,

allora:

> Anna e Marco sono nello stesso gruppo.

La relazione "essere nello stesso gruppo" è normalmente transitiva.

---

# 2.33 Gruppo diverso

Se:

> Anna è in un gruppo diverso da Luca,

la relazione è simmetrica:

> Luca è in un gruppo diverso da Anna.

Ma non sempre è transitiva.

Supponiamo che esistano due gruppi:

> A e B.

Se:

> Anna è diversa da Luca

e:

> Luca è diversa da Marco,

Anna e Marco potrebbero trovarsi nello **stesso gruppo**.

Per esempio:

-  Anna → A; 
-  Luca → B; 
-  Marco → A. 

Quindi:

> "gruppo diverso da" non è transitivo.

---

# 2.34 Vincoli di appartenenza esclusiva

In molti sistemi ogni elemento può ricevere una sola categoria.

Per esempio:

> Ogni studente sceglie una sola materia.

Se sappiamo:

> Marco sceglie matematica,

allora sono automaticamente escluse per Marco tutte le altre materie previste dal sistema.

Questa conseguenza dipende dalla regola generale:

> **una sola scelta per persona.**

---

# 2.35 Vincoli di unicità

Un vincolo di **unicità** stabilisce che una proprietà può appartenere a un solo elemento.

Esempio:

> Ogni ruolo è assegnato a una sola persona.

Se:

> Anna è presidente,

nessun'altra persona può essere presidente.

Questa conseguenza deriva dall'unicità, non semplicemente dalla frase "Anna è presidente".

---

# 2.36 Relazione uno-a-uno

Una corrispondenza **uno-a-uno** stabilisce che:

-  ogni elemento del primo gruppo riceve una sola proprietà; 
-  ogni proprietà viene assegnata a un solo elemento. 

Esempio:

Tre persone:

-  Anna; 
-  Luca; 
-  Marco. 

Tre città:

-  Roma; 
-  Milano; 
-  Torino. 

Se ognuno vive in una città diversa, assegnare:

> Anna → Roma

elimina Roma dalle possibilità di:

-  Luca; 
-  Marco. 

---

# 2.37 Esclusione per assegnazione

Supponiamo una corrispondenza uno-a-uno:

> Anna → Roma.

> Luca → Milano.

Con tre città:

-  Roma; 
-  Milano; 
-  Torino; 

rimane necessariamente:

> Marco → Torino.

Questa è una deduzione per **eliminazione delle alternative**.

---

# 2.38 Dominio delle possibilità

Per ogni elemento possiamo immaginare un insieme di possibilità iniziali.

Per esempio:

**Anna:** Roma / Milano / Torino

**Luca:** Roma / Milano / Torino

**Marco:** Roma / Milano / Torino

Se sappiamo:

> Anna non vive a Roma,

il dominio di Anna diventa:

**Milano / Torino**

Un vincolo restringe quindi il **dominio delle possibilità**.

---

# 2.39 Propagazione del vincolo

In una relazione uno-a-uno, un'assegnazione può modificare anche le possibilità degli altri.

Se:

> Anna → Milano,

Milano viene eliminata dai domini degli altri.

Prima:

**Luca:** Roma / Milano / Torino

Dopo:

**Luca:** Roma / Torino

Questo processo prende il nome, in senso generale, di **propagazione dei vincoli**.

---

# 2.40 Vincoli condizionali

Un problema può contenere condizioni del tipo:

> Se Anna è nel gruppo A, allora Luca è nel gruppo B.

La struttura è un'implicazione:

**Anna A → Luca B**

Si applicano quindi le regole già studiate.

---

# 2.41 Conseguenza di un vincolo condizionale

Se:

> Se Anna è nel gruppo A, Luca è nel gruppo B.

e sappiamo:

> Anna è nel gruppo A,

allora:

> Luca è nel gruppo B.

È un **modus ponens**.

---

# 2.42 Contrapposta in un sistema di vincoli

Dalla stessa regola:

> Se Anna è in A, Luca è in B.

possiamo utilizzare la contrapposta:

> Se Luca non è in B, Anna non è in A.

Questo permette di propagare informazioni anche in direzione inversa, ma soltanto attraverso la **contrapposta**, non attraverso la conversa.

---

# 2.43 Vincolo bicondizionale

Una regola può essere:

> Anna è nel gruppo A **se e solo se** Luca è nel gruppo B.

Significa:

**Anna A → Luca B**

e:

**Luca B → Anna A**

La relazione funziona in entrambe le direzioni.

---

# 2.44 Vincoli disgiuntivi

Un vincolo può contenere un'alternativa:

> Anna è a Roma oppure a Milano.

Questo elimina:

> Torino,

ma non determina ancora quale delle prime due possibilità sia corretta.

---

# 2.45 Esclusione di una possibilità

Se sappiamo:

> Anna è a Roma oppure a Milano.

e:

> Anna non è a Roma,

allora segue:

> Anna è a Milano.

È la struttura del **sillogismo disgiuntivo**.

---

# 2.46 Disgiunzione esclusiva

In alcuni sistemi:

> Anna o Luca è presidente, ma non entrambi.

La condizione significa:

-  almeno uno dei due è presidente; 
-  non possono esserlo entrambi. 

Se scopriamo:

> Anna è presidente,

segue:

> Luca non è presidente.

---

# 2.47 Vincoli numerici

Alcuni vincoli stabiliscono quantità.

Esempi:

> Esattamente due persone appartengono al gruppo A.

> Almeno tre studenti scelgono matematica.

> Al massimo una persona può essere presidente.

Queste espressioni hanno significati differenti.

---

# 2.48 "Esattamente"

> Esattamente due persone sono nel gruppo A.

Significa contemporaneamente:

-  almeno due; 
-  non più di due. 

Quindi il numero deve essere:

> **2**

---

# 2.49 "Almeno"

> Almeno due persone sono nel gruppo A.

Significa:

> 2 o più.

Con cinque persone, sono possibili:

> 2, 3, 4 oppure 5.

---

# 2.50 "Al massimo"

> Al massimo due persone sono nel gruppo A.

Significa:

> non più di 2.

Sono quindi possibili:

> 0, 1 oppure 2,

salvo ulteriori condizioni.

---

# 2.51 Almeno ≠ esattamente

> Almeno tre

non significa:

> esattamente tre.

Può significare:

-  3; 
-  4; 
-  5; 
-  ecc. 

Questa distinzione è essenziale quando più vincoli numerici vengono combinati.

---

# 2.52 Al massimo ≠ almeno

### Almeno 2

**numero ≥ 2**

### Al massimo 2

**numero ≤ 2**

Sono direzioni opposte.

---

# 2.53 Combinazione di limite minimo e massimo

Se abbiamo:

> almeno 2

e:

> al massimo 2,

l'unica possibilità è:

> esattamente 2.

Formalmente:

**x ≥ 2**

e

**x ≤ 2**

↓

**x = 2**

---

# 2.54 Vincoli di esclusione reciproca

Due proprietà possono essere dichiarate incompatibili.

> Nessuna persona può appartenere contemporaneamente ai gruppi A e B.

Se:

> Marco è in A,

allora segue:

> Marco non è in B.

---

# 2.55 Vincoli di dipendenza

Una proprietà può richiederne un'altra.

> Chi partecipa al corso avanzato deve aver completato il corso base.

Questo significa:

**avanzato → base completato**

Quindi:

> completamento del corso base

è una condizione necessaria per:

> partecipare all'avanzato.

---

# 2.56 Vincoli multipli su uno stesso elemento

Un elemento può essere ristretto da diverse informazioni.

Per esempio:

> Marco non è primo.

> Marco viene prima di Luca.

> Marco viene dopo Anna.

Con quattro posizioni sappiamo che Marco:

-  non può essere primo; 
-  deve essere dopo Anna; 
-  deve essere prima di Luca. 

Le condizioni si sovrappongono e riducono le posizioni compatibili.

---

# 2.57 Intersezione dei vincoli

Possiamo pensare a ogni vincolo come a un insieme di possibilità consentite.

La soluzione deve appartenere all'**intersezione** di tutti questi insiemi.

Se:

> vincolo A permette {1,2,3}

e:

> vincolo B permette {2,3,4},

le possibilità compatibili con entrambi sono:

> **{2,3}**

L'idea matematica dell'intersezione descrive bene il funzionamento dei problemi con vincoli.

---

# 2.58 Sistema consistente

Un sistema di vincoli è **consistente** quando esiste almeno una configurazione che li soddisfa tutti.

---

# 2.59 Sistema inconsistente

È **inconsistente** quando nessuna configurazione può soddisfare tutti i vincoli.

Esempio:

> Marco è primo.

> Marco è secondo.

se ogni persona può occupare una sola posizione.

Il sistema contiene una contraddizione.

---

# 2.60 Soluzione unica

Un sistema ha **soluzione unica** quando esiste una sola configurazione compatibile.

Esempio con tre persone:

> A prima di B.

> B prima di C.

Otteniamo necessariamente:

**A → B → C**

---

# 2.61 Soluzioni multiple

Se abbiamo soltanto:

> A prima di B

con tre persone A, B e C, possiamo avere:

**A → B → C**

**A → C → B**

**C → A → B**

Quindi il sistema non determina un unico ordine.

---

# 3. Concetti fondamentali

## Vincolo

Condizione che restringe l'insieme delle configurazioni possibili.

---

## Vincolo assoluto

Assegna direttamente una proprietà o posizione.

> A è primo.

---

## Vincolo relativo

Stabilisce un rapporto.

> A è prima di B.

---

## Vincolo positivo

Indica ciò che deve essere vero.

---

## Vincolo negativo

Indica ciò che non può essere vero.

---

## Conseguenza diretta

Informazione espressa esplicitamente.

---

## Conseguenza indiretta

Informazione ricavata combinando più vincoli.

---

## Compatibilità

Possibilità che più condizioni siano vere contemporaneamente.

---

## Incompatibilità

Impossibilità che più condizioni siano vere contemporaneamente.

---

## Configurazione

Una specifica assegnazione o disposizione degli elementi.

---

## Dominio

Insieme delle possibilità ancora disponibili per un elemento.

---

## Propagazione dei vincoli

Riduzione delle possibilità di altri elementi causata dall'applicazione di un vincolo.

---

## Sistema consistente

Sistema che ammette almeno una configurazione valida.

---

## Sistema inconsistente

Sistema che non ammette alcuna configurazione valida.

---

# 4. Regole, classificazioni e caratteristiche

## Tipi fondamentali di vincolo

### Assoluto

> A = posizione 1.

### Relativo

> A prima di B.

### Positivo

> A appartiene al gruppo X.

### Negativo

> A non appartiene al gruppo X.

### Condizionale

> Se A, allora B.

### Disgiuntivo

> A oppure B.

### Numerico

> almeno / al massimo / esattamente N.

---

# Conseguenze logiche

### Necessaria

Vera in **tutte** le configurazioni compatibili.

### Possibile

Vera in **almeno una** configurazione compatibile.

### Impossibile

Vera in **nessuna** configurazione compatibile.

---

# Quantificatori numerici

**Esattamente N**

→ numero = N.

**Almeno N**

→ numero ≥ N.

**Al massimo N**

→ numero ≤ N.

---

# Vincoli condizionali

**A → B**

Da A segue B.

Da ¬B segue ¬A.

Non possiamo ricavare automaticamente:

**B → A**

o:

**¬A → ¬B**

---

# Relazioni uno-a-uno

Se ogni proprietà viene assegnata una sola volta:

> A → X

elimina X dalle possibilità di tutti gli altri elementi.

---

# 5. Esempi per comprendere la teoria

## Esempio 1 — Combinazione di precedenze

> Anna è prima di Luca.

> Luca è prima di Marco.

Otteniamo:

**Anna → Luca → Marco**

La conseguenza:

> Anna è prima di Marco

è indiretta ma necessaria.

---

## Esempio 2 — Configurazione non completamente determinata

> Anna è prima di Luca.

> Marco è dopo Anna.

Sono compatibili:

**Anna → Luca → Marco**

e:

**Anna → Marco → Luca**

Quindi il rapporto tra Luca e Marco rimane indeterminato.

---

## Esempio 3 — Contraddizione indiretta

> A è prima di B.

> B è prima di C.

> C è prima di A.

Le prime due producono:

> A è prima di C.

La terza produce il contrario.

Non esiste un ordine lineare compatibile.

---

## Esempio 4 — Corrispondenza uno-a-uno

Persone:

-  Anna; 
-  Luca; 
-  Marco. 

Città:

-  Roma; 
-  Milano; 
-  Torino. 

Se:

> Anna vive a Roma.

> Luca vive a Milano.

e ogni persona vive in una città differente, allora:

> Marco vive a Torino.

L'ultima assegnazione deriva dall'esclusione delle possibilità già utilizzate.

---

## Esempio 5 — Stesso gruppo

> Anna è nello stesso gruppo di Luca.

> Luca è nello stesso gruppo di Marco.

Ne segue:

> Anna è nello stesso gruppo di Marco.

La relazione è transitiva.

---

## Esempio 6 — Gruppo diverso

> Anna è in un gruppo diverso da Luca.

> Luca è in un gruppo diverso da Marco.

Non segue:

> Anna è in un gruppo diverso da Marco.

Con due gruppi potremmo avere:

> Anna = A
>  Luca = B
>  Marco = A.

---

## Esempio 7 — Vincolo condizionale

> Se Anna sceglie matematica, Luca sceglie fisica.

> Anna sceglie matematica.

Quindi:

> Luca sceglie fisica.

La deduzione è un modus ponens.

---

## Esempio 8 — Contrapposta

> Se Anna sceglie matematica, Luca sceglie fisica.

> Luca non sceglie fisica.

Quindi:

> Anna non sceglie matematica.

È l'applicazione della contrapposta.

---

## Esempio 9 — Quantità

> Almeno tre studenti scelgono biologia.

Con cinque studenti, sono compatibili:

-  3; 
-  4; 
-  5 

studenti che scelgono biologia.

Il numero non è necessariamente tre.

---

## Esempio 10 — Minimo e massimo

> Almeno due persone sono nel gruppo A.

> Al massimo due persone sono nel gruppo A.

Insieme, le due condizioni obbligano:

> esattamente due persone nel gruppo A.

---

# 6. Concetti da non confondere

# Vincolo assoluto ≠ relativo

### Assoluto

> A è secondo.

### Relativo

> A è prima di B.

Il primo assegna una posizione precisa; il secondo stabilisce soltanto un rapporto.

---

# Vincolo diretto ≠ conseguenza indiretta

### Diretto

È scritto nelle premesse.

### Indiretto

Viene dedotto combinando informazioni.

---

# Possibile ≠ necessario

### Possibile

Compare in almeno una configurazione valida.

### Necessario

Compare in tutte le configurazioni valide.

---

# Indeterminato ≠ impossibile

Se non possiamo stabilire una posizione, non significa che quella posizione sia impossibile.

Può semplicemente esserci più di una configurazione valida.

---

# Contraddizione ≠ mancanza di informazione

### Contraddizione

Nessuna configurazione è possibile.

### Informazione insufficiente

Più configurazioni sono possibili.

Sono situazioni opposte.

---

# Stesso gruppo ≠ gruppo diverso

"Stesso gruppo" è normalmente transitivo:

> A stesso B; B stesso C → A stesso C.

"Diverso da" non è necessariamente transitivo.

---

# Prima di ≠ immediatamente prima di

> A prima di B

consente elementi intermedi.

> A immediatamente prima di B

non li consente.

---

# Due posti di distanza ≠ due elementi in mezzo

Differenza di due posizioni:

**A — X — B**

Due elementi in mezzo:

**A — X — Y — B**

---

# Almeno ≠ esattamente

**Almeno 3** = 3 o più.

**Esattamente 3** = soltanto 3.

---

# Al massimo ≠ almeno

**Al massimo 3** = ≤ 3.

**Almeno 3** = ≥ 3.

---

# Vincolo condizionale ≠ equivalenza

> Se A, allora B

non significa:

> A se e solo se B.

L'implicazione ha una sola direzione.

---

# Soluzione multipla ≠ sistema inconsistente

### Soluzioni multiple

Esistono più configurazioni valide.

### Sistema inconsistente

Non ne esiste nessuna.

---

# 7. Collegamenti importanti

# Vincoli → deduzione

Ogni problema con più condizioni utilizza le strutture già studiate:

-  transitività; 
-  implicazioni; 
-  contrapposizione; 
-  negazioni; 
-  esclusioni. 

La teoria dei vincoli non sostituisce la deduzione: ne rappresenta un'applicazione combinata.

---

# Vincoli → relazioni e ordinamenti

Molti problemi utilizzano:

> prima / dopo

> sopra / sotto

> più alto / più basso

> accanto

> stessa posizione relativa.

Per questo la sezione precedente sulle relazioni costituisce una base diretta.

---

# Vincoli → sillogismi

Un vincolo del tipo:

> Tutti gli A sono B

può essere combinato con:

> X è A

per ricavare:

> X è B.

All'interno di un sistema più grande, molti piccoli sillogismi possono concatenarsi.

---

# Vincoli → implicazioni

Una regola:

> Se A, allora B

può essere integrata con altre condizioni:

> B → C

ottenendo:

> A → C.

La propagazione delle condizioni utilizza quindi le stesse regole delle implicazioni.

---

# Vincoli → insiemi

Quando assegniamo persone a gruppi, lavoriamo implicitamente con:

-  appartenenza; 
-  esclusione; 
-  intersezione; 
-  cardinalità. 

Questi concetti saranno utili anche in matematica e probabilità.

---

# Vincoli → problemi a più condizioni

Questa prima parte fornisce il linguaggio generale.

Nella seconda vedremo più in profondità come funzionano strutture composte da:

-  più implicazioni; 
-  alternative; 
-  incompatibilità; 
-  assegnazioni simultanee; 
-  condizioni dipendenti; 
-  vincoli numerici combinati; 
-  casi in cui l'informazione viene propagata attraverso più passaggi. 

---

# 8. Cosa devo memorizzare

## Definizioni fondamentali

**Vincolo:** condizione che limita le configurazioni possibili.

**Configurazione:** specifica disposizione o assegnazione degli elementi.

**Vincolo assoluto:** assegna una proprietà precisa.

**Vincolo relativo:** stabilisce un rapporto tra elementi.

**Compatibilità:** possibilità di soddisfare contemporaneamente più vincoli.

**Incompatibilità:** impossibilità di soddisfarli contemporaneamente.

**Dominio:** insieme delle possibilità disponibili per un elemento.

**Propagazione:** riduzione delle possibilità conseguente all'applicazione dei vincoli.

**Sistema consistente:** possiede almeno una configurazione valida.

**Sistema inconsistente:** non ne possiede nessuna.

---

## Classificazione fondamentale

**Vincolo positivo** → ciò che deve verificarsi.

**Vincolo negativo** → ciò che non deve verificarsi.

**Vincolo assoluto** → posizione/proprietà precisa.

**Vincolo relativo** → relazione tra elementi.

**Vincolo condizionale** → se A allora B.

**Vincolo disgiuntivo** → A oppure B.

**Vincolo numerico** → almeno, al massimo, esattamente.

---

## Necessario, possibile, impossibile

**Necessario**

→ vero in tutte le configurazioni valide.

**Possibile**

→ vero in almeno una configurazione valida.

**Impossibile**

→ vero in nessuna configurazione valida.

---

## Quantità

**Esattamente N** → = N.

**Almeno N** → ≥ N.

**Al massimo N** → ≤ N.

---

## Relazione uno-a-uno

Se una proprietà può essere assegnata a una sola persona:

> assegnarla a X

significa:

> eliminarla dalle possibilità degli altri.

---

## Regole da ricordare

**A prima di B + B prima di C → A prima di C.**

**A stesso gruppo di B + B stesso gruppo di C → A stesso gruppo di C.**

**A gruppo diverso da B + B gruppo diverso da C**
 non implica necessariamente
 **A gruppo diverso da C.**

**A → B + A → B.**

**A → B + ¬B → ¬A.**

---

## Parole chiave

**Vincolo – configurazione – compatibilità – incompatibilità – conseguenza diretta – conseguenza indiretta – dominio – propagazione – assegnazione – esclusione – uno-a-uno – precedenza – adiacenza – condizione – disgiunzione – almeno – al massimo – esattamente – consistenza.**

---

## Differenze da ricordare

**Vincolo assoluto ≠ vincolo relativo**

**Vincolo diretto ≠ conseguenza indiretta**

**Possibile ≠ necessario**

**Indeterminato ≠ impossibile**

**Contraddizione ≠ informazione insufficiente**

**Stesso gruppo ≠ gruppo diverso**

**Prima di ≠ immediatamente prima di**

**Due posti di distanza ≠ due elementi in mezzo**

**Almeno ≠ esattamente**

**Al massimo ≠ almeno**

**Implicazione ≠ equivalenza**

**Soluzioni multiple ≠ sistema inconsistente**