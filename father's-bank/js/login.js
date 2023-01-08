document.getElementById('submit-button').addEventListener('click', function(){
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if(userEmail == 'jfmemon1999@gmail.com' && userPassword == 'secret') {
        window.location.href= 'http://127.0.0.1:5500/banking.html';
    }
});




