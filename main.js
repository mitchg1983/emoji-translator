const submit = document.querySelector("#submit-button");
const input = document.querySelector("#translator-input");
const h1 = document.querySelector("#results");
const typing = document.querySelector("input[type=text]");
const ulList = document.querySelector("#helper");
const listItems = document.querySelector("#helperA");

// submit.addEventListener("click", onClick);

typing.addEventListener("input", onClick);

function onClick() {
  //
  //
  //Our First Feature
  const inputValue = input.value;

  //
  //
  //Radio Buttons
  const checkedRadio = document.querySelector("input[type=radio]:checked");
  const value = checkedRadio.value;

  if (value === null) {
    console.log("No radio selected");
  }

  if (value === "encode") {
    const output = encode(inputValue);
    h1.innerText = output;
  }

  if (value === "translate") {
    const output = translate(inputValue);
    h1.innerText = output;
  }

  if (value === "madlib") {
    const output = madlib(inputValue);
    h1.innerText = output;
  }
  //
  //
  //Search
  if (value === "search") {
    const output = search(inputValue);
    h1.innerHTML = "";

    if (output.length < 1) {
      h1.innerText = "No matching emojis were found.";
    } else {
      for (let i = 0; i < output.length; i++) {
        const emoji = output[i].symbol;
        const newP = document.createElement("p");
        newP.innerText = emoji;
        h1.appendChild(newP);
      }
    }
  }

  //
  //
  //Random
  if (value === "random") {
    const rando = Math.floor(Math.random() * 4);

    if (rando === 0) {
      const output = encode(inputValue);
      h1.innerText = output;
    }

    if (rando === 1) {
      const output = translate(inputValue);
      h1.innerText = output;
    }

    if (rando === 2) {
      const output = madlib(inputValue);
      h1.innerText = output;
    }

    if (rando === 3) {
      const output = search(inputValue);
      h1.innerHTML = "";

      if (output.length < 1) {
        h1.innerText = "No matching emojis were found.";
      } else {
        for (let i = 0; i < output.length; i++) {
          const emoji = output[i].symbol;
          const newP = document.createElement("p");
          newP.innerText = emoji;
          h1.appendChild(newP);
        }
      }
    }
  }
}

//Stretch Goals
//
//This stretch goal was evil and quite annoying to deal with.
listItems.addEventListener("click", helpMe);

function helpMe() {
  ulList.className === "helper" ? ulList.classList.remove("helper") 
                                : ulList.classList.add("helper");
}