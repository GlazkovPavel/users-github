import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {token} from "../utils/utils";

export interface User {
  login: string,
  html_url: string,
  avatar_url: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  users: User[] = []

  search = ''



  constructor(private http: HttpClient) {
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
    if (!this.search.trim()) {
      return
    }
      const newSearch: any = this.search
      this.http.get<any>(`https://api.github.com/search/users?q=${newSearch}&per_page=10`, {
        headers: new HttpHeaders({
          'Accept': 'application/vnd.github.v3+json',
          'Authorization' : `token ${token}`
        })
      })
        .subscribe(
          users => {
            console.log('response', users)
            this.users = users.items
            this.search = ''

          }
        )
  }

  onClickFoto() {

  }
}
