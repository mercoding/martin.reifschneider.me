import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartRightComponent } from './start-right.component';

describe('StartRightComponent', () => {
  let component: StartRightComponent;
  let fixture: ComponentFixture<StartRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartRightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
