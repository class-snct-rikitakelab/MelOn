/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// We have to consider order... due to JavaScript codes.
// By using clesses in namespace, we can set inheritable constants!
// And by using interface, it will be safe for the parent class of child classes.
// If we don't use export, we can hide the classes.
var CONSTANTS;
(function (CONSTANTS) {
    var Measure = (function () {
        function Measure() {
            this.width = 300;
            this.height = 50;
            this.minNote = 8; // of a whole note
            this.pitch = [
                "C2", "D2", "E2", "F2", "G2", "A2", "B2",
                "C3", "D3", "E3", "F3", "G3", "A3", "B3",
                "C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"
            ];
            this.pitchNum = this.pitch.length;
        }
        return Measure;
    })();
    CONSTANTS.Measure = Measure;
    var Score = (function (_super) {
        __extends(Score, _super);
        function Score() {
            _super.apply(this, arguments);
            this.displayMeasureNum = 2;
            this.displayPitchNum = 7;
            this.measureNum = 4;
        }
        return Score;
    })(Measure);
    CONSTANTS.Score = Score;
    var Game = (function () {
        function Game() {
            this.measure = new CONSTANTS.Score();
            this.width = this.measure.width * this.measure.displayMeasureNum;
            this.height = this.measure.height * this.measure.displayPitchNum;
            this.renderer = "score";
            this.imageAddress = "storage/assets/image/";
        }
        return Game;
    })();
    CONSTANTS.Game = Game;
    var Stationery = (function () {
        function Stationery() {
            this.initStationery = new Pencil().name;
            this.events = {
                changeStationery: "changeStationery",
            };
        }
        return Stationery;
    })();
    CONSTANTS.Stationery = Stationery;
    var PreloadBar = (function () {
        function PreloadBar() {
            this.width = 300;
            this.height = 50;
            this.x = new CONSTANTS.Game().width / 2;
            this.y = new CONSTANTS.Game().height / 2;
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
    var MeasureSheet = (function (_super) {
        __extends(MeasureSheet, _super);
        function MeasureSheet() {
            _super.apply(this, arguments);
            this.width = this.width;
            this.height = this.height * this.pitchNum;
            this.x = 0; // Set them later.
            this.y = 0;
            this.initImage = "score";
            this.images = {
                score: "score",
            };
        }
        return MeasureSheet;
    })(Measure);
    CONSTANTS.MeasureSheet = MeasureSheet;
    var Note = (function (_super) {
        __extends(Note, _super);
        function Note() {
            _super.apply(this, arguments);
            this.width = this.width / this.minNote;
            this.x = 0; // Set them later
            this.y = 0;
            this.initImage = "note";
            this.images = {
                note: "note",
            };
        }
        return Note;
    })(CONSTANTS.Measure);
    CONSTANTS.Note = Note;
    var ScoreSheet = (function (_super) {
        __extends(ScoreSheet, _super);
        function ScoreSheet() {
            _super.apply(this, arguments);
        }
        return ScoreSheet;
    })(CONSTANTS.Score);
    CONSTANTS.ScoreSheet = ScoreSheet;
    var Notes = (function (_super) {
        __extends(Notes, _super);
        function Notes() {
            _super.apply(this, arguments);
        }
        return Notes;
    })(CONSTANTS.Score);
    CONSTANTS.Notes = Notes;
    var StationeryButton = (function () {
        function StationeryButton() {
            this.imageAddress = new CONSTANTS.Game().imageAddress + "stationeryButton/";
            this.class = {
                buttonImage: "buttonImage",
            };
        }
        return StationeryButton;
    })();
    CONSTANTS.StationeryButton = StationeryButton;
    var Pencil = (function (_super) {
        __extends(Pencil, _super);
        function Pencil() {
            _super.apply(this, arguments);
            this.selector = "#pencil";
            this.name = "pencil";
            this.images = {
                onImage: this.imageAddress + "pencilOn.png",
                offImage: this.imageAddress + "pencilOff.png",
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
            this.name = "eraser";
            this.images = {
                onImage: this.imageAddress + "eraserOn.png",
                offImage: this.imageAddress + "eraserOff.png",
            };
        }
        return Eraser;
    })(StationeryButton);
    CONSTANTS.Eraser = Eraser;
})(CONSTANTS || (CONSTANTS = {}));
//# sourceMappingURL=Constants.js.map