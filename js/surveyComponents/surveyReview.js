import { postToApi } from "../fetch.js"
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
    // surveyHTML += `<option value="AL">Alabama</option>
    //                 <option value="AK">Alaska</option>
    //                 <option value="AZ">Arizona</option>
    //                 <option value="AR">Arkansas</option>
    //                 <option value="CA">California</option>
    //                 <option value="CO">Colorado</option>
    //                 <option value="CT">Connecticut</option>
    //                 <option value="DE">Delaware</option>
    //                 <option value="DC">District Of Columbia</option>
    //                 <option value="FL">Florida</option>
    //                 <option value="GA">Georgia</option>
    //                 <option value="HI">Hawaii</option>
    //                 <option value="ID">Idaho</option>
    //                 <option value="IL">Illinois</option>
    //                 <option value="IN">Indiana</option>
    //                 <option value="IA">Iowa</option>
    //                 <option value="KS">Kansas</option>
    //                 <option value="KY">Kentucky</option>
    //                 <option value="LA">Louisiana</option>
    //                 <option value="ME">Maine</option>
    //                 <option value="MD">Maryland</option>
    //                 <option value="MA">Massachusetts</option>
    //                 <option value="MI">Michigan</option>
    //                 <option value="MN">Minnesota</option>
    //                 <option value="MS">Mississippi</option>
    //                 <option value="MO">Missouri</option>
    //                 <option value="MT">Montana</option>
    //                 <option value="NE">Nebraska</option>
    //                 <option value="NV">Nevada</option>
    //                 <option value="NH">New Hampshire</option>
    //                 <option value="NJ">New Jersey</option>
    //                 <option value="NM">New Mexico</option>
    //                 <option value="NY">New York</option>
    //                 <option value="NC">North Carolina</option>
    //                 <option value="ND">North Dakota</option>
    //                 <option value="OH">Ohio</option>
    //                 <option value="OK">Oklahoma</option>
    //                 <option value="OR">Oregon</option>
    //                 <option value="PA">Pennsylvania</option>
    //                 <option value="RI">Rhode Island</option>
    //                 <option value="SC">South Carolina</option>
    //                 <option value="SD">South Dakota</option>
    //                 <option value="TN">Tennessee</option>
    //                 <option value="TX">Texas</option>
    //                 <option value="UT">Utah</option>
    //                 <option value="VT">Vermont</option>
    //                 <option value="VA">Virginia</option>
    //                 <option value="WA">Washington</option>
    //                 <option value="WV">West Virginia</option>
    //                 <option value="WI">Wisconsin</option>
    //                 <option value="WY">Wyoming</option>`
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
mainContainer.addEventListener("click", (event) => {
    if(event.target.id.startsWith("btnSubmit")) {
        postToApi(parsedSurveyInput)
        event.preventDefault()
    }
})