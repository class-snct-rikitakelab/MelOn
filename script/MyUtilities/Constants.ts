/// <reference path="../reference.ts"/>

// We have to consider order... due to JavaScript codes.
// By using clesses in namespace, we can set inheritable constants!
// And by using interface, it will be safe for the parent class of child classes.
// If we don't use export, we can hide the classes.

namespace CONSTANTS {
    export class Game{
        width: number = 600;
        height: number = 350;
        renderer: string = "score";
        imageAddress: string = "../assets/image/";
        soundAddress: string = "../assets/sound/";
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