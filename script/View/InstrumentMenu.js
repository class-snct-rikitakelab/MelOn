/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var InstrumentMenu = (function (_super) {
    __extends(InstrumentMenu, _super);
    function InstrumentMenu(game, constants, models) {
        var _this = this;
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.instrument = this.models["instrument"];
        this.isOpen = false;
        this.setView();
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", function () { _this.isOpen ? _this.close() : _this.open(); });
    }
    InstrumentMenu.prototype.setView = function () {
    };
    InstrumentMenu.prototype.open = function () {
        this.isOpen = true;
    };
    InstrumentMenu.prototype.close = function () {
        this.isOpen = false;
    };
    return InstrumentMenu;
})(DOMView);
//# sourceMappingURL=InstrumentMenu.js.map