

fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(data => {
    data.forEach(element => {
       
        const a = document.createElement("a");
        const div = document.createElement("div");
        const img = document.createElement("img");
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const id = element._id;

        a.setAttribute("href", "product.html");
        div.setAttribute("id", element._id);
        img.src = element.imageUrl;
        const price = element.price /100;
        h2.innerHTML = element.name;
        h3.innerHTML = "Prix : " + `${price}` + ".00 €";
        p.innerHTML = element.description;

        ours.appendChild(a).appendChild(div).appendChild(img);
        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(p);
        console.log(id);
        
    });
})
