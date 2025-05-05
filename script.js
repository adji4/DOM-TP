var buttons = document.getElementsByClassName("fas")
var quantities = document.getElementsByClassName("quantity")

Array.from(buttons).forEach(button => {
    button.addEventListener("click", ()=>{
        if(button.classList.contains("fa-plus-circle")){

        var quantity = button.nextElementSibling
        
        let value = quantity.innerHTML
        quantity.innerHTML = parseInt(value) + 1
        }
        
    })   
});