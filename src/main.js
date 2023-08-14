// See README for team, game name, breakdown, notes, etc.

let config = {
    type: Phaser.Canvas,
    //Game Canvas scales with width and height of window
    //width: window.innerWidth * window.devicePixelRatio * 0.75,
    //height: window.innerHeight * window.devicePixelRatio,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    width: 1600,
    height: 900,
    scene: [Neighborhood, ScareScreen, Victory]
};

let keyA, keyD, keyW, keyS, keyR, keyT, keyQ, keyG, KeySPACE;

let borderUISize = config.height / 15;
let borderPadding = borderUISize / 3;

let gloabalGameState = {};

let background = 1;

let scare = 0;

let scareTrigger = false;

let level = 1;

let lives = 300;

let gameReset = false;

// sewQuest booleans
let ropeLadder = false;

let game = new Phaser.Game(config);
//game.config.inventory = [null, null, null, null, null, null, null, null, null, null];

//let Audio = new AudioManager;
//let Track1StemNames = ['Normal', 'Filtered'];
//let Track1StemFileNames = ['assets/music/Track 01 - Normal.mp3', 'assets/music/Track 01 - Filtered.mp3'];

//let playerMoveStartSounds = 5;
//let playerMoveContSounds = 6;

// global variable to keep track of checkpoint outside of play scene
//let holeStartID = 1;

// global const for 0 scale, because you can't actually have 0 scale
//const ZEROSCALE = 0.000001;
