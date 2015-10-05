/// <reference path="../reference.ts"/>

class MelOnAssets extends AssetLoader {
    protected images: { address: string, assets: [string, string][] } = {
        address: "storage/assets/image/",
        assets: [
            // background
            ["background", "background/background.png"],

            // score
            ["playBar", "score/playBar.png"],
            ["note", "score/note.png"],
            ["score", "score/score.png"],
        ],
    }

    protected audio: { address: string, assets: [string, string[]][] } = {
        address: "storage/assets/sound/",
        assets: [
            // piano
            ["pianoA2", ["piano/pianoA2.mp3", ]],
            ["pianoA3", ["piano/pianoA3.mp3", ]],
            ["pianoA4", ["piano/pianoA4.mp3", ]],
            ["pianoB2", ["piano/pianoB2.mp3", ]],
            ["pianoB3", ["piano/pianoB3.mp3", ]],
            ["pianoB4", ["piano/pianoB4.mp3", ]],
            ["pianoC2", ["piano/pianoC2.mp3", ]],
            ["pianoC3", ["piano/pianoC3.mp3", ]],
            ["pianoC4", ["piano/pianoC4.mp3", ]],
            ["pianoC5", ["piano/pianoC5.mp3", ]],
            ["pianoD2", ["piano/pianoD2.mp3", ]],
            ["pianoD3", ["piano/pianoD3.mp3", ]],
            ["pianoD4", ["piano/pianoD4.mp3", ]],
            ["pianoE2", ["piano/pianoE2.mp3", ]],
            ["pianoE3", ["piano/pianoE3.mp3", ]],
            ["pianoE4", ["piano/pianoE4.mp3", ]],
            ["pianoF2", ["piano/pianoF2.mp3", ]],
            ["pianoF3", ["piano/pianoF3.mp3", ]],
            ["pianoF4", ["piano/pianoF4.mp3", ]],
            ["pianoG2", ["piano/pianoG2.mp3", ]],
            ["pianoG3", ["piano/pianoG3.mp3", ]],
            ["pianoG4", ["piano/pianoG4.mp3", ]],

            // se
            ["MelOn", ["se/MelOn!.mp3", ]],
            ["tamb", ["se/tamb.mp3", ]],
        ]
    }
}