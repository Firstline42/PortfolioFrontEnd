import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivgeneralComponent } from './divgeneral.component';

describe('DivgeneralComponent', () => {
  let component: DivgeneralComponent;
  let fixture: ComponentFixture<DivgeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivgeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivgeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
