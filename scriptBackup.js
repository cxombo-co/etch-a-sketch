let gridSide = 600;

let row = 16;

let column = 16;

const gridContainer = document.getElementById('grid-container');
const eraserButton = document.getElementById('eraser'); /*Make sure to add eraser func */
const clearButton = document.getElementById('clear');

const selectedColor = document.getElementById('selected-color');

let colorChosen = selectedColor.value;

selectedColor.addEventListener('input', function(event) {
    colorChosen = event.target.value;
})


clearButton.addEventListener('click', (event) => {
    location.reload(); 
})


gridContainer.style.height = `${gridSide}px`;
gridContainer.style.width = `${gridSide}px`;

let isErasing = false;



eraserButton.addEventListener('click', () => {
    isErasing = !isErasing;

    if (isErasing) {
        eraserButton.classList.add('active');
    }
    else {
        eraserButton.classList.remove('active');
    }
});

let isDrawing = false;

gridContainer.addEventListener('mousedown',() => {
    isDrawing = true;
});

gridContainer.addEventListener('mouseup', () => {
    isDrawing = false;
});

gridContainer.addEventListener('mouseleave', () => {
    isDrawing = false;
});

function fillGrid() {
    for (let i = 0; i < (row * column); i++) {
        const cellBox = document.createElement('div');
        cellBox.classList.add('cell');
        cellBox.style.height = `${(gridSide / column) - 2}px`
        cellBox.style.width = `${(gridSide / row) - 2}px`

        cellBox.addEventListener("mousedown", (event) => {
            if (isErasing) {
                event.target.style.backgroundColor = "#ffffff"
            }
            else {
            event.target.style.backgroundColor = `${colorChosen}`;
            }
        });

        cellBox.addEventListener("mouseover", (event) => {
            if (isDrawing) {
                if (isErasing) {
                    event.target.style.backgroundColor = "#ffffff";
                }
                else {
                    event.target.style.backgroundColor = `${colorChosen}`;
                }
        }});

        gridContainer.appendChild(cellBox);
    }
};



fillGrid();

