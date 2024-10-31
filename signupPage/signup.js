// Select the form elements and the error message container
const profileForm = document.getElementById('signUp-form');
const profileError = document.getElementById('profileError');
const submitButton = document.getElementById('submit-button');

// Add an event listener to the button for click event
submitButton.addEventListener('click', function(event) {
    // Prevent default form behavior
    event.preventDefault();

    // Get the values of each input field
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Check if any field is empty
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        profileError.textContent = '⚠️ Please fill in all fields!';
        profileError.style.color = 'red';
        return;
    }

    // Check if the name is at least 4 characters long
    if (name.length < 4) {
        profileError.textContent = '⚠️ Name must be at least 4 characters long!';
        profileError.style.color = 'red';
        return;
    }

    // Check if the passwords match
    if (password !== confirmPassword) {
        profileError.textContent = '⚠️ Passwords do not match. Please try again!';
        profileError.style.color = 'red';
        return;
    }

    // If everything is correct, save the user profile to local storage
    localStorage.setItem('userProfile', JSON.stringify({
        name: name,
        email: email,
        password: password
    }));

    // Display a success message
    profileError.textContent = 'Profile saved successfully!';
    profileError.style.color = 'green';

    // Clear the form after saving
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirmPassword').value = '';
});
