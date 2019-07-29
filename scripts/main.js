// This is where we call functions and pull our hair out


// let parkSearch = document.querySelector("#parksSearchField").value
const parkSearchButton = document.querySelector("#parkSearchButton")

const fetchTheFetcher = () => {
    parkFetcher().then(parks => {
        // console.log('parks: ', parks);

        for (let i = 0; i < parks.length; i++) {
            const park = parks[i];
            const htmlRep = parksHTML(park)
            renderPark(htmlRep)

        }
    })
}


parkSearchButton.addEventListener("click", () => {
    parksInDom.innerHTML = ""
    fetchTheFetcher()
})
const getConcertFetch = () => {
    getConcertData().then(concerts => {

        for (let index = 0; index < concerts._embedded.events.length; index++) {
            const oneConcert = concerts._embedded.events[index];
            const finalConcert = createConcertHTML(oneConcert)
            renderConcerts(finalConcert)
            console.log(concerts)

        }
    })
}

const getConcertsButton = document.getElementById("concertsSearchButton")

getConcertsButton.addEventListener("click", () => {
    getConcertFetch();
})

const addMeetupsButton = document.querySelector("#resultsContainer")
debugger
addMeetupsButton.addEventListener("click", () => {
    const meetupItem = meetupHTMLInItinerary
    DOMprinter2(meetupItem)
})

