let gridSide = 600;

let row = 16;

let column = 16;

const gridContainer = document.getElementById('grid-container');
const eraserButton = document.getElementById('eraser');
const clearButton = document.getElementById('clear');


clearButton.addEventListener('click', (event) => {
    location.reload(); 
})

gridContainer.style.height = `${gridSide}px`;
gridContainer.style.width = `${gridSide}px`;

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
            event.target.style.backgroundColor = "black";
        });

        cellBox.addEventListener("mouseover", (event) => {
            if (isDrawing) {
                event.target.style.backgroundColor = "black";
            }
        });

        gridContainer.appendChild(cellBox);
    }
};



fillGrid();

