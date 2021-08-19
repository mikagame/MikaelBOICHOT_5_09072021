/*const url = "http://localhost:3000/api/teddies";    // *** URL API projet OC *** */
const url = "https://projet5oc.herokuapp.com/api/teddies"; // *** URL API sur heroku ***

// ***Fonction création articles *** 

function allProducts(data) {
    data.forEach(e => {  
        const article = document.createElement('a');
        article.setAttribute("href", `./frontend/product.html?id=${e._id}`);
        teddies.appendChild(article).innerHTML = 
            `<img src="${e.imageUrl}" alt="#" />
            <div id="textTeddies">
                <p>${e.name}</p>
                <p>${e.price / 100}.00 €</p>
            </div>`
    }) 
}

// *** Récupération données dans API et appel fonction création articles ***

fetch(url)
.then(response => response.json())
.then(data => {
   allProducts(data);
})
.catch(function(error) {
    const err = document.createElement('p');
    err.setAttribute('class', 'errorIndex');
    err.innerHTML = "Une erreur est survenue à la récupération des données";
    errorIndex.appendChild(err)
});

