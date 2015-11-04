/// <reference path="../index.ref.ts"/>

namespace INDEX {

    export var defaultLanguage: string = "English"; 

    export interface HTMLView {
        selector: string;
        images: { [name: string]: string };
        audios: { [name: string]: string };
    };

    export class HTMLLogo implements HTMLView {
        selector = "#logo";
        images: { [name: string]: string } = {
            logo: "storage/assets/image/game/MelOnLogo.png",
        };
        audios: { [name: string]: string } = {
            MelOn: "storage/assets/sound/se/MelOn!.mp3",
        };
    }

    export class ModeButton implements HTMLView {
        selector = "";
        baseUrl = "";
        shadowColor = "";
        defaultLanguage: string = defaultLanguage;
        images: { [name: string]: string } = {
        };
        audios: { [name: string]: string } = {
            select: "storage/assets/sound/se/select.mp3",
            decide: "storage/assets/sound/se/decide.mp3",
        };
    }

    export class FreeMakingMusic extends ModeButton implements HTMLView {
        selector = "#freeMakingMusic";
        baseUrl = "FreeMakingMusic.html?lang=";
        shadowColor = "orange";
        images: { [name: string]: string } = {
            "English": "storage/assets/image/modeButton/freeMakingMusicEnglish.png",
            "Japanese": "storage/assets/image/modeButton/freeMakingMusicJapanese.png",
            "Finnish": "storage/assets/image/modeButton/freeMakingMusicFinnish.png",
        };
    }

    export class Lesson extends ModeButton implements HTMLView {
        selector = "#lesson";
        baseUrl = "LessonList.html?lang=";
        shadowColor = "lawngreen";
        images: { [name: string]: string } = {
            "English": "storage/assets/image/modeButton/lessonEnglish.png",
            "Japanese": "storage/assets/image/modeButton/lessonJapanese.png",
            "Finnish": "storage/assets/image/modeButton/lessonFinnish.png",
        };
    }
}