var HTMLView = (function () {
    function HTMLView(constants) {
        var _this = this;
        this.images = {};
        this.audios = {};
        this.$ = $(constants.selector);
        _.each(constants.images, function (src, name) { _this.images[name] = $("<img src=" + src + " />").addClass("image"); });
        _.each(constants.audios, function (src, name) { _this.audios[name] = new Audio(src); });
    }
    HTMLView.prototype.setImage = function (image) {
        this.$.remove("img");
        this.$.append(this.images[image]);
    };
    HTMLView.prototype.audioPlay = function (audio) {
        console.log(window.navigator.userAgent.toLowerCase().indexOf("msie") != -1);
        audio.pause();
        //audio.currentTime = 0;
        audio.play();
    };
    return HTMLView;
})();
//# sourceMappingURL=HTMLView.js.map