/// <reference path="../index.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var INDEX;
(function (INDEX) {
    ;
    var HTMLLogo = (function () {
        function HTMLLogo() {
            this.selector = "#logo";
            this.images = {
                logo: "storage/assets/image/game/MelOnLogo.png",
            };
            this.audios = {
                MelOn: "storage/assets/sound/se/MelOn!.mp3",
            };
        }
        return HTMLLogo;
    })();
    INDEX.HTMLLogo = HTMLLogo;
    var ModeButton = (function () {
        function ModeButton() {
            this.selector = "";
            this.destination = "";
            this.shadowColor = "";
            this.images = {};
            this.audios = {
                select: "storage/assets/sound/se/select.mp3",
                decide: "storage/assets/sound/se/decide.mp3",
            };
        }
        return ModeButton;
    })();
    INDEX.ModeButton = ModeButton;
    var FreeMakingMusic = (function (_super) {
        __extends(FreeMakingMusic, _super);
        function FreeMakingMusic() {
            _super.apply(this, arguments);
            this.selector = "#freeMakingMusic";
            this.destination = "FreeMakingMusic.html";
            this.shadowColor = "orange";
            this.images = {
                image: "storage/assets/image/modeButton/freeMakingMusicFinnish.png",
            };
        }
        return FreeMakingMusic;
    })(ModeButton);
    INDEX.FreeMakingMusic = FreeMakingMusic;
    var Practice = (function (_super) {
        __extends(Practice, _super);
        function Practice() {
            _super.apply(this, arguments);
            this.selector = "#practice";
            this.shadowColor = "lawngreen";
            this.images = {
                image: "storage/assets/image/modeButton/practiceFinnish.png",
            };
        }
        return Practice;
    })(ModeButton);
    INDEX.Practice = Practice;
})(INDEX || (INDEX = {}));
//# sourceMappingURL=index.const.js.map