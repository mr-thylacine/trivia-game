// Ready the set and go!

$(document).ready(function() {

// Declares how much time (in seconds) you have left to live. Consult countdown() function to see decrement by 1000 ms (i.e., 1 second each time)

var time = 6;

// stopTime helps us in the functions to... wait for it... stop... time...

var stopTime;

// Declares variables for judging the correct-ness of the userChoice

var userChoice;
var correctAnswers = 0;
var incorrectAnswers = 0;





	var value;
	var question_num;
	var answer_index;
	var questionArray;
	var answerArray;

// countdown() tells us how quickly we should decrement time (in this case, by 1 second each time)

function countdown() {
	stopTime = setInterval(decrement, 1000);
	decrement();
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
		// alert("Hammer time!");
		// checkAnswers();
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

/* Michelle's understanding:
	
	When user clicks on a button, a function happens. Three variables are created:
	
	*1) The value is set to whatever information the class .btn has, then grabs the input's value using .val(). And then .split() removes the comma using split(",")
	
	 2) Then the other two variables are created. Each of them will hold an array.

	 2a) question_num will reach into the value that the button has and return the first item (index zero) and hold that item (if value 1, 1 - then index 0 is the first 1. So the value[0] is 1.)

	2b) Same with answer_index. This holds value[1], which means the 2nd item (index 1) of whatever value has (value[1] = 1).

	3) And then the console log reports back (using `tick marks`?!) with two things in objects - the question_num and the answer_index. But why are they objects and then grabbed with $?

	^^^ 3) CLARIFIED: Using the `tickmarks` just gives everything within it a different syntax, so ${thisThing} is a special way to "write" + thisThing + "if you didn't use concatenation with a + sign.""

*/


	// Leo's code

	// $('.btn').click(function () {
 //    value = $(this).val().split(",");
 //    question_num = value[0];
 //    answer_index = value[1];
 //    console.log(`Question: ${question_num}, Answer: ${answer_index}`);
 //    });

	// Michelle's code (based off of Leo's code)

	$(".correct-answer").on("click", function() {

		value = $(this).val().split(",");
		questionArray = value[0];
		answerArray =  value[1];
		console.log(`Question: ${questionArray}, Answer is ${answerArray}`);
		console.log("value is " + value[1]);
		correctAnswers++;
	});

	$(".incorrect-answer").on("click", function() {
		value = $(this).val().split(",");
		questionArray = value[0];
		answerArray = value[1];
		console.log(`Question: ${questionArray}, Answer is ${answerArray}`);
		console.log("value is " + value[1]);
		incorrectAnswers++;
	});

	scoreCounter();

	//// EVERY OTHER PIECE OF CODE I TRIED ////

	// $(".span-q1-checked").html()

	// var sssscorrect = $("input[type='radio'][name='q1']:checked").val('daffodils');

	// console.log("your answer " + sssscorrect.value);

	// var correct = $(".correct-answer");

	// console.log("this works " + JSON.stringify(sssscorrect));

	// var correctUserChoice = $(".correct-answer:checked");
	// var incorrectUserChoice = $(".incorrect-answer:checked");


	// $("#game input").on("change", function() {
	// 		var userChoice = $('input[name=q1]:checked', '#game').val();
	// 		console.log(userChoice);
	// });

	// if ($('input:radio:checked') === "correct") {

	// 	correctAnswers++;
	// 	console.log("You have " + correctAnswers + " correct answers");
	// }

	// if (incorrectUserChoice === true) {
	// 	incorrectAnswers++;
	// 	console.log("You have " + incorrectAnswers + " incorrect answers");
	// }

	// If correct-answer is indeed selected, then add 1 to correctAnswers counter

	// Else, (OR, use incorrect-answer class? - not yet included in HTML), add 1 to incorrectAnswers counter
	
	// if ($(".correct-answer").on("click") === true) {
	// 	correctAnswers++;
	// 	console.log("There are " + correctAnswers + "correct answers");
	// }


	// console.log("You have " + correctAnswers + " correct answers so far");

	// var correct = "<p>You have </p>" + correctAnswers + " <p>correct answers so far</p>";
	// document.querySelector("#scorekeeper").innerHMTL = correct;

};

function scoreCounter() {

	// Tests to see if amount of correct answers show up

	console.log("total correct answers: " + correctAnswers);
	console.log("total incorrect answers: " + incorrectAnswers);

	// Shows total number of correct answers on the DOM

	$("#span-correct-answers").text(correctAnswers);
	$("#span-incorrect-answers").text(incorrectAnswers);

}

// Shows you your scores

function scorePage() {

	// Once time is up (time = 0), transition to the score page

	// Use jQuery/innerHMTL to overwrite entire page?

}

countdown();

checkAnswers();

scoreCounter();

});