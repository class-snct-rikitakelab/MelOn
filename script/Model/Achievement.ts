/// <reference path="../Lesson.ref.ts"/>

class Achievement extends Model {

    private traced: boolean = false;
    private filled: boolean = (this.mode === this.constants.mode.filling) ? false : true;
    private finished: boolean = false;
	private activated: boolean = false;

    onFinish: Phaser.Signal = new Phaser.Signal;
    onPlayAlert: Phaser.Signal = new Phaser.Signal;
    onStopAlert: Phaser.Signal = new Phaser.Signal;
    onActivate: Phaser.Signal = new Phaser.Signal;

    constructor(private constants: LESSON.Achievement, private mode: string) {
        super(constants);
    }

    get isAchieved(): boolean {
        return this.traced && this.filled;
    }

	get isFinished(): boolean {
        return this.finished;
    }

	get isActivated(): boolean {
        return this.activated;
    }

	playAlertCheck(): boolean {
		if (this.isFinished && !this.isActivated) {
			this.playAlert();
			return false;
		}
		return true;
	}

    playAlert() {
        this.onPlayAlert.dispatch();
    }

    stopAlert() {
        this.onStopAlert.dispatch();
    }

    activate() {
		this.activated = true;
        this.onActivate.dispatch();
    }

    private sortMusic(music: MusicData): MusicData {
        return _.each(music, (line, pitch, music) => {
            music[pitch] = _.sortBy(line, (note) => {
                return note.start / note.unitNote;
            });
        });
    }

    private includeTrace(target: MusicData, music: MusicData): boolean {
        var ret = true;
        _.each(target, (line) => {
            _.each(line, (targetNote) => {
                ret = ret && _.some(music[targetNote.pitch], (musicNote) => { return _.isEqual(targetNote, musicNote); });
            });
        });
        return ret;
    }

    checkTrace(target: MusicData, music: MusicData) {
		if (this.mode === this.constants.mode.filling) {
            this.traced = !this.finished && this.includeTrace(this.sortMusic(target), this.sortMusic(music));
        }
        else this.traced = !this.finished && _.isEqual(this.sortMusic(target), this.sortMusic(music));
        this.checkFinish();
    }
    

    private scanBlanks(blanks: [number, number][], unitNote: number, music: Music) {
	    var ret = true;
        blanks.forEach((blank) => {
            var oneBlank = false;
            for (var i = blank[0]; i <= blank[1]; i++) {
                oneBlank = oneBlank || this.constants.pitch.some((pitch) => {
                    return music.checkExist(pitch, unitNote, i);
                });
            }
            ret = ret && oneBlank;
        });
        return ret;
    }

    checkFill(blanks: [number, number][], unitNote: number, music: Music) {
        this.filled = !this.finished && this.scanBlanks(blanks, unitNote, music);
        this.checkFinish();
    }

    checkFinish() {
        if (!this.finished && this.isAchieved) {
            this.finished = true;
            this.onFinish.dispatch();
        }
    }
}