// Import stylesheets
import './style.css';

// Array Destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits; // Array destructuring assignment
console.log(a, b);

//Object Destructuring
let person = { name: 'Peter', age: 28 };
let { name, age } = person; // Object destructuring assignment
console.log(name, age);

let output1 = undefined ?? "string" // -> "string"
let output2 = null ?? "string" // -> "string"
let output3 = false ?? "string" // -> false
let output4 = NaN ?? "string" // -> NaN

console.log(output1, output2, output3, output4);

let output5 = undefined || "string" // -> "string"
let output6 = null || "string" // -> "string"
let output7 = false || "string" // -> false
let output8 = NaN || "string" // -> NaN

console.log(output5, output6, output7, output8);

let budget = 100_000;
console.log(budget);

// PRIVATE METHODS
class People {
  showName() {
    console.log("My name is Faithful")
  }

  // PUT A # TO DEFINE A METHOS AS PRIVATE (NEW ON ECMA2021)
  #showAge() {
    console.log("Faithful is 20")
  }
}

const people = new People()
people.showName()
//people.showAge() 



