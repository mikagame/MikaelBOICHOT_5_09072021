let a = localStorage.getItem('orderId');
let b = localStorage.getItem('orderPrice');
let c = JSON.parse(localStorage.getItem('cont'));
console.log(c);

document.getElementById('thanks').innerHTML =  "Cher " + c.firstName + ", nous avons le plaisir de vous confirmer votre commande";
document.getElementById('result').innerHTML =  "Voici l'id de votre commande : " + a + ", pour un montant total de : " + b + ".00 €.";
