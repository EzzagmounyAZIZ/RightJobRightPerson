import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightJobHomeComponent } from './right-job-home.component';

describe('RightJobHomeComponent', () => {
  let component: RightJobHomeComponent;
  let fixture: ComponentFixture<RightJobHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightJobHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightJobHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
