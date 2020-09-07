export default function getGuessLetterCount(secretWord, guessedWord) {
    return [...guessedWord].filter((letter) => secretWord.includes(letter)).length;
}