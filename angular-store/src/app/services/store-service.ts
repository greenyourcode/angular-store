import { ApiService } from 'src/app/services/api-service';
import { Injectable } from '@angular/core';
import { StoreAction } from './store.enum';
import { HistoService } from './histo.service';
import { Observable, of, Subject } from 'rxjs';
import { filter, tap, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  action: any; // extract in enum action
  action$ = new Subject();
  state$ = new Subject();
  customer: any = {};
  initialState = []

  constructor(
    private histoService: HistoService,
    private apiService: ApiService) { 
      this.action$.pipe(
        filter((action: any) => action.type === 'UPDATING'),
        switchMap(_ => this.apiService.getUserXhr()),
        map((data: any) => {
          return { type: 'UPDATED', payload: { lastName: data.name } };
        }),
        // switchMap((action: any) => this.dispatch(action, action.payload))
      ).subscribe(
      //   (res) => {
      //   console.log(res)
      // });
        (action: any) => {
        this.dispatch(action, action.payload)
      }
      );
    }

  setState(newState) {
    this.customer = {
      ...this.customer,
      firstName: newState?.firstName,
      lastName: newState?.lastName,
      isLoading: newState?.isLoading
    }
  }

  setAction(action) {
    this.action = action;
    this.action$.next(action);
  }

  dispatch(action, payload) {
    const newState = this.reducer(this.customer, { action, payload });
    this.setState(newState);
    this.setAction(action);
    // save each dispatch on history[]
    this.histoService.setToHistory(
      action,
      newState
    );

    // return of(1).pipe(
    //   map(_ => {
    //     return this.reducer(this.customer, { action, payload })
    //   }),
    //   tap((newState) => {
    //     this.setState(newState);
    //     this.setAction(action);
    //     // save each dispatch on history[]
    //     this.histoService.setToHistory(
    //       action,
    //       newState
    //     );
    //   }));
    
  }

  reducer(state = this.initialState, { action, payload }) {
    switch (action.type) {
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
