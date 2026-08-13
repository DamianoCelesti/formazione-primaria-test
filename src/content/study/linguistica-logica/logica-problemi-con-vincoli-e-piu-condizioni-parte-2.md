# Sezione 9 — Logica: Problemi logici con vincoli e più condizioni — Parte 2 di 2

In questa seconda parte completiamo lo studio dei **problemi logici con più condizioni**, concentrandoci sulle strutture in cui diversi vincoli interagiscono tra loro e generano conseguenze che non sono immediatamente espresse. Restiamo sul piano teorico, usando esempi soltanto per mostrare il funzionamento dei concetti. 

---

# 1. Introduzione

Nei sistemi logici più complessi un'informazione può influenzarne un'altra attraverso una catena di conseguenze.

Consideriamo:

> Se Anna partecipa, allora partecipa Luca.
>  Se Luca partecipa, allora partecipa Marco.

Possiamo concatenare le due condizioni:

**Anna → Luca**

**Luca → Marco**

quindi:

**Anna → Marco**

La difficoltà concettuale aumenta quando insieme alle implicazioni troviamo anche:

-  esclusioni; 
-  alternative; 
-  quantità minime o massime; 
-  appartenenze a gruppi; 
-  assegnazioni uniche; 
-  ordini temporali; 
-  incompatibilità; 
-  condizioni del tipo "se e solo se"; 
-  combinazioni del tipo "almeno uno", "esattamente uno", "non entrambi". 

L'obiettivo della logica è determinare che cosa è imposto dall'insieme dei vincoli.

---

# 2. Teoria

# 2.1 Catene di implicazioni

Una serie di implicazioni può essere concatenata.

Se:

**A → B**

e:

**B → C**

allora:

**A → C**

Se aggiungiamo:

**C → D**

otteniamo:

**A → B → C → D**

e quindi:

> A implica anche C e D.

---

# 2.2 Propagazione in avanti

La **propagazione in avanti** parte da una condizione verificata e applica tutte le conseguenze successive.

Esempio:

> Se Marco è nel gruppo A, Luca è nel gruppo B.

> Se Luca è nel gruppo B, Anna è nel gruppo C.

Se sappiamo:

> Marco è nel gruppo A,

allora:

> Luca è nel gruppo B

e successivamente:

> Anna è nel gruppo C.

Schema:

**Marco A**

↓

**Luca B**

↓

**Anna C**

---

# 2.3 Propagazione attraverso la contrapposta

Un'implicazione permette anche di ragionare attraverso la **contrapposta**.

Da:

**A → B**

otteniamo:

**¬B → ¬A**

Esempio:

> Se Marco partecipa, allora Luca partecipa.

Se sappiamo:

> Luca non partecipa,

possiamo concludere:

> Marco non partecipa.

---

# 2.4 Catene di contrappositive

Supponiamo:

**A → B**

**B → C**

Possiamo ricavare:

**¬C → ¬B**

e:

**¬B → ¬A**

quindi:

**¬C → ¬A**

La catena può quindi essere percorsa anche in direzione inversa mediante le contrappositive.

---

# 2.5 Implicazione non significa equivalenza

Se:

> A → B

non possiamo utilizzare automaticamente:

> B → A.

Consideriamo:

> Se Anna è nel gruppo rosso, Luca è nel gruppo blu.

Se scopriamo:

> Luca è nel gruppo blu,

non possiamo stabilire che:

> Anna è nel gruppo rosso.

Luca potrebbe essere nel gruppo blu anche per altri motivi.

---

# 2.6 Bicondizionale

Una relazione più forte è:

> A **se e solo se** B.

Simbolicamente:

**A ↔ B**

Significa contemporaneamente:

**A → B**

e:

**B → A**

In questo caso l'informazione può essere propagata in entrambe le direzioni.

---

# 2.7 Conseguenze del bicondizionale

Da:

**A ↔ B**

possiamo ricavare:

> se A, allora B;

> se B, allora A;

> se non A, allora non B;

> se non B, allora non A.

A e B hanno quindi lo stesso valore logico rispetto alla relazione stabilita.

---

# 2.8 Esempio di bicondizionale

> Marco partecipa se e solo se Anna partecipa.

Significa:

-  Marco partecipa → Anna partecipa; 
-  Anna partecipa → Marco partecipa. 

Di conseguenza:

-  Marco non partecipa → Anna non partecipa; 
-  Anna non partecipa → Marco non partecipa. 

---

# 2.9 Condizione "solo se"

L'espressione **solo se** indica una condizione necessaria.

Consideriamo:

> Marco partecipa **solo se** Anna partecipa.

Significa:

> Se Marco partecipa, allora Anna partecipa.

Schema:

**Marco → Anna**

La partecipazione di Anna è necessaria per quella di Marco.

