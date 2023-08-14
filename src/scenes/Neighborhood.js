class Neighborhood extends Phaser.Scene {
    constructor() {
        super('neighborhood');
    }

    preload(){

        this.load.image('neighborhood1', "assets/neighborhood1.png");
        this.load.image('neighborhood2', "assets/neighborhood2.png");
        this.load.image('neighborhood3', "assets/neighborhood3.png");
        this.load.image('testGround', "assets/testGround.png");
        this.load.image('playerCharacter', "assets/playerCharacter.png");
        this.load.image('stalkerShaded', "assets/stalkerShaded.png");
        this.load.image('beastShaded', "assets/beastShaded.png");
        this.load.image('bugMonster', "assets/bugMonster.png");
        this.load.image('clearDoor', "assets/clearDoor.png");
    }    

    create(){

        let width = config.width;
        let height = config.height;
        this.physics.world.gravity.y = 1000;

        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        this.keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
        this.keyG = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
        this.keyV = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V);
        this.keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'neighborhood1').setOrigin(0,0);

        this.ground = this.physics.add.sprite(800, 831, 'testGround');
        this.ground.body.immovable = true;
        this.ground.body.allowGravity = false;

        this.monsters = this.add.group();
        this.monstersSet = false;

        this.doorRight = this.physics.add.sprite(1585, 735, 'clearDoor');
        this.doorRight.body.immovable = true;
        this.doorRight.body.allowGravity = false;

        //this.hammer = this.physics.add.sprite(700, 735, 'testItem');

        this.p1 = this.physics.add.sprite(55, 730, 'playerCharacter');
        this.p1.setCollideWorldBounds(true);

        this.stalker1 = this.physics.add.sprite(1700,1000, 'stalkerShaded');
        this.monsters.add(this.stalker1);

        this.stalker2 = this.physics.add.sprite(1700,1000, 'stalkerShaded');
        this.monsters.add(this.stalker2);

        this.stalker3 = this.physics.add.sprite(1700,1000, 'stalkerShaded');
        this.monsters.add(this.stalker3);

        this.beast1 = this.physics.add.sprite(1700,1000, 'beastShaded');
        this.monsters.add(this.beast1);

        this.beast2 = this.physics.add.sprite(1700,1000, 'beastShaded');
        this.monsters.add(this.beast2);

        this.bugMonster1 = this.physics.add.sprite(1700,1000, 'bugMonster');
        this.bugMonster1.body.allowGravity = false;
        this.monsters.add(this.bugMonster1);

        this.bugMonster2 = this.physics.add.sprite(1700,1000, 'bugMonster');
        this.bugMonster1.body.allowGravity = false;
        this.monsters.add(this.bugMonster2);

        this.physics.add.collider(this.p1, this.ground);
        this.physics.add.collider(this.monsters, this.ground); 

        //this.registry.events.on('changeData', this.updateData, this);

        this.events.on('wake',  () =>  {
            if (gameReset == true){
            lives = 3;
            level = 1;
            this.p1.x = 55;
            this.p1.y = 730;
            background = 1;
            this.monstersSet = false;
            gameReset = false;
        }
        });

    }

    update(){

        if(this.keyA.isDown) {
            this.p1.setVelocityX(-310);
            this.p1.setFlip(true, false);
        }
        else if(this.keyD.isDown) {
            this.p1.setVelocityX(310);
            this.p1.resetFlip();
        }
        else {
            this.p1.setVelocityX(0);
        }
    
        if(this.p1.body.touching.down && Phaser.Input.Keyboard.JustDown(this.keySpace)) {
            this.p1.body.setVelocityY(-600);
        }

        if(this.p1.body.touching.down && Phaser.Input.Keyboard.JustDown(this.keyW)) {
            this.p1.body.setVelocityY(-600);
        }

        if (this.physics.overlap(this.p1, this.doorRight)){
            this.p1.x = 55;
            this.p1.y = 730;
            level = level + 1;
            background = background + 1;
            if (background == 4){
                background = 1
            }
            this.stalker1.x = 1700;
            this.stalker1.y = 1000;
            this.stalker1.setCollideWorldBounds(false);
            this.stalker2.x = 1700;
            this.stalker2.y = 1000;
            this.stalker2.setCollideWorldBounds(false);
            this.stalker3.x = 1700;
            this.stalker3.y = 1000;
            this.stalker3.setCollideWorldBounds(false);
            this.beast1.x = 1700;
            this.beast1.y = 1000;
            this.beast1.setCollideWorldBounds(false);
            this.beast2.x = 1700;
            this.beast2.y = 1000;
            this.beast2.setCollideWorldBounds(false);
            this.bugMonster1.x = 1700;
            this.bugMonster1.y = 1000;
            this.bugMonster1.setCollideWorldBounds(false);
            this.bugMonster2.x = 1700;
            this.bugMonster2.y = 1000;
            this.bugMonster2.setCollideWorldBounds(false);
            this.monstersSet = false;
            scareTrigger = false;
        }

        if (background == 1){
            this.bg.setTexture('neighborhood1');
        }

        if (background == 2){
            this.bg.setTexture('neighborhood2');
        }

        if (background == 3){
            this.bg.setTexture('neighborhood3');
        }

        // levels
        if (this.monstersSet == false){
            if (level == 1){
                this.stalker1.x = 1560;
                this.stalker1.y = 660;
                this.stalker1.setCollideWorldBounds(true);
                this.monstersSet = true;
            }
            if (level == 2){
                this.beast1.x = 1560;
                this.beast1.y = 500;
                this.beast1.setCollideWorldBounds(true);
                this.monstersSet = true;
            }
            if (level == 3){
                this.bugMonster1.x = 1560;
                this.bugMonster1.y = 200;
                this.bugMonster1.setCollideWorldBounds(true);
                this.monstersSet = true;
            }
            if (level == 4){
                this.stalker1.x = 1060;
                this.stalker1.y = 360;
                this.stalker1.setCollideWorldBounds(true);
                this.monstersSet = true;
            }
            if (level == 5){
                this.beast1.x = 1000;
                this.beast1.y = 500;
                this.beast1.setCollideWorldBounds(true);
                this.monstersSet = true;
            }
            if (level == 6){
                this.stalker1.x = 1560;
                this.stalker1.y = 360;
                this.stalker1.setCollideWorldBounds(true);
                this.stalker2.x = 1000;
                this.stalker2.y = 360;
                this.stalker2.setCollideWorldBounds(true);
                this.monstersSet = true;
            }
            if (level == 7){
                this.bugMonster1.x = 960;
                this.bugMonster1.y = 320;
                this.bugMonster1.setCollideWorldBounds(true);
                this.monstersSet = true;
            }
            if (level == 8){
                this.beast1.x = 1560;
                this.beast1.y = 360;
                this.beast1.setCollideWorldBounds(true);
                this.beast2.x = 1000;
                this.beast2.y = 360;
                this.beast2.setCollideWorldBounds(true);
                this.monstersSet = true;
            }
            if (level == 9){
                this.stalker1.x = 1560;
                this.stalker1.y = 360;
                this.stalker1.setCollideWorldBounds(true);
                this.stalker2.x = 1000;
                this.stalker2.y = 360;
                this.stalker2.setCollideWorldBounds(true);
                this.stalker3.x = 600;
                this.stalker3.y = 360;
                this.stalker3.setCollideWorldBounds(true);
                this.monstersSet = true;
            }
            if (level == 10){
                this.beast1.x = 1000;
                this.beast1.y = 500;
                this.beast1.setCollideWorldBounds(true);
                this.bugMonster1.x = 960;
                this.bugMonster1.y = 250;
                this.bugMonster1.setCollideWorldBounds(true);
                this.stalker1.x = 1560;
                this.stalker1.y = 360;
                this.stalker1.setCollideWorldBounds(true);
                this.monstersSet = true;
            }
        }

        // monster movements
        if (this.stalker1.x > this.p1.x){
            this.stalker1.setVelocityX(-100);
            this.stalker1.resetFlip();
        }

        else if (this.stalker1.x < this.p1.x){
            this.stalker1.setVelocityX(100);
            this.stalker1.setFlip(true, false);
        }

        if (this.stalker2.x > this.p1.x){
            this.stalker2.setVelocityX(-100);
            this.stalker2.resetFlip();
        }

        else if (this.stalker2.x < this.p1.x){
            this.stalker2.setVelocityX(100);
            this.stalker2.setFlip(true, false);
        }

        if (this.stalker3.x > this.p1.x){
            this.stalker3.setVelocityX(-100);
            this.stalker3.resetFlip();
        }

        else if (this.stalker3.x < this.p1.x){
            this.stalker3.setVelocityX(100);
            this.stalker3.setFlip(true, false);
        }

        if (this.beast1.x == 1700){
            this.beast1.body.setAccelerationX(0);
        }

        else if (this.beast1.x != 1700 && this.beast1.x > this.p1.x){
            this.beast1.body.setAccelerationX(-120);
            this.beast1.resetFlip();
        }

        else if (this.beast1.x != 1700 && this.beast1.x < this.p1.x){
            this.beast1.body.setAccelerationX(200);
            this.beast1.setFlip(true, false);
        }

        if (this.beast2.x == 1700){
            this.beast2.body.setAccelerationX(0);
        }

        else if (this.beast2.x != 1700 && this.beast2.x > this.p1.x){
            this.beast2.body.setAccelerationX(-120);
            this.beast2.resetFlip();
        }

        else if (this.beast2.x != 1700 && this.beast2.x < this.p1.x){
            this.beast2.body.setAccelerationX(200);
            this.beast2.setFlip(true, false);
        }

        if (this.bugMonster1.x > this.p1.x){
            this.bugMonster1.setVelocityX(-100);
            this.bugMonster1.resetFlip();
        }

        else if (this.bugMonster1.x < this.p1.x){
            this.bugMonster1.setVelocityX(100);
            this.bugMonster1.setFlip(true, false);
        }

        if (this.bugMonster1.y > this.p1.y){
            this.bugMonster1.setVelocityY(100);
        }

        if (this.bugMonster2.x > this.p1.x){
            this.bugMonster2.setVelocityX(-100);
            this.bugMonster2.resetFlip();
        }

        else if (this.bugMonster2.x < this.p1.x){
            this.bugMonster2.setVelocityX(100);
            this.bugMonster2.setFlip(true, false);
        }

        if (this.bugMonster2.y > this.p1.y){
            this.bugMonster2.setVelocityY(100);
        }

        // Scares

        if (this.physics.overlap(this.p1, this.stalker1)){
            scare = 1;
            lives = lives - 1;
            scareTrigger = true;
            this.scene.switch('scareScreen');
        }

        if (this.physics.overlap(this.p1, this.stalker2)){
            scare = 1;
            lives = lives - 1;
            scareTrigger = true;
            this.scene.switch('scareScreen');
        }

        if (this.physics.overlap(this.p1, this.stalker3)){
            scare = 1;
            lives = lives - 1;
            scareTrigger = true;
            this.scene.switch('scareScreen');
        }

        if (this.physics.overlap(this.p1, this.beast1)){
            scare = 2;
            lives = lives - 1;
            scareTrigger = true;
            this.scene.switch('scareScreen');
        }

        if (this.physics.overlap(this.p1, this.beast2)){
            scare = 2;
            lives = lives - 1;
            scareTrigger = true;
            this.scene.switch('scareScreen');
        }

        if (this.physics.overlap(this.p1, this.bugMonster1)){
            scare = 3;
            lives = lives - 1;
            scareTrigger = true;
            this.scene.switch('scareScreen');
        }

        if (this.physics.overlap(this.p1, this.bugMonster2)){
            scare = 3;
            lives = lives - 1;
            scareTrigger = true;
            this.scene.switch('scareScreen');
        }

        // scareTrigger reset
        if(scareTrigger == true){
            this.stalker1.setCollideWorldBounds(false);
            this.stalker1.x = 1700;
            this.stalker1.y = 1000;
            this.stalker2.setCollideWorldBounds(false);
            this.stalker2.x = 1700;
            this.stalker2.y = 1000;
            this.stalker3.setCollideWorldBounds(false);
            this.stalker3.x = 1700;
            this.stalker3.y = 1000;
            this.beast1.setCollideWorldBounds(false);
            this.beast1.x = 1700;
            this.beast1.y = 1000;
            this.beast2.setCollideWorldBounds(false);
            this.beast2.x = 1700;
            this.beast2.y = 1000;
            this.bugMonster1.setCollideWorldBounds(false);
            this.bugMonster1.x = 1700;
            this.bugMonster1.y = 1000;
            this.bugMonster2.setCollideWorldBounds(false);
            this.bugMonster2.x = 1700;
            this.bugMonster2.y = 1000;
            scareTrigger = false;
        }

        if (level == 11){
            this.scene.switch('victory');
        }
        
    }

    checkCollision(a, b) {
        // simple AABB checking
        if ((a.x < b.x + b.width && 
            a.x + a.width > b.x && 
            a.y < b.y + b.height &&
            a.height + a.y > b.y) ) {
                return true;
        } 
        else {
            return false;
        }
    }

    collect(item) {
        this.space = 0;
        while (this.space < 18){
            if (inventory[this.space] == null){
                inventory[this.space] == item;
                break;
            }
            else {
                this.space += 1;
            }
        }
    }

    has(item){
        this.space = 0;
        this.result = false
        while (this.space < inventory.length){
            if (inventory[this.space] == item){
                this.result = true;
                break;
            }
            else {
                this.space += 1;
            }
        }
        return this.result;
    }

    takeOut(item){
        this.space = 0;
        while (this.space < 10){
            if (inventory[this.space] == item){
                inventory[this.space] = null;
                break;
            }
            else {
                this.space += 1;
            }
        }
    }

}