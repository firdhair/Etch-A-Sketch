const container = document.querySelector(".container");
const black = document.querySelector(".black");
const warm = document.querySelector(".warm");
const random = document.querySelector(".random");
const pix16 = document.querySelector(".grid16");
const pix32 = document.querySelector(".grid32");
const pix64 = document.querySelector(".grid64");

// let gridCol;
// let gridRow;

pix16.addEventListener("click", grid16);
pix32.addEventListener("click", grid32);
pix64.addEventListener("click", grid64);

auto(16);

function auto(value) {
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
        });
        gridCol.addEventListener("mouseover", function (e) {
          e.target.style.background = "#333";
        });
      });
      warm.addEventListener("click", function (e) {
        gridRow.addEventListener("mouseover", function (e) {
          e.target.style.background = "pink";
        });
        gridCol.addEventListener("mouseover", function (e) {
          e.target.style.background = "pink";
        });
      });
      random.addEventListener("click", function (e) {
        gridRow.addEventListener("mouseover", function (e) {
          e.target.style.background = "purple";
        });
        gridCol.addEventListener("mouseover", function (e) {
          e.target.style.background = "purple";
        });
      });
    }
  }
}

function playBlack(e) {
  e.target.style.background = "#333";
  console.log("yo");
}

function playWarm(e) {
  e.target.style.background = "pink";
}

function playRandom(e) {
  e.target.style.background = "purple";
}

function restart(e) {
  document
    .querySelectorAll(".gridCol")
    .forEach((e) => e.parentNode.removeChild(e));
  document
    .querySelectorAll(".gridRow")
    .forEach((e) => e.parentNode.removeChild(e));
}

function grid16() {
  restart();
  container.setAttribute("id", "grid16");
  auto(16);
}

function grid32() {
  restart();
  container.setAttribute("id", "grid32");
  auto(32);
}

function grid64() {
  restart();
  container.setAttribute("id", "grid64");
  auto(64);
}
