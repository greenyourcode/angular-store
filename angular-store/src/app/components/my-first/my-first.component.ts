import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service';
import { StoreService } from 'src/app/services/store-service';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.scss']
})
export class MyFirstComponent implements OnInit {

  constructor(
    private api: ApiService,
    public store: StoreService) { }

  ngOnInit(): void {
  }

}
