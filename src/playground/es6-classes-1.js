// Building es6 classes 

// CLASS DESCRIPTION : This class shares a personal informations
//  about a person (i.e. person's name, person's age).
// ARGS: name - A person's name (default='Anynomous');
// age - A person's age (default=Unknown);
// METHODS: getGreeting - Returns a greeting including a 
// person's name; getAge - Returns a person's age;
class Person {
    constructor(name= 'Anynomous', age='Unknown') {
        this.name = name;
        this.age = age;
        
    }
    // Method #1 
    getGreeting() {
        return `Hi. I am ${this.name}`;
    }

    // Method #2 
    getAge() {
        return `I am ${this.age}`;
    }
    
    // Method #3 
    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    }
    
}   

// Below are instances:
const me = new Person("Hamzah", 20);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());