 /* 
  * Create the array, filling it with white squares
  * Print the array using CSS grid
  * Create the event listeners on each div while printing in different function
  * Left click edits the pixels color to be a random value
  * Right click edits the pixels color to be white (default value)
  * Left/right click both point to same editPixel(pixel, color) function
  * For now, create a reset button
  * Later, allow user to change grid size (max 100)
  * Default 16x16 grid, 32px wide grid spaces
  * Grid space width will need to change when implementing adjustable size functionality
  */

function createArray(size, color = "#fff") {
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
      console.log(`i: ${i}`);
      console.log(`j: ${j}`);

      // Create divs and nest them
    }
  }
}

createArray(16);
