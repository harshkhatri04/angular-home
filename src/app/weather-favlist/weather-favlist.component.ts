import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather-service';
@Component({
  selector: 'app-weather-favlist',
  templateUrl: './weather-favlist.component.html',
  styleUrls: ['./weather-favlist.component.css']
})
export class WeatherFavlistComponent implements OnInit {
  
  @Input() weatherFavList :any=[]

  constructor(private WeatherService : WeatherService) { }
  data:any=[];
    list:any=[];
  

  ngOnInit() {


   this.WeatherService.favList()
        .subscribe((data)=>{
          this.list=data;
        })

 
  }

  /* getFavoritesList(){

   this.WeatherService.favList()
        .subscribe((data)=>{
          this.list=data;
        })

 }*/

    delete(data:any) {
   this.WeatherService.delete(data)
   .subscribe(res=>{
     this.data=res
     console.log(this.data)
   })
 }

 

  
}
