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
      },
      de: {
        about: 'Über mich',
      },
    },
  };

  translate(section: string, key: string): string {
    const language = this.currentLanguage();
    const translations = this.translations[section][language];

    return translations[key];
  }

  switchLanguage(): void {
    if (this.currentLanguage() === 'en') {
      this.currentLanguage.set('de');
    } else {
      this.currentLanguage.set('en');
    }
  }
}
