import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInRightPersonComponent } from './sign-in-right-person.component';

describe('SignInRightPersonComponent', () => {
  let component: SignInRightPersonComponent;
  let fixture: ComponentFixture<SignInRightPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInRightPersonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignInRightPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
