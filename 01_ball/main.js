
var myPic = new Array("images/ball1@2x.png","images/ball2@2x.png","images/ball3@2x.png","images/ball4@2x.png","images/ball5@2x.png");

function random() {
     var randomNum = Math.floor(Math.random() * myPic.length);
     document.getElementById("myPicture").src = myPic[randomNum];
    }