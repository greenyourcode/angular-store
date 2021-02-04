import { Injectable } from '@angular/core';
import { StoreService } from './store-service';

@Injectable({
  providedIn: 'root'
})

/** To manage history like redux store */ 
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
    console.log(this.store)
    this.store.setState(this.histoStore[0].customer)
  }
}
