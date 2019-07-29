const repHTML = (restarauntObject) => {
    return `
    <aside>
        <h1>${restarauntObject.name}</h1>
    </aside>`

}

//matt's code below
const meetupsFactory = meetup => {
    console.log(meetup.url)
    console.log(meetup.name.text)
    return `
    <section class="meetupEl">
    <p><a href="${meetup.url}">${meetup.name.text}</a></p>
    </section>`

}

const createConcertHTML = (concertObj) => {

    return `
        <h3>${concertObj.name}</h3>
        <p>${concertObj.dates.start.localDate}</p>
        <button class="addButton"> Add </button>
    `
}