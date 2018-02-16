// Declares how much time (in seconds) you have left to live

var time = 5;

// stopTime helps us in the functions to... wait for it... stop... time...

var stopTime;

// Introduces countdown function

function countdown() {
	$("#countdown-timer").html(time);

	// setInterval(decrement, 1000);

	stopTime = setInterval(decrement, 1000);

	decrement();

}

countdown();

// Make time continue to decrement by 1 second until time = 0
// Set up the setTimeout?
// Make the timer appear on screen until time = 0

function decrement() {

	time--;

	if (time === 0) {
		alert("It's me.");
		stop();
	}

	console.log("decrementing...");
	console.log(time);

}

function stop() {
	clearInterval(stopTime);
}

// Checks to see if your answers are correct