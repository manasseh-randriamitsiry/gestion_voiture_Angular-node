import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocataireAddComponent } from './locataire-add.component';

describe('LocataireAddComponent', () => {
  let component: LocataireAddComponent;
  let fixture: ComponentFixture<LocataireAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocataireAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocataireAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
