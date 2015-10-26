{
    let locations = {
        Libraries: "storage/lib/",
        Constants: "script/Constants/",
        View: "script/View/",
        HTMLView: "script/HTMLView/",
        Main: "script/Main/",
    };

    let scripts = {
        Libraries: [
            "jquery-1.10.2.min",
            "underscore",
        ],

        View: [
            "HTMLView",
        ],

        Constants: [
            "Constants",
            "index.const",
        ],

        HTMLView: [
            "HTMLLogo",
            "ModeButton",
        ],

        Main: [
            "index",
        ],
    };

    for (let locationName in locations) {
        let location = locations[locationName];
        for (let script of scripts[locationName]) document.write(`<script src=${location + script + ".js"}></script>`);
    }
}