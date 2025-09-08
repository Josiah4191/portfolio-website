"use strict";
/*
Josiah Stoltzfus, July 18, 2025, IST239-W01, Hands-On Project 10-3

In Hands-On Project 10-3, I learned how to use Google Maps to show bike directions. I added code that shows a map, lets the user pick a starting and ending point, and then draws the route and shows directions when both are selected.
*/


function showMap() {
   
   // Page objects
   let bikeMap = document.getElementById("bikeMap");
   let bikeDirections = document.getElementById("bikeDirections");
   let startingPoint = document.getElementById("startingPoint");
   let endingPoint = document.getElementById("endingPoint");   

   // Create a DirectionsService object
   let bikeFind = new google.maps.DirectionsService();

   // Create a DirectionsRenderer object for drawing the route on the map
   let bikeDraw = new google.maps.DirectionsRenderer();

   // Create a LatLng object using Google Maps API and set the coordinates for Boulder, CO
   let Boulder = new google.maps.LatLng(40.01753, -105.26496);

   // This creates the map and centers it on Boulder CO with a zoom level of 12
   let myMap = new google.maps.Map(document.getElementById("bikeMap"), {zoom: 12, center: Boulder});

   // This sets the event listener for the 'change' event for the starting point and ending point and calls the drawRoute function
   startingPoint.addEventListener("change", drawRoute);
   endingPoint.addEventListener("change", drawRoute);

   // This function creates and shows the bike route on the map
   function drawRoute() {
   // Check if the starting point and ending point selected indexes are not equal to 0. (if they are 0, no selection was made)
   if ((startingPoint.selectedIndex !== 0) && (endingPoint.selectedIndex !== 0)) {
      // This creates an object literal with origin, destination, and travelMode specified so that it can be passed to the route() method for the DirectionService object
      let bikeRoute = {
         origin : startingPoint.value,
         destination : endingPoint.value,
         travelMode : google.maps.TravelMode.BICYCLING
      }

      // This function finds the route using the Google Maps API and it responds with the result and status.
      bikeFind.route(bikeRoute, function(result, status) {
         if (status === "OK") { // If status is OK, then it was successful
         bikeDraw.setDirections(result); // Use the result to draw the route on the map
         bikeDraw.setMap(myMap); // Display the route on the map by connecting it to the map object
         bikeDraw.setPanel(bikeDirections); // Show directions in the direction panel
         } else {
            bikeDirections.textContent = "Directions Unavailable: " + status; // If the status is not OK, then change the textContent for the directions to say that it's unavailable
         }});  
      }
   }
}




