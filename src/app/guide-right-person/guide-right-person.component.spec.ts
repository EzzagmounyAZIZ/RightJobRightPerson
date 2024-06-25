import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideRightPersonComponent } from './guide-right-person.component';

describe('GuideRightPersonComponent', () => {
  let component: GuideRightPersonComponent;
  let fixture: ComponentFixture<GuideRightPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuideRightPersonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuideRightPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
