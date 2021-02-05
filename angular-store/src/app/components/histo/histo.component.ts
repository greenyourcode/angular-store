import { HistoService } from 'src/app/services/histo.service';
import { StoreService } from 'src/app/services/store-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-histo',
  templateUrl: './histo.component.html',
  styleUrls: ['./histo.component.scss']
})
export class HistoComponent {

  constructor(
    public histoService: HistoService,
    private storeService: StoreService) { }

  reLoadState(state) {
    this.storeService.setState(state);
  }
}
