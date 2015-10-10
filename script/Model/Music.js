/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Music = (function (_super) {
    __extends(Music, _super);
    function Music(game, constants) {
        _super.call(this, game, constants);
        this.constants = constants;
        this.music = [];
        this.noteIndex = 0; // 有限だが、9千兆くらいまで数えられる
        this.selectedNoteIndex = null;
    }
    Music.prototype.select = function (index) {
        this.selectedNoteIndex = index;
    };
    Object.defineProperty(Music.prototype, "getSelectedNoteIndex", {
        get: function () {
            return this.selectedNoteIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Music.prototype, "getSelectedNote", {
        get: function () {
            var _this = this;
            // Caution : _.findLastIndex is added to declaration file by Shusei Komatsu.
            var index = _.findLastIndex(this.music, function (note) { return note.index == _this.selectedNoteIndex; });
            return this.music[index];
        },
        enumerable: true,
        configurable: true
    });
    Music.prototype.write = function (pitch, measure, position, extension) {
        if (extension === void 0) { extension = 1; }
        var index = this.selectedNoteIndex = this.noteIndex++;
        this.music.push({ index: index, pitch: pitch, measure: measure, position: position, extension: extension });
        this.$.triggerHandler(this.constants.events["write"]);
    };
    Music.prototype.erase = function () {
        this.music.splice(this.selectedNoteIndex, 1);
        this.$.triggerHandler(this.constants.events["erase"]);
        this.refreshSelect();
    };
    Music.prototype.changeExtension = function (addedExtension) {
        this.getSelectedNote.extension += addedExtension;
        if (this.getSelectedNote.extension + addedExtension < 1) {
            this.getSelectedNote.extension = 1;
        }
        this.$.triggerHandler(this.constants.events["extension"]);
    };
    Music.prototype.refreshSelect = function () {
        this.selectedNoteIndex = null;
        this.$.triggerHandler(this.constants.events["refresh"]);
    };
    Music.prototype.onWrite = function (handler) {
        return this.$.bind(this.constants.events["write"], handler);
    };
    Music.prototype.onErase = function (handler) {
        return this.$.bind(this.constants.events["erase"], handler);
    };
    Music.prototype.onChangeExtension = function (handler) {
        return this.$.bind(this.constants.events["extension"], handler);
    };
    Music.prototype.onRefrechSelect = function (handler) {
        return this.$.bind(this.constants.events["refresh"], handler);
    };
    return Music;
})(Model);
//# sourceMappingURL=Music.js.map