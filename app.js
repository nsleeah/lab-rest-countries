//console.log("HI!")

const getCountryByName = (countryName) => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => response.json())
    .then(data => console.log(data));
}

getCountryByName("Canada");


