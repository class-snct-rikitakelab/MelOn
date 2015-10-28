/// <reference path="../Lesson.ref.ts"/>

class LessonData extends Model {
    
    private title: string;
    private target: MusicData;
    private mode: string;
    private nextUrl: string;
    private unitNote: number;
    private blanks: [number, number][];
    private inherit: MusicData;
    private lecture: { [prop: string]: string }[];

    constructor(private constants: LESSON.LessonData) {
        super(constants);
        if (!this.getJSON()) {
            alert("Invalied File Data!");
            document.location = <any>this.constants.defaultUrl;
        }
    }

    private getJSON(): boolean {
        $.ajaxSetup({ async: false });
        $.getJSON(this.constants.listUrl, (list, status) => {
            if (status !== "success") return false;
            $.getJSON(list[$.getUrlVar("lesson")]["url"], (data, statud) => {
                if (status !== "success") return false;
                console.log(data, status);
                this.getLessonData(data);
            });
            if ($.getUrlVar("inherit")) {
                $.getJSON(list[$.getUrlVar("inherit")]["url"], (data, status) => {
                    if (status !== "success") return false;
                    this.inherit = data["music"];
                });
            }
        });
        return true;
        $.ajaxSetup({ async: true });
    }

    private getLessonData(data: Object) {
        this.title = data["title"];
        this.target = data["music"];
        this.mode = data["mode"];
        this.setNextUrl(data);
        this.lecture = data["lecture"];
        if (this.mode === "filling") this.setFillingLessonData(data);
    }

    private setNextUrl(data: Object) {
        if (data["next"]) {
            this.nextUrl = `Lesson.html?lang=${LESSON.language}&lesson=${data["next"]}`;
            if (data["passNext"] === true) this.nextUrl += `&inherit=${data["title"]}`;
        } else this.nextUrl = this.constants.defaultUrl;
    }

    private setFillingLessonData(data: Object) {
        this.unitNote = data["unitNote"];
        this.blanks = data["blank"];
    }

    get getTitle(): string { return this.title; }
    get getMode(): string { return this.mode; }
    get getTargetMusic(): MusicData { return this.target; }
    get getNextUrl(): string { return this.nextUrl; }
    get getUnitNote(): number { return this.unitNote; }
    get getBlanks(): [number, number][] { return this.blanks; }
    get getInherit(): MusicData { return this.inherit; }
    get getLecture(): { [prop: string]: string }[] { return this.lecture; }
}