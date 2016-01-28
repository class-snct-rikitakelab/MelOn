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
    MusicStorage.prototype.saveConfirm = function (music) {
        this.postMusic = music;
        if (localStorage.getItem("music")) {
            this.onSaveConfirm.dispatch();
            return;
        }
        this.save();
    };
    MusicStorage.prototype.saveInDB = function (music) {
        console.log(music);
        $.ajax({
            url: this.constants.musicSaveUrl,
            type: "post",
            data: "music=" + music,
            async: false,
            success: function (data) { console.log(data); }
        });
    };
    MusicStorage.prototype.save = function () {
        var music = JSON.stringify(this.postMusic);
        localStorage.setItem("music", music);
        this.saveInDB(music);
        this.onSave.dispatch();
    };
    MusicStorage.prototype.loadConfirm = function () {
        this.postMusic = JSON.parse(localStorage.getItem("music"));
        this.onLoadConfirm.dispatch(this.postMusic ? true : false);
    };
    MusicStorage.prototype.load = function () {
        this.onLoad.dispatch(this.postMusic);
    };
    return MusicStorage;
})(Model);
//# sourceMappingURL=MusicStorage.js.map