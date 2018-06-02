var questions = [
    first = {
        question: "What is the player character called?",
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

var timeLeft = 30;

var timeLeftId;

function run() {
    clearInterval(timeLeftId);
    timeLeftId = setInterval(decrement, 1000);
}

function stop() {
    clearInterval(timeLeftId);
}

var timer = function () {
    timeleft--;

    if (timeLeft === 0) {
        
    }
}

var start = function () {
    $(".hide").removeClass("hide");
    $("#start").addClass("hide");
    console.log("ran")

};

$("#start").on("click", start);