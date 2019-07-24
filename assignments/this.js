/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: The value of 'this' will be the window when in the global scope.
* 2. Implicit Binding: 'this' refers to the object before the dot.
* 3. New Binding: Used with constructor fucntions.
* 4. Explicit Binding: Whenever .call or .apply are used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayHello (greeting) {
    console.log(this);
    return greeting;
}
sayHello('Hello!!');
// Principle 2

// code example for Implicit Binding
const aboutDog = {
    name: 'Prada',
    favHobby: function (hobby) {
        console.log(`${this.name}'s hobby is ${hobby}`);
        console.log(this);
    }

};
aboutDog.favHobby('Napping');

// Principle 3

// code example for New Binding
function HelloDog(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const prada = new HelloDog('Rocco');
  const rocco = new HelloDog('Prada');
  
  rocco.speak();
  prada.speak();
// Principle 4

// code example for Explicit Binding
function HelloDog(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  rocco.speak.call(prada);
  prada.speak.apply(rocco);