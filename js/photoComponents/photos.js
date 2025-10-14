import { exportPhotos } from "../fetch.js"

//not sure on what other values needed from photos object
const listPhotos = (photos) => {
    let photoHTML = ``
    photoHTML += `<div class="py-5 bg-body-tertiary">
                    <div class="container">
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <div class="col">
                                <div class="card shadow-sm">
                                    <img>
                                    <div class="card-body">
                                        <p class="card-text"></p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-photo="${photos.photo1}"
                                            data-bs-photo-audit-id="${photos.audit_id}" class="btn btn-sm">Do something</button>
                                            <small class="text-body-secondary">${photos.createddate}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card shadow-sm">
                                    <img>
                                    <div class="card-body">
                                        <p class="card-text"></p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-photo="${photos.photo2}"
                                            data-bs-photo-audit-id="${photos.audit_id}" class="btn btn-sm">Do something</button>
                                            <small class="text-body-secondary">${photos.createddate}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card shadow-sm">
                                    <img>
                                    <div class="card-body">
                                        <p class="card-text"></p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-photo="${photos.photo3}"
                                            data-bs-photo-audit-id="${photos.audit_id}" class="btn btn-sm">Do something</button>
                                            <small class="text-body-secondary">${photos.createddate}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>`
    
    const modalEl = document.getElementById('modalContainer')
    modalEl.addEventListener('show.bs.modal', event => {
            const button = event.relatedTarget
            const photo = button.getAttribute('data-bs-photo')
            const auditId = button.getAttribute('data-bs-photo-audit-id')
            const modalBodyInput = modalEl.querySelector('.modal-body')
            const modalTitle = modalEl.querySelector('.modal-title')
            modalTitle.textContent = `Audit ID: ${auditId}`
            modalBodyInput.innerHTML = `<img class="rounded object-fit-sm-contain" src="${photo}">`
        })
    return photoHTML
}



//photos are broken because these are just file names/constructors(?) that i have no access to
//the filter can be removed i just didnt want to be showing EVERY single js object on the page.
export const renderPhotos = () => {
    const photos = exportPhotos()
    let photoContainer = photos.filter((photo, idx) => idx < 5).map(photo => {
        return listPhotos(photo)
    }).join("")
    return photoContainer
}

