import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningdecorComponent } from './learningdecor.component';

describe('LearningdecorComponent', () => {
  let component: LearningdecorComponent;
  let fixture: ComponentFixture<LearningdecorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningdecorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearningdecorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
