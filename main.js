const submit = document.querySelector("#submit-button");
const input = document.querySelector("#translator-input");
const h1 = document.querySelector("#results");

submit.addEventListener("click", onClick);

function onClick() {
  //Our First Feature
  const inputValue = input.value;
    h1.innerText = encode(inputValue);


  //   //Radio Buttons

  const checkedRadio = document.querySelector("input[type=radio]:checked");

  if (checkedRadio === null) {
    console.log("No radio selected");
  } 
  
  if (checkedRadio === encode) {
      const output = encode(inputValue);
      h1.innertext = output;
  }

  if (checkedRadio === translate) {
      const output = translate(inputValue);
      h1.innertext = output;
  }

  if (checkedRadio === madlib) {
      const output = madlib(inputValue);
      h1.innertext = output;
  }






}
