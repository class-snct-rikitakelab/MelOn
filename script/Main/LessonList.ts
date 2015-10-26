/// <reference path="../index.ref.ts"/>

class LessonList {
    private logo: HTMLLogo = new HTMLLogo(new INDEX.HTMLLogo());
    private list: JSONList = new JSONList(new LESSON_LIST.JSONList());

    constructor() {
        $("#choose").text(new LESSON_LIST.choose().script[new LESSON_LIST.Language().language]);
    }
}

window.onload = () => {
    $(() => { new LessonList(); });
}