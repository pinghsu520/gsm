// ES5 Function 
// Facts: 1.) NOT anonymous 
function square(x) {
    return x*x;

};

//  ES6 Arrow Function 
// Facts: 1.) ALWAYS anonymous
// 
// Example 1:
// const squareArrow = (x) => {
//     return x * x;
// };
// 
// Example 2 (more concise!):
// Facts: 1.) A singl line 2.) RETURN syntax is NOT NEEDED 

const squareArrow = (x) => x * x;


console.log(squareArrow(2));

// CHALLENGE: Use arrow functions 
// getFirstName('Mike Smith') -> 'Mike'
// Create regular arrow function 
// Then, create arrow function using shorthand syntax

// REGULAR Arrow Function 
const getFirstName1 = (fullName) => {
    return fullName.split(' ')[0];
}

// CONCISED Arrow Function 
const getFirstName2 = (fullName) => fullName.split(' ')[0]; 


console.log(getFirstName1('Hamzah Firman'));
console.log(getFirstName2('Ping Hsu'));