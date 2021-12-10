let countriesInfo = [
    {
      name: "India",
      population: " 1,394,975,829",
      region: "Asia",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
      capital: "New delhi"
    },
    {
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      capital: "Berlin"
    },
    {
      name: "United states",
      population: "323,947,000",
      region: "America",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
      capital: "Washington D.C"
    },
    {
      name: "Brazil",
      population: "206,135,893",
      region: "America",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
      capital: "Brasilia"
    },
    {
      name: "Iceland",
      population: "334,300",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
      capital: "Reykjavik"
    }
  ];
  
  let content = document.createElement("div");
  content.className = "content";
  document.body.appendChild(content);
  
countriesInfo.map(({name,population,region,flag,capital})=>{
content.innerHTML += `<div class="card" ><img src=${flag} class="flag"></img>
                  <h2 class="text">${name}</h2>
                  <p class="text"><b>Region</b> - ${region}</p>
                  <p class="text"><b>Capital</b> - ${capital}</p>
                  <p class="text"><b>Population</b> - ${population}</p></div>`;
});

//   for(let i of countriesInfo){
//   let img =  document.createElement("img");
//   img.src=`${i.flag}`;
//   img.className="flag";

//   let countryName = document.createElement("h3");
//   countryName.textContent =`${i.name}`;

//   let region = document.createElement("p");
//   region.textContent =`region - ${i.region}`;

//   let population = document.createElement("p");
//   population.textContent =`population - ${i.population}`;

//   let capital = document.createElement("p");
//   capital.textContent =`capital - ${i.capital}`;

//    let eachDiv = document.createElement("div");
//    eachDiv.className="card";

//    eachDiv.appendChild(img,countryName,region,capital,population);
//    content.appendChild(eachDiv);

//   }


  // No HTML
  // only JS or CSS
  // append vs appendChild
  
