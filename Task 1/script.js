/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
// trying to use a little bit jQuery
$("#submit-btn").click(function (event) {
  //   preventing from reloading page
  event.preventDefault();
  document.getElementById("output").innerHTML = null;
  // Calculating
  const toLb = Number.parseFloat($("#search").val() * 2.2046).toFixed(2);
  const toG = Number.parseFloat($("#search").val() / 0.001).toFixed(2);
  const toOz = Number.parseFloat($("#search").val() * 35.274).toFixed(2);

  // Creating elements
  const form = document.createElement("form");
  const labelLb = document.createElement("label");
  const labelG = document.createElement("label");
  const labelOz = document.createElement("label");

  // Adding content to elements
  labelLb.textContent = `Pounds: ${toLb} lb`;
  labelG.textContent = `Grams: ${toG} g`;
  labelOz.textContent = `Ounces: ${toOz} oz`;

  //   Adding classes
  form.className = "resultsForm";
  labelLb.className = "result";
  labelG.className = "result";
  labelOz.className = "result";

  // Pushing labels to form and form to div(#output)

  form.append(labelLb, labelG, labelOz);
  document.getElementById("output").appendChild(form);
});
