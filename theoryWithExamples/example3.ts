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

const userDetails: {
    name: string,
    age: number,
    designation: string
} = {
    name: 'mohd',
    age: 34,
    designation: 'engineeer'
}

console.log(userDetails.name);

const product: {
    id: string,
    price: number,
    tags: string[],
    details: {
        title: string,
        description: string
    }
} = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
}
console.log(product.id);


const example: {
    name: string,
    data: string[],
} = {
    name: 'Example',
    data: ['hello', 'world'],
}


for (const text of example.data) {
    console.log(text.toLocaleUpperCase());
}

// tuple is added by typescript and fixed length;

const tupleExample: {
    // this is tuple if you already know about which data you can used 
    // then use tuple it is more strict in our application
    name: [number, string, number],
} = {
    name: [12, 'hello', 2]
}

// push can be allow in tuple its exception case

// enum is also added by typescript 
// autamicallery numerate global constant variables 

// enum {new,old}

enum Role { ADMIN, USER, AUTHOR }
const enumExample = {
    resignRole: Role.ADMIN
}

if (enumExample.resignRole == Role.ADMIN) {
    console.log("role is Author");
}


