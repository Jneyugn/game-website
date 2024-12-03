let imageGrid = document.getElementById('img-grid');
let gridImages = imageGrid.getElementsByTagName('IMG');

let images = ['acmirage.jpg', 'ageofempires2.jpg', 'apexlegends.jpg', 'assetto.jpg', 'blackdesert.jpg', 'dayz.jpg', 'ff7.jpg', 'metaphor.jpg', 'newworld.jpg', 'rust.jpg', 'need4speed.jpg', 'fallout76.jpg', 'ghostoftsushima.jpg', 'baldursgate3.jpg', 'callofduty.jpg', 'counterstrike2.jpg', 'diablo4.jpg', 'eldenring.jpg', 'fishing.jpg', 'helldivers2.jpg', 'nba.jpg', 'poe.jpg', 'pubg.jpg', 'remnant2.jpg', 'stalker2.jpg', 'stellaris.jpg', 'wukong.jpg', 'warframe.jpg', 'valhalla.jpg', 'totalwar3.jpg', 'untildawn.jpg', 'sims4.jpg', 'uncharted.jpg', 'inscryption.jpg'];

let activeImageCount = 0;

function assignImages(){

    let usedImages = [];

    for (image of gridImages){

        if (image.classList != 'active'){

           if (Math.random() < 0.8 && activeImageCount < 5){

                let tryAgain = true;
    
                do{
                    let imageToUse = images[Math.floor(Math.random() * images.length)];
                    if (!usedImages.includes(imageToUse)){
                        image.src = `images/games/${imageToUse}`;
                        image.classList.add('active');
                        activeImageCount++;
                        usedImages.push(imageToUse);
                        tryAgain = false;
                    }
                } while(tryAgain);
            }
        } else{
            image.classList.remove('active');
            activeImageCount--;
        }
    }
}

setInterval(assignImages, 1000);

class Account {
    constructor(firstName, lastName, email, username, password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.password = password;
    }
}

let form = document.getElementById('register');
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');
let username = document.getElementById('username');
let password = document.getElementById('password');
let signinButton = document.getElementById('sign-in');
let firstnameMessage = document.getElementById('firstname-msg');
let lastnameMessage = document.getElementById('lastname-msg');
let emailMessage = document.getElementById('email-msg');
let usernameMessage = document.getElementById('username-msg');
let passwordMessage = document.getElementById('password-msg');
let accountMessage = document.getElementById('account-msg');

signinButton.addEventListener('click', function(event) {

    event.preventDefault();

    if (localStorage.getItem('userAccount') != null){
        accountMessage.innerHTML = 'You already have an account';
    } else if (firstName.value == '' || firstName.value.trim().length == 0){
        firstnameMessage.innerHTML = 'This field is required!';
    } else if (lastName.value == '' || lastName.value.trim().length == 0){
        lastnameMessage.innerHTML = 'This field is required!';
    } else if (email.value == '' || email.value.trim().length == 0){
        emailMessage.innerHTML = 'This field is required!';
    } else if (!(email.value.toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ))) {
        emailMessage.innerHTML = 'Please enter a valid email';
    } else if (username.value == '' || username.value.trim().length == 0){
        usernameMessage.innerHTML = 'This field is required!';
    } else if (password.value == '' || password.value.trim().length == 0){
        passwordMessage.innerHTML = 'This field is required!';
    } else if (password.value.length < 8){
        passwordMessage.innerHTML = 'Your password must be at least 8 characters!';
    } else {
        var userAccount = new Account (firstName.value, lastName.value, email.value, username.value, password.value);
        var userAccountStringified = JSON.stringify(userAccount);
        localStorage.setItem('userAccount', userAccountStringified);
        window.location.replace('index.html');
    }
});

form.addEventListener('click', function(event){
    if (event.target.tagName === 'INPUT'){
        switch(event.target.id){
            case 'first-name':
                firstnameMessage.innerHTML = '';
                break;
            case 'last-name':
                lastnameMessage.innerHTML = '';
                break;
            case 'email':
                emailMessage.innerHTML = '';
                break;
            case 'username':
                usernameMessage.innerHTML = '';
                break;
            case 'password':
                passwordMessage.innerHTML = '';
                break;
            default:
        }
    }
});


