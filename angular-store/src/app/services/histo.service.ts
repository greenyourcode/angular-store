import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

/** To manage history like redux store */
export class HistoService {
  histoStore: Array<any> = [];

  setToHistory(action, store) {
    this.histoStore.push({
      action,
      store
    });
  }
}
