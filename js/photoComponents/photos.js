import { exportPhotos } from "../fetch.js"

//not sure on what other values needed from photos object
const listPhotos = (photos) => {
    const modalDiv = document.querySelector('#exampleModal')
    let photoHTML = ``
    photoHTML += `<div class="container-sm p-sm-2 p-md-2 p-lg-2 p-xl-4 p-xxl-4 bg-body-tertiary">`
    photoHTML += `<div id="${photos.audit_id}" class="row m-2 w-100 text-center">`
    photoHTML += `<h4>${photos.case_id}</h4>`
    photoHTML += `<div>`
    photoHTML += `<button type="button" data-bs-target="#exampleModal" 
    data-bs-photo-auditId="${photos.audit_id}" id="photo" class="btn"><img class="rounded object-fit-sm-contain m-1" src="https://media1.tenor.com/m/j3rPvosqgYcAAAAd/ryan-gossling-blade-runner.gif" alt="..."></button>`
    photoHTML += `<button type="button" id="photo--2" class="btn"><img class="rounded object-fit-sm-contain m-1" src="https://media1.tenor.com/m/j3rPvosqgYcAAAAd/ryan-gossling-blade-runner.gif" alt="..."></button>`
    photoHTML += `<button type="button" id="photo--3" class="btn"><img class="rounded object-fit-sm-contain m-1" src="https://media1.tenor.com/m/j3rPvosqgYcAAAAd/ryan-gossling-blade-runner.gif" alt="..."></button>`
    photoHTML += `</div>`
    photoHTML += `<h5>${photos.createddate}</h5>`
    photoHTML += `</div>`
    photoHTML += `</div>`
    return photoHTML
}



//photos are broken because these are just file names/constructors(?) that i have no access to
export const renderPhotos = () => {
    const photos = exportPhotos()
    let photoContainer = photos.filter((photo, idx) => idx < 5).map(photo => {
        return listPhotos(photo)
    }).join("")
    return photoContainer
}

