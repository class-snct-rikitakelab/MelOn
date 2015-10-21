/// <reference path="../reference.ts"/>

class ScrollButton extends DOMView {

    private music: Music = this.models["music"];
    private image: JQuery;
    private isPushed: boolean = false;

    constructor(game: Phaser.Game, private constants: CONSTANTS.ScrollButton, models: Object) {
        super(game, constants, models);
        this.$.mousedown(() => { this.isPushed = true; });
        this.$.mouseup(() => { this.isPushed = false; });
        this.$.on("touchend", () => { this.isPushed = false; });
        this.$.mouseleave(() => { this.isPushed = false; });
        this.$.dblclick(() => { this.double(); });
        this.$.on("contextmenu", () => { return false; });
        this.initCamera();
    }

    private initCamera() {
        this.game.camera.y = this.constants.noteHeight * this.constants.pitch.indexOf(this.constants.initPitch);
    }

    private rightestPosition(): number {
        var music: { [pitch: string]: NoteData[] } = this.music.getMusic;
        var x: number = 0;
        _.each(music, (line: NoteData[]) => {
            _.each(line, (note: NoteData) => {
                var endPosition = (this.constants.measureWidth / note.unitNote) * (note.start + note.extension + 1);
                if (endPosition > x) x = endPosition;
            });
        });
        return x;
    }

    private double() {
        switch (this.constants.direction) {
            case "up": this.game.camera.y = 0; break;
            case "down": this.game.camera.y = Infinity; break;
            case "right": this.game.camera.x = this.rightestPosition() - this.constants.measureWidth * this.constants.displayMeasureNum; break;
            case "left": this.game.camera.x = 0; break;
            default: break;
        }
    }

    update() {
        if (this.isPushed) {
            switch (this.constants.direction) {
                case "up": this.game.camera.y -= this.constants.speed; break;
                case "down": this.game.camera.y += this.constants.speed; break;
                case "right": this.game.camera.x += this.constants.speed; break;
                case "left": this.game.camera.x -= this.constants.speed; break;
                default: break;
            }
        }
    }
}