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
                printToDOM(htmlRep)
            }

        })
}

const meetupsButton = document.querySelector("#meetupsSearch")
meetupsButton.addEventListener("click", getMeetups)