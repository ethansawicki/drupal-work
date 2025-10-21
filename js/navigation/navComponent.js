
//need to align nav links to right so WIP and no idea if the "Active page" works cant tell
export const navBar = () => {
    let html = `
    <div id="navigationCont" class="sticky-sm-top sticky-md-top sticky-lg-top sticky-xl-top">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container px-5">
                <a class="navbar-brand" href="#/">Test</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">               
                            <a class="nav-link" href="#/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/survey">Survey</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#/photos">Photos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>`
    
    return html
}
