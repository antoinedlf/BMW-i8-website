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



/* Vars */
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

var locations = [
    ['BMW Paris Velizy', 48.782113, 2.175893, 9],
    ['BMW George V', 48.869484, 2.301364, 8],
    ['BMW MINI NEUBAUER Montmartre', 48.891604, 2.327979, 7],
    ['BMW Paris Rivoli', 48.859312, 2.348424, 6],
    ['BMW Motorrad Paris', 48.875557, 2.288364, 5],
    ['BMW NEUBAUER Boulogne', 48.836256, 2.251151, 4],
    ['BMW Horizon Neuilly', 48.903833, 2.262038, 3],
    ['BMW Ivry', 48.814387, 2.407529, 2],
    ['BMW GAP Concorde', 48.867096, 2.321609, 1]
];
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: new google.maps.LatLng(48.869484, 2.301364),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    disableDefaultUI: true,
    styles: [{
        "featureType": "all",
        "elementType": "all",
        "stylers": [{
            "invert_lightness": true
        },
            {
                "saturation": 10
            },
            {
                "lightness": 30
            },
            {
                "gamma": 0.5
            },
            {
                "hue": "#435158"
            }
        ]
    }]
});
var infowindow = new google.maps.InfoWindow();

var marker, i;
var markers = [];
var image = './img/point-bmw.svg';

for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        icon: image,
        map: map
    });

    markers.push(marker);

    console.log(markers);

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
        }
    })(marker, i));
}

console.log(markers[0]);

window.sr = ScrollReveal();
sr.reveal('.progressive__content', { duration: 2000, origin: 'left', viewFactor: 0.1, reset: true, scale: 1 });
sr.reveal('.sports-car__description', { duration: 1000, origin: 'left', viewFactor: 0.1, reset: true, scale: 1 });
sr.reveal('.sports-car__carousel', { duration: 1000, origin: 'right', viewFactor: 0.1, reset: true, scale: 1 });
sr.reveal('.section-content', { duration: 2000, origin: 'left', viewFactor: 0.1, reset: true, scale: 1 });
sr.reveal('.nav-sections', { duration: 2000, origin: 'right', viewFactor: 0.1, reset: true, scale: 1 });
sr.reveal('.technical__circleCar', { duration: 1000, origin: 'bottom', viewFactor: 0.1, reset: true, scale: 1 });
sr.reveal('.technical-infos', { duration: 2000, origin: 'bottom', viewFactor: 0.1, reset: true, scale: 1 });
sr.reveal('.impulse__intro', { duration: 2000, origin: 'left', viewFactor: 0.1, reset: true, scale: 1 });