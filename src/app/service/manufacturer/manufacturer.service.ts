import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {
  private URL_API = 'https://mobiletechnologyservice.azurewebsites.net/api/manufacturers';
  constructor(private http: HttpClient, private router: Router) { }
  getAllManufacturer(): Observable<any> {
    return this.http.get(this.URL_API);
  }
}
