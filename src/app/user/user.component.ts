import {Component, Input} from '@angular/core';
import {User} from "../search.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {

  // @ts-ignore
  @Input() user: User;



}
