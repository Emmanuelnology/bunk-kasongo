import { Injectable } from '@angular/core';


export interface IWeather {
  _id: number;
  temp: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

export interface IWeatherAPI {
  all: IWeather[];
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }
}
