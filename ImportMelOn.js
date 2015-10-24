var MelOn_LOCATIONS = {
    Libraries: "storage/lib/",
    MyUtilities: "script/MyUtilities/",
    Model: "script/Model/",
    View: "script/View/",
};
var MelOn_SCRIPTS = {
    Libraries: [
        "phaser.js",
        "jquery-1.10.2.min.js",
        "underscore.js",
    ],
    MyUtilities: [
        "Constants.js",
        "AssetLoader.js",
        "Assets.js",
        "Preloader.js",
        "Boot.js",
        "ContactManager.js",
        "Model.js",
        "SpriteView.js",
        "GroupView.js",
        "DOMView.js",
        "MyPhaserGame.js",
    ],
    Model: [
        "Music.js",
        "Stationery.js",
        "Instrument.js",
        "MusicPlayer.js",
        "Speed.js",
    ],
    View: [
        "Logo.js",
        "Note.js",
        "Notes.js",
        "MeasureSheet.js",
        "ScoreSheet.js",
        "MusicPlayBar.js",
        "StationeryButton.js",
        "StationeryToggler.js",
        "PlayButton.js",
        "ScrollButton.js",
        "SaveButton.js",
        "LoadButton.js",
        "SoundButtonContainer.js",
        "SoundButton.js",
        "SpeedDisplay.js",
        "SpeedButton.js",
        "InstrumentOption.js",
        "InstrumentContainer.js",
        "InstrumentMenu.js",
    ],
};
function importFiles(locations, scripts) {
    for (var locationName in locations) {
        var location = locations[locationName];
        for (var _i = 0, _a = scripts[locationName]; _i < _a.length; _i++) {
            var script = _a[_i];
            document.write("<script src=" + (location + script) + "></script>");
        }
    }
}
importFiles(MelOn_LOCATIONS, MelOn_SCRIPTS);
//# sourceMappingURL=ImportMelOn.js.map