import Product from "./Product.js";
// nome , descrizione , prezzo , categoria , img_path)
const prodotto = new Product("nome","sono un nome", 25 , "categoria ? " , "img/img1.png");

// console.log(prodotto);


const products = [
    new Product('SSD 1TB Crucial Disk', 'Super fast SSD drive', 49.99, 'PC Hardware', 'img/ssd.jpg'),
    new Product('Aoc 24inc Monitor', 'ultra thin monitor', 149.99, 'PC Monitors', 'img/monitor.jpg'),
    new Product('Corsair ATX Case', 'Small form factor atx desktop pc case', 99.99, 'PC Accessories', 'img/case.jpg'),
    new Product('Anker Vertical mouse', 'Comfy vertical mouse', 29.99, 'PC accessories', 'img/mouse.jpg'),
    new Product('Lenovo Idea pad', 'Modern 8gb ram ultra thin laptop', 549.99, 'Laptops', 'img/laptop.webp'),
    new Product('Walking desk', 'Get fit with the best walking desk', 649.99, 'Office equipment', 'img/desk.webp'),
];


// stampa dei prodotti
products.forEach((element) => {
    const {nome , descrizione , prezzo , categoria , img_path} = element;
    document.getElementById("output").innerHTML += `
    <!-- item start -->
    <div class="item_box">
        <div class="img_box">
            <img src="/${img_path}" alt="${nome}">
        </div>
        <h3>${nome}</h3>
        <p class="item_text">${descrizione}</p>
        <div class="price_wrapper"><span class="price">${prezzo}</span><span>€</span></div>
        
        <!-- <hr> -->
        <button class="buy_now" data-name="${nome}" data-price=${prezzo}>Buy Now</button>
    </div>
    <!-- item end -->
    
    `
});

document.getElementById("output").innerHTML += `
<!-- offset per gli elementi dell'ultima riga  -->
<div class="item_box item_empty"></div>
<div class="item_box item_empty"></div>
<!-- <div class="item_box item_empty"></div> -->

`
let k = document.querySelectorAll(".buy_now") //crea un array di bottoni
// console.log(k);

let totale = 0;
let totaleFixed;
//seleziono tutti i button con classe ".buy_now"
document.querySelectorAll(".buy_now").forEach(function(element){
    // aggiungo un event listener per ogni button 
    element.addEventListener("click", function(){
        console.log(totale);
        // alert("ciao");
        console.log(this);  //this restituice element 
        const prezzo = element.getAttribute("data-price");
        const nome = element.getAttribute("data-name");
        document.getElementById("shop_list").innerHTML += `
            <li>${nome} ${prezzo} € </li>
        `
        console.log(prezzo);
        totale += parseFloat(prezzo);
        totaleFixed = totale.toFixed(2); //conversione a due decimali
        console.log(totale);
        document.getElementById("totale").innerHTML ="Tot : €" +  totaleFixed;
    });
    
    
    
});