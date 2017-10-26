var content = document.getElementById("sectionp");
var title = document.getElementById("sectionh1");
var button1 = document.getElementById("design");
var button2 = document.getElementById("drive");
var button3 = document.getElementById("efficiency");

button1.addEventListener("click",function(e){
  title.innerHTML = "Everything appears to come from a unified whole.";
  content.innerHTML = "Long wheelbase, short overhangs, a solid stance as it crouches on the street: the BMW i8 has all the characteristics of a full-blooded sports car.";
},false);

 button2.addEventListener("click",function(e){
   title.innerHTML = "Delivering efficiency and dynamism in equal measure";
   content.innerHTML = "Explosive acceleration, tremendous agility, revolutionary efficiency, with a powerful combination of an electric motor and a petrol engine. ";
 },false);

 button3.addEventListener("click",function(e){
   title.innerHTML = "A new breed of sports car";
   content.innerHTML = "Thanks to ultra-lightweight materials and a comprehensive package of BMW EfficientDynamics technologies, the BMW i8 achieves astonishing figures for consumption and emissions.";
 },false);
