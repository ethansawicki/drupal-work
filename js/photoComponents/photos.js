import { exportPhotos } from "../fetch.js"
//not sure on what other values needed from photos object

const listPhotos = (photos) => {
    let html = ``
    html += `<div id="${photos.audit_id}" class="row m-2 w-100 text-center">`
    html += `<h4>${photos.case_id}</h4>`
    html += `<div>` //figure out bootstrap modal issue in devtools gives typeError: Cannot read properties of undefined (reading 'backdrop') dunno why its not working.
    html += `<button type="button" id="photoOneModal" data-bs-target="#exampleModal" data-bs-toggle="modal" class="btn"><img class="rounded object-fit-sm-contain m-1" src="https://media1.tenor.com/m/j3rPvosqgYcAAAAd/ryan-gossling-blade-runner.gif" alt="..."></button>`
    html += `<button type="button" id="photoTwoModal" class="btn"><img class="rounded object-fit-sm-contain m-1" src="https://media1.tenor.com/m/j3rPvosqgYcAAAAd/ryan-gossling-blade-runner.gif" alt="..."></button>`
    html += `<button type="button" id="photoThreeModal" class="btn"><img class="rounded object-fit-sm-contain m-1" src="https://media1.tenor.com/m/j3rPvosqgYcAAAAd/ryan-gossling-blade-runner.gif" alt="..."></button>`
    html += `</div>`
    html += `<h5>${photos.createddate}</h5>`
    html += `</div>`
    return html
}


//Not working. No idea
//const myModalAlternative = new bootstrap.Modal('#exampleModal')
//photos are broken because these are just file names/constructors(?) that i have no access to
export const renderPhotos = () => {
    const photos = exportPhotos()
    let photoContainer = photos.map(listPhotos).join("")
    return photoContainer
}

