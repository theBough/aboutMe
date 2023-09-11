var myLabel = document.getElementById("myLabel");
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
}
