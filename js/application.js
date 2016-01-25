$(document).ready(function(){

  var startClock = false;
  var quizTime = 10;
  var quizStartTime = quizTime;
  var answersCorrect = 0;
  var answersGiven = 0;

  function restartGame(){
    startClock = false;
    quizTime = 10;
    var quizStartTime = quizTime;
    answersCorrect = 0;
    answersGiven = 0;
  }

  function updateTime(){
  quizStartTime--;

  if (quizStartTime < 0) {
    clearInterval(countdownTimeoutId);
    countdownTimeoutId = -1;
    quizStartTime = QUIZ_AVAILABLE_SECONDS;


    timeIsOver();

    return;
  }

  $(function() {
    var $question = $('#question');
    var $answer = $('#question-answer');
    var $mathRangeSlider = $('#math-range-slider');
    var currentQuestion;
    var factory = new QuestionFactory();

    setFirstQuestion();
    function setFirstQuestion() {
      currentQuestion = factory.nextQuestion();
      $question.text(currentQuestion.getDisplay());
      $answer.val('');
    }

});
