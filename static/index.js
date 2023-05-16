fetch("static/worldl.json")
  .then((r) => r.json())
  .then((r) => {
    for (let c of r) {
      let d = document.createElement("div");
      d.innerText = c.name;
      d.classList.add("countryIndex");
      d.onclick = () => {
        document.getElementById("content").innerHTML = `
               <h1>${c.name}</h1>
               <div>ID: ${c.id}</div>
               <div>Capital: ${c.capital}</div>
               <div>Continent: ${c.continent}</div>
               <div>Area: ${c.area}</div>
               <div>Population: ${parseFloat(
                 c.population / 1000000
               )} Millions</div> 
               <div>GDP: ${parseFloat(c.gdp / 1000000000)} Billions</div>
               <img src=${c.flag}>
               
               `;
      };
      document.getElementById("countryList").append(d);
    }
    //For continent
    document.getElementById("continent").onchange = () => {
      document.getElementById("countryList").innerHTML = " ";
      let a = document.getElementById("continent").value;
      for (let c of r) {
        if (a === c.continent) {
          let d = document.createElement("div");
          d.innerText = c.name;
          d.classList.add("countryIndex");
          d.onclick = () => {
            document.getElementById("content").innerHTML = `
            <h1>${c.name}</h1>
            <div>ID: ${c.id}</div>
            <div>Continent: ${c.continent}</div>
            <div>Capital: ${c.capital}</div>
            <div>Population: ${parseFloat(
              c.population / 1000000
            )} Millions</div> 
            <div>GDP: ${parseFloat(c.gdp / 1000000000)} Billions</div>
            <img src=${c.flag}>
                    `;
          };

          document.getElementById("countryList").append(d);
        }
      }
    };

    //For dropdown
    document.getElementById("alpha").onchange = () => {
      Array.from(document.querySelector("#alpha").options).forEach(function (
        dropdown
      ) {
        let country = dropdown.text;
        let selectcountry = dropdown.selected;
        if (selectcountry) {
          for (let n of document.querySelectorAll("#countryList div")) {
            if (n.innerText.startsWith(country)) {
              n.classList.remove("hide");
            } else {
              n.classList.add("hide");
            }
          }
        }
      });
    };
    // For search country
    document.getElementById("search").onkeyup = () => {
      let input = document.getElementById("search").value;
      for (let n of document.querySelectorAll("#countryList div")) {
        if (n.innerText.startsWith(input)) {
          n.classList.remove("hide");
        } else {
          n.classList.add("hide");
        }
      }
    };
  });
