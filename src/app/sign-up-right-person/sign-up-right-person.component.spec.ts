import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpRightPersonComponent } from './sign-up-right-person.component';

describe('SignUpRightPersonComponent', () => {
  let component: SignUpRightPersonComponent;
  let fixture: ComponentFixture<SignUpRightPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpRightPersonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignUpRightPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
