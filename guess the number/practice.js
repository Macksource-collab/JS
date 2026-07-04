const max = prompt("Enter max number: ");
// console.log(max);

const randomNum = Math.floor(Math.random() * max) ;
console.log(randomNum);

let guess = prompt("Enter your first guess: ");
console.log(`guess number: ${guess}`);

while (true) {

    if (guess > randomNum) {
        guess = prompt("Too high! Try again: ");
    }   
    else if (guess < randomNum) {
        guess = prompt("Too low! Try again: ");
    }   
    else {
        alert("Congratulations! You guessed the number!");
        break;
    }
}