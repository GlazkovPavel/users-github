import {Component, OnInit} from '@angular/core';
import {SearchService, User} from "./search.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  users: User[] = []
  search: any;
  loading = false
  meBlock = false
  total_count: any;
  per_page: number = 10;
  page: any = 1;
  error = ''
  pages = []
  noUsers = false


  constructor(private searchService: SearchService ) {
  }

  ngOnInit() {
    this.loading = true
    this.noUsers = false
    this.error = ''
    this.searchService.onMe()
      .subscribe((
        meInfo => {
          this.meBlock = true
          this.loading = false
          this.users = []
        }
      ))
  }

  onSearch() {
    this.error = ''
    this.loading = true
    if (!this.search.trim()) {
      this.ngOnInit()
    } else {
      const newSearch: any = this.search
      const per_page: number = this.per_page
      const page: number = this.page
      this.searchService.onSearch(newSearch, per_page, page)
        .subscribe(
          (users) => {
            if(users.total_count === 0){
              this.noUsers = true
              this.loading = false
              this.users = users.items
              this.total_count = users.total_count
            } else {
              this.users = users.items
              this.total_count = users.total_count
              this.meBlock = false
              this.loading = false
              this.noUsers = false
            }
          }, error => {
            this.error = error.message
            this.page = ''
          }
        )
    }

  }

  pageChanged(event: any) {
    this.page = event;
    this.onSearch()
  }

}

