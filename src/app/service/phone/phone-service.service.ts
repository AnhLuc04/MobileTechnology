import {Injectable} from '@angular/core';
import {Phone} from "../../model/Phone";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhoneServiceService {

  private URL_API = '';
  // @ts-ignore
  private phone: Phone;

  constructor(private http: HttpClient, private router: Router) {
  }

  getAllPhone(): Observable<any> {
    return this.http.get(this.URL_API);
  }

  createPhone(phone: Phone): Observable<Phone> {
    return this.http.post<Phone>(this.URL_API, phone);
  }

  getById(id: any): Observable<Phone> {
    // @ts-ignore
    return this.http.get<Customer>(this.URL_API + '/' + id);
  }

  deletePhone(id: number): Subscription {
    return this.http.delete<Phone>(this.URL_API + '/' + id).subscribe(res => this.router.navigateByUrl(''));
  }

  UpdatePhone(id: number, phone: Phone): Observable<Phone> {
    return this.http.put<Phone>(`${this.URL_API}/${phone.id}`, phone);
  }

  editPhone(id: number, phone: Phone): Observable<Phone> {
    return this.http.put<Phone>(this.URL_API + '/' + id, phone);
  }
}
