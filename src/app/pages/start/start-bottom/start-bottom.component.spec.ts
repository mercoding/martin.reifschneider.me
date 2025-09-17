import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartBottomComponent } from './start-bottom.component';

describe('StartBottomComponent', () => {
  let component: StartBottomComponent;
  let fixture: ComponentFixture<StartBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartBottomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
