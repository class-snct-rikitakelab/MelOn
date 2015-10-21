/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var InstrumentMenu = (function (_super) {
    __extends(InstrumentMenu, _super);
    function InstrumentMenu(game, constants, models) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.instrument = this.models["instrument"];
    }
    return InstrumentMenu;
})(DOMView);
//# sourceMappingURL=InstrumentMenu.js.map