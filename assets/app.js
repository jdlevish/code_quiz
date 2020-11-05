// declared variables for game
//questions is an array of questions saved in the form of objects, the key value pair choices will contain the multiple choice answers, and the answer key will contain the correct answer
var questions = [
	{
		question: "which is the logical or operator?",
		choices: ["||", "&&", "===", "+"],
		answer: "||",
	},
	{
		question:
			"What is the HTML tag under which one can write the JavaScript code?",
		choices: ["javascript", "scripted", "script", "js"],
		answer: "script",
	},
	{
		question:
			"Which of the following is the correct syntax to display “alert” in an alert box using JavaScript?",
		choices: [
			"alertbox('alert')",
			"msg('alert')",
			"msgbox('alert')",
			"alert('alert')",
		],
		answer: "alert('alert')",
	},


];
// button variables
//setting the numerical variables for the functions.. scores and timers.. 
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

//starts the countdown timer once user clicks the 'start' button
function start() {

	timeLeft = 75;
	document.getElementById("timeLeft").innerHTML = timeLeft;

	timer = setInterval(function () {
		timeLeft--;
		document.getElementById("timeLeft").innerHTML = timeLeft;
		//once timer hits 0 this runs the end function to end the quiz
		if (timeLeft <= 0) {
			clearInterval(timer);
			endQuiz();
		}
	}, 1000);

	next();
}

//this function ends the quiz
function endQuiz() {
	clearInterval(timer);

	var quizContent = `
<h2>Game over!</h2>
<h3>Here is the final score` + score + ` /3!</h3>
<div class="pb-4">
<h3>Enter your name here</h3>
<input   type="text" id="name" > 
</div>

<button  class=" btn btn-primary btn-lg btn-block" onclick="setScore()">See my score!</button>`;

	document.getElementById("quizBody").innerHTML = quizContent;
}

//store the scores on local storage
function setScore() {
	localStorage.setItem("highscore", score);
	localStorage.setItem("highscoreName", document.getElementById('name').value);
	getScore();
}


function getScore() {
	var quizContent = `
<h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
<h1>` + localStorage.getItem("highscore") + `</h1><br> 
<button class="btn btn-primary btn-lg btn-block" onclick="clearScore()">Clear score!</button><button class="btn btn-primary btn-lg btn-block" onclick="resetGame()">Try Again!</button>
`;

	document.getElementById("quizBody").innerHTML = quizContent;
}

//clears the score name and value in the local storage if the user selects 'clear score'
function clearScore() {
	localStorage.setItem("highscore", "");
	localStorage.setItem("highscoreName", "");

	resetQuiz();
}

//reset the game 
function resetQuiz() {
	clearInterval(timer);
	score = 0;
	currentQuestion = -1;
	timeLeft = 0;
	timer = null;

	document.getElementById("timeLeft").innerHTML = timeLeft;

	var quizContent = `

<button class="btn btn-primary btn-lg btn-block" onclick="start()">Start the JavaScript Quiz again</button>`;

	document.getElementById("quizBody").innerHTML = quizContent;
}

//deduct 15seconds from the timer if user chooses an incorrect answer
function incorrect() {
	timeLeft -= 15;
	next();
}

//increases the score by 20points if the user chooses the correct answer
function correct() {
	score += 1;
	next();
}

//loops through the questions 
function next() {
	currentQuestion++;

	if (currentQuestion > questions.length - 1) {
		endQuiz();
		return;
	}

	var quizContent = "<h2>" + questions[currentQuestion].question + "</h2>"

	for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
		var buttonCode = "<button class='btn btn-primary btn-lg btn-block' onclick=\"[ANS]\">[CHOICE]</button>";
		buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].choices[buttonLoop]);
		if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
			buttonCode = buttonCode.replace("[ANS]", "correct()");
		} else {
			buttonCode = buttonCode.replace("[ANS]", "incorrect()");
		}
		quizContent += buttonCode
	}


	document.getElementById("quizBody").innerHTML = quizContent;
}