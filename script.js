const word_el = document.getElementById("word");

function getRandomWord() {
  const words = ["JAVASCRIPT", "JAVA", "PYTHON"];
  return words[Math.floor(Math.random() * words.length)];
}

const correctLetters = ["J", "A"];
const wrongLetter = [];

function displayWord() {
  const selectedWord = getRandomWord();

  word_el.innerHTML = `${selectedWord
    .split("")
    .map(
      (letter) => `<div class="letter">
      ${correctLetters.includes(letter) ? letter : ""}
      </div>`
    )
    .join("")}
      `;

      const w = word_el.innerText.replace(/\n/g,'');
      if(w == selectedWord){
        
      }
}
displayWord();
