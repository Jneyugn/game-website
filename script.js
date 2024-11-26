
class Game {
    constructor(title, imageURL, genre, rating){
        this.title = title;
        this.imageURL = imageURL;
        this.genre = genre;
        this.rating = rating;
    }
}

// Populate home page with games
let diablo4 = new Game('Diablo 4', 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2344520/capsule_616x353.jpg?t=1728494275', 'Action', 4);
let silentHill2 = new Game('Silent Hill 2', 'https://image.api.playstation.com/vulcan/ap/rnd/202404/2513/0c858140c6d66dd3536416181904b166835ace3edb0d5754.jpg', 'Horror', 5);
let wukong = new Game('Wukong', 'https://i.ytimg.com/vi/u83VdXAVq08/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDp4J1COPhZRAGM3Homl1lNPib5nQ', 'Action', 5);
let counterstrike2 = new Game('Counter Strike 2', 'https://i.wpimg.pl/1280x/filerepo.grupawp.pl/api/v1/display/embed/c59d0d77-ceb1-4e6b-a2fc-4871f9c02f4c', 'Action', 5);
let dota2 = new Game('Dota 2', 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/570/capsule_616x353.jpg?t=1731544174', 'Strategy', 4);
let callofduty = new Game('Call of Duty', 'https://cdn.mos.cms.futurecdn.net/AM8JZFgpsKnGquHkzQyL87.jpg', 'Action', 3);
let stardewValley = new Game('Stardew Valley', 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/413150/capsule_616x353.jpg?t=1711128146', 'Strategy', 5);
let baldurGate3 = new Game('Baldur Gate 3', 'https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/ba706e54d68d10a0eb6ab7c36cdad9178c58b7fb7bb03d28.png', 'Strategy', 5);
let warframe = new Game('Warframe', 'https://image.api.playstation.com/vulcan/ap/rnd/202410/0222/1f0f408f8702e6e8b4ac81a39422915e7899d274f59beafa.png', 'Action', 3);
let eldenRing = new Game('Elden Ring', 'https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/YMUoJUYNX0xWk6eTKuZLr5Iw.jpg', 'Action', 5);

// Initialize trending games
let trendingGames = [wukong, callofduty];
let trendingGamesDiv = document.getElementById('trending-games');
let trendingGamesDivChildren = trendingGamesDiv.getElementsByTagName('DIV');

// Go through games list and render the games images
for (let i = 0; i < trendingGamesDivChildren.length; i++){
    trendingGamesDivChildren[i].getElementsByTagName('IMG')[0].src = trendingGames[i].imageURL;
    trendingGamesDivChildren[i].getElementsByTagName('h3')[0].innerHTML = trendingGames[i].title;
    trendingGamesDivChildren[i].getElementsByTagName('p')[0].innerHTML = trendingGames[i].rating;
}

