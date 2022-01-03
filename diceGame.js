// create Random Number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// concatenate the string for img name with random number
var randomImgSrc1 = "images/dice" + randomNumber1 + ".png";

// get the current img from the screen and change its value
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSrc1);

// same process for second img
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImgSrc2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgSrc2);

// checks who wons the dice game
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}  else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}