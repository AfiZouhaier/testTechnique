import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisationDuBienComponent } from './utilisation-du-bien.component';

describe('UtilisationDuBienComponent', () => {
  let component: UtilisationDuBienComponent;
  let fixture: ComponentFixture<UtilisationDuBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisationDuBienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisationDuBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
