function createArray(size, color = "rgb(255,255,255)") {
  /*
   * Multidimensional array
   * Loops through size for each gridArray index, creating a square of sorts
   * Value in each index will be the color (white by default)
   */

  let gridArray = [];
  for(let i = 0; i < size; i++) {
    gridArray[i] = [];
    for(let j = 0; j < size; j++) {
      gridArray[i][j] = color;
    }
  }

  //console.log(gridArray);
  drawGrid(gridArray);
}

function drawGrid(grid) {
  const gridContainer = document.querySelector("#content");
  console.log(gridContainer);

  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      // Create divs and nest them
      const newCell = document.createElement("div");
      newCell.setAttribute("class", "cell");
      newCell.setAttribute("id", `${i}-${j}`); // ID is the coordinates
      newCell.style.backgroundColor = grid[i][j];
      //newCell.innerText = `${i}-${j}`;
      gridContainer.append(newCell);

      newCell.addEventListener("mouseover", () => hoverFunc(i, j))
    }
  }
}

function hoverFunc(row, column) {
  console.log("mouseover", row, column);
  const hoveredCell = document.getElementById(`${row}-${column}`);

  hoveredCell.classList.remove("default");
  const rand1 = Math.random() * 255;
  const rand2 = Math.random() * 255;
  const rand3 = Math.random() * 255;
  hoveredCell.style.backgroundColor = `rgb(${rand1},${rand2},${rand3})`;
}

createArray(16);
