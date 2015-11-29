/// <reference path="../index.ref.ts"/>

class index
{
	private language: Language = new Language(new INDEX.Language);
	private languageSelector: LanguageSelector = new LanguageSelector(new INDEX.LanguageSelector, this.language);
    private logo: HTMLLogo = new HTMLLogo(new INDEX.HTMLLogo());
    private freeMakingMusic: ModeButton = new ModeButton(new INDEX.FreeMakingMusic(), this.language);
    private lesson: ModeButton = new ModeButton(new INDEX.Lesson, this.language);
}

window.onload = () => {
    $(() => { new index(); });
}