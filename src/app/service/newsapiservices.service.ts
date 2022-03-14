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

  //technewsapiurl end endpoint
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=8249113b94484c208731d89b5c6413ed";

  //businessnewsapiurl end endpoint
  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8249113b94484c208731d89b5c6413ed";

  //topheading method for topheading component endpoint data

  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  //technews method for technews component endpoint data
  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }

  //businessnews method for technews component endpoint data
  businessNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl);
  }

}
