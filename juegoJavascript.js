
var character = document.getElementById("character");

document.addEventListener("", jump);

document.body.onkeyup = function (e) {
    if (e.keyCode == 32) {
        jump()
    }
}

character.onclick = jump();
function jump() {
    if (character.classList == "animate") {
        return;
    }
    character.classList.add("animate");
    setTimeout(removeJump, 650); //650ms = length of animation
}

function removeJump() {
    character.classList.remove("animate");
}

var enemigo = document.getElementById("enemigo");
function checkDead() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let posicionEnemigo = parseInt(window.getComputedStyle(enemigo).getPropertyValue("left"));
    if (posicionEnemigo < 150 && posicionEnemigo > 65 && characterTop >= 440) {
        alert("Game over");
    }
}

function visibility() {
    let posicionEnemigo = parseInt(window.getComputedStyle(enemigo).getPropertyValue("left"));
    if (posicionEnemigo < 75) {
        enemigo.style.opacity = "0";
    }
    if (posicionEnemigo > 75) {
        enemigo.style.opacity = "1";
    }
}

function addToScore() {
    let posicionEnemigo = parseInt(window.getComputedStyle(enemigo).getPropertyValue("left"));
    if (posicionEnemigo < 75) {

    }

}

setInterval(visibility, 20);
setInterval(checkDead, 20);


