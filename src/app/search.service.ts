import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {token} from "../utils/utils";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export interface User {
  items: User[];
  login: string,
  html_url: string,
  avatar_url: string,
  total_count: number
}

export interface IMyInfo {
  name: string,
  html_url: string,
  avatar_url: string,
}

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  constructor(private http: HttpClient) {}

  onSearch(newSearch: string, per_page: number, page: number): Observable<any> {
    let params = new HttpParams()
    params = params.append('q', `${newSearch}`)
    params = params.append('per_page', `${per_page}`)
    params = params.append('page', `${page}`)
    return this.http.get<User>('https://api.github.com/search/users', {
     params,
     headers: new HttpHeaders({
        'Accept': 'application/vnd.github.v3+json',
        'Authorization' : `token ${token}`
      })
    }).pipe(map((users: User) => {
      return { ...users
      }
    }))
  }

  onMe(): Observable<IMyInfo>{
    const username = 'glazkovpavel'
    return this.http.get<IMyInfo>(`https://api.github.com/users/${username}`, {
      headers: new HttpHeaders({
        'Accept': 'application/vnd.github.v3+json',
        'Authorization' : `token ${token}`
      })
    }).pipe(map((myInfo: IMyInfo) => {
      return { ...myInfo
      }
    }))

  }
}

