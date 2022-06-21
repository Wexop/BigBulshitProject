let color = "red";
let colorTab = ["red", "white", "blue", "green", "yellow", "#00ff7b", "#4c00ff", "#ff00bf", "#7bff00", "#ff7300"];
let colorTabRevolt = [];
let wordsTab = ["Enculé", "Connard", "je t'encule", "gros con", "ta gueule",
    "batard", "sale truelle à sperme", "espèce d'andouille", "enfoiré"];
const wordOfThisPage = decodeURI(getInLink("word"));
let focus = "BigTexte"
if (wordOfThisPage !== "null") {
    document.getElementById('BigTexte').textContent = wordOfThisPage
} else {
    focus = "homeButton"
    document.getElementById('BigTexte').style.textDecoration = "none";
    document.getElementById('BigTexte').innerHTML = '<a href = "index.html" id="homeButton">' + " Va te créer un lien bg" + '</a>';
}

function getVal() {
    const val = document.getElementById("word").value;
    document.getElementById("buttonInHome").href = "permaWord.html?word=" + val;
    document.getElementById("word").action = "permaWord.html?word=" + val;
}

function getInLink(param) {
    var vars = {};
    window.location.href.replace(location.hash, '').replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function (m, key, value) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if (param) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
}


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
    document.getElementById(focus).style.color = color;
}

setInterval(changeColor, 200);
