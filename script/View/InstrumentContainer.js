/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var InstrumentContainer = (function (_super) {
    __extends(InstrumentContainer, _super);
    function InstrumentContainer(game, constants, models) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.instrument = this.models["instrument"];
        this.setView();
    }
    InstrumentContainer.prototype.setView = function () {
        this.$.css("height", this.constants.containerHeight)
            .css("bottom", this.constants.height);
        this.setInstrumentOptions();
    };
    InstrumentContainer.prototype.setInstrumentOptions = function () {
        var _this = this;
        this.constants.instruments.forEach(function (instrument) {
            _this.$.append($("<div id=\"" + instrument + "\"></div>"));
            new InstrumentOption(_this.game, new CONSTANTS.InstrumentOption, _this.models, instrument);
        });
    };
    InstrumentContainer.prototype.close = function () {
        this.$.stop(true, true).slideUp(this.constants.slideTime);
    };
    InstrumentContainer.prototype.slideToggle = function () {
        this.$.stop(true, true).slideToggle(this.constants.slideTime);
    };
    return InstrumentContainer;
})(DOMView);
//# sourceMappingURL=InstrumentContainer.js.map