let homeScore = 0;
let guestScore = 0;

let homeBox = document.getElementById("home-box")
let guestBox = document.getElementById("guest-box")

homeBox.textContent = homeScore;
guestBox.textContent = guestScore;

function homeAddOne() {
    homeBox.textContent = homeScore += 1;
}

function homeAddTwo() {
    homeBox.textContent = homeScore += 2;
}

function homeAddThree() {
    homeBox.textContent = homeScore += 3;
}

function guestAddOne() {
    guestBox.textContent = guestScore += 1;
}

function guestAddTwo() {
    guestBox.textContent = guestScore += 2;
}

function guestAddThree() {
    guestBox.textContent = guestScore += 3;
}