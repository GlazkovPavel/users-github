import {Component, Injectable, Input, OnInit} from '@angular/core';
import {IMyInfo, SearchService} from "../search.service";

@Component({
  selector: 'app-on-me',
  templateUrl: './on-me.component.html',
  styleUrls: ['./on-me.component.css'],
})

export class OnMeComponent implements OnInit {

  // @ts-ignore
  @Input myInfo: IMyInfo



  constructor(private searchService: SearchService) { }


  ngOnInit(): void {


  }

}
