// Nothing Special here , just loops

// for (let i = 1; i <= 23; i++) {
//     console.log('Helllo:', i);
// }

// for (let i = 1; i <= 23; i += 3) {
//     console.log('Helllo:', i);
// }


// for (i = 3; i <= 30; i++){
//     console.log(`${i} x ${i} = ${i * i}`);
// }

// for( let i = 50; i >= 0; i -= 5 ) {
//     console.log(i);
// }

const myStudents = [

    {
        firstName : 'Zues',
        grade     : 90
    },
    {
        firstName : 'Artenis',
        grade     : 96
    },
    {
        firstName : 'Hera',
        grade     : 94
    },
    {
        firstName : 'Apollo',
        grade     : 95
    }
    
];

// for (let i = 0; i < myStudents.length; i++){
//     let students = myStudents[i];
//     console.log(`${students.firstName} scored ${students.grade}`);
// }


// let total = 0;

// for (i = 0; i < myStudents.length ; i++){
//     let students = myStudents[i]
//     total += students.grade;
// }

// console.log(total/myStudents.length);


// for ( i = 0 ; i <= 10 ; i++) {

//     console.log('OUTER LOOP : ', i);
//     for ( let j = 10; j >= 0 ; j -= 2) {
//         console.log('INNER LOOP', j );
//     }

// }



// const gameboard = [
//     [5,3,4,54,],
//     [34,45,565,7],
//     [45,45,56,76],
//     [3,3,4,6],
// ]


// let totalScore = 0;
// for (let i = 0 ; i < gameboard.length; i++) {
//     let row = gameboard[i];
    
//     for(let j = 0 ; j < row.length; j++) {
//         totalScore += row[j];
//     }
// }


//WHILE LOOPS
// let j = 0 ;
// while (j <= 5){
//     console.log(j);
//     j++;
// }

// let k = 3;
// while ( k < 20){
//     console.log(k);
//     k++
// }


// for (let i = 0; i < 10; i++){
//     console.log('hello world');
// }

//GUESSING AND TARGETING A RANDOM NUMBER
// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
// while(guess !== target ) {
//     console.log(`Target : ${target} , Guess : ${guess}`);
//     guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target : ${target} , Guess : ${guess}`);
// console.log(`Congras you win`);

// for (let i = 0; i < 10 ; i++){
//     console.log(i);
//     if ( i === 5) {
//         break;
//     }
// }


// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
// while(true) {
//     if(target === guess) break;
//     console.log(`Target : ${target} , Guess : ${guess}`);
//     guess =Math.floor(Math.random() * 10);
// }

// console.log(`Target : ${target} , Guess : ${guess}`);
// console.log(`Congras you win`);


// let subreddits = ['soccer', 'popheads', 'cringe', 'books'];
// for (let sub of subreddits) {
//     console.log(sub);
// }

// for (let char of 'cockadoodledoo') {
//     console.log(char.toUpperCase());
// }

// const movieReviews = {
//     Arrival                 : 9.5,
//     Alien                   : 9,
//     Amelie                  : 8,
//     'In Bruges'             : 9,
//     Amadeus                 : 10,
//     'Kill Bill'             : 8,
//     'Little Miss Sunshine'  :8.5,
//     Coraline                : 7.5
// };

// for ( let movie of Object.keys(movieReviews) ) {
//     console.log(movie, movieReviews[movie]);
// }

// const ratings = Object.values(movieReviews);
// let total = 0;
// for ( let r of ratings ) {
//     total += r;
// }

// let avg = total / ratings.length;
// console.log(avg)


const jeopardyWinnings = {
    regularPlay             : 2522700,
    watsonChallenge         : 300000,
    tournamentOfChampions   : 500000,
    battleOfTheDecades      : 100000
};

for( let prop in jeopardyWinnings) {
    console.log(prop);
    console.log(jeopardyWinnings[prop]);
}

let total = 0;
for ( let prop in jeopardyWinnings){
    for (let prop in jeopardyWinnings){
        total += jeopardyWinnings[prop];
    }
}

console.log(`ken jennings total earning : ${total}`);

for (let k in [ 33,3,4,5]) {
    console.log( k );
}










