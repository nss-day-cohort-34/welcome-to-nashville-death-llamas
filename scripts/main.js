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
    })
}


parkSearchButton.addEventListener("click", () => {
        parksInDom.innerHTML = ""
        fetchTheFetcher()
})