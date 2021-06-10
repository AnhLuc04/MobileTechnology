import {Component, OnInit} from '@angular/core';
import {ManufacturerService} from "../../service/manufacturer/manufacturer.service";
import {Manufacturer} from "../../model/Manufacturer";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @ts-ignore
  listManufacturer: Manufacturer[];
  list: any

  constructor(private manufacturerService: ManufacturerService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.manufacturerService.getAllManufacturer().subscribe(data => {
      this.list = data;
      console.log(this.list)
      console.log(this.list.result)
      this.listManufacturer = this.list.result;
    });

  }
}
