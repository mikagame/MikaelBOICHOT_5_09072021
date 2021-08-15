const url = "http://localhost:3000/api/teddies";
let memory = JSON.parse(localStorage.getItem('article')); 
let totalCommand = 0;
console.log(memory)
if(!memory) {
    infoCart.innerHTML = "Veuillez remplir votre panier"; 
    row.innerHTML = "";
}

memory.forEach(element=> {
    
    fetch(url +"/" + element.id)
    .then(resp => resp.json())
    .then(data => {
              
            let rowCommand = document.createElement('div');
            let nameCommand = document.createElement('p');
            let colorCommand = document.createElement('p');
            let quantityCommand = document.createElement('p')
            let priceCommand = document.createElement('p');
            
            rowCommand.setAttribute('class', 'rowCommand');
            nameCommand.innerHTML = data.name;
            colorCommand.innerHTML = element.color;
            quantityCommand.innerHTML = element.quantity;
            priceCommand.innerHTML = (data.price * 0.01 * element.quantity) + ".00 €";
            command.appendChild(rowCommand).appendChild(nameCommand);
            command.appendChild(rowCommand).appendChild(colorCommand);
            command.appendChild(rowCommand).appendChild(quantityCommand);
            command.appendChild(rowCommand).appendChild(priceCommand);
            totalCommand = (data.price * 0.01 * element.quantity) + totalCommand;  
            document.getElementById('total').innerHTML = "Montant total : " + totalCommand +".00 €";
              
    })
    
    let firstNameInput = document.getElementById('firstName');
    let lastNameInput =  document.getElementById('lastName');
    let addressInput = document.getElementById('address');
    let cityInput = document.getElementById('city');
    let emailInput = document.getElementById('email');

    if( 
        firstNameInput.value &&
        lastNameInput.value &&
        addressInput.value &&
        cityInput.value &&
        emailInput.value
    
        ) {
       // validate();
       console.log("bonjour")
       let b = document.getElementById('essai');
       b.style.background = 'green';
    } else {

    }

function clearCart() {
    memory = [];
    localStorage.clear();
    console.log(memory)
    command.innerHTML = "";
    infoCart.innerHTML = "Veuillez remplir votre panier"; 
    document.getElementById('total').innerHTML = "";
};

document.getElementById('clearCart').addEventListener('click', clearCart)

let memoryId = [];
memory.forEach(element => {
    memoryId.push(element.id)

    
})


function orderConfirm() {

    if(
        !firstNameInput.value ||
        !lastNameInput.value ||
        !addressInput.value ||
        !cityInput.value ||
        !emailInput.value
    ) {
        //erreur
        alert("Vous devez renseigner tous les champs pour valider votre commande");
       
    } else {
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
        fetch(url + "/order", {
            method: 'POST',
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(rep => rep.json() )  
        .then(value => {  
            console.log(value)
            localStorage.clear(); 
            localStorage.setItem('cont', JSON.stringify(request.contact));  
            localStorage.setItem("orderId", value.orderId);
            localStorage.setItem('orderPrice', totalCommand);
            document.location.href = "confirmation.html";
        }) 
    }
}
document.getElementById('submit').addEventListener('click', orderConfirm);
});


