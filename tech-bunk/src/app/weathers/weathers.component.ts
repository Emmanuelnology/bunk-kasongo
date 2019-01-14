import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

@Component({
  selector: 'app-weathers',
  templateUrl: './weathers.component.html',
  styleUrls: ['./weathers.component.css']
})
export class WeathersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
