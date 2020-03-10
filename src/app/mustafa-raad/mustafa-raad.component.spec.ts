import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MustafaRaadComponent } from './mustafa-raad.component';

describe('MustafaRaadComponent', () => {
  let component: MustafaRaadComponent;
  let fixture: ComponentFixture<MustafaRaadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MustafaRaadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MustafaRaadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
