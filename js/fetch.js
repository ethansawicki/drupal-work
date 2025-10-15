const data = {
    photoData: []
};

//GET and POST API endpoints
const getApi = "https://tetratechdev01.decisions.com/Primary/restapi/rtflex/post-processingapis/apis/stdailleanerhangertickets/restgetphotos/null?sessionid=NS-08db3c36-7e2b-d6bf-5216-4703e8014f32"
//const postApi = "https://tetratechdev01.decisions.com/Primary/PostDataToFlow/Projects/RT%20Flex/RT%20Flex/Post-processing%20APIs/APIs/Std_AIl_Leaner_Hanger_Tickets/AIResultPostToFlowHandler"
const surveyAPI = "https://tetratechdev01.decisions.com/Primary/PostDataToFlow/Projects/SupportTesting/Integrations/Charlotte%20Project/Drupal%20Flows/Post%20To%20Flow%20Handler%20drupal"

//Get
export const getFromApi = async () => {
    try {
        const request = await fetch(getApi)
        const requestJSON = await request.json()
        data.photoData = await requestJSON.Done.azure_blob_audit_Result
        return data.photoData
    } catch (error) {
        console.error(error)
    }
}

//Post TODO need to ask what survey API endpoint is to test.
export const postToApi = async (data) => {
    try {
        const post = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
        }
        const toAPI = await fetch(surveyAPI, post)
        const responseJSON = await toAPI.json()
        console.log(await responseJSON)
    } catch (error) {
        console.error(error)
    }
}
//makes copy of the photoData array
export const exportPhotos = () => {
    return data.photoData.map(photos => ({...photos}))
}