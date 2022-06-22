let color = "red";
let colorTab = ["red", "white", "blue", "green", "yellow", "#00ff7b", "#4c00ff", "#ff00bf", "#7bff00", "#ff7300"];
let colorTabRevolt = [];

const crypteDico = {
    "a": "ç", "b": "<3", "c": "$", "d": "x", "e": ",", "f": "é", "g": "*", "h": ":)", "i": "v",
    "j": "=", "k": ":", "l": "jsp", "m": "€", "n": "7", "o": "p", "p": "o", "q": "@", "r": "q",
    "s": "à", "t": "(", "u": "n", "v": ".", "w": ";", "x": "^^", "y": ";(", "z": ":D",
    "A": "#<!>", "B": "<!>#", "C": "<!!>", "D": "<££>", "E": "<$$>", "F": "<//>", "G": "[##]",
    "H": "<;:>", "I": "<><", "J": "><>", "K": "<..>", "L": ";:;;", "M": ":;:;", "N": "->->",
    "O": "<-->", "P": "<<", "Q": ">>", "R": "--", "S": "__", "T": "!*", "U": "*!", "V": "?;",
    "W": "{]", "X": "%!", "Y": "§§", "Z": "_:_", "0": "+++", "1": "kr", "2": "ôp", "3": ":p",
    "4": "~~", "5": "/,", "6": "°}", "7": "|_|", "8": "|-|", "9": "_-_", ",": "LOL", ".": "???",
    ":": "èé", "?": "£$", "-": "°_°", "(": "WW", ")": "VVVV", "é": "456", "è": "001",
    "ç": "oula", "à": "%+", "ù": "oui", " ": "69", "<": "µ", ">": "£$€", "ê": "bob", "'": "::::",
    "ô": "[[", "î": ")]", "!": ":/", "[": "++", "]": "ùû", "û": "{:)", "€": "=$=", "$": "=€=",
    "ö": "idk", "ë": "zzz", '"': "!?./"
}


let wordsTab = ["Enculé", "Connard", "je t'encule", "gros con", "ta gueule",
    "batard", "sale truelle à sperme", "espèce d'andouille", "enfoiré"];

const wordOfThisPage = decodeURI(getInLink("word")).replaceAll("+", " ");
const wordDechiffre = dechifrement(wordOfThisPage, crypteDico);
let focus = "BigTexte"
if (wordOfThisPage !== "null") {
    document.getElementById('BigTexte').textContent = wordDechiffre
} else {
    focus = "homeButton"
    document.getElementById('BigTexte').style.textDecoration = "none";
    document.getElementById('BigTexte').innerHTML = '<a href = "index.html" id="homeButton">' + " Va te créer un lien bg" + '</a>';
}


function chiffrement(mot, dic) {
    let texteChiffre = "";
    let splitMot = mot.split(" ");
    for (let i = 0; i < splitMot.length; i++) {
        for (let y = 0; y < splitMot[i].length; y++) {
            if (splitMot[i][y] in dic) {
                texteChiffre += dic[splitMot[i][y]] + " ";
            } else {
                texteChiffre += splitMot[i][y] + " ";
            }

        }
        texteChiffre += dic[" "] + " ";
    }
    return texteChiffre

}

function dechifrement(mot, dic) {
    let texteDechiffre = "";
    let motSplit = mot.split(" ");
    for (let i = 0; i < motSplit.length; i++) {
        for (let key in dic) {
            if (dic[key] === motSplit[i]) {
                texteDechiffre += key;
            }


        }
    }
    return texteDechiffre
}

function getVal() {
    let val = document.getElementById("word").value;
    let valChiffree = chiffrement(val, crypteDico);
    document.getElementById("buttonInHome").href = "permaWord.html?word=" + valChiffree;
    document.wordForm.action = "permaword.html?word=" + valChiffree;
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
