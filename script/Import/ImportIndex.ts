{
    let locations = {
        Libraries: "storage/lib/",
        Main: "script/",
    };

    let scripts = {
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
        let location = locations[locationName];
        for (var script of scripts[locationName]) document.write(`<script src=${location + script + ".js"}></script>`);
    }
}