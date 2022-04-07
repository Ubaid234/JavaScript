// if(something){
//     do something
// } else {
//     do something else
// }

const id = 100;

// Equal TO 

// if(id == 101) {
//     console.log('Correct');
// } else {
//     console.log('INCORRECT')
// }

// NOT EQUAL TO 

// if(id != 101) {
//     console.log('Correct');
// } else {
//     console.log('INCORRECT')
// }

// Equal TO VALUE & TYPE

// if(id === 100 ) {
//     console.log('Correct');
// } else {
//     console.log('INCORRECT')
// }

// NOT Equal TO VALUE & TYPE

// if(id !== 100 ) {
//     console.log('Correct');
// } else {
//     console.log('INCORRECT')
// }

// TEST IF undefined

// if( typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`)
// } else{
//     console.log('NO ID');
// }

// Greater or Less than

// if( id >= 100 ){
//      console.log('CORRECT')
//  } else{
//      console.log('INCORRECT');
// }

// IF ELSE 

const color = 'yellow'

// if (color === 'red'){
//     console.log('color is red');
// } else if (color === 'blue'){
//     console.log('color is blue');
// } else {
//     console.log('color is not red or blue')
// }


// Logical operators 

const name = 'steve';
const age = 20;

// AND &&
if (age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if( age >= 13 && age <= 19){
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

// OR ||

if (age < 16 || age > 65){
    console.log(`${name} can not run race`);
} else {
    console.log(`${name} can race`)
}

// TURNARY OPERATORS
console.log(id === 100 ? ' CORRECT ' : 'INCORRECT');

// Without Braces
if (id === 100)
    console.log('CORRECT');
else
    console.log('INCORRECT');

if (id !== 100)
    console.log('CORRECT');
else
    console.log('INCORRECT');