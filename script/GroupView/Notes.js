/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Notes = (function (_super) {
    __extends(Notes, _super);
    function Notes(game, constants, models) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.music = this.models["music"];
        this.stationery = this.models["stationery"];
        this.noteOverlapManager = this.models["noteOverlapManager"];
        this.selectedNote = null;
        this.setEvent();
    }
    Notes.prototype.setEvent = function () {
        var _this = this;
        this.music.onSelect.add(function () { return _this.select(); });
        this.music.onRefresh.add(function () { return _this.refreshSelect(); });
        this.music.onWrite.add(function () { return _this.addNote(); });
        this.music.onErase.add(function () { return _this.removeNote(); });
    };
    Notes.prototype.setPhysical = function () {
        this.game.physics.arcade.enable(this, true);
    };
    Notes.prototype.select = function () {
        var _this = this;
        this.selectedNote = _.find(this.children, function (note) { return _.isEqual(note.getNoteData, _this.music.getSelectedNote); });
    };
    Notes.prototype.refreshSelect = function () {
        this.selectedNote = null;
    };
    Notes.prototype.addNote = function () {
        this.selectedNote = this.add(new Note(this.game, new CONSTANTS.Note, this.models, this.music.getSelectedNote));
        this.noteOverlapManager.addNote(this.selectedNote);
    };
    Notes.prototype.removeNote = function () {
        if (!this.selectedNote)
            return;
        this.noteOverlapManager.removeNote(this.selectedNote);
        this.selectedNote.destroy();
    };
    Notes.prototype.update = function () {
        if (this.selectedNote)
            this.selectedNote.update();
    };
    return Notes;
})(GroupView);
var LessonNotes = (function (_super) {
    __extends(LessonNotes, _super);
    function LessonNotes() {
        _super.apply(this, arguments);
        this.achievement = this.models["achievement"];
        this.lessonData = this.models["lessonData"];
        this.checkFlag = false;
    }
    LessonNotes.prototype.setEvent = function () {
        var _this = this;
        _super.prototype.setEvent.call(this);
        var check = function () { return _this.checkFlag = true; };
        this.music.onWrite.add(check);
        this.music.onErase.add(check);
        this.music.onChangeExtension.add(check);
        this.music.onMove.add(check);
        this.music.onEraseAll.add(check);
    };
    LessonNotes.prototype.countRed = function () {
        return _.filter(this.children, function (note) { return note.key === "red"; }).length;
    };
    LessonNotes.prototype.countRestTrace = function () {
        var _this = this;
        var count = 0;
        _.each(this.lessonData.getTargetMusic, function (targetLine, pitch) {
            _.each(targetLine, function (targetNote) {
                if (!_.some(_this.music.getMusic[pitch], function (note) {
                    return targetNote.start === note.start && targetNote.start + targetNote.extension === note.start + note.extension;
                }))
                    count++;
            });
        });
        return count;
    };
    LessonNotes.prototype.countRestFilling = function () {
        var _this = this;
        var count = 0;
        var unitNote = this.lessonData.getUnitNote;
        _.each(this.lessonData.getBlanks, function (blank) {
            for (var i = blank[0]; i <= blank[1]; i++)
                if (_.some(_this.constants.pitch, function (pitch) { return _this.music.checkExist(pitch, unitNote, i); }))
                    return;
            count++;
        });
        return count;
    };
    LessonNotes.prototype.addNote = function () {
        this.selectedNote = this.add(new LessonNote(this.game, new CONSTANTS.Note, this.models, this.music.getSelectedNote));
        this.noteOverlapManager.addNote(this.selectedNote);
    };
    LessonNotes.prototype.update = function () {
        _super.prototype.update.call(this);
        if (this.checkFlag) {
            this.achievement.changeRedNum = this.countRed();
            this.achievement.changeRestTraceNum = this.countRestTrace();
            this.achievement.changeRestFillingNum = this.countRestFilling();
            console.log(this.achievement.redNum, this.achievement.restTraceNum, this.achievement.restFillingNum);
            this.checkFlag = false;
        }
    };
    return LessonNotes;
})(Notes);
//# sourceMappingURL=Notes.js.map