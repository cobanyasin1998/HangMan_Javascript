const word_el = document.getElementById("word");
const popup = document.getElementById("popup-container");
const message_el = document.getElementById("success-message");
const wrongLetters_el = document.getElementById("wrong-letters");

function getRandomWord() {
  const words = ["JAVASCRIPT", "JAVA", "PYTHON"];
  return words[Math.floor(Math.random() * words.length)];
}

const correctLetters = [];
const wrongLetter = [];
const selectedWord = getRandomWord();

function displayWord() {
  word_el.innerHTML = `${selectedWord
    .split("")
    .map(
      (letter) => `<div class="letter">
      ${correctLetters.includes(letter) ? letter : ""}
      </div>`
    )
    .join("")}
      `;

  const w = word_el.innerText.replace(/\n/g, "");
  if (w == selectedWord) {
    popup.style.display = "flex";
    message_el.innerText = "Tebrikler. Kazandınız";
  }
}

window.addEventListener("keydown", function (e) {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
        displayWord();
      } else {
        //BU HARFI KULLANDINIZ
      }
    } else {
      if (!wrongLetter.includes(letter)) {
        wrongLetter.push(letter);
       updateWrongLetters();
      }
    }
  }
});
function updateWrongLetters(){
  wrongLetters_el.innerHTML =`
  
  ${wrongLetter.length >0 ? '<h3>Hatalı Harfler</h3>':''}
  ${wrongLetter.map(letter=>`<span>${letter}</span>`)}
  `;

  
}
displayWord();
