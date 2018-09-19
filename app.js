const score = 0;
const timer= 60;
const response= [];

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
      timer--;
      $('.timer').html('<h2>' + timer + '</h2>')
      if (timer === 0) {
          stop();
          alert("Time Up!");
      }
  }

  $('.submit').click(function(){
    for(i= 0; i > response.length; i++){
        if(response[i] === 'correct') {
            score= 0;
        }

    }
  })

  $('.response1').click(function(){
      response1= this.className;
  })