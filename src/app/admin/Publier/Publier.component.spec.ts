import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteUtlisateurComponent } from './Publier.component';

describe('AjouteUtlisateurComponent', () => {
  let component: AjouteUtlisateurComponent;
  let fixture: ComponentFixture<AjouteUtlisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteUtlisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteUtlisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
