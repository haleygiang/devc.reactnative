
var randomNumber = Math.floor(Math.random() * 100) + 1;
var pastGuess = "";
var count = 10;
var yourGuess = document.getElementById("input-number").value;

function handleClick(){
    count --;

    // check yourGuess
    if (yourGuess < randomNumber){
        document.getElementById("result").innerHTML = "Your number is too low! You have " + (count) + " guesses left.";
        document.getElementById("result").style.backgroundColor = "orange";
     }else if (yourGuess > randomNumber){
        document.getElementById("result").innerHTML = "Your number is too high! You have " + (count) + " guesses left.";
        document.getElementById("result").style.backgroundColor = "#ff66ff";
     }else{
        document.getElementById("result").innerHTML = "Congratulations! You got the right answer! You have " + (count) + " guesses left.";
        document.getElementById("result").style.backgroundColor = "#00ff00";
     }

    // if user runs out of guesses
    if (count == 1){
        alert("You lost :( The correct number is " + randomNumber + ". Better luck next time.");
        location.reload();
    }

    // shows past guesses
    pastGuess = pastGuess + yourGuess + '<br>';
    document.getElementById("pastResult").innerHTML = pastGuess;

    // console.log(yourGuess);
}
