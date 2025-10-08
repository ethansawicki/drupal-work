import { landingPageRender } from "../landingComponents/landingPageRender.js";
import { surveyForm } from "../surveyComponents/surveyForm.js";
//not needed used this for me to get around locally
export const routes = {
    '#/': landingPageRender(),
    '#/survey': surveyForm(),
};

export const handleRoute = () => {
    const hash = window.location.hash || "#/"
    const content = routes[hash] ? routes[hash] : `<h1>404</h1>`
    document.getElementById("mainContainer").innerHTML = content
}

window.addEventListener('hashchange', handleRoute)
window.addEventListener('load', handleRoute)

const navContainer = document.querySelector('.navigationContainer')
const mainContainer = document.querySelector("#mainContainer")
navContainer.addEventListener("click", (event) => {
    if(event.target.id.startsWith('photo-button')) {
        mainContainer.dispatchEvent(new CustomEvent('renderPhotos'))
        const stateObj = {page: 'photos'}
        history.pushState(stateObj, '', '#/photos')
    }
})