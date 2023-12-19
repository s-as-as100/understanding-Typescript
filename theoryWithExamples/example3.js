function addNumbers(n1, n2, result, phrase) {
    var output = n1 + n2;
    if (result) {
        console.log(phrase + output);
    }
    else {
        return output;
    }
}
var n1 = 2;
var n2 = 3;
var result = true;
var showResult = "Result is: ";
addNumbers(n1, n2, result, showResult);
var userDetails = {
    name: 'mohd',
    age: 34,
    designation: 'engineeer'
};
console.log(userDetails.name);
var product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
console.log(product.id);
var example = {
    name: 'Example',
    data: ['hello', 'world'],
};
for (var _i = 0, _a = example.data; _i < _a.length; _i++) {
    var text = _a[_i];
    console.log(text.toLocaleUpperCase());
}
// tuple is added by typescript and fixed length;
var tupleExample = {
    name: [12, 'hello', 2]
};
// push can be allow in tuple its exception case
// enum is also added by typescript 
// autamicallery numerate global constant variables 
// enum {new,old}
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var enumExample = {
    resignRole: Role.ADMIN
};
if (enumExample.resignRole == Role.ADMIN) {
    console.log("role is Author");
}
