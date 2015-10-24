/// <reference path="../reference.ts"/>

class Logo extends DOMView {
    constructor(game: Phaser.Game, private constants: CONSTANTS.Logo, models: Object) {
        super(game, constants, models);
        this.setEvent();
    }

    private setEvent() {
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", () => { this.ajax(); });
    }

    private ajax() {
        this.game.sound.play("MelOn");
        /*
        $.ajax({
            type: "get",
            url: "storage/lesson/json.json",
            dataType: "json",
            success: (data, dataType) => { console.log(data, dataType); }
        });
        */
    }
}