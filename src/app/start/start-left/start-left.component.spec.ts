import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartLeftComponent } from './start-left.component';

describe('StartLeftComponent', () => {
  let component: StartLeftComponent;
  let fixture: ComponentFixture<StartLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
