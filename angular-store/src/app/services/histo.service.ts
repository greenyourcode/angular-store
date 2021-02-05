import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/** To manage history like redux store */
export class HistoService {

  constructor() { }

  histoStore: Array<any> = [];

  setAction(store) {
    this.histoStore.push({
      ...store
    });
    this.getHisto();
  }

  getHisto() {
    for (const iterator of this.histoStore) {
      console.log(iterator);
    }
  }
}
