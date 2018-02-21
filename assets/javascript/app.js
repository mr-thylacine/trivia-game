// Ready the set and go!

$(document).ready(function() {

// Declares how much time (in seconds) you have left to live. Consult countdown() function to see decrement by 1000 ms (i.e., 1 second each time)

var time = 5;

// stopTime helps us in the functions to... wait for it... stop... time...

var stopTime;

// Declares variables for judging the correct-ness of the userChoice

var correctAnswers = 0;
var incorrectAnswers = 0;

// The following 3 variables are used in the checkAnswers() function
// value - Refers to the values denoted in the radio buttons in HTML
// question_num - Refers to the first item in value (value[0])
// answer_index - Refers to the second item in value (value[1])

var value;					
var question_num;
var answer_index;

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
		alert("STOP.");
		scoreCounter();
		scorePage();
	}

}

// stop() uses stopTime to... stop() time *ROLL CREDITS*

function stop() {
	clearInterval(stopTime);
}

// checkAnswers() to see if user's answers are correct (or not...)

function checkAnswers() {

	$(".correct-answer").on("click", function() {
		value = $(this).val().split(", ");
		question_num = value[0];
		answer_index =  value[1];
		correctAnswers++;
		console.log(`Choice: ${question_num}, Answer: ${answer_index}`);
		console.log("Value is " + value[1]);
	});

	$(".incorrect-answer").on("click", function() {
		value = $(this).val().split(", ");
		question_num = value[0];
		answer_index = value[1];
		incorrectAnswers++;
		console.log(`Choice: ${question_num}, Answer: ${answer_index}`);
		console.log("Value is " + value[1]);
	});

	scoreCounter();

};

function scoreCounter() {

	// Tests to see if amount of correct answers show up

	console.log("total correct answers: " + correctAnswers);
	console.log("total incorrect answers: " + incorrectAnswers);

	// Shows total number of correct answers on the DOM

	$("#span-correct-answers").text(`you have ${correctAnswers}`);
	$("#span-incorrect-answers").text(incorrectAnswers);

}

// scorePage() shows you your scores

function scorePage() {

	// Once time is up (time = 0), transition to the score page
	$(".outcome-page").on("click", function() {
		stop();
		var correctCounter = correctAnswers;
		var incorrectCounter = incorrectAnswers;
		$("#ultimate-game-page").html("You have " + correctAnswers + " correct answers and " +incorrectAnswers + " incorrect answers.");

		$("a.back").click(function() {
			parent.history.back();
			return false;
		});

		

		// $("button#return-button").on("click", function() {
		// 	preventDefault();
		// 	window.history.back();
		// });

		scoreCounter();
	});

	if (time === 0) {
		stop();
		var correctCounter = correctAnswers;
		var incorrectCounter = incorrectAnswers;
		$("#ultimate-game-page").html(`You have ${correctAnswers} correct answers and ${incorrectAnswers} incorrect answers`);
		scoreCounter();
	}

}

countdown();

checkAnswers();

scoreCounter();

scorePage();

});