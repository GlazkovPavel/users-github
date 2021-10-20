import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IMyInfo} from "../search.service";

@Component({
  selector: 'app-on-me',
  templateUrl: './on-me.component.html',
  styleUrls: ['./on-me.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class OnMeComponent  {

  @Input() myInfo: IMyInfo


  }


