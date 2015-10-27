/// <reference path="../Lesson.ref.ts"/>

class NextButton extends DOMView {

    private lessonData: LessonData = this.models["lessonData"];
    private achievement: Achievement = this.models["achievement"];
    private musicPlayer: MusicPlayer = this.models["musicPlayer"];

    constructor(game: Phaser.Game, private constants: LESSON.NextButton, models: Object) {
        super(game, constants, models);
        this.setView();
        this.setEvents();
    }

    private setView() {
    }

    private setEvents() {
        this.achievement.onMatch.add(() => { this.finish(); });
        this.musicPlayer.onStop.add(() => { this.active(); });
    }

    private finish() {
        this.game.sound.play("save");
        alert("Good Job! Go on lessons!");
        document.location = <any>this.lessonData.getNextUrl;
    }

    private active() {
    }
}