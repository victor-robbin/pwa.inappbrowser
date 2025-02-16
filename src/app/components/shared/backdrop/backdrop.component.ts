import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  standalone: true,
  imports: [],
  templateUrl: `./backdrop.component.html`,
  styleUrl: './backdrop.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackdropComponent { }
