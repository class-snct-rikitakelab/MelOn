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
        this.baseURL = "storage/assets";
        this.addresses = {
            images: "image",
            spriteSheets: "image",
            audios: "sound",
            preloadImages: "image",
            preloadSpriteSheets: "image",
            preloadAudios: "sound",
        };
        this.images = {
            score: [
                ["musicPlayBar", "playBar.png"],
                ["note", "note.png"],
                ["score", "score.png"],
            ]
        };
        // ogg is not supported by IE. But mp3 makes loading time much longer.
        // Google Chrome is recommended.
        this.audios = {
            piano: [
                ["pianoA2", ["pianoA2.ogg"]],
                ["pianoA3", ["pianoA3.ogg"]],
                ["pianoA4", ["pianoA4.ogg"]],
                ["pianoB2", ["pianoB2.ogg"]],
                ["pianoB3", ["pianoB3.ogg"]],
                ["pianoB4", ["pianoB4.ogg"]],
                ["pianoC2", ["pianoC2.ogg"]],
                ["pianoC3", ["pianoC3.ogg"]],
                ["pianoC4", ["pianoC4.ogg"]],
                ["pianoC5", ["pianoC5.ogg"]],
                ["pianoD2", ["pianoD2.ogg"]],
                ["pianoD3", ["pianoD3.ogg"]],
                ["pianoD4", ["pianoD4.ogg"]],
                ["pianoE2", ["pianoE2.ogg"]],
                ["pianoE3", ["pianoE3.ogg"]],
                ["pianoE4", ["pianoE4.ogg"]],
                ["pianoF2", ["pianoF2.ogg"]],
                ["pianoF3", ["pianoF3.ogg"]],
                ["pianoF4", ["pianoF4.ogg"]],
                ["pianoG2", ["pianoG2.ogg"]],
                ["pianoG3", ["pianoG3.ogg"]],
                ["pianoG4", ["pianoG4.ogg"]],
            ],
            se: [
                ["MelOn", ["MelOn!.mp3",]],
                ["tamb", ["tamb.mp3",]],
            ],
        };
        this.preloadImages = {
            game: [
                ["preloadBar", "preloadBar.png"],
            ],
            background: [
                ["background", "background.png"],
            ],
        };
    }
    return MelOnAssets;
})(AssetLoader);
//# sourceMappingURL=Assets.js.map