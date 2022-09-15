import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModoNocturnoComponent } from './modo-nocturno.component';

describe('ModoNocturnoComponent', () => {
  let component: ModoNocturnoComponent;
  let fixture: ComponentFixture<ModoNocturnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModoNocturnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModoNocturnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
