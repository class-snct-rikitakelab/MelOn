/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Music = (function (_super) {
    __extends(Music, _super);
    function Music(game, constants) {
        _super.call(this, game, constants);
    }
    Music.prototype.write = function (measure, position, pitch) {
        console.log("Write " + measure, position, pitch);
    };
    Music.prototype.erase = function (measure, position, pitch) {
        console.log("Erase " + measure, position, pitch);
    };
    return Music;
})(Model);
//# sourceMappingURL=Music.js.map