import { exportPhotos } from "../fetch.js"
import { photoModal } from "./photoModal.js"
//not sure on what other values needed from photos object
const listPhotos = (photos) => {
    const modalDiv = document.querySelector('#modalContainer')
    let photoHTML = ``
    photoHTML += `<div class="container-sm p-sm-2 p-md-2 p-lg-2 p-xl-4 p-xxl-4 bg-body-tertiary">`
    photoHTML += `<div id="${photos.audit_id}" class="row m-2 w-100 text-center">`
    photoHTML += `<h4>${photos.case_id}</h4>`
    photoHTML += `<div>`
    photoHTML += `<button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" id="photo--${photos.photo1}" class="btn"><img class="rounded object-fit-sm-contain m-1" src="https://media1.tenor.com/m/j3rPvosqgYcAAAAd/ryan-gossling-blade-runner.gif" alt="..."></button>`
    photoHTML += `<button type="button" id="photo--${photos.photo2}" class="btn"><img class="rounded object-fit-sm-contain m-1" src="https://media1.tenor.com/m/j3rPvosqgYcAAAAd/ryan-gossling-blade-runner.gif" alt="..."></button>`
    photoHTML += `<button type="button" id="photo--${photos.photo3}" class="btn"><img class="rounded object-fit-sm-contain m-1" src="https://media1.tenor.com/m/j3rPvosqgYcAAAAd/ryan-gossling-blade-runner.gif" alt="..."></button>`
    photoHTML += `</div>`
    photoHTML += `<h5>${photos.createddate}</h5>`
    photoHTML += `</div>`
    photoHTML += `</div>`
    modalDiv.innerHTML = photoModal(photos) //works need to set it based on what photo was clicked
    return photoHTML
}

//photos are broken because these are just file names/constructors(?) that i have no access to
export const renderPhotos = () => {
    const photos = exportPhotos()
    let photoContainer = photos.map(listPhotos).join("")
    return photoContainer
}

