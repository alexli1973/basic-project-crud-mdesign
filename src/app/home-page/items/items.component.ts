import { Component, OnInit } from '@angular/core';
import {Car} from '../../shared/model/car';
import {ConnectService} from '../../shared/services/connect.service';
import {SharingService} from '../../shared/services/sharing.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  cars: Car[] = [];

  constructor(private connect: ConnectService, private sharing: SharingService) { }

  ngOnInit() {
    this.getCars();
  }
  newCarAdded(car: Car) {
    this.cars.push(car);
    this.getCars();
  }

  getCars() {
    this.connect.getCars().subscribe(data => {
      console.log(data);
      this.cars = data;
    });
  }

  deleteCar(car: Car) {
    this.connect.deleteCar(car.id).subscribe(data => {
      console.log(data);
      this.getCars();
    });
  }

}
