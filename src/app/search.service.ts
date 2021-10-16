import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {token} from "../utils/utils";

export interface User {
  login: string,
  html_url: string,
  avatar_url: string,
  total_count: number
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  onSearch(newSearch: any, per_page: number, page: number){
    let params = new HttpParams()
    params = params.append('q', `${newSearch}`)
    params = params.append('per_page', `${per_page}`)
    params = params.append('page', `${page}`)
   return this.http.get<any>('https://api.github.com/search/users', {
     params,
     headers: new HttpHeaders({
        'Accept': 'application/vnd.github.v3+json',
        'Authorization' : `token ${token}`
      })
    })

  }

}
