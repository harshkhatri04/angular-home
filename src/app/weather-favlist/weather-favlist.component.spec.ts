import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFavlistComponent } from './weather-favlist.component';

describe('WeatherFavlistComponent', () => {
  let component: WeatherFavlistComponent;
  let fixture: ComponentFixture<WeatherFavlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherFavlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherFavlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
