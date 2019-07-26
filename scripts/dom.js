// This will contain functions that accept html strings as arguments and puts them in the DOM
const getConcertElement = document.querySelector("#concertResults")

const renderConcerts = (string) => {
    getConcertElement.innerHTML += string
}