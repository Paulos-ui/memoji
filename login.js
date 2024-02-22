const loginForm = document.getElementById('login');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Perform client-side validation (optional)

  // Send login request to backend
  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  .then(response => {
    if (response.ok) {
      // Redirect to user's page
      window.location.href = '/user';
    } else {
      // Handle login failure
      alert('Invalid email or password.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
});