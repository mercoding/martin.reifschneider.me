import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartTopComponent } from './start-top.component';

describe('StartTopComponent', () => {
  let component: StartTopComponent;
  let fixture: ComponentFixture<StartTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
