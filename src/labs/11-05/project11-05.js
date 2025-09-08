"use strict";
/*
Josiah Stoltzfus, July 27, 2025, IST239-W01, Hands-On Project 11-5

In Hands-On Project 11-5, In this project, I fixed several issues in the code, including syntax errors in fetch calls, incorrect response handling, and template literal usage. I learned how to properly fetch and handle JSON and XML data.
*/

window.addEventListener("load", init);

function init() {
   // Page Objects
   let selectionList = document.getElementById("authorList");
   let bookReview = document.getElementById("review");
   let podList = document.getElementById("podcastList")
   
   // Fetch a list of authors from the server
   // FIXED: Remove trailing ; from the fetch statement
   fetch("authorlist.json")
      // FIXED: Change '>' to '=>'
      .then (response => response.json())
      .then (json => {
         
         // Place the authors in a selection list
         for (let authors of  json.authorlist) {
            let newOpt = document.createElement("option");
            newOpt.value = authors.initials;
            newOpt.textContent = authors.name;
            selectionList.appendChild(newOpt);
         }
      
         // Create an onchange event handler that displays a review by the selected author
         selectionList.onchange = function() {
            // FIXED: Replace & with ? in the URL
            fetch("sfreviews.pl?author="+selectionList.value)
            // FIXED: Changed response.json() to response.text()
            .then (response => response.text())
            .then (review => bookReview.innerHTML = review)
            .catch(e => console.log(e))
            }
         })
      .catch ( e => console.log(e));
   
   // Fetch the list of podcasts from an XML document
   fetch("sfpod.xml")
   .then(response => response.text())
   // FIXED: Changed new Parser() to new DOMParser()
   .then(str => new DOMParser().parseFromString(str, "text/xml"))
   .then (dom => {
      // Rewrite the XML structure into an HTML fragment
      let podcasts = dom.querySelectorAll("item");
      for (let show of podcasts) {
         let title = show.children[0].textContent;
         let summary = show.children[1].textContent;
         let link = show.children[2].textContent;
         // FIXED: Changed the single quotes to backticks for the template literal. Also added quotes around the href value
         let article = `<article><h1><a href="${link}">${title}</a></h1><p>${summary}</p></article>`;
         podList.insertAdjacentHTML("beforeEnd", article)
      }
   })
   .catch(e => console.log(e))
}