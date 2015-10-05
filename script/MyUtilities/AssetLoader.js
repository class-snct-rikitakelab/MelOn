/// <reference path="../reference.ts"/>
var AssetLoader = (function () {
    function AssetLoader() {
        this.enum = {
            KEY: 0,
            FILE_NAME: 1,
            FRAME_WIDTH: 2,
            FRAME_HEIGHT: 3,
        };
        this.images = {
            address: "",
            assets: [
                ["", ""]
            ],
        };
        this.spritesheets = {
            address: "",
            assets: [
                ["", "", 0, 0]
            ]
        };
        this.audio = {
            address: "",
            assets: [
                ["", []]
            ]
        };
    }
    AssetLoader.prototype.load = function (game) {
        var loader = game.load;
        // this.preloadBar(game);
        alert("Load Images Started!");
        this.loadImages(loader);
        alert("Load Images Completed! Load Audio Started!");
        // this.loadSpriteSheets(loader);
        this.loadAudios(loader);
        alert("Load Audios Completed! Game Create Started!");
    };
    // I can not understand about preloadBar!
    /*
    private preloadBar(game: Phaser.Game) {
        game.load.image("preloadBar", "assets/image/preloadBar.png");
        game.cache.addImage("preloadBar", "assets/image/preloadBar.png", {});
        var preloadBar = game.add.sprite(400, 100, "preloadBar");
        preloadBar.pivot.x = preloadBar.width / 2;
        preloadBar.pivot.y = preloadBar.height / 2;
        game.load.setPreloadSprite(preloadBar);
    }
    */
    AssetLoader.prototype.loadImages = function (loader) {
        var _this = this;
        this.images.assets.forEach(function (asset) {
            loader.image(asset[_this.enum.KEY], _this.images.address + asset[_this.enum.FILE_NAME]);
        });
    };
    AssetLoader.prototype.loadSpriteSheets = function (loader) {
        var _this = this;
        this.spritesheets.assets.forEach(function (asset) {
            loader.spritesheet(asset[_this.enum.KEY], _this.spritesheets.address + asset[_this.enum.FILE_NAME], asset[_this.enum.FRAME_WIDTH], asset[_this.enum.FRAME_HEIGHT]);
        });
    };
    AssetLoader.prototype.loadAudios = function (loader) {
        var _this = this;
        this.audio.assets.forEach(function (asset) {
            asset[_this.enum.FILE_NAME] = asset[_this.enum.FILE_NAME].map(function (value) {
                return _this.audio.address + value;
            });
            loader.audio(asset[_this.enum.KEY], asset[_this.enum.FILE_NAME]);
        });
    };
    return AssetLoader;
})();
//# sourceMappingURL=AssetLoader.js.map