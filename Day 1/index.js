var guess = document.getElementById("userGuess");
var number = Math.floor(Math.random() * 100);




function randomNumber(){

    if(guess == number){
        document.getElementById("feedback").innerHTML = "YOU WON";
    };
    if(guess < number){
        document.getElementById("feedback").innerHTML = "YOU ARE A FAILURE YOU GUESSED TOO HIGH the real number was: " + number;
    };
    if(guess > number){
        document.getElementById("feedback").innerHTML = "YOU ARE A FAILURE YOU GUESSED TOO LOW the real number was: " + number;
    };
};