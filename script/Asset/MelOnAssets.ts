/// <reference path="../referenceFreeMakingMusic.ts"/>

class MelOnAssets extends AssetLoader {
    protected baseURL = "storage/assets";

    protected addresses = {
        images: "image",
        spriteSheets: "image",
        audios: "sound",
        preloadImages: "image",
        preloadSpriteSheets: "image",
        preloadAudios: "sound",
    }

    protected images: { [dir: string]: [string, string][] } = {
        score: [
            ["musicPlayBar", "playBar.png"],
            ["note", "note.png"],
            ["score", "score.png"],
        ]
    };

    protected spriteSheets: { [dir: string]: [string, string, number, number][] } = {};

    // ogg is not supported by IE. But mp3 makes loading time much longer.
    // Google Chrome is recommended.
    protected audios: { [dir: string]: [string, string[]][] } = {
        piano: [
            ["pianoA2", ["pianoA2.ogg"]],
            ["pianoA3", ["pianoA3.ogg"]],
            ["pianoA4", ["pianoA4.ogg"]],
            ["pianoB2", ["pianoB2.ogg"]],
            ["pianoB3", ["pianoB3.ogg"]],
            ["pianoB4", ["pianoB4.ogg"]],
            ["pianoC2", ["pianoC2.ogg"]],
            ["pianoC3", ["pianoC3.ogg"]],
            ["pianoC4", ["pianoC4.ogg"]],
            ["pianoC5", ["pianoC5.ogg"]],
            ["pianoD2", ["pianoD2.ogg"]],
            ["pianoD3", ["pianoD3.ogg"]],
            ["pianoD4", ["pianoD4.ogg"]],
            ["pianoE2", ["pianoE2.ogg"]],
            ["pianoE3", ["pianoE3.ogg"]],
            ["pianoE4", ["pianoE4.ogg"]],
            ["pianoF2", ["pianoF2.ogg"]],
            ["pianoF3", ["pianoF3.ogg"]],
            ["pianoF4", ["pianoF4.ogg"]],
            ["pianoG2", ["pianoG2.ogg"]],
            ["pianoG3", ["pianoG3.ogg"]],
            ["pianoG4", ["pianoG4.ogg"]],
        ],

        trumpet: [
            ["trumpetA2", ["trumpetA2.ogg"]],
            ["trumpetA3", ["trumpetA3.ogg"]],
            ["trumpetA4", ["trumpetA4.ogg"]],
            ["trumpetB2", ["trumpetB2.ogg"]],
            ["trumpetB3", ["trumpetB3.ogg"]],
            ["trumpetB4", ["trumpetB4.ogg"]],
            ["trumpetC2", ["trumpetC2.ogg"]],
            ["trumpetC3", ["trumpetC3.ogg"]],
            ["trumpetC4", ["trumpetC4.ogg"]],
            ["trumpetC5", ["trumpetC5.ogg"]],
            ["trumpetD2", ["trumpetD2.ogg"]],
            ["trumpetD3", ["trumpetD3.ogg"]],
            ["trumpetD4", ["trumpetD4.ogg"]],
            ["trumpetE2", ["trumpetE2.ogg"]],
            ["trumpetE3", ["trumpetE3.ogg"]],
            ["trumpetE4", ["trumpetE4.ogg"]],
            ["trumpetF2", ["trumpetF2.ogg"]],
            ["trumpetF3", ["trumpetF3.ogg"]],
            ["trumpetF4", ["trumpetF4.ogg"]],
            ["trumpetG2", ["trumpetG2.ogg"]],
            ["trumpetG3", ["trumpetG3.ogg"]],
            ["trumpetG4", ["trumpetG4.ogg"]],
        ],

        violin: [
            ["violinA2", ["violinA2.ogg"]],
            ["violinA3", ["violinA3.ogg"]],
            ["violinA4", ["violinA4.ogg"]],
            ["violinB2", ["violinB2.ogg"]],
            ["violinB3", ["violinB3.ogg"]],
            ["violinB4", ["violinB4.ogg"]],
            ["violinC2", ["violinC2.ogg"]],
            ["violinC3", ["violinC3.ogg"]],
            ["violinC4", ["violinC4.ogg"]],
            ["violinC5", ["violinC5.ogg"]],
            ["violinD2", ["violinD2.ogg"]],
            ["violinD3", ["violinD3.ogg"]],
            ["violinD4", ["violinD4.ogg"]],
            ["violinE2", ["violinE2.ogg"]],
            ["violinE3", ["violinE3.ogg"]],
            ["violinE4", ["violinE4.ogg"]],
            ["violinF2", ["violinF2.ogg"]],
            ["violinF3", ["violinF3.ogg"]],
            ["violinF4", ["violinF4.ogg"]],
            ["violinG2", ["violinG2.ogg"]],
            ["violinG3", ["violinG3.ogg"]],
            ["violinG4", ["violinG4.ogg"]],
        ],

        se: [
            ["MelOn", ["MelOn!.ogg", ]],
            ["tamb", ["tamb.ogg", ]],
            ["boo", ["boo.ogg", ]],
            ["close", ["close.ogg", ]],
            ["decide", ["decide.ogg", ]],
            ["erase", ["erase.ogg", ]],
            ["load", ["load.ogg", ]],
            ["open", ["open.ogg", ]],
            ["save", ["save.ogg", ]],
            ["select", ["select.mp3", ]],
            ["jump", ["jump.ogg", ]],
        ],
    };

    protected preloadImages: { [dir: string]: [string, string][] } = {
        game: [
            ["preloadBar", "preloadBar.png"],
        ],

        background: [
            ["background", "background.png"],
        ],
    };

    protected preloadSpriteSheets: { [dir: string]: [string, string, number, number][] } = {};

    protected preloadAudios: { [dir: string]: [string, string[]][] } = {};
}