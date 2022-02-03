import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceraEtapaComponent } from './tercera-etapa.component';

describe('TerceraEtapaComponent', () => {
  let component: TerceraEtapaComponent;
  let fixture: ComponentFixture<TerceraEtapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceraEtapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceraEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
