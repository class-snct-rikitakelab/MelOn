/// <reference path="../reference.ts"/>

interface NoteData {
    index: number;
    pitch: string;
    measure: number;
    position: number;
    extension: number;
}

class Music extends Model {
    private music: Array<NoteData> = [];
    private noteIndex: number = 0; // 有限だが、9千兆くらいまで数えられる
    private selectedNoteIndex: number = null;

    constructor(game: Phaser.Game, private constants: CONSTANTS.Music) {
        super(game, constants); 
    }

    get getSelectedNoteIndex(): number {
        return this.selectedNoteIndex;
    }

    get getSelectedNoteData(): NoteData{
        // Caution : _.findLastIndex is added to declaration file by Shusei Komatsu.
        var index = _.findLastIndex(this.music, (note: NoteData) => { return note.index == this.selectedNoteIndex });
        return this.music[index];
    }

    write(pitch: string, measure: number, position: number, extension: number = 0) {
        var index = this.selectedNoteIndex = this.noteIndex++;
        this.music.push({index, pitch, measure, position, extension});
        this.$.triggerHandler(this.constants.events["write"]);
    }

    erase() {
        this.music.splice(this.selectedNoteIndex, 1);
        this.$.triggerHandler(this.constants.events["erase"]);
        this.refreshSelect();
    }

    select(index: number) {
        this.selectedNoteIndex = index;
    }

    refreshSelect() {
        this.selectedNoteIndex = null;
    }

    onWrite(handler: () => any): JQuery {
        return this.$.bind(this.constants.events["write"], handler);
    }

    onErase(handler: () => any): JQuery {
        return this.$.bind(this.constants.events["erase"], handler);
    }
}