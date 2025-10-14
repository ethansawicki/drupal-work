export const photoMastheadRender = () => {
    let photoPageMasthead = ""
   photoPageMasthead += `<div class="container px-5">
        <div class="row gx-5 justify-content-center">
            <div class="col-lg-6">
                <div class="text-center my-5">
                    <h1 class="display-5 fw-bolder text-white mb-2">
                    Photo Page
                    </h1>
                    <p class="lead text-white-50 mb-4">Some words</p>
                    <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                        <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Click me</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    return photoPageMasthead
}