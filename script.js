console.log("CONNECTED");
//declare document variable and set it to the selected element
const MY_DOCUMENT = document.querySelector("#bill-of-sale");
const PRINT_BUTTON = document.querySelector("#print-button");
//add event listener to button
PRINT_BUTTON.addEventListener("click", function() {
    window.print(MY_DOCUMENT);
})
