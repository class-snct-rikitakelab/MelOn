/// <reference path="../reference.ts"/>

// This class is one of Model(Concrete Subject)

class Stationery extends Model {
    // This is essence of this Model class.
    private stationery: string;

    onChangeStationery: Phaser.Signal = new Phaser.Signal();

    constructor(game: Phaser.Game, private constants: CONSTANTS.Stationery) {
        super(game, constants);

        // Set initial stationery name.
        this.stationery = this.constants.initStationery;
    }

    // get accessor means this method has to return specific value and not to set any arguments.
    get getStationery(): string {
        return this.stationery;
    }

    changeStationery(name: string) {
        this.stationery = name;
        this.onChangeStationery.dispatch();
    }
}

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