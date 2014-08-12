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
				var divisibleBy3And5 = "Fizz Buzz!";
				var divisibleBy3 = "Fizz!";
				var divisibleBy5 = "Buzz!";
				var fail = "<strong>" + num + "</strong><br />Sorry, please try again";

				// Conditionals that display error msgs
			 	if(isNaN(num)) {
					fizzBuzzOutputMsg.html(fail);
				} else if(num != Math.floor(num)) {
					fizzBuzzOutputMsg.html(fail);
				} else if(num > 100) {
					fizzBuzzOutputMsg.html(fail);
				} else if(num < 1) {
					fizzBuzzOutputMsg.html(fail);
				} else {

					// For loop runs only after errors not met above
					for(var i = 1; i <= num; i++) {
						if(i % 3 == 0 && i % 5 == 0) {
							fizzBuzzOutputMsg.append(divisibleBy3And5 + "<br />");
						} else if(i % 3 == 0) {
							fizzBuzzOutputMsg.append(divisibleBy3 + "<br />");
						} else if(i % 5 == 0) {
							fizzBuzzOutputMsg.append(divisibleBy5 + "<br />");
						} else {
							fizzBuzzOutputMsg.append(i + "<br />");
						}

					}

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