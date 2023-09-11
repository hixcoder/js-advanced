document.getElementById("calc-btn").addEventListener("click", function () {
  let firstInput = document.getElementById("first-input").value;
  let secondInput = document.getElementById("second-input").value;
  let result;
  try {
    result = divide(firstInput, secondInput);
    document.getElementById("result").innerHTML = result;
  } catch (e) {
    alert(`Error: ${e}`);
  } finally {
    console.log("finally hello world");
  }
});
