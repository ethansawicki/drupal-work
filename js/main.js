import { routes } from "./spaRouter/router.js";
import {mainPhotoContainer} from "./photoComponents/photosRender.js"
import { getFromApi } from "./fetch.js";


//ignore most things in here if not all.
const mainContainer = document.querySelector('#mainContainer')

const state = {
    currentPage: 'home',
    isLoading: false
}

const updateState = (newState) => {
    Object.assign(state, newState)
    renderContent();
}

const renderContent = () => {
    const mainDiv = document.getElementById('mainContainer')
    if(state.isLoading) {
        mainDiv.innerHTML = '<div>Loading...</div>'
        return
    }
    mainDiv.innerHTML = routes[window.location.hash || '#/'];
}

const renderPhotos = async () => {
    await getFromApi()
    mainContainer.innerHTML = await mainPhotoContainer()
}

mainContainer.addEventListener('renderPhotos', async () => {
   await renderPhotos()
})