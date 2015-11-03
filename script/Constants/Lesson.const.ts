/// <reference path="../Lesson.ref.ts"/>

namespace LESSON {
    import ScoreData = CONSTANTS.MeasureSheet;
    import Model = CONSTANTS.Model;
    import GroupView = CONSTANTS.GroupView;
    import DOMView = CONSTANTS.DOMView;
    import ModalWindow = CONSTANTS.ModalWindow;
    
    export var language: string = new LESSON_LIST.Language().language;

    export class LessonData implements Model {
        language: string = language
        listUrl: string = LESSON_LIST.listUrls[language];
        defaultUrl: string = `LessonList.html?lang=${language}`;
        errorMsg = {
            "English": "Lesson Data Read Error...",
            "Japanese": "学習データの読み込みに失敗しました。",
            "Finnish": "Oppitunnin tietoja ei onnistuttu lukemaan...",
        }
    }

    export class Achievement implements Model {
        pitch = new ScoreData().pitch;
    }

    export class TargetNotes implements GroupView {
        images: { [name: string]: string } = { note: "note", };
        measureWidth: number = new ScoreData().width;
        noteHeight: number = new ScoreData().noteHeight;
        pitch: string[] = new ScoreData().pitch;
        opacity: number = 1.0;
        color = 0x7777ff;
    }

    export class Blanks implements GroupView {
        images: { [name: string]: string } = { blank: "blank", };
        pitch: string[] = new ScoreData().pitch;
        measureWidth: number = new ScoreData().width;
        height: number = new ScoreData().noteHeight * this.pitch.length;
        opacity: number = 0.3;
    }

    export class NextButton implements DOMView {
        selector = "#nextButton";
        lang = language;
        next = {
            "English": "NEXT ⇒",
            "Japanese": "次へ ⇒",
            "Finnish": "SEURAAVA ⇒"
        }
    }

    export class Lecture implements DOMView {
        selector = "#lecture";
        titleId = "title";
        personIds = {
            teacher: "teacher",
            child: "child",
        };
        balloonColor = {
            teacher: "lightgreen",
            child: "orange",
        };
        image = {
            teacher: "storage/assets/image/person/teacher.png",
            child: "storage/assets/image/person/child.png",
        };
        commonClass = {
            balloon: "balloon",
            triangle: "triangle",
            person: "person",
        };
    }

    export class LessonModal {
        modalConstants: ModalWindow = new ModalWindow();
        playMsg = {
            "English": "Play the music.",
            "Japanese": "音楽を再生してね。",
            "Finnish": "Soita musiikkia.",
        };
        stopMsg = {
            "English": "Listen to the music or stop.",
            "Japanese": "音楽を最後まで聞くか、停止してね。",
            "Finnish": "Kuuntele musiikkia tai pysötä.",
        };
        TryMsg = {
            "English": "Good Job! Try to play the music!",
            "Japanese": "やったね！　音楽を再生してみよう！",
            "Finnish": "Hienoa! Kokeile soittaa musiikkia!",
        };
        goNextMsg = {
            "English": "Excellent! push NEXT button to go on!",
            "Japanese": "よくできました！　「次へ」ボタンを押して進もう！",
            "Finnish": "Erinomaista! Paina SEURAAVA nappia jatkaaksesi!",
        };
    }
}