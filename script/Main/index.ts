/// <reference path="../index.ref.ts"/>

class index {
    private logo: HTMLLogo = new HTMLLogo(new INDEX.HTMLLogo());
    private freeMakingMusic: ModeButton = new ModeButton(new INDEX.FreeMakingMusic());
    private lesson: ModeButton = new ModeButton(new INDEX.Lesson);
}

window.onload = () => {
    $(() => { new index(); });
}