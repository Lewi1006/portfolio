import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/language.service';

@Pipe({
  name: 'translate',
  standalone: true,
})
export class TranslatePipe implements PipeTransform {
  constructor(private translateService: TranslateService) {}

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
