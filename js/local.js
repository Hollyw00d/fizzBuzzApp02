/***
 * Fizz Buzz App by Matt Jennings, August 2014
 * Numbers 1 - 100 will be printed out with exceptions found here:
 * http://en.wikipedia.org/wiki/Fizz_buzz
***/

// Print Out Numbers 1 - 100 and append to [p#fizzbuzz-output]

// Start Anonymous function
(function() {

// Start jQuery Ready Function
$(function() {

	// Fizz Buzz JS
	function fizzBuzz() {

		// Fizz Buzz output container
		var outputContainer = $("#fizzbuzz-output");

		// Print 1 - 100 with  exceptions for:
		// >> 3 prints out "Fizz"
		// >> 5 prints out "Buzz"
		// >> 3 prints out "Fizz Buzz"
		function printOneThroughHundred() {
			for(var i = 1; i <= 100; i++) {
				if(i % 3 == 0 && i % 5 == 0) {
					$(outputContainer).append("Fizz Buzz<br />");
				} else if(i % 3 == 0) {
					$(outputContainer).append("Fizz<br />");
				} else if(i % 5 == 0) {
					$(outputContainer).append("Buzz<br />");
				} else {
					$(outputContainer).append(i + "<br />");
				}

			}
		}
		printOneThroughHundred();

	}
	fizzBuzz();

});
// End jQuery Ready Function

})();
// End Anonymous function