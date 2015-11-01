/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ModalWindow = (function (_super) {
    __extends(ModalWindow, _super);
    function ModalWindow(game, constants, models) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.musicStorage = this.models["musicStorage"];
        this.lang = this.constants.language;
        this.onOk = new Phaser.Signal();
        this.onYes = new Phaser.Signal();
        this.onNo = new Phaser.Signal();
        this.setView();
        this.setEvent();
    }
    ModalWindow.prototype.setView = function () {
    };
    ModalWindow.prototype.setEvent = function () {
        var _this = this;
        this.musicStorage.onSaveConfirm.add(function () { _this.saveConfirm(); });
        this.musicStorage.onSave.add(function () { _this.save(); });
        this.musicStorage.onLoadConfirm.add(function (exist) { _this.loadConfirm(exist); });
        this.musicStorage.onLoad.add(function () { _this.load(); });
    };
    ModalWindow.prototype.close = function () {
        var overlay = $(this.toId(this.constants.modalIds.overlay));
        overlay.fadeOut(function () { overlay.remove(); });
    };
    ModalWindow.prototype.makeOverlay = function () {
        var _this = this;
        var id = this.constants.modalIds.overlay;
        return this.makeDiv(id).on(this.pushEvent(), function (e) {
            if (e.target.id === id) {
                _this.game.sound.play("close");
                _this.close();
            }
        });
    };
    ModalWindow.prototype.makeButton = function (id, text) {
        var _this = this;
        var button = this.makeDiv(id).addClass(this.constants.modalClasses.button).text(text);
        return button.hover(function () { button.css("box-shadow", "0 0 10px 3px orange"); _this.game.sound.play("select"); }, function () { button.css("box-shadow", "none"); })
            .on(this.pushEvent(), function () { _this.close(); });
    };
    ModalWindow.prototype.makeMessage = function (text) {
        return this.makeDiv(this.constants.modalIds.message).text(text);
    };
    ModalWindow.prototype.makeWindow = function () {
        return this.makeDiv(this.constants.modalIds.window);
    };
    ModalWindow.prototype.alertAssemble = function (text) {
        var _this = this;
        var overlay = this.makeOverlay();
        var window = this.makeWindow();
        var message = this.makeMessage(text);
        var okButton = this.makeButton(this.constants.modalIds.ok, this.constants.okText[this.lang])
            .on(this.pushEvent(), function () { _this.game.sound.play("decide"); _this.onOk.dispatch(); });
        window.append(message).append(okButton);
        return overlay.append(window);
    };
    ModalWindow.prototype.confirmAssemble = function (text) {
        var _this = this;
        var overlay = this.makeOverlay();
        var window = this.makeWindow();
        var message = this.makeMessage(text);
        var yesButton = this.makeButton(this.constants.modalIds.yes, this.constants.yesText[this.lang])
            .on(this.pushEvent(), function () { _this.onNo.removeAll(); _this.onYes.dispatch(); });
        var noButton = this.makeButton(this.constants.modalIds.no, this.constants.noText[this.lang])
            .on(this.pushEvent(), function () { _this.onYes.removeAll(); _this.onNo.dispatch(); });
        window.append(message).append(yesButton).append(noButton);
        return overlay.append(window);
    };
    ModalWindow.prototype.alert = function (text) {
        if ($(this.constants.modalIds.overlay)[0])
            $(this.constants.modalIds.overlay).remove();
        this.$.append(this.alertAssemble(text).fadeIn());
    };
    ModalWindow.prototype.confirm = function (text) {
        if ($(this.constants.modalIds.overlay)[0])
            $(this.constants.modalIds.overlay).remove();
        this.$.append(this.confirmAssemble(text).fadeIn());
    };
    ModalWindow.prototype.saveConfirm = function () {
        var _this = this;
        this.game.sound.play("decide");
        this.onYes.addOnce(function () { _this.musicStorage.save(); });
        this.onNo.addOnce(function () { _this.game.sound.play("close"); });
        this.confirm(this.constants.loadConfirmMsg[this.lang]);
    };
    ModalWindow.prototype.save = function () {
        this.game.sound.play("save");
        this.alert(this.constants.saveMsg[this.lang]);
    };
    ModalWindow.prototype.loadConfirm = function (exist) {
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
    ModalWindow.prototype.loadFailed = function () {
        this.game.sound.play("boo");
        this.alert(this.constants.loadFailMsg[this.lang]);
    };
    ModalWindow.prototype.load = function () {
        this.game.sound.play("load");
    };
    return ModalWindow;
})(DOMView);
//# sourceMappingURL=ModalWindow.js.map