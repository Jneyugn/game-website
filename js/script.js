import { Game } from "./classes.js";
import { Post } from "./classes.js";

// -------------------- Populate home page with games -------------------------------- 

// Trending
let diablo4 = new Game('Diablo 4', 'images/games/diablo4.jpg', 'Action', 4, 'Diablo IV is the ultimate action-RPG experience with endless evil to slaughter, countless abilities to master, nightmarish dungeons, and legendary loot. Embark on the epic campaign solo or with friends, meeting memorable characters through a gripping story in a beautifully dark world, or explore an expansive end game: battle iconic bosses for powerful loot, fight back the encroaching onslaught of Hell in Helltides, master the Forge to create your ultimate weapons and progress powerful characters, with cross-play and cross-progression on all available platforms.');
let wukong = new Game('Wukong', 'images/games/wukong.jpg', 'Action', 5, 'Black Myth: Wukong is an action RPG rooted in Chinese mythology. The story is based on Journey to the West, one of the Four Great Classical Novels of Chinese literature. You shall set out as the Destined One to venture into the challenges and marvels ahead, to uncover the obscured truth beneath the veil of a glorious legend from the past.');
let counterstrike2 = new Game('Counter Strike 2', 'images/games/counterstrike2.jpg', 'Action', 5, 'For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS story is about to begin. This is Counter-Strike 2.');
let dota2 = new Game('Dota 2', 'images/games/dota2.jpg', 'Strategy', 4, "Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if it's their 10th hour of play or 1,000th, there's always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has truly taken on a life of its own.");
let callofduty = new Game('Call of Duty', 'images/games/callofduty.jpg', 'Action', 3, "Developed by Treyarch and Raven, Black Ops 6 is a spy action thriller set in the early 90s, a period of transition and upheaval in global politics, characterized by the end of the Cold War and the rise of the United States as a single superpower. With a mind-bending narrative, and unbound by the rules of engagement, this is signature Black Ops.");
let baldurGate3 = new Game('Baldur Gate 3', 'images/games/baldursgate3.jpg', 'Strategy', 5, "Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. Mysterious abilities are awakening inside you, drawn from a mind flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil. From the creators of Divinity: Original Sin 2 comes a next-generation RPG, set in the world of Dungeons & Dragons.");
let stalker2 = new Game('Stalker 2', 'images/games/stalker2.jpg', 'Action', 3, "Discover the vast Chornobyl Exclusion Zone full of dangerous enemies, deadly anomalies and powerful artifacts. Unveil your own epic story as you make your way to the Heart of Chornobyl. Make your choices wisely, as they will determine your fate in the end.");
let balatro = new Game('Balatro', 'images/games/balatro.jpg', 'Strategy', 4, "The poker roguelike. Balatro is a hypnotically satisfying deckbuilder where you play illegal poker hands, discover game-changing jokers, and trigger adrenaline-pumping, outrageous combos.");

let trendingGames = [wukong, callofduty, diablo4, counterstrike2, dota2, baldurGate3, stalker2, balatro];
let trendingGamesDiv = document.getElementById('trending-games');
let trendingGamesDivChildren = trendingGamesDiv.getElementsByTagName('DIV');

let diablo4Review = new Post('RandomUsername', false,'Unfortunately, the creators of Diablo IV decided to take the lazy route with using level scaling. This makes leveling up feel meaningless and legendary gear spam is dull. All monsters are about equally challenging and you lose the fun and excitement of going into an area with deadly monsters... Instead there is a sort of difficulty changing systems which is arcadish and lame.');
diablo4.createPost(diablo4Review);
let wukongReview = new Post('RandomUsername', false, 'Serious game of the year contender. Outstanding visuals, packed with mechanics, keeps attention from start to finish. Very amazing art direction and story telling, never read Journey to the west by the way, so it was compelling even for someone who does not know what the story is about.');
wukong.createPost(wukongReview);
let codReview = new Post('RandomUsername', false, "Loved the Campaign, have a love/hate relationship with Multiplayer (especially if I'm grinding camos), and I have really enjoyed zombies so far.");
callofduty.createPost(codReview);
let bg3Review = new Post('RandomUsername', false, "Great game! This is an immersive game, covering a wide-array of classic D&D genres/locations, and mythos! This is, by far, one of the best games I've ever played!");
baldurGate3.createPost(bg3Review);

