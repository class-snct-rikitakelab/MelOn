/// <reference path="../index.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ModeButton = (function (_super) {
    __extends(ModeButton, _super);
    function ModeButton(constants) {
        _super.call(this, constants);
        this.constants = constants;
        this.setImage("image");
        this.setEvent();
    }
    ModeButton.prototype.setEvent = function () {
        var _this = this;
        this.$.click(function () { _this.click(); });
        this.$.hover(function () { _this.enrer(); }, function () { _this.leave(); });
    };
    ModeButton.prototype.click = function () {
        var _this = this;
        this.audioPlay(this.audios["decide"]);
        setTimeout(function () { document.location = _this.constants.destination; }, 500);
    };
    ModeButton.prototype.enrer = function () {
        this.$.css("box-shadow", "0 0 20px 6px " + this.constants.shadowColor);
        this.audioPlay(this.audios["select"]);
    };
    ModeButton.prototype.leave = function () {
        this.$.css("box-shadow", "none");
    };
    return ModeButton;
})(HTMLView);
//# sourceMappingURL=ModeButton.js.map