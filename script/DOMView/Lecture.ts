/// <reference path="../Lesson.ref.ts"/>

class Lecture extends DOMView {

    private lessonData: LessonData = this.models["lessonData"];

    constructor(game: Phaser.Game, private constants: LESSON.Lecture, models: Object) {
        super(game, constants, models);
        console.log(this.lessonData);
        this.setTitle(this.lessonData.getTitle);
        this.setLecture(this.lessonData.getLecture);
    }

    private setTitle(title: string) {
        this.$.append($(`<div id=${this.constants.titleId}></div>`).text(title));
    }

    private setLecture(lecture: { [prop: string]: string }[]) {
        lecture.forEach((block) => {
            this.makeBalloon(block);
            this.makePerson(block["person"]);
        });
    }

    private makeBalloon(block: Object) {
        this.$.append($("<div></div>")
            .addClass(this.constants.commonClass.balloon)
            .css("background-color", this.constants.balloonColor[block["person"]])
            .text(block["speech"]));
    }

    private makePerson(person: string) {
        var personBlock = $(`<div id=${this.constants.personIds[person]}></div>`)
            .addClass(this.constants.commonClass.person);
        var triangle = $("<div></div>")
            .addClass(this.constants.commonClass.triangle)
            .css("border-top-color", this.constants.balloonColor[person]);
        var image = $(`<img src=${this.constants.image[person]} />`);
        personBlock.append(triangle);
        personBlock.append(image);
        this.$.append(personBlock);
    }
}