const container = document.querySelector(".container");
const grey = document.querySelector(".grey");
const pastel = document.querySelector(".pastel");
const span = document.querySelector("span");
const random = document.querySelector(".random");
const pix16 = document.querySelector(".grid16");
const pix32 = document.querySelector(".grid32");
const pix64 = document.querySelector(".grid64");
const colorWell = document.querySelector("#colorWell");

let colorPick;

window.addEventListener("load", chooseColor, false);

pix16.addEventListener("click", grid16);
pix32.addEventListener("click", grid32);
pix64.addEventListener("click", grid64);

playGame(16);

function playGame(value) {
  // create columns
  for (let i = 1; i <= value; i++) {
    const gridCol = document.createElement("div");
    gridCol.classList.add("gridCol");
    // create rows
    for (let j = 2; j <= value; j++) {
      const gridRow = document.createElement("div");
      gridRow.classList.add("gridRow");
      container.appendChild(gridRow);

      // run pickGrey() if run over the grids
      gridRow.addEventListener("mouseover", function (e) {
        e.target.style.background = pickGrey();
      });
      gridCol.addEventListener("mouseover", function (e) {
        e.target.style.background = pickGrey();
      });

      // if color picker is chosen
      colorWell.addEventListener("click", function (e) {
        // run the chooseColor() function
        gridRow.addEventListener("mouseover", function (e) {
          e.target.style.background = chooseColor();
        });
        gridCol.addEventListener("mouseover", function (e) {
          e.target.style.background = chooseColor();
        });
      });

      // if grey scale is chosen
      grey.addEventListener("click", function (e) {
        // run the pickGrey() function
        gridRow.addEventListener("mouseover", function (e) {
          e.target.style.background = pickGrey();
        });
        gridCol.addEventListener("mouseover", function (e) {
          e.target.style.background = pickGrey();
        });
      });

      // if pastel scale is chosen then
      pastel.addEventListener("click", function (e) {
        // run the pickPastel() function
        gridRow.addEventListener("mouseover", function (e) {
          e.target.style.background = pickPastel();
        });
        gridCol.addEventListener("mouseover", function (e) {
          e.target.style.background = pickPastel();
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

function pickGrey() {
  let random = Math.random();
  let rgb = `rgba(0,0,0,${random})`;
  console.log(rgb);

  return rgb;
}

function pickPastel() {
  return (
    "hsl(" +
    360 * Math.random() +
    "," +
    (25 + 70 * Math.random()) +
    "%," +
    (85 + 10 * Math.random()) +
    "%)"
  );
}

function pickRandom() {
  let random = [];

  for (let i = 0; i < 3; i++) {
    let randomChoice = Math.floor(Math.random() * 256);
    random.push(randomChoice);
  }
  let joinChoice = random.join(", ");
  let rgb = `rgb(${joinChoice})`;

  return rgb;
}

function chooseColor() {
  colorWell.addEventListener("input", updateFirst, false);
  return colorPick;
}

function updateFirst(event) {
  colorPick = event.target.value;

  console.log(colorWell.value);
  return colorPick;
}

function restart(e) {
  document
    .querySelectorAll(".gridCol")
    .forEach((e) => e.parentNode.removeChild(e));
  document
    .querySelectorAll(".gridRow")
    .forEach((e) => e.parentNode.removeChild(e));
}
