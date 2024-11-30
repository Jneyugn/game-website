let imageGrid = document.getElementById('img-grid');
let gridImages = imageGrid.getElementsByTagName('IMG');

let images = ['acmirage.jpg', 'ageofempires2.jpg', 'apexlegends.jpg', 'assetto.jpg', 'blackdesert.jpg', 'dayz.jpg', 'ff7.jpg', 'metaphor.jpg', 'newworld.jpg', 'rust.jpg', 'need4speed.jpg', 'fallout76.jpg', 'ghostoftsushima.jpg', 'baldursgate3.jpg', 'callofduty.jpg', 'counterstrike2.jpg', 'diablo4.jpg', 'eldenring.jpg', 'fishing.jpg', 'helldivers2.jpg', 'nba.jpg', 'poe.jpg', 'pubg.jpg', 'remnant2.jpg', 'stalker2.jpg', 'stellaris.jpg', 'wukong.jpg', 'warframe.jpg', 'valhalla.jpg', 'totalwar3.jpg', 'untildawn.jpg', 'sims4.jpg', 'uncharted.jpg', 'inscryption.jpg'];

let activeImageCount = 0;

function assignImages(){

    let usedImages = [];

    for (image of gridImages){

        if (image.classList != 'active'){

           if (Math.random() < 0.8 && activeImageCount < 5){

                let tryAgain = true;
    
                do{
                    let imageToUse = images[Math.floor(Math.random() * images.length)];
                    if (!usedImages.includes(imageToUse)){
                        image.src = `images/games/${imageToUse}`;
                        image.classList.add('active');
                        activeImageCount++;
                        usedImages.push(imageToUse);
                        tryAgain = false;
                    }
                } while(tryAgain);
            }
        } else{
            image.classList.remove('active');
            activeImageCount--;
        }
    }
}

setInterval(assignImages, 1000);


