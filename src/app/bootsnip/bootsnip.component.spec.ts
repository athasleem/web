import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootsnipComponent } from './bootsnip.component';

describe('BootsnipComponent', () => {
  let component: BootsnipComponent;
  let fixture: ComponentFixture<BootsnipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootsnipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootsnipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
