import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../weather-service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
  public weathers : any = [];
         list :any =[];
         data :any = [];
         favdata : any = [];
  @Output() weatherList = new EventEmitter<any>();
  constructor(private WeatherService : WeatherService) { }

  ngOnInit() {
  }

searchweather(weather:any){
  	this.WeatherService.getOnlineWeather(weather).subscribe((res) => {
  		this.weathers = res;
  	  this.weatherList.emit(this.weathers);
  		console.log(this.weathers)
  	});
  }

   

}
