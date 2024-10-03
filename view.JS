updateView()
function updateView(){
    app.innerHTML = /*HTML*/ `

    <input onchange="userinput=this.value">
    <button onclick="addToCart()">add to cart</button>
    <div>Frukt disk</div>
    <ul>${showFood()}</ul>
    <div>Shopping cart:</div>
    <ul>${pickedFruit()}</ul>
    
    
    `
}

function showFood(){
    let html=''
    for (i = 0; i < fruitSection.length; i++){
        html += `<li>${fruitSection[i]}</li>`
    }return html
}

function pickedFruit(){
    let html=''
    for (i = 0; i < shoppingCart.length; i++){
        html += `<li>${shoppingCart[i]}</li>`
    }return html
}