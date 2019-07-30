const repHTML = (restarauntObject) => {
    return `
    <aside>
        <h1>${restarauntObject.name}</h1>
        <button class="restarauntSaveButton">Save</button>
    </aside>`

}

//matt's code below
const meetupsFactory = meetup => {
    return `
    <section class="meetupEl">
    <p><a href="${meetup.url}">${meetup.name.text}</a></p>
    <button class="saveMeetupsButton">Save</button>
    </section>`
}

// const mettupItineraryItemLocation = document.querySelector("#itineraryContainer__meetup")
// const meetupHTMLInItinerary = meetup => {
//     return `
//     <section class="meetupItinerary--item">
//     <p><a href="${meetup.url}">${meetup.name.text}</a></p>
//     </section>
//     `
// }

const createConcertHTML = (concertObj) => {
    
    return `
    <div>
        <h1>${concertObj.name}</h1>
        <p>${concertObj.dates.start.localDate}</p>
        <button class="concertSaveButton"> Save </button>
    </div>
    `
}



const parksHTML = parkObject => {
    const parkAddress = parkObject.mapped_location.human_address
        .replace('{"address": "', "").replace('", "city": "', ", ").replace('", "state": "', ", ").replace('", "zip": ""}', "").replace('", "zip": "37206"}', "")
        .replace('", "zip": "37080"}', "").replace('", "zip": "37013"}', "").replace('", "zip": "37138"}', "").replace('", "zip": "37211"}', "")
        .replace('", "zip": "37212"}', "").replace('", "zip": "37205"}', "").replace('", "zip": "37027"}', "").replace('", "zip": "37214"}', "")
        .replace('", "zip": "37209"}', "").replace('", "zip": "37076"}', "").replace('", "zip": "37115"}', "")
    return `
    <section>
        <h1>${parkObject.park_name}</h1>
        <p>${parkAddress}</p>
        <button class="saveParkButton">Save</button>
    </section>
    `
}

