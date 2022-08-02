//capture content-container div and store in variable
//define a function that prompts a user to input a value which gets attached to a button
//define a for loop to create rows, nest another loop inside to create divs per row
//for each row add class .grid-rows
//for each row set height to content-container height / input number
//for each div add class .row-divs
//for each div set width to row-width / input number
//define a function which generates a random background-color for each div when div is hovered over and
//increases 10% darkness until it is completely black

const contentContainer = document.querySelector('.content-container');

function mouseOverHandler(e) {//changes background color when mouseover event is triggered on row divs
    return e.target.style.backgroundColor = 'black';
 }

for(let i = 0; i <= 16; i++){//loops to create x amount of rows 
    let row = document.createElement('div');

    row.classList.add('grid-rows');
    row.setAttribute('id', `row-${i}`);
    row.style.height = `${contentContainer.offsetHeight / 16}px`;//row height is set to = container height / by x amount of desired rows

    contentContainer.appendChild(row);//after creating row, insert it inside content container

    for(let j = 0; j <= 16; j++){// loop runs on each iteration of i (row creation) to add divs (color points)
        let div = document.createElement('div');//create a new div element

        div.classList.add('row-divs');
        div.setAttribute('id', `row-${i}_div-${j}`);

        div.style.width = `${ row.clientWidth / 16}px`;
        contentContainer.addEventListener('mousedown', (e) => {//will only start coloring if left mouse is clicked and held in
            div.addEventListener('mouseover',mouseOverHandler)
        })

        row.appendChild(div);
    }
    //.appendChild(row)
    
}

document.querySelectorAll('.row-divs').forEach(element => {
element.addEventListener('mouseup', (e) => document.querySelectorAll('.row-divs').forEach(element =>
    element.removeEventListener('mouseover', mouseOverHandler)))
});//attach an event listener for when mouse button is released so that mouseover handler
// function is removed from all divs preventing further divs from being colored
