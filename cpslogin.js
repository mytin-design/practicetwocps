


// Sample username and password for demonstration purposes
const originalUsername = "cpsstudent";
const originalPassword = "password";

function authenticateUser() {
  // Get values entered by the user
  const enteredUsername = document.getElementById("cpsusername").value;
  const enteredPassword = document.getElementById("cpspasscode").value;

  // Check if the entered username and password match the stored username and password
  if (enteredUsername === originalUsername && enteredPassword === originalPassword) {
    // If the credentials are correct, redirect the user to the dashboard or another page
    window.location.href = "./cpsdashboard.html";
  } else {
    // If the credentials are incorrect, display an error message
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "Invalid student username or password.";
  }
}

// Attach the authenticateUser function to a button click event
document.getElementById("cpslogin-button").addEventListener("click", authenticateUser);


//Tabs for log in

function startlogTab(evt, logger) {
  let logtabbtn, logtabcontent, l;


  //Get all tabcontents and hide

  logtabcontent = document.getElementsByClassName('logtabcontent');

  for(l = 0; l < logtabcontent.length;l++) {
    logtabcontent[l].style.display = "none";
  }

//Get buttons, and hide the active class
logtabbtn = document.getElementsByClassName('logtabbtn');

for(l = 0; l < logtabbtn.length; l++ ) {
  logtabbtn[l].className = logtabbtn[l].className.replace('active', "");

}


//Show the current tab, and add the active class to the button that opened it;

document.getElementById(logger).style.display = "block";
evt.currentTarget.className += "active";

}

document.getElementById("defaultLog").click();




//Use the learner's script for staff
//Change the id and classes

// Sample username and password for demonstration purposes
const originalstaffUsername = "cpsstaff";
const originalstaffPassword = "password";

function authenticateStaff() {
  // Get values entered by the user
  const enteredstaffUsername = document.getElementById("cpsstaffusername").value;
  const enteredStaffPassword = document.querySelector(".cpsstaffpasscode").value;

  // Check if the entered username and password match the stored username and password
  if (enteredstaffUsername === originalstaffUsername && enteredStaffPassword === originalstaffPassword) {
    // If the credentials are correct, redirect the user to the dashboard or another page
    window.location.href = "./cpsdashboard.html"; //may point to staff or student dashboard
  } else {
    // If the credentials are incorrect, display an error message
    const errorStaffMessage = document.getElementById("errorStaff-message");
    errorStaffMessage.textContent = "Invalid staff username or password.";
  }
}

// Attach the authenticateUser function to a button click event
document.getElementById("cpsstafflogin-button").addEventListener("click", authenticateStaff);
