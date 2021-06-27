import Product from "./Product.js";
// nome , descrizione , prezzo , categoria , img_path)
const prodotto = new Product("nome","sono un nome", 25 , "categoria ? " , "img/img1.png");

console.log(prodotto);


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
            <img src="/${img_path}" alt="case">
        </div>
        <h3>Nome prodotto</h3>
        <p class="item_text">Lorem ipsum dolor sit amet.</p>
        <div class="price_wrapper"><span class="price">29</span><span>€</span></div>
        
        <!-- <hr> -->
        <button class="buy_now">Buy Now</button>
    </div>
    <!-- item end -->
    
    `
});

document.getElementById("output").innerHTML += `
<!-- offset per gli elementi dell'ultima riga  -->
<div class="item_box item_empty"></div>
<!-- <div class="item_box item_empty"></div> -->


`
