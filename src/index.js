var input = document.getElementById("password-input");
var count = 0;
function checkPassword() {
    var secretWord = input.value.toLocaleLowerCase().trim();
    if (secretWord === "january30") {
        window.location.href = "novel.html";
    }
    else {
        count++;
    }
    if (count === 1) {
        alert("Not quite... try using the day we met MMDD");
    }
    else if (count === 2) {
        alert("Hint: it starts with J and ends with 30 - no spaces!");
    }
    else if (count === 3) {
        alert("That's alright, take your time, I'm patient");
    }
    else if (count === 4) {
        alert("Should I tell you what is it?");
    }
    else if (count === 5) {
        alert("I don't think so ;)");
    }
    else if (count >= 6) {
        alert("Attempts remaining: ∞ (I'm patient)");
    }
}
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkPassword();
    }
});
