/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MeasureSheet = (function (_super) {
    __extends(MeasureSheet, _super);
    function MeasureSheet(game, constants, models, measure) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.measure = measure;
        this.music = this.models["music"];
        this.stationery = this.models["stationery"];
        this.setPosition(this.constants.width * this.measure, 0);
    }
    MeasureSheet.prototype.setInput = function () {
        var _this = this;
        this.inputEnabled = true;
        this.input.useHandCursor = true;
        this.events.onInputDown.add(function (self, point) { _this.touchMeasure(point); }, this);
        this.events.onInputUp.add(function () { _this.music.refresh(); });
    };
    MeasureSheet.prototype.touchMeasure = function (point) {
        var position = Math.floor(this.input.pointerX(point.id) / this.constants.noteWidth);
        var pitch = this.constants.pitch[Math.floor(this.input.pointerY(point.id) / this.constants.noteHeight)];
        if (this.stationery.getStationery === this.constants.writeStationery)
            this.music.write(pitch, this.measure, this.constants.unitNote, position);
    };
    return MeasureSheet;
})(SpriteView);
//# sourceMappingURL=MeasureSheet.js.map