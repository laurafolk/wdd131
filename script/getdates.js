document.addEventListener("DOMContentLoaded", function() {
    // Get the current year
    var currentYear = new Date().getFullYear();

    // Display the current year in the HTML span element with id "currentYear"
    document.getElementById("currentYear").textContent = currentYear;

    // Get the last modified date of the document
    var lastModifiedDate = new Date(document.lastModified);
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = lastModifiedDate.toLocaleDateString('en-US', options);

    // Display the last modified date in the second paragraph
    document.getElementById("lastModified").textContent = "Last Modified: " + formattedDate;
});