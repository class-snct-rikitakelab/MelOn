/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Note = (function (_super) {
    __extends(Note, _super);
    function Note(game, constants, models, x, y) {
        var _this = this;
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.isStreching = true;
        this.isMoving = false;
        this.pointer = this.game.device.touch ? this.game.input.pointer1 : this.game.input.activePointer;
        this.music = this.models["music"];
        this.stationery = this.models["stationery"];
        this.index = this.music.getSelectedNoteIndex;
        this.music.onChangeExtension(function () { _this.changeExtension(); });
        this.setPosition(x, y);
        this.setInput();
    }
    Note.prototype.setInput = function () {
        var _this = this;
        this.inputEnabled = true;
        this.input.useHandCursor = true;
        this.events.onInputDown.add(function () { _this.touchNote(); });
    };
    Object.defineProperty(Note.prototype, "getIndex", {
        get: function () {
            return this.index;
        },
        enumerable: true,
        configurable: true
    });
    Note.prototype.touchNote = function () {
        this.music.select(this.index);
        if (this.stationery.getStationery === this.constants.eraseStationery) {
            this.erase();
        }
        if (this.stationery.getStationery === this.constants.writeStationery) {
            this.moveStart();
        }
    };
    Note.prototype.erase = function () {
        this.destroy();
        this.music.erase();
    };
    Note.prototype.moveStart = function () {
    };
    Note.prototype.changeExtension = function () {
        if (this.music.getSelectedNoteIndex === this.index) {
            this.setSize(this.constants.width * this.music.getSelectedNote.extension, this.height);
        }
    };
    Note.prototype.update = function () {
        this.lengthenNote();
        this.shortenNote();
    };
    Note.prototype.lengthenNote = function () {
        var juttingOut = this.pointer.x - (this.x + this.width);
        if (juttingOut > 0) {
            this.music.changeExtension(Math.ceil(juttingOut / this.constants.width));
        }
    };
    Note.prototype.shortenNote = function () {
        var juttingIn = this.pointer.x - (this.x + this.width - this.constants.width);
        if (juttingIn < 0) {
            this.music.changeExtension(Math.floor(juttingIn / this.constants.width));
        }
    };
    return Note;
})(SpriteView);
//# sourceMappingURL=Note.js.map