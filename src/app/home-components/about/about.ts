import { Component, inject } from '@angular/core';
import { TranslateService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  translateService = inject(TranslateService);
}
