const wordUser = document.querySelector('#word-user');
const btnAdd = document.querySelector('#btn-add');
const gridWords = document.querySelector('#grid-words');
const wordsUserList = [];
// Contador de la fila actual
let currentRow = 0;

let wordDay = "RATON";

let wordsDayList = ["RATON", "PERRO", "NEGRO", "RELOJ"];

function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function createGrid() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            gridWords.innerHTML += `
            <div id="row-${i}-${j}"></div>
            `;
        }
    }

}
// Añade la palabra del usuario al grid en la fila correspondiente
function addWord() {
    const word = wordUser.value;
    const letters = Array.from(word);
    for (let column = 0; column < 5; column++) {
        const box = document.querySelector(`#row-${currentRow}-${column}`);
        box.textContent = letters[column];
    }

    wordsUserList.push(word);
}

function compareWords(wordUser, wordDay) {
    const lettersWordUser = Array.from(wordUser.toUpperCase());
    const lettersWordDay = Array.from(wordDay);
    console.log(lettersWordUser);
    console.log(lettersWordDay);
    for (let column = 0; column < 5; column++) {
        const box = document.querySelector(`#row-${currentRow}-${column}`);
        let letterA = lettersWordUser[column];
        let letterB = lettersWordDay[column];
        if (letterA === letterB) {
            box.classList.add("green-letter");
        } else if (lettersWordDay.some(e => e === letterA)) {
            box.classList.add("yellow-letter");
        } else {
            box.classList.add("grey-letter");
        }
    }
    if (wordUser === wordDay) {
        alert("has ganado!");
    }
}

function init() {
    let index = randomIntBetween(0, wordsDayList.length - 1);
    wordDay = wordsDayList[index];

    createGrid()
    btnAdd.addEventListener("click", function () {
        addWord();
        compareWords(wordUser.value, wordDay);
        currentRow = currentRow + 1;
    })
}

init();