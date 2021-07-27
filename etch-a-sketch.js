const container = document.querySelector(".container");
const pix16 = document.querySelector(".grid16");
const pix32 = document.querySelector(".grid32");
const pix64 = document.querySelector(".grid64");
let size = 16;

pix16.addEventListener("click", grid16);
pix32.addEventListener("click", grid32);
pix64.addEventListener("click", grid64);

for (let i = 1; i <= size; i++) {
  const gridCol = document.createElement("div");
  gridCol.classList.add("gridCol");
  for (let j = 2; j <= size; j++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");
    container.appendChild(gridRow);
    gridRow.addEventListener("mouseover", function (e) {
      e.target.style.background = "#b0dab9";
    });
  }
  container.appendChild(gridCol);
  gridCol.addEventListener("mouseover", function (e) {
    e.target.style.background = "#b0dab9";
  });
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

  size = 16;
  container.setAttribute("id", "grid16");

  for (let i = 1; i <= size; i++) {
    const gridCol = document.createElement("div");
    gridCol.classList.add("gridCol");
    for (let j = 2; j <= size; j++) {
      const gridRow = document.createElement("div");
      gridRow.classList.add("gridRow");
      container.appendChild(gridRow);
      gridRow.addEventListener("mouseover", function (e) {
        e.target.style.background = "#b0dab9";
      });
    }
    container.appendChild(gridCol);
    gridCol.addEventListener("mouseover", function (e) {
      e.target.style.background = "#b0dab9";
    });
  }
}

function grid32() {
  restart();

  size = 32;
  container.setAttribute("id", "grid32");

  for (let i = 1; i <= size; i++) {
    const gridCol = document.createElement("div");
    gridCol.classList.add("gridCol");
    for (let j = 2; j <= size; j++) {
      const gridRow = document.createElement("div");
      gridRow.classList.add("gridRow");
      container.appendChild(gridRow);
      gridRow.addEventListener("mouseover", function (e) {
        e.target.style.background = "#b0dab9";
      });
    }
    container.appendChild(gridCol);
    gridCol.addEventListener("mouseover", function (e) {
      e.target.style.background = "#b0dab9";
    });
  }
}

function grid64() {
  restart();

  size = 64;
  container.setAttribute("id", "grid64");

  for (let i = 1; i <= size; i++) {
    const gridCol = document.createElement("div");
    gridCol.classList.add("gridCol");
    for (let j = 2; j <= size; j++) {
      const gridRow = document.createElement("div");
      gridRow.classList.add("gridRow");
      container.appendChild(gridRow);
      gridRow.addEventListener("mouseover", function (e) {
        e.target.style.background = "#b0dab9";
      });
    }
    container.appendChild(gridCol);
    gridCol.addEventListener("mouseover", function (e) {
      e.target.style.background = "#b0dab9";
    });
  }
}
