let color = "red";
let colorTab = ["red", "white", "blue", "green", "yellow"];
let colorTabRevolt = [];
let wordsTab = ["Enculer", "Connard", "grosse pute", "fils de pute", "je t'emmerde", "gros con", "salope"];
const wordOfThisPage = wordsTab[Math.random() * wordsTab.length | 0];

document.getElementById('BigTexte').textContent = wordOfThisPage

function randColor(array) {
    var rand = Math.random() * array.length | 0;
    var rValue = array[rand]

    return rValue;
}

function changeColor() {
    colorTabRevolt = colorTab.filter(function (f) {
        return f !== color
    });
    color = randColor(colorTabRevolt)
    document.getElementById('BigTexte').style.color = color;
}

setInterval(changeColor, 200);
