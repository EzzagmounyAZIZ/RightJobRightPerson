import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPersonHomeComponent } from './right-person-home.component';

describe('RightPersonHomeComponent', () => {
  let component: RightPersonHomeComponent;
  let fixture: ComponentFixture<RightPersonHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightPersonHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightPersonHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
