const btnel = document.querySelectorAll("button");
const inputel = document.querySelector("input");
const inputfieldel = document.getElementById("result");
function clearinput() {
  inputel.value = "";
}
function computeresult() {
  if (inputfieldel.value === "") {
    inputfieldel.value = "Oops!! U forgot to enter numbers";
    setTimeout(clearinput, 2000);
  } else {
    inputfieldel.value = eval(inputfieldel.value);
  }
}

function appendtores(btnval) {
  inputfieldel.value += btnval;
}
for (let i = 0; i < btnel.length; i++) {
  btnel[i].addEventListener("click", () => {
    const btnval = btnel[i].textContent;
    if (btnval === "C") {
      clearinput();
    } else if (btnval === "=") {
      computeresult();
    } else {
      appendtores(btnval);
    }
  });
}
