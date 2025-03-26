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

//setting Game Variables
let selectedWord = "";
let displayedWord = "";
let wrongGuesses = 0;
let guessedLetters = [];
const maxMistakes = 6;

function startGame(level) {
  selectedWord = getRandomWord(level);

  //Update Difficulty Display Div
  updateDifficultyDisplay(level);

  //Create the placeholder's for the selected word
  displayedWord = "_".repeat(selectedWord.length);
  //display the updated Word
  document.getElementById("wordDisplay").textContent = displayedWord
    .split("")
    .join(" ");

  //Hide Difficulty Selection and Show Game Area & Difficulty Box
  //Add d-none to the #difficultySelection div
  document.getElementById("difficultySelection").classList.add("d-none");

  //remove d-none from #difficultyBox & #gameArea
  document.getElementById("gameArea").classList.remove("d-none");
  document.getElementById("difficultyBox").classList.remove("d-none");

  //add d-block to #difficultyBox & #gameArea
  document.getElementById("gameArea").classList.add("d-block");
  document.getElementById("difficultyBox").classList.add("d-block");
}

function getRandomWord(level) {
  let filteredWords = wordList.filter((word) => {
    if (level === "easy") return word.length <= 4; // Easy: 4 or fewer letters
    if (level === "medium") return word.length >= 5 && word.length <= 7; // Medium: 5-7 letters
    if (level === "hard") return word.length >= 8; // Hard: 8+ letters
  });
  //Select and return a random word from the filtered list
  return filteredWords[Math.floor(Math.random() * filteredWords.length)];
}

function updateDifficultyDisplay(level) {
  let difficultyBox = document.getElementById("difficultyBox");

  //Remove any previous difficulty classes ('easy', 'medium', 'hard')
  difficultyBox.classList.remove("easy", "medium", "hard");

  //Set text & apply class dynamically using template literals
  difficultyBox.textContent = `Difficulty: ${
    level.charAt(0).toUpperCase() + level.slice(1)
  }`;

  //apply the appropriate CSS style for chosen Difficulty
  difficultyBox.classList.add(level);
}

function updatedifficultyDisplay(level) {}

function guessLetter() {
  let inputField = document.getElementById("letterInput"); //Get input Field
  let guessedLetter = inputField.ariaValueMax.toLowerCase(); //Convert input to lowercase

  //check if input is valad between lowercase a-z
  if (!guessedLetter.match(/^[a-z]$/)) {
    alert("Guess a letter from A-Z");
    inputField.value = ""; //Clear input field
    return; //Exit function
  }

  //Check if the letter was already guessed or not using .includes()
  if (guessedLetters.includes(guessedLetter)) {
    alert('You already guessed "${guessedLetter}". Try a different letter!');
    inputField.value = ""; //Clear input field
    return;
  } else {
    //store guessed letter in guessedLetter array
    guessedLetters.push(guessedLetter);
  }

  //Check if guessed letter is in the selected word
  if (selectedWord.includes(guessedLetters)) {
    correctGuess(guessedLetter);
  } else {
    wrongGuess(guessedLetter);
  }

  inputField.value = ""; //Clear input field
  inputField.focus(); //Refocus input field for next guess
}

function wrongGuess(guessedLetter) {
  //incerment the number of wrong guesses
  wrongGuess++;
  //add the number of guessedLetter to the array
  document.getElementById("wrongLetters").textContent += `${guessedLetter}`;
  document.getElementById("shamrock").src = "imgs/shamrock"`${
    6 - wrongGuess
  }.jpg`;
  //Check to see if the number of wrong guesses is equal to the maximum mistakes
  if (wrongGuesses == maxMistakes) {
    endGame(false);
  }
}

function correctGuess(guessedLetter) {
  let newDisplayedWord = "";

  for (let i = 0; i < selectedWord.length; ) {
    if (selectedWord[i] === guessLetter) {
      newDisplayedWord += guessedLetter;
    } else {
      newDisplayedWord += displayedWord[i];
    }
  }

  displayedWord = newDisplayedWord;
  document.getElementById("wordDisplay").textContent = displayedWord
    .split("")
    .join("");

  if (displayedWord.include("_")) {
    endGame(true);
  }
}
