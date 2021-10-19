import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-on-me',
  templateUrl: './on-me.component.html',
  styleUrls: ['./on-me.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnMeComponent {

  @Input() login = ''
  @Input() avatar = ''
  @Input() link = ''



}
