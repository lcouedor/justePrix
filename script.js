window.addEventListener("DOMContentLoaded", () => {

    let selectedObject = 0

    let obj = [
        {name: 'tableau', price: 500},
        {name: 'chaise', price: 100},
        {name: 'lit', price: 1000},
        {name: 'armoire', price: 2000}
    ]


    let divProduit = document.getElementById("produit")
    let divResult = document.getElementById("result")
    let btnValide = document.getElementById("verif")

    function HigherOrLower(price) {
        // console.log("prix:", price)
        console.log(obj[selectedObject].price > price)
        if (obj[selectedObject].price > price) {
            divResult.innerHTML = "C'est plus" // true si supérieur
        } else if (obj[selectedObject].price < price) {
            divResult.innerHTML = "C'est moins" // false si inférieur
        } else if (obj[selectedObject].price === price) {
            divResult.innerHTML = "Oui oui oui, c'est gagné !" // egal si égal
            btnValide.disabled = "true";
        }
    }

    function init() {
        divProduit.innerHTML = obj[selectedObject].name
    }

    function Guess() {
        let price = document.getElementById('prix').value
        HigherOrLower(price)
    }

    init();
    btnValide.addEventListener("click", Guess)

});