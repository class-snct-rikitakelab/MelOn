{
    let locations = {
        Libraries: "storage/lib/",
        Asset: "script/Asset/",
        Constants: "script/Constants/",
        Boot: "script/Boot/",
        Preloader: "script/Preloader/",
        Model: "script/Model/",
        ConcreteModel: "script/ConcreteModel/",
        View: "script/View/",
        DOMView: "script/DOMView/",
        GroupView: "script/GroupView/",
        SpriteView: "script/SpriteView/",
        MelOn: "script/MelOn/",
        Main: "script/Main/",
    }

    let scripts = {
        Libraries: [
            "phaser",
            "jquery-1.10.2.min",
            "jquery-uvg",
            "underscore",
        ],

        Asset: [
            "AssetLoader",
            "MelOnAssets",
        ],

        Constants: [
            "Constants",
            "LessonList.const",
            "Lesson.const",
        ],

        Model: [
            "Model"
        ],

        ConcreteModel: [
            "Music",
            "Stationery",
            "MusicPlayer",
            "Instrument",
            "Speed",
            "LessonData",
            "Achievement",
        ],

        View: [
            "DOMView",
            "GroupView",
            "SpriteView",
            "ContactManager",
        ],

        DOMView: [
            "Logo",
            "StationeryToggler",
            "StationeryButton",
            "SpeedDisplay",
            "SpeedButton",
            "PlayButton",
            "SaveButton",
            "LoadButton",
            "InstrumentMenu",
            "InstrumentContainer",
            "InstrumentOption",
            "SoundButtonContainer",
            "SoundButton",
            "ScrollButton",
            "NextButton",
            "Lecture",
        ],

        GroupView: [
            "ScoreSheet",
            "Notes",
            "TargetNotes",
            "Blanks",
        ],

        SpriteView: [
            "MeasureSheet",
            "Note",
            "MusicPlayBar",
        ],

        Boot: [
            "Boot",
        ],

        Preloader: [
            "Preloader",
        ],

        MelOn: [
            "MelOn",
            "LessonMelOn",
        ],

        Main: [
            "FreeMakingMusic",
            "Lesson",
        ],
    }

    for (let locationName in locations) {
        let location = locations[locationName];
        for (let script of scripts[locationName]) document.write(`<script src=${location + script + ".js"}></script>`);
    }
}