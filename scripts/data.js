// This will contain all of our fetch calls from each of the four APIs
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



// console.log(results) //this line eventually calls postToDom function (which calls the html factory function)


const meetupsButton = document.querySelector("#meetupsSearch")
meetupsButton.addEventListener("click", getMeetups)

