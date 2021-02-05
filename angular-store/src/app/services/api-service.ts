import { Injectable } from '@angular/core';
import { StoreService } from './store-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private store: StoreService) { }

  getData() {
    this.store.dispatch('loading', null);
    setTimeout(() => {
      this.store.dispatch('update', {
        firstName: 'Bob',
        lastName: 'Marley'
      });
    }, 2000);
  }
}
