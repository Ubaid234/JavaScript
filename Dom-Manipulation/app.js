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

const allLis = document.querySelectorAll('li');

const colors = ['red','orange','yellow','green','blue','purple'];

allLis.forEach((li, i) => {
    const color = colors[i];
    li.style.color = color; 
})

// Learnt about getComputedStyle 

