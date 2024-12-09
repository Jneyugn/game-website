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
let userName = document.getElementById('username');
let postBody = document.getElementById('body');

userName.innerHTML = game.posts[postID].username;
postBody.innerHTML = game.posts[postID].body;
