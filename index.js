var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNum1, randomNum2);
var imageSource1 = `images/dice${randomNum1}.png`;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("Src", imageSource1);
var imageSource2 = `images/dice${randomNum2}.png`;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("Src", imageSource2);
if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "player one Wins";
} else if (randomNum1 < randomNum2) {
  document.querySelector("h1").innerHTML = "player two Wins";
} else {
  document.querySelector("h1").innerHTML = "it's a draw";
}
