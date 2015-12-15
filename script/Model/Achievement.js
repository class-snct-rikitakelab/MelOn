/// <reference path="../Lesson.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Achievement = (function (_super) {
    __extends(Achievement, _super);
    function Achievement(constants, mode) {
        _super.call(this, constants);
        this.constants = constants;
        this.mode = mode;
        this.traced = false;
        this.filled = (this.mode === this.constants.mode.filling) ? false : true;
        this.finished = false;
        this.activated = false;
        this.restTrace = 0;
        this.restFilling = 0;
        this.red = 0;
        this.onFinish = new Phaser.Signal;
        this.onPlayAlert = new Phaser.Signal;
        this.onStopAlert = new Phaser.Signal;
        this.onActivate = new Phaser.Signal;
        this.onChangeRestTraceNum = new Phaser.Signal;
        this.onChangeRestFillingNum = new Phaser.Signal;
        this.onChangeRedNum = new Phaser.Signal;
    }
    Object.defineProperty(Achievement.prototype, "isAchieved", {
        get: function () {
            return this.traced && this.filled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Achievement.prototype, "isFinished", {
        get: function () {
            return this.finished;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Achievement.prototype, "isActivated", {
        get: function () {
            return this.activated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Achievement.prototype, "redNum", {
        get: function () {
            return this.red;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Achievement.prototype, "restTraceNum", {
        get: function () {
            return this.restTrace;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Achievement.prototype, "restFillingNum", {
        get: function () {
            return this.restFilling;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Achievement.prototype, "changeRedNum", {
        set: function (num) {
            this.red = num;
            this.onChangeRedNum.dispatch();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Achievement.prototype, "changeRestTraceNum", {
        set: function (num) {
            this.restTrace = num;
            this.onChangeRestTraceNum.dispatch();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Achievement.prototype, "changeRestFillingNum", {
        set: function (num) {
            this.restFilling = num;
            this.onChangeRestFillingNum.dispatch();
        },
        enumerable: true,
        configurable: true
    });
    Achievement.prototype.playAlertCheck = function () {
        if (this.isFinished && !this.isActivated) {
            this.playAlert();
            return false;
        }
        return true;
    };
    Achievement.prototype.playAlert = function () {
        this.onPlayAlert.dispatch();
    };
    Achievement.prototype.stopAlert = function () {
        this.onStopAlert.dispatch();
    };
    Achievement.prototype.activate = function () {
        this.activated = true;
        this.onActivate.dispatch();
    };
    Achievement.prototype.sortMusic = function (music) {
        return _.each(music, function (line, pitch, music) {
            music[pitch] = _.sortBy(line, function (note) {
                return note.start / note.unitNote;
            });
        });
    };
    Achievement.prototype.includeTrace = function (target, music) {
        var ret = true;
        _.each(target, function (line) {
            _.each(line, function (targetNote) {
                ret = ret && _.some(music[targetNote.pitch], function (musicNote) { return _.isEqual(targetNote, musicNote); });
            });
        });
        return ret;
    };
    Achievement.prototype.checkTrace = function (target, music) {
        if (this.mode === this.constants.mode.filling) {
            this.traced = !this.finished && this.includeTrace(this.sortMusic(target), this.sortMusic(music));
        }
        else
            this.traced = !this.finished && _.isEqual(this.sortMusic(target), this.sortMusic(music));
        this.checkFinish();
    };
    Achievement.prototype.scanBlanks = function (blanks, unitNote, music) {
        var _this = this;
        var ret = true;
        blanks.forEach(function (blank) {
            var oneBlank = false;
            for (var i = blank[0]; i <= blank[1]; i++) {
                oneBlank = oneBlank || _this.constants.pitch.some(function (pitch) {
                    return music.checkExist(pitch, unitNote, i);
                });
            }
            ret = ret && oneBlank;
        });
        return ret;
    };
    Achievement.prototype.checkFill = function (blanks, unitNote, music) {
        this.filled = !this.finished && this.scanBlanks(blanks, unitNote, music);
        this.checkFinish();
    };
    Achievement.prototype.checkFinish = function () {
        if (!this.finished && this.isAchieved && this.red === 0) {
            this.finished = true;
            this.onFinish.dispatch();
        }
    };
    return Achievement;
})(Model);
//# sourceMappingURL=Achievement.js.map