//need to align nav links to right so WIP
export const navBar = () => {
    let html = `
        <nav class="navbar navbar-expand-lg bg-dark-subtle">
            <div class="container-fluid">
                <a class="navbar-brand" href="#/">Test</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active"  href="#">Home</a>
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
        </nav>`
        return html
}