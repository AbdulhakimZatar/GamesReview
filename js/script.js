'use strict';

function review() {
    var reviewer = prompt('Enter your name:');
    var gamename = prompt('Enter name of the game:');
    var rating = prompt('Enter your rating for the game from 0-10:');
    var rating_save;

    while (rating < 0 || rating > 10) {
        rating = prompt('Enter your rating for the game from 0-10:');
    }

    if (rating >= 10) {
        rating_save = "Best game i have ever tried.";
    } else if (rating >= 8) {
        rating_save = "Excellent game to spend your time on it.";
    } else if (rating >= 5) {
        rating_save = "Normal game, if you don't have anything to play.";
    } else if (rating >= 2) {
        rating_save = "Bad game, not recommanded at all.";
    } else if (rating >= 0) {
        rating_save = "Wrost game ever.";
    } else {
        rating_save = "Wrong value";


    }
    document.getElementById("gametitle").innerHTML = gamename;
    document.getElementById("reviewer").innerHTML += reviewer;
    document.getElementById("rating").innerHTML += rating_save;
}


function age() {
    var age = confirm("Are you 18 or over years old?")
    if (age == true) {
        review();
    } else {
        alert("Sorry you are under age, you are not allowed to submit review if you under 18");
        window.location.replace('index.html');
        return;
    }
}

age();

function pics() {
    var numberPics = prompt("How many photos you want to add?");
    for (var i = 1; i <= numberPics; i++) {
        var urlPics = prompt("URL of photo number " + i + "");
        var x = document.createElement("IMG");
        x.setAttribute("src", urlPics);
        x.setAttribute("width", "250");
        x.setAttribute("height", "250");
        document.getElementById("photos").appendChild(x);

        //document.getElementById("photos").innerHTML = "<img src=" + urlPics + ">";
    }

}

function color() {
    var textcolor = prompt('What color text would you like the review to be in:');
    document.getElementById("chcolor").style.color = textcolor
}


