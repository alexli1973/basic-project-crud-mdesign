
import { Component, OnInit } from '@angular/core';
import {Car} from '../../../shared/model/car';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ConnectService} from '../../../shared/services/connect.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  car: Car;
  cars: Car[];
  id: string;
  // @Output() newCarAdd = new EventEmitter<Car>();

  formEdit: FormGroup;

  constructor(private route: ActivatedRoute, private connect: ConnectService, private location: Location) { }

  ngOnInit() {
    // this.getCars();
    this.connect.getCarById(this.route.snapshot.params['id']).subscribe(data => {
        this.car = data;
        this.id = data.id;
        console.log(this.car);
        this.formEdit = new FormGroup({
          'name': new FormControl(this.car.name, [Validators.required]),
          'model': new  FormControl(this.car.model, [Validators.required]),
          'percent': new  FormControl(this.car.percent, [Validators.required])
        });
      }
    );

  }

  saveForm() {
    let submitForm = this.formEdit.value;
    let name = submitForm.name;
    let model = submitForm.model;
    let percent = submitForm.percent;
    let id = this.id;
    let car = {name, model, percent, id};
    console.log(submitForm);
    console.log(this.id);
    this.connect.updateCar(car).subscribe(res => {
      console.log('RES ' + res);
      this.location.back();
    });


  }

  getCars() {
    this.connect.getCars().subscribe(cars => {this.cars = cars; });
  }

  getItemDetail(id) {
    this.connect.getCarById(id).subscribe(data => {
      this.car = data;
    });
  }

}
