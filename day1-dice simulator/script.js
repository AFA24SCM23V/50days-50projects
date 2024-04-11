const diceroll = document.querySelector(".hidden");
const diceel = document.querySelector(".dice--img");
const buttonclick = document.querySelector(".btn");

buttonclick.addEventListener("click", function () {
  diceroll.classList.remove("hidden");
  const dicenum = Math.trunc(Math.random() * 6) + 1; // Generate random number
  diceel.src = `dice-${dicenum}.png`;

  const ul = document.querySelector(".parent--list"); // Use querySelector here
  const li = document.createElement("li");
  const textspan = document.createElement("span");
  textspan.textContent = `You scored ${dicenum}`;
  const imgel = document.createElement("img");
  imgel.src = `dice-${dicenum}.png`;
  imgel.className = "dice--img--list";
  imgel.alt = "dice image";
  li.appendChild(textspan);
  li.appendChild(imgel);
  ul.appendChild(li);
});
