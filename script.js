let color = "red";
let colorTab = ["red", "white", "blue", "green", "yellow", "#00ff7b", "#4c00ff", "#ff00bf", "#7bff00", "#ff7300"];
let colorTabRevolt = [];
let wordsTab = ["Enculer", "Connard", "grosse pute", "fils de pute", "je t'encule", "gros con", "salope", "ta gueule",
    "batard", "sale truelle à sperme", "fils de chienne", "nique ta race"];
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
