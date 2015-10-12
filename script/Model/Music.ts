/// <reference path="../reference.ts"/>

interface NoteData {
    pitch: string;
    unitNote: number;
    start: number;
    extension: number;
}

class Music extends Model {
    private music: { [pitch: string]: NoteData[] };
    private selectedNote: NoteData = null;

    constructor(game: Phaser.Game, private constants: CONSTANTS.Music) {
        super(game, constants);
        this.music = <any>_.object(this.constants.pitch, _.times(this.constants.pitchNum, () => { return [] }));
    }

    checkExist(pitch: string, unitNote: number, point: number): boolean {
        return this.music[pitch].some((note: NoteData) => { return note.start <= point && point <= note.start + note.extension; });
    }

    get getSelectedNote(): NoteData {
        return this.selectedNote;
    }

    select(noteData: NoteData) {
        this.selectedNote = noteData;
        this.$.triggerHandler(this.constants.events["select"]);
    }

    refresh() {
        this.selectedNote = null;
        this.$.triggerHandler(this.constants.events["refresh"]);
    }

    write(pitch: string, measure: number, unitNote: number, position: number, extension: number = 0) {
        var start = measure * unitNote + position;
        this.select(this.music[pitch][this.music[pitch].push({ pitch, unitNote, start, extension }) - 1]);
        this.$.triggerHandler(this.constants.events["write"]);
    }

    erase(noteData: NoteData) {
        this.music[noteData.pitch].splice(this.music[noteData.pitch].indexOf(noteData), 1);
        this.$.triggerHandler(this.constants.events["erase"]);
    }

    lengthen() {
        var note: NoteData = this.getSelectedNote;
        if (this.checkExist(note.pitch, note.unitNote, note.start + note.extension + 1)) return;
        note.extension++;
        this.$.triggerHandler(this.constants.events["extension"]);
    }

    shorten() {
        var note: NoteData = this.getSelectedNote;
        note.extension--;
        if (note.extension < 0) note.extension = 0;
        this.$.triggerHandler(this.constants.events["extension"]);
    }

    onSelect(handler: () => any): JQuery { return this.$.bind(this.constants.events["select"], handler); }
    onRefresh(handler: () => any): JQuery { return this.$.bind(this.constants.events["refresh"], handler); }
    onWrite(handler: () => any): JQuery { return this.$.bind(this.constants.events["write"], handler); }
    onErase(handler: () => any): JQuery { return this.$.bind(this.constants.events["erase"], handler); }
    onChangeExtension(handler: () => any): JQuery { return this.$.bind(this.constants.events["extension"], handler); }
}