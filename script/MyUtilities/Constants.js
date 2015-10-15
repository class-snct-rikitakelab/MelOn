/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// We have to consider order inside each class due to JavaScript codes.
// By using clesses in namespace, we can set inheritable constants!
// And by using interface, it will be safe for the parent class of child classes.
// If we don't use export, we can hide the classes.
var CONSTANTS;
(function (CONSTANTS) {
    //
    // ========== Game Constants ==========
    //
    var Game = (function () {
        function Game() {
            this.width = new MeasureSheet().width * new ScoreSheet().displayMeasureNum;
            this.height = new Note().height * new ScoreSheet().displayPitchNum;
            this.renderer = "score";
            this.imageAddress = "storage/assets/image/";
        }
        return Game;
    })();
    CONSTANTS.Game = Game;
    var Music = (function () {
        function Music() {
            this.unitNote = 8;
            this.measureNum = 4;
            this.pitch = ["C5",
                "B4", "A4", "G4", "F4", "E4", "D4", "C4",
                "B3", "A3", "G3", "F3", "E3", "D3", "C3",
                "B2", "A2", "G2", "F2", "E2", "D2", "C2",
            ];
            this.pitchNum = this.pitch.length;
            this.writeStationery = new Stationery().writeStationery;
            this.eraseStationery = new Stationery().eraseStationery;
        }
        return Music;
    })();
    CONSTANTS.Music = Music;
    var Stationery = (function () {
        function Stationery() {
            this.writeStationery = "pencil";
            this.eraseStationery = "eraser";
            this.initStationery = this.writeStationery;
        }
        return Stationery;
    })();
    CONSTANTS.Stationery = Stationery;
    var Instrument = (function () {
        function Instrument() {
            this.pitch = new Music().pitch;
            this.pitchNum = this.pitch.length;
            this.initInstrument = 0;
            this.instruments = [
                "piano",
            ];
        }
        return Instrument;
    })();
    CONSTANTS.Instrument = Instrument;
    var MusicPlayer = (function () {
        function MusicPlayer() {
        }
        return MusicPlayer;
    })();
    CONSTANTS.MusicPlayer = MusicPlayer;
    var PreloadBar = (function () {
        function PreloadBar() {
            this.width = new MeasureSheet().width;
            this.height = new Note().height;
            this.x = new Game().width / 2;
            this.y = new Game().height / 2;
            this.initImage = "preloadBar";
            this.images = {
                preloadBar: "preloadBar"
            };
        }
        return PreloadBar;
    })();
    CONSTANTS.PreloadBar = PreloadBar;
    var Background = (function () {
        function Background() {
            this.width = new Game().width;
            this.height = new Game().height;
            this.x = 0;
            this.y = 0;
            this.initImage = "background";
            this.images = {
                background: "background",
            };
        }
        return Background;
    })();
    CONSTANTS.Background = Background;
    var Note = (function (_super) {
        __extends(Note, _super);
        function Note() {
            _super.apply(this, arguments);
            this.width = new MeasureSheet().width / this.unitNote;
            this.height = new MeasureSheet().height / this.pitchNum;
            this.x = 0;
            this.y = 0;
            this.initImage = "note";
            this.images = {
                note: "note",
            };
            this.fadeTime = 100;
        }
        return Note;
    })(Music);
    CONSTANTS.Note = Note;
    var MeasureSheet = (function (_super) {
        __extends(MeasureSheet, _super);
        function MeasureSheet() {
            _super.apply(this, arguments);
            this.width = 320;
            this.height = 50 * this.pitchNum;
            this.x = 0;
            this.y = 0;
            this.initImage = "score";
            this.images = {
                score: "score",
            };
            this.noteWidth = this.width / this.unitNote;
            this.noteHeight = 50;
        }
        return MeasureSheet;
    })(Music);
    CONSTANTS.MeasureSheet = MeasureSheet;
    var MusicPlayBar = (function (_super) {
        __extends(MusicPlayBar, _super);
        function MusicPlayBar() {
            _super.apply(this, arguments);
            this.width = 10;
            this.height = new MeasureSheet().height;
            this.x = 0;
            this.y = 0;
            this.initImage = "bar";
            this.images = {
                bar: "musicPlayBar",
            };
        }
        return MusicPlayBar;
    })(Music);
    CONSTANTS.MusicPlayBar = MusicPlayBar;
    var ScoreSheet = (function (_super) {
        __extends(ScoreSheet, _super);
        function ScoreSheet() {
            _super.apply(this, arguments);
            this.displayMeasureNum = 2;
            this.displayPitchNum = 7;
        }
        return ScoreSheet;
    })(MeasureSheet);
    CONSTANTS.ScoreSheet = ScoreSheet;
    var Notes = (function (_super) {
        __extends(Notes, _super);
        function Notes() {
            _super.apply(this, arguments);
        }
        return Notes;
    })(MeasureSheet);
    CONSTANTS.Notes = Notes;
    var StationeryButton = (function () {
        function StationeryButton() {
            this.imageAddress = new Game().imageAddress + "stationeryButton/";
            this.class = {
                buttonImage: "buttonImage",
            };
            this.onColor = "red";
            this.offColor = "blue";
        }
        return StationeryButton;
    })();
    CONSTANTS.StationeryButton = StationeryButton;
    var Pencil = (function (_super) {
        __extends(Pencil, _super);
        function Pencil() {
            _super.apply(this, arguments);
            this.selector = "#pencil";
            this.name = new Stationery().writeStationery;
            this.images = {
                image: this.imageAddress + "pencil.png",
            };
        }
        return Pencil;
    })(StationeryButton);
    CONSTANTS.Pencil = Pencil;
    var Eraser = (function (_super) {
        __extends(Eraser, _super);
        function Eraser() {
            _super.apply(this, arguments);
            this.selector = "#eraser";
            this.name = new Stationery().eraseStationery;
            this.images = {
                image: this.imageAddress + "eraser.png",
            };
        }
        return Eraser;
    })(StationeryButton);
    CONSTANTS.Eraser = Eraser;
    var PlayButton = (function () {
        function PlayButton() {
            this.selector = "#play";
            this.class = {
                buttonImage: "buttonImage",
            };
            this.images = {
                image: new Game().imageAddress + "playButton/playButton.png",
            };
            this.onColor = "orange";
            this.offColor = "green";
        }
        return PlayButton;
    })();
    CONSTANTS.PlayButton = PlayButton;
})(CONSTANTS || (CONSTANTS = {}));
//# sourceMappingURL=Constants.js.map