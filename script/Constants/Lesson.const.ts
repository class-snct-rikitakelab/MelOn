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
    }

    export class TargetNotes implements GroupView {
        images: { [name: string]: string } = { note: "note", };
        measureWidth: number = new ScoreData().width;
        noteHeight: number = new ScoreData().noteHeight;
        pitch: string[] = new ScoreData().pitch;
        opacity: number = 0.2;
        color = 0x0000ff;
    }

    export class NextButton implements DOMView {
        selector = "#nextButton";
    }
}