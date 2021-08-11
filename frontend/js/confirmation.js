let a = localStorage.getItem('orderId');
let b = localStorage.getItem('orderPrice');

document.getElementById('thanks').innerHTML = "Nous vous remercions pour votre commande";
document.getElementById('result').innerHTML =  "Voici l'id de votre commande : " + a + ", pour un montant total de : " + b + ".00 €.";
