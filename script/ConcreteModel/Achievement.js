/// <reference path="../Lesson.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Achievement = (function (_super) {
    __extends(Achievement, _super);
    function Achievement(constants) {
        _super.call(this, constants);
        this.constants = constants;
        this.isMatched = false;
        this.onMatch = new Phaser.Signal;
    }
    Achievement.prototype.sortMusic = function (music) {
        return _.each(music, function (line, pitch, music) {
            music[pitch] = _.sortBy(line, function (note) { return note.start / note.unitNote; });
        });
    };
    Achievement.prototype.checkMusic = function (target, music) {
        if (!this.isMatched && _.isEqual(this.sortMusic(target), this.sortMusic(music))) {
            this.isMatched = true;
            this.onMatch.dispatch();
        }
    };
    return Achievement;
})(Model);
//# sourceMappingURL=Achievement.js.map