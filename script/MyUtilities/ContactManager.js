/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is the class to manage collision and overlap of Phaser objects.
var ContactManager = (function (_super) {
    __extends(ContactManager, _super);
    function ContactManager(game) {
        _super.call(this, game);
        this.collideObjects = [];
        this.overlapObjects = [];
    }
    ContactManager.prototype.checkAllContact = function () {
        this.checkAllCollide();
        this.checkAllOverlap();
    };
    ContactManager.prototype.addCollide = function (obj1, obj2, eachOther) {
        if (eachOther === void 0) { eachOther = false; }
        this.collideObjects.push([obj1, obj2]);
    };
    ContactManager.prototype.addOverlap = function (obj1, obj2, eachOther) {
        if (eachOther === void 0) { eachOther = false; }
        this.overlapObjects.push([obj1, obj2]);
    };
    ContactManager.prototype.checkAllCollide = function () {
        var _this = this;
        this.collideObjects.forEach(function (value) {
            if (value[0] === null || value[1] === null)
                return;
            _this.collide(value[0], value[1], function (sprite1, sprite2) {
                ContactManager.prototype.onCollide(sprite1, sprite2);
            });
        });
    };
    ContactManager.prototype.checkAllOverlap = function () {
        var _this = this;
        this.overlapObjects.forEach(function (value) {
            if (value[0] === null || value[1] === null)
                return;
            _this.overlap(value[0], value[1], function (sprite1, sprite2) {
                ContactManager.prototype.onOverlap(sprite1, sprite2);
            });
        });
    };
    ContactManager.prototype.onCollide = function (sprite1, sprite2) {
        sprite1.onCollide(sprite2);
        sprite2.onCollide(sprite1);
    };
    ContactManager.prototype.onOverlap = function (sprite1, sprite2) {
        sprite1.onOverlap(sprite2);
        sprite2.onOverlap(sprite1);
    };
    return ContactManager;
})(Phaser.Physics.Arcade);
//# sourceMappingURL=ContactManager.js.map