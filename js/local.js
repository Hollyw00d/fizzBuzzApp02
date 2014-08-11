// Start Anonymous function
(function() {

// Start jQuery Ready Function
$(function() {

	/* 	* Evaluate number entered in input and print out
	 * "Fizz", "Buzz", "Fizz Buzz" or "Sorry, please try again" per the rules at the Fizz Buzz game:
	 * http://en.wikipedia.org/wiki/Fizz_buzz
	 */
	function fizzBuzzNumEvaluate() {

		// After form is submitted appended text here says "Fizz", "Buzz", "Fizz Buzz" or "Sorry, please try again"
		var fizzBuzzOutputMsg = $("#fizz-buzz-output-msg");

		// Capture and evaluate number when pressing [Enter] key
		$("#enter-number-field").on("keypress", function(event) {

			if (event.which == "13") {
				event.preventDefault();

				// Remove number listed in fizzBuzzOutputMsg area if needed
				fizzBuzzOutputMsg.html("");

				// Get [input] text variable
				var num = +$(this).val();

				// Success and error msgs
				var divisibleBy3And5 = "<strong>" + num + "</strong><br />Fizz Buzz! Your number is divisible by 3 and 5";
				var divisibleBy3 = "<strong>" + num + "</strong><br />Fizz! Your number is divisible by 3";
				var divisibleBy5 = "<strong>" + num + "</strong><br />Buzz! Your number is divisible by 5";
				var fail = "<strong>" + num + "</strong><br />Sorry, please try again";

				// Conditionals that display success and error msgs
			 	if(isNaN(num)) {
					fizzBuzzOutputMsg.html(fail);
				}
				else if(num != Math.floor(num)) {
					fizzBuzzOutputMsg.html(fail);
				}
				else if(num < 1) {
					fizzBuzzOutputMsg.html(fail);
				}
				else if(num > 100) {
					fizzBuzzOutputMsg.html(fail);
				}
				else if(num % 3 != 0 && num % 5 != 0) {
					fizzBuzzOutputMsg.html(fail);
				}
				else if(num % 3 == 0 && num % 5 == 0) {
					fizzBuzzOutputMsg.html(divisibleBy3And5);
				}
				else if(num % 3 == 0) {
					fizzBuzzOutputMsg.html(divisibleBy3);
				}
				else if(num % 5 == 0) {
					fizzBuzzOutputMsg.html(divisibleBy5);
				}

				// Submitting button replace input[value] attribute with an empty string
				$(this).val("");
			}

		});

		// [Reset Number] button to remove outputted number from field
		$("#reset-number").on("click", function(event) {
			event.preventDefault();
			fizzBuzzOutputMsg.html("");
		});

	}
	fizzBuzzNumEvaluate();

});
// End jQuery Ready Function

})();
// End Anonymous function