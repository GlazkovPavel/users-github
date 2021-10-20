import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {User} from "../search.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent  {

  @Input() user: User



}
