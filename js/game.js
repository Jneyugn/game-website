import { Account } from "./classes.js";
import { Game } from "./classes.js";
import { Post } from "./classes.js";

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


let threadsDiv = document.getElementById('threads');
let gameThreads = gameToDisplay.posts;
for (const thread of gameThreads){

    const threadDiv = document.createElement('div');

    const threadUsername = document.createElement('h4');
    const threadUsernameText = document.createTextNode(thread.username);
    threadUsername.appendChild(threadUsernameText);
    threadUsername.classList.add('username')
    threadDiv.appendChild(threadUsername);

    const threadBody = document.createElement('p');
    const threadBodyText = document.createTextNode(thread.body);
    threadBody.appendChild(threadBodyText);
    threadBody.classList.add('user-thread');
    threadDiv.appendChild(threadBody);

    const threadView = document.createElement('a');
    const threadViewText = document.createTextNode('View/Reply');
    threadView.appendChild(threadViewText);
    threadView.classList.add('view-reply');
    threadDiv.appendChild(threadView);
    
    threadDiv.classList.add('thread');
    threadsDiv.appendChild(threadDiv);
}

let noDiscussions = document.getElementById('no-threads');
let createButton = document.getElementById('create-thread');
let threadForm = document.getElementById('write-thread');
let threadContent = document.getElementById('thread-content');
let submitButton = document.getElementById('submit-form');
let accountWarning = document.getElementById('account-warning');
let postWarning = document.getElementById('post-warning');

let userAccount;
let userName;
if (localStorage.getItem('userAccount')){
    userAccount = JSON.parse(localStorage.getItem('userAccount'));
    userName = userAccount.username;
}

if (gameToDisplay.posts.length > 0){
    noDiscussions.setAttribute('hidden', 'hidden');
}

createButton.addEventListener('click', function(event){
    event.preventDefault();
    if (!threadForm.getAttribute('style')){
        if (localStorage.getItem('signedIn') && localStorage.getItem('signedIn') === 'true')
            threadForm.style.display = 'flex';
        else{
            accountWarning.innerHTML = "You need to be signed in to create a thread."
        }
    } else if (threadForm.style.display === 'none') { 
        if (localStorage.getItem('signedIn') && localStorage.getItem('signedIn') === 'true' ){
            threadForm.style.display = 'flex';
        } else{
            accountWarning.innerHTML = "You need to be signed in to create a thread."
        }
    } else { 
        threadForm.style.display = 'none';
    } 
});

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