/// <reference path="../FreeMakingMusic.ref.ts"/>

class ModalWindow extends DOMView {

    private musicStorage: MusicStorage = this.models["musicStorage"];
    private lang = this.constants.language;

    onOk: Phaser.Signal = new Phaser.Signal();
    onYes: Phaser.Signal = new Phaser.Signal();
    onNo: Phaser.Signal = new Phaser.Signal();

    constructor(game: Phaser.Game, private constants: CONSTANTS.ModalWindow, models: Object) {
        super(game, constants, models);
        this.setView();
        this.setEvent();
    }

    private setView() {
    }

    private setEvent() {
        this.musicStorage.onSaveConfirm.add(() => { this.saveConfirm(); });
        this.musicStorage.onSave.add(() => { this.save(); });
        this.musicStorage.onLoadConfirm.add((exist: boolean) => { this.loadConfirm(exist); });
        this.musicStorage.onLoad.add(() => { this.load(); });
    }




    protected close() {
        var overlay = $(this.toId(this.constants.modalIds.overlay));
        overlay.fadeOut( () => { overlay.remove(); });
    }

    private makeOverlay(): JQuery {
        var id = this.constants.modalIds.overlay;
        return this.makeDiv(id).on(this.pushEvent(), (e) => {
            if (e.target.id === id) { this.game.sound.play("close"); this.close(); }
        });
    }

    private makeButton(id: string, text: string): JQuery {
        var button = this.makeDiv(id).addClass(this.constants.modalClasses.button).text(text);
        return button.hover(() => { button.css("box-shadow", "0 0 10px 3px orange"); this.game.sound.play("select") },
            () => { button.css("box-shadow", "none"); })
            .on(this.pushEvent(), () => { this.close(); });
    }

    private makeMessage(text: string): JQuery {
        return this.makeDiv(this.constants.modalIds.message).text(text);
    }

    private makeWindow(): JQuery {
        return this.makeDiv(this.constants.modalIds.window);
    }

    private alertAssemble(text: string): JQuery {
        var overlay = this.makeOverlay();
        var window = this.makeWindow();
        var message = this.makeMessage(text);
        var okButton = this.makeButton(this.constants.modalIds.ok, this.constants.okText[this.lang])
            .on(this.pushEvent(), () => { this.game.sound.play("decide"); this.onOk.dispatch(); });
        window.append(message).append(okButton);
        return overlay.append(window);
    }

    private confirmAssemble(text: string): JQuery {
        var overlay = this.makeOverlay();
        var window = this.makeWindow();
        var message = this.makeMessage(text);
        var yesButton = this.makeButton(this.constants.modalIds.yes, this.constants.yesText[this.lang])
            .on(this.pushEvent(), () => { this.onNo.removeAll(); this.onYes.dispatch(); });
        var noButton = this.makeButton(this.constants.modalIds.no, this.constants.noText[this.lang])
            .on(this.pushEvent(), () => { this.onYes.removeAll(); this.onNo.dispatch(); });
        window.append(message).append(yesButton).append(noButton);
        return overlay.append(window);
    }

    protected alert(text: string) {
        if ($(this.constants.modalIds.overlay)[0]) $(this.constants.modalIds.overlay).remove();
        this.$.append(this.alertAssemble(text).fadeIn());
    }

    protected confirm(text: string) {
        if ($(this.constants.modalIds.overlay)[0]) $(this.constants.modalIds.overlay).remove();
        this.$.append(this.confirmAssemble(text).fadeIn());
    }






    saveConfirm() {
        this.game.sound.play("decide");
        this.onYes.addOnce(() => { this.musicStorage.save(); });
        this.onNo.addOnce(() => { this.game.sound.play("close"); });
        this.confirm(this.constants.loadConfirmMsg[this.lang]);
    }

    save() {
        this.game.sound.play("save");
        this.alert(this.constants.saveMsg[this.lang]);
    }

    loadConfirm(exist: boolean) {
        this.game.sound.play("decide");
        if (!exist) { this.loadFailed(); return; }
        this.onYes.addOnce(() => { this.musicStorage.load(); });
        this.onNo.addOnce(() => { this.game.sound.play("close"); });
        this.confirm(this.constants.loadConfirmMsg[this.lang]);
    }

    loadFailed() {
        this.game.sound.play("boo");
        this.alert(this.constants.loadFailMsg[this.lang]);
    }

    load() {
        this.game.sound.play("load");
    }
}