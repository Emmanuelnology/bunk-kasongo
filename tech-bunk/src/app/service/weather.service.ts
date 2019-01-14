import { Injectable } from '@angular/core';


export interface IWeather {
  id: number;
  temp: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

export interface IWeatherAPI {
  main: IWeather[];
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }
}