---

# 2.10 "Se" e "solo se"

Queste due espressioni non hanno lo stesso significato.

### A se B

significa:

> Se B, allora A.

### A solo se B

significa:

> Se A, allora B.

Confrontiamo:

> Marco partecipa **se Anna partecipa**.

**Anna → Marco**

> Marco partecipa **solo se Anna partecipa**.

**Marco → Anna**

---

# 2.11 "Se e solo se"

Quando compaiono entrambe:

> Marco partecipa **se e solo se** Anna partecipa,

otteniamo:

**Marco ↔ Anna**

e quindi entrambe le direzioni.

---

# 2.12 Condizioni congiunte

Un vincolo può richiedere due condizioni contemporaneamente.

> Se Anna e Marco partecipano, allora partecipa Luca.

Formalmente:

**(A ∧ M) → L**

Per ottenere L attraverso questa regola devono essere vere **entrambe** le condizioni.

Sapere soltanto che Anna partecipa non basta.

---

# 2.13 Antecedente congiuntivo

Consideriamo:

> Se Marco possiede il documento A **e** il documento B, può accedere.

Abbiamo:

**A ∧ B → accesso**

Se Marco possiede soltanto A, la condizione completa non è soddisfatta.

Se possiede soltanto B, vale lo stesso.

Devono essere presenti entrambi.

---

# 2.14 Conseguente congiuntivo

Una regola può anche avere più conseguenze.

> Se Marco viene assunto, riceve il badge e l'accesso al sistema.

Schema:

**assunto → badge ∧ accesso**

Se sappiamo che Marco viene assunto, possiamo dedurre separatamente:

> riceve il badge;

e:

> riceve l'accesso.

---

# 2.15 Condizione disgiuntiva nell'antecedente

Consideriamo:

> Se Anna oppure Marco partecipa, allora Luca partecipa.

Nella lettura inclusiva:

**(A ∨ M) → L**

Basta che almeno uno tra Anna e Marco partecipi perché la condizione sia soddisfatta.

Se partecipano entrambi, la condizione rimane comunque soddisfatta.

---

# 2.16 "Almeno uno"

La frase:

> Almeno uno tra A, B e C deve verificarsi.

significa che le configurazioni in cui:

> nessuno dei tre si verifica

sono escluse.

Sono invece possibili:

-  soltanto A; 
-  soltanto B; 
-  soltanto C; 
-  A e B; 
-  A e C; 
-  B e C; 
-  tutti e tre, 

salvo ulteriori vincoli.

---

# 2.17 "Almeno uno" non significa "esattamente uno"

Questa distinzione è fondamentale.

### Almeno uno

Uno **o più**.

### Esattamente uno

Uno soltanto.

Se:

> Esattamente uno tra A e B è vero,

allora sono ammesse:

-  A vero, B falso; 
-  A falso, B vero. 

Non è ammesso:

-  entrambi veri; 
-  entrambi falsi. 

---

# 2.18 "Non entrambi"

Consideriamo:

> Anna e Marco non possono partecipare entrambi.

Questo significa:

> almeno uno dei due deve non partecipare.

Formalmente:

**¬(A ∧ M)**

equivalente a:

**¬A ∨ ¬M**

Sono quindi possibili:

-  Anna sì, Marco no; 
-  Anna no, Marco sì; 
-  entrambi no. 

Non è possibile:

-  entrambi sì. 

---

# 2.19 "Uno dei due, ma non entrambi"

È una condizione più forte:

> Anna o Marco partecipa, ma non entrambi.

Significa:

-  almeno uno partecipa; 
-  non possono partecipare entrambi. 

Quindi **esattamente uno** dei due partecipa.

---

# 2.20 "Almeno uno" e negazione

Negare:

> Almeno uno tra A e B è vero

significa:

> Nessuno dei due è vero.

Formalmente:

**¬(A ∨ B) = ¬A ∧ ¬B**

---

# 2.21 "Tutti" e vincoli multipli

Se:

> Tutti i membri del gruppo A partecipano al corso

e:

> Marco appartiene ad A,

segue:

> Marco partecipa.

Se inoltre:

> Chi partecipa al corso riceve un certificato,

possiamo concatenare:

**Marco ∈ A**

↓

**partecipa**

↓

**certificato**

---

# 2.22 "Nessuno" come esclusione collettiva

Se:

> Nessun membro del gruppo A può appartenere al gruppo B,

abbiamo:

**A ∩ B = ∅**

Se Marco è A:

> Marco non può essere B.

Se scopriamo invece che Marco è B:

> Marco non può essere A.

La relazione di incompatibilità è simmetrica.

---

# 2.23 Incompatibilità tra proprietà

Due proprietà possono essere dichiarate **mutuamente esclusive**.

Per esempio:

