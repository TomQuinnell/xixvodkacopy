import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DobPageComponent } from './dob-page.component';

describe('DobPageComponent', () => {
  let component: DobPageComponent;
  let fixture: ComponentFixture<DobPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DobPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DobPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
