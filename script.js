
var sociale = document.getElementsByClassName("sociale");
console.log (sociale); 

var mode = document.getElementById("modenuit");
var centre  = document.querySelector("body");
var nav = document.querySelectorAll("a");
var cartes = document.getElementsByClassName("carte");
var soleil = document.getElementById("soleil");
var navigation = document.getElementsByClassName("nav");
var semaine = document.getElementById("weekFood");
var modenuit = false;

mode.addEventListener('click',function(){
    if (modenuit) {
        centre.style.backgroundColor="#fff";
        cartes[0].style.backgroundColor="#fff";
        cartes[1].style.backgroundColor="#fff";
        cartes[2].style.backgroundColor="#fff";
        navigation[0].style.color="#000";
        navigation[1].style.color="#000";
        navigation[2].style.color="#000";
        soleil.setAttribute('src',"assets/claire.jpg");
        soleil.style.backgroundColor="#fff";
        soleil.style.transform = "translateX(0px)";
        soleil.style.transitionDuration = ".5s";
        semaine.style.color="#000";
        mode.style.backgroundColor="#000";
        mode.style.transitionDuration = "2s";
        modenuit = false;
    } else {
        centre.style.backgroundColor="#0F0F0F";
        cartes[0].style.backgroundColor="#fff";
        cartes[1].style.backgroundColor="#fff";
        cartes[2].style.backgroundColor="#fff";
        navigation[0].style.color="#fff";
        navigation[1].style.color="#fff";
        navigation[2].style.color="#fff";
        soleil.setAttribute('src',"assets/soleil.png");  
        soleil.style.transform = "translateX(60px)";
        soleil.style.transitionDuration = ".5s";
        semaine.style.color="#fff";
        mode.style.backgroundColor="#fff";
        mode.style.transitionDuration = "2s";
        modenuit = true;
    }
}, false);

