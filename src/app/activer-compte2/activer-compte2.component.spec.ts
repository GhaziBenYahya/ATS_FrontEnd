import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiverCompte2Component } from './activer-compte2.component';

describe('ActiverCompte2Component', () => {
  let component: ActiverCompte2Component;
  let fixture: ComponentFixture<ActiverCompte2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiverCompte2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiverCompte2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
