import { Account } from "./classes.js";
import { Game } from "./classes.js";
import { Post } from "./classes.js";

let gameToDisplayString = localStorage.getItem('storedGame');
let gameToDisplay = JSON.parse(gameToDisplayString);

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

let userAccount;
if (localStorage.getItem('userAccount')){
    userAccount = JSON.parse(localStorage.getItem('userAccount'))
    console.log(userAccount.username);
}

if (gameToDisplay.posts.length > 0){
    noDiscussions.setAttribute('hidden', 'hidden');
}

createButton.addEventListener('click', function(event){
    event.preventDefault();
    if (!threadForm.getAttribute('style')){
        if (localStorage.getItem('signedIn') == 'true')
            threadForm.style.display = 'flex';
        else{
            console.log('nope');
            accountWarning.innerHTML = "You need to be signed in to create a thread."
        }
    } else if (threadForm.style.display === 'none') { 
        if (localStorage.getItem('signedIn') == 'true' ){
            threadForm.style.display = 'flex';
        } else{
            console.log('nope');
            accountWarning.innerHTML = "You need to be signed in to create a thread."
        }
    } else { 
        threadForm.style.display = 'none';
    } 
});