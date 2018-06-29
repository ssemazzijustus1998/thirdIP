// bussiness logic
var mystuff = function(num){
  var x ="ping";
  var y="pong"
  var xy="pingpong"

  if(num%3===0){
    return x;
  }

}
// UI logic
$(document).ready(function() {
$("form#text-form").submit(function(event){
  event.preventDefault()
  var userNum = parseInt($("input#text-Input").val());
  var display = mystuff(userNum);
  $("#result").text(display);
  //var result=
//  $("#result").append("<li>"+userInput+"</li>");
})
})
