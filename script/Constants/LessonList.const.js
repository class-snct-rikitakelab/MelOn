/// <reference path="../LessonList.ref.ts"/>
var LESSON_LIST;
(function (LESSON_LIST) {
    var Language = (function () {
        function Language() {
            this.languageList = ["English", "Japanese", "Finnish"];
            this.language = _.include(this.languageList, $.getUrlVar("lang")) ? $.getUrlVar("lang") : "English";
        }
        return Language;
    })();
    LESSON_LIST.Language = Language;
    LESSON_LIST.listUrls = {
        English: "storage/lesson/english/lessonList.en.json",
        Japanese: "storage/lesson/japanese/lessonList.ja.json",
        Finnish: "storage/lesson/finnish/lessonList.fi.json",
    };
    var choose = (function () {
        function choose() {
            this.script = {
                English: "Choose a lesson!",
                Japanese: "おけいこをえらぼう！",
                Finnish: "Valitse oppitunti!",
            };
        }
        return choose;
    })();
    LESSON_LIST.choose = choose;
    var JSONList = (function () {
        function JSONList() {
            this.selector = "#lessonList";
            this.language = new Language().language;
            this.listUrl = LESSON_LIST.listUrls[this.language];
            this.childClasses = {
                header: "header",
                title: "title",
                description: "description",
            };
            this.title = {
                English: "Title",
                Japanese: "だいめい",
                Finnish: "Otsikko",
            };
            this.description = {
                English: "Description",
                Japanese: "せつめい",
                Finnish: "Kuvaus",
            };
            this.practiceModeUrl = "Lesson.html?lang=" + this.language + "&lesson=";
            this.images = {};
            this.audios = {};
        }
        return JSONList;
    })();
    LESSON_LIST.JSONList = JSONList;
})(LESSON_LIST || (LESSON_LIST = {}));
//# sourceMappingURL=LessonList.const.js.map