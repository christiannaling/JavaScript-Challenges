const myBoolean = true;
const myString = 'hello world';
const firstNumber = 20;
let secondNumber = 40
secondNumber = 80
const myArray = [myBoolean, myString];
const myObject = { firstProperty: myArray, sumProperty: firstNumber + secondNumber};
console.log(myObject);
const sumProp = myObject.sumProperty;
console.log(sumProp);
const valueIndex1 =myObject.firstProperty[1];
console.log(valueIndex1);