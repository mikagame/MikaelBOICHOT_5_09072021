const searchParams = window.location.search;
const url = "http://localhost:3000/api/teddies";
const urlParams = new URLSearchParams(searchParams);
const id = urlParams.get("id");

const newUrl = url + "/" + id;
console.log(newUrl);

function confirmAdd() {

    var result = confirm("Confirmez ajout au panier ?");

    if(result) {
        alert("Ourson ajouté au panier");
    } else {
        alert("Continuez votre visite");
    }
}

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
        h3.innerHTML = "Prix : " + `${price}` + ".00 €";
        p.innerHTML = data.description;
        add.innerHTML = "Ajouter au panier";
        add.addEventListener('click', confirmAdd);
        ul.innerHTML = "Choix de la couleur : ";
        ul.setAttribute("class", "color");
        choix.setAttribute("class", "choix");
        text.setAttribute("class", "text");
        add.setAttribute("href", "./cart.html");
        
        only.appendChild(img);
        only.appendChild(text).appendChild(h2);
        only.appendChild(text).appendChild(h3);
        only.appendChild(text).appendChild(p);
        

        data.colors.forEach(element => {
            const a = document.createElement("a");
            const li = document.createElement("li");
            a.innerHTML =  element;
            a.setAttribute("href", "#");
            only.appendChild(choix).appendChild(ul).appendChild(li).appendChild(a);
        });

        only.appendChild(text).appendChild(add);
        
        
        
        
        
        
})