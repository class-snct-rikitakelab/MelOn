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
    var choose = (function () {
        function choose() {
            this.script = {
                English: "Choose a lesson!",
                Japanese: "おけいこをえらぼう！",
                Finnish: "Valita oppitunti!",
            };
        }
        return choose;
    })();
    LESSON_LIST.choose = choose;
    var JSONList = (function () {
        function JSONList() {
            this.selector = "#lessonList";
            this.language = new Language().language;
            this.listUrls = {
                English: "storage/lesson/english/lessonListEnglish.json",
                Japanese: "storage/lesson/japanese/lessonListJapanese.json",
                Finnish: "storage/lesson/finnish/lessonListFinnish.json",
            };
            this.childClasses = {
                header: "header",
                title: "title",
                description: "description",
            };
            this.title = {
                English: "Title",
                Japanese: "だいめい",
                Finnish: "Ostikko",
            };
            this.description = {
                English: "Description",
                Japanese: "せつめい",
                Finnish: "Kuvaus",
            };
            this.practiceModeUrl = "FreeMakingMusic.html?lang=" + this.language + "&lesson=";
            this.images = {};
            this.audios = {};
        }
        return JSONList;
    })();
    LESSON_LIST.JSONList = JSONList;
})(LESSON_LIST || (LESSON_LIST = {}));
//# sourceMappingURL=LessonList.const.js.map