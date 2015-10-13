/// <reference path="../reference.ts"/>

// This class is one of View (Concrete Observer).

class StationeryButton extends DOMView {
    private stationery: Stationery; // Observer(View) can watch Subject(Model).
    private image: JQuery;

    constructor(game: Phaser.Game, private constants: CONSTANTS.StationeryButton, models: Object) {
        // game and models will be set in this instance by super class ( DOMObject ).
        super(game, constants, models);

        // Make DOM image in advanse.
        this.loadImage();

        // Get stationery model.
        this.stationery = models["stationery"];
        
        // These two below settings are needed for jQuery event process.
        // The important thing is using arrow function.

        // This function will be executed when the stationery is changed. What is called notify method.
        this.stationery.onChangeStationery(() => { this.changeImage(); });

        // This function will be executed when this button is pushed.
        this.$.click(() => { this.changeStationery();});

        // Set initial Image.
        this.changeImage();
    }
    
    private loadImage(): void {
        // Get the on and off image of this button. 
        // "src" is url of these images.
        // They can have class of CSS as well. 
        this.image = $("<img />")
            .attr("src", this.constants.images["image"])
            .addClass(this.constants.class["buttonImage"]);

        // Create these above images inside this button element.
        this.$.append(this.image);
    }

    private changeImage(): void {
        // Change image of this button depends on stationery.
        if (this.stationery.getStationery === this.constants.name) {
            this.$.css("background-color", this.constants.onColor);
            return;     // Use early "return" rather than "else".
        }
        this.$.css("background-color", this.constants.offColor);
    }

    private changeStationery(): void {
        // Set the stationery of this button. 
        // This method causes trigger of functions which were set by "onChangeStationery".
        this.stationery.changeStationery(this.constants.name);
    }
}