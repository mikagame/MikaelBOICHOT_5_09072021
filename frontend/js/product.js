//Récupération id
const searchParams = window.location.search;
const url = "http://localhost:3000/api/teddies";
const urlParams = new URLSearchParams(searchParams);
const id = urlParams.get("id");

//import {create} from index;

//Création ourson choisi

fetch(url + "/" + id)
.then(response => response.json())
.then(data => {
    const text = document.createElement("div");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const choix = document.createElement("div");
    const ul = document.createElement("ul");
    const add = document.createElement("a");
    img.src = data.imageUrl;
    const price = data.price /100;
    h2.innerHTML = data.name;
    h3.innerHTML = `${price}` + ".00 €";
    p.innerHTML = data.description;
    add.innerHTML = "Ajouter au panier";    
    ul.innerHTML = "Choix de la couleur : ";
    ul.setAttribute("class", "color");
    choix.setAttribute("class", "choix");
    text.setAttribute("class", "text");
    add.setAttribute("href", "#");
        
    only.appendChild(img);
    only.appendChild(text).appendChild(h2);
    only.appendChild(text).appendChild(h3);
    only.appendChild(text).appendChild(p);

     //choix quantité 

     const quantity = document.createElement('div');
     const nbAdd = document.createElement('div');
     const nbRemove = document.createElement('div');
     quantity.setAttribute('class', 'qt');
     nbAdd.innerHTML = "+";
     nbRemove.innerHTML = "-";
     nbAdd.setAttribute('class', 'plus');
     nbRemove.setAttribute('class', 'moins');
 
     let nb = 0;
     
     function qtAdd() {
       nb++;
     }
 
     function qtRemove() {
       nb--;
     }
 
     nbAdd.addEventListener('click', qtAdd);
     nbRemove.addEventListener('click', qtRemove);
 
     quantity.innerHTML = "Quantité : " + nb;
    
 
    console.log(nb);
    only.appendChild(text).appendChild(quantity);
    only.appendChild(text).appendChild(quantity).appendChild(nbAdd);
    only.appendChild(text).appendChild(quantity).appendChild(nbRemove);

    // choix couleur 

    data.colors.forEach(element => {
    const a = document.createElement("a");
    const li = document.createElement("li");
    a.innerHTML =  element;
    a.setAttribute("href", "#");
    
    only.appendChild(choix).appendChild(ul).appendChild(li).appendChild(a);
    });
    only.appendChild(text).appendChild(add);

    function addCart() {
     
      let result = confirm("Voulez-vous ajouter cet article au panier?");
      
      if(result) {
        alert("Article ajouté");

        let memory = JSON.parse(localStorage.getItem("article")); //converti les données JSON en objet JS
    
        // s'il y a un produit
        if(memory) {
          memory.push(data)
          localStorage.setItem("article", JSON.stringify(memory));

          //si pas de produit 
        } else {
        memory = [];
        
        localStorage.setItem("article", JSON.stringify(memory));
        memory.push(data)
        }
      } else {
        alert("Continuez vos achats");
      }    
    };
   
    add.addEventListener('click', addCart);        
    
})



