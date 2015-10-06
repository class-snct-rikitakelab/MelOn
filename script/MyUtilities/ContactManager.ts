/// <reference path="../reference.ts"/>

// This is the class to manage collision and overlap of Phaser objects.

class ContactManager extends Phaser.Physics.Arcade{
    collideObjects: [(Phaser.Sprite | Phaser.Group), (Phaser.Sprite | Phaser.Group)][] = [];
    overlapObjects: [(Phaser.Sprite | Phaser.Group), (Phaser.Sprite | Phaser.Group)][] = [];
    
    constructor(game: Phaser.Game) {
        super(game);
    }

    checkAllContact() {
        this.checkAllCollide();
        this.checkAllOverlap();
    }

    addCollide(obj1: (Phaser.Sprite | Phaser.Group), obj2: (Phaser.Sprite | Phaser.Group),
        eachOther: boolean = false) {
        this.collideObjects.push([obj1, obj2]);
    }

    addOverlap(obj1: (Phaser.Sprite | Phaser.Group), obj2: (Phaser.Sprite | Phaser.Group),
        eachOther: boolean = false) {
        this.overlapObjects.push([obj1, obj2]);
    }

    checkAllCollide() {
        this.collideObjects.forEach((value: [(Phaser.Sprite | Phaser.Group), (Phaser.Sprite | Phaser.Group)]) => {
            if (value[0] === null || value[1] === null) return;
            this.collide(value[0], value[1], (sprite1, sprite2) => {
                ContactManager.prototype.onCollide(sprite1, sprite2);
            });
        });
    }

    checkAllOverlap() {
        this.overlapObjects.forEach((value: [(Phaser.Sprite | Phaser.Group), (Phaser.Sprite | Phaser.Group)]) => {
            if (value[0] === null || value[1] === null) return;
            this.overlap(value[0], value[1], (sprite1, sprite2) => {
                ContactManager.prototype.onOverlap(sprite1, sprite2);
            });
        });
    }

    private onCollide(sprite1: SpriteView, sprite2: SpriteView) {
        sprite1.onCollide(sprite2);
        sprite2.onCollide(sprite1);
    }

    private onOverlap(sprite1: SpriteView, sprite2: SpriteView) {
        sprite1.onOverlap(sprite2);
        sprite2.onOverlap(sprite1);
    }
}