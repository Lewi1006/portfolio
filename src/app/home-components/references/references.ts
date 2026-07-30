import { Component } from '@angular/core';
import { Reference } from './references.interface';

@Component({
  selector: 'app-references',
  imports: [],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  reference: Reference[] = [
    {
      id: 1,
      img: 'assets/icons/quotation.svg',
      name: 'V. Schuster',
      role: 'Team Partner',
      text: `Leo really kept the team together with her great organization and clear communication. We wouldn't have got this far without her commitment.`,
    },
    {
      id: 2,
      img: 'assets/icons/quotation.svg',
      name: 'E.Eichinger',
      role: 'Team Partner',
      text: `Leo was a top team colleague at DA. Her positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.`,
    },
    {
      id: 3,
      img: 'assets/icons/quotation.svg',
      name: 'I. Nuber',
      role: 'Frontend Engineer',
      text: `It was a great pleasure to work with Leo. She knows how to encourage team members to present the best work possible, always adding something to brainstorm.`,
    },
  ];
}
