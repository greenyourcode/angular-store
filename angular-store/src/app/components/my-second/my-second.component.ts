import { Component, OnInit } from '@angular/core';
import { HistoService } from 'src/app/services/histo.service';
import { StoreService } from 'src/app/services/store-service';

@Component({
  selector: 'app-my-second',
  templateUrl: './my-second.component.html',
  styleUrls: ['./my-second.component.scss']
})
export class MySecondComponent implements OnInit {

  constructor(
    public store: StoreService,
    public histoStore: HistoService) { }

  ngOnInit(): void {
  }

}
