let requestObject = {};
requestObject.contact = contact;
requestObject.products = products;

fetch(url + "/order", {
    method: 'POST',
    body: JSON.stringify(recup),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(rep => rep.json() )

.then(value => {
    
    console.log(value);
})