import { Injectable } from '@angular/core';
import { StoreType } from './store.enum';
import { HistoService } from './histo.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  type: any; // extract in enum type
  customer: any;
  initialState = []
  constructor(
    private histoService: HistoService) { }

  setState(newState) {
    this.customer = {
      ...this.customer,
      firstName: newState?.firstName,
      lastName: newState?.lastName,
      isLoading: newState?.isLoading
    }
  }

  setType(type) {
    this.type = type;
  }

  dispatch(type, payload) {
    const newState = this.reducer(this.customer, { type, payload });
    this.setState(newState);
    this.setType(type);
    // save each dispatch on history[]
    this.histoService.setToHistory(
      this.type,
      newState
    );
  }

  reducer(state = this.initialState, { type, payload }) {
    switch (type) {
      case StoreType.Loading:
        return {
          ...state,
          isLoading: true
        };
      case StoreType.Updated:
        return {
          ...state,
          firstName: payload.firstName,
          lastName: payload.lastName,
          isLoading: false
        };
      default: 
        return state
    }
  }
}
