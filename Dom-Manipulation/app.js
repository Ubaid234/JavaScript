// Changing Multiple Element 

const allLis = document.querySelectorAll('li');

for (let i = 0; i < allLis.length; i++){
    allLis[i].innerText = 'we are the champs'
}

for (let li of allLis) {
    li.innerHTML = 'we ar <b> The ChamPIONS </b>'
}
