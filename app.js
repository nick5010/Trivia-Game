$(document).ready(function () {
    var timer = 60;
    var correct = 0;
    var incorrect= 0;
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
        $("#timer").html(timer + " seconds");

        if (timer === 0) {
            stop();
            alert("Time Up!");
            $('#timer').hide();
        $('.question').hide();
        $("#score").html("<h2> You got " + correct + " questions correct</h2>");
        $("#incScore").html("<h2> You got " + incorrect + " questions incorrect</h2>");
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    $('.start').click(function() {
        run();
        $('#cover').hide();
    })

    console.log(response);

    $('.response1').click(function () {
        response1 = this.value;
    })

    $('.response2').click(function () {
        response2 = this.value;
    })

    $('.submit').click(function () {
        response.push(response1, response2)
        for (i = 0; i < response.length; i++) {
            if (response[i] === 'correct') {
                correct++;
                console.log(response[i])
            } else {
                incorrect++;
            }
        }
        stop();
        $('#timer').hide();
        $('.question').hide();
        $("#score").html("<h2> You got " + correct + " questions correct</h2>");
        $("#incScore").html("<h2> You got " + incorrect + " questions incorrect</h2>");
        $('.submit').hide();
    })
})