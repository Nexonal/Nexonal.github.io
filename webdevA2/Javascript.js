let intro = document.querySelector('.intro');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        logoSpan.forEach(function (span, idx) {
            setTimeout(function () {
                span.classList.add('active');
            }, (idx + 1) * 400);
        });

        setTimeout(function () {
            logoSpan.forEach(function (span, idx) {

                setTimeout(function () {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50);
            });
        }, 2000);
        setTimeout(function () {
            intro.style.top = '-100vh';
        }, 2300);



    });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}



function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}


const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page4btn = document.querySelector("#page4btn");
const page5btn = document.querySelector("#page5btn");
var allpages = document.querySelectorAll(".boxes-for-container");

function hideall() {
    for (let onepage of allpages) {
        onepage.style.display = "none";
    }
}

function show(pgno) {
    hideall();
    let onepage = document.querySelector("#page" + pgno);
    onepage.style.display = "grid";
}

page1btn.addEventListener("click", function () {
    show(1);
});


page2btn.addEventListener("click", function () {
    show(2);
});

page3btn.addEventListener("click", function () {
    show(3);
});

page4btn.addEventListener("click", function () {
    show(4);
});

page5btn.addEventListener("click", function () {
    show(5);
});
show(1);

function checkVisible() {
    const elements = document.querySelectorAll('.item1');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
}

window.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', checkVisible);
    checkVisible();
});




const CAUTIONSIGN = document.getElementById("CAUTIONSIGN")
function GetRandom(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
function MoveSIGN() {
    const gameArea = document.querySelector(".gameback");
    const areaRect = gameArea.getBoundingClientRect();
    const signWidth = CAUTIONSIGN.offsetWidth;
    const signHeight = CAUTIONSIGN.offsetHeight;

    const maxX = areaRect.width - signWidth;
    const maxY = areaRect.height - signHeight;

    CAUTIONSIGN.style.left = GetRandom(0, maxX) + "px";
    CAUTIONSIGN.style.top = GetRandom(0, maxY) + "px";
}


const scoreBox = document.getElementById("scoreBox");
var score = 0;
function Responded() {

    score++;

    scoreBox.innerHTML = "Score: " + score;
    CLICKAudio.play();

    if (Math.random() < 0.5) {
        askRandomQ();
    }


}

CAUTIONSIGN.addEventListener("click", Responded);

const CLICKAudio = new Audio("CLICKINGSOUND.mp3");



let gameInterval = null;
let moveInterval = null;

const timerDisplay = document.getElementById("timer");
var timeLeft = 30;
function startgame() {
    score = 0;
    timeLeft = 30;
    timerDisplay.innerText = "Time: " + timeLeft;

    startBtn.disabled = true;
    moveInterval = setInterval(MoveSIGN, 1000);
    gameInterval = setInterval(function () {
        timeLeft--;
        timerDisplay.innerText = "Time: " + timeLeft;

        if (timeLeft <= 0) {
            clearInterval(gameInterval);
            clearInterval(moveInterval);
            startBtn.disabled = false;
            alert("Time's up! Your score: " + score);
            timerDisplay.innerText = "Time: 30";
        }
    }, 1000);
}
const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", startgame);



const questions = [
    {
        question: "What should you do during an earthquake?",
        options: ["A. Run outside", "B. Drop, Cover, and Hold On", "C. Stand near windows", "D. Use elevators"],
        answer: "B"
    },
    {
        question: "Which item is critical in a disaster kit?",
        options: ["A. Snacks", "B. Headphones", "C. Water", "D. Candles"],
        answer: "C"
    },
    {
        question: "What number do you call for emergency in Singapore?",
        options: ["A. 911", "B. 112", "C. 995", "D. 119"],
        answer: "C"
    },
    {
        question: "Safest place during a tornado?",
        options: ["A. Basement", "B. Car", "C. Attic", "D. Tent"],
        answer: "A"
    }
    ,
    {
        question: "What do should you do during a flood?",
        options: ["A. Unplug Electronics", "B. Do nothing", "C. try to swim", "D. run"],
        answer: "A"
    }
];

function askRandomQ() {
    const rand = Math.floor(Math.random() * questions.length);
    const q = questions[rand];
    const userAnswer = prompt(q.question + "\n" + q.options.join("\n"));
    if (userAnswer && userAnswer.trim().toUpperCase() === q.answer) {
        alert("Correct! +5 bonus points!");
        score += 5;
    } else {
        alert("Incorrect. Correct answer was: " + q.answer);
    }
    scoreBox.innerText = "Score: " + score;

}




hideall();
const hamBtn = document.querySelector("#hamIcon");
const menuItemsList = document.querySelector(".buttonsmenu");
hamBtn.addEventListener("click", toggleMenus);
function toggleMenus() { /*open and close menu*/
    //if menuItemsList dont have the class "menuShow", add it, else remove it
    menuItemsList.classList.toggle("menuShow");
    //if menu is showing (has the class “menuShow”)
    if (menuItemsList.classList.contains("menuShow")) {
        hamBtn.innerHTML = "Close Menu"; //change button text to chose menu
    } else { //if menu NOT showing
        hamBtn.innerHTML = "Open Menu"; //change button text open menu
    }
}
show(1);