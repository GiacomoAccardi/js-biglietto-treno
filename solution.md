Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


- NUMERO CHILOMETRI DURATA DEL VIAGGIO?
  CHIEDERE ALL'UTENTE (creazione di una prima variabile gestita tramite un prompt, la chiamerò "travel_distance") 

- QUAL E' IL PREZZO DEL BIGLIETTO? 
  Bisogna creare una nuova variabile a cui attribuire il prezzo del biglietto che sarà di 0.21 moltiplicato per il valore di "travel_distance" nominerò questa variabile "ticket_price"

<!--Sappiamo di dover applicare uno sconto in base all'età del passeggiero. Lo sconto verrà applicato secondo il seguente sistema-->

- CHIEDERE L'ETA' ALL'UTENTE TRAMITE UN NUOVO PROMPT (creazione di una nuova variabile che nominerò "user_age")
    per tanto creerò le seguenti condizioni:

    - SE "user_age" < 18 = allora applicheremo uno sconto del 20% nella seguente maniera:
            >>creazione di una nuova variabile che nominerò "price_discount"
            >> Il valore della variabile "price_discount" sarà uguale a "ticcket_price" - 20%

    - ALTRIMENTI SE "user_age" > 65 = allora applicheremo uno sconto del 40% nella seguente maniera:
            >>creazione di una nuova variabile che nominerò "price_discount"
            >> Il valore della variabile "price_discount" sarà uguale a "ticcket_price" - 40%


    - ALTRIMENTI SE "user_age" ha un valore compreso tra 18 e 65 non applicheremo nessuno sconto

<!--Restituizione del prezzo finale-->

- Attraverso l'utilizzo di GetElementById lo script scriverà sulla nostra pagina del browser il prezzo totale del biglietto nel seguente modo:

    - Creazione di una nuova variabile che denominerò "final_price" (che sarà il valore mostrato all'utente) il cui valore sarà soggetto alle seguenti variabili:

        - SE "user_age" è < di 18 o > di 65  allora il valore di "final_price" sarà uguale a "price_discount" 

        - SE "user_age" è un valore compreso tra 18 e 65 allora il valore di "final_price" sarà uguale a "ticket_price"

