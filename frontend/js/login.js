document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Ubah 'user' dan 'password' dengan nilai yang diinginkan
    if (username === 'user' && password === 'password') {
        window.location.href = 'materi.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});
