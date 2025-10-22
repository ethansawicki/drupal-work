
export const landingMastRender = () => {
    let landingPageMastHead = ""
   landingPageMastHead += `<div class="container px-5">
   <div id="hero-banner" class="container-fluid">
        <div class="row gx-5 justify-content-center">
            <div class="col-lg-6 bg-dark bg-opacity-75">
                <div class="text-center my-5">
                    <h1 class="display-5 fw-bolder text-white mb-2">
                    Landing Page
                    </h1>
                    <p class="lead text-white-50 mb-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </p>
                    <div class="input-group input-group-lg justify-content-center">
                        <input type="text" class="form-control" placeholder="placeholder" aria-label="placeholder" aria-describedby="button-addon">
                        <button type="button" id="button-addon" class="btn btn-primary">Click me</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>`
    return landingPageMastHead
}