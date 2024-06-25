
// Definisco la distanza percorsa durante il viaggio

let travel_distance = prompt("Quanti chilometri percorrerà il treno?");
console.log(travel_distance);


// Definisco il prezzo del biglietto in base alla distanza da percorrere

let ticket_price = 0.21 * travel_distance;
console.log(ticket_price);

// Adesso abbiamo bisogno dell'età del passeggero, chiediamola all'utente

let user_age = prompt("Quanti anni hai?");
console.log(user_age);

// Adesso abbiamo l'età del passeggero, stabiliamo a quanto sconto ha diritto in base ad essa

let price_discount = 0;

  if (user_age < 18) {
        price_discount = (ticket_price - ( (ticket_price / 100 ) * 20))
  } else if (user_age > 65) {
        price_discount = (ticket_price - ( (ticket_price / 100 ) * 40))   
  } else {
        price_discount = ticket_price
  }

  console.log(price_discount)

// Applichiamo o meno lo sconto al prezzo finale!

let final_price = ticket_price;

if (user_age < 18 || user_age > 65) {
    final_price = (ticket_price - price_discount)
} else {
    final_price = ticket_price
}

document.getElementById("final_price").innerText = final_price.toFixed(2);

