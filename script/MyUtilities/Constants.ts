﻿/// <reference path="../reference.ts"/>

// We have to consider order inside each class due to JavaScript codes.
// By using clesses in namespace, we can set inheritable constants!
// And by using interface, it will be safe for the parent class of child classes.
// If we don't use export, we can hide the classes.

namespace CONSTANTS {
    
    //
    // ========== Game Constants ==========
    //

    export class Game {
        width: number = new MeasureSheet().width * new ScoreSheet().displayMeasureNum;
        height: number = new Note().height * new ScoreSheet().displayPitchNum;
        renderer: string = "score";
        imageAddress: string = "storage/assets/image/";
        language: string = "Finnish";
    }





    //
    // ========== Model ==========
    //

    export interface Model {
    }

    export class Music implements Model {
        unitNote: number = 8;
        measureNum: number = 8;
        pitch: string[] = [ "C5",
            "B4", "A4", "G4", "F4", "E4", "D4", "C4",
            "B3", "A3", "G3", "F3", "E3", "D3", "C3",
            "B2", "A2", "G2", "F2", "E2", "D2", "C2",
        ];
        pitchNum = this.pitch.length;
        writeStationery: string = new Stationery().writeStationery;
        eraseStationery: string = new Stationery().eraseStationery;
    }

    export class Stationery implements Model {
        writeStationery: string = "pencil";
        eraseStationery: string = "eraser";
        stationeryNum: number = 2;
        initStationery: string = this.writeStationery;
    }

    export class Instrument implements Model {
        pitch: string[] = new Music().pitch;
        pitchNum: number = this.pitch.length;
        initInstrument: number = 0;
        instruments: string[] = [
            "piano",
        ]
    }

    export class MusicPlayer implements Model {
    }





    //
    // ========== Sprite View ==========
    //

    export interface SpriteView {
        width: number;
        height: number;
        x: number;
        y: number;
        initImage: string;
        images: { [name: string]: string };
    }

    export class PreloadBar implements SpriteView{
        width = new MeasureSheet().width;
        height = new Note().height;
        x = new Game().width / 2;
        y = new Game().height / 2;
        initImage = "preloadBar";
        images: { [name: string]: string } = {
            preloadBar: "preloadBar"
        }
    }

    export class Background implements SpriteView {
        width = new Game().width;
        height = new Game().height;
        x = 0;
        y = 0;
        initImage = "background";
        images: { [name: string]: string } = {
            background: "background",
        };
    }

    export class Note extends Music implements SpriteView {
        width = new MeasureSheet().width / this.unitNote;
        height = new MeasureSheet().height / this.pitchNum;
        x = 0;
        y = 0;
        initImage = "note";
        images: { [name: string]: string } = {
            note: "note",
        }
        ringDuration: number = 700;   // ms
        fadeDuration: number = 100;   // ms
        doubleClkTime: number = 300;  // ms
    }

    export class MeasureSheet extends Music implements SpriteView {
        width = 320;
        height = 45 * this.pitchNum;
        x = 0;
        y = 0;
        initImage = "score";
        images: { [name: string]: string } = {
            score: "score",
        }
        noteWidth: number = this.width / this.unitNote;
        noteHeight: number = this.height / this.pitchNum;
    }

    export class MusicPlayBar extends Music implements SpriteView {
        width = 10;
        height = new MeasureSheet().height;
        beatWidth: number = new MeasureSheet().width / 4;
        x = 0;
        y = 0;
        initImage = "bar";
        images: { [name: string]: string } = {
            bar: "musicPlayBar",
        }
        playSpeed: number = 120;    // in Phaser Speed
    }





    //
    // ========== Group View ==========
    //

    export interface GroupView {
    }

    export class ScoreSheet extends MeasureSheet implements GroupView {
        displayMeasureNum: number = 2;
        displayPitchNum: number = 8;
    }

    export class Notes extends MeasureSheet implements GroupView {
    }





    //
    // ========== DOM View ==========
    //

    export interface DOMView {
        selector: string;
    }

