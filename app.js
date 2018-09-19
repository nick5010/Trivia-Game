$(document).ready(function () {
    var timer = 61;
    var score = 0;
    var intervalId;
    var response = [];
    var response1;
    var response2;
    var response3;

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        timer--;
        $("#timer").html("<h2>" + timer + "</h2>");

        if (timer === 0) {
            stop();
            alert("Time Up!");
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    run()


    $('.response1').click(function () {
        response1 = this.className;
    })

    $('.response2').click(function () {
        response1 = this.className;
    })

    $('.submit').click(function () {
        response.push(response1, response2, response3)
        for (i = 0; i > response.length; i++) {
            if (response[i] === 'correct') {
                score++;

            }

        }
        $('#timer').hide();
        $('.question').hide();
        $("#score").html("<h2> You got " + score + " questions correct</h2>");

    })
})