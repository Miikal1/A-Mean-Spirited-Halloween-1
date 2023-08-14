class Victory extends Phaser.Scene {
    constructor() {
        super('victory');
    }


    preload(){

        
        this.load.image('winScreen', "assets/winScreen.png");
        this.load.image('playAgain', "assets/playAgain.png");

    }

    create(){

        let width = config.width;
        let height = config.height;

        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'winScreen').setOrigin(0,0);

        this.replay = this.add.sprite(1140, 840, 'playAgain');
        this.replay.setAlpha(1);

    }

    update(){

        if(Phaser.Input.Keyboard.JustDown(this.keySpace)){
           
            gameReset = true;
            this.replay.setAlpha(0);
            this.scene.switch('neighborhood');
            
        }

        if (Phaser.Input.Keyboard.JustDown(this.keyA)){
            console.log(lives);
        }

    }

}    