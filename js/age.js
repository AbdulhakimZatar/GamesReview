var age = confirm("Are you 18 or over years old?")
if (age == true){

} else {
    prompt("Sorry you are under age, you are not allowed to submit review if you under 18");
    window.location.replace('index.html');
}