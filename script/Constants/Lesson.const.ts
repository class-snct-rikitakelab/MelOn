/// <reference path="../Lesson.ref.ts"/>

namespace LESSON {
    import ScoreData = CONSTANTS.MeasureSheet;
    import Model = CONSTANTS.Model;
    import GroupView = CONSTANTS.GroupView;
    import DOMView = CONSTANTS.DOMView;
    
    export var language: string = new LESSON_LIST.Language().language;

    export class LessonData implements Model {
        listUrl: string = LESSON_LIST.listUrls[LESSON.language];
        defaultUrl: string = `LessonList.html?lang=${LESSON.language}`;
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
}