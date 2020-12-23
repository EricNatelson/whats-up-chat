import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchFormComponent } from './twitch-form.component';

describe('TwitchFormComponent', () => {
  let component: TwitchFormComponent;
  let fixture: ComponentFixture<TwitchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
