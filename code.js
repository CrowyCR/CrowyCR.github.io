document.addEventListener('keydown', function(event) {
  const keyCode = event.keyCode; // Получаем код нажатой клавиши

  // Находим соответствующую кнопку на виртуальной клавиатуре по data-key
  const virtualKey = document.querySelector(`.key[data-key="${keyCode}"]`);
  const virtualSpace = document.querySelector(`.space-button[data-key="${keyCode}"]`);

  if (virtualKey) {
    virtualKey.classList.add('active');  // Добавляем класс "active" для стилизации нажатия
  }

  if (virtualSpace){
    virtualSpace.classList.add('active');
  }
});

document.addEventListener('keyup', function(event) {
  const keyCode = event.keyCode;

  const virtualKey = document.querySelector(`.key[data-key="${keyCode}"]`);
  const virtualSpace = document.querySelector(`.space-button[data-key="${keyCode}"]`);

  if (virtualKey) {
    virtualKey.classList.remove('active'); // Удаляем класс "active" при отпускании
  }

  if (virtualSpace){
    virtualSpace.classList.remove('active');
  }

});  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Все ваши стили CSS
const words = ["яблоко", "банан", "вишня", "радость", "тревожность"];
let currentWord = "";
let currentIndex = 0;

function generateNewWord() {
  currentWord = chooseWord(words, 7);
  currentIndex = 0;
  document.getElementById("myInput").value = "";
  updateWordDisplay();
  console.log("Новое слово:", currentWord);
}

function chooseWord(wordArray, repeat) {
  const randomIndex = Math.floor(Math.random() * wordArray.length);
  let word = wordArray[randomIndex];
  let repeatedWord = "";
  for (let i = 0; i < repeat; i++) {
    repeatedWord += word + " "; // Добавляем слово и пробел
  }
  return repeatedWord.trim();
}

function updateWordDisplay() {
  let wordDisplay = document.getElementById("wordDisplay");
  wordDisplay.innerHTML = "";

  for (let i = 0; i < currentWord.length; i++) {
    const span = document.createElement("span");
    span.textContent = currentWord[i];
    if (i < currentIndex) {
      span.classList.add("correct");
    }
    wordDisplay.appendChild(span);
  }
}

document.getElementById("myInput").addEventListener("input", function(event) {
  const input = this.value;
  const expectedChar = currentWord[currentIndex];

  if (input[input.length - 1] === expectedChar) {
    currentIndex++;
    updateWordDisplay();
    if (currentIndex >= currentWord.length) {
      generateNewWord();
    }
  } else {
    this.value = input.slice(0, -1);
  }
});

generateNewWord(); 
////////////////////////////////////////////////////////////////////////////
function addWord() {
    const newWordInput = document.getElementById("newWord");
    const newWord = newWordInput.value.trim(); // Получаем слово и удаляем пробелы
    if (newWord !== "") {
        words.push(newWord); // Добавляем слово в массив
        newWordInput.value = ""; // Очищаем поле ввода

        //  Сразу же генерируем новое слово, чтобы пользователь увидел
        // новое слово
        generateNewWord();

       //Если хотите отображать текущий список слов, вызовите функцию,
       // которая будет это делать
       // updateWordListDisplay();
    }
} 
/////////////////////////////////////////////////////////////////////////////// 
function updateWordListDisplay() {
    const wordListElement = document.getElementById("wordList");
    wordListElement.innerHTML = "Доступные слова: " + words.join(", "); // Отображаем слова через запятую
} 
/////////////////////////////////////////////////////////////////////////// 
function addWord() {
    const newWordInput = document.getElementById("newWord");
    const newWord = newWordInput.value.trim();
    if (newWord !== "") {
        words.push(newWord);
        newWordInput.value = "";
        generateNewWord(); // генерируем новое слово, чтоб сразу добавить
        updateWordListDisplay(); // Обновляем список
    }
}