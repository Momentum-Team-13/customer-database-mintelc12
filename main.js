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
    let pictureElement = document.createElement("picture")
    pictureElement.src = ""
    pictureElement.alt = "Customer Photograph"
    pictureElement.classList.add("center")
    contentElement.appendChild(pictureElement)
    customerElement.appendChild(contentElement)

    // customer name
    let nameElement = document.createElement("div")
    nameElement.classList.add ("center")
    nameElement.innerText = `Name: ${customer.name.first} ${customer.name.last}`
    contentElement.appendChild(nameElement)

    // customer email
    let emailElement = document.createElement("div")
    emailElement.classList.add("center")
    emailElement.innerText = `Email: ${customer.email}`
    contentElement.appendChild(emailElement)

    // customer location
    let locationElement = document.createElement("div")
    locationElement.classList.add("center")
    locationElement.innerText = `Address: ${customer.location.street.number} ${customer.location.street.name}, ${customer.location.city}`
    contentElement.appendChild(locationElement)

    
    // customer DOB:
    let dobElement = document.createElement("div")
    dobElement.classList.add("center")
    // dobElement.innerText = `Date of Birth: ${customer.age.date}`
    contentElement.appendChild(dobElement)

    // customer registration date
    let registeredElement = document.createElement("div")
    registeredElement.classList.add("center")
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