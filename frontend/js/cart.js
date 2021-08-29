/*const url = "http://localhost:3000/api/teddies";*/
const url = "https://projet5oc.herokuapp.com/api/teddies";

let memory = JSON.parse(localStorage.getItem('article'));
let totalCommand = 0;

/* ***Message si le panier est vide ***/

if (!memory) {
    infoCart.innerHTML = "Votre panier Oriteddy est vide";
    row.innerHTML = "";
    document.getElementById('clearCart').innerHTML = "";
    second.innerHTML = "";
}

/* ***création d'une ligne de commande dans le panier pour chaque ajout ***/
memory.forEach(element => {
   
    fetch(url + "/" + element.id)
        .then(resp => resp.json())
        .then(data => {
            const rowCommand = document.createElement('div');
            rowCommand.setAttribute('class', 'rowCommand');
            command.appendChild(rowCommand).innerHTML = 
            `
                <p>${data.name}</p>
                <p>${element.color}</p>
                <p>${element.quantity}</p>
                <p>${data.price * 0.01 * element.quantity}.00 €</p>
            `
            totalCommand = (data.price * 0.01 * element.quantity) + totalCommand;
            document.getElementById('total').innerHTML = "Montant total : " + totalCommand + ".00 €";
        })

    // *** Données renseignées par utilisateur *** 
    let firstNameInput = document.getElementById('firstName');
    let lastNameInput = document.getElementById('lastName');
    let addressInput = document.getElementById('address');
    let cityInput = document.getElementById('city');
    let emailInput = document.getElementById('email');


    // *** vider le panier ***
    function clearCart() {
        memory = [];
        localStorage.clear();
        command.innerHTML = "";
        infoCart.innerHTML = "Votre panier Oriteddy est vide";
        document.getElementById('total').innerHTML = "";
        row.innerHTML = "";
        document.getElementById('clearCart').innerHTML = "";
        second.innerHTML = "";
    };

    document.getElementById('clearCart').addEventListener('click', clearCart)


    // *** tableau des id pour requête POST ***
    let memoryId = [];
    memory.forEach(element => {
        memoryId.push(element.id)
    })
 
// *** Passer commande ***
    function orderConfirm() {

        
        // *** Vérification que les champs soient renseignés ***
        if (
            !firstNameInput.value ||
            !lastNameInput.value ||
            !addressInput.value ||
            !cityInput.value ||
            !emailInput.value
        ) {
            //erreur
            alert("Vous devez renseigner tous les champs  pour valider votre commande");
        } 

        if(!emailInput.validity.valid) {
            document.getElementById('email').classList.add('badEmail');
            emailInput.value = "";
        }
        if(!firstNameInput.validity.valid) {
            document.getElementById('firstName').classList.add('badEmail');
            firstNameInput.value = "";
        }
        if(!addressInput.validity.valid) {
            document.getElementById('address').classList.add('badEmail');
            addressInput.value = "";
        }
        if(!cityInput.validity.valid) {
            document.getElementById('city').classList.add('badEmail');
            cityInput.value = "";
        }
        if(!lastNameInput.validity.valid) {
            document.getElementById('lastName').classList.add('badEmail');
            lastNameInput.value = "";
        }
        
        
        if(
            firstNameInput.validity.valid &&
            lastNameInput.validity.valid &&
            addressInput.validity.valid &&
            cityInput.validity.valid &&
            emailInput.validity.valid
        ) {
            // *** création objet { valeur des inputs et id des produits }
          
            const request = {
                contact: {
                    firstName: firstNameInput.value,
                    lastName: lastNameInput.value,
                    address: addressInput.value,
                    city: cityInput.value,
                    email: emailInput.value,
                },
                products: memoryId,
            };
            /* *** Requête POST pour récupérer et envoyer : (orderId et prix total de la commande)
                   à la page confiramtion.html *** */
            fetch(url + "/order", {
                method: 'POST',
                body: JSON.stringify(request),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(rep => rep.json())
                .then(value => {
                    console.log(value)
                    localStorage.clear();
                    localStorage.setItem('cont', JSON.stringify(request.contact));
                    localStorage.setItem("orderId", value.orderId);
                    localStorage.setItem('orderPrice', totalCommand);
                    document.location.href = "confirmation.html";
                })
        } else {
            
                //erreur
                alert("Vous devez renseigner des données valides");
            
        }
    }
    document.getElementById('submit').addEventListener('click', orderConfirm);
});