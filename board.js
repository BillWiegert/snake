class Board {
  constructor() {
    this.grid = this.populateGrid();
  }

  populateGrid() {
    const grid = new Array(GRID_SIZE);

    for (let i = 0; i < GRID_SIZE; i++) {
      grid[i] = new Array(GRID_SIZE);
      for (let j = 0; j < GRID_SIZE; j++) {
        let pos = createVector(i * CELL_SIZE, j * CELL_SIZE);
        let color = 50;

        if ((i + j)%2 === 0) {
          color = 30;
        }

        grid[i][j] = new Cell(pos, color);
      }
    }

    return grid;
  }

  show() {
    //loop through grid and call show() on each cell
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        this.grid[i][j].show();
      }
    }
	}
}
