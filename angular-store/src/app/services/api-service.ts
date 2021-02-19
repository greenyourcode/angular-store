import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getUserXhr(): Observable<any> {
    return of({
      name: 'Loko',
      nickName: 'Patrice'
    })
  }
}
