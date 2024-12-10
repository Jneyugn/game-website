import { Reply } from "./classes.js";

//--------------------Grab the game to which the thread belongs to, based on what the user clicked-----------------//
var game;
let gameTitle = localStorage.getItem('storedGame');
for (let i = 0; i < localStorage.length; i++){
    if (localStorage.key(i) == gameTitle){
        game = JSON.parse(localStorage.getItem(localStorage.key(i)));
        break;
    }
}

let postID = localStorage.getItem('savedPost');
let postUserName = document.getElementById('username');
let postBody = document.getElementById('body');

postUserName.innerHTML = game.posts[postID].username;
postBody.innerHTML = game.posts[postID].body;

let replyButton = document.getElementById('reply-btn');
let replyForm = document.getElementById('reply-thread');
let replyContent = document.getElementById('comment');
let submitButton = document.getElementById('submit-reply');
let closeButton = document.getElementById('close-form');
let accountWarning = document.getElementById('account-warning');
let postWarning = document.getElementById('post-warning');
let userAccount;
let replyUserName;
if (localStorage.getItem('userAccount')){
    userAccount = JSON.parse(localStorage.getItem('userAccount'));
    replyUserName = userAccount.username;
}

replyButton.addEventListener('click', function(event){
    event.preventDefault();
    if (!replyForm.getAttribute('style')){
        if (localStorage.getItem('signedIn') && localStorage.getItem('signedIn') === 'true')
        {
            replyContent.value = '';
            replyForm.style.display = 'flex';
            editWarning.innerHTML = '';
            editThread.style.display = 'none';
        }
        else{
            accountWarning.innerHTML = "You need to be signed in to reply."
        }
    } else if (replyForm.style.display === 'none') { 
        if (localStorage.getItem('signedIn') && localStorage.getItem('signedIn') === 'true' ){
            replyContent.value = '';
            replyForm.style.display = 'flex';
            editWarning.innerHTML = '';
            editThread.style.display = 'none';
        } else{
            accountWarning.innerHTML = "You need to be signed in to reply."
        }
    } 
});

closeButton.addEventListener('click', function(event){
    event.preventDefault();
    replyContent.value = '';
    postWarning.innerHTML = '';
    replyForm.style.display = 'none';
})

submitButton.addEventListener('click', function(event){
    event.preventDefault();
    var replyBody = replyContent.value;
    
    if (replyBody == '' || replyBody.trim().length == 0){
        postWarning.innerHTML = "You can't post an empty reply";
    } else{
        postWarning.innerHTML = "";
        const reply = new Reply(replyUserName, replyBody);
        if (!game.posts[postID].replies){
            game.posts[postID].replies = [];
        }
        game.posts[postID].replies.push(reply);
        localStorage.setItem(game.title, JSON.stringify(game));
        window.location.reload();
    }
});

var editButton;
var deleteButton;
let postButtons = document.getElementById('post-buttons');

if (game.posts[postID].editable && localStorage.getItem('signedIn') && localStorage.getItem('signedIn') === 'true'){
    editButton = document.createElement('button');
    editButton.classList.add('reply');
    let editButtonText = document.createTextNode('Edit');
    editButton.appendChild(editButtonText);
    postButtons.appendChild(editButton);

    deleteButton = document.createElement('button');
    deleteButton.classList.add('reply');
    let deleteButtonText = document.createTextNode('Delete');
    deleteButton.appendChild(deleteButtonText);
    postButtons.appendChild(deleteButton);
}

if (deleteButton){
    deleteButton.addEventListener('click', function(){
        game.posts.splice(postID, 1);
        localStorage.setItem(game.title, JSON.stringify(game));
        window.location.href = 'game.html';
    });
}

let editThread = document.getElementById('edit-thread');
let editContent = document.getElementById('edit-comment');
let editSave = document.getElementById('edit-save');
let editClose = document.getElementById('edit-close');

if (editButton){
    editButton.addEventListener('click', function(){
        if (!editThread.getAttribute('style') || editThread.style.display == 'none'){
            editContent.value = game.posts[postID].body;
            editThread.style.display = 'flex';
            replyContent.value = '';
            postWarning.innerHTML = '';
            replyForm.style.display = 'none';
        }
    });
}

let editWarning = document.getElementById('edit-warning');

editClose.addEventListener('click', function(){
    editWarning.innerHTML = '';
    editThread.style.display = 'none';
});

editSave.addEventListener('click', function(){
    let editValue = editContent.value;
    if (editValue == '' || editValue.trim().length == 0){
        editWarning.innerHTML = 'You can not leave the post blank';
    } else {
        game.posts[postID].body = editValue;
        localStorage.setItem(game.title, JSON.stringify(game));
        window.location.reload();
    }
});

let repliesSection = document.getElementById('thread-responses');
let threadReplies = game.posts[postID].replies;
let noComments = document.getElementById('no-comments');

if (threadReplies){
    if (threadReplies.length > 0){
        noComments.setAttribute('hidden', 'hidden');
        for (let i = threadReplies.length - 1; i >= 0; i-- ){

            const replyDiv = document.createElement('DIV');
            const infoDiv = document.createElement('DIV');
            const replyUsername = document.createElement('h4');
            const replyUsernameText = document.createTextNode(threadReplies[i].username);
            replyUsername.appendChild(replyUsernameText);
            replyUsername.classList.add('username')
            infoDiv.appendChild(replyUsername);
            replyDiv.appendChild(infoDiv);
        
            const replyBody = document.createElement('p');
            const replyBodyText = document.createTextNode(threadReplies[i].body);
            replyBody.appendChild(replyBodyText);
            replyBody.classList.add('comment');
            replyDiv.appendChild(replyBody);
            
            replyDiv.setAttribute('id', 'thread-comment');
            repliesSection.appendChild(replyDiv);
        }
    }

}