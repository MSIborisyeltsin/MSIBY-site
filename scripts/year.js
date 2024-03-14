var currentYear = new Date().getFullYear();
var yearTextElement = document.getElementById("yearText");
yearTextElement.textContent = yearTextElement.textContent.replace("N", currentYear);
