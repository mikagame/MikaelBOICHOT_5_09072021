let orderId = localStorage.getItem('orderId');
let orderPrice = localStorage.getItem('orderPrice');
let infoClient = JSON.parse(localStorage.getItem('cont'));
console.log(orderId);

document.getElementById('thanks').innerHTML =  "Cher " + infoClient.firstName + ", nous avons le plaisir de vous confirmer votre commande";
document.getElementById('result').innerHTML =  "Voici l'id de votre commande : " + orderId + ", pour un montant total de : " + orderPrice + ".00 €.";
