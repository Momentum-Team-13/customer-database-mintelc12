console.log(customers)
// make sure I have access to data

const customerList = document.querySelector("#customer-list")
// get the main box to put data in

// make the js build one of these for each customer
for (let customer of customers) {
    let customerElement = document.createElement("div")
    customerElement.classList.add("customer")

    let contentElement = document.createElement("article")
    contentElement.classList.add("center")

    // customer image
    let pictureElement = document.createElement("img")
    pictureElement.alt = "Customer Photograph"
    pictureElement.classList.add("center")
    pictureElement.src = `${customer.picture.large}`
    contentElement.appendChild(pictureElement)
    customerElement.appendChild(contentElement)

    // customer name
    let nameElement = document.createElement("h3")
    nameElement.classList.add ("center")
    nameElement.innerText = `Name: ${customer.name.first} ${customer.name.last}`
    contentElement.appendChild(nameElement)

    // customer email
    let emailElement = document.createElement("div")
    emailElement.classList.add("center")
    emailElement.innerText = `Email: ${customer.email}`
    contentElement.appendChild(emailElement)

    // customer address
    let locationElement = document.createElement("div")
    locationElement.classList.add("center")
    // locationElement.innerText = moment().format("ll")
    locationElement.innerText = `Address: ${customer.location.street.number} ${customer.location.street.name}`
    contentElement.appendChild(locationElement)

    // customer city & state
    let cityStateElement = document.createElement("div")
    cityStateElement.classList.add("center")
    let stateAbbr = (nameToAbbr(customer.location.state))
    cityStateElement.innerText = `${customer.location.city}, ${stateAbbr} ${customer.location.postcode}`
    contentElement.appendChild(cityStateElement)
    // let stateAbbr = (nameToAbbr(customer.location.state))
    // cityStateElement.innerText = `${customer.location.state}`
    // contentElement.appendChild(cityStateElement)

    // let dt = document.createElement("div")
    // dt.DATE_MED(`$DOB: ${customer.dob.date}`).toFormat("LLL dd yyyy")

    // customer DOB:
    let dobElement = document.createElement("div")
    dobElement.classList.add("center")
    dobElement.innerText = `DOB: ${customer.dob.date}`
    contentElement.appendChild(dobElement)

    // customer registration date
    let registeredElement = document.createElement("div")
    registeredElement.classList.add("center")
    registeredElement.innerText = `Date Registered: ${customer.registered.date}`
    contentElement.appendChild(registeredElement)

    
    customerList.appendChild(customerElement)
}


// ask Rebecca how to use the states.js file
// function nameToAbbr (stateName) {
//     const idx = usStates.findIndex(function (state) {
//       return state.name === stateName.toUpperCase()
//     })
  
//     if (idx === -1) {
//       return null
//     }
  
//     return usStates[idx].abbreviation
//   }