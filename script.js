const wordList = [
  "cats",
  "kittens",
  "Antidisestablishmentarianism",
  "Supercalifragilisticexpialidocious",
  "Pneumonoultramicroscopicsilicovolcanoconiosis",
  "charm",
  "gold",
  "silver",
  "bronze",
  "gay",
  "lesbian",
  "bisexual",
  "transgender",
  "intersex",
  "queer",
  "asexual",
];

//setting time variables
let selectedWord = "";
let displayWord = "";
let wrongGuesses = 0;
let guessedLetters = [];
const maxMistakes = 6;

function startGame(level) {
  selectedWord = getRandomWord(level);
}

function getRandomWord(level) {
  let filteredWords = wordList.filter((word) => {
    if (level === "easy") return word.length <= 4;
    if (level === "medium") return word.length > 4 && word.length < 8;
    if (level === "hard") return word.length >= 8;
  });
}