> Nessuno può essere contemporaneamente responsabile A e responsabile B.

Allora:

**A → ¬B**

e:

**B → ¬A**

A differenza di una semplice implicazione, l'incompatibilità funziona in entrambe le direzioni.

---

# 2.24 Compatibilità non significa obbligo

Se due proprietà sono compatibili, significa soltanto che **possono** comparire insieme.

Non significa che, se compare una, debba comparire anche l'altra.

Per esempio:

> È possibile appartenere sia al gruppo A sia al gruppo B.

Da:

> Marco appartiene ad A

non segue:

> Marco appartiene a B.

---

# 2.25 Vincoli di esclusività

Un sistema può stabilire:

> Ogni persona appartiene a esattamente uno dei tre gruppi A, B e C.

Questo contiene due condizioni:

1.  ogni persona deve appartenere **almeno a un gruppo**; 
2.  nessuna persona può appartenere **a più di un gruppo**. 

Quindi:

> esattamente uno.

---

# 2.26 Partizione

Quando un insieme viene diviso in gruppi:

-  non sovrapposti; 
-  che nel loro insieme comprendono tutti gli elementi, 

si può parlare di **partizione**.

Per esempio:

> ogni studente appartiene esattamente a una delle classi A, B o C.

Le classi costituiscono una partizione dell'insieme degli studenti considerati.

---

# 2.27 Conseguenze di una partizione

Se:

> Marco appartiene alla classe A,

segue automaticamente:

> Marco non appartiene a B;

> Marco non appartiene a C.

Se sappiamo invece:

> Marco non appartiene ad A né a B,

allora:

> Marco appartiene necessariamente a C.

---

# 2.28 Assegnazioni uno-a-uno

Supponiamo:

-  tre persone; 
-  tre ruoli; 
-  ogni persona ha un ruolo diverso; 
-  ogni ruolo è assegnato a una sola persona. 

Abbiamo una **corrispondenza biunivoca** o uno-a-uno.

Se:

> Anna → ruolo X

e:

> Marco → ruolo Y,

rimane:

> Luca → ruolo Z.

---

# 2.29 Vincoli incrociati

In una corrispondenza uno-a-uno, un'informazione su una persona può generare conseguenze per tutte le altre.

Se:

> Anna non può avere X né Y,

e le possibilità sono:

> X, Y, Z,

allora:

> Anna deve avere Z.

A quel punto Z viene eliminato dalle possibilità degli altri.

Quindi una deduzione produce una seconda ondata di conseguenze.

---

# 2.30 Propagazione iterativa

Questo processo può continuare più volte.

Esempio:

**Persone:** A, B, C.

**Ruoli:** X, Y, Z.

Vincoli:

> A = X.

Ne segue:

> B ≠ X;

> C ≠ X.

Se inoltre:

> B ≠ Y,

allora B può avere soltanto:

> Z.

Quindi:

> B = Z.

Di conseguenza:

> C = Y.

Una singola assegnazione può quindi propagarsi fino a determinare l'intero sistema.

---

# 2.31 Vincoli di cardinalità

La **cardinalità** indica il numero di elementi di un gruppo.

Vincoli tipici:

> esattamente 3 elementi;

> almeno 2 elementi;

> al massimo 4 elementi.

Questi vincoli interagiscono con le assegnazioni individuali.

---

# 2.32 Saturazione di un limite massimo

Supponiamo:

> Al massimo due persone possono appartenere al gruppo A.

Se sappiamo già che:

> Marco ∈ A

e:

> Anna ∈ A,

il gruppo ha raggiunto il massimo consentito.

Di conseguenza ogni altra persona deve essere:

> fuori da A.

---

# 2.33 Raggiungimento di un minimo

Supponiamo:

> Almeno tre persone devono appartenere ad A.

Se in totale ci sono quattro persone e sappiamo che:

> una persona non appartiene ad A,

allora le altre tre devono necessariamente appartenere ad A.

Il limite minimo, combinato con il numero totale degli elementi, può quindi produrre assegnazioni obbligatorie.

---

# 2.34 Esattamente N

Un vincolo:

> Esattamente due persone appartengono ad A

funziona contemporaneamente come:

> almeno due

e:

> al massimo due.

Quando due persone sono già assegnate ad A:

> nessun'altra può entrarvi.

Se tutte tranne due vengono escluse:

> le due rimaste devono appartenervi.

---

# 2.35 Complemento numerico

Se l'insieme totale contiene 5 elementi e:

> esattamente 2 appartengono ad A,

allora:

> esattamente 3 non appartengono ad A.

È una semplice conseguenza quantitativa:

**5 − 2 = 3**

---

# 2.36 Vincoli tra quantità

Un sistema può stabilire:

> Nel gruppo A ci sono più persone che nel gruppo B.

