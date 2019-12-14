'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Building es6 classes 

// CLASS DESCRIPTION : This class shares a personal informations
//  about a person (i.e. person's name, person's age).
// ARGS: name - A person's name (default='Anynomous');
// age - A person's age (default=Unknown);
// METHODS: getGreeting - Returns a greeting including a 
// person's name; getAge - Returns a person's age;
var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anynomous';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Unknown';

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
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

// Below are instances:


var me = new Person("Hamzah", 20);
console.log(me.getDescription());

var other = new Person();
console.log(other.getDescription());
