var randomnumber1;
randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomnumber2;
randomnumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + randomnumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomnumber2 + ".png");

if (randomnumber1 > randomnumber2) {
document.querySelector("h1").innerHTML = "🚩player 1 win";
}
else if(randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML = "🚩player 2 win";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
};