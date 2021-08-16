// Login Page Submit Button
document.getElementById('submit-button').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // //get user password 

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if( userEmail == 'sojib@gmail.com' && userPassword == 'sojib')
    {
        window.location.href = 'banking.html';
    }
    
});