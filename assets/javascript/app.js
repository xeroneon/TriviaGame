var questions = [
    first = {
        question: "What is the player called?",
        rightanswer: "Interloper",
        wrong1: "Introloper",
        wrong2: "Interceptor",
        wrong3: "Traveller"
    },
    second = {
        question: "What element powers launch thrusters",
        rightanswer: "Plutonium",
        wrong1: "Nickel",
        wrong2: "Emeril",
        wrong3: "Carbon"
    }

]

var answerArray = ["0", "1", "2", "3"];

var currentQuestion = 0;

var timeLeft = 30;

var timeLeftId;

function runTimer() {
    clearInterval(timeLeftId);
    timeLeftId = setInterval(timer, 1000);
}

function stopTimer() {
    clearInterval(timeLeftId);
}

var timer = function () {
    timeLeft--;
    console.log("timer")
    $("#time-remaining").html(timeLeft);


    if (timeLeft === 0) {
        stopTimer();
    }
}

var genQuestion = function () {
    for (i = 0; i < 4; i++) {
        var p = document.createElement("p");
        $(p).attr("questionNumber", answerArray[Math.floor(Math.random() * answerArray.length)]);
        console.log($(p).attr("questionNumber"));
        $("#answers").append($(p).text("Ran"));
        var splice = answerArray.indexOf($(p).attr("questionNumber"));
        console.log("splice", splice);
        answerArray.splice(splice, 1);
    }
}

var start = function () {
    $(".hide").removeClass("hide");
    $("#start").addClass("hide");
    console.log("ran");
    runTimer();

    $("#question").html(questions[currentQuestion].question);
    genQuestion();

};

$("#start").on("click", start);
// $("#start").on("click", runTimer);