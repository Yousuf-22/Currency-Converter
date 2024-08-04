// const BASE_API = "https://api.frankfurter.app/currencies"
const BASE_URL = "https://api.frankfurter.app/latest?amount=1&from=USD&to=INR"

const dropdowns = document.querySelectorAll(".dropdown select");



for(let select of dropdowns) {
    for (currcode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currcode;
        newOption.value = currcode;
        if(select.name == "from" && currcode == "USD") {
            newOption.selected = "selected";
        }
        else if(select.name == "to" && currcode == "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

const updateFlag = (element) => {
    console.log(element);
    
}