// Below is reassigning and redefining the SAME variable (nameVar)
// 'Var' takes duplicates
var nameVar = 'Hamzah';
nameVar = 'Ping';
nameVar = 'Tristan';
console.log('nameVar', nameVar);

// Creating 'let' based variable 
// Reassign -> VALID
// Redefining -> NOT VALID
let nameLet = 'McCann';
nameLet = 'Conklin'; 
console.log('nameLet', nameLet);


// Creating 'let' based variable 
// Reassign -> NOT VALID
// Redefining -> NOT VALID
const nameConst = 'McCann';
console.log('nameLet', nameConst);

// 'Let' and 'Const' are FUNCTION SCOPED
//  which mean it cannot be reference outside its origin function
// Example (below): 
function getPetName() {
    var petName = 'Hail';
    return petName;
} 

// Block scoping 
//  'Let' and 'Const' are BLOCKED LEVEL SCOPED 
// which mean it cannot be reference outside a function, if statement
const fullName = 'Ping Hsu';
let firstName; 

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName); 
}

console.log(firstName);

// CHALLENGE: Change all 'var' to either 'let' or 'const' in app.js file

