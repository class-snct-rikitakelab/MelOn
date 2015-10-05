/// <reference path="../reference.ts"/>

class SpriteObject extends Phaser.Sprite {

    protected jq: JQuery;

    constructor(game: Phaser.Game, constants: CONSTANTS.SpriteObject, protected models?: Object) {
        super(game, constants.x, constants.y, constants.images[constants.initImage]);
        game.world.add(this);
        this.jq = $(this);
        this.setSize(constants.width, constants.height);
        this.setFrameAnimation();
        this.setPhysical(constants);
    }

    public setSize(width: number, height: number): void {
        this.width = width;
        this.height = height;
    }

    public setPosition(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    public update() {
        // override!
    }

    public onCollide(partner?: SpriteObject) {
        // override!
    }

    public onOverlap(partner?: SpriteObject) {
        // override!
    }

    protected setFrameAnimation() {
        // override!
        // This is recommended to imprement in child class not using constants.
    }

    protected setPhysical(constants: CONSTANTS.SpriteObject) {
        // override!
    }
}