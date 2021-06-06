import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSucessComponent } from './modal-sucess.component';

describe('ModalSucessComponent', () => {
  let component: ModalSucessComponent;
  let fixture: ComponentFixture<ModalSucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSucessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
