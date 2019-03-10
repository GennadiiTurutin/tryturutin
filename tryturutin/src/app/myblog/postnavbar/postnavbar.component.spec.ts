import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostnavbarComponent } from './postnavbar.component';

describe('PostnavbarComponent', () => {
  let component: PostnavbarComponent;
  let fixture: ComponentFixture<PostnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
