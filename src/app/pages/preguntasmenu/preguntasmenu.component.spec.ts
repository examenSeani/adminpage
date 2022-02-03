import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasmenuComponent } from './preguntasmenu.component';

describe('PreguntasmenuComponent', () => {
  let component: PreguntasmenuComponent;
  let fixture: ComponentFixture<PreguntasmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntasmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntasmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
