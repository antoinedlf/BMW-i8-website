window.onload = () => {
  document.getElementById("content-loader").style.opacity = "0";
  document.getElementById("content-loader").style.zIndex = "0";
}

/***** Menu items color *****/

const menuactive       = document.querySelector(".header .active");
const menuelements     = document.querySelector(".header").querySelectorAll("a");

function activeClass(e) {
    document.querySelector(".header .main-nav ul li .active").classList.remove("active");
    e.classList.add('active');
}

/***** Menu items mobile *****/
function menudisplay(e) {
  const header = document.querySelector(".header");
  const links = document.querySelector(".header ul");

  const burger = document.querySelector(".menu-toggle");
  const mq = window.matchMedia("(max-width: 800px)");

  if (mq.matches) {
    links.addEventListener("click", e => {
      header.classList.add("none");
      burger.checked = false;
    }, false);
  }
}



/**** Technical data + ****/

const displayed = document.querySelector(".technical__data__hidden");
const button = document.querySelector(".technical__toggle");
const buttonBis = document.querySelector(".technical__toggle__bis");
let toggle = false;

// listening button event //
button.addEventListener("click", () => {
    if(toggle == false) {
        displayed.classList.add("technical__data");
        displayed.classList.remove("technical__data__hidden");
        toggle = true;
    }
    else{
        displayed.classList.remove("technical__data");
        displayed.classList.add("technical__data__hidden");
        toggle = false;
    }
});
buttonBis.addEventListener("click", () => {
    if(toggle == true) {
        displayed.classList.remove("technical__data");
        displayed.classList.add("technical__data__hidden");
        toggle = false;
    }
});



/* Variables */
const content     = document.querySelector(".sectionp");
const title       = document.querySelector(".sectionh1");
const button1     = document.querySelector(".design");
const button2     = document.querySelector(".drive");
const button3     = document.querySelector(".efficiency");
const sectionsbg  = document.querySelector(".sections-background");


/* on click 3 right buttons */
button1.addEventListener("click",e => {
  content.style.opacity = "0";
  title.style.opacity = "0";
  sectionsbg.style.opacity = "0";
  button2.classList.remove("active");
  button3.classList.remove("active");
  setTimeout(() => {
  title.innerHTML = "Everything appears to come from a unified whole.";
  content.innerHTML = "Long wheelbase, short overhangs, a solid stance as it crouches on the street: the BMW i8 has all the characteristics of a full-blooded sports car.";
  button1.classList.add("active");
  content.style.opacity = "1";
  title.style.opacity = "1";
  sectionsbg.style.backgroundImage = "url(img/slider-1.png)";
  sectionsbg.style.opacity = "1";
},800);
},false);

button2.addEventListener("click",e => {
  content.style.opacity = "0";
  title.style.opacity = "0";
  sectionsbg.style.opacity = "0";
  button1.classList.remove("active");
  button3.classList.remove("active");
  setTimeout(() => {
  title.innerHTML = "Delivering efficiency and dynamism in equal measure";
  content.innerHTML = "Explosive acceleration, tremendous agility, revolutionary efficiency, with a powerful combination of an electric motor and a petrol engine. ";
  button2.classList.add("active");
  title.style.opacity = "1";
  content.style.opacity = "1";
  sectionsbg.style.backgroundImage = "url(img/slider-2.png)";
  sectionsbg.style.opacity = "1";
},800);
},false);

button3.addEventListener("click",e => {
  content.style.opacity = "0";
  title.style.opacity = "0";
  sectionsbg.style.opacity = "0";
  button1.classList.remove("active");
  button2.classList.remove("active");
  setTimeout(() => {
  title.innerHTML = "A new breed of sports car";
  content.innerHTML = "Thanks to ultra-lightweight materials and a comprehensive package of BMW EfficientDynamics technologies, the BMW i8 achieves astonishing figures for consumption and emissions.";
  button3.classList.add("active");
  content.style.opacity = "1";
  title.style.opacity = "1";
  sectionsbg.style.backgroundImage = "url(img/slider-3.png)";
  sectionsbg.style.opacity = "1";
 },800);
},false);
