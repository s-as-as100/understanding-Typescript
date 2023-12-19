function combineNumbers(n1: number | string, n2: number | string) {
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;

    }
    else {
        result = n1.toString + n2.toString()
    }
    return result;
}

// Union types is more flexible;
// you can pass two data types in same function 

const output = combineNumbers(1, 2);
const output2 = combineNumbers('max', 'arif')