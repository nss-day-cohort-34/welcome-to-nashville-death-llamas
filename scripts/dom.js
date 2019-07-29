// This will contain functions that accept html strings as arguments and puts them in the DOM
const restarauntResults = document.querySelector("#restaurantResults");
console.log(restarauntResults)
const printToDOM = (htmlString) => {
    restarauntResults.innerHTML += htmlString
}