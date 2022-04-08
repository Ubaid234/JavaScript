//FUNCTION DECLARATIONS

function greet(firstName = 'Steve', lastName = 'Smith'){
    // if(typeof firstName === 'undefined'){firstName = 'Steve'} -- ES5
    // console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet());

// FUNCTION EXPRESSIONS

const square = function(x = 3){
    return x*x
};

// console.log(square())

// IMMEDIATELY INVOKABLE FUNCTIONS EXPRESSIONS - IIFEs

// (function(){
//     console.log('IIFE Ran..');
// })();

// (function(name){
//     console.log('IIFE Ran.. ' + name);
// })('Brad');

// PROPERTY METHODS

const todo = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function(){
    console.log('Delete todo...');
}

todo.add();
todo.edit(22)
todo.delete();