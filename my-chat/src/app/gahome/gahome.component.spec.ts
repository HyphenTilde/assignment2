import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GahomeComponent } from './gahome.component';

describe('GahomeComponent', () => {
  let component: GahomeComponent;
  let fixture: ComponentFixture<GahomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GahomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
