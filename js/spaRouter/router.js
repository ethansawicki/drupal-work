import { getFromApi } from "../fetch.js";
import { landingPageRender } from "../landingComponents/landingPageRender.js";
import { mainPhotoContainer } from "../photoComponents/photosRender.js";
import { surveyForm } from "../surveyComponents/surveyForm.js";
//not needed used this for me to get around locally
export const routes = {
    '#/': landingPageRender(),
    '#/survey': surveyForm(),
    '#/photos': mainPhotoContainer()
};

export const handleRoute = async () => {
    await getFromApi()
    const hash = window.location.hash || "#/"
    const content = routes[hash] ? routes[hash] : `<h1>404</h1>`
    document.getElementById("mainContainer").innerHTML = await content
}

window.addEventListener('hashchange', handleRoute)
window.addEventListener('load', handleRoute)

