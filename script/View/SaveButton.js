/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SaveButton = (function (_super) {
    __extends(SaveButton, _super);
    function SaveButton(game, constants, models) {
        var _this = this;
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.music = this.models["music"];
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", function () { _this.save(); });
        this.$.css("background-color", "darkcyan");
    }
    SaveButton.prototype.save = function () {
        var str = JSON.stringify(this.music.getMusic);
        // Local Strage Save
        localStorage.setItem("music", str);
        alert("Your music was saved!");
    };
    return SaveButton;
})(DOMView);
//# sourceMappingURL=SaveButton.js.map