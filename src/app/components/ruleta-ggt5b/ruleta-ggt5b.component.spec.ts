import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuletaGgt5bComponent } from './ruleta-ggt5b.component';

describe('RuletaGgt5bComponent', () => {
  let component: RuletaGgt5bComponent;
  let fixture: ComponentFixture<RuletaGgt5bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuletaGgt5bComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RuletaGgt5bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
