class Board {
  constructor() {
    this.cells = [];
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

        //array of 2 element arrays [[0,0],[0,1],...]
        this.cells.push([pos.x, pos.y]);
      }
    }

    return grid;
  }

  getVacantCells() {
    let vacantCells = [];
    let occupiedCells = {};

    for (let i = 0; i < snake.tail.length; i++) {
      occupiedCells[[snake.tail[i].x, snake.tail[i].y]] = true;
    }

    occupiedCells[[snake.pos.x, snake.pos.y]] = true;

    for (let i = 0; i < this.cells.length; i++) {
      if (!occupiedCells[this.cells[i]]) {
        vacantCells.push(this.cells[i]);
      }
    }

    return vacantCells;
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
