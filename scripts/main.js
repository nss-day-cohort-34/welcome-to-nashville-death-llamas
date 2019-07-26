// This is where we call functions and pull our hair out

const getConcertFetch = () => {
getConcertData().then(concerts => {
    for (const concert of concerts._embedded.events) {
        console.log(concert)
    }
})
}

const getConcertsButton = document.getElementById("concertsSearchButton")

getConcertsButton.addEventListener("click", () => {
    getConcertFetch();
    console.log("im clicked")
})

