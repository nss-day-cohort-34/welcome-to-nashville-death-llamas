// Creates HTML with factory functions


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
        <button id="saveParkButton">Save</button>
    </section>
    `
}