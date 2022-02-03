import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddalumnoComponent } from './addalumno.component';

describe('AddalumnoComponent', () => {
  let component: AddalumnoComponent;
  let fixture: ComponentFixture<AddalumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddalumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
