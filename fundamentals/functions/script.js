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

// FUNCTION SCOPE  

// function sand () { 

//    let person = 'Jerry';
//    const age = 34;
//    var color = 'white';
//    console.log(color);

// }

// function water () {

//     var color = 'Black'
//     const age = 85;
//     let person = 'Tom' ;
//     console.log(color);

// }

// sand();
// water();

// BLOCK SCOPE

// if(true) {
//     let animal = 'zebra';
//     console.log(animal);
// }

// console.log(animal);

// if(true) {
//     var animal = 'zebra';
//     console.log(animal);
// }

// console.log(animal);

// [1,3,5]
// [2,6,10]
 
function doubleArr(arr){
    const result = [];
    for(let num of arr) {
        let double = num * 2;
        result.push(double);
    }
    return result ;
}

// LEXICAL SCOPE

// function outer () {
//     let movie = 'Amadeus';
//     function inner () {
//         console.log(movie.toUpperCase())
//     }
//     inner();
// }

// function outer () {
//     let movie = 'Amadeus';
//     function inner () {
//         let movie = 'Inception'
//         console.log(movie.toUpperCase())
//     }
//     inner();
// } 

// function outer () {
//     let movie = 'Amadeus';

//     function inner () {
//         let movie = 'Inception'
        
//         function extraInner () {
//             console.log(movie.toUpperCase())
//         }
//         extraInner();
//     }
//     inner();
// }

// FUNCTION EXPRESSIONS 

// const sum = function (x , y) {
//     return x + y;
// } 

// const product = function multiply(x, y) {
//   return x * y;
// };

// HIGHER ORDER FUNCTIONS 

function add (x , y) {
    return x + y ;
}

const subtract = function (x, y) {
    return x - y ;
}

function multiply (x , y ) {
    return x * y ;
}

const divide = function (x, y) {
    return x / y ;
}

const operations = [add, subtract, multiply , divide];

for( let doc of operations) {
   let result =  doc(30,5);
   console.log(result);
}

const thing = {
    doSomething : multiply
}

// FUNCTION AS ARGUMENTS

function callThreeTimes (f) {
    f();
    f();
    f();
}

function cry() {
    console.log("BOO HOO I'M SO SAD!");
}
function rage() {
    console.log("I AM ANGRY!");
}

// callThreeTimes(cry);

function repeatNTimes(action, num) {
    for (let i = 0 ; i < num ; i++) {
        action();
    }
}

// repeatNTimes (cry, 23);

function pickOne (f1,f2) {
    let rand = Math.random();
    console.log ( rand );
    if (rand < 0.5 ) {
        f1();
    } else {
        f2();
    }
}

// pickOne(cry, rage);

//  FUNCTION AS RETURN VALUES

// function multiplyBy(num) {
//     return function(x) {
//         return x * num;
//     }
// }

// const triple = multiplyBy(3);
// const double = multiply(2);
// const halve = multiplyBy(.5);


function makeBetweenFunc (x,y) {
    return function (num) {
        return num >= x && num <= y;
    }
}

const isChild = makeBetweenFunc(0,18);

const isInNineties = makeBetweenFunc(1990, 1999);

const isNiceWeather = makeBetweenFunc (60,79);

// CALLBACKS

// function grumps () {
//     alert(" Gaagh go away! ")
// }

// setTimeout(function() {
//     alert("WELCOME!");
// }, 5000);


const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    alert("WHY DID U CLICK ME!")
})

