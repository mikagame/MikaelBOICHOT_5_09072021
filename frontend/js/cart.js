
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

    let remove = document.createElement('div');
    
    remove.setAttribute('class', 'remove');
    remove.innerHTML = "retirer article";
    commande.appendChild(ligne).appendChild(nom);
    commande.appendChild(ligne).appendChild(remove);
    commande.appendChild(ligne).appendChild(prix);
    
    total = element.price + total;

    function supprime() {
       commande.removeChild(ligne);
       localStorage.removeItem()
    }

    remove.addEventListener('click', supprime);
    
    console.log(affiche);
});


let afficheTotal = document.createElement('div');
afficheTotal.setAttribute('class', 'total');
afficheTotal.innerHTML = "Montant Total : " + total * 0.01 + ".00 €";
commande.appendChild(afficheTotal);

function clearAll() {
    localStorage.removeItem('article');
    

}

clear.addEventListener('click', clearAll);