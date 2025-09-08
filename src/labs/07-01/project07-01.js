"use strict";
/*
Josiah Stoltzfus, July 5, 2025, IST239-W01, Hands-On Project 7-1

In Hands-On Project 7-1, I learned how to use regular expressions to check if a password met certain requirements, like length and character types.
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) { 
      // This will prevent the form from being submitted immediately, that way we can create custom validation and choose when to submit the form ourselves.
      e.preventDefault();

      // This is a regular expression literal that matches any uppercase letter. The g flag stands for 'global', which means it will find all matches in the string, not just the first one.
      let regex1 = /[A-Z]/g;
      // This is a regular expression literal that means any digit (number) between 0 and 9, inclusive.
      let regex2 = /[0-9]/g;
      // This is a regular expression literal that matches any of these characters: !, $, #, or %. They’re inside square brackets, which makes it a character class. That means it’ll match any one of those characters.
      let regex3 = /[!$#%]/g;

      // This variable gets the element in the html document with the id 'pwd', which is an input element. It lets us get the password the user enters so we can check what they typed in.
      let pwd = document.getElementById("pwd").value;
      // This variable gets the element in the html document with the id "feedback", which is a div element. It's used to show a custom error message to the user.
      let feedback = document.getElementById("feedback");


      // The regex object has a method called test(), which accepts a string argument. It will apply that regular expression to the string you pass to it. If there is a match for that regular expression in the string, it will return true. Otherwise, it will return false.
      // In the code below, we check the password that the user enters, which is stored in the pwd variable, and apply three regular expressions to it. In the event that a match is not found, we display an error message.
      // Check if the length of the pwd (the password entered by the user) is less than 8. If it is less than 8, change the text content of the feedback div to display an error message.
      if (pwd.length < 8) {
            feedback.textContent = "Your password must be at least 8 characters.";
      // Check if the value of the pwd variable does NOT match the regular expression regex1, which tests to see if an uppercase letter exists. If it does NOT match (no uppercase letter found), change the text content of the feedback div to display an error message.
      } else if (!regex1.test(pwd)) {
            feedback.textContent = "Your password must include an uppercase letter.";
      // Check if the value of the pwd variable does NOT match the regular expression regex2, which tests to see if a digit (0-9) exists. If it does NOT match (no digit found), change the text content of the feedback div to display an error message.
      } else if (!regex2.test(pwd)) {
            feedback.textContent = "Your password must include a number.";
      // Check if the value of the pwd variable does NOT match the regular expression regex3, which tests to see if any of these characters exist: !, $, #, or %. If there is NO match, then change the text content of the feedback div to display an error message.
      } else if (!regex3.test(pwd)) {
            feedback.textContent = "Your password must include one of the following: !$#%";
      // If none of the above occurs, then the user password is considered valid, and the form is submitted.
      } else {
            signupForm.submit();
      }
}


);