/// <reference path="../reference.ts"/>

class ScrollButton extends DOMView {

    private image: JQuery;
    private isPushed: boolean = false;

    constructor(game: Phaser.Game, private constants: CONSTANTS.ScrollButton, models: Object) {
        super(game, constants, models);
        this.loadImage();
        this.$.mousedown(() => { this.isPushed = true; });
        this.$.mouseup(() => { this.isPushed = false; });
        this.$.mouseleave(() => { this.isPushed = false; });
        this.initCamera();
    }

    private loadImage(): void {
        this.image = $("<img />")
            .attr("src", this.constants.images["image"])
            .addClass(this.constants.class["buttonImage"]);
        this.$.append(this.image);
    }

    private initCamera() {
        this.game.camera.y = this.constants.noteHeight * this.constants.pitch.indexOf(this.constants.initPitch);
    }

    update() {
        if (this.isPushed) {
            switch (this.constants.direction) {
                case "up": this.game.camera.y -= this.constants.speed; break;
                case "down": this.game.camera.y += this.constants.speed; break;
                case "right": this.game.camera.x += this.constants.speed; break;
                case "left": this.game.camera.x -= this.constants.speed; break;
            }
        }
    }
}