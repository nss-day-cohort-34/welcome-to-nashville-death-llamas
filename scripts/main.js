// This is where we call functions and pull our hair out

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

