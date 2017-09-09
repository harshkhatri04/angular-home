import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
	 public weatherList :any;

  constructor() { }

  ngOnInit() {
  }

// Update Movie List with data received from TMDB api
  updateWeatherList(event) {
  	this.weatherList = event;
  }
}