La relazione è:

**|A| > |B|**

dove le barre indicano il numero di elementi del gruppo.

Se sappiamo:

> |B| = 2,

allora:

> A deve contenerne almeno 3.

---

# 2.37 "Più di" e "almeno uno in più"

Con numeri interi:

> A contiene più elementi di B

significa:

> |A| ≥ |B| + 1.

Se B contiene 3 persone:

> A deve contenerne almeno 4.

---

# 2.38 "Il doppio"

Un vincolo può stabilire:

> Il gruppo A contiene il doppio delle persone del gruppo B.

Significa:

**|A| = 2 × |B|**

Se B contiene 2 persone:

> A ne contiene 4.

Questi vincoli combinano logica e aritmetica elementare.

---

# 2.39 Vincoli temporali concatenati

Consideriamo eventi:

> A avviene prima di B.

> C avviene dopo B.

Da queste informazioni segue:

**A → B → C**

e quindi:

> A avviene prima di C.

---

# 2.40 Finestre temporali

Un evento può essere limitato a un insieme di momenti.

Per esempio:

> L'incontro può avvenire lunedì, martedì o mercoledì.

Se:

> non può avvenire lunedì;

> deve avvenire prima di mercoledì,

rimane:

> martedì.

Le condizioni restringono progressivamente il dominio temporale.

---

# 2.41 Vincoli di precedenza multipla

> A deve avvenire prima di B e C.

Significa:

**A < B**

e:

**A < C**

Non stabilisce il rapporto tra:

> B e C.

Potremmo avere:

**A → B → C**

oppure:

**A → C → B**

---

# 2.42 Vincoli "tra"

Supponiamo:

> B è tra A e C.

Se si tratta di un ordine lineare, significa che B deve occupare una posizione intermedia.

Sono compatibili:

**A → B → C**

oppure:

**C → B → A**

L'informazione da sola non stabilisce quale estremità preceda l'altra.

---

# 2.43 "Tra" e orientamento

Se viene aggiunto:

> A viene prima di C,

allora la precedente ambiguità scompare:

**A → B → C**

Il nuovo vincolo determina l'orientamento della sequenza.

---

# 2.44 Vincoli di adiacenza combinati

Se:

> A è accanto a B

e:

> B è accanto a C,

in una fila lineare B può trovarsi al centro:

**A — B — C**

oppure:

**C — B — A**

Ma potrebbe esserci un problema se A e C fossero anche obbligati a essere adiacenti in una fila lineare di tre posti? In tre persone:

> A e C non sono adiacenti perché B si trova in mezzo.

Se invece la disposizione fosse circolare, le proprietà cambierebbero.

Il tipo di struttura spaziale è quindi essenziale.

---

# 2.45 Blocchi

Quando due elementi devono rimanere consecutivi, possono essere considerati concettualmente come un **blocco**.

Se:

> A è immediatamente prima di B,

abbiamo il blocco:

**[A B]**

Il blocco conserva l'ordine interno.

Se invece:

> A è accanto a B

senza indicare l'ordine, possiamo avere:

**[A B]**

oppure:

**[B A]**

---

# 2.46 Blocchi multipli

Se:

> A immediatamente prima di B

e:

> B immediatamente prima di C,

otteniamo necessariamente:

**[A B C]**

Le informazioni si fondono in una singola sequenza consecutiva.

---

# 2.47 Incompatibilità con un blocco

Supponiamo:

> A immediatamente prima di B.

> C deve stare tra A e B.

Le due condizioni sono incompatibili.

"Immediatamente" esclude qualsiasi elemento intermedio.

---

# 2.48 Condizioni opzionali dipendenti

Un vincolo può stabilire:

> Se A non si verifica, allora deve verificarsi B.

Schema:

**¬A → B**

La contrapposta è:

**¬B → A**

Questo non equivale a:

> A → ¬B.

A e B potrebbero anche verificarsi insieme, se non esistono altri vincoli.

---

# 2.49 "A meno che"

L'espressione **a meno che** esprime un'eccezione o una condizione.

Per esempio:

> Marco parteciperà, a meno che sia malato.

Significa in sostanza:

> se Marco non è malato, parteciperà.

Schema semplificato:

**¬malato → partecipa**

Non significa necessariamente, da sola, che:

> se è malato allora certamente non partecipa,

perché la formulazione naturale può lasciare sfumature contestuali. In logica formale occorre tradurre con precisione la relazione effettivamente dichiarata.

---

# 2.50 "A meno che" come disgiunzione

Una struttura:

> A, a meno che B

può spesso essere interpretata logicamente come:

> A oppure B,

nel senso che B rappresenta l'eccezione alla normale realizzazione di A.

La traduzione precisa dipende però dal significato linguistico della frase.

---

