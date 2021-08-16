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
  text.setAttribute('id', 'text')
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

  const info = document.createElement('p');
  info.innerHTML = "Article ajouté";
  info.classList.add('infoAdd');
   only.appendChild(text).appendChild(info);

  // *** ajouter au panier ***
  function addCart() {
   // alert("Article ajouté");
   info.classList.add('newInfoAdd')
   
    setTimeout(function() {
      info.classList.remove('newInfoAdd');
      
      
      }, 3000);

    let memory = JSON.parse(localStorage.getItem('article')); //converti les données JSON en objet JS
   
    let teddyObject = {
        id: data._id,
        quantity: quantity.value,
        color: color.value
    };
    let c = 0;

    // s'il y a un produit
    if(memory) {
//console.log(memory)
      memory.forEach((element, index) =>  {if(element.id == teddyObject.id && element.color == teddyObject.color) 
        {     
         
          let a = JSON.parse(element.quantity);
          let b = JSON.parse(teddyObject.quantity);
           c = index + 1;
          element.quantity = 0;    
          teddyObject.quantity = a + b;
               
        }     
      }  
      
      );
      //console.log(c)
      if(c > 0) {
        memory.splice(c - 1 , 1, teddyObject)
        localStorage.setItem('article', JSON.stringify(memory));
      } else {
      memory.push(teddyObject);
      localStorage.setItem('article', JSON.stringify(memory));
    }
      //si pas de produit 
    } else {
    memory = [];
    memory.push(teddyObject);
    localStorage.setItem("article", JSON.stringify(memory));
    } 
  }; 
  addTeddy.addEventListener('click', addCart); 
})
.catch(function(error) {
  const err = document.createElement('div');
  err.setAttribute('id', 'erreur');
  err.innerHTML = "Une erreur est survenue à la récupération des données";
  contain.appendChild(err);
});

  

             




