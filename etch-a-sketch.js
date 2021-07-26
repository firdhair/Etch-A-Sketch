const container = document.querySelector(".container");

let size = 16;

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
