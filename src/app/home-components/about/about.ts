import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollArrow } from '../../shared/scroll-arrow.directive';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe, ScrollArrow],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
