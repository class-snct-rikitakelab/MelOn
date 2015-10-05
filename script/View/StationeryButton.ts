/// <reference path="../reference.ts"/>

// This class is one of View (Concrete Observer).

class StationeryButton extends DOMObject {
    private stationery: Stationery; // Observer(View) can watch Subject(Model).
    private onImage: JQuery;
    private offImage: JQuery;

    constructor(game: Phaser.Game, private constants: CONSTANTS.StationeryButton, models?: Object) {
        // game and models will be set in this instance by super class ( DOMObject ).
        super(game, constants, models);

        // Make all DOM images in advanse.
        this.loadImages();

        // Get stationery model.
        this.stationery = models["stationery"];
        
        // These two below settings are needed for jQuery event process.
        // The important thing is using arrow function.

        // This function will be executed when the stationery is changed. What is called notify method.
        this.stationery.onChangeStationery(() => { this.changeImage(); });

        // This function will be executed when this button is pushed.
        this.$.click(() => { this.changeStationery(); });

        // Set initial Image.
        this.changeImage();
    }
    
    private loadImages(): void {
        // At first, empty the DOM elements inside this button.
        this.$.empty();
        
        // Get the on and off image of this button. 
        // "src" is url of these images.
        // They can have class of CSS as well. 
        this.onImage = $("<img />")
            .attr("src", this.constants.images["onImage"])
            .addClass(this.constants.class["buttonImage"]);
        this.offImage = $("<img />")
            .attr("src", this.constants.images["offImage"])
            .addClass(this.constants.class["buttonImage"]);

        // Create these above images inside this button element.
        this.$.append(this.onImage);
        this.$.append(this.offImage);
    }

    private changeImage(): void {
        // Change image of this button depends on stationery.
        if (this.stationery.getStationery === this.constants.name) {
            this.swapImage(true);
            return;     // Use early "return" rather than "else".
        }
        this.swapImage(false);
    }

    private swapImage(on: boolean): void {
        // "opacity" property means how the element is "not" clear.
        this.onImage.css("opacity", on ? 1 : 0);
        this.offImage.css("opacity", on ? 0 : 1);
    }

    private changeStationery(): void {
        // Set the stationery of this button. 
        // This method causes trigger of functions which were set by "onChangeStationery".
        this.stationery.changeStationery(this.constants.name);
    }
}