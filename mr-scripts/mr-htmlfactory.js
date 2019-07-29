
const meetupsFactory = meetup => {
    console.log(meetup.url)
    console.log(meetup.name.text)
    return `
    <section class="meetupEl">
    <p><a href="${meetup.url}">${meetup.name.text}</a></p>
    </section>`

}

/* <p><a href="${meetup.url}">${meetup.name.text}</a></p> */
