// Create an array and add three numbers to it.

var array = [1, 3, 2]

// Use your array to return the second number.

console.log(array[1]);

// What data type is:

123 / 12 - number "Things in quotes!" - String
undefined - undefined

// Write an if statement that returns true.

if (a > b) {
  console.log('true');
} else {
  console.log(false);
}

// Consider these two arrays: myArray = ['Thomas', 'Amber', 'Raoul']
// and emptyArray = []. Use a for loop to add our names to emptyArray.

myArray = ['thomas', 'amber', 'raoul'];
emptyArray = [];

for (var i = 0; i < myArray.length; i++) {
  emptyArray.push(myArray[i]);
}

// exercises 2

//Write a function that returns your first name. Call it.

function first_name(isabelle) {
  return first_name;
}

// Write a new function that takes your name as an input.
// The function should return your first name, plus your last name,
//as one string. (Hint: strings can be combined with a +)

function name(first_name, last_name) {
  let my_name = first_name + ' ' + last_name;
  return my_name;


  // exersice 3

  // Convert the above Person class to an ES2015 version using the new class syntax

class Person

  function(first, last) {

    this.first = first;
    this.last = last;

    var privateFn = function(first, last) {}

    this.setName = function(first, last) {
      this.first = first;
      this.last = last;
    }

  }

  fullName = () => {
    return this.first + ' ' + this.last;
  }

  var bob = new Person("Thomas", "Ochman");

  bob.fullName();

  const privateFn = (first, last) => {};

  this.setName = (first, last) => {

    this.first = first;
    this.last = last;
  };
}
}
