const input = document.getElementById("password-input") as HTMLInputElement;

let count = 0;
function checkPassword() {
    const secretWord = input.value.toLocaleLowerCase().trim();
    if (secretWord === "january30") {
        window.location.href = "novel.html";
    } else {
        count++;
    }

    if (count === 1) {
        alert("Not quite... try using the day we met MMDD");
    } else if (count >= 2) {
        alert("Hint: it starts with J and ends with 30 - no spaces!");
    }
}

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkPassword();
  }
});