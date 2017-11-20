var hitch = ["h", "i", "t", "c", "h"]
var batman = ["b", "a", "t", "m", "a", "n"]
var pif = ["p", "a", "i", "d", "i", "n", "f", "u", "l", "l"]
var collateral = ["c", "o", "l", "l", "a", "t", "e", "r", "a", "l"]
var guessesLeft = 7
var wins = 0
var losses = 0
var wordLines = " - "
var wordBank = [hitch, batman, pif, collateral]
var wordChooser = wordBank[Math.floor(Math.random() * wordBank.length)]
console.log(wordChooser)

// for (var i = 0; i < wordChooser.length; i++)
// var userGuess = function(event){
// 			$(document).on("keyup", event.key)}
// console.log(userGuess)

$(document).ready(function(){

//create word bank

//load first word after user presses any key
$(document).keyup(function(event){
	var userGuess = event.key 
	// console.log($("#game-word"));
	// console.log($("#game-word")[0].innerHTML)
	$("#guesses-left").html(guessesLeft);
	$("#win-counter").html(wins);
	$("#loss-counter").html(losses);
	//we used the if statement to look at the jquery item for our div and we found that the div had an array of 0 and we had it check to see if the innerHTML property was empty so that we could move on to our next function
	//conditional statement that uses jquery to select the div with id #game-word at the zero index and we used .innerHTML to strictly compare (===) whether or not there is text in the html
	if ($("#game-word")[0].innerHTML === ""){
		wordArray();

	}else {
		//we pass in userGuess so it can be accessed inside checkLetter function
		checkLetter(userGuess)
	}
	
});

//have word lines loaded that match the number of letters for word being guessed
function wordArray(){
//randomly choose a word from word bank array

// console.log(wordChooser)
	for (var i = 0; i < wordChooser.length; i++){
		var gameWordDiv = $("#game-word");
		var wordLetters = wordLines[i];
		$(gameWordDiv).append(wordLines);
		};
	
}
//this function is used to compare user input with randomly chosen word
function checkLetter(letter){
	//receive user guess input from keyboard
	// console.log(letter)
	// console.log(wordChooser.indexOf(letter))
var lettersGuessed = $("#letters-guessed")[0].innerText
var invalid = lettersGuessed.includes(letter)
console.log(lettersGuessed);
console.log(invalid);
	
		// console.log(wordChooser[i])
		if (wordChooser.indexOf(letter) > -1){
		$("#game-word").html(letter)
		}else if (invalid){
			alert("You've already chosen that letter!")
			
		}else {
			console.log($("#letters-guessed"))
			guessesLeft--;
			$("#letters-guessed").append("<span></span>" + letter)
			$("#guesses-left").text(guessesLeft);
			if (guessesLeft === 0){
				alert("You lost!")
				losses++;
				$("#loss-counter").html(losses);
			}
			
		}

			
	
	
	//if user guess is correct 
	// if (letter === )
	//display letter in place of appropriate line for word		
	//if user guess is wrong 
		//add the incorrect letter under the "letters guessed"
		//decrease guesses left by 1
	//if guesses left equals 0
		//display alert that says you lost
		//increase losses by 1
		//load new word in column 1

}

// hitchArray();
	

//receive user guess input from keyboard
	//if user guess is correct 
		
	//if user guess is wrong 
		//add the incorrect letter under the "letters guessed"
		//decrease guesses left by 1
	//if guesses left equals 0
		//display alert that says you lost
		//increase losses by 1
		//load new word in column 1

});