let selectElement = document.getElementById("cities");
selectElement.addEventListener("change", () => {
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  console.log(selectedOption.value);
  readSalatTime(selectedOption.value);
});
