const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.getElementById('login-button').addEventListener('click', function() {
     window.location.href = 'Nav.html';
})

document.getElementById('signupButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    window.location.href = 'Nav.html'; // Redirect to homepage.html
});