
class Game {
    constructor(title, image, genre, rating){
        this.title = title;
        this.image = image;
        this.genre = genre;
        this.rating = rating;
    }
}

// -------------------- Populate home page with games -------------------------------- 

// Trending
let diablo4 = new Game('Diablo 4', 'images/games/diablo4.jpg', 'Action', 4);
let wukong = new Game('Wukong', 'images/games/wukong.jpg', 'Action', 5);
let counterstrike2 = new Game('Counter Strike 2', 'images/games/counterstrike2.jpg', 'Action', 5);
let dota2 = new Game('Dota 2', 'images/games/dota2.jpg', 'Strategy', 4);
let callofduty = new Game('Call of Duty', 'images/games/callofduty.jpg', 'Action', 3);
let baldurGate3 = new Game('Baldur Gate 3', 'images/games/baldursgate3.jpg', 'Strategy', 5);
let stalker2 = new Game('Stalker 2', 'images/games/stalker2.jpg', 'Action', 3);
let balatro = new Game('Balatro', 'images/games/balatro.jpg', 'Strategy', 4);

let trendingGames = [wukong, callofduty, diablo4, counterstrike2, dota2, baldurGate3, stalker2, balatro];
let trendingGamesDiv = document.getElementById('trending-games');
let trendingGamesDivChildren = trendingGamesDiv.getElementsByTagName('DIV');

// Action
let warframe = new Game('Warframe', 'images/games/warframe.jpg', 'Action', 3);
let eldenRing = new Game('Elden Ring', 'images/games/eldenring.jpg', 'Action', 5);
let readyornot = new Game('Ready or Not', 'images/games/readyornot.jpg', 'Action', 3);
let apexLegends = new Game('Apex Legends', 'images/games/apexlegends.jpg', 'Action', 3);
let remnant2 = new Game('Remnant 2', 'images/games/remnant2.jpg', 'Action', 4);
let helldivers2 = new Game('Helldivers 2', 'images/games/helldivers2.jpg', 'Action', 2);
let onceHuman = new Game('Once Human', 'images/games/oncehuman.jpg', 'Action', 2);
let pubg = new Game('PUBG', 'images/games/pubg.jpg', 'Action', 1);

let actionGames = [warframe, eldenRing, readyornot, apexLegends, remnant2, helldivers2, onceHuman, pubg];
let actionGamesDiv = document.getElementById('action-games');
let actionGamesDivChildren = actionGamesDiv.getElementsByTagName('DIV');

// Horror
let sonsoftheforest = new Game('Sons of the Forest', 'images/games/sonsoftheforest.jpg', 'Horror', 3);
let vRising = new Game('V Rising', 'images/games/vrising.jpg', 'Horror', 4);
let deadbydaylight = new Game('Dead by Daylight', 'images/games/deadbydaylight.jpg', 'Horror', 4);
let phasmophobia = new Game('Phasmophobia', 'images/games/phasmophobia.jpg', 'Horror', 3);
let lethalCompany = new Game('Lethal Company', 'images/games/lethalcompany.jpg', 'Horror', 4);
let vampyr = new Game('Vampyr', 'images/games/vampyr.jpg', 'Horror', 3);
let untilDawn = new Game('Until Dawn', 'images/games/untildawn.jpg', 'Horror', 3);
let inscryption = new Game('Inscryption', 'images/games/inscryption.jpg', 'Horror', 5);

let horrorGames = [sonsoftheforest, vRising, deadbydaylight, phasmophobia, lethalCompany, vampyr, untilDawn, inscryption];
let horrorGamesDiv = document.getElementById('horror-games');
let horrorGamesDivChildren = horrorGamesDiv.getElementsByTagName('DIV');

// Strategy
let heartsofiron4 = new Game('Hearts of Iron 4', 'images/games/heartsofiron4.jpg', 'Strategy', 4);
let bloonstd6 = new Game('Bloonstd 6', 'images/games/bloonstd6.jpg', 'Strategy', 2);
let ageofempires2 = new Game('Age of Empires 2', 'images/games/ageofempires2.jpg', 'Strategy', 5);
let kingdomtwocrowns = new Game('Kingdom Two Crowns', 'images/games/kingdomtwocrowns.jpg', 'Strategy', 3);
let stellaris = new Game('Stellaris', 'images/games/stellaris.jpg', 'Strategy', 4);
let europaunversalis4 = new Game('Europa Unversalis 4', 'images/games/europaunversalis4.jpg', 'Strategy', 3);
let totalwar3 = new Game('Total War 3', 'images/games/totalwar3.jpg', 'Strategy', 5);
let civ5 = new Game('Civilisation 5', 'images/games/civ5.jpg', 'Strategy', 4);

let strategyGames = [heartsofiron4, bloonstd6, ageofempires2, kingdomtwocrowns, stellaris, europaunversalis4, totalwar3, civ5];
let strategyGamesDiv = document.getElementById('strategy-games');
let strategyGamesDivChildren = strategyGamesDiv.getElementsByTagName('DIV');

// Adventure
let uncharted = new Game('Uncharted', 'images/games/uncharted.jpg', 'Adventure', 4);
let monsterHunter = new Game('Monster Hunter', 'images/games/monsterhunter.jpg', 'Adventure', 3);
let gta5 = new Game('Grand Theft Auto 5', 'images/games/gta5.jpg', 'Adventure', 5);
let newWorld = new Game('New World', 'images/games/newworld.jpg', 'Adventure', 2);
let ghostoftsushima = new Game('Ghost of Tsushima', 'images/games/ghostoftsushima.jpg', 'Adventure', 4);
let theFirstDescendant = new Game('The First Descendant', 'images/games/thefirstdescendant.jpg', 'Adventure', 2);
let rust = new Game('Rust', 'images/games/rust.jpg', 'Adventure', 1);
let AcMirage = new Game('AC Mirage', 'images/games/acmirage.jpg', 'Adventure', 4);

