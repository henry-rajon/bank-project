document.getElementById('submit-btn').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const emailFieldInput = emailField.value;
    
    const passwordField = document.getElementById('password-field');
    const passwordFieldInput = passwordField.value;
    
    if (emailFieldInput === 'sosurerbank@gmail.com' && passwordFieldInput === 'SosurerTaKa') {
        window.location.href = "bank.html";
    }
    else {
        alert('Please type your correct Email & Password');
    }
})