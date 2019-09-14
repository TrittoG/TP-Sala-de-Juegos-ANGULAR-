import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocidadClickComponent } from './velocidad-click.component';

describe('VelocidadClickComponent', () => {
  let component: VelocidadClickComponent;
  let fixture: ComponentFixture<VelocidadClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VelocidadClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VelocidadClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
