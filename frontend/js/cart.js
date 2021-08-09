
let affiche = JSON.parse(localStorage.getItem("article")); 

console.log(affiche.length);

let total = 0;
affiche.forEach(element => {
    

    let ligne = document.createElement('div');
    ligne.setAttribute('class', 'ligne');

    let nom = document.createElement('div');
    nom.setAttribute('class', 'nom');
    nom.innerHTML = element.name;

    let prix = document.createElement('div');
    prix.setAttribute('class', 'prix');
    prix.innerHTML = element.price * 0.01 + ".00 €";

    commande.appendChild(ligne).appendChild(nom);
    commande.appendChild(ligne).appendChild(prix);
    total = element.price + total;
    
});



let afficheTotal = document.createElement('div');
afficheTotal.setAttribute('class', 'total');
afficheTotal.innerHTML = "Montant Total : " + total * 0.01 + ".00 €";
commande.appendChild(afficheTotal);