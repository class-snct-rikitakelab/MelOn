/// <reference path="../LessonList.ref.ts"/>
var LESSON_LIST;
(function (LESSON_LIST) {
    var HTMLLogo = (function () {
        function HTMLLogo() {
            this.selector = "#logo";
            this.images = {
                logo: "storage/assets/image/game/MelOnLogo.png",
            };
            this.audios = {
                MelOn: "storage/assets/sound/se/MelOn!.mp3",
            };
        }
        return HTMLLogo;
    })();
    LESSON_LIST.HTMLLogo = HTMLLogo;
})(LESSON_LIST || (LESSON_LIST = {}));
//# sourceMappingURL=LessonList.const.js.map