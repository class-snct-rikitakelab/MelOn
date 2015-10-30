/// <reference path="../Lesson.ref.ts"/>

class Lecture extends DOMView {

    private lessonData: LessonData = this.models["lessonData"];

    constructor(game: Phaser.Game, private constants: LESSON.Lecture, models: Object) {
        super(game, constants, models);
        this.$.append(this.makeTitle(this.lessonData.getTitle));
        this.makeLecture(this.lessonData.getLecture);
    }

    private makeTitle(title: string): JQuery {
        return $(`<div id=${this.constants.titleId}></div>`).text(title);
    }

    private makeLecture(lecture: { [prop: string]: string }[]) {
        lecture.forEach((block) => {
            this.$.append(this.makeBalloon(block));
            this.$.append(this.makePerson(block["person"]));
        });
    }

    private makeBalloon(block: Object): JQuery {
        return $("<div></div>").addClass(this.constants.commonClass.balloon)
            .css("background-color", this.constants.balloonColor[block["person"]]).text(block["speech"]);
    }

    private makeTriangle(person: string): JQuery {
        return $("<div></div>").addClass(this.constants.commonClass.triangle)
            .css("border-top-color", this.constants.balloonColor[person]);
    }

    private makeImage(person: string): JQuery {
        return $(`<img src=${this.constants.image[person]} />`);
    }

    private makePerson(person: string): JQuery {
        return $(`<div id=${this.constants.personIds[person]}></div>`).addClass(this.constants.commonClass.person)
            .append(this.makeTriangle(person)).append(this.makeImage(person));
    }
}