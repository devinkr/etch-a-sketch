// Etch-a-Sketch project for Odin Project.

//Create an etch-a-sketch like thing where boxes are colored on mouse hover
//Accept up to 100 x 100 pixels.
const screen = document.querySelector('#screen');
const grid = document.querySelector('#grid');


//Get gridSize

const gridSize = document.querySelector('#gridSize');
buildGrid();

//Event Listener to change gridSize

gridBtn = document.querySelector('#gridBtn');
gridBtn.addEventListener('click', buildGrid);


function buildGrid() {
    //Remove previous grid
    const gridToRemove = document.querySelector('#grid');
    screen.removeChild(gridToRemove);
    gridTotal = gridSize.value ** 2;

    // Create grid of pixels
    const newGrid = document.createElement('div');
    newGrid.id = 'grid';
    newGrid.style.display = 'grid';
    screen.appendChild(newGrid);

    for (let index = 1; index <= gridTotal; index++) {
        const div = document.createElement('div');
        div.className = 'pixels';
        newGrid.appendChild(div);
        if (index % gridSize.value === 0) {
            newGrid.style.gridTemplateColumns += ' auto';
        }
    }
    makePixels();
}




//Add function and event lisenter to color pixel on mouse over

function colorPixel(e) {
    this.classList.add('colored');
}

function makePixels () {
    const pixels = document.querySelectorAll('.pixels');
    pixels.forEach(pixel => pixel.addEventListener('mouseenter', colorPixel));
}

//Add function and event listenter to Erase button

shakeBrd = function () {
    let brd = document.querySelector(".board");
    brd.className = "";
    void brd.offsetWidth;
    brd.className = "board shaking";
}

function erasePixels(e) {
    const pixels = document.querySelectorAll('.pixels');
    pixels.forEach(pixel => pixel.classList.remove('colored'));
    shakeBrd();
}

const erase = document.querySelector('#erase');
erase.addEventListener('click', erasePixels);