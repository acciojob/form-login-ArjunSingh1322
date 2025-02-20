// let fname = document.querySelector("#firstname");
// let lname = document.querySelector("#lastname");
// let btn = document.querySelector("#button"); // Fixed missing quotes around #button

// btn.addEventListener("click", getFormvalue);

// function getFormvalue() {
//     let str2 = first.value + " " + last.value + " "; // Added space between first and last name
//     alert(str2); // Shows an alert with the combined names
// }

 const form = document.querySelector('#form1');

        // Add event listener for form submission
        form.addEventListener('submit',getFormvalue) 
         function getFormvalue(e){
            e.preventDefault(); // Prevent form from refreshing the page

            // Get input values using form elements
            const firstName = form.fname.value.trim();
            const lastName = form.lname.value.trim();

            // Show alert with full name
            alert(`${firstName} ${lastName}`);
		 }
        















