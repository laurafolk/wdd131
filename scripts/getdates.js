// Get the current year
var currentYear = new Date().getFullYear();

// Set the current year in the HTML
document.getElementById("currentYear").textContent = currentYear;

// Get the last modified date of the document
var lastModified = new Date(document.lastModified);

console.log("Last modified date: " + lastModified);

// Set the last modified date in the HTML
// function getLastModified() {
//     return new Date(document.lastModified);
// }
// var lastModified = getLastModified();