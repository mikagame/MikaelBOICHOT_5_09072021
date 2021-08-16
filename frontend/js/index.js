/*const url = "http://localhost:3000/api/teddies";    // *** URL API *** */
const url = "https://projet5oc.herokuapp.com/api/teddies";


function create(data) {
    data.forEach(element => { 
        const a = document.createElement("a");
        const img = document.createElement("img");
        const div = document.createElement("div");
        const nameTeddy = document.createElement("p");
        const priceTeddy = document.createElement("p");
        a.setAttribute("href", `./frontend/product.html?id=${element._id}`);
        img.src = element.imageUrl;
        div.setAttribute('id', 'textTeddies');
        nameTeddy.innerHTML = element.name;
        priceTeddy.innerHTML = `${element.price / 100}` + ".00 €";
        teddies.appendChild(a).appendChild(img);
        teddies.appendChild(a).appendChild(div).appendChild(nameTeddy);
        teddies.appendChild(a).appendChild(div).appendChild(priceTeddy);     
    });
}

// Récuperation données et création articles
fetch(url)
.then(response => response.json())
.then(data => {
    create(data);  
})
.catch(function(error) {
    const err = document.createElement('p');
    err.setAttribute('class', 'errorIndex');
    err.innerHTML = "Une erreur est survenue à la récupération des données";
    errorIndex.appendChild(err)
});

