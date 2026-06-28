
/* ==========================================
   ROMANTIC WEBSITE V2
   PART 3A
========================================== */

// ==========================
// PASSWORD
// ==========================

const PASSWORD = "032826"; // Change your password here

let input = "";

// ==========================
// ELEMENTS
// ==========================

const loginPage = document.getElementById("loginPage");
const homePage = document.getElementById("homePage");

const display = document.getElementById("display");
const enterBtn = document.getElementById("enterBtn");

const letterCard = document.getElementById("letterCard");
const musicCard = document.getElementById("musicCard");

const envelopePopup = document.getElementById("envelopePopup");
const letterPopup = document.getElementById("letterPopup");
const musicPopup = document.getElementById("musicPopup");

const closeLetter = document.getElementById("closeLetter");
const closeMusic = document.getElementById("closeMusic");

const letterMusic = document.getElementById("letterMusic");
const loveSong = document.getElementById("loveSong");
const lyricsText = document.getElementById("lyricsText");

// ==========================
// PASSWORD FUNCTIONS
// ==========================

function updateDisplay(){

if(input.length===0){

display.textContent="♡ ♡ ♡ ♡ ♡ ♡";

}else{

display.textContent="❤️ ".repeat(input.length);

}

}

function press(number){

if(input.length>=PASSWORD.length)return;

input+=number;

updateDisplay();

}

function removeNumber(){

if(input.length===0)return;

input=input.slice(0,-1);

updateDisplay();

}

function clearPassword(){

input="";

updateDisplay();

}

// ==========================
// LOGIN
// ==========================

enterBtn.onclick=()=>{

if(input===PASSWORD){

loginPage.classList.remove("active");

homePage.classList.add("active");

}else{

input="";

updateDisplay();

loginPage.animate([

{transform:"translateX(-10px)"},

{transform:"translateX(10px)"},

{transform:"translateX(-8px)"},

{transform:"translateX(8px)"},

{transform:"translateX(0)"}

],{

duration:400

});

}

};

/* ==========================================
   PART 3B
   LETTER • ENVELOPE • MUSIC
========================================== */

// ==========================
// OPEN LETTER
// ==========================

letterCard.onclick = () => {

    envelopePopup.classList.add("show");

    setTimeout(() => {

        envelopePopup.classList.remove("show");

        letterPopup.classList.add("show");

        fadeInLetterMusic();

    },2000);

};

// ==========================
// CLOSE LETTER
// ==========================

closeLetter.onclick = () => {

    letterPopup.classList.remove("show");

    fadeOutLetterMusic();

};

// ==========================
// OPEN MUSIC
// ==========================

musicCard.onclick = () => {

    musicPopup.classList.add("show");

    loveSong.play();

};

// ==========================
// CLOSE MUSIC
// ==========================

closeMusic.onclick = () => {

    musicPopup.classList.remove("show");

    loveSong.pause();

    loveSong.currentTime = 0;

};

// ==========================
// LETTER MUSIC FADE IN
// ==========================

function fadeInLetterMusic(){

    letterMusic.volume = 0;

    letterMusic.play();

    let volume = 0;

    const fade = setInterval(()=>{

        volume += 0.05;

        if(volume >= 0.3){

            volume = 0.3;

            clearInterval(fade);

        }

        letterMusic.volume = volume;

    },120);

}

// ==========================
// LETTER MUSIC FADE OUT
// ==========================

function fadeOutLetterMusic(){

    let volume = letterMusic.volume;

    const fade = setInterval(()=>{

        volume -= 0.05;

        if(volume <= 0){

            volume = 0;

            clearInterval(fade);

            letterMusic.pause();

            letterMusic.currentTime = 0;

        }

        letterMusic.volume = volume;

    },120);

}

// ==========================
// CLOSE WHEN CLICKING OUTSIDE
// ==========================

window.onclick = (e)=>{

    if(e.target===letterPopup){

        closeLetter.onclick();

    }

    if(e.target===musicPopup){

        closeMusic.onclick();

    }

};

/* ==========================================
   PART 3C
   LYRICS • HEARTS • PETALS • KEYBOARD
========================================== */

// ==========================
// FLOATING LYRICS
// ==========================

const lyrics = [

{time:0,text:""},

];

loveSong.addEventListener("timeupdate",()=>{

const current = loveSong.currentTime;

for(let i=lyrics.length-1;i>=0;i--){

if(current>=lyrics[i].time){

lyricsText.textContent=lyrics[i].text;

break;

}

}

});

// ==========================
// FLOATING HEARTS
// ==========================

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*20)+"px";

heart.style.animationDuration=(6+Math.random()*5)+"s";

document.querySelector(".hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},11000);

},700);

// ==========================
// FALLING PETALS
// ==========================

setInterval(()=>{

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(8+Math.random()*5)+"s";

document.querySelector(".petals").appendChild(petal);

setTimeout(()=>{

petal.remove();

},14000);

},900);

// ==========================
// KEYBOARD SUPPORT
// ==========================

document.addEventListener("keydown",(e)=>{

if(e.key>="0" && e.key<="9"){

press(e.key);

}

if(e.key==="Backspace"){

removeNumber();

}

if(e.key==="Enter"){

enterBtn.click();

}

});

// ==========================
// START DISPLAY
// ==========================

updateDisplay();

console.log("❤️ Romantic Website V2 Loaded ❤️");