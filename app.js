//console.log("HI!")

const getCountryByName = (countryName) => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => response.json())
    .then(data => {
        let country = data[0];
        let section = document.getElementById("countries");
        let name = document.createElement("h3"); //Heading
        name.innerHTML = `Country Name: ${country.name.common}`; //Get Countries Name
        section.appendChild(name); //Connect Append Child
        let population = document.createElement("h3")
        population.innerHTML = `Population: ${country.population}`
        section.appendChild(population);
    } ) 
    
}

//getCountryByName("Peru"); 

   

    const getAllCountries = () => {
        fetch(`https://restcountries.com/v3.1/all`)
        .then(response => response.json())
        .then(data => {
            let section = document.getElementById("all_countries");
            data.forEach(country => {
            let name = document.createElement("h3");
            name.innerHTML = `Country Name: ${country.name.common}`;
            section.appendChild(name);
            let population = document.createElement("h3")
            population.innerHTML = `Population: ${country.population}`;
            section.appendChild(population);
        });
              
        });
        
    }
    document.addEventListener("DOMContentLoaded", getAllCountries);






