'use strict';
console.log("test");


var reviewer = prompt('Enter your name:');
var gamename = prompt('Enter name of the game:');
var rating = prompt('Enter your rating for the game from 0-10:');
var rating_save;

if (rating >=10) {
    rating_save = "Best game i have ever tried.";
} else if (rating >=8){
    rating_save = "Excellent game to spend your time on it.";
} else if (rating >= 5) {
    rating_save = "Normal game, if you don't have anything to play.";
} else if (rating >= 2){
    rating_save = "Bad game, not recommanded at all.";
} else if (rating >= 0) {
    rating_save = "Wrost game ever.";
} else {
    rating_save = "Wrong value";
}

function color(){
    var textcolor = prompt('What color text would you like the review to be in:');
    document.getElementById("chcolor").style.color = textcolor
}