// Action
let warframe = new Game('Warframe', 'images/games/warframe.jpg', 'Action', 3, "Confront warring factions throughout a sprawling interplanetary system as you follow the guidance of the mysterious Lotus and level up your Warframe, build an Arsenal of destructive firepower, and realize your true potential across massive open worlds in this thrilling, genre-defining third-person combat experience.");
let eldenRing = new Game('Elden Ring', 'images/games/eldenring.jpg', 'Action', 5, "The critically acclaimed fantasy action RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.");
let readyornot = new Game('Ready or Not', 'images/games/readyornot.jpg', 'Action', 3, "Ready or Not is an intense, tactical, first-person shooter that depicts a modern-day world in which SWAT police units are called to defuse hostile and confronting situations.");
let apexLegends = new Game('Apex Legends', 'images/games/apexlegends.jpg', 'Action', 3, "Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale.");
let remnant2 = new Game('Remnant 2', 'images/games/remnant2.jpg', 'Action', 4, "REMNANT II pits survivors of humanity against new deadly creatures and god-like bosses across terrifying worlds. Play solo or co-op with two other friends to explore the depths of the unknown to stop an evil from destroying reality itself.");
let helldivers2 = new Game('Helldivers 2', 'images/games/helldivers2.jpg', 'Action', 4, "The Galaxy’s Last Line of Offence. Enlist in the Helldivers and join the fight for freedom across a hostile galaxy in a fast, frantic, and ferocious third-person shooter.");
let onceHuman = new Game('Once Human', 'images/games/oncehuman.jpg', 'Action', 2, "Once Human is a multiplayer open-world survival game set in a strange, post-apocalyptic future. Unite with friends to fight monstrous enemies, uncover secret plots, compete for resources, and build your own territory. Once, you were merely human. Now, you have the power to remake the world.");
let pubg = new Game('PUBG', 'images/games/pubg.jpg', 'Action', 3, "Play PUBG: BATTLEGROUNDS for free. Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds.");

let actionGames = [warframe, eldenRing, readyornot, apexLegends, remnant2, helldivers2, onceHuman, pubg];
let actionGamesDiv = document.getElementById('action-games');
let actionGamesDivChildren = actionGamesDiv.getElementsByTagName('DIV');

let eldenRingReview = new Post('RandomUsername', false, "I really do think this is one of the best games ever made, and it's only gotten better with time. Is it perfect? No, nothing is. While it has countless flaws, its an absolute masterpiece.");
eldenRing.createPost(eldenRingReview);
let readyReview = new Post('RandomUsername', false, "Game is so realistic... Sometimes very eerie to play.. Such a great game, I highly recommend it! Along with the DLC!");
readyornot.createPost(readyReview);
let onceHumanReview = new Post('RandomUsername', false, "Fun survival game if you like a bit of sci-fi/scp mix in. love the game and i recommend it to any survival game lover!! Plus game is free to play and not pay to win!!");
onceHuman.createPost(onceHumanReview);

