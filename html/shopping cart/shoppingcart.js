let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'gray Tshirt',
        tag: 'grayshirt',
        price:15,
        inCart:0
    },
    {
        name: 'black Tshirt',
        tag: 'blackshirt',
        price:20,
        inCart:0
    },
    {
        name: 'white Tshirt',
        tag: 'whiteshirt',
        price:35,
        inCart:0
    },
    {
        name: 'blue Tshirt',
        tag: 'blueshirt',
        price:25,
        inCart:0
    }
];

for(let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', function(){
        cartNumbers(products[i]);
        totalCost(products[i]);
})
}

function cartNumbers(product){

    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else{
    localStorage.setItem('cartNumbers',1);
    document.querySelector('.cart span').textContent = 1;
    }
    //calling setItem(); here...
    setItems(product);
}
// showing data in cart when loading...

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

// which product are we calling...

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
    if(cartItems[product.tag] == undefined){
        cartItems = {
            ...cartItems,
            [product.tag] : product
        }
    }
    //??????????????
        cartItems[product.tag].inCart += 1;
        cartItem["gray tshirt"].inCart +=1;
    }
    else{
        product.inCart = 1;
        cartItems = {
            [product.tag] : product
        }
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
    
}
function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');
    
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    }
    else{
    localStorage.setItem('totalCost', product.price);
    }
}
function displayCart(){
    let cartItems =  localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.products');
    let cartCost = localStorage.getItem('totalCost');
   
    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item =>{
            productContainer.innerHTML +=`
            <div class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="./images/${item.tag}.jpg">
                <span>${item.name}</span>
            </div>
            <div class="price">${item.price}</div>
            <div class="quantity">
            <button> - </button>
           <span>${item.inCart} </span>
           <button> + </button>
           </div>
           <div class="total">$${item.inCart * item.price},00</div>
           `
        });
        productContainer.innerHTML +=`
            <div class="basketTotalContainer">
            <h4 class="basketTotalTitle"> Basket total</h4>
            <h4 class="basketTotal">
            $${cartCost},00</h4>
            </div>
        `
    }
}

onLoadCartNumbers();
displayCart();









