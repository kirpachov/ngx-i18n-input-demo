import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WCustomComponentComponent } from './w-custom-component.component';

describe('WCustomComponentComponent', () => {
  let component: WCustomComponentComponent;
  let fixture: ComponentFixture<WCustomComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ WCustomComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WCustomComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
