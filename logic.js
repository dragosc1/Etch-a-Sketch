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
const grid = document.querySelectorAll('.cell');
grid.forEach(cell => cell.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = "gray";
}));
const gridSize = document.querySelector('select');
function selectChange() {
    const size = gridSize.value;
    const cellSize = 720 / size;
    console.log(cellSize);
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
    const grid = document.querySelectorAll('.cell');
    grid.forEach(cell => cell.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = "gray";
    }));
}
gridSize.onchange = selectChange;