/// <reference path="../Lesson.ref.ts"/>

class Lesson extends FreeMakingMusic {

	private returnLessonListButton = new ReturnButton(this, new LESSON.ReturnLessonListButton);
	
    constructor(assets: AssetLoader, constants: CONSTANTS.MelOn) {
        super(assets, constants);
    }

    protected createElements(parentSelector: string, elementIds: string[]) {
		var lessonData = new LessonData(new LESSON.LessonData);
		this.createLesson(lessonData);
		this.addIDs(elementIds);
        super.createElements(parentSelector, elementIds);
    }

	protected createLesson(lessonData: LessonData) {
		new Lecture(new LESSON.Lecture, { lessonData: lessonData });
	}

	private addIDs(elementIds: string[]) {
		elementIds.push("nextButton");
		elementIds.push("prohibitedDisplay");
		elementIds.push("traceDisplay");
		elementIds.push("fillingDisplay");
	}

    protected setStates() {
        this.state.add('Boot', Boot, false);
        this.state.add('Preloader', Preloader, false);
        this.state.add('Main', LessonMelOn, false);
    }
}

class VideoLesson extends Lesson {

	constructor(assets: AssetLoader, constants: CONSTANTS.MelOn) {
        super(assets, constants);
    }

	protected createLesson(lessonData: LessonData) {
		new VideoLecture(new LESSON.VideoLecture, { lessonData: lessonData });
    }
}


// Do it after loading HTML, and use jQuery
window.onload = () => {
    $.ajaxSetup({ async: false, cache: false });
    $(() => { new VideoLesson(new MelOnAssets, new CONSTANTS.MelOn); });
}