/// <reference path="../reference.ts"/>

class MelOnAssets extends AssetLoader {
    protected images: { address: string, assets: [string, string][] } = {
        address: "storage/assets/image/",
        assets: [
            // score
            ["musicPlayBar", "score/playBar.png"],
            ["note", "score/note.png"],
            ["score", "score/score.png"],
        ],
    }

    // ogg is not supported by IE. But mp3 makes loading time much longer.
    // Google Chrome is recommended.
    protected audios: { address: string, assets: [string, string[]][] } = {
        address: "storage/assets/sound/",
        assets: [
            // piano
            ["pianoA2", ["piano/pianoA2.ogg"]],
            ["pianoA3", ["piano/pianoA3.ogg"]],
            ["pianoA4", ["piano/pianoA4.ogg"]],
            ["pianoB2", ["piano/pianoB2.ogg"]],
            ["pianoB3", ["piano/pianoB3.ogg"]],
            ["pianoB4", ["piano/pianoB4.ogg"]],
            ["pianoC2", ["piano/pianoC2.ogg"]],
            ["pianoC3", ["piano/pianoC3.ogg"]],
            ["pianoC4", ["piano/pianoC4.ogg"]],
            ["pianoC5", ["piano/pianoC5.ogg"]],
            ["pianoD2", ["piano/pianoD2.ogg"]],
            ["pianoD3", ["piano/pianoD3.ogg"]],
            ["pianoD4", ["piano/pianoD4.ogg"]],
            ["pianoE2", ["piano/pianoE2.ogg"]],
            ["pianoE3", ["piano/pianoE3.ogg"]],
            ["pianoE4", ["piano/pianoE4.ogg"]],
            ["pianoF2", ["piano/pianoF2.ogg"]],
            ["pianoF3", ["piano/pianoF3.ogg"]],
            ["pianoF4", ["piano/pianoF4.ogg"]],
            ["pianoG2", ["piano/pianoG2.ogg"]],
            ["pianoG3", ["piano/pianoG3.ogg"]],
            ["pianoG4", ["piano/pianoG4.ogg"]],

            // se
            ["MelOn", ["se/MelOn!.mp3", ]],
            ["tamb", ["se/tamb.mp3", ]],
        ]
    }

    protected preloadImages: { address: string, assets: [string, string][] } = {
        address: "storage/assets/image/",
        assets: [
            // preloadBar
            ["preloadBar", "game/preloadBar.png"],

            // background
            ["background", "background/background.png"],
        ],
    }
}