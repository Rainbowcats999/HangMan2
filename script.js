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

  //Hide Difficulty selection and show game area and difficulty box

  //Add d-block to the difficultySelection div

  //Remove d-none from difficultyBox and gameArea

  //Add d-block to difficultyBox and gameArea
}

function getRandomWord(level) {
  let filteredWords = wordList.filter((word) => {
    if (level === "easy") return word.length <= 4; //Easy: 4 letters or less
    if (level === "medium") return word.length > 4 && word.length < 8; //Medium: more than or equal to 7 letters
    if (level === "hard") return word.length >= 8; //Hard: 8 letters or more
  });

  //Select and return
  return filteredWords[Math.floor(Math.random() * filteredWords.length)];
}
