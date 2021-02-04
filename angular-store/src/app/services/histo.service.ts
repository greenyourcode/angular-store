import { Injectable } from '@angular/core';
import { StoreService } from './store-service';

@Injectable({
  providedIn: 'root'
})
export class HistoService {

  constructor(private store: StoreService) { }

  histoStore: Array<any> = [];

  setAction() {
    this.histoStore.push({
      ...this.store,
      customer: {
        ...this.store.customer,
      }
    });
  }

  getFirstHistoAction() {
    this.store = {
      ...this.store.customer,
      customer : this.histoStore[0]
    };
  }
}
