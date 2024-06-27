import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavNavComponent } from './side-nav-nav.component';

describe('SideNavNavComponent', () => {
  let component: SideNavNavComponent;
  let fixture: ComponentFixture<SideNavNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideNavNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
