import { postToApi } from "../fetch.js"
const mainContainer = document.querySelector('#app')
//Move states to dynamically add one via the select drop down
export let surveyObject = {}
const state = [{"name":"Alabama","abbreviation":"AL"},{"name":"Alaska","abbreviation":"AK"},
                {"name":"Arizona","abbreviation":"AZ"},{"name":"Arkansas","abbreviation":"AR"},
                {"name":"California","abbreviation":"CA"},{"name":"Colorado","abbreviation":"CO"},
                {"name":"Connecticut","abbreviation":"CT"},{"name":"Delaware","abbreviation":"DE"},
                {"name":"Florida","abbreviation":"FL"},{"name":"Georgia","abbreviation":"GA"},
                {"name":"Hawaii","abbreviation":"HI"},{"name":"Idaho","abbreviation":"ID"},
                {"name":"Illinois","abbreviation":"IL"},{"name":"Indiana","abbreviation":"IN"},
                {"name":"Iowa","abbreviation":"IA"},{"name":"Kansas","abbreviation":"KS"},
                {"name":"Kentucky","abbreviation":"KY"},{"name":"Louisiana","abbreviation":"LA"},
                {"name":"Maine","abbreviation":"ME"},{"name":"Maryland","abbreviation":"MD"},
                {"name":"Massachusetts","abbreviation":"MA"},{"name":"Michigan","abbreviation":"MI"},
                {"name":"Minnesota","abbreviation":"MN"},{"name":"Mississippi","abbreviation":"MS"},
                {"name":"Missouri","abbreviation":"MO"},{"name":"Montana","abbreviation":"MT"},
                {"name":"Nebraska","abbreviation":"NE"},{"name":"Nevada","abbreviation":"NV"},
                {"name":"New Hampshire","abbreviation":"NH"},{"name":"New Jersey","abbreviation":"NJ"},
                {"name":"New Mexico","abbreviation":"NM"},{"name":"New York","abbreviation":"NY"},
                {"name":"North Carolina","abbreviation":"NC"},{"name":"North Dakota","abbreviation":"ND"},
                {"name":"Ohio","abbreviation":"OH"},{"name":"Oklahoma","abbreviation":"OK"},
                {"name":"Oregon","abbreviation":"OR"},{"name":"Pennsylvania","abbreviation":"PA"},
                {"name":"Rhode Island","abbreviation":"RI"},{"name":"South Carolina","abbreviation":"SC"},
                {"name":"South Dakota","abbreviation":"SD"},{"name":"Tennessee","abbreviation":"TN"},
                {"name":"Texas","abbreviation":"TX"},{"name":"Utah","abbreviation":"UT"},
                {"name":"Vermont","abbreviation":"VT"},{"name":"Virginia","abbreviation":"VA"},
                {"name":"Washington","abbreviation":"WA"},{"name":"West Virginia","abbreviation":"WV"},
                {"name":"Wisconsin","abbreviation":"WI"},{"name":"Wyoming","abbreviation":"WY"}]

const surveyDelay = 1000
const surveyInput = sessionStorage.getItem("survey_input")
const parsedSurveyInput = JSON.parse(surveyInput)
let timer;

