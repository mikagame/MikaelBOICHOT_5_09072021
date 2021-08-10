const url = "http://localhost:3000/api/teddies";

// Récuperation et création articles

function create(data) {
    data.forEach(element => {
       
        const a = document.createElement("a");
        const img = document.createElement("img");
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        
        a.setAttribute("href", `./frontend/product.html?id=${element._id}`);
        img.src = element.imageUrl;
        div.setAttribute('id', 'textTeddies');
        h2.innerHTML = element.name;
        h3.innerHTML = `${element.price / 100}` + ".00 €";

        teddies.appendChild(a).appendChild(img);
        teddies.appendChild(a).appendChild(div).appendChild(h2);
        teddies.appendChild(a).appendChild(div).appendChild(h3);
    });
}
//export {create};

fetch(url)
.then(response => response.json())
.then(data => {
    create(data);  
})
.catch(function(error) {

    const err = document.createElement('div');
    err.setAttribute('id', 'erreur');
    err.innerHTML = "Une erreur est survenue à la récupération des données";
    contain.appendChild(err);

})
