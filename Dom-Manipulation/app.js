// Changing Multiple Element 

/*
const allLis = document.querySelectorAll('li');

for (let i = 0; i < allLis.length; i++){
    allLis[i].innerText = 'we are the champs'
}

for (let li of allLis) {
    li.innerHTML = 'we ar <b> The ChamPIONS </b>'
}  
*/

// Altering Styles

// const allLis = document.querySelectorAll('li');

// const colors = ['red','orange','yellow','green','blue','purple'];

// allLis.forEach((li, i) => {
//     const color = colors[i];
//     li.style.color = color; 
// })

// Learnt about getComputedStyle 
// Maniputing classes

const todo = document.querySelector('#todos  .todo');


/*

todo.style.color = 'gray';
todo.style.textDecoration = 'line-through'; 
todo.style.opacity = '50%'


*/

// Learned About checkList in console


// Creating an element
const newImg = document.createElement('img')
newImg.src = 'https://images.unsplash.com/photo-1653256464939-d13e40b6089c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000'
newImg.style.width = '300px'

document.body.appendChild(newImg);

const newLink = document.createElement('a');
newLink.innerText = 'Mr, Bubz Video ! CLICK MEE';
newLink.href = 'https://www.youtube.com/watch?v=ihUQ3ZE4kB8' 

const firstP = document.querySelector('p')
firstP.appendChild(newLink)