import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PamigosComponent } from './pamigos.component';

describe('PamigosComponent', () => {
  let component: PamigosComponent;
  let fixture: ComponentFixture<PamigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PamigosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PamigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