// Horror
let sonsoftheforest = new Game('Sons of the Forest', 'images/games/sonsoftheforest.jpg', 'Horror', 3, "Sent to find a missing billionaire on a remote island, you find yourself in a cannibal-infested hellscape. Craft, build, and struggle to survive, alone or with friends, in this terrifying new open-world survival horror simulator.");
let vRising = new Game('V Rising', 'images/games/vrising.jpg', 'Horror', 4, "Awaken as a Vampire. Hunt for blood in nearby settlements to regain your strength and evade the scorching sun to survive. Raise your castle and thrive in an ever-changing, open world full of mystery. Gain allies online and conquer the land of the living.");
let deadbydaylight = new Game('Dead by Daylight', 'images/games/deadbydaylight.jpg', 'Horror', 4, "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.");
let phasmophobia = new Game('Phasmophobia', 'images/games/phasmophobia.jpg', 'Horror', 3, "Phasmophobia is a 4 player online co-op psychological horror. Paranormal activity is on the rise and it’s up to you and your team to use all the ghost-hunting equipment at your disposal in order to gather as much evidence as you can.");
let lethalCompany = new Game('Lethal Company', 'images/games/lethalcompany.jpg', 'Horror', 4, "A co-op horror about scavenging at abandoned moons to sell scrap to the Company.");
let vampyr = new Game('Vampyr', 'images/games/vampyr.jpg', 'Horror', 3, "London, 1918. You are newly-turned Vampyr Dr. Jonathan Reid. As a doctor, you must find a cure to save the city’s flu-ravaged citizens. As a Vampyr, you are cursed to feed on those you vowed to heal.");
let untilDawn = new Game('Until Dawn', 'images/games/untildawn.jpg', 'Horror', 3, "Rebuilt and enhanced for PC – Until Dawn invites you to relive the nightmare, and immerse yourself in a gripping slasher horror where every decision can make the difference between life and death.");
let inscryption = new Game('Inscryption', 'images/games/inscryption.jpg', 'Horror', 5, "Inscryption is an inky black card-based odyssey that blends the deckbuilding roguelike, escape-room style puzzles, and psychological horror into a blood-laced smoothie. Darker still are the secrets inscrybed upon the cards...");

let horrorGames = [sonsoftheforest, vRising, deadbydaylight, phasmophobia, lethalCompany, vampyr, untilDawn, inscryption];
let horrorGamesDiv = document.getElementById('horror-games');
let horrorGamesDivChildren = horrorGamesDiv.getElementsByTagName('DIV');

let deadReview = new Post('RandomUsername', false, "A really fun PvP horror game, especially if you’re a fan of the genre. The only catch is that unlocking all the perks and characters takes a serious time commitment. It’s definitely a grind, and it can get a bit overwhelming, but if you’re willing to put the time in, it’s totally worth it.");
deadbydaylight.createPost(deadReview);
let lethalReview = new Post('RandomUsername', false, "Best coop-horror game i've ever played, its very fun if you play with friends. also the graphics are very cool");
lethalCompany.createPost(lethalReview);
let untilDawnReview = new Post('RandomUsername', false, "Until Dawn is an absolute masterpiece. From the moment the game starts, it sucks you in with its creepy atmosphere and insane attention to detail. The graphics are top-notch, and the facial animations are so good that you feel like you're watching an intense horror movie.");
untilDawn.createPost(untilDawnReview);

// Strategy
let heartsofiron4 = new Game('Hearts of Iron 4', 'images/games/heartsofiron4.jpg', 'Strategy', 4, "Victory is at your fingertips! Your ability to lead your nation is your supreme weapon, the strategy game Hearts of Iron IV lets you take command of any nation in World War II; the most engaging conflict in world history.");
let bloonstd6 = new Game('Bloonstd 6', 'images/games/bloonstd6.jpg', 'Strategy', 2, "The Bloons are back and better than ever! Get ready for a massive 3D tower defense game designed to give you hours and hours of the best strategy gaming available.");
let ageofempires2 = new Game('Age of Empires 2', 'images/games/ageofempires2.jpg', 'Strategy', 5, "42 Civilizations, 229 Campaign Missions, Singleplayer, Co-Op, Multiplayer, In-Game Editor, Mods, Cross-play...It is good to be the king.");
let kingdomtwocrowns = new Game('Kingdom Two Crowns', 'images/games/kingdomtwocrowns.jpg', 'Strategy', 3, "In Kingdom Two Crowns, players must work in the brand-new solo or co-op campaign mode to build their kingdom and secure it from the threat of the Greed. Experience new technology, units, enemies, mounts, and secrets in the next evolution of the award-winning micro strategy franchise!");
let stellaris = new Game('Stellaris', 'images/games/stellaris.jpg', 'Strategy', 4, "Explore a galaxy full of wonders in this sci-fi grand strategy game from Paradox Development Studios. Interact with diverse alien races, discover strange new worlds with unexpected events and expand the reach of your empire. Each new adventure holds almost limitless possibilities.");
let europaunversalis4 = new Game('Europa Unversalis 4', 'images/games/europaunversalis4.jpg', 'Strategy', 3, "Rule your land and dominate the world with unparalleled freedom, depth and historical accuracy. Write a new history of the world and build an empire for the ages.");
let totalwar3 = new Game('Total War 3', 'images/games/totalwar3.jpg', 'Strategy', 5, "The cataclysmic conclusion to the Total War: WARHAMMER trilogy is here. Rally your forces and step into the Realm of Chaos, a dimension of mind-bending horror where the very fate of the world will be decided. Will you conquer your Daemons… or command them?");
let civ5 = new Game('Civilisation 5', 'images/games/civ5.jpg', 'Strategy', 4, "Become Ruler of the World by establishing and leading a civilization from the dawn of man into the space age: Wage war, conduct diplomacy, discover new technologies, go head-to-head with some of history’s greatest leaders and build the most powerful empire the world has ever known.");

