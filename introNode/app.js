console.log("Hello World\n");

console.log(Number.isInteger(6));
// Should be true
console.log(Number.isInteger(2.167));
// Should be false

console.log("\n");

//Variable declaration
let apple = 2;
console.log(apple);
console.log("\n");

apple = apple+4;
console.log(apple);
console.log("\n");

apple += 7;
console.log(apple);

console.log("\n")

let firstName = 'Barbara';
let lastName = 'Streisand';
fullName = firstName + ' ' + lastName;
console.log(fullName);

Number('12');
// 12

//OR

+'12';
// 12

let someNumber = 3;
let someString = 'cow';
let someUndefined;

console.log(typeof someNumber);
// "number"
typeof someString;
// "string"
typeof someUndefined;
// "undefined"

let isLoggedIn = true;
console.log(isLoggedIn)

console.log(3 === 4)
console.log("\n")

console.log(27 === 27);
// true

console.log(27 === '27');
// false

function firstFunction() {  // function declaration
    console.log("Hello World");  // Functions don't have to return a value and if no `return` is specified it will be return undefined.
}
firstFunction();

function ourFunction(name) {  // function declaration with 1 parameter, name
    console.log(`Hi, ${name}!`);
}

ourFunction("Jane");  // function invocation with 1 argument passed in, "Jane"

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

getFullName("Don", "Joe");  // return "Don Joe"
getFullName("Don", "Joe", "Shmoe");  // JS doesn't require right number or ANY parameters -- returns Don Joe
getFullName(1);  // js isn't typed -- returns 1 undefined

console.log(getFullName("Don", "Joe"))
console.log(getFullName(1))

let sum = function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(sum(1, 2))

let getPoo = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(getPoo('jack', 'jill'))

