# ❌⭕ Jogo da Velha (Tic-Tac-Toe)

Um projeto clássico desenvolvido com **HTML, CSS e JavaScript**, que recria o tradicional **Jogo da Velha** com interação dinâmica no navegador.

---

## 📌 Descrição

Este projeto tem como objetivo praticar:

* Manipulação do DOM
* Eventos em JavaScript
* Lógica de programação (condições de vitória e empate)
* Estruturação de layout com CSS Grid

Dois jogadores se alternam entre **X** e **O**, e o sistema detecta automaticamente vitória ou empate.

---

## ⚙️ Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla)

---

## 📂 Estrutura do Projeto

```bash
📁 projeto
 ├── index.html
 ├── style.css
 └── script.js
```

---

## 🚀 Como Executar

1. Clone o repositório:

```bash
git clone <seu-repositorio>
```

2. Acesse a pasta:

```bash
cd <nome-do-projeto>
```

3. Abra o arquivo:

```bash
index.html
```

Ou simplesmente dê dois cliques no arquivo HTML.

---

## 💻 Código do Projeto

### 📄 HTML (`index.html`)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jogo da Velha</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Jogo da Velha</h1>

  <div class="board">
    <div class="cell" data-cell></div>
    <div class="cell" data-cell></div>
    <div class="cell" data-cell></div>
    <div class="cell" data-cell></div>
    <div class="cell" data-cell></div>
    <div class="cell" data-cell></div>
    <div class="cell" data-cell></div>
    <div class="cell" data-cell></div>
    <div class="cell" data-cell></div>
  </div>

  <button id="restartButton">Reiniciar</button>

  <script src="script.js"></script>
</body>
</html>
```

---

### 🎨 CSS (`style.css`)

```css
body {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 5px;
  margin-bottom: 20px;
}

.cell {
  width: 100px;
  height: 100px;
  background-color: #fff;
  border: 2px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  cursor: pointer;
}

.cell.x::before {
  content: "X";
  color: #ff5252;
}

.cell.o::before {
  content: "O";
  color: #2196f3;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
}
```

---

### ⚡ JavaScript (`script.js`)

```javascript
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
  } else if ([...cells].every(cell => 
    cell.classList.contains('x') || cell.classList.contains('o')
  )) {
    setTimeout(() => alert('Empate!'), 100);
  } else {
    circleTurn = !circleTurn;
  }
}

function checkWin(currentClass) {
  return winningCombinations.some(combination => {
    return combination.every(index => 
      cells[index].classList.contains(currentClass)
    );
  });
}
```

---

## 🧠 Como Funciona

* Cada célula recebe um evento de clique
* Os jogadores se alternam entre **X** e **O**
* O sistema verifica:

  * ✔️ Combinações vencedoras
  * ⚖️ Empate (todas células preenchidas)
* Ao final, uma mensagem é exibida com o resultado

---

## ✨ Funcionalidades

* Alternância automática entre jogadores
* Detecção de vitória
* Detecção de empate
* Botão de reinício
* Interface simples e intuitiva

---

## 📌 Possíveis Melhorias

* Destacar a linha vencedora
* Adicionar placar (score)
* Implementar modo contra IA 🤖
* Melhorar design com animações
* Responsividade para mobile

---

## 👨‍💻 Autor

Projeto desenvolvido por você 🚀

---

## 📄 Licença

Este projeto está livre para uso e modificação.
