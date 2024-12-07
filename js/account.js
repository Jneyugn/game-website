let deleteButton = document.getElementById('delete-account');
deleteButton.addEventListener('click', function(event){
    event.preventDefault();
    if (localStorage.getItem('userAccount'))
        localStorage.removeItem('userAccount');
        loggingButton.innerHTML = 'Create Account';
        localStorage.setItem('signedIn', 'false');
        loggingButton.removeEventListener('click', signOut);
        loggingButton.addEventListener('click', loginPage);
        window.location.reload();
});

let loggingButton = document.getElementById('logging-btn'); 
var loginPage = function(event){
    event.preventDefault();
    window.location.href = 'login.html';
}
var signOut = function(event){
    event.preventDefault();
    loggingButton.innerHTML = 'Sign In';
    localStorage.setItem('signedIn', 'false');
    loggingButton.removeEventListener('click', signOut);
    loggingButton.addEventListener('click', loginPage);
    window.location.reload();
}
loggingButton.addEventListener('click', loginPage);
window.addEventListener('load', function(){
    if (localStorage.getItem('userAccount') && localStorage.getItem('signedIn') == 'true'){
        loggingButton.innerHTML = 'Sign Out';
        loggingButton.removeEventListener('click', loginPage);
        loggingButton.addEventListener('click', signOut);
    } else if (localStorage.getItem('userAccount') && localStorage.getItem('signedIn') == 'false'){
        loggingButton.innerHTML = 'Sign In';
        loggingButton.removeEventListener('click', signOut);
        loggingButton.addEventListener('click', loginPage);
    }
});