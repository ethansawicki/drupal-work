

export const photoModal = (prop) => {
    let modalHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Photo Modal</h1>
                            <button type="button" class="btn-close modalClose" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            <div class="modal-content"></div>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary modalClose">Close</button>
                            <button type="button" class="btn btn-primary modalClose">Send message</button>
                            </div>
                        </div>
                        </div>
                    </div>`
    document.querySelector("#mainContainer").addEventListener("click", (event) => {
        const modalDiv = document.querySelector("#exampleModal")
        const modal = new bootstrap.Modal(modalDiv, {backdrop: "static",focus: true})
        modal.toggle()
        document.querySelector('#exampleModal').addEventListener("click", (event) =>{
            if(event.target.classList.contains('modalClose')) {
                modal.hide()
            }
        })
    })
    return modalHTML
}