// declared variables for game
//questions is an array of questions saved in the form of objects, the key value pair choices will contain the multiple choice answers, and the answer key will contain the correct answer
var questions = [
	{
		question: "which is the logical or operator?",
		choices: ["===", "&&", "||", "+"],
		answer: "||",
	},
	{
		question:
			"What is the HTML tag under which one can write the JavaScript code?",
		choices: ["<javascript>", "<scripted>", "<script>", "<js>"],
		answer: "<script>",
	},
	{
		question:
			"Which of the following is the correct syntax to display “alert” in an alert box using JavaScript?",
		choices: [
			'alertbox("alert")',
			'msg("alert")',
			'msgbox("alert")',
			'alert("alert")',
		],
		answer: 'alert("alert")',
	},
];
// button variables
var header = $("#header");
var startButton = $("#start");
var highScoreButton = $("#highScores");
var rulesButton = $("#rules");
var learnButton = $("#learn");
var time = $("#timer");

// code that initiates a 60 second timer on start button click
var counter = 60;
var interval = setInterval(function () {
	counter--;
	if (counter <= 0) {
		clearInterval(interval);
		time.html("<h3>Count down complete</h3>");
		return;
	} else {
		time.text(counter);
	}
}, 1000);
startButton.on("click", function () {
	// 	header.html("<h1>" + questions[i].question + "</h1>");
	// 	startButton.html(
	// 		"<button id='start' type='button' class='btn btn-primary btn-lg btn-block'>" +
	// 			questions[i].choices[1] +
	// 			"</button>"
	// 	);
	// });
	var i = 0;

	questionFunc();
	function questionFunc() {
		var score = 0;
		var i = 0;

		header.html("<h1>" + questions[i].question + "</h1>");
		startButton.text(questions[i].choices[0]).on("click", function () {
			if (this.value === questions[i].answer) {
				console.log("correct");
				score++;
			} else {
				console.log(false);
				i++;
			}
		});
		startButton.prop("value", questions[i].choices[0]);
		highScoreButton.text(questions[i].choices[1]).on("click", function () {
			if (this.value === questions[i].answer) {
				console.log("correct");
				score++;
			} else {
				console.log(false);
				i++;
			}
		});
		highScoreButton.prop("value", questions[i].choices[1]);
		rulesButton.text(questions[i].choices[2]).on("click", function () {
			if (this.value === questions[i].answer) {
				console.log("correct");
				score++;
				console.log(score);
			} else {
				console.log(false);
				i++;
			}
		});
		rulesButton.prop("value", questions[i].choices[2]);
		learnButton.text(questions[i].choices[3]).on("click", function () {
			if (this.value === questions[i].answer) {
				console.log("correct");
				score++;
			} else {
				console.log(false);
				i++;
			}
		});
		learnButton.prop("value", questions[i].choices[3]);
		console.log($("button"));
	}
});
