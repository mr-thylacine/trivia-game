// Ready the set and go!

$(document).ready(function() {

// Declares how much time (in seconds) you have left to live. Consult countdown() function to see decrement by 1000 ms (i.e., 1 second each time)

var time = 101;

// stopTime helps us in the functions to... wait for it... stop... time...

var stopTime;

// Declares variables for judging the correct-ness of the userChoice

// var correctAnswers = 0;
// var incorrectAnswers = 0;

// Declares a dictionary (answer key) to check the answers against the user's choices

var answers = {
	q1: null,
	q2: null,
	q3: null,
	q4: null
};

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

	// $(".correct-answer").on("click", function() {
	// 	value = $(this).val().split(", ");
	// 	answers.q1 = true;
		
	// 	console.log(answers);
	// });

	// $(".correct-answer").on("click", function() {
	// 	value = $(this).val().split(", ");
	// 	// question_num = value[0];
	// 	// answer_index =  value[1];

	// 	console.log(`${question_num} is the question_num and ${answer_index} is the answer_index`);

	// 	correctAnswers++;
	// });

	// $(".incorrect-answer").on("click", function() {
	// 	value = $(this).val().split(", ");
	// 	// question_num = value[0];
	// 	// answer_index = value[1];

	// 	console.log(`${question_num} is the question_num and ${answer_index} is the answer_index`);

	// 	incorrectAnswers++;
	// });

}

var correctAnswers = 0;
var incorrectAnswers = 0;

function answerSubmit() {
	// Counts how many trues and falses there are in the answers object
}

console.log('answers q1 is ' + answers.q1);

	var trueCounter = 0;
	var falseCounter = 0;
	var nullCounter = 0;

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

// $(".outcome-page").on("click", function() {
// 	correctAnswers = countTrue(summary)

	// console.log(correctAnswers);
	// console.log(incorrectAnswers);
}

	// $(".outcome-page").on("click", function() {
	// 	for (var i = 0; i < answers.length; i++) {
	// 		if (Object.is(true, true)) {
			
	// 		correctAnswers++;
	// 		console.log(correctAnswers);
	// 	}
	// 	}
	// });

	// for (var i = 0; i < answers.length; i++) {
	// 	if (answers[name] == true) {
	// 		correct++;
	// 	} else {
	// 		incorrect++;
	// 	}
	// 	console.log(answers);
	// }


	


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

			// if (answers.q1 == false) {
			// 	$("#ultimate-game-page").append(badEndnoWolf);
			// } else 

		$("#ultimate-game-page2").show();
	});

	if (time === 0) {
		stop();
		// $(".correct-answers").text(answers);
		// $(".incorrect-answers").text(answers);
		$("#ultimate-game-page").replaceWith(newPage);
		$("#ultimate-game-page2").show();
	}

	// $("#return-button").on("click", function() {
	// 	$("#ultimate-game-page2").replaceWith(originalPage);
	// 	countdown();
	// });
	

	// $(".outcome-page").on("click", function() {
	// 	stop();
	// 	$("#ultimate-game-page").html(`You have ${correctAnswers} correct answers and ${incorrectAnswers} incorrect answers.`);
	// 	if (correctAnswers === 4) {
	// 		$("#ultimate-game-page").append("<br><br>Perfect ending.");
	// 	} else {
	// 		$("#ultimate-game-page").append("<br><br>Bad ending.<br><br>He never let you leave. He devoured you shortly after you went to bed.<br><br>At least you tasted good... right?");
	// 	}
	// });

	// if (time === 0) {
	// 	stop();
	// 	$("#ultimate-game-page").html(`You have ${correctAnswers} correct answers and ${incorrectAnswers} incorrect answers.`);
	// 	if (correctAnswers === 4) {
	// 		$("#ultimate-game-page").append("<br><br>Perfect ending.");
	// 	} else {
	// 		$("#ultimate-game-page").append("<br><br>Bad ending.<br><br>He never let you leave. He devoured you shortly after you went to bed.<br><br>At least you tasted good... right?");
	// 	}
	// }
}

countdown();

checkAnswers();

countTrue(answers);

answerSubmit();

scorePage();



});