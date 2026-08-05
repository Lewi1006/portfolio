import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  currentLanguage = signal<'en' | 'de'>('en');

  translations = {
    header: {
      en: {
        about: 'About me',
        skills: 'My skills',
        hi: 'Say Hi',
      },
      de: {
        about: 'Über mich',
        skills: 'Meine Skills',
        hi: 'Sag Hallo',
      },
    },

    about: {
      en: {
        h2: 'About me',
        aboutText:
          ' Write some information about yourself that is IT related. Why are you passionate about coding? Show a desire to learn new technologies. Add a brief description of your problem-solving approach.You can include some key traits like: analytical thinking, creativity, persistence and collaboration.',
        based: 'Based in Berlin',
        remote: ''
      },

      de: {
        h2: 'Über mich',
        aboutText:
          ' Schreiben Sie etwas über sich selbst, das mit IT zu tun hat. Warum begeistert Sie das Programmieren? Zeigen Sie Ihre Bereitschaft, neue Technologien zu erlernen. Fügen Sie eine kurze Beschreibung Ihrer Herangehensweise an die Problemlösung hinzu. Sie können dabei einige wichtige Eigenschaften nennen, wie zum Beispiel: analytisches Denken, Kreativität, Ausdauer und Teamfähigkeit.',
        based: 'Berlin',
      },
    },
  };

  translate(section: keyof typeof this.translations, key: string): string {
    const language = this.currentLanguage();
    const translations = this.translations[section][language];

    return translations[key as keyof typeof translations];
  }
}
