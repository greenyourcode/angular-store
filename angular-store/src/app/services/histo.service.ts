import { Injectable } from '@angular/core';
import { StoreService } from './store-service';

@Injectable({
  providedIn: 'root'
})
export class HistoService {

  constructor(private store: StoreService) { }

  histoStore: Array<any> = [];

  setAction() {
    console.log(this.store)
    this.histoStore.push({
      ...this.store,
      customer: {
        ...this.store.customer,
      }
    });
  }

  getFirstHistoAction() {
    console.log(this.store)
    this.store.setState(this.histoStore[0].customer)
  }
}
