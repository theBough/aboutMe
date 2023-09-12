var myLabel = document.getElementById("myLabel");
var myPic = document.getElementById("myPic");

var myFacts = [
  "football",
  "soccer",
  "Swimming",
  "Teacher",
  "parent",
  "brother"
]

function showFact(){
  var rndNum = Math.random() * myFacts.length;
  rndNum = Math.floor(rndNum)
  myLabel.textContent = myFacts[rndNum]
  myPic.src = "ham.jpg"
}
