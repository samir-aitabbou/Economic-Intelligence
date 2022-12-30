import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  constructor(private http: HttpClient) { }

  getArticle(){
    return this.http.get("http://127.0.0.1:8000/nb_article");
  }
  getCountsYear(){
    return this.http.get("http://127.0.0.1:8000/years");
  }
  getCountruesCitation(){
    return this.http.get("http://127.0.0.1:8000/citations");
  }
  getCountriesPublicatio(){
    return this.http.get("http://127.0.0.1:8000/countries");
  }
  getcitation(){
    return this.http.get("http://127.0.0.1:8000/citationsCountries");
  }
  getNumberOfPublisherBySite(){
    return this.http.get("http://127.0.0.1:8000/citationsByPublisher");
  }
}
