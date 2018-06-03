$(document).ready(function () {




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
    };

    function stopTimer() {
        clearInterval(timeLeftId);
    };

    var timer = function () {
        timeLeft--;
        console.log("timer")
        $("#time-remaining").html(timeLeft);


        if (timeLeft === 0) {
            stopTimer();
        }
    };

    var genQuestion = function () {
        $("#question").html(questions[currentQuestion].question);

        for (i = 0; i < 4; i++) {
            var div = document.createElement("div");
            var id = Math.floor(Math.random() * answerArray.length)
            div.id = answerArray[id];
            // console.log($(p).attr("questionNumber"));
            $("#answers").append($(div).text("Ran"));
            var splice = answerArray.indexOf(div.id);
            // console.log("splice", splice);
            answerArray.splice(splice, 1);
        }

        $("#0").text(questions[currentQuestion].rightanswer);
        $("#1").text(questions[currentQuestion].wrong1);
        $("#2").text(questions[currentQuestion].wrong2);
        $("#3").text(questions[currentQuestion].wrong3);

        answerArray = ["0", "1", "2", "3"];

        console.log(answerArray);


    };

    var start = function () {
        $(".hide").removeClass("hide");
        $("#start").addClass("hide");
        console.log("ran");
        runTimer();
        genQuestion();

    };


    $("#start").on("click", start);

    $("#0").on("click", function () {
        // currentQuestion++;
        console.log(currentQuestion);
        // genQuestion();
    });
    // $("#start").on("click", runTimer);

});