const statesOptionTag = (state) => {
    let optionHTML = `<option value="${state.abbreviation}">${state.name}</option>`
    return optionHTML
}
const statesOption = () => {
    const states = state.map(state => ({...state}))
    let allStates = states.map(statesOptionTag).join("")
    return allStates
}
//still needs form validation & styling is set via class="" value
export const surveyForm = () => {
    let surveyHTML = ``
    surveyHTML += `<div class="container-sm p-sm-2 p-md-2 p-lg-2 p-xl-4 p-xxl-4 bg-body-tertiary">`
    surveyHTML += `<div class="container-md row">`
    surveyHTML += `<form id="surveyFormInput" class="col g-3">`
    surveyHTML += `<div class="col-md-6 mx-sm-auto mx-md-auto mx-lg-auto mx-xl-auto">`
    surveyHTML += `<label for="inputFirstName" class="form-label">First Name</label>`
    surveyHTML += `<input type="text" placeholder="eg. John" class="form-control form-control-lg" value="${parsedSurveyInput ? parsedSurveyInput.firstname : ""}" id="inputFirstName" required></input>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="col-md-6 mx-sm-auto mx-md-auto mx-lg-auto mx-xl-auto">`
    surveyHTML += `<label for="inputLastName" class="form-label">Last Name</label>`
    surveyHTML += `<input type=text placeholder="eg. Doe" class="form-control form-control-lg" value="" id="inputLastName" required></input>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="col-md-6 mx-sm-auto mx-md-auto mx-lg-auto mx-xl-auto">`
    surveyHTML += `<label for="inputAddress" class="form-label">Address</label>`
    surveyHTML += `<input type="text" class="form-control form-control-lg" id="inputAddress" value="" placeholder="1234 Main St" required></input>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="col-md-6 mx-sm-auto mx-md-auto mx-lg-auto mx-xl-auto">`
    surveyHTML += `<label for="inputAddress2" class="form-label">Address 2</label>`
    surveyHTML += `<input type="text" class="form-control form-control-lg" id="inputAddress2" value="" placeholder="Apt, Studio, or Floor #"></input>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="row justify-content-center">`
    surveyHTML += `<div class="col-md-2">`
    surveyHTML += `<label for="inputCity" class="form-label">City</label>`
    surveyHTML += `<input type="text" class="form-control form-control-lg" id="inputCity" value="" required></input>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="col-md-2">`
    surveyHTML += `<label for="inputState" class="form-label">State</label>`
    surveyHTML += `<select id="inputState" class="form-select form-select-lg" required>`
    surveyHTML += `<option selected>Select State</option>`
    surveyHTML += statesOption()
    surveyHTML += `</select>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="col-md-2">`
    surveyHTML += `<label for="zipCode" class="form-label">Zip Code</label>`
    surveyHTML += `<input type="number" class="form-control form-control-lg" id="zipCode" value=""></input>`
    surveyHTML += `</div>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="col-md-6 mx-sm-auto mx-md-auto mx-lg-auto mx-xl-auto">`
    surveyHTML += `<label for="homePhoneNumber" class="form-label">Home Phone Number</label>`
    surveyHTML += `<input type="number" class="form-control form-control-lg" id="homePhoneNumber" value=""></input>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="col-md-6 mx-sm-auto mx-md-auto mx-lg-auto mx-xl-auto">`
    surveyHTML += `<label for="mobilePhoneNumber" class="form-label">Mobile Phone Number</label>`
    surveyHTML += `<input type="number" class="form-control form-control-lg" id="mobilePhoneNumber" value="" required></input>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="col-md-6 mx-sm-auto mx-md-auto mx-lg-auto mx-xl-auto">`
    surveyHTML += `<label for="inputEmail" class="form-label">Email Address</label>`
    surveyHTML += `<input type="email" class="form-control form-control-lg" id="inputEmail" value="" placeholder="emailaddress@example.com" required></input>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="col-md-6 mx-sm-auto mx-md-auto mx-lg-auto mx-xl-auto">`
    surveyHTML += `<label for="feedback" class="form-label">Feedback</label>`
    surveyHTML += `<textarea class="form-control form-control-lg" id="feedback" value="" rows="3"></textarea>`
    surveyHTML += `</div>`
    surveyHTML += `<div class="d-grid gap-2 py-3 col-md-6 mx-sm-auto mx-md-auto mx-lg-auto mx-xl-auto">`
    surveyHTML += `<button id="btnSubmit" class="btn btn-primary btn-lg" type="button">Submit</button>`
    surveyHTML += `</div>`
    surveyHTML += `</form>`
    surveyHTML += `</div>`
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
        const surveyEmail = document.querySelector("#inputEmail").value
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
            emailAddress: surveyEmail,
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
    if(event.target.id.startsWith("btnSubmit")) {
        postToApi(parsedSurveyInput)//need endpoint.
        event.preventDefault()
    }
})