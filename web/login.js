// script.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get email and password
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // You can perform validation here

  // Send the data to the backend for authentication
  // Example AJAX request
  // Replace the URL with your backend endpoint
  fetch("your-backend-url/login", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
  })
  .then(response => response.json())
  .then(data => {
      // Handle the response from the backend
      console.log(data);
      // Redirect the user to the next page if login successful
      // window.location.href = "next-page.html";
  })
  .catch(error => {
      console.error("Error:", error);
  });
});
