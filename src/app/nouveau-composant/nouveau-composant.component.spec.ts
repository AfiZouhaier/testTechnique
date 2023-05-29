import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauComposantComponent } from './nouveau-composant.component';

describe('NouveauComposantComponent', () => {
  let component: NouveauComposantComponent;
  let fixture: ComponentFixture<NouveauComposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauComposantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveauComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
