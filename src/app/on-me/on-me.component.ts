import { Component, OnInit } from '@angular/core';
import {SearchService} from "../search.service";

@Component({
  selector: 'app-on-me',
  templateUrl: './on-me.component.html',
  styleUrls: ['./on-me.component.css']
})
export class OnMeComponent implements OnInit {

  login = ''
  avatar = ''
  link = ''

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.onMe()
      .subscribe((
        meInfo => {
          this.login = meInfo.name
          this.avatar = meInfo.avatar_url
          this.link = meInfo.html_url
        }
      ))
  }

}