let adventureGames = [uncharted, monsterHunter, gta5, newWorld, ghostoftsushima, theFirstDescendant, rust, AcMirage];
let adventureGamesDiv = document.getElementById('adventure-games');
let adventureGamesDivChildren = adventureGamesDiv.getElementsByTagName('DIV');

// Simulation
let stardewValley = new Game('Stardew Valley', 'images/games/stardewvalley.jpg', 'Simulation', 5);
let powerwash = new Game('Power Wash Simulator', 'images/games/powerwash.jpg', 'Simulation', 4);
let garrysmod = new Game('Garrys Mod', 'images/games/garrysmod.jpg', 'Simulation', 3);
let worldofwarships = new Game('World of Warships', 'images/games/worldofwarships.jpg', 'Simulation', 2);
let eurotruck2 = new Game('Euro Truck Simulator 2', 'images/games/eurotruck2.jpg', 'Simulation', 5);
let farming25 = new Game('Farming Simulator 25', 'images/games/farmingsim25.jpg', 'Simulation', 5);
let dayZ = new Game('DayZ', 'images/games/dayz.jpg', 'Simulation', 2);
let sims4 = new Game('The Sims 4', 'images/games/sims4.jpg', 'Simulation', 3);

let simGames = [stardewValley, powerwash, garrysmod, worldofwarships, eurotruck2, farming25, dayZ, sims4];
let simGamesDiv = document.getElementById('simulation-games');
let simGamesDivChildren = simGamesDiv.getElementsByTagName('DIV');

// Role-playing
let metaphor = new Game('Metaphor', 'images/games/metaphor.jpg', 'RPG', 5);
let finalfantasy7 = new Game('Final Fantasy 7', 'images/games/ff7.jpg', 'RPG', 5);
let dyingLight2 = new Game('Dying Light 2', 'images/games/dyinglight2.jpg', 'RPG', 2);
let blackDesert = new Game('Black Desert', 'images/games/blackdesert.jpg', 'RPG', 3);
let dragonAge = new Game('Dragon Age', 'images/games/dragonage.jpg', 'RPG', 2);
let AcValhalla = new Game('AC Valhalla', 'images/games/valhalla.jpg', 'RPG', 4);
let pathofexile = new Game('Path of Exile', 'images/games/poe.jpg', 'RPG', 5);
let fallout76 = new Game('Fallout 76', 'images/games/fallout76.jpg', 'RPG', 1);

let rpgGames = [metaphor, finalfantasy7, dyingLight2, blackDesert, dragonAge, AcValhalla, pathofexile, fallout76];
let rpgGamesDiv = document.getElementById('rpg-games');
let rpgGamesDivChildren = rpgGamesDiv.getElementsByTagName('DIV');

// Sports/Racing
let nba2k25 = new Game('NBA 2k25', 'images/games/nba.jpg', 'Sports/Racing', 3);
let footballManager = new Game('Football Manager', 'images/games/footballmanager.jpg', 'Sports/Racing', 2);
let forzaHorizon5 = new Game('Forza Horizon 5', 'images/games/forza.jpg', 'Sports/Racing', 5);
let carXstreet = new Game('Car X Street', 'images/games/car.jpg', 'Sports/Racing', 1);
let fishingPlanet = new Game('Fishing Planet', 'images/games/fishing.jpg', 'Sports/Racing', 4);
let assettoCorsa = new Game('Assetto Corsa', 'images/games/assetto.jpg', 'Sports/Racing', 5);
let need4speed = new Game('Need for Speed', 'images/games/need4speed.jpg', 'Sports/Racing', 3);
let golf = new Game('Golf with your Friends', 'images/games/golf.jpg', 'Sports/Racing', 1);

let sportsRacingGames = [nba2k25, footballManager, forzaHorizon5, carXstreet, fishingPlanet, assettoCorsa, need4speed, golf];
let sportsRacingGamesDiv = document.getElementById('recreation-games');
let sportsRacingGamesDivChildren = sportsRacingGamesDiv.getElementsByTagName('DIV');

// ----------------------------------- Render games ------------------------------------------------

// Function to go through games list and render the games images
function RenderGames (divList, gamesList){
    for (let i = 0; i < divList.length; i++){
        divList[i].getElementsByTagName('IMG')[0].src = gamesList[i].image;
        divList[i].getElementsByTagName('IMG')[0].alt = gamesList[i].title;
        divList[i].getElementsByTagName('h3')[0].innerHTML = gamesList[i].title;
        divList[i].getElementsByTagName('p')[0].innerHTML = gamesList[i].rating;
    }
}

// Call the render function on all lists
RenderGames(trendingGamesDivChildren, trendingGames);
RenderGames(actionGamesDivChildren, actionGames);
RenderGames(horrorGamesDivChildren, horrorGames);
RenderGames(strategyGamesDivChildren, strategyGames);
RenderGames(adventureGamesDivChildren, adventureGames);
RenderGames(simGamesDivChildren, simGames);
RenderGames(rpgGamesDivChildren, rpgGames);
RenderGames(sportsRacingGamesDivChildren, sportsRacingGames);