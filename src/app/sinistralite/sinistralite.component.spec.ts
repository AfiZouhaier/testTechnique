import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SINISTRALITEComponent } from './sinistralite.component';

describe('SINISTRALITEComponent', () => {
  let component: SINISTRALITEComponent;
  let fixture: ComponentFixture<SINISTRALITEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SINISTRALITEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SINISTRALITEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
