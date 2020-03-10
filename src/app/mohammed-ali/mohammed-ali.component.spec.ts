import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MohammedAliComponent } from './mohammed-ali.component';

describe('MohammedAliComponent', () => {
  let component: MohammedAliComponent;
  let fixture: ComponentFixture<MohammedAliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MohammedAliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MohammedAliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
