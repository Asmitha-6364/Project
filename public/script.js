var buttons = document.getElementsByClassName("btnLogic-popup");
            
// Loop through all elements with the class name
for (var i = 0; i < buttons.length; i++) {
    // Add a click event listener to each button
    buttons[i].addEventListener("click", function() {
        // Redirect to another page
        window.location.href = "https://localhost:5000/home.html"; // Replace this URL with the desired destination
    });
}