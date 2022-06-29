let color = "red";
let colorTab = ["red", "white", "blue", "green", "yellow", "#00ff7b", "#4c00ff", "#ff00bf", "#7bff00", "#ff7300"];
let colorTabRevolt = [];

const crypteDico = {
    "a": "ç", "b": "hhh", "c": "loooooo", "d": "x", "e": "ahahaha", "f": "é", "g": "*", "h": "hh", "i": "v",
    "j": "=", "k": "sdf", "l": "jsp", "m": "aze", "n": "7", "o": "p", "p": "o", "q": "aaa", "r": "q",
    "s": "à", "t": "zzzz", "u": "n", "v": "esd", "w": "qsdq", "x": "^^", "y": "sdsqqq", "z": "fff",
    "A": "ffffd", "B": "fffv", "C": "ffvbg", "D": "fsds", "E": "ssazaakkssd", "F": "dqsdqs", "G": "qdqdqwxc",
    "H": "qsdqdqxs", "I": "qsdqxq", "J": "qsdddd", "K": "bbbbb", "L": "bbb", "M": "vcv", "N": "nnn",
    "O": "nnnn", "P": "dsqqq", "Q": "ccc", "R": "vvv", "S": "vfg", "T": "qsdggggq", "U": "*!", "V": "dlll",
    "W": "{]", "X": "qs!", "Y": "qsdqs", "Z": "sdssqbngzw", "0": "+++", "1": "kr", "2": "ôp", "3": "sqp",
    "4": "~~", "5": "nahztx,", "6": "°}", "7": "|_|", "8": "|-|", "9": "_-_", ",": "LOL", ".": "qsdqsd",
    ":": "èé", "?": "£$", "-": "°_°", "(": "WW", ")": "VVVV", "é": "456", "è": "001",
    "ç": "oula", "à": "qsdqssss", "ù": "oui", " ": "69", "<": "µ", ">": "£$€", "ê": "bob", "'": "vcvbb",
    "ô": "[[", "î": ")]", "!": "sdqsqqk", "[": "qoigfd", "]": "ùû", "û": "jnhgfd", "€": "qsdsxxxx", "$": "qsdqdqsd",
    "ö": "idk", "ë": "zzz", '"': "xxxxxxs", "Ç": "Ç", "â": "â"
}


let wordsTab = ["Enculé", "Connard", "je t'encule", "gros con", "ta gueule",
    "batard", "sale truelle à sperme", "espèce d'andouille", "enfoiré"];

const wordOfThisPage = decodeURI(getInLink("word")).replaceAll("+", " ");
const wordDechiffre = dechifrement(wordOfThisPage, crypteDico);
let focus = "BigTexte"
let homePage = false
if (wordOfThisPage !== "null") {
    document.getElementById('BigTexte').textContent = wordDechiffre
} else {
    if (document.getElementById('BigTexte').className === "getYourLink") {
        homePage = true;
    } else {
        focus = "homeButton"
        document.getElementById('BigTexte').style.textDecoration = "none";
        document.getElementById('BigTexte').innerHTML = '<a href = "index.html" id="homeButton">' + "Go create your custom word !" + '</a>';
    }
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
        let keyIsIn = false
        for (let key in dic) {
            if (dic[key] === motSplit[i]) {
                texteDechiffre += key;
                keyIsIn = true
            }
        }
        if (!keyIsIn) {
            texteDechiffre += motSplit[i]
        }
    }
    return texteDechiffre
}

function getVal() {
    let val = document.getElementById("word").value;
    let valChiffree = chiffrement(val, crypteDico);
    document.getElementById("buttonInHome").href = "permaWord.html?word=" + valChiffree;
    document.wordForm.action = "permaword.html?word=" + valChiffree;
    if (homePage) {
        if (val != " " || "") {
            document.getElementById("BigTexte").textContent = "https://bulshits-words.netlify.app/permaword.html?word=" + valChiffree.replaceAll(" ", "%20");
        } else {
            document.getElementById("BigTexte").textContent = "YOUR LINK WILL BE HERE"
        }
    }
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
