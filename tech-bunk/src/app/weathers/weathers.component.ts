import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IWeather {
  id: number;
  temp: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

export interface IWeatherAPI {
  all: IWeather[];
}

@Component({
  selector: 'app-weathers',
  templateUrl: './weathers.component.html',
  styleUrls: ['./weathers.component.css']
})
export class WeathersComponent implements OnInit {
  private weathers: Observable<IWeatherAPI>;
  constructor(private http: HttpClient) { }

  public ngOnInit() {
    this.weathers = this.http.get<IWeatherAPI>("https://samples.openweathermap.org/data/2.5/group?id=2643744,4749005,4219762&units=metric&APPID=f4bbeb8ec1a8fb95591f2cf112aaa575");
  }

}
