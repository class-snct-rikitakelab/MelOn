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
        this.selectedNote = null;
        this.music.onSelect(function () { _this.select(); });
        this.music.onRefresh(function () { _this.refreshSelect(); });
        this.music.onWrite(function () { _this.addNote(); });
    }
    Notes.prototype.addNote = function () {
        this.selectedNote = this.add(new Note(this.game, new CONSTANTS.Note, this.models, this.music.getSelectedNote));
    };
    Notes.prototype.select = function () {
        var _this = this;
        this.selectedNote = _.find(this.children, function (note) { return note.getNoteData === _this.music.getSelectedNote; });
    };
    Notes.prototype.refreshSelect = function () {
        this.selectedNote = null;
    };
    Notes.prototype.update = function () {
        if (this.selectedNote)
            this.selectedNote.update();
    };
    return Notes;
})(GroupView);
//# sourceMappingURL=Notes.js.map