let strategyGames = [heartsofiron4, bloonstd6, ageofempires2, kingdomtwocrowns, stellaris, europaunversalis4, totalwar3, civ5];
let strategyGamesDiv = document.getElementById('strategy-games');
let strategyGamesDivChildren = strategyGamesDiv.getElementsByTagName('DIV');

let heartsReview = new Post('RandomUsername', false, "Playing this game feels like rewriting history. It’s like a history simulator where you can test any wild scenario you can imagine. For example, you can choose France, become Fascist, ally with Germany, and relive World War II with a completely new outcome!");
heartsofiron4.createPost(heartsReview);
let stellarisReview = new Post('RandomUsername', false, "I've been playing 4X games for 30 years starting with the original Master of Orion. The variability in each game and the evolving updates just make this one of the best 4X games ever made. Such a fun, great game.");
stellaris.createPost(stellarisReview);
let totalWarReview = new Post('RandomUsername', false, "This may be the greatest game of all time: a slightly wonky improvement on TW:WH2 with an expanded universe, a real appreciation for the lore and great potential. ");
totalwar3.createPost(totalWarReview);

// Adventure
let uncharted = new Game('Uncharted', 'images/games/uncharted.jpg', 'Adventure', 4, "Play as Nathan Drake and Chloe Frazer in their own standalone adventures as they confront their pasts and forge their own legacies. ");
let monsterHunter = new Game('Monster Hunter', 'images/games/monsterhunter.jpg', 'Adventure', 3, "Welcome to a new world! In Monster Hunter: World, the latest installment in the series, you can enjoy the ultimate hunting experience, using everything at your disposal to hunt monsters in a new world teeming with surprises and excitement.");
let gta5 = new Game('Grand Theft Auto 5', 'images/games/gta5.jpg', 'Adventure', 5, "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.");
let newWorld = new Game('New World', 'images/games/newworld.jpg', 'Adventure', 2, "Experience a thrilling action RPG set on the supernatural island of Aeternum. Forge your destiny on an adventure filled with danger and opportunity.");
let ghostoftsushima = new Game('Ghost of Tsushima', 'images/games/ghostoftsushima.jpg', 'Adventure', 4, "A storm is coming. Venture into the complete Ghost of Tsushima DIRECTOR’S CUT on PC; forge your own path through this open-world action adventure and uncover its hidden wonders.");
let theFirstDescendant = new Game('The First Descendant', 'images/games/thefirstdescendant.jpg', 'Adventure', 2, "The First Descendant is a third-person looter shooter powered by Unreal Engine 5. Become a Descendant. Fight for the survival of humanity. Descendants have unique abilities to tackle both solo and co-op missions. ");
let rust = new Game('Rust', 'images/games/rust.jpg', 'Adventure', 3, "The only aim in Rust is to survive. Everything wants you to die - the island’s wildlife, other inhabitants, the environment, and other survivors. Do whatever it takes to last another night.");
let AcMirage = new Game('AC Mirage', 'images/games/acmirage.jpg', 'Adventure', 4, "Experience the story of Basim, a cunning street thief with nightmarish visions, seeking answers and justice as he navigates the bustling streets of ninth-century Baghdad.");

