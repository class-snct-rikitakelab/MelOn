/// <reference path="../index.ref.ts"/>

class LessonList {
    private logo: HTMLLogo = new HTMLLogo(new INDEX.HTMLLogo());
}

window.onload = () => {
    $(() => { new LessonList(); });
}