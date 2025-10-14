import { landingMastRender } from "../landingComponents/landingPageMast.js";
import { landingPageRender } from "../landingComponents/landingPageRender.js";
import { photoMastheadRender } from "../photoComponents/photosMasthead.js";
import { mainPhotoContainer } from "../photoComponents/photosRender.js";
import { surveyForm } from "../surveyComponents/surveyForm.js";
import { surveyMastheadRender } from "../surveyComponents/surveyMasthead.js";
//not needed used this for me to get around locally
export const routes = {
    '#/': landingPageRender(),
    '#/survey': surveyForm(),
    '#/photos': mainPhotoContainer()
};
const mastHeads = {
    '#/': landingMastRender(),
    '#/survey': surveyMastheadRender(),
    '#/photos': photoMastheadRender()
}
export const handleRoute = async () => {
    const hash = window.location.hash || "#/"
    const content = routes[hash] ? routes[hash] : `<h1>404</h1>`
    const mastheadContent = mastHeads[hash] ?  mastHeads[hash] : `<h2>Uh Oh...</h2>`
    document.querySelector("#headerContainer").innerHTML = mastheadContent
    document.querySelector("#mainContainer").innerHTML = await content
}

window.addEventListener('hashchange', handleRoute)
window.addEventListener('load', handleRoute)

