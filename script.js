var buttons = document.getElementsByClassName("fas"); // on recupere tous les éléments qui ont une classe "fas" 
var buttonsArray = Array.from(buttons); // on convertis notre collection d'éléments en un tableau 
var itemTotalPrice = document.getElementById("total") // on recupere l'élément total price

buttonsArray.forEach(button => {
    button.addEventListener("click", ()=>{

        var itemQuantity;
        var quantity; 

        if(button.classList.contains("fa-plus-circle")){

            itemQuantity = button.nextElementSibling
            quantity = itemQuantity.innerHTML
            itemQuantity.innerHTML = parseInt(quantity) + 1
            var unitPrice = button.parentNode.previousElementSibling.innerHTML
            unitPrice = unitPrice.replace("$", "") // on supprime le dollars $
            unitPrice = parseInt(unitPrice)
            itemTotalPrice.innerHTML = parseInt(itemTotalPrice.innerHTML) + unitPrice

            console.log(unitPrice)
        }
        
        else if(button.classList.contains("fa-minus-circle")){
            itemQuantity = button.previousElementSibling;
            quantity = itemQuantity.innerHTML;
            quantity = parseInt(quantity);
            if (quantity > 0){
                itemQuantity.innerHTML = quantity -1
                var unitPrice = button.parentNode.previousElementSibling.innerHTML
                unitPrice = unitPrice.replace("$", "") // on supprime le dollars $
                unitPrice = parseInt(unitPrice)
                itemTotalPrice.innerHTML = parseInt(itemTotalPrice.innerHTML) - unitPrice
    
            }

        
        }
        else if (button.classList.contains("fa-trash-alt")){
            var pu = button.parentElement.previousElementSibling.previousElementSibling.innerHTML
            var itemQty = button.parentElement.previousElementSibling.firstElementChild.nextElementSibling
            var qty = itemQty.innerHTML
            pu = pu.replace("$", "")
            pu = parseInt(pu)
            qty = parseInt(qty)
            var ptArticle = qty * pu 
            itemTotalPrice.innerHTML = parseInt(itemTotalPrice.innerHTML) - ptArticle // conversion du chaine de caractere en entier avec parseint avant soustraction 
            itemQty.innerHTML = 0
        }
        else if(button.classList.contains("fa-heart")){
            button.style.color = "red"

        }
    })   
});

function updateTotalPrice(button) {
    var unitPrice = button.parentNode.previousElementSibling.innerHTML
    unitPrice = unitPrice.replace("$", "") // on supprime le dollars $
    unitPrice = parseInt(unitPrice)
    itemTotalPrice.innerHTML = parseInt(itemTotalPrice.innerHTML) + unitPrice

}