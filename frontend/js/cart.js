
let p = JSON.parse(localStorage.getItem('tab'));
console.log(p.name);

let data = [];
data = {products: p};
console.log(data);

let affiche = document.getElementById('commande');
affiche.innerHTML = p.name;

cart.appendChild(affiche);
