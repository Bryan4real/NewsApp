import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //newsApiUrl end point
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=8249113b94484c208731d89b5c6413ed";

  //topheading method for topheading component endpoint data

  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }
}
