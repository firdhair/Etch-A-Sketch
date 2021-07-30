const container = document.querySelector(".container");
const black = document.querySelector(".black");
const warm = document.querySelector(".warm");
const span = document.querySelector("span");
const random = document.querySelector(".random");
const pix16 = document.querySelector(".grid16");
const pix32 = document.querySelector(".grid32");
const pix64 = document.querySelector(".grid64");

pix16.addEventListener("click", grid16);
pix32.addEventListener("click", grid32);
pix64.addEventListener("click", grid64);

playGame(16);

function playGame(value) {
  for (let i = 1; i <= value; i++) {
    const gridCol = document.createElement("div");
    gridCol.classList.add("gridCol");
    for (let j = 2; j <= value; j++) {
      const gridRow = document.createElement("div");
      gridRow.classList.add("gridRow");
      container.appendChild(gridRow);

      gridRow.addEventListener("mouseover", playBlack);
      gridCol.addEventListener("mouseover", playBlack);

      black.addEventListener("click", function (e) {
        gridRow.addEventListener("mouseover", function (e) {
          e.target.style.background = "#333";
          span.style.background = "#333";
        });
        gridCol.addEventListener("mouseover", function (e) {
          e.target.style.background = "#333";
        });
      });
      warm.addEventListener("click", function (e) {
        gridRow.addEventListener("mouseover", function (e) {
          e.target.style.background = pickWarm();
          span.setAttribute("class", "pickWarm");
        });
        gridCol.addEventListener("mouseover", function (e) {
          e.target.style.background = pickWarm();
        });
      });
      random.addEventListener("click", function (e) {
        gridRow.addEventListener("mouseover", function (e) {
          e.target.style.background = pickRandom();
        });
        gridCol.addEventListener("mouseover", function (e) {
          e.target.style.background = pickRandom();
        });
      });
    }
  }
}

function grid16() {
  restart();
  container.setAttribute("id", "grid16");
  playGame(16);
}

function grid32() {
  restart();
  container.setAttribute("id", "grid32");
  playGame(32);
}

function grid64() {
  restart();
  container.setAttribute("id", "grid64");
  playGame(64);
}

function pickWarm() {
  let random = [];

  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 70);
  let blue = Math.floor(Math.random() * 0);
  random.push(red, green, blue);

  let joinRGB = random.join(", ");
  let rgb = `rgba(${joinRGB}, 0.5)`;
  console.log(rgb);

  span.style.background = rgb;
  return rgb;
}

function pickRandom() {
  let random = [];

  for (let i = 0; i < 3; i++) {
    let randomChoice = Math.floor(Math.random() * 256);
    random.push(randomChoice);
  }
  let joinChoice = random.join(", ");
  let rgb = `rgb(${joinChoice})`;

  span.style.background = rgb;
  return rgb;
}

function playBlack(e) {
  span.style.background = "#333";
  e.target.style.background = "#333";
}

function restart(e) {
  document
    .querySelectorAll(".gridCol")
    .forEach((e) => e.parentNode.removeChild(e));
  document
    .querySelectorAll(".gridRow")
    .forEach((e) => e.parentNode.removeChild(e));
}