# 2.51 Dipendenze circolari

Consideriamo:

> A → B

> B → C

> C → A

Non abbiamo necessariamente una contraddizione.

Abbiamo invece un **ciclo di implicazioni**.

Se A è vero:

> B e C diventano veri.

Se uno dei tre è falso, le contrappositive possono produrre conseguenze sugli altri.

---

# 2.52 Ciclo di implicazioni ≠ ciclo di precedenze

Questo è molto importante.

### Precedenze

> A prima di B
>  B prima di C
>  C prima di A

sono impossibili in un ordine lineare.

### Implicazioni

> A → B
>  B → C
>  C → A

non sono automaticamente contraddittorie.

Descrivono una forte dipendenza reciproca.

Il tipo di relazione determina quindi se un ciclo è possibile o impossibile.

---

# 2.53 Conseguenza universale in un ciclo

Con:

**A → B**

**B → C**

**C → A**

possiamo ricavare:

-  A → B e C; 
-  B → C e A; 
-  C → A e B. 

Se una delle proposizioni è vera, tutte diventano vere.

---

# 2.54 Combinazione di implicazione e incompatibilità

Supponiamo:

> A → B

e:

> A è incompatibile con B.

Se A fosse vero, dovrebbe verificarsi B.

Ma A e B non possono essere contemporaneamente veri.

Quindi:

> A non può verificarsi.

Abbiamo dedotto:

**¬A**

---

# 2.55 Esempio strutturale

> Se Marco è presidente, Anna è vicepresidente.

> Marco e Anna non possono ricoprire contemporaneamente quei due ruoli.

Se la seconda regola esclude proprio quella combinazione, allora:

> Marco non può essere presidente.

Il vincolo condizionale conduce direttamente a una configurazione proibita.

---

# 2.56 Combinazione di implicazioni alternative

Supponiamo:

> A → B

> A → C

Se A è vero:

> B e C devono essere entrambi veri.

Non è:

> B oppure C.

Sono due conseguenze contemporanee.

---

# 2.57 Alternative nelle conseguenze

Diverso è:

> A → (B oppure C)

Se A è vero, sappiamo soltanto che almeno una tra B e C deve verificarsi.

Non possiamo determinare quale senza altre informazioni.

---

# 2.58 Eliminazione di una conseguenza alternativa

Se:

> A → (B oppure C)

e sappiamo:

> A è vero;

> B è falso,

allora:

> C deve essere vero.

L'alternativa viene risolta attraverso l'esclusione.

---

# 2.59 Condizioni sufficienti multiple

È possibile che più condizioni siano sufficienti per lo stesso risultato.

> A → C

> B → C

Quindi C può essere ottenuto da A oppure da B.

Se osserviamo C, però, non possiamo stabilire quale dei due antecedenti si sia verificato.

Potrebbero inoltre esistere altre cause non indicate.

---

# 2.60 Condizioni necessarie multiple

Supponiamo:

> A → B

e:

> A → C.

Perché A possa verificarsi sono necessari sia B sia C.

Quindi:

> B e C sono condizioni necessarie di A.

Possiamo scrivere:

**A → (B ∧ C)**

---

# 2.61 Una condizione necessaria non garantisce il risultato

Da:

> A → B

B è necessario per A.

Ma sapere:

> B

non garantisce:

> A.

Questo rimane vero anche nei sistemi con numerosi vincoli.

---

# 2.62 Informazioni globali e locali

Un vincolo **locale** riguarda pochi elementi:

> Anna è prima di Luca.

Un vincolo **globale** riguarda l'intero sistema:

> Esattamente tre persone appartengono al gruppo A.

I problemi complessi combinano spesso vincoli locali e globali.

Un'assegnazione locale può far raggiungere il limite previsto da un vincolo globale e produrre conseguenze per tutti gli altri elementi.

---

# 2.63 Esempio di interazione locale-globale

Supponiamo cinque persone e:

> esattamente due devono appartenere ad A.

Sappiamo:

> Marco ∈ A.

> Anna ∈ A.

Il limite globale è raggiunto.

Quindi:

> tutti gli altri ∉ A.

Una singola informazione sulla quantità influenza l'intero sistema.

---

# 2.64 Vincoli ridondanti in sistemi complessi

Un vincolo può essere conseguenza di altri anche quando la relazione non è immediata.

Se:

> A → B

> B → C

e viene inoltre dichiarato:

> A → C,

il terzo vincolo è logicamente già contenuto nei primi due.

La ridondanza non produce una contraddizione: semplicemente non restringe ulteriormente le possibilità.

---

# 2.65 Vincolo realmente nuovo

Se invece aggiungiamo:

> C → D,

otteniamo una nuova conseguenza:

> A → D.

Il nuovo vincolo amplia la catena di deduzioni.

