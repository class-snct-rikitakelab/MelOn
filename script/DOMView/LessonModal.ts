/// <reference path="../Lesson.ref.ts"/>

class LessonModal extends ModalWindow {

    private achievement: Achievement = this.models["achievement"];

    constructor(game: Phaser.Game, private constants: LESSON.LessonModal, models: Object) {
        super(game, constants.modalConstants, models);
        this.setEvents();
    }

    private setEvents() {
        this.achievement.onFinish.add(() => { this.finish(); });
        this.achievement.onPlayAlert.add(() => { this.playAlert(); });
        this.achievement.onStopAlert.add(() => { this.stopAlert(); });
        this.achievement.onActive.add(() => { this.active(); });
    }

    private finish() {
        this.game.sound.stopAll();
        this.game.sound.play("load");
        this.alert(this.constants.TryMsg);
    }

    private playAlert() {
        this.alert(this.constants.playMsg);
    }

    private stopAlert() {
        this.alert(this.constants.stopMsg);
    }

    private active() {
        this.game.sound.stopAll();
        this.game.sound.play("save");
        this.alert(this.constants.goNextMsg);
    }
}