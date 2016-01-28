/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MusicStorage = (function (_super) {
    __extends(MusicStorage, _super);
    function MusicStorage(constants) {
        _super.call(this, constants);
        this.constants = constants;
        this.onSaveConfirm = new Phaser.Signal();
        this.onLoadConfirm = new Phaser.Signal();
        this.onSave = new Phaser.Signal();
        this.onLoad = new Phaser.Signal();
    }
    MusicStorage.prototype.isLogIn = function () {
        var isLogIn = false;
        $.ajax({
            url: this.constants.userNameUrl,
            async: false,
            success: function (name, state) { if (name != "")
                isLogIn = true; }
        });
        return isLogIn;
    };
    MusicStorage.prototype.musicExistInDB = function () {
        var existMusic = false;
        $.ajax({
            url: this.constants.musicExistUrl,
            async: false,
            success: function (data, state) { if (data == "true")
                existMusic = true; }
        });
        return existMusic;
    };
    MusicStorage.prototype.saveConfirm = function (music) {
        this.postMusic = music;
        if (this.isLogIn()) {
            if (this.musicExistInDB()) {
                this.onSaveConfirm.dispatch();
                return;
            }
        }
        else {
            if (localStorage.getItem("music")) {
                this.onSaveConfirm.dispatch();
                return;
            }
        }
        this.save();
    };
    MusicStorage.prototype.saveInDB = function (music) {
        $.ajax({
            url: this.constants.musicSaveUrl,
            type: "post",
            data: "music=" + music,
            async: false,
            success: function (data, state) { console.log(data, state); }
        });
    };
    MusicStorage.prototype.save = function () {
        var music = JSON.stringify(this.postMusic);
        localStorage.setItem("music", music);
        this.saveInDB(music);
        this.onSave.dispatch();
    };
    MusicStorage.prototype.loadConfirm = function () {
        if (this.isLogIn()) {
            this.onLoadConfirm.dispatch(this.musicExistInDB());
            return;
        }
        this.postMusic = JSON.parse(localStorage.getItem("music"));
        this.onLoadConfirm.dispatch(this.postMusic ? true : false);
    };
    MusicStorage.prototype.load = function () {
        var _this = this;
        if (this.isLogIn()) {
            $.ajax({
                url: this.constants.musicLoadUrl,
                async: false,
                success: function (music, state) { _this.postMusic = JSON.parse(music); console.log("success", music); }
            });
        }
        this.onLoad.dispatch(this.postMusic);
    };
    return MusicStorage;
})(Model);
//# sourceMappingURL=MusicStorage.js.map