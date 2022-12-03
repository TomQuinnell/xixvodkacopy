import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DobPageModalComponent } from './dob-page-modal.component';

describe('DobPageModalComponent', () => {
  let component: DobPageModalComponent;
  let fixture: ComponentFixture<DobPageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DobPageModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DobPageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
