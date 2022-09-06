/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

function getData() {
  fetch(ENDPOINT, { method: "GET" })
    .then((responsive) => responsive.json())
    .then((data) => {
      data.forEach((element) => {
        // creating elements
        const brandContainer = document.createElement("div");
        brandContainer.className = "brandContainer";
        const brandName = document.createElement("h3");
        brandName.className = "brandName";
        const list = document.createElement("ul");

        element.models.forEach((section) => {
          const model = document.createElement("li");
          model.textContent = section;

          //   adding to list
          list.append(model);
        });

        brandName.textContent = element.brand;

        // adding brand name and model list to container
        brandContainer.append(brandName, list);

        document.getElementById("output").append(brandContainer);
      });
    });
}

getData();
