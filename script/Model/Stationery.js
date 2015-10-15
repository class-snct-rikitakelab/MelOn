/// <reference path="../reference.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This class is one of Model(Concrete Subject)
var Stationery = (function (_super) {
    __extends(Stationery, _super);
    function Stationery(constants) {
        _super.call(this, constants);
        this.constants = constants;
        this.onChangeStationery = new Phaser.Signal();
        // Set initial stationery name.
        this.stationery = this.constants.initStationery;
    }
    Object.defineProperty(Stationery.prototype, "getStationery", {
        // get accessor means this method has to return specific value and not to set any arguments.
        get: function () {
            return this.stationery;
        },
        enumerable: true,
        configurable: true
    });
    Stationery.prototype.changeStationery = function (name) {
        this.stationery = name;
        this.onChangeStationery.dispatch();
    };
    return Stationery;
})(Model);
// JQuery
/*
changeStationery(name: string) {
    // Change the stationery name.
    this.stationery = name;

    // It doesn't work by trigger method. Because trigger causes recursion.
    // But triggerHandler doesn't cause recursion. This method execute the handler only once.
    this.$.triggerHandler(this.constants.events["changeStationery"]);
}

// What is called registerObserver.
onChangeStationery(handler: () => any): JQuery {
    // Set the handler (function which is called when the "trigger" method is called) by jQuery.
    // This return value can remove the event handling. Like this => returnJQValue.off();
    return this.$.bind(this.constants.events["changeStationery"], handler);
}
*/ 
//# sourceMappingURL=Stationery.js.map