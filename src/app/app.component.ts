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
  total_count: any;
  per_page: number = 10;
  page: any;
  error = ''

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.onSearch()
  }

  onSearch() {
    this.loading = true
    if (!this.search.trim()) {
      return
    }
      const newSearch: any = this.search
      const per_page: number = this.per_page
      const page: number = this.page
      this.searchService.onSearch(newSearch, per_page, page)
        .subscribe(
          users => {
            console.log('response', users)
            this.users = users.items
            this.total_count = users.total_count
            this.loading = false
          }, error => {
            this.error = error.message
          }
        )
  }


  pageChanged(event: any) {
    this.page = event;
    this.onSearch()
  }
}

// this.http.get<User[]>('https://api.github.com/users?page=3&per_page=10', {
//   headers: new HttpHeaders({
//     'Accept': 'application/vnd.github.v3+json',
//     'Authorization' : `token ${token}`
//   })
// })
//   .subscribe(users => {
//     console.log('response', users)
//     this.users = users
//   })
