/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ScoreSheet = (function (_super) {
    __extends(ScoreSheet, _super);
    function ScoreSheet(game, constants, models) {
        var _this = this;
        _super.call(this, game, constants, models);
        this.constants = constants;
        _.times(this.constants.measureNum, function () { _this.addMeasure(); });
        // Set camera avairable zone.
        this.game.camera.bounds.height = this.constants.height;
    }
    ScoreSheet.prototype.addMeasure = function () {
        this.add(new MeasureSheet(this.game, new CONSTANTS.MeasureSheet, this.models, this.children.length));
        this.updateCameraWidth();
    };
    ScoreSheet.prototype.reduceMeasure = function () {
        this.children.pop();
        this.updateCameraWidth();
    };
    ScoreSheet.prototype.updateCameraWidth = function () {
        this.game.camera.bounds.width = this.constants.width * this.children.length;
    };
    return ScoreSheet;
})(GroupView);
//# sourceMappingURL=ScoreSheet.js.map