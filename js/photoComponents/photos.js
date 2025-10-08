import { exportPhotos } from "../fetch.js"

const listPhotos = (photos) => {
    let html = ``
    html += `<div id="${photos.audit_id}" class="row m-2 w-100 text-center">`
    html += `<span class="border">`
    html += `<h4>${photos.case_id}</h4>`
    html += `<button type="button" id="photoOneModal" class="btn"><img class="rounded object-fit-sm-contain m-1" src="" alt="..."></button>`
    html += `<img class="rounded object-fit-sm-contain m-1" src="" alt="...">`
    html += `<img class="rounded object-fit-sm-contain m-1" src="" alt="...">`
    html += `<h5>${photos.createddate}</h5>`
    html += `</span>`
    html += `</div>`
    return html
}

//figure out bootstrap modal issue

//photos are broken because these are just file names/constructors(?) that i have no access to
export const renderPhotos = () => {
    const photos = exportPhotos()
    let photoContainer = photos.map(listPhotos).join("")
    return photoContainer
}

