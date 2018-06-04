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
        },
        third = {
            question: "How many planets are in the universe",
            rightanswer: "18 Quintillion",
            wrong1: "17 Quadrillion",
            wrong2: "64 Sextillion",
            wrong3: "5"
        }

    ]

    var answerArray = ["0", "1", "2", "3"];

    var currentQuestion = 0;

    var timeLeft = 15;

    var timeLeftId;

    var wrongAnswerCount = 0;
    var rightAnswerCount = 0;

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
            $("#question").empty();
            $("#answers").empty();
            var div = document.createElement("div");
            $(div).text("Times up!, The right answer was " + questions[currentQuestion].rightanswer);
            $("#answers").append(div);
            currentQuestion++;
            wrongAnswerCount++;
            timeLeft = 15;
            $("#time-remaining").text(timeLeft);
            setTimeout(runTimer, 1000 * 3);

            setTimeout(genQuestion, 1000 * 5);
        }
    };

    var genQuestion = function () {
        $("#question").empty();
        $("#answers").empty();
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




    };

    var start = function () {
        $(".hide").removeClass("hide");
        $("#start").addClass("hide");
        console.log("ran");
        runTimer();
        genQuestion();

    };


    $("#start").on("click", start);

    $("body").on("click", "#0", function () {
        $("#question").empty();
        $("#answers").empty();

        currentQuestion++;
        rightAnswerCount++;
        $("#right-answers").text(rightAnswerCount);

        stopTimer();
        timeLeft = 15;
        if (currentQuestion < questions.length) {
            $("#time-remaining").text(timeLeft);
            setTimeout(runTimer, 1000 * 3);
            var div = document.createElement("div");
            $(div).text("You got it right!");
            $("#answers").append(div);

            setTimeout(genQuestion, 1000 * 3);
        }
        else {
            var div = document.createElement("div");
            $(div).text("You got " + rightAnswerCount +"/" + questions.length + " Right");
            $("#answers").append(div);
        }
    });
    // $("#start").on("click", runTimer);

});