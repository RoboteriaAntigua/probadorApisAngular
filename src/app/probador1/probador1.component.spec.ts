import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Probador1Component } from './probador1.component';

describe('Probador1Component', () => {
  let component: Probador1Component;
  let fixture: ComponentFixture<Probador1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Probador1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Probador1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
