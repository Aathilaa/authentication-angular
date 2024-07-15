function signUpWithGoogle() {
    google.accounts.id.initialize({
        client_id: '435821219567-g7dmef83fuc2kbb6cjjqpeuu2kemdf9n.apps.googleusercontent.com',
        callback: handleCredentialResponse
    });
    google.accounts.id.prompt();
}

function handleCredentialResponse(response) {
    fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken: response.credential })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Retrieve existing users from localStorage or initialize as empty array
            let users = JSON.parse(localStorage.getItem('users') || '[]');
            
            // Check if user already exists
            const userExists = users.some(u => u.email === data.user.email);
            if (!userExists) {
                // Push new user data to the array
                users.push(data.user);
                // Store updated users array back into localStorage
                localStorage.setItem('users', JSON.stringify(users));
            }

            // Redirect to the login page
            window.location.href = 'http://localhost:4200/login';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function signInWithGoogle() {
    google.accounts.id.initialize({
        client_id: '435821219567-g7dmef83fuc2kbb6cjjqpeuu2kemdf9n.apps.googleusercontent.com',
        callback: handleLoginCredentialResponse
    });
    google.accounts.id.prompt();
}

function handleLoginCredentialResponse(response) {
    fetch('http://localhost:3000/signup', { // Assuming same endpoint for both signup and login
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken: response.credential })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Retrieve existing users from localStorage or initialize as empty array
            let users = JSON.parse(localStorage.getItem('users') || '[]');
            
            // Check if user exists
            const user = users.find(u => u.email === data.user.email);
            if (user) {
                // Redirect to the home page
                window.location.href = 'http://localhost:4200/home';
            } else {
                alert('User not found. Please sign up first.');
            }
            window.location.href = 'http://localhost:4200/home';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

