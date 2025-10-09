
//ignore for now
const mainContainer = document.querySelector("#mainContainer")
const surveyInput = sessionStorage.getItem("survey_input")
const parsedSurveyInput = JSON.parse(surveyInput)


export const surveyReviewForm = () => {
    let surveyHTML = ``
    surveyHTML += `<form id="surveyFormReview" class="row g-3">`
    surveyHTML += `<div class="col-md-6">`
    surveyHTML += `<label for="inputFirstName" class="form-label">First Name</label>`
    surveyHTML += `<input type="text" placeholder="eg. John" class="form-control" id="inputFirstName" value="${parsedSurveyInput?.firstName}" required></input>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="col-md-6">`
    surveyHTML += `<label for="inputLastName" class="form-label">Last Name</label>`
    surveyHTML += `<input type=text placeholder="eg. Doe" class="form-control" id="inputLastName" value="${parsedSurveyInput?.lastName}" required></input>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="col-12">`
    surveyHTML += `<label for="inputAddress" class="form-label">Address</label>`
    surveyHTML += `<input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" value="${parsedSurveyInput?.address1}" required></input>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="col-md-12">`
    surveyHTML += `<label for="inputAddress2" class="form-label">Address 2</label>`
    surveyHTML += `<input type="text" class="form-control" id="inputAddress2" placeholder="Apt, Studio, or Floor #" value="${parsedSurveyInput?.address2}"></input>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="col-md-6">`
    surveyHTML += `<label for="inputCity" class="form-label">City</label>`
    surveyHTML += `<input type="text" class="form-control" id="inputCity" value="${parsedSurveyInput?.city}" required></input>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="col-md-6">`
    surveyHTML += `<label for="inputState" class="form-label">State</label>`
    surveyHTML += `<select id="inputState" class="form-select" required disabled>`
    surveyHTML += `<option selected value="${parsedSurveyInput?.state}" disabled></option>`
    surveyHTML += `</select>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="col-md-6">`
    surveyHTML += `<label for="homePhoneNumber" class="form-label">Home Phone Number</label>`
    surveyHTML += `<input type="tel" class="form-control" id="homePhoneNumber" value="${parsedSurveyInput?.homePhone}"></input>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="col-md-6">`
    surveyHTML += `<label for="mobilePhoneNumber" class="form-label">Mobile Phone Number</label>`
    surveyHTML += `<input type="tel" class="form-control" id="mobilePhoneNumber" value="${parsedSurveyInput?.mobilePhone}" required></input>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="col-md-6">`
    surveyHTML += `<label for="inputEmail" class="form-label">Email Address</label>`
    surveyHTML += `<input type="email" class="form-control" id="inputEmail" value="${parsedSurveyInput?.emailAddress}" placeholder="emailaddress@example.com" required></input>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="col-md-6">`
    surveyHTML += `<label for="feedback" class="form-label">Feedback</label>`
    surveyHTML += `<textarea class="form-control" id="feedback" rows="3" value="${parsedSurveyInput?.feedback}"></textarea>`
    surveyHTML += `</div>`
    surveyHTML += `</form>`
    surveyHTML += `<div class="d-grid gap-2 col-6 mx-auto">`
    surveyHTML += `<button id="btnSubmit" class="btn btn-primary" type="button">Submit</button>`
    surveyHTML += `</div>`
    return surveyHTML
}
//doesnt submit anything to db due to no endpoint
// mainContainer.addEventListener("click", (event) => {
//     if(event.target.id.startsWith("btnSubmit")) {
//         postToApi(parsedSurveyInput)
//         event.preventDefault()
//     }
// })