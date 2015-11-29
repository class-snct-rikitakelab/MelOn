/// <reference path="../Lesson.ref.ts"/>
var LESSON;
(function (LESSON) {
    var ScoreData = CONSTANTS.MeasureSheet;
    var ModalWindow = CONSTANTS.ModalWindow;
    LESSON.language = new LESSON_LIST.Language().language;
    var LessonData = (function () {
        function LessonData() {
            this.language = LESSON.language;
            this.listUrl = LESSON_LIST.listUrls[LESSON.language];
            this.defaultUrl = "LessonList.html?lang=" + LESSON.language;
            this.errorMsg = {
                "English": "Lesson Data Read Error...",
                "Japanese": "学習データの読み込みに失敗しました。",
                "Finnish": "Oppitunnin tietoja ei onnistuttu lukemaan...",
            };
        }
        return LessonData;
    })();
    LESSON.LessonData = LessonData;
    var Achievement = (function () {
        function Achievement() {
            this.pitch = new ScoreData().pitch;
        }
        return Achievement;
    })();
    LESSON.Achievement = Achievement;
    var TargetNotes = (function () {
        function TargetNotes() {
            this.images = { note: "note", };
            this.measureWidth = new ScoreData().width;
            this.noteHeight = new ScoreData().noteHeight;
            this.pitch = new ScoreData().pitch;
            this.opacity = 1.0;
            this.color = 0x7777ff;
        }
        return TargetNotes;
    })();
    LESSON.TargetNotes = TargetNotes;
    var Blanks = (function () {
        function Blanks() {
            this.images = { blank: "blank", };
            this.pitch = new ScoreData().pitch;
            this.measureWidth = new ScoreData().width;
            this.height = new ScoreData().noteHeight * this.pitch.length;
            this.opacity = 0.3;
        }
        return Blanks;
    })();
    LESSON.Blanks = Blanks;
    var NextButton = (function () {
        function NextButton() {
            this.selector = "#nextButton";
            this.lang = LESSON.language;
            this.next = {
                "English": "NEXT ⇒",
                "Japanese": "次へ ⇒",
                "Finnish": "SEURAAVA ⇒"
            };
        }
        return NextButton;
    })();
    LESSON.NextButton = NextButton;
    var Lecture = (function () {
        function Lecture() {
            this.selector = "#lecture";
            this.titleId = "title";
            this.personIds = {
                teacher: "teacher",
                child: "child",
            };
            this.balloonColor = {
                teacher: "lightgreen",
                child: "orange",
            };
            this.commonClass = {
                balloon: "balloon",
                triangle: "triangle",
                person: "person",
            };
            this.baseImageAddress = "storage/assets/image/person/";
            this.images = {
                teacher: this.baseImageAddress + "teacher.png",
                child: this.baseImageAddress + "child.png",
            };
            this.audios = {};
        }
        return Lecture;
    })();
    LESSON.Lecture = Lecture;
    var LessonModal = (function () {
        function LessonModal() {
            this.modalConstants = new ModalWindow();
            this.playMsg = {
                "English": "Play the music.",
                "Japanese": "音楽を再生してね。",
                "Finnish": "Soita musiikkia.",
            };
            this.stopMsg = {
                "English": "Listen to the music or stop.",
                "Japanese": "音楽を最後まで聞くか、停止してね。",
                "Finnish": "Kuuntele musiikkia tai pysötä.",
            };
            this.TryMsg = {
                "English": "Good Job! Try to play the music!",
                "Japanese": "やったね！　音楽を再生してみよう！",
                "Finnish": "Hienoa! Kokeile soittaa musiikkia!",
            };
            this.goNextMsg = {
                "English": "Excellent! push NEXT button to go on!",
                "Japanese": "よくできました！　「次へ」ボタンを押して進もう！",
                "Finnish": "Erinomaista! Paina SEURAAVA nappia jatkaaksesi!",
            };
        }
        return LessonModal;
    })();
    LESSON.LessonModal = LessonModal;
    var ReturnLessonListButton = (function () {
        function ReturnLessonListButton() {
            this.selector = "#returnLessonList";
            this.language = LESSON.language;
            this.destination = "LessonList.html?lang=" + this.language;
            this.shadowColor = "lavender";
            this.text = {
                "English": "Select Lesson",
                "Japanese": "レッスンをえらぶ",
                "Finnish": "Valitse oppitunti",
            };
            this.confirmMsg = {
                "English": "The music you are making will be disposed. Is it OK to return the Lesson List page?",
                "Japanese": "今、楽ふにある音楽が消えてしまいます。レッスンせんたくページへもどっても良いですか？",
                "Finnish": "Musiikki jota teet poistetaan. Palataanko takaisin oppitunnit sivulle?",
            };
        }
        return ReturnLessonListButton;
    })();
    LESSON.ReturnLessonListButton = ReturnLessonListButton;
})(LESSON || (LESSON = {}));
//# sourceMappingURL=Lesson.const.js.map