// *** URL API ***
const url = "http://localhost:3000/api/teddies";

// *** Récupération id ***
const searchParams = window.location.search;
const urlParams = new URLSearchParams(searchParams);
const id = urlParams.get("id");

// *** Création ourson choisi ***
fetch(url + "/" + id)
.then(response => response.json())
.then(data => {

  // *** ourson et attributs ***
  const img = document.createElement("img");
  const text = document.createElement("div");
  const nameTeddy = document.createElement("p");
  const priceTeddy = document.createElement("p");
  const descriptionTeddy = document.createElement("p");
  img.src = data.imageUrl;
  nameTeddy.innerHTML = data.name;
  priceTeddy.innerHTML = `${data.price / 100}` + ".00 €";
  descriptionTeddy.innerHTML = data.description;

  // *** bouton ajout au panier ***
  const addTeddy = document.createElement("p");
  addTeddy.setAttribute('id', 'addTeddy');
  addTeddy.innerHTML = "Ajouter au panier";
  
  // *** choix quantité ***
  const quantity = document.createElement("input");
  const labelQuantity = document.createElement("label");
  labelQuantity.setAttribute('for', 'quantity');
  quantity.setAttribute('id', 'quantity');
  quantity.type = "number";
  quantity.min = 1;
  quantity.value = 1;
  labelQuantity.innerHTML = "Quantité : ";

  // *** choix couleur ***
  const color = document.createElement("select");
  const labelColor = document.createElement("label");
  labelColor.setAttribute('for', 'color');
  labelColor.innerHTML = "Couleur : ";

  only.appendChild(img);
  only.appendChild(text).appendChild(nameTeddy);
  only.appendChild(text).appendChild(priceTeddy);
  only.appendChild(text).appendChild(descriptionTeddy);
  data.colors.forEach(element => {
    const choice = document.createElement('option');
    choice.innerHTML = element;
    only.appendChild(text).appendChild(labelColor).appendChild(color).appendChild(choice);
  });
  only.appendChild(text).appendChild(labelQuantity).appendChild(quantity);
  only.appendChild(text).appendChild(addTeddy);

  // *** ajouter au panier ***
  function addCart() {
    alert("Article ajouté");
    let memory = JSON.parse(localStorage.getItem('article')); //converti les données JSON en objet JS
    
    let teddyObject = {};
    // s'il y a un produit
    if(memory) {
      teddyObject = {
        id: data._id,
        quantity: quantity.value,
        color: color.value
      };
      memory.push(teddyObject);
      localStorage.setItem('article', JSON.stringify(memory));
    
      //si pas de produit 
    } else {
    memory = [];
    teddyObject = {
      id: data._id,
      quantity: quantity.value,
      color: color.value
    };
    memory.push(teddyObject);
    localStorage.setItem("article", JSON.stringify(memory));
    } 
  };
  
  addTeddy.addEventListener('click', addCart); 

});
  

             




