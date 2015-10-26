/// <reference path="../index.ref.ts"/>
var LessonList = (function () {
    function LessonList() {
        this.logo = new HTMLLogo(new INDEX.HTMLLogo());
        this.list = new JSONList(new LESSON_LIST.JSONList());
        $("#choose").text(new LESSON_LIST.choose().script[new LESSON_LIST.Language().language]);
    }
    return LessonList;
})();
window.onload = function () {
    $(function () { new LessonList(); });
};
//# sourceMappingURL=LessonList.js.map