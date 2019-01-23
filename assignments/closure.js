// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


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
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2




const counter = (function () {
  var add = 0;
  return function () {add += 1; return add};
  
})();

counter();
counter();
console.log(counter());
console.log(counter());







/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
