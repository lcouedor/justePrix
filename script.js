let selectedObject = 0;

let obj = [
    {name: 'tableau', price : '500'},
    {name: 'chaise', price : '100'},
    {name: 'lit', price : '1000'},
    {name: 'armoire', price : '2000'}];



function HigherOrLower(price) {
    if(obj[selectedObject].price > price) {
        return 'sup' // true si supérieur
    } else if(obj[selectedObject].price < price) {
        return 'inf' // false si inférieur
    } else if(obj[selectedObject].price == price) {
        return 'egal' // egal si égal
    }
}