---

# 2.66 Informazione incompleta

Anche molti vincoli insieme possono lasciare più configurazioni compatibili.

Questo non significa che il sistema sia mal costruito.

Significa semplicemente che alcune proprietà non sono logicamente determinate.

È quindi possibile conoscere con certezza solo una parte della configurazione.

---

# 2.67 Conseguenza invariabile

Se un'informazione compare in **tutte** le configurazioni compatibili, essa è una conseguenza necessaria anche se altre parti del sistema rimangono indeterminate.

Per esempio, possono esistere tre configurazioni diverse ma tutte avere:

> Anna prima di Marco.

Questa relazione è quindi necessaria.

---

# 2.68 Libertà residua

Le differenze tra le configurazioni compatibili rappresentano la **libertà residua** del sistema.

Più vincoli indipendenti vengono aggiunti, più questa libertà tende a diminuire.

Se scompare completamente, si ottiene una soluzione unica.

---

# 2.69 Sovradeterminazione

Un sistema può contenere più vincoli del necessario per determinare una configurazione.

Se alcuni vincoli sono ridondanti, la soluzione può essere già completamente fissata prima di utilizzarli tutti.

Questo non crea problemi finché i vincoli aggiuntivi sono compatibili.

---

# 2.70 Sovrapposizione contraddittoria

Se invece un vincolo aggiuntivo contraddice una conseguenza già necessaria, il sistema diventa inconsistente.

Esempio:

> A prima di B.

> B prima di C.

quindi:

> A prima di C.

Se aggiungiamo:

> C prima di A,

non esiste più alcuna configurazione lineare valida.

---

# 3. Concetti fondamentali

## Propagazione dei vincoli

Processo attraverso cui una condizione produce ulteriori conseguenze e restringe progressivamente le possibilità.

---

## Catena di implicazioni

Sequenza:

**A → B → C → D**

dalla quale è possibile derivare implicazioni indirette.

---

## Bicondizionale

Relazione:

**A ↔ B**

equivalente a:

**A → B**

e:

**B → A**.

---

## Esclusività

Condizione secondo la quale due o più possibilità non possono verificarsi contemporaneamente.

---

## Corrispondenza uno-a-uno

Ogni elemento riceve una sola proprietà e ogni proprietà viene assegnata a un solo elemento.

---

## Cardinalità

Numero di elementi appartenenti a un insieme o gruppo.

---

## Partizione

Suddivisione di un insieme in gruppi che:

-  coprono tutti gli elementi; 
-  non si sovrappongono. 

---

## Blocco

Gruppo di elementi che deve occupare posizioni consecutive.

---

## Vincolo globale

Condizione riferita all'intero sistema.

Esempio:

> esattamente tre persone appartengono ad A.

---

## Vincolo locale

Condizione relativa a elementi specifici.

> Anna è prima di Luca.

---

# 4. Regole, classificazioni e caratteristiche

## Catena di implicazioni

**A → B**

**B → C**

↓

**A → C**

---

## Contrapposta

**A → B**

↓

**¬B → ¬A**

---

## Bicondizionale

**A ↔ B**

equivale a:

**A → B**

e:

**B → A**

---

## "Solo se"

> A solo se B

significa:

**A → B**

---

## Condizione congiunta

> Se A e B, allora C

significa:

**A ∧ B → C**

Sono necessarie entrambe le condizioni dell'antecedente.

---

## Esattamente uno tra A e B

Sono ammesse soltanto:

**A vero, B falso**

oppure:

**A falso, B vero**

---

## Non entrambi

Esclude:

**A vero e B vero**

ma permette anche:

**A falso e B falso**.

---

## Partizione

Se ogni elemento appartiene esattamente a uno tra:

**A / B / C**

allora:

> appartenere ad A esclude B e C.

---

## Cardinalità

**Almeno N** → ≥ N

**Al massimo N** → ≤ N

**Esattamente N** → = N

---

## Saturazione

Se un gruppo ha limite massimo N e ha già N elementi:

> nessun altro elemento può entrarvi.

---

## Blocco

**A immediatamente prima di B**

↓

**[A B]**

---

# 5. Esempi per comprendere la teoria

## Esempio 1 — Catena completa

> Se Anna partecipa, Luca partecipa.

> Se Luca partecipa, Marco partecipa.

> Se Marco partecipa, Giulia partecipa.

Se Anna partecipa:

**Anna → Luca → Marco → Giulia**

Quindi la partecipazione di Anna produce necessariamente quella di tutti gli altri.

---

## Esempio 2 — Propagazione inversa

Con la stessa catena:

**Anna → Luca → Marco → Giulia**

se sappiamo:

> Giulia non partecipa,

dalle contrappositive otteniamo:

> Marco non partecipa;

> Luca non partecipa;

