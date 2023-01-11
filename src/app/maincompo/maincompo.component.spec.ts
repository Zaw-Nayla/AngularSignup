import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincompoComponent } from './maincompo.component';

describe('MaincompoComponent', () => {
  let component: MaincompoComponent;
  let fixture: ComponentFixture<MaincompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaincompoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaincompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
