const restarauntFetcher = () => {
    fetch("https://opentable.herokuapp.com/api/restaurants?city=Nashville")
        .then(r => r.json())
        .then(results => {
            console.log(results)
            for (result of results.restaurants) {
                const restarauntHTML = repHTML(result)
                printToDOM(restarauntHTML)
            }
        })
}

restarauntFetcher()

//matt's code below (does beg refactoring at "modularization phase")
const searchMeetups = document.querySelector("#meetupsSearchField").value

const getMeetups = () => {
    return fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${searchMeetups}&location.address=nashville&token=NAZKLO5PCLPRIX3ALUP5`)
        .then(a => a.json())
        .then(results => {
            // console.log(results)
            for (result of results.events) {
                const htmlRep = meetupsFactory(result)
                DOMprinter(htmlRep)
            }

        })
}

const meetupsButton = document.querySelector("#meetupsSearch")
meetupsButton.addEventListener("click", getMeetups)

const concertInputValue = document.querySelector("#concertInput").value

getConcertData = () => {
    return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&sort=date,asc&keyword=${concertInputValue}&apikey=QPEjElLoY6LMzzk0gwmG1gZcaWoXb93y`)
    .then(concerts => concerts.json())
}

const parkSearch = document.querySelector("#parkSearchField")


const parkFetcher = () => {
    return fetch(`https://data.nashville.gov/resource/74d7-b74t.json?$$app_token=uyvbFrUZ9I6eWTToRXt5hNAvw&${parkSearch.value}=Yes&$limit=10`)
        .then(data => data.json())
}

