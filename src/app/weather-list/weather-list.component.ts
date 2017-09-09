import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather-service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

@Input() weatherList :any=[]

data :any =[]
  constructor(private WeatherService : WeatherService) { }
    
  ngOnInit() {

  }

   saveData(data){
         
         this.data={
         "name":data.name,
         "date":data.date,
         "maxtemp":data.day.maxtemp_c,
         "mintemp":data.day.mintemp_c
         
         };
         this.WeatherService.save(this.data).subscribe((data:any)=>{
         console.log(data);
         })

}



}
