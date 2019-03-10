import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogaboutComponent } from './blogabout.component';

describe('BlogaboutComponent', () => {
  let component: BlogaboutComponent;
  let fixture: ComponentFixture<BlogaboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogaboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
