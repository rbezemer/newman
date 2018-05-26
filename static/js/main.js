// your functions here
var questions = [];
var questionNumber =0;
/**
 * Returns a random number between min and max
 */
function getRandomNumber(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

function generateQuestion(){
  return {
    top: getRandomNumber(0, 12),
    bottom: getRandomNumber(0, 12)
  };
}
function setupQuestion(next) {
  questionNumber = next;
  var currentQuestion = questions[questionNumber];
  var topBox = document.querySelector('#top');
  topBox.innerHTML = currentQuestion.top;
  var bottomBox = document.querySelector('#bottom');
  bottomBox.innerHTML = currentQuestion.bottom;
}

function submitAnswer() {
  var answer = document.querySelector('#answer');
  var currentQuestion = questions[questionNumber];
  var calcutedAnswer = currentQuestion.top * currentQuestion.bottom;
  if( answer.value == calcutedAnswer) {
    alert ("You are correct")

    setupQuestion(questionNumber + 1);
  } else {
    alert("Students Answer is Wrong, Bad student! You answered :"+ answer.value);
  }

}
/**
 * Generate an array of totalNumberOfQuestions
 **/
function generateAllQuestions(totalNumberOfQuestions){
  for(var i = 0; i < totalNumberOfQuestions; i++) {
    var newQuestion = generateQuestion();
    questions.push(newQuestion);
  }
  setupQuestion(0);
}

generateAllQuestions(100);
