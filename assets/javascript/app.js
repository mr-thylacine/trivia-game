// Ready the set and go!

$(document).ready(function() {

// Declares how much time (in seconds) you have left to live. Consult countdown() function to see decrement by 1000 ms (i.e., 1 second each time)
var time = 101;

// stopTime helps us in the functions to... wait for it... stop... time...
var stopTime;

// Declares variables for judging the correct-ness of the userChoice
var correctAnswers = 0;
var incorrectAnswers = 0;

// Declares a dictionary (answer key) to check the answers against the user's choices
var answers = {
	q1: null,
	q2: null,
	q3: null,
	q4: null
};

// The following 3 variables are used in the checkAnswers() function
// value - Refers to values denoted in the radio buttons in HTML
// question_num - Refers to first item in value (value[0])
// answer_index - Refers to second item in value (value[1])
var value;
var question_num;
var answer_index;

// These will be used to calculate how many answers the user has correct, incorrect, or unanswered
var trueCounter = 0;
var falseCounter = 0;
var nullCounter = 0;

// countdown() tells us how quickly we should decrement time (in this case, by 1 second each time)
function countdown() {
	stopTime = setInterval(decrement, 1000);
	decrement();
}

// decrement() makes time continue to decrement by 1 second until time = 0, then STOP counting!
// decrement() updates the in-browser timer to show how many seconds the player has left
function decrement() {

	time--;

	// Continue to update the on-screen timer
	$("#countdown-timer").html(time);

	if (time === 0) {
		stop();
		alert("Are you done choosing yet?");
		scorePage();
	}
}

// stop() uses stopTime to... stop() time *ROLL CREDITS*
function stop() {
	clearInterval(stopTime);
}

// checkAnswers() to see if user's answers are correct (or not...)
function checkAnswers() {

	$('.correct-answer').on('click', function() {   
		name = $(this).attr('name');
		console.log(name);
		answers[name] = true;
		console.log(answers);
	});

	$('.incorrect-answer').on('click', function() {
		name = $(this).attr('name');
		answers[name] = false;
		console.log(answers);
	});
}

console.log('answers q1 is ' + answers.q1);

function countTrue(object){
	$(".outcome-page").on("click", function() {
	correctAnswers = countTrue(answers);

	Object.keys(object).forEach(function(apple) {
		if (object[apple] == true) {
			trueCounter++;
		}
		else if (object[apple] == false) {
			falseCounter++;
		}
		else {
			nullCounter++;
		}
	})
	return trueCounter;
	});
}

// scorePage() shows you your scores
function scorePage() {

	// Once the user clicks on the Submit button OR if time is up (time = 0), transition to the score page
	$("#ultimate-game-page2").hide();

	var newPage = $("#ultimate-game-page2");
	var originalPage = $("#ultimate-game-page");

	var badEndnoWolf = $(".no-wolf");

	$(".outcome-page").on("click", function() {
		stop();

		$(".correct-answers").text(trueCounter);
		$(".incorrect-answers").text(falseCounter);
		$("#ultimate-game-page").replaceWith(newPage);

		$("#ultimate-game-page2").show();

	});

	if (time === 0) {
		stop();
		$("#ultimate-game-page").replaceWith(newPage);
		$("#ultimate-game-page2").show();
	}

}

countdown();

checkAnswers();

countTrue(answers);

scorePage();

});