import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MustafaAlwaeliComponent } from './mustafa-alwaeli.component';

describe('MustafaAlwaeliComponent', () => {
  let component: MustafaAlwaeliComponent;
  let fixture: ComponentFixture<MustafaAlwaeliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MustafaAlwaeliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MustafaAlwaeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
