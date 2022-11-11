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

let output = undefined ?? "string" // -> "string"
let output1 = null ?? "string" // -> "string"
let output2 = false ?? "string" // -> false
let output3 = NaN ?? "string" // -> NaN

console.log(output, output1, output2, output3);

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
people.showAge() 



