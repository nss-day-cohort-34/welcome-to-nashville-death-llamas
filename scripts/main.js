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
    const saveParkButton = document.querySelector("#saveParkButton")
    saveParkButton.addEventListener("click", () => {
        console.log("hello")
    })
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



// let i = 0
// const incrementID = () => {
//     i++
//     return i
// }


// const incrementedID = incrementID()

// const cardFactory = () => {
// `
//     <section class="card--${incrementedID}">
//         <p>${textarea.value}</p>
//         <button class="deleteButton delete--${incrementedID}">Delete</button>
//     </section>
// `
// }


