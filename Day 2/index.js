var userIbputList = [];
var lastGuessC = -2;
var lastGuessB = -1;
var lastGuess = 0;
function Arrarer(){
    var input = document.getElementById("userInput").value;
    
    if(input in userIbputList){
        document.getElementById("feedback").innerHTML = "please do a diffrent guess!!"
    }else{
        userIbputList.push(input);
        console.log(userIbputList);
    
        document.getElementById("feedback").innerHTML = "Your total number of guesses is: " + userIbputList.length;
        document.getElementById("return").innerHTML = "Your last guesses: " + userIbputList;
        lastGuess += 1;
        lastGuessB += 1;
        lastGuessC += 1;
    }
    }

   