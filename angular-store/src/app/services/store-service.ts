import { Injectable } from '@angular/core';
import { HistoService } from './histo.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  type: any; // extract in enum type
  customer: any;
  constructor(private histoService: HistoService) { }

  setState(newState) {
    this.customer = {
      ...this.customer,
      firstName: newState?.firstName,
      lastName: newState?.lastName
    }
  }

  dispatch(type, payload) {
    const newState = this.reducer(this.customer, type);
    this.setState(newState);
    this.histoService.setAction(this.customer);
  }

  reducer(state, { type, payload }) {
    if (type === 'loading') {
      return {
        ...state,
        isLoading: true
      };
    } else if (type === 'loaded') {
      return {
        ...state,
        isLoading: false
      };
    } else if (type === 'update') {
      return {
        ...state,
        firstName: payload.firstName,
        lastName: payload.lastName
      };
    }
  }
}
