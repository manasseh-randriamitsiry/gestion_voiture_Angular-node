import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recherche2DateComponent } from './recherche2-date.component';

describe('Recherche2DateComponent', () => {
  let component: Recherche2DateComponent;
  let fixture: ComponentFixture<Recherche2DateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Recherche2DateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Recherche2DateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
