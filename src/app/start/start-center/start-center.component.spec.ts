import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCenterComponent } from './start-center.component';

describe('StartCenterComponent', () => {
  let component: StartCenterComponent;
  let fixture: ComponentFixture<StartCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartCenterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
