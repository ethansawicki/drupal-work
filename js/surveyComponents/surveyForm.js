import { surveyReviewForm } from "./surveyReview.js"

const mainContainer = document.querySelector("#mainContainer")

export let surveyObject = {}

const surveyDelay = 1000

let timer;
//still needs form validation
export const surveyForm = () => {
    let surveyHTML = ``
    surveyHTML += `<form id="surveyFormInput" class="row g-3">`
    surveyHTML += `<div class="col-md-6">`
    surveyHTML += `<label for="inputFirstName" class="form-label">First Name</label>`
    surveyHTML += `<input type="text" placeholder="eg. John" class="form-control" id="inputFirstName" required></input>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="col-md-6">`
    surveyHTML += `<label for="inputLastName" class="form-label">Last Name</label>`
    surveyHTML += `<input type=text placeholder="eg. Doe" class="form-control" id="inputLastName" required></input>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="col-12">`
    surveyHTML += `<label for="inputAddress" class="form-label">Address</label>`
    surveyHTML += `<input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" required></input>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="col-md-12">`
    surveyHTML += `<label for="inputAddress2" class="form-label">Address 2</label>`
    surveyHTML += `<input type="text" class="form-control" id="inputAddress2" placeholder="Apt, Studio, or Floor #"></input>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="col-md-6">`
    surveyHTML += `<label for="inputCity" class="form-label">City</label>`
    surveyHTML += `<input type="text" class="form-control" id="inputCity" required></input>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="col-md-4">`
    surveyHTML += `<label for="inputState" class="form-label">State</label>`
    surveyHTML += `<select id="inputState" class="form-select" required>`
    surveyHTML += `<option selected>Select State</option>`
    surveyHTML += `<option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>`
    surveyHTML += `</select>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="col-md-6">`
    surveyHTML += `<label for="homePhoneNumber" class="form-label">Home Phone Number</label>`
    surveyHTML += `<input type="tel" class="form-control" id="homePhoneNumber"></input>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="col-md-6">`
    surveyHTML += `<label for="mobilePhoneNumber" class="form-label">Mobile Phone Number</label>`
    surveyHTML += `<input type="tel" class="form-control" id="mobilePhoneNumber" required></input>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="col-md-6">`
    surveyHTML += `<label for="feedback" class="form-label">Feedback</label>`
    surveyHTML += `<textarea class="form-control" id="feedback" rows="3"></textarea>`
    surveyHTML += `</div>`
    surveyHTML += `</form>`
    surveyHTML += `<div class="d-grid gap-2 col-6 mx-auto">`
    surveyHTML += `<button id="btnReview" class="btn btn-primary" type="button">Review</button>`
    surveyHTML += `</div>`
    return surveyHTML
}

const setToStorage = () => {
    const surveyFirstName = document.querySelector("#inputFirstName").value
        const surveyLastName = document.querySelector("#inputLastName").value
        const surveyAddress1 = document.querySelector("#inputAddress").value
        const surveyAddress2 = document.querySelector("#inputAddress2").value
        const surveyCity = document.querySelector("#inputCity").value
        const surveyState = document.querySelector("#inputState").value
        const surveyHomePhone = document.querySelector("#homePhoneNumber").value.replaceAll('-', "")
        const surveyMobilePhone = document.querySelector("#mobilePhoneNumber").value.replaceAll('-', "")
        const surveyFeedback = document.querySelector("#feedback").value
        surveyObject = {
            firstName: surveyFirstName,
            lastName: surveyLastName,
            address1: surveyAddress1,
            address2: surveyAddress2,
            city: surveyCity,
            state: surveyState,
            homePhone: parseInt(surveyHomePhone),
            mobilePhone: parseInt(surveyMobilePhone),
            feedback: surveyFeedback
        }
        sessionStorage.setItem("survey_input", JSON.stringify(surveyObject));
}

const autoSaveTimeout = () => {
    clearTimeout(timer)
    timer = setTimeout(() => setToStorage(), surveyDelay)
}

mainContainer.addEventListener("input", (event) => {
    event.stopPropagation()
    autoSaveTimeout()
})

mainContainer.addEventListener("click", (event) => {
    if(event.target.id.startsWith("btnReview")){
        event.preventDefault()
        mainContainer.innerHTML = surveyReviewForm();
    }
})