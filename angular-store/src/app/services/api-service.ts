import { Injectable } from '@angular/core';
import { StoreService } from './store-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private store: StoreService) { }

  getData() {
    setTimeout(() => {
      this.store.customer = {
        firstName: 'Bob',
        lastName: 'Marley'
      };
    }, 200);
  }
}
