import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInRightJobComponent } from './sign-in-right-job.component';

describe('SignInRightJobComponent', () => {
  let component: SignInRightJobComponent;
  let fixture: ComponentFixture<SignInRightJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInRightJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignInRightJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
