/*    
      Josiah Stoltzfus, June 8, 2025, IST239-W01, Hands-On Project 2-1

      In Hands-On Project 2-1, I created functions to convert values between Celsius and Fahrenheit. These functions are triggered when the user enters a temperature in either input field on the webpage.
 */

// This function accepts a single parameter that represents a degree in Fahrenheit and will convert it to a number that represents a degree in Celsius
function FahrenheitToCelsius(degree) {
      return (degree - 32) / 1.8; // The formula for converting Fahrenheit to Celsius is: (F - 32) / 1.8
}

// This function accepts a single parameter that represents a degree in Celsius and will convert it to a number that represents a degree in Fahrenheit
function CelsiusToFahrenheit(degree) {
      return (degree * 1.8) + 32; // The formula for converting Fahrenheit to Celsius is: (C * 1.8) + 32
}

/*
      The code block below assigns an anonymous function to the onchange eventhandler for the element with an id "cValue," which is defined in the project-2-01.html file.
*/

// use the getElementById function, pass the cValue element as a string, and then set the onchange eventhandler equal to the function
document.getElementById("cValue").onchange = function () {
      // get the current value of the cValue and store it in the cDegree variable
      // wrap the value in the built-in function parseFloat to convert the value to a float. the .value property always returns the value as a string
      let cDegree = parseFloat(document.getElementById("cValue").value);
      // after storing the value of cValue element in the cDegree variable, this will check if it is a number
      if (!isNaN(cDegree)) {
            // if the value is a number, then pass it to the CelsiusToFahrenheit function to be converted, and assign the result to the value of the fValue element id
            document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
      } else {
            // if the value is not a number, then display an alert message and request that the user enter a valid number
            alert("Please enter a valid number for Celsius")
      }
};

/*
      The code block below assigns an anonymous function to the onchange eventhandler for the element with an id "fValue," which is defined in the project-2-01.html file.
*/

// use the getElementById function, pass the fValue element as a string, and then set the onchange eventhandler equal to the function
document.getElementById("fValue").onchange = function () {
      // get the current value of the fValue and store it in the fDegree variable
      // wrap the value in the built-in function parseFloat to convert the value to a float. the .value property always returns the value as a string
      let fDegree = parseFloat(document.getElementById("fValue").value);
      // after storing the value of fValue element in the fDegree variable, this will check if it is a number
      if (!isNaN(fDegree)) {
            // if the value is a number, then pass it to the FahrenheitToCelsius function to be converted, and assign the result to the value of the cValue element id
            document.getElementById("cValue").value = FahrenheitToCelsius(fDegree);
      } else {
            alert("Please enter a valid number for Fahrenheit")
      }
};
