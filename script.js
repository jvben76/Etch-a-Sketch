//capture content-container div and store in variable
//define a function that prompts a user to input a value which gets attached to a button
//define a for loop to create rows, nest another loop inside to create divs per row
//for each row add class .grid-rows
//for each row set height to content-container height / input number
//for each div add class .row-divs
//for each div set width to row-width / input number
//define a function which generates a random background-color for div when div is hovered over
//////////////////////////////////////////////////////////////////////////////////////////////////////////


const contentContainer = document.querySelector('.content-container'); //Get UI DOM
const sizeBtns = document.querySelectorAll('.btns');


////////////////////////////////RUNS ON PAGE LOAD (DEFAULT GRID)////////////////////////////////////////////


function mouseOverHandler(e) {                      //changes background color when mouseover
                                                    //event is triggered on row divs
    return e.target.style.backgroundColor = 'black';
}

for (let i = 0; i <= 8; i++) {                      //loops to create x amount of rows 
    let row = document.createElement('div');

    row.classList.add('grid-rows');
    row.setAttribute('id', `row-${i}`);
    row.style.height =
        `${contentContainer.offsetHeight / 8}px`;  //row height is set to = 
                                                   //container height / by x amount of desired rows

    contentContainer.appendChild(row);             //after creating row, insert it inside content container

    for (let j = 0; j <= 16; j++) {                //loop runs on each iteration of i (row creation) 
                                                   //to add divs (color points)
        let div = document.createElement('div');   //create a new div element

        div.classList.add('row-divs');
        div.setAttribute('id', `row-${i}_div-${j}`);
        div.style.width = `${row.clientWidth / 16}px`;

        div.addEventListener('mouseover', mouseOverHandler);

        row.appendChild(div);
    }
}
///////////////////////////////////////////END OF DEFAULT GRID/////////////////////////////////////////////////


function runNewGrid(num) {                                  //define function to create new grid
                                                            //when option buttons are clicked
    for (let i = 0; i <= (num / 2); i++) { 
                                                            //loops to create x amount of rows 
        let row = document.createElement('div');
        row.classList.add('grid-rows');
        row.setAttribute('id', `row-${i}`);
        row.style.height =
           `${contentContainer.offsetHeight / (num / 2)}px`;//row height is set to = container height / by 
         
                                                            //x amount of desired rows
        contentContainer.appendChild(row);                  //after creating row, insert it inside content container

        for (let j = 0; j <= num; j++) {                    //loop runs on each iteration of i (row creation) to add divs (color points)

            let div = document.createElement('div');        //create a new div element

            div.classList.add('row-divs');
            div.setAttribute('id', `row-${i}_div-${j}`);
            div.style.width = `${row.clientWidth / num}px`;

            div.addEventListener('mouseover', (e) => {
                mouseOverHandler(e);
                randomBackgroundColor(e);                   //generate random background-color on hover
            })

            row.appendChild(div);
        }
    }
}


function randomBackgroundColor(e) {                         //define function to generate random background color

    const randomColorVal =                                 //define a function to select a random num between 2 numbers
        (min, max) => min + Math.floor
            (Math.random() * (max - min + 1));

    let red = randomColorVal(0, 255);                  //assign a value to RGB variables
    let green = randomColorVal(0, 255);
    let blue = randomColorVal(0, 255);

    e.target.style.backgroundColor =                   //set current div background color to RGB variables 
        `rgb(${red}, ${green}, ${blue})`;
}

function changeSize(num) {                                 //define function to run when
    //grid size option buttons are clicked

    let gridSize = num;

    while (contentContainer.firstChild) {                  //removes default grid or previous grid
        contentContainer.removeChild(contentContainer.firstChild);
    }

    runNewGrid(gridSize);
}

sizeBtns.forEach(element =>

    element.addEventListener('click', (e) => {
        changeSize(Number(e.target.id));
    }));


function reset() {
    document.location.reload()
}