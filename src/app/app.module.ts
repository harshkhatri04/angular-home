import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherFavlistComponent } from './weather-favlist/weather-favlist.component';
import { WeatherService} from './weather-service';

const apiRoutes: Routes = [
{
  path: 'search',
  component: WeatherComponent
},
{
  path: 'fav-movies',
  component: WeatherFavlistComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherSearchComponent,
    WeatherListComponent,
    WeatherFavlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(apiRoutes)
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
