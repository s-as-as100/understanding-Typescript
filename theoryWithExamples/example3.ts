function addNumbers(n1: number, n2: number, result: boolean, phrase: string) {
    let output = n1 + n2;
    if (result) {
        console.log(phrase + output)
    }
    else {
        return output;
    }

}
const n1 = 2;
const n2 = 3;
const result = true;
const showResult = "Result is: "
addNumbers(n1, n2, result, showResult)