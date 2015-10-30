/// <reference path="../Lesson.ref.ts"/>

class Lesson extends FreeMakingMusic {
    constructor(assets: AssetLoader, constants: CONSTANTS.MelOn) {
        super(assets, constants);
    }

    protected setStates() {
        this.state.add('Boot', Boot, false);
        this.state.add('Preloader', Preloader, false);
        this.state.add('Main', LessonMelOn, false);
    }
}

// Do it after loading HTML, and use jQuery
window.onload = () => {
    $.ajaxSetup({ cache: false });
    $(() => { new Lesson(new MelOnAssets, new CONSTANTS.MelOn); });
}