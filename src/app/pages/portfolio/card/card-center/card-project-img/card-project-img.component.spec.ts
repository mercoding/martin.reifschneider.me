import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjectImgComponent } from './card-project-img.component';

describe('CardProjectImgComponent', () => {
  let component: CardProjectImgComponent;
  let fixture: ComponentFixture<CardProjectImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProjectImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardProjectImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
