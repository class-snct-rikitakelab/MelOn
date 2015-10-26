/// <reference path="../LessonList.ref.ts"/>

namespace LESSON_LIST {

    import HTMLView = INDEX.HTMLView;

    export class HTMLLogo implements HTMLView {
        selector = "#logo";
        images: { [name: string]: string } = {
            logo: "storage/assets/image/game/MelOnLogo.png",
        };
        audios: { [name: string]: string } = {
            MelOn: "storage/assets/sound/se/MelOn!.mp3",
        };
    }
}