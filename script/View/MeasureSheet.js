/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MeasureSheet = (function (_super) {
    __extends(MeasureSheet, _super);
    function MeasureSheet(game, constants, measureNumber, models) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.measureNumber = measureNumber;
        this.setPosition(this.width * measureNumber, 0);
    }
    return MeasureSheet;
})(SpriteObject);
//# sourceMappingURL=MeasureSheet.js.map