const url = "http://localhost:3000/api/teddies";

let affiche = JSON.parse(localStorage.getItem("article")); 
//console.log(affiche);


let totalCommand = 0;
affiche.forEach(element => {
    
    console.log(element)
    fetch(url +"/" + element)
    .then(resp => resp.json())
    .then(data => {
        
        console.log(data);
        let rowCommand = document.createElement('div');
        let nameCommand = document.createElement('p');
        let quantityCommand = document.createElement('p')
        let priceCommand = document.createElement('p');
    
        rowCommand.setAttribute('class', 'rowCommand');
        nameCommand.innerHTML = data.name;
        quantityCommand.innerHTML = "0";
        priceCommand.innerHTML = data.price * 0.01 + ".00 €";
        command.appendChild(rowCommand).appendChild(nameCommand);
        command.appendChild(rowCommand).appendChild(quantityCommand);
        command.appendChild(rowCommand).appendChild(priceCommand);

        totalCommand = data.price * 0.01 + totalCommand;  
        console.log(totalCommand)
        document.getElementById('total').innerHTML = "Montant total : " + totalCommand +".00 €";
    })
    
console.log(totalCommand)
    let firstNameInput = document.getElementById('firstName');
    let lastNameInput =  document.getElementById('lastName');
    let addressInput = document.getElementById('address');
    let cityInput = document.getElementById('city');
    let emailInput = document.getElementById('email');

function clearCart() {
    localStorage.clear();
};

document.getElementById('clearCart').addEventListener('click', clearCart)

function orderConfirm() {
const request = {
    contact: {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        address: addressInput.value,
        city: cityInput.value,
        email: emailInput.value,
    },
    products: affiche,

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
        
        localStorage.clear(); 
        localStorage.setItem('cont', JSON.stringify(request.contact));  
        localStorage.setItem("orderId", value.orderId);
        localStorage.setItem('orderPrice', totalCommand);
        document.location.href = "confirmation.html";
    })   
}
document.getElementById('submit').addEventListener('click', orderConfirm);

})
