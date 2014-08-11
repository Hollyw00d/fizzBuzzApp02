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
				var num = $(this).val();



				// Create the list item & click event to cross off individual list item
	//			var task = $("<li>").html(listItemInput).attr("class", "pending").on("click", function() {
	//				if($(this).hasClass("pending")) {
	//					$(this).removeClass("pending").addClass("done");
	//				} else {
	//					$(this).removeClass("done").addClass("pending");
	//				}
	//			});
	//
	//			listOutput.append(task);





				fizzBuzzOutputMsg.append(num);

				// After adding new list item replace input[value] attribute with an empty string
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




//	function fizzBuzz() {
//
//		var outputContainer = $("#fizzbuzz-output");
//
//		function printOneThroughHundred() {
//			for(var i = 1; i <= 100; i++) {
//				if(i % 3 == 0 && i % 5 == 0) {
//					$(outputContainer).append("Fizz Buzz<br />");
//				} else if(i % 3 == 0) {
//					$(outputContainer).append("Fizz<br />");
//				} else if(i % 5 == 0) {
//					$(outputContainer).append("Buzz<br />");
//				} else {
//					$(outputContainer).append(i + "<br />");
//				}
//
//			}
//		}
//		printOneThroughHundred();
//
//	}
//	fizzBuzz();
//



});
// End jQuery Ready Function



})();
// End Anonymous function