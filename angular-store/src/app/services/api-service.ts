import { Injectable } from '@angular/core';
import { StoreType } from './store.enum';
import { StoreService } from './store-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private store: StoreService) { }

  getData() {
    this.store.dispatch(StoreType.Loading, null);
    setTimeout(() => {
      this.store.dispatch(StoreType.Updated, {
        loading: false,
        firstName: 'Bob',
        lastName: 'Marley'
      });
    }, 2000);
  }
}
