/// <reference path="../Lesson.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LessonMelOn = (function (_super) {
    __extends(LessonMelOn, _super);
    function LessonMelOn() {
        _super.apply(this, arguments);
        // ========== Model ==========
        this.lessonData = new LessonData(new LESSON.LessonData);
        this.achievement = new Achievement(new LESSON.Achievement, this.lessonData.getMode);
    }
    LessonMelOn.prototype.create = function () {
        this.noteOverlapManager = new NoteOverlapManager(this.game);
        this.stationeryToggler = new StationeryToggler(this.game, new CONSTANTS.StationeryToggler, { stationery: this.stationery });
        this.pencil = new StationeryButton(this.game, new CONSTANTS.Pencil, { stationery: this.stationery });
        this.eraser = new StationeryButton(this.game, new CONSTANTS.Eraser, { stationery: this.stationery });
        this.speedDisplay = new SpeedDisplay(this.game, new CONSTANTS.SpeedDisplay, { speed: this.speed });
        this.speedUpButton = new SpeedButton(this.game, new CONSTANTS.SpeedUpButton, { speed: this.speed });
        this.speedDownButton = new SpeedButton(this.game, new CONSTANTS.SpeedDownButton, { speed: this.speed });
        this.playButton = new PlayButton(this.game, new CONSTANTS.PlayButton, { musicPlayer: this.musicPlayer });
        this.saveButton = new SaveButton(this.game, new CONSTANTS.SaveButton, { music: this.music, musicStorage: this.musicStorage });
        this.loadButton = new LoadButton(this.game, new CONSTANTS.LoadButton, { music: this.music, musicStorage: this.musicStorage });
        this.instrumentMenu = new InstrumentMenu(this.game, new CONSTANTS.InstrumentMenu, { instrument: this.instrument, musicPlayer: this.musicPlayer });
        this.soundButtonContainer = new SoundButtonContainer(this.game, new CONSTANTS.SoundButtonContainer, { instrument: this.instrument });
        this.scoreSheet = new LessonScoreSheet(this.game, new CONSTANTS.ScoreSheet, { music: this.music, stationery: this.stationery, musicPlayer: this.musicPlayer, lessonData: this.lessonData, achievement: this.achievement });
        this.notes = new LessonNotes(this.game, new CONSTANTS.Notes, { music: this.music, musicPlayer: this.musicPlayer, instrument: this.instrument, stationery: this.stationery, noteOverlapManager: this.noteOverlapManager, lessonData: this.lessonData, achievement: this.achievement });
        this.targetNotes = new TargetNotes(this.game, new LESSON.TargetNotes, { music: this.music, lessonData: this.lessonData, achievement: this.achievement });
        if (this.lessonData.getMode === new LESSON.Achievement().mode.filling)
            this.blanks = new Blanks(this.game, new LESSON.Blanks, { music: this.music, lessonData: this.lessonData, achievement: this.achievement });
        if (this.lessonData.getInherit)
            this.loadButton.setMusic(this.lessonData.getInherit);
        this.musicPlayBar = new MusicPlayBar(this.game, new CONSTANTS.MusicPlayBar, { music: this.music, instrument: this.instrument, musicPlayer: this.musicPlayer, noteOverlapManager: this.noteOverlapManager, speed: this.speed });
        this.upButton = new ScrollButton(this.game, new CONSTANTS.UpButton, { music: this.music, });
        this.downButton = new ScrollButton(this.game, new CONSTANTS.DownButton, { music: this.music, });
        this.rightButton = new ScrollButton(this.game, new CONSTANTS.RightButton, { music: this.music, });
        this.leftButton = new LessonScrollButton(this.game, new CONSTANTS.LeftButton, { music: this.music, achievement: this.achievement });
        this.storageModal = new StorageModal(this.game, new CONSTANTS.StorageModal, { musicStorage: this.musicStorage });
        this.nextButton = new NextButton(this.game, new LESSON.NextButton, { lessonData: this.lessonData, achievement: this.achievement, musicPlayer: this.musicPlayer });
        this.lessonModal = new LessonModal(this.game, new LESSON.LessonModal, { music: this.music, achievement: this.achievement, lessonData: this.lessonData });
    };
    return LessonMelOn;
})(MelOn);
//# sourceMappingURL=LessonMelOn.js.map