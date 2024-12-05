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