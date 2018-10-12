const emptyGrid = [0,0,0,0,0,0,0,0,0];

const emptyBoard = [
  emptyGrid, emptyGrid, emptyGrid,
  emptyGrid, emptyGrid, emptyGrid,
  emptyGrid, emptyGrid, emptyGrid,
];

const emptyGame = [emptyBoard];
const multiBoardGame = [emptyBoard, emptyBoard];

module.exports = {
    emptyGrid,
    emptyBoard,
    emptyGame,
    multiBoardGame
}