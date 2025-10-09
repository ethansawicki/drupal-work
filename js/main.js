import { navBar } from "./navigation/navComponent.js";
import { routes } from "./spaRouter/router.js";
import {footerRender} from "./footer.js"

const navContainer = document.querySelector('#navigationContainer')
const footerContainer = document.querySelector('#footerContainer')


const renderApp = async () => {
    navContainer.innerHTML = navBar()
    footerContainer.innerHTML = footerRender()
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
