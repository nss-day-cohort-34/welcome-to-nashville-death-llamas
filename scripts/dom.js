const restarauntResults = document.querySelector("#restaurantResults");
console.log(restarauntResults)
const printToDOM = (htmlString) => {
    restarauntResults.innerHTML += htmlString
}

//matt's code below
meetupsContainer = document.querySelector("#meetupResults")

const DOMprinter = (htmlString) => {
    //take html string
    meetupsContainer.innerHTML += htmlString
    //add it to innerHTML of DOM location
}
// const DOMprinter2 = htmlString => {
//     mettupItineraryItemLocation.innerHTML += htmlString
// }
const getConcertElement = document.querySelector("#concertResults")

const renderConcerts = (string) => {
    getConcertElement.innerHTML += string
}

const parksInDom = document.querySelector("#parkResults")

const renderPark = parkHTML => {
    parksInDom.innerHTML += parkHTML
}