/// <reference path="../reference.ts"/>

// We have to consider order... due to JavaScript codes.
// By using clesses in namespace, we can set inheritable constants!
// And by using interface, it will be safe for the parent class of child classes.
// If we don't use export, we can hide the classes.

namespace CONSTANTS {
    export class Measure {
        width: number = 300;
        height: number = 50;
        displayMeasureNum: number = 2;
        displayPitchNum: number = 7;
        measureNum: number = 4;
        minNote: number = 8 // of a whole note
        pitch: Array<string> = [
            "C2", "D2", "E2", "F2", "G2", "A2", "B2",
            "C3", "D3", "E3", "F3", "G3", "A3", "B3",
            "C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"
        ];
        pitchNum = this.pitch.length;
    }

    export class Game {
        //measure: CONSTANTS.Measure = new CONSTANTS.Measure();
        width: number = 600;
        height: number = 350;
        //width: number = this.measure.width * this.measure.displayMeasureNum;
        //height: number = this.measure.height * this.measure.displayPitchNum;
        renderer: string = "score";
        imageAddress: string = "storage/assets/image/";
    }

    export interface Model {
        events: { [name: string]: string };
    }

    export class Stationery implements Model {
        initStationery: string = new Pencil().name;
        events: { [name: string]: string } = {
            changeStationery: "changeStationery",
        };
    }

    export interface SpriteObject {
        width: number;
        height: number;
        x: number;
        y: number;
        initImage: string;
        images: { [name: string]: string };
    }

    export class PreloadBar implements SpriteObject{
        width = 300;
        height = 50;
        x = new CONSTANTS.Game().width / 2;
        y = new CONSTANTS.Game().height / 2;
        initImage = "preloadBar";
        images: { [name: string]: string } = {
            preloadBar: "preloadBar"
        }
    }

    export class Background implements SpriteObject {
        width = new Game().width;
        height = new Game().height;
        x = 0;
        y = 0;
        initImage = "background";
        images: { [name: string]: string } = {
            background: "background",
        };
    }

    export class MeasureSheet implements SpriteObject {
        measure: CONSTANTS.Measure = new CONSTANTS.Measure();
        width = this.measure.width;
        height = this.measure.height * this.measure.pitchNum;
        x = 0;  // Set it later.
        y = 0;
        initImage = "score";
        images: { [name: string]: string } = {
            score: "score",
        } 
    }

    export interface DOMObject {
        selector: string;
    }

    export class StationeryButton implements DOMObject {
        selector: string;
        name: string;
        protected imageAddress: string = new CONSTANTS.Game().imageAddress + "stationeryButton/";
        class: { [name: string]: string } = {
            buttonImage: "buttonImage",
        };
        images: { [name: string]: string };
    }

    export class Pencil extends StationeryButton{
        selector: string = "#pencil";
        name: string = "pencil";
        images: { [name: string]: string } = {
            onImage: this.imageAddress + "pencilOn.png",
            offImage: this.imageAddress + "pencilOff.png",
        }
    }

    export class Eraser extends StationeryButton{
        selector: string = "#eraser";
        name: string = "eraser";
        images: { [name: string]: string } = {
            onImage: this.imageAddress + "eraserOn.png",
            offImage: this.imageAddress + "eraserOff.png",
        }
    }
}