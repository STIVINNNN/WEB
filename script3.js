// Handle the sign-up form submission
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;

    // Store the user data in localStorage (for simplicity, not secure for production)
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('role', role);

    // Redirect the user to their corresponding dashboard
    if (role === 'teacher') {
        window.location.href = 'teacher.html';  // Redirect to teacher dashboard
    } else if (role === 'student') {
        window.location.href = 'student.html';  // Redirect to student dashboard
    } else if (role === 'parent') {
        window.location.href = 'parent.html';  // Redirect to parent dashboard
    }
});
