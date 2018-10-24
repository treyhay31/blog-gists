const invalidBoard = [
/* --> --> --> --> --> */
  [1,1,1, 1,1,1, 1,1,1],
  [2,2,2, 2,2,2, 2,2,2],
  [3,3,3, 3,3,3, 3,3,3],
/* --> --> --> --> --> */
  [4,4,4, 4,4,4, 4,4,4],
  [5,5,5, 5,5,5, 5,5,5],
  [6,6,6, 6,6,6, 6,6,6],
/* --> --> --> --> --> */
  [7,7,7, 7,7,7, 7,7,7],
  [8,8,8, 8,8,8, 8,8,8],
  [9,9,9, 9,9,9, 9,9,9],
/* --> --> --> --> --> */
];


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
  multiBoardGame,
  invalidBoard
};