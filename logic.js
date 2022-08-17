// CREATE THE INITIAL GRID
const container = document.querySelector('.container');
for (let i = 0; i < 16; i++)
    for (let j = 0; j < 16; j++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = "45px";
        cell.style.height = "45px";
        cell.style.border = "1px solid black"
        container.appendChild(cell);
    }

// BEGIN DRAWING
const begin = document.querySelector('.begin');
begin.addEventListener('click', function() {
    STOP = 0;
    const grid = document.querySelectorAll('.cell');
    grid.forEach(cell => cell.addEventListener('mouseover', function(e) {
        if (!STOP)
            e.target.style.backgroundColor = "gray";
    }));
});

// STOP DRAWING 
function STOPF() {
    STOP = 1;
}
var STOP;
const stop = document.querySelector('.stop');
stop.addEventListener('click', STOPF);

// CHANGE GRID SIZE
const gridSize = document.querySelector('select');
function selectChange() {
    const size = gridSize.value;
    const cellSize = 720 / size;

    // EMPTY THE GRID AND CREATE THE NEW ONE
    container.innerHTML = '';
    for (let i = 0; i < size; i++)
        for (let j = 0; j < size; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            cell.style.border = "1px solid black"
            container.appendChild(cell);
        }
}
gridSize.onchange = selectChange;

// RESET THE DRAWING
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', selectChange);