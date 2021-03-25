
const table = document.querySelector('table');

function fetchResults(e) {
    // e.preventDefault();

fetch('https://api.covid19api.com/summary')
.then(function(response){
    // console.log(response);
    return response.json();
})
.then(function(json){
    // console.log(json)
    displayResults(json);
})
};

function displayResults(json){
    countryList = json.Countries;
        for(country of countryList){
            let tbody = document.querySelector('tbody');

            let listCountry = document.createElement("tr");
            listCountry.innerHTML = "<tr>" + country.Country + "</tr>"
            tbody.appendChild(listCountry)

            let listCases = document.createElement('td');
            listCases.innerHTML = country.TotalConfirmed
            listCountry.appendChild(listCases)

            let listDeaths = document.createElement("td");
            listDeaths.innerHTML = country.TotalDeaths
            listCountry.appendChild(listDeaths)

}
};

fetchResults();
