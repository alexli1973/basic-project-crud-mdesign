import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ConnectService} from './connect.service';

@Injectable()
export class SharingService {

  formData = new BehaviorSubject<any>('');
  curFormData = this.formData.asObservable();

  constructor(private connect: ConnectService) { }

  shareFormData(data: any) {
    this.formData.next(data);
  }

}
