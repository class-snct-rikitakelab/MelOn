/// <reference path="../reference.ts"/>

class AssetLoader {
    private enum = {
        KEY: 0,
        FILE_NAME: 1,
        FRAME_WIDTH: 2,
        FRAME_HEIGHT: 3,
    }

    protected images: { address: string, assets: [string, string][] } = {
        address: "",
        assets: [
            ["", ""]
        ],
    }

    protected spritesheets: { address: string, assets: [string, string, number, number][] } = {
        address: "",
        assets: [
            ["", "", 0, 0]
        ]
    }

    protected audios: { address: string, assets: [string, string[]][] } = {
        address: "",
        assets: [
            ["", []]
        ]
    }

    protected preloadImages: { address: string, assets: [string, string][] } = {
        address: "",
        assets: [
            ["", ""]
        ],
    }

    protected preloadSpritesheets: { address: string, assets: [string, string, number, number][] } = {
        address: "",
        assets: [
            ["", "", 0, 0]
        ]
    }

    protected preloadAudios: { address: string, assets: [string, string[]][] } = {
        address: "",
        assets: [
            ["", []]
        ]
    }

    constructor() {
    }

    load(loader: Phaser.Loader) {
        this.loadImages(loader, this.images);
        // this.loadSpriteSheets(loader, this.spritesheets);
        this.loadAudios(loader, this.audios);
    }

    preload(loader: Phaser.Loader) {
        this.loadImages(loader, this.preloadImages);
        // this.loadSpriteSheets(loader, this.preloadSpritesheets);
        // this.loadAudios(loader, this.preloadAudios);
    }

    private loadImages(loader: Phaser.Loader, images: { address: string, assets: [string, string][] }) {
        images.assets.forEach((asset: string[]) => {
            loader.image(asset[this.enum.KEY], images.address + asset[this.enum.FILE_NAME]);
        });
    }

    private loadSpriteSheets(loader: Phaser.Loader, spritesheets: { address: string, assets: [string, string, number, number][]}) {
        spritesheets.assets.forEach((asset: any) => {
            loader.spritesheet(asset[this.enum.KEY], spritesheets.address + asset[this.enum.FILE_NAME],
                asset[this.enum.FRAME_WIDTH], asset[this.enum.FRAME_HEIGHT]);
        });
    }

    private loadAudios(loader: Phaser.Loader, audios: { address: string, assets: [string, string[]][]}) {
        audios.assets.forEach((asset: any) => {
            asset[this.enum.FILE_NAME] = asset[this.enum.FILE_NAME].map((value: string): string => {
                return audios.address + value;
            });
            loader.audio(asset[this.enum.KEY], asset[this.enum.FILE_NAME]);
        });
    }
}