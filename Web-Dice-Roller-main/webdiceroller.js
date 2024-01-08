function rollDice(){
    //rolls the dice using random numbers
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    var sum = dice1 + dice2;
    //adds the sum into the html page
    var sumMessage = document.getElementById("sum");

    if (sum === 7 || sum === 11) {
        document.getElementById("game-status").innerHTML = "Winner!";
    }
    else {
        document.getElementById("game-status").innerHTML = "You Lose!";
    }
    //displays the results into the HTML page
    document.getElementById("result").style.display = "block";
    sumMessage.innerHTML = `Dice 1: ${dice1} <br> Dice 2: ${dice2} <br> Result: ${sum}`;
}
//rolls the dice when the page loads
window.onload = function() {
    rollDice();
};

//event listenter so the dice are rolled when enter is pressed
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        rollDice();
    }
});