function something(a, b) {
    return a + b;
}

something(1,3); //? 

const duper = () => [false,false,false,false,false,false,false,false,false];

const isItADupe = duper().map(j => {
    if (j) {
        return false;
    }
    return true;
});

isItADupe;//?
