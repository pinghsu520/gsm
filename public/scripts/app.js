'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Building es6 classes

// PARENT CLASS
// 
// CLASS DESCRIPTION : This class shares a personal information
//  about the user (i.e. person's name, person's age).
// ARGS: name - The user name (default='Anynomous');
// age - The user age (default=Unknown);
// METHODS: getGreeting - Returns a greeting including the 
// user name; getAge - Returns the user  age;
var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anynomous';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Unknown';
        var gender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Other";

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    // Method #1 


    _createClass(Person, [{
        key: 'getGreeting',
        value: function getGreeting() {
            return 'Hi. I am ' + this.name;
        }

        // Method #2 

    }, {
        key: 'getAge',
        value: function getAge() {
            return 'I am ' + this.age;
        }

        // Method #3 

    }, {
        key: 'getDescription',
        value: function getDescription() {
            return this.name + ' is ' + this.age + ' year(s) old';
        }
    }]);

    return Person;
}();

// SUBCLASSES of PERSON
// 
// CLASS DESCRIPTION: Checks if the user is a student and their major 
// ARGS: major - The user major 
// METHODS: hasMajor - Returns True if the user has a major; 
// false otherwise

var Student = function (_Person) {
    _inherits(Student, _Person);

    // Have to include all args from parents constructor 
    function Student(name, age, gender, major) {
        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age, gender));
        // 'Super' method helps to access parent constructor 


        _this.major = major;
        return _this;
    }

    // Method #1 


    _createClass(Student, [{
        key: 'hasMajor',
        value: function hasMajor() {
            return !!this.major;
        }
        // Overridden Method #2

    }, {
        key: 'getDescription',
        value: function getDescription() {

            // Create a variable to access parent method 
            var desciption = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescription', this).call(this);
            // Checks whether the user has a major
            if (this.hasMajor()) {
                // Checks the user gender 
                if (this.gender == 'Male') {
                    return desciption + '. He is majoring in ' + this.major + '.';
                } else if (this.gender == 'Female') {
                    return desciption + '. She is majoring in ' + this.major + '.';
                } else {
                    return desciption + '. Other is majoring in ' + this.major + '.';
                }
            } else {
                return desciption;
            }
        }
    }]);

    return Student;
}(Person);

// CLASS DESCRIPTION: Checks if the user has travelled or not  
// ARGS: homeLocation - The user hometown 
// METHODS: hasHomeLocation - Returns True if the user has travelled; 
// false otherwise


var Traveler = function (_Person2) {
    _inherits(Traveler, _Person2);

    function Traveler(name, age, gender, homeLocation) {
        _classCallCheck(this, Traveler);

        var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age, gender));

        _this2.homeLocation = homeLocation;
        return _this2;
    }
    // Method #1 


    _createClass(Traveler, [{
        key: 'hasHomeLocation',
        value: function hasHomeLocation() {
            return !!this.homeLocation;
        }

        // Overridden getGreeting Method 

    }, {
        key: 'getGreeting',
        value: function getGreeting() {
            // Parent method: getGreeting
            var greeting = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), 'getGreeting', this).call(this);
            // Checks if the user has a home location 
            if (this.hasHomeLocation()) {
                return greeting + '. I\'m visiting from ' + this.homeLocation + '.';
            }
            return greeting;
        }
    }]);

    return Traveler;
}(Person);

// Below are instances:


var me = new Traveler("Hamzah", 20, "Male", "Phoenix");
console.log(me.getGreeting());

var other = new Traveler();
console.log(other.getGreeting());
