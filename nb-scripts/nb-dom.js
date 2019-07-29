// This will contain functions that accept html strings as arguments and puts them in the DOM


// const parkResults = document.querySelector("#parkResults")
const parksInDom = document.querySelector("#parkResults")

const renderPark = parkHTML => {
    parksInDom.innerHTML += parkHTML 
}