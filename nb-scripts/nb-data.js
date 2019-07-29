// This will contain all of our fetch calls from each of the four APIs

const parkSearch = document.querySelector("#parkSearchField")


const parkFetcher = () => {
    return fetch(`https://data.nashville.gov/resource/74d7-b74t.json?$$app_token=uyvbFrUZ9I6eWTToRXt5hNAvw&${parkSearch.value}=Yes&$limit=10`)
        .then(data => data.json())
}

