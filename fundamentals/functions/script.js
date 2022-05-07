function rolldie () {
    let roll = Math.floor(Math.random()  * 4) + 1;
    console.log (`Rolled: ${roll}`);
}

// function throwDice () {
//     rolldie();
//     rolldie();
//     rolldie();
//     rolldie();
//     rolldie();
//     rolldie();
// }


// throwDice();

// function throwDice(numRolls) {
//     for ( let i = 0; i < numRolls; i++) {
//         rolldie();
//     }
// }

// function greet (nickname) {
//     console.log(nickname);
//     console.log('Hi');
// }

// function square (num) {
//     console.log(num * num);
// }

// function sum ( x, y) {
//     console.log(x + y );
// }

// function divide ( a, b) {
//     console.log ( a/b);
// }

// RETURN STATEMENT 

// function add (x,y) {
//     return x + y ;
// } 

// function square (x , y) {
//     return x * y ;
//     console.log ('All Done');
// }

// function isPurple(color) {
//     if ( color.toLowerCase() === 'purple') {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

//THE ABOVE RETURN FUNCTION CAN ALSO BE WRITTEN AS:-
// function isPurple(color) {
//     if ( color.toLowerCase() === 'purple') {
//         return true;
//     } 
//     return false;
    
// }

// THIS CAN FURTHER BE WRITTEN AS :-

// function isPurple(color) {
//        return color.toLowerCase() === 'purple';
//      }

// AN ADVANCED VERSION OF ISPURPLE 

// function containsPurple(arr) {
//   for (let color of arr) {
//     if (color === "purple" || color === "magenta") {
//       return true;
//     }
//   }
//   return false;
// }

// Function scope 

function sand () { 

   let person = 'Jerry';
   const age = 34;
   var color = 'white';
   console.log(color);

}

function water () {

    var color = 'Black'
    const age = 85;
    let person = 'Tom' ;
    console.log(color);

}

sand();
water();