    export class StationeryButton implements DOMView {
        selector;
        name: string;
        index: number;
        stationeryNum: number = new Stationery().stationeryNum;
        protected imageAddress: string = new Game().imageAddress + "stationeryButton/";
        class: { [name: string]: string } = {
            buttonImage: "buttonImage",
        };
        images: { [name: string]: string };
        onColor: string = "red";
        offColor: string = "blue";
    }

    export class Pencil extends StationeryButton{
        selector = "#pencil";
        name = new Stationery().writeStationery;
        index = 0;
        images: { [name: string]: string } = {
            image: this.imageAddress + "pencil.png",
        }
    }

    export class Eraser extends StationeryButton {
        selector = "#eraser";
        name = new Stationery().eraseStationery;
        index = 1;
        images: { [name: string]: string } = {
            image: this.imageAddress + "eraser.png",
        }
    }

    export class PlayButton implements DOMView {
        selector = "#play";
        class: { [name: string]: string } = {
            buttonImage: "buttonImage",
        };
        images: { [name: string]: string } = {
            image: new Game().imageAddress + "playButton/playButton.png",
        }
        onColor: string = "orange";
        offColor: string = "green";
    }

    export class ScrollButton implements DOMView {
        selector;
        direction: string;
        protected imageAddress: string = new Game().imageAddress + "scrollButton/";
        class: { [name: string]: string } = {
            buttonImage: "buttonImage",
        };
        images: { [name: string]: string };
        speed: number = 4; // px per frame
        measureWidth: number = new ScoreSheet().width;
        displayMeasureNum: number = new ScoreSheet().displayMeasureNum;
        noteHeight: number = new MeasureSheet().noteHeight;
        pitch: string[] = new Music().pitch;
        initPitch: string = "C4"; // is the highest in display!
    }

    export class UpButton extends ScrollButton {
        selector = "#up";
        direction = "up";
        images: { [name: string]: string } = {
            image: this.imageAddress + "up.png",
        };
    }

    export class DownButton extends ScrollButton {
        selector = "#down";
        direction = "down";
        images: { [name: string]: string } = {
            image: this.imageAddress + "down.png",
        };
    }

    export class RightButton extends ScrollButton {
        selector = "#right";
        direction = "right";
        images: { [name: string]: string } = {
            image: this.imageAddress + "right.png",
        };
    }

    export class LeftButton extends ScrollButton {
        selector = "#left";
        direction = "left";
        images: { [name: string]: string } = {
            image: this.imageAddress + "left.png",
        };
    }

    export class SaveButton implements DOMView {
        selector = "#save";
    }

    export class LoadButton implements DOMView {
        selector = "#load";
    }

    export class SoundButtonContainer implements DOMView {
        selector = "#soundButtonContainer";
        height: number = new MeasureSheet().noteHeight * new ScoreSheet().displayPitchNum;
        pitch: string[] = new Music().pitch;
    }

    export class SoundButton implements DOMView {
        selector = "soundButton";
        border: number = 2;
        width: number = new MeasureSheet().noteHeight;
        height: number = this.width - this.border * 2;
        pitchTop: number = this.width;
        ringDuration: number = new Note().ringDuration;
        pitch: string[] = new Music().pitch;
        language: string = new Game().language;
        pitchText = {
            English: ["C", "B", "A", "G", "F", "E", "D", "C", "B", "A", "G", "F", "E", "D", "C", "B", "A", "G", "F", "E", "D", "C"],
            Japanese: ["ド", "シ", "ラ", "ソ", "ファ", "ミ", "レ", "ド", "シ", "ラ", "ソ", "ファ", "ミ", "レ", "ド", "シ", "ラ", "ソ", "ファ", "ミ", "レ", "ド"],
            Finnish: ["DO", "TI", "LA", "SO", "FA", "MI", "RE", "DO", "TI", "LA", "SO", "FA", "MI", "RE", "DO", "TI", "LA", "SO", "FA", "MI", "RE", "DO"],
        }
    }
}