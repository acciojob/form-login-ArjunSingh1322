let first = document.querySelector("#firstname");
let last = document.querySelector("#lastname");
let btn = document.querySelector("#button"); // Fixed missing quotes around #button

btn.addEventListener("click", getFormValue);

function getFormValue() {
    let str2 = first.value + " " + last.value; // Added space between first and last name
    alert(str2); // Shows an alert with the combined names
}
