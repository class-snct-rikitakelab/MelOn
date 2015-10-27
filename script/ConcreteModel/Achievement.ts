/// <reference path="../Lesson.ref.ts"/>

class Achievement extends Model {

    private isMatched = false;
    onMatch: Phaser.Signal = new Phaser.Signal;

    constructor(private constants: LESSON.Achievement) {
        super(constants);
    }

    private sortMusic(music: MusicData): MusicData {
        return _.each(music, (line, pitch, music) => {
            music[pitch] = _.sortBy(line, (note) => { return note.start / note.unitNote; });
        });
    }

    checkMusic(target: MusicData, music: MusicData) {
        if (!this.isMatched && _.isEqual(this.sortMusic(target), this.sortMusic(music))) {
            this.isMatched = true;
            this.onMatch.dispatch();
        }
    }
}