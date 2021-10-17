import { Component, OnInit } from '@angular/core';
import {SearchService} from "../search.service";

@Component({
  selector: 'app-on-me',
  templateUrl: './on-me.component.html',
  styleUrls: ['./on-me.component.css']
})
export class OnMeComponent implements OnInit {

  myName = ''

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.onMe()
      .subscribe((
        meInfo => {
          console.log('meInfo', meInfo)
          this.myName = meInfo.login
        }
      ))
  }

}
