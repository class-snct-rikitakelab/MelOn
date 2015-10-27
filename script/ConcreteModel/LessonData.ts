/// <reference path="../Lesson.ref.ts"/>

class LessonData extends Model {
    
    private target: MusicData;
    private mode: string;
    private nextUrl: string;

    constructor(private constants: LESSON.LessonData) {
        super(constants);
        this.getJSON();
    }

    private getJSON() {
        $.getJSON(this.constants.listUrl, (list) => {
            $.getJSON(list[$.getUrlVar("lesson")]["url"], (data) => { this.getLessonData(data);});
        });
    }

    private getLessonData(data: Object) {
        this.target = data["music"];
        this.mode = data["mode"];
        this.nextUrl = data["next"] ? `Lesson.html?lang=${LESSON.language}&lesson=${data["next"]}` : this.constants.defaultUrl;
    }

    get getMode(): string {
        return this.mode;
    }

    get getTargetMusic(): MusicData {
        return this.target;
    }

    get getNextUrl(): string {
        return this.nextUrl;
    }
}