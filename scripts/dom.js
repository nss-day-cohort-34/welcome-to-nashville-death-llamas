// This will contain functions that accept html strings as arguments and puts them in the DOM

//DOM location
meetupsContainer = document.querySelector("#meetupResults")

const printToDOM = (htmlString) => {
    //take html string
    meetupsContainer.innerHTML += htmlString
    //add it to innerHTML of DOM location
}

