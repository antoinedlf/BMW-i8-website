/***** 3 sections content & slider animation *****/


function moreTechnicalFunction() {
    var x = document.getElementById("the-infos");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


/* Variables */
var content = document.getElementById("sectionp");
var title = document.getElementById("sectionh1");
var button1 = document.getElementById("design");
var button2 = document.getElementById("drive");
var button3 = document.getElementById("efficiency");
var sectionsbg = document.getElementById("sections-background");

/* on click 3 right buttons */
button1.addEventListener("click",function(e){
  content.style.opacity = "0";
  title.style.opacity = "0";
  button2.classList.remove("active");
  button3.classList.remove("active");
  setTimeout(function(){
  title.innerHTML = "Everything appears to come from a unified whole.";
  content.innerHTML = "Long wheelbase, short overhangs, a solid stance as it crouches on the street: the BMW i8 has all the characteristics of a full-blooded sports car.";
  button1.classList.add("active");
  content.style.opacity = "1";
  title.style.opacity = "1";
  sectionsbg.style.backgroundImage = "url(img/slider-1.png)";
},800);
},false);

 button2.addEventListener("click",function(e){
   content.style.opacity = "0";
   title.style.opacity = "0";
   button1.classList.remove("active");
   button3.classList.remove("active");
setTimeout(function(){
   title.innerHTML = "Delivering efficiency and dynamism in equal measure";
   content.innerHTML = "Explosive acceleration, tremendous agility, revolutionary efficiency, with a powerful combination of an electric motor and a petrol engine. ";
   button2.classList.add("active");
   title.style.opacity = "1";
   content.style.opacity = "1";
   sectionsbg.style.backgroundImage = "url(img/slider-2.png)";
},800);
 },false);

 button3.addEventListener("click",function(e){
   content.style.opacity = "0";
   title.style.opacity = "0";
   button1.classList.remove("active");
   button2.classList.remove("active");
   setTimeout(function(){
   title.innerHTML = "A new breed of sports car";
   content.innerHTML = "Thanks to ultra-lightweight materials and a comprehensive package of BMW EfficientDynamics technologies, the BMW i8 achieves astonishing figures for consumption and emissions.";
    button3.classList.add("active");
    content.style.opacity = "1";
    title.style.opacity = "1";
    sectionsbg.style.backgroundImage = "url(img/slider-3.png)";
  },800);
 },false);
