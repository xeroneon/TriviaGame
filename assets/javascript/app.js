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

    var timeLeft = 2;

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
            $("#question").empty();
            $("#answers").empty();
            currentQuestion++;
            wrongAnswerCount++;
            $("#wrong-answers").text(wrongAnswerCount);
            stopTimer();
            timeLeft = 15;
            if (currentQuestion < questions.length) {
                var div = document.createElement("div");
                $(div).text("Times up!, The right answer was " + questions[currentQuestion].rightanswer);
                $("#answers").append(div);
                $("#time-remaining").text(timeLeft);
                setTimeout(runTimer, 1000 * 3);

                setTimeout(genQuestion, 1000 * 3);
            }
            else {
                var div = document.createElement("div");
                $(div).text("You got " + rightAnswerCount + "/" + questions.length + " Right");
                $("#answers").append(div);
                setTimeout(function () {
                    $("#start").removeClass("hide");
                }, 1000 * 3)
            }
        }
    };

    var genQuestion = function () {
        $("#question").empty();
        $("#answers").empty();
        $("#question").html(questions[currentQuestion].question);

        for (i = 0; i < 4; i++) {
            var td = document.createElement("td");
            var tr = document.createElement("tr");
            var id = Math.floor(Math.random() * answerArray.length)
            td.id = answerArray[id];
            // console.log($(p).attr("questionNumber"));
            $(tr).append($(td).text("Ran"));
            $("#answers").append(tr)
            var splice = answerArray.indexOf(td.id);
            // console.log("splice", splice);
            answerArray.splice(splice, 1);
        }

        $("#0").text(questions[currentQuestion].rightanswer);
        $("#1").text(questions[currentQuestion].wrong1);
        $("#2").text(questions[currentQuestion].wrong2);
        $("#3").text(questions[currentQuestion].wrong3);

        answerArray = ["0", "1", "2", "3"];

        runTimer();


    };

    var start = function () {
        answerArray = ["0", "1", "2", "3"];
        currentQuestion = 0;
        timeLeft = 15;
        timeLeftId;
        wrongAnswerCount = 0;
        rightAnswerCount = 0;
        $("#right-answers").text(rightAnswerCount);
        $("#wrong-answers").text(wrongAnswerCount);
        $(".game-div").removeClass("hide");
        $("#start").addClass("hide");
        $("#start").text("Restart");
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
            $(div).text("You got " + rightAnswerCount + "/" + questions.length + " Right");
            $("#answers").append(div);
            setTimeout(function () {
                $("#start").removeClass("hide");
            }, 1000 * 3)
        }
    });

    $("body").on("click", "#1", function () {
        wrongHandler();

    });

    $("body").on("click", "#2", function () {
        wrongHandler();

    });

    $("body").on("click", "#3", function () {
        wrongHandler();

    });

    var wrongHandler = function () {
        $("#question").empty();
        $("#answers").empty();
        wrongAnswerCount++;
        $("#wrong-answers").text(wrongAnswerCount);
        stopTimer();
        timeLeft = 15;
        if (currentQuestion < questions.length - 1) {
            $("#time-remaining").text(timeLeft);
            setTimeout(runTimer, 1000 * 3);
            var div = document.createElement("div");
            $(div).text("You got it Wrong! The right answer was " + questions[currentQuestion].rightanswer);
            $("#answers").append(div);

            setTimeout(genQuestion, 1000 * 3);
        }
        else {
            var div = document.createElement("div");
            $(div).text("You got " + rightAnswerCount + "/" + questions.length + " Right");
            $("#answers").append(div);
            setTimeout(function () {
                $("#start").removeClass("hide");
            }, 1000 * 3)
        }
        currentQuestion++;

    }

    // var newGame = function () {
    //     var answerArray = ["0", "1", "2", "3"];
    //     var currentQuestion = 0;
    //     var timeLeft = 15;
    //     var timeLeftId;
    //     var wrongAnswerCount = 0;
    //     var rightAnswerCount = 0;
    //     $("#right-answers").text(rightAnswerCount);
    //     $("#wrong-answers").text(wrongAnswerCount);
    //     $(".game-div").removeClass("hide");
    //     $("#start").addClass("hide");
    //     genQuestion();
    // }

});