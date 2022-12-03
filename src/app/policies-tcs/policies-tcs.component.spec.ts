import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesTcsComponent } from './policies-tcs.component';

describe('PoliciesTcsComponent', () => {
  let component: PoliciesTcsComponent;
  let fixture: ComponentFixture<PoliciesTcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliciesTcsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliciesTcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
