import { navBar } from "./navigation/navComponent.js";
import { routes } from "./spaRouter/router.js";
import {footerRender} from "./footer.js"
import { photoModal } from "./photoComponents/photoModal.js";

const navDiv = document.createElement('div')
const mainContainer = document.createElement('div')
const footerDiv = document.createElement('footer')
const modalDiv = document.createElement('div')
modalDiv.id = "modalContainer"
navDiv.id = "navigationContainer"
navDiv.classList.add("sticky-sm-top", "sticky-md-top", "sticky-lg-top", "sticky-xl-top")
mainContainer.id = "mainContainer"
footerDiv.id = "footer"
footerDiv.classList.add("mt-auto", "bg-dark", "text-light")
document.querySelector('#app').appendChild(modalDiv)
document.querySelector('#app').appendChild(navDiv)
document.querySelector('#app').appendChild(mainContainer)
document.querySelector('#app').appendChild(footerDiv)

const renderApp = () => {
    document.querySelector('#navigationContainer').innerHTML = navBar()
    document.querySelector('#footer').innerHTML = footerRender()
    document.querySelector('#modalContainer').innerHTML = photoModal()
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'))
}
renderApp()
const state = {
    currentPage: 'home',
    isLoading: false
};

function updateState(newState) {
    Object.assign(state, newState);
    renderContent();
}

function renderContent() {
    const appDiv = document.getElementById('mainContainer');
    if (state.isLoading) {
        appDiv.innerHTML = '<div>Loading...</div>';
        return;
    }
    appDiv.innerHTML = routes[window.location.hash || '#/']();
}
