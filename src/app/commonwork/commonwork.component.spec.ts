import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonworkComponent } from './commonwork.component';

describe('CommonworkComponent', () => {
  let component: CommonworkComponent;
  let fixture: ComponentFixture<CommonworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonworkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
