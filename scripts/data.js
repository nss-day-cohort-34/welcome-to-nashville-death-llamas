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
const searchMeetups = document.querySelector("#meetupsSearchField")

const getMeetups = () => {
    return fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${searchMeetups.value}&location.address=nashville&token=NAZKLO5PCLPRIX3ALUP5`)
        .then(a => a.json())
        .then(results => {
            for (result of results.events) {
                const htmlRep = meetupsFactory(result)
                DOMprinter(htmlRep)
            }
            const saveMeetupsButtons = document.querySelectorAll(".saveMeetupsButton")
            saveMeetupsButtons.forEach(meetup => {
                meetup.addEventListener("click", () => {
                    const meetupName = meetup.parentElement.childNodes[1]
                    // const meetupUrl = meetup.parentElement.childNodes.children[0]

                    const meetupsHTML = `
                    <p>${meetupName.innerText}</p>
                    `

                    const meetupsItinerary = document.querySelector("#itineraryContainer__meetup")
                    meetupsItinerary.innerHTML = meetupsHTML

                })
            })
        })
}
const meetupsButton = document.querySelector("#meetupsSearch")
meetupsButton.addEventListener("click", getMeetups)

const concertInputValue = document.querySelector("#concertInput")

getConcertData = () => {
    return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&sort=date,desc&keyword=${concertInputValue.value}&apikey=QPEjElLoY6LMzzk0gwmG1gZcaWoXb93y&size=10`)
        .then(concerts => concerts.json())
}

const parkSearch = document.querySelector("#parkSearchField")


const parkFetcher = () => {
    return fetch(`https://data.nashville.gov/resource/74d7-b74t.json?$$app_token=uyvbFrUZ9I6eWTToRXt5hNAvw&${parkSearch.value}=Yes&$limit=10`)
        .then(data => data.json())
}

