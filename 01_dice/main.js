
var myDice = new Array("images/dice1.png","images/dice2@2x.png","images/dice3@2x.png","images/dice4@2x.png","images/dice5@2x.png","images/dice6@2x.png");

function randomDice() {
     var randomNum1 = Math.floor(Math.random() * myDice.length);
     var randomNum2 = Math.floor(Math.random() * myDice.length);
     document.getElementById("dice-1").src= myDice[randomNum1];
     document.getElementById("dice-2").src= myDice[randomNum2];
    }