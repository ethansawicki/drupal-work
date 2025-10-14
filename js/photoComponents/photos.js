import { exportPhotos } from "../fetch.js"

//not sure on what other values needed from photos object
const listPhotos = (photos) => {
    let photoHTML = ``
    photoHTML += `<div class="container-sm p-sm-2 p-md-2 p-lg-2 p-xl-4 p-xxl-4 bg-body-tertiary">`
    photoHTML += `<div id="${photos.audit_id}" class="row m-2 w-100 text-center">`
    photoHTML += `<h4>${photos.case_id}</h4>`
    photoHTML += `<div>`
    photoHTML += `<button type="button"
    data-bs-photo-audit-id="${photos.audit_id}" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-photo="${photos.photo1}" class="btn"><img class="rounded object-fit-sm-contain m-1 modalOpen" src="https://media1.tenor.com/m/j3rPvosqgYcAAAAd/ryan-gossling-blade-runner.gif" alt="..."></button>`
    photoHTML += `<button type="button" id="photo--2" class="btn"><img class="rounded object-fit-sm-contain m-1" src="https://media1.tenor.com/m/j3rPvosqgYcAAAAd/ryan-gossling-blade-runner.gif" alt="..."></button>`
    photoHTML += `<button type="button" id="photo--3" class="btn"><img class="rounded object-fit-sm-contain m-1" src="https://media1.tenor.com/m/j3rPvosqgYcAAAAd/ryan-gossling-blade-runner.gif" alt="..."></button>`
    photoHTML += `</div>`
    photoHTML += `<h5>${photos.createddate}</h5>`
    photoHTML += `</div>`
    photoHTML += `</div>`
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

