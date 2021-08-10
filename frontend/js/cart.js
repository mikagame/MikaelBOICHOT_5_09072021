
let affiche = JSON.parse(localStorage.getItem("article")); 

let totalCommand = 0;
affiche.forEach(element => {
    
    let rowCommand = document.createElement('div');
    let nameCommand = document.createElement('p');
    let quantityCommand = document.createElement('p')
    let priceCommand = document.createElement('p');

    rowCommand.setAttribute('class', 'rowCommand');
    nameCommand.innerHTML = element.name;
    quantityCommand.innerHTML = "0";
    priceCommand.innerHTML = element.price * 0.01 + ".00 €";

    command.appendChild(rowCommand).appendChild(nameCommand);
    command.appendChild(rowCommand).appendChild(quantityCommand);
    command.appendChild(rowCommand).appendChild(priceCommand);
    totalCommand = element.price + totalCommand;
    });

let afficheTotal = document.createElement('div');
afficheTotal.setAttribute('class', 'totalCommand');
afficheTotal.innerHTML = "Montant Total : " + totalCommand * 0.01 + ".00 €";
command.appendChild(afficheTotal);

