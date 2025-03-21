document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    document.getElementById('nameError').style.display = name ? 'none' : 'block';
    document.getElementById('emailError').style.display = email.includes('@') ? 'none' : 'block';
    document.getElementById('messageError').style.display = message ? 'none' : 'block';
    
    valid = name && email.includes('@') && message;
    
    if (valid) {
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset();
    }
});
