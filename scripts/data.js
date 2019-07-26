// This will contain all of our fetch calls from each of the four APIs
const concertInputValue = document.querySelector("#concertInput").value

getConcertData = () => {
    return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&sort=date,asc&keyword=${concertInputValue}&apikey=QPEjElLoY6LMzzk0gwmG1gZcaWoXb93y`)
    .then(concerts => concerts.json())
}