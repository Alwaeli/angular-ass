import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MohammedRedaComponent } from './mohammed-reda.component';

describe('MohammedRedaComponent', () => {
  let component: MohammedRedaComponent;
  let fixture: ComponentFixture<MohammedRedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MohammedRedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MohammedRedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
