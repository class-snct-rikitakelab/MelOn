/// <reference path="../reference.ts"/>
// This class is super class of each DOM element View.
// Inheritance of this class means the child class is one of DOM element View(Concrete Observer).
var DOMView = (function () {
    // DOMObjects have reference of their models. 
    // This is object. So it's recommended to get each model in child classes.
    function DOMView(game, constants, models) {
        this.game = game;
        this.models = models;
        // DOMObjects have their own Element of jQuery by using selector.
        this.$ = $(constants.selector);
    }
    return DOMView;
})();
//# sourceMappingURL=DOMView.js.map