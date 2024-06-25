import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideRightJobComponent } from './guide-right-job.component';

describe('GuideRightJobComponent', () => {
  let component: GuideRightJobComponent;
  let fixture: ComponentFixture<GuideRightJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuideRightJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuideRightJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
