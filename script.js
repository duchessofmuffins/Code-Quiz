//QButtons
let qOpt1 = document.getElementById("1");
let qOpt2 = document.getElementById("2");
let qOpt3 = document.getElementById("3");
let qOpt4 = document.getElementById("4");
// ^^indicates what each qOpt should reference, either right or wrong
let qOptions = document.getElementById("qOptions");
let qContain = document.getElementById("qContain");

//Time
let counter = document.getElementById("count");
let timer = document.getElementById("timer");
let timeLeft = 70;

//Start
let startBtn = document.getElementById("startBtn");
let info = document.getElementById("info");


//End
let end = document.getElementById("end");
let initialsBtn = document.getElementById("initialsBtn")
let initialInput = document.getElementById("initials");
let finScore = document.getElementById("finScore");
let backBtn = document.getElementById("backBtn");

//High Scores
let scoresList = document.getElementById("scoresList");
let returnToStartBtn = document.getElementById("returnToStartBtn");
let highScoreContainer = document.getElementById("highScore");

//Scores
let ScoreBtn = document.getElementById("ScoreBtn");

//actual JS

//the questions, choices, and correct answers are stored in an array
let questions = [
    {
        q: "Commonly used data types DO NOT include:",
        qOpt1: "Strings",
        qOpt2: "Booleans",
        qOpt3: "Alerts",
        qOpt4: "Numbers",
        correct: "3",
    
    },
    {
        q: "The condition in an if/else statement is enclosed within _________.",
        qOpt1: "Quotes",
        qOpt2: "Curly Brackets",
        qOpt3: "Parentheses",
        qOpt4: "Square Brackets",
        correct: "3",
    
    },{
        q: "Arrays in JavaScript can be used to store ____________.",
        qOpt1: "Numbers and Strings",
        qOpt2: "Other Arrays",
        qOpt3: "Booleans",
        qOpt4: "All of the Above",
        correct: "4",
    
    },{
        q: "String values must be enclosed within ___________ when being assigned to variables.",
        qOpt1: "Commas",
        qOpt2: "Curly Brackets",
        qOpt3: "Quotes",
        qOpt4: "Parentheses",
        correct: "3",
    
    },{
        q: "A very useful tool used during development and debugging for printing content to the debugger is:",
        qOpt1: "JavaScript",
        qOpt2: "Terminal/Bash",
        qOpt3: "For Loops",
        qOpt4: "console.log",
        correct: "4",
    
    },
];

let lastQuestionIndex = questions.length - 1;

let runningQuestionIndex = 0;

function renderQuestion() {
    let qs = questions[runningQuestionIndex];
    questions.innerHTML = "<p>" + qs.question + "<p>";
    qOpt1.innerHTML = qs.qOpt1;
    qOpt2.innerHTML = qs.qOpt2;
    qOpt3.innerHTML = qs.qOpt3;
    qOpt4.innerHTML = qs.qOpt4;
}

//if the answer is correct, this popup will occur
function answerIsCorrect() {
    console.log("Correct!");
}
//if the answer is incorrect, this popup will occur and 10 seconds will be subtracted
function answerIsWrong() {
    console.log("Wrong...");
    timeLeft -= 10;
}

if (questions[runningQuestionIndex].correct == answer) {
    answerIsCorrect();
} else {
    answerIsWrong();
}
if (runningQuestionIndex < lastQuestionIndex) {
    runningQuestionIndex++;
    renderQuestion();
} else {
    clearInterval(timeLeft);
    qContain.classList.add("hide");
    qContain.classList.remove("show");
    qOptions.classList.add("hide");
    qOptions.classList.renove("show");
    end.classList.add("show");
    end.classList.remove("hide");
    finScore.innerHTML = timeLEft;
    timer.classList.add("hide");
    timer.classList.remove("show");
}

function beginQuiz() {
    countDown();
    renderQuestion()

    if (start.classList.contains("hide")) {
        choices.classList.add("show");
        choices.classList.remove("hide");
    }
    if (choices.classList.contains("hide")) {
        choices.classList.add("show");
        choices.classList.remove("hide");
    }
    if (info.classList.contains("show")) {
        info.classList.add("hide");
        info.classList.remove("show");
    }
    if (qContain.classList.contains("hide")) {
        qContain.classList.add("show");
        qContain.classList.remove("hide");
    }
    timer.classList.add("show");
    timer.classList.remove("hide");
}

function countDown() {
setInterval(function() {
    if (timeLeft <= 0) {
        clearInterval((timeLeft = 0));
    }
    counter.innerHTML = timeLeft;
    timeLeft -= 1;
    }, 1000);
}

function saveToLocalStorage() {
    localStorage.setItem("initials", initialInput.value),
    localStorage.setItem("finScore", finScore.textContent),
{}}

function addToHighscore() {
    (event.preventDefault())
    saveToLocalStorage();
    let storedInitials = localStorage.getItem("initials");
    let storedScore = localStorage.getItem("score");
    highScoreList.innerHTML = 
     "<li>" + storedInitials + ": " + storedScore + "</li>";
}

function viewHighScore() {
    highScoreContainer.classList.add("show");
    highScoreContainer.classList.remove("hide");
    if (start.classList.contains("show")) {
        start.classList.add("hide");
        start.classList.remove("show");
    }
    if (choices.classList.contains("show")) {
        choices.classList.add("hide");
        choices.classList.remove("show");
    }
    if (info.classList.contains("show")) {
        info.classList.add("hide");
        info.classList.remove("show");
    }
    if (qContain.classList.contains("show")) {
        qContain.classList.add("hide");
        qContain.classList.remove("show");
    }
    if (end.classList.contains("show")) {
        end.classList.add("hide");
        end.classList.remove("show");
    }
    if (timer.classList.contains("show")) {
        timer.classList.add("hide");
        timer.classList.remove("show");
    }
}

function returnToStart() {
    start.classList.add("show");
    start.classList.remove("hide");
    info.classList.add("show");
    info.classList.remove("hide");
    if (highScoreContainer.classList.contains("show")) {
    highScoreContainer.classList.add("hide");
    highScoreContainer.classList.remove("show");
}
    if (choices.classList.contains("show")) {
    choices.classList.add("hide");
    choices.classList.remove("show");
}
    if (qContain.classList.contains("show")) {
    qContain.classList.add("hide");
    qContain.classList.remove("show");
}
    if (end.classList.contains("show")) {
    end.classList.add("hide");
    end.classList.remove("show");
}
    if (timer.classList.contains("show")) {
    timer.classList.add("hide");
    timer.classList.remove("show");
}
}

startBtn.addEventListener("click", beginQuiz());

ScoreBtn.addEventListener("click", viewHighScore);

initialsBtn.addEventListener("click", addToHighscore);

returnToStartBtn.addEventListener("click", returnToStart);

backBtn.addEventListener("click", returnToStart);
