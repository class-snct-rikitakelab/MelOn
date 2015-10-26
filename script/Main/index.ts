/// <reference path="../index.ref.ts"/>

class index {
    private logo: HTMLLogo = new HTMLLogo(new INDEX.HTMLLogo());
    private freeMakingMusic: ModeButton = new ModeButton(new INDEX.FreeMakingMusic());
    private practice: ModeButton = new ModeButton(new INDEX.Practice);
}

window.onload = () => {
    $(() => { new index(); });
}