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

var start = function () {
    $(".hide").removeClass("hide");
    $("#start").addClass("hide");
    console.log("ran");
    runTimer();

    $("#question").html(questions[currentQuestion].question);

};

$("#start").on("click", start);
// $("#start").on("click", runTimer);