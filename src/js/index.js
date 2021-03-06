window.alert = () => {}
alert = () => {}

/**** LOADER ****/

 window.addEventListener("load", function() {
    document.getElementById("content__loader").style.opacity = "0"
    document.getElementById("content__loader").style.zIndex = "0"
})


/***** Menu items color *****/
const navEls = document.querySelectorAll('.header .main-nav ul li a')

navEls.forEach( (el) => {
  el.addEventListener("click", (e) => {
        document.querySelector(".header .main-nav ul li .active").classList.remove("active")
        el.classList.add('active')
    })
})

/***** Menu items mobile *****/
const menuEls = document.querySelectorAll('.header .main-nav ul li a')

  menuEls.forEach( (el) => {
    el.addEventListener("click", (e) => {
      const header = document.querySelector(".header")
      const links = document.querySelector(".header ul")

      const burger = document.querySelector(".menu-toggle")
      const mq = window.matchMedia("(max-width: 800px)")

      if (mq.matches) {
          links.addEventListener("click", e => {
              header.classList.add("none")
              burger.checked = false
          }, false)
      }
  })
})



/**** Technical data + ****/

const displayed = document.querySelector(".technical__data__hidden")
const button = document.querySelector(".technical__toggle")
const buttonBis = document.querySelector(".technical__toggle__bis")
let toggle = false

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
})
buttonBis.addEventListener("click", () => {
    if(toggle == true) {
        displayed.classList.remove("technical__data");
        displayed.classList.add("technical__data__hidden");
        toggle = false;
    }
})



/* Vars */
const content     = document.querySelector(".sectionp")
const title       = document.querySelector(".sectionh1")
const button1     = document.querySelector(".design")
const button2     = document.querySelector(".drive")
const button3     = document.querySelector(".efficiency")
const sectionsbg  = document.querySelector(".sections-background")


/* on click 3 right buttons */
button1.addEventListener("click",e => {
    content.style.opacity = "0"
    title.style.opacity = "0"
    sectionsbg.style.opacity = "0"
    button2.classList.remove("active")
    button3.classList.remove("active")
    setTimeout(() => {
        button1.classList.add("active")
        sectionsbg.style.backgroundImage = "url(img/slider-1.png)"
        title.innerHTML = "Everything appears to come from a unified whole."
        content.innerHTML = "Long wheelbase, short overhangs, a solid stance as it crouches on the street: the BMW i8 has all the characteristics of a full-blooded sports car."
        content.style.opacity = "1"
        title.style.opacity = "1"
        sectionsbg.style.opacity = "1"
    },800)
},false)

button2.addEventListener("click",e => {
    content.style.opacity = "0"
    title.style.opacity = "0"
    sectionsbg.style.opacity = "0"
    button1.classList.remove("active")
    button3.classList.remove("active")
    setTimeout(() => {
        button2.classList.add("active")
        sectionsbg.style.backgroundImage = "url(img/slider-2.png)"
        title.innerHTML = "Delivering efficiency and dynamism in equal measure"
        content.innerHTML = "Explosive acceleration, tremendous agility, revolutionary efficiency, with a powerful combination of an electric motor and a petrol engine. "
        title.style.opacity = "1"
        content.style.opacity = "1"
        sectionsbg.style.opacity = "1"
    },800)
},false)

button3.addEventListener("click",e => {
    content.style.opacity = "0"
    title.style.opacity = "0"
    sectionsbg.style.opacity = "0"
    button1.classList.remove("active")
    button2.classList.remove("active")
    setTimeout(() => {
        button3.classList.add("active")
        sectionsbg.style.backgroundImage = "url(img/slider-3.png)"
        title.innerHTML = "A new breed of sports car"
        content.innerHTML = "Thanks to ultra-lightweight materials and a comprehensive package of BMW EfficientDynamics technologies, the BMW i8 achieves astonishing figures for consumption and emissions."
        content.style.opacity = "1"
        title.style.opacity = "1"
        sectionsbg.style.opacity = "1"
    },800)
},false)

var locations = [
    ['BMW Pontoise', 49.048229, 2.080446, 14],
    ['BMW Noisy', 48.898894, 2.445224, 13],
    ['BMW Courbevoie', 48.902632, 2.258352, 12],
    ['BMW Plaisir', 48.799758, 1.952001, 11],
    ['BMW Montigny', 48.793009, 2.044932, 10],
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
    center: new google.maps.LatLng(48.859312, 2.348424),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
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

var input = /** @type {!HTMLInputElement} */(
    document.getElementById('pac-input'));

var autocomplete = new google.maps.places.Autocomplete(input);
autocomplete.bindTo('bounds', map);


for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        icon: image,
        map: map
    });

    markers.push(marker);

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
        }
    })(marker, i));

    autocomplete.addListener('place_changed', function() {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);  // Why 17? Because it looks good.
        }
        marker.setIcon(/** @type {google.maps.Icon} */({
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35)
        }));
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);

        var address = '';
        if (place.address_components) {
            address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }

        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
        infowindow.open(map, marker);
    });

}

window.sr = ScrollReveal();
sr.reveal('.progressive__content', { duration: 2000, origin: 'left', viewFactor: 0.1, reset: true, scale: 1 });
sr.reveal('.sports-car__description', { duration: 1000, origin: 'left', viewFactor: 0.1, reset: true, scale: 1 });
sr.reveal('.sports-car__carousel', { duration: 1000, origin: 'right', viewFactor: 0.1, reset: true, scale: 1 });
sr.reveal('.section-content', { duration: 2000, origin: 'left', viewFactor: 0.1, reset: true, scale: 1 });
sr.reveal('.nav-sections', { duration: 2000, origin: 'right', viewFactor: 0.1, reset: true, scale: 1 });
sr.reveal('.technical__circleCar', { duration: 1000, origin: 'bottom', viewFactor: 0.1, reset: true, scale: 1 });
sr.reveal('.technical-infos', { duration: 2000, origin: 'bottom', viewFactor: 0.1, reset: true, scale: 1 });
sr.reveal('.impulse__intro', { duration: 2000, origin: 'left', viewFactor: 0.1, reset: true, scale: 1 });
sr.reveal('.slider__tracker', { duration: 2000, origin: 'bottom', viewFactor: 0.1, reset: true, scale: 1 });
