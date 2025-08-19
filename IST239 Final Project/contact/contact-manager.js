/*
    ContactManager handles the contact form functionality.

    Features:
        - Storing and displaying contact information
        - Managing inquiry topic selection
        - Handling form submission and validation
        - Copying contact info to the clipboard
 */

// Export the ContactManager class as the default export
export default class ContactManager {

    // Class constructor initializes contact data and form logic
    constructor() {

        // Define contact information for display and clipboard copy
        this.contactInfo = {
            "email": "stoltzfusjms@my.gvltec.edu",
            "phone": "(123) 456-7890",
            "discord": "discordname#0123",
            "github": "https://github.com/username"
        }

         // Define options for the inquiry dropdown in the contact form
        this.inquiryOptions = {
            "general": "General Inquiry",
            "feedback": "Project Feedback",
            "report": "Bug Report or Issue"
        }

        // Set the default inquiry option
        this.selectedInquiry = "general";

        // Get a reference to the contact form element
        this.form = document.querySelector(".contact-form");

        // Attach submit event handler with proper context binding
        this.form.addEventListener("submit", this.handleValidation.bind(this));

    }

    // Asynchronously copy the selected contact info to the clipboard
    async saveToClipboard(variable) {

        // Get the contact value based on the key ("email" or "phone")
        let copyValue = this.contactInfo[variable];


        try {
            // Attempt to write the value to the user's clipboard
            await navigator.clipboard.writeText(copyValue);

            // Log the copied value to the console for confirmation
            console.log("Copied text: " + copyValue);

            // Return true if successful
            return true;
        } catch (error) {
            // Log an error message if copying fails
            console.error("Failed to copy: ", error);

            // Return false to indicate failure
            return false;
        }
    }

    // Handle form submission and basic validation
    handleValidation(event) {
        // Prevent default form submission behavior
        event.preventDefault();

        // Get a reference to the submit button
        let submitButton = document.getElementById("submit-button");

        // Store the original button text to restore later
        let originalText = submitButton.textContent;

        // Get and trim user input values from the form
        let firstName = document.getElementById("first-name").value.trim();
        let lastName = document.getElementById("last-name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        let inquiry = this.inquiryOptions[this.selectedInquiry];

        // Get the selected inquiry type from the options
        this.storeMessage(firstName, lastName, email, message, inquiry);

        // Store the submitted message
        submitButton.textContent = "Message Sent! ✅";

        // Reset the form
        this.form.reset();

        // Restore the original button text after 2 seconds
        setTimeout(() => {
        submitButton.textContent = originalText;
        }, 2000);

    }

    // Update the selected inquiry option and display it in the UI
    setSelectedOption(option) {
        // Set the selected inquiry key
        this.selectedInquiry = option;

        // Update the dropdown label to show the selected option
        document.getElementById("topic-selected").textContent = this.inquiryOptions[option] + " ▼";
    }

    // Store the submitted message data (simulated with console log)
    storeMessage(firstName, lastName, email, message, inquiry) {
        // Create a message object with the user's input
        let msg = {
            firstName,
            lastName,
            email,
            message,
            inquiry
        }
        // Log the stored message to the console
        console.log("Stored message: ", msg);
    }


}