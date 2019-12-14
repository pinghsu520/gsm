// Building es6 classes

// PARENT CLASS
// 
// CLASS DESCRIPTION : This class shares a personal information
//  about the user (i.e. person's name, person's age).
// ARGS: name - The user name (default='Anynomous');
// age - The user age (default=Unknown);
// METHODS: getGreeting - Returns a greeting including the 
// user name; getAge - Returns the user  age;
class Person {
    constructor(name= 'Anynomous', age='Unknown', gender="Other") {
        this.name = name;
        this.age = age;
        this.gender = gender;
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

// SUBCLASSES of PERSON
// 
// CLASS DESCRIPTION: Checks if the user is a student and their major 
// ARGS: major - The user major 
// METHODS: hasMajor - Returns True if the user has a major; 
// false otherwise

class Student extends Person {
    // Have to include all args from parents constructor 
    constructor(name, age, gender, major) {
        // 'Super' method helps to access parent constructor 
        super(name, age, gender); 
        this.major = major;
    }

    // Method #1 
    hasMajor() {
        return !!this.major;
    }
    // Overridden Method #2
    getDescription() {

        // Create a variable to access parent method 
        let desciption = super.getDescription();
        // Checks whether the user has a major
        if(this.hasMajor()) {
            // Checks the user gender 
            if(this.gender == 'Male'){
                return `${desciption}. He is majoring in ${this.major}.`;
            }else if (this.gender == 'Female'){
                return`${desciption}. She is majoring in ${this.major}.`;
        } else {
            return `${desciption}. Other is majoring in ${this.major}.`;
        }

     } else {
        return desciption;
    }
    
}
}

// CLASS DESCRIPTION: Checks if the user has travelled or not  
// ARGS: homeLocation - The user hometown 
// METHODS: hasHomeLocation - Returns True if the user has travelled; 
// false otherwise


    class Traveler extends Person {
        constructor(name, age, gender, homeLocation){
            super(name, age, gender);
            this.homeLocation = homeLocation;
        }
        // Method #1 
        hasHomeLocation() {
            return !!this.homeLocation;
        }
        
        // Overridden getGreeting Method 
        getGreeting() {
            // Parent method: getGreeting
            let greeting = super.getGreeting();
            // Checks if the user has a home location 
            if(this.hasHomeLocation()){
                return `${greeting}. I'm visiting from ${this.homeLocation}.`
            }
            return greeting;
        }
    }

// Below are instances:
const me = new Traveler("Hamzah", 20, "Male", "Phoenix");
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
