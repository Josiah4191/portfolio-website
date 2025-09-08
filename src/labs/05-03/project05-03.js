"use strict";
/*
Josiah Stoltzfus, June 22, 2025, IST239-W01, Hands-On Project 5-3

In Hands-On Project 5-3, I learned how to get content from a web page and use JavaScript to add new things to it. I used a loop to go through heading elements and create links for a table of contents.
*/

// Create variable 'sourceDoc' and store the element returned with the 'source_doc' ID
let sourceDoc = document.getElementById("source_doc");

// Create variable 'toc' and store the element returned with the 'toc' ID
let toc = document.getElementById("toc");

// Create variable 'headingCount' and set the initial value to 1
let headingCount = 1;

// Create constant 'heading' and set the value to "H2"
const heading = "H2";

// Get the collection of children from the sourceDoc variable, which stores all elements with an ID of 'source_doc'
let sourceChildren = sourceDoc.children;


// Create a for loop to loop through the length of the children in sourceDoc
for (let i = 0; i < sourceChildren.length; i++) {
      let currentElement = sourceChildren[i]; // This will get the current element from the collection of children

      // Check if the current element's nodeName is equal to the heading ("H2")
      if (currentElement.nodeName === heading) {
            // If true, create an 'a' element and store it in the anchor variable
            let anchor = document.createElement("a");
            anchor.setAttribute("name", "doclink" + headingCount); // This will set the 'name' attribute of the 'a' tag to "doclink" + headingCount which looks like this: <a name="doclink1">
            currentElement.insertBefore(anchor, currentElement.firstChild); // This will insert the 'a' element before the current element's first child

            // Create element node named listItem for the li element
            let listItem = document.createElement("li"); // This creates an 'li' element and stores it in the variable

            // Create element node named link for the a element
            let link = document.createElement("a"); // This creates an 'a' element and stores it in the link variable

            // Use the appendChild() method to append link to listItem
            listItem.appendChild(link); // This will add the link, which is an 'a' element, to be a child of the listItem element

            // Set the value of the textContent property of link to currentElement.textContent
            link.textContent = currentElement.textContent; // This will set the text content of the link, which is an 'a' element, to be the same text content of the current element in the loop

            // Set the value of href property of link (not listItem, because listItem is an 'li' element) to the text string: "#doclink" + headingCount
            link.href = "#doclink" + headingCount; // This will set the href attribute for the link, which is the 'a' element, which will navigate to the correct section of the document when clicked. It will look like this: <a href="#doclink1">

            // Use the appendChild() method to append lisItem to the toc object
            toc.appendChild(listItem); // The listItem, which contains the link, is added as a child element to the 'toc' element, which is 'ul' element inside the HTML document
      
            // Increase the value of the headingCount variable by 1
            headingCount++; // Increments the headingCount variable by 1. This will make it so the name attribute of the anchor tag will match the link. First loop looks like this: <a href="#doclink1"> which matches <a name="doclink1">

      }
}
