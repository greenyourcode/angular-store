import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoComponent } from './histo.component';

describe('HistoComponent', () => {
  let component: HistoComponent;
  let fixture: ComponentFixture<HistoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
