document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;

    // Handle user redirection based on role
    let redirectUrl = '';

    if (role === 'teacher') {
        redirectUrl = '/teacher-dashboard';  // Example path for teachers
    } else if (role === 'student') {
        redirectUrl = '/student-dashboard';  // Example path for students
    } else if (role === 'parent') {
        redirectUrl = '/parent-dashboard';  // Example path for parents
    }

    // Display an alert (you can replace this with an actual backend call or redirection)
    alert(`Sign up successful! You are a ${role}. Redirecting to ${redirectUrl}`);

    // Redirect to the appropriate page
    window.location.href = redirectUrl;
});
