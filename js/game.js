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

// genre styles
let action = {      
    headerShadow: '0px 5px 10px 0px rgb(255, 85, 0)',
    footerShadow: '0px -5px 10px 1px rgb(255, 85, 0)', 
    threadBorder: '3px solid rgb(255, 85, 0)',
    gameContentBorder: '5px solid rgb(255, 85, 0)',
    threadHoverShadow: '10px 10px 15px rgb(255, 85, 0)'
}

let horror = {
    headerShadow: '0px 5px 10px 0px rgb(255, 0, 0)',
    footerShadow: '0px -5px 10px 1px rgb(255, 0, 0)', 
    threadBorder: '3px solid rgb(255, 0, 0)',
    gameContentBorder: '5px solid rgb(255, 0, 0)',
    threadHoverShadow: '10px 10px 15px rgb(255, 0, 0)'
}

let strategy =  {
    headerShadow: '0px 5px 10px 0px rgb(0, 0, 165)',
    footerShadow: '0px -5px 10px 1px rgb(0, 0, 165)', 
    threadBorder: '3px solid rgb(0, 0, 165)',
    gameContentBorder: '5px solid rgb(0, 0, 165)',
    threadHoverShadow: '10px 10px 15px rgb(0, 0, 165)'
}

let adventure = {
    headerShadow: '0px 5px 10px 0px rgb(0, 128, 0)',
    footerShadow: '0px -5px 10px 1px rgb(0, 128, 0)', 
    threadBorder: '3px solid rgb(0, 128, 0)',
    gameContentBorder: '5px solid rgb(0, 128, 0)',
    threadHoverShadow: '10px 10px 15px rgb(0, 128, 0)'
}

let simulation = {
    headerShadow: '0px 5px 10px 0px rgb(120, 0, 0)',
    footerShadow: '0px -5px 10px 1px rgb(120, 0, 0)', 
    threadBorder: '3px solid rgb(120, 0, 0)',
    gameContentBorder: '5px solid rgb(120, 0, 0)',
    threadHoverShadow: '10px 10px 15px rgb(120, 0, 0)'
}

let rpg = {
    headerShadow: '0px 5px 10px 0px rgb(102, 0, 175)',
    footerShadow: '0px -5px 10px 1px rgb(102, 0, 175)', 
    threadBorder: '3px solid rgb(102, 0, 175)',
    gameContentBorder: '5px solid rgb(102, 0, 175)',
    threadHoverShadow: '10px 10px 15px rgb(102, 0, 175)'
}

let sportsRacing = { 
    headerShadow: '0px 5px 10px 0px  rgb(0, 0, 255)',
    footerShadow: '0px -5px 10px 1px  rgb(0, 0, 255)', 
    threadBorder: '3px solid  rgb(0, 0, 255)',
    gameContentBorder: '5px solid  rgb(0, 0, 255)',
    threadHoverShadow: '10px 10px 15px  rgb(0, 0, 255)'
}

let boxShadowValues = [action, horror, strategy, adventure, simulation, rpg, sportsRacing];

//implement style values based on genre
let styles;

switch (gameToDisplay.genre){
    case 'Action':
        styles = boxShadowValues[0];
        break;
    case 'Horror':
        styles = boxShadowValues[1];
        break;
    case 'Strategy':
        styles = boxShadowValues[2];
        break;
    case 'Adventure':
        styles = boxShadowValues[3];
        break;
    case 'Simulation':
        styles = boxShadowValues[4];
        break;
    case 'RPG':
        styles = boxShadowValues[5];
        break;
    case 'Sports/Racing':
        styles = boxShadowValues[6];
        break;
    default:
}
    
//header and footer styles (box-shadow)
document.querySelector('header').style.boxShadow = styles.headerShadow;
document.querySelector('footer').style.boxShadow = styles.footerShadow;

// game content styles
document.querySelector('#game-content').style.border = styles.gameContentBorder;

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

//thread and game-content border styles
let allThreads = document.querySelectorAll('.thread');

for (const thread of allThreads){
    thread.style.border = styles.threadBorder;
    //thread hover effect
    thread.addEventListener('mouseenter', () => {
        thread.style.boxShadow = styles.threadHoverShadow;
    });
    thread.addEventListener('mouseleave', () => {
        thread.style.boxShadow = '';
    });
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
    postWarning.innerHTML = '';
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