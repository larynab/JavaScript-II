// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function sayName(name) {
  const myName = name;
  console.log(`My name is: ${myName} and I like to program`);
  
  
  function properName() {
    // myName is NOT defined in this function!!!!
    const properItem = "proper!";
    console.log(`Good day, my name is: ${myName}`);
    
    
    function slangName() {
      const slangTest = "This is slang!";
      console.log(`What up! My name is: ${myName}, and I an NOT ${properItem}`);
      
    }
    
    slangName();
  }
  
  properName();
};

sayName("Joe");

function sayMeow(meow) {
  const myMeow = meow;
  console.log(`I am a cat and I like to ${myMeow}`);

  function myHairball() {
    const hairBalled = "*cough* *wheeze*";
    console.log(`My ${myMeow}s can be nice until I get a hairball.`);

    function nowChoke() {
      const nineLives = "Revive!"
      console.log(`${myMeow}ing , oh god ${hairBalled} , noooooo.` )
    };
    nowChoke();
  };
  myHairball();
};

sayMeow("Purrrrrr");

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
