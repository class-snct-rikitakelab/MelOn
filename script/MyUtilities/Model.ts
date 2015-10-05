/// <reference path="../reference.ts"/>

// This class is super class of each models.
// Inheritance of this class means the child class is one of Model(Concrete Subject).

class Model {
    protected $: JQuery;
    constructor(protected game: Phaser.Game, constants: CONSTANTS.Model) {
        // Model has Phaser.Game object for Phaser game.
        // Model is executed in jQuery for event driven programming.
        this.$ = $(this);
    }
}