const sudoku = require('./sudoku');
const data = require('./sudoku.fake.data');
const { emptyGame, multiBoardGame } = data;

describe('Valid Game', () => {
    it('should take in a single board', () => {
        expect(sudoku.isValidGame(emptyGame)).toBe(true);
    });
});

describe('Invalid Game', () => {
    it('should not take in multiple boards', () => {
        expect(sudoku.isValidGame(multiBoardGame)).toBe(false);
    });
});

describe('Valid Board', () => {
    const [ emptyBoard ] = emptyGame; 
    it('should have a total of 9 grids', () => {
        expect(sudoku.isValidBoard(emptyBoard)).toBe(true);
    });
    it('should have no duplicates within columns (0 === blank)', () => {
        expect(sudoku.isValidBoard(emptyBoard)).toBe(true);
    });
    it('should have no duplicates within rows (0 === blank)', () => {
        expect(sudoku.isValidBoard(emptyBoard)).toBe(true);
    });
});