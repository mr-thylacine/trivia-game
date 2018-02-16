// Declares how much time (in seconds) you have left to live. Consult countdown() function to see decrement by 1000 ms (i.e., 1 second each time)

var time = 6;

// stopTime helps us in the functions to... wait for it... stop... time...

var stopTime;

// Declares variables for judging the correct-ness of the userChoice

var userChoice = true;
var correctAnswers = 0;
var incorrectAnswers = 0;

// countdown() tells us how quickly we should decrement time (in this case, by 1 second each time)

function countdown() {
	stopTime = setInterval(decrement, 1000);
	decrement();
	checkAnswers();
}

// Makes time continue to decrement by 1 second until time = 0, then STOP counting!

// Updates the in-browser timer to show how many seconds the player has left

function decrement() {

	time--;

	// Continue to update the on-screen timer
	$("#countdown-timer").html(time);

	if (time === 0) {
		stop();
		alert("STOP.");
		alert("Hammer time!");
	}

	// Testing purposes
	console.log(time);
}

// This function uses stopTime to... stop() time *ROLL CREDITS*

function stop() {
	clearInterval(stopTime);
}

// checkAnswers() to see if user's answers are correct (or not...)

function checkAnswers() {

	// Checks to see if the class correct-answer (in each question) is selected

	$("input").on("click", function() {

		console.log("You checked " + $("input:checked").val());

		if ($("correct") === true)
		correctAnswers++;
		console.log(correctAnswers);
	});

	// If correct-answer is indeed selected, then add 1 to correctAnswers counter

	// Else, (OR, use incorrect-answer class? - not yet included in HTML), add 1 to incorrectAnswers counter
	
	if ($(".correct-answer").on("click") === true) {
		correctAnswers++;
		console.log("There are " + correctAnswers + "correct answers");
	}
}

checkAnswers();

// Shows you your scores

function scorePage() {

	// Once time is up (time = 0), transition to the score page

	// Use jQuery/innerHMTL to overwrite entire page?

}

countdown();