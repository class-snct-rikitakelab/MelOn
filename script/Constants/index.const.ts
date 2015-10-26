/// <reference path="../index.ref.ts"/>

namespace INDEX {

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
        destination = "";
        shadowColor = "";
        images: { [name: string]: string } = {
        };
        audios: { [name: string]: string } = {
            select: "storage/assets/sound/se/select.mp3",
            decide: "storage/assets/sound/se/decide.mp3",
        };
    }

    export class FreeMakingMusic extends ModeButton implements HTMLView {
        selector = "#freeMakingMusic";
        destination = "FreeMakingMusic.html?lang=Finnish";
        shadowColor = "orange";
        images: { [name: string]: string } = {
            image: "storage/assets/image/modeButton/freeMakingMusicFinnish.png",
        };
    }

    export class Lesson extends ModeButton implements HTMLView {
        selector = "#lesson";
        destination = "LessonList.html?lang=Finnish";
        shadowColor = "lawngreen";
        images: { [name: string]: string } = {
            image: "storage/assets/image/modeButton/lessonFinnish.png",
        };
    }
}