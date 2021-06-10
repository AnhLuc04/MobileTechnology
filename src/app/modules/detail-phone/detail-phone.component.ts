import { Component, OnInit } from '@angular/core';
import {Phone} from "../../model/Phone";
import {PhoneServiceService} from "../../service/phone/phone-service.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-detail-phone',
  templateUrl: './detail-phone.component.html',
  styleUrls: ['./detail-phone.component.css']
})
export class DetailPhoneComponent implements OnInit {

  id: any;
  // @ts-ignore
  phone: Phone;

  // @ts-ignore
  customer1: Phone = {
    // firstName: '',
    // lastName: '',
    // description: '',
  };

  constructor(private phoneService: PhoneServiceService, private router: Router, private activate: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activate.params.subscribe((params: Params) => {
      this.id = params.id;
      console.log(this.id);
      this.phoneService.getById(this.id).subscribe(result => {
        this.customer1 = result;
        console.log(this.phone);
        // this.customer1 = this.customer;
      });
    });
  }
}
