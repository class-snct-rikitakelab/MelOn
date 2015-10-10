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
        this.music.onRefrechSelect(function () { _this.refreshNote(); });
    }
    Notes.prototype.addNote = function () {
        var note = this.music.getSelectedNote;
        var x = note.measure * this.constants.width + note.position * this.constants.noteWidth;
        var y = this.constants.pitch.indexOf(note.pitch) * this.constants.noteHeight;
        this.selectedNote = this.add(new Note(this.game, new CONSTANTS.Note, this.models, x, y));
    };
    Notes.prototype.select = function (index) {
        var childIndex = _.findLastIndex(this.children, function (note) { return note.getIndex == index; });
        this.selectedNote = this.getChildAt(childIndex);
    };
    Notes.prototype.refreshNote = function () {
        this.selectedNote = null;
    };
    Notes.prototype.update = function () {
        if (this.selectedNote) {
            this.selectedNote.update();
        }
    };
    return Notes;
})(GroupView);
//# sourceMappingURL=Notes.js.map