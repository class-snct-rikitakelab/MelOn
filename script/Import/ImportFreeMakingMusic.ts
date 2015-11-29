﻿{
    let locations = {
        Libraries: "storage/lib/",
        Asset: "script/Asset/",
        Constants: "script/Constants/",
        Boot: "script/Boot/",
        Preloader: "script/Preloader/",
        Model: "script/Model/",
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
            "jquery-1.11.3",
            "jquery-uvg",
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
            "Model",
            "Music",
            "Stationery",
            "MusicPlayer",
            "Instrument",
            "Speed",
            "MusicStorage",
        ],

        View: [
            "DOMView",
            "GroupView",
            "SpriteView",
            "ContactManager",
        ],

        DOMView: [
			"ReturnButton",
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
            "ModalWindow",
            "StorageModal",
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
            "FreeMakingMusic",
        ],
    }

    for (let locationName in locations) {
        let location = locations[locationName];
        for (let script of scripts[locationName]) document.write(`<script src=${location + script + ".js"}></script>`);
    }
}