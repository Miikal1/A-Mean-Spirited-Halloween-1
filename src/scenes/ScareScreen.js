class ScareScreen extends Phaser.Scene {
    constructor() {
        super('scareScreen');
    }


    preload(){

        this.load.image('scareStalker', "assets/scareStalker.png");
        this.load.image('scareBeast', "assets/scareBeast.png");
        this.load.image('scareBugMonster', "assets/scareBugMonster.png");
        this.load.image('continue', "assets/continue.png");
        this.load.image('playAgain', "assets/playAgain.png");
        this.load.image('gameOver', "assets/gameOver.png");

    }

    create(){

        let width = config.width;
        let height = config.height;

        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'scareStalker').setOrigin(0,0);

        this.continue = this.add.sprite(1150, 840, 'continue');
        this.continue.setAlpha(0);

        this.replay = this.add.sprite(1140, 840, 'playAgain');
        this.replay.setAlpha(0);

        this.gameOver = this.add.sprite(800, 450, 'gameOver');
        this.gameOver.setAlpha(0);

    }

    update(){

        if(scare == 1){
            this.bg.setTexture('scareStalker');
        }

        if(scare == 2){
            this.bg.setTexture('scareBeast');
        }

        if(scare == 3){
            this.bg.setTexture('scareBugMonster');
        }

        if (lives != 0){
            /*this.time.addEvent({
                delay: 2100, 
                callback: () => this.continue.setAlpha(1),
                callbackScope: this, 
                loop: false
            });*/
            this.continue.setAlpha(1)
        } 

        else if (lives <= 0){
            /*this.time.addEvent({
                delay: 2100, 
                callback: () => this.replay.setAlpha(1),
                callbackScope: this, 
                loop: false 
            });*/
            this.replay.setAlpha(1);
            this.gameOver.setAlpha(1);
        } 
        else {
            this.continue.setAlpha(0);
            this.replay.setAlpha(0);
            this.gameOver.setAlpha(0);
        }

        if(Phaser.Input.Keyboard.JustDown(this.keySpace)){
            if (lives != 0){
                scare = 0;
                this.continue.setAlpha(0);
                console.log(lives);
                this.scene.switch('neighborhood');
            }
            else if (lives <= 0){
                scare = 0;
                gameReset = true;
                this.replay.setAlpha(0);
                this.gameOver.setAlpha(0);
                console.log(lives);
                this.scene.switch('neighborhood');
            }
        }

        if (Phaser.Input.Keyboard.JustDown(this.keyA)){
            console.log(lives);
        }

    }

}    