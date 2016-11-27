/// <reference path="../Lesson.ref.ts"/>

class VideoLecture extends HTMLView {

	private lessonData: LessonData = this.models["lessonData"];

	constructor(private constants: LESSON.VideoLecture, private models: Object) {
        super(constants);
        this.$.append(this.makeTitle(this.lessonData.getTitle));
        this.makeLectureVideo(this.lessonData.getVideoSrc);
    }

	private makeTitle(title: string): JQuery {
        return $(`<div id=${this.constants.titleId}></div>`).text(title);
    }

	private makeLectureVideo(src: string) {
		var video = $("<video></video>").attr({ "src": src, "controls": "true" });
		this.$.append(video);
	}
}