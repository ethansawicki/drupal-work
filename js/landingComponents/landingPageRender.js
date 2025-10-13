
export const landingPageRender = () => {
    let landingPageHTML = ``
    landingPageHTML += `<header class="bg-dark py-5">`
    landingPageHTML += `<div class="container px-5">`
    landingPageHTML += `<div class="row gx-5 justify-content-center">
                            <div class="col-lg-6">
                                <div class="text-center my-5">
                                    <h1 class="display-5 fw-bolder text-white mb-2">
                                    Landing Page
                                    </h1>
                                    <p class="lead text-white-50 mb-4">Some words</p>
                                    <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                        <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Click me</button>
                                    </div>
                                </div>
                            </div>
                        </div>`
    landingPageHTML += `</div>`
    landingPageHTML += `</header>`
    landingPageHTML += `<section class="features-icons bg-light text-center">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                            <div class="features-icons-icon d-flex">
                                                <i class="bi bi-arrow-down-circle-fill m-auto text-primary"></i>
                                            </div>
                                                <h3>Stuff here</h3>
                                                <p class="lead mb-0">paragraph</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                            <div class="features-icons-icon d-flex">
                                                <i class="bi bi-arrow-down-circle-fill m-auto text-primary"></i>
                                            </div>
                                                <h3>Stuff here</h3>
                                                <p class="lead mb-0">paragraph</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                            <div class="features-icons-icon d-flex">
                                                <i class="bi bi-arrow-down-circle-fill m-auto text-primary"></i>
                                            </div>
                                                <h3>Stuff here</h3>
                                                <p class="lead mb-0">paragraph</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section
                        <section class="showcase p-5">
                            <div class="container-fluid p-0">
                                <div class="row g-0">
                                    <div class="col-lg-6 order-lg-2 text-white showcase-img">img here</div>
                                    <div class="col-lg-6 order-lg-1 my-auto" style="padding: 7rem">
                                        <h2>Showcase 1</h2>
                                        <p class="lead mb-2">Showcase 1</p>
                                    </div>
                                </div>
                                <div class="row g-0">
                                    <div class="col-lg-6 text-white showcase-img">img2 here</div>
                                    <div class="col-lg-6 my-auto" style="padding: 7rem">
                                        <h2>Showcase 2</h2>
                                        <p class="lead mb-0">Showcase 2</p>
                                    </div>    
                                </div>
                            </div>
                        </section>`
    return landingPageHTML
}
