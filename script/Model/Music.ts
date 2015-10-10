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
    private selectedNoteIndex: number;

    constructor(game: Phaser.Game, private constants: CONSTANTS.Music) {
        super(game, constants); 
    }

    get getSelectedNoteIndex(): number {
        return this.noteIndex;
    }

    get getSelectedNoteData(): NoteData{
        return this.music[this.selectedNoteIndex];
    }

    write(pitch: string, measure: number, position: number, extension: number = 0) {
        let index = this.selectedNoteIndex = this.noteIndex++;
        this.music.push({index, pitch, measure, position, extension});
        this.$.triggerHandler(this.constants.events["write"]);
    }

    erase(index: number) {
        this.music.splice(index, 1);
        this.$.triggerHandler(this.constants.events["erase"]);
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