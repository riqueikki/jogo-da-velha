const cells = document.querySelectorAll('[data-cell]');
const restartButton = document.getElementById('restartButton');
let circleTurn;

const winningCombinations = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
  circleTurn = false;
  cells.forEach(cell => {
    cell.classList.remove('x', 'o');
    cell.removeEventListener('click', handleClick);
    cell.addEventListener('click', handleClick, { once: true });
  });
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? 'o' : 'x';
  cell.classList.add(currentClass);

  if (checkWin(currentClass)) {
    setTimeout(() => alert(`${circleTurn ? 'O' : 'X'} venceu!`), 100);
  } else if ([...cells].every(cell => cell.classList.contains('x') || cell.classList.contains('o'))) {
    setTimeout(() => alert('Empate!'), 100);
  } else {
    circleTurn = !circleTurn;
  }
}

function checkWin(currentClass) {
  return winningCombinations.some(combination => {
    return combination.every(index => cells[index].classList.contains(currentClass));
  });
}
