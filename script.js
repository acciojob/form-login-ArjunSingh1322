let fname = document.querySelector("#firstname");
let lname = document.querySelector("#lastname");
let btn = document.querySelector("#button"); // Fixed missing quotes around #button

btn.addEventListener("click", getFormvalue);

function getFormvalue() {
    let str2 = first.value + " " + last.value + " "; // Added space between first and last name
    alert(str2); // Shows an alert with the combined names
}
