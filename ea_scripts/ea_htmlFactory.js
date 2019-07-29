const createConcertHTML = (concertObj) => {

    return `
        <h3>${concertObj.name}</h3>
        <p>${concertObj.dates.start.localDate}</p>
        <button class="addButton"> Add </button>
    `
}