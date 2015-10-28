/// <reference path="../Lesson.ref.ts"/>

class NextButton extends DOMView {

    private lessonData: LessonData = this.models["lessonData"];
    private achievement: Achievement = this.models["achievement"];
    private musicPlayer: MusicPlayer = this.models["musicPlayer"];

    constructor(game: Phaser.Game, private constants: LESSON.NextButton, models: Object) {
        super(game, constants, models);
        this.setEvents();
    }

    private setEvents() {
        this.achievement.onFinish.add(() => { this.finish(); });
        this.musicPlayer.onStop.add(() => { this.active(); });
        this.$.mousedown(() => { this.game.sound.play("boo"); });
        this.$.select(() => { return false; });
    }

    private setSelectEffect() {
        this.$.hover(() => { this.$.css("box-shadow", "0 0 20px 6px lawngreen"); this.game.sound.play("select") },
            () => { this.$.css("box-shadow", "none"); });
    }

    private finish() {
        this.game.sound.stopAll();
        this.game.sound.play("load");
        alert("Good Job! Try to play the music!");
        this.$.mousedown(() => { alert("Play the music!"); });
    }

    private active() {
        if (!this.achievement.isFinished) return;
        this.game.sound.stopAll();
        this.game.sound.play("save");
        alert("Excellent! push Next button to go on!");
        this.$.css("background-color", "orange");
        this.setSelectEffect();
        this.$.unbind("mousedown");
        this.$.mousedown(() => {
            this.game.sound.play("decide");
            setTimeout(() => { document.location = <any>this.lessonData.getNextUrl; }, 500);
        });
    }
}