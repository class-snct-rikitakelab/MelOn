/// <reference path="../reference.ts"/>

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

        se: [
            ["MelOn", ["MelOn!.mp3", ]],
            ["tamb", ["tamb.mp3", ]],
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
}