{
    var locations = {
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
    };
    var scripts = {
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
            "Model",
            "Music",
            "Stationery",
            "MusicPlayer",
            "Instrument",
            "Speed",
            "LessonData",
            "Achievement",
            "MusicStorage",
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
            "ModalWindow",
            "StorageModal",
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
    };
    for (var locationName in locations) {
        var location_1 = locations[locationName];
        for (var _i = 0, _a = scripts[locationName]; _i < _a.length; _i++) {
            var script = _a[_i];
            document.write("<script src=" + (location_1 + script + ".js") + "></script>");
        }
    }
}
//# sourceMappingURL=ImportLesson.js.map