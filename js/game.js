import { Account } from "./classes.js";
import { Game } from "./classes.js";
import { Post } from "./classes.js";

//--------------------Grab the game to be displayed on the page, based on what the user clicked-----------------//
var gameToDisplayObject = new Game();
var gameToDisplay;
let gameToDisplayTitle = localStorage.getItem('storedGame');
for (let i = 0; i < localStorage.length; i++){
    if (localStorage.key(i) == gameToDisplayTitle){
        gameToDisplay = JSON.parse(localStorage.getItem(localStorage.key(i)));
        gameToDisplayObject.title = gameToDisplay.title;
        gameToDisplayObject.image = gameToDisplay.image;
        gameToDisplayObject.genre = gameToDisplay.genre;
        gameToDisplayObject.rating = gameToDisplay.rating;
        gameToDisplayObject.description = gameToDisplay.description;
        gameToDisplayObject.posts = gameToDisplay.posts;
        break;
    }
}

//-----------game is now stored in gameToDisplay variable-----------------------//
//-----------populate game image name rating and description--------------------//
let gameImage = document.getElementById('game-image');
gameImage.src = gameToDisplay.image;

let gameName = document.getElementById('game-name');
gameName.innerHTML = gameToDisplay.title;

let gameRating = document.getElementById('rating');
let gameStars = gameRating.getElementsByTagName('SPAN');
for (const gameStar of gameStars){
    if (gameStar.getAttribute('data-value') > gameToDisplay.rating){
        gameStar.setAttribute('hidden', 'hidden');
    } else{
        gameStar.removeAttribute('hidden');
    }
}

let gameDescription = document.getElementById('game-description');
gameDescription.innerHTML = gameToDisplay.description;

//------------Populate the threads based on the game's posts object-------------------//
let threadsDiv = document.getElementById('threads');
let gameThreads = gameToDisplay.posts;

for (let i = gameThreads.length - 1; i >= 0; i-- ){

    const threadDiv = document.createElement('div');

    const threadUsername = document.createElement('h4');
    const threadUsernameText = document.createTextNode(gameThreads[i].username);
    threadUsername.appendChild(threadUsernameText);
    threadUsername.classList.add('username')
    threadDiv.appendChild(threadUsername);

    const threadBody = document.createElement('p');
    const threadBodyText = document.createTextNode(gameThreads[i].body);
    threadBody.appendChild(threadBodyText);
    threadBody.classList.add('user-thread');
    threadDiv.appendChild(threadBody);

    const threadView = document.createElement('a');
    const threadViewText = document.createTextNode('View/Reply');
    threadView.appendChild(threadViewText);
    threadView.classList.add('view-reply');
    threadView.setAttribute('data-value', i);
    threadView.setAttribute('href', 'thread.html');
    threadDiv.appendChild(threadView);
    
    threadDiv.classList.add('thread');
    threadsDiv.appendChild(threadDiv);
}

//-------------variable initializations---------------------------//
let noDiscussions = document.getElementById('no-threads');
let createButton = document.getElementById('create-thread');
let threadForm = document.getElementById('write-thread');
let threadContent = document.getElementById('thread-content');
let submitButton = document.getElementById('submit-form');
let closeButton = document.getElementById('close-form');
let accountWarning = document.getElementById('account-warning');
let postWarning = document.getElementById('post-warning');

//--------------grab user account info---------------------------//
let userAccount;
let userName;
if (localStorage.getItem('userAccount')){
    userAccount = JSON.parse(localStorage.getItem('userAccount'));
    userName = userAccount.username;
}

if (gameToDisplay.posts.length > 0){
    noDiscussions.setAttribute('hidden', 'hidden');
}

//-----------------Create Thread----------------------------------//
createButton.addEventListener('click', function(event){
    event.preventDefault();
    if (!threadForm.getAttribute('style')){
        if (localStorage.getItem('signedIn') && localStorage.getItem('signedIn') === 'true')
        {
            threadContent.value = '';
            threadForm.style.display = 'flex';
        }
        else{
            accountWarning.innerHTML = "You need to be signed in to create a thread."
        }
    } else if (threadForm.style.display === 'none') { 
        if (localStorage.getItem('signedIn') && localStorage.getItem('signedIn') === 'true' ){
            threadContent.value = '';
            threadForm.style.display = 'flex';
        } else{
            accountWarning.innerHTML = "You need to be signed in to create a thread."
        }
    } 
});

closeButton.addEventListener('click', function(event){
    event.preventDefault();
    threadContent.value = '';
    threadForm.style.display = 'none';
})

submitButton.addEventListener('click', function(event){
    event.preventDefault();
    var threadBody = threadContent.value;
    
    if (threadBody == '' || threadBody.trim().length == 0){
        postWarning.innerHTML = "You can't post an empty thread";
    } else{
        postWarning.innerHTML = "";
        let createdThread = new Post(userName, true,threadBody);
        gameToDisplayObject.createPost(createdThread);
        gameToDisplay.posts = gameToDisplayObject.posts;
        localStorage.setItem(gameToDisplayTitle, JSON.stringify(gameToDisplay));
        window.location.reload();
    }
});

//------------------Adjust user rating-----------------------------------------------//
const adjustUserRating = function(){
    if (gameToDisplay.userRating){
        let userRating = document.getElementById('user-rating');
        let userStars = userRating.getElementsByTagName('SPAN');
        for (const userStar of userStars){
            if (userStar.getAttribute('data-value') > gameToDisplay.userRating){
                userStar.style.color = 'lightgray';
            } else{
                userStar.style.color = 'gold';
            }
        }
    }
}

let userRatingDiv = document.getElementById('user-rating');
let userRatingStars = userRatingDiv.getElementsByClassName('star');

userRatingDiv.addEventListener('click', function(event){
    if (event.target.tagName == 'SPAN'){
        for (const userRatingStar of userRatingStars){
            if (userRatingStar.getAttribute('data-value') <= event.target.getAttribute('data-value')){
                userRatingStar.style.color = 'gold';
            }
        }
        gameToDisplay.userRating = event.target.getAttribute('data-value');
        localStorage.setItem(gameToDisplayTitle, JSON.stringify(gameToDisplay));
        adjustUserRating();
    }
});

userRatingDiv.addEventListener('mouseover', function(event){
    if (event.target.tagName == 'SPAN'){
        for (const userRatingStar of userRatingStars){
            userRatingStar.removeAttribute('style')
        }
    }
})

userRatingDiv.addEventListener('mouseout', function(event){
    if (event.target.tagName == 'SPAN'){
       adjustUserRating();
    }
})

adjustUserRating();

threadsDiv.addEventListener('click', function(event){
    if (event.target.classList.contains('view-reply')){
        event.preventDefault();
        localStorage.setItem('savedPost', event.target.getAttribute('data-value'));
        window.location.href = 'thread.html';
    }
});