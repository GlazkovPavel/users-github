import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {token} from "../utils/utils";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";

export interface User {
  items: User[];
  login: string,
  html_url: string,
  avatar_url: string,
  total_count: number,
  error: string
}

export interface IPagination {
  newSearch: string,
  per_page: number,
  page: number
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
  public err: any;

  constructor(private http: HttpClient) {

  }

  onError(){
    return this.err
  }

  onSearch(newSearch: string, per_page: number, page: number): Observable<User> {
    let params = new HttpParams()
    params = params.append('q', `${newSearch}`)
    params = params.append('per_page', `${per_page}`)
    params = params.append('page', `${page}`)
   // @ts-ignore
    return this.http.get<User>('https://api.github.com/search/users', {
     params,
     headers: new HttpHeaders({
        'Accept': 'application/vnd.github.v3+json',
        'Authorization' : `token ${token}`
      })
    }).pipe(map((users: User) => {
      return { ...users
      }
    }), catchError((err) => {
      return this.err = err.message
      }
    ))
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
