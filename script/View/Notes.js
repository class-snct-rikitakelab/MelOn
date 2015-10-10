/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Notes = (function (_super) {
    __extends(Notes, _super);
    function Notes(game, constants, models) {
        var _this = this;
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.music = this.models["music"];
        this.stationery = this.models["stationery"];
        this.music.onWrite(function () { _this.addNote(); });
    }
    Notes.prototype.addNote = function () {
        var noteData = this.music.getSelectedNoteData;
        var x = noteData.measure * this.constants.width + noteData.position * this.constants.noteWidth;
        var y = this.constants.pitch.indexOf(noteData.pitch) * this.constants.noteHeight;
        this.selectedNote = this.add(new Note(this.game, new CONSTANTS.Note, this.models, x, y));
    };
    Notes.prototype.select = function (index) {
    };
    Notes.prototype.update = function () {
        var selectedNoteIndex;
        if (_.isNumber(selectedNoteIndex)) {
        }
    };
    return Notes;
})(GroupView);
//# sourceMappingURL=Notes.js.map