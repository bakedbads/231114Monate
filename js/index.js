"use strict";

let monate = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
let bild = ["../img/januar.jpeg", "../img/februar.jpeg", "../img/maerz.jpeg", "../img/april.jpeg", "../img/mai.jpeg", "../img/juni.jpeg", "../img/juli.jpeg", "../img/august.jpeg", "../img/september.jpeg", "../img/oktober.jpeg", "../img/november.jpeg", "../img/dezember.jpeg"];

let heute = new Date();
let Monat = heute.getMonth();

document.getElementById("h1-text").innerHTML = monate[Monat];
document.getElementById("monat-bild").setAttribute("src", bild[Monat]);


