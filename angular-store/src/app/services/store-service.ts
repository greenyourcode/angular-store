import { ApiService } from 'src/app/services/api-service';
import { Injectable } from '@angular/core';
import { StoreAction } from './store.enum';
import { HistoService } from './histo.service';
import { Subject } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  action$ = new Subject();
  customer: any = {};
  initialState = []

  constructor(
    private histoService: HistoService,
    private apiService: ApiService) { 
      // epic redux
      this.action$.pipe(
        filter((action: any) => action.type === StoreAction.Updating),
        switchMap(_ => this.apiService.getUserXhr()),
        tap((user: any) => {
          this.dispatch({ 
            type: StoreAction.Updated, 
            payload: { lastName: user.name } 
          }) 
        })
      ).subscribe();
    }

  setState(newState) {
    this.customer = {
      ...this.customer,
      firstName: newState?.firstName,
      lastName: newState?.lastName,
      isLoading: newState?.isLoading
    }
  }

  dispatch(action) {
    const newState = this.reducer(this.customer, action);
    this.setState(newState);
    // save each dispatch on history[]
    this.histoService.setToHistory(
      action,
      newState
    );
    this.action$.next(action);
  }

  reducer(state = this.initialState, { type, payload }) {
    switch (type) {
      case StoreAction.Loading:
        return {
          ...state,
          isLoading: true
        };
      case StoreAction.Updating:
        return {
          ...state,
          firstName: payload.firstName,
          lastName: payload.lastName,
          isLoading: true
        };
      case StoreAction.Updated:
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
