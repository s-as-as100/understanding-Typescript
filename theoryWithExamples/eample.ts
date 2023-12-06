const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

function add(num1, num2) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(input1.value, input2.value));
  // if you  give the value of input a is 10 and b 10
  // output is 1010
});

// This is the problem with javascript
// you can solve this problem by typescript
