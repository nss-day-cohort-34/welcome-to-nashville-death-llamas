// const restarantFetcher = () => {
//     return fetch("")
// }
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

    .then(r => r.json())
    .then(results => {
        console.log(results)
    })