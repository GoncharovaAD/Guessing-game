let maximum = parseInt(prompt("Enter the maximum number!")); //Defining max number
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!")) //Checking whether input is valid
}

const targetNum = Math.floor(Math.random() * maximum) + 1; //Generating random number

let guess = prompt("Enter your first guess! (Type 'q' to quite the game)"); //Prompting to enter first guess
let attempts = 1; //Starting counter

while (parseInt(guess) !== targetNum) { //Starting while cycle
    if (guess === "q") break; //Creating opportunity to quit
    guess = parseInt(guess); //Parsing the digit
    if (guess > targetNum) { //Matching number with a hidden number
        guess = prompt("Too high! Enter a new guess:");
        attempts++; //Counter +1
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess:");
        attempts++; //Counter +1
    } else {
        guess = prompt("Invalid guess, please enter a number or 'q' to quit")
    }
}

if (guess === "q") { //Printing out text after finishing
    console.log("Ok, you quit!")
} else {
    console.log(`You got it! It took you ${attempts} guesses.`)
}
