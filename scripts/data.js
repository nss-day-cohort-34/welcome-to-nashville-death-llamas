// This will contain all of our fetch calls from each of the four APIs

getConcertData = () => {
    return fetch(" https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&apikey=QPEjElLoY6LMzzk0gwmG1gZcaWoXb93y")
    .then(concerts => concerts.json())
    .then(concerts => {
        for (const concert of concerts._embedded.events) {
            console.log(concert.name)
        }
    })
}