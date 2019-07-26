// const restarantFetcher = () => {
//     return fetch("")
// }

fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating", {
        headers: {
            "Accept": "application/json",
            "user-key": "26e679825e84d13d1cb5d6eb48c1c89f"
        }
    })
    .then(r => r.json())
    .then(results => {
        console.log(results)
    })