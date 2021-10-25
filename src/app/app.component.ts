import {Component, OnInit} from '@angular/core';
import {IMyInfo, IPagination, SearchService, User} from "./search.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  // @ts-ignore
  users$: Observable<User>
  pagination: IPagination[] = []
  meBlock = false
  total_count: any;
  search = ''
  per_page: number = 10;
  page: any = 1;
  pages: any = []
  noUsers = false
  isLoaded = false
  error = ''

  // @ts-ignore
  myInfo$: Observable<IMyInfo>


  constructor(private searchService: SearchService ) {
  }

  ngOnInit() {
    this.isLoaded = false
    this.noUsers = false
    this.error = this.searchService.onError()
    this.myInfo$ = this.searchService.onMe()
    this.meBlock = true

  }

  onSearch() {
    this.isLoaded = true
    this.error = ''
    if (!this.search.trim()) {
      this.ngOnInit()
    } else {
      const newSearch: any = this.search
      const per_page: number = this.per_page
      const page: number = this.page
      this.meBlock = false
      this.noUsers = false
      this.users$ = this.searchService.onSearch(newSearch, per_page, page)

    }

  }

  pageChanged(event: any) {
    this.page = event;
    this.onSearch()
  }

  onClickSearch(search: string) {
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

