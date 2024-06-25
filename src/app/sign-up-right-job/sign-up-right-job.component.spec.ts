import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpRightJobComponent } from './sign-up-right-job.component';

describe('SignUpRightJobComponent', () => {
  let component: SignUpRightJobComponent;
  let fixture: ComponentFixture<SignUpRightJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpRightJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignUpRightJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