> Anna non partecipa.

---

## Esempio 3 — Solo se

> Marco partecipa solo se Anna partecipa.

Significa:

**Marco → Anna**

Se Anna non partecipa:

> Marco non può partecipare.

Ma se Anna partecipa non sappiamo ancora se Marco parteciperà.

---

## Esempio 4 — Esattamente uno

> Esattamente uno tra Marco e Luca partecipa.

Se sappiamo:

> Marco partecipa,

allora:

> Luca non partecipa.

Se sappiamo:

> Marco non partecipa,

allora:

> Luca partecipa.

---

## Esempio 5 — Non entrambi

> Marco e Luca non possono partecipare entrambi.

Se Marco partecipa:

> Luca non partecipa.

Se Marco non partecipa, però, Luca può:

-  partecipare; 
-  non partecipare. 

Il vincolo non obbliga uno dei due a esserci.

---

## Esempio 6 — Cardinalità

Cinque studenti:

> esattamente due devono scegliere matematica.

Se sappiamo già che:

> Anna sceglie matematica;

> Luca sceglie matematica,

nessuno degli altri tre può scegliere matematica.

Il massimo è già raggiunto.

---

## Esempio 7 — Minimo

Quattro studenti:

> almeno tre devono partecipare.

Se sappiamo:

> Marco non partecipa,

allora gli altri tre devono necessariamente partecipare.

Altrimenti non sarebbe possibile raggiungere il minimo di tre.

---

## Esempio 8 — Partizione

Ogni persona appartiene esattamente a uno tra:

-  rosso; 
-  blu; 
-  verde. 

Se:

> Anna non è rossa;

> Anna non è blu,

segue:

> Anna è verde.

---

## Esempio 9 — Assegnazione uno-a-uno

Persone:

-  Anna; 
-  Luca; 
-  Marco. 

Ruoli:

-  presidente; 
-  segretario; 
-  tesoriere. 

Se:

> Anna = presidente;

> Luca ≠ segretario,

Anna ha già occupato il ruolo presidente.

Restano per Luca:

-  segretario; 
-  tesoriere. 

Poiché Luca non può essere segretario:

> Luca = tesoriere.

Rimane quindi:

> Marco = segretario.

---

## Esempio 10 — Incompatibilità con implicazione

> Se Marco è nel gruppo A, Anna è nel gruppo B.

> Nessun membro di A può avere come partner una persona del gruppo B.

Supponendo che Marco e Anna siano obbligatoriamente partner, l'appartenenza di Marco ad A produrrebbe una configurazione proibita.

Di conseguenza:

> Marco non può appartenere ad A.

Questo mostra come una conseguenza indiretta possa derivare dall'interazione tra vincoli di natura diversa.

---

# 6. Concetti da non confondere

# "Se" ≠ "solo se"

### A se B

**B → A**

### A solo se B

**A → B**

La direzione è opposta.

---

# "Solo se" ≠ "se e solo se"

**A solo se B**

→ A → B.

**A se e solo se B**

→ A → B e B → A.

---

# Almeno uno ≠ esattamente uno

### Almeno uno

Uno o più.

### Esattamente uno

Uno soltanto.

---

# Non entrambi ≠ esattamente uno

### Non entrambi

Ammette che siano entrambi falsi.

### Esattamente uno

Richiede che uno sia vero e l'altro falso.

---

# Incompatibilità ≠ implicazione

### Incompatibilità

A e B non possono coesistere:

**A → ¬B**

e:

**B → ¬A**

### Implicazione

**A → B**

non esclude la coesistenza; anzi, se A è vero, B deve esserlo.

---

# Condizione congiunta ≠ condizioni alternative

### A e B → C

richiede entrambi.

### A oppure B → C

richiede almeno uno.

---

# Bicondizionale ≠ due eventi casualmente associati

**A ↔ B** è una relazione logica precisa:

-  A implica B; 
-  B implica A. 

Non significa semplicemente che A e B tendono spesso a comparire insieme.

---

# Limite massimo ≠ numero attuale

> Al massimo tre

non significa che ce ne siano tre.

Significa soltanto:

> non più di tre.

---

# Limite minimo ≠ numero esatto

> Almeno tre

non significa esattamente tre.

---

# Ciclo di implicazioni ≠ contraddizione

**A → B → C → A**

può essere perfettamente consistente.

---

# Ciclo di precedenze ≠ ciclo di implicazioni

**A prima di B**

**B prima di C**

**C prima di A**

è invece impossibile in un ordine lineare.

---

# Vincolo globale ≠ vincolo locale

### Globale

Riguarda l'intero sistema:

> esattamente tre persone in A.

### Locale

Riguarda pochi elementi:

> Marco non è in A.

I due tipi possono però interagire.

---

# 7. Collegamenti importanti

