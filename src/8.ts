// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Ask the user to guess the number
console.log("Guess the number: ");

// Loop until the user's guess is correct
while (true) {
    // Get the user's guess
    const guess = parseInt(prompt("Please enter your guess: "));

    if (guess === randomNumber) {
        console.log("You are correct! The number was " + randomNumber);
        break;
    } else {
        // If the user's guess is incorrect, tell them the number of tries remaining
        const numTries = 5 - parseInt(prompt("You are incorrect. You have " + (5 - guess) + " tries left."));

        if (numTries === 0) {
            console.log("Sorry, you ran out of tries. The correct answer was " + randomNumber);
            break;
        }
    }
}
