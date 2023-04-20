/*
    Write the code to paint all diagonal table cells in red after 3s.
*/

function changeColor(){
    let table =document.body.firstElementChild;
    for(let iter=0;iter<table.rows.length;iter++){
        table.rows[iter].cells[iter].style.backgroundColor='red'
    }
}

setTimeout(changeColor,3000)