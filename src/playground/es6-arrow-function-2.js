console.log('JS is running');

// Arguments object - no longer bound with ARROW function 

// ES5 function:
// still allow Argument object where it prints 
//  all possible arguments that are included even the ones
//  that are not being manipulated. 
const add = function (a, b, c) {
    console.log(arguments);
    // Output: 
    // Arguments { 0: 4, 1: 5, 2: 55, … }
    return a + b;
}
console.log(add(4, 5, 55));


// 'this' keyword - no longer bound 

const user = {
    name: 'Hamzah',
    cities: ['Jakarta', 'Arizona', 'New Jersey'], 
    // Arrow function cannot be used on METHOD
    // FUNCTION keyword is never going to be used 
    printPlacesLived() {
        // Map method
        // EXAMPLE 1 (Regular):
        /* const cityMessages = this.cities.map((city) => { */
            // manipulate each city name and won't effect an array 
           /*  return this.name + ' have lived in ' + city ;
        }); */
        // returns an Array of city names 
      /*   return cityMessages; */

        // EXAMPLE 2 (More concise):
        return this.cities.map((city) => this.name + ' has lived in ' + city);

// Looping using Arrow function
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });

    }
};
console.log(user.printPlacesLived());

// CHALLENGE: Create a new method called 'multiplier' and returns a new array 
//  where the number have been multiplied 

const multiplier = {
    numbers: [1, 2, 3, 4, 5, 6],
    multiplyBy: 2,
    // METHOD
    multiply () {
        // returns a new array
        return this.numbers.map((num) => this.multiplyBy * num);
    }

};

console.log(multiplier.multiply());