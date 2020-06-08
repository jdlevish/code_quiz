// declared variables for game
//questions is an array of questions saved in the form of objects, the key value pair choices will contain the multiple choice answers, and the answer key will contain the correct answer
var questions = [
	{
		question: "which is the logical or operator?",
		choices: { 0: "||", 1: "&&", 2: "===", 3: "+" },
		answer: "||",
	},
	{
		question:
			"What is the HTML tag under which one can write the JavaScript code?",
		choices: { 0: "<javascript>", 1: "<scripted>", 2: "<script>", 3: "<js>" },
		answer: "<script>",
	},
	{
		question:
			"Which of the following is the correct syntax to display “alert” in an alert box using JavaScript?",
		choices: {
			0: "alertbox('alert')",
			1: "msg('alert')",
			2: "msgbox('alert')",
			3: "alert('alert')",
		},
		answer: "alert('alert')",
	},
	{
		question:
			"Which of the following is the correct syntax to display “alert” in an alert box using JavaScript?",
		choices: {
			0: "alertbox('alert')",
			1: "msg('alert')",
			2: "msgbox('alert')",
			3: "alert('alert')",
		},
		answer: "alert('alert')",
	},
	{
		question:
			"Which of the following is the correct syntax to display “alert” in an alert box using JavaScript?",
		choices: {
			0: "alertbox('alert')",
			1: "msg('alert')",
			2: "msgbox('alert')",
			3: "alert('alert')",
		},
		answer: "alert('alert')",
	},
	{
		question:
			"Which of the following is the correct syntax to display “alert” in an alert box using JavaScript?",
		choices: {
			0: "alertbox('alert')",
			1: "msg('alert')",
			2: "msgbox('alert')",
			3: "alert('alert')",
		},
		answer: "alert('alert')",
	},
];
// button variables
var header = $("#header");
var button1El = $("#button1");
var button2El = $("#button2");
var button3El = $("#button3");
var button4El = $("#button4");
var time = $("#timer");
var n = 0;
var score = 0;
function questionFunc(arr) {
	// console.log(arr);

	header.html("<h3>" + arr[n].question + "</h3>");
	var buttons = $("button");

	buttons.each(function (i) {
		$(this)
			.text(arr[n].choices[i])
			.prop("value", arr[n].choices[i])
			.click(function () {
				// console.log(this.value);
				if (this.value === arr[n].answer) {
					console.log("correct");
					n++;

					score++;
					questionFunc(questions);
				} else {
					// console.log(this.text);
					// console.log(false);
					n++;

					questionFunc(questions);
				}
			});
	});
}

// code that initiates a 60 second timer on start button click
$(document).ready(function () {
	// initial start button click
	button1El.click(function () {
		questionFunc(questions);
	});

	// function that displays question and answer choices and checks for correct answers
});
