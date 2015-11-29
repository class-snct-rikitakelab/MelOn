/// <reference path="../index.ref.ts"/>
var index = (function () {
    function index() {
        this.language = new Language(new INDEX.Language);
        this.languageSelector = new LanguageSelector(new INDEX.LanguageSelector, this.language);
        this.logo = new HTMLLogo(new INDEX.HTMLLogo());
        this.freeMakingMusic = new ModeButton(new INDEX.FreeMakingMusic(), this.language);
        this.lesson = new ModeButton(new INDEX.Lesson, this.language);
    }
    return index;
})();
window.onload = function () {
    $(function () { new index(); });
};
//# sourceMappingURL=index.js.map