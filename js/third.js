// business logic



function stuff(num){
  var x ="ping";
  var y="pong"
  var z="ping pong"

   if (num%15==0){
  return z;
  }
  else if(num%5==0) {
   return y;
   }
   else if(num%3==0){
    return x;
   }
  else{
    return num;
   }
 }

// backend

 $(document).ready(function() {
 $("#text-form ").submit(function(){
   event.preventDefault();
 var blast = $("#text-Input").val();
 for(var user=1;user<=blast;user++){
   var display=stuff(user);
    $("#result").append("<li>"+display+"</li>");
    // console.log(display);
 }

 });
});
