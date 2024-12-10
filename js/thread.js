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
        }
        else{
            accountWarning.innerHTML = "You need to be signed in to reply."
        }
    } else if (replyForm.style.display === 'none') { 
        if (localStorage.getItem('signedIn') && localStorage.getItem('signedIn') === 'true' ){
            replyContent.value = '';
            replyForm.style.display = 'flex';
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
        postWarning.innerHTML = "You can't post an empty thread";
    } else{
        postWarning.innerHTML = "";
        /*let createdThread = new Post(userName, true,threadBody);
        gameToDisplayObject.createPost(createdThread);
        gameToDisplay.posts = gameToDisplayObject.posts;
        localStorage.setItem(gameToDisplayTitle, JSON.stringify(gameToDisplay));
        window.location.reload();*/
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
    deleteButton.addEventListener('click', function(event){
        game.posts.splice(postID, 1);
        localStorage.setItem(game.title, JSON.stringify(game));
        window.location.href = 'game.html';
    });
}