let adventureGames = [uncharted, monsterHunter, gta5, newWorld, ghostoftsushima, theFirstDescendant, rust, AcMirage];
let adventureGamesDiv = document.getElementById('adventure-games');
let adventureGamesDivChildren = adventureGamesDiv.getElementsByTagName('DIV');

let UnchartedReview = new Post('RandomUsername', false, "The game is one of the most beautiful and well rendered things I have ever played. I wish I had a better PC to run this thing on its highest settings, but even when put lower, it shines. I played through the entire game and its standalone DLC, and I give it a solid 9/10.");
uncharted.createPost(UnchartedReview);
let NewWorldReview = new Post('RandomUsername', false, "was fun when it came out, first game of its kind with immersive mmo feel plus the crafting and gathering skills. the game has never felt the same after countless attempts to 'revive' it.");
newWorld.createPost(NewWorldReview);
let DescendantReview = new Post('RandomUsername', false, "Monotonous and grindy, this game will have you doing the same 3 things over and over again forever. The activities aren't fun and the rewards aren't worth it.");
theFirstDescendant.createPost(DescendantReview);

// Simulation
let stardewValley = new Game('Stardew Valley', 'images/games/stardewvalley.jpg', 'Simulation', 5, "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?");
let powerwash = new Game('Power Wash Simulator', 'images/games/powerwash.jpg', 'Simulation', 4, "Release the Pressure with PowerWash Simulator! Wash away your worries with the soothing sounds of high-pressure water. Fire up your power washer and blast away every speck of dirt and grime you can find, all with the simple satisfaction of power-washing to a sparkling finish.");
let garrysmod = new Game('Garrys Mod', 'images/games/garrysmod.jpg', 'Simulation', 3, "Garry's Mod is a physics sandbox. There aren't any predefined aims or goals. We give you the tools and leave you to play.");
let worldofwarships = new Game('World of Warships', 'images/games/worldofwarships.jpg', 'Simulation', 2, "Immerse yourself in thrilling naval battles and assemble an armada of over 600 ships from the first half of the 20th century — from stealthy destroyers to gigantic battleships. Change the look of your ship, choose upgrades to suit your play style, and go into battle with other players!");
let eurotruck2 = new Game('Euro Truck Simulator 2', 'images/games/eurotruck2.jpg', 'Simulation', 5, "Travel across Europe as king of the road, a trucker who delivers important cargo across impressive distances! With dozens of cities to explore, your endurance, skill and speed will all be pushed to their limits.");
let farming25 = new Game('Farming Simulator 25', 'images/games/farmingsim25.jpg', 'Simulation', 5, "Farming Simulator 25 invites you to join the rewarding farm life, single-handedly or cooperatively in multiplayer. This Farm is Your Farm!");
let dayZ = new Game('DayZ', 'images/games/dayz.jpg', 'Simulation', 2, "How long can you survive a post-apocalyptic world? A land overrun with an infected zombie population, where you compete with other survivors for limited resources. Will you team up with strangers and stay strong together? Or play as a lone wolf to avoid betrayal? This is DayZ – this is your story.");
let sims4 = new Game('The Sims 4', 'images/games/sims4.jpg', 'Simulation', 3, "Play with life and discover the possibilities. Unleash your imagination and create a world of Sims that’s wholly unique. Explore and customize every detail from Sims to homes–and much more.");

let simGames = [stardewValley, powerwash, garrysmod, worldofwarships, eurotruck2, farming25, dayZ, sims4];
let simGamesDiv = document.getElementById('simulation-games');
let simGamesDivChildren = simGamesDiv.getElementsByTagName('DIV');

