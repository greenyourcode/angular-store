import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

/** To manage history like redux store */
export class HistoService {
  histoStore: Array<any> = [];

  setToHistory(type, store) {
    this.histoStore.push({
      type,
      store
    });
  }
}
