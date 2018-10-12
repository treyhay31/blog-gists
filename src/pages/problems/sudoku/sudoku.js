const isValidGame = (game) => {
    return game.length === 1;
};

const isValidBoard = (board) => 
    isValidBoardLength(board.length);

const isValidBoardLength = (len) => len === 9;

const hasDupeInColumns = (board) => {
    [0,1,2,3,4,5,6,7,8].map(i => board[i])
}

const hasDupeInRows = (board) => {
    
}

const isValidGrid = (grid) => {
    return true;
};

module.exports = {
    isValidGame,
    isValidBoard,
    isValidGrid
};