let stardewReview = new Post('RandomUsername', false, "This is the perfect slow and cozy game with the right amount of excitement. You can take it slow and build your farm and then gradually incorporate missions, towns folk relationships and journeys. It's easy to play this game for hours on end and watch your empire grow.");
stardewValley.createPost(stardewReview);
let eurotruckReview = new Post('RandomUsername', false, "this game is awesome! deserved all the money i paid! i recommend if you like driving and great graphics, great roads, interior, everything is great!");
eurotruck2.createPost(eurotruckReview);
let dayZReview = new Post('RandomUsername', false, "Playing on official server is a struggle, it's infested with cheaters. Sad, the game would be great if not that");
dayZ.createPost(dayZReview);

// Role-playing
let metaphor = new Game('Metaphor', 'images/games/metaphor.jpg', 'RPG', 5, "The throne sits empty after the king’s assassination. With no heirs, the will of the late king decrees that the next monarch will be elected by the people, & thus begins your fight for the throne..");
let finalfantasy7 = new Game('Final Fantasy 7', 'images/games/ff7.jpg', 'RPG', 5, "The RPG classic FINAL FANTASY VII returns to PC, now with brand new online features!");
let dyingLight2 = new Game('Dying Light 2', 'images/games/dyinglight2.jpg', 'RPG', 2, "Humanity is fighting a losing battle against the virus. Experience a post-apocalyptic open world overrun by hordes of zombies, where your parkour and combat skills are key to survival. Traverse the City freely during the day, but watch the monsters take over during the night.");
let blackDesert = new Game('Black Desert', 'images/games/blackdesert.jpg', 'RPG', 3, "Played by over 20 million Adventurers - Black Desert Online is an open-world, action MMORPG. Experience intense, action-packed combat, battle massive world bosses, fight alongside friends to siege and conquer castles, and train in professions such as fishing, trading, crafting, cooking, and more!");
let dragonAge = new Game('Dragon Age', 'images/games/dragonage.jpg', 'RPG', 2, "Unite the Veilguard and defy the gods in Dragon Age™: The Veilguard, an immersive single-player RPG where you become the leader others believe in.");
let AcValhalla = new Game('AC Valhalla', 'images/games/valhalla.jpg', 'RPG', 4, "Become a legendary Viking on a quest for glory. Raid your enemies, grow your settlement, and build your political power.");
let pathofexile = new Game('Path of Exile', 'images/games/poe.jpg', 'RPG', 5, "You are an Exile, struggling to survive on the dark continent of Wraeclast, as you fight to earn power that will allow you to exact your revenge against those who wronged you. Path of Exile is an online Action RPG set in a dark fantasy world.");
let fallout76 = new Game('Fallout 76', 'images/games/fallout76.jpg', 'RPG', 1, "Bethesda Game Studios welcome you to Fallout 76. Twenty-five years after the bombs fall, you and your fellow Vault Dwellers emerge into post-nuclear America. Explore a vast wasteland in this open-world multiplayer addition to the Fallout story.");

let rpgGames = [metaphor, finalfantasy7, dyingLight2, blackDesert, dragonAge, AcValhalla, pathofexile, fallout76];
let rpgGamesDiv = document.getElementById('rpg-games');
let rpgGamesDivChildren = rpgGamesDiv.getElementsByTagName('DIV');

let dyingLightReview = new Post('RandomUsername', false, "Dying Light 2 is an absolutely thrilling open-world survival game that takes everything fans loved about the first title and amplifies it to new heights. From the moment you step into the shoes of Aiden Caldwell, the game's protagonist, you’re instantly immersed in a world brimming with danger, choices, and breathtaking freedom.");
dyingLight2.createPost(dyingLightReview);
let valhallaReview = new Post('RandomUsername', false, "Assassin's Creed Valhalla offers an immersive experience with its rich storyline and extensive playtime. The graphics are stunning, bringing the Viking world to life in incredible detail.");
AcValhalla.createPost(valhallaReview);
let poeReview = new Post('RandomUsername', false, "most enjoyable. reminds me of older games I used to play but has a nice enhanced play-style.");
pathofexile.createPost(poeReview);

