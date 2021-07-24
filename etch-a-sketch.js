const container = document.querySelector(".container");

let size = 16;

for (let i = 1; i <= size; i++) {
  const gridRow = document.createElement("div");
  gridRow.classList.add("gridI");
  for (let j = 2; j <= size; j++) {
    const grid = document.createElement("div");
    grid.classList.add("gridJ");
    container.appendChild(grid);
    grid.addEventListener("mouseover", function (e) {
      e.target.style.background = "#b0dab9";
    });
  }
  container.appendChild(gridRow);
  gridRow.addEventListener("mouseover", function (e) {
    e.target.style.background = "#b0dab9";
  });
}
