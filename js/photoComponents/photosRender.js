import { getFromApi } from "../fetch.js"
import { renderPhotos } from "./photos.js"
//renders main photos container

export const mainPhotoContainer = async () => {
    await getFromApi()
    return renderPhotos()
}

