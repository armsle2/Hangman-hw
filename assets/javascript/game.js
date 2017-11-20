var hitch = ["h", "i", "t", "c", "h"]
var batman = ["b", "a", "t", "m", "a", "n"]
var pif = ["p", "a", "i", "d", "i", "n", "f", "u", "l", "l"]
var collateral = ["c", "o,", "l", "l", "a", "t", "e", "r", "a", "l"]
var guessesLeft = 7
var wins = 0
var losses = 0
var wordLines = " - "
var wordBank = [hitch, batman, pif, collateral]
// var userGuess = function(event){
// 			$(document).on("keyup", event.key)}
// console.log(userGuess)




$(document).ready(function(){


//create word bank

//load first word after user presses any key
$(document).keyup(function(event){
	var userGuess = event.key 
	console.log($("#game-word")[0].innerHTML)
	if ($("#game-word")[0].innerHTML === ""){
		wordArray();

	}else {console.log(userGuess)}
	

});


//have word lines loaded that match the number of letters for word being guessed
function wordArray(){
//randomly choose a word from word bank array
var wordChooser = wordBank[Math.floor(Math.random() * wordBank.length)]
console.log(wordChooser)
	for (var i = 0; i < wordChooser.length; i++){
		var gameWordDiv = $("#game-word");
		var wordLetters = wordLines[i];
		$(gameWordDiv).append(wordLines);
		
	}
}

// hitchArray();
	

//receive user guess input from keyboard
	//if user guess is correct 
		//display letter in place of appropriate line for word
	//if user guess is wrong 
		//add the incorrect letter under the "letters guessed"
		//decrease guesses left by 1
	//if guesses left equals 0
		//display alert that says you lost
		//increase losses by 1
		//load new word in column 1

});