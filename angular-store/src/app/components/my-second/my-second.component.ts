import { Component, OnInit } from '@angular/core';
import { StoreType } from 'src/app/services/store.enum';
import { HistoService } from 'src/app/services/histo.service';
import { StoreService } from 'src/app/services/store-service';

@Component({
  selector: 'app-my-second',
  templateUrl: './my-second.component.html',
  styleUrls: ['./my-second.component.scss']
})
export class MySecondComponent {

  constructor(
    public store: StoreService) { }

  saveOnHistory() {
    this.store.dispatch(StoreType.Updated, this.store?.customer);
  }
}