// Sports/Racing
let nba2k25 = new Game('NBA 2k25', 'images/games/nba.jpg', 'Sports/Racing', 3, "Command every court with authenticity and realism Powered by ProPLAY™, giving you ultimate control over how you play in NBA 2K25. Define your legacy in MyCAREER, MyTEAM, MyNBA, and The W.");
let footballManager = new Game('Football Manager', 'images/games/footballmanager.jpg', 'Sports/Racing', 2, "Welcome to a new era of football management. Create iconic moments in your own football universe where only you define your destiny.");
let forzaHorizon5 = new Game('Forza Horizon 5', 'images/games/forza.jpg', 'Sports/Racing', 5, "Explore the vibrant open world landscapes of Mexico with limitless, fun driving action in the world’s greatest cars. Join a thrilling game of chase with our new 5v1 Multiplayer Experience: Hide & Seek.");
let carXstreet = new Game('Car X Street', 'images/games/car.jpg', 'Sports/Racing', 1, "Conquer mountain roads, highways, and city streets. Build your dream car with detailed tuning that unleashes the potential of “CarX Technology”© physics. Take part in thrilling races, enjoying realistic gameplay and dynamic driving.");
let fishingPlanet = new Game('Fishing Planet', 'images/games/fishing.jpg', 'Sports/Racing', 4, "Fishing Planet® is a free-to-play and highly realistic first-person online multiplayer fishing simulator. Developed by avid fishing enthusiasts to bring you the full thrill of actual angling on your PC.");
let assettoCorsa = new Game('Assetto Corsa', 'images/games/assetto.jpg', 'Sports/Racing', 5, "Assetto Corsa v1.16 introduces the new Laguna Seca laser-scanned track, 7 new cars among which the eagerly awaited Alfa Romeo Giulia Quadrifoglio! Check the changelog for further info!");
let need4speed = new Game('Need for Speed', 'images/games/need4speed.jpg', 'Sports/Racing', 3, "Hustle by day and risk it all at night in Need for Speed™ Heat Deluxe Edition, a white-knuckle street racer, where the lines of the law fade as the sun starts to set.");
let golf = new Game('Golf with your Friends', 'images/games/golf.jpg', 'Sports/Racing', 1, "Why have friends if not to play Golf... With Your Friends! Nothing is out of bounds as you take on courses filled with fast paced, exciting, simultaneous mini golf for up to 12 players!");

let sportsRacingGames = [nba2k25, footballManager, forzaHorizon5, carXstreet, fishingPlanet, assettoCorsa, need4speed, golf];
let sportsRacingGamesDiv = document.getElementById('recreation-games');
let sportsRacingGamesDivChildren = sportsRacingGamesDiv.getElementsByTagName('DIV');

let nbaReview = new Post('RandomUsername', false, "horrible optimization, frequent crashes and freezes with tons of technical issues, how do you guys manage to make the same game ever year, but it gets worse every year? Would not suggest buying at full price at all.");
nba2k25.createPost(nbaReview);
let forzaReview = new Post('RandomUsername', false, "For me it has to be the visuals in this game, the cars are great but when you turn up the settings to Ultra....going for a drive in any car in this game seems perfect!");
forzaHorizon5.createPost(forzaReview);
let fishingReview = new Post('RandomUsername', false, "A dream come true for fishing enthusiasts. The game nails realism with stunning graphics, lifelike fish behavior, and a deep selection of gear. ");
fishingPlanet.createPost(fishingReview);

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

let allGames = trendingGames.concat(actionGames, horrorGames, strategyGames, adventureGames, simGames, rpgGames, sportsRacingGames);
if (!localStorage.getItem(allGames[0].title)){
    for (const game of allGames){
        localStorage.setItem(game.title, JSON.stringify(game));
    }
}



let gameDivs = document.getElementsByClassName('game');
function storeClickedGame(game){
    let gameTitle = game.getElementsByTagName('H3')[0].innerHTML;
    localStorage.setItem('storedGame', gameTitle);
    window.location.href = 'game.html';
}
for (var i = 0; i < gameDivs.length; i++){
    let game = gameDivs[i];
    game.addEventListener('click', () => { storeClickedGame(game)});
}
