// Creates HTML with factory functions


const parksHTML = parkObject => {
    const parkAddress = parkObject.mapped_location.human_address
        .replace('{"address": "', "").replace('", "city": "', ", ").replace('", "state": "', ", ").replace('", "zip": ""}', "")
    return `
    <section>
        <h1>${parkObject.park_name}</h1>
        <p>${parkAddress}</p>
    </section>
    `
}