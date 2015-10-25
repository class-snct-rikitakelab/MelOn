{
    var locations = {
        Libraries: "storage/lib/",
        Main: "script/Main/",
    };
    var scripts = {
        Libraries: [
            "phaser",
            "jquery-1.10.2.min",
            "underscore",
        ],
        Main: [
            "index",
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
//# sourceMappingURL=ImportIndex.js.map