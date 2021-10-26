import {Component, OnInit} from '@angular/core';
import { IMyInfo, SearchService, User} from "./search.service";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  users$: Observable<User>
  myInfo$: Observable<IMyInfo>
  meBlock = false
  search = ''
  per_page: number = 10;
  page: any = 1;
  pages: any = []
  isLoaded = false
  myError = ''

  constructor(public searchService: SearchService ) {}

  ngOnInit() {
    this.isLoaded = false
    this.myInfo$ = this.searchService.onMe()
    this.meBlock = true
    localStorage.getItem('search')
  }

  onSearch() {
    this.isLoaded = true
    if (!this.search.trim()) {
      this.ngOnInit()
    } else {
      const newSearch: any = this.search
      const per_page: number = this.per_page
      const page: number = this.page
      this.meBlock = false
      this.users$ = this.searchService.onSearch(newSearch, per_page, page)
        .pipe(catchError(err => {
          return this.myError = err.message;
        }))
    }
  }

  pageChanged(event: any) {
    this.page = event;
    this.onSearch()
  }

  onClickSearch(search: string) {
    this.myError = ''
    localStorage.setItem('search', search)
    if(search === this.search){
      this.search = search
      this.onSearch()
    } else {
      this.search = search
      this.page = 1
      this.onSearch()
    }
  }
}

