import { Injectable } from '@angular/core';
import {Customer} from "../../model/Customer";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private URL_API = '';
  // @ts-ignore
  private customer: Customer;

  constructor(private http: HttpClient, private router: Router) {
  }

  getAllCustomer(): Observable<any> {
    return this.http.get(this.URL_API);
  }

  createCustomer(iCustomer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.URL_API, iCustomer);
  }

  getById(id: any): Observable<Customer> {
    // @ts-ignore
    return this.http.get<Customer>(this.URL_API + '/' + id);
  }

  deleteCustomer(id: number): Subscription {
    return this.http.delete<Customer>(this.URL_API + '/' + id).subscribe(res => this.router.navigateByUrl(''));
  }

  UpdateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.URL_API}/${customer.customer_id}`, customer);
  }
  editCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.URL_API + '/' + id, customer);
  }
}
