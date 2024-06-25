
// Definisco la distanza percorsa durante il viaggio

let travel_distance = prompt("Quanti chilometri percorrerà il treno? il costo del tuo biglietto verrà calcolato a 0,21€/1Km");

// Definisco il prezzo del biglietto in base alla distanza da percorrere

let ticket_price = 0.21 * travel_distance;

// Adesso abbiamo bisogno dell'età del passeggero, chiediamola all'utente

let user_age = prompt("Quanti anni hai? Se hai meno di diciotto anni hai diritto al 20% di sconto! Se sei un over 65, avrai il 40% di sconto! :)");

// Adesso abbiamo l'età del passeggero, stabiliamo a quanto sconto ha diritto in base ad essa

let price_discount = 0;

  if (user_age < 18) {
        price_discount = (ticket_price - ( (ticket_price / 100 ) * 20))
  } else if (user_age > 65) {
        price_discount = (ticket_price - ( (ticket_price / 100 ) * 40))   
  } else {
        price_discount = ticket_price
  }

// Applichiamo o meno lo sconto al prezzo finale!

let final_price = ticket_price;

if (user_age < 18 || user_age > 65) {
    final_price = (ticket_price - price_discount)
} else {
    final_price = ticket_price
}

document.getElementById("final_price").innerText = final_price.toFixed(2);

