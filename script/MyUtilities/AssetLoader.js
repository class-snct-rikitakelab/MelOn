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
        this.audios = {
            address: "",
            assets: [
                ["", []]
            ]
        };
        this.preloadImages = {
            address: "",
            assets: [
                ["", ""]
            ],
        };
        this.preloadSpritesheets = {
            address: "",
            assets: [
                ["", "", 0, 0]
            ]
        };
        this.preloadAudios = {
            address: "",
            assets: [
                ["", []]
            ]
        };
    }
    AssetLoader.prototype.load = function (loader) {
        this.loadImages(loader, this.images);
        // this.loadSpriteSheets(loader, this.spritesheets);
        this.loadAudios(loader, this.audios);
    };
    AssetLoader.prototype.preload = function (loader) {
        this.loadImages(loader, this.preloadImages);
        // this.loadSpriteSheets(loader, this.preloadSpritesheets);
        // this.loadAudios(loader, this.preloadAudios);
    };
    AssetLoader.prototype.loadImages = function (loader, images) {
        var _this = this;
        images.assets.forEach(function (asset) {
            loader.image(asset[_this.enum.KEY], images.address + asset[_this.enum.FILE_NAME]);
        });
    };
    AssetLoader.prototype.loadSpriteSheets = function (loader, spritesheets) {
        var _this = this;
        spritesheets.assets.forEach(function (asset) {
            loader.spritesheet(asset[_this.enum.KEY], spritesheets.address + asset[_this.enum.FILE_NAME], asset[_this.enum.FRAME_WIDTH], asset[_this.enum.FRAME_HEIGHT]);
        });
    };
    AssetLoader.prototype.loadAudios = function (loader, audios) {
        var _this = this;
        audios.assets.forEach(function (asset) {
            asset[_this.enum.FILE_NAME] = asset[_this.enum.FILE_NAME].map(function (value) {
                return audios.address + value;
            });
            loader.audio(asset[_this.enum.KEY], asset[_this.enum.FILE_NAME]);
        });
    };
    return AssetLoader;
})();
//# sourceMappingURL=AssetLoader.js.map