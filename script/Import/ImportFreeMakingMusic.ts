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
            "underscore",
        ],

        Asset: [
            "AssetLoader",
            "MelOnAssets",
        ],

        Constants: [
            "Constants",
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
        ],

        GroupView: [
            "ScoreSheet",
            "Notes",
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
        ],

        Main: [
            "FreeMakingMusicMode",
        ],
    }

    for (let locationName in locations) {
        let location = locations[locationName];
        for (let script of scripts[locationName]) document.write(`<script src=${location + script + ".js"}></script>`);
    }
}