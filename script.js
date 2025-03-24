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
let displayedWord = "";
let wrongGuesses = 0;
let guessedLetters = [];
const maxMistakes = 6;

function startGame(level) {
  selectedWord = getRandomWord(level);

  //create placeholder for the selected word
  displayedWord = "_".repeat(selectedWord.length);
  //display the selected word
  document.getElementById("wordDisplay").textContent = displayedWord
    .split("")
    .join("space");

  //Update difficulty display box
  updatedifficultyDisplay(level);

  //Add d-block to the difficultySelection div
  document.getElementById("difficultySelection").classList.add("d-none");

  //Remove d-none from difficultyBox and gameArea
  document.getElementById("gameArea").classList.remove("d-none");
  document.getElementById("difficultyBox").classList.remove("d-none");

  //Add d-block to difficultyBox and gameArea
  document.getElementById("gameArea").classList.add("d-block");
  document.getElementById("difficultyBox").classList.add("d-block");

  //select difficulty display box
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

function updatedifficultyDisplay(level) {
  let difficultyBox = document.getElementById("difficultyBox");

  //The boxes will be easy, medium, and hard, previously removed
  difficultyBox.classList.remove("easy", "medium", "hard");

  //slice function
  difficultyBox.textContent = `Difficulty ${
    level.charAt(0).toUpperCase() + level.slice(1)
  }`;

  //apply the appropriate css for chosen level difficulty
}

function updatedifficultyDisplay(level) {}

function guessLetter() {
  let inputField = document.getElementById("letterInput"); //Get input Field
  let guessedLetter = inputField.ariaValueMax.toLowerCase(); //Convert input to lowercase

  //check if input is valad between lowercase a-z
  if (!guessedLetter.match(/^[a-z]$/)) {
  }
}
