function something(a, b) {
    return a + b;
}

something(1,3); //? 

const board = [
    [1,2,3],
    [1,2,3],
    [1,2,3],
    [1,2,3],
]

const column = [
    ...board[0].slice(0,2),
    ...board[1].slice(0,2),
    ...board[2].slice(0,2),
];
column//?
board[0].map(r => r) //?