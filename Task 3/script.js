/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

function getData() {
  fetch(ENDPOINT, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        // creating elements
        const userContainer = document.createElement("div");
        const nameTag = document.createElement("h3");
        const imgTag = document.createElement("img");

        // adding classes
        userContainer.className = "container";
        nameTag.className = "login";
        imgTag.className = "avatar";

        // adding values
        nameTag.textContent = element.login;
        imgTag.setAttribute("src", element.avatar_url);
        imgTag.setAttribute("alt", "avatar");

        // mergin together to one div
        userContainer.append(nameTag, imgTag);
        document.getElementById("output").append(userContainer);
      });
    });
}

document.getElementById("btn").addEventListener("click", () => {
  // deleting p tag
  document.getElementById("message").remove();
  getData();
});
