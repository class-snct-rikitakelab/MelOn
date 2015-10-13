/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MelOnAssets = (function (_super) {
    __extends(MelOnAssets, _super);
    function MelOnAssets() {
        _super.apply(this, arguments);
        this.images = {
            address: "storage/assets/image/",
            assets: [
                // score
                ["musicPlayBar", "score/playBar.png"],
                ["note", "score/note.png"],
                ["score", "score/score.png"],
            ],
        };
        this.audios = {
            address: "storage/assets/sound/",
            assets: [
                // piano
                ["pianoA2", ["piano/pianoA2.mp3",]],
                ["pianoA3", ["piano/pianoA3.mp3",]],
                ["pianoA4", ["piano/pianoA4.mp3",]],
                ["pianoB2", ["piano/pianoB2.mp3",]],
                ["pianoB3", ["piano/pianoB3.mp3",]],
                ["pianoB4", ["piano/pianoB4.mp3",]],
                ["pianoC2", ["piano/pianoC2.mp3",]],
                ["pianoC3", ["piano/pianoC3.mp3",]],
                ["pianoC4", ["piano/pianoC4.mp3",]],
                ["pianoC5", ["piano/pianoC5.mp3",]],
                ["pianoD2", ["piano/pianoD2.mp3",]],
                ["pianoD3", ["piano/pianoD3.mp3",]],
                ["pianoD4", ["piano/pianoD4.mp3",]],
                ["pianoE2", ["piano/pianoE2.mp3",]],
                ["pianoE3", ["piano/pianoE3.mp3",]],
                ["pianoE4", ["piano/pianoE4.mp3",]],
                ["pianoF2", ["piano/pianoF2.mp3",]],
                ["pianoF3", ["piano/pianoF3.mp3",]],
                ["pianoF4", ["piano/pianoF4.mp3",]],
                ["pianoG2", ["piano/pianoG2.mp3",]],
                ["pianoG3", ["piano/pianoG3.mp3",]],
                ["pianoG4", ["piano/pianoG4.mp3",]],
                // se
                ["MelOn", ["se/MelOn!.mp3",]],
                ["tamb", ["se/tamb.mp3",]],
            ]
        };
        this.preloadImages = {
            address: "storage/assets/image/",
            assets: [
                // preloadBar
                ["preloadBar", "game/preloadBar.png"],
                // background
                ["background", "background/background.png"],
            ],
        };
    }
    return MelOnAssets;
})(AssetLoader);
//# sourceMappingURL=Assets.js.map