## Vincoli → implicazioni

Molti sistemi complessi sono reti di implicazioni:

**A → B**

**B → C**

**C → D**

Le regole studiate su:

-  modus ponens; 
-  contrapposta; 
-  condizioni necessarie; 

sono quindi direttamente applicabili.

---

# Vincoli → quantificatori

Espressioni come:

-  almeno uno; 
-  nessuno; 
-  tutti; 
-  esattamente tre; 
-  al massimo due 

stabiliscono restrizioni quantitative.

La logica dei quantificatori diventa quindi parte integrante dei problemi con più condizioni.

---

# Vincoli → insiemi

Le assegnazioni a gruppi utilizzano concetti come:

-  appartenenza; 
-  esclusione; 
-  intersezione; 
-  partizione; 
-  cardinalità. 

Questi stessi concetti verranno ritrovati in matematica.

---

# Vincoli → ordinamenti

Le condizioni:

> prima;

> dopo;

> immediatamente prima;

> tra;

> accanto

producono strutture lineari o spaziali.

I problemi con vincoli combinano quindi direttamente questa sezione con quella precedente sugli **ordinamenti**.

---

# Vincoli → sillogismi

Una catena:

> Tutti A sono B.

> Tutti B sono C.

> Marco è A.

produce:

> Marco è B

e successivamente:

> Marco è C.

È un sistema di vincoli espresso attraverso categorie.

---

# Vincoli → aritmetica

Espressioni come:

> almeno tre;

> al massimo cinque;

> il doppio;

> uno in più

richiedono semplici relazioni matematiche.

Logica e matematica possono quindi interagire nello stesso ragionamento.

---

# 8. Cosa devo memorizzare

## Definizioni fondamentali

**Propagazione dei vincoli:** processo attraverso cui una condizione produce nuove conseguenze.

**Bicondizionale:** relazione A ↔ B, equivalente a A → B e B → A.

**Esclusività:** impossibilità che determinate condizioni si verifichino contemporaneamente.

**Cardinalità:** numero di elementi appartenenti a un insieme.

**Partizione:** divisione di un insieme in gruppi non sovrapposti che comprendono tutti gli elementi.

**Blocco:** insieme di elementi obbligati a essere consecutivi.

---

## Implicazioni

**A → B**

**B → C**

↓

**A → C**

Contrapposta:

**A → B**

↓

**¬B → ¬A**

---

## Espressioni fondamentali

**A se B**

→ **B → A**

**A solo se B**

→ **A → B**

**A se e solo se B**

→ **A ↔ B**

---

## Alternative

**Almeno uno**

→ uno o più.

**Esattamente uno**

→ uno soltanto.

**Non entrambi**

→ possono essere uno solo oppure nessuno, ma non tutti e due.

---

## Quantità

**Almeno N** → ≥ N

**Al massimo N** → ≤ N

**Esattamente N** → = N

---

## Partizioni

Se ogni elemento appartiene esattamente a uno tra:

**A, B, C**

e sappiamo:

> X non è A;

> X non è B,

allora:

> X è C.

---

## Uno-a-uno

Se una proprietà viene assegnata a un elemento:

> non può essere assegnata agli altri.

Le eliminazioni possono produrre nuove assegnazioni obbligatorie.

---

## Blocchi

**A immediatamente prima di B**

→ **[A B]**

**A accanto a B**

→ **[A B] oppure [B A]**

---

## Regole da ricordare

**Implicazione ≠ equivalenza**

**Solo se = condizione necessaria**

**Se = condizione sufficiente nel verso espresso**

**Bicondizionale = entrambe le direzioni**

**Un limite massimo raggiunto esclude altri elementi**

**Un limite minimo può obbligare gli elementi rimasti**

**Un ciclo di implicazioni può essere coerente**

**Un ciclo di precedenze lineari è impossibile**

---

## Parole chiave

**Propagazione – implicazione – contrapposta – bicondizionale – solo se – se e solo se – congiunzione – disgiunzione – esclusività – almeno uno – esattamente uno – non entrambi – cardinalità – partizione – uno-a-uno – blocco – saturazione – vincolo globale – vincolo locale.**

---

## Differenze da ricordare

**Se ≠ solo se**

**Solo se ≠ se e solo se**

**Implicazione ≠ bicondizionale**

**Almeno uno ≠ esattamente uno**

**Non entrambi ≠ esattamente uno**

**Condizioni congiunte ≠ condizioni alternative**

**Incompatibilità ≠ implicazione**

**Almeno N ≠ esattamente N**

**Al massimo N ≠ esattamente N**

**Ciclo di implicazioni ≠ ciclo di precedenze**

**Vincolo globale ≠ vincolo locale**

**Sistema non completamente determinato ≠ sistema contraddittorio**