import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  customer: any;
  constructor() { }

  setState(newState) {
    this.customer = {
      ...this.customer,
      firstName: newState.firstName,
      lastName: newState.lastName
    }
  }
}
