import { Component } from '@angular/core';
import { Reference } from './references.interface';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  imports: [TranslatePipe],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  reference: Reference[] = [
    {
      id: 1,
      img: 'assets/icons/quotation.svg',
      nameKey: 'references.references.reference1.name',
      roleKey: 'references.references.reference1.role',
      textKey: 'references.references.reference1.text',
    },
    {
      id: 2,
      img: 'assets/icons/quotation.svg',
      nameKey: 'references.references.reference2.name',
      roleKey: 'references.references.reference2.role',
      textKey: 'references.references.reference2.text',
    },
    {
      id: 3,
      img: 'assets/icons/quotation.svg',
      nameKey: 'references.references.reference3.name',
      roleKey: 'references.references.reference3.role',
      textKey: 'references.references.reference3.text',
    },
  ];
}
