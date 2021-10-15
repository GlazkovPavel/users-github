import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {token} from "../utils/utils";
import {SearchService, User} from "./search.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  users: User[] = []
  search = ''
  loading = false
  error = ''


  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
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
  }

  onSearch() {
    this.loading = true
    if (!this.search.trim()) {
      return
    }
      const newSearch: any = this.search
      this.searchService.onSearch(newSearch)
        .subscribe(
          users => {
            console.log('response', users)
            this.users = users.items
            this.search = ''
            this.loading = false
          }, error => {
            this.error = error.message
          }
        )
  }

}
