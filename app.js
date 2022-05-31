let input = document.querySelector("#inbut")
let inputText = document.getElementById("input-text")
let firstText = document.getElementById("fitst-text")
let secText = document.getElementById("sec-text")
let thirdText = document.getElementById("third-text")
let firstRes = document.getElementById("first-res")
let secRes = document.getElementById("sec-res")
let thirdRes = document.getElementById("third-res")

function weight(){
    inputText.textContent = "Enter Your Value With kiloGrams"
    firstText.textContent = "Grams:"
    secText.textContent = "pounds:"
    thirdText.textContent = "ounce:" 
    firstRes.textContent =  "0000"
    secRes.textContent = "0000"
    thirdRes.textContent = "0000"
}
function height(){
    inputText.textContent = "Enter Your Value With CM"
    firstText.textContent = "foot:"
    secText.textContent = "inches:"
    thirdText.textContent = "metres:" 
    firstRes.textContent =  "0000"
    secRes.textContent = "0000"
    thirdRes.textContent = "0000"
}

function convert(){

    if(firstText.textContent == "Grams:" ){

        firstRes.textContent =  input.value * 1000 
        secRes.textContent = input.value * 2.205
        thirdRes.textContent = input.value * 35.274
    }
    else if( firstText.textContent == "foot:" ){
        firstRes.textContent =  input.value / 30.48
        secRes.textContent = input.value / 2.54
        thirdRes.textContent = input.value / 100
    }
}
let loead = document.getElementById("loead")

function display(){
    loead.style.display = "none"
}

function loeadOut(){

setTimeout( display , 2000 )

}