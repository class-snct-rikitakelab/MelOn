/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StorageModal = (function (_super) {
    __extends(StorageModal, _super);
    function StorageModal(game, constants, models) {
        _super.call(this, game, constants.modalConstants, models);
        this.constants = constants;
        this.musicStorage = this.models["musicStorage"];
        this.setEvent();
    }
    StorageModal.prototype.setEvent = function () {
        var _this = this;
        this.musicStorage.onSaveConfirm.add(function () { _this.saveConfirm(); });
        this.musicStorage.onSave.add(function () { _this.save(); });
        this.musicStorage.onLoadConfirm.add(function (exist) { _this.loadConfirm(exist); });
        this.musicStorage.onLoad.add(function () { _this.load(); });
    };
    StorageModal.prototype.saveConfirm = function () {
        var _this = this;
        this.game.sound.play("decide");
        this.onYes.addOnce(function () { _this.musicStorage.save(); });
        this.onNo.addOnce(function () { _this.game.sound.play("close"); });
        this.confirm(this.constants.loadConfirmMsg[this.lang]);
    };
    StorageModal.prototype.save = function () {
        this.game.sound.play("save");
        this.alert(this.constants.saveMsg[this.lang]);
    };
    StorageModal.prototype.loadConfirm = function (exist) {
        var _this = this;
        this.game.sound.play("decide");
        if (!exist) {
            this.loadFailed();
            return;
        }
        this.onYes.addOnce(function () { _this.musicStorage.load(); });
        this.onNo.addOnce(function () { _this.game.sound.play("close"); });
        this.confirm(this.constants.loadConfirmMsg[this.lang]);
    };
    StorageModal.prototype.loadFailed = function () {
        this.game.sound.play("boo");
        this.alert(this.constants.loadFailMsg[this.lang]);
    };
    StorageModal.prototype.load = function () {
        this.game.sound.play("load");
    };
    return StorageModal;
})(ModalWindow);
//# sourceMappingURL=StorageModal.js.map